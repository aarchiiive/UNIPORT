import { StyleSheet } from 'react-native';

import { FontFamily, FontSize } from '../global/Font';
import { globalStyles } from '../global/GlobalStyles';

export const styles = StyleSheet.create({
  // text styles
  mainText: {
    fontSize: 64,
    fontFamily: FontFamily.poppinsMedium,
    backgroundColor: 'transparent'
  },
  subText: {
    fontSize: 14,
  },
  imageSubText: {
    fontSize: 12,
  },

  // Gradient Button
  gradientButton: {
    ...globalStyles.button,
    width: 140, 
    height: 140, 
    borderRadius: 30, 
  },
  gradientSubText: {
    ...globalStyles.textCenter,
    fontSize: 16
  },

  // WeeklyLuckyDrawButton
  weeklyLuckyDrawButton: {
    ...globalStyles.button,
    width: 140, 
    height: 140, 
    borderRadius: 30, 
  },
  weeklyLuckyDrawText: {
    ...globalStyles.textCenter,
    fontSize: 12,
  },

  // UNIStay
  UNIStayButton: {
    ...globalStyles.button,
    width: 150, 
    height: 150, 
    borderRadius: 30, 
  },
  UNIStayText: {
    ...globalStyles.fontBold,
    ...globalStyles.textCenter,
    fontSize: 20,
  },

  // UNIPhone
  UNIPhoneButton: {
    ...globalStyles.button,
    width: 130, 
    height: 65, 
    borderRadius: 20, 
  },
  UNIPhoneText: {
    ...globalStyles.fontBold,
    ...globalStyles.textCenter,
    fontSize: 14,
  },

  // UNIVisa
  UNIVisaButton: {
    ...globalStyles.button,
    width: 130, 
    height: 65, 
    borderRadius: 20, 
  },
  UNIVisaText: {
    ...globalStyles.fontBold,
    ...globalStyles.textCenter,
    fontSize: 14,
    marginLeft: 4 , 
    marginRight: 10
  },

  // Visa Status
  visaStatusText: {
    ...globalStyles.textCenter,
    ...globalStyles.fontRegular,
    ...globalStyles.fontSizeS,
    ...globalStyles.grayText
  },
  expireNotice: {
    marginRight: 144,
    marginTop: "4%"
  },
  days: {
    fontSize: 14,
    marginTop: "2%"
  },
  visaStatusButton: {
    ...globalStyles.button,
    width: "100%",
    height: 150,
    borderRadius: 30
  },
  visaStatus: {
    fontFamily: FontFamily.poppinsSemiBold,
    alignSelf: "center",
    fontSize: FontSize.size_2xl,
  },
  visaType: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_m
  },
  visaExpireDate: {
    fontFamily: FontFamily.poppinsSemiBold,
    alignSelf: "center",
    fontSize: FontSize.size_3xl,
    color: '#B1B8C0',
    marginLeft: 36
  },
  seeMore: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_xs,
    color: '#B1B8C0',
    marginLeft: 208,
    marginBottom: 2
  }
})