import React from 'react';
import ItemDetails from '../item-details';
import { Record } from '../item-details/item-details';
import { withSwapiServie } from "../hoc-helpers";

const StarshipDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record field="model" label="Model" />
            <Record field="length" label="Length" />
            <Record field="costInCredits" label="Cost" />
        </ItemDetails>
    );
};


const mapMethodsToProps = service => {
    return {
        getData: service.getStarShip,
        getImageURL: service.getStarshipImage
    };
};

export default withSwapiServie(mapMethodsToProps)(StarshipDetails);