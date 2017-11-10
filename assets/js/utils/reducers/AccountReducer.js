export default function reducer(state={
    login_response: {},
    login_authorized: false,
    logout_response: {}
  }, action) {

    switch (action.type) {

      case "USER_LOGIN": {
        return {...state, fetching: true}
      }

      case "USER_LOGIN_FULFILLED": {
        if('data' in action.payload){
          return {
            ...state,
            login_response: action.payload.data.user,
            login_authorized: true
          }
        } else {
          return {
            ...state,
            login_response: action.payload.error
          }
        }
      }

      case "USER_LOGIN_REJECTED": {
        return {...state, fetching: false, error: action.payload.error}
      }


      case "USER_LOGOUT": {
        return {...state, fetching: true}
      }

      case "USER_LOGOUT_FULFILLED": {
        return {
            ...state,
            logout_response: action.payload.data
          }
      }

      case "USER_LOGOUT_REJECTED": {
        return {...state, fetching: false, error: action.payload.error}
      }
    }

    return state
}