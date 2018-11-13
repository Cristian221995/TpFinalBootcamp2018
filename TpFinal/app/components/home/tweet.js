'use strict';

import React, { Component } from 'react';
import {
    View,
    Text,
    
} from 'react-native';

export default class Tweet extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };      
    }



    render() {
        return (
            <View style={{flex:1, backgroundColor: '#F5F5F5', paddingTop:20}}>
                <Text>{props.tweet.user.name}</Text>
            </View>
        );
    }
}
