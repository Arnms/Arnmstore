import React from 'react';
import styles from './Content.module.scss';
import Meta from '../Meta';

const Content = ({ body, title, date }) => (
  <div className={styles['content']}>
    <h1 className={styles['content__title']}>{title}</h1>
    <div className={styles['content__underline']}></div>
    <Meta date={date} />
    <div className={styles['content__body']} dangerouslySetInnerHTML={{ __html: body }} />
  </div>
);

export default Content;
