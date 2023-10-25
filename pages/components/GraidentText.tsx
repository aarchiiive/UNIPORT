import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import { Text, StyleSheet, StyleProp, ViewStyle } from 'react-native';

interface textProps {
  text: string | undefined;
  style?: StyleProp<ViewStyle>;
}

export const GradientText: React.FC<textProps> = ({ text, style }) => {  // scheme prop을 인자로 받습니다.
  return (
      <MaskedView maskElement={
        <Text style={[style, { backgroundColor: "transparent" }]} numberOfLines={1}>{text}</Text>
      }>
        <LinearGradient
          colors={['#015DFE', '#00AEFE']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradientText}
        >
          <Text style={[style, { opacity: 0 }]} numberOfLines={1}>{text}</Text>
        </LinearGradient>
      </MaskedView>
  );
}

const styles = StyleSheet.create({
  // text
  text: {
    fontSize: 60,
    marginBottom: 4,
    backgroundColor: 'transparent'
  },
  gradientText: {
    borderRadius: 30,
  },
});
