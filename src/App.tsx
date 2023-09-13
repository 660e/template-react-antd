import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className=" h-screen flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <button onClick={() => setCount(count => count + 1)}>count is {count}</button>
      </div>
    </>
  );
}

export default App;
