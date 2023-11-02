import React, { useState, useEffect } from "react";
import {
  Image,
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import LinearGradient from 'react-native-linear-gradient';

import { Alert } from "./components/Alert";
import { NavProps } from './components/Props';
import { toWelcome, toSignUp } from "./Navigations";
import { styles } from './styles/Login';

const EmailBox = ({ onEmailChange }: { onEmailChange: (text: string) => void; }) => {
  const [email, setEmail] = useState("");

  const onChangeText = (text: string) => {
    setEmail(text);
    onEmailChange(text);
  };

  return (
    <TextInput
      placeholder="Email"
      onChangeText={onChangeText}
      value={email}
      keyboardType="email-address"
      style={styles.inputText}
    ></TextInput>
  )
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
      style={styles.inputText}
    ></TextInput>
  )
};

const LoginButton = ({ onPress }: { onPress: () => void; }) => {
  return (
    <TouchableOpacity style={styles.loginButton} onPress={onPress}>
      <LinearGradient
        colors={['#015DFE', '#00AEFE']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.linearGradient}
      >
        <Text style={styles.loginButtonText}>{"Login"}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const LogoArea = () => {
  return (
    <View style={styles.logoContainer}>
      <Image source={require("../assets/uniport.png")} style={styles.logo}></Image>
      <Text style={styles.uniport}>{"UNIPORT"}</Text>
      <Text style={styles.caption}>{"Unified Platform for foreigners in Korea"}</Text>
    </View>
  );
};

const InputArea = ({ setFilled }: { setFilled: (flag: number) => void; }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    console.log(email);
  }, [email]);

  useEffect(() => {
    if (email.length === 0) {
      setFilled(1); // 이메일이 비어있는 경우
    } else if (password.length === 0) {
      setFilled(2); // 비밀번호가 비어있는 경우
    } else {
      setFilled(0);
    }
  }, [email, password]);

  return (
    <View style={styles.inputContainer}>
      <EmailBox onEmailChange={setEmail} />
      <PasswordBox onPasswordChange={setPassword} />
      <TouchableOpacity>
        <Text style={styles.findAccount}>{"Find  your ID & Password"}</Text>
      </TouchableOpacity>
    </View>
  );
};

const SignUpArea = ({ onPress }: { onPress: () => void; }) => {
  return (
    <View style={styles.signUpArea}>
      <Text style={styles.orText}>{"Or"}</Text>
      <Text style={styles.accountQuestion}>{"Don’t have an account yet?"}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.signUpText}>{"Sign up"}</Text>
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

const getAlertMessage = (filledValue: number): string => {
  switch (filledValue) {
    case 1:
      return "Please write your email";
    case 2:
      return "Please write your password";
    default:
      return ""; // 기본값은 빈 문자열
  };
};

const Login: React.FC<NavProps> = ({ navigation }) => {
  const [filled, setFilled] = useState(-1);
  const [showAlert, setShowAlert] = useState(false);
  const [alert, setAlert] = useState("Please write your email");

  const displayAlert = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  }

  const handleLogin = () => {
    if (filled == 0) {
      toWelcome({ navigation });
    } else {
      setAlert(getAlertMessage(filled));
      displayAlert();
    };
  };

  return (
    <View>
      <ScrollView style={{ height: '100%' }}>
        <View style={styles.container}>
          <LogoArea />
          <InputArea setFilled={setFilled} />
          <LoginButton onPress={handleLogin} />
          <SignUpArea onPress={() => toSignUp({ navigation })} />
        </View>
      </ScrollView>
      <Alert
        message={alert}
        showAlert={showAlert}
      />
    </View>
  )
};

export default Login;