import React, { useEffect } from 'react';
import { css, cx } from 'emotion';
import styles from '../styles/Home.module.scss';

interface Props {
    
}


export const Home = (props: Props) => {

  const test = () => {};

  return (
    <div
      className={cx(
        styles.container && `py-4 lg:py-8 overflow-hidden`,
      )}
    ></div>
  );
}

export default Home;