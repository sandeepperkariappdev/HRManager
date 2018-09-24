import React, {Component} from 'react';
import PropTypes from 'prop-types';
import  Validator from 'validator';
import InlineError from '../../messages/InlineError';
import { Modal, Collapse, Form, Input, Row, Col, Button, DatePicker, Radio, Card} from 'antd';
import ModalDisplay from '../ModalDisplay';
import moment from 'moment';


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

class Recruiter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            step2:{
                taskName:"",
                taskActive: true,
                actionAssignedTo:"",
                projectStartDate:"",
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
            taskInfo:{
                taskCompleted:"",
                taskPrioirty:"1",
                applicationType:"",
                taskCreatedDate:"", 
                isTaskCreated:"",
                isTaskPending:"",
                isTaskCompleted:"" 
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

    componentDidMount() {
        if(this.props.taskSelected.business){
            //let step2 =  this.props.taskSelected.business.step2;
            let step2 = Object.assign(this.props.taskSelected.business.step2, this.props.taskSelected.empDetails.recruiter)
            this.setState({step2})
        }
    }

    onModalClick = (dataFromModal) => {
        this.setState({
            ...this.state, comments: dataFromModal,
        });
    }

    onProjectStartDateChange = (e, date) => {
        // this.setState({
        //     ...this.state.step2, projectStartDate: date,
        // });     
        let step2 = Object.assign({}, this.state.step2);
        step2["projectStartDate"] = moment(date).valueOf();
        return this.setState({step2});   
    };

    onRecruiterChange = (e) => {
        let step2 = Object.assign({}, this.state.step2);
        step2[e.target.name] = [e.target.value];
        return this.setState({step2});
    };
    onTaskInfoChange = (e) => {
        let taskInfo = Object.assign({}, this.state.taskInfo);
        taskInfo.taskInfo[e.target.name] = e.target.value;
        taskInfo.taskInfo["isTaskCreated"] = false;
        taskInfo.taskInfo["isTaskPending"] = true;
        taskInfo.taskInfo["isTaskCompleted"] = false;
        taskInfo.taskInfo["taskCreatedDate"] = moment().valueOf();
        return this.setState({taskInfo});
    };
    onPlacementDateChange = (e, date) => {
        // this.setState({
        //     ...this.state.step2, placementDate: date,
        // });
        let step2 = Object.assign({}, this.state.step2);
        step2["placementDate"] = moment(date).valueOf();
        return this.setState({step2});
    };


    onDocsCollectingStartDateChange = (e, date) => {
        // this.setState({
        //     ...this.state.step2, docsCollectingStartDate: date,
        // });
        let step2 = Object.assign({}, this.state.step2);
        step2["docsCollectingStartDate"] = moment(date).valueOf();
        return this.setState({step2});
    };

    onRectrSentPlacDetChange = (e, date) => {
        this.setState({
            ...this.state.step2, rectrSentPlacDet: date,
        });
    };

    onCancelButtonClicked = () => {

    }    
    onSubmitButtonClicked = () => {
        this.setState({visible: true});
        
    }
    onHandleModalOkClicked = (dataFromModal) => {
        this.setState({visible: false});
        this.props.onAccordionSubmit(this.state.step2, "step2");
        this.props.onTaskInfoSubmit(this.state.taskInfo);
        this.props.onCommentsSubmit(dataFromModal);
    }

    onHandleModalCanceledClicked = () => {
        this.setState({visible: false});
        this.props.onAccordionSubmit(this.state.step2, "step2");
        this.props.onTaskInfoSubmit(this.state.taskInfo);
    }

    render() { 
        const { step2, errors, comments, visible } = this.state;
        const projectStartDate =  step2.projectStartDate ? moment(+step2.projectStartDate) : moment(); 
        const placementDate = step2.placementDate ?  moment(step2.placementDate) : moment();
        const rectrSentPlacDet = step2.rectrSentPlacDet ? moment(step2.rectrSentPlacDet) : moment();
        const docsCollectingStartDate = step2.docsCollectingStartDate ? moment(step2.docsCollectingStartDate) : moment();

        return ( 
            <div>
                    <Form>  
                        <Row>
                            <Col  xs={12} sm={12} md={12} lg={12} xl={12} >
                                <Card title="Recruiter Details">                                    
                                    <Form.Item error={!!errors.empSignedOfferLetter}  label="Is Offer Letter Signed by Employee?">                                        
                                        <RadioGroup name="empSignedOfferLetter" value={step2.empSignedOfferLetter} defaultValue={step2.empSignedOfferLetter} options={options} onChange={this.onRecruiterChange} />
                                        {errors.empSignedOfferLetter && <InlineError text= {errors.empSignedOfferLetter}/>}
                                    </Form.Item>                                                                        
                                    <Form.Item error={!!errors.applicationType} label="Applied H1 Application Type?">                                        
                                        <RadioGroup name="applicationType" value={step2.applicationType} defaultValue={step2.applicationType} options={h1applicationType} onChange={this.onRecruiterChange} />
                                        {errors.applicationType && <InlineError text= {errors.applicationType}/>}
                                    </Form.Item>                                    
                                    <Form.Item error={!!errors.employerRelationDocuments}  label="Are Employer-Employee relation documents needed?">                                        
                                        <RadioGroup name="employerRelationDocuments" value={step2.employerRelationDocuments} defaultValue={step2.employerRelationDocuments} options={options} onChange={this.onRecruiterChange} />
                                        {errors.employerRelationDocuments && <InlineError text= {errors.employerRelationDocuments}/>}
                                    </Form.Item>
                                    <Form.Item error={!!errors.vendorLetterStatus} label="Vendor Letter Status?">                                        
                                        <RadioGroup name="vendorLetterStatus" value={step2.vendorLetterStatus} defaultValue={step2.vendorLetterStatus} options={letterStatus} onChange={this.onRecruiterChange} />
                                        {errors.vendorLetterStatus && <InlineError text= {errors.vendorLetterStatus}/>}
                                    </Form.Item>
                                    <Form.Item error={!!errors.clientLetterStatus}  label="Client Letter Status?">                                        
                                        <RadioGroup name="clientLetterStatus" value={step2.clientLetterStatus} defaultValue={step2.clientLetterStatus} options={letterStatus} onChange={this.onRecruiterChange} />
                                        {errors.clientLetterStatus && <InlineError text= {errors.clientLetterStatus}/>}
                                    </Form.Item>                                                                        
                                    <Form.Item error={!!errors.rectrSentVenAgreeSignedCopy} label="Agreement signed by Vendor?">                                        
                                        <RadioGroup name="rectrSentVenAgreeSignedCopy" value={step2.rectrSentVenAgreeSignedCopy} defaultValue={step2.rectrSentVenAgreeSignedCopy} options={options} onChange={this.onRecruiterChange}  />
                                        {errors.rectrSentVenAgreeSignedCopy && <InlineError text= {errors.rectrSentVenAgreeSignedCopy}/>}
                                    </Form.Item>
                                </Card>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={12} xl={12}>                                
                                <Card title="">
                                    <Form.Item error={!!errors.projectStartDate} label="Project Start Date">
                                        <DatePicker onChange={this.onProjectStartDateChange} placeholder= "Project Start Date" defaultValue={projectStartDate} value={projectStartDate}/>
                                        {errors.projectStartDate && <InlineError text= {errors.projectStartDate}/>}
                                    </Form.Item>
                                    <Form.Item error={!!errors.urgentSituation}  label="Any Urgent Situation">
                                        <TextArea id="urgentSituation" type="urgentSituation" name="urgentSituation" value={step2.urgentSituation} onChange={this.onRecruiterChange} placeholder= "Any Urgent Situation? Please Explain." />
                                        {errors.urgentSituation && <InlineError text= {errors.urgentSituation}/>}
                                    </Form.Item>
                                    <Form.Item error={!!errors.empVerifiedWrkLocation} label="Employee Verified Work Location">                                        
                                        <RadioGroup name="empVerifiedWrkLocation"  defaultValue= {step2.empVerifiedWrkLocation} options={options} onChange={this.onRecruiterChange} />
                                        {errors.empVerifiedWrkLocation && <InlineError text= {errors.empVerifiedWrkLocation}/>}
                                    </Form.Item>
                                    <Form.Item error={!!errors.placementDate} label="Placement Date">
                                        <DatePicker onChange={this.onPlacementDateChange} placeholder= "Placement Date" defaultValue={placementDate} value={placementDate}/>
                                        {errors.placementDate && <InlineError text= {errors.placementDate}/>}
                                    </Form.Item>
                                    <Form.Item error={!!errors.rectrSentPlacDet} label="Recruiter Sent Placement Details ">
                                        <DatePicker onChange={this.onRectrSentPlacDetChange} placeholder= "Rec Pl'mt Date" defaultValue={moment(step2.rectrSentPlacDet)} value={rectrSentPlacDet}/>
                                        {errors.rectrSentPlacDet && <InlineError text= {errors.rectrSentPlacDet}/>}
                                    </Form.Item>
                                    <Form.Item error={!!errors.docsCollectingStartDate} label="Documents Collection Start">
                                        <DatePicker onChange={this.onDocsCollectingStartDateChange} placeholder= "Collection Start" defaultValue ={moment(step2.docsCollectingStartDate)} value ={docsCollectingStartDate}/>
                                        {errors.docsCollectingStartDate && <InlineError text= {errors.docsCollectingStartDate}/>}
                                    </Form.Item>
                                </Card>
                                <Card title="">
                                <Form.Item label="Task Priority">                                        
                                    <RadioGroup name="taskPrioirty" options={taskPrioity} onChange={this.onTaskInfoChange} />                                   
                                </Form.Item>
                                </Card>
                            </Col>
                        </Row>

                        <ModalDisplay {...this.props} onModalClickParent={this.onModalClick}/>
                        
                        <br />
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

Recruiter.defaultProps = {
}
 
export default Recruiter;