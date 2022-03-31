import React from 'react';
import ItemList from '../item-list';
import { withData, withSwapiServie } from '../hoc-helpers';

const withChildFunction = (Wrapped, fn) => {
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


const PersonList = withSwapiServie(withData(withChildFunction(ItemList, renderName)), mapPersonMethodsToProps);

const PlanetList = withSwapiServie(withData(withChildFunction(ItemList, renderName)), mapPlanetsMethodsToProps);

const StarshipList = withSwapiServie(withData(withChildFunction(ItemList, renderModelAndName)), mapStarShipMethodsToProps);


export { PersonList, PlanetList, StarshipList };