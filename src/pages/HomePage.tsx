import { Button, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import { Link, useHistory } from "react-router-dom";

import Donut from "../components/Donut";
import { routes } from "../constants/routes";
import getRandomDonut from "../helpers/getRandomDonut";

const HomePage = () => {
  const { push } = useHistory();

  const handleRoute = (path: string) => {
    push(path);
  };
  return (
    <Container maxWidth="sm">
      <Grid container spacing={2}>
        <Grid item xs={12}></Grid>
        <Grid item xs={12} style={{ textAlign: "center", marginTop: "2rem" }}>
          <Typography variant="h4">Choose a section.</Typography>
          <Link to="/start">
            <Typography variant="caption">(intro)</Typography>
          </Link>
        </Grid>
        {routes.map((route, index) => {
          return (
            <Grid
              item
              xs={12}
              sm={4}
              container
              justify="center"
              alignItems="center"
              style={{ padding: "2rem" }}
            >
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleRoute(route.path)}
              >
                {index + 1}. {route.display}
              </Button>
            </Grid>
          );
        })}
        <Grid item xs={12} container justify="center">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              width: "350",
              gridGap: "1rem",
              alignItems: "center",
              justifyItems: "center",
            }}
          >
            {Array.from({ length: 9 }).map((_, i) => (
              <Donut key={i} {...getRandomDonut()} />
            ))}
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
