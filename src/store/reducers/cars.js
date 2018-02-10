export default function cars(state = [], action) {
  switch (action.type) {
    case 'LOAD_CARS':
      return action.payload
      break;
    case 'CARS_LOADED':
      return action.payload
      break;
    default:
      return state
  }
}
