import React from 'react';
import demoApi from '../../api/demo.js';

export default class ApiComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      results: []
    };
  }

  componentDidMount() {
    demoApi.getRandomuserData(1).then(response => {
      this.setState({
        results: response.data.results
      });
    });
  }

  render() {
    const results = JSON.stringify(this.state.results, null, 2);
    return <pre>{results}</pre>;
  }
}
