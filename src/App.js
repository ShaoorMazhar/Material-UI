import "./App.css";
import Btn from './components/Button';
import Grid from "@mui/material/Grid";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import PrimarySearchAppBar from "./components/Appbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container>
        <Grid item xs={12}>
          <PrimarySearchAppBar />
        </Grid>
        <Grid
          container
          sx={{display: "flex", justifyContent: "center" }}
        >
          <Grid
            container
            maxWidth={"md"}
            mt={9}
          >
            <Grid item xs={2}></Grid>
            <Grid item xs={8}>
              <Box
                component="span"
                sx={{
                  color: "primary.dark",
                  display: "flex",
                  justifyContent: "center",
                  fontSize: "1.6rem",
                }}
              >
                <Typography variant="h4">Pricing</Typography>
              </Box>
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={8}>
              <Box
                component="span"
                sx={{
                  color: "secondary.dark",
                  display: "flex",
                  justifyContent: "center",
                  
                }}
              >
                <Typography variant="h6">
                  Quickly build an effective pricing table for your potential
                  customers with this layout. It's built with default MUI
                  components with little customization.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={12} sx={{
              display:"flex",
              alignItems:"center",
              justifyContent:"center",
            }}>
            <Btn/>
          </Grid>
          </Grid>
          
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
