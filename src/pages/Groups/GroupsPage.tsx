import { Avatar, Divider, IconButton } from "@mui/material";
import { mockedGroup } from "../../types";
import styled from "styled-components";
import { PageLayout } from "../../components/PageLayout";
import { Edit } from "@mui/icons-material";
import { Link } from "react-router-dom";

const UserMemberDiv = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
`;

const GroupDiv = styled.div<{ selected?: boolean }>`
  margin-bottom: 1rem;
`;

const GroupNameDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export function GroupsPage(): JSX.Element {
  return (
    <PageLayout title="Groups Page">
      {mockedGroup.map((group) => (
        <div>
          <GroupNameDiv>
            <h2>{group.name}</h2>
            <Link to={`/groups/${group.id}`}>
              <IconButton sx={{ color: "white" }}>
                <Edit />
              </IconButton>
            </Link>
          </GroupNameDiv>
          <UserMemberDiv>
            {group.users.map((member) => (
              <UserMemberDiv>
                <Avatar />
                <div>{member.name}</div>
              </UserMemberDiv>
            ))}
          </UserMemberDiv>
          <Divider
            sx={{
              margin: "1rem 0",
              borderColor: "white",
            }}
          />
        </div>
      ))}
    </PageLayout>
  );
}
