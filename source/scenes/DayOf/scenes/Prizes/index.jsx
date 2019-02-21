// @flow
import React, { Fragment } from 'react';

import prizes from './prizes.json';
import './styles.scss';

type PrizeProps = {
  name: String,
  blurb: String,
  company: String,
};

const Prize = (props: PrizeProps) => {
  const { name, blurb, company } = props;
  return (
    <div className="prize">
      <h2>{name}</h2>
      <p>
        <strong>{blurb}</strong>
      </p>
      <p>Presented by {company}</p>
    </div>
  );
};

const Prizes = () => (
  <Fragment>
    <h1>Prizes</h1>

    {/* Reusing styles from schedule */}
    <div className="day prizes">
      {prizes.map(p => (
        <Prize {...p} key={p.name} />
      ))}
    </div>
  </Fragment>
);

export default Prizes;
