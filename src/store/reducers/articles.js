export default function cars(state = [], action) {
  switch (action.type) {
    case 'LOAD_ARTICLES':
      return action.payload
      break;
    case 'ARTICLES_LOADED':
      return action.payload
      break;
    default:
      return state
  }
}
