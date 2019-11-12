import React from 'react';
import './styles.scss';

const SvgCard = ({
  Component,
  color,
  size,
  title,
  desc,
  btnTitle,
  handleClick,
}) => {
  return (
    <div className="card rounded text-center h-100">
      <div className="card-body d-flex flex-column h-100 align-items-center">
        <Component fill={color} width={size} height={size} className="p-3" />
        <h5 className="card-title text-dark">{title}</h5>
        <p className="card-text flex-grow-1 text-secondary w-100">{desc}</p>
        <button
          type="button"
          className="btn btn-danger font-875 text-light p-2 pl-4 pr-4"
          onClick={handleClick}
        >
          {btnTitle}
        </button>
      </div>
    </div>
  );
};

SvgCard.defaultProps = {
  color: 'rgb(192, 15, 15)',
  size: 96,
  btnTitle: 'VIEW COURSES',
};

export default SvgCard;
