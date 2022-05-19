import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import PrimaryButton from "./PrimaryButton";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
export default function DenseAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          variant="dense"
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Grid container sm={5} xs={12}>
            <Typography variant="h5" color="#212121">
              Company Name
            </Typography>{" "}
          </Grid>
          <Grid
            container
            spacing={1}
            lg={3}
            md={6}
            sm={10}
            xs={12}
            sx={{
              padding: "2px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Grid item sm={3}>
              <Link
                href="#"
                sx={{
                  color: "black",
                  textDecoration: "none",
                  fontWeight: "700",
                  border: "2px solid black",
                }}
              >
                Features
              </Link>
            </Grid>
            <Grid item sm={3}>
              <Link
                href="#"
                sx={{
                  color: "black",
                  textDecoration: "none",
                  fontWeight: "700",
                }}
              >
                Enterprise
              </Link>
            </Grid>
            <Grid item sm={3} xs={12}>
              <Link
                href="#"
                sx={{
                  color: "black",
                  textDecoration: "none",
                  fontWeight: "700",
                }}
              >
                Support
              </Link>
            </Grid>
            <Grid item md={3} sm={12}>
              <PrimaryButton name="Login" />{" "}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
