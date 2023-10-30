import { Animated, EasingFunction } from 'react-native';

export const createAnimation = (
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