import React from 'react';

import ContactForm from 'components/Forms/ContactForm';
import ContactCard from 'components/Others/ContactCard';
import './styles.scss';

const PublicFooter = () => {
  const contacts = {
    Address: '740 Sidney Marcus Blvd Atlanta, GA 30324',
    Phone: '818-280-9198',
    Fax: '1-887-223-4983',
    Email: 'info@creativvacademy.com',
  };
  const progs = [
    'Data Science',
    'Cyber Security',
    'UX Design',
    'Full-stack Web Development',
    'Front-end Web Development',
  ];
  const companies = [
    'Home',
    'Mission',
    'Financing',
    'Privacy Policy',
    'Terms & Conditions',
  ];
  const students = ['Contact', 'FAQ', 'Login', 'Apply', 'Our Students'];

  return (
    <footer className="bg-black text-white">
      <ContactForm />
      <hr className="bg-dark" />
      <div className="mt-1 mr-5 ml-5 mb-5 p-5 d-flex flex-wrap">
        <div className="col-12 col-md-7 col-lg-5 mt-5">
          <ContactCard contactInfo={contacts} />
        </div>
        <div className="col-12 col-md-5 col-lg-3 mt-5">
          <h5 className="text-white mb-4">PROGRAMS</h5>
          {progs.map((item, index) => (
            <p className="font-light font-weight-light" key={index}>
              {item}
            </p>
          ))}
        </div>
        <div className="col-12 col-md-7 col-lg-2 mt-5">
          <h5 className="text-white mb-4">COMPANY</h5>
          {companies.map((item, index) => (
            <p className="font-light font-weight-light" key={index}>
              {item}
            </p>
          ))}
        </div>
        <div className="col-12 col-md-5 col-lg-2 mt-5">
          <h5 className="text-white mb-4">STUDENTS</h5>
          {students.map((item, index) => (
            <p className="font-light font-weight-light" key={index}>
              {item}
            </p>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default PublicFooter;
