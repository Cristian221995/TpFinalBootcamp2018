import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    activityIndicatorContainer:{
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },

    flatlistView: {
        flex:1, 
        backgroundColor: '#F5F5F5',
    },

    tweetWrapper:{
        borderBottomWidth: 1,
        borderColor: "#ccc",
        padding: 10,
        flexDirection: 'row'
    },

    tweetContent: {
        flexDirection: 'column',
        width: '80%',
    },

    tweetHeader: {
        flexDirection: 'row', 
        alignItems: 'center', 
    },

    tweetUsername:{
        fontSize: 15,
        fontWeight: "600",
        paddingLeft: 10
    },

    tweetUserAccount: {
        fontSize: 15,
        fontWeight: "600",
        color: '#CCC',
        paddingLeft: 10
    },

    tweetDescription: {
        marginTop: 5,
        marginLeft: 10,
        paddingRight: 10,
        fontSize: 14,
    },

    tweetUserAvatar: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },

    tweetMedia: {
        width: '100%',
        height: 150,
        marginLeft: 10,
        paddingRight: 10,
        resizeMode: 'contain',
        borderRadius: 10,   
    },

    tweetSocial: {
        flexDirection: 'row', 
        justifyContent: 'space-around',
        marginTop: 10,
    },

    tweetSocialItem: {
        flexDirection: 'row',
    },

    trendWrapper:{
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: "#ccc",
        padding: 10,
    },
    trendNumber:{
        
        color: '#CCC',
        fontSize: 16,
        fontWeight: "600",
        paddingLeft: 10
    },
    trendData:{
        flexDirection: 'column',
        marginLeft: '8%',
        paddingRight: 10,   
    },
    trendName:{
        fontSize: 17,
    },
    countTw:{
        color: '#CCC',
        fontSize: 16,
        fontWeight: "300",
        marginTop:'3%'
    },
    trendTitle:{
        fontSize: 18,
        fontWeight: "600",
        margin: '3%'
    }
});

export default styles;