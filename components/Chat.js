import { View, Text } from "react-native";
import React, { useContext } from "react";
import { homeContext } from "./context";
import { Flex } from "@ant-design/react-native";
import { Avatar } from "react-native-elements";
import { mobileWidth } from "./mobileWidth";
import { ScrollView } from "react-native-gesture-handler";

export default function Chat({navigation}) {
  const { friend, setUserName } = useContext(homeContext);

  return (
    <ScrollView>
      {friend.follow !== undefined &&
        friend.follow.map((item, index) => {
          return (
            <Flex
              onPress={()=>{
                setUserName(item.nickname);
                navigation.navigate('ChatMain',{
                  userId: item.userId,
                });
              }}
              key={index}
              wrap={"nowrap"}
              style={{
                paddingTop: mobileWidth * 0.01,
                paddingBottom: mobileWidth * 0.01,
                marginTop: mobileWidth * 0.02,
                marginBottom: mobileWidth * 0.02,
                marginLeft: mobileWidth * 0.03,
                paddingLeft: mobileWidth * 0.03,
                marginRight: mobileWidth * 0.03,
                paddingRight: mobileWidth * 0.03,
                borderBottomWidth: 3,
                borderRightWidth: 1,
                borderColor: "#cecece",
                borderRadius: 20,
                backgroundColor: "#f9f9f9",
              }}
            >
              <Avatar
                source={{ uri: item.avatarUrl }}
                size={50}
                avatarStyle={{ borderRadius: 100 }}
              />
              <Text
                style={{
                  marginLeft: mobileWidth * 0.1,
                  fontSize: 16,
                  fontWeight: "bold",
                  flex: 1,
                }}
              >
                {item.nickname}
              </Text>
              <Text style={{ flex: 1 }}>
                人气值：<Text style={{ color: "red",fontWeight:'bold'}}>{item.followeds}</Text>
              </Text>
            </Flex>
          );
        })}
    </ScrollView>
  );
}
