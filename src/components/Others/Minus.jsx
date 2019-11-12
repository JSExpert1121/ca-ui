import React from 'react';

const Minus = ({ width, color, margin }) => {
  return (
    <hr
      style={{
        width,
        display: 'inline-flex',
        height: 1,
        margin,
        backgroundColor: color,
      }}
    />
  );
};

Minus.defaultProps = {
  color: 'red',
  margin: '0.25rem',
  width: 20,
};

export default Minus;
