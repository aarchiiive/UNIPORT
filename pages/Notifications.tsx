import React from 'react';
import { 
  View, 
  Text, 
  Image, 
  Alert, 
  ScrollView, 
  TouchableOpacity, 
  useColorScheme 
} from 'react-native';

import { NavProps } from './components/Props';
import { Header } from './components/Header'

// styles
import { styles } from './styles/Notifications';


const Notice = ({
  content,
  noticeType,
  noticeDate,
  style,
  onPress
}: {
  content: string;
  noticeType: string;
  noticeDate: string;
  style: any;
  onPress: () => void;
}) => {

  return (
    <TouchableOpacity style={[styles.noticeBox, style]} onPress={onPress}>
      <View style={styles.noticeContainer}>
        <View style={styles.noticeInfoContainer}>
          <View style={styles.noticeType}>
            <Image source={require("../assets/lightbulb.png")} style={styles.lightBulbIcon} />
            <Text style={styles.noticeTypeText}>{noticeType}</Text>
          </View>
          <Text style={styles.noticeDate}>{noticeDate}</Text>
        </View>
        <Text style={[styles.notice]}>{content}</Text>
      </View>
    </TouchableOpacity>
  )
};

const Notifications: React.FC<NavProps> = ({ navigation }) => {
  const title = 'Notifications';

  // variables
  const noticeType = "Tips";
  const noticeDate = "2 Days ago";
  const notificationList = ["New follower", "Like on your post", "New comment", "We are UNIPORT!"];

  const onPress = () => {
    Alert.alert('UNIPORT');
  };

  return (
    <View>
      <View style={styles.header}>
        <Header title={title} source={require("../assets/back.png")} navigation={navigation} />
      </View>
      <ScrollView>
        <View style={styles.main}>
          {
            notificationList.map((item, index) => {
              const boxStyle = index % 2 === 0 ? styles.whiteBox : styles.grayBox;
              return <Notice
                key={index}
                content={item}
                noticeType={noticeType}
                noticeDate={noticeDate}
                style={boxStyle}
                onPress={onPress} />;
            })
          }
        </View>
      </ScrollView>
    </View>

  );
};


export default Notifications;
