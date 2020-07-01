import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import SlowMotionVideoIcon from "@material-ui/icons/SlowMotionVideo";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import login from "../actions/useraction";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();
  useEffect(() => {
    try {
      let userlocal = localStorage.getItem("musicmojouser");
      if (userlocal !== null) {
        dispatch(login(JSON.parse(userlocal)));
      }
    } catch {}
  }, []);

  const logoutaction = () => {
    dispatch(login(""));

    try {
      localStorage.setItem("musicmojouser", "");
    } catch {}
  };

  return (
    <div className={classes.root}>
      <AppBar style={{ backgroundColor: "#0d052b" }} position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <SlowMotionVideoIcon color="secondary" />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              MusicMojo
            </Link>
          </Typography>
          {token ? (
            <Typography
              variant="caption"
              display="block"
              gutterBottom
              style={{ paddingLeft: 1 }}
              onClick={logoutaction}
            >
              Logout
            </Typography>
          ) : (
            <React.Fragment>
              <Typography
                variant="caption"
                display="block"
                gutterBottom
                style={{ paddingLeft: 1 }}
              >
                <Link
                  to="/login"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Login
                </Link>
              </Typography>
              <Typography
                variant="caption"
                display="block"
                gutterBottom
                style={{ paddingLeft: 5 }}
              >
                <Link
                  to="/signup"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  signup
                </Link>
              </Typography>
            </React.Fragment>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
