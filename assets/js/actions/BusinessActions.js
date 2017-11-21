import axios from "axios";

export function businesses(email, password) {
  return function(dispatch) {
    dispatch({type: "GET_BUSINESSES"});

    // actual url is "/businesses"
    axios.get("/businesses")
      .then((response) => {
        dispatch({type: "GET_BUSINESSES_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "GET_BUSINESSES_REJECTED", payload: err})
      })
  }
}