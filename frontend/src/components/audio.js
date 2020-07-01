import React, { useEffect, useRef } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import Chip from "@material-ui/core/Chip";
import addremovFav from "../actions/addremovFav";
import { useDispatch, useSelector } from "react-redux";

function Audio() {
  const player = useRef();

  const songtoplay = useSelector((state) => state.playersong.song);
  const songvalue = useSelector((state) => state.playersong.value);
  const disptach = useDispatch();
  let message = useSelector((state) => state.addremovefromfavourite.result);

  useEffect(() => {
    if (songvalue > 1) {
      player.current.audio.current.play();
    }
  }, [songvalue]);

  return (
    <div style={{ position: "fixed", bottom: 0, width: "100%", right: 0 }}>
      <div>
        {message ? (
          <Chip
            label={message}
            onDelete={() => disptach(addremovFav.clearstate())}
          />
        ) : null}
      </div>
      <AudioPlayer preload="metadata" src={songtoplay} ref={player} />
    </div>
  );
}

export default Audio;
