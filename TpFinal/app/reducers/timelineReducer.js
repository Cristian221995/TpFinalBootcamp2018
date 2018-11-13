import { GET_TIMELINE } from "../actions/timelineActions.js";

let timelineState = {
    data: [],
    loading: true,
};

const TimelineReducer = (state = timelineState, action) => { //state = previous state

    switch(action.type) {
        case GET_TIMELINE:
            state = Object.assign({}, ...state, { data: action.payload, loading: false});
            return state;
        default:
            return state;
    }
};

export default TimelineReducer;