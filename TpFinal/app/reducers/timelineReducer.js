import { GET_TIMELINE } from "../actions/timelineActions.js";

let timelineState = {
    tweets: [],
    loading: true,
};

const TimeLineReducer = (state = timelineState, action) => {

    switch(action.type) {
        case GET_TIMELINE:
            state = Object.assign({}, state, { tweets: action.payload, loading: false});
            return state;
        default:
            return state;
    }
};

export default TimeLineReducer;