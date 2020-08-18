import React, { useState, useEffect } from "react";

function Alpha() {
  const [loading, setLoading] = useState(true);
  // we could just check this instead of having an object, but yah.
  const [person, setPerson] = useState({});

  useEffect(() => {
    fetch("https://swapi.dev/api/people/1/")
      .then(res => res.json())
      .then(resJson => {
        setPerson(resJson);
        setLoading(false);
      });
  }, []);

  if (loading) return <h1>...Loading</h1>;

  return (
    <div>
      <h1>{person.name}</h1>
    </div>
  );
}

export default Alpha