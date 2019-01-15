import React from 'react';

const fb = 'https://www.facebook.com/groups/illinihackers/';
const tw = 'https://twitter.com/illinihackers';

const After = () => (
  <section className="faq-pane">
    <div className="faq-container faq-column-container">
      <section className="faq-column">
        <h4>Will there be prizes?</h4>
        <p>
          Yes, there will be overall prizes as well as category prizes sponsored by companies split
          based on the type of contribution made. We encourage you to work on a project that
          interests you rather than aiming for a specific prize. Judging will be based on technical
          merit of the contribution, and not on flashiness or APIs used. Detailed prize information
          will be released closer to the event.
        </p>
      </section>
      <section className="faq-column">
        <h4>Are there other events similar to this?</h4>
        <p>
          Yes! Follow Illini Hackers on <a href={fb}>Facebook</a> and <a href={tw}>Twitter</a> to
          stay up-to-date on HackNights, college hackathons, and other events!
        </p>
      </section>
      <section className="faq-column">
        <h4>Have more questions?</h4>
        <p>
          Please don’t hesitate to reach out to us at{' '}
          <a href="mailto:contact@hackillinois.org"> contact@hackillinois.org</a> if you have any
          other questions.
        </p>
      </section>
      <section className="faq-column" />
    </div>
  </section>
);

export default After;
