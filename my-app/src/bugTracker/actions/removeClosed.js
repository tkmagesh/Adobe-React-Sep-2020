import bugApi from '../services/bugApi';

const removeClosed = () => (dispatch, getState) => {
    const bugs = getState().bugsState;
    const closedBugs = bugs.filter(bug => bug.isClosed);
    closedBugs
        .forEach(async closedBug => {
            await bugApi.remove(closedBug);
            const action = { type : 'REMOVE_BUG', payload: closedBug};
            dispatch(action);
        })
}

export default removeClosed;