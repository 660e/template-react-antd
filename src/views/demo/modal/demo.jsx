import { Component } from 'react';
import { Input, Modal } from 'antd';

class DemoModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      input: ''
    };
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  show = params => {
    this.setState({ isModalVisible: true });
    console.log(params);
  };

  cancel = () => {
    this.setState({ isModalVisible: false });
  };

  ok = () => {
    this.cancel();
    this.props.confirm({ b: this.state.input });
  };

  onChange = e => {
    this.setState({ input: e.target.value });
  };

  render() {
    return (
      <Modal title="Modal" width="300px" visible={this.state.isModalVisible} onOk={this.ok} onCancel={this.cancel}>
        <Input value={this.state.input} onChange={this.onChange} />
      </Modal>
    );
  }
}

export default DemoModal;
