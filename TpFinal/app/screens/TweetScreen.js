import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import PropTypes from 'prop-types';
import Search from '../components/search/search' //Import the component file


const TweetScreen = ({ navigation }) => (
  
  <View  style={styles.container}>
    <TweetDetail />
  </View>
);

TweetScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

TweetScreen.navigationOptions = {
  title: 'tweet',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF44'
  },
});

export default TweetScreen;

