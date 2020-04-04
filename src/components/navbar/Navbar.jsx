import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  navbar: {
    backgroundColor: " #fef4ec",
    color: "#aaaeb2",
    padding: 0,
    boxShadow: "none",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  recruit: {
    textTransform: "none",
    fontWeight: "normal",
    lineHeight: 1.75,
    borderRadius: "4px",
    letterSpacing: "0.02857em",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <img src="https://res.cloudinary.com/sirsuccess/image/upload/v1586035173/react-native%20snapshot/logo_rkdnco.jpg" alt="" />
          </IconButton>
          <Typography variant="h6" className={classes.title}></Typography>
          <Button color="inherit" className={classes.recruit}>
            For Recruiters
          </Button>
          <Button color="inherit" className={classes.recruit}>
            For Hackers
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
