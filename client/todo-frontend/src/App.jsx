import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTime } from './redux/timeSlice';

export default function App(){
  const dispatch = useDispatch();
  const time = useSelector((state) => state.time.currentTime);
  const status = useSelector((state) => state.time.status);
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchTime());
    }
  }, [status, dispatch]);
  return (
    <div>
      <h1>Current Time</h1>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'succeeded' && <p>{time}</p>}
      {status === 'failed' && <p>Error fetching time</p>}
    </div>
  );
}