import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import AppRouter from "./routes";

const useStyles = makeStyles((theme) => ({
  App: {
    textAlign: "center",
    backgroundColor: "#fef4ec",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.App}>
      <AppRouter />
    </div>
  );
}

export default App;
