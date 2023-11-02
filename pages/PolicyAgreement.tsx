import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import LinearGradient from 'react-native-linear-gradient';

import { NavProps } from './components/Props';
import { toRegisterGuide } from "./Navigations";
import { styles } from './styles/PolicyAgreement';


const PolicyArea = () => {
  const policyHeader = ["1. Terms and Conditions"]
  const policyContent = ["Terms and Conditions Terms and Conditions Terms and Conditions Terms and Conditions Terms and Conditions"]
  return (
    <ScrollView style={styles.policyScollView}>
      <Text style={styles.policyHeader}>{policyHeader[0]}</Text>
      <Text style={styles.policyContent}>{policyContent[0]}</Text>
      <Text style={styles.policyHeader}>{policyHeader[0]}</Text>
      <Text style={styles.policyContent}>{policyContent[0]}</Text>
      <Text style={styles.policyHeader}>{policyHeader[0]}</Text>
      <Text style={styles.policyContent}>{policyContent[0]}</Text>
      <Text style={styles.policyHeader}>{policyHeader[0]}</Text>
      <Text style={styles.policyContent}>{policyContent[0]}</Text>
      <Text style={styles.policyHeader}>{policyHeader[0]}</Text>
      <Text style={styles.policyContent}>{policyContent[0]}</Text>
      <Text style={styles.policyHeader}>{policyHeader[0]}</Text>
      <Text style={styles.policyContent}>{policyContent[0]}</Text>
      <Text style={styles.policyHeader}>{policyHeader[0]}</Text>
      <Text style={styles.policyContent}>{policyContent[0]}</Text>
      <Text style={styles.policyHeader}>{policyHeader[0]}</Text>
      <Text style={styles.policyContent}>{policyContent[0]}</Text>
    </ScrollView>
  );
};

const AceeptButton = ({ onPress }: { onPress: () => void; }) => {
  return (
    <TouchableOpacity style={styles.acceptButton} onPress={onPress}>
      <LinearGradient
        colors={['#015DFE', '#00AEFE']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.linearGradient}
      >
        <Text style={styles.acceptButtonText}>{"Accept"}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const DeclineButton = ({ onPress }: { onPress: () => void; }) => {
  return (
    <TouchableOpacity style={styles.declineButton} onPress={onPress}>
        <Text style={styles.declineButtonText}>{"Decline"}</Text>
    </TouchableOpacity>
  );
};

const PolicyAgreement: React.FC<NavProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.policyTitle}>{"Terms and Conditions"}</Text>
      <PolicyArea />
      <View style={styles.buttonArea}>
        <DeclineButton onPress={() => navigation.goBack()} />
        <AceeptButton onPress={() => toRegisterGuide({ navigation })} />
      </View>

    </View>
  );
};

export default PolicyAgreement;