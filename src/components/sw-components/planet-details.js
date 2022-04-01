import React from "react";
import ItemDetails from '../item-details';
import { withSwapiServie } from "../hoc-helpers";
import { Record } from '../item-details/item-details';

const PlanetDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record field="population" label="Population" />
            <Record field="rotationPeriod" label="Rotation Period" />
            <Record field="diameter" label="Diameter" />
        </ItemDetails>
    );

};


const mapMethodsToProps = service => {
    return {
        getData: service.getPlanet,
        getImageURL: service.getPlanetImage
    };
};

export default withSwapiServie(mapMethodsToProps)(PlanetDetails);