import React from 'react';

import { Icon } from 'semantic-ui-react';
import './styles.scss';
import Logo from 'assets/Logo.svg';

const KrzyszD = () => (
  <div className="everything">
    <img src={Logo} alt="Hack Illinois Logo" className="img" />
    <div className="text">
      Hello World!
      <br />
      <p className="mini">Krzysztof Dutka</p>
    </div>
    <div className="bottom">
      <div className="click">
        <p>
          <a href="https://twitter.com/KrzysztofDutka1" rel="noopener noreferrer" target="_blank">
            <Icon className="twitter2" name="twitter" size="big" />
          </a>
        </p>
      </div>
    </div>
  </div>
);

export default KrzyszD;
