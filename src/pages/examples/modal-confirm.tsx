import { Input, Modal } from 'antd';
import type { ModalProps } from 'antd';

interface ExampleModalConfirmProps extends ModalProps {
  seed: string;
}

export default function ExampleModalConfirm(props: ExampleModalConfirmProps) {
  return (
    <Modal {...props}>
      <Input value={props.seed} disabled />
    </Modal>
  );
}
