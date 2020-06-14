import React from "react";
import { Button, Snackbar } from "@material-ui/core";

//
//
interface BoxButtonsSnackbarI {
  snackbarMessage?: string;
  setSnackBarMessage?: (msg: string) => void;
}
const BoxButtonsSnackbar = ({
  snackbarMessage,
  setSnackBarMessage,
}: BoxButtonsSnackbarI) => {
  return (
    <Snackbar
      open={!!snackbarMessage}
      onClose={() => {
        setSnackBarMessage && setSnackBarMessage("");
      }}
      message={snackbarMessage}
      autoHideDuration={3000}
      action={
        <Button
          color="inherit"
          variant="outlined"
          onClick={() => setSnackBarMessage && setSnackBarMessage("")}
        >
          OK
        </Button>
      }
    />
  );
};

export default BoxButtonsSnackbar;
