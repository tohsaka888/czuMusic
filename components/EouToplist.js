import React, {useContext} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {homeContext} from './context';
import {mobileWidth} from './mobileWidth';
import {Flex} from '@ant-design/react-native';

const EouToplist = ({navigation}) => {
  const {eouToplist, playlistAll} = useContext(homeContext);
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
              playlistAll(eouToplist[0].id);
              navigation.navigate('Playlist');
            }}
            style={{
              width: mobileWidth * 0.25,
              height: mobileWidth * 0.25,
              flexWrap: 'wrap',
            }}>
            <Image
              source={{uri: eouToplist[0].coverImgUrl}}
              style={{
                width: mobileWidth * 0.25,
                height: mobileWidth * 0.25,
                borderRadius: 10,
              }}
            />
            <Text numberOfLines={2}>{eouToplist[0].name}</Text>
          </Flex>
          <Flex
            onPress={() => {
              playlistAll(eouToplist[1].id);
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
              source={{uri: eouToplist[1].coverImgUrl}}
              style={{
                width: mobileWidth * 0.25,
                height: mobileWidth * 0.25,
                borderRadius: 10,
              }}
            />
            <Text numberOfLines={2}>{eouToplist[1].name}</Text>
          </Flex>
          <Flex
            onPress={() => {
              playlistAll(eouToplist[2].id);
              navigation.navigate('Playlist');
            }}
            style={{
              width: mobileWidth * 0.25,
              height: mobileWidth * 0.25,
              flexWrap: 'wrap',
            }}>
            <Image
              source={{uri: eouToplist[2].coverImgUrl}}
              style={{
                width: mobileWidth * 0.25,
                height: mobileWidth * 0.25,
                borderRadius: 10,
              }}
            />
            <Text numberOfLines={2}>{eouToplist[2].name}</Text>
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
              playlistAll(eouToplist[3].id);
              navigation.navigate('Playlist');
            }}
            style={{
              width: mobileWidth * 0.25,
              height: mobileWidth * 0.25,
              flexWrap: 'wrap',
            }}>
            <Image
              source={{uri: eouToplist[3].coverImgUrl}}
              style={{
                width: mobileWidth * 0.25,
                height: mobileWidth * 0.25,
                borderRadius: 10,
              }}
            />
            <Text numberOfLines={2}>{eouToplist[3].name}</Text>
          </Flex>
          <Flex
            onPress={() => {
              playlistAll(eouToplist[4].id);
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
              source={{uri: eouToplist[4].coverImgUrl}}
              style={{
                width: mobileWidth * 0.25,
                height: mobileWidth * 0.25,
                borderRadius: 10,
              }}
            />
            <Text numberOfLines={2}>{eouToplist[4].name}</Text>
          </Flex>
          <Flex
            onPress={() => {
              playlistAll(eouToplist[5].id);
              navigation.navigate('Playlist');
            }}
            style={{
              width: mobileWidth * 0.25,
              height: mobileWidth * 0.25,
              flexWrap: 'wrap',
            }}>
            <Image
              source={{uri: eouToplist[5].coverImgUrl}}
              style={{
                width: mobileWidth * 0.25,
                height: mobileWidth * 0.25,
                borderRadius: 10,
              }}
            />
            <Text numberOfLines={2}>{eouToplist[5].name}</Text>
          </Flex>
        </Flex>
        <Flex justify={'center'} style={{marginTop: mobileWidth * 0.15}}>
          <Flex
            onPress={() => {
              playlistAll(eouToplist[6].id);
              navigation.navigate('Playlist');
            }}
            style={{
              width: mobileWidth * 0.25,
              height: mobileWidth * 0.25,
              flexWrap: 'wrap',
            }}>
            <Image
              source={{uri: eouToplist[6].coverImgUrl}}
              style={{
                width: mobileWidth * 0.25,
                height: mobileWidth * 0.25,
                borderRadius: 10,
              }}
            />
            <Text numberOfLines={2}>{eouToplist[6].name}</Text>
          </Flex>
          <Flex
            onPress={() => {
              playlistAll(eouToplist[7].id);
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
              source={{uri: eouToplist[7].coverImgUrl}}
              style={{
                width: mobileWidth * 0.25,
                height: mobileWidth * 0.25,
                borderRadius: 10,
              }}
            />
            <Text numberOfLines={2}>{eouToplist[7].name}</Text>
          </Flex>
          <Flex
            onPress={() => {
              playlistAll(eouToplist[8].id);
              navigation.navigate('Playlist');
            }}
            style={{
              width: mobileWidth * 0.25,
              height: mobileWidth * 0.25,
              flexWrap: 'wrap',
            }}>
            <Image
              source={{uri: eouToplist[8].coverImgUrl}}
              style={{
                width: mobileWidth * 0.25,
                height: mobileWidth * 0.25,
                borderRadius: 10,
              }}
            />
            <Text numberOfLines={2}>{eouToplist[8].name}</Text>
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
              playlistAll(eouToplist[9].id);
              navigation.navigate('Playlist');
            }}
            style={{
              width: mobileWidth * 0.25,
              height: mobileWidth * 0.25,
              flexWrap: 'wrap',
            }}>
            <Image
              source={{uri: eouToplist[9].coverImgUrl}}
              style={{
                width: mobileWidth * 0.25,
                height: mobileWidth * 0.25,
                borderRadius: 10,
              }}
            />
            <Text numberOfLines={2}>{eouToplist[9].name}</Text>
          </Flex>
          <Flex
            onPress={() => {
              playlistAll(eouToplist[10].id);
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
              source={{uri: eouToplist[10].coverImgUrl}}
              style={{
                width: mobileWidth * 0.25,
                height: mobileWidth * 0.25,
                borderRadius: 10,
              }}
            />
            <Text numberOfLines={2}>{eouToplist[10].name}</Text>
          </Flex>
          <Flex
            onPress={() => {
              playlistAll(eouToplist[11].id);
              navigation.navigate('Playlist');
            }}
            style={{
              width: mobileWidth * 0.25,
              height: mobileWidth * 0.25,
              flexWrap: 'wrap',
            }}>
            <Image
              source={{uri: eouToplist[11].coverImgUrl}}
              style={{
                width: mobileWidth * 0.25,
                height: mobileWidth * 0.25,
                borderRadius: 10,
              }}
            />
            <Text numberOfLines={2}>{eouToplist[11].name}</Text>
          </Flex>
        </Flex>
      </View>
    </ScrollView>
  );
};

export default EouToplist;
