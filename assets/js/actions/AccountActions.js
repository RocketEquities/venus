import axios from "axios";

export function login(email, password) {
  return function(dispatch) {
    dispatch({type: "USER_LOGIN"});

    const data = { "email" : email, "password" : password };

    axios.post("/login", data)
      .then((response) => {
        dispatch({type: "USER_LOGIN_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "USER_LOGIN_REJECTED", payload: err})
      })
  }
}


export function logout() {
  return function(dispatch) {
    dispatch({type: "USER_LOGOUT"});

    axios.post("/logout")
      .then((response) => {
        dispatch({type: "USER_LOGOUT_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "USER_LOGOUT_REJECTED", payload: err})
      })
  }
}