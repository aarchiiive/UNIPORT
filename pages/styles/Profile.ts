import { Dimensions, StyleSheet } from 'react-native';

// styles
import { Color } from "./global/Color";
import { FontFamily, FontSize } from "./global/Font";


const commonStyles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 20,
    backgroundColor: Color.lightModeWhite,
    overflow: 'visible',
    zIndex: 0,
  },
  shadow: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
  },
});


export const styles = StyleSheet.create({
  // containers
  header: {
    // marginTop: "12%",
    // marginHorizontal: "8%",
    paddingTop: "12%",
    backgroundColor: Color.lightModeWhite,
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

  // logo
  circleLogo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 32,
    marginBottom: 32
  },

  // information field
  infoFieldContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 30,
    paddingVertical: 12,
  },
  infoName: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontSize: 18,
    color: Color.lightModeDarkGray,
    textAlign: 'left',
  },
  infoContentContainer: {
    flexDirection: 'column',
  },
  infoContent: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: 16,
    color: Color.lightModeGray,
    marginTop: 4,
  },
  infoFieldMargin: {
    marginVertical: 10
  },
  infoTitle: {
    fontFamily: FontFamily.poppinsBold,
    fontSize: 18,
    color: Color.lightModeDarkGray,
    textAlign: 'left',
  },

  // flexible box
  icon: {
    width: 32,
    height: 32,
    alignSelf: 'center',
  },

  // informations
  userInfoContainer: {
    ...commonStyles.container,
    ...commonStyles.shadow,
    height: 480,
    marginBottom: 20,

    borderColor: Color.lightModeGray,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },

  passportInfoContainer: {
    ...commonStyles.container,
    ...commonStyles.shadow,
    height: 400,
  },

  ARCInfoContainer: {
    ...commonStyles.container,
    height: 600,

    borderTopColor: Color.lightModeGray,
    borderTopWidth: 1,
  }

});