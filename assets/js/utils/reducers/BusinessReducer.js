export default function reducer(state={
    business_response: [],
    business_detail_response: {},
    business_detail_response_investment: [],
    chart_ready: false,
    portfolio_chart_ready: false,
    portfolio_widget: {},
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
        return {...state, fetching: false, business_detail_response: action.payload.data, chart_ready: true}
      }

      case "GET_BUSINESSES_DETAIL_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }

      case "GET_PORTFOLIO": {
        return {...state, fetching: true}
      }

      case "GET_PORTFOLIO_FULFILLED": {
        return {...state, fetching: false, portfolio_widget: action.payload.data, portfolio_chart_ready: true}
      }

      case "GET_PORTFOLIO_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
    }

    return state
}