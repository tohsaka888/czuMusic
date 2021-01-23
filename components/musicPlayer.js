import React, {useContext, useEffect, useRef} from 'react';
import Video from 'react-native-video';
import { homeContext } from "./context";

const MusicPlayer = ({
  musicUrl,
  setCurrentTime,
  changeCurrentTime,
  playerIcon,
  setPlayerIcon,
  stop,
  setStop,
}) => {
  const seekTime = useRef();
  const {
    playlist,
    GetMusicUrl,
    playNext,
    setPlayNext,
    setPlayerImg,
    setPlayerText,
    getLyric,
    setMusicShow,
  } = useContext(homeContext);
  useEffect(() => {
    stop === false &&
      changeCurrentTime !== -1 &&
      seekTime.current.seek(changeCurrentTime);
  }, [changeCurrentTime, stop]);
  return (
    <Video
      source={{uri: musicUrl}}
      playInBackground={true}
      rate={playerIcon === 'play-circle' ? 0 : 1}
      onLoad={() => {
        setPlayerIcon('pause-circle');
      }}
      ref={seekTime}
      onProgress={(value) => {
        if (stop === false) {
          setCurrentTime(value);
        }
      }}
      onEnd={() => {
        if (
          playlist.tracks === undefined ||
          playlist.tracks[playNext + 1] === undefined
        ) {
          setPlayNext(playNext);
          alert('已经是最后一首了！');
        } else {
          GetMusicUrl(playlist.tracks[playNext + 1].id);
          setPlayNext(playNext + 1);
          setPlayerImg(playlist.tracks[playNext + 1].al.picUrl);
          setPlayerText(playlist.tracks[playNext + 1].name);
          getLyric(playlist.tracks[playNext + 1].id);
          setMusicShow(true);
        }
      }}
    />
  );
};
export default MusicPlayer;
