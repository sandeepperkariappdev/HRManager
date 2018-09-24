import React, {Component} from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { Steps, Timeline , Button, message, Card} from 'antd';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { getTaskDetailsFromFirebase } from "../../redux/actions/home";

const Step = Steps.Step;

// const steps = [{
//     title: 'First',
//     content: 'First-content',
//   }, {
//     title: 'Second',
//     content: 'Second-content',
//   }, {
//     title: 'Last',
//     content: 'Last-content',
//   }];

class EmpStatus extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            // current: 0,
            // taskName:"LCA",
            // taskActive:"true",
            // actionAssignedTo:"Akash",
            // dependencies:"yes",
            // rolesRespSubmittedByEmp:true,
            // tmStRolesRespSubmittedByEmp:"yes",
            // tmEdRolesRespSubmittedByEmp:"yes",
            // rolesRespVerified:true,
            // tmStRolesRespVerified:"yes",
            // tmEdRolesRespVerified:"yes",
            // infoUptdToPortalByBiz:true,
            // tmStInfoUptdToPortalByBiz:"yes",
            // tmEdInfoUptdToPortalByBiz:"yes",
            // reviewUnCertLCA:false,
            // tmStReviewUnCertLCA:"yes",
            // tmEdReviewUnCertLCA:"yes",
            // lcaFiledForCert: false,
            // tmStLcaFiledForCert:"yes",
            // tmEdLcaFiledForCert:"yes",
            // appliedDateLCA: moment('11/08/2017'),
            // approvedDateLCA: moment('11/08/2017'),
            // expectedApprovalDate:moment('11/08/2017'),
            // taskCompletedTotalTime:moment().valueOf('11/08/2017'),
            // taskStartedTotalTime:moment().valueOf('11/08/2017'),
            // lcaSentToEmployee:true,
                current: 0,
                business:{
                step1:{
                  taskName:"Employee",
                  taskActive: true,
                  actionAssignedTo:"Akash",
                },
                step2:{
                  taskName:"Recruiter",
                  taskActive: true,
                  actionAssignedTo:"Akash",
                  projectStartDate:"",
                  empSignedOfferLetter:"",
                  placementDate:"",
                  urgentSituation:"",
                  applicationType:"type1",
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
                  appliedDateLCA: moment('11/08/2017'),
                  approvedDateLCA: moment('11/08/2017'),
                  expectedApprovalDate:"", 
                  taskCompletedTotalTime:"",
                  taskStartedTotalTime:"",
                  lcaSentToEmployee:true    
                },
                step4:{
                  taskName:"H1bDocumentsPrep",
                  taskActive: true,
                  actionAssignedTo:"Akash",
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
                },
                step5:{
                  taskName:"H1bDocumentsHRReview",
                  taskActive: true,
                  actionAssignedTo:"Akash",
                  dependencies:"",
                  hrRecvdAllDocsAndReviewdFromEmp: true,
                  tmStHrRecvdAllDocsAndReviewdFromEmp:"",
                  tmEdHrRecvdAllDocsAndReviewdFromEmp:"",
                },
                step6:{
                  taskName:"AttorneyReceivedDocs",
                  taskActive: true,
                  actionAssignedTo:"Akash",
                  dependencies:"",
                  attroneyReceivedAllDocsFromBusiness:false,
                  tmStAttroneyReceivedAllDocsFromBusiness:"",
                  tmEdAttroneyReceivedAllDocsFromBusiness:"",
                },
                step7:{
                  taskName:"AttorneyReviewedDocs",
                  taskActive: true,
                  actionAssignedTo:"Akash",
                  dependencies:"",
                  attroneyReviewedAllDocsFromBusiness:true,
                  tmStAttroneyReceivedAllDocsFromBusiness:"",
                  tmEdAttroneyReceivedAllDocsFromBusiness:"",
                },
                step8:{
                  taskName:"AttorneyFilesPetiton",
                  taskActive: true,
                  actionAssignedTo:"Akash",
                  dependencies:"",
                  attroneyFilesPetiton:true,
                  tmStAttroneyFilesPetiton:"",
                  tmEdAttroneyFilesPetiton:"",
                  attroneyUpdatedFedexNumber:false,
                  tmStAttroneyUpdatedFedexNumber:"",
                  tmEdAttroneyUpdatedFedexNumber:"",
                },
            }
         }
    }

    componentDidMount(){
        this.props.dispatch(getTaskDetailsFromFirebase());         
    } 

    next() {
        const current = this.state.current + 1;
        this.setState({ current });
    }
    
    prev() {
    const current = this.state.current - 1;
    this.setState({ current });
    }

    render() { 
        const { 
            current,
            business,
            } = this.state;

        const steps = [{
            title: 'First',
            content: 'First-content',
          }, {
            title: 'Second',
            content: 'Second-content',
          },
          {
            title: 'Third',
            content: 'Third-content',
          },
          {
            title: 'Fourth',
            content: 'Fourth-content',
          },
          {
            title: 'Fifth',
            content: 'Fifth-content',
          },
          {
            title: 'Sixth',
            content: 'Sixth-content',
          },
          {
            title: 'Seventh',
            content: 'Seventh-content',
          },
          {
            title: 'Eighth',
            content: 'Eighth-content',
          },
        ];
          
        return ( 
            <div>
                        <h2>EmpStatusUpdates</h2>

                        <Button type="primary">
                            <Link to={{pathname: "/main"}}>Back to Main</Link>
                        </Button>

                        <Steps current={current}>
                            {steps.map(item => <Step key={item.title} title={item.title} />)}
                        </Steps>
                        <div className="steps-content">    

                            {(current === 0) &&(<Card><Timeline>
                                <Timeline.Item>Is Employee Information Submitted?: <b>{business.step1.taskActive ? 'NOT COMPLETED': 'COMPLETED' }</b></Timeline.Item>
                                </Timeline></Card>)}

                            {(current === 1) &&(<Card><Timeline>
                                <Timeline.Item>Is Recruiter Information Submitted?: <b>{business.step2.taskActive ? 'NOT COMPLETED': 'COMPLETED' }</b></Timeline.Item>
                                </Timeline></Card>)}

                            {(current === 2) &&(<Card><Timeline>
                                <Timeline.Item>Roles Responsibilities Submitted by Employee: <b>{business.step3.rolesRespSubmittedByEmp ? 'COMPLETED': 'NOT COMPLETED' }</b></Timeline.Item>
                                <Timeline.Item>Roles Responsibilities Verified: <b>{business.step3.rolesRespVerified? 'COMPLETED': 'NOT COMPLETED' }</b></Timeline.Item>
                                <Timeline.Item>Info Updated to portal by Business:<b> {business.step3.infoUptdToPortalByBiz? 'COMPLETED': 'NOT COMPLETED' }</b></Timeline.Item>
                                <Timeline.Item>Review of Uncertified LCA: <b>{business.step3.reviewUnCertLCA? 'COMPLETED': 'NOT COMPLETED' }</b></Timeline.Item>
                                <Timeline.Item>LCA Filed for Certification:<b> {business.step3.lcaFiledForCert? 'COMPLETED': 'NOT COMPLETED'}</b></Timeline.Item>
                                <Timeline.Item>LCA Sent to Employee: <b>{business.step3.lcaSentToEmployee? 'COMPLETED': 'NOT COMPLETED' }</b></Timeline.Item>
                                </Timeline></Card>)}
                                
                            {(current === 3) &&(<Timeline>
                                <Timeline.Item>Employee's Vendor Letter Received?: <b>{business.step4.recvdVendorLtrFrmEmp ? 'COMPLETED': 'NOT COMPLETED' }</b></Timeline.Item>
                                <Timeline.Item>Employee's Client Letter Received?: <b>{business.step4.recvdClntLtrFrmEmp ? 'COMPLETED': 'NOT COMPLETED' }</b></Timeline.Item>
                                <Timeline.Item>All of the Employee's H4 Documents Received?: <b>{business.step4.recvdAllH4DocsFrmEmp ? 'COMPLETED': 'NOT COMPLETED' }</b></Timeline.Item>
                                <Timeline.Item>All of the Employee's H4 Dep Documents Received?: <b>{business.step4.recvdAllH4DepDocsFrmEmp ? 'COMPLETED': 'NOT COMPLETED' }</b></Timeline.Item>
                                <Timeline.Item>All of the Employee's H1 Documents Received?: <b>{business.step4.recvdAllH1bDocsFrmEmp ? 'COMPLETED': 'NOT COMPLETED' }</b></Timeline.Item>
                                </Timeline>)}

                            {(current === 4) &&(<Timeline>
                                <Timeline.Item>Employee's Documents Reviewed by HR?: <b>{business.step5.hrRecvdAllDocsAndReviewdFromEmp ? 'COMPLETED': 'NOT COMPLETED' }</b></Timeline.Item>
                                </Timeline>)}

                            {(current === 5) &&(<Timeline>
                                <Timeline.Item>Did Attorney Receive All Documents from Business?: <b>{business.step6.attroneyReceivedAllDocsFromBusiness ? 'COMPLETED': 'NOT COMPLETED' }</b></Timeline.Item>
                                </Timeline>)}

                            {(current === 6) &&(<Timeline>
                                <Timeline.Item>Did Attorney Review All Documents from Business?: <b>{business.step7.attroneyReviewedAllDocsFromBusiness ? 'COMPLETED': 'NOT COMPLETED' }</b></Timeline.Item>
                                </Timeline>)}

                            {(current === 7) &&(<Timeline>
                                <Timeline.Item>Did Attorney File for Petition?: <b>{business.step8.attroneyFilesPetiton ? 'COMPLETED': 'NOT COMPLETED' }</b></Timeline.Item>
                                <Timeline.Item>Did Attorney Update Fedex Number?: <b>{business.step8.attroneyUpdatedFedexNumber ? 'COMPLETED': 'NOT COMPLETED' }</b></Timeline.Item>
                                </Timeline>)}

                        </div>
                        
                        <div className="steps-action">
                            {
                                current < steps.length - 1
                                && <Button type="primary" onClick={() => this.next()}>Next</Button>
                            }
                            {
                                current === steps.length - 1
                                && <Button type="primary" onClick={() => message.success('Processing complete!')}>Done</Button>
                            }
                            {
                                current > 0
                                && (
                                <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                                Previous
                                </Button>
                                )
                            }
                        </div>

            </div>
         );
    }
}

const mapStateToProps = state => {
    return {
        isUserLoggedIn: state.Auth.isUserLoggedIn,
        userObject: state.Auth.userObject,
        isEmployeeRegitered: state.Employee.isEmployeeRegitered,
        error: state.Employee.error,
        taskData: state.TaskRed.taskDetailsData,
    };
};
 
export default connect(mapStateToProps)(EmpStatus);