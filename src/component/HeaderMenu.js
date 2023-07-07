import React, { useState } from "react";
import {
  MenuItem,
  Button,
  DialogContent,
  DialogTitle,
  DialogActions,
  Dialog,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./styles/HeaderMenu.css";

import Grid from '@mui/material/Unstable_Grid2';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function HeaderMenu() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNavigate = (location) => {
    setOpen(false);
    navigate(`/${location}`);
  };

  const handleHome = () => {
    setOpen(false);
    navigate(`/`);
  };

  function createData(name, location) {
        return { name, location};
  }

  const Bachelors = [
        createData('Flowchart 2023-2024', "flowchart-cat2023-2024"),
        createData('Flowchart 2022-2023', "flowchart-cat2022-2023"),
        createData('Flowchart 2021-2022', "flowchart-cat2021-2022"),
        createData('Flowchart 2020-2021', "flowchart-cat2020-2021"),
        createData('Flowchart 2019-2020', "flowchart-cat2018-2020"),
  ];

    const Associates = [
        createData('Flowchart 2022-2023',"flowchart-aas-cat2022-2023"),
    ];

  return (
    <div className="flowcharts">
      <Button
        id="basic-button"
        color="primary"
        variant="contained"
        aria-controls={open ? "dialog" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClickOpen}
      >
        Click here to select Prerequisite Flowchart
      </Button>
      <Dialog
        scroll="paper"
        fullWidth={true}
        maxWidth="lg"
        open={open}
        onClose={handleClose}
        transitionDuration={0.5}
      >
        <DialogActions>
          <Button onClick={handleHome}>Home</Button>
        </DialogActions>
        <DialogTitle id="form-dialog-title">
          Select Prerequisite Flowchart
        </DialogTitle>
        <DialogContent>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell id="title">Bachelor (4 years)</TableCell>
                        <TableCell id="title">Associate (2 years)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Bachelors.map((rowB, index) => (
                        <TableRow key={rowB.name}>
                            <TableCell>
                                <MenuItem onClick={() => handleNavigate(rowB.location)}>
                                    {rowB.name}
                                </MenuItem>
                            </TableCell>
                            {Associates[index] && (
                                <TableCell>
                                    <MenuItem onClick={() => handleNavigate(Associates[index].location)}>
                                        {Associates[index].name}
                                    </MenuItem>
                                </TableCell>
                            )}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}