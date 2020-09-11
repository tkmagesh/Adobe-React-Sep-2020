const initialState = [];

function bugsReducer(currentState = initialState, action){
    if (action.type === 'LOAD_BUGS'){
      return action.payload;
    }
    if (action.type === 'ADD_BUG'){
      const newState = [...currentState, action.payload];
      return newState;
    }

    return currentState;
}

export default bugsReducer;