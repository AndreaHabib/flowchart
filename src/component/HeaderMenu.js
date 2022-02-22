import React from "react";
import {
  MenuItem,
  Button,
  DialogContent,
  DialogContentText,
  DialogTitle,
  DialogActions,
  Dialog,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function HeaderMenu() {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

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
    <div
      style={{
        position: "absolute",
        zIndex: "1",
        width: "100%",
        height: "10vh",
        marginBottom: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button
        id="basic-button"
        color="primary"
        variant="contained"
        aria-controls={open ? "dialog" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClickOpen}
      >
        Click here to select Prereq Flowchart/Checklist
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
          Select Prereq Flowchart/Checklist
        </DialogTitle>
        <DialogContent>
          <DialogContentText>Select Prerequisite Flowchart</DialogContentText>
          <MenuItem onClick={() => handleNavigate("flowchart-cat2013-2018")}>
            Flowchart 2013-2018
          </MenuItem>
          <MenuItem onClick={() => handleNavigate("flowchart-cat2018-2020")}>
            Flowchart 2018-2019
          </MenuItem>
          <MenuItem onClick={() => handleNavigate("flowchart-cat2018-2020")}>
            Flowchart 2019-2020
          </MenuItem>
          <MenuItem onClick={() => handleNavigate("flowchart-cat2020-2021")}>
            Flowchart 2020-2021
          </MenuItem>
          <MenuItem onClick={() => handleNavigate("flowchart-cat2021-2022")}>
            Flowchart 2021-2022
          </MenuItem>
          <DialogContentText>Select Checklist</DialogContentText>
          <MenuItem
            rel="noopener noreferrer"
            target="_blank"
            component="a"
            href="https://docs.google.com/document/d/1RJb8bq-f9Atk7jfLt2n-higf2kUA-oHMmFuHtE2UoM4/edit?usp=sharing"
          >
            Checklist 2013-2018
          </MenuItem>
          <MenuItem
            rel="noopener noreferrer"
            target="_blank"
            component="a"
            href="https://drive.google.com/file/d/1rXvHfgEx0nHZp_5HxVJJ9xOPPm5MxBnk/view?usp=sharing"
          >
            Checklist 2018-2019
          </MenuItem>
          <MenuItem
            rel="noopener noreferrer"
            target="_blank"
            component="a"
            href="https://drive.google.com/file/d/1rXvHfgEx0nHZp_5HxVJJ9xOPPm5MxBnk/view?usp=sharing"
          >
            Checklist 2019-2020
          </MenuItem>
          <MenuItem
            rel="noopener noreferrer"
            target="_blank"
            component="a"
            href="https://drive.google.com/file/d/1rXvHfgEx0nHZp_5HxVJJ9xOPPm5MxBnk/view?usp=sharing"
          >
            Checklist 2020-2021
          </MenuItem>
          <MenuItem
            rel="noopener noreferrer"
            target="_blank"
            component="a"
            href="http://www.cs.csi.cuny.edu/content/CSC_BS_Pathways_checklist_2021-22-major-catalog.pdf"
          >
            Checklist 2021-2022
          </MenuItem>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
