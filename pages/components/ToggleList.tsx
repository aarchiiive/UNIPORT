import React, { useState, useRef, useEffect } from 'react';
import 
{ 
  Animated,
  View, 
  Image, 
  Text, 
  Easing, 
  EasingFunction, 
  TouchableOpacity, 
  StyleSheet, 
  useColorScheme 
} from 'react-native';

import { Color } from '../styles/Color';
import { FontFamily, FontSize } from '../styles/Font';
import { globalStyles } from '../styles/GlobalStyles';


const createAnimation = (
  ref: Animated.Value,
  toValue: number,
  duration: number,
  easing: EasingFunction,
  useNativeDriver: boolean = false
): Animated.CompositeAnimation => {
  return Animated.timing(ref, {
    toValue,
    duration,
    easing,
    useNativeDriver,
  });
};

export const ToggleList = ({
  infoList,
  onPress
}: {
  infoList: string[];
  onPress: () => void;
}) => {
  // Schemes
  const scheme = useColorScheme();
  const isDarkMode = scheme === 'dark';
  const expandIcon = isDarkMode
    ? require("../../assets/toggle-list-dark.png")
    : require("../../assets/toggle-list-light.png");

  const containerStyles = [
    styles.container,
    isDarkMode ? globalStyles.darkButton : globalStyles.lightButton
  ];
  const buttonStyles = [
    styles.button,
    isDarkMode ? globalStyles.darkButton : globalStyles.lightButton
  ];
  const infoListStyles = [
    styles.infoList,
    isDarkMode ? styles.darkText : styles.lightText
  ];

  // Animations
  const duration = 600;
  const easing = Easing.bezier(0.25, 1, 0.5, 1);
  const buttonClosedHeight = 46;
  const buttonOpenedHeight = 160;

  const [isOpen, setIsOpen] = useState(false);
  const rotateAnim = useRef(new Animated.Value(0)).current;
  const buttonHeightAnim = useRef(new Animated.Value(buttonClosedHeight)).current;
  const rotateData = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg']
  });

  const expand = () => {
    Animated.parallel([
      createAnimation(rotateAnim, isOpen ? 0 : 1, duration, easing, true),
      createAnimation(buttonHeightAnim, isOpen ? buttonClosedHeight : buttonOpenedHeight, duration, easing, false),
    ]).start();
    setIsOpen(!isOpen);
  };

  // Informations
  const lastingDays = "00"

  return (
    <Animated.View style={[containerStyles, { height: buttonHeightAnim }]}>
      <View style={styles.container}>
        <TouchableOpacity style={buttonStyles} onPress={expand}>
          <View style={styles.horizontalView}>
            <Text style={[infoListStyles]} >{infoList[0]}</Text>
            <TouchableOpacity style={styles.icon} onPress={expand}>
              <Animated.View style={{ transform: [{ rotate: rotateData }] }}>
                <Image source={expandIcon} />
              </Animated.View>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>

        <Text style={styles.boxTitle}>
          {"Days until contract expiration"}
        </Text>

        {/* lasting days */}
        <View style={styles.lastingDaysContainer}>
          <Text style={styles.lastingDays}>
            {lastingDays}
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
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    borderRadius: 10,
    zIndex: 1,
    overflow: 'visible',
    ...globalStyles.buttonShadow,
    ...globalStyles.lightButton,
  },
  horizontalView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 10,
    marginVertical: "1%",
  },

  // elements
  separator: {
    borderColor: Color.lightModeGray,
    borderWidth: 0.4
  },
  button: {
    width: "100%",
    height: 46, 
    borderRadius: 10,
    justifyContent: 'center',
  },

  // text
  infoList: {
    fontSize: 18,
  },

  // Details

  // box title
  boxTitle: {
    ...globalStyles.fontSizeS,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.lightModeGray,
    marginLeft: 16,
    marginBottom: 10,
  },

  // see more
  seeMore: {
    ...globalStyles.fontSizeS,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.lightModeGray,
    marginRight: 20,
    textAlign: 'right',
  },

  // lastingDays
  lastingDaysContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  lastingDays: {
    ...globalStyles.fontSize4XL,
    fontFamily: FontFamily.poppinsMedium,
    color: Color.lightModeGray,
    marginLeft: 36
  },
  days: {
    ...globalStyles.fontSizeL,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.lightModeGray,
    marginTop: 24
  },

  // text colors
  lightText: {
    ...globalStyles.lightText,
    fontFamily: FontFamily.poppinsLight,
    marginVertical: 4,
    alignContent: "center",
  },
  darkText: {
    ...globalStyles.darkText,
    fontFamily: FontFamily.poppinsLight,
    marginVertical: 4,
    alignContent: "center",
  },

  // icon
  icon: {
    width: 32,
    height: 32,
  },
});
