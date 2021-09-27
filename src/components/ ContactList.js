import React, {useCallback} from 'react';
import {
  StyleSheet,
  Image,
  SectionList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const mappingContactToSectionData = contacts => {
  const resultArr = [];
  contacts.sort((first, second) => {
    return first.name < second.name ? -1 : 1;
  });

  const arrLenghth = contacts.length;
  let title = null;
  let data = [];
  for (let i = 0; i < arrLenghth; i++) {
    if (title === null) {
      title = contacts[i].name[0];
      data.push(contacts[i]);
    } else if (contacts[i].name[0] === title) {
      data.push(contacts[i]);
    } else if (contacts[i].name[0] !== title) {
      resultArr.push({title, data});

      title = contacts[i].name[0];
      data = [contacts[i]];
    }
  }
  resultArr.push({title, data});

  return resultArr;
};

export const Contacts = props => {
  const onPressItem = useCallback(
    item => () => {
      props.navigation.navigate('ContactDetail', {
        contact: item,
      });
    },
    [props.navigation],
  );
  const renderItem = useCallback(
    ({item, index}) => {
      return (
        <TouchableOpacity onPress={onPressItem(item)}>
          <View
            style={[
              styles.itemContainer,
              index === 0 && styles.itemContainerFirst,
            ]}>
            <Image
              style={styles.contactAvatar}
              source={{
                uri: item.avatar,
              }}
            />
            <View style={styles.contactContainer}>
              <Text numberOfLines={1} style={styles.contactName}>
                {item.name}
              </Text>
              <Text style={styles.contactNumber}>{item.phone}</Text>
              <View style={styles.line} />
            </View>
          </View>
        </TouchableOpacity>
      );
    },
    [onPressItem],
  );

  return (
    <SectionList
      contentContainerStyle={styles.contentContainer}
      style={styles.sectionList}
      sections={mappingContactToSectionData(props.contacts)}
      keyExtractor={(item, index) => item + index}
      renderItem={renderItem}
      stickySectionHeadersEnabled={true}
      renderSectionHeader={({section: {title}}) => (
        <Text style={styles.title}>{title}</Text>
      )}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    paddingTop: 26,
  },
  itemContainerFirst: {
    paddingTop: 32,
  },
  contactAvatar: {
    width: 54,
    height: 54,
    borderRadius: 16,
    backgroundColor: '#1B2124',
    marginLeft: 16,
    marginRight: 14,
    marginBottom: 6,
  },
  contactName: {
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 28,
    color: '#1B2124',
  },
  contactNumber: {
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 28,
    color: '#6E7191',
    marginTop: -6,
  },
  title: {
    fontWeight: '600',
    fontSize: 15,
    paddingVertical: 8,
    paddingLeft: 18,
    backgroundColor: '#F7F7FC',
  },
  sectionList: {
    flex: 1,
  },
  contentContainer: {
    width: '100%',
  },
  contactContainer: {
    flex: 1,
    marginRight: 22,
    borderBottomColor: '#D9DBE9',
    borderBottomWidth: 1,
  },
});
