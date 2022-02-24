import React, { Fragment } from "react";
import "./styles/Footer.css";
import { Typography } from "@mui/material";

export default function Footer() {
  return (
    <Fragment>
      <footer className="footer">
        <Typography variant="h6">
          CUNY2X - CSI Computer Science Department
        </Typography>
        <Typography variant="h6">
          This is intended to be used only as a guide.
        </Typography>
      </footer>
    </Fragment>
  );
}
