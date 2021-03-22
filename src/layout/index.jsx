import { Component, Suspense } from 'react';
import { HashRouter as Router, Switch, Route, Link, withRouter } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { constantRoutes } from '../router';

import styles from './index.module.scss';

const { Sider, Content } = Layout;
const { Item } = Menu;

class LayoutComponent extends Component {
  render() {
    return (
      <Layout className={styles['ant-layout']}>
        <Router>
          <Sider>
            <Menu className={styles['ant-menu-vertical']} defaultSelectedKeys={this.props.location.pathname} theme="dark">
              {constantRoutes.map(r => {
                return (
                  <Item className={styles['ant-menu-item']} key={r.path}>
                    <Link to={r.path}>{r.name}</Link>
                  </Item>
                );
              })}
            </Menu>
          </Sider>
          <Content className={styles['ant-layout-content']}>
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                {constantRoutes.map(r => {
                  return <Route key={r.path} path={r.path} component={r.component} exact />;
                })}
              </Switch>
            </Suspense>
          </Content>
        </Router>
      </Layout>
    );
  }
}

export default withRouter(LayoutComponent);
