import * as Types from "../actions/types";

const initialUserObj = {
  "pending": false,
  "loggedIn": false,
  "isValidToken": false,
  "user":{
           "email": "testbiz@rsrit.com",
           "displayName": "",
           "registered": true,
           "refreshToken": "",
           "expiresIn": "3600",
           "emailVerified": false,
           "validSince": "",
           "disabled": false,
           "lastLoginAt": "",
           "createdAt": ""
        }

};

const handleLoginServerResponseSuccess = (state, action) => {
  let newState = {...state};
  if(action.response !== undefined){
    newState = Object.assign({}, state, {"user" : Object.assign({}, state.user, action.response),"loggedIn" :true,"isValidToken":true, "pending":false })
    window.localStorage.userLoginToken = action.response.refreshToken;
  }
  return {...newState};
}
const handleLoginServerResponseError = (state, action) => {
  let newState = {...state};
  return {...newState};
}
const handleLogoutServerResponseSuccess = (state, action) => {
  let newState = {...state};
  newState = Object.assign({}, state, {"user" : Object.assign({},{}),"loggedIn" :false,"isValidToken":false })
  window.localStorageremoveItem("userLoginToken");
  return {...newState};
}
const handleLogoutServerResponseError = (state, action) => {
  let newState = {...state};
  newState = Object.assign({}, state, {"user" : Object.assign({},{}),"loggedIn" :false,"isValidToken":false })
  window.localStorageremoveItem("userLoginToken");
  return {...newState};
}

export default (state = initialUserObj, action) => {
    switch(action.type){
        case Types.LOGIN_USER :
            return Object.assign({}, state,{ "loggedIn" :false,"isValidToken":false, "pending":true});
        case Types.LOGOUT_USER :
                return {...state};
        case Types.LOGOUT_USER_SERVER_RESPONSE_SUCCESS :
                return {...state};
        case Types.LOGIN_USER_SERVER_REPONSE_ERROR :
                return handleLoginServerResponseError(state, action);
        case Types.LOGIN_USER_SERVER_RESPONSE_SUCCESS :
                return handleLoginServerResponseSuccess(state, action);
        case Types.SERVER_CALL_FAILED :
                return {...state};
        case Types.LOGOUT_USER_SERVER_REPONSE_ERROR :
                return {...state};
        case Types.VALIDATE_TOKEN :
            return { ...state};
        case Types.IS_USER_LOGGED_IN :
            return { ...state};
        default :
            return state;
    }
}
