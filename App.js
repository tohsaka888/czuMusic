/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  Animated,
  Image,
  TouchableOpacity,
  DrawerLayoutAndroid,
} from "react-native";
import { Flex, Icon, Provider, Button, Toast } from "@ant-design/react-native";
import { Slider } from "react-native-elements";
import { homeContext } from "./components/context";
import MusicPlayer from "./components/musicPlayer";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MusicHome from "./components/musicHome";
import MusicSearch from "./components/musicSearch";
import { searchIndexContext } from "./components/context";
import { mobileWidth } from "./components/mobileWidth";
import Playlist from "./components/playlist";
import ModalIndex from "./components/modalIndex";
import ModalLogin from "./components/modalLogin";
import DailyRecommend from "./components/dailyRecommend";
import UserPlaylist from "./components/userPlaylist";
import MusicDetail from "./components/musicDetail";
import lrcParser from "lrc-parser";
import AsyncStorage from "@react-native-community/async-storage";
import ToplistAll from "./components/ToplistAll";
import RankList from "./components/rankList";
import Chat from "./components/Chat";
import Chatmain from "./components/Chatmain";
const Stack = createStackNavigator();

const App = () => {
  // ---------------------------------------state管理---------------------------------------
  const [banner, setBanner] = useState([]);
  const [recommend, setRecommed] = useState([]);
  const [topSongsCh, setTopSongsCh] = useState([]);
  const [topSongsJp, setTopSongsJp] = useState([]);
  const [hotPlaylistOld, setHotPlaylistOld] = useState([]);
  const [ranklist, setRanklist] = useState([]);
  const [rankdetail, setRankdetail] = useState([]);
  const [currentTime, setCurrentTime] = useState("");
  const [musicUrl, setMusicUrl] = useState("");
  const [playValue, setPlayValue] = useState(0);
  const [stop, setStop] = useState(false);
  const [playerImg, setPlayerImg] = useState("");
  const [playerText, setPlayerText] = useState("来首歌儿吧~");
  const [changeCurrentTime, setChangeCurrentTime] = useState(-2);
  const [playerIcon, setPlayerIcon] = useState("play-circle");
  const [searchVisible, setSearchVisible] = useState(undefined);
  const [defaultWords, setDefaultWords] = useState("");
  const [hotSearch, setHotSearch] = useState([]);
  const [search, setSearch] = useState([]);
  const [playlist, setPlaylist] = useState({ id: -1 });
  const [loginStatus, setLoginStatus] = useState({});
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const cookie = useRef("");
  const [userDetail, setUserDetail] = useState({});
  const [userPlaylist, setUserPlaylist] = useState([]);
  const [recommendSong, setRecommendSongs] = useState([]);
  const [isShown, setIsShown] = useState(false);
  const [musicShow, setMusicShow] = useState(false);
  const [lyric, setLyric] = useState([]);
  const [songId, setSongId] = useState(0);
  const [chToplist, setChToplist] = useState([]);
  const [jpToplist, setJpToplist] = useState([]);
  const [eouToplist, setEouToplist] = useState([]);
  const [koToplist, setKoToplist] = useState([]);
  const [trends, setTrends] = useState([]);
  const [playNext, setPlayNext] = useState(-1);
  const [friend, setFriend] = useState({});
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState({});
  const drawer = useRef();
  //-----------------------------------------本地缓存----------------------------------------
  const storeCookie = async (value) => {
    try {
      await AsyncStorage.setItem("Cookie", value);
    } catch (e) {
      console.log(e);
    }
  };
  const getCookie = async () => {
    const value = await AsyncStorage.getItem("Cookie");
    if (value !== null) {
      cookie.current = value;
    } else {
      cookie.current = "";
    }
  };
  const removeCookie = async () => {
    try {
      await AsyncStorage.removeItem("Cookie");
    } catch (e) {
      console.log(e);
    }
  };

  const savaData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      console.log(e);
    }
  };

  const getData = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value) {
        const jsonValue = JSON.parse(value);
        return jsonValue;
      }
    } catch (e) {
      console.log("error");
      return {};
    }
  };
  //-----------------------------------------请求管理----------------------------------------
  const indeximg = async () => {
    const banner = await getData("banner");
    if (banner !== undefined) {
      setBanner(banner.banners);
    } else {
      const res = await fetch("http://139.196.141.233:3000/banner?type=1");
      const data = await res.json();
      setBanner(data.banners);
      const value = JSON.stringify(data);
      savaData("banner", value);
    }
  };
  const recommendPlaylist = async () => {
    const dailyRecommend = await getData("dailyRecommend");
    if (dailyRecommend !== undefined) {
      setRecommed(dailyRecommend.result);
    } else {
      const res = await fetch(
        "http://139.196.141.233:3000/personalized?limits=12"
      );
      const data = await res.json();
      savaData("dailyRecommend", JSON.stringify(data));
      setRecommed(data.result);
    }
  };
  const topSongsAll = async () => {
    const topChSong = await getData("topChSong");
    const topJpSong = await getData("topJpSong");
    if (topChSong !== undefined && topJpSong !== undefined) {
      setTopSongsCh(topChSong.data);
      setTopSongsJp(topJpSong.data);
    } else {
      const res = await fetch(
        "http://139.196.141.233:3000/top/song?type=7&limits=12"
      );
      const data = await res.json();
      setTopSongsCh(data.data);
      const valueString = JSON.stringify(data);
      savaData("topChSong", valueString);
      const res1 = await fetch(
        "http://139.196.141.233:3000/top/song?type=8&limits=12"
      );
      const data1 = await res1.json();
      const valueString1 = JSON.stringify(data1);
      setTopSongsJp(data1.data);
      savaData("topJpSong", valueString1);
    }
  };
  const hotPlaylistAll = async () => {
    const hotlist = await getData("hotlist");
    if (hotlist !== undefined) {
      setHotPlaylistOld(hotlist.playlists);
    } else {
      const res = await fetch(
        "http://139.196.141.233:3000/top/playlist?limit=6&cat=%E5%8F%A4%E9%A3%8E"
      );
      const data = await res.json();
      const valueString = JSON.stringify(data);
      setHotPlaylistOld(data.playlists);
      savaData("hotlist", valueString);
    }
  };
  const RankingListAll = async () => {
    const rank = await getData("rank");
    let data;
    if (rank !== undefined) {
      data = rank;
    } else {
      const res = await fetch("http://139.196.141.233:3000/toplist");
      data = await res.json();
      const valueString = JSON.stringify(data);
      savaData("rank", valueString);
    }
    const playlist = data.list.slice(0, 3);
    setRanklist(playlist);
    let arr = await getData("RankDetail");
    if (arr === undefined) {
      arr = [];
      for (let i = 0; i < playlist.length; i++) {
        const res = await fetch(
          `http://139.196.141.233:3000/playlist/detail?id=${playlist[i].id}`,
          { mode: "cors" }
        );
        const data = await res.json();
        arr[i] = data.playlist.tracks;
      }
      const valueString = JSON.stringify(arr);
      savaData("RankDetail", valueString);
    }
    setRankdetail(arr);
  };
  const GetMusicUrl = async (id) => {
    const res = await fetch(`http://139.196.141.233:3000/song/url?id=${id}`);
    const data = await res.json();
    setMusicUrl(data.data[0].url);
    setSongId(id);
  };
  const searchDefaultWords = async () => {
    const res = await fetch("http://139.196.141.233:3000/search/default");
    const data = await res.json();
    setDefaultWords(data.data.realkeyword);
  };
  const hotSearchAll = async () => {
    const res = await fetch("http://139.196.141.233:3000/search/hot");
    const data = await res.json();
    setHotSearch(data.result.hots);
  };
  const searchContent = async (value) => {
    const res = await fetch(
      `http://139.196.141.233:3000/search?keywords=${value}`
    );
    const data = await res.json();
    setSearch(data.result.songs);
  };
  const SongDetail = async (id) => {
    const res = await fetch(
      `http://139.196.141.233:3000/song/detail?ids=${id}`
    );
    const data = await res.json();
    setPlayerText(data.songs[0].name);
    setPlayerImg(data.songs[0].al.picUrl);
  };
  const playlistAll = async (id) => {
    const res = await fetch(
      `http://139.196.141.233:3000/playlist/detail?id=${id}`
    );
    const data = await res.json();
    setPlaylist(data.playlist);
    if (data.code === 200) {
      setIsShown(true);
    }
  };
  const isLogin = async () => {
    await getCookie();
    const res = await fetch(
      `http://139.196.141.233:3000/login/status?cookie=${cookie.current}`
    );
    const data = await res.json();
    setLoginStatus(data);
    if (data.code === 200) {
      const res1 = await fetch(
        `http://139.196.141.233:3000/user/detail?uid=${data.profile.userId}`
      );
      const data1 = await res1.json();
      setUserDetail(data1);
      const res2 = await fetch(
        `http://139.196.141.233:3000/user/playlist?uid=${data.profile.userId}`
      );
      const data2 = await res2.json();
      setUserPlaylist(data2.playlist);
    }
  };
  const login = async (phone, password, navigation) => {
    const res = await fetch(
      `http://139.196.141.233:3000/login/cellphone?phone=${phone}&password=${password}`,
      {
        method: "POST",
        body: {
          phone: phone,
          password: password,
        },
      }
    );
    const data = await res.json();
    cookie.current = data.cookie;
    await storeCookie(data.cookie);
    if (data.code === 200) {
      navigation.navigate("Home");
      setSearchVisible(undefined);
    }
  };
  const logout = async () => {
    setLoginStatus({ code: 301 });
  };
  const recommendSongAll = async () => {
    const rcSongs = await getData("rcSongs");
    if (rcSongs !== undefined) {
      setRecommendSongs(rcSongs.data.dailySongs);
    } else {
      const res = await fetch(
        `http://139.196.141.233:3000/recommend/songs?cookie=${cookie.current}`
      );
      const data = await res.json();
      setRecommendSongs(data.data.dailySongs);
      const valueString = JSON.stringify(data);
      savaData("rcSongs", valueString);
    }
  };
  const getLyric = async (id) => {
    const res = await fetch(`http://139.196.141.233:3000/lyric?id=${id}`);
    const data = await res.json();
    if (data.lrc) {
      let lrc = lrcParser(data.lrc.lyric);
      setLyric(lrc.scripts);
    } else {
      setLyric([{ start: 0, text: "这首歌么有歌词呢...", end: 10000 }]);
    }
  };
  const getplaylist = async () => {
    const res = await fetch(
      "http://139.196.141.233:3000/top/playlist/highquality?cat=华语"
    );
    const data = await res.json();
    setChToplist(data.playlists);
    const res1 = await fetch(
      "http://139.196.141.233:3000/top/playlist/highquality?cat=日语"
    );
    const data1 = await res1.json();
    setJpToplist(data1.playlists);
    const res2 = await fetch(
      "http://139.196.141.233:3000/top/playlist/highquality?cat=欧美"
    );
    const data2 = await res2.json();
    setEouToplist(data2.playlists);
    const res3 = await fetch(
      "http://139.196.141.233:3000/top/playlist/highquality?cat=ACG"
    );
    const data3 = await res3.json();
    setKoToplist(data3.playlists);
  };
  const getTrends = async () => {
    const res = await fetch(
      "http://139.196.141.233:3000/event/?pagesize=30&lasttime=-1"
    );
    const data = await res.json();
    setTrends(data.event);
  };
  const getChatFriend = async (id) => {
    const res = await fetch(
      `http://139.196.141.233:3000/user/follows/?uid=${id}`
    );
    const data = await res.json();
    setFriend(data);
  };
  const getMessage = async (id) => {
    const res = await fetch(
      `http://139.196.141.233:3000/msg/private/history?uid=${id}`
    );
    const data = await res.json();
    setMessage(data);
  };
  const sendMessage = async (id, msg) => {
    const res = await fetch(
      `http://139.196.141.233:3000/send/text?user_ids=${id}&msg=${msg}`
    );
    const data = await res.json();
    console.log(data);
  };
  const dailySign = async () => {
    const res = await fetch("http://139.196.141.233:3000/daily_signin");
    const data = await res.json();
    if (data.code === 200) {
      Toast.success("签到成功！", 1);
    } else if (data.code === -2) {
      Toast.fail("重复签到！",1);
    } else {
      Toast.offline("请先登录！",1);
    }
  };
  //---------------------------------------页面渲染前发送的请求---------------------------------
  useEffect(() => {
    indeximg();
    recommendPlaylist();
    topSongsAll();
    hotPlaylistAll(); 
    RankingListAll();
    searchDefaultWords();
    hotSearchAll();
    isLogin();
    getplaylist();
    getTrends();
  }, [cookie.current]);
  useEffect(() => {
    if (currentTime.currentTime !== undefined) {
      setPlayValue(currentTime.currentTime / currentTime.seekableDuration);
    }
  }, [currentTime.currentTime, currentTime.seekableDuration]);
  const tabs = [{ title: "我的" }, { title: "发现" }, { title: "动态" }];
  const renderView = () => {
    return (
      <View>
        {loginStatus.profile && (
          <Flex
            style={{
              marginTop: mobileWidth * 0.1,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <Image
              source={{
                uri: loginStatus.profile && loginStatus.profile.avatarUrl,
              }}
              style={{
                width: mobileWidth * 0.2,
                height: mobileWidth * 0.2,
                borderRadius: mobileWidth * 0.2,
              }}
            />
            <Text
              style={{
                fontSize: 18,
                marginLeft: mobileWidth * 0.05,
                fontWeight: "bold",
              }}
            >
              {loginStatus.profile && loginStatus.profile.nickname}
            </Text>
          </Flex>
        )}
        {loginStatus.profile === undefined && (
          <Flex
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: mobileWidth * 0.1,
            }}
          >
            <View
              style={{
                width: mobileWidth * 0.2,
                height: mobileWidth * 0.2,
                backgroundColor: "#cecece",
                borderRadius: mobileWidth * 0.2,
              }}
            />
            <Text
              style={{
                fontSize: 18,
                marginLeft: mobileWidth * 0.05,
                fontWeight: "bold",
              }}
            >
              游客账户
            </Text>
          </Flex>
        )}
        <Flex
          style={{
            padding: mobileWidth * 0.05,
            backgroundColor: "#f9f9f9",
            margin: mobileWidth * 0.05,
            marginTop: mobileWidth * 0.1,
            borderRadius: 10,
          }}
        >
          <View
            style={{
              width: mobileWidth * 0.1,
              height: mobileWidth * 0.1,
              backgroundColor: "red",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              borderRadius: mobileWidth * 0.2,
            }}
          >
            <Icon name={"calendar"} size={"md"} color={"white"} />
          </View>
          <View style={{ flexWrap: "nowrap" }}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 18,
                marginLeft: mobileWidth * 0.05,
              }}
            >
              每日签到
            </Text>
          </View>
        </Flex>
        <Flex
          style={{
            padding: mobileWidth * 0.05,
            backgroundColor: "#f9f9f9",
            marginLeft: mobileWidth * 0.05,
            marginRight: mobileWidth * 0.05,
            borderRadius: 10,
          }}
        >
          <View
            style={{
              width: mobileWidth * 0.1,
              height: mobileWidth * 0.1,
              backgroundColor: "red",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              borderRadius: mobileWidth * 0.2,
            }}
          >
            <Icon name={"team"} size={"md"} color={"white"} />
          </View>
          <View style={{ flexWrap: "nowrap" }}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 18,
                marginLeft: mobileWidth * 0.05,
              }}
            >
              我的好友
            </Text>
          </View>
        </Flex>
        <Flex
          style={{
            padding: mobileWidth * 0.05,
            marginLeft: mobileWidth * 0.05,
            backgroundColor: "#f9f9f9",
            borderRadius: 10,
            marginRight: mobileWidth * 0.05,
            marginTop: mobileWidth * 0.05,
          }}
        >
          <View
            style={{
              width: mobileWidth * 0.1,
              height: mobileWidth * 0.1,
              backgroundColor: "red",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              borderRadius: mobileWidth * 0.2,
            }}
          >
            <Icon name={"setting"} size={"md"} color={"white"} />
          </View>
          <View style={{ flexWrap: "nowrap" }}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 18,
                marginLeft: mobileWidth * 0.05,
              }}
            >
              常规设置
            </Text>
          </View>
        </Flex>
        <Flex
          style={{
            padding: mobileWidth * 0.05,
            marginLeft: mobileWidth * 0.05,
            backgroundColor: "#f9f9f9",
            borderRadius: 10,
            marginRight: mobileWidth * 0.05,
            marginTop: mobileWidth * 0.05,
          }}
        >
          <View
            style={{
              width: mobileWidth * 0.1,
              height: mobileWidth * 0.1,
              backgroundColor: "red",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              borderRadius: mobileWidth * 0.2,
            }}
          >
            <Icon name={"info"} size={"md"} color={"white"} />
          </View>
          <View style={{ flexWrap: "nowrap" }}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 18,
                marginLeft: mobileWidth * 0.05,
              }}
            >
              关于应用
            </Text>
          </View>
        </Flex>
        <Button
          style={{
            borderRadius: 30,
            backgroundColor: "red",
            width: mobileWidth * 0.7,
            margin: mobileWidth * 0.05,
            marginTop: mobileWidth * 0.15,
          }}
          onPress={() => {
            logout();
            cookie.current = "";
            removeCookie();
          }}
        >
          <Text style={{ color: "white" }}>退出登录</Text>
        </Button>
      </View>
    );
  };
  return (
    <DrawerLayoutAndroid
      ref={drawer}
      renderNavigationView={renderView}
      drawerWidth={mobileWidth * 0.8}
    >
      <NavigationContainer>
        <homeContext.Provider
          value={{
            trends,
            setSearchVisible,
            setPlayerText,
            setPlayerImg,
            setMusicUrl,
            topSongsJp,
            recommend,
            ranklist,
            rankdetail,
            banner,
            topSongsCh,
            tabs,
            hotPlaylistOld,
            GetMusicUrl,
            playlistAll,
            playlist,
            loginStatus,
            searchVisible,
            userDetail,
            userPlaylist,
            logout,
            recommendSong,
            recommendSongAll,
            cookie,
            setRecommendSongs,
            isShown,
            setIsShown,
            setMusicShow,
            playerText,
            playerImg,
            currentTime,
            setChangeCurrentTime,
            playValue,
            setPlayValue,
            setStop,
            playerIcon,
            setPlayerIcon,
            getLyric,
            lyric,
            musicShow,
            removeCookie,
            chToplist,
            jpToplist,
            eouToplist,
            koToplist,
            drawer,
            setPlayNext,
            playNext,
            getChatFriend,
            friend,
            setUserName,
            getMessage,
            message,
            sendMessage,
            dailySign,
          }}
        >
          <Provider>
            <searchIndexContext.Provider
              value={{
                Stack,
                setSearchVisible,
                searchVisible,
                defaultWords,
                hotSearch,
                search,
                searchContent,
                GetMusicUrl,
                SongDetail,
                phone,
                setPhone,
                password,
                setPassword,
                login,
                userDetail,
              }}
            >
              <Stack.Navigator initialRouteName={"Home"}>
                <Stack.Screen
                  name={"Home"}
                  component={MusicHome}
                  options={{ headerTitle: null, headerStyle: { height: 0 } }}
                />
                <Stack.Screen
                  name={"Search"}
                  component={MusicSearch}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name={"Playlist"}
                  component={Playlist}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name={"ModalIndex"}
                  component={ModalIndex}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name={"ModalLogin"}
                  component={ModalLogin}
                  options={{
                    headerStyle: { backgroundColor: "red" },
                    title: "手机号登陆",
                    headerTitleStyle: { color: "white" },
                    headerBackTitleStyle: { color: "white" },
                  }}
                />
                <Stack.Screen
                  name={"DailyRecommend"}
                  component={DailyRecommend}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name={"UserPlaylist"}
                  component={UserPlaylist}
                  options={{ headerShown: false }}
                />
                <Stack.Screen name={"MusicDetail"} component={MusicDetail} />
                <Stack.Screen
                  name={"ToplistAll"}
                  component={ToplistAll}
                  options={{ title: "歌单精选" }}
                />
                <Stack.Screen
                  name={"RankList"}
                  component={RankList}
                  options={{ title: "排行榜" }}
                />
                <Stack.Screen
                  name={"Chat"}
                  component={Chat}
                  options={{ title: "我的好友" }}
                />
                <Stack.Screen
                  name={"ChatMain"}
                  component={Chatmain}
                  options={{ title: userName }}
                />
              </Stack.Navigator>
            </searchIndexContext.Provider>
            {musicUrl !== "" && (
              <MusicPlayer
                setCurrentTime={setCurrentTime}
                musicUrl={musicUrl}
                changeCurrentTime={changeCurrentTime}
                playerIcon={playerIcon}
                setPlayerIcon={setPlayerIcon}
                stop={stop}
                setStop={setStop}
              />
            )}
            <TouchableOpacity
              style={{
                display: searchVisible,
                alignItems: "stretch",
                justifyContent: "center",
                height: 80,
                borderTopWidth: 1,
                borderColor: "#cecece",
                alignContent: "center",
              }}
              onPress={() => {
                if (musicUrl) {
                  setMusicShow(true);
                  getLyric(songId);
                }
              }}
            >
              <Flex
                style={{
                  width: mobileWidth,
                  paddingLeft: mobileWidth * 0.05,
                  paddingRight: mobileWidth * 0.05,
                }}
              >
                {playerImg === "" && (
                  <View
                    style={{
                      width: mobileWidth * 0.15,
                      height: mobileWidth * 0.15,
                      borderRadius: mobileWidth * 0.15,
                      backgroundColor: "#cecece",
                    }}
                  />
                )}
                {playerImg !== "" && (
                  <Image
                    source={{ uri: playerImg }}
                    style={{
                      width: mobileWidth * 0.15,
                      height: mobileWidth * 0.15,
                      borderRadius: mobileWidth * 0.15,
                    }}
                  />
                )}
                <View
                  style={{
                    paddingTop: 12,
                    width: mobileWidth * 0.6,
                    marginLeft: mobileWidth * 0.02,
                  }}
                >
                  <Text>{playerText}</Text>
                  <Slider
                    value={playValue}
                    onSlidingStart={(value) => {
                      setStop(true);
                    }}
                    onSlidingComplete={(value) => {
                      setChangeCurrentTime(
                        value * currentTime.seekableDuration
                      );
                      setPlayValue(value);
                      setStop(false);
                    }}
                    thumbStyle={{
                      height: 20,
                      width: 20,
                      backgroundColor: "transparent",
                    }}
                    thumbProps={{
                      Component: Animated.Image,
                      source: {
                        uri:
                          "https://i0.hdslb.com/bfs/emote/70dc5c7b56f93eb61bddba11e28fb1d18fddcd4c.png@100w_100h.webp",
                      },
                    }}
                  />
                </View>
                <Icon
                  name={playerIcon}
                  style={{ marginLeft: mobileWidth * 0.02, flex: 1 }}
                  size={mobileWidth * 0.1}
                  onPress={() => {
                    setPlayerIcon(
                      playerIcon === "pause-circle"
                        ? "play-circle"
                        : "pause-circle"
                    );
                  }}
                />
              </Flex>
            </TouchableOpacity>
            {/*----------------------------------------搜索页-------搜索页--------------------------------------------*/}
          </Provider>
        </homeContext.Provider>
      </NavigationContainer>
    </DrawerLayoutAndroid>
  );
};

export default App;
