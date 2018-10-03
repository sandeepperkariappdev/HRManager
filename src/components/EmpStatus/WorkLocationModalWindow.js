import React, {Component} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import InlineError from '../messages/InlineError';
import { Modal, Form, Input, Row, Col, Button, DatePicker, Card, Collapse} from 'antd';
const { TextArea } = Input;
const Panel = Collapse.Panel;

class WorkLocationModalWindow extends Component {
    constructor(props) {
        super(props);    
        this.state = {
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
    componentDidUpdate(prevProps, prevState, snapshot){        
    };
    componentDidMount() {      
        if(this.props.business){
            this.setState((state, props) => ({ business :  props.business}));
        }
    };
    static getDerivedStateFromProps(nextProps, prevState) {                                            
        return null;
    };
    handleOk = (e) => {
        this.props.onHandleWorkLocationModalOkClicked();                
    }
    
    handleCancel = (e) => {
        this.props.onHandleWorkLocationModalCanceledClicked();
    }
    render() {                 
        const { workLocation }  = this.state.business.step1.workInfo;
        const { clientAddress} = this.state.business.step1.clientInfo;
        const { clientInfo, vendorInfo } = this.state.business.step1;  
        const { errors } = this.state;
        return ( 
            <div>
                <Row>
                    <Col>                            
                        <Modal title="Comments" visible={this.props.isVisible} onOk={this.handleOk} onCancel={this.handleCancel}>                                
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
                        </Modal>                        
                    </Col>
                </Row>
            </div>
         );
    }
}


 
export default WorkLocationModalWindow;