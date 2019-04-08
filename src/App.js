import React, { Component } from 'react';
import './App.css';
import events from './Events.json';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedLevel: null
    }
  }

  renderTags(tags) {
    return tags.map(tag => {
      return (
        <div>
          <p>{tag}</p>
        </div>
      )
    })
  }

  renderEvents() {

    const filtered = events.filter(event => {
      if (event.level === this.state.selectedLevel) {
        return true;
      } else {
        return false;
      }
    });

    return filtered.map(event => {
      return (
        <div className="Event">
          <h1 className="Event-title">{event.name} by {event.host}</h1>
          <p className="Event-time">Kello: {event.start_time} - {event.end_time}</p>
          {this.renderTags(event.tags)}
        </div>
      )
    })
  }

  renderFilters(levels) {
    return levels.map(level => {
      return (
        <button onClick={() => this.setState({ selectedLevel: level })}>{level}</button>
      )
    })
  }

  render() {
    const mapped = events.map(event => event.name);

    const skillLevels = [];

    events.forEach(event => {
      if (skillLevels.indexOf(event.level) === -1) {
        skillLevels.push(event.level);
      }
    })

    return (
      <div className="App">
        <div>
          <h1 className="Title">Työpajatyökalu</h1>
          <p>Valittu taso:  {this.state.selectedLevel}</p>
          <div className="SkillLevelFilters">
            {this.renderFilters(skillLevels)}
          </div>
          {this.renderEvents()}
        </div>
      </div>
    );
  }
}

export default App;
