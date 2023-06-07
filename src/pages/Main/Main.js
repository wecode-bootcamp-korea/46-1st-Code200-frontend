import { format } from 'prettier';
import React from 'react';
import Slide from '../../components/Main/Slide/Slide';
import WeeklyBest from '../../components/Main/WeeklyBest/WeeklyBest';
import New from '../../components/Main/New/New';
import Scroll from '../../components/Scroll/Scroll';
import './Main.scss';

function Main() {
  return (
    <div>
      <Slide />
      <WeeklyBest />
      <New />
      <Scroll />
    </div>
  );
}

export default Main;
