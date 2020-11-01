import React, {useContext} from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import {homeContext} from './context';
import {mobileHeight, mobileWidth} from './mobileWidth';
import {Flex, Icon} from '@ant-design/react-native';

const UserPlaylist = ({navigation}) => {
  const {playlistAll, userDetail, userPlaylist, setIsShown} = useContext(
    homeContext,
  );
  const renderItem = ({item, index}) => {
    return (
      <Flex
        key={index}
        onPress={() => {
          setIsShown(false);
          playlistAll(item.id);
          navigation.navigate('Playlist');
        }}
        style={{
          marginBottom:
            index === userPlaylist.length - 1 ? mobileHeight * 0.07 : 0,
          marginTop: index === 0 ? 0 : mobileWidth * 0.05,
        }}>
        <Image
          source={{uri: item.coverImgUrl}}
          style={{
            width: mobileWidth * 0.2,
            height: mobileWidth * 0.2,
            borderRadius: 10,
          }}
        />
        <View style={{marginLeft: mobileWidth * 0.05}}>
          <Text style={{fontSize: mobileWidth * 0.04, fontWeight: '900'}}>
            {item.name}
          </Text>
          <View style={{flexDirection: 'row', marginTop: 5}}>
            <Text style={{fontSize: 12, color: 'grey'}}>
              {item.trackCount}首，
            </Text>
            <Text style={{fontSize: 12, color: 'grey'}}>
              播放{item.playCount}
            </Text>
          </View>
        </View>
      </Flex>
    );
  };
  return (
    <View style={{height: mobileHeight - mobileWidth * 0.15}}>
      <View style={{position: 'absolute'}}>
        <Image
          source={{uri: userDetail.profile.backgroundUrl}}
          style={{width: mobileWidth, height: mobileHeight * 0.4}}
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
          我的歌单
        </Text>
      </Flex>
      <FlatList
        data={userPlaylist}
        initialNumToRender={10}
        style={{
          marginTop: mobileHeight * 0.3,
          backgroundColor: 'white',
          padding: mobileWidth * 0.05,
          borderRadius: 20,
        }}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default UserPlaylist;
