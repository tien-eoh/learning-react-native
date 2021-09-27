import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Image, Alert} from 'react-native';

import {Activity} from '../components/Activity';
import {Contacts} from '../components/ ContactList';
import {SearchView} from '../components/SearchView';
import {TopBar} from '../components/TopBar';
import {recentContacts} from '../fakeData';

export const ContactList = ({navigation}) => {
  const [contacts, setContacts] = useState([]);
  const onPressLeft = () => {
    Alert.alert(':)');
  };
  const onPressRight = () => {
    Alert.alert(':)');
  };
  const getContact = async () => {
    try {
      const response = await axios.get(
        'https://60f4038a3cb0870017a8a0d9.mockapi.io/contact',
      );
      setContacts(response.data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getContact();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <TopBar
        isAvatar={true}
        photoLeft={
          <Image
            style={styles.avatar}
            source={{
              uri: 'https://vnlit.com/wp-content/uploads/2020/09/sach-hay-ve-loai-cho-cover-780x470.png',
            }}
          />
        }
        photoRight={<Image source={require('../images/Edit.png')} />}
        onPressLeft={onPressLeft}
        onPressRight={onPressRight}
        title="Contacts"
      />
      <SearchView />
      <Activity data={recentContacts} />
      <Contacts contacts={contacts} navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 16,
  },
  container: {
    flex: 1,
  },
});
