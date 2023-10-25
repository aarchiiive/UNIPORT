import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image, useColorScheme } from "react-native";
import { Color } from '../styles/Color';
import { FontFamily, FontSize } from '../styles/Font';

interface noticeProps {
  // mainText: string;
  onPress: () => void;
};

export const HomeHeader: React.FC<noticeProps> = ({ onPress }) => {
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


const styles = StyleSheet.create({
  // views
  mainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    alignSelf: 'center',
  },
  textLogoView: {
    flexDirection: 'row',
  },
  spaceView: {
    width: "100%", // 원하는 간격 크기로 조정
  },

  // text
  text: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontSize: FontSize.size_2xl,
    marginLeft: 10,
  },

  // notice icon
  notice: {
    width: 24,
    height: 24,
  },
  noticeButton: {
    marginTop: 1,
    marginLeft: 'auto', // 오른쪽으로 정렬
  },

  // logo size
  small: {
    width: 16.75,
    height: 24.316,
    marginTop: 2,
  },
});
