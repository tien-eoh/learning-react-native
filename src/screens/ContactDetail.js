import React, {useCallback} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  ScrollView,
  Image,
  Alert,
} from 'react-native';
import {RowContact} from '../components/RowContact';
import {TopBar} from '../components/TopBar';
import {ContactInfo} from '../components/ContactInfo';
import {ShareInfo} from '../components/ShareInfo';

export const ContactDetail = ({route, navigation}) => {
  const {contact} = route.params;
  const onPressLeft = useCallback(() => {
    navigation.goBack();
  }, [navigation]);
  const onPressRight = () => {
    Alert.alert('Hihi');
  };
  return (
    <SafeAreaView backgroundColor="#ffffff">
      <StatusBar barStyle={'light-content'} />
      <ScrollView>
        <TopBar
          isAvatar={false}
          photoLeft={<Image source={require('../images/ArrowLeft.png')} />}
          photoRight={<Image source={require('../images/Edit.png')} />}
          onPressLeft={onPressLeft}
          onPressRight={onPressRight}
        />
        <ContactInfo
          avatar={contact.avatar}
          name={contact.name}
          phoneNumber={contact.phone}
          email={contact.email}
        />
        <View style={styles.viewSpace} />
        <View style={styles.bottomContainer}>
          <RowContact
            hasVideo={contact.videoCall}
            title={contact.seconTitle}
            phoneNumber={contact.secondPhone}
          />
          {/* <RowContact hasVideo={false} title="Home" phoneNumber="0986121238" />
          <RowContact hasVideo={true} title="Home" phoneNumber="0986121238" /> */}
        </View>
        <ShareInfo />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bottomContainer: {
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  viewSpace: {
    backgroundColor: '#F7F7FC',
    height: 32,
  },
});
