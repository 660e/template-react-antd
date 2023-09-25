import { Route, Routes } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import type { MenuProps } from 'antd';

import { routes } from '../router';

const { Content, Header, Sider } = Layout;

console.log(routes);

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
        <Layout>
          <Content>
            <Routes>
              <Route path="/examples/axios" element={<div>/examples/axios</div>} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}
