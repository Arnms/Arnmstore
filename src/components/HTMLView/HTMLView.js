import React from 'react';
// import styles from './View.module.scss';

const HTMLView = ({ view }) => {
  const { html } = view;

  return (
    <div dangerouslySetInnerHTML={{ __html: html }}></div>
  );
};

export default HTMLView;
