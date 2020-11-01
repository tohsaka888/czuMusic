import React, {useContext} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {homeContext, searchIndexContext} from './context';
import {Flex, Icon} from '@ant-design/react-native';
import {mobileWidth} from './mobileWidth';

const SearchMain = () => {
  const {search, GetMusicUrl, SongDetail} = useContext(searchIndexContext);
  const {setMusicShow, getLyric} = useContext(homeContext);
  return (
    <ScrollView style={{padding: 20, marginBottom: 20, width: mobileWidth}}>
      {search.map((item, index) => {
        return (
          <Flex
            style={{marginBottom: 20, width: mobileWidth}}
            key={index}
            onPress={() => {
              GetMusicUrl(item.id);
              SongDetail(item.id);
              getLyric(item.id);
              setMusicShow(true);
            }}>
            <View style={{width: mobileWidth * 0.8}}>
              <View>
                <Text style={{fontSize: 16, color: '#4169E1'}}>
                  {item.name}
                </Text>
              </View>
              <View style={{flexDirection: 'row', marginTop: 5}}>
                {item.artists.map((item, index) => {
                  return (
                    <Text key={index} style={{color: '#cecece'}}>
                      {item.name}{' '}
                    </Text>
                  );
                })}
              </View>
            </View>
            <Icon
              name={'play-circle'}
              style={{flex: 1}}
              onPress={() => {
                GetMusicUrl(item.id);
                SongDetail(item.id);
              }}
            />
          </Flex>
        );
      })}
    </ScrollView>
  );
};

export default SearchMain;
