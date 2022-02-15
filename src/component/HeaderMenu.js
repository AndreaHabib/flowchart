import React from "react";
import { Menu, MenuItem, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function HeaderMenu() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (location) => {
    setAnchorEl(null);
    navigate(`/${location}`);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
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
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Click here to select Flowchart
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleCloseMenu}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={() => handleClose("flowchart-cat2013-2018")}>
          Flowchart 2013-2018
        </MenuItem>
        <MenuItem onClick={() => handleClose("flowchart-cat2018-2020")}>
          Flowchart 2018-2020
        </MenuItem>
        <MenuItem onClick={() => handleClose("flowchart-cat2020-2021")}>
          Flowchart 2020-2021
        </MenuItem>
        <MenuItem onClick={() => handleClose("flowchart-cat2021-2022")}>
          Flowchart 2021-2022
        </MenuItem>
      </Menu>
    </div>
  );
}
