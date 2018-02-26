export default function articles(state = [], action) {
  switch (action.type) {
    case 'GET_ARTICLES':
      return action.payload
      break;
    case 'ARTICLES_LOADED':
      return action.payload
      break;
    case 'ARTICLE_UPDATED':
      state.map((el, i) => {
        if(el.id == action.payload.id){
          state[i] = action.payload
        }
      });
      return state
      break;
    case 'ARTICLE_ADDED':
      state.unshift(action.payload)
      return state
      break;
    case 'ARTICLE_DELETED':
      let newState = [...state];
      newState.splice(state.findIndex( (el, i) => {return el.id == action.payload.payload} ), 1);
      return newState
      break;
    default:
      return state
  }
}
