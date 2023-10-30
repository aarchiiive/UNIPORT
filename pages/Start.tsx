import React, { useState } from "react";
import {
  Image,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import LinearGradient from 'react-native-linear-gradient';

import { Alert } from "./components/Alert";
import { NavProps } from './components/Props';
import { styles } from './styles/Start';
import { toLogin } from "./Navigations";


const LanguageNotice = () => {
  return (
    <View style={styles.languageNotice}>
      <Image source={require("../assets/uniport.png")} style={styles.logo}></Image>
      <Text style={styles.noticeMessage}>{"Please choose a language"}</Text>
    </View>
  );

};

const LanguageButton = ({
  flag,
  name,
  selected,
  onPress,
}: {
  flag: any;
  name: string;
  selected: boolean;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.languageButton,
        selected && styles.languageButtonSelected,
      ]}
      onPress={onPress}
    >
      <View style={styles.languageContainer}>
        <Image source={flag} style={styles.flag} />
        <Text style={styles.languageName}>{name}</Text>
        <View style={styles.flag} />
      </View>
    </TouchableOpacity>
  );
};

const StartButton = ({ onPress } : { onPress: () => void; }) => {
  return (
    <TouchableOpacity style={styles.startButton} onPress={onPress}>
      <LinearGradient
        colors={['#015DFE', '#00AEFE']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.linearGradient}
      >
        <View style={styles.startButtonContainer}>
          <Text style={styles.startButtonText}>{"Get Started"}</Text>
          <Image source={require("../assets/arrow-right-square-contained.png")} style={styles.arrowIcon}></Image>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const Start: React.FC<NavProps> = ({ navigation }) => {
  const [showAlert, setShowAlert] = useState(false);
  const [alert, setAlert] = useState("Language should be selected");
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  
  const displayAlert = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  }

  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language);
    setAlert(language +" selected")
    displayAlert();
  };

  const handleGetStarted = () => {
    if (selectedLanguage) {
      toLogin({navigation});
    } else {
      displayAlert();
    }
  };

  return (
    <View>
      <LanguageNotice />
      <ScrollView>
        <View style={styles.container}>
          <LanguageButton
            flag={require("../assets/korea.png")}
            name={"한국어"}
            selected={selectedLanguage === "Korean"}
            onPress={() => handleLanguageSelect("Korean")}
          />
          <LanguageButton
            flag={require("../assets/china.png")}
            name={"简体中文"}
            selected={selectedLanguage === "Chinese"}
            onPress={() => handleLanguageSelect("Chinese")}
          />
          <LanguageButton
            flag={require("../assets/united-states.png")}
            name={"English"}
            selected={selectedLanguage === "English"}
            onPress={() => handleLanguageSelect("English")}
          />
          <LanguageButton
            flag={require("../assets/vietnam.png")}
            name={"tiếng Việt"}
            selected={selectedLanguage === "Vietnamese"}
            onPress={() => handleLanguageSelect("Vietnamese")}
          />
          <StartButton onPress={handleGetStarted} />
        </View>
      </ScrollView>
      <Alert
        message={alert}
        showAlert={showAlert}
      />
    </View>
  );
};

export default Start;