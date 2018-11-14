
//Timeline Actions!
export const GET_TIMELINE = 'GET_TIMELINE';
//Config Actions!
export const CONFIG_NOT_VERIFIED = 'CONFIG_NOT_VERIFIED';
export const CONFIG_DONT_FOLLOW = 'CONFIG_DONT_FOLLOW';
export const CONFIG_HAVE_DEFAULT_PROFILE = 'CONFIG_HAVE_DEFAULT_PROFILE';
export const CONFIG_CONTAINS_LINK = 'CONFIG_CONTAINS_LINK';
export const CONFIG_TEXT_TRUNCATED = 'CONFIG_TEXT_TRUNCATED';

const host = 'http://192.168.1.44:8080';   // 192.168.0.gaston  // 192.168.0.235 santi // 192.168.0.62 cris

export function getTimeline(){
    return (dispatch) => {
        const url = `${host}/timeline?count=5`; //we require 20 tweets

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

export function configNotVerified(){
    return (dispatch) => {
      dispatch({type: CONFIG_NOT_VERIFIED});
    }
  }
  
  export function configDontFollow(){
    return (dispatch) => {
      dispatch({type: CONFIG_DONT_FOLLOW});
    }
  }
  
  export function configHaveDefaultProfile(){
    return (dispatch) => {
      dispatch({type: CONFIG_HAVE_DEFAULT_PROFILE});
    }
  }
  
  export function configContainsLink(){
    return (dispatch) => {
      dispatch({type: CONFIG_CONTAINS_LINK});
    }
  }
  
  export function configTextTruncated(){
    return (dispatch) => {
      dispatch({type: CONFIG_TEXT_TRUNCATED});
    }
  }