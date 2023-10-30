import * as React from "react";
import { 
  Image, 
  View, 
  TouchableOpacity, 
  useColorScheme 
} from "react-native";

import { NavProps } from './components/Props';
import { toStart } from "./Navigations";

import { styles } from './styles/Home';

const Home: React.FC<NavProps> = ({ navigation }) => {
  const scheme = useColorScheme();
  const backgroundStyles = [
    scheme === 'dark' ? styles.darkView : styles.lightView
  ];
  return (
    <View style={backgroundStyles}>
      <TouchableOpacity onPress={() => toStart({navigation})}>
        <Image
          style={styles.child}
          resizeMode="cover"
          source={require("../assets/uniport.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Home;
