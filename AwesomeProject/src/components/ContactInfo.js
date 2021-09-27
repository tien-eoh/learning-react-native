import React from 'react';

import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  Linking,
  Alert,
} from 'react-native';

export const ContactInfo = props => {
  const onPressChat = () => {
    Linking.openURL(`sms:${props.phoneNumber}`);
  };
  const onPressCall = () => {
    Linking.openURL(`tel:${props.phoneNumber}`);
  };
  const onPressVideo = () => {
    Alert.alert('Please add me in facebook, Luv yew');
  };
  const onPressMessage = () => {
    let url = `mailto:${props.email}`;
    Linking.openURL(url);
  };
  return (
    <View style={styles.contactInfo}>
      <View>
        <Image
          style={styles.avatar}
          source={{
            uri: props.avatar,
          }}
        />
      </View>
      <Text style={styles.contactName}>{props.name}</Text>
      <Text style={styles.contactNumber}>{props.phoneNumber}</Text>
      <View style={styles.contactRow}>
        <TouchableOpacity
          style={[styles.chat, styles.contactAction]}
          onPress={onPressChat}>
          <Image source={require('../images/ChatWhite.png')} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.call, styles.contactAction]}
          onPress={onPressCall}>
          <Image source={require('../images/CallWhite.png')} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.video, styles.contactAction]}
          onPress={onPressVideo}>
          <Image source={require('../images/VideoWhite.png')} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.message, styles.contactAction]}
          onPress={onPressMessage}>
          <Image source={require('../images/Message.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contactInfo: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  avatar: {
    width: 104,
    height: 104,
    borderRadius: 32,
    overflow: 'hidden',
  },
  contactName: {
    marginTop: 8,
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 28,
    color: '#4E4B66',
  },
  contactNumber: {
    marginTop: -4,
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 28,
    color: '#6E7191',
  },
  contactAction: {
    width: 50,
    height: 50,
    borderRadius: 14,
    borderColor: '#A0A3BD',
    justifyContent: 'center',
    alignItems: 'center',
  },
  chat: {
    backgroundColor: '#00BA88',
    borderWidth: 0,
  },
  call: {
    backgroundColor: '#4680FF',
  },
  video: {
    backgroundColor: '#F55858',
  },
  message: {
    backgroundColor: '#D9DBE9',
  },
  contactRow: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 52,
    marginBottom: 16,
  },
});
