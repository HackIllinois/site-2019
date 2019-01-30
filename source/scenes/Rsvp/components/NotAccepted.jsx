import React from 'react';
import { Link } from 'react-router-dom';

import './NotAccepted.scss';

const NotAccepted = () => (
  <div className="not-accepted">
    <h1>RSVP available upon acceptance</h1>
    <Link to="/">Go back</Link>
  </div>
);

export default NotAccepted;
