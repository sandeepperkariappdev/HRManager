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

class H1bDocumentsHRReview extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            step5:{
                taskName:"H1bDocumentsHRReview",
                taskActive: true,
                actionAssignedTo:"Akash",
                dependencies:"",
                hrRecvdAllDocsAndReviewdFromEmp:"",
                tmStHrRecvdAllDocsAndReviewdFromEmp:"",
                tmEdHrRecvdAllDocsAndReviewdFromEmp:"",
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
            let step5 =  this.props.taskSelected.business.step5;
            this.setState({step5})
        }
    }

    onModalClick = (dataFromModal) => {
        this.setState({
            ...this.state, comments: dataFromModal,
        });
    }

    onH1BDocReviewChange = (e) => {
        let step5 = Object.assign({}, this.state.step5);
        step5[e.target.name] = [e.target.value];
        return this.setState({step5});
    };
    onCancelButtonClicked = () => {

    }    
    onSubmitButtonClicked = () => {
        this.setState({visible: true});
    }
    onHandleModalOkClicked = (dataFromModal) => {
        this.setState({visible: false});
        this.props.onAccordionSubmit(this.state.step5, "step5");
        this.props.onCommentsSubmit(dataFromModal);
    }

    onHandleModalCanceledClicked = () => {
        this.setState({visible: false});
        this.props.onAccordionSubmit(this.state.step5, "step5");
    }
    render() { 
        const { step5, errors, visible } = this.state;

        return ( 
            <div>
                    <Form>  
                        <Row>
                            <Col>
                                <Card title="H1B Documents Review">
                                    <Form.Item error={!!errors.dependencies}  label="Any Dependencies?">                                        
                                        <RadioGroup name="dependencies" options={options} onChange={this.onH1BDocReviewChange} />
                                        {errors.dependencies && <InlineError text= {errors.dependencies}/>}
                                    </Form.Item>

                                    <Form.Item error={!!errors.hrRecvdAllDocsAndReviewdFromEmp}  label="Did HR Receive and Review all documents from Employee?">                                        
                                        <RadioGroup name="hrRecvdAllDocsAndReviewdFromEmp" options={options} onChange={this.onH1BDocReviewChange} />
                                        {errors.hrRecvdAllDocsAndReviewdFromEmp && <InlineError text= {errors.hrRecvdAllDocsAndReviewdFromEmp}/>}
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
 
export default H1bDocumentsHRReview;