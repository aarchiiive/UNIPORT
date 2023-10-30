import { StyleSheet } from "react-native";

import { Color } from "./global/Color";
import { FontFamily, FontSize } from "./global/Font";
import { globalStyles } from "./global/GlobalStyles";

export const styles = StyleSheet.create({
  // container
  container: {
    marginTop: 40,
    marginBottom: '100%',
    alignItems: 'center',
  },

  // language notice
  languageNotice: {
    ...globalStyles.buttonShadow,
    backgroundColor: Color.lightModeWhite,

    width: '100%',
    height: 226,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,

    // marginBottom: 50,
    alignItems: 'center',
  },
  logo: {
    width: 51,
    height: 73,
    marginTop: 60
  },
  noticeMessage: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontSize: 20,
    color: Color.lightModeDarkGray,
    marginTop: 24
  },

  // language buttons
  languageButton: {
    ...globalStyles.button,
    ...globalStyles.buttonShadow,
    backgroundColor: Color.lightModeWhite,
    width: 330,
    height: 60,
    borderRadius: 15,
    marginVertical: 10,
  },
  languageButtonSelected:{
    backgroundColor: Color.lightModeBackground,
    opacity: 0.4,
  },
  languageContainer: {
    width: '100%',
    paddingHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  flag: {
    width: 38,
    height: 38
  },
  languageName: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontSize: 16,
    color: Color.lightModeDarkGray,
  },

  // start button
  startButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  startButton: {
    ...globalStyles.button,
    // ...globalStyles.buttonShadow,
    marginTop: 40,
  },
  linearGradient: {
    width: 200,
    height: 70,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowIcon: {
    width: 24,
    height: 24,
    marginLeft: 10
  },
  startButtonText: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontSize: 16,
    color: Color.lightModeWhite,
  },
})
