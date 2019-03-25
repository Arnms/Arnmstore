import React from 'react';
import moment from 'moment';
import styles from './Meta.module.scss';

const Meta = ({ date }) => (
  <div className={styles['meta']}>
    <p className={styles['meta__date']}>{moment(date).format('YYYY년 MM월 DD일')}</p>
  </div>
);

export default Meta;
