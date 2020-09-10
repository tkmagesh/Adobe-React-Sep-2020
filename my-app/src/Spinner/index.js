import React, { useState } from 'react';

const Spinner = ({ value, dispatch, up, down }) => {
  const [delta, setDelta] = useState(0);
  return (
    <div>
      <h3>Spinnner</h3>
      <hr />
      <label>Delta : </label>
      <input
        type="number"
        value={delta}
        onChange={evt => setDelta(parseInt(evt.target.value) || 0)}
      />
      <br />
      <input type="button" value="Down" onClick={() => dispatch(down(delta))} />
      <span> [ {value} ] </span>
      <input type="button" value="Up" onClick={() => dispatch(up(delta))} />
    </div>
  );
}

export default Spinner;