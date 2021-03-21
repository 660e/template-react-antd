import { Component } from 'react';
import demoApi from '../../api/demo.js';

class ApiComponent extends Component {
  constructor() {
    super();
    this.state = {
      results: []
    };
  }

  componentDidMount() {
    demoApi.getRandomuserData(1).then(response => this.setState({ results: response.data.results }));
  }

  componentWillUnmount() {
    this.setState = () => false;
  }

  render() {
    return <pre>{JSON.stringify(this.state.results, null, 2)}</pre>;
  }
}

export default ApiComponent;
