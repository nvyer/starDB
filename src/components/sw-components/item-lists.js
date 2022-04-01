import React from 'react';
import ItemList from '../item-list';
import { withData, withSwapiServie } from '../hoc-helpers';

const withChildFunction = (fn) => (Wrapped) => {
    return (props) => {
        return (
            <Wrapped {...props}>{fn}</Wrapped>
        );
    };
};

const renderName = ({ name }) => (<span>{name}</span>);
const renderModelAndName = ({ model, name }) => (<span>{name} ({model})</span>);

const mapPersonMethodsToProps = (service) => {
    return {
        getData: service.getAllPeople
    };
};

const mapPlanetsMethodsToProps = (service) => {
    return {
        getData: service.getAllPlanets
    };
};

const mapStarShipMethodsToProps = (service) => {
    return {
        getData: service.getAllStarShips
    };
};


const PersonList = withSwapiServie(mapPersonMethodsToProps)(withData(withChildFunction(renderName)(ItemList)));

const PlanetList = withSwapiServie(mapPlanetsMethodsToProps)(withData(withChildFunction(renderName)(ItemList)));

const StarshipList = withSwapiServie(mapStarShipMethodsToProps)(withData(withChildFunction(renderModelAndName)(ItemList)));


export { PersonList, PlanetList, StarshipList };