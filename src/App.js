import React from 'react';
import { fetchUserRecs, fetchUserInfo } from './services/userInfo';
import InputForm from './components/inputForm';
import GraphContainer from './containers/graphContainer';
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
  }

  componentDidMount() {
    const { user } = this.state;
    this.fetchUser(user);
  }

  onFetch = (user) => {
    this.setState({ user, chartData: null });
    this.fetchUser(user);
  }

  get contents() {
    const { chartData, person, user } = this.state;

    if (chartData) {
      const { name, picture } = person || { name: '', picture: '' };
      return (
        <div className="recommendations-container">
          <InputForm user={user} onFetch={this.onFetch} />
          <div className="user-container">
            <img src={picture} alt={name} />
            <h1>{name}</h1>
          </div>
          <GraphContainer chartData={chartData} />
        </div>
      );
    }

    if (person === '?') {
      return (
        <div className="recommendations-container">
          <InputForm user={user} onFetch={this.onFetch} />
          <div className="user-container">
            <h1>{`User ${user} not found!`}</h1>
          </div>
        </div>
      );
    }

    return (
      <div className="loading-msg">{`Loading data for user '${user}'. Please wait...`}</div>
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
