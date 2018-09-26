import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Button, Collapse, Tabs, Input, InputNumber, Select, Upload, Icon, Row, Col, Card, Radio, Form  } from 'antd';
import InlineError from '../../messages/InlineError';
import ModalDisplay from '../ModalDisplay';

class FromEmployee extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            empDetails:{            
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
                "workInfo":{
                    "workLocation":{
                        "address1":"",
                        "address2":"",
                        "city":"",
                        "state":"",
                        "zipCode":""
                    },
                },
                "clientInfo":{
                    "clientName": "",
                    "managerName":"",
                    "clientAddress":{
                        "address1":"",
                        "address2":"",
                        "city":"",
                        "state":"",
                        "zipCode":""
                        },
                },
                "vendorInfo":{                
                    "vendorName": "",
                    "vendorContact": "",
                    "venContName":"",
                    "venContPhone":"",
                }, 
            },
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
            visible: false,
            errors:{
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
    
    componentDidMount() {
        if(this.props.taskSelected){
            let empDetails =  Object.assign({}, this.state.empDetails, this.props.taskSelected);
            this.setState({empDetails})
        }
    }    


    // onModalClick = (dataFromModal) => {
    //     this.setState({
    //         ...this.state, comments: dataFromModal,
    //     });
    // }

    static getDerivedStateFromProps(props, state){        
        return null;
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate");
    }
    componentDidCatch(error, info){

    }
    onCancelButtonClicked = () => {

    }    
    onSubmitButtonClicked = () => {
        this.setState({visible: true});
    }

    onHandleModalOkClicked = (dataFromModal) => {
        this.setState({visible: false});
        this.props.onEmpDetailsSubmit(this.state.empDetails, "empDetails");
        this.props.onCommentsSubmit(dataFromModal);
    }

    onHandleModalCanceledClicked = () => {
        this.setState({visible: false});
        this.props.onEmpDetailsSubmit(this.state.empDetails, "empDetails");
    }

    render() { 
        const { errors, empDetails, visible } = this.state;
        const { workLocation }  = this.state.empDetails.workInfo;
        const { clientAddress} = this.state.empDetails.clientInfo;
        const { clientInfo } = this.state.empDetails;        
        return ( 
            <div>
                <Row>
                    <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                        <Card title="Employee Info">  
                            <Form.Item error={!!errors.firstName}  label="First Name" className= "firstName">                               
                                <Input type="text" name="firstName" value= {empDetails.firstName} onChange={this.onChange} placeholder="FirstName"  /> 
                                {errors.firstName && <InlineError text= {errors.firstName}/>}
                            </Form.Item>
                            <Form.Item error={!!errors.lastName}  label="Last Name" className= "firstName">
                                <Input type="text" name="lastName" value= {empDetails.lastName} onChange={this.onChange} placeholder="LastName"  /> 
                                {errors.lastName && <InlineError text= {errors.lastName}/>}
                            </Form.Item>
                            <Form.Item error={!!errors.emailId01}  label="Primary Email" className= "firstName">
                                <Input type="text" name="emailId01" value= {empDetails.emailId01} onChange={this.onChange} placeholder="Primary Email"  /> 
                                {errors.emailId01 && <InlineError text= {errors.emailId01}/>}
                            </Form.Item>
                            <Form.Item error={!!errors.emailId02}  label="Secondary Email" className= "firstName">
                                <Input type="text" name="emailId02" value={empDetails.emailId02} onChange={this.onChange} placeholder="Secondary Email"  /> 
                                {errors.emailId02 && <InlineError text= {errors.emailId02}/>}
                            </Form.Item>
                            <Form.Item error={!!errors.phoneNo}  label="Phone Number" className= "firstName">
                                <Input type="text" name="phoneNo" value= {empDetails.phoneNo} onChange={this.onChange} placeholder="PhoneNo"  /> 
                                {errors.phoneNo && <InlineError text= {errors.phoneNo}/>}
                            </Form.Item>
                        </Card>
                    </Col>
                    <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                        <Card title="Employee Contact"> 
                            <Form.Item error={!!errors.contDetails.address1}  label="Address 1" className= "firstName">
                                <Input type="text" name="address1" value= {empDetails.contDetails.address1} onChange={this.onChange} placeholder="Address 1"  /> 
                                {errors.address1 && <InlineError text= {errors.address1}/>}
                            </Form.Item>
                            <Form.Item error={!!errors.contDetails.address2}  label="Address 2" className= "firstName">
                                <Input type="text" name="address2" value= {empDetails.contDetails.address2} onChange={this.onChange} placeholder="Address 2"  /> 
                                {errors.address2 && <InlineError text= {errors.address2}/>}
                            </Form.Item>
                            <Form.Item error={!!errors.contDetails.city}  label="City" className= "firstName">
                                <Input type="text" name="city" value= {empDetails.contDetails.city} onChange={this.onChange} placeholder="city"  /> 
                                {errors.city && <InlineError text= {errors.city}/>}
                            </Form.Item>
                            <Form.Item error={!!errors.contDetails.state}  label="State" className= "firstName">
                                <Input type="text" name="state" value= {empDetails.contDetails.state} onChange={this.onChange} placeholder="state"  /> 
                                {errors.state && <InlineError text= {errors.state}/>}
                            </Form.Item>
                            <Form.Item error={!!errors.contDetails.zipCode}  label="ZipCode" className= "firstName">
                                <Input type="text" name="zipCode" value= {empDetails.contDetails.zipCode} onChange={this.onChange} placeholder="zipCode"  /> 
                                {errors.zipCode && <InlineError text= {errors.zipCode}/>}
                            </Form.Item>
                        </Card>
                    </Col>  
                    <Col  xs={8} sm={8} md={8} lg={8} xl={8} >
                        <Card title="Client">
                            <Form.Item error={!!errors.clientAddress.clientName}  label="Client Name" className= "firstName">
                                <Input type="text" name="clientName" value= {clientInfo.clientName} onChange={this.onChange} placeholder="Client Name"  /> 
                                {errors.clientAddress.clientName && <InlineError text= {errors.clientAddress.clientName}/>}
                            </Form.Item>
                            <Form.Item error={!!errors.clientAddress.managerName}  label="Manager Name" className= "firstName">
                                <Input type="text" name="managerName" value= {clientInfo.managerName} onChange={this.onChange} placeholder="Manager Name"  /> 
                                {errors.clientAddress.managerName && <InlineError text= {errors.clientAddress.managerName}/>}
                            </Form.Item>
                        </Card>
                    </Col>      
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
                                            <Input type="vendorName" name="vendorName"value= {empDetails.vendorInfo.vendorName} onChange={this.onVendorInfoChange} placeholder="Vendor Name" />
                                            {errors.vendorInfo.vendorName && <InlineError text= {errors.vendorInfo.vendorName}/>}
                                        </Form.Item>
                                        <Form.Item error={!!errors.vendorInfo.vendorContact} label="Vendor Phone">
                                            <Input type="vendorContact" name="vendorContact" value={empDetails.vendorInfo.vendorContact} onChange={this.onVendorInfoChange} placeholder= "(000) 000-0000"/>
                                            {errors.vendorInfo.vendorContact && <InlineError text= {errors.vendorInfo.vendorContact}/>}
                                        </Form.Item>
                                        <Form.Item error={!!errors.vendorInfo.venContName} label="Vendor Contact Person">
                                            <Input type="venContName" name="venContName"value= {empDetails.vendorInfo.venContName} onChange={this.onVendorInfoChange} placeholder="Vendor Contact Name" />
                                             {errors.vendorInfo.venContName && <InlineError text= {errors.vendorInfo.venContName}/>}
                                        </Form.Item>
                                        <Form.Item error={!!errors.vendorInfo.venContPhone} label="Vendor Contact Person Phone">
                                            <Input type="venContPhone" name="venContPhone" value={empDetails.vendorInfo.venContPhone} onChange={this.onVendorInfoChange} placeholder= "(000) 000-0000" />
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
                <Row>
                    <ModalDisplay {...this.props} isVisible={visible} onHandleModalOkClicked={this.onHandleModalOkClicked} onHandleModalCanceledClicked = {this.onHandleModalCanceledClicked} />                      
                </Row>                
                <Row>
                    <Col>   
                        <div>
                            <Button type="primary" onClick={() => this.onCancelButtonClicked()}>Cancel</Button>
                            <Button type="primary" onClick={() => this.onSubmitButtonClicked()}>Submit</Button>
                        </div>
                    </Col>
                </Row>
            </div>
         );
    }
}
 
export default FromEmployee;