import React, {useContext, useRef, useState} from 'react';
import {
  Animated,
  FlatList,
  Image,
  Text,
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
  } = useContext(homeContext);
  const renderItem = ({item, index}) => {
    if (
      item.start <= currentTime.currentTime &&
      item.end >= currentTime.currentTime
    ) {
      musicRef.current &&
        musicRef.current.scrollToIndex({viewPosition: 0.5, index: index});
      return (
        <Text
          style={{
            color: '#f9f9f9',
            textAlign: 'center',
            lineHeight: 30,
            fontSize: 18,
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
            lineHeight: 30,
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
        blurRadius={50}
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
          marginBottom: mobileHeight * 0.2,
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
          height: mobileHeight * 0.8,
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          display: showImg === false ? undefined : 'none',
        }}>
        <FlatList
          data={lyric}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
          ref={musicRef}
          keyExtractor={(item, index) => index.toString()}
          getItemLayout={(data, index) => ({
            length: lyric.length,
            offset: index * 30,
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
      <Icon
        name={playerIcon}
        style={{marginLeft: 'auto', marginRight: 'auto'}}
        size={mobileWidth * 0.15}
        onPress={() => {
          setPlayerIcon(
            playerIcon === 'pause-circle' ? 'play-circle' : 'pause-circle',
          );
        }}
      />
    </View>
  );
};

export default MusicDetail;
