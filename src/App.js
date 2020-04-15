import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import fetchUserInfo from './services/userInfo';

const randomByte = () => Math.floor(255 * Math.random());
const generateColor = () => `rgba(${randomByte()},${randomByte()},${randomByte()},1.0)`;

const DATA = {
  datasets: [{
    data: [10, 20, 30],
    backgroundColor: (chart, dataIndex, dataset) => {
      const color = generateColor();
      console.log('backgroundColor', color);
      return color;
    }
    ,
  }],
  // These labels appear in the legend and in the tooltips when hovering different arcs
  labels: [
    'Red',
    'Yellow',
    'Blue',
  ],
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: DATA,
    };
  }

  componentDidMount() {
    fetchUserInfo('ana-maria-diaz').then((info) => {
      console.log('componentDidMount', info);

      const { chartData } = this.state;
      const { data } = chartData.datasets[0];
      const { labels } = chartData;

      data.length = 0;
      labels.length = 0;

      Object.keys(info.stats).forEach((key) => {
        labels.push(key);
        data.push(info.stats[key]);
        return chartData;
      });
      this.setState({ chartData });
    });
  }

  render() {
    const { chartData } = this.state;
    return (
      <div className="App">
        <h1>Hello world</h1>
        <Doughnut
          data={chartData}
          width={100}
          height={100}
          options={{ maintainAspectRatio: false }}
        />
      </div>
    );
  }
}
