//  const DATA_AVAILABLE = 'DATA_AVAILABLE';
export const GET_TIMELINE = 'GET_TIMELINE';
// Import the sample data
import Data from '../instructions.json';


// function getData() {
//     return (dispatch) => { 

//         //Make API Call
//         //For this example, I will be using the sample data in the json file
//         //delay the retrieval [Sample reasons only]
//         setTimeout(() => {
//             const data  = Data.instructions;
//             dispatch({type: DATA_AVAILABLE, data:data});
//         }, 2000);

//     };
// }

export const getTimeline = () => {
    const host = 'http://192.168.0.212:8080';
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
};