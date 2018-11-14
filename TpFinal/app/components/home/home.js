'use strict';

import React, { Component } from 'react';
import {
    FlatList,
    View,
    Text,
    ActivityIndicator
} from 'react-native';
import styles from '../../styles/style';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import Tweet from './tweet';
import * as actions from '../../actions/'; //Import your actions


class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };

        this.renderItem = this.renderItem.bind(this);
    }

    
    componentDidMount() {
        this.props.getTimeline();
        
    }

    render() {
        if (this.props.loading) {
            return (
                <View style={styles.activityIndicatorContainer}>
                    <ActivityIndicator animating={true}/>
                </View>
            );
        } else {
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
    }

    renderItem({item, index}) {
        return (
            <View>
                <Tweet tweet={item}/>  
            </View>
        )
    }
};



// The function takes data from the app current state,
// and insert/links it into the props of our component.
// This function makes Redux know that this component needs to be passed a piece of the state
function mapStateToProps(state, props) {
    return {
        loading: state.TimelineReducer.loading,
        data: state.TimelineReducer.data,
    }

}

// Doing this merges our actions into the component’s props,
// while wrapping them in dispatch() so that they immediately dispatch an Action.
// Just by doing this, we will have access to the actions defined in out actions file (action/home.js)

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(Home);

