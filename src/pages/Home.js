import React, { Fragment } from "react";
import { Stack, Alert, Typography, List, ListItem } from "@mui/material";

export default function Home() {
  return (
    <Fragment>
      <Stack mt={12} sx={{ width: "80%" }} spacing={2}>
        <Alert variant="outlined" severity="info">
          <Typography variant="h6">
            How to find your respective flowchart:
          </Typography>
          <List>
            <ListItem>
              <Typography variant="body1">
                1. Go to Degreeworks:{" "}
                <a
                  rel="noreferrer noopener"
                  target="_blank"
                  href="https://degreeworks.cuny.edu/Dashboard_si/dashboard"
                >
                  Click here to go to Degreeworks
                </a>
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body1">
                2. You will be able to see your academic catalog year on the
                same line as Bacholar of Computer Science:
              </Typography>
            </ListItem>
            <img
              style={{ width: "100%", height: "auto" }}
              src="https://res.cloudinary.com/andreahabib/image/upload/v1645115452/Screen_Shot_2022-02-17_at_11.17.59_AM_j0gxlb.png"
              alt="degreeworks"
            ></img>
            <ListItem>
              <Typography variant="body1">
                3. Select the flowchart based on the year specified on your
                degreeworks
              </Typography>
            </ListItem>
          </List>
        </Alert>
        <Alert variant="outlined" severity="info"></Alert>
        <Alert variant="outlined" severity="info"></Alert>
        <Alert variant="outlined" severity="info"></Alert>
        <Alert variant="outlined" severity="info"></Alert>
      </Stack>
    </Fragment>
  );
}
