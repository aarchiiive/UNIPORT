import React, { useState, useRef } from 'react';
import { 
  Animated,
  View, 
  Image, 
  Text, 
  Easing, 
  TouchableOpacity, 
  useColorScheme 
} from 'react-native';

import { createAnimation } from './Animations';

import { globalStyles } from '../styles/global/GlobalStyles';
import { styles } from '../styles/components/ToggleList';


const getStylesByScheme = () => {
  const scheme = useColorScheme();
  const isDarkMode = scheme === 'dark';
  const expandIcon = isDarkMode
    ? require("../../assets/toggle-list-dark.png")
    : require("../../assets/toggle-list-light.png");

  const containerStyles = [
    styles.container,
    // isDarkMode ? globalStyles.darkButton : globalStyles.lightButton
    isDarkMode ? globalStyles.darkButton : globalStyles.lightButton
  ];
  const buttonStyles = [
    styles.button,
    // isDarkMode ? globalStyles.darkButton : globalStyles.lightButton
    globalStyles.lightButton
  ];
  const contentStyles = [
    styles.infoList,
    // isDarkMode ? styles.darkText : styles.lightText
    styles.lightText
  ];

  return [containerStyles, buttonStyles, contentStyles, expandIcon]
};

const Details = ({
  content,
  onPress
} : {
  content: string;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity style={styles.details}>
      {/* box title  */}
      <Text style={styles.boxTitle}>
        {"Days until contract expiration"}
      </Text>

      {/* lasting days */}
      <View style={styles.lastingDaysContainer}>
        <Text style={styles.lastingDays}>
          {content}
        </Text>
        <Text style={styles.days}>
          {" Days"}
        </Text>
      </View>

      {/* see more */}
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.seeMore}>
          {"see more"}
        </Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export const ToggleList = ({
  content,
  onPress
} : {
  content: string;
  onPress: () => void;
}) => {
  // Example Informations
  const lastingDays = "00"

  // Schemes
  const [containerStyles, buttonStyles, contentStyles, expandIcon] =  getStylesByScheme();

  // Toggle button
  const [isOpen, setIsOpen] = useState(false);

  // Animations
  const duration = 600;
  const easing = Easing.bezier(0.25, 1, 0.5, 1);
  const buttonHeights = [46, 160];
  const contentHeights = [0, 60];

  const rotateAnim = useRef(new Animated.Value(0)).current;
  const buttonHeight = useRef(new Animated.Value(buttonHeights[0])).current;
  const contentHeight = useRef(new Animated.Value(buttonHeights[0])).current;
  const contentOpacity = useRef(new Animated.Value(0)).current;

  const rotateData = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg']
  });

  const expand = () => {
    Animated.parallel([
      createAnimation(rotateAnim, isOpen ? 0 : 1, duration, easing, true),
      createAnimation(buttonHeight, isOpen ? buttonHeights[0] : buttonHeights[1], duration, easing, false),
      createAnimation(contentHeight, isOpen ? contentHeights[0] : contentHeights[1], duration, easing, false),
      createAnimation(contentOpacity, isOpen ? 0 : 1, 400, easing),
    ]).start();
    setIsOpen(!isOpen);
  };

  return (
    <Animated.View style={[containerStyles, { height: buttonHeight }]}>
      <View style={styles.container}>
        <TouchableOpacity style={buttonStyles} onPress={expand}>
          <View style={styles.horizontalView}>
            <Text style={[contentStyles]} >{content}</Text>
            <TouchableOpacity style={styles.icon} onPress={expand}>
              <Animated.View style={{ transform: [{ rotate: rotateData }] }}>
                <Image source={expandIcon} />
              </Animated.View>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>

        {/* details */}
        <Animated.View style={{ height: contentHeight, opacity: contentOpacity }}>
          <Details content={lastingDays} onPress={onPress} />
        </Animated.View>
      </View>
    </Animated.View>
  );
};

