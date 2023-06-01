import React, { useEffect, useState } from 'react';
import WeeklyBest from '../../components/Main/WeeklyBest';
import New from '../../components/Main/New';
import './Main.scss';

function Main() {
  return (
    <div>
      <WeeklyBest />
      <New />
    </div>
  );
}
export default Main;
