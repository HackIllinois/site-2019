import React, { Fragment } from 'react';

import travels from './travel.js';
import './styles.scss';

type TravelPlanProps = {
  itineraryType: string,
  settings: object,
};

type TravelProps = {
  university: string,
  beforeEvent: object,
  afterEvent: object,
};

const TravelPlan = (props: TravelPlanProps) => {
  const { itineraryType, settings } = props;

  return (
    <div>
      <div className="itinerary">
        <div className="itinerary-type">
          <p>{itineraryType}</p>
        </div>
        {settings.map(setting => (
          <div key={setting.time} className="itinerary-details">
            <p className="itinerary-time">{setting.time}</p>
            {setting.locations.map(location => (
              <p key={location} className="itinerary-location">
                {location}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const TravelPlans = (props: TravelProps) => {
  const { university, beforeEvent, afterEvent } = props;
  const { pickupsBefore, arrivalsBefore } = beforeEvent;
  const { pickupsAfter, arrivalsAfter } = afterEvent;

  return (
    <div>
      <h2>{university}</h2>

      <div className="travel-plan">
        <h4>{university} to UIUC:</h4>
        <TravelPlan itineraryType="Pickup" settings={pickupsBefore} />
        <TravelPlan itineraryType="Arrival" settings={arrivalsBefore} />
      </div>

      <div className="travel-plan">
        <h4>UIUC to {university}:</h4>
        <TravelPlan itineraryType="Pickup" settings={pickupsAfter} />
        <TravelPlan itineraryType="Arrival" settings={arrivalsAfter} />
      </div>
    </div>
  );
};

const Travel = () => (
  <Fragment>
    <h1>Travel</h1>

    <div className="travel">
      {travels.map(travel => (
        <TravelPlans key={travel.university} {...travel} />
      ))}
    </div>
  </Fragment>
);

export default Travel;
