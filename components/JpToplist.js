import React, {useContext} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {homeContext} from './context';
import {mobileWidth} from './mobileWidth';
import {Flex} from '@ant-design/react-native';

const JpToplist = ({navigation}) => {
  const {jpToplist, playlistAll} = useContext(homeContext);
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
              playlistAll(jpToplist[0].id);
              navigation.navigate('Playlist');
            }}
            style={{
              width: mobileWidth * 0.25,
              height: mobileWidth * 0.25,
              flexWrap: 'wrap',
            }}>
            <Image
              source={{uri: jpToplist[0].coverImgUrl}}
              style={{
                width: mobileWidth * 0.25,
                height: mobileWidth * 0.25,
                borderRadius: 10,
              }}
            />
            <Text numberOfLines={2}>{jpToplist[0].name}</Text>
          </Flex>
          <Flex
            onPress={() => {
              playlistAll(jpToplist[1].id);
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
              source={{uri: jpToplist[1].coverImgUrl}}
              style={{
                width: mobileWidth * 0.25,
                height: mobileWidth * 0.25,
                borderRadius: 10,
              }}
            />
            <Text numberOfLines={2}>{jpToplist[1].name}</Text>
          </Flex>
          <Flex
            onPress={() => {
              playlistAll(jpToplist[2].id);
              navigation.navigate('Playlist');
            }}
            style={{
              width: mobileWidth * 0.25,
              height: mobileWidth * 0.25,
              flexWrap: 'wrap',
            }}>
            <Image
              source={{uri: jpToplist[2].coverImgUrl}}
              style={{
                width: mobileWidth * 0.25,
                height: mobileWidth * 0.25,
                borderRadius: 10,
              }}
            />
            <Text numberOfLines={2}>{jpToplist[2].name}</Text>
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
              playlistAll(jpToplist[3].id);
              navigation.navigate('Playlist');
            }}
            style={{
              width: mobileWidth * 0.25,
              height: mobileWidth * 0.25,
              flexWrap: 'wrap',
            }}>
            <Image
              source={{uri: jpToplist[3].coverImgUrl}}
              style={{
                width: mobileWidth * 0.25,
                height: mobileWidth * 0.25,
                borderRadius: 10,
              }}
            />
            <Text numberOfLines={2}>{jpToplist[3].name}</Text>
          </Flex>
          <Flex
            onPress={() => {
              playlistAll(jpToplist[4].id);
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
              source={{uri: jpToplist[4].coverImgUrl}}
              style={{
                width: mobileWidth * 0.25,
                height: mobileWidth * 0.25,
                borderRadius: 10,
              }}
            />
            <Text numberOfLines={2}>{jpToplist[4].name}</Text>
          </Flex>
          <Flex
            onPress={() => {
              playlistAll(jpToplist[5].id);
              navigation.navigate('Playlist');
            }}
            style={{
              width: mobileWidth * 0.25,
              height: mobileWidth * 0.25,
              flexWrap: 'wrap',
            }}>
            <Image
              source={{uri: jpToplist[5].coverImgUrl}}
              style={{
                width: mobileWidth * 0.25,
                height: mobileWidth * 0.25,
                borderRadius: 10,
              }}
            />
            <Text numberOfLines={2}>{jpToplist[5].name}</Text>
          </Flex>
        </Flex>
        <Flex justify={'center'} style={{marginTop: mobileWidth * 0.15}}>
          <Flex
            onPress={() => {
              playlistAll(jpToplist[6].id);
              navigation.navigate('Playlist');
            }}
            style={{
              width: mobileWidth * 0.25,
              height: mobileWidth * 0.25,
              flexWrap: 'wrap',
            }}>
            <Image
              source={{uri: jpToplist[6].coverImgUrl}}
              style={{
                width: mobileWidth * 0.25,
                height: mobileWidth * 0.25,
                borderRadius: 10,
              }}
            />
            <Text numberOfLines={2}>{jpToplist[6].name}</Text>
          </Flex>
          <Flex
            onPress={() => {
              playlistAll(jpToplist[7].id);
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
              source={{uri: jpToplist[7].coverImgUrl}}
              style={{
                width: mobileWidth * 0.25,
                height: mobileWidth * 0.25,
                borderRadius: 10,
              }}
            />
            <Text numberOfLines={2}>{jpToplist[7].name}</Text>
          </Flex>
          <Flex
            onPress={() => {
              playlistAll(jpToplist[8].id);
              navigation.navigate('Playlist');
            }}
            style={{
              width: mobileWidth * 0.25,
              height: mobileWidth * 0.25,
              flexWrap: 'wrap',
            }}>
            <Image
              source={{uri: jpToplist[8].coverImgUrl}}
              style={{
                width: mobileWidth * 0.25,
                height: mobileWidth * 0.25,
                borderRadius: 10,
              }}
            />
            <Text numberOfLines={2}>{jpToplist[8].name}</Text>
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
              playlistAll(jpToplist[9].id);
              navigation.navigate('Playlist');
            }}
            style={{
              width: mobileWidth * 0.25,
              height: mobileWidth * 0.25,
              flexWrap: 'wrap',
            }}>
            <Image
              source={{uri: jpToplist[9].coverImgUrl}}
              style={{
                width: mobileWidth * 0.25,
                height: mobileWidth * 0.25,
                borderRadius: 10,
              }}
            />
            <Text numberOfLines={2}>{jpToplist[9].name}</Text>
          </Flex>
          <Flex
            onPress={() => {
              playlistAll(jpToplist[10].id);
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
              source={{uri: jpToplist[10].coverImgUrl}}
              style={{
                width: mobileWidth * 0.25,
                height: mobileWidth * 0.25,
                borderRadius: 10,
              }}
            />
            <Text numberOfLines={2}>{jpToplist[10].name}</Text>
          </Flex>
          <Flex
            onPress={() => {
              playlistAll(jpToplist[11].id);
              navigation.navigate('Playlist');
            }}
            style={{
              width: mobileWidth * 0.25,
              height: mobileWidth * 0.25,
              flexWrap: 'wrap',
            }}>
            <Image
              source={{uri: jpToplist[11].coverImgUrl}}
              style={{
                width: mobileWidth * 0.25,
                height: mobileWidth * 0.25,
                borderRadius: 10,
              }}
            />
            <Text numberOfLines={2}>{jpToplist[11].name}</Text>
          </Flex>
        </Flex>
      </View>
    </ScrollView>
  );
};

export default JpToplist;
