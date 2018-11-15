'use strict';
import styles from '../../styles/style';
import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import { FontAwesome, Feather } from '@expo/vector-icons';
import * as actions from '../../actions/';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

class Tweet extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };      
        
    };


    render() {
         
        if(this.props.tweet.entities.media) {
            
            return (
            <TouchableOpacity onPress={() => actions.navigationTweetScreen()}  >
            <View style={styles.tweetWrapper}>
                <Image 
                    style={styles.tweetUserAvatar}
                    source={{uri: this.props.tweet.user.profile_image_url_https}}
                />
                <View style={styles.tweetContent}>
                    <View style={styles.tweetHeader}>    
                        <Text style={styles.tweetUsername}>{this.props.tweet.user.name}</Text>
                        <Text style={styles.tweetUserAccount}>@{this.props.tweet.user.screen_name}</Text>
                    </View>
                    <Text style={styles.tweetDescription}>{this.props.tweet.text}</Text>
                    <Image 
                        style={styles.tweetMedia}
                        source={{uri: this.props.tweet.entities.media[0].media_url_https}}
                    />
                    <View style={styles.tweetSocial}>
                        <View style={styles.tweetSocialItem}>
                            <Feather name={'refresh-cw'} size={20} />
                            <Text style={{paddingLeft: 5}}>{this.props.tweet.retweet_count}</Text>
                        </View>
                        <View style={styles.tweetSocialItem}>
                            <FontAwesome name={'heart-o'} size={20} />
                            <Text style={{paddingLeft: 5}}>{this.props.tweet.favorite_count}</Text>
                        </View>
                        <View style={styles.tweetSocialItem}>
                            <FontAwesome name={'comment-o'} size={20} /> 
                            <Text style={{paddingLeft: 5}}>0</Text>  
                        </View>
                    </View>
                </View>
                
            </View>
            </TouchableOpacity>
            );
        } else {
            
            return (
            <View style={styles.tweetWrapper}>
                <Image 
                    style={styles.tweetUserAvatar}
                    source={{uri: this.props.tweet.user.profile_image_url_https}}
                />
                <View style={styles.tweetContent}>
                    <View style={styles.tweetHeader}>    
                        <Text style={styles.tweetUsername}>{this.props.tweet.user.name}</Text>
                        <Text style={styles.tweetUserAccount}>@{this.props.tweet.user.screen_name}</Text>
                    </View>
                    <Text style={styles.tweetDescription}>{this.props.tweet.text}</Text>
                    <View style={styles.tweetSocial}>
                        <View style={styles.tweetSocialItem}>
                            <Feather name={'refresh-cw'} size={20} />
                            <Text style={{paddingLeft: 5}}>{this.props.tweet.retweet_count}</Text>
                        </View>
                        <View style={styles.tweetSocialItem}>
                            <FontAwesome name={'heart-o'} size={20} />
                            <Text style={{paddingLeft: 5}}>{this.props.tweet.favorite_count}</Text>
                        </View>
                        <View style={styles.tweetSocialItem}>
                            <FontAwesome name={'comment-o'} size={20} /> 
                            <Text style={{paddingLeft: 5}}>0</Text>  
                        </View>
                    </View>
                </View>
            </View>
            );
        }
        
    }
}


// The function takes data from the app current state,
// and insert/links it into the props of our component.
// This function makes Redux know that this component needs to be passed a piece of the state
function mapStateToProps(state, props) {
    return {
        routeName: state.NavReducer,
    }

}

// Doing this merges our actions into the component’s props,
// while wrapping them in dispatch() so that they immediately dispatch an Action.
// Just by doing this, we will have access to the actions defined in out actions file (action/home.js)

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(Tweet);