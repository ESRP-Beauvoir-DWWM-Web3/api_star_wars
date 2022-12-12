import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Planets() {
  const [planetArray, setPlanetArray] = useState(null);
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const params = useParams();
  const id = params.id;

  const url = `https://swapi.dev/api/planets/${id}`;

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setPlanetArray(response.data);
        setLoaded(true);
      })
      .catch((err) => {
        console.log(err.response.status);
        setError(err);
        setLoaded(true);
      });
  }, [url]);
  if (!loaded) {
    return <div>En cours de chargement...</div>;
  } else if (error) {
    return <div>Une erreur {error.response.status} s'est glissée ici...</div>;
  } else {
    return (
      <div className="col-9">
        <h1 className="text-center">{planetArray.name}</h1>
        <div className="text-center m-3">
          <p className="text-boby">{"diameter: " + planetArray.diameter}</p>
          <p className="text-boby">{"Terrain : " + planetArray.terrain}</p>
          <p className="text-boby">
            {"Rotation : " + planetArray.rotation_period}
          </p>
          <p className="text-boby">
            {"Surface d'eaux : " + planetArray.surface_water}
          </p>
          <p className="text-boby">
            {"Date de création: " + planetArray.created}
          </p>
          <p className="text-boby">{"Population: " + planetArray.population}</p>
        </div>
      </div>
    );
  }
}
