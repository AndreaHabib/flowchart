import React, { Fragment } from "react";
import { Chip, Paper, ListItem, Typography } from "@mui/material";
import "./styles/Legend.css";

export default function Legend() {
  // eslint-disable-next-line
  const [chipData, setChipData] = React.useState([
    { key: 0, label: "Any Computer Science (CSC)", color: "#007FFF" },
    { key: 1, label: "Any Math (MTH)", color: "#dc143c" },
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
    </Fragment>
  );
}
