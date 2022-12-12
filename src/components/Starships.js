import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Starships() {
  const [startship, setStartsShipsArray] = useState(null);
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const params = useParams();
  const id = params.id;
  const url = `https://swapi.dev/api/starships/${id}`;

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setStartsShipsArray(res.data);
        setLoaded(true);
      })
      .catch((err) => {
        setError(err);
        setLoaded(true);
      });
  }, [url]);

  if (!loaded) {
    return <div>En cours de chargement...</div>;
  } else if (error) {
    return <div>Une erreur {error.response.status} s'est glissée ici...</div>;
  } else {
    {
      return (
        <div className="col-9">
          <h1 className="text-center">{startship.name}</h1>

          <div className="text-center m-3">
            <p className="text-boby">{"Model: " + startship.model}</p>
            <p className="text-boby">
              {"Manufacturer: " + startship.manufacturer}
            </p>
            <p className="text-boby">{"l'équipage: " + startship.crew}</p>
            <p className="text-boby">{"Passagères: " + startship.passengers}</p>
            <p className="text-boby">
              {"Consommables: " + startship.consumables}
            </p>
          </div>
        </div>
      );
    }
  }
}
