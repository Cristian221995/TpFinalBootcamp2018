import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Form3 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Form 3!</Text>
        <Button
          title="Finished"
          onPress={() => this.props.navigation.navigate('form1')} //aca va el nombre de la etiqueta, no de la clase 
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
