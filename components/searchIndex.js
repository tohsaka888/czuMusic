import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {Flex} from '@ant-design/react-native';
import {searchContext} from './context';

const SearchIndex = () => {
  const {hotSearch} = useContext(searchContext);

  return (
    <View>
      <View
        style={{
          padding: 15,
          borderBottomWidth: 1,
          borderColor: '#cecece',
        }}>
        <Text style={{fontSize: 14, fontWeight: 'bold'}}>热搜榜</Text>
      </View>
      <Flex style={{padding: 15}}>
        {hotSearch.slice(0, 2).map((item, index) => {
          return (
            <View style={{flex: 1}} key={index}>
              <Text style={{marginTop: 10}}>
                <Text
                  style={{
                    color: 'red',
                    fontSize: 16,
                    fontWeight: 'bold',
                  }}>
                  {index + 1}
                </Text>
                <Text style={{fontSize: 16}}> </Text>
                <Text
                  style={{
                    marginLeft: 5,
                    fontSize: 16,
                    fontWeight: 'bold',
                  }}>
                  {item.first}
                </Text>
              </Text>
            </View>
          );
        })}
      </Flex>
      <Flex style={{padding: 15}}>
        {hotSearch.slice(2, 4).map((item, index) => {
          return (
            <View style={{flex: 1}} key={index}>
              <Text style={{marginTop: 10}}>
                <Text
                  style={{
                    color: 'red',
                    fontSize: 16,
                    fontWeight: 'bold',
                  }}>
                  {index + 3}
                </Text>
                <Text style={{fontSize: 16}}> </Text>
                <Text
                  style={{
                    marginLeft: 5,
                    fontSize: 16,
                    fontWeight: 'bold',
                  }}>
                  {item.first}
                </Text>
              </Text>
            </View>
          );
        })}
      </Flex>
      <Flex style={{padding: 15}}>
        {hotSearch.slice(4, 6).map((item, index) => {
          return (
            <View style={{flex: 1}} key={index}>
              <Text style={{marginTop: 10}}>
                <Text
                  style={{
                    color: 'red',
                    fontSize: 16,
                    fontWeight: 'bold',
                  }}>
                  {index + 5}
                </Text>
                <Text style={{fontSize: 16}}> </Text>
                <Text
                  style={{
                    marginLeft: 5,
                    fontSize: 16,
                    fontWeight: 'bold',
                  }}>
                  {item.first}
                </Text>
              </Text>
            </View>
          );
        })}
      </Flex>
      <Flex style={{padding: 15}}>
        {hotSearch.slice(6, 8).map((item, index) => {
          return (
            <View style={{flex: 1}} key={index}>
              <Text style={{marginTop: 10}}>
                <Text
                  style={{
                    color: 'red',
                    fontSize: 16,
                    fontWeight: 'bold',
                  }}>
                  {index + 7}
                </Text>
                <Text style={{fontSize: 16}}> </Text>
                <Text
                  style={{
                    marginLeft: 5,
                    fontSize: 16,
                    fontWeight: 'bold',
                  }}>
                  {item.first}
                </Text>
              </Text>
            </View>
          );
        })}
      </Flex>
      <Flex style={{padding: 15}}>
        {hotSearch.slice(8, 10).map((item, index) => {
          return (
            <View style={{flex: 1}} key={index}>
              <Text style={{marginTop: 10}}>
                <Text
                  style={{
                    color: 'red',
                    fontSize: 16,
                    fontWeight: 'bold',
                  }}>
                  {index + 9}
                </Text>
                <Text style={{fontSize: 16}}> </Text>
                <Text
                  style={{
                    marginLeft: 5,
                    fontSize: 16,
                    fontWeight: 'bold',
                  }}>
                  {item.first}
                </Text>
              </Text>
            </View>
          );
        })}
      </Flex>
    </View>
  );
};

export default SearchIndex;
