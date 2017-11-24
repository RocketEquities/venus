export default function reducer(state={
    business_response: [],
    business_detail_response: {},
    business_detail_response_investment: [],
    chart_ready: false,
    error: {}
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

      case "GET_BUSINESSES_DETAIL": {
        return {...state, fetching: true}
      }

      case "GET_BUSINESSES_DETAIL_FULFILLED": {
        return {...state, fetching: false, business_detail_response: action.payload.data.business, business_detail_response_investment: action.payload.data.investments, chart_ready: true}
      }

      case "GET_BUSINESSES_DETAIL_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
    }

    return state
}