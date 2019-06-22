import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      curSteps: 0,
      stepsToday: 0
    }

    this.getToday = this.getToday.bind(this);
  }

  componentDidMount() {
    setInterval(this.getSteps.bind(this), 300);
  }

  getSteps() {
    axios.get('/steps')
      .then((data) => {
        let newData = data.data[0]
        this.setState({
          date: newData.date,
          curSteps: newData.curSteps,
          stepsToday: newData.stepsToday
        })
      })
  }

  getToday() {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    return mm + '/' + dd + '/' + yyyy;
  }

  render() {
    return (
      <div className="dashboard">
        <div>{this.state.date}</div>
        <div>Current Steps: {this.state.curSteps}</div>
        <div>Today: {this.state.stepsToday}</div>
      </div>
    )
  }
}

export default App;