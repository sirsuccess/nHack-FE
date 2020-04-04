import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

import Navbar from "../../components/navbar/Navbar"
import FirstSection from "../../components/FirstSection/FirstSection"
import SecondSection from "../../components/secondSection/SecondSection"
import Bar from "../../components/bar/Bar"
import Card from "../../components/card/Card"

const useStyles = makeStyles((theme) => ({
  home: {
    backgroundColor: "#fef4ec",
    maxWidth: "1200px",
    marginRight: "auto",
    marginLeft: "auto",
  },
}));


function Home() {
  const classes = useStyles();
  return (
    <div className={classes.home}>
     <Navbar/>
     <FirstSection/>
     <SecondSection/>
     <Bar/>
     <Card/>
    </div>
  );
}

export default Home;