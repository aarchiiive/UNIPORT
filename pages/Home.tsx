import * as React from "react";
import {
  Image,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  useColorScheme
} from "react-native";

import { NavProps } from './components/Props';
import * as Navigations from "./Navigations";

import { styles } from './styles/Home';

const Home: React.FC<NavProps> = ({ navigation }) => {
  const scheme = useColorScheme();
  const backgroundStyles = [
    // scheme === 'dark' ? styles.darkView : styles.lightView
    styles.lightView
  ];
  return (
    <View style={backgroundStyles}>
      <TouchableOpacity onPress={() => Navigations.toStart({ navigation })}>
        <Image
          style={styles.logo}
          resizeMode="cover"
          source={require("../assets/uniport.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.developerModeButton}
        onPress={() => Navigations.toDeveloperMode({ navigation })}>
        <Text style={styles.developerModeText}>{"Developer Mode"}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
