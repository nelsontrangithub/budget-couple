import React, { useEffect } from 'react';
import { css, cx } from 'emotion';
import styles from '../styles/Home.module.scss';
import { Header } from './Header';

interface Props {
    
}


export const Home: React.FC<Props> = ({}) => {
  return (
    <div className={"py-4 lg:py-8 overflow-hidden"}>
        <Header />
      <main className={"flex flex-wrap -mx-8"}>

      </main>
    </div>
  );
};

export default Home;