import axios from 'axios';

function getLocalBugs(){
    return [
      {
        id: 1,
        name: "Server communication failure",
        isClosed: false,
        createdAt: new Date()
      },
      {
        id: 2,
        name: "User actions not recognized",
        isClosed: true,
        createdAt: new Date()
      },
      {
        id: 3,
        name: "Data integrity checks failed",
        isClosed: false,
        createdAt: new Date()
      }
    ];
}

function getRemoteBugs(){
    return axios
        .get('http://localhost:3030/bugs')
        .then(function(response){
            return response.data;
        })
}

function load(dispatch){
    /* 
    const bugs = getLocalBugs();
    const action = { type : 'LOAD_BUGS', payload : bugs };
    return action; 
    */

    return getRemoteBugs()
        .then(function(bugs){
            const action = { type: "LOAD_BUGS", payload: bugs };
            dispatch(action);
        });
    
}

export default load;