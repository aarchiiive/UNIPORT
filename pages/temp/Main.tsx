import * as React from "react";
import { StyleSheet, View, Pressable, Text, Image } from "react-native";
import { Color, FontFamily, FontSize, Padding, Border } from "./styles/Main";

const Frame = () => {
  return (
    <View style={[styles.view, styles.viewBg]}>
      <View style={styles.frameParent}>
        <View style={[styles.frameGroup, styles.frameLayout]}>
          <View style={[styles.frameChild, styles.frameLayout]} />
          <Pressable style={styles.frameItem} onPress={() => {}} />
        </View>
        <View style={styles.frameContainer}>
          <View style={styles.uniportParent}>
            <Text style={[styles.uniport, styles.mbLeftPosition]}>UNIPORT</Text>
            <Image
              style={styles.frameInner}
              resizeMode="cover"
              source={require("../assets/group-39909.png")}
            />
          </View>
          <Image
            style={styles.iconBell}
            resizeMode="cover"
            source={require("../assets/icon-bell.png")}
          />
        </View>
        <View style={styles.frameContainer}>
          <View style={styles.parentShadowBox1}>
            <Text style={styles.daysInKorea}>Days in Korea</Text>
            <Text style={[styles.text, styles.textTypo1]}>00</Text>
          </View>
          <View style={styles.parentShadowBox1}>
            <Text style={[styles.weeklyLuckyDraw, styles.daysTypo]}>
              Weekly Lucky Draw
            </Text>
            <Image
              style={[styles.giftDynamicClayIcon, styles.diconsLayout]}
              resizeMode="cover"
              source={require("../assets/giftdynamicclay.png")}
            />
          </View>
        </View>
        <View style={styles.myAddressInKoreaParent}>
          <Text style={[styles.myAddressIn, styles.d4Typo]}>
            My Address in Korea
          </Text>
          <View style={styles.frameView}>
            <View style={styles.parentShadowBox}>
              <Text style={[styles.days, styles.daysClr1]}>
                <Text style={styles.text1}>00</Text>
                <Text style={styles.days1}>Days</Text>
              </Text>
              <Text style={[styles.seeMore, styles.seeTypo]}>see more</Text>
              <Text
                style={[styles.daysUntilContract, styles.daysClr1]}
              >{`Days until contract expiration `}</Text>
            </View>
            <View style={styles.iconVolumeParent}>
              <Image
                style={styles.iconVolume}
                resizeMode="cover"
                source={require("../assets/icon-volume.png")}
              />
              <Text style={[styles.text2, styles.textTypo]}>
                00시 00구 00동 000아파트
              </Text>
              <Image
                style={styles.iconVolume}
                resizeMode="cover"
                source={require("../assets/chevronup.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.myAddressInKoreaParent}>
          <Text style={[styles.myAddressIn, styles.d4Typo]}>
            My Phone Number
          </Text>
          <View style={styles.frameView}>
            <View style={styles.parentShadowBox}>
              <Text style={[styles.mbLeft, styles.daysClr1]}>
                <Text style={styles.text1}>000</Text>
                <Text style={styles.days1}>mb left</Text>
              </Text>
              <Text style={[styles.seeMore, styles.seeTypo]}>see more</Text>
            </View>
            <View style={styles.parent}>
              <Text style={[styles.text4, styles.textTypo]}>010-0000-0000</Text>
              <Image
                style={styles.iconVolume}
                resizeMode="cover"
                source={require("../assets/chevronup.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.frameContainer}>
          <View style={styles.btnUnistay}>
            <Image
              style={styles.diconsLayout}
              resizeMode="cover"
              source={require("../assets/3dicons.png")}
            />
            <Text style={[styles.unistay, styles.d4Typo]}>
              <Text style={styles.uni}>UNI</Text>Stay
            </Text>
          </View>
          <View style={styles.btnUnivisaParent}>
            <View style={[styles.btnUnivisa, styles.btnShadowBox]}>
              <Image
                style={styles.dicons1}
                resizeMode="cover"
                source={require("../assets/3dicons1.png")}
              />
              <Text style={[styles.univisa, styles.d4Typo]}>
                <Text style={styles.uni}>UNI</Text>Visa
              </Text>
            </View>
            <View style={[styles.btnUniphone, styles.btnShadowBox]}>
              <Text style={[styles.univisa, styles.d4Typo]}>
                <Text style={styles.uni}>UNI</Text>Phone
              </Text>
              <Image
                style={styles.dicons1}
                resizeMode="cover"
                source={require("../assets/3dicons2.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.myVisaStatusParent}>
          <Text style={[styles.myAddressIn, styles.d4Typo]}>
            My VISA status
          </Text>
          <View style={styles.daysGroup}>
            <Text style={[styles.days2, styles.daysClr]}>
              <Text style={styles.text1}>00</Text>
              <Text style={styles.days1}>Days</Text>
            </Text>
            <Text style={[styles.seeMore2, styles.daysClr]}>see more</Text>
            <Text style={[styles.daysUntilExpiration, styles.daysClr]}>
              Days until expiration
            </Text>
            <Text style={[styles.d4000000Container, styles.mbLeftPosition]}>
              <Text style={[styles.d4, styles.d4Typo]}>{`D-4 
`}</Text>
              <Text style={styles.visa}>000 000 Visa</Text>
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.iconHomeParent}>
        <Image
          style={styles.iconVolume}
          resizeMode="cover"
          source={require("../assets/icon-home.png")}
        />
        <Image
          style={styles.iconVolume}
          resizeMode="cover"
          source={require("../assets/icon-community.png")}
        />
        <View style={styles.iconAdd}>
          <View style={[styles.addTask, styles.addTaskShadowBox]}>
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/icon.png")}
            />
          </View>
        </View>
        <Image
          style={styles.iconVolume}
          resizeMode="cover"
          source={require("../assets/icon-profile.png")}
        />
        <Image
          style={styles.iconVolume}
          resizeMode="cover"
          source={require("../assets/icon-settings.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewBg: {
    backgroundColor: Color.darkModeColorTertiaryD,
    alignItems: "center",
  },
  frameLayout: {
    width: 375,
    overflow: "hidden",
  },
  mbLeftPosition: {
    left: "50%",
    top: "50%",
  },
  textTypo1: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  daysTypo: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsRegular,
  },
  diconsLayout: {
    height: 80,
    width: 80,
  },
  d4Typo: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  daysClr1: {
    color: Color.lightModeColorGray,
    textAlign: "left",
    position: "absolute",
  },
  seeTypo: {
    fontSize: FontSize.size_5xs,
    left: 243,
    top: 122,
    fontFamily: FontFamily.poppinsRegular,
  },
  textTypo: {
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    textAlign: "left",
    color: Color.darkModeColorWhite,
  },
  btnShadowBox: {
    paddingVertical: Padding.p_xs,
    height: 65,
    borderRadius: Border.br_xl,
    left: 0,
    width: 130,
    backgroundColor: Color.darkModeColorQuaternaryD,
    position: "absolute",
    justifyContent: "space-between",
    flexDirection: "row",
    overflow: "hidden",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    alignItems: "center",
  },
  daysClr: {
    color: Color.darkModeColorGray,
    textAlign: "left",
    position: "absolute",
  },
  addTaskShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  frameChild: {
    height: 44,
    overflow: "hidden",
  },
  frameItem: {
    borderRadius: 5,
    width: 60,
    height: 7,
    marginTop: 20,
    backgroundColor: Color.darkModeColorGray,
  },
  frameGroup: {
    borderBottomRightRadius: Border.br_11xl,
    borderBottomLeftRadius: Border.br_11xl,
    paddingHorizontal: 157,
    paddingBottom: Padding.p_xl,
    overflow: "hidden",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.darkModeColorTertiaryD,
  },
  uniport: {
    marginTop: -16.49,
    marginLeft: -37.85,
    fontSize: 22,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    textAlign: "left",
    color: Color.darkModeColorWhite,
    position: "absolute",
  },
  frameInner: {
    height: "73.75%",
    width: "14.2%",
    top: "13.07%",
    right: "85.8%",
    bottom: "13.19%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  uniportParent: {
    width: 118,
    height: 33,
    overflow: "hidden",
  },
  iconBell: {
    width: 24,
    height: 24,
  },
  frameContainer: {
    justifyContent: "space-between",
    width: 305,
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
  },
  daysInKorea: {
    top: 105,
    left: 22,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.darkModeColorWhite,
    position: "absolute",
  },
  text: {
    top: 25,
    left: 31,
    fontSize: FontSize.size_41xl,
    textAlign: "left",
    position: "absolute",
  },
  parentShadowBox1: {
    height: 140,
    width: 140,
    backgroundColor: Color.darkModeColorQuaternaryD,
    borderRadius: Border.br_11xl,
    overflow: "hidden",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  weeklyLuckyDraw: {
    top: 110,
    left: 13,
    textAlign: "left",
    color: Color.darkModeColorWhite,
    position: "absolute",
  },
  giftDynamicClayIcon: {
    top: 30,
    left: 30,
    position: "absolute",
  },
  myAddressIn: {
    marginBottom: 20,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.darkModeColorWhite,
  },
  text1: {
    fontSize: FontSize.size_21xl,
  },
  days1: {
    fontSize: FontSize.size_mini,
  },
  days: {
    marginLeft: -28.5,
    marginTop: -2.5,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    left: "50%",
    top: "50%",
  },
  seeMore: {
    color: Color.lightModeColorGray,
    textAlign: "left",
    position: "absolute",
  },
  daysUntilContract: {
    top: 53,
    left: 12,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsRegular,
  },
  parentShadowBox: {
    display: "none",
    backgroundColor: Color.darkModeColorWhite,
    borderRadius: Border.br_3xs,
    height: 145,
    width: 305,
    overflow: "hidden",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  iconVolume: {
    width: 32,
    height: 32,
  },
  text2: {
    fontSize: FontSize.size_sm,
  },
  iconVolumeParent: {
    paddingHorizontal: Padding.p_lgi,
    marginTop: 4,
    paddingVertical: Padding.p_6xs,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.darkModeColorQuaternaryD,
    justifyContent: "space-between",
    flexDirection: "row",
    width: 305,
    overflow: "hidden",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    alignItems: "center",
  },
  frameView: {
    marginTop: 10,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  myAddressInKoreaParent: {
    marginTop: 20,
    marginBottom: 20,  // 이 부분을 추가
  },
  mbLeft: {
    marginTop: -10.5,
    marginLeft: -41.5,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    left: "50%",
    top: "50%",
  },
  text4: {
    fontSize: FontSize.size_base,
  },
  parent: {
    marginTop: -23,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_6xs,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.darkModeColorQuaternaryD,
    justifyContent: "space-between",
    flexDirection: "row",
    width: 305,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    alignItems: "center",
  },
  uni: {
    color: Color.darkModeColorWhite,
  },
  unistay: {
    fontSize: FontSize.size_xl,
    textAlign: "left",
  },
  btnUnistay: {
    width: 150,
    paddingHorizontal: Padding.p_6xl,
    paddingVertical: Padding.p_3xs,
    height: 150,
    backgroundColor: Color.darkModeColorQuaternaryD,
    borderRadius: Border.br_11xl,
    overflow: "hidden",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    justifyContent: "center",
    alignItems: "center",
  },
  dicons1: {
    width: 40,
    height: 40,
  },
  univisa: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  btnUnivisa: {
    top: 85,
    paddingHorizontal: Padding.p_sm,
  },
  btnUniphone: {
    top: 0,
    paddingHorizontal: Padding.p_3xs,
  },
  btnUnivisaParent: {
    width: 130,
    height: 150,
  },
  days2: {
    marginLeft: -28.5,
    marginTop: -2.5,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    left: "50%",
    top: "50%",
  },
  seeMore2: {
    fontSize: FontSize.size_5xs,
    left: 243,
    top: 122,
    fontFamily: FontFamily.poppinsRegular,
  },
  daysUntilExpiration: {
    top: 57,
    left: 20,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsRegular,
  },
  d4: {
    fontSize: 18,
  },
  visa: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.poppinsRegular,
  },
  d4000000Container: {
    marginTop: -71.5,
    marginLeft: -48.5,
    textAlign: "center",
    color: Color.darkModeColorWhite,
    position: "absolute",
  },
  daysGroup: {
    height: 145,
    marginTop: 10,
    backgroundColor: Color.darkModeColorQuaternaryD,
    borderRadius: Border.br_11xl,
    width: 305,
    overflow: "hidden",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  myVisaStatusParent: {
    marginTop: 20,
    justifyContent: "center",
  },
  frameParent: {
    paddingBottom: 150,
    zIndex: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 18,
    height: 18,
  },
  addTask: {
    borderRadius: Border.br_sm,
    padding: Padding.p_mini,
    flexDirection: "row",
    backgroundColor: Color.darkModeColorGray,
  },
  iconAdd: {
    flexDirection: "row",
  },
  iconHomeParent: {
    bottom: 0,
    borderTopLeftRadius: Border.br_11xl,
    borderTopRightRadius: Border.br_11xl,
    borderStyle: "solid",
    borderColor: Color.darkModeColorGray,
    borderTopWidth: 0.2,
    height: 110,
    paddingVertical: 4,
    zIndex: 1,
    left: 0,
    paddingHorizontal: Padding.p_xl,
    backgroundColor: Color.darkModeColorQuaternaryD,
    position: "absolute",
    justifyContent: "space-between",
    flexDirection: "row",
    overflow: "hidden",
    width: 375,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    alignItems: "center",
  },
  view: {
    flex: 1,
    width: "100%",
    // height: 812,
    alignItems: "center",
  },
});

export default Frame;
