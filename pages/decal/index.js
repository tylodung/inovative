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

    const lessons = [
      {
        number: 'Lesson 1',
        title: 'Intro to Illustrator',
        img: '/img/decal/lesson1.png',
        url: '/decal/lesson-1/'
      },
      {
        number: 'Lesson 2',
        title: 'Pen Tool',
        img: '/img/decal/lesson2.png',
        url: '/decal/lesson-2/'
      },
      {
        number: 'Lesson 3',
        title: 'Color',
        img: '/img/decal/lesson3.png',
        url: '/decal/lesson-3/'
      },
      {
        number: 'Lesson 4',
        title: 'Brushes, Symbols, and Effects',
        img: '/img/decal/lesson4.png',
        url: '/decal/lesson-4/'
      },
      {
        number: 'Lesson 5',
        title: 'Typography',
        img: '/img/decal/lesson5.png',
        url: '/decal/lesson-5/'
      },
      {
        number: 'Lesson 6',
        title: 'Intro to Photoshop',
        img: '/img/decal/lesson6.png',
        url: '/decal/lesson-6/'
      },
      {
        number: 'Lesson 7',
        title: 'Selection Tools and Masking',
        img: '/img/decal/lesson7.png',
        url: '/decal/lesson-7/'
      },
      {
        number: 'Lesson 8',
        title: 'Blending, Layer Styles and Filter Effects',
        img: '/img/decal/lesson8.png',
        url: '/decal/lesson-8/'
      },
      {
        number: 'Lesson 9',
        title: 'Combining Programs',
        img: '/img/decal/lesson9.png',
        url: '/decal/lesson-9/'
      },
      {
        number: 'Lesson 10',
        title: 'Identity & Ad Design',
        img: '/img/decal/lesson10.png',
      },
      {
        number: 'Lesson 11',
        title: 'Final Showcase',
        img: '/img/decal/lesson11.png'
      }
    ];

    const lessonElements = _.map(lessons, (lesson, index) => {
      return (
        <div
          key={ `lessonElem-${index}` }
          className="lesson"
        >
          <a
            className="lesson__link"
            href={ lesson.url ? prefixLink(lesson.url) : '' }
          >
            <div
              className="lesson__photo"
              style={{
                backgroundImage: `url(${prefixLink(lesson.img)})`
              }}
            ></div>
            <div className="lesson__overlay"></div>
            <div className="lesson__details">
              <div className="lesson__details--number">
                { lesson.number }
              </div>
              <div className="lesson__details--title">
                { lesson.title }
              </div>
            </div>
          </a>
        </div>
      );
    });

    return (
      <DocumentTitle title="Innovative Design">
        <div>
          <div className="page__wrapper decal">
            <h1 className="section__title">intro to photoshop and illustrator decal</h1>
            <div className="description">
              A 2-unit DeCal for beginner to intermediate level designers, open to all interested Berkeley students.
            </div>
            <div className="lessons__wrapper">
              { lessonElements }
            </div>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}
