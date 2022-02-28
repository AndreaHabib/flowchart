import React, { Fragment } from "react";
import { Chip, Paper, ListItem, Typography, Avatar } from "@mui/material";
import "./styles/Legend.css";

export default function Legend() {
  // eslint-disable-next-line
  const [chipData, setChipData] = React.useState([
    { key: 0, label: "Any Computer Science (CSC)", color: "#007FFF" },
    { key: 1, label: "Any Math (MTH)", color: "#dc143c" },
  ]);

  // eslint-disable-next-line
  const [arrows, setArrows] = React.useState([
    {
      key: 0,
      label: "Prereq",
      color: "#ff4500",
      description:
        "Prerequisite - A course that must be taken before enrolling to the next course.",
      img: "https://res.cloudinary.com/andreahabib/image/upload/v1645988898/prereq_hmtde4.png",
    },
    {
      key: 1,
      label: "Coreq",
      color: "#ff4500",
      description: "Corequisite - Has to be taken same semester",
      img: "https://res.cloudinary.com/andreahabib/image/upload/v1645988898/Untitled_design_qekgom.png",
    },
  ]);
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
                  height: "56px",
                  color: "white",
                  background: data.color,
                }}
                label={data.description}
              />
            </ListItem>
          );
        })}
      </Paper>
    </Fragment>
  );
}
