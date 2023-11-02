import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import LinearGradient from 'react-native-linear-gradient';

import { NavProps } from './components/Props';
import { toPolicyAgreement } from "./Navigations";
import { styles } from './styles/Welcome';

const NoticeArea = () => {
  return (
    <View style={styles.noticeArea}>
      <View style={styles.noticeLine}>
        <Text style={styles.noticeDescription}>{"Here are"}</Text>
        <Text style={styles.noitceDescriptionBold}>{" a Few Steps"}</Text>
      </View>
      <Text style={styles.noticeDescription}>{"to get you started"}</Text>
      <View style={styles.noticeLine}>
        <Text style={styles.noticeDescription}>{"on your journey in"}</Text>
        <Text style={styles.noitceDescriptionBold}>{" Korea"}</Text>
      </View>
    </View>
  );
};

const StartButton = ({ onPress }: { onPress: () => void; }) => {
  return (
    <TouchableOpacity style={styles.startButton} onPress={onPress}>
      <LinearGradient
        colors={['#015DFE', '#00AEFE']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.linearGradient}
      >
        <Text style={styles.startButtonText}>{"Get Started"}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const LaterButton = ({ onPress }: { onPress: () => void; }) => {
  return (
    <TouchableOpacity onPress={onPress}>
        <Text style={styles.laterButtonText}>{"I’ll save that for another time"}</Text>
      </TouchableOpacity>
  );
};

const Welcome: React.FC<NavProps> = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>{"Welcome to UNIPORT"}</Text>
      <NoticeArea />
      <StartButton onPress={() => toPolicyAgreement({navigation})} />
      <LaterButton onPress={() => toPolicyAgreement({navigation})} />
    </View>
  );
};

export default Welcome;