export default function articles(state = [], action) {
  switch (action.type) {
    case 'GET_ARTICLES':
      return action.payload
      break;
    case 'ARTICLES_LOADED':
      return action.payload
      break;
    default:
      return state
  }
}
