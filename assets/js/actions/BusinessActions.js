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

export function send_inquiry(id, amt, message) {
  return function(dispatch) {
    dispatch({type: "SEND_INQUIRY"});

    var data = {"businessId" : id, "amount" : amt, "message" : message}

    axios.post("/inquiries", data)
      .then((response) => {
        dispatch({type: "SEND_INQUIRY_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "SEND_INQUIRY_REJECTED", payload: err})
      })
  }
}

export function update_profile(email, firstName, lastName) {
  return function(dispatch) {
    dispatch({type: "UPDATE_PROFILE"});

    var data = {"email" : email, "firstName" : firstName, "lastName" : lastName}

    axios.put("/profile", data)
      .then((response) => {
        dispatch({type: "UPDATE_PROFILE_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "UPDATE_PROFILE_REJECTED", payload: err})
      })
  }
}

export function update_pw(currentpw, newpw) {
  return function(dispatch) {
    dispatch({type: "UPDATE_PW"});

    var data = {"oldPassword" : currentpw, "newPassword" : newpw}

    axios.patch("/profile/password", data)
      .then((response) => {
        dispatch({type: "UPDATE_PW_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "UPDATE_PW_REJECTED", payload: err})
      })
  }
}