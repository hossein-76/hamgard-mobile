import React from 'react';
import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    Container: {
        flex:1,
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: 50,
        padding: 20,
        backgroundColor: '#ffffff',
      },
      inputContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        
      },
      buttonContainer: {
        flex:1,
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: 50,
        padding: 0,
        backgroundColor: '#ffffff',
      },
      stackedLabelItem:
      {
        flex:1,
        marginBottom:20,
        
      },
      warningStackedLabelItem:
      { 
        flex:1,
        marginBottom:20,
        borderColor:'#FD5523'
      },
      input: 
      {
        fontSize: 24,
        marginLeft: 10
      },
      title: {
        fontSize: 30,
        alignSelf: 'center',
        marginBottom: 0
      },
      label: {
        fontSize: 20,
        alignSelf: 'flex-end',
        marginRight: 20
      },
      buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center'
      },
      button: {
        backgroundColor: '#BC1D39',
        borderColor: '#48BBEC',
        height: 60,
        marginBottom: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'
      },
  })

  export default styles;