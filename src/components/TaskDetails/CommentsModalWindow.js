import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Modal, Form, Input, Row, Col, Button, DatePicker, Card, Collapse} from 'antd';

const { TextArea } = Input;
const Panel = Collapse.Panel;

class CommentsModalWindow extends Component {
    constructor(props) {
        super(props);    
        this.state = {
            taskSelected:{}            
        }    
    }
    componentDidUpdate(prevProps, prevState, snapshot){        
    };
    componentDidMount() {        
    };
    static getDerivedStateFromProps(nextProps, prevState) {                       
        if(nextProps.isUserLoggedIn){
            if(nextProps.taskSelected){
                if(Object.keys(nextProps.taskSelected).length > 0){
                    return { taskSelected :  nextProps.taskSelected };
                }        
            }
        } else{
           // nextProps.history.push("/login");
        }               
        return null;
    };
    handleOk = (e) => {
        this.props.onHandleCommentsModalOkClicked();                
    }
    
    handleCancel = (e) => {
        this.props.onHandleCommentsModalCanceledClicked();
    }
    render() {         
        const { comments } = this.state.taskSelected;
        return ( 
            <div>
                <Row>
                    <Col>                            
                            <Modal title="Comments" visible={this.props.isVisible} onOk={this.handleOk} onCancel={this.handleCancel}>                                
                                           
                                    <Collapse accordion>
                                {comments && (comments.map((item, i)=>{
                                    if(item.taskMsg !== ""){
                                        return (
                                            <Panel header={item.createdAt} key={i}>
                                                <Card>
                                                    <Form.Item label="Bussiness Comments">
                                                        <TextArea type="text" name="businessMsg" value={item.businessMsg} placeholder= "Add Task Comments if any" />                                   
                                                    </Form.Item>
                                                </Card>
                                                <Card>
                                                <Form.Item label="Employee Comments">
                                                    <TextArea type="text" name="empMsg" value={item.empMsg}  placeholder= "Add Task Comments if any" />                                   
                                                    </Form.Item>
                                                </Card>
                                                <Card>
                                                <Form.Item label="Task Comments">
                                                    <TextArea type="text" name="taskMsg" value={item.taskMsg} placeholder= "Add Task Comments if any" />                                   
                                                    </Form.Item>
                                                </Card>                                
                                        </Panel>);}                           
                                    }))}                            
                                    </Collapse>
                                
                            </Modal>                        
                    </Col>
                </Row>
            </div>
         );
    }
}


 
export default CommentsModalWindow;