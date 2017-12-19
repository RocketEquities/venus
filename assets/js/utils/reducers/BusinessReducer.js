export default function reducer(state={
    business_response: [],
    business_detail_response: {},
    business_detail_response_investment: [],
    chart_ready: false,
    portfolio_chart_ready: false,
    portfolio_widget: {},
    error: {},
    inquiry_success: false,
    inquiry_fulfilled: false,
    changePw: {}
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

      case "UPDATE_PW": {
        return {...state, fetching: true}
      }

      case "UPDATE_PW_FULFILLED": {
        return {...state, fetching: false, changePw: action.payload}
      }

      case "UPDATE_PW_REJECTED": {
        return {...state, fetching: false, changePw: action.payload}
      }

      case "SEND_INQUIRY": {
        return {...state, fetching: true}
      }

      case "SEND_INQUIRY_FULFILLED": {
        if(Object.keys(action.payload.data.inquiry).length === 0) {
          return {...state, fetching: false, inquiry_success: false, inquiry_fulfilled: true}
        } else {
          return {...state, fetching: false, inquiry_success: true, inquiry_fulfilled: true}
        }
      }

      case "SEND_INQUIRY_REJECTED": {
        return {...state, fetching: false, inquiry_success: false, inquiry_fulfilled: true}
      }
    }

    return state
}