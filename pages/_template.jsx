import React from 'react';
import { Container } from 'react-responsive-grid';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import FontAwesome from 'react-fontawesome';
import Headroom from 'react-headroom';
import classNames from 'classnames';
import $ from 'jquery';

import 'css/_index.scss';

const navbarHeight = 60;

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navOpen: false
    };

    this._handleHamburger = this._handleHamburger.bind(this);
  }

  _handleHamburger(e) {
    e.preventDefault();
    this.setState({
      navOpen: !this.state.navOpen
    });
  }

  render() {
    return (
      <div className="root">
        <Headroom
          wrapperStyle={{
            maxHeight: navbarHeight
          }}
          style={{
            background: 'rgba(255, 255, 255, 0.99)'
          }}
        >
          <div
            className={classNames("nav", {
              "nav--open": this.state.navOpen
            })}
          >
            <div className="nav__wrapper">
              <a className="nav__item nav__logo" href={ prefixLink('/') }>
                <img src={ prefixLink('/img/logo-icon.png') } />
              </a>
              <div
                className={classNames("nav__item", "nav__hamburger", {
                  "nav__hamburger--active": this.state.navOpen
                })}
                onClick={this._handleHamburger}
              >
                <div className="hamburger__bar bar--1"></div>
                <div className="hamburger__bar bar--2"></div>
              </div>
              <a className="nav__item nav__cta" href={ prefixLink('/requests/') }>
                requests
              </a>
              <div className="nav__item nav__media">
                <a href="https://www.facebook.com/InnovativeDesignUCB/" target="_blank">
                  <FontAwesome
                    className="media__icon fb"
                    name="facebook"
                  />
                </a>
                <a href="https://twitter.com/innodatcal" target="_blank">
                  <FontAwesome
                    className="media__icon twitter"
                    name="twitter"
                  />
                </a>
                <a href="https://www.instagram.com/innodatcal/" target="_blank">
                  <FontAwesome
                    className="media__icon ig"
                    name="instagram"
                  />
                </a>
              </div>
              <a className="nav__item nav__link" href={ prefixLink('/team/') }>
                team
              </a>
              <a className="nav__item nav__link" href={ prefixLink('/events/') }>
                events
              </a>
              <a className="nav__item nav__link" href={ prefixLink('/decal/') }>
                decal students
              </a>
            </div>
          </div>
        </Headroom>
        <div className="content">
          { this.props.children }
        </div>
      </div>
    )
  }
}

