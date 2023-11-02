import React from "react";
import {
  View,
  Text,
  Image,  
  ScrollView,
  TouchableOpacity,
} from "react-native";
import LinearGradient from 'react-native-linear-gradient';

import { NavProps } from './components/Props';
import { toMain, toSignUp } from "./Navigations";
import { styles } from './styles/RegisterGuide';

const Description = () => {
  return (
    <View style={styles.descriptionContainer}>
      <View style={styles.topDescriptionArea}>
        <Text style={styles.uniportLogo}>{"UNIPORT"}</Text>
        <Text style={styles.topDescriptionText}>{"will utilize the information you provide"}</Text>
        <Text style={styles.topDescriptionText}>{"to assist in completing the necessary"}</Text>
        <Text style={styles.topDescriptionText}>{"forms for your settlement in Korea."}</Text>
      </View>
      <View style={styles.midDescriptionArea}>
        <Text style={styles.midDescriptionText}>{"All you need to do is "}</Text>
        <Text style={styles.midDescriptionTextBold}>{"Upload or Scan your Passport"}</Text>
        <Text style={styles.midDescriptionText}>{"as shown below."}</Text>
      </View>
      <Image style={styles.passportImage} source={require('../assets/example-passport.png')} />
      <Text style={styles.noPassportNotice}>{"If your passport is not ready yet, you can easily edit your personal information later."}</Text>
    </View>
  );
};

const NextButton = ({ onPress }: { onPress: () => void; }) => {
  return (
    <TouchableOpacity style={styles.nextButton} onPress={onPress}>
      <LinearGradient
        colors={['#015DFE', '#00AEFE']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.linearGradient}
      >
        <Text style={styles.nextButtonText}>{"Next"}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const Laterutton = ({ onPress }: { onPress: () => void; }) => {
  return (
    <TouchableOpacity style={styles.laterButton} onPress={onPress}>
        <Text style={styles.laterButtonText}>{"Later"}</Text>
    </TouchableOpacity>
  );
};

const RegisterGuide: React.FC<NavProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Description />
      <View style={styles.buttonArea}>
        <Laterutton onPress={() => navigation.goBack()} />
        <NextButton onPress={() => toSignUp({ navigation })} />
      </View>
    </View>
  );
};

export default RegisterGuide;