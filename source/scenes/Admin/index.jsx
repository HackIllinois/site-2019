import React from 'react';

import Footer from 'components/Footer';

import { Bar } from '@nivo/bar';

import './styles.scss';

const Admin = () => (
  <div className="admin">
    <div className="content-wrapper">
      <div className="contents">
        <Bar
          width={900}
          height={500}
          margin={{
            top: 60,
            right: 80,
            bottom: 60,
            left: 80,
          }}
          data={[
            {
              country: 'AD',
              dogs: 151,
              dogsColor: 'hsl(89, 70%, 50%)',
            },
            {
              country: 'AE',
              dogs: 93,
              dogsColor: 'hsl(334, 70%, 50%)',
            },
            {
              country: 'AF',
              dogs: 51,
              dogsColor: 'hsl(157, 70%, 50%)',
            },
          ]}
          indexBy="country"
          keys={['dogs']}
          padding={0.2}
          labelTextColor="inherit:darker(1.4)"
          labelSkipWidth={16}
          labelSkipHeight={16}
        />
      </div>
      <Footer />
    </div>
  </div>
);

export default Admin;
