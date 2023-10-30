import React, { useState, useRef, useEffect } from 'react';
import { 
  View, 
  Text, 
  Image, 
  Animated, 
  ScrollView, 
  TouchableOpacity, 
  Easing, 
} from 'react-native';

import { NavProps } from './components/Props';
import { Header } from './components/Header'
import { createAnimation } from './components/Animations';

import { styles } from './styles/Profile'


const splitContent = (text: string, n: number) => {
  const words = text.split(' ');
  let lines = [];
  let currentLine = '';

  for (const word of words) {
    if ((currentLine + word).length <= n) {
      currentLine += (currentLine ? ' ' : '') + word;
    } else {
      lines.push(currentLine);
      currentLine = word;
    }
  }

  if (currentLine) {
    lines.push(currentLine);
  }

  return lines;
};


const renderContent = (content: string, n: number, split: boolean) => {
  if (split) {
    const splited = splitContent(content, n);
    return (
      <View style={styles.infoContentContainer}>
        {splited.map((line, index) => (
          <Text key={index} style={styles.infoContent}>{line}</Text>
        ))}
      </View>
    );
  } else {
    return <Text style={styles.infoContent}>{content}</Text>;
  }
};


const CircleLogo = ({ source }: { source: any }) => {
  const scaleValue = useRef(new Animated.Value(1)).current;
  const scale = 1.1;
  const duration = 200;
  const easing = Easing.inOut(Easing.ease);

  const onPressIn = () => {
    Animated.timing(scaleValue, {
      toValue: scale,
      duration: duration,
      easing: easing,
      useNativeDriver: true
    }).start();
  };

  const onPressOut = () => {
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: duration,
      easing: easing,
      useNativeDriver: true
    }).start();
  };

  return (
    <Animated.View
      style={[
        styles.circleLogo,
        { transform: [{ scale: scaleValue }] }
      ]}
    >
      <TouchableOpacity onPressIn={onPressIn} onPressOut={onPressOut}>
        <Image source={source}></Image>
      </TouchableOpacity>
    </Animated.View>
  );
};


const UserInfoField = ({
  name,
  content,
  split = false
}: {
  name: string;
  content: string;
  split?: boolean
}) => {
  const n = 14;

  return (
    <TouchableOpacity style={[styles.infoFieldContainer, styles.infoFieldMargin]} activeOpacity={0.4}>
      <Text style={styles.infoName}>{name}</Text>
      <View style={styles.infoContentContainer}>
        {renderContent(content, n, split)}
      </View>
    </TouchableOpacity>
  );
};


const InfoTitle = ({ title }: { title: string }) => {
  return (
    <View style={styles.infoFieldContainer}>
      <Text style={styles.infoTitle}>{title}</Text>
    </View>
  );
};


const UserInfoBox = ({
  userInfoList
 }: {
    userInfoList: { name: string, content: string, split?: boolean }[]
  }) => {

  return (
    <View style={styles.userInfoContainer}>
      <CircleLogo source={require("../assets/circle-gradient-logo.png")}></CircleLogo>
      {userInfoList.map((info, index) => (
        <UserInfoField key={index} name={info.name} content={info.content} split={info.split} />
      ))}
    </View>
  );
};


const PassportInfoBox = ({
  passportInfo 
}: {
    passportInfo: 
    { name: string, 
      content: string }[]
  }) => {

  const contentHeights = [0, 280];
  const boxHeights = [400, 400 + contentHeights[1]];

  const duration = 600;
  const easing = Easing.bezier(0.25, 1, 0.5, 1);

  const [isOpen, setIsOpen] = useState(false);
  const rotation = useRef(new Animated.Value(0)).current;
  const height = useRef(new Animated.Value(boxHeights[0])).current;
  const contentHeight = useRef(new Animated.Value(contentHeights[0])).current;
  const contentOpacity = useRef(new Animated.Value(0)).current;

  const expand = () => {
    Animated.parallel([
      createAnimation(rotation, isOpen ? 0 : 1, duration, easing, true),
      createAnimation(height, isOpen ? boxHeights[0] : boxHeights[1], duration, easing),
      createAnimation(contentHeight, isOpen ? contentHeights[0] : contentHeights[1], duration, easing),
      createAnimation(contentOpacity, isOpen ? 0 : 1, duration, easing),
    ]).start();
    setIsOpen(!isOpen);
  };

  const rotateData = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg']
  });

  const mainContent = passportInfo.slice(0, 4);
  const additionalItems = passportInfo.slice(4);

  return (
    <Animated.View style={[styles.passportInfoContainer, { height: height }]}>
      <View>
        <InfoTitle title={"Passport info"} />
        {mainContent.map((info, index) => (
          <UserInfoField key={index} name={info.name} content={info.content} />
        ))}
      </View>
      <Animated.View style={{ height: contentHeight, opacity: contentOpacity }}>
        {additionalItems.map((info, index) => (
          <UserInfoField key={index} name={info.name} content={info.content} />
        ))}
      </Animated.View>
      <TouchableOpacity onPress={expand}>
        <Animated.View style={{ transform: [{ rotate: rotateData }] }}>
          <Image source={require("../assets/toggle-list-light.png")} style={styles.icon}></Image>
        </Animated.View>
      </TouchableOpacity>
    </Animated.View>
  );
};


const ARCInfoBox = ({
  ARCInfoList
}: {
  ARCInfoList: { name: string, content: string }[]
}) => {

  return (
    <View style={[styles.ARCInfoContainer]}>
      <View>
        <InfoTitle title={"ARC info"} />
        {ARCInfoList.map((info, index) => (
          <UserInfoField key={index} name={info.name} content={info.content} />
        ))}
      </View>
    </View>
  );
};


const Profile: React.FC<NavProps> = ({ navigation }) => {
  const title = "My Profile";

  const userInfoList = [
    { name: "My Name", content: "Uniport" },
    { name: "Email", content: "uniport@uniport.com" },
    { name: "Phone no.", content: "010-0000-0000" },
    { name: "Home Address", content: "00시 00구 00동 00로 000 101-101", split: true },
  ];
  const passportInfoList = [
    { name: "Full Name", content: "Uniport Official Korea" },
    { name: "Passport no.", content: "M12345678" },
    { name: "Date of birth", content: "2000.01.01" },
    { name: "Nationality", content: "Republic of Korea" },
    { name: "Place of birth", content: "Republic of Korea" },
    { name: "Sex", content: "Male" },
    { name: "Date of issue", content: "2000.01.01" },
    { name: "Date of expiration", content: "2000.01.01" },
  ];
  const ARCInfoList = [
    { name: "ARC no.", content: "Uniport Official Korea" },
    { name: "Visa Status", content: "M12345678" },
    { name: "Nationality", content: "Republic of Korea" },
    { name: "Sex", content: "Male" },
    { name: "Date of issue", content: "2000.01.01" },
  ];

  return (
    <View>
      <View style={styles.header}>
        <Header title={title} source={require("../assets/back.png")} navigation={navigation} />
      </View>
      <ScrollView>
        <View style={styles.main}>
          <UserInfoBox userInfoList={userInfoList} />
          <PassportInfoBox passportInfo={passportInfoList} />
          <ARCInfoBox ARCInfoList={ARCInfoList} />
        </View>
      </ScrollView>
    </View>
  );
};


export default Profile;