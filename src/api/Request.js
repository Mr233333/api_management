import {Input, Select, Icon, Layout} from 'antd';
import React, {Component} from 'react';

const Option = Select.Option;

const {Header, Footer, Sider, Content} = Layout;
const method = (
    <Select defaultValue="GET" style={{width: 80}}>
        <Option value="GET">GET</Option>
        <Option value="POST">POST</Option>
        <Option value="PUT">PUT</Option>
        <Option value="DELETE">DELETE</Option>
        <Option value="PATCH">PATCH</Option>
    </Select>
);

class RequestPage extends Component {
    render() {
        return <div>
            <Layout>
                <div style={{marginBottom: 16}}>
                    <Input addonBefore={method} defaultValue="localhost"/>
                </div>
            </Layout>
        </div>
    }
}

export default RequestPage;