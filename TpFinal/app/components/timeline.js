'use strict';
import styles from '../styles/style';
import React, { Component } from 'react';
import Tweet from './home/tweet'
import {
    View,
    FlatList,
    ActivityIndicator
} from 'react-native';
import { getTimeline } from '../actions';

export default class TimeLine extends Component {
    constructor(props) {
        super(props);

        this.state = {
            refreshing: false,
        }; 
        
        this.renderItem = this.renderItem.bind(this);
        this.renderFooter = this.renderFooter.bind(this);
        this.handleRefresh = this.handleRefresh.bind(this);
        this.handleOnEndReached = this.handleOnEndReached.bind(this);
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
                onEndReached={this.handleOnEndReached}
                extraData={this.props.config}
                refreshing={this.state.refreshing}
                onRefresh={this.handleRefresh}

            />
        </View>
     );
    };

    handleOnEndReached() {
        this.props.loadContent(this.props.config);
    }

    handleRefresh(){
        this.setState({refreshing: true});
        console.log("refresh");
        this.props.reload(this.props.config);
        this.setState({refreshing: false});

    }

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
            <Tweet tweet={item}/>     
        )
    }
        
};
