import AppBar from "@mui/material/AppBar";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";
import MainInteractiveComponent from "./components/MainInteractiveComponent";
import ChatComponent from "./components/ChatComponent";

export default function App() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
	  <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              	APP Name Goes Here
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <MainInteractiveComponent />
          </Grid>
          <Grid item xs={4}>
            <ChatComponent />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
