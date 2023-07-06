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
        Click here to select Prereq Flowchart
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
          Select Prereq Flowchart
        </DialogTitle>
        <DialogContent>
          {/* <MenuItem onClick={() => handleNavigate("flowchart-cat2013-2018")}>
            Flowchart 2013-2018
          </MenuItem>
          <MenuItem onClick={() => handleNavigate("flowchart-cat2018-2020")}>
            Flowchart 2018-2019
          </MenuItem> */}
            <MenuItem onClick={() => handleNavigate("flowchart-cat2023-2024")}>
                Flowchart 2023-2024
            </MenuItem>
            <MenuItem onClick={() => handleNavigate("flowchart-cat2022-2023")}>
                Flowchart 2022-2023
            </MenuItem>
            <MenuItem onClick={() => handleNavigate("flowchart-aas-cat2022-2023")}>
                Associates (AAS) Flowchart 2022-2023
            </MenuItem>
            <MenuItem onClick={() => handleNavigate("flowchart-cat2021-2022")}>
                Flowchart 2021-2022
            </MenuItem>
            <MenuItem onClick={() => handleNavigate("flowchart-cat2020-2021")}>
                Flowchart 2020-2021
            </MenuItem>
            <MenuItem onClick={() => handleNavigate("flowchart-cat2018-2020")}>
                Flowchart 2019-2020
            </MenuItem>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
