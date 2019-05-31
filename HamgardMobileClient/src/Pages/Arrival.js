import React from 'react';
import {TextInput, StyleSheet, View, Text, Button } from 'react-native';

class ArrivalScreen extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <Text>Arrival!</Text>
          <Button
            title="Log In"
            onPress=
            {
              () =>
              {
                this.props.navigation.navigate('Login')
              }
            }
          />
  
          <Button
            title="Sign Up"
            onPress=
            {
              () =>
              {
                this.props.navigation.navigate('SignUp')
              }
            }
          />
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },

});

  export default ArrivalScreen;