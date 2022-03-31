import ItemList from '../item-list';
import React, { Component } from "react";
import PersonDetails from '../item-details';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service';
import Row from '../row';
import ErrorBoundry from '../error-boundary';
import './people-page.css';

export default class PeoplePage extends Component {

    swapieService = new SwapiService();
    state = { selectedPerson: 3 };

    onPersonSelected = (selectedPerson) => {
        this.setState({ selectedPerson });
    };

    render () {

        const itemList = (
            <ItemList getData={this.swapieService.getAllPeople} onItemSelected={this.onPersonSelected} >
                {(item) => `${item.name} ( ${item.gender} , ${item.eyeColor})`}
            </ItemList>);

        const personDetails = (
            <ErrorBoundry>
                <PersonDetails personId={this.state.selectedPerson}></PersonDetails>;
            </ErrorBoundry>);

        if (this.state.hasError) {
            return < ErrorIndicator />;
        }

        // right = { personDetails }
        return <Row left={itemList} />;
    }
}
