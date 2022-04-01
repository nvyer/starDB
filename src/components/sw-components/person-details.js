import React from "react";
import ItemDetails from '../item-details';
import { Record } from '../item-details/item-details';
import { withSwapiServie } from "../hoc-helpers";

const PersonDetails = (props) => {
    return (
        <ItemDetails {...props} >
            <Record field="gender" label="Gender" />
            <Record field="eyeColor" label="Eye Color" />
        </ItemDetails>
    );
};

const mapMethodsToProps = (service) => {
    return {
        getData: service.getPerson,
        getImageURL: service.getPersonImage
    };
};

export default withSwapiServie(mapMethodsToProps)(PersonDetails);