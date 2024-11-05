import { useParams } from "react-router-dom";
import { DudoI, mockedDudos } from "../../types";
import { PageLayout } from "../../components/PageLayout";
import { BetAvatar } from "../../components/BetAvatar";
import styled from "styled-components";
import { StyledP } from "./FeedPage";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { useLocalization } from "../../hooks/useLocalization";
import { Avatar, Button, CircularProgress } from "@mui/material";
import { FavoriteIcon } from "../../components/FavoriteIcon";

const DetailsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

const StyledH2 = styled.h2`
  margin: 0;
`;

const LeftColumn = styled.div`
  text-align: start;
`;

const RightColumn = styled.div`
  text-align: end;
`;

const DetailsContent = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-bottom: 1rem;
`;

const DetailsFooter = styled.div`
  display: flex;
  justify-content: space-around;
`;

function getDudoById(id: number) {
  return mockedDudos.find((bet) => bet.id === id);
}

export function DetailsPage(): JSX.Element {
  const id = useParams<{ id: string }>().id;
  const dudo = getDudoById(Number(id));
  const { formatCurrency } = useLocalization();

  const prize = dudo?.bets.reduce((acc, payment) => acc + payment.amount, 0);

  function calcWinCondition(value: number): string {
    return `${value * 100}%`;
  }

  return (
    <PageLayout>
      {dudo ? (
        <>
          <DetailsHeader>
            <LeftColumn>
              <StyledH2>{dudo?.title}</StyledH2>
              <StyledP>{dudo?.description}</StyledP>
              <StyledP>
                Criado em {dudo?.createdAt.toDateString()} por{" "}
                {dudo?.creator.name}
              </StyledP>
              <StyledP>Finaliza em {dudo.deadline.toDateString()}</StyledP>
            </LeftColumn>
            <RightColumn>
              <FavoriteIcon favorited={dudo.favorited} />
            </RightColumn>
          </DetailsHeader>
          <DetailsContent>
            <LeftColumn>
              <div>
                <h3>Acumulado atual</h3>
                {prize && <p>{formatCurrency(prize)}</p>}
              </div>
              <div>
                <h3>Regra de aceite</h3>
                <StyledP>{`Votação com maioria de ${calcWinCondition(
                  dudo.winCondition
                )}`}</StyledP>
              </div>
              <Lances dudo={dudo} />
              <Grupo dudo={dudo} />
            </LeftColumn>
          </DetailsContent>
          <DetailsFooter>
            <Button variant="contained" color="error">
              Sair do Dudo
            </Button>
            <Button variant="contained" color="success">
              Pagar
            </Button>
          </DetailsFooter>
        </>
      ) : (
        <CircularProgress />
      )}
    </PageLayout>
  );
}

const DetailsContentColumn = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
`;

function Lances(props: { dudo: DudoI }): JSX.Element {
  const { formatCurrency } = useLocalization();

  return (
    <div>
      <h3>Lances</h3>
      {props?.dudo.bets.map((bet) => (
        <DetailsContent>
          <BetAvatar paymentStatus={bet.payment} />
          <DetailsContentColumn>
            <div>
              {" "}
              {bet.user.name} - {formatCurrency(bet.amount)}
            </div>
            {bet.option}
          </DetailsContentColumn>
        </DetailsContent>
      ))}
    </div>
  );
}

function Grupo(props: { dudo: DudoI }): JSX.Element {
  return (
    <div>
      <h3>{props.dudo.group.name}</h3>
      {props.dudo.group.users.map((user) => (
        <DetailsContent>
          <Avatar />
          {user.name}
        </DetailsContent>
      ))}
    </div>
  );
}
