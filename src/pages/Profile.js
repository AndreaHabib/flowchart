import React, { useState, useEffect, Fragment, useCallback } from "react";
import {
  Button,
  Grid,
  Card,
  Tooltip,
  Chip,
  Paper,
  Typography,
  CardContent,
} from "@mui/material";
import { Link } from "react-router-dom";
import Loading from "../component/Loading";
import {
  signOut,
  auth,
  getClassesTaken,
  onAddClass,
  onDeleteClass,
} from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { mathClasses, cscProfileClasses } from "../flowcharts/classes/Classes";
import { default as el1 } from "../flowcharts/elements/Flowchart1";
import ReactFlow, { MiniMap, Background, Controls } from "react-flow-renderer";

const style = {
  width: "97%",
  height: "75vh",
};

export default function Profile(props) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [classesTaken, setClassesTaken] = useState([]);
  const [loading, setLoading] = useState(true);
  const [reactflowInstance, setReactflowInstance] = useState(null);
  const [isClassesTaken, setIsClassesTaken] = useState(null);
  // eslint-disable-next-line
  const [mthChipData, setMthChipData] = useState(mathClasses);

  // eslint-disable-next-line
  const [cscChipData, setCscChipData] = useState(cscProfileClasses);

  const onLoad = useCallback(
    (rfi) => {
      if (!reactflowInstance) {
        setReactflowInstance(rfi);
      }
    },
    [reactflowInstance]
  );

  const setUserData = useCallback(async (user) => {
    setLoading(true);
    setUser(user);
    await getClassesTaken(user.uid)
      .then((result) => result)
      .then((data) => {
        let classes = [];
        el1[26]["data"]["label"] =
          "Start Here! You can click on CSC 126 to add your first class!";
        classes.push(el1[26]);
        if (data["CSC 126"]) {
          classes.push(el1[0]);
        }
        if (data["200 level elective*"]) {
          classes.push(el1[1]);
          classes.push(el1[30]);
        }
        setClassesTaken(classes);
        setIsClassesTaken(data);
      });
    setLoading(false);
  }, []);

  useEffect(() => {
    let isMounted = true;
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        if (isMounted) navigate("/auth");
      } else {
        if (isMounted) setUserData(user);
      }
    });
    return () => {
      isMounted = false;
    };
  }, [navigate, setUserData]);

  return (
    <Fragment>
      <Grid
        sx={{ backgroundColor: "#CD4931", p: 1 }}
        container
        justifyContent="flex-end"
      >
        <Button sx={{ mr: 1 }} component={Link} to="/" variant="contained">
          Home
        </Button>
        <Button variant="contained" onClick={signOut}>
          Sign out
        </Button>
      </Grid>
      {loading ? (
        <Grid container justify="center" alignItems="center">
          <Loading loading={loading} text="Classes" />
        </Grid>
      ) : (
        <Grid container justifyContent="center" alignItems="center">
          <Grid
            sx={{ height: { xs: "50vh", sm: "50vh", md: "15vh", lg: "75vh" } }}
            item
            xs={12}
            sm={12}
            md={2}
            lg={3}
          >
            <Card
              sx={{ height: "100%", display: "flex", alignItems: "center" }}
              className="classes-card"
              variant="outlined"
            >
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Choose the classes that you have taken.
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
                  {cscChipData.map((csc_class) => (
                    <Tooltip
                      sx={{ m: 0.5 }}
                      key={csc_class.key}
                      title={csc_class.tooltip}
                      placement="top"
                    >
                      <Chip
                        onDelete={
                          isClassesTaken[csc_class.label]
                            ? () => {
                                onDeleteClass(
                                  csc_class.label,
                                  user.uid,
                                  isClassesTaken
                                );
                              }
                            : null
                        }
                        clickable={
                          !isClassesTaken[csc_class.label] &&
                          csc_class.label === "CSC 126"
                        }
                        key={csc_class.key}
                        label={csc_class.label}
                        disabled={
                          !isClassesTaken[csc_class.label] &&
                          csc_class.label !== "CSC 126"
                        }
                        onClick={
                          isClassesTaken[csc_class.label] ||
                          (csc_class.label === "CSC 126" &&
                            !isClassesTaken["CSC 126"])
                            ? () =>
                                onAddClass(
                                  csc_class.label,
                                  user.uid,
                                  isClassesTaken
                                )
                            : null
                        }
                      />
                    </Tooltip>
                  ))}
                </Paper>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={10} lg={9}>
            <ReactFlow
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
              elements={classesTaken}
            >
              <MiniMap />
              <Background />
              <Controls showZoom={false} />
            </ReactFlow>
          </Grid>
        </Grid>
      )}
    </Fragment>
  );
}
