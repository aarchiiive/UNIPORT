import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { styles } from '../styles/components/Header';
import { globalStyles } from '../styles/global/GlobalStyles';


const BackButton = ({
  source, 
  navigation
}: {
  source: any;
  navigation: any;
}) => {
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Image source={source} style={styles.icon}></Image>
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
