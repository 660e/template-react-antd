import { useState } from 'react';
import { Button, Input } from 'antd';

export default function ExampleModal() {
  const [seed, setSeed] = useState(new Date().getTime());
  const [modal, setModal] = useState(false);

  const random = () => {
    setSeed(new Date().getTime());
  };

  return (
    <div className="p-4 space-y-4">
      <div className="w-96">
        <Input value={seed} disabled />
      </div>
      <div className="space-x-2">
        <Button onClick={random} type="primary">
          random
        </Button>
        <Button onClick={() => setModal(modal)} type="primary">
          get
        </Button>
      </div>
    </div>
  );
}
