import { Layout, Menu } from 'antd';
import type { MenuProps } from 'antd';

const { Header, Sider } = Layout;

const items: MenuProps['items'] = [
  { label: 'nav 1', key: 1 },
  { label: 'nav 2', key: 2 }
];

export default function AppLayout() {
  return (
    <Layout className="h-screen">
      <Header />
      <Layout>
        <Sider theme="light">
          <Menu items={items} className="text-right" />
        </Sider>
      </Layout>
    </Layout>
  );
}
