export default function gallery(state = [], action) {
  switch (action.type) {
    case 'GET_GALLERY':
      return action.payload
      break;
    case 'GALLERYIMG_ADDED':
      console.log(action);
      return action.payload
      break;
    default:
      return state
  }
}
