'use strict';
import styles from '../styles/style';
import React, { Component } from 'react';
import Tweet from './home/tweet'
import {
    View,
    Text,
    Image,
    FlatList
} from 'react-native';

export default class TimeLine extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }; 
        
        this.renderItem = this.renderItem.bind(this);
    };

    

    render() {
     return (
        <View style={styles.flatlistView}>
            <FlatList
                ref='listRef'
                data={this.props.data}
                renderItem={this.renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
     );
    }
    
    renderItem({item, index}) {
        return (
            <View>
                <Tweet tweet={item}/>  
            </View>
        )
    }
        
}
