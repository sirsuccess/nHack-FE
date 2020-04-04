import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: "#f07504",
    marginTop: "2em",
    paddingLeft: "2em",
    paddingRight: "2em",
    textTransform: "none",
    fontSize: "20px",
  },
}));

export default function DisableElevation() {
  const classes = useStyles();
  return (
    <Button
      variant="contained"
      color="primary"
      className={classes.button}
      disableElevation
    >
      Get Started
    </Button>
  );
}
