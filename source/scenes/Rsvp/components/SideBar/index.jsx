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
          General
        </SideBarLink>
        <SideBarLink index={1} pane={pane}>
          Language Experience
        </SideBarLink>
        <SideBarLink index={2} pane={pane}>
          Tech Interests
        </SideBarLink>
        <SideBarLink index={3} pane={pane}>
          Open Source
        </SideBarLink>
      </ul>
    </section>
  );
};

export default SideBar;
