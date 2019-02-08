import React, { Fragment } from 'react';

import schedule from './schedule.json';
import './styles.scss';

const { Friday, Saturday, Sunday } = schedule;

const Day = (props: DayProps) => {
  const { title, day } = props;

  return (
    <div className="day">
      <h2>{title}</h2>

      <div className="events">
        {day.map(d => {
          const { time, events } = d;
          return (
            <Fragment key={time}>
              <div className="time">
                <p>{time}</p>
              </div>
              <div className="details details-a">
                <p className="name">{events[0].title}</p>
                {events[0].locations.map(l => (
                  <p key={l} className="location">
                    {l}
                  </p>
                ))}
              </div>
              <div className="details details-b">
                {events.length === 2 && (
                  <Fragment>
                    <p className="name">{events[1].title}</p>
                    {events[1].locations.map(l => (
                      <p key={l} className="location">
                        {l}
                      </p>
                    ))}
                  </Fragment>
                )}
              </div>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

const Schedule = () => (
  <Fragment>
    <h1>Schedule</h1>

    <Day title="Friday" day={Friday} />
    <Day title="Saturday" day={Saturday} />
    <Day title="Sunday" day={Sunday} />
  </Fragment>
);

export default Schedule;
