import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Peoples() {
  const [people, setPeoplesArray] = useState(null);
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const params = useParams();
  const id = params.id;

  const url = `https://swapi.dev/api/films/${id}`;

  useEffect(() => {
    axios
      .get(url)
      // on traite la promesse reçue grâce à axios
      .then((response) => {
        console.log(response);
        setPeoplesArray(response.data);
        setLoaded(true);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
        setLoaded(true);
      });
  }, [url]);

  // si la réponse n'est pas traitée (en cours)
  if (!loaded) {
    return <div>En cours de chargement...</div>;
    // si la réponse est traitée mais comporte des erreurs
  } else if (error) {
    return <div>{error.message}</div>;
    // si tout va bien
  } else {
    return (
      <div className="col-9">
        <h1 className="text-center">{people.title}</h1>
        <div className="text-center m-3">
          <p className="text-body">
            {" Nombre d'episode : " + people.episode_id}
          </p>
          <p className="text_body">
            {"Rampe d'ouverture :" + people.opening_crawl}
          </p>
          <p className="text-body">{"Director: " + people.director}</p>
          <p className="text-body">{"Producteur :" + people.producer}</p>
          <p className="text-body">
            {"Date de réalisation  :" + people.release_date}
          </p>
        </div>
      </div>
    );
  }
}
