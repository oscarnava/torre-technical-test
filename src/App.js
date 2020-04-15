import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { fetchUserRecs, fetchUserInfo } from './services/userInfo';
import './styles/app.sass';

const randomByte = () => Math.floor(255 * Math.random());
const generateColor = () => `rgba(${randomByte()},${randomByte()},${randomByte()},1.0)`;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: 'ana-maria-diaz',
      chartData: null,
      person: null,
    };
  }

  componentDidMount() {
    const { user } = this.state;

    fetchUserInfo(user).then(({ person }) => {
      console.log({ person });
      this.setState({ person });
    });

    fetchUserRecs(user).then(({ stats }) => {
      console.log('componentDidMount', stats);

      const data = [];
      const labels = [];
      const keys = Object.keys(stats).sort((a, b) => stats[b] - stats[a]);

      keys.forEach((key) => {
        labels.push(key);
        data.push(Math.round(stats[key]));
      });

      this.setState({
        chartData: {
          datasets: [{
            data,
            backgroundColor: generateColor,
          }],
          labels,
        },
      });
    });
  }

  get contents() {
    const { chartData, person } = this.state;
    if (chartData) {
      const { name, picture } = person || { name: '', picture: '' };
      return (
        <div className="recommendations-container">
          <div className="user-container">
            <img src={picture} alt={name} />
            <h1>{name}</h1>
          </div>
          <div className="graph-container">
            <h2>Accumulated recommendations by weight</h2>
            <Doughnut data={chartData} options={{ maintainAspectRatio: false }} />
          </div>
        </div>
      );
    }
    return (
      <div className="loading-msg">Loading data...</div>
    );
  }

  render() {
    return (
      <div className="App">
        {this.contents}
      </div>
    );
  }
}
