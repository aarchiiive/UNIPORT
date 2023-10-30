import { Image, StyleSheet, View, TouchableOpacity, useColorScheme } from "react-native";
import { Color } from "./global/Color"


export const styles = StyleSheet.create({
  child: {
    width: 72,
    height: 103,
  },
  lightView: {
    backgroundColor: Color.lightModeBackground,
    flex: 1,
    justifyContent: 'center',  // 중앙 정렬 (세로)
    alignItems: 'center',      // 중앙 정렬 (가로)
  },
  darkView: {
    backgroundColor: Color.darkModeBackground,
    flex: 1,
    justifyContent: 'center',  // 중앙 정렬 (세로)
    alignItems: 'center',      // 중앙 정렬 (가로)
  },
});