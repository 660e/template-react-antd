import { Component } from 'react';
import { Button, Input, Modal } from 'antd';

class DemoModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    if (props.onRef) {
      props.onRef(this);
    }
  }

  // componentDidMount() {
  //   console.log('componentDidMount');
  // }

  // componentDidUpdate() {
  //   if (this.props.visible) {
  //     console.log(this.props.params);
  //   }
  // }

  // componentWillUnmount() {
  //   console.log('componentWillUnmount');
  // }

  ok = () => {
    this.props.onOk({ b: this.state.value });
  };

  cancel = () => {
    this.props.onCancel();
  };

  onChange = e => {
    this.setState({ value: e.target.value });
  };

  open = params => {
    console.log(params);
  };

  render() {
    return (
      <Modal title="对话框" width="300px" visible={this.props.visible} onOk={this.ok} onCancel={this.cancel}>
        <Input value={this.state.value} onChange={this.onChange} />
        <Button onClick={this.test}>test</Button>
      </Modal>
    );
  }
}

export default DemoModal;
