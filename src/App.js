import "./App.css";
import { useState, useCallback } from "react";
import ReactFlow, { MiniMap, Background, Controls } from "react-flow-renderer";
import elements from "./elements";
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

  const onClickElement = useCallback(
    (event, element) => {
      const updateElements = JSON.parse(JSON.stringify(elements));
      SwitchPrereq(updateElements, element);
      setElements(updateElements);
    },
    [elements_flow]
  );

  return (
    <div className="App">
      <Typography variant="h4">CSI Computer Science Flowchart</Typography>
      <Typography variant="h6">
        - It is recommended to view this flowchart on a laptop or desktop for
        the best experience.
      </Typography>
      <Typography variant="h6">
        - The flowchart is based on the official CS curriculum at CSI.
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
                    target="_blank"
                    href="https://csicuny.smartcatalogiq.com/current/Undergraduate-Catalog/Courses/CSC-Computer-Science/100/CSC-126"
                    component="a"
                    label="CSC 126"
                  />
                  <Chip
                    target="_blank"
                    href="https://csicuny.smartcatalogiq.com/en/Current/Undergraduate-Catalog/Courses/CSC-Computer-Science/200/CSC-211"
                    component="a"
                    clickable
                    label="CSC 211"
                  />
                  <Chip
                    clickable
                    label="CSC 220"
                    target="_blank"
                    href="https://csicuny.smartcatalogiq.com/en/Current/Undergraduate-Catalog/Courses/CSC-Computer-Science/200/CSC-220"
                    component="a"
                  />
                  <Chip
                    clickable
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
                    href="https://csicuny.smartcatalogiq.com/Current/Undergraduate-Catalog/Courses/CSC-Computer-Science/300/CSC-305"
                    clickable
                    label="CSC 305"
                    component="a"
                  />
                  <Chip
                    target="_blank"
                    href="https://csicuny.smartcatalogiq.com/Current/Undergraduate-Catalog/Courses/CSC-Computer-Science/300/CSC-315"
                    clickable
                    label="CSC 315"
                    component="a"
                  />
                  <Chip
                    target="_blank"
                    href="https://csicuny.smartcatalogiq.com/Current/Undergraduate-Catalog/Courses/CSC-Computer-Science/300/CSC-326"
                    clickable
                    label="CSC 326"
                    component="a"
                  />
                  <Chip
                    target="_blank"
                    href="https://csicuny.smartcatalogiq.com/Current/Undergraduate-Catalog/Courses/CSC-Computer-Science/300/CSC-330"
                    clickable
                    label="CSC 330"
                    component="a"
                  />
                  <Chip
                    target="_blank"
                    href="https://csicuny.smartcatalogiq.com/Current/Undergraduate-Catalog/Courses/CSC-Computer-Science/300/CSC-332"
                    clickable
                    label="CSC 332"
                    component="a"
                  />
                  <Chip
                    target="_blank"
                    href="https://csicuny.smartcatalogiq.com/Current/Undergraduate-Catalog/Courses/CSC-Computer-Science/300/CSC-346"
                    clickable
                    label="CSC 346"
                    component="a"
                  />
                  <Chip
                    target="_blank"
                    href="https://csicuny.smartcatalogiq.com/Current/Undergraduate-Catalog/Courses/CSC-Computer-Science/300/CSC-347"
                    clickable
                    label="CSC 347"
                    component="a"
                  />
                  <Chip
                    target="_blank"
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
                    href="https://csicuny.smartcatalogiq.com/Current/Undergraduate-Catalog/Courses/CSC-Computer-Science/400/CSC-430"
                    clickable
                    label="CSC 430"
                    component="a"
                  />
                  <Chip
                    target="_blank"
                    href="https://csicuny.smartcatalogiq.com/Current/Undergraduate-Catalog/Courses/CSC-Computer-Science/400/CSC-446"
                    clickable
                    label="CSC 446"
                    component="a"
                  />
                  <Chip
                    target="_blank"
                    href="https://csicuny.smartcatalogiq.com/Current/Undergraduate-Catalog/Courses/CSC-Computer-Science/400/CSC-490"
                    clickable
                    label="CSC 490"
                    component="a"
                  />
                </Stack>
              </CardContent>
            </Card>
          </Grid>
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
                    href="https://csicuny.smartcatalogiq.com/Current/Undergraduate-Catalog/Courses/MTH-Mathematics/200/MTH-228"
                    label="MTH 228"
                    clickable
                    component="a"
                  />
                  <Chip
                    target="_blank"
                    href="https://csicuny.smartcatalogiq.com/Current/Undergraduate-Catalog/Courses/MTH-Mathematics/200/MTH-229"
                    label="MTH 229"
                    clickable
                    component="a"
                  />
                  <Chip
                    target="_blank"
                    href="https://csicuny.smartcatalogiq.com/Current/Undergraduate-Catalog/Courses/MTH-Mathematics/200/MTH-230"
                    label="MTH 230"
                    clickable
                    component="a"
                  />
                  <Chip
                    target="_blank"
                    href="https://csicuny.smartcatalogiq.com/Current/Undergraduate-Catalog/Courses/MTH-Mathematics/200/MTH-231"
                    label="MTH 231"
                    clickable
                    component="a"
                  />
                  <Chip
                    target="_blank"
                    href="https://csicuny.smartcatalogiq.com/Current/Undergraduate-Catalog/Courses/MTH-Mathematics/200/MTH-232"
                    label="MTH 232"
                    clickable
                    component="a"
                  />
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Button
          target="_blank"
          component="a"
          href="https://csicuny.smartcatalogiq.com/en/Current/Undergraduate-Catalog/Courses"
          variant="contained"
        >
          View Electives/Others
        </Button>
      </Box>
      <Typography className="description" variant="h6">
        * 8-10 CSC elective credits; this consists of either two 400-electives =
        8 credits, or one 400-elective and two 200-electives = 10 credits. You
        may sub. one additional upper-level MTH course (beyond the two that you
        will take after MTH 232) for one 400-elective. This is limited to one
        instance. <br></br> # after MTH 232, you complete two upper level MTH
        courses, which have MTH 232 or higher as a prerequisite (excluding MTH
        306). See your advisor for recommendations, though you may choose the
        courses. <br></br>** pre-requisites are senior class standing, CSC 330
        and ENG 151. You must earn a minimum “C” or higher grade in CSC courses
        which are pre-requisites to other CSC courses If your major catalog year
        is 2017-18 or earlier, please reference that flowchart.
      </Typography>
    </div>
  );
}

export default App;
