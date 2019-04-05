import React from 'react';

import NextHead from 'next/head';
import PropTypes from 'prop-types';

const defaultDescription = '';
// const defaultOGURL = ''
// const defaultOGImage = ''

const Head = props => (
  <NextHead>
    <title>{props.title}</title>
    <meta name="description" content={props.description || defaultDescription} />
    <link rel="shortcut icon" href="/static/favicon.ico" />
  </NextHead>
);

Head.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
  //   // url: string,
  //   // ogImage: string
};

export default Head;
