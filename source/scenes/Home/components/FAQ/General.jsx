import React from 'react';

const General = () => (
  <section className="faq-pane">
    <div className="faq-container faq-column-container">
      <section className="faq-column">
        <h4>What</h4>
        <p>
          HackIllinois is a 36-hour event where college students from across the country work on
          open source projects, including new features, documentation, and bug fixes. You can work
          on contributing to a useful open source tool that you use, an open source project of your
          own, or joining a team led by an open source mentor.
        </p>
      </section>
      <section className="faq-column">
        <h4>Where</h4>
        <p>
          HackIllinois will occur in multiple buildings on the University of Illinois at
          Urbana-Champaign campus, primarily at the Siebel Center for Computer Science (201 N
          Goodwin Ave, Urbana, IL 61801) and Electrical &amp; Computer Engineering Building (306 N
          Wright St, Urbana, IL 61801).
        </p>
      </section>
      <section className="faq-column">
        <h4>When</h4>
        <p>
          You should arrive before 8 pm on Friday, February 22 for an opening ceremony and other
          activities. The contribution period will begin at 11 pm and will last until 11 am on
          Sunday, February 24. A more detailed schedule is available on{' '}
          <a href={schedule}>the Day Of site</a>.
        </p>
      </section>
      <section className="faq-column">
        <h4>Who</h4>
        <p>
          All university and college students of all skill levels are eligible to attend. We welcome
          a diverse mix of colleges, disciplines, and interests at our event, and encourage students
          from outside the Champaign-Urbana area to attend. There will be workshops and support from
          mentors if you are new to open source.
        </p>
      </section>
    </div>
  </section>
);

export default General;
