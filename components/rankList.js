import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {homeContext} from './context';
import {mobileWidth} from './mobileWidth';
import {Flex} from '@ant-design/react-native';
import {Divider} from 'react-native-elements';

const RankList = () => {
  const {ranklist} = useContext(homeContext);
  return (
    <View>
      {ranklist.map((item, index) => {
        return (
          <View>
            <Flex wrap={'wrap'} key={index} style={{flexWrap: 'wrap'}}>
              <View
                style={{
                  width: mobileWidth,
                  borderBottomWidth: 5,
                  borderBottomColor: 'red',
                }}>
                <Text style={{fontSize: 20, fontWeight: 'bold',marginLeft:mobileWidth * 0.05}}>
                  {item.name}
                </Text>
              </View>
              <View style={{marginLeft: mobileWidth * 0.05}}>
                <Text style={{fontSize: 16}}>{item.description}</Text>
              </View>
            </Flex>
          </View>
        );
      })}
    </View>
  );
};

export default RankList;
