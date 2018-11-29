// @flow
import React from 'react';

import type { Node } from 'react';

import './styles.scss';

type SideBarLinkProps = {
  children: Node,
};

const SideBarLink = (props: SideBarLinkProps) => {
  const { children } = props;
  return (
    <li className="sidebar-link">
      <div className="bubble" />
      <p>{children}</p>
    </li>
  );
};

const SideBar = () => (
  <section className="sidebar">
    <ul>
      <SideBarLink>Sign Up</SideBarLink>
      <SideBarLink>Student Info</SideBarLink>
      <SideBarLink>Personal Info</SideBarLink>
      <SideBarLink>Professional Info</SideBarLink>
      <SideBarLink>Other</SideBarLink>
      <SideBarLink>Team</SideBarLink>
    </ul>
  </section>
);

export default SideBar;
