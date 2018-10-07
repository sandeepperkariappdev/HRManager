import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Modal, Form, Input, Row, Col, Button, DatePicker, Card, Collapse} from 'antd';
const { TextArea } = Input;
const Panel = Collapse.Panel;

class RolesRespModalWindow extends Component {
    constructor(props) {
        super(props);    
        this.state = {
            rolesRespText:""
        }    
    }
    componentDidUpdate(prevProps, prevState, snapshot){        
    };
    componentDidMount() {        
        const rolesRespText = this.props.rolesRespDraft; 
        this.setState({rolesRespText:this.props.rolesRespText});
    };
    
    handleOk = (e) => {
       
    }
    
    handleCancel = (e) => {
       
    }
    onRolesRespTextChange = (e) => { 
        let rolesRespText = this.state.rolesRespText;
        rolesRespText = e.target.value;
        return this.setState({rolesRespText});
    };
    render() {         
        const { rolesRespText } = this.state;
        return ( 
            <div>
                <Row>
                    <Col>                            
                        <Modal title="Roles and Responsibilities" visible={this.props.isVisible} onOk={this.handleOk} onCancel={this.handleCancel}>                                                                        
                            <TextArea placeholder="Enter Roles and Responsibities here" autosize={{ minRows: 2, maxRows: 200 }} onChange={this.onRolesRespTextChange} value={rolesRespText}/>
                        </Modal>                        
                    </Col>
                </Row>
            </div>
         );
    }
}

export default RolesRespModalWindow;