import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Species() {
  const [specieArray, setSpeciesArray] = useState(null);
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const params = useParams();
  const id = params.id;

  const url = `https://swapi.dev/api/species/${id}`;

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setSpeciesArray(res.data);
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
          <h1 className="text-center">{specieArray.name}</h1>
          <div className="text-center m-3">
            <p className="text-boby">
              {"classification: " + specieArray.classification}
            </p>
            <p className="text-boby">
              {"designation: " + specieArray.designation}
            </p>
            <p className="text-boby">
              {"Taille moyenne: " + specieArray.average_height}
            </p>
            <p className="text-boby">
              {"Couleurs de peau: " + specieArray.skin_colors}
            </p>
          </div>
        </div>
      );
    }
  }
}
