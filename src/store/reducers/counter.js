export default function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREASE_COUNTER':
      return state + 1
      break;
    case 'RESET_COUNTER':
      return 0
      break;
    default:
      return state
  }
}
