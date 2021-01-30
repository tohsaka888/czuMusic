import { Flex, Icon } from "@ant-design/react-native";
import React, {
  useState,
  useEffect,
  useCallback,
  useContext,
  useRef,
} from "react";
import { View, Text, TextInput } from "react-native";
import { mobileHeight, mobileWidth } from "./mobileWidth";
import { GiftedChat } from "react-native-gifted-chat";
import { homeContext } from "./context";

export default function Chatmain({ route }) {
  const { message, getMessage, loginStatus, sendMessage } = useContext(homeContext);
  const { userId } = route.params;
  const [messages, setMessages] = useState([]);
  const temp = useRef(0);

  useEffect(() => {
    const getMessageData = async () => {
      await getMessage(userId);
      let arr = [];
      if (JSON.stringify(message) === "{}") {
        temp.current = 0;
      }
      if (JSON.stringify(message) !== "{}") {
        temp.current = 1;
        for (let index = 0; index < message.msgs.length; index++) {
          const picInfo = JSON.parse(message.msgs[index].msg).picInfo;
          if (picInfo !== undefined) {
            arr[index] = {
              _id: index,
              text: JSON.parse(message.msgs[index].msg).msg,
              image: JSON.parse(message.msgs[index].msg).imgUrl,
              createdAt: new Date(message.msgs[index].time),
              user: {
                _id: message.msgs[index].fromUser.userId,
                name: message.msgs[index].toUser.nickname,
                avatar: message.msgs[index].fromUser.avatarUrl,
              },
              image: picInfo.picUrl,
            };
          } else {
            arr[index] = {
              _id: index,
              text: JSON.parse(message.msgs[index].msg).msg,
              image: JSON.parse(message.msgs[index].msg).imgUrl,
              createdAt: new Date(message.msgs[index].time),
              user: {
                _id: message.msgs[index].fromUser.userId,
                name: message.msgs[index].toUser.nickname,
                avatar: message.msgs[index].fromUser.avatarUrl,
              },
            };
          }
        }
        setMessages(arr);
      }
    };
    getMessageData();
  }, [temp.current === 0]);

  const onSend = useCallback((messages = []) => {
    sendMessage(userId ,messages[0].text);
    setMessages((previousMessages) => {
      return GiftedChat.append(previousMessages, messages);
    });
  }, []);

  return (
    <View>
      <View style={{ height: mobileHeight * 0.88, backgroundColor: "white" }}>
        <GiftedChat
          messages={messages}
          onSend={(messages) => onSend(messages)}
          user={{
            _id: loginStatus.profile.userId,
          }}
        />
      </View>
    </View>
  );
}
