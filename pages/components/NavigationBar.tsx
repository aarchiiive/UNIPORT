import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Color } from '../styles/Color';

import { PageProps } from './Props'

interface OptionProps {
  icon: any;
  onPress: () => void;
}

export const Option: React.FC<OptionProps> = ({ icon, onPress }) => {
  const [isPressed, setIsPressed] = useState(false);
  return (
    <TouchableOpacity 
    style={[styles.button, isPressed ? styles.bgActive : styles.bgInactive]}
    onPress={onPress}
    onPressIn={() => setIsPressed(true)}
    onPressOut={() => setIsPressed(false)}>
      <Image source={icon} style={[styles.icon, { opacity: 1 }]}></Image>
    </TouchableOpacity>
  );
};

export const NavigationBar: React.FC<PageProps> = ( { navigation } ) => {
  const toMain = () => {
    navigation.navigate('Main');
  };
  const toProfile = () => {
    navigation.navigate('Profile');
  };
  return (
    <TouchableOpacity style={styles.container} disabled={true}>
      <View style={styles.iconsContainer}>
        <Option icon={require("../../assets/home.png")} onPress={toMain}></Option>
        <Option icon={require("../../assets/community.png")} onPress={toMain}></Option>
        <Option icon={require("../../assets/more.png")} onPress={toMain}></Option>
        <Option icon={require("../../assets/profile.png")} onPress={toProfile}></Option>
        <Option icon={require("../../assets/settings.png")} onPress={toMain}></Option>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",

    width: "100%",
    height: 110,
    backgroundColor: Color.lightModeWhite,

    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    
    justifyContent: 'center',
    
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  iconsContainer: {
    width: "80%",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginBottom: '4%'
  },
  icon: {
    width: 32,
    height: 32,
    // opacity: 0.1,
    zIndex: 1,
  },
  bg: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 24,
  },
  bgActive: {
    opacity: 0.2,
    backgroundColor: '#F3F3F3',
  },
  bgInactive: {
    backgroundColor: 'transparent',
  },
  button: {
    width: 54,
    height: 54,
    borderRadius: 27,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  }
});
