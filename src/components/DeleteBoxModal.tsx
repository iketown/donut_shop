import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@material-ui/core";

interface DeleteBoxModalI {
  open: boolean;
  onClose?: () => void;
  boxId?: string;
  handleDelete?: () => void;
}

const DeleteBoxModal = ({
  open,
  onClose,
  boxId,
  handleDelete,
}: DeleteBoxModalI) => {
  const boxName = !boxId || boxId === "unsaved" ? "this box" : `box # ${boxId}`;
  return (
    <Dialog {...{ open, onClose }} data-testid="delete-dialog">
      <DialogTitle>Are you sure you want to delete {boxName}?</DialogTitle>
      <DialogContent>
        <DialogContentText>this cannot be undone</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          data-testid="cancel-delete-box"
          variant="outlined"
          onClick={onClose}
        >
          Cancel
        </Button>
        <Button
          data-testid="confirm-delete-box"
          onClick={() => {
            handleDelete && handleDelete();
            onClose && onClose();
          }}
          variant="outlined"
          color="secondary"
        >
          Delete Box
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteBoxModal;
