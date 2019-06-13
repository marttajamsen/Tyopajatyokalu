import React, { Component } from 'react';
import './App.css';

import _ from 'lodash';
import { Container, Row, Col } from 'react-grid-system';

import Event from './components/Event';
import EventColumn from './components/EventColumn';
import Filters from './components/Filters';
import HeroImage from './components/HeroImage';
import EventService from './services/eventService';
import EventFilters from './services/eventFilters';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedLevels: [],
      selectedTags: [],
      filtered: [],
      events: [],
      searchText: ''
    }

    this.handleLevelChange = this.handleLevelChange.bind(this);
    this.handleTagChange = this.handleTagChange.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  componentDidMount() {
    EventService.getEvents().then(data => {
      this.setState({
        events: _.sortBy(data, 'name')
      })
    })
  }

  handleSearchChange(e) {
    this.setState({
      searchText: e.target.value
    });
  }

  handleTagChange(tag) {
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

  handleLevelChange(level) {
    if (this.state.selectedLevels.indexOf(level) !== -1) {
      this.setState({
        selectedLevels: []
      });
    } else {
      this.setState({
        selectedLevels: [level]
      });
    }
  }

  renderEvents(filtered) {
    return filtered.map(event => {
      return <Event event={event} />
    })
  }

  render() {

    const { selectedLevels, selectedTags, searchText, events } = this.state
    const skillLevels = EventFilters.getLevels(events);
    const tags = EventFilters.getTags(events);

    const filteredEvents = EventFilters.filter(events, selectedLevels, selectedTags, searchText);

    return (
      <div className="App">
        <div>
          <HeroImage />
          <div className="App--body">
            <Container>
              <Row>
                <Col sm={12}>
                  <div className="App--description">
                    <p className="App--description__text">
                      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
                  </p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col sm={12}>
                  <Filters
                    title="Valitse kategoria: "
                    options={tags.sort()}
                    selected={this.state.selectedTags}
                    onChange={this.handleTagChange}
                  />
                </Col>
                <Col sm={12} md={6}>
                  <Filters
                    title="Valitse taso: "
                    options={skillLevels}
                    selected={this.state.selectedLevels}
                    onChange={this.handleLevelChange}
                  />
                </Col>
                <Col sm={12} md={6}>
                  <h4>Syötä hakusana: </h4>
                  <input value={this.state.searchText} onChange={this.handleSearchChange}></input>
                </Col>
                <Col sm={12}>
                  <h4>Näytetään {filteredEvents.length} tapahtumaa</h4>
                </Col>
              </Row>
              <Row>
                <Col sm={12} md={4}>
                  <EventColumn
                    title="Aamupäivä"
                    times={[EventFilters.TIMES.morning]}
                    events={filteredEvents}
                  />
                </Col>
                <Col sm={12} md={4}>
                  <EventColumn
                    title="Iltapäivä"
                    times={[EventFilters.TIMES.afternoon_short, EventFilters.TIMES.afternoon_long]}
                    events={filteredEvents}
                  />
                </Col>
                <Col sm={12} md={4}>
                  <EventColumn
                    title="Keynote"
                    times={[EventFilters.TIMES.afternoon_keynote]}
                    events={filteredEvents}
                  />
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
