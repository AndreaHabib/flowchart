/*
author: Andrea Habib
distributed under MIT license
Feel free to use, however please give credit to the original author
email: andrea.atef@yahoo.com
*/

import "./App.css";
import { useState, useCallback } from "react";
import ReactFlow, { MiniMap, Background, Controls } from "react-flow-renderer";
import elements from "./elements";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import {
  Typography,
  Box,
  Card,
  CardContent,
  Grid,
  Button,
  Stack,
  Chip,
} from "@mui/material";
import { SwitchPrereq } from "./SwitchPrereq";
import WarningAmber from "@mui/icons-material/WarningAmber";

const style = {
  width: "97%",
  height: "75vh",
};

function App() {
  const [elements_flow, setElements] = useState(elements);
  const [reactflowInstance, setReactflowInstance] = useState(null);

  const onLoad = useCallback(
    (rfi) => {
      if (!reactflowInstance) {
        setReactflowInstance(rfi);
      }
    },
    [reactflowInstance]
  );

  const onClickElement = useCallback((event, element) => {
    const updateElements = JSON.parse(JSON.stringify(elements));
    SwitchPrereq(updateElements, element);
    setElements(updateElements);
  }, []);

  return (
    <div className="App">
      <Typography variant="h4">CSI CSC Prerequisites Flowchart</Typography>
      <Typography variant="h4">
        Applies to Fall 2021 - Spring 2022 Major Catalog
      </Typography>
      <Typography variant="h6">
        - It is recommended to view this flowchart on a laptop or desktop for
        the best experience.
      </Typography>
      <Typography variant="h6">
        - The flowchart is based on the official CS curriculum at CSI{" "}
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://csicuny.smartcatalogiq.com/en/Current/Undergraduate-Catalog/Divisions-Schools-Departments-and-Programs/Division-of-Science-and-Technology/Department-of-Computer-Science/Computer-Science-and-Computer-Technology/Computer-Science-BS"
        >
          Fall 2021 - Spring 2022 Catalog.
        </a>
      </Typography>
      <Typography variant="h6">
        - You can drag the flowchart using your mouse to view all of classes,
        especially when you are on the phone!
      </Typography>
      <Typography variant="h6">
        - You can also click on any of the classes to view the prerequisites.
      </Typography>
      <Typography variant="h6">
        - To view the description of any of the classes on the flowchart, you
        can find a list of all the classes below the flowchart where you can see
        the description of each individual class.
      </Typography>
      <ReactFlow
        onElementClick={onClickElement}
        preventScrolling={false}
        translateExtent={[
          [-800, -800],
          [2000, 1000],
        ]}
        onLoad={onLoad}
        style={style}
        defaultPosition={[100, 100]}
        onlyRenderVisibleElements={true}
        arrowHeadColor="black"
        paneMoveable={true}
        nodesConnectable={false}
        minZoom={1}
        maxZoom={1}
        nodesDraggable={false}
        elements={elements_flow}
      >
        <MiniMap />
        <Background />
        <Controls showZoom={false} />
      </ReactFlow>
      <Box className="classes-container" component="div">
        <Grid container spacing={1}>
          <Grid item xs={12} md={5}>
            <Card className="classes-card" variant="outlined">
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  MTH
                </Typography>
                <Stack
                  justifyContent="center"
                  alignItems="center"
                  direction="row"
                  spacing={1}
                >
                  <Chip
                    target="_blank"
                    rel="noreferrer noopener"
                    href="https://csicuny.smartcatalogiq.com/Current/Undergraduate-Catalog/Courses/MTH-Mathematics/100/MTH-123"
                    component="a"
                    label="MTH 123"
                    clickable
                  />
                </Stack>
                <Stack
                  justifyContent="center"
                  alignItems="center"
                  mt={2}
                  direction={{
                    xs: "column",
                    sm: "column",
                    md: "row",
                    lg: "row",
                  }}
                  spacing={1}
                >
                  <Chip
                    target="_blank"
                    rel="noreferrer noopener"
                    href="https://csicuny.smartcatalogiq.com/Current/Undergraduate-Catalog/Courses/MTH-Mathematics/200/MTH-228"
                    label="MTH 228"
                    clickable
                    component="a"
                  />
                  <Chip
                    target="_blank"
                    rel="noreferrer noopener"
                    href="https://csicuny.smartcatalogiq.com/Current/Undergraduate-Catalog/Courses/MTH-Mathematics/200/MTH-229"
                    label="MTH 229"
                    clickable
                    component="a"
                  />
                  <Chip
                    target="_blank"
                    rel="noreferrer noopener"
                    href="https://csicuny.smartcatalogiq.com/Current/Undergraduate-Catalog/Courses/MTH-Mathematics/200/MTH-230"
                    label="MTH 230"
                    clickable
                    component="a"
                  />
                  <Chip
                    target="_blank"
                    rel="noreferrer noopener"
                    href="https://csicuny.smartcatalogiq.com/Current/Undergraduate-Catalog/Courses/MTH-Mathematics/200/MTH-231"
                    label="MTH 231"
                    clickable
                    component="a"
                  />
                  <Chip
                    target="_blank"
                    rel="noreferrer noopener"
                    href="https://csicuny.smartcatalogiq.com/Current/Undergraduate-Catalog/Courses/MTH-Mathematics/200/MTH-232"
                    label="MTH 232"
                    clickable
                    component="a"
                  />
                </Stack>
              </CardContent>
            </Card>
            <Button
              target="_blank"
              component="a"
              href="https://csicuny.smartcatalogiq.com/current/Undergraduate-Catalog/Courses/MTH-Mathematics"
              variant="contained"
            >
              View MTH Catalog
            </Button>
          </Grid>
          <Grid item xs={12} md={7}>
            <Card className="classes-card" variant="outlined">
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  CSC
                </Typography>
                <Stack
                  justifyContent="center"
                  alignItems="center"
                  direction={{
                    xs: "column",
                    sm: "column",
                    md: "row",
                    lg: "row",
                  }}
                  spacing={1}
                >
                  <Chip
                    clickable
                    rel="noreferrer noopener"
                    target="_blank"
                    href="https://csicuny.smartcatalogiq.com/current/Undergraduate-Catalog/Courses/CSC-Computer-Science/100/CSC-126"
                    component="a"
                    label="CSC 126"
                  />
                  <Chip
                    target="_blank"
                    rel="noreferrer noopener"
                    href="https://csicuny.smartcatalogiq.com/en/Current/Undergraduate-Catalog/Courses/CSC-Computer-Science/200/CSC-211"
                    component="a"
                    clickable
                    label="CSC 211"
                  />
                  <Chip
                    clickable
                    label="CSC 220"
                    rel="noreferrer noopener"
                    target="_blank"
                    href="https://csicuny.smartcatalogiq.com/en/Current/Undergraduate-Catalog/Courses/CSC-Computer-Science/200/CSC-220"
                    component="a"
                  />
                  <Chip
                    clickable
                    rel="noreferrer noopener"
                    label="CSC 228"
                    target="_blank"
                    href="https://csicuny.smartcatalogiq.com/Current/Undergraduate-Catalog/Courses/CSC-Computer-Science/200/CSC-228"
                    component="a"
                  />
                </Stack>
                <Stack
                  justifyContent="center"
                  alignItems="center"
                  mt={2}
                  direction={{
                    xs: "column",
                    sm: "column",
                    md: "row",
                    lg: "row",
                  }}
                  spacing={1}
                >
                  <Chip
                    target="_blank"
                    rel="noreferrer noopener"
                    href="https://csicuny.smartcatalogiq.com/Current/Undergraduate-Catalog/Courses/CSC-Computer-Science/300/CSC-305"
                    clickable
                    label="CSC 305"
                    component="a"
                  />
                  <Chip
                    target="_blank"
                    rel="noreferrer noopener"
                    href="https://csicuny.smartcatalogiq.com/Current/Undergraduate-Catalog/Courses/CSC-Computer-Science/300/CSC-315"
                    clickable
                    label="CSC 315"
                    component="a"
                  />
                  <Chip
                    target="_blank"
                    rel="noreferrer noopener"
                    href="https://csicuny.smartcatalogiq.com/Current/Undergraduate-Catalog/Courses/CSC-Computer-Science/300/CSC-326"
                    clickable
                    label="CSC 326"
                    component="a"
                  />
                  <Chip
                    target="_blank"
                    rel="noreferrer noopener"
                    href="https://csicuny.smartcatalogiq.com/Current/Undergraduate-Catalog/Courses/CSC-Computer-Science/300/CSC-330"
                    clickable
                    label="CSC 330"
                    component="a"
                  />
                  <Chip
                    target="_blank"
                    rel="noreferrer noopener"
                    href="https://csicuny.smartcatalogiq.com/Current/Undergraduate-Catalog/Courses/CSC-Computer-Science/300/CSC-332"
                    clickable
                    label="CSC 332"
                    component="a"
                  />
                  <Chip
                    target="_blank"
                    rel="noreferrer noopener"
                    href="https://csicuny.smartcatalogiq.com/Current/Undergraduate-Catalog/Courses/CSC-Computer-Science/300/CSC-346"
                    clickable
                    label="CSC 346"
                    component="a"
                  />
                  <Chip
                    target="_blank"
                    rel="noreferrer noopener"
                    href="https://csicuny.smartcatalogiq.com/Current/Undergraduate-Catalog/Courses/CSC-Computer-Science/300/CSC-347"
                    clickable
                    label="CSC 347"
                    component="a"
                  />
                  <Chip
                    target="_blank"
                    rel="noreferrer noopener"
                    href="https://csicuny.smartcatalogiq.com/Current/Undergraduate-Catalog/Courses/CSC-Computer-Science/300/CSC-382"
                    clickable
                    label="CSC 382"
                    component="a"
                  />
                </Stack>
                <Stack
                  justifyContent="center"
                  alignItems="center"
                  mt={2}
                  direction={{
                    xs: "column",
                    sm: "column",
                    md: "row",
                    lg: "row",
                  }}
                  spacing={1}
                >
                  <Chip
                    target="_blank"
                    rel="noreferrer noopener"
                    href="https://csicuny.smartcatalogiq.com/Current/Undergraduate-Catalog/Courses/CSC-Computer-Science/400/CSC-430"
                    clickable
                    label="CSC 430"
                    component="a"
                  />
                  <Chip
                    target="_blank"
                    rel="noreferrer noopener"
                    href="https://csicuny.smartcatalogiq.com/Current/Undergraduate-Catalog/Courses/CSC-Computer-Science/400/CSC-446"
                    clickable
                    label="CSC 446"
                    component="a"
                  />
                  <Chip
                    target="_blank"
                    rel="noreferrer noopener"
                    href="https://csicuny.smartcatalogiq.com/Current/Undergraduate-Catalog/Courses/CSC-Computer-Science/400/CSC-490"
                    clickable
                    label="CSC 490"
                    component="a"
                  />
                </Stack>
              </CardContent>
            </Card>
            <Button
              target="_blank"
              component="a"
              href="https://csicuny.smartcatalogiq.com/en/Current/Undergraduate-Catalog/Divisions-Schools-Departments-and-Programs/Division-of-Science-and-Technology/Department-of-Computer-Science/Computer-Science-and-Computer-Technology/Computer-Science-BS"
              variant="contained"
            >
              View CSC Catalog
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <Card className="classes-card" variant="outlined">
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  CSC Electives
                </Typography>
                <div
                  style={{
                    marginTop: "20px",
                    marginBottom: "20px",
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                    width: "100%",
                    justifyContent: "center",
                  }}
                >
                  <WarningAmber />
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Electives offered depend from semester to semester
                  </Typography>
                </div>
                <Stack
                  justifyContent="center"
                  alignItems="center"
                  direction={{
                    xs: "column",
                    sm: "column",
                    md: "row",
                    lg: "row",
                  }}
                  spacing={1}
                >
                  <Chip
                    clickable
                    target="_blank"
                    rel="noreferrer noopener"
                    href="https://csicuny.smartcatalogiq.com/Current/Undergraduate-Catalog/Courses/CSC-Computer-Science/200/CSC-223"
                    component="a"
                    label="CSC 223"
                  />
                  <Chip
                    target="_blank"
                    rel="noreferrer noopener"
                    href="https://csicuny.smartcatalogiq.com/Current/Undergraduate-Catalog/Courses/CSC-Computer-Science/200/CSC-225"
                    component="a"
                    clickable
                    label="CSC 225"
                  />
                  <Chip
                    clickable
                    label="CSC 226"
                    target="_blank"
                    rel="noreferrer noopener"
                    href="https://csicuny.smartcatalogiq.com/Current/Undergraduate-Catalog/Courses/CSC-Computer-Science/200/CSC-226"
                    component="a"
                  />
                  <Chip
                    clickable
                    label="CSC 227"
                    target="_blank"
                    rel="noreferrer noopener"
                    href="https://csicuny.smartcatalogiq.com/Current/Undergraduate-Catalog/Courses/CSC-Computer-Science/200/CSC-227"
                    component="a"
                  />
                  <Chip
                    clickable
                    label="CSC 229"
                    rel="noreferrer noopener"
                    target="_blank"
                    href="https://csicuny.smartcatalogiq.com/Current/Undergraduate-Catalog/Courses/CSC-Computer-Science/200/CSC-229"
                    component="a"
                  />
                  <Chip
                    clickable
                    label="CSC 235"
                    target="_blank"
                    rel="noreferrer noopener"
                    href="https://csicuny.smartcatalogiq.com/Current/Undergraduate-Catalog/Courses/CSC-Computer-Science/200/CSC-235"
                    component="a"
                  />
                  <Chip
                    clickable
                    label="CSC 245"
                    target="_blank"
                    rel="noreferrer noopener"
                    href="https://csicuny.smartcatalogiq.com/Current/Undergraduate-Catalog/Courses/CSC-Computer-Science/200/CSC-245"
                    component="a"
                  />
                  <Chip
                    clickable
                    label="CSC 250"
                    target="_blank"
                    rel="noreferrer noopener"
                    href="https://csicuny.smartcatalogiq.com/Current/Undergraduate-Catalog/Courses/CSC-Computer-Science/200/CSC-250"
                    component="a"
                  />
                </Stack>
                <Stack
                  justifyContent="center"
                  alignItems="center"
                  mt={2}
                  direction={{
                    xs: "column",
                    sm: "column",
                    md: "row",
                    lg: "row",
                  }}
                  spacing={1}
                >
                  <Chip
                    target="_blank"
                    rel="noreferrer noopener"
                    href="https://csicuny.smartcatalogiq.com/Current/Undergraduate-Catalog/Courses/CSC-Computer-Science/400/CSC-412"
                    clickable
                    label="CSC 412"
                    component="a"
                  />
                  <Chip
                    target="_blank"
                    rel="noreferrer noopener"
                    href="https://csicuny.smartcatalogiq.com/Current/Undergraduate-Catalog/Courses/CSC-Computer-Science/400/CSC-420"
                    clickable
                    label="CSC 420"
                    component="a"
                  />
                  <Chip
                    target="_blank"
                    rel="noreferrer noopener"
                    href="https://csicuny.smartcatalogiq.com/Current/Undergraduate-Catalog/Courses/CSC-Computer-Science/400/CSC-424"
                    clickable
                    label="CSC 424"
                    component="a"
                  />
                  <Chip
                    target="_blank"
                    rel="noreferrer noopener"
                    href="https://csicuny.smartcatalogiq.com/Current/Undergraduate-Catalog/Courses/CSC-Computer-Science/400/CSC-421"
                    clickable
                    label="CSC 421"
                    component="a"
                  />
                  <Chip
                    target="_blank"
                    rel="noreferrer noopener"
                    href="https://csicuny.smartcatalogiq.com/Current/Undergraduate-Catalog/Courses/CSC-Computer-Science/400/CSC-425"
                    clickable
                    label="CSC 425"
                    component="a"
                  />
                  <Chip
                    target="_blank"
                    rel="noreferrer noopener"
                    href="https://csicuny.smartcatalogiq.com/Current/Undergraduate-Catalog/Courses/CSC-Computer-Science/400/CSC-426"
                    clickable
                    label="CSC 426"
                    component="a"
                  />
                  <Chip
                    target="_blank"
                    rel="noreferrer noopener"
                    href="https://csicuny.smartcatalogiq.com/Current/Undergraduate-Catalog/Courses/CSC-Computer-Science/400/CSC-427"
                    clickable
                    label="CSC 427"
                    component="a"
                  />
                  <Chip
                    target="_blank"
                    rel="noreferrer noopener"
                    href="https://csicuny.smartcatalogiq.com/Current/Undergraduate-Catalog/Courses/CSC-Computer-Science/400/CSC-429"
                    clickable
                    label="CSC 429"
                    component="a"
                  />
                </Stack>
                <Stack
                  justifyContent="center"
                  alignItems="center"
                  mt={2}
                  direction={{
                    xs: "column",
                    sm: "column",
                    md: "row",
                    lg: "row",
                  }}
                  spacing={1}
                >
                  <Chip
                    target="_blank"
                    rel="noreferrer noopener"
                    href="https://csicuny.smartcatalogiq.com/Current/Undergraduate-Catalog/Courses/CSC-Computer-Science/400/CSC-432"
                    clickable
                    label="CSC 432"
                    component="a"
                  />
                  <Chip
                    target="_blank"
                    rel="noreferrer noopener"
                    href="https://csicuny.smartcatalogiq.com/Current/Undergraduate-Catalog/Courses/CSC-Computer-Science/400/CSC-434"
                    clickable
                    label="CSC 434"
                    component="a"
                  />
                  <Chip
                    target="_blank"
                    rel="noreferrer noopener"
                    href="https://csicuny.smartcatalogiq.com/Current/Undergraduate-Catalog/Courses/CSC-Computer-Science/400/CSC-435"
                    clickable
                    label="CSC 435"
                    component="a"
                  />
                  <Chip
                    target="_blank"
                    rel="noreferrer noopener"
                    href="https://csicuny.smartcatalogiq.com/Current/Undergraduate-Catalog/Courses/CSC-Computer-Science/400/CSC-436"
                    clickable
                    label="CSC 436"
                    component="a"
                  />
                  <Chip
                    target="_blank"
                    rel="noreferrer noopener"
                    href="https://csicuny.smartcatalogiq.com/Current/Undergraduate-Catalog/Courses/CSC-Computer-Science/400/CSC-438"
                    clickable
                    label="CSC 438"
                    component="a"
                  />
                  <Chip
                    target="_blank"
                    rel="noreferrer noopener"
                    href="https://csicuny.smartcatalogiq.com/Current/Undergraduate-Catalog/Courses/CSC-Computer-Science/400/CSC-462"
                    clickable
                    label="CSC 462"
                    component="a"
                  />
                  <Chip
                    target="_blank"
                    rel="noreferrer noopener"
                    href="https://csicuny.smartcatalogiq.com/Current/Undergraduate-Catalog/Courses/CSC-Computer-Science/400/CSC-470"
                    clickable
                    label="CSC 470"
                    component="a"
                  />
                  <Chip
                    target="_blank"
                    rel="noreferrer noopener"
                    href="https://csicuny.smartcatalogiq.com/Current/Undergraduate-Catalog/Courses/CSC-Computer-Science/400/CSC-475"
                    clickable
                    label="CSC 475"
                    component="a"
                  />
                  <Chip
                    target="_blank"
                    rel="noreferrer noopener"
                    href="https://csicuny.smartcatalogiq.com/Current/Undergraduate-Catalog/Courses/CSC-Computer-Science/400/CSC-480"
                    clickable
                    label="CSC 480"
                    component="a"
                  />
                  <Chip
                    rel="noreferrer noopener"
                    target="_blank"
                    href="https://csicuny.smartcatalogiq.com/Current/Undergraduate-Catalog/Courses/CSC-Computer-Science/400/CSC-482"
                    clickable
                    label="CSC 482"
                    component="a"
                  />
                  <Chip
                    rel="noreferrer noopener"
                    target="_blank"
                    href="https://csicuny.smartcatalogiq.com/Current/Undergraduate-Catalog/Courses/CSC-Computer-Science/400/CSC-484"
                    clickable
                    label="CSC 484"
                    component="a"
                  />
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
      <Typography className="description" variant="h6">
        * 12-14 CSC elective credits; this consists of either three
        400-electives = 12 credits, or two 400-elective and two 200-electives =
        14 credits. You may sub. one additional upper-level MTH course (beyond
        the two that you will take after MTH 232) for one 400-elective. This is
        limited to one instance.<br></br>
        ** You must earn a minimum “C” or higher grade in CSC courses which are
        pre-requisites to other CSC courses.
      </Typography>
      <Typography variant="h4">
        Additional Tools for Planning out your CSC courses
      </Typography>
      <Stack
        justifyContent="center"
        alignItems="center"
        mt={2}
        mb={8}
        direction={{
          xs: "column",
          sm: "column",
          md: "row",
          lg: "row",
        }}
        spacing={1}
      >
        <Button
          target="_blank"
          component="a"
          rel="noreferrer noopener"
          href="https://degreeworks.cuny.edu/Dashboard_si/dashboard"
          variant="contained"
        >
          DegreeWorks
        </Button>
        <Button
          target="_blank"
          component="a"
          rel="noreferrer noopener"
          href="http://www.cs.csi.cuny.edu/content/CSC_BS_Pathways_checklist_2021-22-major-catalog.pdf"
          variant="contained"
        >
          Pathway Checklist 2021-2022 Catalog
        </Button>
        <Button
          target="_blank"
          component="a"
          rel="noreferrer noopener"
          href="https://www.mtu.edu/cs/undergraduate/advising/pdfs/blank-academic-plan.pdf"
          variant="contained"
        >
          Blank Academic Planner by Michigan Tech
        </Button>
        <Button
          target="_blank"
          component="a"
          rel="noreferrer noopener"
          href="http://www.cs.csi.cuny.edu/content/Sample_cs_4_yr_degree-career-map.pdf"
          variant="contained"
        >
          Sample Degree Milestone Map
        </Button>
      </Stack>
      <footer className="footer">
        <Typography variant="h6">
          CUNY2X - CSI Computer Science Department
        </Typography>
        <Typography variant="h6">
          This is intended to be used only as a guide.
        </Typography>
      </footer>
    </div>
  );
}

export default App;
