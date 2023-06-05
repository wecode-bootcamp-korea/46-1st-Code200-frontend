import React from 'react';

import Slide from '../../components/Main/Slide';

import New from '../../components/Main/New';
import WeeklyBest from '../../components/Main/WeeklyBest';

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
