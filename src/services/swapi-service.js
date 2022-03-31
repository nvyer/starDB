export default class SwapiService {
    _apiBase = "https://swapi.dev/api";
    _imageBase = "https://starwars-visualguide.com/assets/img/";

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url} recieved status of ${res.status}`);
        }

        return await res.json();
    };

    getAllPeople = async () => {
        const res = await this.getResource("/people/");
        return res.results.map(this._transformPerson);
    };

    getAllPlanets = async () => {
        const planets = await this.getResource("/planets");
        return planets.results.map(this._transformPlanet);
    };

    getPlanet = async (id) => {
        const res = await this.getResource(`/planets/${id}`);
        return this._transformPlanet(res);
    };

    getAllStarShips = async () => {
        const res = await this.getResource(`/starships`);
        return res.results.map(this._transformStarShips);
    };

    getPerson = async (id) => {
        const res = await this.getResource(`/people/${id}`);
        return this._transformPerson(res);
    };

    getStarShip = async (id) => {
        const res = await this.getResource(`/starships/${id}`);
        return this._transformStarShips(res);
    };

    getPersonImage = ({ id }) => {
        return `${this._imageBase}characters/${id}.jpg`;
    };

    getStarshipImage = ({ id }) => {
        return `${this._imageBase}starships/${id}.jpg`;
    };

    getPlanetImage = ({ id }) => {
        return `${this._imageBase}planets/${id}.jpg`;
    };

    _getId = (item) => {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
    };

    _transformPlanet = (planet) => {
        return {
            id: this._getId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        };
    };

    _transformPerson = (person) => {
        return {
            id: this._getId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color
        };
    };

    _transformStarShips = (starship) => {
        return {
            id: this._getId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.cost_in_credits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargo_capacity
        };
    };

}