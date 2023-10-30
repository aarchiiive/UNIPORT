import { StyleSheet } from 'react-native';

import { Color } from '../global/Color';
import { FontFamily } from '../global/Font';
import { globalStyles } from '../global/GlobalStyles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    ...globalStyles.buttonShadow,
    ...globalStyles.lightButton,
  },
  expandedContainer: {
    flex: 1,
    borderRadius: 10,
    ...globalStyles.buttonShadow,
    ...globalStyles.lightButton,
  },
  horizontalView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 10,
    marginVertical: '1%',
  },

  // elements
  separator: {
    borderColor: Color.lightModeGray,
    borderWidth: 0.4
  },
  button: {
    width: '100%',
    height: 46,
    borderRadius: 10,
    justifyContent: 'center',
  },

  // text
  infoList: {
    fontSize: 18,
  },

  // details
  details: {
    display: 'flex',
    flexDirection: 'column',
    marginHorizontal: 20,
    overflow: 'hidden'
  },

  // box title
  boxTitle: {
    ...globalStyles.fontSizeS,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.lightModeGray,
    // marginLeft: 16,
    marginBottom: 10,
  },

  // see more
  seeMore: {
    ...globalStyles.fontSizeS,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.lightModeGray,
    // marginRight: 20,
    textAlign: 'right',
  },

  // lastingDays
  lastingDaysContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  lastingDays: {
    ...globalStyles.fontSize4XL,
    fontFamily: FontFamily.poppinsMedium,
    color: Color.lightModeGray,
    marginLeft: 36
  },
  days: {
    ...globalStyles.fontSizeL,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.lightModeGray,
    marginTop: 24
  },

  // text colors
  lightText: {
    ...globalStyles.lightText,
    fontFamily: FontFamily.poppinsLight,
    marginVertical: 4,
    alignContent: 'center',
  },
  darkText: {
    ...globalStyles.darkText,
    fontFamily: FontFamily.poppinsLight,
    marginVertical: 4,
    alignContent: 'center',
  },

  // icon
  icon: {
    width: 32,
    height: 32,
  },
});