import anime from 'animejs';
import React from 'react';
import classNames from 'classnames';
import DocumentTitle from 'react-document-title';
import FontAwesome from 'react-fontawesome';
import KeyHandler, { KEYDOWN } from 'react-key-handler';
import { prefixLink } from 'gatsby-helpers';

import _ from 'lodash';

import Logo, { LOGO_TEXT, LOGO_ICON } from './components/logo';
import Typing from './components/typing';

const DISPLAY_NONE = 'none';
const DISPLAY_BLOCK = 'block';
const sectionTitles = [
  'home',
  'about',
  'tiers',
  'decals'
];
const numOfSections = sectionTitles.length;
let slideAnimations = {};
let slideAnimationsOut = {};

function generateSlideAnimations(win) {
  slideAnimations = {
    slide0: [
      {
        targets: '.splash__container',
        translateX: [win.innerWidth, 0],
        delay: 25,
        easing: "easeOutCirc",
        duration: 400
      },
      {
        targets: '.slide__button--wrapper',
        translateX: [-win.innerWidth, 0],
        delay: 50,
        easing: "easeOutCirc",
        duration: 400
      }
    ],
    slide1: [
      {
        targets: '.circle--one',
        scale: [0, 1],
        delay: 25,
        easing: "easeOutCirc",
        duration: 275
      },
      {
        targets: '.circle--two',
        scale: [0, 1],
        delay: 110,
        easing: "easeOutCirc",
        duration: 275
      },
      {
        targets: '.circle--three',
        scale: [0, 1],
        delay: 200,
        easing: "easeOutCirc",
        duration: 275
      },
      {
        targets: '.info__container--circles',
        translateY: [win.innerHeight, 0],
        delay: 200,
        easing: "easeOutCirc",
        duration: 275
      }
    ],
    slide2: [
      {
        targets: '.blue',
        scale: [0, 1],
        delay: 50,
        easing: "easeOutCirc",
        duration: 200
      },
      {
        targets: '.gold',
        scale: [0, 1],
        delay: 100,
        easing: "easeOutCirc",
        duration: 200
      },
      {
        targets: '.photo',
        scale: [0, 1],
        delay: 150,
        easing: "easeOutCirc",
        duration: 200
      },
      {
        targets: '.web',
        scale: [0, 1],
        delay: 200,
        easing: "easeOutCirc",
        duration: 200
      },
      {
        targets: '.video',
        scale: [0, 1],
        delay: 250,
        easing: "easeOutCirc",
        duration: 200
      },
      {
        targets: '.info__container--icons',
        translateY: [win.innerHeight, 0],
        delay: 200,
        easing: "easeOutCirc",
        duration: 250
      }
    ],
    slide3: [
      {
        targets: '.decal--intro',
        scale: [0, 1],
        delay: 25,
        easing: "easeOutCirc",
        duration: 275
      },
      {
        targets: '.decal--gdp',
        scale: [0, 1],
        delay: 110,
        easing: "easeOutCirc",
        duration: 275
      },
      {
        targets: '.decal--photo',
        scale: [0, 1],
        delay: 200,
        easing: "easeOutCirc",
        duration: 275
      },
      {
        targets: '.decal__container--decals',
        translateY: [win.innerHeight, 0],
        delay: 200,
        easing: "easeOutCirc",
        duration: 275
      }
    ]
  };

  slideAnimationsOut = {
    slide0: [
      {
        targets: '.splash__container',
        translateX: [0, -win.innerWidth],
        delay: 25,
        easing: "linear",
        duration: 400
      },
      {
        targets: '.slide__button--wrapper',
        translateX: [0, win.innerWidth],
        delay: 50,
        easing: "linear",
        duration: 400
      }
    ],
    slide1: [
      {
        targets: '.circle--one',
        scale: [1, 0],
        delay: 25,
        easing: "linear",
        duration: 250
      },
      {
        targets: '.circle--two',
        scale: [1, 0],
        delay: 110,
        easing: "linear",
        duration: 250
      },
      {
        targets: '.circle--three',
        scale: [1, 0],
        delay: 200,
        easing: "linear",
        duration: 250
      },
      {
        targets: '.info__container--circles',
        translateY: [0, win.innerHeight],
        delay: 25,
        easing: "linear",
        duration: 250
      }
    ],
    slide2: [
      {
        targets: '.blue',
        scale: [1, 0],
        delay: 50,
        easing: "linear",
        duration: 200
      },
      {
        targets: '.gold',
        scale: [1, 0],
        delay: 100,
        easing: "linear",
        duration: 200
      },
      {
        targets: '.photo',
        scale: [1, 0],
        delay: 150,
        easing: "linear",
        duration: 200
      },
      {
        targets: '.web',
        scale: [1, 0],
        delay: 200,
        easing: "linear",
        duration: 200
      },
      {
        targets: '.video',
        scale: [1, 0],
        delay: 250,
        easing: "linear",
        duration: 200
      },
      {
        targets: '.decal__container--decals',
        translateY: [0, win.innerHeight],
        delay: 50,
        easing: "linear",
        duration: 250
      }
    ],
    slide3: [
      {
        targets: '.decal--intro',
        scale: [1, 0],
        delay: 25,
        easing: "linear",
        duration: 250
      },
      {
        targets: '.decal--gdp',
        scale: [1, 0],
        delay: 110,
        easing: "linear",
        duration: 250
      },
      {
        targets: '.decal--photo',
        scale: [1, 0],
        delay: 200,
        easing: "linear",
        duration: 250
      },
      {
        targets: '.info__container--circles',
        translateY: [0, win.innerHeight],
        delay: 25,
        easing: "linear",
        duration: 250
      }
    ]
  };
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      previousIndex: 0,
      slideIndex: 0
    };
  }

  componentDidMount() {
    if (window) {
      generateSlideAnimations(window);
    }

    this.refs.slide1.style.display = DISPLAY_NONE;
    this.refs.slide2.style.display = DISPLAY_NONE;
  }

  componentDidUpdate() {
    const slideInName = `slide${this.state.slideIndex}`;
    const slideOutName = `slide${this.state.previousIndex}`;

    const animations = slideAnimations[slideInName];
    const outAnimations = slideAnimationsOut[slideOutName];

    if (outAnimations) {
      for (let animation of outAnimations) {
        anime(animation);
      }
    }

    setTimeout(() => {
      this.refs[slideOutName].style.display = DISPLAY_NONE;
      this.refs[slideInName].style.display = DISPLAY_BLOCK;

      if (animations) {
        for (let animation of animations) {
          anime(animation);
        }
      }
    }, 500);
  }

  _handleKeyboardArrows(e, increment) {
    this._handleArrowClick(e, increment);
  }

  _handleArrowClick(e, increment) {
    e.preventDefault();

    const currentIndex = this.state.slideIndex;
    const nextIndex = increment ? (currentIndex + 1) : (currentIndex - 1)

    this.setState({
      previousIndex: currentIndex,
      slideIndex: nextIndex < 0 ? numOfSections - 1 : nextIndex % numOfSections
    });
  }

  _handleDotsClick(e, index) {
    e.preventDefault();

    if (index != this.state.slideIndex) {
      this.setState({
        previousIndex: this.state.slideIndex,
        slideIndex: index
      });
    }
  }

  render () {
    const stringsToType = [
      'Design',
      'Graphic Design',
      'Photography',
      'Web Design',
      'Videography',
      'Design'
    ];

    const navDots = _.map(sectionTitles, (title, idx) => {
      return (
        <li
          key={ `dots-${idx}` }
          className="dot"
          onClick={ (e) => { this._handleDotsClick(e, idx); } }
        >
          <div
            className="dot__tooltip"
          >
            { title }
          </div>
          <div
            className={ classNames('circle', {
              'circle--active': this.state.slideIndex === idx
            }) }
          >
          </div>
        </li>
      );
    });

    return (
      <DocumentTitle title="Innovative Design">
        <div>
          <KeyHandler
            keyEventName={KEYDOWN}
            keyValue="ArrowDown"
            onKeyHandle={(e) => {
              this._handleKeyboardArrows(e, true);
            }}
          />
          <KeyHandler
            keyEventName={KEYDOWN}
            keyValue="ArrowUp"
            onKeyHandle={(e) => {
              this._handleKeyboardArrows(e, false);
            }}
          />
          <KeyHandler
            keyEventName={KEYDOWN}
            keyValue="ArrowRight"
            onKeyHandle={(e) => {
              this._handleKeyboardArrows(e, true);
            }}
          />
          <KeyHandler
            keyEventName={KEYDOWN}
            keyValue="ArrowLeft"
            onKeyHandle={(e) => {
              this._handleKeyboardArrows(e, false);
            }}
          />
          <div className="page__wrapper home">
            <div className="slideshow">
              <div
                ref="slide0"
                className={
                  classNames(
                    "slide__layout",
                    "slide__layout--1",
                    {
                      "slide__layout--selected": this.state.slideIndex === 0
                    }
                  )
                }
              >
                <div className="splash__container">
                  <Logo logoType={ LOGO_TEXT } logoClass={ 'logo__svg--color' } />
                  <Typing
                    defaultString="Design"
                    strings={ stringsToType }
                    interval={ { letter: 50, string: 500 } }
                    backspace={ true }
                    cursor={ '|' }
                    startDelay={ 750 }
                    hideCursorOnDone={ true }
                  />
                </div>
                <div className="slide__button--wrapper">
                  <div
                    className="slide__button slide__button--1"
                    style={{ backgroundImage: `url("${prefixLink('/img/club-one.jpg')}")` }}
                  ></div>
                  <a href="http://makeberkeleybeautiful.com" target="_blank">
                    <div className="slide__button slide__button--2">
                      <div className="apply__text">portfolio</div>
                      <div className="slide__fill"></div>
                    </div>
                  </a>
                </div>
              </div>
              <div
                ref="slide1"
                style={{
                  display: DISPLAY_NONE
                }}
                className={
                  classNames(
                    "slide__layout",
                    "slide__layout--2",
                    {
                      "slide__layout--selected": this.state.slideIndex === 1
                    }
                  )
                }
              >
                <div className="circle__container">
                  <div
                    className="circle circle--one"
                    style={{ backgroundImage: `url("${prefixLink('/img/calday.jpg')}")` }}
                  ></div>
                  <div
                    className="circle circle--two"
                    style={{ backgroundImage: `url("${prefixLink('/img/marketing.png')}")` }}
                  ></div>
                  <div
                    className="circle circle--three"
                    style={{ backgroundImage: `url("${prefixLink('/img/flyers.png')}")` }}
                  ></div>
                </div>
                <div className="info__container--circles">
                  Innovative Design is a family of graphic and web designers, photographers,
                  and videographers at the University of California, Berkeley. We are creative
                  individuals who are continuously evolving by collaborating, inspiring and
                  educating one another.
                </div>
              </div>
              <div
                ref="slide2"
                style={{
                  display: DISPLAY_NONE
                }}
                className={
                  classNames(
                    "slide__layout",
                    "slide__layout--3",
                    {
                      "slide__layout--selected": this.state.slideIndex === 2
                    }
                  )
                }
              >
                <div className="icons__container">
                  <div
                    className="icon blue"
                    style={{ backgroundImage: `url("${prefixLink('/img/tiers/blue.png')}")` }}
                  ></div>
                  <div
                    className="icon gold"
                    style={{ backgroundImage: `url("${prefixLink('/img/tiers/gold.png')}")` }}
                  ></div>
                  <div
                    className="icon photo"
                    style={{ backgroundImage: `url("${prefixLink('/img/tiers/photo.png')}")` }}
                  ></div>
                  <div
                    className="icon web"
                    style={{ backgroundImage: `url("${prefixLink('/img/tiers/web.png')}")` }}
                  ></div>
                  <div
                    className="icon video"
                    style={{ backgroundImage: `url("${prefixLink('/img/tiers/video.png')}")` }}
                  ></div>
                </div>
                <div className="info__container--icons">
                  <p>
                    Innovative Design has five tiers that students can apply to be a member on: Blue, Gold, Photo, Video, and Web.
                  </p>
                  <p>
                    There are two design tiers, Gold and Blue Tier.  <b>Blue Tier</b> is a group of intermediate to advanced designers
                    that offers design services to off-campus groups while <b>Gold Tier</b> offers graphic design education
                    and experience for beginner to intermediate designers to on-campus groups.
                  </p>
                  <p>
                    <b>Photo Tier</b> is a hands-on experience in shooting professional headshots, event photography, stock photos and more.
                  </p>
                  <p>
                    <b>Web Tier</b> works for clients that are in need of technical help in designing their websites.
                    Tier members learn new skills and put existing knowledge to use through hands-on experience.
                  </p>
                  <p>
                    <b>Video Tier</b> creates video campaigns for clients on and off campus -- everything from logo animations,
                    event recap videos and Kickstarter campaigns.
                  </p>
                  <p>
                    Visit <b><a href="http://makeberkeleybeautiful.com" target="_blank">makeberkeleybeautiful.com</a></b> for a full portfolio.
                  </p>
                </div>
              </div>
              <div
                ref="slide3"
                style={{
                  display: DISPLAY_NONE
                }}
                className={
                  classNames(
                    "slide__layout",
                    "slide__layout--4",
                    {
                      "slide__layout--selected": this.state.slideIndex === 3
                    }
                  )
                }
              >
                <div className="decal__container">
                  <div 
                    className="decal decal--intro"
                    style={{ backgroundImage: `url("${prefixLink('/img/decal-info/intro.png')}")` }}
                  ></div>
                  <div 
                    className="decal decal--gdp"
                    style={{ backgroundImage: `url("${prefixLink('/img/decal-info/gdp.png')}")` }}
                  ></div>
                  <div 
                    className="decal decal--photo"
                    style={{ backgroundImage: `url("${prefixLink('/img/decal-info/photo.png')}")` }}
                  ></div>
                </div>
                <div className="decal__container--decals">
                  <p>
                    Innovative Design also teaches 3 decals separate from the club that are open to the public.  You can
                    register for these decals at the beginning of each semester at <b><a href="http://decal.berkeley.edu" target="_blank">decal.berkeley.edu</a></b>.
                    Infosessions are mandatory, so check our <b>Events</b> tab or like us on Facebook for details and updates.
                  </p>
                  <p>
                    <b>Intro to Photoshop and Illustrator</b> teaches graphic design through the use of Adobe Illustrator and Photoshop. 
                    This class is built for students who do not have any prior experience or knowledge of these programs.
                  </p>
                  <p>
                    <b>Graphic Design Principles</b> is a technical course in which students are taught extensive knowledge of Adobe programs (such as Illustrator and/or Photoshop). 
                    The class also covers conceptual and theoretical aspects of design such as color theory, branding, and user interface design.
                  </p>
                  <p>
                    <b>Photography Principles</b> is for students interested in learning photography. We start off with the basics (camera manipulations and shooting in RAW) and quickly 
                    move onto composition rules and tricks to get better, more thought out photos, and from there move onto how to be a professional photographer, 
                    photo ethics, and integrating art into photography.
                  </p>
                  <p>
                    You can take a look at lessons and homework for each of these decals in the <b>Decal Students</b> tab above.
                  </p>
                </div>
              </div>
            </div>
            <div className="slideshow__nav">
              <div className="slideshow__dots">
                <ul className="dots">
                  { navDots }
                </ul>
              </div>
              <div className="slideshow__arrows">
                <div
                  className="arrow arrow--left"
                  onClick={(e) => { this._handleArrowClick(e, false) }}
                >
                  <div className="text">back</div>
                  <div className="arrow__triangle"></div>
                </div>
                <div
                  className="arrow arrow--right"
                  onClick={(e) => { this._handleArrowClick(e, true) }}
                >
                  <div className="text">next</div>
                  <div className="arrow__triangle"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}

