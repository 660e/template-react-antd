import { Component } from 'react';
import { toThousandFilter } from '../../utils/filters.js';

class FiltersComponent extends Component {
  constructor() {
    super();
    this.state = {
      n: 1234567890
    };
  }
  render() {
    return (
      <h1>
        {this.state.n} -> {toThousandFilter(this.state.n)}
      </h1>
    );
  }
}

export default FiltersComponent;
