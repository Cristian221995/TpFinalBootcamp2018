'use strict';
import styles from '../../styles/style';
import React, { Component } from 'react';
import Trend from './trend';
import {
    View,
    Text,
    Image,
    FlatList
} from 'react-native';

export default class Trends extends Component {
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
    
    renderItem({item, index}) { //this function is called for each this.props.data element. in this case data has only one element(wich is an array) so it's call just once    
        return (
            <View >
                <Trend data={item}/>      
            </View>
        )
    }
        
}
