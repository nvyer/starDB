import React, { Component } from 'react';
// components
import Header from '../header';
import ErrorIndicator from '../error-indicator';
import ErrorBoundry from '../error-boundary';
import RandomPlanet from '../random-planet';
import { PeoplePage, PlanetPage, StarshipPage, LoginPage, SecretPage } from '../pages';
// service
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-service';
import { SwapiServiceProvider } from '../swapi-service-context';
import { StarshipDetails } from '../sw-components';
// styles
import './app.css';
// routing
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

export default class App extends Component {

    state = { hasErroor: false, service: new SwapiService(), isLoggedIn: false };

    onServiceChange = () => {
        this.setState(({ service }) => {
            const Service = service instanceof SwapiService ? DummySwapiService : SwapiService;

            return {
                service: new Service()
            };
        });
    };

    onLogin = () => {
        this.setState({ isLoggedIn: true });
    };

    componentDidCatch () {
        this.setState({ hasErroor: true });
    }

    render () {
        const { isLoggedIn } = this.state;

        if (this.state.hasErroor) return <ErrorIndicator />;

        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={this.state.service}>
                    <Router>
                        <div className="stardb-app">
                            <Header onServiceChange={this.onServiceChange} />
                            <RandomPlanet />
                            <Routes>
                                <Route path='/' element={<h1 className='mr'>Welcome to StarDB</h1>} />
                                <Route path='/people' element={<PeoplePage />} />
                                <Route path='/people/:id' element={<PeoplePage />} />
                                <Route path='/planets' element={<PlanetPage />} />
                                <Route path='/starships' element={<StarshipPage />} />
                                <Route path='/starships/:id' element={<StarshipDetails />} />
                                <Route path='/login' element={<LoginPage isLoggedIn={isLoggedIn} onLogin={this.onLogin} />} />
                                <Route path='/secret' element={<SecretPage isLoggedIn={isLoggedIn} />} />
                                <Route path='*' element={<h2 className='mr'>Page Not Found !</h2>} />
                            </Routes>
                        </div>
                    </Router>
                </SwapiServiceProvider>
            </ErrorBoundry>
        );
    }
}
