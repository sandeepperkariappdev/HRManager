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

class AttorneyReceivedDocs extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            step6:{
                taskName:"AttorneyReceivedDocs",
                taskActive: true,
                actionAssignedTo:"Akash",
                dependencies:"",
                attroneyReceivedAllDocsFromBusiness:"",
                tmStAttroneyReceivedAllDocsFromBusiness:"",
                tmEdAttroneyReceivedAllDocsFromBusiness:"",
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
                            <Col>
                                <Card title="Attorney Received Docs">
                                    
                                    <Form.Item error={!!errors.dependencies}  label="Any Dependencies?">                                        
                                        <RadioGroup name="dependencies" options={options} onChange={this.onAttorneyReceivedChange} />
                                        {errors.dependencies && <InlineError text= {errors.dependencies}/>}
                                    </Form.Item>

                                    <Form.Item error={!!errors.attroneyReceivedAllDocsFromBusiness}  label="Did Attorney Receive all documents from business?">                                        
                                        <RadioGroup name="attroneyReceivedAllDocsFromBusiness" options={options} onChange={this.onAttorneyReceivedChange} />
                                        {errors.attroneyReceivedAllDocsFromBusiness && <InlineError text= {errors.attroneyReceivedAllDocsFromBusiness}/>}
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