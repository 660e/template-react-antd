import { Component } from 'react';
import { Button, Form, Input } from 'antd';

const { Item } = Form;

const rules = {
  phone: [
    { required: true, message: 'required' },
    { pattern: /^1[3|4|5|7|8][0-9]{9}$/, message: 'not valid' }
  ],
  password: [{ required: true, message: 'required' }],
  confirmPassword: [
    { required: true, message: 'required' },
    ({ getFieldValue }) => ({
      validator(rule, value) {
        if (!value || getFieldValue('password') === value) {
          return Promise.resolve();
        }
        return Promise.reject(new Error('not match'));
      }
    })
  ]
};

class FormComponent extends Component {
  onFinish = values => {
    console.log(values);
  };

  render() {
    return (
      <Form style={{ width: 500 }} labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} onFinish={this.onFinish}>
        <Item label="Phone" name="phone" rules={rules.phone} hasFeedback>
          <Input />
        </Item>
        <Item label="Password" name="password" rules={rules.password} hasFeedback>
          <Input />
        </Item>
        <Item label="Confirm Password" name="confirmPassword" rules={rules.confirmPassword} dependencies={['password']} hasFeedback>
          <Input />
        </Item>
        <Item label="Tag" name="tag">
          <Input />
        </Item>
        <Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Item>
      </Form>
    );
  }
}

export default FormComponent;
