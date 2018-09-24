import * as Type from "../actions/types";
const initialState = {    
    isTaskCreated:false,
    error:''
};

const handleEmployeeInfoServerResponseSuccess= (state, action) => {
    let newState = {};
    newState = Object.assign({}, state, {isTaskCreated : true} );
    return {
        ...newState
    };
}

const handleEmployeeInfoServerResponseError= (state, action) => {
    let newState = {};
    newState = Object.assign({}, state, {isTaskCreated : false, error: 'Error Occurred : ' + action.error} );
    return {
        ...newState
    };
}


export default(state = initialState, action) => {
    switch(action.type){
        
    case Type.CREATE_TASK :
        return Object.assign({}, state, {isTaskCreated : false, error:'' });
    case Type.CREATE_TASK_SERVER_RESPONSE_SUCCESS :
        return handleEmployeeInfoServerResponseSuccess(state, action);    
    case Type.CREATE_TASK_SERVER_RESPONSE_ERROR :
        return handleEmployeeInfoServerResponseError(state, action);
    default:
        return { ...state };
    }
};
