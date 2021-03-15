import { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';

import ApiComponent from '../views/demo/api.jsx';
import ChartComponent from '../views/demo/chart.jsx';
import ModalComponent from '../views/demo/modal.jsx';

import styles from './index.module.scss';

const { Sider, Content } = Layout;

class LayoutComponent extends Component {
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
              <Menu.Item className={styles['ant-menu-item']} key="3">
                <Link to="/modal">modal</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Content className={styles['ant-layout-content']}>
            <Switch>
              <Route path="/api" component={ApiComponent} exact />
              <Route path="/chart" component={ChartComponent} exact />
              <Route path="/modal" component={ModalComponent} exact />
            </Switch>
          </Content>
        </Router>
      </Layout>
    );
  }
}

export default LayoutComponent;
