import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';

export const TopBar = props => {
  return (
    <View style={styles.rowContainer}>
      <TouchableOpacity
        style={[styles.icon, !props.isAvatar && styles.iconBorder]}
        onPress={props.onPressLeft}>
        {props.photoLeft}
      </TouchableOpacity>
      <Text style={styles.title}>{props.title}</Text>
      <TouchableOpacity
        style={[styles.icon, styles.edit]}
        onPress={props.onPressRight}>
        {props.photoRight}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    marginTop: 53,
    marginHorizontal: 16,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  iconContainer: {
    marginTop: 15,
    flexDirection: 'row',
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconBorder: {
    borderColor: '#A0A3BD',
    borderWidth: 1,
  },
  edit: {
    backgroundColor: '#4680FF',
    borderWidth: 0,
  },
  title: {
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 28,
  },
});
