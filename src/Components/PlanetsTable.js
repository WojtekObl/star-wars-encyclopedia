import React, { useMemo, useState } from "react";
import MoviesDB from "../Assets/data.json";
import { ReactComponent as ArrowDown } from "../Assets/Vector 2.1.svg";
import { ReactComponent as ArrowUp } from "../Assets/Vector 2.svg";

import "./PlanetsTable.css";

function PlanetsTable({ movieId }) {
  const [sortConfig, setSortConfig] = useState({
    key: "name",
    direction: "ascending",
  });

  const sortedPlanetsInMovie = useMemo(() => {
    const planetsInMovie = MoviesDB.data.planets.filter((planet) =>
      planet.filmConnection.films.find((film) => film.id === movieId)
    );
    let PlanetsToSort = [...planetsInMovie];

    PlanetsToSort.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? 1 : -1;
      }
      return 0;
    });
    return PlanetsToSort;
  }, [movieId, sortConfig]);

  const listOfHeaders = [
    { tittle: "Planet Name", id: "name" },
    { tittle: "Rotation period", id: "rotationPeriod" },
    { tittle: "Orbital period", id: "orbitalPeriod" },
    { tittle: "Diameter", id: "diameter" },
    { tittle: "Climate", id: "climates" },
    { tittle: "Surface Water", id: "surfaceWater" },
    { tittle: "Population", id: "population" },
  ];

  return (
    <div className="planets-table">
      <table>
        <thead>
          <tr>
            {listOfHeaders.map((header, index) => (
              <th key={index}>
                <div className="column-header">
                  <p className="column-name">{header.tittle}</p>
                  <div className="table__arrows">
                    <ArrowUp
                      tabIndex="0"
                      className="arrow"
                      onClick={() =>
                        setSortConfig({
                          key: `${header.id}`,
                          direction: "ascending",
                        })
                      }
                    />
                    <ArrowDown
                      tabIndex="0"
                      className="arrow"
                      onClick={() =>
                        setSortConfig({
                          key: `${header.id}`,
                          direction: "descending",
                        })
                      }
                    />
                  </div>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedPlanetsInMovie.map((planet) => (
            <tr key={planet.id}>
              <td>{planet.name}</td>
              <td>{planet.rotationPeriod}</td>
              <td>{planet.orbitalPeriod}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climates.join(", ")}</td>
              <td>{planet.surfaceWater}</td>
              <td>{planet.population}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PlanetsTable;
