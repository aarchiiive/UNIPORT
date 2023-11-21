import { Image, StyleSheet, View, TouchableOpacity, useColorScheme } from "react-native";
import { Color } from "./global/Color";
import { globalStyles } from "./global/GlobalStyles";
import { FontFamily } from "./global/Font";


export const styles = StyleSheet.create({
  logo: {
    width: 72,
    height: 103,
  },
  lightView: {
    backgroundColor: Color.lightModeBackground,
    flex: 1,
    height: '100%',
    justifyContent: 'center',  // 중앙 정렬 (세로)
    alignItems: 'center',      // 중앙 정렬 (가로)
  },
  contentContainer: {
    paddingVertical: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  darkView: {
    backgroundColor: Color.darkModeBackground,
    flex: 1,
    justifyContent: 'center',  // 중앙 정렬 (세로)
    alignItems: 'center',      // 중앙 정렬 (가로)
  },

  button: {
    width: 160,
    height: 40,
    borderRadius: 10,
    marginVertical: 20,
    backgroundColor: Color.lightModeWhite,
    justifyContent: 'center',
    alignItems: 'center',
    ...globalStyles.buttonShadow,
  },
  buttonText: {
    fontFamily: FontFamily.poppinsMedium,
    fontSize: 14,
    alignSelf: 'center',
  },

  developerModeButton: {
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  developerModeText: {
    fontFamily: FontFamily.poppinsMedium,
    color: Color.lightModeGray,
    fontSize: 14,
    alignSelf: 'center',
  },
});