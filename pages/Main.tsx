import React from "react";
import { 
  View, 
  ScrollView, 
  Alert, 
  Text, 
  useColorScheme
} from "react-native";

import { PageProps } from './components/Props';
import { ToggleList } from "./components/ToggleList";
import { HomeHeader } from "./components/Logo";
import { NavigationBar } from "./components/NavigationBar";
import { GradientButton, WeeklyLuckyDrawButton, UNIPhoneButton, UNIStayButton, UNIVisaButton, VisaStatusButton } from './components/Button';

// styles
import { styles } from "./styles/Main";


const Main: React.FC<PageProps> = ({ navigation }) => {
  const scheme = useColorScheme();
  // const scheme = 'dark';
  const viewStyles = [
    scheme === 'dark' ? styles.darkView : styles.lightView
  ];

  const testPress = () => {
    Alert.alert('UNIPORT');
  };

  const toNotifications = () => {
    navigation.navigate('Notifications');
  };

  const daysInKorea = "00";
  const phoneNumber = "010-0000-0000"
  const address = "00시 00구 00동 000아파트"
  const visaStatus = "D-4";
  const visaType = "D2";
  const visaExpireDate = "00";

  const addressList = [
    "서울시 강남구 역삼동 101아파트",
    "부산시 해운대구 중동 202아파트",
    "인천시 연수구 송도동 303아파트",
    "대구시 수성구 범어동 404아파트"
  ];

  const phoneNumberList = [
    "010-0000-0000",
    "010-1111-1111",
    "010-2222-2222",
    "010-3333-3333"
  ];

  return (
    <View>
      <ScrollView style={viewStyles}>
        <View style={styles.mainView}>
          <View style={styles.horizontalView}>
            <HomeHeader onPress={toNotifications} />
          </View>

          <View style={styles.horizontalView}>
            <GradientButton 
            mainText={daysInKorea} 
            subText="Days in Korea" 
            onPress={testPress} />
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
            <ToggleList infoList={addressList} onPress={testPress} />
          </View>

          {/* My Phone Number */}
          <View style={styles.horizontalView}>
            <Text style={styles.barTitle}>{"My Phone Number"}</Text>
          </View>
          <View style={styles.horizontalView}>
            <ToggleList infoList={phoneNumberList} onPress={testPress} />
          </View>

          <View style={styles.div}></View>
          
          {/* UNIPORT Services */}
          <View style={styles.horizontalView}>
            <UNIStayButton
              image={require("../assets/location.png")}
              subText="UNIStay"
              onPress={testPress} />
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
        <NavigationBar navigation={navigation}/>
      </View>
    </View>
  );
};

export default Main;