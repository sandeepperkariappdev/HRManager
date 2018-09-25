import React, {Component} from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import {  Layout, Form, Row, Col, Card, Radio, Button, Collapse, Tabs, Input, InputNumber, Select, Upload, Icon } from 'antd';

const { Header, Footer, Sider, Content } = Layout;
const TabPane = Tabs.TabPane;
const Panel = Collapse.Panel;
const { TextArea } = Input;
const Option = Select.Option;
const RadioGroup = Radio.Group;

class CommentsDisplay extends Component {
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
            nextProps.history.push("/login");
        }               
        return null;
    };
    render() { 
        const { comments } = this.state.taskSelected;
        return (<div>             
                <Layout>
                <Header className="zero-padding">
                    <Row>
                        <Col xs={10} sm={10} md={10} lg={10} xl={10}>   
                            {/* <Button type="primary">
                                <Link to={{ pathname: "/main" }}>Back</Link>
                            </Button> */}
                        </Col>
                        <Col xs={14} sm={14} md={14} lg={14} xl={14}>   
                            <h3 className="color-white">Comments</h3>
                        </Col>
                    </Row>                                        
                </Header>
                <Content>       
                    <Card>             
                       <Collapse accordion>
                       {comments && (comments.map((item, i)=>{
                           if(item.taskMsg !== ""){
                            return (
                                <Panel header="Comments" key={i}>
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
                            </Panel>);    
                           }                           
                       }))}                            
                        </Collapse>
                    </Card>                   
                </Content>
                <Footer></Footer>
                </Layout>
            </div>);
    }
}

const mapStateToProps = state => {
    
    return {
        isUserLoggedIn: state.auth.loggedIn,
        userObject: state.auth.user,
        taskSelected : state.home.taskSelected
    };
};
 
export default connect(mapStateToProps)(CommentsDisplay);