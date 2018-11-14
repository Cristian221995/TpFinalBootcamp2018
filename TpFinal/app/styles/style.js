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
        paddingTop:20
    },

    tweetWrapper:{
        borderBottomWidth: 1,
        borderColor: "#ccc",
        padding: 10
    },

    tweetTitle:{
        fontSize: 15,
        fontWeight: "600"
    },

    tweetDescription:{
        marginTop: 5,
        fontSize: 14,
    }
});

export default styles;