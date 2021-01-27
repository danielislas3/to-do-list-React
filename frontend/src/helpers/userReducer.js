
export const userReducer = (state, action) => {

  switch (action.type) {
    case 'login':
      return { ...state, ...action.payload };

    case 'logout':

      return null

    default:
      return state;
  }
};
