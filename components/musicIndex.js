import React, {useContext} from 'react';
import {
  View,
  Text,
  ScrollView,
  RefreshControl,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Carousel, Flex, Icon} from '@ant-design/react-native';
import {mobileWidth} from './mobileWidth';
import {homeContext} from './context';

const MusicIndex = ({
  banner,
  recommend,
  topsongsCh,
  hotPlaylistOld,
  topSongsJp,
  rankdetail,
  ranklist,
  setPlayerImg,
  setPlayerText,
  GetMusicUrl,
  navigation,
  playlistAll,
}) => {
  const [refreshing, setRefreshing] = React.useState(false);
  const {recommendSongAll, loginStatus, setIsShown} = useContext(homeContext);
  const wait = (timeout) => {
    return new Promise((resolve) => {
      setTimeout(resolve, timeout);
    });
  };
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View
        style={{
          marginTop: 10,
          position: 'relative',
          zIndex: -1,
          backgroundColor: 'red',
          height: 80,
          width: mobileWidth,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          justifyContent: 'center',
        }}
      />
      <View
        style={{
          flex: 1,
          padding: mobileWidth * 0.05,
          position: 'absolute',
          marginTop: 10,
        }}>
        <Carousel
          autoplay
          infinite
          style={{height: mobileWidth * 0.3, width: mobileWidth * 0.9}}>
          {banner.map((item, index) => {
            return (
              <View
                key={index}
                style={{height: mobileWidth * 0.3, width: mobileWidth * 0.9}}>
                <Image
                  resizeMode={'stretch'}
                  source={{uri: item.pic}}
                  style={{
                    height: mobileWidth * 0.3,
                    width: mobileWidth * 0.9,
                    borderRadius: 10,
                  }}
                />
              </View>
            );
          })}
        </Carousel>
      </View>
      <View style={{marginTop: 80}}>
        <ScrollView
          horizontal
          style={{paddingLeft: mobileWidth * 0.05}}
          overScrollMode={'always'}
          showsHorizontalScrollIndicator={false}>
          <View
            style={{
              width: mobileWidth * 0.14,
              marginRight: mobileWidth * 0.05,
            }}>
            <TouchableOpacity
              onPress={() => {
                if (loginStatus.code === 200) {
                  recommendSongAll();
                  navigation.navigate('DailyRecommend');
                }
              }}
              style={{
                width: mobileWidth * 0.14,
                height: mobileWidth * 0.14,
                backgroundColor: 'red',
                borderRadius: mobileWidth * 0.14,
                alignContent: 'center',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon name={'calendar'} size={'md'} color={'white'} />
            </TouchableOpacity>
            <Text
              style={{textAlign: 'center', fontSize: 12, marginTop: 5}}
              onPress={() => {
                if (loginStatus.code === 200) {
                  recommendSongAll();
                  navigation.navigate('DailyRecommend');
                }
              }}>
              每日推荐
            </Text>
          </View>
          <View
            style={{
              width: mobileWidth * 0.14,
              marginRight: mobileWidth * 0.05,
            }}>
            <View
              style={{
                width: mobileWidth * 0.14,
                height: mobileWidth * 0.14,
                backgroundColor: 'red',
                borderRadius: mobileWidth * 0.14,
                alignContent: 'center',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon name={'customer-service'} size={'md'} color={'white'} />
            </View>
            <Text style={{textAlign: 'center', fontSize: 12, marginTop: 5}}>
              歌单
            </Text>
          </View>
          <View
            style={{
              width: mobileWidth * 0.14,
              marginRight: mobileWidth * 0.05,
            }}>
            <View
              style={{
                width: mobileWidth * 0.14,
                height: mobileWidth * 0.14,
                backgroundColor: 'red',
                borderRadius: mobileWidth * 0.14,
                alignContent: 'center',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon name={'bar-chart'} size={'md'} color={'white'} />
            </View>
            <Text style={{textAlign: 'center', fontSize: 12, marginTop: 5}}>
              排行榜
            </Text>
          </View>
          <View
            style={{
              width: mobileWidth * 0.14,
              marginRight: mobileWidth * 0.05,
            }}>
            <View
              style={{
                width: mobileWidth * 0.14,
                height: mobileWidth * 0.14,
                backgroundColor: 'red',
                borderRadius: mobileWidth * 0.14,
                alignContent: 'center',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon name={'camera'} size={'md'} color={'white'} />
            </View>
            <Text style={{textAlign: 'center', fontSize: 12, marginTop: 5}}>
              直播
            </Text>
          </View>
          <View
            style={{
              width: mobileWidth * 0.14,
              marginRight: mobileWidth * 0.05,
            }}>
            <View
              style={{
                width: mobileWidth * 0.14,
                height: mobileWidth * 0.14,
                backgroundColor: 'red',
                borderRadius: mobileWidth * 0.14,
                alignContent: 'center',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon name={'compass'} size={'md'} color={'white'} />
            </View>
            <Text style={{textAlign: 'center', fontSize: 12, marginTop: 5}}>
              电台
            </Text>
          </View>
          <View
            style={{
              width: mobileWidth * 0.14,
              marginRight: mobileWidth * 0.05,
            }}>
            <View
              style={{
                width: mobileWidth * 0.14,
                height: mobileWidth * 0.14,
                backgroundColor: 'red',
                borderRadius: mobileWidth * 0.14,
                alignContent: 'center',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon name={'dollar'} size={'md'} color={'white'} />
            </View>
            <Text style={{textAlign: 'center', fontSize: 12, marginTop: 5}}>
              数字专辑
            </Text>
          </View>
        </ScrollView>
      </View>
      <Text
        style={{
          fontSize: 18,
          fontWeight: 'bold',
          marginTop: 10,
          marginLeft: 10,
        }}>
        人气歌单推荐
      </Text>
      <ScrollView
        horizontal
        style={{padding: 10}}
        overScrollMode={'always'}
        showsHorizontalScrollIndicator={false}>
        {recommend.slice(0, 6).map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => {
                setIsShown(false);
                navigation.navigate('Playlist');
                playlistAll(item.id);
              }}>
              <View style={{marginRight: 10}}>
                <Image
                  borderRadius={5}
                  source={{uri: item.picUrl}}
                  style={{width: 100, height: 100}}
                />
              </View>
              <Text
                style={{
                  width: 100,
                  height: 38,
                  overflow: 'hidden',
                  marginTop: 5,
                }}>
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      <View style={{marginTop: 10, marginLeft: 10}}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>
          优秀国语歌曲，不来听听嘛？
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{width: mobileWidth}}>
            {topsongsCh.slice(0, 3).map((item, index) => {
              return (
                <Flex key={index} style={{marginTop: 10}}>
                  <Image
                    source={{uri: item.album.picUrl}}
                    style={{width: 60, height: 60, borderRadius: 10}}
                  />
                  <View
                    style={{flexDirection: 'row', flex: 5, overflow: 'hidden'}}>
                    <View
                      style={{
                        marginLeft: 10,
                        overflow: 'hidden',
                      }}>
                      <Text>{item.name}</Text>
                    </View>
                    <View
                      style={{
                        marginLeft: 10,
                        overflow: 'hidden',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text
                        style={{
                          fontSize: 10,
                          color: 'grey',
                        }}>
                        {item.artists.map((item, index) => {
                          return <Text key={index}>-{item.name}</Text>;
                        })}
                      </Text>
                    </View>
                  </View>
                  <Icon
                    name={'play-circle'}
                    style={{flex: 1}}
                    onPress={() => {
                      GetMusicUrl(item.id);
                      setPlayerImg(item.album.picUrl);
                      setPlayerText(item.name);
                    }}
                  />
                </Flex>
              );
            })}
          </View>
          <View style={{width: mobileWidth}}>
            {topsongsCh.slice(3, 6).map((item, index) => {
              return (
                <Flex key={index} style={{marginTop: 10}}>
                  <Image
                    source={{uri: item.album.picUrl}}
                    style={{width: 60, height: 60, borderRadius: 10}}
                  />
                  <View
                    style={{flexDirection: 'row', flex: 5, overflow: 'hidden'}}>
                    <View
                      style={{
                        marginLeft: 10,
                        overflow: 'hidden',
                      }}>
                      <Text>{item.name}</Text>
                    </View>
                    <View
                      style={{
                        marginLeft: 10,
                        overflow: 'hidden',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexWrap: 'nowrap',
                      }}>
                      <Text
                        style={{
                          fontSize: 10,
                          color: 'grey',
                          flexWrap: 'nowrap',
                        }}>
                        {item.artists.map((item, index) => {
                          return <Text key={index}>-{item.name}</Text>;
                        })}
                      </Text>
                    </View>
                  </View>
                  <Icon
                    name={'play-circle'}
                    style={{flex: 1}}
                    onPress={() => {
                      GetMusicUrl(item.id);
                      setPlayerImg(item.album.picUrl);
                      setPlayerText(item.name);
                    }}
                  />
                </Flex>
              );
            })}
          </View>
          <View style={{width: mobileWidth}}>
            {topsongsCh.slice(6, 9).map((item, index) => {
              return (
                <Flex key={index} style={{marginTop: 10}}>
                  <Image
                    source={{uri: item.album.picUrl}}
                    style={{width: 60, height: 60, borderRadius: 10}}
                  />
                  <View
                    style={{flexDirection: 'row', flex: 5, overflow: 'hidden'}}>
                    <View
                      style={{
                        marginLeft: 10,
                        overflow: 'hidden',
                      }}>
                      <Text>{item.name}</Text>
                    </View>
                    <View
                      style={{
                        marginLeft: 10,
                        overflow: 'hidden',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text
                        style={{
                          fontSize: 10,
                          color: 'grey',
                        }}>
                        {item.artists.map((item, index) => {
                          return <Text key={index}>-{item.name}</Text>;
                        })}
                      </Text>
                    </View>
                  </View>
                  <Icon
                    name={'play-circle'}
                    style={{flex: 1}}
                    onPress={() => {
                      GetMusicUrl(item.id);
                      setPlayerImg(item.album.picUrl);
                      setPlayerText(item.name);
                    }}
                  />
                </Flex>
              );
            })}
          </View>
          <View style={{width: mobileWidth}}>
            {topsongsCh.slice(9, 12).map((item, index) => {
              return (
                <Flex key={index} style={{marginTop: 10}}>
                  <Image
                    source={{uri: item.album.picUrl}}
                    style={{width: 60, height: 60, borderRadius: 10}}
                  />
                  <View
                    style={{flexDirection: 'row', flex: 5, overflow: 'hidden'}}>
                    <View
                      style={{
                        marginLeft: 10,
                        overflow: 'hidden',
                      }}>
                      <Text>{item.name}</Text>
                    </View>
                    <View
                      style={{
                        marginLeft: 10,
                        overflow: 'hidden',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text
                        style={{
                          fontSize: 10,
                          color: 'grey',
                        }}>
                        {item.artists.map((item, index) => {
                          return <Text key={index}>-{item.name}</Text>;
                        })}
                      </Text>
                    </View>
                  </View>
                  <Icon
                    name={'play-circle'}
                    style={{flex: 1}}
                    onPress={() => {
                      GetMusicUrl(item.id);
                      setPlayerImg(item.album.picUrl);
                      setPlayerText(item.name);
                    }}
                  />
                </Flex>
              );
            })}
          </View>
        </ScrollView>
      </View>
      <View style={{marginTop: 20, marginLeft: 10}}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>Coffee/Tea/Music</Text>
      </View>
      <ScrollView
        horizontal
        style={{padding: 10}}
        showsHorizontalScrollIndicator={false}>
        {hotPlaylistOld.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => {
                setIsShown(false);
                navigation.navigate('Playlist');
                playlistAll(item.id);
              }}>
              <View style={{marginRight: 10}}>
                <Image
                  borderRadius={5}
                  source={{uri: item.coverImgUrl}}
                  style={{width: 100, height: 100}}
                />
              </View>
              <Text
                style={{
                  width: 100,
                  height: 35,
                  overflow: 'hidden',
                  marginTop: 5,
                }}>
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      <View style={{marginTop: 10, marginLeft: 10}}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>二次元新歌速递</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{width: mobileWidth}}>
            {topSongsJp.slice(0, 3).map((item, index) => {
              return (
                <Flex key={index} style={{marginTop: 10}}>
                  <Image
                    source={{uri: item.album.picUrl}}
                    style={{width: 60, height: 60, borderRadius: 10}}
                  />
                  <View
                    style={{flexDirection: 'row', flex: 5, overflow: 'hidden'}}>
                    <View
                      style={{
                        marginLeft: 10,
                        overflow: 'hidden',
                      }}>
                      <Text>{item.name}</Text>
                    </View>
                    <View
                      style={{
                        marginLeft: 10,
                        overflow: 'hidden',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text
                        style={{
                          fontSize: 10,
                          color: 'grey',
                        }}>
                        {item.artists.map((item, index) => {
                          return <Text key={index}>-{item.name}</Text>;
                        })}
                      </Text>
                    </View>
                  </View>
                  <Icon
                    name={'play-circle'}
                    style={{flex: 1}}
                    onPress={() => {
                      GetMusicUrl(item.id);
                      setPlayerImg(item.album.picUrl);
                      setPlayerText(item.name);
                    }}
                  />
                </Flex>
              );
            })}
          </View>
          <View style={{width: mobileWidth}}>
            {topSongsJp.slice(3, 6).map((item, index) => {
              return (
                <Flex key={index} style={{marginTop: 10}}>
                  <Image
                    source={{uri: item.album.picUrl}}
                    style={{width: 60, height: 60, borderRadius: 10}}
                  />
                  <View
                    style={{flexDirection: 'row', flex: 5, overflow: 'hidden'}}>
                    <View
                      style={{
                        marginLeft: 10,
                        overflow: 'hidden',
                      }}>
                      <Text>{item.name}</Text>
                    </View>
                    <View
                      style={{
                        marginLeft: 10,
                        overflow: 'hidden',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexWrap: 'nowrap',
                      }}>
                      <Text
                        style={{
                          fontSize: 10,
                          color: 'grey',
                          flexWrap: 'nowrap',
                        }}>
                        {item.artists.map((item, index) => {
                          return <Text key={index}>-{item.name}</Text>;
                        })}
                      </Text>
                    </View>
                  </View>
                  <Icon
                    name={'play-circle'}
                    style={{flex: 1}}
                    onPress={() => {
                      GetMusicUrl(item.id);
                      setPlayerImg(item.album.picUrl);
                      setPlayerText(item.name);
                    }}
                  />
                </Flex>
              );
            })}
          </View>
          <View style={{width: mobileWidth}}>
            {topSongsJp.slice(6, 9).map((item, index) => {
              return (
                <Flex key={index} style={{marginTop: 10}}>
                  <Image
                    source={{uri: item.album.picUrl}}
                    style={{width: 60, height: 60, borderRadius: 10}}
                  />
                  <View
                    style={{flexDirection: 'row', flex: 5, overflow: 'hidden'}}>
                    <View
                      style={{
                        marginLeft: 10,
                        overflow: 'hidden',
                      }}>
                      <Text>{item.name}</Text>
                    </View>
                    <View
                      style={{
                        marginLeft: 10,
                        overflow: 'hidden',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text
                        style={{
                          fontSize: 10,
                          color: 'grey',
                        }}>
                        {item.artists.map((item, index) => {
                          return <Text key={index}>-{item.name}</Text>;
                        })}
                      </Text>
                    </View>
                  </View>
                  <Icon
                    name={'play-circle'}
                    style={{flex: 1}}
                    onPress={() => {
                      GetMusicUrl(item.id);
                      setPlayerImg(item.album.picUrl);
                      setPlayerText(item.name);
                    }}
                  />
                </Flex>
              );
            })}
          </View>
          <View style={{width: mobileWidth}}>
            {topSongsJp.slice(9, 12).map((item, index) => {
              return (
                <Flex key={index} style={{marginTop: 10}}>
                  <Image
                    source={{uri: item.album.picUrl}}
                    style={{width: 60, height: 60, borderRadius: 10}}
                  />
                  <View
                    style={{flexDirection: 'row', flex: 5, overflow: 'hidden'}}>
                    <View
                      style={{
                        marginLeft: 10,
                        overflow: 'hidden',
                      }}>
                      <Text>{item.name}</Text>
                    </View>
                    <View
                      style={{
                        marginLeft: 10,
                        overflow: 'hidden',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text
                        style={{
                          fontSize: 10,
                          color: 'grey',
                        }}>
                        {item.artists.map((item, index) => {
                          return <Text key={index}>-{item.name}</Text>;
                        })}
                      </Text>
                    </View>
                  </View>
                  <Icon
                    name={'play-circle'}
                    style={{flex: 1}}
                    onPress={() => {
                      GetMusicUrl(item.id);
                      setPlayerImg(item.album.picUrl);
                      setPlayerText(item.name);
                    }}
                  />
                </Flex>
              );
            })}
          </View>
        </ScrollView>
      </View>
      <View style={{marginLeft: 10, marginTop: 10}}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>热歌风向标</Text>
      </View>
      <ScrollView
        horizontal
        style={{padding: 10}}
        showsHorizontalScrollIndicator={false}>
        {ranklist.map((item, index) => {
          return (
            <View
              key={index}
              style={{width: mobileWidth * 0.95, marginRight: 20, height: 250}}>
              <View
                style={{
                  position: 'absolute',
                  width: mobileWidth * 0.95,
                  height: 250,
                }}>
                <Image
                  source={{uri: item.coverImgUrl}}
                  style={{width: mobileWidth * 0.95, height: 250}}
                  blurRadius={10}
                  borderRadius={10}
                />
              </View>
              <View style={{marginLeft: 10, marginTop: 15}}>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                  {item.name}
                </Text>
              </View>
              <View>
                {rankdetail[index] &&
                  rankdetail[index].slice(0, 3).map((item, index) => {
                    return (
                      <Flex
                        key={index}
                        style={{
                          marginLeft: 10,
                          marginTop: 13,
                          alignContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Image
                          source={{uri: item.al.picUrl}}
                          style={{width: 50, height: 50, borderRadius: 10}}
                        />
                        <View
                          style={{
                            flex: 5,
                            flexDirection: 'row',
                            alignContent: 'center',
                            alignItems: 'center',
                          }}>
                          <Text style={{fontWeight: 'bold', marginLeft: 10}}>
                            {item.name}
                          </Text>
                          <Text style={{marginLeft: 10, fontSize: 12}}>
                            {item.ar[0].name}
                          </Text>
                        </View>
                        <Icon
                          name={'play-circle'}
                          style={{flex: 1, color: 'black'}}
                          onPress={() => {
                            GetMusicUrl(item.id), setPlayerImg(item.al.picUrl);
                            setPlayerText(item.name);
                          }}
                        />
                      </Flex>
                    );
                  })}
              </View>
            </View>
          );
        })}
      </ScrollView>
    </ScrollView>
  );
};

export default MusicIndex;
