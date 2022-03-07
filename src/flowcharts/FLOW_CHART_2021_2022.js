import React, { Fragment } from "react";
import { useState, useCallback } from "react";
import ReactFlow, { MiniMap, Background, Controls } from "react-flow-renderer";
import elements from "./elements/Flowchart1";
import "./styles/Flowchart1.css";
import HeaderMenu from "../component/HeaderMenu";
import { mathClasses, cscClasses } from "./classes/Classes";
import Legend from "../component/Legend";
import {
  Typography,
  Box,
  Card,
  CardContent,
  Grid,
  Button,
  Stack,
  Chip,
  Alert,
  List,
  ListItem,
  Tooltip,
} from "@mui/material";
import { SwitchPrereq } from "./switches/SwitchPrereq1";
import WarningAmber from "@mui/icons-material/WarningAmber";

const style = {
  width: "97%",
  height: "75vh",
};

export default function FLOW_CHART_2021_2022(props) {
  const [elements_flow, setElements] = useState(elements);
  const [reactflowInstance, setReactflowInstance] = useState(null);

  // eslint-disable-next-line
  const [mthChipData, setMthChipData] = React.useState(mathClasses);

  // eslint-disable-next-line
  const [cscChipData, setCscChipData] = React.useState(cscClasses);

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
    <Fragment>
      <div className="flowchart1">
        <div className="flowchart-header">
          <HeaderMenu />
        </div>
        <Typography variant="h4">CSI CSC Prerequisites Flowchart</Typography>
        <Typography variant="h4">
          Applies to Fall 2021 - Spring 2022 Major Catalog
        </Typography>
        <Stack mt={2} sx={{ width: "80%", textAlign: "left" }} spacing={2}>
          <Alert variant="outlined" severity="info">
            <List>
              <ListItem>
                It is recommended to view this flowchart on a laptop or desktop
                for the best experience.
              </ListItem>
              <ListItem>
                <Typography variant="body2">
                  The flowchart is based on the official CS curriculum at CSI{" "}
                  <a
                    target="_blank"
                    rel="noreferrer noopener"
                    href="https://csicuny.smartcatalogiq.com/en/Current/Undergraduate-Catalog/Divisions-Schools-Departments-and-Programs/Division-of-Science-and-Technology/Department-of-Computer-Science/Computer-Science-and-Computer-Technology/Computer-Science-BS"
                  >
                    Fall 2021 - Spring 2022 Catalog.
                  </a>
                </Typography>
              </ListItem>
              <ListItem>
                You can drag the flowchart using your mouse to view all of
                classes, especially when you are on the phone!
              </ListItem>
              <ListItem>
                You can also click on any of the classes to view the
                prerequisites. The colors are for grouping purposes only.
              </ListItem>
              <ListItem>
                To view the description of any of the classes on the flowchart,
                you can find a list of all the classes below the flowchart where
                you can see the description of each individual class.
              </ListItem>
            </List>
          </Alert>
          <Alert variant="outlined" severity="error">
            * 12-14 CSC elective credits; this consists of either three
            400-electives = 12 credits, or two 400-elective and two
            200-electives = 14 credits. You may sub. one additional upper-level
            MTH course (beyond the two that you will take after MTH 232) for one
            400-elective. This is limited to one instance.<br></br>
            ** You must earn a minimum “C” or higher grade in CSC courses which
            are pre-requisites to other CSC courses.
          </Alert>
        </Stack>
        <Legend color="#1e90ff" />
        <ReactFlow
          onElementClick={onClickElement}
          preventScrolling={false}
          translateExtent={[
            [-1500, -1500],
            [2000, 1500],
          ]}
          onLoad={onLoad}
          style={style}
          defaultPosition={[props.x, props.y]}
          onlyRenderVisibleElements={true}
          arrowHeadColor="black"
          paneMoveable={true}
          nodesConnectable={false}
          minZoom={0.6}
          defaultZoom={0.6}
          maxZoom={1}
          nodesDraggable={false}
          elements={elements_flow}
        >
          <MiniMap />
          <Background />
          <Controls showZoom={false} />
        </ReactFlow>
        <Typography mt={5} variant="h4">
          Tools for Planning out your CSC courses
        </Typography>
        <Stack
          justifyContent="center"
          alignItems="center"
          mt={2}
          mb={1}
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
        <Stack
          justifyContent="center"
          alignItems="center"
          mb={1}
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
            href="https://drive.google.com/file/d/1TJcRvkwxBQTW5z38E1H0XHHXFASUT93L/view?usp=sharing"
            variant="contained"
          >
            Catalog 2021-2022 CSC Prerequisites Flowchart
          </Button>
        </Stack>
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
                    {mthChipData.slice(0, 1).map((mth_class) => (
                      <Tooltip title={mth_class.tooltip} placement="top">
                        <Chip
                          clickable
                          component="a"
                          key={mth_class.key}
                          label={mth_class.label}
                          href={mth_class.url}
                          target="_blank"
                          rel="noreferrer noopener"
                        />
                      </Tooltip>
                    ))}
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
                    {mthChipData.slice(1).map((mth_class) => (
                      <Tooltip title={mth_class.tooltip} placement="top">
                        <Chip
                          clickable
                          component="a"
                          key={mth_class.key}
                          label={mth_class.label}
                          href={mth_class.url}
                          target="_blank"
                          rel="noreferrer noopener"
                        />
                      </Tooltip>
                    ))}
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
                    {cscChipData.slice(0, 4).map((csc_class) => (
                      <Tooltip title={csc_class.tooltip} placement="top">
                        <Chip
                          clickable
                          component="a"
                          key={csc_class.key}
                          label={csc_class.label}
                          href={csc_class.url}
                          target="_blank"
                          rel="noreferrer noopener"
                        />
                      </Tooltip>
                    ))}
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
                    {cscChipData.slice(4, 12).map((csc_class) => (
                      <Tooltip title={csc_class.tooltip} placement="top">
                        <Chip
                          clickable
                          component="a"
                          key={csc_class.key}
                          label={csc_class.label}
                          href={csc_class.url}
                          target="_blank"
                          rel="noreferrer noopener"
                        />
                      </Tooltip>
                    ))}
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
                    {cscChipData.slice(12, 16).map((csc_class) => (
                      <Tooltip title={csc_class.tooltip} placement="top">
                        <Chip
                          clickable
                          component="a"
                          key={csc_class.key}
                          label={csc_class.label}
                          href={csc_class.url}
                          target="_blank"
                          rel="noreferrer noopener"
                        />
                      </Tooltip>
                    ))}
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
      </div>
    </Fragment>
  );
}
