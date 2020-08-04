const initialState = {
  locale: 'zh-TW'
}

const languageReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'SET_LOCALE': {
      return {
        ...state,
        locale: action.data
      }
    }

    default: {
      return state;
    }
  }
};

export default languageReducer