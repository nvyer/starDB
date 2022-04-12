import React, { useState } from "react";
import { PersonList, PersonDetails } from "../sw-components";
import { Navigate, useParams, useNavigate, useLocation } from 'react-router-dom';
import Row from "../row";

const PeoplePage = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    return (
        <Row
            left={<PersonList onItemSelected={(id) => navigate(`/people/${id}`)} />}
            right={<PersonDetails itemId={id} />} />
    );
};

export default PeoplePage;