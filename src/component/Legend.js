import React, { Fragment } from "react";
import { Chip, Paper, ListItem, Typography } from "@mui/material";
import "./styles/Legend.css";

export default function Legend() {
  const [chipData, setChipData] = React.useState([
    { key: 0, label: "CSC126", color: "#03C03C" },
    { key: 1, label: "Any MTH", color: "#dc143c" },
    { key: 2, label: "CSC200*/211/326", color: "#006400" },
    { key: 5, label: "CSC220/346/347/446", color: "#008080" },
    { key: 6, label: "CSC382", color: "#c71585" },
    { key: 7, label: "CSC330", color: "#ff69b4" },
    { key: 8, label: "CSC315", color: "#4169e1" },
    { key: 9, label: "CSC332/305", color: "#ff7f50" },
    { key: 10, label: "CSC490", color: "#800000" },
    { key: 11, label: "CSC430", color: "#4b0082" },
    { key: 12, label: "CSC400*", color: "#483d8b" },
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
