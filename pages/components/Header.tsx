import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { View, Text, Image, TouchableOpacity, useColorScheme } from 'react-native';

import { styles } from '../styles/Header';
import { globalStyles } from '../styles/GlobalStyles';


const BackButton = ({
  source, 
  navigation
}: {
  source: any;
  navigation: any;
}) => {
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Image source={source}></Image>
    </TouchableOpacity>
  );
};


export const Header = ({
  title, 
  source, 
  navigation
}: {
  title: string;
  source: any;
  navigation: any;
}) => {
  return (
    <View style={styles.header}>
      <BackButton source={source} navigation={navigation} />
      <Text style={[styles.title, globalStyles.textCenter]}>{title}</Text>
      <View style={styles.icon} />
    </View>
  );
};
