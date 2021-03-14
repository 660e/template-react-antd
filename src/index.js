import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

// echarts
import * as echarts from 'echarts/core';
import { PieChart } from 'echarts/charts';
import { LegendComponent, TooltipComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';

// global
import 'antd/dist/antd.css';
import './styles/index.scss';

// echarts
echarts.use([PieChart, LegendComponent, TooltipComponent, CanvasRenderer]);
window.$echarts = echarts;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
