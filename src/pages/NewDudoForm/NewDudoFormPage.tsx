import { useState } from "react";
import { PageLayout } from "../../components/PageLayout";
import {
  mockedGroup,
  mockedUsers,
  NewDudoFormDataI,
  UserGroupI,
  UserI,
} from "../../types";
import {
  Avatar,
  AvatarGroup,
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import styled from "styled-components";
import { MobileDateTimePicker } from "@mui/x-date-pickers";
import { border, color, styled as muiStyled } from "@mui/system";
import { FriendSelector } from "../../components/FriendSelector";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormFooter = styled.div`
  display: flex;
  justify-content: space-around;
`;

const StyledFormControl = muiStyled(FormControl)({
  marginBottom: "1rem",
});

export function NewDudoFormPage(): JSX.Element {
  const [newDudoFormData, setNewDudoFormData] = useState<NewDudoFormDataI>({});

  return (
    <PageLayout title="Criar Dudo">
      <FormContainer>
        <StyledFormControl variant="standard">
          <InputLabel>Dê um nome ao seu Dudo!</InputLabel>
          <Input
            value={newDudoFormData?.title}
            onChange={(e) =>
              setNewDudoFormData({
                ...newDudoFormData,
                title: e.target.value,
              })
            }
          />
          <FormHelperText>Tipo: Final da Champions League 2024</FormHelperText>
        </StyledFormControl>

        <StyledFormControl variant="standard">
          <InputLabel>Explique um pouco sobre ele</InputLabel>
          <Input
            value={newDudoFormData?.description}
            onChange={(e) =>
              setNewDudoFormData({
                ...newDudoFormData,
                description: e.target.value,
              })
            }
          />
          <FormHelperText>
            Tipo: Palpite do final da Champions, entrada a vontade!
          </FormHelperText>
        </StyledFormControl>

        <StyledFormControl>
          <MobileDateTimePicker label={"Finaliza em:"} />
        </StyledFormControl>

        <StyledFormControl fullWidth>
          <InputLabel>Condição de vitória</InputLabel>
          <Select
            value={newDudoFormData?.winCondition}
            onChange={(e) =>
              setNewDudoFormData({
                ...newDudoFormData,
                winCondition: Number(e.target.value),
              })
            }
            label="Condição de vitória"
          >
            <MenuItem value={0.51}>Mais da metade</MenuItem>
            <MenuItem value={1}>Unânime</MenuItem>
          </Select>
        </StyledFormControl>

        <GroupSelector
          newDudoFormData={newDudoFormData}
          setNewDudoFormData={setNewDudoFormData}
        />

        <FriendSelector />

        <FormFooter>
          <Button variant="contained" color="success">
            Criar Dudo
          </Button>
        </FormFooter>
      </FormContainer>
    </PageLayout>
  );
}

const GroupsDiv = styled.div`
  display: flex;
  justify-content: space-around;
`;

const GroupDiv = styled.div<{ selected?: boolean }>`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  transition: transform 0.3s;
  width: fit-content;
  padding: 0.3rem;
  border-radius: 0.5rem;
  ${(props) =>
    props.selected &&
    `transform: scale(1.1);
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);`};
`;

interface GroupSelectorProps {
  newDudoFormData: NewDudoFormDataI;
  setNewDudoFormData: (e: NewDudoFormDataI) => void;
}

function GroupSelector(props: GroupSelectorProps): JSX.Element {
  const { newDudoFormData, setNewDudoFormData } = props;
  const selectedGroup: UserGroupI | undefined = newDudoFormData.group;

  function handleAddNewGroup(group: UserGroupI) {
    if (group === selectedGroup) {
      setNewDudoFormData({
        ...newDudoFormData,
        group: undefined,
      });
    } else {
      setNewDudoFormData({
        ...newDudoFormData,
        group,
      });
    }
  }

  return (
    <div>
      <h3>Adicionar um grupo</h3>
      <GroupsDiv>
        {mockedGroup.map((group) => (
          <GroupDiv
            onClick={() => handleAddNewGroup(group)}
            selected={group === selectedGroup}
          >
            {group.name}
            <AvatarGroup max={5}>
              {group.users.map((member) => (
                <Avatar />
              ))}
            </AvatarGroup>
          </GroupDiv>
        ))}
      </GroupsDiv>
    </div>
  );
}
