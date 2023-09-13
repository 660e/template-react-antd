import { useState } from 'react';
import { Button } from 'antd';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className=" h-screen flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <Button onClick={() => setCount(count => count + 1)} type="primary">
          count is {count}
        </Button>
      </div>
    </>
  );
}

export default App;
