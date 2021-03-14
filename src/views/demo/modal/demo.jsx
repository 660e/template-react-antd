import React from 'react';
import { Modal } from 'antd';

export default class DemoModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false
    };
    // console.log(props);
  }

  componentDidMount() {
    // console.log('componentDidMount');
  }

  //

  render() {
    const isModalVisible = this.props.abc;
    // const ok = this.props.ok;
    // console.log(isModalVisible);
    return (
      <Modal title="弹窗" width="300px" visible={isModalVisible} onOk={this.ok} onCancel={this.cancel}>
        <p>Lorem ipsum dolor sit amet.</p>
      </Modal>
    );
  }

  cancel = () => {
    this.setState({ isModalVisible: false });
  };

  ok = () => {
    this.props.ok();
    // this.cancel();
    console.log(123);
    // this.$emit('confirm', { b: this.input });
  };
}
