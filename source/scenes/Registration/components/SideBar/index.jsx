// @flow
import React from 'react';

import type { Node } from 'react';

import './styles.scss';

type SideBarLinkProps = {
  children: Node,
  index: number,
  pane: number,
  onClick: () => void,
};

const SideBarLink = (props: SideBarLinkProps) => {
  const { children, index, pane, onClick } = props;
  let s = 'unvisited';
  if (index === pane) {
    s = 'current';
  } else if (index < pane) {
    s = 'visited';
  }

  return (
    <li>
      <button className={`sidebar-link ${s}`} type="button" onClick={onClick}>
        <div className="bubble" />
        <p>{children}</p>
      </button>
    </li>
  );
};

type SideBarProps = {
  pane: number,
  setPane: number => void,
};

const SideBar = (props: SideBarProps) => {
  const { pane, setPane } = props;
  return (
    <section className="sidebar">
      <ul>
        <SideBarLink index={0} pane={pane} onClick={() => setPane(0)}>
          Student Info
        </SideBarLink>
        <SideBarLink index={1} pane={pane} onClick={() => setPane(1)}>
          Personal Info
        </SideBarLink>
        <SideBarLink index={2} pane={pane} onClick={() => setPane(2)}>
          Professional Info
        </SideBarLink>
        <SideBarLink index={3} pane={pane} onClick={() => setPane(3)}>
          Beginner Info
        </SideBarLink>
        <SideBarLink index={4} pane={pane} onClick={() => setPane(4)}>
          Other
        </SideBarLink>
        <SideBarLink index={5} pane={pane} onClick={() => setPane(5)}>
          Team
        </SideBarLink>
      </ul>
    </section>
  );
};

export default SideBar;
