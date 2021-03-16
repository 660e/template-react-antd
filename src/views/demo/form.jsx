import { Component } from 'react';
import { Button, Form, Input } from 'antd';

const rules = {
  phone: [{ required: true, message: 'required' }],
  password: [{ required: true, message: 'required' }],
  verifyPassword: [{ required: true, message: 'required' }]
};

class FormComponent extends Component {
  constructor() {
    super();
    this.state = {
      forms: {
        phone: '',
        password: '',
        verifyPassword: '',
        tag: ''
      }
    };
  }

  onFinish = () => {
    console.log('onFinish');
  };

  render() {
    return (
      <Form style={{ width: 420 }} labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} onFinish={this.onFinish}>
        <Form.Item label="Phone" name="phone" rules={rules.phone}>
          <Input />
        </Form.Item>
        <Form.Item label="Password" name="password" rules={rules.password}>
          <Input />
        </Form.Item>
        <Form.Item label="VerifyPassword" name="verifyPassword" rules={rules.verifyPassword}>
          <Input />
        </Form.Item>
        <Form.Item label="Tag">
          <Input />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default FormComponent;
