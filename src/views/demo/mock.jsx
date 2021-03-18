import { Component } from 'react';
import { Button, Space } from 'antd';
import demoApi from '../../api/demo.js';

class MockComponent extends Component {
  constructor() {
    super();
    this.state = {
      results: {}
    };
  }

  create = () => {
    demoApi.getMockData1().then(response => this.setState({ results: response }));
  };

  intercept = () => {
    demoApi.getMockData2().then(response => this.setState({ results: response.data }));
  };

  render() {
    return (
      <div>
        <Space size={10}>
          <Button type="primary" onClick={this.create}>
            Create
          </Button>
          <Button type="primary" onClick={this.intercept}>
            Intercept
          </Button>
        </Space>
        <pre style={{ paddingTop: 20 }}>{JSON.stringify(this.state.results, null, 2)}</pre>
      </div>
    );
  }
}

export default MockComponent;
