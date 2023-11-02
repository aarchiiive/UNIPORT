import { StyleSheet } from "react-native";

import { Color } from "./global/Color";
import { FontFamily, FontSize } from "./global/Font";
import { globalStyles } from "./global/GlobalStyles";

export const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    alignItems: 'center',
    paddingTop: 100,
    width: '84%'
  },
  
  descriptionContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  topDescriptionArea: {
    width: '100%',
  },
  uniportLogo: {
    fontSize: 30,
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.lightModeDarkGray,
    marginBottom: 10,
  },
  topDescriptionText: {
    fontSize: 16,
    fontFamily: FontFamily.poppinsMedium,
    color: Color.lightModeDarkGray,
  },
  topDescriptionTextBold: {
    fontSize: 16,
    fontFamily: FontFamily.poppinsMedium,
    color: Color.lightModeDarkGray,
  },

  midDescriptionArea: {
    width: '100%',
    marginVertical: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  midDescriptionText: {
    fontSize: 18,
    fontFamily: FontFamily.poppinsMedium,
    color: Color.lightModeDarkGray,
  },
  midDescriptionTextBold: {
    fontSize: 18,
    fontFamily: FontFamily.poppinsSemiBold,
    color: '#025EFF',
  },

  passportImage: {
    width: 330,
    height: 220,
    marginBottom: 40,
  },
  noPassportNotice: {
    textAlign: 'center',
    fontSize: 12,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.lightModeGray,
  },


  buttonArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
    // width: '80%',
  },

  // next button
  nextButton: {
    ...globalStyles.button,
    marginHorizontal: 20,
  },
  linearGradient: {
    width: 120,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextButtonText: {
    fontSize: 16,
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.lightModeWhite,
  },

  // later button
  laterButton: {
    width: 120,
    height: 40,
    borderRadius: 10,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.lightModeWhite,
    ...globalStyles.buttonShadow,
  },
  laterButtonText: {
    fontSize: 16,
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.lightModeDarkGray
  }
});