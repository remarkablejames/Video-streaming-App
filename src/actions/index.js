import streamsAPI from "../apis/streams";

export const signIn = (userId) => {
  return {
    type: "SIGN_IN",
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: "SIGN_OUT",
  };
};

export const createStream = (formValues) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await streamsAPI.post("/streams", { ...formValues, userId });
  dispatch({ type: "CREATE_STREAM", payload: response.data });
};

export const fetchStreams = () => async (dispatch) => {
  const response = await streamsAPI.get("/streams");
  dispatch({ type: "FETCH_STREAMS", payload: response.data });
};

export const fetchStream = (id) => async (dispatch) => {
  const response = await streamsAPI.get(`streams/ ${id}`);
  dispatch({ type: "FETCH_STREAM", payload: response.data });
};

export const editStream = (id, formValues) => async (dispatch) => {
  const response = await streamsAPI.put(`/streams/${id}`, formValues);
  dispatch({ type: "EDIT_STREAM", payload: response.data });
};

export const deleteStream = (id) => async (dispatch) => {
  await streamsAPI.get(`/streams/${id}`);
  dispatch({ type: "DELETE_STREAMS", payload: id });
};
