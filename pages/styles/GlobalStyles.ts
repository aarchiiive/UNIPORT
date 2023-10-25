import { StyleSheet } from 'react-native';

import { Color } from '../styles/Color';
import { FontFamily, FontSize } from '../styles/Font';


export const globalStyles = StyleSheet.create({
    // views
    horizontalView: {
      flexDirection: 'row',
      marginLeft: 10,
      marginRight: 2
    },
    spaceView: {
      width: "100%",
    },

    // buttons
    button: {
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#000000',
      shadowOffset: { width: 4, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
    },
    buttonShadow: {
      shadowColor: '#000000',
      shadowOffset: { width: 4, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
    },
    lightButton: {
      backgroundColor: Color.lightModeWhite
    },
    darkButton: {
      backgroundColor: Color.darkModeQuaternaryD
    },
  
    // font family
    fontRegular: {
      fontFamily: FontFamily.poppinsRegular 
    },
    fontMedium: {
      fontFamily: FontFamily.poppinsMedium
    },
    fontBold: {
      fontFamily: FontFamily.poppinsSemiBold
    },
  
    // text size
    fontSize2XS: {
      fontSize: FontSize.size_2xs
    },
    fontSizeXS: {
      fontSize: FontSize.size_xs
    },
    fontSizeS: {
      fontSize: FontSize.size_s
    },
    fontSizeM: {
      fontSize: FontSize.size_m
    },
    fontSizeL: {
      fontSize: FontSize.size_l
    },
    fontSizeXL: {
      fontSize: FontSize.size_xl
    },
    fontSize2XL: {
      fontSize: FontSize.size_2xl
    },
    fontSize3XL: {
      fontSize: FontSize.size_3xl
    },
    fontSize4XL: {
      fontSize: FontSize.size_4xl
    },
  
    // align text
    textCenter: {
      alignSelf: "center",
    },
  
    // text colors
    grayText: {
      color: '#B1B8C0'
    },
    lightText: {
      color: '#2D2D2D'
    },
    darkText: {
      color: '#ffffff'
    },

    // align
    centerWrapper: {
      flex: 1, 
      alignItems: 'center',
    },
  
    // icon
    iconLarge: {
      width: 80, 
      height: 80,
      marginBottom: 10 
    },
    iconSmall: {
      width: 40, 
      height: 40,
    },
  });
  