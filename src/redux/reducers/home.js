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
    taskstatus:""//Emp or Business or uscis 
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
      taskName:"From Employee",
      taskActive: true,
      showAccordion:true,
      isTaskCompleted:false,
      isTaskDependent:false,
      dependencyReason:"",
      actionAssignedTo:"Akash",
      verifiedWrkLocation:false,
      offerLetterSigned:false,
      vendorLetterSubmitted:false,
      clientLetterSubmitted:false,
      rolesRespSubmittedByEmp:false,
      rolesRespDraft:"",
      vendorLetterStatus: "approved",
      clientLetterStatus: "waiting",
      submittedAllH4DocsByEmp: false,
      submittedAllH4DepDocsByEmp: false,
      submittedAllH1bDocsByEmp: false,
      empDetails:{
          empId: "",
          firstName: 'itemFN',
          lastName: 'itemLN',
          primaryEmailId: 'test1emp@rsrit.com',
          secondaryEmailId: 'itemLN.itemFN@rsrit.com',
          phoneNo: '1112223333',
          contDetails:{
              address1:'ghvvhvh',
              address2:'ebvhjvf',
              city:'fwgvkvhb',
              state:'bhkqh',
              zipCode:'666644'
          },
          workInfo:{
              workLocation:{
                  address1:'ghvechjg',
                  address2:'qfwehbkfbkh',
                  city:'fewhj',
                  state:'fqbhkj',
                  zipCode:'555544'
              },
          },                
          clientInfo:{
              clientName: 'vggvhj',
              managerName:'bjhww',
              clientAddress:{
                  address1:'qerqert',
                  address2:'ipuo',
                  city:'tytyu',
                  state:'rrrc',
                  zipCode:'888877',
                  },
          },                
          vendorInfo:{                    
              vendorName: 'jdksnfsa',
              vendorContact: '12342134123',
              venContName:'jknlbhjbjk',
              venContPhone:'123412341234',
          },                
          recruiter:{
                  projectStartDate: '',
                  empSignedOfferLetter:false,
                  placementDate: '',
                  urgentSituation:'',
                  applicationType:'H1b',
                  docsCollectingStartDate: '',
                  employerRelationDocuments: '',
                  vendorLetterStatus: '',
                  clientLetterStatus: '',
                  empVerifiedWrkLocation:false,
                  rectrSentPlacDate: '',
                  rectrSentVenAgreeSignedCopy:'',
          },
          taskInfo:{      
              taskPrioirty:"1",
              applicationType:"H1b",
              taskCreatedDate:"",  
              isTaskCreated:true,
              isTaskPending:false,
              isTaskCompleted:false,            
          }
      }
    },
    step2:{
      taskName:"From Recruiter",
      taskActive: true,
      isTaskCompleted:false,
      isTaskDependent:false,
      showAccordion:true,
      dependencyReason:"",
      actionAssignedTo:"Akash",                           
      empSignedOfferLetter:"",
      projectStartDate:"",
      placementDate:"",
      applicationType:"type1",
      urgentSituation:"",                            
      docsCollectingStartDate:"",
      employerRelationDocuments: "yes",
      vendorLetterStatus: "approved",
      clientLetterStatus: "waiting",
      empVerifiedWrkLocation:"",
      rectrSentPlacDet:"",
      rectrSentVenAgreeSignedCopy:"",
    },
    step3:{
      taskName:"LCA",
      taskActive: true,
      isTaskCompleted:false,
      isTaskDependent:false,
      showAccordion:true,
      dependencyReason:"",
      actionAssignedTo:"Akash",
      dependencies:"",
      empVerWorkLocation:"",
      tmStEmpVerWorkLocation:"",
      tmEdEmpVerWorkLocation:"",
      rolesRespSubmittedByEmp:true,
      tmStRolesRespSubmittedByEmp:"",
      tmEdRolesRespSubmittedByEmp:"",
      rolesRespVerified:true,
      tmStRolesRespVerified:"",
      tmEdRolesRespVerified:"",
      infoUptdToPortalByBiz:true,
      tmStInfoUptdToPortalByBiz:"",
      tmEdInfoUptdToPortalByBiz:"",
      reviewUnCertLCA:false,
      tmStReviewUnCertLCA:"",
      tmEdReviewUnCertLCA:"",
      lcaFiledForCert:false,
      tmStLcaFiledForCert:"",
      tmEdLcaFiledForCert:"",
      appliedDateLCA:  "",
      approvedDateLCA: "",
      expectedApprovalDate:"", 
      taskCompletedTotalTime:"",
      taskStartedTotalTime:"",
      lcaSentToEmployee:true     
    },
    step4:{
      taskName:"H1bDocumentsPrep",
                        taskActive: true,
                        actionAssignedTo:"Akash",
                        isTaskCompleted:false,
                        isTaskDependent:false,
                        showAccordion:true,
                        dependencyReason:"",
                        dependencies:"",
                        recvdVendorLtrFrmEmp: true,  
                        tmStRecvdVendorLtrFrmEmp:"",  
                        tmEdRecvdVendorLtrFrmEmp:"",        
                        recvdClntLtrFrmEmp: true,
                        tmStRecvdClntLtrFrmEmp:"",
                        tmEdRecvdClntLtrFrmEmp:"",
                        otherPendngDocs:"",
                        tmStOtherPendngDocs:"",
                        tmEdOtherPendngDocs:"",        
                        jobTitleIsCorrect:"",
                        empHasDependents:"",
                        recvdAllH4DocsFrmEmp: false,
                        tmStRecvdAllH4DocsFrmEmp:"",
                        tmEdRecvdAllH4DocsFrmEmp:"",
                        recvdAllH4DepDocsFrmEmp: false,
                        tmStRecvdAllH4DepDocsFrmEmp:"",
                        tmEdRecvdAllH4DepDocsFrmEmp:"",  
                        recvdAllH1bDocsFrmEmp: false,
                        tmStRecvdAllH1bDocsFrmEmp:"",
                        tmEdRecvdAllH1bDocsFrmEmp:"",  
                        anyPendingDocuments:false,
                        pendingDocumentsList:"",
                        dueDateFrPendgDocs:"",  
                        hrRecvdAllDocsFromEmp: true,
                        tmStHrRecvdAllDocsFromEmp:"",
                        tmEdHrRecvdAllDocsFromEmp:"",
                        hrApprovesTheDocsReceived:false,
                        tmStHrHRApprovesTheDocsReceived:"",
                        tmEdHrHRApprovesTheDocsReceived:"",
                        hrSentDocsToAttorney:false,
                        tmStHrHRSentDocsToAttorney:"",
                        tmEdHrHRSentDocsToAttorney:"",         
    },
    step5:{
      taskName:"Attorney",
      taskActive: true,
      actionAssignedTo:"Akash",
      isTaskCompleted:false,
      isTaskDependent:false,
      showAccordion:true,
      dependencyReason:"",
      dependencies:"",
      attroneyReceivedAllDocsFromBusiness:false,
      tmStAttroneyReceivedAllDocsFromBusiness:"",
      tmEdAttroneyReceivedAllDocsFromBusiness:"",
      attroneyReviewedAllDocsFromBusiness:true,
      tmStAttroneyReceivedAllDocsFromBusiness:"",
      tmEdAttroneyReceivedAllDocsFromBusiness:"",
      attorneyApprovesDocsReceivd:false,
      tmStAttorneyApprovesDocsReceivd:"",
      tmEdAttorneyApprovesDocsReceivd:"",
      anyPendingDocuments:false,
      pendingDocumentsList:"",
      dueDateFrPendgDocs:"",  
      attroneyFilesPetiton:true,
      tmStAttroneyFilesPetiton:"",
      tmEdAttroneyFilesPetiton:"",
      attroneyUpdatedFedexNumber:false,
      tmStAttroneyUpdatedFedexNumber:"",
      tmEdAttroneyUpdatedFedexNumber:"",
      mailTrackingNumberOfPetition:"",
      petitionReceiptNumber:"",
      isPremiumProcessing:false,
      expectedStatusChangeDate:"",
    },
    step6:{
      taskName:"PetitionStatus",
      taskActive: true,
      isTaskCompleted:false,
      isTaskDependent:false,
      showAccordion:true,
      dependencyReason:"",
      actionAssignedTo:"Akash",
      dependencies:"",
      petitionStatusChangeDate:"",
      isPetitionStatusChanged:false,
      isPetitionApproved:false,
      isRFEReceivedForPetition:false,
      receivedRFEReason:"",
      isRFEAnswered:false,
      isRFEApproved:false,
      isRFEDocsSent:false   
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

const handleSignupServerResponseError = (state, action) => {
  let newState = {};
  return {...newState};
}

const handleSignupServerResponseSuccess = (state, action) => {
  let newState = {};
  return {...newState};
}
const getTaskByEmpId = (state, action) => {
  let newState = {};
  newState = Object.assign({}, state, { taskSelected : Object.assign( taskObject, state.taskList.find((item) => {      
            return item.empDetails.empId.toString() === action.empId.toString()
        }))
    });
  return {...newState};
}

export default (state = initialState, action) => {
    switch(action.type){
      case Type.GET_EMPLOYEE_LIST :
           return { ...state};
      case Type.SIGNUP_USER_SERVER_RESPONSE_ERROR :
            return handleSignupServerResponseError(state, action);
      case Type.SIGNUP_USER_SERVER_RESPONSE_SUCCESS :
            return handleSignupServerResponseSuccess(state, action);        
      case Type.SIGNUP_USER :
            return {...state};
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