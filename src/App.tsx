import { StyleProvider } from '@ant-design/cssinjs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AppLayout from './layouts';

export default function App() {
  return (
    <StyleProvider hashPriority="high">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<AppLayout />} />
        </Routes>
      </BrowserRouter>
    </StyleProvider>
  );
}
