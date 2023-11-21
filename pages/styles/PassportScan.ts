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
    position: 'absolute', // Position it over the other content
    top: 0, // Align to the top of the container
    left: 0, // Align to the left of the container
    right: 0, // Align to the right of the container
    zIndex: 10,

    backgroundColor: Color.lightModeWhite,
    // width: '100%',
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
    width: '100%',
    height: 400,
    resizeMode: 'contain',
  },
  camera: {
    marginTop: '38%',
    width: "100%",
    height: 600,
  },

  // passport info tab
  passportInfoTab: {
    flex: 1,
    color: Color.lightModeWhite,
  },
  passportInfoScroll: {
    marginTop: 20,
    marginHorizontal: 30,
    backgroundColor: Color.lightModeWhite,
    paddingBottom: 40,
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

  nextButton: {
    ...globalStyles.button,
    marginHorizontal: 20,
    marginVertical: 30,
  },
  linearGradient: {
    width: 120,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextButtonText: {
    fontSize: 18,
    fontFamily: FontFamily.poppinsMedium,
    color: Color.lightModeWhite,
  },
});