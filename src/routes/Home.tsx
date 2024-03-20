import React, { useEffect, useState } from 'react';
import { FetchQuestions } from '../api';
import { CardView } from '../components/CardView';
import { Choser } from '../components/Choser';

export const Home = () => {
  return (

    <div className='main-container'>
      <div className='main-title'>
        진로 심리 검사
      </div>
      <div>
        <Choser></Choser>
        {/* <CardView qtype={"8"} /> */}

      </div>
    </div>
  );
};
