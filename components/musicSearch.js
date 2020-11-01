import React, {useContext, useState} from 'react';
import {View} from 'react-native';
import {Flex, Icon, InputItem} from '@ant-design/react-native';
import {searchContext, searchIndexContext} from './context';
import {createStackNavigator} from '@react-navigation/stack';
import SearchIndex from './searchIndex';
import SearchMain from './searchMain';

const SecStack = createStackNavigator();

const MusicSearch = ({navigation}) => {
  const {
    GetMusicUrl,
    defaultWords,
    hotSearch,
    search,
    searchContent,
    SongDetail,
  } = useContext(searchIndexContext);
  const [text, setText] = useState('');

  return (
    <View style={{height: 1000}}>
      <Flex
        style={{
          padding: 10,
          backgroundColor: 'red',
          alignContent: 'center',
          alignItems: 'center',
        }}>
        <Icon
          color={'white'}
          name={'arrow-left'}
          size={25}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <View style={{flex: 1}}>
          <InputItem
            style={{color: 'white'}}
            placeholder={defaultWords}
            placeholderTextColor={'#cecece'}
            onChange={(value) => {
              setText(value);
            }}
          />
        </View>
        <Icon
          name={'search'}
          style={{marginLeft: 10}}
          color={'white'}
          onPress={() => {
            searchContent(text);
            navigation.navigate('SearchMain');
          }}
        />
      </Flex>
      <searchContext.Provider
        value={{hotSearch, search, GetMusicUrl, SongDetail}}>
        <SecStack.Navigator>
          <SecStack.Screen
            name={'SearchIndex'}
            component={SearchIndex}
            options={{headerShown: false}}
          />
          <SecStack.Screen
            name={'SearchMain'}
            component={SearchMain}
            options={{headerShown: false}}
          />
        </SecStack.Navigator>
      </searchContext.Provider>
    </View>
  );
};

export default MusicSearch;
