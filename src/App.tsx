import { createTheme } from "@mui/material";
import "./App.css";
import { LoginPage } from "./pages/Login/LoginPage";
import { ThemeProvider } from "@mui/material/styles";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FeedPage } from "./pages/Feed/FeedPage";
import { DetailsPage } from "./pages/Feed/DetailsPage";
import { NewDudoFormPage } from "./pages/NewDudoForm/NewDudoFormPage";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { GroupsPage } from "./pages/Groups/GroupsPage";
import { GroupDetailsPage } from "./pages/Groups/GroupDetailsPage";
import { FriendsPage } from "./pages/Friends/FriendsPage";

const theme = createTheme({});

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <FeedPage />,
  },
  {
    path: "/details/:id",
    element: <DetailsPage />,
  },
  {
    path: "/newDudo",
    element: <NewDudoFormPage />,
  },
  {
    path: "/groups",
    element: <GroupsPage />,
  },
  {
    path: "/groups/:id",
    element: <GroupDetailsPage />,
  },
  {
    path: "/friends",
    element: <FriendsPage />,
  },
]);

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </LocalizationProvider>
  );
}

export default App;
