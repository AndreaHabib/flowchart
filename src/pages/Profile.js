import React, { useState, useEffect, Fragment, useCallback } from "react";
import {
  Button,
  Box,
  Grid,
  Card,
  Tooltip,
  Alert,
  Chip,
  Paper,
  Typography,
  CardContent,
  Skeleton,
  Divider,
} from "@mui/material";
import { setFlowchart } from "./SetFlowchart/SetFlowchart";
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
import {
  cscProfileClasses,
  mathProfileClasses,
} from "../flowcharts/classes/Classes";
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
  const [mthChipData, setMthChipData] = useState(mathProfileClasses);

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

  useEffect(() => {
    let isMounted = true;
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        if (isMounted) navigate("/auth");
      } else {
        if (isMounted) {
          (async () => {
            try {
              setLoading(true);
              setUser(user);
              await getClassesTaken(user.uid)
                .then((result) => result)
                .then((data) => {
                  setClassesTaken(setFlowchart(data));
                  setIsClassesTaken(data);
                });
              setLoading(false);
            } catch (error) {
              setLoading(false);
            }
          })();
        }
      }
    });
    return () => {
      isMounted = false;
    };
  }, [navigate]);

  return (
    <Fragment>
      <Box sx={{ width: "100%", backgroundColor: "#007FFF" }}>
        <Grid
          sx={{
            width: "90%",
            backgroundColor: "#007FFF",
            p: 1,
            borderBottom: "10px solid #007FFF",
          }}
          container
          justifyContent="flex-end"
        >
          <Button
            color="success"
            size="small"
            sx={{ mr: 1 }}
            component={Link}
            to="/"
            variant="contained"
          >
            Home
          </Button>
          <Button
            size="small"
            color="error"
            variant="contained"
            onClick={signOut}
          >
            Sign out
          </Button>
        </Grid>
      </Box>
      <Grid justifyContent="center" container>
        <Grid item xs={12}>
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              marginTop: "1rem",
              marginBottom: "1rem",
            }}
          >
            Welcome to your personal planner!
          </Typography>
        </Grid>
        <Grid sx={{ borderTop: "10px solid #007FFF" }} item xs={12}>
          <Alert
            action={
              <Button
                size="small"
                rel="noreferrer noopener"
                target="_blank"
                component="a"
                href="https://degreeworks.cuny.edu/Dashboard_si/dashboard"
                variant="contained"
                color="primary"
              >
                DegreeWorks
              </Button>
            }
            severity="info"
          >
            <Typography variant="body1">
              You may use DegreeWorks as reference to help you figure out the
              classes that you have taken, or currently taking.
            </Typography>
          </Alert>
        </Grid>
      </Grid>
      {loading ? (
        <Grid container justify="center" alignItems="center">
          <Loading loading={loading} text="Classes" />
          <Grid container justifyContent="center" alignItems="center">
            <Grid
              sx={{
                height: { xs: "50vh", sm: "50vh", md: "15vh", lg: "75vh" },
              }}
              item
              xs={12}
              sm={12}
              md={2}
              lg={3}
            >
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                className="classes-card"
                variant="outlined"
              >
                <Skeleton
                  sx={{ bgcolor: "grey.400" }}
                  variant="rectangular"
                  width="90%"
                  height="50%"
                />
              </Card>
            </Grid>
            <Grid
              justifyContent="center"
              alignItems="center"
              item
              xs={12}
              sm={12}
              md={10}
              lg={9}
            >
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                className="classes-card"
                variant="outlined"
              >
                <Skeleton
                  sx={{ bgcolor: "grey.400" }}
                  variant="rectangular"
                  width="90%"
                  height="50vh"
                />
              </Card>
            </Grid>
          </Grid>
        </Grid>
      ) : (
        <Grid
          sx={{ borderTop: "10px solid #007FFF" }}
          container
          justifyContent="center"
          alignItems="center"
        >
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
                  <Chip
                    size="small"
                    sx={{ m: 0.5 }}
                    color="primary"
                    label="Can Be Taken"
                  />
                  <Chip
                    size="small"
                    sx={{ m: 0.5 }}
                    color="success"
                    label="Taken And Can Be Untaken"
                  />
                  <Chip
                    size="small"
                    disabled
                    sx={{ m: 0.5 }}
                    color="error"
                    label="Can Not Be Taken"
                  />
                  <Chip
                    size="small"
                    disabled
                    sx={{ m: 0.5 }}
                    color="warning"
                    label="Taken But Cannot Be Untaken"
                  />
                </Paper>
                <Divider />
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
                  <Grid container justifyContent="center">
                    <Grid sx={{ marginBottom: "20px" }}>
                      {cscChipData.map((csc_class) => (
                        <Tooltip
                          sx={{ m: 0.5 }}
                          key={csc_class.key}
                          title={csc_class.tooltip}
                          placement="top"
                        >
                          <Chip
                            color={
                              isClassesTaken[csc_class.label].isTaken
                                ? isClassesTaken[csc_class.label].canBeUntaken
                                  ? "success"
                                  : "warning"
                                : isClassesTaken[csc_class.label].canBeTaken
                                ? "primary"
                                : "error"
                            }
                            onDelete={
                              isClassesTaken[csc_class.label].canBeUntaken
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
                              !isClassesTaken[csc_class.label].isTaken ||
                              isClassesTaken[csc_class.label].canBeTaken ||
                              !isClassesTaken[csc_class.label].canBeUntaken
                            }
                            key={csc_class.key}
                            label={csc_class.label}
                            disabled={
                              (!isClassesTaken[csc_class.label].canBeUntaken &&
                                !isClassesTaken[csc_class.label].isTaken &&
                                !isClassesTaken[csc_class.label].canBeTaken) ||
                              (!isClassesTaken[csc_class.label].canBeUntaken &&
                                isClassesTaken[csc_class.label].isTaken)
                            }
                            onClick={
                              isClassesTaken[csc_class.label].canBeTaken
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
                    </Grid>
                    <Grid>
                      {mthChipData.map((mth_class) => (
                        <Tooltip
                          sx={{ m: 0.5 }}
                          key={mth_class.key}
                          title={mth_class.tooltip}
                          placement="top"
                        >
                          <Chip
                            color={
                              isClassesTaken[mth_class.label].isTaken
                                ? isClassesTaken[mth_class.label].canBeUntaken
                                  ? "success"
                                  : "warning"
                                : isClassesTaken[mth_class.label].canBeTaken
                                ? "primary"
                                : "error"
                            }
                            onDelete={
                              isClassesTaken[mth_class.label].canBeUntaken
                                ? () => {
                                    onDeleteClass(
                                      mth_class.label,
                                      user.uid,
                                      isClassesTaken
                                    );
                                  }
                                : null
                            }
                            clickable={
                              !isClassesTaken[mth_class.label].isTaken ||
                              isClassesTaken[mth_class.label].canBeTaken ||
                              !isClassesTaken[mth_class.label].canBeUntaken
                            }
                            key={mth_class.key}
                            label={mth_class.label}
                            disabled={
                              (!isClassesTaken[mth_class.label].canBeUntaken &&
                                !isClassesTaken[mth_class.label].isTaken &&
                                !isClassesTaken[mth_class.label].canBeTaken) ||
                              (!isClassesTaken[mth_class.label].canBeUntaken &&
                                isClassesTaken[mth_class.label].isTaken)
                            }
                            onClick={
                              isClassesTaken[mth_class.label].canBeTaken
                                ? () =>
                                    onAddClass(
                                      mth_class.label,
                                      user.uid,
                                      isClassesTaken
                                    )
                                : null
                            }
                          />
                        </Tooltip>
                      ))}
                    </Grid>
                  </Grid>
                </Paper>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={10} lg={9}>
            <ReactFlow
              preventScrolling={false}
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
