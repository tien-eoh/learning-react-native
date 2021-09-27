import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Alert,
} from 'react-native';

export const RowContact = props => {
  const onPressVideo = () => {
    Alert.alert('Please add me in facebook, Luv yew');
  };
  const onPressChat = () => {
    Linking.openURL(`sms:${props.phoneNumber}`);
  };
  const onPressCall = () => {
    Linking.openURL(`tel:${props.phoneNumber}`);
  };

  return (
    <View style={styles.rowContainer}>
      <View>
        <Text style={styles.textDevice}>{props.title}</Text>
        <Text style={styles.textphoneNumber}>{props.phoneNumber}</Text>
      </View>
      {props.hasVideo ? (
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.icon} onPress={onPressVideo}>
            <Image source={require('../images/Video.png')} />
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.icon} onPress={onPressChat}>
            <Image source={require('../images/Chat.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon} onPress={onPressCall}>
            <Image source={require('../images/Call.png')} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  textDevice: {
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 28,
    color: '#6E7191',
  },
  textphoneNumber: {
    marginTop: -2,
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 28,
    color: '#14142B',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 21,
  },
  iconContainer: {
    marginTop: 15,
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 24,
    width: 24,
    height: 24,
  },
});
