import bugApi from '../services/bugApi';

const remove = (bug) => async dispatch => {
    await bugApi.remove(bug);
    const action = { type :'REMOVE_BUG', payload : bug};
    dispatch(action);
}

export default remove;