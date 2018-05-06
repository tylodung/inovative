import React from 'react';
import DocumentTitle from 'react-document-title';
import { prefixLink } from 'gatsby-helpers';

import $ from 'jquery';
import _ from 'lodash';

export default class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render () {
    const timeline = (
      <ul className="timeline">
        <li className="event" data-date="January 26, 2017">
          <h3>Decal Infosession</h3>
          <h4 className="hidden__date">January 26, 2017</h4>
          <p>
            Are you interested in graphic design or photography but have no experience?
            Come out to our decal infosession to learn more about the decals we offer!
          </p>
          <div className="button__wrapper">
            <a href="https://www.facebook.com/events/1056910001104826/" target="_blank">
              <button className="info__button">rsvp</button>
            </a>
          </div>
        </li>
        <li className="event" data-date="January 31, 2017">
          <h3>Club Infosession</h3>
          <h4 className="hidden__date">January 31, 2017</h4>
          <p>
            Interested in joining the Innovative Design family?  Come out to our club infosession and find out more about
            Innovative Design and each of the different tiers.
          </p>
          <div className="button__wrapper">
            <a href="https://www.facebook.com/events/408412902844165/" target="_blank">
              <button className="info__button">rsvp</button>
            </a>
          </div>
        </li>
        <li className="event" data-date="February 25-26, 2017">
          <h3>HEX: Hone & Explore Workshops</h3>
          <h4 className="hidden__date">February 25-26, 2017</h4>
          <p>
            HEX is a workshop series where students come to learn and teach design.  It occurs <b>every semester</b> and is free
            and open to all Cal students.  Check out workshops from last semester in the event website below!
          </p>
          <div className="button__wrapper">
            <a href="https://www.facebook.com/events/970127336422355/" target="_blank">
              <button className="info__button">rsvp</button>
            </a>
            <a href="http://hex.innovativedesign.club" target="_blank">
              <button className="info__button">event website</button>
            </a>
          </div>
        </li>
        <li className="event" data-date="March 12, 2017">
          <h3>RGB: Reach, Grow, Build</h3>
          <h4 className="hidden__date">March 12, 2017</h4>
          <p>
            Join Innovative Design for a day of learning from industry designers through a series of talks, workshops, and open
            Q&A.  This event occurs <b>annually in the spring</b>.  See last year's event website for more information!
          </p>
          <div className="button__wrapper">
            <a href="https://www.facebook.com/events/1830962990496969/">
              <button className="info__button">rsvp</button>
            </a>
            <a href="http://rgb.innovativedesign.club" target="_blank">
              <button className="info__button">event website</button>
            </a>
          </div>
        </li>
        <li className="event" data-date="TBA">
          <h3>CMYK Designathon</h3>
          <h4 className="hidden__date">TBA</h4>
          <p>
            Join us for a day of learning and exciting competition with your peers and professional designers.  This event
            occurs <b>annually in the fall</b>.  See last year's event website for more information!
          </p>
          <div className="button__wrapper">
            <a href="https://www.facebook.com/events/1239658116091377/">
              <button className="info__button" disabled>coming soon</button>
            </a>
            <a href="http://cmyk.innovativedesign.club" target="_blank">
              <button className="info__button">event website</button>
            </a>
          </div>
        </li>
      </ul>
    );

    return (
      <DocumentTitle title="Innovative Design">
        <div>
          <div className="page__wrapper events">
            <h1 className="section__title">upcoming events</h1>
            <div className="info">
              Here is the timeline for our public events this semester.  "Coming Soon" means the Facebook event has not yet been made for the event.
              You can check back here or like our Facebook page for updates.
            </div>
            { timeline }
          </div>
        </div>
      </DocumentTitle>
    );
  }
}
