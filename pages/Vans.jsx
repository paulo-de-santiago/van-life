import React from "react";
import { useState, useEffect } from "react";

export default function Vans() {
  let [vanInfo, setVanInfo] = useState("");

  useEffect(() => {
    fetch("/api/vans")
      .then((response) => response.json)

      .then((data) => setVanInfo(data.vans));
  }, []);

  return (
    <div>
      <h1>Vans page goes here 🚐</h1>

      {vanInfo &&
        vanInfo.map((van) => (
          <div>
            <h1>{van.name}</h1>
            <p>{van.price}</p>
            <p>{van.description}</p>
          </div>
        ))}
    </div>
  );
}
