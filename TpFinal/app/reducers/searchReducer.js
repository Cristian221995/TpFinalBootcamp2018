import { GET_TRENDS } from "../actions/index";

let searchState = {
    data: [],
    loading: true,
};

const SearchReducer = (state = searchState, action) => { //state = previous state

    switch(action.type) {
        case GET_TRENDS:
            state = Object.assign({}, ...state, { data: action.data, loading: false});
            return state;
        default:
            return state;
    }
};

export default SearchReducer;