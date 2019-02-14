import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import MapECEB from './Maps/HackillinoisMAPS-ECEB.png';
import MapSIEBEL from './Maps/HackillinoisMAPS-SIEBEL.png';
import MapKENNY from './Maps/HackillinoisMAPS-KENNY.png';
import MapDCL from './Maps/HackillinoisMAPS-DCL.png';

import './styles.scss';

const Maps = () => (
  <div className="flexbox-center">
    <Tabs>
      <p className="tab-title">Maps</p>

      <TabList>
        <Tab>
          <p className="tab-underline">ECEB</p>
        </Tab>
        <Tab>
          <p className="tab-underline">SIEBEL</p>
        </Tab>
        <Tab>
          <p className="tab-underline">KENNY</p>
        </Tab>
        <Tab>
          <p className="tab-underline">DCL</p>
        </Tab>
      </TabList>

      <TabPanel>
        <div>
          <img src={MapECEB} alt="" className="bimage" />
        </div>
      </TabPanel>
      <TabPanel>
        <img src={MapSIEBEL} alt="" className="bimage" />
      </TabPanel>
      <TabPanel>
        <img src={MapKENNY} alt="" className="bimage" />
      </TabPanel>
      <TabPanel>
        <img src={MapDCL} alt="" className="bimage" />
      </TabPanel>
    </Tabs>
  </div>
);

export default Maps;
