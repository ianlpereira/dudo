import { FormControl, InputLabel, Input, Button } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import { FriendSelector } from "../../components/FriendSelector";
import { PageLayout } from "../../components/PageLayout";
import { UserI } from "../../types";
import { styled as muiStyled } from "@mui/system";

const AddGroupDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledFormControl = muiStyled(FormControl)({
  marginBottom: "1rem",
});

export function AddNewGroupPage(): JSX.Element {
  const [groupName, setGroupName] = useState<string>("");
  const [groupUsers, setGroupUsers] = useState<UserI[]>([]);

  return (
    <PageLayout title="Criar Novo Grupo">
      <>
        <AddGroupDiv>
          <StyledFormControl variant="standard" required>
            <InputLabel>Nome do Grupo</InputLabel>
            <Input
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
            />
          </StyledFormControl>

          <FriendSelector />
        </AddGroupDiv>

        <Button
          variant="contained"
          color="success"
          disabled={groupName == "" || groupUsers.length == 0}
        >
          Criar
        </Button>
      </>
    </PageLayout>
  );
}
