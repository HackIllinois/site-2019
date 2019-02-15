import React from 'react';

import OceanScene from 'components/OceanScene';
import MentorPage from 'scenes/DayOf/scenes/Mentorship';

import './styles.scss';

/*
 * Temporary page to display the mentors
*/
const Mentors = () => (
  <div className="mentors-page">
    <OceanScene>
      <div className="view-upper">
        <div className="view-wrapper">
          <MentorPage />
        </div>
      </div>
    </OceanScene>
  </div>
);

export default Mentors;
