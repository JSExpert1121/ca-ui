import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faChevronLeft,
  faMinus,
} from '@fortawesome/free-solid-svg-icons';

import Button from 'components/Button';
import CardItem from 'components/Card/CardItem';
import ProgramCard from 'components/Card/ProgramCard';
import SvgCard from 'components/Card/SvgCard';
import MinusItem from 'components/Others/Minus';

import heroImage from '../../../assets/images/home-page-hero-img.jpg';
import aboutImage from '../../../assets/images/about.jpg';
import avatarImage from '../../../assets/images/avatar.jpg';
import barImage from '../../../assets/images/bar.png';
import MessageIcon from '../../../assets/svg/black-bubble-speech.svg';
import DataIcon from '../../../assets/svg/data.svg';
import MultiIcon from '../../../assets/svg/multitask.svg';
import SupportIcon from '../../../assets/svg/support.svg';
import TogetherIcon from '../../../assets/svg/together.svg';
import WorkIcon from '../../../assets/svg/work.svg';
import TwitterIcon from '../../../assets/svg/social/twitter.svg';
import LinkedinIcon from '../../../assets/svg/social/linkedin-letters.svg';
import './styles.scss';

const HomePage = () => {
  const goNext = () => {
    console.log('HeroPanel.goNext');
  };

  const goPrev = () => {
    console.log('HeroPanel.goPrev');
  };

  const viewCourse = () => {
    console.log('HeroPanel.ViewCourse');
  };

  const title = 'Learn how to program software and application in 10 weeks';
  const placeholder =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
  const randKey = 'Ky Capstick';
  const randValue = 'Full-stack Developer at DWYL';
  const cardContent =
    'This immersive training track consists of Python, Javascript, HTML/CSS, API interactions, Social Media Mining, SQL, Tableau, Advanced Statistics, & Machine Learning';
  const redColor = 'rgb(198, 39, 39)';
  const svgCards = [
    {
      component: TogetherIcon,
      title: 'FULL-TIME',
      desc:
        'Challenge yourself and change your career with an 10~13 week immersive learning experience',
    },
    {
      component: WorkIcon,
      title: 'PART-TIME',
      desc:
        'Enhance your professional potential.\nLearn in-demand skills in evening.\nweekend. or 1-week accelerated courses.',
    },
    {
      component: SupportIcon,
      title: 'ONLINE',
      desc:
        'Learn at any level. anywhere. Explore full-time training and flexible part',
    },
  ];
  const uniques = [
    {
      no: '01',
      title: 'PROJECT DRIVEN APPROACH',
      desc: [
        'Task oriented design',
        'Get Trained by working on real projects',
        'Learn all things programming',
        'Learn what Computer Science is all about',
      ],
    },
    {
      no: '02',
      title: 'AFFORDABILITY & FREE',
      desc: [
        'Lower Training Cost With high quality training',
        'Great Financing Options',
        'Fully Furnished Housing',
      ],
    },
    {
      no: '03',
      title: 'QUALITY',
      desc: [
        'Learn from the ground up and produce quality',
        'Taught with the Industry Finest',
        'Career Coaching & Support',
      ],
    },
  ];

  return (
    <section id="contents" className="home-page-contents bg-gray">
      <article className="hero-wrapper" id="home-page-logo">
        <img
          className="d-block w-100 hero-image"
          src={heroImage}
          alt="First slide"
        />
        <section className="hero-content">
          <section className="hero-content__container">
            <h1>{title}</h1>
            <Button
              styleType="secondary"
              className="custom-button custom-button--size-variant-sm text-uppercase custom-button--red"
            >
              Apply
            </Button>
          </section>
        </section>
        <section className="info-pane">
          <CardItem
            title={'N\xB0 1 on Switchup'}
            content={
              'Creativv Academy is ranked #1 on Switchup according to student reviews'
            }
            link={'Read 1000+ reviews'}
            addr={'#'}
          />
          <CardItem
            title={'N\xB0 1 on Coursereport'}
            content={
              'Creativv Academy is ranked #1 on Course Report according to student reviews'
            }
            link={'Read 1000+ reviews'}
            addr={'#'}
          />
        </section>
        <section className="note-btn" id="note-btn">
          <Button size="sm rounded" styleType="red">
            <MessageIcon fill="white" width={24} height={24} />
          </Button>
        </section>
      </article>
      <article className="cmn-article">
        <h3 className="text-center letter-spacing">Our Programms</h3>
        <div className="cards-wrapper">
          <div className="icon-btn">
            <button type="button" className="btn btn-link" onClick={goPrev}>
              <FontAwesomeIcon icon={faChevronLeft} color="dark" size="lg" />
            </button>
          </div>
          <div className="card-list">
            <div className="p-3 col-12 col-sm-12 col-md-6 col-lg-4">
              <div className="card rounded text-center">
                <div className="card-body back-red">
                  <h5 className="card-title">{'DATA SCIENCE'}</h5>
                  <p className="card-text font-75">{cardContent}</p>
                  <button
                    type="button"
                    className="btn btn-light color-red font-875 p-2 pl-4 pr-4 text-danger"
                    onClick={goPrev}
                  >
                    LEARN MORE
                  </button>
                </div>
              </div>
            </div>
            <div className="p-3 col-12 col-sm-12 col-md-6 col-lg-4">
              <ProgramCard
                Component={DataIcon}
                color={redColor}
                size={80}
                desc={'FRONTEND DEVELOPMENT'}
              />
            </div>
            <div className="p-3 col-12 col-sm-12 col-md-6 col-lg-4">
              <ProgramCard
                Component={MultiIcon}
                color={redColor}
                size={80}
                desc={'FULLSTACK DEVELOPMENT'}
              />
            </div>
          </div>
          <div className="icon-btn">
            <button type="button" className="btn btn-link" onClick={goNext}>
              <FontAwesomeIcon icon={faChevronRight} color="dark" size="lg" />
            </button>
          </div>
        </div>
      </article>
      <article className="cmn-article bg-white p-4">
        <h3 className="text-center letter-spacing">Choose Your Path</h3>
        <div className="cards-wrapper">
          <div className="card-list pl-2 pr-2 flex-wrap">
            {svgCards.map((item, index) => (
              <div
                className="p-3 col-12 col-sm-12 col-md-6 col-lg-4"
                key={index}
              >
                <SvgCard
                  Component={item.component}
                  title={item.title}
                  desc={item.desc}
                  handleClick={viewCourse}
                />
              </div>
            ))}
          </div>
        </div>
      </article>
      <article className="cmn-article p-4">
        <h3 className="text-center letter-spacing">About Us</h3>
        <div className="cards-wrapper">
          <div className="w-100 d-flex p-3 flex-wrap">
            <div className="col-12 col-lg-6">
              <h4 className="font-20 letter-spacing">
                Learn to code and gain the confidence to land a technical job
              </h4>
              <p>
                Creativv Academy is the most affordable -time. in-person code
                school. andone of the few programs that includes an internship
                with a tech company as well as job search support. Students
                graduate with real-life work experience already on their
                resumes. a dedicated team to help land their first job. and a
                close community of peers and instructors supporting them along
                the way.
              </p>
            </div>
            <div className="col-12 col-lg-6">
              <img src={aboutImage} className="w-100" height="auto" />
            </div>
          </div>
        </div>
      </article>
      <article className="cmn-article mt-0 pt-5 bg-white">
        <h3 className="text-center m-0 p-3 letter-spacing">Student Reviews</h3>
        <div className="cards-wrapper">
          <div className="icon-btn">
            <button type="button" className="btn btn-link" onClick={goPrev}>
              <FontAwesomeIcon
                icon={faChevronLeft}
                color="dark"
                size="lg"
                className="fal"
              />
            </button>
          </div>
          <div className="w-100 personal-card d-flex">
            <div className="p-3 col-12 col-md-4 d-flex justify-content-center align-items-center">
              <img
                src={avatarImage}
                className="avatar rounded mw-100"
                width="auto"
              />
            </div>
            <div className="p-3 col-12 col-md-8 d-flex flex-column">
              <p className="font-sm text-secondary w-100">{placeholder}</p>
              <h4 className="font-md text-dark">
                <MinusItem />
                &nbsp;
                {randKey}
              </h4>
              <p className="font-sm text-secondary">{randValue}</p>
              <div className="w-100 d-flex">
                <TwitterIcon
                  fill={redColor}
                  width={16}
                  height={16}
                  className="mr-2"
                />
                <LinkedinIcon fill={redColor} width={16} height={16} />
              </div>
            </div>
          </div>
          <div className="icon-btn">
            <button type="button" className="btn btn-link" onClick={goNext}>
              <FontAwesomeIcon icon={faChevronRight} color="dark" size="lg" />
            </button>
          </div>
        </div>
      </article>
      <article className="cmn-article mt-0 p-5 about">
        <h3 className="text-center m-0 p-3 letter-spacing">
          Creativv Academy Unique
        </h3>
        <div className="cards-wrapper">
          <div className="card-list flex-wrap">
            {uniques.map((item, index) => (
              <div className="p-2 col-12 col-md-6 col-lg-4 d-flex" key={index}>
                <p className="color-red font-75">{item.no}</p>
                <MinusItem color={redColor} margin="0.625rem" />
                <div className="d-flex flex-column">
                  <h5 className="font-875 text-dark">{item.title}</h5>
                  {item.desc.map((desc, idx) => (
                    <p key={idx} className="font-75 text-secondary m-0 pt-2">
                      {desc}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>
      <article id="bottom-bar">
        <img src={barImage} className="w-100 h-auto" />
      </article>
    </section>
  );
};

export default HomePage;
