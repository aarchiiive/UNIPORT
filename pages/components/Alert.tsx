import React, { useState, useRef } from "react";
import { Text, Animated, Dimensions, Easing, StyleSheet } from "react-native";

import { Color } from "../styles/global/Color";
import { FontFamily } from "../styles/global/Font";
import { globalStyles } from "../styles/global/GlobalStyles";


export const Alert = ({
  message,
  showAlert
}: {
  message: string;
  showAlert: boolean;
}) => {
  const alertAnimation = useRef(new Animated.Value(0)).current;
  const [forward, setForward] = useState(true);
  const { width, height } = Dimensions.get('window');

  const alertAnim = () => {
    Animated.timing(alertAnimation, {
      toValue: forward ? 1 : 0,
      duration: 800,
      easing: forward ? Easing.bezier(0.25, 1, 0.5, 1) : Easing.bezier(0.5, 1, 0.75, 1),
      useNativeDriver: false,
    }).start();
  };

  if (showAlert && forward) {
    alertAnim();
    setForward(false);
  } else if (!showAlert && !forward) {
    alertAnim();
    setForward(true);
  };

  return (
    <Animated.View
      style={[
        styles.alert,
        {
          transform: [
            {
              translateY: alertAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: [height, height*0.86],
              }),
            },
          ],
        },
      ]}
    >
      <Text style={styles.alertMessage}>{message}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  // Alerts
  alert: {
    position: 'absolute',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,

    width: '90%',
    height: 80,
    borderRadius: 40,

    opacity: 1.0,
    backgroundColor: Color.lightModeWhite,
    ...globalStyles.buttonShadow
  },
  alertMessage: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontSize: 16,
    color: Color.lightModeDarkGray,
    paddingVertical: 20,
    overflow: 'hidden'
  },
})

