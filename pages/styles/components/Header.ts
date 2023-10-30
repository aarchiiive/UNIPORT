import { StyleSheet } from 'react-native';

import { Color } from "../global/Color";
import { FontFamily, FontSize } from "../global/Font";


export const styles = StyleSheet.create({
    // containers
    header: {
      width: "100%",
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: 20,
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
      color: Color.lightModeDarkGray,
      marginLeft: 10,
    },
  
    icon: {
      width: 36,
      height: 36,
      marginHorizontal: 20,
    },
  });