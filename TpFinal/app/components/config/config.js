'use strict';

import React, { Component } from 'react';
import { Text, StyleSheet, CheckBox, View} from 'react-native';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/'; //Import your actions


class Config extends Component {

    constructor(props){
        super(props);
        this.state = {
        };

        this.handleNotVerified = this.handleNotVerified.bind(this);
        this.handleNotFollow = this.handleNotFollow.bind(this);
        this.handledefaultProfile = this.handledefaultProfile.bind(this);
        this.handleContainsLink = this.handleContainsLink.bind(this);
        this.handleTextTruncated = this.handleTextTruncated.bind(this);
    }

    handleNotVerified() {
        this.props.configNotVerified();
    }

    handleNotFollow() {
        this.props.configNotFollow();
    }

    handledefaultProfile() {
        this.props.configHaveDefaultProfile();
    }

    handleContainsLink() {
        this.props.configContainsLink();
    }

    handleTextTruncated() {
        this.props.configTextTruncated();
    }

    render() {
        return(
            <View style={styles.content}>
                <View style={[styles.configItem, styles.firstItem]}>
                    <Text style={[styles.configText, styles.firstText]}>Silence notification from...</Text>
                </View>
                <View style={styles.configItem}>
                <Text style={styles.configText}>People who have not verified the account</Text>
                <CheckBox style={styles.configCheckBox} value={this.props.notVerified} onValueChange={this.handleNotVerified}/>
                </View>
                <View style={styles.configItem}>
                <Text style={styles.configText}>People who do not follow</Text>
                <CheckBox style={styles.configCheckBox} value={this.props.notFollow} onValueChange={this.handleNotFollow}/>
                </View>        
                <View style={styles.configItem}>
                <Text style={styles.configText}>People who have default profile information</Text>
                <CheckBox style={styles.configCheckBox} value={this.props.defaultProfile} onValueChange={this.handledefaultProfile}/>
                </View>
                <View style={styles.configItem}>
                <Text style={styles.configText}>Tweets that contains a link</Text>
                <CheckBox style={styles.configCheckBox} value={this.props.containsLinks} onValueChange={this.handleContainsLink}/>
                </View>
                <View style={styles.configItem}>
                <Text style={styles.configText}>Tweets that has text truncated</Text>
                <CheckBox style={styles.configCheckBox} value={this.props.textTruncated} onValueChange={this.handleTextTruncated}/>
                </View>           
            </View>
          
        );
      } 
} 


// The function takes data from the app current state,
// and insert/links it into the props of our component.
// This function makes Redux know that this component needs to be passed a piece of the state
function mapStateToProps(state, props) {
    return {
        notVerified: state.ConfigReducer.notVerified,
        notFollow: state.ConfigReducer.notFollow,
        defaultProfile: state.ConfigReducer.defaultProfile,
        containsLinks: state.ConfigReducer.containsLinks,
        textTruncated: state.ConfigReducer.textTruncated,
    }

}

// Doing this merges our actions into the component’s props,
// while wrapping them in dispatch() so that they immediately dispatch an Action.
// Just by doing this, we will have access to the actions defined in out actions file (action/home.js)

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(Config);



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




