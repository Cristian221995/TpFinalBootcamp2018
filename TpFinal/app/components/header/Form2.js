import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Form2 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Form 2!</Text>
        <Button
          title="Next"
          onPress={() => this.props.navigation.navigate('form3')} //aca va el nombre de la etiqueta, no de la clase 
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
