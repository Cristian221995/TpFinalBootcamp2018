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
            <FlatList
                ref='listRef'
                data={this.props.data}
                renderItem={this.renderItem}
                keyExtractor={(item, index) => index.toString()}
                ListFooterComponent={this.renderFooter}
                onEndReachedThreshold={0.5}
                onEndReached={this.props.loadContent}
            />
        </View>
     );
    };

    renderFooter = () => {
        if (!this.state.loading) return null;
        return (
          <View
            style={{
              paddingVertical: 20,
              borderTopWidth: 1,
              borderColor: "#CED0CE"
            }}
          >
              <ActivityIndicator animating size="large" />
          </View>
        );
      };
    
    renderItem({item, index}) {
        return (
            <View>
                <Tweet tweet={item}/>  
            </View>
        )
    }
        
};

