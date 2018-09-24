import React, {Component} from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import  Validator from 'validator';
import InlineError from '../../messages/InlineError';
import { Form, Input, Row, Col, Button, DatePicker, Radio, Card} from 'antd';
import ModalDisplay from '../ModalDisplay';

const options = [
    { label: 'yes', value: 'yes' },
    { label: 'no', value: 'no' },
  ];


const RadioGroup = Radio.Group;
  
const { TextArea } = Input;

class LCA extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            step3:{
                taskName:"LCA",
                taskActive: true,
                actionAssignedTo:"",
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
                lcaFiledForCert:"",
                tmStLcaFiledForCert:"",
                tmEdLcaFiledForCert:"",
                appliedDateLCA: "",
                approvedDateLCA: "",
                expectedApprovalDate:"", 
                taskCompletedTotalTime:"",
                taskStartedTotalTime:"",
                lcaSentToEmployee:true    
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
              errors: {},
         }
    }


    // onModalClick = (dataFromModal) => {
    //     this.setState({
    //         ...this.state, comments: dataFromModal,
    //     });
    // }

    onAppliedLCADateChange = (e, date) => {
        this.setState({
            ...this.state.step3, appliedDateLCA: moment(date).valueOf(),
        });
    };

    onApprovedLCADateChange = (e, date) => {
        this.setState({
            ...this.state.step3, approvedDateLCA: moment(date).valueOf(),
        });
    };

    onExpectedApprovalDateChange = (e, date) => {
        this.setState({
            ...this.state.step3, expectedApprovalDate: moment(date).valueOf(),
        });
    };

    onLCAChange = (e) => {
        let step3 = Object.assign({}, this.state.step3);
        step3[e.target.name] = e.target.value;
        return this.setState({step3});
    };

    //On LCA Submit Button Clicked
    onCancelButtonClicked = () => {

    }    
    onSubmitButtonClicked = () => {
        this.setState({visible: true});
    }
    onHandleModalOkClicked = (dataFromModal) => {
        this.setState({visible: false});
        this.props.onAccordionSubmit(this.state.step3, "step3");
        this.props.onCommentsSubmit(dataFromModal);
    }

    onHandleModalCanceledClicked = () => {
        this.setState({visible: false});
        this.props.onAccordionSubmit(this.state.step3, "step3");
    }
    componentDidMount() {
        if(this.props.taskSelected.business){
            let step3 =  this.props.taskSelected.business.step3;
            this.setState({step3})
        }
    }

    render() { 
        const { step3, errors, visible } = this.state;
        const expectedApprovalDate =  step3.expectedApprovalDate ?  moment(step3.expectedApprovalDate) : moment();
        const approvedDateLCA = step3.approvedDateLCA ? moment(step3.approvedDateLCA) : moment();
        const appliedDateLCA = step3.appliedDateLCA ? moment(step3.appliedDateLCA) : moment();

        return ( 
            <div>
                <Form>  
                        <Row>
                            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                <Card title="LCA Details">                                
                                    <Form.Item error={!!errors.reviewUnCertLCA}  label="Reviewed Uncertified LCA?">                                        
                                        <RadioGroup name="reviewUnCertLCA" options={options} onChange={this.onLCAChange} />
                                        {errors.reviewUnCertLCA && <InlineError text= {errors.reviewUnCertLCA}/>}
                                    </Form.Item>

                                    <Form.Item error={!!errors.lcaFiledForCert}  label="Is LCA filed?">                                        
                                        <RadioGroup name="lcaFiledForCert" options={options} onChange={this.onLCAChange} />
                                        {errors.lcaFiledForCert && <InlineError text= {errors.lcaFiledForCert}/>}
                                    </Form.Item>

                                    <Form.Item error={!!errors.appliedDateLCA} label="Applied LCA Date">
                                        <DatePicker onChange={this.onAppliedLCADateChange} placeholder= "Applied LCA Date"  value={appliedDateLCA}/>
                                        {errors.appliedDateLCA && <InlineError text= {errors.appliedDateLCA}/>}
                                    </Form.Item>

                                    <Form.Item error={!!errors.approvedDateLCA} label="Approved LCA Date">
                                        <DatePicker onChange={this.onApprovedLCADateChange} placeholder= "Approved LCA Date"  value={approvedDateLCA}/>
                                        {errors.approvedDateLCA && <InlineError text= {errors.approvedDateLCA}/>}
                                    </Form.Item>

                                    <Form.Item error={!!errors.expectedApprovalDate} label="Expeacted Approval Date">
                                        <DatePicker onChange={this.onExpectedApprovalDateChange} placeholder= "Expeacted Approval Date"  value={expectedApprovalDate} />
                                        {errors.expectedApprovalDate && <InlineError text= {errors.expectedApprovalDate}/>}
                                    </Form.Item>

                                    <Form.Item error={!!errors.lcaSentToEmployee}  label="Is LCA sent to Employee?">                                        
                                        <RadioGroup name="lcaSentToEmployee" options={options} onChange={this.onLCAChange} />
                                        {errors.lcaSentToEmployee && <InlineError text= {errors.lcaSentToEmployee}/>}
                                    </Form.Item>
                                </Card>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                <Card title="LCA Details">
                                <Form.Item error={!!errors.dependencies}  label="Any Dependencies?">                                        
                                        <RadioGroup name="dependencies"  options={options} onChange={this.onLCAChange} />
                                        {errors.dependencies && <InlineError text= {errors.dependencies}/>}
                                    </Form.Item>

                                    <Form.Item error={!!errors.empVerWorkLocation}  label="Is Employee location Verified?">                                        
                                        <RadioGroup name="empVerWorkLocation"  options={options} onChange={this.onLCAChange} />
                                        {errors.empVerWorkLocation && <InlineError text= {errors.empVerWorkLocation}/>}
                                    </Form.Item>

                                    <Form.Item error={!!errors.rolesRespSubmittedByEmp}  label="Roles and Responsibilities Submitted?">                                        
                                        <RadioGroup name="rolesRespSubmittedByEmp"  options={options} onChange={this.onLCAChange} />
                                        {errors.rolesRespSubmittedByEmp && <InlineError text= {errors.rolesRespSubmittedByEmp}/>}
                                    </Form.Item>

                                    <Form.Item error={!!errors.rolesRespSubmittedByEmp}  label="Roles and Responsibilities Verified?">                                        
                                        <RadioGroup name="rolesRespVerified"  options={options} onChange={this.onLCAChange} />
                                        {errors.rolesRespVerified && <InlineError text= {errors.rolesRespVerified}/>}
                                    </Form.Item>

                                    <Form.Item error={!!errors.infoUptdToPortalByBiz}  label="Has business updated the portal?">                                        
                                        <RadioGroup name="infoUptdToPortalByBiz" options={options} onChange={this.onLCAChange} />
                                        {errors.infoUptdToPortalByBiz && <InlineError text= {errors.infoUptdToPortalByBiz}/>}
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
                    </Form>
            </div>
         );
    }
}
 
export default LCA;