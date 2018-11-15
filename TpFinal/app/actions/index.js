
//Timeline Actions:
export const GET_TIMELINE = 'GET_TIMELINE';
export const GET_MORE_TWEETS = 'GET_MORE_TWEETS';
//Config Actions!
export const CONFIG_NOT_VERIFIED = 'CONFIG_NOT_VERIFIED';
export const CONFIG_DONT_FOLLOW = 'CONFIG_DONT_FOLLOW';
export const CONFIG_HAVE_DEFAULT_PROFILE = 'CONFIG_HAVE_DEFAULT_PROFILE';
export const CONFIG_CONTAINS_LINK = 'CONFIG_CONTAINS_LINK';
export const CONFIG_TEXT_TRUNCATED = 'CONFIG_TEXT_TRUNCATED';
//Trends Actions:
export const GET_TRENDS = "GET_TRENDS"

const host = 'http://192.168.0.212:8080';   // 192.168.0.212 gaston  // 192.168.0.235 santi // 192.168.0.62 cris


export function getTimeline(){
    return (dispatch) => {
        const url = `${host}/timeline?count=50`; //we require 50 tweets

        fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
            var tweets = responseJson;
            dispatch({ type: GET_TIMELINE, data: tweets}); //dispatch an object (action) whith the type and a Json with the timeline
        })
        .catch((error) => {
            console.error(error);
        });
    };
};

export function getMoreTweets(){
  return (dispatch) => {
      const url = `${host}/timeline?count=50`; //we require 50 tweets

      fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
          var tweets = responseJson;
          dispatch({ type: GET_MORE_TWEETS, data: tweets}); //dispatch an object (action) whith the type and a Json with the timeline
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

export function getTrends(){
    return (dispatch) => {
        const url = `${host}/trends?id=23424747`; 

        fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
            var trends = responseJson;
            // console.log(tweets);
            dispatch({ type: GET_TRENDS, data: trends}); //dispatch an object (action) whith the type and a Json with the timeline
        })
        .catch((error) => {
            console.error(error);
        });
    };
};