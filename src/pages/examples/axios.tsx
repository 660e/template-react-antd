import { useState } from 'react';
import { examplesApi } from '../../apis/examples';
import { apiController } from '../../utils/api';

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
  const sync = async (): Promise<void> => {
    try {
      const r = await examplesApi.randomuser();
      setPre(r.data);
    } catch (error: unknown) {
      console.log((error as Error).message);
    } finally {
      console.log('finally');
    }
  };
  const abort = (): void => {
    apiController.abort();
  };

  return (
    <div className="p-4">
      <div className="space-x-2 pb-4">
        <Button onClick={async} type="primary">
          async
        </Button>
        <Button onClick={sync} type="primary">
          sync
        </Button>
        <Button onClick={abort} type="primary" danger>
          abort
        </Button>
      </div>
      <pre>{JSON.stringify(pre, null, 2)}</pre>
    </div>
  );
}
