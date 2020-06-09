import React from "react";
import { Button, ButtonGroup } from "@material-ui/core";
//
//
export const SaveBoxButtonWithContext = () => {
  const handleSave = () => {};
  const handleCancel = () => {};
  return (
    <ButtonGroup style={{ marginTop: "1rem" }}>
      <Button onClick={handleCancel} color="secondary" variant="outlined">
        Cancel
      </Button>
      <Button variant="outlined" color="primary" onClick={handleSave}>
        Save Box
      </Button>
    </ButtonGroup>
  );
};

export const SaveBoxButtonWithRedux = () => {
  const handleSave = () => {};
  const handleMarkPaid = () => {};
  const handleCancel = () => {};
  return (
    <ButtonGroup style={{ marginTop: "1rem" }}>
      <Button onClick={handleCancel} color="secondary" variant="outlined">
        Cancel
      </Button>
      <Button variant="outlined" color="primary" onClick={handleSave}>
        Save Box
      </Button>
      <Button onClick={handleMarkPaid} color="primary" variant="outlined">
        mark PAID
      </Button>
    </ButtonGroup>
  );
};
