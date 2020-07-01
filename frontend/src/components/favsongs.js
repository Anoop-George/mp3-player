import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Audio from "./audio";
import getfavsongs from "../actions/favSongsAction";
import Box from "@material-ui/core/Box";
import PlayCircleFilledOutlinedIcon from "@material-ui/icons/PlayCircleFilledOutlined";
import songtoplayer from "../actions/songtoplayerAction";
import FavoriteIcon from "@material-ui/icons/Favorite";
import addremovFav from "../actions/addremovFav";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginTop: 4,
    maxHeight: 345,
  },
  media: {
    maxHeight: 240,
  },

  right: {
    position: "absolute",
    bottom: "5%",
    right: "5%",
  },
  left: {
    position: "absolute",
    bottom: "5%",
    left: "5%",
  },
});

function favSongs() {
  const disptach = useDispatch();
  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    disptach(getfavsongs(token));
  }, [token]);
  let favsongs = useSelector((state) => state.favsongs.songs[0]);

  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="flex-start"
      spacing={1}
    >
      {favsongs ? (
        favsongs.map((item) => {
          return (
            <Grid item xs={6} sm={3} key={item.id} align="center">
              <Card className={classes.root}>
                <CardActionArea>
                  <img
                    src={item.photo}
                    style={{
                      width: "100%",
                      maxHeight: "220px",
                      objectFit: "cover",
                    }}
                  />

                  <Box
                    className={classes.right}
                    onClick={() =>
                      disptach(addremovFav.removefromfav(token, item.id))
                    }
                  >
                    <FavoriteIcon size="small" style={{ color: "#e667e6" }} />
                  </Box>
                  <Box className={classes.left}>
                    <PlayCircleFilledOutlinedIcon
                      color="primary"
                      style={{ fontSize: 40 }}
                      onClick={() => disptach(songtoplayer(item.track))}
                    />
                  </Box>
                </CardActionArea>
              </Card>
              <Typography>{item.name}</Typography>{" "}
            </Grid>
          );
        })
      ) : (
        <Typography variant="h6" style={{ margin: 10, padding: 10 }}>
          Login and add your favourite songs here{" "}
        </Typography>
      )}

      <Grid item xs={12} sm={12}>
        <Audio />
      </Grid>
    </Grid>
  );
}

export default favSongs;
