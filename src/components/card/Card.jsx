import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";

import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";

import CardData from "../../Data/cardData";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 245,
    marginBottom:"2em"
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  how: {
    color: "#40403b",
  },
  cardDisplay: {
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap:"wrap",
    // marginTop: "1em",
    paddingBottom: "5em",
  },
  txt:{
    textAlign: "left"
  }
}));

export default function RecipeReviewCard() {
  const classes = useStyles();

  return (
    <>
      <CardHeader title="How it works" />
      <div className={classes.cardDisplay}>
        {CardData.map((item, index) => (
          <Card className={classes.root}>
            <CardHeader title={item.title} />
            <img src={item.img} alt="" />
            <CardContent>
              <Typography variant="body2" color="textSecondary" className={classes.txt} component="p">
                {item.text}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
