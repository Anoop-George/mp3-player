import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FullWidthTabs from "./label";
import Songs from "./songlist";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="flex-start"
      >
        <Grid item xs={12}>
          {/* <Audio /> */}
        </Grid>
        <Grid item xs={12} sm={12}>
          <FullWidthTabs />
         
        </Grid>
        <Grid item>
          <Songs />
        </Grid>
         
      </Grid>
    </div>
  );
}
