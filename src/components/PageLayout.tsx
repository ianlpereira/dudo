import {
  AddOutlined,
  Feed,
  Group,
  Home,
  Menu,
  Person,
} from "@mui/icons-material";
import {
  Avatar,
  Divider,
  Drawer,
  DrawerProps,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import miniLogo from "../assets/minilogo.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";

interface PageLayoutProps {
  title?: string;
  children: React.ReactNode;
}

export function PageLayout(props: PageLayoutProps): JSX.Element {
  const { title, children } = props;

  return (
    <div>
      <Header />
      <Divider
        sx={{
          borderColor: "rgba(255, 255, 255, 0.2)",
          marginBottom: "1rem",
        }}
      />
      {title && <h2>{title}</h2>}
      {children}
    </div>
  );
}

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

function Header(): JSX.Element {
  const [open, setOpen] = useState(false);
  return (
    <StyledHeader>
      <IconButton onClick={() => setOpen(true)}>
        <Menu
          sx={{
            color: "white",
            fontSize: "2rem",
          }}
        />
      </IconButton>
      <LeftDrawer open={open} onClose={() => setOpen(false)} />

      <MiniLogo />

      <IconButton>
        <Avatar />
      </IconButton>
    </StyledHeader>
  );
}

const OptionDiv = styled(Link)`
  display: flex;
  margin: 0.5rem;
  gap: 0.5rem;
`;

function LeftDrawer(props: DrawerProps): JSX.Element {
  return (
    <Drawer {...props}>
      <OptionDiv to={"/"}>
        <Home />
        Home
      </OptionDiv>
      <OptionDiv to={"/newDudo"}>
        <AddOutlined />
        Criar novo Dudo
      </OptionDiv>
      <OptionDiv to={"/groups"}>
        <Group />
        Grupos
      </OptionDiv>
      <OptionDiv to={"/friends"}>
        <Person />
        Amigos
      </OptionDiv>
    </Drawer>
  );
}

function MiniLogo(): JSX.Element {
  return <img src={miniLogo} alt="Logo" width={100} />;
}
