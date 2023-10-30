import React, { useState } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

import { NavProps } from './Props'
import { toMain, toProfile } from '../Navigations';

import { styles } from '../styles/components/NavigationBar';


export const Option = ({
  icon, 
  onPress
} : {
  icon: any;
  onPress: () => void;
}) => {
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

export const NavigationBar: React.FC<NavProps> = ({ navigation }) => {
  return (
    <TouchableOpacity style={styles.container} disabled={true}>
      <View style={styles.iconsContainer}>
        <Option icon={require("../../assets/home.png")} onPress={() => toMain({ navigation })}></Option>
        <Option icon={require("../../assets/community.png")} onPress={() => toMain({ navigation })}></Option>
        <Option icon={require("../../assets/more.png")} onPress={() => toMain({ navigation })}></Option>
        <Option icon={require("../../assets/profile.png")} onPress={() => toProfile({ navigation })}></Option>
        <Option icon={require("../../assets/settings.png")} onPress={() => toMain({ navigation })}></Option>
      </View>
    </TouchableOpacity>
  );
};

