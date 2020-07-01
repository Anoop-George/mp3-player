import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getsongs from "../actions/getdata";
import Grid from "@material-ui/core/Grid";
import songtype from "../actions/songtype";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Audio from "./audio";
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
    maxWidth: 250,
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

function Songs() {
  const disptach = useDispatch();
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    disptach(getsongs());
  }, []);

  let songs = useSelector((state) => state.songs.songs[0]);
  let genre = useSelector((state) => state.songtype.genre);
  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    if (songs) {
      setFiltered(songs.filter((item) => item.genre == genre));
    }
  }, [genre, songs]);
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="flex-start"
      spacing={1}
    >
      {filtered.map((item) => {
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
                    disptach(addremovFav.addtofavmainaction(token, item.id))
                  }
                >
                  
                  <FavoriteIcon style={{ color: "#d5d8f5" }} />
                </Box>
                <Box className={classes.left}>
                  <PlayCircleFilledOutlinedIcon
                    color="secondary"
                    style={{ fontSize: 40 }}
                    onClick={() => disptach(songtoplayer(item.track))}
                  />
                </Box>
              </CardActionArea>
            </Card>
            <Typography>{item.name}</Typography>{" "}
          </Grid>
        );
      })}
      <Grid item xs={12} sm={12}>
        <Audio />
      </Grid>
    </Grid>
  );
}

export default Songs;
