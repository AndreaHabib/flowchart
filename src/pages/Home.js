import React, { Fragment } from "react";
import {
  Stack,
  Alert,
  Typography,
  Button,
  Box,
  List,
  ListItem,
} from "@mui/material";
import HeaderMenu from "../component/HeaderMenu";

export default function Home() {
  return (
    <Fragment>
      <Stack mb={5} mt={4} sx={{ width: "90%" }} spacing={2}>
        <Alert variant="filled" severity="info">
          <Typography variant="h4">CS Advisement toolkit</Typography>
          <Typography variant="h6">
            This toolkit is designed to assist students in the process of course
            selection and planning. You will use Degreeworks, and a prerequisite
            flowchart to see which CSC courses are required and for which you
            are eligible. Please follow the steps below to get started.
          </Typography>
        </Alert>
        {/* <Alert sx={{ textAlign: "left" }} variant="outlined" severity="success">
          <Typography variant="h6">Create Your Profile!</Typography>
          <Typography mb={3} variant="body1">
            You can create your profile and make your own flowchart!
          </Typography>
          <Button variant="contained" size="small" to="/auth" component={Link}>
            Register
          </Button>
        </Alert> */}
        <Alert sx={{ textAlign: "left" }} variant="outlined" severity="info">
          <Typography variant="h6">Step 1:</Typography>
          <Typography mb={3} variant="body1">
            Obtain your catalog year from DegreeWorks and return to this page.
            Refer to the picture below on where to find your catalog year.
          </Typography>
          <Button
            variant="contained"
            size="small"
            rel="noreferrer noopener"
            target="_blank"
            href="https://degreeworks.cuny.edu/Dashboard_si/"
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
          <Typography mb={3} variant="body1">
            You will select your classes using two tools: your catalog flowchart
            and DegreeWorks
          </Typography>
          <List>
            <ListItem>
              <Typography variant="body1">
                1. You will use your flowchart for the suggested order in which
                major requirements should be taken.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body1">
                2. You will use DegreeWorks to determine what requirements you
                have left to complete.
              </Typography>
            </ListItem>
          </List>
          <HeaderMenu />
        </Alert>
        <Alert variant="outlined" severity="info">
          {/* Add arrows diagonal and more arrows pointing towards the year*/}
          <Typography variant="h6">Where to find your catalog year:</Typography>
          <Box
            sx={{
              display: { xs: "none", sm: "none", md: "block", lg: "block" },
            }}
          >
            <img
              style={{ width: "90%", height: "auto" }}
              src="https://res.cloudinary.com/andreahabib/image/upload/v1666201275/screenshot_kgk3m4.png"
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
              src="https://res.cloudinary.com/andreahabib/image/upload/v1666201275/Untitled_design_fligid.png"
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
        <Alert variant="outlined" severity="error">
          The information is intended to inform and is not a replacement for a
          degree audit conducted with an academic advisor
        </Alert>
      </Stack>
    </Fragment>
  );
}
