import { StyleSheet } from "react-native";

import { Color } from "./global/Color";
import { FontFamily, FontSize } from "./global/Font";
import { globalStyles } from "./global/GlobalStyles";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    commentTab: {
      height: 100,
      backgroundColor: '#F5F5F5',
      justifyContent: 'center',
      alignItems: 'center',
    },
    commentArea: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    uniportLogo: {
      width: 50,
      height: 50,
      marginRight: 10,
    },
    commentText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#333',
    },
    passportInfoTab: {
      backgroundColor: '#fff',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: -2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    passportInfoScroll: {
      paddingHorizontal: 20,
      paddingVertical: 10,
    },
    passportInfoTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    passportInfoBox: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#E5E5E5',
    },
    passportInfoName: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#333',
    },
    passportInfoContent: {
      fontSize: 16,
      color: '#666',
    },
  });