import React, { useState } from "react";
import {
  View,
  ScrollView,
  Alert,
  Text,
  useColorScheme
} from "react-native";

import { NavProps } from './components/Props';
import { ToggleList } from "./components/ToggleList";
import { HomeHeader } from "./components/Logo";
import { NavigationBar } from "./components/NavigationBar";
import { 
  toNotifications,
  toUNIStay,
 } from "./Navigations";
import {
  GradientButton,
  WeeklyLuckyDrawButton,
  UNIPhoneButton,
  UNIStayButton,
  UNIVisaButton,
  VisaStatusButton
} from './components/Button';

// styles
import { styles } from "./styles/Main";


const Main: React.FC<NavProps> = ({ navigation }) => {
  const scheme = useColorScheme();

  // const daysInKorea = "00";
  const phoneNumber = "010-0000-0000"
  const address = "00시 00구 00동 000아파트"
  const visaStatus = "D-4";
  const visaType = "D2";
  const visaExpireDate = "00";

  const [daysInKorea, setDaysInKorea] = useState(80);
  const [daysInKoreaText, setdaysInKoreaText] = useState({ mainText: daysInKorea.toString(), subText: "Days in Korea", mode: "days" });
  const [daysInKoreaFontSize, setDaysInKoreaFontSize] = useState(64);

  const viewStyles = [
    // scheme === 'dark' ? styles.darkView : styles.lightView
    styles.lightView
  ];

  const testPress = () => {
    // Alert.alert('UNIPORT');
  };

  const toggleTime = () => {
    console.log(daysInKoreaText.mode);
    if (daysInKoreaText.mode === "days") {
      const hours = daysInKorea * 24;
      setdaysInKoreaText({ mainText: hours.toString(), subText: "Hours in Korea", mode: "hours" });
      if (hours.toString().length > 2) {
        setDaysInKoreaFontSize(50); 
      }
    } else if (daysInKoreaText.mode === "hours") {
      setdaysInKoreaText({ mainText: daysInKorea.toString(), subText: "Days in Korea", mode: "days" });
      setDaysInKoreaFontSize(64);
    }
  };


  return (
    <View>
      <ScrollView style={viewStyles}>
        <View style={styles.mainView}>
          <View style={styles.horizontalView}>
            <HomeHeader onPress={() => toNotifications({ navigation })} />
          </View>

          <View style={styles.horizontalView}>
            <GradientButton
              mainText={daysInKoreaText.mainText}
              subText={daysInKoreaText.subText}
              fontSize={daysInKoreaFontSize}
              onPress={toggleTime} />
            <WeeklyLuckyDrawButton
              image={require("../assets/giftdynamicclay.png")}
              subText="Weekly Lucky Draw"
              onPress={testPress} />
          </View>

          <View style={styles.div} />

          {/* My Address */}
          <View style={styles.horizontalView}>
            <Text style={styles.barTitle}>{"My Address in Korea"}</Text>
          </View>
          <View style={styles.horizontalView}>
            <ToggleList content={address} onPress={testPress} />
          </View>

          {/* My Phone Number */}
          <View style={styles.horizontalView}>
            <Text style={styles.barTitle}>{"My Phone Number"}</Text>
          </View>
          <View style={styles.horizontalView}>
            <ToggleList content={phoneNumber} onPress={testPress} />
          </View>

          <View style={styles.div}></View>

          {/* UNIPORT Services */}
          <View style={styles.horizontalView}>
            <UNIStayButton
              image={require("../assets/location.png")}
              subText="UNIStay"
              onPress={() => toUNIStay({navigation})} />
            <View style={styles.verticalView}>
              <UNIPhoneButton
                image={require("../assets/phone.png")}
                subText="UNIPhone"
                onPress={testPress} />
              <View style={styles.div} />
              <UNIVisaButton
                image={require("../assets/visa.png")}
                subText="UNIVisa"
                onPress={testPress} />
            </View>
          </View>

          <View style={styles.div} />

          {/* My Visa Status */}
          <View style={styles.horizontalView}>
            <Text style={styles.barTitle}>{"My Visa Status"}</Text>
          </View>
          <View style={styles.horizontalView}>
            <VisaStatusButton
              visaStatus={visaStatus}
              visaType={visaType}
              visaExpireDate={visaExpireDate}
              onPress={testPress} />
          </View>
        </View>
      </ScrollView>
      {/* Navigation Bar */}
      <View style={styles.navigationBar}>
        <NavigationBar navigation={navigation} />
      </View>
    </View>
  );
};

export default Main;