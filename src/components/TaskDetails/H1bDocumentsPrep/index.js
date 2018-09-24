import React, {Component} from 'react';
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


class H1bDocumentsPrep extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            step4:{
                taskName:"H1bDocumentsPrep",
                taskActive: true,
                actionAssignedTo:"Akash",
                dependencies:"",
                recvdVendorLtrFrmEmp:"",  
                tmStRecvdVendorLtrFrmEmp:"",  
                tmEdRecvdVendorLtrFrmEmp:"",        
                recvdClntLtrFrmEmp:"",
                tmStRecvdClntLtrFrmEmp:"",
                tmEdRecvdClntLtrFrmEmp:"",
                otherPendngDocs:"",
                tmStOtherPendngDocs:"",
                tmEdOtherPendngDocs:"",        
                jobTitleIsCorrect:"",
                empHasDependents:"",
                recvdAllH4DocsFrmEmp:"",
                tmStRecvdAllH4DocsFrmEmp:"",
                tmEdRecvdAllH4DocsFrmEmp:"",
                recvdAllH4DepDocsFrmEmp:"",
                tmStRecvdAllH4DepDocsFrmEmp:"",
                tmEdRecvdAllH4DepDocsFrmEmp:"",  
                recvdAllH1bDocsFrmEmp:"",
                tmStRecvdAllH1bDocsFrmEmp:"",
                tmEdRecvdAllH1bDocsFrmEmp:"",        
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



    onH1BDocPrepChange = (e) => {
        let step4 = Object.assign({}, this.state.step4);
        step4[e.target.name] = [e.target.value];
        return this.setState({step4});
    };
    
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

    onCancelButtonClicked = () => {

    }    
    onSubmitButtonClicked = () => {
        this.setState({visible: true});        
    }
    onHandleModalOkClicked = (dataFromModal) => {
        this.setState({visible: false});
        this.props.onAccordionSubmit(this.state.step4, "step4");
        this.props.onCommentsSubmit(dataFromModal);
    }

    onHandleModalCanceledClicked = () => {
        this.setState({visible: false});
        this.props.onAccordionSubmit(this.state.step4, "step4");
    }
    render() { 
        const { step4, errors, visible } = this.state;

        return ( 
            <div>
                    <Form>  
                        <Row>
                            <Col>
                                <Card title="H1B Documents Preparation">
                                    <Form.Item error={!!errors.dependencies}  label="Any Dependencies?">                                        
                                        <RadioGroup name="dependencies" options={options} onChange={this.onH1BDocPrepChange} />
                                        {errors.dependencies && <InlineError text= {errors.dependencies}/>}
                                    </Form.Item>

                                    <Form.Item error={!!errors.recvdVendorLtrFrmEmp}  label="Received Vendor Letter from Employee?">                                        
                                        <RadioGroup name="recvdVendorLtrFrmEmp" options={options} onChange={this.onH1BDocPrepChange} />
                                        {errors.recvdVendorLtrFrmEmp && <InlineError text= {errors.recvdVendorLtrFrmEmp}/>}
                                    </Form.Item>

                                    <Form.Item error={!!errors.recvdClntLtrFrmEmp}  label="Received Client Letter from Employee?">                                        
                                        <RadioGroup name="recvdClntLtrFrmEmp" options={options} onChange={this.onH1BDocPrepChange} />
                                        {errors.recvdClntLtrFrmEmp && <InlineError text= {errors.recvdClntLtrFrmEmp}/>}
                                    </Form.Item>

                                    <Form.Item error={!!errors.otherPendngDocs}  label="Any Pending Documents?">                                        
                                        <RadioGroup name="otherPendngDocs" options={options} onChange={this.onH1BDocPrepChange} />
                                        {errors.otherPendngDocs && <InlineError text= {errors.otherPendngDocs}/>}
                                    </Form.Item>

                                    <Form.Item error={!!errors.jobTitleIsCorrect}  label="Is Job Title Correct?">                                        
                                        <RadioGroup name="jobTitleIsCorrect" options={options} onChange={this.onH1BDocPrepChange} />
                                        {errors.jobTitleIsCorrect && <InlineError text= {errors.jobTitleIsCorrect}/>}
                                    </Form.Item>

                                    <Form.Item error={!!errors.empHasDependents}  label="Does Employee have any Dependents?">                                        
                                        <RadioGroup name="empHasDependents" options={options} onChange={this.onH1BDocPrepChange} />
                                        {errors.empHasDependents && <InlineError text= {errors.empHasDependents}/>}
                                    </Form.Item>

                                    <Form.Item error={!!errors.recvdAllH4DocsFrmEmp}  label="Received ALL H4 Docs from Employee?">                                        
                                        <RadioGroup name="recvdAllH4DocsFrmEmp" options={options} onChange={this.onH1BDocPrepChange} />
                                        {errors.recvdAllH4DocsFrmEmp && <InlineError text= {errors.recvdAllH4DocsFrmEmp}/>}
                                    </Form.Item>

                                    <Form.Item error={!!errors.recvdAllH4DepDocsFrmEmp}  label="Received ALL H4 Dep Docs from Employee?">                                        
                                        <RadioGroup name="recvdAllH4DepDocsFrmEmp" options={options} onChange={this.onH1BDocPrepChange} />
                                        {errors.recvdAllH4DepDocsFrmEmp && <InlineError text= {errors.recvdAllH4DepDocsFrmEmp}/>}
                                    </Form.Item>

                                    <Form.Item error={!!errors.recvdAllH1bDocsFrmEmp}  label="Received ALL H1 Docs from Employee?">                                        
                                        <RadioGroup name="recvdAllH1bDocsFrmEmp" options={options} onChange={this.onH1BDocPrepChange} />
                                        {errors.recvdAllH1bDocsFrmEmp && <InlineError text= {errors.recvdAllH1bDocsFrmEmp}/>}
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
 
export default H1bDocumentsPrep;