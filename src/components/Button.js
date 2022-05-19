import * as React from "react";
import Button from "@mui/material/Button";

function Btn(props) {
  return (
    <Button
      variant="contained"
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
export default Btn;
