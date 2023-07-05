import React, { Fragment } from "react";
import { useState, useCallback, useEffect } from "react";
import ReactFlow, { Background, Controls } from "react-flow-renderer";
import { useLocation } from "react-router-dom";
import { default as el1 } from "./elements/Flowchart1";
import { default as el2 } from "./elements/Flowchart2";
import { default as el3 } from "./elements/Flowchart3";
import { default as el4 } from "./elements/Flowchart4";
import { default as el5 } from "./elements/Flowchart5";
import {default as el6} from "./elements/Flowchart6";
import { green } from "@mui/material/colors";
import { deepPurple } from "@mui/material/colors";
import { orange } from '@mui/material/colors';
import { teal } from "@mui/material/colors";
import Legend from "../component/Legend";
import "./styles/Flowchart1.css";
import "./styles/Flowchart2.css";
import "./styles/Flowchart3.css";
import "./styles/Flowchart4.css";
import "./styles/Flowchart5.css";
import "./styles/Flowchart6.css";
import { mathClasses, cscClasses, cscElectives } from "./classes/Classes";
import HeaderMenu from "../component/HeaderMenu";
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
  Paper,
} from "@mui/material";
import { SwitchPrereq as sw1 } from "./switches/SwitchPrereq1";
import { SwitchPrereq as sw2 } from "./switches/SwitchPrereq2";
import { SwitchPrereq as sw3 } from "./switches/SwitchPrereq3";
import { SwitchPrereq as sw4 } from "./switches/SwitchPrereq4";
import { SwitchPrereq as sw5 } from "./switches/SwitchPrereq5";
import { SwitchPrereq as sw6 } from "./switches/SwitchPrereq6";
import WarningAmber from "@mui/icons-material/WarningAmber";
import { PushPin } from "@mui/icons-material";

const style = {
  width: "97%",
  height: "75vh",
  
};

export default function FLOW_CHART(props) {
  const location = useLocation();
  const [color, setColor] = useState(null);
  const [className, setClassName] = useState("");
  const [elements_flow, setElements] = useState([]);
  const [tempElement, setTempElement] = useState([]);
  const [switchFun, setSwitchFun] = useState(null);
  const [url, setUrl] = useState("");
  const [warningText, setWarningText] = useState([]);
  const [title, setTitle] = useState("");
  const [pathway, setPathway] = useState("");
  const [flowchart, setFlowchart] = useState("");
  const [years, setYears] = useState("");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showTooltip,setShowTooltip] = useState (false);
  const [ currentNode, setCurrentNode ] = useState({});

  useEffect(() => {
    // if (location.pathname === "/flowchart-cat2013-2018") {
    //   setYears("2013-2018");
    //   setPathway(
    //     "https://docs.google.com/document/d/1RJb8bq-f9Atk7jfLt2n-higf2kUA-oHMmFuHtE2UoM4/edit?usp=sharing"
    //   );
    //   setFlowchart(
    //     "https://drive.google.com/file/d/1cHunbWo2OYLeat7zT-pni-hEIEtTYH-C/view?usp=sharing"
    //   );
    //   setTitle("Fall 2013 - Spring 2014 through Fall 2017 - Spring 2018");
    //   setWarningText([
    //     "* 12-14 CSC elective credits; this consists of either three 400-electives = 12 credits, or two 400-elective and two 200-electives = 14 credits. You may sub. one additional upper-level MTH course (beyond the two that you will take after MTH 232) for one 400-elective. This is limited to one instance.",
    //     "** You must earn a minimum “C” or higher grade in CSC courses which are pre-requisites to other CSC courses.",
    //     " If your major catalog year is 2015-16, 2016-17, or 2017-18, one of your CSC electives must have a database component: CSC 226, 315, or 424 fit this criteria. CSC 315 is considered a 400-elective per dept. chairperson.",
    //   ]);
    //   setUrl("");
    //   setColor(green["500"]);
    //   setElements(el2);
    //   setTempElement(el2);
    //   setSwitchFun(() => sw2);
    //   setClassName("flowchart3");
    // } else if (location.pathname === "/flowchart-cat2018-2020") {
    //   setYears("2018-2020");
    //   setPathway(
    //     "https://drive.google.com/file/d/1rXvHfgEx0nHZp_5HxVJJ9xOPPm5MxBnk/view?usp=sharing"
    //   );
    //   setFlowchart(
    //     "https://drive.google.com/file/d/1JY0IewKGbLJo-1TNqxx9LKbJBBWEqt0-/view?usp=sharing"
    //   );
    //   setTitle("Fall 2018 - Spring 2019, Fall 2019 - Spring 2020");
    //   setWarningText([
    //     "* 8-10 CSC elective credits; this consists of either two 400-electives = 8 credits, or one 400-elective and two 200-electives = 10 credits. You may sub. one additional upper-level MTH course (beyond the two that you will take after MTH 232) for one 400-elective. This is limited to one instance.",
    //     "** You must earn a minimum “C” or higher grade in CSC courses which are pre-requisites to other CSC courses.",
    //     "If your major catalog year is 2018 - 2019, 2019 - 2020 one of your CSC electives must have a database component: CSC 226, 315, or 424 fit this criteria. CSC 315 is considered a 400-elective per dept. chairperson.",
    //   ]);
    //   setUrl(
    //     "https://csicuny.smartcatalogiq.com/2019-2020/Undergraduate-Catalog"
    //   );
    //   setColor("#ef6c00");
    //   setElements(el3);
    //   setTempElement(el3);
    //   setSwitchFun(() => sw3);
    //   setClassName("flowchart2");
    // } 
    
    
    if(location.pathname === "/flowchart-cat2020-2021") {
      setYears("2020-2021");
      setPathway(
        "https://drive.google.com/file/d/1rXvHfgEx0nHZp_5HxVJJ9xOPPm5MxBnk/view?usp=sharing"
      );
      setFlowchart(
        "https://drive.google.com/file/d/11zOvh76IvKtESsXPg_LRAnOl_duii92V/view?usp=sharing"
      );
      setTitle("Fall 2020 - Spring 2021");
      setWarningText([
        "* 8-10 CSC elective credits; this consists of either two 400-electives = 8 credits, or one 400-elective and two 200-electives = 10 credits. You may sub. one additional upper-level MTH course (beyond the two that you will take after MTH 232) for one 400-elective. This is limited to one instance.",
        "** You must earn a minimum “C” or higher grade in CSC courses which are pre-requisites to other CSC courses.",
        "",
      ]);
      setUrl(
        "https://csicuny.smartcatalogiq.com/2020-2021/Undergraduate-Catalog"
      );
      setColor(deepPurple["700"]);
      setElements(el1);
      setTempElement(el1);
      setSwitchFun(() => sw1);
      setClassName("flowchart4");
    } else if (location.pathname === "/flowchart-cat2021-2022") {
      setYears("2021-2022");
      setPathway(
        "http://www.cs.csi.cuny.edu/content/CSC_BS_Pathways_checklist_2021-22-major-catalog.pdf"
      );
      setFlowchart(
        "https://drive.google.com/file/d/1TJcRvkwxBQTW5z38E1H0XHHXFASUT93L/view?usp=sharing"
      );
      setTitle("Fall 2021 - Spring 2022");
      setWarningText([
        "* 12-14 CSC elective credits; this consists of either three 400-electives = 12 credits, or two 400-elective and two 200-electives = 14 credits. You may sub. one additional upper-level MTH course (beyond the two that you will take after MTH 232) for one 400-elective. This is limited to one instance.",
        "** You must earn a minimum “C” or higher grade in CSC courses which are pre-requisites to other CSC courses.",
        "",
      ]);
      setUrl(
        "https://csicuny.smartcatalogiq.com/en/Current/Undergraduate-Catalog/Divisions-Schools-Departments-and-Programs/Division-of-Science-and-Technology/Department-of-Computer-Science/Computer-Science-and-Computer-Technology/Computer-Science-BS"
      );
      setColor("");
      setElements(el1);
      setTempElement(el1);
      setSwitchFun(() => sw1);
      setClassName("flowchart1");
    } else if (location.pathname === "/flowchart-cat2022-2023") {
      setYears("2022-2023");
      setPathway(
        "http://www.cs.csi.cuny.edu/content/CSC_BS_Pathways_checklist_2021-22-major-catalog.pdf"
      );
      setFlowchart(
        "https://drive.google.com/file/d/1TJcRvkwxBQTW5z38E1H0XHHXFASUT93L/view?usp=sharing"
      );
      setTitle("Fall 2022 - Spring 2023");
      setWarningText([
        "* 12-14 CSC elective credits; this consists of either three 400-electives = 12 credits, or two 400-elective and two 200-electives = 14 credits. You may sub. one additional upper-level MTH course (beyond the two that you will take after MTH 232) for one 400-elective. This is limited to one instance.",
        "** You must earn a minimum “C” or higher grade in CSC courses which are pre-requisites to other CSC courses.",
        "",
      ]);
      setUrl(
        "https://csicuny.smartcatalogiq.com/en/Current/Undergraduate-Catalog/Divisions-Schools-Departments-and-Programs/Division-of-Science-and-Technology/Department-of-Computer-Science/Computer-Science-and-Computer-Technology/Computer-Science-BS"
      );
      setColor("");
      setElements(el5);
      setTempElement(el5);
      setSwitchFun(() => sw5);
      setClassName("flowchart6");
    } else if (location.pathname === "/flowchart-aas-cat2022-2023") {
      setYears("2022-2023");
      setPathway("http://www.cs.csi.cuny.edu/content/checklist_aascs.pdf");
      setFlowchart("");
      setTitle("AAS Fall 2022 - Spring 2023");
      setWarningText([
        "~ depending on your grade in MTH 123, you may take MTH 130 next, or MTH 230 in place of MTH 231. ",
        "You must earn a minimum “C” or higher grade in CSC courses which are pre-requisites to other CSC course",
        "",
      ]);
      setUrl(
        "http://csicuny.smartcatalogiq.com/en/current/Undergraduate-Catalog/Divisions-Schools-Departments-and-Programs/Division-of-Science-and-Technology/Department-of-Computer-Science/Computer-Science-and-Computer-Technology/Computer-Technology-AAS"
      );
      setColor(teal["500"]);
      setElements(el4);
      setTempElement(el4);
      setSwitchFun(() => sw4);
      setClassName("flowchart5");
    }
    else if (location.pathname === "/flowchart-cat2023-2024") {
      setYears("2023-2024");
      setPathway("https://drive.google.com/file/d/166ySyzhCuNV-jnYJXWWIVp5eddXw0DpG/view?usp=sharing");
      setFlowchart("https://drive.google.com/file/d/1paO8L9ubN6L2Mv5LPQznmWiUP42qkhFa/view?usp=sharing");

      setTitle("Fall 2023 - Spring 2024");

      setWarningText([
        "~ depending on your grade in MTH 123, you may take MTH 130 next, or MTH 230 in place of MTH 231. ",
        "You must earn a minimum “C” or higher grade in CSC courses which are pre-requisites to other CSC course",
        "",
      ]);
      setUrl(

        "https://csi-undergraduate.catalog.cuny.edu/programs/CSC-BS"

      );
      setColor(orange);
      setElements(el6);
      setTempElement(el6);
      setSwitchFun(() => sw6);
      setClassName("flowchart6");
    }
  }, [location]);

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

  const onClickElement = useCallback(
    (event, element) => {
      const updateElements = JSON.parse(JSON.stringify(tempElement));
      switchFun(updateElements, element);
      setElements(updateElements);
    },
    [switchFun, tempElement]
  );
  
  //Mouse Enter handler
  const handleMouseEnter = (event,node) => {
    setMousePosition({ x: event.pageX, y: event.pageY });
    setTimeout(() => {
      if(node){
        setCurrentNode(node);
        setShowTooltip(true);
      }
    }, 50);
  };
  //Mouse Move handler
  const handleNodeMouseMove = (event, node) =>{
    setMousePosition({ x: event.pageX, y: event.pageY });
    setCurrentNode(node);
    
  }
  //Mouse Leave handler
  const handleNodeMouseLeave= (event,node) =>{
    setMousePosition({ x: event.pageX, y: event.pageY });
    if(node){
      setShowTooltip(false);
    }
  }

  return (
    <Fragment>
      <div className={className}>
        <div className="flowchart-header">
          <HeaderMenu />
        </div>
        <Typography variant="h4">CSI CSC Prerequisites Flowchart</Typography>
        <Typography variant="h4">Applies to {title} Major Catalog</Typography>
        <Stack mt={2} sx={{ width: "85%", textAlign: "left" }} spacing={2}>
          <Alert variant="outlined" severity="info">
            <List>
              <ListItem>
                It is recommended to view this flowchart on a laptop or desktop
                for the best experience.
              </ListItem>
              {location.pathname === "/flowchart-cat2013-2018" ? undefined : (
                <ListItem>
                  <Typography variant="body2">
                    The flowchart is based on the official CS curriculum at CSI{" "}
                    <a target="_blank" rel="noreferrer noopener" href={url}>
                      {title} Catalog.
                    </a>
                  </Typography>
                </ListItem>
              )}
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
            {warningText[0]}
            <br></br>
            {warningText[1]}
            <br></br>
            {warningText[2]}
          </Alert>
        </Stack>
        <Legend color={location} />
        <ReactFlow
          onElementClick={onClickElement}
          preventScrolling={true}
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
          onNodeMouseMove={handleNodeMouseMove}
          onNodeMouseEnter={handleMouseEnter}
          onNodeMouseLeave={handleNodeMouseLeave}
          
        >
          
          <Background />
          <Controls showZoom={false} />
        </ReactFlow>
        {showTooltip && (
            <Box
              style={{
                position: "absolute",
                top: mousePosition.y-45,
                left: mousePosition.x+35,
                zIndex:100,
                background:'#000',
                opacity:"0.7",
                borderRadius: '5px',
                height:'auto',
              }}
            >
            <Typography variant="h6" style={{color:'white'}}>{currentNode.data.Desc}</Typography>
            </Box>
        )}
        <Typography mt={5} variant="h4">
          Tools for Planning out your CSC courses
        </Typography>
        <Paper
          elevation={0}
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            listStyle: "none",
            p: 0.5,
            m: 0,
          }}
          component="ul"
        >
          <Button
            target="_blank"
            component="a"
            sx={{ m: 0.5 }}
            style={{ background: color }}
            rel="noreferrer noopener"
            href="https://degreeworks.cuny.edu/Dashboard_si/dashboard"
            variant="contained"
          >
            DegreeWorks
          </Button>
          <Button
            target="_blank"
            component="a"
            sx={{ m: 0.5 }}
            style={{ background: color }}
            rel="noreferrer noopener"
            href={pathway}
            disabled={location.pathname === "/flowchart-aas-cat2022-2023"}
            variant="contained"
          >
            Pathway Checklist {years} Catalog
          </Button>

           {location.pathname === "/flowchart-cat2023-2024" ? 
       (<>
    <Button
            target="_blank"
            component="a"
            sx={{ m: 0.5 }}
            style={{ background: color }}
            rel="noreferrer noopener"
            href="https://drive.google.com/file/d/1MN0AA-Bi1pw76JPc6DygYiO81pWGgNP_/view?usp=sharing"
            variant="contained"
          >
            Sample Degree Milestone Map
          </Button>
       </>):(
       <>
    <Button
            target="_blank"
            component="a"
            sx={{ m: 0.5 }}
            style={{ background: color }}
            rel="noreferrer noopener"
            href="http://www.cs.csi.cuny.edu/content/Sample_cs_4_yr_degree-career-map.pdf"
            variant="contained"
          >
            Sample Degree Milestone Map
          </Button>
       </>) 
      }
          {/* ooga booga - g */}
      
       
          <Button
            disabled={location.pathname === "/flowchart-aas-cat2022-2023"}
            target="_blank"
            component="a"
            sx={{ m: 0.5 }}
            style={{ background: color }}
            rel="noreferrer noopener"
            href={flowchart}
            variant="contained"
          >

            Catalog {years} CSC Prerequisites Flowchart
          </Button>
        </Paper>
        <Box className="classes-container" component="div">
          <Grid container spacing={1}>
            <Grid item xs={12} md={5}>
              <Card className="classes-card" variant="outlined">
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    MTH
                  </Typography>
                  <Paper
                    elevation={0}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      flexWrap: "wrap",
                      listStyle: "none",
                      p: 0.5,
                      m: 0,
                    }}
                    component="ul"
                  >
                    {mthChipData.slice(0, 1).map((mth_class) => (
                      <ListItem key={mth_class.key}>
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
                      </ListItem>
                    ))}
                  </Paper>
                  <Paper
                    elevation={0}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      flexWrap: "wrap",
                      listStyle: "none",
                      p: 0.5,
                      m: 0,
                    }}
                    component="ul"
                  >
                    {mthChipData.slice(1).map((mth_class) =>
                      location.pathname === "/flowchart-aas-cat2022-2023" &&
                      mth_class.label === "MTH 232" ? null : (
                        <ListItem key={mth_class.key}>
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
                        </ListItem>
                      )
                    )}
                  </Paper>
                </CardContent>
              </Card>
              <Button
                target="_blank"
                style={{ background: color }}
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
                  <Paper
                    elevation={0}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      flexWrap: "wrap",
                      listStyle: "none",
                      p: 0.5,
                      m: 0,
                    }}
                    component="ul"
                  >
                    {cscChipData.slice(0, 4).map((csc_class) => (
                      <Tooltip
                        sx={{ m: 0.5 }}
                        key={csc_class.key}
                        title={csc_class.tooltip}
                        placement="top"
                      >
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
                  </Paper>
                  <Paper
                    elevation={0}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      flexWrap: "wrap",
                      listStyle: "none",
                      p: 0.5,
                      m: 0,
                    }}
                    component="ul"
                  >
                    {cscChipData.slice(4, 12).map((csc_class) =>
                      /* prettier-ignore */
                      (location.pathname === "/flowchart-aas-cat2022-2023" &&
                        (csc_class.label === "CSC 346" ||
                      csc_class.label === "CSC 347" ||
                      csc_class.label === "CSC 382" ||
                      csc_class.label === "CSC 315")) || (location.pathname === "/flowchart-cat2013-2018" && csc_class.label === "CSC 315") ? null : (
                        <Tooltip
                          sx={{ m: 0.5 }}
                          key={csc_class.key}
                          title={csc_class.tooltip}
                          placement="top"
                        >
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
                      )
                    )}
                  </Paper>
                  {location.pathname ===
                  "/flowchart-aas-cat2022-2023" ? null : (
                    <Paper
                      elevation={0}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "wrap",
                        listStyle: "none",
                        p: 0.5,
                        m: 0,
                      }}
                      component="ul"
                    >
                      {cscChipData.slice(12, 16).map((csc_class) => (
                        <Tooltip
                          sx={{ m: 0.5 }}
                          key={csc_class.key}
                          title={csc_class.tooltip}
                          placement="top"
                        >
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
                    </Paper>
                  )}
                </CardContent>
              </Card>
              <Button
                target="_blank"
                component="a"
                style={{ background: color }}
                href={
                  location.pathname === "/flowchart-cat2013-2018"
                    ? "https://csicuny.smartcatalogiq.com/en/Current/Undergraduate-Catalog/Divisions-Schools-Departments-and-Programs/Division-of-Science-and-Technology/Department-of-Computer-Science/Computer-Science-and-Computer-Technology/Computer-Science-BS"
                    : url
                }
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
                  <Paper
                    elevation={0}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      flexWrap: "wrap",
                      listStyle: "none",
                      p: 0.5,
                      m: 0,
                    }}
                    component="ul"
                  >
                    {cscElectives.slice(0, 8).map((csc_class) => (
                      <Tooltip
                        sx={{ m: 0.5 }}
                        key={csc_class.key}
                        title={csc_class.tooltip}
                        placement="top"
                      >
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
                  </Paper>
                  {location.pathname ===
                  "/flowchart-aas-cat2022-2023" ? null : (
                    <Paper
                      elevation={0}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "wrap",
                        listStyle: "none",
                        p: 0.5,
                        m: 0,
                      }}
                      component="ul"
                    >
                      {cscElectives.slice(8, 16).map((csc_class) => (
                        <Tooltip
                          sx={{ m: 0.5 }}
                          key={csc_class.key}
                          title={csc_class.tooltip}
                          placement="top"
                        >
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
                    </Paper>
                  )}
                  {location.pathname ===
                  "/flowchart-aas-cat2022-2023" ? null : (
                    <Paper
                      elevation={0}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "wrap",
                        listStyle: "none",
                        p: 0.5,
                        m: 0,
                      }}
                      component="ul"
                    >
                      {cscElectives.slice(16).map((csc_class) => (
                        <Tooltip
                          sx={{ m: 0.5 }}
                          key={csc_class.key}
                          title={csc_class.tooltip}
                          placement="top"
                        >
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
                    </Paper>
                  )}
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </div>
    </Fragment>
  );
}