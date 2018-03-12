export default function user(state = {}, action) {
  let newState = {};
  // debugger;
  switch (action.type) {
    case 'USER_AUTHED':
      newState.name = action.payload.name;
      newState.token = action.payload.token;
      return newState;
      break;
    case 'USER_AUTH_FAILURE':
      alert(action.error);
      return state;
      break;
    default:
      return state
  }
}
