import { StyleSheet } from 'react-native';
import { Color } from '../global/Color';

export const styles = StyleSheet.create({
  container: {
    display: "flex",

    width: "100%",
    height: 110,
    backgroundColor: Color.lightModeWhite,

    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,

    justifyContent: 'center',

    shadowColor: '#000000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  iconsContainer: {
    width: "80%",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginBottom: '4%'
  },
  icon: {
    width: 32,
    height: 32,
    // opacity: 0.1,
    zIndex: 1,
  },
  bg: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 24,
  },
  bgActive: {
    opacity: 0.2,
    backgroundColor: '#F3F3F3',
  },
  bgInactive: {
    backgroundColor: 'transparent',
  },
  button: {
    width: 54,
    height: 54,
    borderRadius: 27,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  }
});