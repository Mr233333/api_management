import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import RequestPage from './api/Request'
import {Breadcrumb} from "antd";
import {Menu, Icon} from 'antd';
import {Layout} from 'antd';


import './App.css'

const {SubMenu} = Menu;

const {Header, Footer, Sider, Content} = Layout;


function App() {
    return (
        <div>
            <Layout>
                <Header style={{backgroundColor: '#FFFFFF'}} className="header">
                    <h1>API Management System</h1>
                </Header>
                <Layout>
                    <Sider>
                        <Menu collapsible
                              onClick={onMenuSelected}
                              mode={"inline"}
                        >
                            <SubMenu
                                key="sub1"
                                title={
                                    <span><Icon type="mail"/><span>Interface Management</span></span>
                                }
                            >
                                <Menu.ItemGroup key="g1" title="Item 1">
                                    <Menu.Item key="1">New Interface</Menu.Item>
                                    <Menu.Item key="2">Interface List</Menu.Item>
                                </Menu.ItemGroup>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Router>
                            <Breadcrumb>
                                <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                                <Breadcrumb.Item><Link to="/topics">About</Link></Breadcrumb.Item>
                            </Breadcrumb>

                            <Content>
                                <Route exact path="/" component={Home}/>
                                <Route path="/about" component={About}/>
                                <Route path="/topics" component={RequestPage}/>
                            </Content>
                        </Router>

                        <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
                    </Layout>
                </Layout>
            </Layout>
        </div>
    );
}

function Home() {
    return (
        <div>
            <h2>Home</h2>
        </div>
    );
}

function About() {
    return (
        <div>
            <h2>About</h2>
        </div>
    );
}

function onMenuSelected() {

}


export default App;
