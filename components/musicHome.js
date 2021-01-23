import React, {useContext} from 'react';
import { Text, View, Modal, TouchableOpacity, Button, ImageBackground } from "react-native";
import {Flex, Icon, Tabs} from '@ant-design/react-native';
import MusicIndex from './musicIndex';
import {homeContext} from './context';
import {mobileWidth, mobileHeight} from './mobileWidth';
import MyMusic from './myMusic';
import MusicDetail from './musicDetail';
import {ModalContext} from './context';
import Trends from './Trends';

const MusicHome = ({navigation}) => {
  const {
    banner,
    setMusicUrl,
    recommend,
    tabs,
    topSongsCh,
    topSongsJp,
    ranklist,
    hotPlaylistOld,
    rankdetail,
    GetMusicUrl,
    setPlayerImg,
    setPlayerText,
    playlistAll,
    musicShow,
    setMusicShow,
    drawer,
    loginStatus,
    setSearchVisible,
  } = useContext(homeContext);
  return (
    <>
      <Flex
        style={{
          width: mobileWidth,
          backgroundColor: '#f9f9f9',
          paddingLeft: mobileWidth * 0.05,
          paddingRight: mobileWidth * 0.05,
          paddingTop: mobileWidth * 0.05,
          paddingBottom: mobileWidth * 0.03,
          borderTopRightRadius: mobileWidth * 0.01,
          borderTopLeftRadius: mobileWidth * 0.01,
        }}
        align={'center'}
        justify={'center'}>
        <View
          style={{width: mobileWidth * 0.08, marginLeft: mobileWidth * 0.04}}>
          <Icon
            name={'menu'}
            color={'#cecece'}
            style={{color: '#cecece'}}
            onPress={() => {
              drawer.current.openDrawer();
            }}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Search');
          }}
          style={{
            borderWidth: 1,
            borderColor: '#cecece',
            width: mobileWidth * 0.8,
            backgroundColor: 'white',
            paddingTop: mobileWidth * 0.02,
            paddingBottom: mobileWidth * 0.02,
            borderRadius: 10,
          }}>
          <Text style={{fontSize: 16, marginLeft: mobileWidth * 0.02}}>
            点击搜索···
          </Text>
        </TouchableOpacity>
        <View
          style={{width: mobileWidth * 0.08, marginRight: mobileWidth * 0.04}}>
          <Icon
            name={'search'}
            color={'white'}
            style={{color: '#cecece', textAlign: 'right'}}
            onPress={() => {
              navigation.navigate('Search');
            }}
          />
        </View>
      </Flex>
      <Tabs
        distanceToChangeTab={0.5}
        tabBarInactiveTextColor={'#CECECE'}
        tabBarActiveTextColor={'black'}
        tabs={tabs}
        tabBarBackgroundColor={'#f9f9f9'}
        initialPage={1}
        renderUnderline={() => null}
        swipeable={false}
        usePaged={false}
        tabBarUnderlineStyle={{height: 0}}>
        <View style={{height: 1000}} key={'my'}>
          <MyMusic navigation={navigation} />
        </View>
        {/*----------------------------------------主页------（屏幕1）-------------------------------------------*/}
        <View style={{height: 1000, flex: 1}} key={'index'}>
          <MusicIndex
            banner={banner}
            setMusicUrl={setMusicUrl}
            recommend={recommend}
            topsongsCh={topSongsCh}
            topSongsJp={topSongsJp}
            ranklist={ranklist}
            rankdetail={rankdetail}
            hotPlaylistOld={hotPlaylistOld}
            GetMusicUrl={GetMusicUrl}
            setPlayerImg={setPlayerImg}
            setPlayerText={setPlayerText}
            navigation={navigation}
            playlistAll={playlistAll}
          />
        </View>
        {/*----------------------------------------主页------（屏幕2）-------------------------------------------*/}
        <View style={{height: 1000}} key={'cloud'}>
          {loginStatus.code !== 200 && (
            <View>
              <ImageBackground
                source={{
                  uri: `https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic2.zhimg.com%2F50%2Fv2-e71854d52a38c2a112edc5a9633470b7_hd.jpg&refer=http%3A%2F%2Fpic2.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1613962461&t=bbeb9788d134eca13ff6725b8624e830`,
                }}
                style={{width: mobileWidth, height: mobileHeight, position: "absolute"}}
              />
              <Text
                style={{
                  color: '#f9f9f9',
                  textAlign: 'center',
                  fontSize: 30,
                  marginTop: mobileHeight * 0.2,
                }}>
                登陆后开启精彩世界！
              </Text>
              <View
                style={{
                  marginLeft: mobileWidth * 0.1,
                  marginRight: mobileWidth * 0.1,
                  marginTop: mobileWidth * 0.05,
                }}>
                <Button
                  color={'red'}
                  title={'立即登录'}
                  onPress={() => {
                    setSearchVisible('none');
                    navigation.navigate('ModalIndex');
                  }}
                />
              </View>
            </View>
          )}
          {loginStatus.code === 200 && <Trends navigation={navigation} />}
        </View>
      </Tabs>
      <Modal
        visible={musicShow}
        animationType={'slide'}
        presentationStyle={'fullScreen'}
        onRequestClose={() => {
          setMusicShow(false);
        }}>
        <ModalContext.Provider value={{navigation}}>
          <MusicDetail />
        </ModalContext.Provider>
      </Modal>
    </>
  );
};

export default MusicHome;
