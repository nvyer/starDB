import Row from "../row";
import React, { Component } from "react";
import { PlanetList, PlanetDetails } from "../sw-components";

export default class PlanetPage extends Component {
    state = { selectedPlanet: 9 };

    onSelectedItem = (selectedItem) => {
        this.setState({ selectedItem });
    };

    render () {
        const { selectedItem } = this.state;

        return (
            <Row left={<PlanetList onItemSelected={this.onSelectedItem} />} right={<PlanetDetails itemId={selectedItem} />} />
        );
    }
}