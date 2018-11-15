import { GET_TIMELINE, GET_MORE_TWEETS } from "../actions/index";

let timelineState = {
    data: [],
    loading: true,
};

const TimelineReducer = (state = timelineState, action) => { //state = previous state

    switch(action.type) {
        case GET_TIMELINE:
            state = Object.assign({}, state, { data: action.data, loading: false});
            return state;
        case GET_MORE_TWEETS:
            state = Object.assign({}, state, { data: state.data.concat(action.data), loading: false });
            return state;
        default:
            return state;
    }
};

export default TimelineReducer;