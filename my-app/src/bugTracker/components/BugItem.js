import React from "react";
import { useDispatch } from "react-redux";


const BugItem = ({bug, toggle, remove}) => {
    const dispatch = useDispatch();
    return (
      <li>
        <span
          className={"bugname " + (bug.isClosed ? "closed" : "")}
          onClick={() => dispatch(toggle(bug))}
        >
          {bug.name}
        </span>
        <div className="datetime">{bug.createdAt.toString()}</div>
        <input
          type="button"
          value="Remove"
          onClick={() => dispatch(remove(bug))}
        />
        <div>Project Id - [ {bug.projectId} ]</div>
      </li>
    );
}

export default BugItem;