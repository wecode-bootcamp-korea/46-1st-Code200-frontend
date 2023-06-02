import React, { useEffect, useState } from 'react';
import WeeklyBest from '../../components/Main/WeeklyBest';
import New from '../../components/Main/New';
import Slide from '../../components/Main/Slide';
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
