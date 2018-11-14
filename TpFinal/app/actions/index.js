
export const GET_TIMELINE = 'GET_TIMELINE';
const host = 'http://192.168.0.212:8080';   // 192.168.0.gaston  // 192.168.0.235 santi
export function getTimeline(){
    return (dispatch) => {
        const url = `${host}/timeline?count=20`; //we require 20 tweets

        fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
            var tweets = responseJson;
            // console.log(tweets);
            dispatch({ type: GET_TIMELINE, data: tweets}); //dispatch an object (action) whith the type and a Json with the timeline
        })
        .catch((error) => {
            console.error(error);
        });
    };
};