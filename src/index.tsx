import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import theme from "./constants/MuiTheme";
import { ThemeProvider } from "@material-ui/core/styles/";
import WebFontLoader from "webfontloader";

WebFontLoader.load({
  google: {
    families: ["Roboto:300,400,500,700", "Chelsea+Market", "Inconsolata"],
  },
});

const WrappedApp = () => (
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);

ReactDOM.render(<WrappedApp />, document.getElementById("root"));
