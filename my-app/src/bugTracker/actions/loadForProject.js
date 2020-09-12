import bugApi from "../services/bugApi";

const loadForProject = (projectId) => async dispatch => {
  const bugs = await bugApi.getForProject(projectId);
  const action = { type: "LOAD_BUGS", payload: bugs };
  dispatch(action);
};

export default loadForProject;
