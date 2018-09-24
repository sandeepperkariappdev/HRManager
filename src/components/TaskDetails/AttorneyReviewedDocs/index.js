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


class AttorneyReviewedDocs extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            step7:{
                taskName:"AttorneyReviewedDocs",
                taskActive: true,
                actionAssignedTo:"Akash",
                dependencies:"",
                attroneyReviewedAllDocsFromBusiness:"",
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
            let step7 =  this.props.taskSelected.business.step7;
            this.setState({step7})
        }
    }


    // onModalClick = (dataFromModal) => {
    //     this.setState({
    //         ...this.state, comments: dataFromModal,
    //     });
    // }

    onAttorneyReviewedChange= (e) => {
        let step7 = Object.assign({}, this.state.step7);
        step7[e.target.name] = [e.target.value];
        return this.setState({step7});
    };

    onCancelButtonClicked = () => {

    }    
    onSubmitButtonClicked = () => {
        this.setState({visible: true});
    }
    onHandleModalOkClicked = (dataFromModal) => {
        this.setState({visible: false});
        this.props.onAccordionSubmit(this.state.step7, "step7");
        this.props.onCommentsSubmit(dataFromModal);
    }

    onHandleModalCanceledClicked = () => {
        this.setState({visible: false});
        this.props.onAccordionSubmit(this.state.step7, "step7");
    }
    render() { 
        const { step7, errors, visible } = this.state;

        return ( 
            <div>
                    <Form>  
                        <Row>
                            <Col>
                                <Card title="Attorney Reviewed Docs">
                                    
                                    <Form.Item error={!!errors.dependencies}  label="Any Dependencies?">                                        
                                        <RadioGroup name="dependencies" options={options} onChange={this.onAttorneyReviewedChange} />
                                        {errors.dependencies && <InlineError text= {errors.dependencies}/>}
                                    </Form.Item>

                                    <Form.Item error={!!errors.attroneyReviewedAllDocsFromBusiness}  label="Did Attorney Review all documents?">                                        
                                        <RadioGroup name="attroneyReviewedAllDocsFromBusiness" options={options} onChange={this.onAttorneyReviewedChange} />
                                        {errors.attroneyReviewedAllDocsFromBusiness && <InlineError text= {errors.attroneyReviewedAllDocsFromBusiness}/>}
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
 
export default AttorneyReviewedDocs;