//     <demo-dialog ref="demoDialog" @confirm="onConfirm"></demo-dialog>

// <script>
// import DemoDialog from './dialog/demo.vue';
// export default {
//   methods: {
//     openDialog() {
//       this.$refs.demoDialog.open({ a: 1 });
//     },
//     onConfirm(resolve) {
//       window.console.log(resolve);
//     }

import React from 'react';
import { Button } from 'antd';
import DemoModal from './modal/demo.jsx';

export default class ModalComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      visible: false
    };
  }

  render() {
    const visible = this.state.visible;
    console.log(visible);
    return (
      <div>
        <Button onClick={this.showModal}>打开弹窗</Button>
        <DemoModal abc={visible} ok={this.ok} />
      </div>
    );
  }

  showModal = () => {
    this.setState({ visible: true });
  };

  ok = () => {
    this.setState({ visible: false });
  };
}
