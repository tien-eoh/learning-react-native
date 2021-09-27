import React, {useCallback} from 'react';
import {
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import moment from 'moment';

const relativeTime = lastTime => {
  const time = moment(lastTime).startOf('minutes').fromNow();
  return time;
};

export const Activity = props => {
  const renderItem = useCallback(({item}) => {
    return (
      <TouchableOpacity>
        <View style={styles.activity}>
          <Image
            style={styles.avatarActivity}
            source={{
              uri: item.avatar,
            }}
          />
          <Text numberOfLines={1} style={styles.name}>
            {item.name}
          </Text>
          <Text style={styles.lastTime}>{relativeTime(item.last_time)}</Text>
        </View>
      </TouchableOpacity>
    );
  }, []);
  return (
    <View>
      <FlatList
        style={styles.flatList}
        contentContainerStyle={styles.container}
        data={props.data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingRight: 4,
  },
  activity: {
    marginTop: 32,
    alignItems: 'center',
    marginRight: 12,
    marginBottom: 18,
  },
  avatarActivity: {
    width: 104,
    height: 104,
    borderRadius: 24,
  },
  name: {
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 24,
    width: 70,
    textAlign: 'center',
    marginTop: 8,
  },
  lastTime: {
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 20,
  },
  flatList: {
    height: 200,
  },
});
