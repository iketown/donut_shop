import { Button, Grid, GridProps } from "@material-ui/core";
import React, { useState } from "react";

import DeleteBoxModal from "./DeleteBoxModal";

interface BoxButtonsI {
  handleSave?: () => void;
  handleMarkPaid?: () => void;
  handleCancel?: () => void;
  handleDelete?: () => void;
  box?: Box;
}
const BoxButtons = ({
  handleSave,
  handleMarkPaid,
  handleCancel,
  handleDelete,
  box,
}: BoxButtonsI) => {
  // dont edit this component
  const [modalOpen, setModalOpen] = useState(false);

  const gridButtonStyle: GridProps = {
    xs: 6,
    item: true,
    style: {
      textAlign: "center",
    },
  };
  return (
    <>
      <Grid
        container
        style={{ margin: "1rem 0", maxWidth: "275px" }}
        spacing={1}
      >
        <Grid {...gridButtonStyle}>
          <Button
            fullWidth
            disabled={!box?.donuts.length || !!box?.paid}
            variant="outlined"
            color="primary"
            onClick={handleSave}
          >
            Save Box
          </Button>
        </Grid>
        <Grid {...gridButtonStyle}>
          <Button
            fullWidth
            disabled={box?.id === "unsaved" || !!box?.paid}
            onClick={handleMarkPaid}
            color="primary"
            variant="outlined"
          >
            mark PAID
          </Button>
        </Grid>
        <Grid {...gridButtonStyle}>
          <Button
            fullWidth
            onClick={handleCancel}
            color="secondary"
            variant="outlined"
          >
            Cancel
          </Button>
        </Grid>
        <Grid {...gridButtonStyle}>
          <Button
            fullWidth
            onClick={() => {
              setModalOpen(true);
            }}
            color="secondary"
            variant="outlined"
          >
            Delete
          </Button>
        </Grid>
      </Grid>
      <DeleteBoxModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        boxId={box?.id}
        handleDelete={handleDelete}
      />
    </>
  );
};

export default BoxButtons;
