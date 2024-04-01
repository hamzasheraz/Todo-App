import React from "react";

const Button = ({ func, color }) => {
  return (
    <button className={`btn btn-${color}`} onClick={func}>
      {color === "primary"
        ? "Show more"
        : color === "danger"
        ? "Delete"
        : "Add"}
    </button>
  );
};

export default Button;
