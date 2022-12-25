import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const githubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  //   Get search users
  const searchUsers = async (text) => {
    setLoading();
    const params = new URLSearchParams({
      q: text,
    });
    const res = await fetch(`${GITHUB_URL}/search/users?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    const { items } = await res.json();
    dispatch({
      type: "GET_USERS",
      payload: items,
    });
  };

  //   Clear users
  const clearUsers = () => dispatch({ type: "CLEAR_USERS" });

  //   Set loading
  const setLoading = () => dispatch({ type: "SET_LOADING" });

  return (
    <githubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        searchUsers,
        clearUsers,
      }}
    >
      {children}
    </githubContext.Provider>
  );
};

export default githubContext;
