import { Component } from 'react';
import { Layout, Form, Input, Button } from 'antd';

import styles from './index.module.scss';

const { Item } = Form;
const { Password } = Input;

const initialValues = {
  username: 'admin',
  password: 12345
};

class LoginComponent extends Component {
  onFinish = values => {
    sessionStorage.setItem('token', values.username);
    this.props.history.push('/demo');
  };

  render() {
    return (
      <Layout className={styles['ant-layout']}>
        <Form className={styles['ant-form']} name="login" initialValues={initialValues} onFinish={this.onFinish}>
          <Item className={styles['ant-form-item']} name="username">
            <Input />
          </Item>
          <Item className={styles['ant-form-item']} name="password">
            <Password />
          </Item>
          <Item className={styles['ant-form-item']}>
            <Button className={styles['ant-btn']} type="primary" htmlType="submit">
              Login
            </Button>
          </Item>
        </Form>
      </Layout>
    );
  }
}

export default LoginComponent;
