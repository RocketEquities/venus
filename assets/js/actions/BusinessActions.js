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
    axios.get("/businesses/" + id + "/investments")
      .then((response) => {
        dispatch({type: "GET_BUSINESSES_DETAIL_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "GET_BUSINESSES_DETAIL_REJECTED", payload: err})
      })
  }
}