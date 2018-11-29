import React from 'react';

const ih = 'https://www.facebook.com/groups/illinihackers/';

const After = () => (
  <section className="faq-pane">
    <div className="faq-container faq-column-container">
      <section className="faq-column">
        <h4>What are the prizes?</h4>
        <p>
          Judging will be split into hardware and software categories. There will be prizes directly
          provided by HackIllinois and by our sponsors. We will be releasing detailed prize
          information closer to the event.
        </p>
      </section>
      <section className="faq-column">
        <h4>Are there other events similar to this?</h4>
        <p>
          Yes! Check out IlliniHackers on <a href={ih}>Facebook</a> to see some of our favorite
          events and maybe find some teammates to work with too!
        </p>
      </section>
      <section className="faq-column">
        <h4>Have more questions?</h4>
        <p>
          Please don’t hesitate to reach out to
          <a href="mailto:contact@hackillinois.org"> contact@hackillinois.org </a>
          for questions, comments, and concerns.
        </p>
      </section>
      <section className="faq-column" />
    </div>
  </section>
);

export default After;
