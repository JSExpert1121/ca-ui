import React from 'react';
import { Button } from '../../../common/Button';
import './HeroPanel.scss';

export default class HeroPanel extends React.PureComponent {
  render() {
    const { src, title, content } = this.props;
    return (
      <article className="hero-wrapper">
        <img className="d-block w-100 hero-image" src={src} alt="First slide" />
        <section className="hero-content">
          <section className="hero-content__container">
            <h1>{title}</h1>
            <Button size="md" styleType="red">Apply</Button>
          </section>
        </section>
      </article>
    );
  }
}
