export const GET_TIMELINE = 'GET_TIMELINE';

const host = 'http://localhost:8080';

export function getTimeline() {
    return (dispatch) => {

        const url = '${host}/timeline?count=20';

        fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
            var tweets = responseJson;
            dispatch({ type: GET_TIMELINE, payload: tweets});
        })
        .catch((error) => {
            console.error(error);
        });
    };
}