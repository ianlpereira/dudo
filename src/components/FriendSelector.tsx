import { FormControl, InputLabel, Input, Avatar } from "@mui/material";
import { useState } from "react";
import { UserI, mockedUsers } from "../types";
import styled from "styled-components";

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

const FriendsDiv = styled.div`
  display: flex;
  justify-content: space-around;
`;

export function FriendSelector(): JSX.Element {
  const [selectedFriends, setSelectedFriends] = useState<UserI[]>([]);
  const [search, setSearch] = useState<string>("");
  const filteredUsers = mockedUsers.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  function handleAddFriend(user: UserI) {
    if (selectedFriends.includes(user)) {
      setSelectedFriends(selectedFriends.filter((friend) => friend !== user));
    } else {
      setSelectedFriends([...selectedFriends, user]);
    }
  }

  return (
    <div>
      <h3>Adicionar um amigo</h3>
      <FormControl
        variant="standard"
        sx={{
          marginBottom: 2,
        }}
        fullWidth
      >
        <InputLabel>Buscar</InputLabel>
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Digite o nome do amigo"
        />
      </FormControl>

      <FriendsDiv>
        {filteredUsers.map((user) => (
          <GroupDiv
            onClick={() => handleAddFriend(user)}
            selected={selectedFriends.includes(user)}
          >
            {user.name}
            <Avatar />
          </GroupDiv>
        ))}
      </FriendsDiv>
    </div>
  );
}
