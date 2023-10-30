import { Dimensions, StyleSheet } from 'react-native';

// styles
import { Color } from "./global/Color";
import { FontFamily, FontSize } from "./global/Font";


export const styles = StyleSheet.create({
  // containers
  header: {
    paddingTop: "12%",
  },
  main: {
    minHeight: Dimensions.get('window').height,
  },

  // views
  lightView: {
    backgroundColor: Color.lightModeBackground,
    flex: 1,
  },
  darkView: {
    backgroundColor: Color.darkModeBackground,
    flex: 1,
  },

  // elements
  title: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontSize: 24,
    marginLeft: 10,
  },

  // icons
  goBackIcon: {
    width: 36,
    height: 36,
  },
  lightBulbIcon: {
    width: 18,
    height: 18,
  },

  // notification
  noticeContainer: {
    flexDirection: 'column',
  },
  noticeBox: {
    width: '100%',
    height: 72,
  },
  noticeInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginTop: 8,
  },
  noticeType: {
    flexDirection: 'row',
  },
  noticeTypeText: {
    marginLeft: 4,
    marginVertical: 2,
  },
  noticeDate: {
    marginRight: 20,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_s,
    color: Color.lightModeGray
  },
  notice: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontSize: 14,
    marginLeft: 24,
    marginTop: 14,
    marginBottom: 8,
  },
  whiteBox: {
    backgroundColor: Color.lightModeWhite
  },
  grayBox: {
    backgroundColor: Color.lightModeBackground
  },
  separator: {
    height: 0.5,
    backgroundColor: Color.lightModeDarkGray,
  }
});