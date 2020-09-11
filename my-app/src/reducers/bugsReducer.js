const initialState = [
  { id: 1, name: "Server communication failure", isClosed: false, createdAt: new Date() },
  { id: 2, name: "User actions not recognized", isClosed: true, createdAt: new Date() },
  { id : 3, name : 'Data integrity checks failed', isClosed : false, createdAt : new Date() }
  
];
function bugsReducer(currentState = initialState, action){
    return currentState;
}

export default bugsReducer;