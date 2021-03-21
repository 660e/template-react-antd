import { Component, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
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
            <Menu className={styles['ant-menu-vertical']} theme="dark">
              {constantRoutes.map(r => {
                return (
                  <Item className={styles['ant-menu-item']} key={r.path}>
                    <Link to={`/${r.path}`}>{r.path}</Link>
                  </Item>
                );
              })}
            </Menu>
          </Sider>
          <Content className={styles['ant-layout-content']}>
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                {constantRoutes.map(r => {
                  return <Route key={r.path} path={`/${r.path}`} component={r.component} exact />;
                })}
              </Switch>
            </Suspense>
          </Content>
        </Router>
      </Layout>
    );
  }
}

export default LayoutComponent;
