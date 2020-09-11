import React, { Fragment, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './index.css';
import bugActionCreators from './actions';

const BugTracker = () => {
    const bugs = useSelector(storeState => storeState.bugsState );
    const dispatch = useDispatch();
    const { load, addNew, toggle, remove, removeClosed } = bugActionCreators;
    const [ newBugName, setNewBugName ] = useState('');
    useEffect(() => {
        dispatch(load());
    }, [dispatch, load]);

    const bugItems = bugs.map(bug => {
        return (
        <li key={bug.id}>
            <span 
                className={ 'bugname ' + (bug.isClosed ? 'closed' : '')}
                onClick={() => dispatch(toggle(bug))}
                >
                {bug.name}
            </span>
            <div className="datetime">
                {bug.createdAt.toString()}
            </div>
            <input type="button" value="Remove" onClick={() => dispatch(remove(bug))}/>
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
                <input type="text" onChange={ evt => setNewBugName(evt.target.value) } />
                <input type="button" value="Add New" onClick = { () => dispatch(addNew(newBugName)) }/>
            </section>
            <section className="list">
                <ol>
                    {bugItems}
                </ol>
                <input type="button" value="Remove Closed" onClick={() => dispatch(removeClosed())} />
            </section>
        </Fragment>
    )
}

export default BugTracker;