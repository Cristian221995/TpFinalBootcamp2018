import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import PropTypes from 'prop-types';
import Search from '../components/search/search' //Import the component file

const SearchScreen = ({ navigation }) => (
  
  <View  style={styles.container}>
    <Search />
  </View>
);

SearchScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

SearchScreen.navigationOptions = {
  title: 'Search',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF44'
  },
});

export default SearchScreen;