import React from 'react';
import './styles.scss';

const ProgramCard = ({ Component, color, size, desc }) => {
  return (
    <div className="card rounded text-center h-100">
      <div className="card-body color-red d-flex flex-column justify-content-around align-items-center">
        <Component fill={color} width={size} height={size} className="mt-2" />
        <h5 className="card-title ">{desc}</h5>
      </div>
    </div>
  );
};

export default ProgramCard;
