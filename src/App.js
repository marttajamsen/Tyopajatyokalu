import React, { Component } from 'react';
import './App.css';
import events from './Events.json';

import Event from './components/Event';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedLevel: null,
      selectedTag: null,
      selectedTags: [],
      filtered: []
    }
  }

  handleTagClicked = (tag) => {

    let newTags = this.state.selectedTags.slice();

    if (newTags.indexOf(tag) === -1) {
      newTags.push(tag);
    } else {
      newTags = newTags.filter(t => {
        if (t === tag) {
          return false;
        } else {
          return true;
        }
      })
    }

    this.setState({
      selectedTags: newTags
    });
  }

  handleLevelClicked = (level) => {
    if (this.state.selectedLevel === level) {
      this.setState({
        selectedLevel: null
      });
    } else {
      this.setState({
        selectedLevel: level
      });
    }
  }

  filterEvents() {
    const { selectedLevel, selectedTags } = this.state

    const filtered = events.filter(event => {

      if (selectedLevel !== null) {
        const levelNotMatch = selectedLevel && event.level !== selectedLevel
        if (levelNotMatch) {
          return false
        }
      }
      if (selectedTags.length !== 0) {
        const matchingTags = selectedTags.filter((tag) => {
          if (event.tags.indexOf(tag) !== -1) {
            return true;
          } else {
            return false;
          }
        });
        if (matchingTags.length === 0) {
          return false
        }
      }
      return true
    });

    return filtered;
  }

  getEventsForTimes(events, start_time, end_time) {
    console.log('filtering', start_time + '-' + end_time)
    const eventlist = []
    for (let event of events){
      console.log(event)
      if (event.start_time === start_time){
        eventlist.push(event)  
      } 
    }
    return eventlist 
  }

  renderEvents(filtered) {

    return filtered.map(event => {
      return <Event event={event} />
    })
  }

  renderFilters(levels) {
    return levels.map(level => {
      const isSelected = level === this.state.selectedLevel;
      let className = 'Button';
      if (isSelected) {
        className = 'Button-selected';
      }

      return (
        <button className={className} onClick={() => this.handleLevelClicked(level)}>{level}</button>
      )
    })
  }

  renderTagfilters(tags) {
    return tags.map(tag => {
      const isSelected = this.state.selectedTags.indexOf(tag) !== -1;
      let className = 'Button';
      if (isSelected) {
        className = 'Button-selected';
      }
      return (
        <button className={className} onClick={() => this.handleTagClicked(tag)}>{tag}</button>
      )
    })
  }


  render() {

    const skillLevels = [];
    const tags = [];

    events.forEach(event => {
      if (skillLevels.indexOf(event.level) === -1) {
        skillLevels.push(event.level);
      }
      event.tags.forEach(tag => {
        if (tags.indexOf(tag) === -1) {
          tags.push(tag);
        }
      })
    })

    const filtered = this.filterEvents();
    const first = this.getEventsForTimes(filtered, '11:00', '12:30')
    const second = this.getEventsForTimes(filtered, '14:00', '15:30')
    const third = this.getEventsForTimes(filtered, '15:30', '17:00')

    return (
      <div className="App">
        <div>
          <h1 className="Title">TYÖPAJATYÖKALU</h1>
          <img src={require('./assets/Facebook_kansikuva_porukassa.jpg')}/>
          <h4>Valitse taso:</h4>
          <div className="SkillLevelFilters">
            {this.renderFilters(skillLevels)}
          </div>
          <h4>Valitse kategoria:</h4>
          <div>
            {this.renderTagfilters(tags)}
          </div>
          <h4>Näytetään {filtered.length} tapahtumaa</h4>
          <div className="EventGrid">
            <div className="EventGrid--column">
              <h5>11:00 - 12:30</h5>
              {this.renderEvents(first)}
            </div>
            <div className="EventGrid--column">
              <h5>14:00 - 15:30</h5>
              {this.renderEvents(second)}
            </div>
            <div className="EventGrid--column">
              <h5>15:30 - 17:00</h5>
              {this.renderEvents(third)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
