import * as Types from './types';

export const createTaskSubmit= (task) => {
    return {
        type: Types.CREATE_TASK,
        task
    };
};

export const createTaskServerSuccess = (response, action) => ({
    type: Types.CREATE_TASK_SERVER_RESPONSE_SUCCESS,
    response,
    action
  })
  
  export const createTaskServerFailure = (response) => ({
    type: Types.CREATE_TASK_SERVER_RESPONSE_ERROR,
    response
  })