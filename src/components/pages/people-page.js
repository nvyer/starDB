import React, { Component } from "react";
import { PersonList, PersonDetails } from "../sw-components";
import Row from "../row";

export default class PeoplePage extends Component {
    state = { selectedItem: null };

    onSelectedItem = (selectedItem) => {
        this.setState({ selectedItem });
    };

    render () {
        const { selectedItem } = this.state;

        return (
            <Row left={<PersonList onItemSelected={this.onSelectedItem} />} right={<PersonDetails itemId={selectedItem} />} />
        );
    }
}