import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Validator from 'validator';
import InlineError from '../../messages/InlineError';
import { Form, Input, Row, Col, Button, DatePicker, Radio, Card} from 'antd';
import ModalDisplay from '../ModalDisplay';

const options = [
    { label: 'yes', value: 'true' },
    { label: 'no', value: 'false' },
  ];


const RadioGroup = Radio.Group;
  
const { TextArea } = Input;

class AttorneyReceivedDocs extends Component {
    constructor(props) {
        super(props);
        this.state = { 
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
            let step6 =  this.props.taskSelected.business.step6;
            this.setState({step6})
        }
    }


    onModalClick = (dataFromModal) => {
        this.setState({
            ...this.state, comments: dataFromModal,
        });
    }

    onAttorneyReceivedChange= (e) => {
        let step6 = Object.assign({}, this.state.step6);
        step6[e.target.name] = [e.target.value];
        return this.setState({step6});
    };

    onCancelButtonClicked = () => {

    }    
    onSubmitButtonClicked = () => {
        this.setState({visible: true});
    }
    onHandleModalOkClicked = (dataFromModal) => {
        this.setState({visible: false});
        this.props.onAccordionSubmit(this.state.step6, "step6");
        this.props.onCommentsSubmit(dataFromModal);
    }

    onHandleModalCanceledClicked = () => {
        this.setState({visible: false});
        this.props.onAccordionSubmit(this.state.step6, "step6");
    }
    render() { 
        const { step6, errors, visible } = this.state;

        return ( 
            <div>
                    <Form>  
                        <Row>
                        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                <Card>                                                                  
                                    <Form.Item error={!!errors.isPetitionStatusChanged}  label="Is Petition Status Changed?">                                        
                                        <RadioGroup name="isPetitionStatusChanged" options={options} onChange={this.onAttorneyReceivedChange} />
                                        {errors.isPetitionStatusChanged && <InlineError text= {errors.isPetitionStatusChanged}/>}
                                    </Form.Item>

                                    <Form.Item error={!!errors.isPetitionApproved}  label="Is Petition Approved ?">                                        
                                        <RadioGroup name="isPetitionApproved" options={options} onChange={this.onAttorneyReceivedChange} />
                                        {errors.isPetitionApproved && <InlineError text= {errors.isPetitionApproved}/>}
                                    </Form.Item>

                                    <Form.Item error={!!errors.isRFEReceivedForPetition}  label="Is RFE Received For Petition ?">                                        
                                        <RadioGroup name="isRFEReceivedForPetition" options={options} onChange={this.onAttorneyReceivedChange} />
                                        {errors.isRFEReceivedForPetition && <InlineError text= {errors.isRFEReceivedForPetition}/>}
                                    </Form.Item>
                                    </Card>
                                </Col> 
                                 <Col xs={12} sm={12} md={12} lg={12} xl={12}>                                  
                                <Card>
                                    <Form.Item error={!!errors.receivedRFEReason}  label="Received RFE Reason">                                                                                
                                        <Input placeholder="Received RFE Reason" name="receivedRFEReason" onChange={this.onH1BDocReviewChange}/>   
                                        {errors.receivedRFEReason && <InlineError text= {errors.receivedRFEReason}/>}
                                    </Form.Item>
                                    
                                    <Form.Item error={!!errors.isRFEAnswered}  label="Is RFE Answered ?">                                        
                                        <RadioGroup name="isRFEAnswered" options={options} onChange={this.onAttorneyReceivedChange} />
                                        {errors.isRFEAnswered && <InlineError text= {errors.isRFEAnswered}/>}
                                    </Form.Item>

                                    <Form.Item error={!!errors.isRFEApproved}  label="Is RFE Approved ?">                                        
                                        <RadioGroup name="isRFEApproved" options={options} onChange={this.onAttorneyReceivedChange} />
                                        {errors.isRFEApproved && <InlineError text= {errors.isRFEApproved}/>}
                                    </Form.Item>

                                    <Form.Item error={!!errors.isRFEDocsSent}  label="Is RFE Docs Sent ?">                                        
                                        <RadioGroup name="isRFEDocsSent" options={options} onChange={this.onAttorneyReceivedChange} />
                                        {errors.isRFEDocsSent && <InlineError text= {errors.isRFEDocsSent}/>}
                                    </Form.Item>

                                </Card>
                            </Col>
                        </Row>
                        <Row>
                        <ModalDisplay {...this.props} isVisible={visible} onHandleModalOkClicked={this.onHandleModalOkClicked} onHandleModalCanceledClicked = {this.onHandleModalCanceledClicked} />                      
                        </Row>
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
 
export default AttorneyReceivedDocs;