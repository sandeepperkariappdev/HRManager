import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Validator from 'validator';
import InlineError from '../../messages/InlineError';
import { Form, Input, Row, Col, Button, DatePicker, Radio, Card} from 'antd';
import ModalDisplay from '../ModalDisplay';

const options = [
    { label: 'yes', value: 'yes' },
    { label: 'no', value: 'no' },
  ];


const RadioGroup = Radio.Group;
  
const { TextArea } = Input;


class AttorneyFilesPetiton extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            step8:{
                taskName:"AttorneyFilesPetiton",
                taskActive: true,
                actionAssignedTo:"Akash",
                dependencies:"",
                attroneyFilesPetiton:"",
                tmStAttroneyFilesPetiton:"",
                tmEdAttroneyFilesPetiton:"",
                attroneyUpdatedFedexNumber:"",
                tmStAttroneyUpdatedFedexNumber:"",
                tmEdAttroneyUpdatedFedexNumber:"",
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
            let step8 =  this.props.taskSelected.business.step8;
            this.setState({step8})
        }
    }   
    
    onModalClick = (dataFromModal) => {
        this.setState({
            ...this.state, comments: dataFromModal,
        });
    }

    onAttorneyFilesPetitionChange= (e) => {
        let step8 = Object.assign({}, this.state.step8);
        step8[e.target.name] = [e.target.value];
        return this.setState({step8});
    };

    onCancelButtonClicked = () => {

    }    
    onSubmitButtonClicked = () => {
        this.setState({visible: true});
    }
    onHandleModalOkClicked = (dataFromModal) => {
        this.setState({visible: false});
        this.props.onAccordionSubmit(this.state.step8, "step8");
        this.props.onCommentsSubmit(dataFromModal);
    }

    onHandleModalCanceledClicked = () => {
        this.setState({visible: false});
        this.props.onAccordionSubmit(this.state.step8, "step8");
    }

    render() { 
        const { step8, errors, visible } = this.state;

        return ( 
            <div>
                    <Form>  
                        <Row>
                            <Col>
                                <Card title="Attorney Files Petition">
                                    
                                    <Form.Item error={!!errors.dependencies}  label="Any Dependencies?">                                        
                                        <RadioGroup name="dependencies" options={options} onChange={this.onAttorneyFilesPetitionChange} />
                                        {errors.dependencies && <InlineError text= {errors.dependencies}/>}
                                    </Form.Item>

                                    <Form.Item error={!!errors.attroneyFilesPetiton}  label="Did Attorney File the Petition?">                                        
                                        <RadioGroup name="attroneyFilesPetiton" options={options} onChange={this.onAttorneyFilesPetitionChange} />
                                        {errors.attroneyFilesPetiton && <InlineError text= {errors.attroneyFilesPetiton}/>}
                                    </Form.Item>

                                    <Form.Item error={!!errors.attroneyUpdatedFedexNumber}  label="Did Attorney Update Fedex Number?">                                        
                                        <RadioGroup name="attroneyUpdatedFedexNumber" options={options} onChange={this.onAttorneyFilesPetitionChange} />
                                        {errors.attroneyUpdatedFedexNumber && <InlineError text= {errors.attroneyUpdatedFedexNumber}/>}
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
 
export default AttorneyFilesPetiton;