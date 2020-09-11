import bugApi from '../services/bugApi';

const toggle = (bugToToggle) => async dispatch => {
    bugToToggle.isClosed = !bugToToggle.isClosed;
    const toggledBug = await bugApi.save(bugToToggle);
    const action = { type : 'REPLACE_BUG', payload : toggledBug };
    dispatch(action);
}

export default toggle;