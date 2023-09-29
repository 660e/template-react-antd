import { useState } from 'react';
import { Button, Input } from 'antd';
import { examplesApi } from '@/apis/examples';

import ExampleModalConfirm from './modal-confirm';

function uid(): string {
  return new Date().getTime().toString();
}

export default function ExampleModal() {
  const [seed, setSeed] = useState(uid());
  const [open, setOpen] = useState(false);
  const [pre, setPre] = useState();
  const [confirmLoading, setConfirmLoading] = useState(false);

  const random = () => {
    setSeed(uid());
  };

  const ok = () => {
    setConfirmLoading(true);
    examplesApi
      .randomuser({ seed })
      .then(r => {
        setPre(r.data);
        cancel();
      })
      .finally(() => {
        setConfirmLoading(false);
      });
  };
  const cancel = () => {
    setOpen(false);
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
        <Button onClick={() => setOpen(!open)} type="primary">
          get
        </Button>
      </div>
      <pre>{JSON.stringify(pre, null, 2)}</pre>
      <ExampleModalConfirm title="Confirm" open={open} seed={seed} onOk={ok} onCancel={cancel} confirmLoading={confirmLoading} closeIcon={false} />
    </div>
  );
}
