import React, { useContext } from "react";
import {View, Text} from 'react-native';
import {Tabs} from '@ant-design/react-native';
import {homeContext} from './context';
import ChineseToplist from './chineseToplist';
import JpToplist from './JpToplist';
import EouToplist from './EouToplist';
import KoToplist from './KoToplist';

const ToplistAll = ({navigation}) => {
  const tabs = [
    {title: '华语'},
    {title: '欧美'},
    {title: '日语'},
    {title: 'ACG'},
  ];

  return (
    <Tabs tabs={tabs}>
      <View>
        <ChineseToplist navigation={navigation} />
      </View>
      <View>
        <EouToplist navigation={navigation} />
      </View>
      <View>
        <JpToplist navigation={navigation} />
      </View>
      <View>
        <KoToplist navigation={navigation} />
      </View>
    </Tabs>
  );
};

export default ToplistAll;
