import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import { Text, StyleProp, ViewStyle, TextStyle } from 'react-native';

import { styles } from '../styles/components/GradientText';


export const GradientText= ({
  text, 
  style
}: {
  text: string | undefined;
  style?: StyleProp<TextStyle>;
}) => {
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

