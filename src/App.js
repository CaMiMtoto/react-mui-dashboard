
import { Outlet, useNavigate } from "react-router-dom";

import { Copyright } from "./components/Copyright";
import Navbar from "./components/Navbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { useEffect } from "react";
const mdTheme = createTheme();
function App() {
  let navigate = useNavigate();
  // redirect to dashboard on load if current path is /
  useEffect(() => {
    if (window.location.pathname === "/") {
      navigate("/dashboard");
    }
  }, [navigate]);


  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Navbar />

        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: "calc(100vh - 130px)" }}>
            <Outlet />
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
