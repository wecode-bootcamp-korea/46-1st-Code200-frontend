import React from 'react';

import Slide from '../../components/Main/Slide/Slide';

import New from '../../components/Main/New/New';
import WeeklyBest from '../../components/Main/WeeklyBest/WeeklyBest';

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
