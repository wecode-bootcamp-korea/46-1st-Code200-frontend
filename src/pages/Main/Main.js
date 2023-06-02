import React from 'react';
import New from '../../components/Main/New';
import Slide from '../../components/Main/Slide';
import WeeklyBest from '../../components/Main/WeeklyBest';
import './Main.scss';

function Main() {
  return (
    <div>
      <Slide />
      <WeeklyBest />
      <New />
    </div>
  );
}

export default Main;
