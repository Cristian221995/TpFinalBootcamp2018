'use strict';
import styles from '../styles/style';
import React, { Component } from 'react';
import Tweet from './home/tweet'
import {
    View,
    FlatList,
    ActivityIndicator
} from 'react-native';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/'; //Import your actions


class TimeLine extends Component {
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
        if(this.props.notVerified && !item.user.verified){
            return null
        }
        if(this.props.notFollow && !item.user.following){
            return null
        }
        if(this.props.defaultProfile && item.user.default_profile){
            return null
        }
        if(this.props.containsLinks && item.entities.urls[0].url){
            return null
        }
        if(this.props.textTruncated && item.truncated){
            return null
        }
        return (
            <Tweet tweet={item}/>     
        )
    }
        
};

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
export default connect(mapStateToProps, mapDispatchToProps)(TimeLine);

