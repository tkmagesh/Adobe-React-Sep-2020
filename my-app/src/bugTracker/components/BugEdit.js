import React, { useState } from "react";
import { useDispatch } from 'react-redux';


//using the 'dispatch' in presentation component to be avoided - TO BE FIXED
const BugEdit = ({ addNew }) => {
    const [newBugName, setNewBugName] = useState("");
    const dispatch = useDispatch();
    return (
      <section className="edit">
        <label htmlFor="">Bug Name :</label>
        <input type="text" onChange={evt => setNewBugName(evt.target.value)} />
        <input
          type="button"
          value="Add New"
          onClick={() => dispatch(addNew(newBugName))}
        />
      </section>
    );
}

export default BugEdit;