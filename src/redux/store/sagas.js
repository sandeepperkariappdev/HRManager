import { takeEvery, call, put, select, take, fork, all, takeLatest} from 'redux-saga/effects';
import * as Types from '../actions/types';
//import {getCreateIncTranSucResp, getUpdatedIncTranSucResp, getIncTranListSucResp}  from "../actions/Incentives";
//import * as API from '../config';
import { eventChannel } from 'redux-saga';
import {loginUserSuccess, loginUserFailure, validateUserSuccess, getBusinessUsersListSuccessResponse, validateUserFailure} from '../actions/auth';
import {createTaskServerSuccess, createTaskServerFailure} from '../actions/createTask';
import {getTaskListSuccessResponse,getUpdatedTaskListSuccessResponse, createBusinessuserServerSuccess, createBusinessuserServerFailure} from '../actions/home';
//import { db, auth } from '../firebase';
import firebase from '../../firebase';


const database = firebase.database();


const LoginUserServiceCall  = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password);
}
function* fetchLoginUser(action){
  try {
    const response = yield call(LoginUserServiceCall, action.username, action.password);
    yield put(loginUserSuccess(response));
  } catch (error) {
    yield put(loginUserFailure(error))
  }
}

const LogoutUserServiceCall  = (userId) => {
  return firebase.auth().signOut(userId);
}
function* fetchLogoutUser(action){
  try {
    const response = yield call(LogoutUserServiceCall, action.userId);
    const result = yield response.json();
    if (result.error) {
      yield put({ type: Types.LOGOUT_USER_SERVER_REPONSE_ERROR, error: result.error });
    } else {
      yield put({ type: Types.LOGOUT_USER_SERVER_RESPONSE_SUCCESS, result });
    }
  } catch (error) {
    yield put({ type: Types.SERVER_CALL_FAILED, error: error.message });
  }
}



function insert(item) {
    const newItemRef = database.ref('tasks').push();
    return newItemRef.set(item);
}
function createEventChannel() {
    const listener = eventChannel(
        emit => {
            database.ref('tasks')
            .on('child_added', data => emit(data.val()));
                return () => database.ref('tasks').off(listener);
        }
    );

    return listener;
};

function* updatedItemSaga() {
    const updateChannel = createEventChannel();
    while(true) {
        const response = yield take(updateChannel);
        yield put(getUpdatedTaskListSuccessResponse(response));
    }
}

function* createTaskItemSaga() {
    const action = yield take(Types.CREATE_TASK);
    try {
        const response = yield call(insert, action.task);
        yield put(createTaskServerSuccess(response));
        //yield put({ type: Types.CREATE_TASK_SERVER_RESPONSE_SUCCESS, response });
    } catch (error) {
      yield put(createTaskServerFailure(error));
        // do something with the error, such as dispatching an error action with yield put
    }
}


function insertNewBusinessuser(item) {
  const newItemRef = database.ref('businessusers').push();
  return newItemRef.set(item);
}

function* signupBusinessUserItemSaga() {
  const action = yield take(Types.SIGNUP_USER);
  try {
      const response = yield call(insertNewBusinessuser, action.user);
      yield put(createBusinessuserServerSuccess(response));
  } catch (error) {
    yield put(createBusinessuserServerFailure(error));
  }
}

function createEventChannelToGetData(){
  const listener = eventChannel(
      emit => {
          database.ref('tasks')
          .on('value', data => emit(data.val()));
              return () => database.ref('tasks').off(listener);
      }
  );
  return listener;
}

// Get Incentive Transaction List
function* getTasksList(){
  const getDataChannel = createEventChannelToGetData();
  while(true) {
      const item = yield take(getDataChannel); 
      yield put(getTaskListSuccessResponse(item));    
  }
}

function createEventChannelToGetBusinessUsers(){
  const listener = eventChannel(
      emit => {
          database.ref('businessusers')
          .on('value', data => emit(data.val()));
              return () => database.ref('businessusers').off(listener);
      }
  );
  return listener;
}

// Get Incentive Transaction List
function* getBusinessUsersList(){
  const getDataChannel = createEventChannelToGetBusinessUsers();
  while(true) {
      const item = yield take(getDataChannel); 
      yield put(getBusinessUsersListSuccessResponse(item));    
  }
}


const insertEmployeeInfoRegistrationData = (task) => {
    const tasksRef = database.ref('tasks').push();
    return tasksRef.set({task: task});
}

function* submitCreateTaskToServer(action){
  try{
    const response = yield call(insertEmployeeInfoRegistrationData, action.task);    
    yield put(createTaskServerSuccess(response, action));
  } catch (error){
    yield put(createTaskServerFailure(error));
  }
}

function* submitSelectedTask(action){
  const tasksDb = database.ref('tasks').orderByChild("empId").equalTo(action.task.empId);
  return tasksDb.once("child_added", function(snapshot){
        console.log(snapshot.val());
        snapshot.ref.update(action.task);
  });
  // return tasksDb.on('value', function(snapshot){
  //   //snapshot would have list of NODES that satisfies the condition
  //   console.log(snapshot.val());
  //   snapshot.ref.update(action.task);
  // });
}
function createEventChannelToFindUserInEmpList(loggedInUserEmail){
    const listener = eventChannel(emit => {      
        database.ref('tasks').orderByChild("primaryEmailId").equalTo(loggedInUserEmail)
        .on('value', (data) => {
          if(data.val()){
            return emit(data.val())
          } else{//if Business User, emp is not found
            return emit({});
          }          
        });
            return () => database.ref('tasks').off(listener);
    });
    return listener; 
}

function* validateLoggedInUser(action){
  const getDataChannel = createEventChannelToFindUserInEmpList(action.response.user.email);
  while(true) {
      const item = yield take(getDataChannel); 
      yield put(validateUserSuccess(item));    
  }  
} 

export default function* rootSaga(params){
  yield takeEvery(Types.LOGIN_USER, fetchLoginUser);  
  yield takeEvery(Types.LOGOUT_USER, fetchLogoutUser);
  yield all([takeLatest(Types.GET_EMPLOYEE_LIST, getTasksList)]);
  yield all([takeLatest(Types.TASK_DETAILS_SAVE_DATABASE, submitSelectedTask)]);
  yield all([takeLatest(Types.GET_BUSINESS_USERS_LIST, getBusinessUsersList)]);
  yield fork(createTaskItemSaga);
  yield fork(signupBusinessUserItemSaga);  
  yield all([takeLatest(Types.LOGIN_USER_SERVER_RESPONSE_SUCCESS,  validateLoggedInUser)]);
}
