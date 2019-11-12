import React from 'react';

import ContactItem from './ContactItem';

import Twitter from '../../assets/svg/social/twitter.svg';
import Mail from '../../assets/svg/social/email.svg';
import Facebook from '../../assets/svg/social/facebook-logo.svg';
import Linkedin from '../../assets/svg/social/linkedin-letters.svg';
import Instagram from '../../assets/svg/social/instagram-logo.svg';

const ContactCard = ({ contactInfo }) => {
  return (
    <>
      <h5 className="text-white mb-4">CONTACT</h5>
      {Object.keys(contactInfo).map(key => (
        <ContactItem key={key} key1={key} value={contactInfo[key]} />
      ))}
      <div className="d-flex">
        <Twitter className="mr-3" fill="white" width={14} height={14} />
        <Facebook className="mr-3" fill="white" width={14} height={14} />
        <Instagram className="mr-3" fill="white" width={14} height={14} />
        <Mail className="mr-3" fill="red" width={14} height={14} />
        <Linkedin className="mr-3" fill="white" width={14} height={14} />
      </div>
    </>
  );
};

export default ContactCard;
