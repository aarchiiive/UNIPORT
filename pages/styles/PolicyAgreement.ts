import { StyleSheet } from "react-native";

import { Color } from "./global/Color";
import { FontFamily, FontSize } from "./global/Font";
import { globalStyles } from "./global/GlobalStyles";

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 100,
  },
  
  policyTitle: {
    fontSize: 24,
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.lightModeDarkGray,
    marginBottom: 30,
  },
  policyScollView: {
    width: '90%',
    height: 500,
    borderRadius: 20,
    backgroundColor: Color.lightModeWhite,
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  policyHeader: {
    fontSize: 14,
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.lightModeDarkGray,
  },
  policyContent: {
    fontSize: 12,
    fontFamily: FontFamily.poppinsMedium,
    color: Color.lightModeDarkGray,
    marginBottom: 10
  },

  buttonArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginTop: '14%',
  },

  // accept button
  acceptButton: {
    ...globalStyles.button,
  },
  linearGradient: {
    width: 120,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  acceptButtonText: {
    fontSize: 16,
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.lightModeWhite,
  },

  // decline button
  declineButton: {
    width: 120,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.lightModeWhite,
    ...globalStyles.buttonShadow,
  },
  declineButtonText: {
    fontSize: 16,
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.lightModeDarkGray
  }
});