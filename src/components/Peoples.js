import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Peoples() {
  const [people, setPeoplesArray] = useState(null);
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const params = useParams();
  const id = params.id;

  const url = `https://swapi.dev/api/people/${id}`;

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
        <h1 className="text-center ">{people.name}</h1>
        <div className="text-center m-3">
          <p className="text-body">{" Taille: " + people.height / 100} M </p>
          <p className="text_body">{"Point :" + people.mass} Kg </p>
          <p className="text-body">{"Coleur " + people.skin_color}</p>
          <p className="text-body">{"gender  :" + people.gender}</p>
          <p className="text-body">
            {"couleur des yeux   :" + people.eye_color}
          </p>
        </div>
        <a
          className="text-body text-decoration-none"
          href="https://starwars.fandom.com/fr/wiki/Han_Solo"
          target="_blank"
        >
          Personnages de l'univers Starwars.
        </a>
      </div>
    );
  }
}
