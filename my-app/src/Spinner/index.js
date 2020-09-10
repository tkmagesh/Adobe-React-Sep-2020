import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import spinnerActionCreators from './actions';

const Spinner = () => {
  const [delta, setDelta] = useState(0);
  const value = useSelector( storeState => storeState );
  const dispatch = useDispatch();
  const { up, down } = spinnerActionCreators;

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