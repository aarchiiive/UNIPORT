import { StyleSheet } from "react-native";

import { Color } from "./global/Color";
import { FontFamily, FontSize } from "./global/Font";
import { globalStyles } from "./global/GlobalStyles";

export const styles = StyleSheet.create({
  // container
  container: {
    // paddingTop: 120,
    // minHeight: '100%',
    // minHeight: '100%',
    alignItems: 'center',
    // overflow: 'hidden'
  },

  // logo
  logoContainer: {
    marginTop: 120,
    alignItems: 'center'
  },
  logo: {
    width: 51,
    height: 73,
  },
  uniport: {
    color: Color.lightModeDarkGray,
    fontFamily: FontFamily.poppinsBold,
    fontSize: 28,
    marginTop: 10,
  },
  caption: {
    color: Color.lightModeDarkGray,
    fontFamily: FontFamily.poppinsMedium,
    fontSize: 9,
  },

  inputContainer: {
    margin: 60,
    alignItems: 'center'
  },

  // input text (email & password)
  inputText: {
    width: 330,
    height: 48,
    borderRadius: 10,
    paddingHorizontal: 20,
    marginBottom: 15,
    fontFamily: FontFamily.poppinsMedium,
    backgroundColor: Color.lightModeWhite
  },

  // text
  findAccount: {
    color: Color.lightModeGray,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: 14,
  },

  // login button
  loginButton: {
    ...globalStyles.button,
  },
  linearGradient: {
    width: 330,
    height: 48,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontSize: 16,
    color: Color.lightModeWhite,
  },


  // sign up
  signUpArea: {
    marginTop: 60,
    alignItems: 'center'
  },
  orText: {
    fontFamily: FontFamily.poppinsMedium,
    fontSize: 16,
    color: Color.lightModeDarkGray,
  },
  accountQuestion: {
    marginTop: 20,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: 16,
    color: Color.lightModeDarkGray,
  },
  signUpText: {
    marginTop: 10,
    fontFamily: FontFamily.poppinsSemiBold,
    fontSize: 14,
    color: Color.lightModeDarkGray,
  },
})
