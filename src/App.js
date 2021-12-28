import React, { Component } from "react";
import { Link } from "react-router-dom";

// Ant Design
import { Layout, Menu } from "antd";

import "./App.css";

const { Header, Content, Footer } = Layout;

class App extends Component {
  render() {
    return (
      <>
        <Layout>
          <Header className="header">
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1">
                <Link to="teams">Teams</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="system-users">System users</Link>
              </Menu.Item>
            </Menu>
          </Header>
          <Content style={{ margin: "25px 0", padding: "0 50px" }}>
            <Layout
              className="site-layout-background"
              style={{ padding: "24px 0" }}
            >
              <Content style={{ padding: "0 24px", minHeight: 280 }}>
                Content
              </Content>
            </Layout>
          </Content>
          <Footer style={{ textAlign: "center" }}>AhanOnline ©2021</Footer>
        </Layout>
      </>
    );
  }
}

export default App;
