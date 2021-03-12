import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';

import Home from '../views/home.jsx';
import About from '../views/about.jsx';

import styles from './index.module.scss';

const { Sider, Content } = Layout;

export default class MainLayout extends React.Component {
  render() {
    return (
      <Layout className={styles['ant-layout']}>
        <Router>
          <Sider>
            <Menu className={styles['ant-menu-vertical']} theme="dark">
              <Menu.Item className={styles['ant-menu-item']} key="1">
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item className={styles['ant-menu-item']} key="2">
                <Link to="/about">About</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Content className={styles['ant-layout-content']}>
            <Switch>
              <Route path="/" component={Home} exact></Route>
              <Route path="/about" component={About} exact></Route>
            </Switch>
          </Content>
        </Router>
      </Layout>
    );
  }
}
