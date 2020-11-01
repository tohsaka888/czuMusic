import React, {useEffect, useRef} from 'react';
import Video from 'react-native-video';

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
    />
  );
};
export default MusicPlayer;
