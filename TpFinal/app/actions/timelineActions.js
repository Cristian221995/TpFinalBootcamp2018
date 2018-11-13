export const GET_TIMELINE = 'GET_TIMELINE';

const host = 'http://localhost:8080';

export default function getTimeline() {
    return (dispatch) => {

        const url = '${host}/timeline?count=20'; //we require 20 tweets

        fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
            var tweets = responseJson;
            
            dispatch({ type: GET_TIMELINE, payload: tweets}); //dispatch an object (action) whith the type and a Json with the timeline
        })
        .catch((error) => {
            
            console.error(error);
            
        });
    };
}

