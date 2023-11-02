import React, { useCallback, useMemo, useRef, useState } from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';

import { NavProps } from './components/Props';
import { toMain } from "./Navigations";
import { styles } from './styles/IDScan';

const CommentTab = () => {
  return (
    <View style={styles.commentTab}>
      <View style={styles.commentArea}>
        <Image
          source={require('../assets/uniport.png')}
          style={styles.uniportLogo}>
        </Image>
        <Text style={styles.commentText}>
          {"Please Upload/Scan\n" +
            "your Passport\n"}
        </Text>
      </View>
    </View>
  );
};

const PassportInfoBox = ({ name, content }: { name: string; content: string; }) => {
  return (
    <View style={styles.passportInfoBox}>
      <Text style={styles.passportInfoName}>{name}</Text>
      <Text style={styles.passportInfoContent}>{content}</Text>
    </View>
  );
};

const IDScan: React.FC<NavProps> = ({ navigation }) => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ['10%', '48%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const passportInfo = {
    name: "Uniport Official Korea",
    number: "M12345678",
    birthday: "2000.01.01",
    nation: "Republic of Korea",
  }

  return (
    <View style={styles.container}>
      <CommentTab />
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        containerStyle={styles.passportInfoTab}
      >
        <BottomSheetScrollView contentContainerStyle={styles.passportInfoScroll}>
          <Text style={styles.passportInfoTitle}>{"Passport Info"}</Text>
          <PassportInfoBox name={"Full Name"} content={passportInfo.name} />
          <PassportInfoBox name={"Passport no."} content={passportInfo.number} />
          <PassportInfoBox name={"Date of birth"} content={passportInfo.birthday} />
          <PassportInfoBox name={"Nationality"} content={passportInfo.nation} />
        </BottomSheetScrollView>
      </BottomSheet>
    </View>
  );
};




export default IDScan;