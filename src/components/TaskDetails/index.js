import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import {  Layout, Row, Col, Card, Radio, Button, Collapse, Tabs, Input, InputNumber, Select, Upload, Icon } from 'antd';
import { Link } from "react-router-dom";
import H1bDocumentsHRReview from './H1bDocumentsHRReview';
import AttorneyReceivedDocs from './AttorneyReceivedDocs';
import H1bDocumentsPrep from './H1bDocumentsPrep';
import FromEmployee from './FromEmployee';
import Recruiter from './Recruiter';
import LCA from './LCA';
import CommentsModalWindow from './CommentsModalWindow';
import { taskDetailsSaveToFirebaseDatabase, getTaskByEmpId } from "../../redux/actions/home";

const { Header, Footer, Sider, Content } = Layout;
const TabPane = Tabs.TabPane;
const Panel = Collapse.Panel;
const { TextArea } = Input;
const Option = Select.Option;
const RadioGroup = Radio.Group;

class TaskDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            commentsVisible:false,
            taskSelected:{}            
        }
    };
    onCommentsSubmit = (data) => { 
        let taskSelected = this.state.taskSelected;
        taskSelected.comments.push(data);
        this.setState({taskSelected});
    }
    onTaskInfoSubmit = (data) => { 
        let taskSelected = this.state.taskSelected;
        taskSelected.taskInfo = data;
        this.setState({taskSelected});
    }
    onAccordionSubmit = (data, key) => { 
        let taskSelected = this.state.taskSelected;
        taskSelected.business[key] = data;
        if(key === "step3"){
            taskSelected.taskInfo["isTaskCreated"] = false;
            taskSelected.taskInfo["isTaskPending"] = true;
        }
        this.setState({taskSelected});
    }
    onEmpDetailsSubmit = (data, key) => {
        let taskSelected = this.state.taskSelected;
        taskSelected[key] = data;
        taskSelected["business"]["step1"] = Object.assign({},taskSelected["business"]["step1"], data);
        this.setState({taskSelected});
    }
    onRadioButtonChange=(e)=>{        
        this.setState({
            [e.target.name]: e.target.value,
        });
    }
    componentDidUpdate(prevProps, prevState, snapshot){        
    };
    componentDidMount() {
        this.props.dispatch(getTaskByEmpId(this.props.match.params.id));
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
    
    onSubmit = () => {
        this.props.dispatch(taskDetailsSaveToFirebaseDatabase(this.state.taskSelected));
        this.props.history.push("/home");
    };

    onChange = (e) => { 
        // let workLocation = this.state.workLocation;
        // workLocation[e.target.name] = [e.target.value];
        // return this.setState({workLocation});
    };
        
    onHandleCommentsModalCanceledClicked = () => {
        this.setState({commentsVisible: false});
    }
    onHandleCommentsModalOkClicked = (dataFromModal) => {
        this.setState({commentsVisible: false});
    }
    onCommentsButtonClicked = () =>{
        this.setState({commentsVisible: true});
    }

    render() {
        const { modeHor } = 'top';        
        const { modeVer } = 'left';
        const radioStyle = { display: 'block', height: '30px', lineHeight: '30px'};
        if(this.state.taskSelected === undefined || this.state.taskSelected  === undefined || this.state.taskSelected.empDetails === undefined || this.state.taskSelected.empDetails.workInfo === undefined){
            return (<div></div>);    
        } else{
        const { commentsVisible } =  this.state;
        const { workLocation } =  this.state.taskSelected.empDetails.workInfo; 
        const{ business } = this.state.taskSelected;
        return (
            <div>             
                <Layout>
                 {commentsVisible && (<CommentsModalWindow {...this.props} isVisible={commentsVisible} onHandleCommentsModalCanceledClicked={this.onHandleCommentsModalCanceledClicked}  onHandleCommentsModalOkClicked={this.onHandleCommentsModalOkClicked}/>)}   
                <Header className="zero-padding">
                    <Row>
                        <Col xs={6} sm={6} md={6} lg={6} xl={6}>   
                            <Button type="primary">
                                <Link to={{ pathname: "/main" }}>Back</Link>
                            </Button>
                        </Col>
                        <Col xs={14} sm={14} md={14} lg={14} xl={14}>   
                            <h3 className="color-white">Task Details</h3>
                        </Col>
                        <Col xs={4} sm={4} md={4} lg={4} xl={4}>   
                            {/* <Link to={{ pathname: "/commentsDisplay" }}>Comments</Link> */}
                            <h3 className="color-white" onClick={this.onCommentsButtonClicked}>Comments</h3>
                        </Col>
                    </Row>                                        
                </Header>
                <Content>       
                    <Card>             
                       <Collapse accordion>
                        <Panel header="From Employee" key="1" disabled={!business.step1.showAccordion} forceRender={business.step1.showAccordion}>
                            <FromEmployee  {...this.props} onCommentsSubmit={this.onCommentsSubmit} onEmpDetailsSubmit={this.onEmpDetailsSubmit} />
                        </Panel>
                        <Panel header="From Recruiter" key="2" disabled={!business.step2.showAccordion} forceRender={business.step2.showAccordion}>
                                <Recruiter {...this.props} onAccordionSubmit={this.onAccordionSubmit}
                                onTaskInfoSubmit={this.onTaskInfoSubmit} onCommentsSubmit={this.onCommentsSubmit}/>
                        </Panel>
                        <Panel header="LCA" key="3" disabled={!business.step3.showAccordion} forceRender={business.step3.showAccordion}>
                                <LCA {...this.props} onAccordionSubmit={this.onAccordionSubmit} onCommentsSubmit={this.onCommentsSubmit}/>
                        </Panel>
                        <Panel header="H1b Documents Preparation " key="4" disabled={!business.step4.showAccordion} forceRender={business.step4.showAccordion}>
                                <H1bDocumentsPrep {...this.props} onAccordionSubmit={this.onAccordionSubmit} onCommentsSubmit={this.onCommentsSubmit} />
                        </Panel>
                        <Panel header="Attorney" key="5" disabled={!business.step5.showAccordion} forceRender={business.step5.showAccordion}>
                                <H1bDocumentsHRReview {...this.props} onAccordionSubmit={this.onAccordionSubmit} onCommentsSubmit={this.onCommentsSubmit}/>
                        </Panel>
                        <Panel header="Petition Status" key="6" disabled={!business.step6.showAccordion} forceRender={business.step6.showAccordion}>
                                <AttorneyReceivedDocs {...this.props} onAccordionSubmit={this.onAccordionSubmit} onCommentsSubmit={this.onCommentsSubmit}/>
                        </Panel>
                        {/* <Panel header="Documents Reviewed by Attorney" key="7" disabled={!business.step7.showAccordion} forceRender={business.step7.showAccordion}>
                                <AttorneyReviewedDocs {...this.props} onAccordionSubmit={this.onAccordionSubmit} onCommentsSubmit={this.onCommentsSubmit}/>
                        </Panel>
                        <Panel header="Documents accepted by Attorney" key="8" disabled={!business.step8.showAccordion} forceRender={business.step8.showAccordion}>
                                <AttorneyFilesPetiton {...this.props} onAccordionSubmit={this.onAccordionSubmit} onCommentsSubmit={this.onCommentsSubmit}/>
                        </Panel> 
                        <Panel header="Attorney files the petition with USCIS and shares the FEDEX Number" key="9">
                        </Panel>
                        <Panel header="User receives the FEDEX number for the petition filed" key="10">
                        </Panel>*/}
                    </Collapse>
                    </Card>
                    <Card>
                        <Button type="primary" onClick={this.onSubmit}>Submit</Button>
                    </Card>
                </Content>
                <Footer></Footer>
                </Layout>
            </div>
        );
    }
    }
}

TaskDetails.defaultProps = {
    taskSelected:{}
}

const mapStateToProps = state => {
    return {
        isUserLoggedIn: state.auth.loggedIn,
        userObject: state.auth.user,
        taskSelected : state.home.taskSelected
    };
};


export default connect(mapStateToProps)(TaskDetails);