import React, { useState } from 'react';
import Timer from './Timer';

const TimerContainer = () => {
  const [showTimer, setShowTimer] = useState(false);
  return (
    <div>
      <h1>Timer</h1>
      <label>Show Timer</label>
      <input
        type="checkbox"
        onChange={evt => setShowTimer(evt.target.checked)}
      />
      {showTimer && <Timer />}
    </div>
  );
};

export default TimerContainer;