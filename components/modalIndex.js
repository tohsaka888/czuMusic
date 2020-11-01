import React, {useContext} from 'react';
import {mobileHeight, mobileWidth} from './mobileWidth';
import {Button, Flex} from '@ant-design/react-native';
import {Image, Text, View} from 'react-native';
import {homeContext} from './context';

const ModalIndex = ({navigation}) => {
  const {setSearchVisible} = useContext(homeContext);
  return (
    <View style={{height: mobileHeight * 1.2, backgroundColor: 'red'}}>
      <Flex style={{justifyContent: 'center', marginTop: mobileHeight * 0.2}}>
        <Image
          source={{
            uri:
              'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3001049585,3657917699&fm=26&gp=0.jpg',
          }}
          style={{
            width: mobileWidth * 0.25,
            height: mobileWidth * 0.25,
            borderRadius: 20,
          }}
        />
      </Flex>
      <Button
        onPress={() => {
          navigation.navigate('ModalLogin');
        }}
        style={{
          marginTop: mobileHeight * 0.2,
          width: mobileWidth * 0.8,
          marginLeft: mobileWidth * 0.1,
          borderRadius: 30,
        }}>
        <Text style={{color: 'red'}}>使用手机号登陆</Text>
      </Button>
      <Button
        onPress={() => {
          navigation.goBack();
          setSearchVisible(undefined);
        }}
        style={{
          marginTop: mobileHeight * 0.02,
          width: mobileWidth * 0.8,
          marginLeft: mobileWidth * 0.1,
          borderRadius: 30,
        }}>
        <Text style={{color: 'red'}}>退出</Text>
      </Button>
    </View>
  );
};

export default ModalIndex;
