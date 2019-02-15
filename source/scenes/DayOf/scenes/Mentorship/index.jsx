import React, { Fragment } from 'react';

import Logo from 'assets/Mentors/HackIL.png';

import mentors from './mentors';
import './styles.scss';

type MentorProps = {
  image: string,
  name: string,
  project: string,
  description: string,
  github: string,
};

const Mentor = (props: MentorProps) => {
  const { image, name, project, description, github } = props;

  return (
    <div className="mentor-profile">
      <div className="img-name">
        <div className="profile-picture">
          {github === '' ? (
            <img src={image === '' ? Logo : image} alt={name} />
          ) : (
            <a href={`https://github.com/${github}`}>
              <img src={image} alt={name} />
            </a>
          )}
        </div>
        <h5>{name}</h5>
      </div>
      <div className="description">
        <h5>{project}</h5>
        <p>{description === '' ? 'Ask me about this project during the event!' : description}</p>
      </div>
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
