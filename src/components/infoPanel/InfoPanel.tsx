import React from "react";
import { Collapse, Button } from "@material-ui/core";
import styled from "styled-components";
import Donut from "../Donut";

const PanelContents = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    button {
      margin-bottom: 5px;
    }
  }
`;
interface InfoPanelI {
  donut?: Donut;
  width?: number;
  boxIsFull?: boolean;
}
const InfoPanel = ({ donut }: InfoPanelI) => {
  const handleRemove = () => {};
  const handleDuplicate = () => {};
  const handleCancel = () => {};

  return (
    <Collapse style={{ margin: "1rem", width: 250 }} in={!!donut}>
      <PanelContents>
        {!!donut ? <Donut size={150} /> : <div />}
        <div className="buttons">
          <Button size="small" variant="outlined" onClick={handleCancel}>
            ok
          </Button>
          <Button
            size="small"
            onClick={handleRemove}
            variant="outlined"
            color="secondary"
            data-testid="remove-donut-button"
          >
            Remove
          </Button>
          <Button
            size="small"
            variant="outlined"
            color="primary"
            data-testid="duplicate-donut-button"
            onClick={handleDuplicate}
          >
            + 1
          </Button>
        </div>
      </PanelContents>
    </Collapse>
  );
};

export default InfoPanel;
