import React, {useContext} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {homeContext} from './context';
import {Flex, Modal, Button, Icon} from '@ant-design/react-native';
import {mobileHeight, mobileWidth} from './mobileWidth';
import ModalIndex from './modalIndex';
import Playlist from './playlist';

const MyMusic = ({navigation}) => {
  const {
    loginStatus,
    setSearchVisible,
    userDetail,
    userPlaylist,
    logout,
    cookie,
    playlistAll,
    setIsShown,
    removeCookie,
  } = useContext(homeContext);

  return (
    <View>
      {loginStatus.code === 301 && (
        <Flex
          style={{
            marginLeft: mobileWidth * 0.05,
            marginTop: mobileWidth * 0.05,
          }}>
          <View
            style={{
              width: mobileWidth * 0.2,
              height: mobileWidth * 0.2,
              borderRadius: mobileWidth * 0.5,
              backgroundColor: '#cecece',
            }}
          />
          <Text
            style={{fontSize: 18, fontWeight: 'bold', marginLeft: 15}}
            onPress={() => {
              setSearchVisible('none');
              navigation.navigate('ModalIndex');
            }}>
            立即登录 >
          </Text>
        </Flex>
      )}
      {loginStatus.code === 200 && (
        <Flex
          style={{
            marginLeft: mobileWidth * 0.05,
            marginTop: mobileWidth * 0.05,
          }}>
          <Image
            source={{uri: loginStatus.profile.avatarUrl}}
            style={{
              width: mobileWidth * 0.2,
              height: mobileWidth * 0.2,
              borderRadius: mobileWidth * 0.5,
              backgroundColor: '#cecece',
            }}
          />
          <View>
            <Text
              style={{fontSize: 18, fontWeight: 'bold', marginLeft: 15}}
              onPress={() => {
                setSearchVisible('none');
                navigation.navigate('ModalIndex');
              }}>
              {loginStatus.profile.nickname}
            </Text>
            {userDetail.profile && (
              <Text style={{marginLeft: 15}}>
                {userDetail.profile.signature}
              </Text>
            )}
          </View>
        </Flex>
      )}
      <Flex
        style={{
          padding: mobileWidth * 0.05,
          backgroundColor: '#f9f9f9',
          margin: mobileWidth * 0.05,
          borderRadius: 10,
        }}>
        <View
          style={{
            width: mobileWidth * 0.15,
            height: mobileWidth * 0.15,
            backgroundColor: 'red',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
            borderRadius: mobileWidth * 0.2,
          }}>
          <Icon name={'team'} size={'lg'} color={'white'} />
        </View>
        <View style={{flexWrap: 'nowrap'}}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 18,
              marginLeft: mobileWidth * 0.05,
            }}>
            我的好友
          </Text>
          <Text style={{fontSize: 16, marginLeft: mobileWidth * 0.05}}>
            {userDetail.profile && loginStatus.code === 200
              ? userDetail.profile.follows + userDetail.profile.followeds
              : 0}
            名
          </Text>
        </View>
      </Flex>
      <Flex
        style={{
          padding: mobileWidth * 0.05,
          backgroundColor: '#f9f9f9',
          marginLeft: mobileWidth * 0.05,
          marginRight: mobileWidth * 0.05,
          marginBottom: mobileWidth * 0.05,
          borderRadius: 10,
        }}
        onPress={() => {
          if (loginStatus.code === 200) {
            setIsShown(false);
            playlistAll(userPlaylist[0].id);
            navigation.navigate('Playlist');
          }
        }}>
        <View
          style={{
            width: mobileWidth * 0.15,
            height: mobileWidth * 0.15,
            backgroundColor: 'red',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
            borderRadius: mobileWidth * 0.2,
          }}>
          <Icon name={'heart'} size={'lg'} color={'white'} />
        </View>
        <View style={{flexWrap: 'nowrap'}}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 18,
              marginLeft: mobileWidth * 0.05,
            }}>
            我喜欢的音乐
          </Text>
          <Text style={{fontSize: 16, marginLeft: mobileWidth * 0.05}}>
            {loginStatus.code === 200
              ? userPlaylist[0] && userPlaylist[0].trackCount
              : 0}
            首
          </Text>
        </View>
      </Flex>
      <Flex
        style={{
          padding: mobileWidth * 0.05,
          backgroundColor: '#f9f9f9',
          marginLeft: mobileWidth * 0.05,
          marginRight: mobileWidth * 0.05,
          marginBottom: mobileWidth * 0.05,
          borderRadius: 10,
        }}
        onPress={() => {
          if (loginStatus.code === 200) {
            navigation.navigate('UserPlaylist');
          }
        }}>
        <View
          style={{
            width: mobileWidth * 0.15,
            height: mobileWidth * 0.15,
            backgroundColor: 'red',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
            borderRadius: mobileWidth * 0.2,
          }}>
          <Icon name={'star'} size={'lg'} color={'white'} />
        </View>
        <View style={{flexWrap: 'nowrap'}}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 18,
              marginLeft: mobileWidth * 0.05,
            }}>
            我的歌单
          </Text>
          <Text style={{fontSize: 16, marginLeft: mobileWidth * 0.05}}>
            {loginStatus.code === 200 ? userPlaylist && userPlaylist.length : 0}
            个
          </Text>
        </View>
      </Flex>
      <Button
        style={{
          borderRadius: 30,
          backgroundColor: 'red',
          width: mobileWidth * 0.9,
          margin: mobileWidth * 0.05,
        }}
        onPress={() => {
          logout();
          cookie.current = '';
          removeCookie();
        }}>
        <Text style={{color: 'white'}}>退出登录</Text>
      </Button>
    </View>
  );
};

export default MyMusic;
