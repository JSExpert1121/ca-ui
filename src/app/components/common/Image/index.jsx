import React from 'react';
import './Image.scss';

export const Img = props => {
  return <img className={props.className} src={props.src} alt={props.alt} />;
};
