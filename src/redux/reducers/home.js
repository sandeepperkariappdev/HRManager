import * as Type from "../actions/types";
  
const taskObject = {
  comments:[{
    taskMsg:"",
    empMsg:"",
    businessMsg:"",
    createdAt:"",
    loggedInUser:"",
    taskAssignedTo:"",
    taskToBeCmpDueDate:"",
    taskCmpExpDueDate:"",
  }],
  taskInfo:{
    taskCompleted:"",
    taskPrioirty:"1",
    applicationType:"",
    taskCreatedDate:"", 
    isTaskCreated:"",
    isTaskPending:"",
    isTaskCompleted:"",   
  },
  empStatus:{
    curStatusMsg:"",
    curTargetCmpDate:"",
    nextStepMsg:"",  
    expTarCmpDate:"",
    toCmpDate:"",
    expCmpDate:"",
    toSendEmail:[],
    taskPriority:"",
    isHighPriority:"",
    taskStage:""
  },
  business:{
    step1:{
      taskName:"Employee",
      taskActive:"true",
      actionAssignedTo:"",
    },
    step2:{
      taskName:"Recruiter",
      taskActive:"true",
      actionAssignedTo:"",
      projectStartDate:"",
      vendorAgreement: "",
      empSignedOfferLetter:"",
      placementDate:"",
      urgentSituation:"",
      applicationType:"",
      docsCollectingStartDate:"",
      employerRelationDocuments: "",
      vendorLetterStatus: "",
      clientLetterStatus: "",
      empVerifiedWrkLocation:"",
      rectrSentPlacDet:"",
      rectrSentVenAgreeSignedCopy:"",
    },
    step3:{
      taskName:"LCA",
      taskActive:"true",
      actionAssignedTo:"",
      dependencies:"",
      empVerWorkLocation:"",
      tmStEmpVerWorkLocation:"",
      tmEdEmpVerWorkLocation:"",
      rolesRespSubmittedByEmp:false,
      tmStRolesRespSubmittedByEmp:"",
      tmEdRolesRespSubmittedByEmp:"",
      rolesRespVerified:false,
      tmStRolesRespVerified:"",
      tmEdRolesRespVerified:"",
      infoUptdToPortalByBiz:false,
      tmStInfoUptdToPortalByBiz:"",
      tmEdInfoUptdToPortalByBiz:"",
      reviewUnCertLCA:false,
      tmStReviewUnCertLCA:"",
      tmEdReviewUnCertLCA:"",
      lcaFiledForCert:"",
      tmStLcaFiledForCert:"",
      tmEdLcaFiledForCert:"",
      appliedDateLCA: "",
      approvedDateLCA: "",
      expectedApprovalDate:"", 
      taskCompletedTotalTime:"",
      taskStartedTotalTime:"",
      lcaSentToEmployee:false    
    },
    step4:{
      taskName:"H1bDocumentsPrep",
      taskActive:"true",
      actionAssignedTo:"",
      dependencies:"",
      recvdVendorLtrFrmEmp:"",  
      tmStRecvdVendorLtrFrmEmp:"",  
      tmEdRecvdVendorLtrFrmEmp:"",        
      recvdClntLtrFrmEmp:"",
      tmStRecvdClntLtrFrmEmp:"",
      tmEdRecvdClntLtrFrmEmp:"",
      otherPendngDocs:"",
      tmStOtherPendngDocs:"",
      tmEdOtherPendngDocs:"",        
      jobTitleIsCorrect:"",
      empHasDependents:"",
      recvdAllH4DocsFrmEmp:"",
      tmStRecvdAllH4DocsFrmEmp:"",
      tmEdRecvdAllH4DocsFrmEmp:"",
      recvdAllH4DepDocsFrmEmp:"",
      tmStRecvdAllH4DepDocsFrmEmp:"",
      tmEdRecvdAllH4DepDocsFrmEmp:"",  
      recvdAllH1bDocsFrmEmp:"",
      tmStRecvdAllH1bDocsFrmEmp:"",
      tmEdRecvdAllH1bDocsFrmEmp:"",        
    },
    step5:{
      taskName:"H1bDocumentsHRReview",
      taskActive:"true",
      actionAssignedTo:"",
      dependencies:"",
      hrRecvdAllDocsAndReviewdFromEmp:"",
      tmStHrRecvdAllDocsAndReviewdFromEmp:"",
      tmEdHrRecvdAllDocsAndReviewdFromEmp:"",
    },
    step6:{
      taskName:"AttorneyReceivedDocs",
      taskActive:"true",
      actionAssignedTo:"",
      dependencies:"",
      attroneyReceivedAllDocsFromBusiness:"",
      tmStAttroneyReceivedAllDocsFromBusiness:"",
      tmEdAttroneyReceivedAllDocsFromBusiness:"",
    },
    step7:{
      taskName:"AttorneyReviewedDocs",
      taskActive:"true",
      actionAssignedTo:"",
      dependencies:"",
      attroneyReviewedAllDocsFromBusiness:"",
      tmStAttroneyReceivedAllDocsFromBusiness:"",
      tmEdAttroneyReceivedAllDocsFromBusiness:"",
    },
    step8:{
      taskName:"AttorneyFilesPetiton",
      taskActive:"true",
      actionAssignedTo:"",
      dependencies:"",
      attroneyFilesPetiton:"",
      tmStAttroneyFilesPetiton:"",
      tmEdAttroneyFilesPetiton:"",
      attroneyUpdatedFedexNumber:"",
      tmStAttroneyUpdatedFedexNumber:"",
      tmEdAttroneyUpdatedFedexNumber:"",
    },
  }
};

const initialState = {
  isServerRespReceived:false,
  taskList:[],
  error: '',
  taskSelected:{}
}

const handleEmployeeListServerResponseSuccess = (state, action) => {
  let newState = {...state};
  newState = Object.assign({}, state, { isServerRespReceived: true, taskList: Object.assign([], Object.values(action.response)) });
  //newState = Object.assign({}, state, { isServerRespReceived: true, taskList: [action.response] });
  return {...newState};
}

const handleUpdatedEmployeeListServerResponseSuccess = (state, action) => {
  let newState = {...state};
  //newState = Object.assign({}, state, { isServerRespReceived: true, taskList: Object.assign([], Object.values(action.response)) });
  newState = Object.assign({}, state, { isServerRespReceived: true, taskList: [action.response] });
  return {...newState};
}

const handleEmployeeListServerResponseError = (state, action) => {
  let newState = {};
  newState = Object.assign({}, state, { isServerRespReceived: false, taskList: [], error: 'Error Emp Data Server: ' + action.error});
  return {...newState};
}

const getTaskByEmpId = (state, action) => {
  let newState = {};
  newState = Object.assign({}, state, { taskSelected : Object.assign( taskObject, state.taskList.find((item) => {      
            return item.empId.toString() === action.empId.toString()
        }))
    });
  return {...newState};
}

export default (state = initialState, action) => {
    switch(action.type){
      case Type.GET_EMPLOYEE_LIST :
           return { ...state};
      case Type.GET_TASK_BY_EMPID :
           return getTaskByEmpId(state, action);
      case Type.GET_UPDATED_EMPLOYEE_LIST_SUCCESS_RESPONSE:
          return handleUpdatedEmployeeListServerResponseSuccess(state, action);
      case Type.GET_EMPLOYEE_LIST_SUCCESS_RESPONSE :
           return handleEmployeeListServerResponseSuccess(state, action);
      case Type.GET_EMPLOYEE_LIST_ERROR_RESPONSE :
           return handleEmployeeListServerResponseError(state, action);
      case Type.TASK_DETAILS_SAVE_DATABASE:
          return { ...state};
      default :
            return { ...state};
    }
}