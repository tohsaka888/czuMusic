import React, {useContext} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {homeContext} from './context';
import {mobileWidth} from './mobileWidth';
import {Flex} from '@ant-design/react-native';

const ChineseToplist = ({navigation}) => {
  const {chToplist, playlistAll} = useContext(homeContext);
  return (
    <ScrollView>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>精选Top3</Text>
      <View
        style={{
          backgroundColor: 'white',
          paddingTop: mobileWidth * 0.03,
          paddingBottom: mobileWidth * 0.1,
          borderRadius: 20,
          marginTop: mobileWidth * 0.03,
        }}>
        <Flex justify={'center'}>
          <Flex
            onPress={() => {
              playlistAll(chToplist[0].id);
              navigation.navigate('Playlist');
            }}
            style={{
              width: mobileWidth * 0.25,
              height: mobileWidth * 0.25,
              flexWrap: 'wrap',
            }}>
            <Image
              source={{uri: chToplist[0].coverImgUrl}}
              style={{
                width: mobileWidth * 0.25,
                height: mobileWidth * 0.25,
                borderRadius: 10,
              }}
            />
            <Text numberOfLines={2}>{chToplist[0].name}</Text>
          </Flex>
          <Flex
            onPress={() => {
              playlistAll(chToplist[1].id);
              navigation.navigate('Playlist');
            }}
            style={{
              marginLeft: mobileWidth * 0.05,
              marginRight: mobileWidth * 0.05,
              width: mobileWidth * 0.25,
              height: mobileWidth * 0.25,
              flexWrap: 'wrap',
            }}>
            <Image
              source={{uri: chToplist[1].coverImgUrl}}
              style={{
                width: mobileWidth * 0.25,
                height: mobileWidth * 0.25,
                borderRadius: 10,
              }}
            />
            <Text numberOfLines={2}>{chToplist[1].name}</Text>
          </Flex>
          <Flex
            onPress={() => {
              playlistAll(chToplist[2].id);
              navigation.navigate('Playlist');
            }}
            style={{
              width: mobileWidth * 0.25,
              height: mobileWidth * 0.25,
              flexWrap: 'wrap',
            }}>
            <Image
              source={{uri: chToplist[2].coverImgUrl}}
              style={{
                width: mobileWidth * 0.25,
                height: mobileWidth * 0.25,
                borderRadius: 10,
              }}
            />
            <Text numberOfLines={2}>{chToplist[2].name}</Text>
          </Flex>
        </Flex>
      </View>
      <View style={{marginTop: mobileWidth * 0.05}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>
          前十精品，推荐给你
        </Text>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          borderRadius: 20,
          paddingTop: mobileWidth * 0.05,
          marginTop: mobileWidth * 0.05,
        }}>
        <Flex justify={'center'}>
          <Flex
            onPress={() => {
              playlistAll(chToplist[3].id);
              navigation.navigate('Playlist');
            }}
            style={{
              width: mobileWidth * 0.25,
              height: mobileWidth * 0.25,
              flexWrap: 'wrap',
            }}>
            <Image
              source={{uri: chToplist[3].coverImgUrl}}
              style={{
                width: mobileWidth * 0.25,
                height: mobileWidth * 0.25,
                borderRadius: 10,
              }}
            />
            <Text numberOfLines={2}>{chToplist[3].name}</Text>
          </Flex>
          <Flex
            onPress={() => {
              playlistAll(chToplist[4].id);
              navigation.navigate('Playlist');
            }}
            style={{
              marginLeft: mobileWidth * 0.05,
              marginRight: mobileWidth * 0.05,
              width: mobileWidth * 0.25,
              height: mobileWidth * 0.25,
              flexWrap: 'wrap',
            }}>
            <Image
              source={{uri: chToplist[4].coverImgUrl}}
              style={{
                width: mobileWidth * 0.25,
                height: mobileWidth * 0.25,
                borderRadius: 10,
              }}
            />
            <Text numberOfLines={2}>{chToplist[4].name}</Text>
          </Flex>
          <Flex
            onPress={() => {
              playlistAll(chToplist[5].id);
              navigation.navigate('Playlist');
            }}
            style={{
              width: mobileWidth * 0.25,
              height: mobileWidth * 0.25,
              flexWrap: 'wrap',
            }}>
            <Image
              source={{uri: chToplist[5].coverImgUrl}}
              style={{
                width: mobileWidth * 0.25,
                height: mobileWidth * 0.25,
                borderRadius: 10,
              }}
            />
            <Text numberOfLines={2}>{chToplist[5].name}</Text>
          </Flex>
        </Flex>
        <Flex justify={'center'} style={{marginTop: mobileWidth * 0.15}}>
          <Flex
            onPress={() => {
              playlistAll(chToplist[6].id);
              navigation.navigate('Playlist');
            }}
            style={{
              width: mobileWidth * 0.25,
              height: mobileWidth * 0.25,
              flexWrap: 'wrap',
            }}>
            <Image
              source={{uri: chToplist[6].coverImgUrl}}
              style={{
                width: mobileWidth * 0.25,
                height: mobileWidth * 0.25,
                borderRadius: 10,
              }}
            />
            <Text numberOfLines={2}>{chToplist[6].name}</Text>
          </Flex>
          <Flex
            onPress={() => {
              playlistAll(chToplist[7].id);
              navigation.navigate('Playlist');
            }}
            style={{
              marginLeft: mobileWidth * 0.05,
              marginRight: mobileWidth * 0.05,
              width: mobileWidth * 0.25,
              height: mobileWidth * 0.25,
              flexWrap: 'wrap',
            }}>
            <Image
              source={{uri: chToplist[7].coverImgUrl}}
              style={{
                width: mobileWidth * 0.25,
                height: mobileWidth * 0.25,
                borderRadius: 10,
              }}
            />
            <Text numberOfLines={2}>{chToplist[7].name}</Text>
          </Flex>
          <Flex
            onPress={() => {
              playlistAll(chToplist[8].id);
              navigation.navigate('Playlist');
            }}
            style={{
              width: mobileWidth * 0.25,
              height: mobileWidth * 0.25,
              flexWrap: 'wrap',
            }}>
            <Image
              source={{uri: chToplist[8].coverImgUrl}}
              style={{
                width: mobileWidth * 0.25,
                height: mobileWidth * 0.25,
                borderRadius: 10,
              }}
            />
            <Text numberOfLines={2}>{chToplist[8].name}</Text>
          </Flex>
        </Flex>
        <Flex
          justify={'center'}
          style={{
            marginTop: mobileWidth * 0.15,
            marginBottom: mobileWidth * 0.15,
          }}>
          <Flex
            onPress={() => {
              playlistAll(chToplist[9].id);
              navigation.navigate('Playlist');
            }}
            style={{
              width: mobileWidth * 0.25,
              height: mobileWidth * 0.25,
              flexWrap: 'wrap',
            }}>
            <Image
              source={{uri: chToplist[9].coverImgUrl}}
              style={{
                width: mobileWidth * 0.25,
                height: mobileWidth * 0.25,
                borderRadius: 10,
              }}
            />
            <Text numberOfLines={2}>{chToplist[9].name}</Text>
          </Flex>
          <Flex
            onPress={() => {
              playlistAll(chToplist[10].id);
              navigation.navigate('Playlist');
            }}
            style={{
              marginLeft: mobileWidth * 0.05,
              marginRight: mobileWidth * 0.05,
              width: mobileWidth * 0.25,
              height: mobileWidth * 0.25,
              flexWrap: 'wrap',
            }}>
            <Image
              source={{uri: chToplist[10].coverImgUrl}}
              style={{
                width: mobileWidth * 0.25,
                height: mobileWidth * 0.25,
                borderRadius: 10,
              }}
            />
            <Text numberOfLines={2}>{chToplist[10].name}</Text>
          </Flex>
          <Flex
            onPress={() => {
              playlistAll(chToplist[11].id);
              navigation.navigate('Playlist');
            }}
            style={{
              width: mobileWidth * 0.25,
              height: mobileWidth * 0.25,
              flexWrap: 'wrap',
            }}>
            <Image
              source={{uri: chToplist[11].coverImgUrl}}
              style={{
                width: mobileWidth * 0.25,
                height: mobileWidth * 0.25,
                borderRadius: 10,
              }}
            />
            <Text numberOfLines={2}>{chToplist[11].name}</Text>
          </Flex>
        </Flex>
      </View>
    </ScrollView>
  );
};

export default ChineseToplist;
