import React from 'react';
import ItemDetails from '../item-details';
import { Record } from '../item-details/item-details';
import { withSwapiServie } from "../hoc-helpers";
// routing
import { useParams } from 'react-router-dom';

const StarshipDetails = (props) => {
    const { id } = useParams();

    return (
        <ItemDetails {...props} itemId={id}>
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