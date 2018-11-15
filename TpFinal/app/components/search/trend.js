'use strict';
import styles from '../../styles/style';
import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Trend extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };      
    };



    render() { 
        let trends = [];
        
        for (let i = 0; i < this.props.data.trends.length; i++) {
            trends[i] = <View key={i}>
                            <Text>{this.props.data.trends[i].name}</Text>
                            <Text>{this.props.data.trends[i].tweet_volume}</Text>
                        </View>;
        }
        return (
            <View >
                <Text>tendencias</Text>
                {trends}
            </View>        
        );


    }
}
