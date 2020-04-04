import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  secondSection: {
    marginTop: "3em",
    marginBottom: "3em",
    width: "60%",
    marginLeft: "auto",
    marginRight: "auto",
    lineHeight: "2.5em",
    textAlign: "left",
  },
}));

function SecondSection() {
  const classes = useStyles();
  return (
    <div className={classes.secondSection}>
      We are building the brige and conneting tech people with right
      opportunities. Companies also get to choose the best talents and and hire
      in the shortest time possible.
    </div>
  );
}

export default SecondSection;
