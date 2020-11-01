import React, {useContext} from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import {homeContext} from './context';
import {mobileHeight, mobileWidth} from './mobileWidth';
import {Flex, Icon} from '@ant-design/react-native';

const DailyRecommend = ({navigation}) => {
  const {
    recommendSong,
    userDetail,
    GetMusicUrl,
    setPlayerText,
    setPlayerImg,
  } = useContext(homeContext);
  const renderItem = ({item, index}) => {
    return (
      <Flex
        style={{
          width: mobileWidth,
          marginBottom:
            index === recommendSong.length - 1 ? mobileHeight * 0.07 : 20,
        }}
        key={index}>
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
            {item.ar &&
              item.ar.map((item, index) => {
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
            setPlayerImg(item.album.picUrl);
            setPlayerText(item.name);
          }}
        />
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
          每日推荐
        </Text>
      </Flex>
      <FlatList
        data={recommendSong}
        style={{
          marginTop: mobileHeight * 0.3,
          backgroundColor: 'white',
          borderRadius: 30,
          padding: mobileWidth * 0.05,
        }}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default DailyRecommend;
