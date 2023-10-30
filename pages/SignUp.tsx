import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import CheckBox from '@react-native-community/checkbox';

import { Alert } from "./components/Alert";
import { NavProps } from './components/Props';
import { toLogin, toMain } from "./Navigations";
import { styles } from './styles/SignUp';


const EmailBox = ({
  onEmailChange,
  onPress
}: {
  onEmailChange: (text: string) => void;
  onPress: () => void;
}) => {
  const [email, setEmail] = useState("");

  const onChangeText = (text: string) => {
    setEmail(text);
    onEmailChange(text);
  };

  return (
    <View style={styles.emailBoxContainer}>
      <TextInput
        placeholder="Email"
        onChangeText={onChangeText}
        value={email}
        keyboardType="email-address"
        style={styles.emailBox}
      ></TextInput>
      <VerifyButton onPress={onPress}></VerifyButton>
    </View>
  );
};

const VerifyButton = ({ onPress }: { onPress: () => void; }) => {
  return (
    <TouchableOpacity style={styles.verifyButton} onPress={onPress}>
      <Text style={styles.verifyButtonText}>{"Verify"}</Text>
    </TouchableOpacity>
  );
};

const PasswordBox = ({ onPasswordChange }: { onPasswordChange: (text: string) => void; }) => {
  const [password, setPassword] = useState("");

  const onChangeText = (text: string) => {
    setPassword(text);
    onPasswordChange(text);
  };

  return (
    <TextInput
      placeholder="Password"
      onChangeText={onChangeText}
      value={password}
      secureTextEntry={true}
      style={styles.inputBox}
    ></TextInput>
  )
};

const ConfimedPasswordBox = ({ onConfirmedPasswordChange }: { onConfirmedPasswordChange: (text: string) => void; }) => {
  const [confirmedPassword, setConfirmedPassword] = useState("");

  const onChangeText = (text: string) => {
    setConfirmedPassword(text);
    onConfirmedPasswordChange(text);
  };

  return (
    <TextInput
      placeholder="Confirm Password"
      onChangeText={onChangeText}
      value={confirmedPassword}
      secureTextEntry={true}
      style={styles.inputBox}
    ></TextInput>
  )
};

const PolicyAgreement = ({ onValueChange }: { onValueChange: () => void; }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={styles.agreementContainer}>
      <CheckBox
        lineWidth={2}
        disabled={false}
        boxType={'square'}
        onCheckColor={'#ffffff'}
        onFillColor={'#025EFF'}
        onTintColor={'#025EFF'}
        animationDuration={0.2}
        onAnimationType={'stroke'} // stroke | fill 
        offAnimationType={'bounce'}
        value={isChecked}
        onValueChange={onValueChange}
        style={styles.checkBox}
      ></CheckBox>
      <Text style={styles.agreementText}>{"I have read and agree to the privacy policy."}</Text>
    </View>
  )
}

const PrivacyPolicyArea = () => {
  const policyHeaders = ["1. Terms and Conditions"];
  const policyContents = ["Terms and Conditions Terms and Conditions Terms and Conditions Terms and Conditions Terms and Conditions"];

  return (
    <View style={styles.privacyPolicyArea}>
      <Text style={styles.privacyPolicyTitle}>{"Privacy Policy"}</Text>
      <ScrollView style={styles.privacyPolicyBox}>
        {/* TODO : hard code -> for loop */}
        <Text style={styles.policyHeader}>{policyHeaders[0]}</Text>
        <Text style={styles.policyContent}>{policyContents[0]}</Text>
        <Text style={styles.policyHeader}>{policyHeaders[0]}</Text>
        <Text style={styles.policyContent}>{policyContents[0]}</Text>
        <Text style={styles.policyHeader}>{policyHeaders[0]}</Text>
        <Text style={styles.policyContent}>{policyContents[0]}</Text>
        <Text style={styles.policyHeader}>{policyHeaders[0]}</Text>
        <Text style={styles.policyContent}>{policyContents[0]}</Text>
        <Text style={styles.policyHeader}>{policyHeaders[0]}</Text>
        <Text style={styles.policyContent}>{policyContents[0]}</Text>
        <Text style={styles.policyHeader}>{policyHeaders[0]}</Text>
        <Text style={styles.policyContent}>{policyContents[0]}</Text>
        <Text style={styles.policyHeader}>{policyHeaders[0]}</Text>
        <Text style={styles.policyContent}>{policyContents[0]}</Text>
        <Text style={styles.policyHeader}>{policyHeaders[0]}</Text>
        <Text style={styles.policyContent}>{policyContents[0]}</Text>
      </ScrollView>
    </View>
  );
};

const JoinButton = ({ onPress }: { onPress: () => void; }) => {
  return (
    <TouchableOpacity style={styles.joinButton} onPress={onPress}>
      <LinearGradient
        colors={['#015DFE', '#00AEFE']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.linearGradient}
      >
        <Text style={styles.joinButtonText}>{"Join"}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

function verifyEmail(email: string): boolean {
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  return emailRegex.test(email);
}

const SignUpArea = ({
  pageState,
  setPageState
}: {
  pageState: number;
  setPageState: (flag: number) => void;
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [isAgreed, setIsAgreed] = useState(false);

  const handleVerified = () => {
    setIsVerified(verifyEmail(email));
    if (isVerified) {
      setPageState(PageState.SuccessToVerifyEmail); // 이메일 검증 성공
    } else {
      setPageState(PageState.FailToVerifyEmail); // 이메일 검증 실패
    };
  };

  const handleAgreed = () => {
    setIsAgreed(true);
  };

  useEffect(() => {
    if (email.length === 0) {
      setPageState(PageState.EmailRequired); // 이메일이 비어있는 경우
    } else if (!isVerified) {
      setPageState(PageState.EmailVerificationRequired); // 이메일 검증이 안된 경우
    } else if (password.length === 0) {
      setPageState(PageState.PasswordRequired); // 비밀번호가 비어있는 경우
    } else if (confirmedPassword.length === 0) {
      setPageState(PageState.ConfirmedPasswordRequired); // 확인된 비밀번호가 비어있는 경우
    } else if (!isAgreed) {
      setPageState(PageState.AgreementRequired); // 이용약관에 동의하지 않은 경우
    } else {
      setPageState(PageState.Complete); // 모든 필드가 채워진 경우
    };
  }, [email, isVerified, password, confirmedPassword, isVerified, isAgreed]);

  useEffect(() => {
    if (
      pageState != PageState.FailToVerifyEmail && 
      pageState != PageState.SuccessToVerifyEmail && 
      isVerified
      ) {
      setIsVerified(false);
    };
  }, [email]);

  return (
    <View>
      <Text style={styles.header}>{"Sign Up"}</Text>
      <View style={styles.accountInfoArea}>
        <EmailBox onEmailChange={setEmail} onPress={handleVerified} />
        <PasswordBox onPasswordChange={setPassword} />
        <ConfimedPasswordBox onConfirmedPasswordChange={setConfirmedPassword} />
      </View>
      <PrivacyPolicyArea />
      <PolicyAgreement onValueChange={handleAgreed}></PolicyAgreement>
    </View>
  );
};

const LoginArea = ({ onPress }: { onPress: () => void; }) => {
  return (
    <View style={styles.loginArea}>
      <Text style={styles.orText}>{"Or"}</Text>
      <Text style={styles.accountQuestion}>{"Don’t have an account yet?"}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.loginText}>{"Sign up"}</Text>
      </TouchableOpacity>
    </View>
  );
};

enum PageState {
  EmailRequired = 0,
  EmailVerificationRequired = 1,
  SuccessToVerifyEmail = 2,
  FailToVerifyEmail = 3,
  PasswordRequired = 4,
  ConfirmedPasswordRequired = 5,
  AgreementRequired = 6,
  Complete = 7,
};

enum EmailState {
  Unverified = 0,
  Verified = 1,
};

const getAlertMessage = (filledValue: number): string => {
  switch (filledValue) {
    case PageState.EmailRequired:
      return "Please write your email";
    case PageState.EmailVerificationRequired:
      return "Please verify your email";
    case PageState.SuccessToVerifyEmail:
      return "Email Verified!";
    case PageState.FailToVerifyEmail:
      return "Failed to verify email";
    case PageState.PasswordRequired:
      return "Please write your password";
    case PageState.ConfirmedPasswordRequired:
      return "Please write your password again";
    case PageState.AgreementRequired:
      return "Please agree to the privacy policy";
    default:
      return "";
  };
};

const SignUp: React.FC<NavProps> = ({ navigation }) => {
  const [emailState, setEmailState] = useState(EmailState.Unverified);
  const [pageState, setPageState] = useState(PageState.EmailRequired);

  const [showAlert, setShowAlert] = useState(false);
  const [alert, setAlert] = useState(getAlertMessage(-1));

  const displayAlert = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  }

  useEffect(() => {
    console.log("page state : " + pageState)
    if (pageState == PageState.SuccessToVerifyEmail || pageState == PageState.FailToVerifyEmail) {
      // if (pageState == PageState.SuccessToVerifyEmail) {
      //   setEmailState(EmailState.Verified);
      // };
      setAlert(getAlertMessage(pageState));
      displayAlert();
    };
  }, [pageState]);

  const handleSignUp = () => {
    if (pageState == PageState.Complete) {
      toLogin({ navigation });
    } else if (pageState != PageState.SuccessToVerifyEmail && pageState != PageState.FailToVerifyEmail) {
      setAlert(getAlertMessage(pageState));
      displayAlert();
    }
  };

  return (
    <View>
      <ScrollView style={{ height: '100%' }}>
        <View style={styles.container}>
          <SignUpArea
            pageState={pageState}
            setPageState={setPageState} />
          <JoinButton onPress={handleSignUp} />
          <LoginArea onPress={() => toLogin({ navigation })} />
        </View>
      </ScrollView>
      <Alert
        message={alert}
        showAlert={showAlert}
      />
    </View>
  )
};

export default SignUp;