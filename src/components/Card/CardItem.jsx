import React from 'react';

const CardItem = ({ title, content, link, addr }) => {
  return (
    <div className="card m-2 rounded" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text pane-item">{content}</p>
        <a href={addr} className="card-link link">
          {link}&nbsp;>
        </a>
      </div>
    </div>
  );
};

export default CardItem;
