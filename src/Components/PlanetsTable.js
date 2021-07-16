import React, { useMemo, useState } from "react";
import MoviesDB from "../Assets/data.json";
import { ReactComponent as ArrowDown } from "../Assets/Vector 2.1.svg";
import { ReactComponent as ArrowUp } from "../Assets/Vector 2.svg";

import "./PlanetsTable.css";

function PlanetsTable({ movieId, tableHeight }) {
  const [sortConfig, setSortConfig] = useState({
    key: "name",
    direction: "ascending",
  });

  const allPlanets = MoviesDB.data.planets;
  const planetsInMovie = allPlanets.filter((planet) =>
    planet.filmConnection.films.find((film) => film.id === movieId)
  );

  const sortedPlanetsInMovie = useMemo(() => {
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
  }, [planetsInMovie, sortConfig]);

  const requestSort = (key) => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  // const getClassNamesFor = (name) => {
  //   return sortConfig.key === name ? sortConfig.direction : undefined;
  // };

  return (
    <div className="planets-table">
      <table>
        <thead>
          <tr>
            <th
              // onClick={() => requestSort("name")}
              // className={getClassNamesFor("name")}
            >
              <div className="column-name first-column">
                Planet Name
                <div className="table__arrows">
                  <ArrowUp
                    className="arrow"
                    onClick={() => requestSort("name", "ascending")}
                  />
                  <ArrowDown
                    className="arrow"
                    onClick={() => requestSort("name", "descending")}
                  />
                </div>
              </div>
            </th>
            <th
            // onClick={() => requestSort("rotationPeriod")}
            // className={getClassNamesFor("rotationPeriod")}
            >
              <div className="column-name">
                Rotation <br />
                period
                <div className="table__arrows">
                  <ArrowUp
                    className="arrow"
                    onClick={() => requestSort("rotationPeriod", "ascending")}
                  />
                  <ArrowDown
                    className="arrow"
                    onClick={() => requestSort("rotationPeriod", "descending")}
                  />
                </div>
              </div>
            </th>
            <th
              onClick={() => requestSort("orbitalPeriod")}
              // className={getClassNamesFor("orbitalPeriod")}
            >
              <div className="column-name">
                Orbital <br />
                period
                <div className="table__arrows">
                  <ArrowUp
                    className="arrow"
                    onClick={() => requestSort("orbitalPeriod", "ascending")}
                  />
                  <ArrowDown
                    className="arrow"
                    onClick={() => requestSort("orbitalPeriod", "descending")}
                  />
                </div>
              </div>
            </th>
            <th
              onClick={() => requestSort("diameter")}
              // className={getClassNamesFor("diameter")}
            >
              <div className="column-name">
                Diameter
                <div className="table__arrows">
                  <ArrowUp
                    className="arrow"
                    onClick={() => requestSort("diameter", "ascending")}
                  />
                  <ArrowDown
                    className="arrow"
                    onClick={() => requestSort("diameter", "descending")}
                  />
                </div>
              </div>
            </th>
            <th
              onClick={() => requestSort("climates")}
              // className={getClassNamesFor("climates")}
            >
              <div className="column-name">
                Climate
                <div className="table__arrows">
                  <ArrowUp
                    className="arrow"
                    onClick={() => requestSort("climates", "ascending")}
                  />
                  <ArrowDown
                    className="arrow"
                    onClick={() => requestSort("climates", "descending")}
                  />
                </div>
              </div>
            </th>
            <th
              onClick={() => requestSort("surfaceWater")}
              // className={getClassNamesFor("surfaceWater")}
            >
              <div className="column-name">
                Surface
                <br />
                water
                <div className="table__arrows">
                  <ArrowUp
                    className="arrow"
                    onClick={() => requestSort("surfaceWater", "ascending")}
                  />
                  <ArrowDown
                    className="arrow"
                    onClick={() => requestSort("surfaceWater", "descending")}
                  />
                </div>
              </div>
            </th>
            <th
              onClick={() => requestSort("population")}
              // className={getClassNamesFor("population")}
            >
              Population
              <div className="table__arrows">
                <ArrowUp
                  className="arrow"
                  onClick={() => requestSort("population", "ascending")}
                />
                <ArrowDown
                  className="arrow"
                  onClick={() => requestSort("population", "descending")}
                />
              </div>
            </th>
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
