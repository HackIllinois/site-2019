import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import MapECEB from 'assets/Maps/HackillinoisMAPS-ECEB.png';
import MapSIEBEL from 'assets/Maps/HackillinoisMAPS-SIEBEL.png';
import MapKENNY from 'assets/Maps/HackillinoisMAPS-KENNY.png';
import MapDCL from 'assets/Maps/HackillinoisMAPS-DCL.png';

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
          <p className="tab-underline">KENNEY</p>
        </Tab>
        <Tab>
          <p className="tab-underline">DCL</p>
        </Tab>
      </TabList>

      <TabPanel>
        <div>
          <img src={MapECEB} alt="" className="map-image" />
        </div>
      </TabPanel>
      <TabPanel>
        <img src={MapSIEBEL} alt="" className="map-image" />
      </TabPanel>
      <TabPanel>
        <img src={MapKENNY} alt="" className="map-image" />
      </TabPanel>
      <TabPanel>
        <img src={MapDCL} alt="" className="map-image" />
      </TabPanel>
    </Tabs>
  </div>
);

export default Maps;
