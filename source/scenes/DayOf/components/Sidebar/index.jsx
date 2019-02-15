// @flow
import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import type { Match } from 'react-router-dom';

import CloseIcon from 'assets/Icons/close.svg';
import MenuIcon from 'assets/Icons/menu.svg';
import envelope from 'assets/Icons/envelope.svg';
import facebook from 'assets/Icons/facebook-f.svg';
import twitter from 'assets/Icons/twitter.svg';
import Logo from 'assets/logo.svg';

import dayofConfig from '../../config.json';
import './styles.scss';

const links = [
  { name: 'Schedule', path: 'schedule' },
  { name: 'Maps', path: 'maps' },
  { name: 'Prizes', path: 'prizes' },
  { name: 'Travel', path: 'travel' },
  { name: 'Mentorship', path: 'mentorship' },
];

type Props = {
  setSidebar: boolean => void,
  match: Match,
};

const Sidebar = (props: Props) => {
  const { setSidebar, match } = props;

  const linkComponents = links.map(({ name, path }) => {
    if (!dayofConfig[path]) {
      return null;
    }

    return (
      <li key={path}>
        <NavLink to={`${match.url}${path}`} exact onClick={() => setSidebar(false)}>
          {name}
        </NavLink>
      </li>
    );
  });

  return (
    <div className="dayof-sidebar sidebar-mobile">
      <button type="button" onClick={() => setSidebar(true)}>
        <img src={MenuIcon} alt="menu-icon" />
      </button>

      <div className="content">
        <button type="button" className="close" onClick={() => setSidebar(false)}>
          <img src={CloseIcon} alt="Close Icon" />
        </button>
        <img className="logo" src={Logo} alt="HackIllinois Logo" />

        <ul className="links">{linkComponents}</ul>

        <div className="icon-footer">
          <a href="https://twitter.com/hackillinois" target="_blank" rel="noopener noreferrer">
            <img src={twitter} alt="Twitter Icon" />
          </a>
          <a
            href="https://www.facebook.com/hackillinois/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebook} alt="Facebook Icon" />
          </a>
          <a href="mailto:contact@hackillinois.org" target="_blank" rel="noopener noreferrer">
            <img src={envelope} alt="Mail Icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Sidebar);
