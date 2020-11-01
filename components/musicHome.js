import React, {useContext} from 'react';
import {Text, View, Modal} from 'react-native';
import {Flex, Icon, Tabs} from '@ant-design/react-native';
import MusicIndex from './musicIndex';
import {homeContext} from './context';
import {mobileHeight, mobileWidth} from './mobileWidth';
import MyMusic from './myMusic';
import MusicDetail from './musicDetail';
import {ModalContext} from './context';

const MusicHome = ({navigation}) => {
  const {
    setSearchVisible,
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
  } = useContext(homeContext);
  return (
    <>
      <Flex
        style={{
          width: mobileWidth,
          backgroundColor: 'red',
          paddingLeft: mobileWidth * 0.05,
          paddingRight: mobileWidth * 0.05,
          paddingTop: mobileWidth * 0.05,
          paddingBottom: mobileWidth * 0.02,
          borderTopRightRadius: mobileWidth * 0.01,
          borderTopLeftRadius: mobileWidth * 0.01,
        }}
        align={'center'}
        justify={'center'}>
        <View
          style={{width: mobileWidth * 0.1, marginLeft: mobileWidth * 0.02}}>
          <Icon name={'menu'} color={'white'} style={{color: 'white'}} />
        </View>
        <View style={{width: mobileWidth * 0.8}}>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              fontSize: 18,
            }}>
            常工云音乐
          </Text>
        </View>
        <View
          style={{width: mobileWidth * 0.1, marginRight: mobileWidth * 0.02}}>
          <Icon
            name={'search'}
            color={'white'}
            style={{color: 'white', textAlign: 'right'}}
            onPress={() => {
              navigation.navigate('Search');
            }}
          />
        </View>
      </Flex>
      <Tabs
        distanceToChangeTab={0.5}
        tabBarInactiveTextColor={'#CECECE'}
        tabBarActiveTextColor={'white'}
        tabs={tabs}
        tabBarBackgroundColor={'red'}
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
          <Text>开发中...下个版本上线，敬请期待...</Text>
        </View>
        <View style={{height: 1000}} key={'video'}>
          <Text>开发中...下个版本上线，敬请期待...</Text>
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
