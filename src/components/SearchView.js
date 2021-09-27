import React from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';

export const SearchView = () => {
  return (
    <TouchableOpacity>
      <View style={styles.searchBar}>
        <Image
          style={styles.searchImage}
          source={require('../images/Search.png')}
        />
        <Text style={styles.searchText}>Search</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: '#EFF0F6',
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    marginTop: 10,
    marginHorizontal: 16,
  },
  searchText: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 28,
    color: '#A0A3BD',
  },
  searchImage: {
    marginLeft: 18,
    marginRight: 10,
  },
});
