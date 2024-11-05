import { Avatar } from "@mui/material";
import { PageLayout } from "../../components/PageLayout";
import { mockedUsers } from "../../types";
import styled from "styled-components";

const FriendDiv = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export function FriendsPage(): JSX.Element {
  return (
    <PageLayout title="Friends Page">
      {mockedUsers.map((user) => (
        <FriendDiv>
          <Avatar />
          <h3>{user.name}</h3>
        </FriendDiv>
      ))}
    </PageLayout>
  );
}
