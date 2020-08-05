const defaultState = {
  loading: false,
  result: [],
  options: [],
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    // Login Promise
    case 'LOGIN_PENDING': {
      return {
        ...defaultState,
        loading: true
      };
    }
    case 'LOGIN_FULFILLED': {
      return {
        ...defaultState,
        loading: false
      };
    }
    // DEFAULT
    default: {
      return {
        ...state,
      };
    }
  }
};

export default reducer;