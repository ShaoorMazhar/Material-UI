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
          <Typography variant="h5" color="#212121">
            Company Name
          </Typography>
          <Grid
            sx={{
              width: "22%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
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
            <Link
              href="#"
              sx={{ color: "black", textDecoration: "none", fontWeight: "700" }}
            >
              Enterprise
            </Link>
            <Link
              href="#"
              sx={{ color: "black", textDecoration: "none", fontWeight: "700" }}
            >
              Support
            </Link>
            <PrimaryButton name="Login" />
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
