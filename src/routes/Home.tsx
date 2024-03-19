import React, { useEffect, useState } from 'react';
import { FetchQuestions } from '../api';
import { CardView } from '../components/CardView';

export const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    FetchQuestions().then((res) => {
      setData(res.data.RESULT);
    });
  }, []);
  return (
    <>
      {data && (
        <>
          <CardView data={data}></CardView>
        </>
      )}
    </>
  );
};
