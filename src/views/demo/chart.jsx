import { Component } from 'react';
import { echarts } from '@/utils/echarts.js';

const option = {
  tooltip: {
    trigger: 'item',
    formatter: '{c}'
  },
  legend: {
    orient: 'vertical',
    top: 0,
    left: 0,
    data: ['A', 'B', 'C', 'D', 'E']
  },
  series: [
    {
      type: 'pie',
      radius: ['50%', '70%'],
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '24'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 335, name: 'A' },
        { value: 310, name: 'B' },
        { value: 234, name: 'C' },
        { value: 135, name: 'D' },
        { value: 784, name: 'E' }
      ]
    }
  ]
};

class ChartComponent extends Component {
  componentDidMount() {
    echarts.init(document.getElementById('demo')).setOption(option);
  }

  render() {
    return <div id="demo" style={{ height: 400, width: 400 }}></div>;
  }
}

export default ChartComponent;
