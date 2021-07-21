import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectDateStart, start } from '../../redux/recorder';

import './Recorder.css';

const Recorder = () => {
  const dispatch = useDispatch();
  const dateStart = useSelector(selectDateStart);
  const started = dateStart !== '';

  console.log({ dateStart });

  const handleClick = () => {
    dispatch(start());
  };

  return (
    <div className="recorder">
      <button onClick={handleClick} className="recorder-record">
        <span></span>
      </button>
      <div className="recorder-counter">00:00:00</div>
    </div>
  );
};

export default Recorder;
