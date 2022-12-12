import axios from "axios";
import { useState, useEffect } from "react";

export default function Search() {
  const [peopleId, setId] = useState(1);
  const [url, setUrl] = useState(`https://swapi.dev/api/people/${peopleId}`);
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => {
          setId(e.target.value);
        }}
      />
      <button>Valider</button>
    </form>
  );
}
