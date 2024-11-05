import { AccountCircle, Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, Button, Icon, IconButton, TextField } from "@mui/material";
import { useState } from "react";
import logo from "../../assets/svgexport-35.svg";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export function LoginPage(): JSX.Element {
  return (
    <div>
      <img src={logo} alt="logo" width={300} />
      <LoginForm />
    </div>
  );
}

const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 4rem;
`;

const SocialMediaLoginDiv = styled.div`
  display: flex;
  gap: 1rem;
`;

function LoginForm(): JSX.Element {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  function handleLogin(): void {
    navigate("/");
  }

  return (
    <FormDiv>
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <TextField
          id="input-with-sx"
          label="Username"
          variant="filled"
          slotProps={{
            input: {
              endAdornment: <AccountCircle sx={{ mr: 1, my: 0.5 }} />,
            },
          }}
        />
      </Box>

      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <TextField
          id="input-with-sx"
          label="Password"
          variant="filled"
          type={showPassword ? "text" : "password"}
          slotProps={{
            input: {
              endAdornment: (
                <Box
                  onClick={() => setShowPassword(!showPassword)}
                  sx={{ cursor: "pointer" }}
                >
                  {showPassword ? (
                    <Visibility sx={{ mr: 1, my: 0.5 }} />
                  ) : (
                    <VisibilityOff sx={{ mr: 1, my: 0.5 }} />
                  )}
                </Box>
              ),
            },
          }}
        />
      </Box>

      <Button variant="contained" onClick={handleLogin}>
        Login
      </Button>

      <SocialMediaLoginDiv>
        <IconButton>
          <img
            src="https://img.icons8.com/color/48/000000/google-logo.png"
            alt="google"
          />
        </IconButton>
        <IconButton>
          <img
            src="https://img.icons8.com/color/48/000000/facebook-new.png"
            alt="facebook"
          />
        </IconButton>
        <IconButton>
          <img
            src="https://img.icons8.com/color/48/000000/twitter--v1.png"
            alt="twitter"
          />
        </IconButton>
      </SocialMediaLoginDiv>
    </FormDiv>
  );
}
