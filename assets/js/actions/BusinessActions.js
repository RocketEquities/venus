import axios from "axios";

export function businesses() {
  return function(dispatch) {
    dispatch({type: "GET_BUSINESSES"});

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

    axios.get("/businesses/" + id + "/projections")
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

    axios.get("/portfolio")
      .then((response) => {
        dispatch({type: "GET_PORTFOLIO_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "GET_PORTFOLIO_REJECTED", payload: err})
      })
  }
}