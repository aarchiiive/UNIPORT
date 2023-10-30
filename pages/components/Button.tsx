import React from 'react';
import { View, Image, Text, TouchableOpacity, useColorScheme, StyleProp, ViewStyle  } from 'react-native';

import { GradientText } from './GraidentText';
import { globalStyles } from '../styles/global/GlobalStyles';
import { styles } from '../styles/components/Button';

const getStylesByScheme = () => {
  const scheme = useColorScheme();
  const textMode = scheme === 'dark' ? globalStyles.darkText : globalStyles.lightText;
  const buttonMode = scheme === 'dark' ? globalStyles.darkButton : globalStyles.lightButton;
  return { textMode, buttonMode };
};

interface ButtonProps {
  mainText?: string;
  subText?: string;
  image?: any;
  onPress?: () => void;
}

interface VisaStatusProps {
  visaStatus: string;
  visaType: string;
  visaExpireDate: string;
  onPress: () => void;
}

export const GradientButton: React.FC<ButtonProps> = ({ 
  mainText, 
  subText , 
  onPress 
}) => {
  const { textMode, buttonMode } = getStylesByScheme();

  return (
    <TouchableOpacity style={[styles.gradientButton, buttonMode]} onPress={onPress}>
      <GradientText text={mainText} style={styles.mainText}></GradientText>
      <Text style={[styles.gradientSubText, textMode]}>{subText}</Text>
    </TouchableOpacity>
  );
};

export const WeeklyLuckyDrawButton: React.FC<ButtonProps> = ({ 
  image, 
  subText, 
  onPress 
}) => {
  const { textMode, buttonMode } = getStylesByScheme();

  return (
    <TouchableOpacity style={[styles.weeklyLuckyDrawButton, buttonMode]} onPress={onPress}>
      <Image source={image} style={globalStyles.iconLarge} />
      <Text style={[styles.weeklyLuckyDrawText, textMode]} numberOfLines={1}>{subText}</Text>
    </TouchableOpacity>
  );
};

export const UNIStayButton: React.FC<ButtonProps> = ({ 
  image, 
  subText, 
  onPress }) => {
  const { textMode, buttonMode } = getStylesByScheme();

  return (
    <TouchableOpacity style={[styles.UNIStayButton, buttonMode]} onPress={onPress}>
      <Image source={image} style={globalStyles.iconLarge} />
      <Text style={[styles.UNIStayText, textMode]}>{subText}</Text>
    </TouchableOpacity>
  );
};

export const UNIPhoneButton: React.FC<ButtonProps> = ({ 
  image, 
  subText, 
  onPress }) => {
  const { textMode, buttonMode } = getStylesByScheme();

  return (
    <TouchableOpacity style={[styles.UNIPhoneButton, buttonMode]} onPress={onPress}>
      <View style={globalStyles.horizontalView}>
        <Text style={[styles.UNIPhoneText, textMode]}>{subText}</Text>
        <Image source={image} style={[globalStyles.iconSmall]} />
      </View>
    </TouchableOpacity>
  );
};

export const UNIVisaButton: React.FC<ButtonProps> = ({ 
  image, 
  subText, 
  onPress }) => {
  const { textMode, buttonMode } = getStylesByScheme();

  return (
    <TouchableOpacity style={[styles.UNIVisaButton, buttonMode]} onPress={onPress}>
      <View style={globalStyles.horizontalView}>
        <Image source={image} style={[globalStyles.iconSmall]} />
        <Text style={[styles.UNIVisaText, textMode]}>{subText}</Text>
      </View>
    </TouchableOpacity>
  );
};

export const VisaStatusButton: React.FC<VisaStatusProps> = ({ 
  visaStatus, 
  visaType, 
  visaExpireDate, 
  onPress }) => {
  const { textMode, buttonMode } = getStylesByScheme(); 
  
  return (
    <View style={globalStyles.centerWrapper}>
      <TouchableOpacity style={[styles.visaStatusButton, buttonMode]} onPress={onPress}>
        <Text style={[styles.visaStatus, textMode]}>{visaStatus}</Text>
        <Text style={[styles.visaType, textMode]}>{visaType + " Visa"}</Text>
        <Text style={[styles.expireNotice, styles.visaStatusText]}>{"Days until expiration"}</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={[styles.visaExpireDate]}>{visaExpireDate}</Text>
          <Text style={[styles.days, styles.visaStatusText]}>Days</Text>
        </View>
        <TouchableOpacity onPress={onPress}>
          <Text style={[styles.seeMore]}>{"See more"}</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
};