import React, {useContext, useRef, useState} from 'react';
import {
  Animated,
  FlatList,
  Image,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import {mobileHeight, mobileWidth} from './mobileWidth';
import {Flex, Icon} from '@ant-design/react-native';
import {homeContext, ModalContext} from './context';
import {Slider} from 'react-native-elements';

const MusicDetail = () => {
  const [showImg, setShowImg] = useState(true);
  const {navigation} = useContext(ModalContext);
  const musicRef = useRef();
  const indexRef = useRef(-1);
  const time = useRef(0);
  const lastIndex = useRef(10000);
  const {
    setMusicShow,
    playerText,
    playerImg,
    currentTime,
    setChangeCurrentTime,
    playValue,
    setPlayValue,
    setStop,
    playerIcon,
    setPlayerIcon,
    lyric,
    playlist,
    playNext,
    setPlayNext,
    GetMusicUrl,
    setPlayerImg,
    setPlayerText,
    getLyric,
  } = useContext(homeContext);
  const renderItem = ({item, index}) => {
    if (
      item.start <= currentTime.currentTime &&
      item.end >= currentTime.currentTime
    ) {
      if (indexRef.current !== index) {
        indexRef.current = index;
        if (time.current === 0 && mobileHeight * 0.36 - index * 33 <= 0) {
          lastIndex.current = lyric.length - index;
          time.current = 1;
        }
        if (time.current === 1) {
          lastIndex.current--;
        }
      }
      musicRef.current &&
        musicRef.current.scrollToIndex({
          viewPosition: 0.5,
          index: index,
          animated: true,
        });
      return (
        <Text
          style={{
            color: '#f9f9f9',
            textAlign: 'center',
            lineHeight: 33,
            fontSize: 16,
          }}
          key={index}
          onPress={() => {
            setShowImg(true);
          }}>
          {item.text}
        </Text>
      );
    } else {
      return (
        <Text
          style={{
            color: '#cecece',
            textAlign: 'center',
            lineHeight: 33,
            fontSize: 16,
          }}
          key={index}
          onPress={() => {
            setShowImg(true);
          }}>
          {item.text}
        </Text>
      );
    }
  };
  return (
    <View>
      <Image
        source={{uri: playerImg}}
        style={{
          width: mobileWidth,
          height: mobileHeight * 1.1,
          position: 'absolute',
          resizeMode: 'stretch',
        }}
        blurRadius={150}
      />
      <Flex
        style={{
          padding: mobileWidth * 0.03,
          alignContent: 'center',
          alignItems: 'center',
        }}>
        <Icon
          name={'arrow-left'}
          onPress={() => {
            navigation.navigate('Home');
            setMusicShow(false);
          }}
          size={mobileWidth * 0.1}
        />
        <Text
          style={{
            fontSize: mobileWidth * 0.05,
            marginLeft: mobileWidth * 0.05,
            fontWeight: 'bold',
            color: 'white',
          }}>
          {playerText}
        </Text>
      </Flex>
      <TouchableOpacity
        onPress={() => {
          setShowImg(false);
        }}
        style={{
          height: mobileHeight * 0.6,
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          display: showImg ? undefined : 'none',
          marginBottom: mobileHeight * 0.18,
        }}>
        <Image
          source={{uri: playerImg}}
          style={{
            marginTop: mobileHeight * 0.05,
            width: mobileWidth * 0.8,
            height: mobileWidth * 0.8,
            borderRadius: mobileWidth,
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          height: mobileHeight * 0.78,
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          display: showImg === false ? undefined : 'none',
        }}>
        <FlatList
          style={{
            marginTop:
              mobileHeight * 0.36 - indexRef.current * 33 < 0
                ? 0
                : mobileHeight * 0.36 - indexRef.current * 33,
            marginBottom:
              mobileHeight * 0.36 - lastIndex.current * 33 < 0
                ? 0
                : mobileHeight * 0.36 - lastIndex.current * 33,
          }}
          data={lyric}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
          ref={musicRef}
          keyExtractor={(item, index) => index.toString()}
          getItemLayout={(data, index) => ({
            length: lyric.length,
            offset: index * 33,
            index,
          })}
          contentContainerStyle={{
            alignItems: 'center',
            justifyContent: 'center',
            alignContent: 'center',
          }}
        />
      </TouchableOpacity>
      <Slider
        style={{
          width: mobileWidth * 0.9,
          marginLeft: mobileWidth * 0.05,
        }}
        value={playValue}
        onSlidingStart={(value) => {
          setStop(true);
        }}
        onSlidingComplete={(value) => {
          setChangeCurrentTime(value * currentTime.seekableDuration);
          setPlayValue(value);
          setStop(false);
        }}
        thumbStyle={{
          height: 20,
          width: 20,
          backgroundColor: 'transparent',
        }}
        thumbProps={{
          Component: Animated.Image,
          source: {
            uri:
              'https://i0.hdslb.com/bfs/emote/70dc5c7b56f93eb61bddba11e28fb1d18fddcd4c.png@100w_100h.webp',
          },
        }}
      />
      <Flex wrap={'nowrap'} style={{marginLeft: 'auto', marginRight: 'auto'}}>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => alert('Pressed!')}>
          <Icon
            name={'step-backward'}
            size={mobileWidth * 0.1}
            onPress={() => {
              if (playNext === -1 || playNext === 0) {
                setPlayNext(0);
                alert('已经是第一首啦！');
              } else {
                GetMusicUrl(playlist.tracks[playNext - 1].id);
                setPlayNext(playNext - 1);
                setPlayerImg(playlist.tracks[playNext - 1].al.picUrl);
                setPlayerText(playlist.tracks[playNext - 1].name);
                getLyric(playlist.tracks[playNext - 1].id);
                setMusicShow(true);
              }
            }}
          />
        </TouchableHighlight>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="red"
          onPress={() => alert('Pressed!')}>
          <View>
            <Icon
              style={{
                marginLeft: mobileWidth * 0.05,
                marginRight: mobileWidth * 0.05,
              }}
              name={playerIcon}
              size={mobileWidth * 0.1}
              onPress={() => {
                setPlayerIcon(
                  playerIcon === 'pause-circle'
                    ? 'play-circle'
                    : 'pause-circle',
                );
              }}
            />
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => alert('Pressed!')}>
          <Icon
            name={'step-forward'}
            size={mobileWidth * 0.1}
            onPress={() => {
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
        </TouchableHighlight>
      </Flex>
    </View>
  );
};

export default MusicDetail;
