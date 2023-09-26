import { useState } from 'react';
import { examplesApi } from '../../apis/examples';

import { Button } from 'antd';

export default function ExampleAxios() {
  const [pre, setPre] = useState();

  const async = (): void => {
    examplesApi
      .randomuser()
      .then(r => {
        setPre(r.data);
      })
      .catch(error => {
        console.log(error.message);
      })
      .finally(() => {
        console.log('finally');
      });
  };

  return (
    <div className="p-4">
      <div className="space-x-2 pb-4">
        <Button onClick={async} type="primary">
          async
        </Button>
      </div>
      <pre>{JSON.stringify(pre, null, 2)}</pre>
    </div>
  );
}
