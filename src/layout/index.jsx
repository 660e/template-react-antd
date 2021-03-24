import { Component, Suspense } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import { Layout, Menu, Button } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';
import { constantRoutes } from '../router';

import styles from './index.module.scss';

const { Header, Sider, Content } = Layout;
const { Item } = Menu;

class LayoutComponent extends Component {
  loggedIn = () => {
    return !!sessionStorage.getItem('token');
  };

  logout = () => {
    sessionStorage.removeItem('token');
    this.props.history.push('/login');
  };

  render() {
    if (this.loggedIn()) {
      return (
        <Layout className={styles['ant-layout']}>
          <Header className={styles['ant-layout-header']}>
            <Button type="primary" shape="circle" icon={<PoweroffOutlined />} onClick={this.logout} danger></Button>
          </Header>
          <Layout>
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
                {constantRoutes.map(r => {
                  return <Route key={r.path} path={r.path} component={r.component} exact />;
                })}
              </Suspense>
            </Content>
          </Layout>
        </Layout>
      );
    } else {
      return <Redirect to="/login" />;
    }
  }
}

export default LayoutComponent;
