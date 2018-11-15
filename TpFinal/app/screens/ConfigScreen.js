import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import PropTypes from 'prop-types';
import Config from '../components/config/config.js' //Import the component file

const ConfigScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Config />
  </View>
);

ConfigScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

ConfigScreen.navigationOptions = {
  title: 'Config',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
});

export default ConfigScreen;