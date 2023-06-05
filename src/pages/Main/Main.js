import { format } from 'prettier';
import React from 'react';
import Slide from '../../components/Main/Slide';
import WeeklyBest from '../../components/Main/WeeklyBest';
import New from '../../components/Main/New';

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
