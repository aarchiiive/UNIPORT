import * as React from "react";
import { Image, StyleSheet, View, TouchableOpacity, useColorScheme } from "react-native";
import { Color } from "./styles/Color"
import { NavigationProp } from '@react-navigation/native';

interface NavProps {
  navigation: NavigationProp<any>;
}

const Home: React.FC<NavProps> = ({ navigation }) => {
  const scheme = useColorScheme();
  const backgroundStyles = [
    scheme === 'dark' ? styles.darkView : styles.lightView
  ];
  return (
    <View style={backgroundStyles}>
      <TouchableOpacity onPress={() => navigation.navigate('Main')}>
        <Image
          style={styles.child}
          resizeMode="cover"
          source={require("../assets/uniport.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  child: {
    width: 72,
    height: 103,
  },
  lightView: {
    backgroundColor: Color.lightModeBackground,
    flex: 1,
    justifyContent: 'center',  // 중앙 정렬 (세로)
    alignItems: 'center',      // 중앙 정렬 (가로)
  },
  darkView: {
    backgroundColor: Color.darkModeBackground,
    flex: 1,
    justifyContent: 'center',  // 중앙 정렬 (세로)
    alignItems: 'center',      // 중앙 정렬 (가로)
  },
});

export default Home;
