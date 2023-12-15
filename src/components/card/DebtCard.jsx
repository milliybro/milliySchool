import React from "react";
import PropTypes from "prop-types"

const DebtCard = ({ id, name, deadline, theme, children }) => {
  return (
    <div className="alert alert-info d-flex justify-content-between align-items-center">
      <div>
        <h3>
          {theme}  <span className="badge bg-success">{name}</span>
        </h3>
        <div>
          <time>{deadline}  </time>
            
        </div>
      </div>
      <p>{children}</p>
      <div>
        <button className="btn btn-primary me-3">Edit</button>
        <button className="btn btn-danger">Delete</button>
      </div>
    </div>
  );
};

DebtCard.propTypes = {
   id: PropTypes.string,
   name: PropTypes.string,
   deadline: PropTypes.string,
   theme: PropTypes.string,
   description: PropTypes.node,
}

export default DebtCard;
