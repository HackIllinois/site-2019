import React, { Fragment } from 'react';

import mentors from './mentors';
import './styles.scss';

type MentorProps = {
  image: string,
  name: string,
  description: string,
};

const Mentor = (props: MentorProps) => {
  const { image, name, description } = props;

  if (description === '') {
    return null;
  }

  return (
    <div className="mentor-profile">
      <div className="img-name">
        <div className="profile-picture">
          <img src={image} alt={`${name}`} />
        </div>
        <h5>{name}</h5>
      </div>
      <p>{description}</p>
      <div className="line" />
    </div>
  );
};

const Mentorship = () => (
  <Fragment>
    <h1>Mentorship</h1>

    <div className="mentors">
      {mentors.map(m => (
        <Mentor key={m.name} {...m} />
      ))}
    </div>
  </Fragment>
);

export default Mentorship;
