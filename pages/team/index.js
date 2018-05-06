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

    const officers = [
      {
        name: 'Jacqueline Woo',
        tagline: 'Can i get a burley New Orleans w/ light ice to go?',
        title: 'President',
        photo: '/img/officers/jackie.jpg'
      },
      {
        name: 'Natasha Welingkar',
        tagline: 'just your average human bean',
        title: 'President',
        photo: '/img/officers/natasha.jpg'
      },
      {
        name: 'Julia Sun',
        tagline: '1ce qube',
        title: 'Technology',
        tier: 'Web Tier',
        photo: '/img/officers/julia.jpg'
      },
      {
        name: 'Soph Li',
        tagline: 'speak sophli and carry a big stick',
        title: 'Photo Services',
        tier: 'Photo Tier',
        photo: '/img/officers/soph.jpg'
      },
      {
        name: 'Yudi Sun',
        tagline: 'shark babying',
        title: 'External',
        tier: 'Blue Tier',
        photo: '/img/officers/yudi.jpg'
      },
      {
        name: 'Lancy Zhang',
        tagline: 'happily and perpetually lost',
        title: 'Advisor',
        tier: 'Blue Tier',
        photo: '/img/officers/lancy.jpg'
      },
      {
        name: 'David Bui',
        tagline: 'rain drop, drop top, the sketch file is in my dropbox',
        title: 'External',
        tier: 'Web Tier',
        photo: '/img/officers/davidb.jpg'
      },
      {
        name: 'David Xie',
        tagline: 'YURI!!!onIce',
        title: 'VP of Marketing',
        tier: 'Marketing Tier',
        photo: '/img/officers/davidx.jpg'
      },
      {
        name: 'Tina Xu',
        tagline: '100% verified tea girl',
        title: 'VP of Marketing',
        tier: 'Marketing Tier',
        photo: '/img/officers/tina.jpg'
      },
      {
        name: 'Arlan Jaska',
        tagline: 'X5O!P%@AP[4\PZX54(P^)7CC)7}$EICAR-STANDARD-ANTIVIRUS-TEST-FILE!$H+H*',
        title: 'Finance',
        tier: 'Web Tier',
        photo: '/img/officers/arlan.jpg'
      },
      {
        name: 'Barbara Yang',
        tagline: 'carbs, puppers, pretty colors',
        title: 'Admin',
        tier: 'Gold Tier',
        photo: '/img/officers/barbara.jpg'
      },
      {
        name: 'Charley Huang',
        tagline: 'Love. That\'s what makes a Subaru a Subaru.',
        title: 'Recollections',
        tier: 'Video Tier',
        photo: '/img/officers/charley.jpg'
      },
      {
        name: 'Nicholas Chiu',
        tagline: 'aka chiubacca',
        title: 'Internal',
        tier: 'Photo Tier',
        photo: '/img/officers/nick.jpg'
      },
      {
        name: 'Brian Giang',
        tagline: 'new father of kitten of unknown gender',
        title: 'Internal',
        tier: 'Gold Tier',
        photo: '/img/officers/brian.jpg'
      },
      {
        name: 'Jessica Kwon',
        tagline: 'i am a turtle i love u',
        title: 'Education Coordinator',
        tier: 'Intro Decal',
        photo: '/img/officers/jessica.jpg'
      },
      {
        name: 'Brandon Fang',
        tagline: 'body piercing saved my life',
        title: 'Education Outreach',
        tier: 'Gold Tier',
        photo: '/img/officers/brandon.jpg'
      },
      {
        name: 'Anjile An',
        tagline: 'will pen tool for food',
        title: 'Facilitator',
        tier: 'Intro Decal',
        photo: '/img/officers/anjile.jpg'
      },
      {
        name: 'Jeffrey Shi',
        tagline: 'FULLY AUTOMATED GOURMET LUXURY QUEER GREEN SPACE COMMUNISM',
        title: 'Facilitator and Design Services',
        tier: 'Graphic Design Principles',
        photo: '/img/officers/jeffrey.jpg'
      },
      {
        name: 'Khor Le Yi',
        tagline: 'you can khor me le yi',
        title: 'Facilitator',
        tier: 'Graphic Design Principles',
        photo: '/img/officers/khor.jpg'
      },
      {
        name: 'Jackie Xu',
        tagline: 'who cares about your feed\'s aesthetic',
        title: 'Facilitator',
        tier: 'Photo Decal',
        photo: '/img/officers/jackiex.jpg'
      },
      {
        name: 'Andrew Wang',
        tagline: 'Follow me on insta @ndrewwang',
        title: 'Facilitator',
        tier: 'Photo Decal',
        photo: '/img/officers/andrew.jpg'
      },
      {
        name: 'Alven Wang',
        tagline: 'i am a wang with a huuuuuuuuuge wang ;) muah kisses muah muah muah',
        title: 'Advisor',
        tier: 'Gold Tier',
        photo: '/img/officers/alven.jpg'
      },
      {
        name: 'Christine Le',
        tagline: 'pizza and midday naps',
        title: 'Facilitator',
        tier: 'Intro Decal',
        photo: '/img/officers/christine.jpg'
      },
      {
        name: 'Margaret Zhou',
        tagline: 'kiwikiwikiwi',
        title: 'Facilitator',
        tier: 'Intro Decal',
        photo: '/img/officers/margie.jpg'
      },
      {
        name: 'Ankur Maniar',
        tagline: 'fashion baby FASHUN*~*~*~*~',
        title: 'Facilitator',
        tier: 'Photo Decal',
        photo: '/img/officers/ankur.jpg'
      },
      {
        name: 'Ben Marimon',
        tagline: 'my favorite type of flowers is Brandon Flowers',
        title: 'Advisor',
        photo: '/img/officers/ben.jpg'
      }
    ];

    const officerElements = _.map(officers, (person, index) => {
      return (
        <div
          key={ `personElem-${index}` }
          className="officer"
        >
          <div className="officer__photo">
            <img
              src={ prefixLink(person.photo) }
            />
          </div>
          <div className="officer__overlay officer__overlay--left"></div>
          <div className="officer__overlay officer__overlay--right"></div>
          <div className="officer__details">
            <div className="officer__detail--name">
              { person.name }
            </div>
            <div className="officer__detail--tagline">
              <i>{ person.tagline }</i>
            </div>
            <div className="officer__detail--title">
              { person.title }
            </div>
            <div className="officer__detail--tier">
              { person.tier }
            </div>
          </div>
        </div>
      );
    });

    return (
      <DocumentTitle title="Innovative Design">
        <div>
          <div className="page__wrapper team">
            <h1 className="section__title">
              officers
            </h1>
            <div className="officers">
              { officerElements }
            </div>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}
