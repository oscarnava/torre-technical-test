import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { fetchUserRecs, fetchUserInfo } from './services/userInfo';
import './styles/app.sass';

const randomByte = () => Math.floor(255 * Math.random());
const randomColors = Array(100).fill(0).map(() => `rgba(${randomByte()},${randomByte()},${randomByte()},1.0)`);

const generateColor = ({ dataIndex }) => randomColors[dataIndex];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: 'ana-maria-diaz', // 'manolo',
      chartData: null,
      person: null,
    };
    this.inputReference = React.createRef();
  }

  componentDidMount() {
    const { user } = this.state;
    this.fetchUser(user);
  }

  onFetch = (e) => {
    e.preventDefault();
    const { value } = this.inputReference.current;
    console.log({ value });
    this.setState({ user: value, chartData: null });
    this.fetchUser(value);
  }

  get contents() {
    const { chartData, person, user } = this.state;
    if (chartData) {
      const { name, picture } = person || { name: '', picture: '' };
      return (
        <div className="recommendations-container">
          <div className="user-input-container">
            <form>
              <label htmlFor="public-id">
                User public id:
                <input id="public-id" type="text" defaultValue={user} ref={this.inputReference} />
              </label>
              <button type="submit" onClick={this.onFetch.bind(this)}>Fetch</button>
            </form>
          </div>
          <div className="user-container">
            <img src={picture} alt={name} />
            <h1>{name}</h1>
          </div>
          <div className="graph-container">
            <h2>Accumulated recommendations by weight</h2>
            <p>
              This graph shows the user&apos;s strengths in a graph weighted by who did the recommendation
              and the weight of the person&apos;s recommendation. This way we can have a quick image of the
              best-recommended strengths of the user considering the total weight of them.
            </p>
            <Doughnut data={chartData} options={{ maintainAspectRatio: false }} />
          </div>
        </div>
      );
    }
    return (
      <div className="loading-msg">Loading data...</div>
    );
  }

  fetchUser(user) {
    fetchUserInfo(user).then(({ person }) => {
      console.log({ person });
      this.fetchRecs(person);
    });
  }

  fetchRecs(person) {
    const { publicId } = person;
    fetchUserRecs(publicId).then(({ stats }) => {
      console.log('componentDidMount', stats);

      const data = [];
      const labels = [];
      const keys = Object.keys(stats).sort((a, b) => stats[b] - stats[a]);

      keys.forEach((key) => {
        labels.push(key);
        data.push(Math.round(stats[key]));
      });

      this.setState({
        person,
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

  render() {
    return (
      <div className="App">
        {this.contents}
      </div>
    );
  }
}
