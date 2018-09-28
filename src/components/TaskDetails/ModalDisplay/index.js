import React, {Component} from 'react';
import PropTypes from 'prop-types';
import InlineError from '../../messages/InlineError';
import { Modal, Form, Input, Row, Col, Button, DatePicker, Card, Alert} from 'antd';
import moment from 'moment';

const { TextArea } = Input;

class ModalDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            visible: false,
            showError:false,
            errorMessage:"",
            comments:{
                taskMsg:"",
                empMsg:"",
                businessMsg:"",
                createdAt:"",
                loggedInUser:"",
                taskAssignedTo:"",
                taskToBeCmpDueDate:"",
                taskCmpExpDueDate:"",
              },
              errors: {},
         }
    }

    // showModal = () => {
    //     this.setState({
    //       visible: true,
    //     });
    //   }

    handleOk = (e) => {
        //this.setState({visible: false});
        //this.props.onModalClickParent(this.state.comments);
        if(this.state.comments.taskToBeCmpDueDate !== "" && this.state.comments.taskCmpExpDueDate !== "" && this.state.comments.taskAssignedTo !== ""){
            this.state.comments.createdAt = moment().format("mm/dd/yyyy");
            this.props.onHandleModalOkClicked(this.state.comments);
        } else{
            this.setState({showError:true, errorMessage:"Enter the Dates and Assign the Task before closing"}); 
        }
    }
    
    handleCancel = (e) => {
        //this.setState({visible: false});
        this.props.onHandleModalCanceledClicked();
      }

    
    onCommentsPropertiesChange = (e) => {
        let comments = Object.assign({}, this.state.comments);
        comments[e.target.name] = e.target.value;
        return this.setState({comments});
    };

    onTaskDueDateChange = (e, date) => {
        let comments = Object.assign({}, this.state.comments);
        comments["taskToBeCmpDueDate"] = date;
        return this.setState({comments});
    };

    onTaskExpDateChange = (e, date) => {
        let comments = Object.assign({}, this.state.comments);
        comments["taskCmpExpDueDate"] = date;
        return this.setState({comments});
    };

    onErrorClose= () => {
        this.setState({showError:false});
    }
    render() { 
        const { errors, comments, errorMessage, showError } = this.state;
        return ( 
            <div>
                {showError && (<Alert message="Error" description={errorMessage} type="error" closable onClose={this.onErrorClose} />)} 
                <Row>
                    <Col>
                            {/* <Button type="primary" onClick={this.showModal}>
                            Add Comments
                            </Button> */}
                            <Modal title="Additional Comments" visible={this.props.isVisible} onOk={this.handleOk} onCancel={this.handleCancel}>
                                
                                <Form.Item error={!!errors.taskMsg}  label="Task Comments">
                                    <TextArea id="taskMsg" type="taskMsg" name="taskMsg" value={comments.taskMsg} onChange={this.onCommentsPropertiesChange} placeholder= "Add Task Comments if any" />
                                    {errors.taskMsg && <InlineError text= {errors.taskMsg}/>}
                                </Form.Item>

                                <Form.Item error={!!errors.empMsg}  label="Employee Comments">
                                    <TextArea id="empMsg" type="empMsg" name="empMsg" value={comments.empMsg} onChange={this.onCommentsPropertiesChange} placeholder= "Add Comments for Employees" />
                                    {errors.empMsg && <InlineError text= {errors.empMsg}/>}
                                </Form.Item>

                                <Form.Item error={!!errors.businessMsg}  label="Business Comments">
                                    <TextArea id="businessMsg" type="businessMsg" name="businessMsg" value={comments.businessMsg} onChange={this.onCommentsPropertiesChange} placeholder= "Add Business Comments if any" />
                                    {errors.businessMsg && <InlineError text= {errors.businessMsg}/>}
                                </Form.Item>

                                <Form.Item error={!!errors.taskToBeCmpDueDate} label="Task Completion Due Date">
                                    <DatePicker onChange={this.onTaskDueDateChange} placeholder= "Due Date" defaultValue={comments.taskToBeCmpDueDate}/>
                                    {errors.taskToBeCmpDueDate && <InlineError text= {errors.taskToBeCmpDueDate}/>}
                                </Form.Item>

                                <Form.Item error={!!errors.taskCmpExpDueDate} label="Task Completion Expected Date">
                                    <DatePicker onChange={this.onTaskExpDateChange} placeholder= "Expected Date" defaultValue={comments.taskCmpExpDueDate}/>
                                    {errors.taskCmpExpDueDate && <InlineError text= {errors.taskCmpExpDueDate}/>}
                                </Form.Item>

                                <Form.Item error={!!errors.taskAssignedTo} label="Task Assigned To">
                                    <Input id="taskAssignedTo" type="text" name="taskAssignedTo" value= {comments.taskAssignedTo} onChange={this.onCommentsPropertiesChange} placeholder="Task Assigned To" />
                                    {errors.taskAssignedTo && <InlineError text= {errors.taskAssignedTo}/>}
                                </Form.Item>
                            
                            </Modal>                        
                    </Col>
                </Row>
            </div>
         );
    }
}


 
export default ModalDisplay;