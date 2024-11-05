import { useParams } from "react-router-dom";
import { PageLayout } from "../../components/PageLayout";
import { mockedGroup } from "../../types";
import styled from "styled-components";
import { Avatar, Divider, IconButton } from "@mui/material";
import { Close, Remove } from "@mui/icons-material";
import { FriendSelector } from "../../components/FriendSelector";

const UserMemberOutterDiv = styled.div`
  display: flex;
  gap: 1rem;
  align-items: start;
  flex-direction: column;
`;

const UserMemberInnerDiv = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const AvatarDiv = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export function GroupDetailsPage(): JSX.Element {
  const { id } = useParams<{ id: string }>();
  const group = mockedGroup.find((group) => group.id === Number(id));

  return (
    <PageLayout title="Group Details Page">
      <FriendSelector />

      <div>
        <h2>{group?.name}</h2>
        <UserMemberOutterDiv>
          {group!.users.map((member) => (
            <div style={{ width: "100%" }}>
              <UserMemberInnerDiv>
                <AvatarDiv>
                  <Avatar />
                  <div>{member.name}</div>
                </AvatarDiv>
                <div>
                  <IconButton>
                    <Close sx={{ color: "red" }} />
                  </IconButton>
                </div>
              </UserMemberInnerDiv>
              <Divider
                sx={{
                  margin: "1rem 0",
                  borderColor: "white",
                }}
              />
            </div>
          ))}
        </UserMemberOutterDiv>
      </div>
    </PageLayout>
  );
}
