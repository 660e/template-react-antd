import { RouterProvider } from 'react-router-dom';
import { StyleProvider } from '@ant-design/cssinjs';

import router from './router';

export default function App() {
  return (
    <StyleProvider hashPriority="high">
      <RouterProvider router={router} />
    </StyleProvider>
  );
}
