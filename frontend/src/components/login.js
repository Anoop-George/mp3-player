import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { Link, Redirect } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import axios from "axios";
import { useDispatch } from "react-redux";
import login from "../actions/useraction";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [message, setMessage] = useState(null);
  const [red, setRed] = useState(false);
  const dispatch = useDispatch();

  const handlesubmit = () => {
    axios
      .post("account/token/login/", { username: name, password: pass })
      .then((res) => {
        setMessage("You are loggedin");
        dispatch(login(res.data.auth_token));
        
        try {
          localStorage.setItem(
            "musicmojouser",
            JSON.stringify(res.data.auth_token)
          );
        } catch {}
        setRed(true);
      })
      .catch(() => {
        setMessage("Error logging in");
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            onChange={(e) => setName(e.target.value)}
            label="User name"
            value={name}
            autoComplete="username"
            autoFocus
          />
          <TextField
            onChange={(e) => setPass(e.target.value)}
            value={pass}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            autoComplete="current-password"
          />
          {message ? (
            <Typography color="secondary">{message}</Typography>
          ) : null}
          {red ? <Redirect to="/" /> : null}
          <Button
            onClick={handlesubmit}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link to="/Signup">"Don't have an account? Sign Up"</Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
