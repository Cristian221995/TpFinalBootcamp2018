'use strict';
import styles from '../styles/style';
import React, { Component } from 'react';
import Tweet from './home/tweet'
import {
    View,
    FlatList,
    ActivityIndicator
} from 'react-native';


export default class TimeLine extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }; 
        
        this.renderItem = this.renderItem.bind(this);
        this.renderFooter = this.renderFooter.bind(this);
    };



    render() {
     return (
        <View style={styles.flatlistView}>
           <Text>Tweet</Text>
           <Text>Tweet</Text>
           <Text>Tweet</Text>
           <Text>Tweet</Text>
        </View>
     );
    };
};

