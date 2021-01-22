import React, {useContext} from 'react';
import {Button, FlatList, Text, View} from 'react-native';
import {homeContext} from './context';
import {mobileHeight, mobileWidth} from './mobileWidth';
import {Flex, Icon} from '@ant-design/react-native';
import {ImageBackground} from 'react-native';
import {Image} from 'react-native-elements';

const RankList = () => {
  const {
    ranklist,
    rankdetail,
    GetMusicUrl,
    setPlayerImg,
    setPlayerText,
  } = useContext(homeContext);
  const renderItem = ({item, index}) => {
    return (
      <Flex
        key={index}
        style={{
          paddingLeft: mobileWidth * 0.05,
          paddingTop: 10,
          paddingBottom: 10,
          borderTopWidth: 2,
          borderColor: '#f9f9f9',
        }}>
        <Image
          source={{uri: item.al.picUrl}}
          style={{width: mobileWidth * 0.15, height: mobileWidth * 0.15}}
          borderRadius={10}
        />
        <Flex
          wrap={'wrap'}
          style={{
            width: mobileWidth * 0.7,
            // alignContent: 'center',
            // alignItems: 'center',
            flexWrap: 'wrap',
          }}>
          <View style={{width: mobileWidth * 0.7}}>
            <Text style={{fontWeight: 'bold', marginLeft: 10}}>
              {item.name}
            </Text>
          </View>
          <View>
            <Text style={{fontSize: 12, marginLeft: 10}}>
              {item.ar[0].name}
            </Text>
          </View>
        </Flex>
        <Icon
          name={'play-circle'}
          style={{flex: 1, color: 'black'}}
          onPress={() => {
            GetMusicUrl(item.id), setPlayerImg(item.al.picUrl);
            setPlayerText(item.name);
          }}
        />
      </Flex>
    );
  };
  return (
    <View>
      <ImageBackground
        blurRadius={5}
        source={{
          uri:
            'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20161203%2Ffe97929a646f4d35a84b03deb5ed9bae_th.jpg&refer=http%3A%2F%2Fimg.mp.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1613834628&t=cd59b290176071c1510a96ee4f3c5d95',
        }}
        style={{
          width: mobileWidth,
          height: mobileHeight,
          position: 'absolute',
        }}
      />
      <FlatList
        data={ranklist}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => {
          return (
            <View
              key={index}
              style={{
                height: mobileHeight * 0.73,
                borderBottomWidth: 10,
              }}>
              <Flex
                wrap={'wrap'}
                key={index}
                style={{flexWrap: 'wrap', marginTop: mobileWidth * 0.05}}>
                <Flex
                  style={{
                    width: mobileWidth,
                    // borderBottomWidth: 3,
                    // borderBottomColor: 'white',
                    flexWrap: 'nowrap',
                    paddingTop: 8,
                    paddingBottom: 8,
                    borderRadius: 20,
                  }}>
                  <ImageBackground
                    blurRadius={5}
                    borderRadius={30}
                    style={{
                      width: mobileWidth,
                      position: 'absolute',
                      height: mobileWidth * 0.12,
                    }}
                    source={{
                      uri: item.coverImgUrl,
                      // `https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic16.nipic.com%2F20110928%2F5200151_002314030000_2.jpg&refer=http%3A%2F%2Fpic16.nipic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1613875094&t=f9b40c8acfb9944b0fd7aad4c55d59c3`
                    }}
                  />
                  <Text
                    style={{
                      color: 'black',
                      fontStyle: 'italic',
                      fontSize: 22,
                      fontWeight: 'bold',
                      marginLeft: mobileWidth * 0.05,
                      width: 70,
                    }}>
                    {item.name}
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      color: 'gray',
                      textAlign: 'right',
                      fontWeight: 'bold',
                      marginLeft: mobileWidth * 0.6,
                      borderWidth: 2,
                      borderRadius: 20,
                      paddingLeft: 5,
                      paddingRight: 10,
                      paddingTop: 2,
                      paddingBottom: 2,
                      borderColor: '#cecece',
                      backgroundColor: 'white',
                    }}>
                    More
                  </Text>
                </Flex>
                <View style={{marginLeft: mobileWidth * 0.05}}>
                  <Text
                    numberOfLines={2}
                    style={{
                      fontSize: 16,
                      fontWeight: 'bold',
                      marginTop: mobileWidth * 0.02,
                      marginBottom: 20,
                    }}
                    ellipsizeMode={'tail'}>
                    {item.description}
                  </Text>
                </View>
              </Flex>
              {rankdetail[index] !== undefined && (
                <FlatList
                  style={{height: mobileHeight * 0.67}}
                  data={rankdetail[index].slice(0, 5)}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={renderItem}
                />
              )}
            </View>
          );
        }}
      />
    </View>
  );
};

export default RankList;
