import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Modal, Form, Input, Row, Col, Button, DatePicker, Card, Collapse} from 'antd';
const { TextArea } = Input;
const Panel = Collapse.Panel;

class DocsChecklistModalWindow extends Component {
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
        }              
        return null;
    };
    handleOk = (e) => {
        this.props.onHnleDLMdlOkClckd();
    }
    
    handleCancel = (e) => {
        this.props.onHnleDLMdlCnclClckd();
    }
    render() {         
        const { comments } = this.state.taskSelected;
        return ( 
            <div>
                <Row>
                    <Col>                            
                        <Modal title="List of Documents" visible={this.props.isVisible} onOk={this.handleOk} onCancel={this.handleCancel}>                                
                                        
                            
                        </Modal>                        
                    </Col>
                </Row>
            </div>
         );
    }
}


 
export default DocsChecklistModalWindow;