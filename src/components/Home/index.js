import React, {Component} from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { Menu, Icon, Card, List, Button, Tabs, Row, Col, Layout, Badge} from 'antd';
import { Link } from "react-router-dom";
import { getTaskListFromServer } from "../../redux/actions/home";

const { Header, Sider, Content } = Layout;
const TabPane = Tabs.TabPane;
const SubMenu = Menu.SubMenu;


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            taskList:[],
            collapsed: false,
         }
    }
    
    componentDidUpdate(prevProps) {
        //console.log();
    }
    componentDidMount(){
        this.props.dispatch(getTaskListFromServer()); 
    }    
    static getDerivedStateFromProps(props, state) {  
        return state;
      }

    onTaskClick = (empId) => {
        if(empId){
            this.props.history.push("/taskDetails"+"/"+empId);    
        }
        
    };

    toggleCollapsed = () => {
        this.setState({collapsed: !this.state.collapsed});
    };
                            
    render() { 
        const { taskList } = this.props;
        return ( 
            <div>
            <Layout>                         
                    <Header >                        
                        <Row>
                            <Col xs={14} sm={14} md={14} lg={14} xl={14}>   
                                <h3 className="color-white">Home</h3>
                            </Col>
                            
                        </Row>
                    </Header>
                    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>                    
                        <Row>
                            <Col span={8}> <Link to={{pathname: "/createTask"}}>Create Task</Link> </Col>
                            <Col span={8} offset={8}><Link to={{pathname: "/signup"}}>Signup Business User</Link></Col>
                        </Row>
                        <Card>
                            <Tabs defaultActiveKey="1" >
                                <TabPane tab="Created Tasks" key="1">
                                    <List bordered dataSource={taskList} renderItem={item => 
                                        { 
                                            return((item.empDetails.taskInfo.isTaskCreated || true) && (<List.Item onClick={() => this.onTaskClick(item.empDetails.empId)}><Badge count={"P:"+item.empDetails.taskInfo.taskPrioirty} />{item.empDetails.firstName} {item.empDetails.lastName} {item.empDetails.taskInfo.applicationType} </List.Item>))
                                        }}/>
                                </TabPane>
                                <TabPane tab="Pending Tasks" key="2">
                                    <List bordered dataSource={taskList} renderItem={item => 
                                        {
                                            return((item.empDetails.taskInfo.isTaskPending || true) ? (<List.Item onClick={() => this.onTaskClick(item.empDetails.empId)}><Badge count={"P:"+item.empDetails.taskInfo.taskPrioirty} />{item.empDetails.firstName} {item.empDetails.lastName} {item.empDetails.taskInfo.applicationType}</List.Item>) : (<List.Item></List.Item>))
                                        }}/>
                                </TabPane>
                                <TabPane tab="Completed" key="3">
                                    <List bordered dataSource={taskList} renderItem={item =>
                                        {
                                            return ((item.empDetails.taskInfo.isTaskCompleted || true) ? (<List.Item onClick={() => this.onTaskClick(item.empDetails.empId)}><Badge count={"P:"+item.empDetails.taskInfo.taskPrioirty} />{item.empDetails.firstName} {item.empDetails.lastName} {item.empDetails.taskInfo.applicationType}</List.Item>) : (<List.Item></List.Item>))
                                            }}/>
                                </TabPane>
                            </Tabs>
                        </Card>
                    </Content>            
            </Layout></div>);
    }
}

const mapStateToProps = state => {
    return {
        isUserLoggedIn: state.auth.loggedIn,
        userObject: state.auth.user,
        error: state.home.error,
        taskList: state.home.taskList,
    };
};

export default connect(mapStateToProps)(Home);