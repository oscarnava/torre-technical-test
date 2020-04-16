import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { fetchUserRecs, fetchUserInfo } from './services/userInfo';
import './styles/app.sass';
import Globals from './globals';

const { GRAPH_COLORS } = Globals;
const generateColor = ({ dataIndex }) => GRAPH_COLORS[dataIndex];

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
    this.setState({ user: value, chartData: null });
    this.fetchUser(value);
  }

  get contents() {
    const { chartData, person, user } = this.state;

    const inputForm = (
      <div className="user-input-container">
        <form>
          <label htmlFor="public-id">
            User public id:
            <input id="public-id" type="text" defaultValue={user} ref={this.inputReference} />
          </label>
          <button type="submit" onClick={this.onFetch}>Fetch</button>
        </form>
      </div>
    );

    if (chartData) {
      const { name, picture } = person || { name: '', picture: '' };
      return (
        <div className="recommendations-container">
          {inputForm}
          <div className="user-container">
            <img src={picture} alt={name} />
            <h1>{name}</h1>
          </div>
          <div className="graph-container">
            <h2>Accumulated recommendations by weight</h2>
            <p>
              This graph shows the user&apos;s strengths in a graph weighted by who did the recommendation,
              and the weight of the person&apos;s recommendation. This way we can have a quick image of the
              best-recommended strengths of the user considering the total weight of them.
            </p>
            <Doughnut data={chartData} options={{ maintainAspectRatio: false }} />
          </div>
        </div>
      );
    }

    if (person === '?') {
      return (
        <div className="recommendations-container">
          {inputForm}
          <div className="user-container">
            <h1>{`User ${user} not found!`}</h1>
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
      if (person) {
        this.fetchRecs(person);
      } else {
        this.setState({ person: '?', chartData: null });
      }
    });
  }

  fetchRecs(person) {
    const { publicId } = person;
    fetchUserRecs(publicId).then(({ stats }) => {
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
