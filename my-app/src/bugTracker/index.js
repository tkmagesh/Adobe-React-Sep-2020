import React, { Fragment, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './index.css';
import bugActionCreators from './actions';
import BugStats from './components/BugStats';
import BugSort from './components/BugSort';
import BugEdit from './components/BugEdit';
import BugList from './components/BugList';
import { useParams } from 'react-router-dom';

//Container Component / Smart Component
// Collaborate with the redux store
const BugTracker = () => {
    const bugs = useSelector(storeState => storeState.bugsState );
    const dispatch = useDispatch();
    const { load, addNew, toggle, remove, removeClosed, loadForProject } = bugActionCreators;
    const {id} = useParams();
    console.log(id);
     useEffect(() => {
         console.log('bugTracker is initialized');
         let actionObj = null;
         if (id) {
            actionObj = loadForProject(parseInt(id));
         } else {
             actionObj = load();
         }
        dispatch(actionObj);
    }, [dispatch, load, loadForProject, id]);
 
    return(
        <Fragment>
            <h3>Bug Tracker</h3>
            <hr/>
            <BugStats bugs={bugs} />
            <BugSort />
            <BugEdit addNew={addNew} />
            <BugList {...{bugs, toggle, remove, removeClosed}} />
        </Fragment>
    )
}

export default BugTracker;