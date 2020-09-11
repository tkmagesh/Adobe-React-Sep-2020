import React from "react";
import {  useDispatch }  from 'react-redux';
import BugItem from './BugItem';

const BugList = ({bugs, toggle, remove, removeClosed}) => {
    const dispatch = useDispatch();
    const bugItems = bugs.map(bug => {
      return (
        <BugItem key={bug.id} {...{bug, toggle, remove}} />
      );
    });
    return (
      <section className="list">
        <ol>{bugItems}</ol>
        <input
          type="button"
          value="Remove Closed"
          onClick={() => dispatch(removeClosed())}
        />
      </section>
    );
}

export default BugList;