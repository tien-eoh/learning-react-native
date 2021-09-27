import React from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';

export const ShareInfo = props => {
  const onPressSharelocation = () => {};
  const onPressQRcode = () => {};
  const onPressSharecontact = () => {};
  return (
    <View style={styles.contactRow}>
      <View style={styles.viewShareContact}>
        <TouchableOpacity
          style={[styles.contactAction, styles.shareLocation]}
          onPress={onPressSharelocation}>
          <Image source={require('../images/Location.png')} />
        </TouchableOpacity>
        <Text style={styles.textShareInfor}>Share location</Text>
      </View>
      <View style={styles.viewShareContact}>
        <TouchableOpacity
          style={[styles.contactAction, styles.qrCode]}
          onPress={onPressQRcode}>
          <Image source={require('../images/QRcode.png')} />
        </TouchableOpacity>
        <Text style={styles.textShareInfor}>QR Code</Text>
      </View>
      <View style={styles.viewShareContact}>
        <TouchableOpacity
          style={[styles.contactAction, styles.shareContact]}
          onPress={onPressSharecontact}>
          <Image source={require('../images/ShareContact.png')} />
        </TouchableOpacity>
        <Text style={styles.textShareInfor}>Share contact</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contactRow: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 52,
    alignItems: 'center',
    marginBottom: 40,
  },
  textShareInfor: {
    marginTop: 10,
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 28,
    color: '#6E7191',
  },
  viewShareContact: {
    alignItems: 'center',
  },
  contactAction: {
    width: 50,
    height: 50,
    borderRadius: 14,
    borderColor: '#A0A3BD',
    justifyContent: 'center',
    alignItems: 'center',
  },
  shareLocation: {
    backgroundColor: '#443DF6',
  },
  qrCode: {
    backgroundColor: '#D9DBE9',
  },
  shareContact: {
    backgroundColor: '#34EAB9',
  },
});
