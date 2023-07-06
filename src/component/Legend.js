import React, { Fragment, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Chip, Paper, ListItem, Typography, Avatar } from "@mui/material";
import "./styles/Legend.css";

export default function Legend() {
  const location = useLocation();

  const [arrows, setArrows] = React.useState([]);

  // eslint-disable-next-line
  const [chipData, setChipData] = React.useState([
    { key: 0, label: "Any Computer Science (CSC)", color: "#007FFF" },
    { key: 1, label: "Any Math (MTH)", color: "#dc143c" },
  ]);

  useEffect(() => {
    let color = "";
    if (location.pathname === "/flowchart-cat2013-2018") {
      color = "#32cd32";
    } else if (location.pathname === "/flowchart-cat2018-2020") {
      color = "#f4a460";
    } else if (location.pathname === "/flowchart-cat2020-2021") {
      color = "#663399";
    } else if (location.pathname === "/flowchart-cat2021-2022") {
      color = "#1e90ff";
    } else if (location.pathname === "/flowchart-cat2022-2023") {
      color = "#BF987B";
    } 
    else if (location.pathname === "/flowchart-cat2023-2024") {
      color = "#c2441d";
    }else if (location.pathname === "/flowchart-aas-cat2022-2023") {
      color = "#009688";
    }
    else if (location.pathname === "/flowchart-cat2023-2024") {
      color = "#c2441d";
    }

    setArrows([
      {
        key: 0,
        label: "Prereq",
        color: color,
        description: `
        Prerequisite - A course that must be taken
        before enrolling to the next course.
        `,
        img: "https://res.cloudinary.com/andreahabib/image/upload/v1645988898/prereq_hmtde4.png",
      },
      {
        key: 1,
        label: "Coreq",
        color: color,
        description: "Corequisite - Has to be taken same semester",
        img: "https://res.cloudinary.com/andreahabib/image/upload/v1645988898/Untitled_design_qekgom.png",
      },
    ]);
  }, [location]);

  return (
    <Fragment>
      <Typography mt={3} variant="h6">
        Legend
      </Typography>
      <Paper
        elevation={0}
        className="legend"
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
        {chipData.map((data) => {
          return (
            <ListItem key={data.key}>
              <Chip
                sx={{ color: "white", background: data.color }}
                label={data.label}
              />
            </ListItem>
          );
        })}
      </Paper>
      <Paper
        elevation={0}
        className="legend"
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
        {arrows.map((data) => {
          return (
            <ListItem key={data.key}>
              <Chip
                size="medium"
                avatar={<Avatar alt={data.title} src={data.img} />}
                sx={{
                  height: { xs: "100px", sm: "56px", md: "56px", lg: "56px" },
                  color: "white",
                  background: data.color,
                }}
                label={
                  <Typography style={{ whiteSpace: "normal" }}>
                    {data.description}
                  </Typography>
                }
              />
            </ListItem>
          );
        })}
      </Paper>
    </Fragment>
  );
}
