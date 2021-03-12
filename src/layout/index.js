import styles from './index.module.scss';
import { Layout, Menu } from 'antd';

const { Sider, Content } = Layout;

function MainLayout() {
  return (
    <Layout className={styles['ant-layout']}>
      <Layout>
        <Sider>
          <Menu className={styles['ant-menu-vertical']} theme="dark">
            <Menu.Item className={styles['ant-menu-item']} key="1">
              AAA
            </Menu.Item>
            <Menu.Item className={styles['ant-menu-item']} key="2">
              BBB
            </Menu.Item>
            <Menu.Item className={styles['ant-menu-item']} key="3">
              CCC
            </Menu.Item>
          </Menu>
        </Sider>
        <Content>Content</Content>
      </Layout>
    </Layout>
  );
}

export default MainLayout;
