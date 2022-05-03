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

export const createStream = (formValues) => async (dispatch) => {
  const response = await streamsAPI.post("/streams", formValues);
};
