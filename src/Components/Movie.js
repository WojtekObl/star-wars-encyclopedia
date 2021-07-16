import React, { useState } from "react";
import PlanetsTable from "./PlanetsTable";
import { ReactComponent as ArrowOpen } from "../Assets/ARROW OPEN.svg";
import { ReactComponent as ArrowClose } from "../Assets/ARROW CLOSE.svg";

import "./Movie.css";

function Movie({ title, id }) {
  const [tableCollapsed, setTableCollapsed] = useState(false);

  const headerShadow = `${
    tableCollapsed
      ? "0px 4px 12px rgba(224, 230, 238, 0.5)"
      : "0px 2px 1px rgba(196, 196, 196, 0.2)"
  }`;

  return (
    <div className="movie">
      <button
        className="movie__header"
        onClick={() => setTableCollapsed((prev) => !prev)}
        style={{
          boxShadow: `${headerShadow}`,
        }}
      >
        <p>{title}</p>
        {tableCollapsed ? <ArrowClose /> : <ArrowOpen />}
      </button>
      {tableCollapsed && <PlanetsTable movieId={id} />}
    </div>
  );
}

export default Movie;
