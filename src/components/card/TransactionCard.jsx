import React from "react";

import "./Transaction.css";

const TransactionCard = ({ category, amount, description, time }) => {
  return (
    <div className="transaction-card d-flex justify-content-between align-items-center">
      <div className="transaction-card-left d-flex">
        <div className="transaction-card-content">
          <h5>{time}</h5>
          <div className="d-flex">
            <h3 className="transaction-card-title">{category}</h3>
          </div>
        </div>
      </div>
            <p className="transaction-card-desc">{description}</p>
      <div className="transaction-card-right">
        <p className="transaction-card-stats">
          {" "}
          <span>{amount}</span> USD
        </p>
      </div>
    </div>
  );
};

export default TransactionCard;
