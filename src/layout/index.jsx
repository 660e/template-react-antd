import { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';

import ApiComponent from '../views/demo/api.jsx';
import ChartComponent from '../views/demo/chart.jsx';
import FiltersComponent from '../views/demo/filters.jsx';
import FormComponent from '../views/demo/form.jsx';
import MockComponent from '../views/demo/mock.jsx';
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
              <Menu.Item className={styles['ant-menu-item']} key="api">
                <Link to="/api">api</Link>
              </Menu.Item>
              <Menu.Item className={styles['ant-menu-item']} key="chart">
                <Link to="/chart">chart</Link>
              </Menu.Item>
              <Menu.Item className={styles['ant-menu-item']} key="filters">
                <Link to="/filters">filters</Link>
              </Menu.Item>
              <Menu.Item className={styles['ant-menu-item']} key="form">
                <Link to="/form">form</Link>
              </Menu.Item>
              <Menu.Item className={styles['ant-menu-item']} key="mock">
                <Link to="/mock">mock</Link>
              </Menu.Item>
              <Menu.Item className={styles['ant-menu-item']} key="modal">
                <Link to="/modal">modal</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Content className={styles['ant-layout-content']}>
            <Switch>
              <Route path="/api" component={ApiComponent} exact />
              <Route path="/chart" component={ChartComponent} exact />
              <Route path="/filters" component={FiltersComponent} exact />
              <Route path="/form" component={FormComponent} exact />
              <Route path="/mock" component={MockComponent} exact />
              <Route path="/modal" component={ModalComponent} exact />
            </Switch>
          </Content>
        </Router>
      </Layout>
    );
  }
}

export default LayoutComponent;
