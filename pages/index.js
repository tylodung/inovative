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
  'Trang chủ',
  'Thanh toán',
  'Liên hệ',
  'Chính sách'
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
      'Google Adsense',
      'Content 68% web',
      'Call 0902-683-189',
      'Uy tín-Chất lượng',
      'Cảm ơn các bạn'
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
      <DocumentTitle title="Đoàn Bình Google Adsense">
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
                    interval={ { letter: 30, string: 500 } }
                    backspace={ true }
                    cursor={ '|' }
                    startDelay={ 950 }
                    hideCursorOnDone={ true }
                  />
                </div>
                <div className="slide__button--wrapper">
                  <div
                    className="slide__button slide__button--1"
                    style={{ backgroundImage: `url("${prefixLink('/img/club-one.jpg')}")` }}
                  ></div>
                  <a href="http://myphamcacloai.net" target="_blank">
                    <div className="slide__button slide__button--2">
                      <div className="apply__text">chuyên cung cấp account google adsense content web chưa pin - đã pin - đã pay - call 0902-683-189</div>
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
                  <p>
                  Số TK: <b>0441000617317</b> - <b>ĐOÀN TRỌNG BÌNH</b>
					  </p>
				  Ngân hàng <b>Vietcombank</b> chi nhánh TP.HCM
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
				  Các bạn có thể ghé chỗ mình <b>mua bán trực tiếp</b> hoặc <b>giao dịch trung gian</b>.
					  </p>
					  <p>
				  Liên hệ: <b>https://www.facebook.com/BinhLuiV</b>
				  </p>
					  <p>
					  ĐT: <b>0902-683-189</b>
					  </p>
					  <p>
					  <b>MUA BÁN UY TÍN - NÓI KHÔNG VỚI SCAM</b>
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
                    <b>CHÍNH SÁCH BẢO HÀNH</b>
                  </p>
                  <p>
                    <b>1. Các lỗi được bảo hành 1 đổi 1 như sau:</b>
					  </p>
					  <p>
- Ga không hiện ADS
- Ga không tổng
- Ga không hiện địa chỉ nhập mã pin khi đủ 10$
- Ga lỗi đăng ký

					  </p>
                  <p>
                    <b>2. Các lỗi không được bảo hành như sau:</b>
					  </p>
					  <p>
- Web đặt GA bị vi phạm làm Ga die
- Các bạn dùng tool, cheat kéo view làm Ga die
- Các bạn tự click làm Ga die
- Bị click tặc do bị chơi xấu
- Ga tự die do một số nguyên nhân từ phía các bạn
- Các bạn dùng hệ thống kéo view ngày 100$ - 200$ - 300$ làm ga die.
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

