import React from 'react';
import { Button } from 'antd';
import DemoModal from './modal/demo.jsx';

export default class ModalComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      isModalVisible: false,
      modalParams: ''
    };
  }

  showModal = () => {
    // this.setState({ isModalVisible: true, modalParams: { a: 1 } });
    if (this.ChildPage) {
      this.ChildPage.open({ a: 1 }); //调用子组件的dream方法
    }
  };

  handleOk = params => {
    this.setState({ isModalVisible: false });
    console.log(params);
  };

  handleCancel = () => {
    this.setState({ isModalVisible: false });
  };

  render() {
    return (
      <div>
        <Button onClick={this.showModal}>打开对话框</Button>
        <DemoModal
          onRef={c => (this.ChildPage = c)}
          visible={this.state.isModalVisible}
          params={this.state.modalParams}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        />
      </div>
    );
  }
}

// https://zh-hans.reactjs.org/docs/refs-and-the-dom.html#callback-refs
// https://zh-hans.reactjs.org/docs/refs-and-the-dom.html#gatsby-focus-wrapper
