import React from 'react';
import ItemList from '../item-list';
import { withData, withSwapiServie, withChildFunction, compose } from '../hoc-helpers';

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


const PersonList = compose(withSwapiServie(mapPersonMethodsToProps), withData, withChildFunction(renderName))(ItemList);

const PlanetList = compose(withSwapiServie(mapPlanetsMethodsToProps), withData, withChildFunction(renderName))(ItemList);

const StarshipList = compose(withSwapiServie(mapStarShipMethodsToProps), withData, withChildFunction(renderModelAndName))(ItemList);


export { PersonList, PlanetList, StarshipList };