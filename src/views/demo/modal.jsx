import React, { Component } from 'react';
import { Button } from 'antd';
import DemoModal from './modal/demo.jsx';

class ModalComponent extends Component {
  constructor() {
    super();
    this.demoModal = React.createRef();
  }

  showModal = () => {
    this.demoModal.current.show({ a: 1 });
  };

  onConfirm = resolve => {
    console.log(resolve);
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Show Modal
        </Button>
        <DemoModal ref={this.demoModal} confirm={this.onConfirm} />
      </div>
    );
  }
}

export default ModalComponent;
