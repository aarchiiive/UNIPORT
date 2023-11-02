import { StyleSheet } from "react-native";

import { Color } from "./global/Color";
import { FontFamily, FontSize } from "./global/Font";
import { globalStyles } from "./global/GlobalStyles";

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 120,
  },
  welcomeText: {
    fontSize: 30,
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.lightModeDarkGray
  },

  
  // notice
  noticeArea: {
    alignItems: 'center',
    marginVertical: 180
  },
  noticeLine: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  noticeDescription: {
    fontSize: 20,
    fontFamily: FontFamily.poppinsMedium,
    color: Color.lightModeDarkGray,
  },
  noitceDescriptionBold: {
    fontSize: 24,
    fontFamily: FontFamily.poppinsBold,
    color: Color.lightModeDarkGray,
    marginBottom: 2,
  },

  // start button
  startButton: {
    ...globalStyles.button,
  },
  linearGradient: {
    width: 200,
    height: 70,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  startButtonText: {
    fontSize: 20,
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.lightModeWhite,
  },

  // later button
  laterButtonText: {
    fontSize: 14,
    fontFamily: FontFamily.poppinsMedium,
    color: Color.lightModeGray,
    marginTop: 30,
  }
});
