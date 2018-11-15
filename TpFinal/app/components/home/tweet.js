'use strict';
import styles from '../../styles/style';
import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
} from 'react-native';
import { FontAwesome, Feather } from '@expo/vector-icons';


export default class Tweet extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };      
    };
    
    render() {
        if(this.props.tweet.entities.media) {
            
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
