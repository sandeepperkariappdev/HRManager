import React, {Component} from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import InlineError from '../messages/InlineError';
import { Steps, Timeline, Form, Button, message, Card, Layout, Tabs, Collapse, Input, Select, Radio, Row, Col } from 'antd';
import moment from 'moment';
import { Link } from 'react-router-dom';
import EmpStatusModalWindow from './EmpStatusModalWindow';
import WorkLocationModalWindow from './WorkLocationModalWindow';

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
                workLocationVisible:false,          
                current: 0,
                taskData:{
                    business:{
                        step1:{
                        taskName:"Employee",
                        taskActive: true,
                        isTaskCompleted:false,
                        isTaskDependent:false,
                        dependencyReason:"",
                        actionAssignedTo:"Akash",
                        verifiedWrkLocation:false,
                        offerSignedLetter:false,
                        vendorLetterSubmitted:false,
                        clientLetterSubmitted:false,
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
                return { taskData :  nextProps.taskData };
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

    onHandleWorkLocationModalCanceledClicked = () => {
        this.setState({workLocationVisible: false});
    }

    onHandleWorkLocationModalOkClicked = (dataFromModal) => {
        this.setState({workLocationVisible: false});
    }

    onWorkLocationButtonClicked = () =>{
        this.setState({workLocationVisible: true});
    }

    render() { 
        console.log("hii1");
        console.log("hii2");
        console.log("hii3");
        const { current,  errors, commentsVisible, workLocationVisible } = this.state;
        const { workLocation }  = this.state.taskData.business.step1.workInfo;
        const { clientAddress} = this.state.taskData.business.step1.clientInfo;
        const { clientInfo, vendorInfo } = this.state.taskData.business.step1; 
        const { business }  = this.state.taskData;
             
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
            <Layout>
                 {commentsVisible && (<EmpStatusModalWindow {...this.props} isVisible={commentsVisible} onHandleCommentsModalCanceledClicked={this.onHandleCommentsModalCanceledClicked}  onHandleCommentsModalOkClicked={this.onHandleCommentsModalOkClicked}/>)}   
                 {workLocationVisible && (<WorkLocationModalWindow {...this.props} isVisible={workLocationVisible} onHandleWorkLocationModalCanceledClicked={this.onHandleWorkLocationModalCanceledClicked}  onHandleWorkLocationModalOkClicked={this.onHandleWorkLocationModalOkClicked}/>)}   
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
                            <Card>
                                <Steps current={current}>
                                    {steps.map(item => <Step key={item.title} title={item.title} />)}
                                </Steps>
                            </Card> 
                            <Card> 
                                <div className="steps-content">    
                                {(current === 0) &&(<Card>
                                    <Timeline>
                                        <Timeline.Item>
                                            <div>
                                                <Row>
                                                    <Col>Can you verify the below Work Location information ?: <b>{business.step1.taskActive ? 'NOT COMPLETED': 'COMPLETED' }</b></Col>
                                                </Row>
                                                <Row>
                                                    <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                                        <Card title="WorkLocation">
                                                            <Form.Item error={!!errors.workLocation.address1}  label="Address1" className= "firstName">                                 
                                                                <Input type="text" name="address1" value= {workLocation.address1} onChange={this.onChange} placeholder="Address 1"  /> 
                                                                {errors.workLocation.address1 && <InlineError text= {errors.workLocation.address1}/>}
                                                            </Form.Item>
                                                            <Form.Item error={!!errors.workLocation.address2}  label="Address2" className= "firstName">
                                                                <Input type="text" name="address2" value= {workLocation.address2} onChange={this.onChange} placeholder="Address 2"  /> 
                                                                {errors.workLocation.address2 && <InlineError text= {errors.workLocation.address2}/>}
                                                            </Form.Item>
                                                            <Form.Item error={!!errors.workLocation.city}  label="City" className= "firstName">
                                                                <Input type="text" name="city" value= {workLocation.city} onChange={this.onChange} placeholder="city"  /> 
                                                                {errors.workLocation.city && <InlineError text= {errors.workLocation.city}/>}
                                                            </Form.Item>
                                                            <Form.Item error={!!errors.workLocation.state}  label="State" className= "firstName">
                                                                <Input type="text" name="state" value= {workLocation.state} onChange={this.onChange} placeholder="state"  /> 
                                                                {errors.workLocation.state && <InlineError text= {errors.workLocation.state}/>}
                                                            </Form.Item>
                                                            <Form.Item error={!!errors.workLocation.zipCode}  label="ZipCode" className= "firstName">
                                                                <Input type="text" name="zipCode" value= {workLocation.zipCode} onChange={this.onChange} placeholder="zipCode"  /> 
                                                                {errors.workLocation.zipCode && <InlineError text= {errors.workLocation.zipCode}/>}
                                                            </Form.Item>
                                                        </Card>
                                                    </Col>
                                                    <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                                        <Card title="Vendor">
                                                                        {/* <Form.Item error={!!errors.vendorAgreement} label="Agreement signed by Vendor?">                                            
                                                                            <RadioGroup name="vendorAgreement" options={options} onChange={this.onVendorInfoChange}  />
                                                                            {errors.vendorAgreement && <InlineError text= {errors.vendorAgreement}/>}
                                                                        </Form.Item> */}
                                                                        <Form.Item error={!!errors.vendorInfo.vendorName} label="Vendor Name">
                                                                            <Input type="vendorName" name="vendorName"value= {vendorInfo.vendorName} onChange={this.onVendorInfoChange} placeholder="Vendor Name" />
                                                                            {errors.vendorInfo.vendorName && <InlineError text= {errors.vendorInfo.vendorName}/>}
                                                                        </Form.Item>
                                                                        <Form.Item error={!!errors.vendorInfo.vendorContact} label="Vendor Phone">
                                                                            <Input type="vendorContact" name="vendorContact" value={vendorInfo.vendorContact} onChange={this.onVendorInfoChange} placeholder= "(000) 000-0000"/>
                                                                            {errors.vendorInfo.vendorContact && <InlineError text= {errors.vendorInfo.vendorContact}/>}
                                                                        </Form.Item>
                                                                        <Form.Item error={!!errors.vendorInfo.venContName} label="Vendor Contact Person">
                                                                            <Input type="venContName" name="venContName"value= {vendorInfo.venContName} onChange={this.onVendorInfoChange} placeholder="Vendor Contact Name" />
                                                                            {errors.vendorInfo.venContName && <InlineError text= {errors.vendorInfo.venContName}/>}
                                                                        </Form.Item>
                                                                        <Form.Item error={!!errors.vendorInfo.venContPhone} label="Vendor Contact Person Phone">
                                                                            <Input type="venContPhone" name="venContPhone" value={vendorInfo.venContPhone} onChange={this.onVendorInfoChange} placeholder= "(000) 000-0000" />
                                                                            {errors.vendorInfo.venContPhone && <InlineError text= {errors.vendorInfo.venContPhone}/>}
                                                                        </Form.Item>
                                                        </Card>
                                                    </Col>
                                                    <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                                        <Card title="Client Address">                            
                                                            <Form.Item error={!!errors.clientAddress.address1}  label="Address1" className= "firstName">
                                                                <Input type="text" name="address1" value= {clientAddress.address1} onChange={this.onChange} placeholder="Address 1"  /> 
                                                                {errors.clientAddress.address1 && <InlineError text= {errors.clientAddress.address1}/>}
                                                            </Form.Item>
                                                            <Form.Item error={!!errors.clientAddress.address1}  label="Address2" className= "firstName">
                                                                <Input type="text" name="address2" value= {clientAddress.address2} onChange={this.onChange} placeholder="Address 2"  /> 
                                                                {errors.clientAddress.address1 && <InlineError text= {errors.clientAddress.address1}/>}
                                                            </Form.Item>
                                                            <Form.Item error={!!errors.clientAddress.city} label="City" className= "firstName">
                                                                <Input type="text" name="city" value= {clientAddress.city} onChange={this.onChange} placeholder="city"  /> 
                                                                {errors.clientAddress.city && <InlineError text= {errors.clientAddress.city}/>}
                                                            </Form.Item>
                                                            <Form.Item error={!!errors.clientAddress.state}  label="State" className= "firstName">
                                                                <Input type="text" name="state" value= {clientAddress.state} onChange={this.onChange} placeholder="state"  /> 
                                                                {errors.clientAddress.state && <InlineError text= {errors.clientAddress.state}/>}
                                                            </Form.Item>
                                                            <Form.Item error={!!errors.clientAddress.zipCode}  label="ZipCode" className= "firstName">
                                                                <Input type="text" name="zipCode" value= {clientAddress.zipCode} onChange={this.onChange} placeholder="zipCode"  /> 
                                                                {errors.clientAddress.zipCode && <InlineError text= {errors.clientAddress.zipCode}/>}
                                                            </Form.Item>
                                                        </Card>
                                                    </Col>
                                                </Row>                
                                            </div>
                                            </Timeline.Item>                                        
                                    </Timeline>
                                    </Card>)}
                                {(current === 1) &&(<Card>
                                    <Timeline>
                                        <Timeline.Item>Is Recruiter Information Submitted?: <b>{business.step2.taskActive ? 'NOT COMPLETED': 'COMPLETED' }</b></Timeline.Item>
                                    </Timeline>
                                    </Card>)}
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