import React, { useCallback, useMemo, useRef, useState } from 'react';
import {
  View,
  Text,
  Image,
  Easing,
  Animated,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import LinearGradient from 'react-native-linear-gradient';

import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { Camera, useCameraDevice } from 'react-native-vision-camera'

import { NavProps } from './components/Props';
import { toMain } from "./Navigations";
import { styles } from './styles/PassportScan';
import { ScrollView } from 'react-native-gesture-handler';

const CommentTab = () => {
  return (
    <View style={styles.commentTab}>
      <View style={styles.commentArea}>
        <Image
          source={require('../assets/uniport.png')}
          style={styles.uniportLogo}>
        </Image>
        <Text style={styles.commentText}>
          {"Please Upload/Scan\n" +
            "your Passport\n"}
        </Text>
      </View>
    </View>
  );
};

const PassportInfoBox = ({ name, content }: { name: string; content: string; }) => {
  return (
    <View style={styles.passportInfoBox}>
      <Text style={styles.passportInfoName}>{name}</Text>
      <Text style={styles.passportInfoContent}>{content}</Text>
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

const PassportInfoTab = ({ onPress }: { onPress: () => void; }) => {
  const hideOpacity = 0.05;
  const sheetOpacity = useRef(new Animated.Value(hideOpacity)).current;
  const backdropOpacity = useRef(new Animated.Value(0)).current;

  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['14%', '42%'], []);
  const handleSheetChanges = useCallback((index: number) => {
    Animated.timing(sheetOpacity, {
      toValue: index === 0 ? 1 : hideOpacity,
      duration: 400,
      useNativeDriver: true,
      easing: Easing.bezier(0.33, 0.01, 0.67, 1),
    }).start();

    Animated.timing(backdropOpacity, {
      toValue: index === 0 ? 0.5 : 0, // 0.5 is the desired opacity when the sheet is expanded
      duration: 200,
      easing: Easing.bezier(0.33, 0.01, 0.67, 1),
      useNativeDriver: true,
    }).start();
  }, []);

  const passportInfo = {
    name: "Uniport Official Korea",
    number: "M12345678",
    birthday: "2000.01.01",
    nationality: "Republic of Korea",
    placeOfBirth: "Republic of Korea",
    sex: "Male",
    dateOfIssue: "2021.01.01",
    dateOfExpiry: "2031.01.01",
  };

  return (
    <>
      <Animated.View
        pointerEvents="none"
        style={[
          StyleSheet.absoluteFill,
          { backgroundColor: 'black', opacity: backdropOpacity },
        ]}
      />
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        onAnimate={handleSheetChanges}
        containerStyle={styles.passportInfoTab}
      >
        <BottomSheetScrollView 
        contentContainerStyle={styles.passportInfoScroll}
        showsVerticalScrollIndicator={false}
        >
          <Animated.View style={{ opacity: sheetOpacity }}>
            <Text style={styles.passportInfoTitle}>{"Passport Info"}</Text>
            <PassportInfoBox name={"Full Name"} content={passportInfo.name} />
            <PassportInfoBox name={"Passport no."} content={passportInfo.number} />
            <PassportInfoBox name={"Date of birth"} content={passportInfo.birthday} />
            <PassportInfoBox name={"Nationality"} content={passportInfo.nationality} />
            <PassportInfoBox name={"Place of birth"} content={passportInfo.placeOfBirth} />
            <PassportInfoBox name={"Sex"} content={passportInfo.sex} />
            <PassportInfoBox name={"Date of issue"} content={passportInfo.dateOfIssue} />
            <PassportInfoBox name={"Date of expiration"} content={passportInfo.dateOfExpiry} />
            <NextButton onPress={onPress} />
          </Animated.View>
        </BottomSheetScrollView>
      </BottomSheet>
    </>
  );
};

const CameraView = () => {
  const device = useCameraDevice('back');

  console.log(device);

  if (device == null) {
    return (
      <Image
        source={require("../assets/example-passport.png")}
        style={styles.passportImage} />
    );
  }
  return <Camera style={styles.camera} device={device} isActive={true} />;
};

const PassportScan: React.FC<NavProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <CommentTab />
      <ScrollView style={styles.scrollView}>
        <CameraView />
      </ScrollView>
      <PassportInfoTab onPress={() => toMain({navigation})}/>
    </View>
  );
};

export default PassportScan;