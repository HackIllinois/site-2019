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

type Pane = {
  component: () => Node,
  uid: string,
  name: string,
};

type SideBarProps = {
  pane: number,
  panes: Array<Pane>,
};

const SideBar = (props: SideBarProps) => {
  const { pane, panes } = props;
  return (
    <section className="sidebar">
      <ul>
        {panes.map((cur, i) => {
          if (cur.name) {
            return (
              <SideBarLink index={i} pane={pane} key={cur.uid}>
                {cur.name}
              </SideBarLink>
            );
          }
          return null;
        })}
      </ul>
    </section>
  );
};

export default SideBar;
