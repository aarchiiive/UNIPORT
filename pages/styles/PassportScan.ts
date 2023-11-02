import { StyleSheet } from "react-native";

import { Color } from "./global/Color";
import { FontFamily, FontSize } from "./global/Font";
import { globalStyles } from "./global/GlobalStyles";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
    },

    // comment tab
    commentTab: {
      backgroundColor: Color.lightModeWhite,
      width: '100%',
      height: '40%',
      paddingTop: 100,
      borderBottomStartRadius: 20,
      borderBottomEndRadius: 20,
      ...globalStyles.buttonShadow,
    },
    commentArea: {
      width: '100%',
      alignItems: 'center',
      // marginTop: 20,
    },
    uniportLogo: {
      // width: 50,
      height: 100,
      resizeMode: 'contain',
    },
    commentText: {
      textAlign: 'center',
      fontFamily: FontFamily.poppinsSemiBold,
      fontSize: 18,
      marginTop: 10,
    },

    scrollView: {
      // flex: 1,
      width: '100%',
    },
    passportImage: { 
      alignSelf: 'center', 
      marginTop: '24%',
      width: '100%',
      height: '100%',
      resizeMode: 'contain',
    },
    camera: {
      marginTop: '4%',
      width: "100%",
      height: 400,
    },

    // passport info tab
    passportInfoTab: {
      flex: 1,
      color: Color.lightModeWhite,
    },
    passportInfoScroll: {
      flex: 1,
      marginTop: 20,
      marginHorizontal: 30,
      backgroundColor: Color.lightModeWhite,
    },
    passportInfoTitle: {
      fontFamily: FontFamily.poppinsSemiBold,
      fontSize: 24,
      color: Color.lightModeDarkGray,
      marginBottom: 20,
    },
    passportInfoBox: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 14,
    },
    passportInfoName: {
      fontFamily: FontFamily.poppinsSemiBold,
      fontSize: 20,
      color: Color.lightModeDarkGray
    },
    passportInfoContent: {
      fontFamily: FontFamily.poppinsRegular,
      fontSize: 18,
      color: Color.lightModeGray
    },
  });