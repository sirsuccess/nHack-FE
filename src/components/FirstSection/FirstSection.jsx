import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Button from "../Button";

const useStyles = makeStyles((theme) => ({
  FirstSection: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap:"wrap",
    alignItems: "center",
    marginTop: "5em",
    paddingLeft: "24px",
    paddingLight: "24px",
  },
  text: {
    textAlign: "left",
    width: "40%",
  },

  textHeader: {
    color: "#364a54",
    fontSize: "25px",
    fontWeight: "900",
  },

  button: {
    backgroundColor: "#f07504",
    marginTop: "2em",
    paddingLeft: "2em",
    paddingRight: "2em",
    textTransform: "none",
    fontSize: "20px",
  },
  img: {
    width: "50%",
  },
}));

function FirstSection() {
  const classes = useStyles();

  return (
    <div className={classes.FirstSection}>
      <div className={classes.text}>
        <div className={classes.textHeader}>
          Build and grow your community through your skills
        </div>
        <p>Participate in challenges. learn, get hired and grow.</p>
        <Button />
      </div>
      <img src="https://res.cloudinary.com/sirsuccess/image/upload/v1586035174/react-native%20snapshot/mobile_wsijok.jpg" className={classes.img} alt="mobile" />
    </div>
  );
}

export default FirstSection;
