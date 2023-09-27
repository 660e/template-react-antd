import { Route, Routes, useNavigate } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import type { MenuProps } from 'antd';

import { routes } from '../router';

const { Content, Header, Sider } = Layout;

const items: MenuProps['items'] = routes.map(r => {
  return {
    label: r.label,
    key: r.path
  };
});

export default function AppLayout() {
  const navigate = useNavigate();

  return (
    <Layout className="h-screen">
      <Header />
      <Layout>
        <Sider theme="light">
          <Menu onClick={({ key }) => navigate(key)} items={items} className="h-full text-right" />
        </Sider>
        <Layout>
          <Content className="overflow-auto">
            <Routes>
              {routes.map(r => {
                return <Route key={r.path} path={r.path} element={r.element} />;
              })}
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}
