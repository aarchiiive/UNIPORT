import { StyleSheet } from "react-native";

import { Color } from "./global/Color";
import { FontFamily, FontSize } from "./global/Font";
import { globalStyles } from "./global/GlobalStyles";

export const styles = StyleSheet.create({
  // container
  container: {
    marginTop: 60,
    marginBottom: '40%',
    marginHorizontal: '8%',
    // alignItems: 'center',
  },

  // header
  header: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontSize: 24,
    color: Color.lightModeDarkGray,
    alignSelf: 'center'
  },

  accountInfoArea: {
    // marginVertical: 30,
    alignItems: 'center',
  },

  // input text (email & password)
  inputBox: {
    width: '100%',
    height: 48,
    borderRadius: 10,
    paddingHorizontal: 20,
    marginBottom: 30,
    fontFamily: FontFamily.poppinsMedium,
    backgroundColor: Color.lightModeWhite
  },
  emailBox: {
    width: 240,
    height: 48,
    borderRadius: 10,
    paddingHorizontal: 20,
    fontFamily: FontFamily.poppinsMedium,
    backgroundColor: Color.lightModeWhite
  },
  emailBoxContainer: {
    flexDirection: 'row',
    width: '100%',
    marginVertical: 30,
    // justifyContent: 'space-between'
  },
  verifyButton: {
    ...globalStyles.buttonShadow,
    width: 80,
    height: 48,
    marginLeft: 10,
    borderRadius: 10,
    backgroundColor: Color.lightModeDarkGray,
    alignItems: 'center',
    justifyContent: 'center'
  },
  verifyButtonText: {
    color: Color.lightModeWhite,
    fontSize: 14,
    fontFamily: FontFamily.poppinsSemiBold
  },

  // privacy policy 
  privacyPolicyArea: {
    
  },
  privacyPolicyTitle: {
    color: Color.lightModeDarkGray,
    fontSize: 14,
    fontFamily: FontFamily.poppinsSemiBold,
    marginBottom: 20,
  },
  privacyPolicyBox: {
    minHeight: '50%',
    width: '100%',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 30
    ,
    backgroundColor: Color.lightModeWhite,
  },
  policyHeader: {
    color: Color.lightModeDarkGray,
    fontSize: 12,
    fontFamily: FontFamily.poppinsSemiBold
  },
  policyContent: {
    color: Color.lightModeDarkGray,
    fontSize: 12,
    fontFamily: FontFamily.poppinsMedium,
    paddingHorizontal: 10,
  },

  // policy agreement 
  agreementContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 30
  },
  checkBox: {
    width: 16,
    height: 16,
  },
  agreementText: {
    color: Color.lightModeDarkGray,
    fontSize: 12,
    fontFamily: FontFamily.poppinsMedium,
    marginLeft: 10,
  },

  // join button
  joinButton: {
    ...globalStyles.button,
  },
  linearGradient: {
    width: 330,
    height: 48,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  joinButtonText: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontSize: 16,
    color: Color.lightModeWhite,
  },

  // login
  loginArea: {
    marginTop: 30,
    alignItems: 'center'
  },
  orText: {
    fontFamily: FontFamily.poppinsMedium,
    fontSize: 16,
    color: Color.lightModeDarkGray,
  },
  accountQuestion: {
    marginTop: 20,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: 16,
    color: Color.lightModeDarkGray,
  },
  loginText: {
    marginTop: 10,
    fontFamily: FontFamily.poppinsSemiBold,
    fontSize: 14,
    color: Color.lightModeDarkGray,
  },
})
