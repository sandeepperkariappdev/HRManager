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

class H1bDocumentsHRReview extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            step5:{
                taskName:"Attorney",
                taskActive: true,
                actionAssignedTo:"Akash",
                isTaskCompleted:false,
                isTaskDependent:false,
                showAccordion:true,
                dependencyReason:"",
                dependencies:"",
                attroneyReceivedAllDocsFromBusiness:false,
                tmStAttroneyReceivedAllDocsFromBusiness:"",
                tmEdAttroneyReceivedAllDocsFromBusiness:"",
                attroneyReviewedAllDocsFromBusiness:true,
                tmStAttroneyReceivedAllDocsFromBusiness:"",
                tmEdAttroneyReceivedAllDocsFromBusiness:"",
                attorneyApprovesDocsReceivd:false,
                tmStAttorneyApprovesDocsReceivd:"",
                tmEdAttorneyApprovesDocsReceivd:"",
                anyPendingDocuments:false,
                pendingDocumentsList:"",
                dueDateFrPendgDocs:"",  
                attroneyFilesPetiton:true,
                tmStAttroneyFilesPetiton:"",
                tmEdAttroneyFilesPetiton:"",
                attroneyUpdatedFedexNumber:false,
                tmStAttroneyUpdatedFedexNumber:"",
                tmEdAttroneyUpdatedFedexNumber:"",
                mailTrackingNumberOfPetition:"",
                petitionReceiptNumber:"",
                isPremiumProcessing:false,
                expectedStatusChangeDate:"",
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
/*
        attroneyReceivedAllDocsFromBusiness:false,
        attroneyReviewedAllDocsFromBusiness:true,
        attorneyApprovesDocsReceivd:false,
        anyPendingDocuments:false,

        pendingDocumentsList:"",
        dueDateFrPendgDocs:"",  

        attroneyFilesPetiton:true,
        attroneyUpdatedFedexNumber:false,
        mailTrackingNumberOfPetition:"",
        petitionReceiptNumber:"",
        isPremiumProcessing:false,
        expectedStatusChangeDate:"",*/
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

                                    <Form.Item error={!!errors.attroneyReceivedAllDocsFromBusiness}  label="Did Attorney Received all documents from Business?">                                        
                                        <RadioGroup name="attroneyReceivedAllDocsFromBusiness" options={options} onChange={this.onH1BDocReviewChange} />
                                        {errors.attroneyReceivedAllDocsFromBusiness && <InlineError text= {errors.attroneyReceivedAllDocsFromBusiness}/>}
                                    </Form.Item>

                                    <Form.Item error={!!errors.attroneyReviewedAllDocsFromBusiness}  label="Did Attorney Reviewed all documents from Business?">                                        
                                        <RadioGroup name="attroneyReviewedAllDocsFromBusiness" options={options} onChange={this.onH1BDocReviewChange} />
                                        {errors.attroneyReviewedAllDocsFromBusiness && <InlineError text= {errors.attroneyReviewedAllDocsFromBusiness}/>}
                                    </Form.Item>

                                    <Form.Item error={!!errors.attorneyApprovesDocsReceivd}  label="Did Attorney Approves all documents Received from Business?">                                        
                                        <RadioGroup name="attorneyApprovesDocsReceivd" options={options} onChange={this.onH1BDocReviewChange} />
                                        {errors.attorneyApprovesDocsReceivd && <InlineError text= {errors.attorneyApprovesDocsReceivd}/>}
                                    </Form.Item>


                                    <Form.Item error={!!errors.anyPendingDocuments}  label="Any pending docuemtns to be Received from Business?">                                        
                                        <RadioGroup name="anyPendingDocuments" options={options} onChange={this.onH1BDocReviewChange} />
                                        {errors.anyPendingDocuments && <InlineError text= {errors.anyPendingDocuments}/>}
                                    </Form.Item>

                                    <Form.Item error={!!errors.attroneyFilesPetiton}  label="Attorney Files petition?">                                        
                                        <RadioGroup name="anyPendingDocuments" options={options} onChange={this.onH1BDocReviewChange} />
                                        {errors.attroneyFilesPetiton && <InlineError text= {errors.attroneyFilesPetiton}/>}
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