import styled from "styled-components";
import { PageLayout } from "../../components/PageLayout";
import { AvatarGroup, IconButton } from "@mui/material";
import { ArrowForward, Favorite, FavoriteBorder } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { DudoI, mockedDudos } from "../../types";
import { BetAvatar } from "../../components/BetAvatar";
import { FavoriteIcon } from "../../components/FavoriteIcon";

const FeedPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export function FeedPage(): JSX.Element {
  return (
    <PageLayout>
      <FeedPageContainer>
        {mockedDudos.map((dudo, index) => (
          <FeedCard key={index} dudo={dudo} />
        ))}
      </FeedPageContainer>
    </PageLayout>
  );
}

const Card = styled.div`
  padding: 1rem;
  background-color: #0075ae;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

const CardContent = styled.div`
  text-align: start;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  align-items: center;
`;

const StyledH3 = styled.h3`
  margin: 0;
  text-align: start;
`;

export const StyledP = styled.p`
  margin: 0;
`;

const ParticipantsDiv = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

interface FeedCardProps {
  dudo: DudoI;
}

function FeedCard(props: FeedCardProps): JSX.Element {
  const { dudo } = props;

  const prize = dudo.bets.reduce((acc, payment) => acc + payment.amount, 0);
  const truePayments = dudo.bets.filter((bet) => bet.payment === true);

  return (
    <Card>
      <CardHeader>
        <StyledH3>
          <strong>{dudo.title}</strong>
        </StyledH3>

        <IconButton>
          <FavoriteIcon favorited={dudo.favorited} />
        </IconButton>
      </CardHeader>
      <CardContent>
        <StyledP>{dudo.description}</StyledP>
        <StyledP>Prêmio acumulado: R$ {prize}</StyledP>
      </CardContent>

      <CardFooter>
        <ParticipantsDiv>
          <AvatarGroup max={4} sx={{ flexDirection: "row" }}>
            {dudo.bets.map((user, index) => (
              <BetAvatar key={index} paymentStatus={user.payment} />
            ))}
          </AvatarGroup>
          <StyledP>
            {truePayments.length}/{dudo.bets.length} pagos
          </StyledP>
        </ParticipantsDiv>
        <Link to={`/details/${dudo.id}`}>
          <IconButton>
            <ArrowForward sx={{ color: "white", fontSize: "1.5rem" }} />
          </IconButton>
        </Link>
      </CardFooter>
    </Card>
  );
}
