import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  CircularProgress,
} from "@mui/material";

export default function Loading({ text, loading }) {
  return (
    <Dialog
      open={loading}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{`Loading ${text}...`}</DialogTitle>
      <DialogContent
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <DialogContentText id="alert-dialog-description">
          <CircularProgress />
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
}
