import styles from './index.module.scss';
import { Layout } from 'antd';

const { Sider, Content } = Layout;

function MainLayout() {
  return (
    <Layout className={styles['ant-layout']}>
      <Layout>
        <Sider>Sider</Sider>
        <Content>Content</Content>
      </Layout>
    </Layout>
  );
}

export default MainLayout;
