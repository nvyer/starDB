import React, { Component } from 'react';
// components
import Header from '../header';
import ErrorIndicator from '../error-indicator';
import ErrorBoundry from '../error-boundary';
import RandomPlanet from '../random-planet';
import { PeoplePage, PlanetPage, StarshipPage } from '../pages';
// service
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-service';
import { SwapiServiceProvider } from '../swapi-service-context';
// styles
import './app.css';

export default class App extends Component {

    state = { hasErroor: false, service: new SwapiService() };

    onServiceChange = () => {
        this.setState(({ service }) => {
            const Service = service instanceof SwapiService ? DummySwapiService : SwapiService;

            return {
                service: new Service()
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
        if (this.state.hasErroor) return <ErrorIndicator />;

        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={this.state.service}>
                    <div className="stardb-app">
                        <Header onServiceChange={this.onServiceChange} />

                        <RandomPlanet />

                        <PeoplePage />
                        <PlanetPage />
                        <StarshipPage />

                    </div>
                </SwapiServiceProvider>
            </ErrorBoundry>
        );
    }
}