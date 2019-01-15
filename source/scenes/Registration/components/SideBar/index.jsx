// @flow
import React from 'react';

import type { Node } from 'react';

import './styles.scss';

type SideBarLinkProps = {
  children: Node,
  index: number,
  pane: number,
};

const SideBarLink = (props: SideBarLinkProps) => {
  const { children, index, pane } = props;
  let s = 'unvisited';
  if (index === pane) {
    s = 'current';
  } else if (index < pane) {
    s = 'visited';
  }

  return (
    <li>
      <button className={`sidebar-link ${s}`} type="button">
        <div className="bubble" />
        <p>{children}</p>
      </button>
    </li>
  );
};

type SideBarProps = {
  pane: number,
};

const SideBar = (props: SideBarProps) => {
  const { pane } = props;
  return (
    <section className="sidebar">
      <ul>
        <SideBarLink index={0} pane={pane}>
          Student Info
        </SideBarLink>
        <SideBarLink index={1} pane={pane}>
          Personal Info
        </SideBarLink>
        <SideBarLink index={2} pane={pane}>
          Professional Info
        </SideBarLink>
        <SideBarLink index={3} pane={pane}>
          Experience
        </SideBarLink>
        <SideBarLink index={4} pane={pane}>
          Other
        </SideBarLink>
        <SideBarLink index={5} pane={pane}>
          Team
        </SideBarLink>
      </ul>
    </section>
  );
};

export default SideBar;
