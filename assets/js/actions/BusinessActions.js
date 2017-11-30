import axios from "axios";

export function businesses() {
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


export function business_detail(id) {
  return function(dispatch) {
    dispatch({type: "GET_BUSINESSES_DETAIL"});

    // actual url is "/businesses/" + id + "/investments"
    axios.get("http://www.mocky.io/v2/5a17018c310000fe1f8d34f8")
      .then((response) => {
        dispatch({type: "GET_BUSINESSES_DETAIL_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "GET_BUSINESSES_DETAIL_REJECTED", payload: err})
      })
  }
}


export function portfolio() {
  return function(dispatch) {
    dispatch({type: "GET_PORTFOLIO"});

    // actual url is "/portfolio"
    axios.get("http://www.mocky.io/v2/5a1d89da2e0000fc3748b8e1")
      .then((response) => {
        dispatch({type: "GET_PORTFOLIO_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "GET_PORTFOLIO_REJECTED", payload: err})
      })
  }
}