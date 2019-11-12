import React from 'react';

const ContactItem = ({ key1, value }) => {
  return (
    <p className="font-light font-weight-light">
      <span className="text-white font-weight-normal">{key1}:&nbsp;</span>
      {value}
    </p>
  );
};

export default ContactItem;
