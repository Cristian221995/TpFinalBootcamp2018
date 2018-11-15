import {
    CONFIG_NOT_VERIFIED,
    CONFIG_DONT_FOLLOW,
    CONFIG_HAVE_DEFAULT_PROFILE,
    CONFIG_CONTAINS_LINK,
    CONFIG_TEXT_TRUNCATED
} from '../actions/index';

let configState = {
    notVerified: false,
    notFollow: false,
    defaultProfile: false,
    containsLinks: false,
    textTruncated: false,
    
};

const ConfigReducer = (state = configState, action) => { //state = previous state

    switch(action.type) {
        case CONFIG_NOT_VERIFIED:
            state = Object.assign({}, state, { notVerified: !state.notVerified});
            return state;
        case CONFIG_DONT_FOLLOW:
            state = Object.assign({}, state, { notFollow: !state.notFollow});
            return state;
        case CONFIG_HAVE_DEFAULT_PROFILE:
            state = Object.assign({}, state, { defaultProfile: !state.defaultProfile});
            return state;
        case CONFIG_CONTAINS_LINK:
            state = Object.assign({}, state, { containsLink: !state.containsLinks});
            return state; 
        case CONFIG_TEXT_TRUNCATED:
            state = Object.assign({}, state, { textTruncated: !state.textTruncated});
            return state;   
            
        default:
            return state;
    }
};

export default ConfigReducer;