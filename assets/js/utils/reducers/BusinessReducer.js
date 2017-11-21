export default function reducer(state={
    business_response: []
  }, action) {

    switch (action.type) {

      case "GET_BUSINESSES": {
        return {...state, fetching: true}
      }

      case "GET_BUSINESSES_FULFILLED": {
        return {...state, fetching: false, business_response: action.payload.data.businesses}
      }

      case "GET_BUSINESSES_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
    }

    return state
}