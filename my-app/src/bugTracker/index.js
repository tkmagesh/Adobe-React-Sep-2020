import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import './index.css';

const BugTracker = () => {
    const bugs = useSelector(storeState => storeState.bugsState );
    const bugItems = bugs.map(bug => {
        return (
        <li key={bug.id}>
            <span className={ 'bugname ' + (bug.isClosed ? 'closed' : '')}>
                {bug.name}
            </span>
            <div className="datetime">
                {bug.createdAt.toString()}
            </div>
            <input type="button" value="Remove" />
        </li>
        )
    });
    return(
        <Fragment>
            <h3>Bug Tracker</h3>
            <hr/>
            <section className="stats">
                <span className="closed">1</span>
                <span> / </span>
                <span>{bugs.length}</span>
            </section>
            <section className="sort">
                <label htmlFor="">Order By :</label>
                <select name="" id="">
                    <option value=""></option>
                    <option value=""></option>
                </select>
                <label htmlFor="">Descending ? :</label>
                <input type="checkbox" name="" id="" />
            </section>
            <section className="edit">
                <label htmlFor="">Bug Name :</label>
                <input type="text" name="" id="" />
                <input type="button" value="Add New" />
            </section>
            <section className="list">
                <ol>
                    {bugItems}
                </ol>
                <input type="button" value="Remove Closed" />
            </section>
        </Fragment>
    )
}

export default BugTracker;