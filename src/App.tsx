import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";

import NavBar from "./components/NavBar";
import { routes } from "./constants/routes";
import bgSprinkles from "./images/backgroundSprinkles.jpg";
import Home from "./pages/HomePage";
import StartPage from "./pages/StartPage";

const SprinklesBG = styled.div`
  background-image: linear-gradient(#ffffff00, #ffffffdd 80%),
    url(${bgSprinkles});
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -100;
`;

function App() {
  return (
    <SprinklesBG>
      <Router>
        <NavBar />
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/start">
          <StartPage />
        </Route>
        {routes.map(({ path, component }) => {
          return (
            <Route key={path} path={path}>
              {component}
            </Route>
          );
        })}
      </Router>
    </SprinklesBG>
  );
}

export default App;
