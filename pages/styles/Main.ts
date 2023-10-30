import { StyleSheet } from "react-native";

// styles
import { Color } from "./global/Color";
import { FontFamily, FontSize } from "./global/Font";

const globalMargin = 20;

export const styles = StyleSheet.create({
  // views
  mainView: {
    marginTop: "24%",
    marginBottom: "48%",
    marginHorizontal: globalMargin,
  },
  lightView: {
    backgroundColor: Color.lightModeBackground,
    width: "100%",
  },
  darkView: {
    backgroundColor: Color.darkModeBackground,
    width: "100%",
  },
  horizontalView: {
    width: "90%",
    maxWidth: 305,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginVertical: globalMargin - 12,
  },
  verticalView: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  // div
  div: {
    width: "100%",
    height: 8,
    alignSelf: 'center',
  },

  // components
  leftComponents: {
    margin: globalMargin
  },
  rightComponents: {
    margin: globalMargin
  },

  // titles
  barTitle: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontSize: FontSize.size_2xl,
    marginLeft: 10,
  },

  // navigation bar
  navigationBar: {
    position: 'absolute',
    marginTop: "192%",
    width: "100%",
    zIndex: 1,
    alignSelf: 'center',
  },
})
