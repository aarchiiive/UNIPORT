import React from 'react';
import { View, TouchableOpacity, Text, Image } from "react-native";

import { styles } from '../styles/components/Logo'


export const HomeHeader = ({ onPress } : { onPress: () => void; }) => {
  return (
    <View style={styles.mainView}>
      <View style={styles.textLogoView}>
        <Image source={require("../../assets/uniport.png")} style={styles.small}></Image>
        <Text style={styles.text}>{"UNIPORT"}</Text>
      </View>
      <View style={styles.spaceView}></View>
      <TouchableOpacity style={styles.noticeButton} onPress={onPress}>
        <Image source={require("../../assets/notice.png")}></Image>
      </TouchableOpacity>
    </View>
  );
};


