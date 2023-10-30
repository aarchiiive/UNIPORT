import { StyleSheet } from "react-native";
import { FontFamily, FontSize } from '../global/Font';

export const styles = StyleSheet.create({
  // views
  mainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    alignSelf: 'center',
  },
  textLogoView: {
    flexDirection: 'row',
  },
  spaceView: {
    width: "100%", // 원하는 간격 크기로 조정
  },

  // text
  text: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontSize: FontSize.size_2xl,
    marginLeft: 10,
  },

  // notice icon
  notice: {
    width: 24,
    height: 24,
  },
  noticeButton: {
    marginTop: 1,
    marginLeft: 'auto', // 오른쪽으로 정렬
  },

  // logo size
  small: {
    width: 16.75,
    height: 24.316,
    marginTop: 2,
  },
});