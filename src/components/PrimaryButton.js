import React from "react";
import Button from "@mui/material/Button";
export default function PrimaryButton(props) {
  return (
    <Button
      variant="outlined"
      color="info"
      sx={{
        borderRadius: "13px",
        fontWeight: "bold",
        textTransform: "capitalize",
      }}
    >
      {props.name}
    </Button>
  );
}
