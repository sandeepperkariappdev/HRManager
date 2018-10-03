import React, {Component} from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import  Validator from 'validator';
import InlineError from '../messages/InlineError';
import { Collapse, Form, Tabs, Layout, Menu, Input, Row, Col, Button, DatePicker, Radio, Card} from 'antd';
import { Link } from "react-router-dom";
import moment from 'moment';
import { createTaskSubmit } from "../../redux/actions/createTask";

const Panel = Collapse.Panel;

const { Header, Sider, Content } = Layout;
const TabPane = Tabs.TabPane;
const SubMenu = Menu.SubMenu;

const options = [
    { label: 'yes', value: 'yes' },
    { label: 'no', value: 'no' },
  ];

const h1applicationType = [
    { label: 'H1b', value: 'H1b' },
    { label: 'OPT', value: 'OPT' },
    { label: 'H1bExt', value: 'H1bExt' }
  ];

const letterStatus = [
    { label: 'approved', value: 'approved' },
    { label: 'waiting', value: 'waiting' },
    { label: 'notApplied', value: 'notApplied' },
  ];

const taskPrioity = [
    { label: 'very high', value: '1' },
    { label: 'high', value: '2' },
    { label: 'medium', value: '3' },
    { label: 'low', value: '4' },
];
const RadioGroup = Radio.Group;
const { TextArea } = Input;

class CreateTask extends Component {
    constructor(props) {
        super(props);
        this.state = { 
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
                      empSignedOfferLetter:'yes',
                      placementDate: '',
                      urgentSituation:'djbfjaskbdfjhasd',
                      applicationType:'H1b',
                      docsCollectingStartDate: '',
                      employerRelationDocuments: '',
                      vendorLetterStatus: '',
                      clientLetterStatus: '',
                      empVerifiedWrkLocation:'yes',
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
                },
         },
         isServerRespondedSuccess: false,
         errors: {}         
    }
}

    onChange = e => this.setState({
        empDetails: { ...this.state.empDetails, [e.target.name]: e.target.value}
    });

    onContactChange = (e) => {
        let empDetails = Object.assign({}, this.state.empDetails);
        empDetails.contDetails[e.target.name] = e.target.value;        
        return this.setState({empDetails});
    };

    onWorkLocationChange = (e) => {
        let empDetails = Object.assign({}, this.state.empDetails);
        empDetails.workInfo.workLocation[e.target.name] = e.target.value;
        return this.setState({empDetails});
    };

    onClientInfoChange = (e) => {
        let empDetails = Object.assign({}, this.state.empDetails);
        empDetails.clientInfo[e.target.name] = e.target.value;
        return this.setState({empDetails});
    };

    onClientAddressChange = (e) => {
        let empDetails = Object.assign({}, this.state.empDetails);
        empDetails.clientInfo.clientAddress[e.target.name] = e.target.value;
        return this.setState({empDetails});
    };

    static getDerivedStateFromProps(nextProps, prevState) {
        if(nextProps.isTaskCreated){
           nextProps.history.push("/home");
        }
        return null;
      }

    onVendorInfoChange = (e) => {
        let empDetails = Object.assign({}, this.state.empDetails);
        empDetails.vendorInfo[e.target.name] = e.target.value;
        return this.setState({empDetails});
    };

    onProjectStartDateChange = (e, date) => {
        // this.setState({
        //     ...this.state.empDetails.recruiter, projectStartDate: date,
        // });
        let empDetails = Object.assign({}, this.state.empDetails);
        empDetails.recruiter["projectStartDate"] = moment(date).valueOf();
        return this.setState({empDetails});
    };

    onPlacementDateChange = (e, date) => {
        // this.setState({
        //     ...this.state.empDetails.recruiter, placementDate: date,
        // });
        let empDetails = Object.assign({}, this.state.empDetails);
        empDetails.recruiter["placementDate"] = moment(date).valueOf();
        return this.setState({empDetails});
    };

    onRecruiterChange = (e) => {
        let empDetails = Object.assign({}, this.state.empDetails);
        empDetails.recruiter[e.target.name] = e.target.value;
        if(e.target.name === "applicationType"){
            empDetails.taskInfo["applicationType"] = e.target.value;
        }        
        return this.setState({empDetails});
    };

    onTaskInfoChange = (e) => {
        let empDetails = Object.assign({}, this.state.empDetails);
        empDetails.taskInfo[e.target.name] = e.target.value;
        empDetails.taskInfo["isTaskCreated"] = true;
        empDetails.taskInfo["isTaskPending"] = false;
        empDetails.taskInfo["isTaskCompleted"] = false;
        empDetails.taskInfo["taskCreatedDate"] = moment().valueOf();
        return this.setState({empDetails});
    };

    onDocsCollectingStartDateChange = (e, date) => {
        this.setState({
            ...this.state.empDetails.recruiter, docsCollectingStartDate: date,
        });
    };

    onRectrSentPlacDetChange = (e, date) => {
        // this.setState({
        //     ...this.state.empDetails.recruiter, rectrSentPlacDate: date,
        // });
        let empDetails = Object.assign({}, this.state.empDetails);
        empDetails.recruiter["rectrSentPlacDate"] = moment(date).valueOf();
        return this.setState({empDetails});
    };

    componentDidMount(props) {
        if(this.props.isServerRespReceived){
            // this.setState({...this.state.isServerRespondedSuccess, isServerRespondedSuccess : this.props.isServerRespReceived});
            let isServerRespondedSuccess = Object.assign({}, this.state.isServerRespondedSuccess);
            isServerRespondedSuccess = this.props.isServerRespReceived;        
            return this.setState({isServerRespondedSuccess});
        }
        else{
            console.log("Changed Error State " + this.state.isServerRespondedSuccess);
        }
    }


    onSubmit = () => {
    //const errors = this.validate(this.state.empDetails);
    // if(Object.keys(errors).length===0){
        // this.props.submit(this.state.data); 
        let data = {};
        data.empDetails= this.state.empDetails;
        data.empId = this.state.empDetails.empId;
        data.primaryEmailId = this.state.empDetails.primaryEmailId;
        this.props.dispatch(createTaskSubmit(data));
    //}
    };

    validate = empDetails => {
    const errors = {};
    if(!empDetails.firstName) errors.firstName = "Can't be empty";
    if(!empDetails.lastName) errors.lastName = "Can't be empty";
    if(!Validator.isEmail(empDetails.emailId01)) errors.emailId01 = "Invalid Email";
    if(!Validator.isEmail(empDetails.emailId02)) errors.emailId02 = "Invalid Email";
    if(!Validator.isNumeric(empDetails.phoneNo)) errors.phoneNo = "Enter Phone Number";
    
    //ContDetails
    if(!empDetails.contDetails.address1) errors.address1 = "Can't be empty";
    if(!empDetails.contDetails.address2) errors.address2 = "Can't be empty";
    if(!empDetails.contDetails.city) errors.city = "Can't be empty";
    if(!empDetails.contDetails.state) errors.state = "Can't be empty";
    if(!Validator.isNumeric(empDetails.contDetails.zipCode)) errors.zipCode = "Enter Zipcode";
    
    //WorkInfo
    if(!empDetails.workInfo.workLocation.address1) errors.address1 = "Can't be empty";
    if(!empDetails.workInfo.workLocation.address2) errors.address2 = "Can't be empty";
    if(!empDetails.workInfo.workLocation.city) errors.city = "Can't be empty";
    if(!empDetails.workInfo.workLocation.state) errors.state = "Can't be empty";
    if(!Validator.isNumeric(empDetails.workInfo.workLocation.zipCode)) errors.zipCode = "Enter Zipcode";
    
    //ClientInfo
    if(!empDetails.clientInfo.clientName) errors.clientName = "Can't be empty";
    if(!empDetails.clientInfo.managerName) errors.managerName = "Can't be empty";
    if(!empDetails.lastName) errors.lastName = "Can't be empty";
    if(!empDetails.clientInfo.clientAddress.address1) errors.address1 = "Can't be empty";
    if(!empDetails.clientInfo.clientAddress.address2) errors.address2 = "Can't be empty";
    if(!empDetails.clientInfo.clientAddress.city) errors.city = "Can't be empty";
    if(!empDetails.clientInfo.clientAddress.state) errors.state = "Can't be empty";
    if(!Validator.isNumeric(empDetails.clientInfo.clientAddress.zipCode)) errors.zipCode = "Enter Zipcode";
    
    //VendorInfo
    if(!empDetails.vendorInfo.vendorAgreement) errors.vendorAgreement = "Please Select";
    if(!empDetails.vendorInfo.vendorName) errors.vendorName = "Can't be empty";
    //if(!Validator.isNumeric(empDetails.vendorInfo.vendorContact)) errors.vendorContact = "Enter Phone Number";
    if(!empDetails.vendorInfo.venContName) errors.venContName = "Can't be empty";
    //if(!Validator.isNumeric(empDetails.vendorInfo.venContPhone)) errors.venContPhone = "Enter Phone Number";  
    // isNumeric is not validating for vendorInfo - check why
    
    //Recruiter
    // if(!Validator.isISO8601(empDetails.recruiter.projectStartDate)) errors.projectStartDate = "Select a Date";
    if(!empDetails.recruiter.empSignedOfferLetter) errors.empSignedOfferLetter = "Please Select";
    // if(!Validator.isISO8601(empDetails.recruiter.placementDate)) errors.placementDate = "Select a Date";
    if(!empDetails.recruiter.urgentSituation) errors.urgentSituation = "Enter N/A if no such thing";
    if(!empDetails.recruiter.applicationType) errors.applicationType = "Please Select";
    // if(!Validator.isISO8601(empDetails.recruiter.docsCollectingStartDate)) errors.docsCollectingStartDate = "Select a Date";
    if(!empDetails.recruiter.employerRelationDocuments) errors.employerRelationDocuments = "Please Select";
    if(!empDetails.recruiter.vendorLetterStatus) errors.vendorLetterStatus = "Please Select";
    if(!empDetails.taskInfo.taskPrioirty) errors.taskPrioirty = "Please Select";
    if(!empDetails.recruiter.clientLetterStatus) errors.clientLetterStatus = "Please Select";
    if(!empDetails.recruiter.empVerifiedWrkLocation) errors.empVerifiedWrkLocation = "Can't be empty";
    // if(!Validator.isISO8601(empDetails.recruiter.rectrSentPlacDate)) errors.rectrSentPlacDate = "Select a Date";
    if(!empDetails.recruiter.rectrSentVenAgreeSignedCopy) errors.rectrSentVenAgreeSignedCopy = "Please Select";


    //Errors
    return errors;
    };

    render() { 
        const { empDetails, errors } = this.state;
        return ( 
            <div>
                <Layout>                         
                    <Header >                        
                        <Row>
                            <Col xs={6} sm={6} md={6} lg={6} xl={6}>   
                                <Link to={{pathname: "/home"}}>Back</Link>
                            </Col>
                            <Col xs={14} sm={14} md={14} lg={14} xl={14}>   
                                <h3 className="color-white">CREATE TASK</h3>
                            </Col>
                        </Row>
                    </Header>
                    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>                                    
                        <Collapse accordion>
                            {/* Employee Registration */}
                            <Panel header="Employee Registration" key="1">
                                <Form>
                                <Row>
                                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                        <Card title="Employee Details">
                                        <Form.Item error={!!errors.firstName}  label="First Name" className= "firstName">
                                            <Input id="firstName" type="text" name="firstName" value= {empDetails.firstName} onChange={this.onChange} placeholder="First Name" />
                                                {errors.firstName && <InlineError text= {errors.firstName}/>}
                                        </Form.Item>

                                        <Form.Item error={!!errors.lastName} label="Last Name">
                                            <Input id="lastName" type="text" name="lastName" value= {empDetails.lastName} onChange={this.onChange} placeholder="Last Name" />
                                            {errors.lastName && <InlineError text= {errors.lastName}/>}
                                        </Form.Item>

                                        <Form.Item error={!!errors.primaryEmailId} label="Primary Email:">
                                            <Input id="primaryEmailId" type="text" name="primaryEmailId" value= {empDetails.primaryEmailId} onChange={this.onChange} placeholder="Primary Email" />
                                            {errors.primaryEmailId && <InlineError text= {errors.primaryEmailId}/>}
                                        </Form.Item>

                                        <Form.Item error={!!errors.secondaryEmailId} label="Secondary Email:">
                                            <Input id="secondaryEmailId" type="text" name="secondaryEmailId" value= {empDetails.secondaryEmailId} onChange={this.onChange} placeholder="Secondary Email" />
                                            {errors.secondaryEmailId && <InlineError text= {errors.secondaryEmailId}/>}
                                        </Form.Item>

                                        <Form.Item error={!!errors.phoneNo} label="Phone Number:">
                                            <Input id="phoneNo" type="number" max={10} name="phoneNo" value={empDetails.phoneNo}onChange={this.onChange} placeholder= "(000) 000-0000"/>
                                            {errors.phoneNo && <InlineError text= {errors.phoneNo}/>}
                                        </Form.Item>

                                        </Card>
                                    </Col>
                                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                        <Card title="Contact Details">
                                            
                                            <Form.Item error={!!errors.address1}  label="Address 1">
                                                    <Input id="address1" type="address1" name="address1"value= {empDetails.contDetails.address1} onChange={this.onContactChange} placeholder="Address 1" />
                                                    {errors.address1 && <InlineError text= {errors.address1}/>}
                                            </Form.Item>

                                            <Form.Item error={!!errors.address2}  label="Address 2">
                                                <Input id="address2" type="address2" name="address2"value= {empDetails.contDetails.address2} onChange={this.onContactChange} placeholder="Address 2" />
                                                {errors.address2 && <InlineError text= {errors.address2}/>}
                                            </Form.Item>

                                            <Form.Item error={!!errors.city}  label="City">
                                                <Input id="city" type="city" name="city"value= {empDetails.contDetails.city} onChange={this.onContactChange}placeholder="City" />
                                                {errors.city && <InlineError text= {errors.city}/>}
                                            </Form.Item>

                                            <Form.Item error={!!errors.state}  label="State">
                                                    <Input id="state" type="state" name="state"  value= {empDetails.contDetails.state} onChange={this.onContactChange} placeholder="State" />
                                                    {errors.state && <InlineError text= {errors.state}/>}
                                            </Form.Item>

                                            <Form.Item error={!!errors.zipCode}  label="Zip Code">
                                                    <Input  id="zipCode" type="zipCode" name="zipCode" value={empDetails.contDetails.zipCode}onChange={this.onContactChange} placeholder= "Enter Your Zipcode"/>
                                                    {errors.zipCode && <InlineError text= {errors.zipCode}/>}
                                            </Form.Item>

                                        </Card>
                                    </Col>
                                </Row>

                                </Form>
                            </Panel>
                            {/* WorkInfo */}
                            <Panel header="Work Related Information" key="2">
                                <Form>
                                <Row>
                                    <Col >
                                        <Card title="Work Location">
                                            <Form.Item error={!!errors.address1} label="Address 1">
                                                    <Input id="address1" type="text" name="address1"value= {empDetails.workInfo.workLocation.address1} onChange={this.onWorkLocationChange} placeholder="Address 1" />
                                                    {errors.address1 && <InlineError text= {errors.address1}/>}
                                            </Form.Item>
                                            <Form.Item error={!!errors.address2}  label="Address 2">
                                                    <Input id="address2" type="text" name="address2" value= {empDetails.workInfo.workLocation.address2} onChange={this.onWorkLocationChange} placeholder="Address 2" />
                                                    {errors.address2 && <InlineError text= {errors.address2}/>}
                                            </Form.Item>
                                            <Form.Item error={!!errors.city}  label="City">
                                                <Input id="city" type="text" name="city" value= {empDetails.workInfo.workLocation.city} onChange={this.onWorkLocationChange}placeholder="City" />
                                                {errors.city && <InlineError text= {errors.city}/>}
                                            </Form.Item>
                                            <Form.Item error={!!errors.state}  label="State">
                                                <Input id="state" type="text" name="state" value= {empDetails.workInfo.workLocation.state} onChange={this.onWorkLocationChange} placeholder="State" />
                                                {errors.state && <InlineError text= {errors.state}/>}
                                            </Form.Item>
                                            <Form.Item error={!!errors.zipCode}  label="Zip Code">
                                                <Input id="zipCode" type="number" name="zipCode" value={empDetails.workInfo.workLocation.zipCode}onChange={this.onWorkLocationChange} placeholder= "Enter Your Zipcode"/>
                                                {errors.zipCode && <InlineError text= {errors.zipCode}/>}
                                            </Form.Item>

                                        </Card>
                                    </Col>
                                </Row>
                                </Form>
                            </Panel>
                            {/* ClientInfo */}
                            <Panel header="Client Related Information" key="3">
                            <Form>
                                <Row>
                                    <Col>
                                        <Card title="Client Details">
                                            <Form.Item error={!!errors.clientName} label="Client Name">
                                                    <Input id="clientName" type="clientName" name="clientName"value= {empDetails.clientInfo.clientName} onChange={this.onClientInfoChange} placeholder="Client Name" />
                                                    {errors.clientName && <InlineError text= {errors.clientName}/>}
                                            </Form.Item>
                                            <Form.Item error={!!errors.managerName}  label="Manager Name">
                                                    <Input id="managerName" type="text" name="managerName" value= {empDetails.clientInfo.managerName} onChange={this.onClientInfoChange} placeholder="Manager First Last" />
                                                    {errors.managerName && <InlineError text= {errors.managerName}/>}
                                            </Form.Item>
                                            <Form.Item error={!!errors.address1} label="Address 1">
                                                    <Input id="address1" type="text" name="address1"value= {empDetails.clientInfo.clientAddress.address1} onChange={this.onClientAddressChange} placeholder="Address 1" />
                                                    {errors.address1 && <InlineError text= {errors.address1}/>}
                                            </Form.Item>
                                            <Form.Item error={!!errors.address2} label="Address 2">
                                                    <Input id="address2" type="text" name="address2" value= {empDetails.clientInfo.clientAddress.address2} onChange={this.onClientAddressChange} placeholder="Address 2" />
                                                    {errors.address2 && <InlineError text= {errors.address2}/>}
                                            </Form.Item>
                                            <Form.Item error={!!errors.city} label="City">
                                                    <Input id="city" type="text" name="city"value= {empDetails.clientInfo.clientAddress.city} onChange={this.onClientAddressChange} placeholder="City" />
                                                    {errors.city && <InlineError text= {errors.city}/>}
                                            </Form.Item>
                                            <Form.Item error={!!errors.state} label="State">
                                                    <Input id="state" type="text" name="state" value= {empDetails.clientInfo.clientAddress.state} onChange={this.onClientAddressChange} placeholder="State" />
                                                    {errors.state && <InlineError text= {errors.state}/>}
                                            </Form.Item>
                                            <Form.Item error={!!errors.zipCode} label="Zip Code">
                                                    <Input id="zipCode" type="number" name="zipCode" value={empDetails.clientInfo.clientAddress.zipCode} onChange={this.onClientAddressChange} placeholder= "Enter Your Zipcode"/>
                                                    {errors.zipCode && <InlineError text= {errors.zipCode}/>}
                                            </Form.Item>

                                        </Card>
                                    </Col>
                                </Row>

                            </Form>
                            </Panel>
                            {/* VendorInfo */}
                            <Panel header="Vendor Related Information" key="4">
                                <Form>
                                    <Row>
                                        <Col>
                                            <Card title="Vendor Details">
                                                {/* <Form.Item error={!!errors.vendorAgreement} label="Agreement signed by Vendor?">                                            
                                                    <RadioGroup name="vendorAgreement" options={options} onChange={this.onVendorInfoChange}  />
                                                    {errors.vendorAgreement && <InlineError text= {errors.vendorAgreement}/>}
                                                </Form.Item> */}
                                                <Form.Item error={!!errors.vendorName} label="Vendor Name">
                                                    <Input id="vendorName" type="vendorName" name="vendorName"value= {empDetails.vendorInfo.vendorName} onChange={this.onVendorInfoChange} placeholder="Vendor Name" />
                                                    {errors.vendorName && <InlineError text= {errors.vendorName}/>}
                                                </Form.Item>
                                                <Form.Item error={!!errors.vendorContact} label="Vendor Phone">
                                                    <Input id="vendorContact" type="number" maxLength="10" name="vendorContact" value={empDetails.vendorInfo.vendorContact} onChange={this.onVendorInfoChange} placeholder= "(000) 000-0000"/>
                                                    {errors.vendorContact && <InlineError text= {errors.vendorContact}/>}
                                                </Form.Item>
                                                <Form.Item error={!!errors.venContName} label="Vendor Contact Person">
                                                    <Input id="venContName" type="text" name="venContName"value= {empDetails.vendorInfo.venContName} onChange={this.onVendorInfoChange} placeholder="Vendor Contact Name" />
                                                    {errors.venContName && <InlineError text= {errors.venContName}/>}
                                                </Form.Item>
                                                <Form.Item error={!!errors.venContPhone} label="Vendor Contact Person Phone">
                                                    <Input id="venContPhone" type="number" maxLength="10"  name="venContPhone" value={empDetails.vendorInfo.venContPhone} onChange={this.onVendorInfoChange} placeholder= "(000) 000-0000" />
                                                    {errors.venContPhone && <InlineError text= {errors.venContPhone}/>}
                                                </Form.Item>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Form>
                            </Panel>
                            {/* Recruiter */}
                            <Panel header=" Recruiter Related Information" key="5">
                        <Form>  
                        <Row>
                            <Col xs={12} sm={12} md={12} lg={12} xl={12} >
                                <Card title="Recruiter Details">                                    
                                    <Form.Item error={!!errors.empSignedOfferLetter}  label="Is Offer Letter Signed by Employee?">                                        
                                        <RadioGroup name="empSignedOfferLetter" options={options} onChange={this.onRecruiterChange} />
                                        {errors.empSignedOfferLetter && <InlineError text= {errors.empSignedOfferLetter}/>}
                                    </Form.Item>                                                                        
                                    <Form.Item error={!!errors.applicationType} label="Applied H1 Application Type?">                                        
                                        <RadioGroup name="applicationType" options={h1applicationType} onChange={this.onRecruiterChange} />
                                        {errors.applicationType && <InlineError text= {errors.applicationType}/>}
                                    </Form.Item>
                                    
                                    <Form.Item error={!!errors.employerRelationDocuments}  label="Are Employer-Employee relation documents needed?">                                        
                                        <RadioGroup name="employerRelationDocuments" options={options} onChange={this.onRecruiterChange} />
                                        {errors.employerRelationDocuments && <InlineError text= {errors.employerRelationDocuments}/>}
                                    </Form.Item>
                                    <Form.Item error={!!errors.vendorLetterStatus} label="Vendor Letter Status?">                                        
                                        <RadioGroup name="vendorLetterStatus" options={letterStatus} onChange={this.onRecruiterChange} />
                                        {errors.vendorLetterStatus && <InlineError text= {errors.vendorLetterStatus}/>}
                                    </Form.Item>
                                    <Form.Item error={!!errors.clientLetterStatus}  label="Client Letter Status?">                                        
                                        <RadioGroup name="clientLetterStatus" options={letterStatus} onChange={this.onRecruiterChange} />
                                        {errors.clientLetterStatus && <InlineError text= {errors.clientLetterStatus}/>}
                                    </Form.Item>                                                                        
                                    <Form.Item error={!!errors.rectrSentVenAgreeSignedCopy} label="Agreement signed by Vendor?">                                        
                                        <RadioGroup name="rectrSentVenAgreeSignedCopy" options={options} onChange={this.onRecruiterChange}  />
                                        {errors.rectrSentVenAgreeSignedCopy && <InlineError text= {errors.rectrSentVenAgreeSignedCopy}/>}
                                    </Form.Item>

                                </Card>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={12} xl={12} >
                                <Card title=""> 
                                <Form.Item error={!!errors.urgentSituation}  label="Any Urgent Situation">
                                    <TextArea id="urgentSituation" type="urgentSituation" name="urgentSituation" value={empDetails.recruiter.urgentSituation} onChange={this.onRecruiterChange} placeholder= "Any Urgent Situation? Please Explain." />
                                    {errors.urgentSituation && <InlineError text= {errors.urgentSituation}/>}
                                </Form.Item>
                                <Form.Item error={!!errors.empVerifiedWrkLocation} label="Employee Verified Work Location">
                                    <RadioGroup name="empVerifiedWrkLocation" options={options} onChange={this.onRecruiterChange} />
                                    {errors.empVerifiedWrkLocation && <InlineError text= {errors.empVerifiedWrkLocation}/>}
                                </Form.Item>
                                <Form.Item error={!!errors.placementDate} label="Placement Date">
                                    <DatePicker onChange={this.onPlacementDateChange} placeholder= "Placement Date" defaultValue={empDetails.recruiter.placementDate}/>
                                    {errors.placementDate && <InlineError text= {errors.placementDate}/>}
                                </Form.Item>
                                <Form.Item error={!!errors.projectStartDate} label="Project Start Date">
                                    <DatePicker onChange={this.onProjectStartDateChange} placeholder= "Project Start Date" defaultValue={empDetails.recruiter.projectStartDate}/>
                                    {errors.projectStartDate && <InlineError text= {errors.projectStartDate}/>}
                                </Form.Item>
                                <Form.Item error={!!errors.docsCollectingStartDate} label="Documents Collection Start">
                                    <DatePicker onChange={this.onDocsCollectingStartDateChange} placeholder= "Collection Start" defaultValue ={empDetails.recruiter.docsCollectingStartDate}/>
                                    {errors.docsCollectingStartDate && <InlineError text= {errors.docsCollectingStartDate}/>}
                                </Form.Item>
                                <Form.Item error={!!errors.rectrSentPlacDate} label="Recruiter Sent Placement Details ">
                                    <DatePicker onChange={this.onRectrSentPlacDetChange} placeholder= "Rec Pl'mt Date"defaultValue={empDetails.recruiter.rectrSentPlacDate}/>
                                    {errors.rectrSentPlacDate && <InlineError text= {errors.rectrSentPlacDate}/>}
                                </Form.Item>
                                <Form.Item error={!!errors.taskPrioirty} label="Task Priority">                                        
                                    <RadioGroup name="taskPrioirty" options={taskPrioity} onChange={this.onTaskInfoChange} />
                                    {errors.taskPrioirty && <InlineError text= {errors.taskPrioirty}/>}
                                </Form.Item>
                                </Card>
                            </Col>
                        </Row>
                        </Form>
                    </Panel>
                            <Form>
                                <Form.Item>
                                    <Button type="primary" onClick={this.onSubmit}>Submit</Button>
                                </Form.Item>
                            </Form>
                    </Collapse>
                    </Content>
                </Layout> 
            </div>
         );
    }
}

const mapStateToProps = state => {
    return {
        isUserLoggedIn: state.auth.loggedIn,
        userObject: state.auth.user,
        isServerRespReceived: state.home.isServerRespReceived,
        taskList: state.home.taskList,
        isTaskCreated : state.createTask.isTaskCreated
    };
};
 
export default connect(mapStateToProps)(CreateTask);