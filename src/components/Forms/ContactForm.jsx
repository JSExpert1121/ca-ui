import React from 'react';

import './styles.scss';

const ContactForm = () => {
  return (
    <div className="container-sm text-center p-5">
      <h4 className="">Let's keep in touch!</h4>
      <p className="font-sm font-weight-light font-light">
        Stay up to date on Creativv Academy events and coding workshops in your
        city
      </p>
      <form className="w-100 mx-auto d-flex contact-form">
        <div className="form-group flex-grow-1 m-0 mr-2">
          <input
            type="email"
            id="email"
            className="form-control bg-black text-white border-danger email"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Your@email.com"
          />
        </div>
        <button
          type="submit"
          className="btn btn-danger m-0 p-1 pl-4 pr-4 text-uppercase"
        >
          Subscribe
        </button>
      </form>
      <p className="font-75 m-0 mt-1 font-light font-weight-light">
        By sharing your email, you agree to our&nbsp;
        <a
          className="text-danger text-decoration-none"
          href="https://google.com"
          target="_blank"
        >
          Privacy Policy
        </a>
        &nbsp;and&nbsp;
        <a
          className="text-danger text-decoration-none"
          href="https://google.com"
          target="_blank"
        >
          Terms & Conditions
        </a>
      </p>
    </div>
  );
};

export default ContactForm;
