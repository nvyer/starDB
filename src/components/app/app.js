import React, { Component } from 'react';
// components
import Header from '../header';
import RandomPlanet from '../random-planet';
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-service';
import ErrorIndicator from '../error-indicator';
import ErrorButton from '../error-button';
import ErrorBoundry from '../error-boundary';
import { PersonDetails } from '../sw-components';
import { PlanetDetails, StarshipDetails, PersonList, PlanetList, StarshipList } from '../sw-components';
// service
import { SwapiServiceProvider } from '../swapi-service-context';
// styles
import './app.css';

export default class App extends Component {

    swapiService = new DummySwapiService();
    state = { showRandomPlanet: true, hasErroor: false };

    toggleRandomPlanet = () => {
        this.setState((state) => {
            return {
                showRandomPlanet: !state.showRandomPlanet
            };
        });
    };

    componentDidCatch () {
        this.setState({ hasErroor: true });
    }

    onPersonSelected = (id) => {
        this.setState({ selectedPerson: id });
    };

    render () {
        if (this.state.hasErroor) {
            return <ErrorIndicator />;
        };

        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={this.swapiService}>
                    <div className="stardb-app">
                        <Header />
                        {this.state.showRandomPlanet && <RandomPlanet />}
                        <button className="toggle-planet ml-3 mb-1 btn btn-warning btn-lg" onClick={this.toggleRandomPlanet}>
                            Toggle Random Planet
                        </button>
                        <ErrorButton className="error-button ml-2 mt-n1 btn btn-danger btn-lg" />
                        <br />
                        <PersonDetails itemId={5} />
                        <br />
                        <PlanetDetails itemId={5} />
                        <br />
                        <StarshipDetails itemId={5} />
                        <br />
                        <PersonList />
                        <br />
                        <StarshipList />
                        <br />
                        <PlanetList />
                    </div>
                </SwapiServiceProvider>
            </ErrorBoundry>
        );
    }
}