import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';

import Api from '../views/demo/api.jsx';
import Chart from '../views/demo/chart.jsx';

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
                <Link to="/api">api</Link>
              </Menu.Item>
              <Menu.Item className={styles['ant-menu-item']} key="2">
                <Link to="/chart">chart</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Content className={styles['ant-layout-content']}>
            <Switch>
              <Route path="/api" component={Api} exact></Route>
              <Route path="/chart" component={Chart} exact></Route>
            </Switch>
          </Content>
        </Router>
      </Layout>
    );
  }
}
