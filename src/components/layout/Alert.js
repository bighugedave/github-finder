import React from "react";

const Alert = ({ alert }) => {
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className="fas fa-info-circle"></i>&nbsp;
        {alert.message}
      </div>
    )
  );
};

export default Alert;
