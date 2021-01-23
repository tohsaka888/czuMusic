import React, { useContext, useEffect } from "react";
import { FlatList, Image, ImageBackground, Text, View } from "react-native";
import {homeContext} from './context';
import {Avatar} from 'react-native-elements';
import {Flex} from '@ant-design/react-native';
import {mobileWidth} from './mobileWidth';
import {mobileHeight} from './mobileWidth';

const Trends = ({navigation}) => {
  const {trends, loginStatus, setSearchVisible} = useContext(homeContext);
  const renderItem = ({item, index}) => {
    let date = new Date();
    const data = JSON.parse(item.json);
    const year = date.getFullYear(data.publishTime);
    const month = date.getMonth(data.publishTime) + 1;
    const day = date.getDay(data.publishTime);
    return (
      <View
        key={index}
        style={{
          borderTopWidth: 1,
          borderColor: '#cecece',
          padding: mobileWidth * 0.05,
        }}>
        <Flex wrap={'nowrap'}>
          <Avatar
            size={'medium'}
            source={{uri: item.user.avatarUrl}}
            avatarStyle={{borderRadius: mobileWidth}}
          />
          <Flex wrap={'wrap'} style={{marginLeft: mobileWidth * 0.03}}>
            <Text style={{width: mobileWidth, color: '#048db6', fontSize: 16}}>
              {item.user.nickname}
            </Text>
            <Text style={{color: 'gray', fontStyle: 'italic'}}>
              {year + '年' + month + '月' + day + '日'}
            </Text>
          </Flex>
        </Flex>
        <Flex style={{marginLeft: mobileWidth * 0.15}}>
          {data.msg === undefined && (
            <Text style={{color: '#f9f9f9'}}>这个人很懒，没有发任何消息~</Text>
          )}
          {data.msg !== '' && (
            <View>
              <Text style={{color: '#f9f9f9'}}>{data.msg}</Text>
            </View>
          )}
        </Flex>
        <Flex
          wrap={'wrap'}
          style={{
            marginLeft: mobileWidth * 0.15,
            marginTop: mobileWidth * 0.02,
          }}>
          {item.pics.length <= 3 &&
            item.pics.map((data, index) => {
              return (
                <Image
                  key={index}
                  source={{uri: data.squareUrl}}
                  style={{
                    width: (mobileWidth * 0.85) / item.pics.length - 30,
                    height: (mobileWidth * 0.85) / item.pics.length - 30,
                    marginRight: 8,
                    borderRadius: 5,
                  }}
                />
              );
            })}
          {item.pics.length > 3 &&
            item.pics.slice(0, 3).map((data, index) => {
              return (
                <Image
                  key={index}
                  source={{uri: data.squareUrl}}
                  style={{
                    width: (mobileWidth * 0.85) / 3 - 30,
                    height: (mobileWidth * 0.85) / 3 - 30,
                    marginRight: 10,
                    borderRadius: 5,
                  }}
                />
              );
            })}
          {item.pics.length > 3 &&
            item.pics.slice(3, 6).map((data, index) => {
              return (
                <Image
                  key={index}
                  source={{uri: data.squareUrl}}
                  style={{
                    width: (mobileWidth * 0.85) / 3 - 30,
                    height: (mobileWidth * 0.85) / 3 - 30,
                    marginTop: mobileWidth * 0.05,
                    marginRight: 10,
                    borderRadius: 5,
                  }}
                />
              );
            })}
        </Flex>
      </View>
    );
  };
  return (
    <View style={{height: mobileHeight * 0.74}}>
      <ImageBackground
        source={{
          uri: `https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic2.zhimg.com%2F50%2Fv2-e71854d52a38c2a112edc5a9633470b7_hd.jpg&refer=http%3A%2F%2Fpic2.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1613962461&t=bbeb9788d134eca13ff6725b8624e830`,
        }}
        style={{width: mobileWidth, height: mobileHeight, position: 'absolute'}}
      />
      <FlatList
        data={trends}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default Trends;
