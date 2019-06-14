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
import Favorites from './services/favorites';
import FavoritesList from './components/FavoritesList';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedLevels: [],
      selectedTags: [],
      filtered: [],
      events: [],
      searchText: '',
      loading: true,
      error: false,
      favorites: [],
      showList: true,
    }

    this.handleLevelsChange = this.handleSelectChange('selectedLevels').bind(this);
    this.handleTagsChange = this.handleSelectChange('selectedTags').bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleToggleFavorite = this.handleToggleFavorite.bind(this);
    this.isFavorite = this.isFavorite.bind(this);
  }

  componentDidMount() {
    EventService.getEvents().then(data => {
      this.setState({
        events: _.sortBy(data, 'name'),
        loading: false,
      });
    }).catch(e => {
      this.setState({
        error: true,
        loading: false,
      });
    });

    this.setState({
      favorites: Favorites.getFavorites()
    });
  }

  handleToggleFavorite(event) {
    const newFavorites = Favorites.toggleFavorite(event);
    this.setState({
      favorites: newFavorites
    })
  }

  isFavorite(event) {
    const { favorites } = this.state;
    return favorites.indexOf(Favorites.getKey(event)) !== -1;
  }


  handleSearchChange(e) {
    this.setState({
      searchText: e.target.value
    });
  }

  handleSelectChange(field) {
    return (selected) => {
      let newValues = this.state[field].slice();

      if (newValues.indexOf(selected) === -1) {
        newValues.push(selected);
      } else {
        newValues = newValues.filter(v => v !== selected);
      }

      this.setState({
        [field]: newValues
      });
    }
  }

  renderEvents(filtered) {
    return filtered.map(event => {
      return <Event event={event} />
    })
  }

  renderEventList() {
    const { selectedLevels, selectedTags, searchText, events, favorites } = this.state
    const skillLevels = EventFilters.getLevels(events);
    const tags = EventFilters.getTags(events);
    const filteredEvents = EventFilters.filter(events, selectedLevels, selectedTags, searchText);

    return (
      <React.Fragment>
        <Row>
          <Col sm={12}>
            <Filters
              title="Valitse kategoria(t): "
              options={tags.sort()}
              selected={this.state.selectedTags}
              onChange={this.handleTagsChange}
            />
          </Col>
          <Col sm={12} md={6}>
            <Filters
              title="Valitse taitotaso(t): "
              options={skillLevels}
              selected={this.state.selectedLevels}
              onChange={this.handleLevelsChange}
            />
          </Col>
          <Col sm={12} md={6}>
            <h4>Vapaa haku: </h4>
            <input
              className="App--searchbox"
              value={this.state.searchText}
              onChange={this.handleSearchChange}
              placeholder="Hae työpajan nimellä, vetäjällä tai kuvauksella"
            />
          </Col>
          <Col sm={12}>
            <h4>Näytetään {filteredEvents.length} tapahtumaa</h4>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={4}>
            <EventColumn
              onToggleFavorite={this.handleToggleFavorite}
              isFavorite={this.isFavorite}
              title="Aamupäivä"
              times={[EventFilters.TIMES.morning]}
              events={filteredEvents}
            />
          </Col>
          <Col sm={12} md={4}>
            <EventColumn
              onToggleFavorite={this.handleToggleFavorite}
              isFavorite={this.isFavorite}
              title="Iltapäivä"
              times={[EventFilters.TIMES.afternoon_short, EventFilters.TIMES.afternoon_long]}
              events={filteredEvents}
            />
          </Col>
          <Col sm={12} md={4}>
            <EventColumn
              onToggleFavorite={this.handleToggleFavorite}
              isFavorite={this.isFavorite}
              title="Keynote"
              times={[EventFilters.TIMES.afternoon_keynote]}
              events={filteredEvents}
            />
          </Col>
        </Row>
      </React.Fragment>
    )
  }

  renderFavoritesList() {
    const { events, favorites } = this.state
    return (
      <Row>
        <Col sm={12}>
          <FavoritesList favorites={favorites} events={events} onToggleFavorite={this.handleToggleFavorite} />
        </Col>
      </Row>
    )
  }

  renderLoading() {
    return (
      <Row>
        <Col sm={12}>
          <p className="App--loading">Ladataan työpajoja...</p>
        </Col>
      </Row>
    )
  }

  render() {
    const { showList, favorites } = this.state;
    return (
      <div className="App">
        <HeroImage />
        <Container>
          <Row>
            <Col sm={12}>
              <div className="App--description">
                <p className="App--description__text">
                Haluatko työpajalta matalan kynnyksen katsauksen aiheeseen vai perusteellisemman sukelluksen suoraan syvään päähän? Haluatko kokeilla jotain ihan uutta vai syventää osaamistasi jo hallitsemissasi johtamistaidoissa? Työpajatyökalussamme voit valita työpajoja tutustu, perehdy ja syvenny-tasojen mukaan.
                  </p>
                  <p>
                  Tutustu: Työpajoissa harjoitellaan uusia taitoja ja tutustutaan uusiin aiheisiin ja näkökulmiin tarvitsematta aiempaa tietoa tai kokemusta. 
                  </p>
                  <p>
                  Perehdy: Asiaa johtamisesta ja johtajuudesta laajasti eri näkökulmista.
                  </p>
                  <p>
                  Syvenny: Työpajoissa sukelletaan syvemmälle rajattuun aiheeseen. Valitse tämä, jos haluat vähemmästä enemmän. Joissakin työpajoissa omat kokemukset tai aiempi tietämys aiheesta ovat toivottavia keskusteluun osallistumiseksi.
                  </p>
                  <p>
                  Eri taitotasojen työpajat on merkitty eri värein: tutustu = keltainen, perehdy = oranssi ja syvenny = punainen.
                  </p>
          
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <div className="App--toggle-view">
                <div onClick={() => this.setState({ showList: true })} className={`App--toggle-view__option ${showList ? 'active' : ''}`}>
                  <span className="App--toggle-view__option-text">Selaa työpajoja</span>
                </div>
                <div onClick={() => this.setState({ showList: false })} className={`App--toggle-view__option ${showList ? '' : 'active'}`}>
                  <span className="App--toggle-view__option-text">Omat suosikit ({favorites.length})</span>
                </div>
              </div>
            </Col>
          </Row>
          {this.state.loading ?
            (
              this.renderLoading()
            ) : (
              showList ? this.renderEventList() : this.renderFavoritesList()
            )}
        </Container>
        <div style={{ height: '100px' }} />
      </div>
    );
  }
}

export default App;
