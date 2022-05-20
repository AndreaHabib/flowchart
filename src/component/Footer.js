import React, { Fragment, useState, useEffect } from "react";
import "./styles/Footer.css";
import { Typography, Link } from "@mui/material";
import { useLocation } from "react-router-dom";

export default function Footer() {
  const location = useLocation();
  const [className, setClassName] = useState("footer");

  useEffect(() => {
    if (location.pathname === "/flowchart-cat2013-2018") {
      setClassName("footer3");
    } else if (location.pathname === "/flowchart-cat2018-2020") {
      setClassName("footer2");
    } else if (location.pathname === "/flowchart-cat2020-2021") {
      setClassName("footer4");
    } else if (location.pathname === "/flowchart-cat2021-2023") {
      setClassName("footer1");
    } else if (location.pathname === "/flowchart-aas-cat2022-2023") {
      setClassName("footer5");
    } else if (location.pathname === "/auth") {
      setClassName("authFooter");
    } else {
      setClassName("footer");
    }
  }, [location]);

  return (
    <Fragment>
      <footer className={className}>
        <Typography variant="h6">
          CUNY2X - CSI Computer Science Department
        </Typography>
        <Typography variant="h6">
          This is intended to be used only as a guide.
        </Typography>
        <Link color="inherit" href="https://andreahabib.netlify.app/">
          By Andrea Habib
        </Link>
      </footer>
    </Fragment>
  );
}
