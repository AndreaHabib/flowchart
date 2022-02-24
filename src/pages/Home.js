import React, { Fragment } from "react";
import { Stack, Alert, Typography, Button, Box } from "@mui/material";

export default function Home() {
  return (
    <Fragment>
      <Stack mb={5} mt={12} sx={{ width: "90%" }} spacing={2}>
        <Alert variant="outlined" severity="info">
          <Typography variant="h6">CS Advisement toolkit</Typography>
          <Typography variant="body1">
            This toolkit is designed to assist students in the process of course
            selection and planning. You will use Degreeworks, and a prerequisite
            flowchart to see which CSC courses are required and for which you
            are eligible. Please follow the steps below to get started.
          </Typography>
        </Alert>
        <Alert sx={{ textAlign: "left" }} variant="outlined" severity="info">
          <Typography variant="h6">Step 1:</Typography>
          <Typography mb={3} variant="body1">
            Obtain your catalog year from DegreeWorks and return to this page.
          </Typography>
          <Button
            variant="contained"
            size="small"
            rel="noreferrer noopener"
            target="_blank"
            href="https://degreeworks.cuny.edu/Dashboard_si/dashboard"
            component="a"
          >
            DegreeWorks
          </Button>
        </Alert>
        <Alert sx={{ textAlign: "left" }} variant="outlined" severity="info">
          <Typography variant="h6">Step 2:</Typography>
          <Typography mb={3} variant="body1">
            Select your prerequisite flowchart from the menu below based on your
            catalog year obtained in step 1.
          </Typography>
        </Alert>
        <Alert variant="outlined" severity="info">
          <Typography variant="h6">Where to find your catalog year:</Typography>
          <Box
            sx={{
              display: { xs: "none", sm: "none", md: "block", lg: "block" },
            }}
          >
            <img
              style={{ width: "80%", height: "auto" }}
              src="https://res.cloudinary.com/andreahabib/image/upload/v1645115452/Screen_Shot_2022-02-17_at_11.17.59_AM_j0gxlb.png"
              alt="degreeworks"
            ></img>
          </Box>
          <Box
            sx={{
              display: { xs: "block", sm: "block", md: "none", lg: "none" },
            }}
          >
            <img
              style={{ width: "100%", height: "auto" }}
              src="https://res.cloudinary.com/andreahabib/image/upload/v1645382846/Screen_Shot_2022-02-20_at_1.42.55_PM_oaidcl.png"
              alt="degreeworks"
            ></img>
          </Box>
        </Alert>
        <Alert sx={{ textAlign: "left" }} variant="outlined" severity="info">
          <Typography variant="h6">What is a flowchart?</Typography>
          <Typography variant="body1">
            A flowchart is a visual representation of the prerequisites to help
            you understand the required CSC curriculum and their prerequisites.
          </Typography>
        </Alert>
        {/* <Alert sx={{ textAlign: "left" }} variant="outlined" severity="info">
          <Typography variant="h6">What is a checklist?</Typography>
          <Typography variant="body1">
            A checklist is a list of required courses that you must take and
            complete according to your CSC catalog year.
          </Typography>
        </Alert> */}
        {/* <Alert variant="outlined" severity="info">
          <Typography variant="h6">
            How to find your respective prerequisite flowchart:
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
                same line as Bachelor of Computer Science:
              </Typography>
            </ListItem>
            <Box
              sx={{
                display: { xs: "none", sm: "none", md: "block", lg: "block" },
              }}
            >
              <img
                style={{ width: "80%", height: "auto" }}
                src="https://res.cloudinary.com/andreahabib/image/upload/v1645115452/Screen_Shot_2022-02-17_at_11.17.59_AM_j0gxlb.png"
                alt="degreeworks"
              ></img>
            </Box>
            <Box
              sx={{
                display: { xs: "block", sm: "block", md: "none", lg: "none" },
              }}
            >
              <img
                style={{ width: "100%", height: "auto" }}
                src="https://res.cloudinary.com/andreahabib/image/upload/v1645382846/Screen_Shot_2022-02-20_at_1.42.55_PM_oaidcl.png"
                alt="degreeworks"
              ></img>
            </Box>
            <ListItem>
              <Typography variant="body1">
                3. Select the flowchart based on the year specified on your
                degreeworks
              </Typography>
            </ListItem>
          </List>
        </Alert> */}
        <Alert variant="outlined" severity="error">
          The information is intended to inform and is not a replacement for a
          degree audit conducted with an academic advisor
        </Alert>
      </Stack>
    </Fragment>
  );
}
