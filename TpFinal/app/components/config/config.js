'use strict';

import React, { Component } from 'react';
import { Text, StyleSheet, CheckBox, View} from 'react-native';
// import {bindActionCreators} from 'redux';
// import { connect } from 'react-redux';
// import * as actions from '../../actions/'; //Import your actions


class Config extends Component {

    render() {
        return(
            <View style={styles.content}>
                <View style={[styles.configItem, styles.firstItem]}>
                    <Text style={[styles.configText, styles.firstText]}>Silence notification from...</Text>
                </View>
                <View style={styles.configItem}>
                <Text style={styles.configText}>People who have not verified the account</Text>
                <CheckBox style={styles.configCheckBox}/>
                </View>
                <View style={styles.configItem}>
                <Text style={styles.configText}>People who do not follow</Text>
                <CheckBox style={styles.configCheckBox}/>
                </View>        
                <View style={styles.configItem}>
                <Text style={styles.configText}>People who have default profile information</Text>
                <CheckBox style={styles.configCheckBox}/>
                </View>
                <View style={styles.configItem}>
                <Text style={styles.configText}>Tweets that contains a link</Text>
                <CheckBox style={styles.configCheckBox}/>
                </View>
                <View style={styles.configItem}>
                <Text style={styles.configText}>Tweets that has text truncated</Text>
                <CheckBox style={styles.configCheckBox}/>
                </View>           
            </View>
          
        );
      } 
} 

const styles = StyleSheet.create({
    content:{
        backgroundColor: '#FFF',
    },
    
    configItem: {
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderColor: "#ccc",
      padding: 20,
      marginBottom: 10, 
      justifyContent: 'space-between',
    },
    firstItem:{
        backgroundColor: '#708AB4',
        
    },
    firstText:{
        fontWeight: 'bold',
        color: '#FFF',
    },
    configText: {
      fontSize: 15,
      alignSelf: 'flex-start'
    },
    configCheckBox: {
      alignSelf: 'flex-end',
    },
  });

export default Config;


