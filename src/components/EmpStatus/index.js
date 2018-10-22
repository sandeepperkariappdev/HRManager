import React, {Component} from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import InlineError from '../messages/InlineError';
import { Steps,Popconfirm, Timeline, Tag, Form, Button, message, Card, Layout, Tabs, Collapse, Input, Select, Radio, Row, Col } from 'antd';
import moment from 'moment';
import { Link } from 'react-router-dom';
import EmpStatusModalWindow from './EmpStatusModalWindow';
import WorkLocationModalWindow from './WorkLocationModalWindow';
import RolesRespModalWindow from './RolesRespModalWindow';
import DocsChecklistModalWindow from './DocsChecklistModalWindow';


const Step = Steps.Step;
const { Header, Footer, Sider, Content } = Layout;
const TabPane = Tabs.TabPane;
const Panel = Collapse.Panel;
const { TextArea } = Input;
const Option = Select.Option;
const RadioGroup = Radio.Group;

class EmpStatus extends Component {
    constructor(props) {
        super(props);
        this.state = {   
            commentsVisible:false,  
            rrVsble:false,
            dListVsble:false,   
            workLocationVisible:false,          
            current: 0,
            taskData:{
                business:{
                    step1:{
                        taskName:"From Employee",
                        taskActive: true,
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
                        docsListH1bH4H4DepsByEmp:"",
                        submittedAllH4DocsByEmp: false,
                        submittedAllH4DepDocsByEmp: false,
                        submittedAllH1bDocsByEmp: false,
                        empDetails:{
                            empId: moment().valueOf(),
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
                                taskCreatedDate:moment().valueOf(),  
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
                    }
                }
            },                
            errors: {
                "empId":"",
                "firstName": "",
                "lastName": "",
                "emailId01": "",
                "emailId02": "",
                "phoneNo": "",
                "contDetails":{
                    "address1":"",
                    "address2":"",
                    "city":"",
                    "state":"",
                    "zipCode":""
                },                            
                "workLocation":{
                    "address1":"",
                    "address2":"",
                    "city":"",
                    "state":"",
                    "zipCode":""
                },            
                "clientAddress":{
                    "clientName": "",
                    "managerName":"",                
                    "address1":"",
                    "address2":"",
                    "city":"",
                    "state":"",
                    "zipCode":""                
                },
                "vendorInfo":{                
                    "vendorName": "",
                    "vendorContact": "",
                    "venContName":"",
                    "venContPhone":"",
                }
            }  
        }
    }

    componentDidMount(){
        
    } 
    static getDerivedStateFromProps(nextProps, prevState) {
        if(nextProps.taskData){
            if(Object.keys(nextProps.taskData).length > 0){
                const cusTaskData = Object.assign(prevState.taskData, nextProps.taskData)
                return { taskData :  cusTaskData };
            }
        }
        return null;
    }
    next() {
        const current = this.state.current + 1;
        this.setState({ current });
    }
    
    prev() {
        const current = this.state.current - 1;
        this.setState({ current });
    }

    onHandleCommentsModalCanceledClicked = () => {
        this.setState({commentsVisible: false});
    }

    onHandleCommentsModalOkClicked = (dataFromModal) => {
        this.setState({commentsVisible: false});
    }

    onCommentsButtonClicked = () =>{
        this.setState({commentsVisible: true});
    }

    onHnleDLMdlCnclClckd = () => {
        this.setState({dListVsble: false});
    }

    onHnleDLMdlOkClckd = () => {
        this.setState({dListVsble: false});
    }

    onShwDLBtnClicked = () =>{
        this.setState({dListVsble: true});
    }

    onHnleRRMdlCnclClckd = () => {
        this.setState({rrVsble: false});
    }
    onHnleRRMdlOkClckd = (dataFromModal) => {
        this.setState({rrVsble: false});
    }
    onShwRRBtnClicked = () =>{
        this.setState({rrVsble: true});
    }

    onHandleWorkLocationModalCanceledClicked = () => {
        this.setState({workLocationVisible: false});
    }

    onHandleWorkLocationModalOkClicked = (dataFromModal) => {
        this.setState({workLocationVisible: false});
    }

    onWorkLocationButtonClicked = () =>{
        this.setState({workLocationVisible: true});
    }

    onRRBtnClicked = () =>{
        this.setState({rrVsble: true});
    }
    
    render() {
         
        const steps = [{
                title: 'First',
                content: 'First-content',
            },{
                title: 'Second',
                content: 'Second-content',
            },{
                title: 'Third',
                content: 'Third-content',
          }];      
        const { current,  errors, commentsVisible, workLocationVisible, rrVsble, dListVsble } = this.state;
        const { workLocation }  = this.state.taskData.business.step1.empDetails.workInfo;
        const { clientAddress} = this.state.taskData.business.step1.empDetails.clientInfo;
        const { clientInfo, vendorInfo } = this.state.taskData.business.step1.empDetails; 
        const { business }  = this.state.taskData;
        const { step1, step2, step3, step4, step5, step6 }  = this.state.taskData.business;

        return ( 
            <Layout>
                 {commentsVisible && (<EmpStatusModalWindow {...this.props} isVisible={commentsVisible} onHandleCommentsModalCanceledClicked={this.onHandleCommentsModalCanceledClicked}  onHandleCommentsModalOkClicked={this.onHandleCommentsModalOkClicked}/>)}   
                 {workLocationVisible && (<WorkLocationModalWindow {...this.props} business={business} isVisible={workLocationVisible} onHandleWorkLocationModalCanceledClicked={this.onHandleWorkLocationModalCanceledClicked}  onHandleWorkLocationModalOkClicked={this.onHandleWorkLocationModalOkClicked}/>)}                   
                 {rrVsble && (<RolesRespModalWindow {...this.props} isVisible={rrVsble} rolesRespDraft={step1.rolesRespDraft} onHnleRRMdlCnclClckd={this.onHnleRRMdlCnclClckd}  onHnleRRMdlOkClckd={this.onHnleRRMdlOkClckd}/>)}   
                 {dListVsble && (<DocsChecklistModalWindow {...this.props} isVisible={dListVsble} docsListH1bH4H4DepsByEmp={step1.docsListH1bH4H4DepsByEmp} onHnleDLMdlCnclClckd={this.onHnleDLMdlCnclClckd}  onHnleDLMdlOkClckd={this.onHnleDLMdlOkClckd}/>)}   
                <Header className="zero-padding">
                    <Row>
                        <Col xs={6} sm={6} md={6} lg={6} xl={6}>                               
                        </Col>
                        <Col xs={14} sm={14} md={14} lg={14} xl={14}>   
                            <h3 className="color-white">Employee Details</h3>
                        </Col>
                        <Col xs={4} sm={4} md={4} lg={4} xl={4}>   
                            <h3 className="color-white" onClick={this.onCommentsButtonClicked}>Comments</h3>
                        </Col>
                    </Row>                                        
                </Header>
                <Content> 
                <Card>
                    <Tag>Project Start Date{step2.projectStartDate}</Tag>
                    <Tag>Placement Date {step2.placementDate}</Tag>
                    <Tag>Application Type{step2.applicationType}</Tag>
                </Card>
                       <Card>
                            <Card>
                                <Steps current={current}>
                                    {steps.map(item => <Step key={item.title} title={item.title} />)}
                                </Steps>
                            </Card> 
                            <Card> 
                                <div className="steps-content">    
                                {(current === 0) &&(<Card>
                                    <Timeline>
                                            <Timeline.Item>Verify the Work Location?: <b>{business.step1.verifiedWrkLocation ? 'NOT COMPLETED': 'COMPLETED' }</b><button onClick={this.onWorkLocationButtonClicked}>Show Work Location</button></Timeline.Item>                                                                                                                                       
                                            <Timeline.Item>Offer Letter Signed by employee : {step1.offerLetterSigned}</Timeline.Item>
                                            <Timeline.Item>Vendor Letter Status {step1.vendorLetterStatus}</Timeline.Item>
                                            <Timeline.Item>Client Letter Status {step1.clientLetterStatus}</Timeline.Item>
                                            <Timeline.Item>Vendor Letter Submitted {step1.vendorLetterSubmitted}</Timeline.Item>
                                            <Timeline.Item>Client Letter Submitted {step1.clientLetterSubmitted}</Timeline.Item>                                                                                        
                                            <Timeline.Item>Roles Responsibilities Submitted by Employee: <b>{step1.rolesRespSubmittedByEmp ? 'COMPLETED': 'NOT COMPLETED' }</b><button onClick={this.onRRBtnClicked}>Show Responsibilities</button></Timeline.Item>                                                                                       
                                            <Timeline.Item>List of H1b H4 and H4 Dependents Documents required : <button onClick={this.onShwDLBtnClicked}>Show Docs List</button></Timeline.Item>                                                                                        
                                            <Timeline.Item>All of the Employee's H1 Documents Received?: <b>{step1.submittedAllH1bDocsByEmp ? 'COMPLETED': 'NOT COMPLETED' }</b></Timeline.Item>                                                                                        
                                            <Timeline.Item>All of the Employee's H4 Documents Received?: <b>{step1.submittedAllH4DocsByEmp ? 'COMPLETED': 'NOT COMPLETED' }</b></Timeline.Item>
                                            <Timeline.Item>All of the Employee's H4 Dep Documents Received?: <b>{step1.submittedAllH4DepDocsByEmp ? 'COMPLETED': 'NOT COMPLETED' }</b></Timeline.Item>
                                            <Timeline.Item>
                                                <div>
                                                    All of the Employee's H4 Dep Documents Received?: <b>{step4.anyPendingDocuments  ? 'COMPLETED': 'NOT COMPLETED' }</b> 
                                                    <Popconfirm placement="left" title={step4.pendingDocumentsList} okText="Okay">
                                                        <Button>Show Pending Documents</Button>
                                                    </Popconfirm>                                          
                                                </div>
                                                </Timeline.Item>                                             
                                    </Timeline>
                                    </Card>)}
                                {(current === 1) &&(<Card>
                                    <Timeline>
                                            <Timeline.Item>Roles Responsibilities Verified: <b>{step3.rolesRespVerified? 'COMPLETED': 'NOT COMPLETED' }</b></Timeline.Item>
                                            <Timeline.Item>Info Updated to portal by Business:<b> {step3.infoUptdToPortalByBiz? 'COMPLETED': 'NOT COMPLETED' }</b></Timeline.Item>                                           
                                            <Timeline.Item>Review of Uncertified LCA: <b>{step3.reviewUnCertLCA? 'COMPLETED': 'NOT COMPLETED' }</b></Timeline.Item>
                                            <Timeline.Item>LCA Filed for Certification:<b> {step3.lcaFiledForCert? 'COMPLETED': 'NOT COMPLETED'}</b></Timeline.Item>
                                            <Timeline.Item>LCA Sent to Employee: <b>{step3.lcaSentToEmployee? 'COMPLETED': 'NOT COMPLETED' }</b></Timeline.Item>
                                            <Timeline.Item>Employee's Documents Reviewed by HR for H1b filing?: <b>{step4.hrRecvdAllDocsFromEmp ? 'COMPLETED': 'NOT COMPLETED' }</b></Timeline.Item>
                                            <Timeline.Item>Employee's Documents Reviewed by HR for H1b filing?: <b>{step4.hrApprovesTheDocsReceived ? 'COMPLETED': 'NOT COMPLETED' }</b></Timeline.Item>
                                            <Timeline.Item>Did Attorney Receive All Documents from Business for H1b filing?: <b>{step5.attroneyReceivedAllDocsFromBusiness ? 'COMPLETED': 'NOT COMPLETED' }</b></Timeline.Item>
                                            <Timeline.Item>Did Attorney Review All Documents from Business for H1b filing?: <b>{step5.attroneyReviewedAllDocsFromBusiness ? 'COMPLETED': 'NOT COMPLETED' }</b></Timeline.Item>
                                            <Timeline.Item>Did Attorney File for Petition?: <b>{step5.attroneyFilesPetiton ? 'COMPLETED': 'NOT COMPLETED' }</b></Timeline.Item>
                                            <Timeline.Item>Did Attorney Update Fedex Number?: <b>{step5.attroneyUpdatedFedexNumber ? 'COMPLETED': 'NOT COMPLETED' }</b></Timeline.Item>
                                    </Timeline>
                                    </Card>)}
                                {(current === 2) &&(<Card>
                                        <Timeline>
                                            <Timeline.Item>Petition Status Change Date: <b>{step6.petitionStatusChangeDate}</b></Timeline.Item>
                                            <Timeline.Item>Is Petition Status Changed: <b>{step6.isPetitionStatusChanged}</b></Timeline.Item>
                                            <Timeline.Item>Is Petition Approved: <b>{step6.isPetitionApproved}</b></Timeline.Item>
                                            <Timeline.Item>Is RFE Received For Petition: <b>{step6.isRFEReceivedForPetition}</b></Timeline.Item>
                                            <Timeline.Item>Received RFE Reason: <b>{step6.receivedRFEReason}</b></Timeline.Item>
                                            <Timeline.Item>Is RFE Answered: <b>{step6.isRFEAnswered}</b></Timeline.Item>
                                            <Timeline.Item>Is RFE Approved: <b>{step6.isRFEApproved}</b></Timeline.Item>
                                            <Timeline.Item>Is RFE Docs Sent: <b>{step6.isRFEDocsSent}</b></Timeline.Item>                                        
                                        </Timeline>
                                    </Card>)}                                                      
                            </div>                        
                            </Card>
                            <Card>
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
                            </Card> 
                        </Card> 
                </Content>
            </Layout>
         );
    }
}

const mapStateToProps = state => {
    return {
        isUserLoggedIn: state.auth.loggedIn,
        userObject: state.auth.user,
        taskData: state.auth.empDetails,
    };
};
 
export default connect(mapStateToProps)(EmpStatus);

// <Row>
// <Col xs={8} sm={8} md={8} lg={8} xl={8}>
//     <Card title="WorkLocation">
//         <Form.Item error={!!errors.workLocation.address1}  label="Address1" className= "firstName">                                 
//             <Input type="text" name="address1" value= {workLocation.address1} onChange={this.onChange} placeholder="Address 1"  /> 
//             {errors.workLocation.address1 && <InlineError text= {errors.workLocation.address1}/>}
//         </Form.Item>
//         <Form.Item error={!!errors.workLocation.address2}  label="Address2" className= "firstName">
//             <Input type="text" name="address2" value= {workLocation.address2} onChange={this.onChange} placeholder="Address 2"  /> 
//             {errors.workLocation.address2 && <InlineError text= {errors.workLocation.address2}/>}
//         </Form.Item>
//         <Form.Item error={!!errors.workLocation.city}  label="City" className= "firstName">
//             <Input type="text" name="city" value= {workLocation.city} onChange={this.onChange} placeholder="city"  /> 
//             {errors.workLocation.city && <InlineError text= {errors.workLocation.city}/>}
//         </Form.Item>
//         <Form.Item error={!!errors.workLocation.state}  label="State" className= "firstName">
//             <Input type="text" name="state" value= {workLocation.state} onChange={this.onChange} placeholder="state"  /> 
//             {errors.workLocation.state && <InlineError text= {errors.workLocation.state}/>}
//         </Form.Item>
//         <Form.Item error={!!errors.workLocation.zipCode}  label="ZipCode" className= "firstName">
//             <Input type="text" name="zipCode" value= {workLocation.zipCode} onChange={this.onChange} placeholder="zipCode"  /> 
//             {errors.workLocation.zipCode && <InlineError text= {errors.workLocation.zipCode}/>}
//         </Form.Item>
//     </Card>
// </Col>
// <Col xs={8} sm={8} md={8} lg={8} xl={8}>
//     <Card title="Vendor">                    
//                     <Form.Item error={!!errors.vendorInfo.vendorName} label="Vendor Name">
//                         <Input type="vendorName" name="vendorName"value= {vendorInfo.vendorName} onChange={this.onVendorInfoChange} placeholder="Vendor Name" />
//                         {errors.vendorInfo.vendorName && <InlineError text= {errors.vendorInfo.vendorName}/>}
//                     </Form.Item>
//                     <Form.Item error={!!errors.vendorInfo.vendorContact} label="Vendor Phone">
//                         <Input type="vendorContact" name="vendorContact" value={vendorInfo.vendorContact} onChange={this.onVendorInfoChange} placeholder= "(000) 000-0000"/>
//                         {errors.vendorInfo.vendorContact && <InlineError text= {errors.vendorInfo.vendorContact}/>}
//                     </Form.Item>
//                     <Form.Item error={!!errors.vendorInfo.venContName} label="Vendor Contact Person">
//                         <Input type="venContName" name="venContName"value= {vendorInfo.venContName} onChange={this.onVendorInfoChange} placeholder="Vendor Contact Name" />
//                         {errors.vendorInfo.venContName && <InlineError text= {errors.vendorInfo.venContName}/>}
//                     </Form.Item>
//                     <Form.Item error={!!errors.vendorInfo.venContPhone} label="Vendor Contact Person Phone">
//                         <Input type="venContPhone" name="venContPhone" value={vendorInfo.venContPhone} onChange={this.onVendorInfoChange} placeholder= "(000) 000-0000" />
//                         {errors.vendorInfo.venContPhone && <InlineError text= {errors.vendorInfo.venContPhone}/>}
//                     </Form.Item>
//     </Card>
// </Col>
// <Col xs={8} sm={8} md={8} lg={8} xl={8}>
//     <Card title="Client Address">                            
//         <Form.Item error={!!errors.clientAddress.address1}  label="Address1" className= "firstName">
//             <Input type="text" name="address1" value= {clientAddress.address1} onChange={this.onChange} placeholder="Address 1"  /> 
//             {errors.clientAddress.address1 && <InlineError text= {errors.clientAddress.address1}/>}
//         </Form.Item>
//         <Form.Item error={!!errors.clientAddress.address1}  label="Address2" className= "firstName">
//             <Input type="text" name="address2" value= {clientAddress.address2} onChange={this.onChange} placeholder="Address 2"  /> 
//             {errors.clientAddress.address1 && <InlineError text= {errors.clientAddress.address1}/>}
//         </Form.Item>
//         <Form.Item error={!!errors.clientAddress.city} label="City" className= "firstName">
//             <Input type="text" name="city" value= {clientAddress.city} onChange={this.onChange} placeholder="city"  /> 
//             {errors.clientAddress.city && <InlineError text= {errors.clientAddress.city}/>}
//         </Form.Item>
//         <Form.Item error={!!errors.clientAddress.state}  label="State" className= "firstName">
//             <Input type="text" name="state" value= {clientAddress.state} onChange={this.onChange} placeholder="state"  /> 
//             {errors.clientAddress.state && <InlineError text= {errors.clientAddress.state}/>}
//         </Form.Item>
//         <Form.Item error={!!errors.clientAddress.zipCode}  label="ZipCode" className= "firstName">
//             <Input type="text" name="zipCode" value= {clientAddress.zipCode} onChange={this.onChange} placeholder="zipCode"  /> 
//             {errors.clientAddress.zipCode && <InlineError text= {errors.clientAddress.zipCode}/>}
//         </Form.Item>
//     </Card>
// </Col>
// </Row>