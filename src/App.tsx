import { StyleProvider } from '@ant-design/cssinjs';
import { useState } from 'react';

import { Button } from 'antd';

function App() {
  const [count, setCount] = useState(0);

  return (
    <StyleProvider hashPriority="high">
      <div className=" h-screen flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold underline mb-4">Hello world!</h1>
        <Button onClick={() => setCount(count => count + 1)} type="primary">
          count is {count}
        </Button>
      </div>
    </StyleProvider>
  );
}

export default App;
