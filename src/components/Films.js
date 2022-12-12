import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Films() {
  const [filmsArray, setFilmsArray] = useState(null);
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const params = useParams();
  const id = params.id;

  const url = `https://swapi.dev/api/films/${id}`;

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setFilmsArray(res.data);
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
          <h1 className="text-center">{filmsArray.title}</h1>
          <div className="text-center m-3">
            <p className="text-boby">
              {"Episode numéro: " + filmsArray.episode_id}
            </p>

            <p className="text-boby">
              {"Rampe d'ouverture: " + filmsArray.opening_crawl}
            </p>
            <p className="text-boby">{"director: " + filmsArray.director}</p>
            <p className="text-boby">{"producer: " + filmsArray.producer}</p>
            <p className="text-boby">
              {"Date de réalisation : " + filmsArray.release_date}
            </p>
          </div>
        </div>
      );
    }
  }
}
