// @flow
import React from 'react';

import clouds from 'assets/Home/clouds_stars.svg';
import fish from 'assets/Home/fish.png';
import logo from 'assets/logo.svg';
import midTopHalf from 'assets/Home/rock_top_half.png';
import midBottomHalf from 'assets/Home/rock_bottom_half.png';
import oceanArch from 'assets/Home/ocean-arch.png';
import oceanFloor from 'assets/Home/ocean-floor.png';
import rocksTop from 'assets/Home/rocks_top.png';
import starfish from 'assets/Home/starfish.png';
import waveFront from 'assets/Home/wave-front.svg';
import waveMid from 'assets/Home/wave-mid.svg';
import waveBack from 'assets/Home/wave-back.svg';

import './styles.scss';

const Home = () => (
  <div className="home">
    <div className="sky">
      <div className="cloud-wrapper">
        <img className="clouds" src={clouds} alt="Clouds and Stars" />
      </div>

      <div className="sun-wrapper">
        <div className="sun">
          <img src={logo} alt="HackIllinois Logo" />
          <h1>Make Waves</h1>
          <p>February 22-24</p>
        </div>
      </div>
    </div>

    <div className="rocks-top-wrapper">
      <img className="rocks-top" src={rocksTop} alt="Rocks top" />
    </div>

    <div className="water">
      <img className="wave wave-back" src={waveBack} alt="Wave Back" />
      <img className="wave wave-mid" src={waveMid} alt="Wave Middle" />
      <img className="wave wave-front" src={waveFront} alt="Wave Front" />

      <div className="rocks">
        <img className="mid-top-half" src={midTopHalf} alt="rocks" />
        <div className="mid-content">
          <div className="content-column">
            <div id="header-1" className="column-header">
              <img id="starfish" src={starfish} alt="starfish" />
              <h3>General</h3>
            </div>
            <p>
              HackIllinois is a 36-hour event where college students from across the country work on
              Free and Open Source Software projects ranging from websites and mobile apps to Wi-Fi
              connected microwaves. You will work with our mentors on exciting projects, have the
              opportunity to learn new skills or languages, and have tons of fun with our social
              events!
            </p>
          </div>

          <div className="content-column">
            <div id="header-2" className="column-header">
              <h3>Before</h3>
            </div>
            <p>
              Registration will open up in early December of 2018, and RSVP information will be
              collected in early february. Any student enrolled in university that is at least 18
              years old is eligible to apply, so keep an eye out for our announcements and timeline.
              If you’re interested in getting involved early in Free and Open Source Software
              development, we’ll be providing an opportunity for guaranteed admission for merged
              PR’s on select projects. More info on this to come soon.
            </p>
          </div>

          <div className="content-column">
            <div id="header-3" className="column-header">
              <h3>During</h3>
            </div>
            <p>
              HackIllinois will take place in February of 2019. Our excellent FOSS mentors will be a
              major part of the event and literally a part of your team! They will be prepared with
              projects and teaching tools, but they will act as your peers for the weekend. Bus
              transportation will be provided to UIUC on Friday, Feb 22nd and back to select schools
              on Sunday, Feb 24th. The venue is fully featured with working, sleeping, and lounge
              rooms available, as well as dedicated space for social events and meals.
            </p>
          </div>

          <div className="content-column">
            <div id="header-4" className="column-header">
              <h3>After</h3>
            </div>
            <p>
              Our event is far more than the 36 hours you will spend in Urbana this February. We
              hope that you have the opportunity to network with, collaborate with, and befriend
              many new people in your time here, and the projects produced should be maintained just
              the same as these social circles. IlliniHackers works closely with UIUC OSS (our
              university Open Source Software group) to put on HackNights and encourage general
              participation in the FOSS community. If you’re a student here or elsewhere and want to
              join the movement, please reach out to
              <a href="mailto:opensource@hackillinois.org"> opensource@hackillinois.org</a>.
            </p>
          </div>
        </div>
        <div id="rocks-mid-bottom-grouping">
          <img className="mid-bottom-half" src={midBottomHalf} alt="rocks" />
          <img id="fish" src={fish} alt="fish" />
        </div>

        <div className="floor">
          <img className="ocean-arch" src={oceanArch} alt="Rock arch" />
          <img className="ocean-floor" src={oceanFloor} alt="Ocean Floor" />
        </div>
      </div>
    </div>
  </div>
);

export default Home;
