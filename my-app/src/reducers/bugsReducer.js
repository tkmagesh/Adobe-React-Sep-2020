const initialState = [];

function bugsReducer(currentState = initialState, action){
    if (action.type === 'LOAD_BUGS'){
      return action.payload;
    }

    return currentState;
}

export default bugsReducer;