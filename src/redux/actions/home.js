import * as Types from './types';



export const getTaskListSuccessResponse = (response) => ({
    type:Types.GET_EMPLOYEE_LIST_SUCCESS_RESPONSE,
    response
})


export const getUpdatedTaskListSuccessResponse = (response) => ({
    type:Types.GET_UPDATED_EMPLOYEE_LIST_SUCCESS_RESPONSE,
    response
})
  
export const getTaskListFromServer = () => ({
    type:Types.GET_EMPLOYEE_LIST
})

export const getTaskListErrorResponse = (response) => ({
    type:Types.GET_EMPLOYEE_LIST_ERROR_RESPONSE,
    response
})

export const getTaskByEmpId =(empId) =>({
    type: Types.GET_TASK_BY_EMPID,
    empId
});
export const taskDetailsSaveToFirebaseDatabase = (task) => {
    return {
        type: Types.TASK_DETAILS_SAVE_DATABASE,
        task
    };
};
export const getTaskDetailsFromFirebase = () => ({
    type:Types.GET_TASK_DETAILS
})