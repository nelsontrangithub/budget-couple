import React, { useEffect } from 'react';
import { css, cx } from 'emotion';
import styles from '../styles/Home.module.scss';
import { Header } from './Header';
import Column from './Column';

export const Home: React.FC = () => {
  return (
    <div className="py-4 lg:py-8 overflow-hidden">
        <Header />
      <main className="flex flex-wrap -mx-8">
        <Column>
        <h2 className="text-white text-3xl font-bold mt-8">
              Need help splitting your expenses?
            </h2>
            <p className="text-white text-xl font-light max-w-md">
              Easily calculate as a couple how to fairly contribute to your expenses.
            </p>
        </Column>
        <Column>
        </Column>
      </main>
    </div>
  );
};

export default Home;