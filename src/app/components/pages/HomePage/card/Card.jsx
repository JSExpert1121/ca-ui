import React, { Component, Fragment } from 'react';
import { Button } from '../../../common/Button';
import { Link } from '../../../common/Link';

const CardOne = props => (
  <CardWrapper type={props.type}>
    <h1>{props.title}</h1>
    <p>{props.description}</p>
    <Link href={props.link.path}>{props.link.label}</Link>
  </CardWrapper>
);

const CardTwo = props => (
  <CardWrapper type={props.type}>
    <img src={props.imgUrl} />
    <h1>{props.title}</h1>
    <p>{props.description}</p>
    <Button styleType="secondary">View Courses</Button>
  </CardWrapper>
);

export default class Card extends Component {
  render() {
    return (
      <Fragment>
        {this.props.type === 'one' && <CardOne {...this.props} />}

        {this.props.type === 'two' && <CardTwo {...this.props} />}
      </Fragment>
    );
  }
}
