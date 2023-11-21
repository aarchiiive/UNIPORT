import * as React from "react";
import {
  Image,
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  useColorScheme
} from "react-native";

import { NavProps } from './components/Props';
import * as Navigations from "./Navigations";

import { Color } from "./styles/global/Color";
import { globalStyles } from "./styles/global/GlobalStyles";
import { FontFamily } from "./styles/global/Font";


const DeveloperMode: React.FC<NavProps> = ({ navigation }) => {
  const scheme = useColorScheme();
  const backgroundStyles = [
    // scheme === 'dark' ? styles.darkView : styles.lightView
    styles.lightView
  ];
  return (
    <ScrollView 
    style={backgroundStyles}
    contentContainerStyle={styles.contentContainer}
    >
      <TouchableOpacity
        style={styles.button}
        onPress={() => Navigations.toStart({ navigation })}
      >
        <Text style={styles.buttonText}>{'Start'}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => Navigations.toLogin({ navigation })}
      >
        <Text style={styles.buttonText}>{'Login'}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => Navigations.toWelcome({ navigation })}
      >
        <Text style={styles.buttonText}>{'Welcome'}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => Navigations.toPolicyAgreement({ navigation })}
      >
        <Text style={styles.buttonText}>{'PolicyAgreement'}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => Navigations.toRegisterGuide({ navigation })}
      >
        <Text style={styles.buttonText}>{'RegisterGuide'}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => Navigations.toPassportScan({ navigation })}
      >
        <Text style={styles.buttonText}>{'PassportScan'}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => Navigations.toSignUp({ navigation })}
      >
        <Text style={styles.buttonText}>{'SignUp'}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => Navigations.toMain({ navigation })}
      >
        <Text style={styles.buttonText}>{'Main'}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => Navigations.toNotifications({ navigation })}
      >
        <Text style={styles.buttonText}>{'Notifications'}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => Navigations.toProfile({ navigation })}
      >
        <Text style={styles.buttonText}>{'Profile'}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => Navigations.toUNIStay({ navigation })}
      >
        <Text style={styles.buttonText}>{'UNIStay'}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default DeveloperMode;


export const styles = StyleSheet.create({
    lightView: {
      backgroundColor: Color.lightModeBackground,
      flex: 1,
      height: '100%',
      // justifyContent: 'center',  // 중앙 정렬 (세로)
      // alignItems: 'center',      // 중앙 정렬 (가로)
    },
    contentContainer: {
      paddingVertical: 100,
      justifyContent: 'center',
      alignItems: 'center',
    },
    darkView: {
      backgroundColor: Color.darkModeBackground,
      flex: 1,
      justifyContent: 'center',  // 중앙 정렬 (세로)
      alignItems: 'center',      // 중앙 정렬 (가로)
    },
  
    button: {
      width: 160,
      height: 40,
      borderRadius: 10,
      marginVertical: 20,
      backgroundColor: Color.lightModeWhite,
      justifyContent: 'center',
      alignItems: 'center',
      ...globalStyles.buttonShadow,
    },
    buttonText: {
      fontFamily: FontFamily.poppinsMedium,
      fontSize: 14,
      alignSelf: 'center',
    },
  });