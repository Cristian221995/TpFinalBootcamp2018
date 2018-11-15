'use strict';
import styles from '../../styles/style';
import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Trend extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };    
        this.getTw=this.getTw.bind(this);  
    };

    getTw(x)
    {   let rt ;
        if(!x){
            rt=0;  
        }
        else{
            rt=x;
        }
        return rt;
    }

    render() { 
        let trends = [];
         
        for (let i = 0; i < this.props.data.trends.length; i++) {
        
        trends[i] = <View key={i} style={styles.trendWrapper}>
                        <Text style={styles.trendNumber}>{i}</Text>
                        <View style={styles.trendData}>
                            <Text style={styles.trendName}>{this.props.data.trends[i].name}</Text>
                            <Text style={styles.countTw}> {this.getTw(this.props.data.trends[i].tweet_volume)+" tweets"}</Text>
                        </View>
                    </View>
        }
        return (
            <View>
                <Text style={styles.trendTitle}>Trends for you</Text>
                {trends}
            </View>        
        );


    }
}
