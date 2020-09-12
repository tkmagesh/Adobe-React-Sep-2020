import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import spinnerActionCreators from './actions';

const Spinner = () => {
  const [delta, setDelta] = useState(0);
  const value = useSelector( storeState => storeState.spinnerState );
  const dispatch = useDispatch();
  console.log(dispatch);
  const { up, down } = spinnerActionCreators;

  return (
    <div>
      <h3>Spinnner</h3>
      <hr />
      <label>Delta : </label>
      <input
        type="number"
        id="txtDelta"
        onChange={evt => setDelta(parseInt(evt.target.value) || 0)}
      />
      <br />
      <button id="btnDown" onClick={() => dispatch(down(delta))}>Down</button>
      <span id="spanResult"> [ {value} ] </span>
      <button id="btnUp" onClick={() => dispatch(up(delta))}>Up</button>
    </div>
  );
}

export default Spinner;