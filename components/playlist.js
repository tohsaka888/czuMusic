import React, {useContext} from 'react';
import {Text, View, Image, FlatList} from 'react-native';
import {homeContext} from './context';
import {mobileHeight, mobileWidth} from './mobileWidth';
import {Flex, Icon} from '@ant-design/react-native';
import Loader from './Loader';

const Playlist = ({navigation}) => {
  const {
    playlist,
    GetMusicUrl,
    setPlayerText,
    setPlayerImg,
    isShown,
    getLyric,
    setMusicShow,
  } = useContext(homeContext);
  const renderItem = ({item, index}) => {
    return (
      <Flex
        style={{width: mobileWidth, marginBottom: mobileWidth * 0.1}}
        key={item.name}
        onPress={() => {
          GetMusicUrl(item.id);
          setPlayerImg(item.al.picUrl);
          setPlayerText(item.name);
          getLyric(item.id);
          setMusicShow(true);
        }}>
        <Text style={{width: mobileWidth * 0.1, fontSize: 18}}>
          {index + 1}
        </Text>
        <View style={{width: mobileWidth * 0.7}}>
          <Text
            style={{
              width: mobileWidth * 0.7,
              overflow: 'hidden',
              fontSize: 16,
            }}>
            {item.name}
          </Text>
          <Text style={{marginTop: 5}}>
            {item.ar.map((item, index) => {
              return (
                <Text key={index} style={{fontSize: 14, color: '#cecece'}}>
                  {item.name}
                </Text>
              );
            })}
          </Text>
        </View>
        <Icon
          name={'play-circle'}
          size={26}
          onPress={() => {
            GetMusicUrl(item.id);
            setPlayerImg(item.al.picUrl);
            setPlayerText(item.name);
          }}
        />
      </Flex>
    );
  };
  return (
    <View>
      {isShown === false && <Loader visible={true} />}
      {isShown === true && (
        <View style={{height: mobileHeight - mobileWidth * 0.15}}>
          <View style={{position: 'absolute', width: mobileWidth}}>
            <Image
              source={{uri: playlist.coverImgUrl}}
              resizeMode={'stretch'}
              style={{
                width: mobileWidth,
                height: mobileWidth * 0.65,
                zIndex: -1,
              }}
              blurRadius={20}
            />
          </View>
          <Flex
            style={{
              padding: mobileWidth * 0.03,
              alignContent: 'center',
              alignItems: 'center',
            }}>
            <Icon
              name={'arrow-left'}
              onPress={() => {
                navigation.goBack();
              }}
              size={mobileWidth * 0.06}
              color={'white'}
            />
            <Text
              style={{
                fontSize: mobileWidth * 0.05,
                marginLeft: mobileWidth * 0.05,
                color: 'white',
                fontWeight: 'bold',
              }}>
              歌单
            </Text>
          </Flex>
          <Flex
            style={{
              alignItems: 'center',
              alignContent: 'center',
              marginTop: mobileWidth * 0.02,
            }}>
            <Image
              source={{uri: playlist.coverImgUrl}}
              style={{
                width: mobileWidth * 0.3,
                height: mobileWidth * 0.3,
                borderRadius: 10,
                marginTop: mobileWidth * 0.05,
                marginLeft: mobileWidth * 0.05,
              }}
            />
            <View
              style={{
                width: mobileWidth * 0.6,
                marginLeft: mobileWidth * 0.03,
              }}>
              <Text
                style={{
                  fontSize: mobileWidth * 0.045,
                  flexWrap: 'wrap',
                  color: 'white',
                }}>
                {playlist.name}
              </Text>
              <Flex
                style={{
                  alignItems: 'center',
                  alignContent: 'center',
                }}>
                {playlist.creator !== undefined && (
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      alignContent: 'center',
                      marginTop: mobileWidth * 0.05,
                    }}>
                    <Image
                      source={{uri: playlist.creator.avatarUrl}}
                      style={{
                        width: mobileWidth * 0.1,
                        height: mobileWidth * 0.1,
                        borderRadius: mobileWidth * 0.1,
                      }}
                    />
                    <Text
                      style={{color: 'white', marginLeft: mobileWidth * 0.03}}>
                      {playlist.creator.nickname}
                    </Text>
                  </View>
                )}
              </Flex>
            </View>
          </Flex>
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={playlist.tracks}
            initialNumToRender={10}
            renderItem={renderItem}
            style={{
              marginTop: mobileWidth * 0.1,
              backgroundColor: 'white',
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
              padding: mobileWidth * 0.05,
            }}
          />
          <View
            style={{height: mobileHeight * 0.03, backgroundColor: 'white'}}
          />
        </View>
      )}
    </View>
  );
};

export default Playlist;
