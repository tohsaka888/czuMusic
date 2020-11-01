import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {Button, InputItem} from '@ant-design/react-native';
import {mobileHeight, mobileWidth} from './mobileWidth';
import {searchIndexContext} from './context';

const ModalLogin = ({navigation}) => {
  const {phone, setPhone, password, setPassword, login} = useContext(
    searchIndexContext,
  );
  return (
    <View style={{paddingTop: mobileHeight * 0.05}}>
      <InputItem type={'number'} clear onChange={(value) => setPhone(value)}>
        手机号
      </InputItem>
      <InputItem
        type={'password'}
        clear
        onChange={(value) => setPassword(value)}>
        密码
      </InputItem>
      <Button
        onPress={() => login(phone, password, navigation)}
        style={{
          backgroundColor: 'red',
          borderRadius: 30,
          marginTop: mobileHeight * 0.05,
          width: mobileWidth * 0.9,
          marginLeft: mobileWidth * 0.05,
        }}>
        <Text style={{color: 'white'}}>登陆</Text>
      </Button>
    </View>
  );
};

export default ModalLogin;
