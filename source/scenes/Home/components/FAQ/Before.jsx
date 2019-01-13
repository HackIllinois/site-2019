import React from 'react';

const Before = () => (
  <section className="faq-pane">
    <div className="faq-container faq-column-container">
      <section className="faq-column">
        <h4>What should I bring?</h4>
        <p>
          You should bring a student ID, a reusable water bottle, a change of clothing, personal
          items such as toiletries, and a laptop &amp; charger. Due to safety considerations, please
          do not bring desktop computers, extra monitors, firearms, or alcoholic beverages.
        </p>
      </section>
      <section className="faq-column">
        <h4>When will I find out if I can attend?</h4>
        <p>
          Decisions will be released one month ahead of the event in January to allow time for
          students to make transportation plans. RSVP is required to check in, so be on the lookout
          for your acceptance email!
        </p>
      </section>
      <section className="faq-column">
        <h4>How do I get there?</h4>
        <p>
          We will be providing buses to certain locations across the Midwest. Last year,
          HackIllinois had <a href="https://2018.hackillinois.org/travel">these bus routes</a>{' '}
          (subject to change this year). HackIllinois will not be providing travel reimbursements to
          students.
        </p>
      </section>
      <section className="faq-column">
        <h4>Do I need a team?</h4>
        <p>
          Due to the nature of HackIllinois as an open source event, you are encouraged to work with
          others to contribute to open source projects. In particular, you are required to work with
          a mentor in order to be eligible for a prize. Mentors will be available on Slack before
          the event, as well at a project session on Friday. There are no team size limits, but most
          contributions end up coming from teams of around 6-8.
        </p>
      </section>
    </div>
  </section>
);

export default Before;
