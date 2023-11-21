import React, { useState, useCallback, useRef, useMemo, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  Animated,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Easing,
} from 'react-native';

import MapView, {
  Marker,
  AnimatedRegion,
  // PROVIDER_GOOGLE,
} from 'react-native-maps';

import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';

import { NavProps } from './components/Props';
import { Header } from './components/Header'
import { createAnimation } from './components/Animations';

import { Color } from './styles/global/Color';
import { FontFamily } from './styles/global/Font';


const UNIStay: React.FC<NavProps> = ({ navigation }) => {
  const hideOpacity = 0.05;
  const sheetOpacity = useRef(new Animated.Value(hideOpacity)).current;
  const backdropOpacity = useRef(new Animated.Value(0)).current;
  const bottomSheetRef = useRef<BottomSheet>(null);

  const [bottomSheetOpened, setBottomSheetOpened] = useState(false);
  const prevIndexRef = useRef(0);

  const snapPoints = useMemo(() => ['14%', '42%', '70%'], []);

  const handleSheetChanges = useCallback((index: number) => {
    prevIndexRef.current = index;
    console.log('prevIndex', prevIndexRef.current);
  }, []);

  const handleSheetAnimates = useCallback((index: number) => {
    const isOpening = prevIndexRef.current === 0 || (prevIndexRef.current === 0 && index > 0);
    const isClosing = prevIndexRef.current != 0 || (prevIndexRef.current > 0 && index === 0);

    console.log('index', index);

    if (isOpening || isClosing) {
      Animated.timing(sheetOpacity, {
        toValue: isOpening ? hideOpacity: 1,
        duration: 400,
        useNativeDriver: true,
        easing: Easing.bezier(0.33, 0.01, 0.67, 1),
      }).start();

      Animated.timing(backdropOpacity, {
        toValue: isOpening ? 0: 0.2,
        duration: 200,
        easing: Easing.bezier(0.33, 0.01, 0.67, 1),
        useNativeDriver: true,
      }).start();
    };
    
    prevIndexRef.current = index;
  }, []);

  return (
    <View style={styles.container}>
      <>
        <Animated.View
          pointerEvents="none"
          style={[
            StyleSheet.absoluteFill,
            { backgroundColor: 'black', opacity: backdropOpacity, zIndex: 1 },
          ]}
        />
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Image
            style={styles.backButton}
            resizeMode="cover"
            source={require("../assets/back.png")}
          />
        </TouchableOpacity>

        <MapView
          // provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          initialRegion={{
            latitude: 37.55827,
            longitude: 127.00068,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
        <BottomSheet
          ref={bottomSheetRef}
          index={0}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
          onAnimate={handleSheetAnimates}
          containerStyle={styles.realEstateInfoTab}
        >
          <BottomSheetScrollView
            contentContainerStyle={styles.realEstateInfoScroll}
            showsVerticalScrollIndicator={false}
          >
            <Animated.View style={{ opacity: sheetOpacity }}>
              <Text>{"Passport Info"}</Text>
            </Animated.View>
          </BottomSheetScrollView>
        </BottomSheet>
      </>
    </View>
  );
}

export default UNIStay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 100,
  },
  backButton: {
    position: 'absolute',
    top: 30,
    left: 10,
    zIndex: 1,
  },
  backButtonIcon: {
    width: 40,
    height: 40,
    zIndex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },

  realEstateInfoTab: {
    flex: 1,
    color: Color.lightModeWhite,
    zIndex: 2,
  },
  realEstateInfoScroll: {
    marginTop: 20,
    marginHorizontal: 30,
    backgroundColor: Color.lightModeWhite,
    paddingBottom: 40,
  },
});