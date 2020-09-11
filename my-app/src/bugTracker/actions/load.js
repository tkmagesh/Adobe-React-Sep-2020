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
//synchronous action
/* function load() {
    const bugs = getLocalBugs();
    const action = { type : 'LOAD_BUGS', payload : bugs };
    return action; 
}
 */

//asynchronous action (handled by asyncMiddleware/redux-thunk)
 /* function load(){
     return function(dispatch){
        return getRemoteBugs()
            .then(function(bugs){
                const action = { type: "LOAD_BUGS", payload: bugs };
                dispatch(action);
            });
    }   
} */

const load = () => async (dispatch) => {
  const bugs = await getRemoteBugs();
  const action = { type: "LOAD_BUGS", payload: bugs};
  dispatch(action);
}

//asynchronous action (handled by promiseMiddleware)
/* function load() {
    return getRemoteBugs()
      .then(function(bugs) {
        const action = { type: "LOAD_BUGS", payload: bugs };
        return action;
      });
} */

//Simplified version of the above
/* 
const load = async () => {
  const bugs = await getRemoteBugs();
  const action = { type: "LOAD_BUGS", payload: bugs };
  return action;
}

*/

export default load;