const initialState = [];

function bugsReducer(currentState = initialState, action){
    if (action.type === 'LOAD_BUGS'){
      return action.payload;
    }
    if (action.type === 'ADD_BUG'){
      const newState = [...currentState, action.payload];
      return newState;
    }
    if (action.type === 'REPLACE_BUG'){
      const bugToReplace = action.payload;
      const newState = currentState.map(bug => bug.id === bugToReplace.id ? bugToReplace : bug);
      return newState;
    }
    if (action.type === 'REMOVE_BUG'){
      const newState = currentState.filter(bug => bug.id !== action.payload.id);
      return newState;
    }

    return currentState;
}

export default bugsReducer;