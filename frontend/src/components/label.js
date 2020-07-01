import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import songtype from "../actions/songtype";
import { Link } from "react-router-dom";

function FullWidthTabs() {
  const disptach = useDispatch();

  return (
    <Grid
      container
      direction="row"
      justify="space-evenly"
      alignItems="flex-start"
      style={{ backgroundColor: "#1d1e47" }}
    >
      <Grid item xs={3}>
        <Button
          style={{ color: "#ffffff" }}
          onClick={() => disptach(songtype.rock())}
        >
          Rock
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          style={{ color: "#ffffff" }}
          onClick={() => disptach(songtype.popsong())}
        >
          Pop
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          style={{ color: "#ffffff" }}
          onClick={() => disptach(songtype.classic())}
        >
          Classic
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button>
          <Link style={{ color: "#ffffff", textDecoration: "none" }} to="/fav">
            {" "}
            Fav
          </Link>
        </Button>
      </Grid>
    </Grid>
  );
}

export default FullWidthTabs;
