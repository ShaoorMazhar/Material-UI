import React from "react";
import Link from "@mui/material/Link";
export default function CustomLink(props) {
  return (
    <Link
      sx={{
        color: "#3E5060",
        fontSize: "1.1rem",
        fontWeight: 700,
        textDecoration: "none",
      }}
      href="#"
    >
      {props.text}
    </Link>
  );
}
