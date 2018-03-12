export default function gallery(state = [], action) {
  let newState = {};
  switch (action.type) {
    case 'GALLERY_LOADED':
      newState = action.payload.data;
      return newState;
      break;
    case 'GALLERYIMG_ADDED':
      newState = [...state];
      newState.unshift(action.payload.data);
      return newState;
      break;
    case 'IMG_MAIN_SETED':
      newState = [...state];
      newState.map((el, i) => {
        if(el.id == action.payload.id) el.is_main = 'Y';
        else el.is_main = 'N'
      });
      return newState
    case 'IMG_DELETED':
      newState = [...state];
      newState.splice(state.findIndex( (el, i) => {return el.id == action.payload.id} ), 1);
      return newState
      break;
    default:
      return state
  }
}
