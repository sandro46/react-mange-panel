import {getCars, getArticles, upArt, addArt, delArt, loadGal, addGalImg} from './api'

const loadCars = function (){
  return {
    'type': 'PROMISE',
    'actions': ['CARS_LOADING', 'CARS_LOADED', 'CARS_LOAD_FAILURE'],
    'promise': getCars()
  }
}
const loadArticles = function (id = null){
  return {
    'type': 'PROMISE',
    'actions': ['ARTICLES_LOADING', 'ARTICLES_LOADED', 'ARTICLES_LOAD_FAILURE'],
    'promise': getArticles(id)
  }
}
const upArticle = function (data){
  // debugger;
  console.log('upArticle');
  return {
    'type': 'PROMISE',
    'actions': ['ARTICLE_UPDATING', 'ARTICLE_UPDATED', 'ARTICLE_UPDATE_FAILURE'],
    'promise': upArt(data)
  }
}
const addArticle = function (data){
  // debugger;
  console.log('addArticle');
  return {
    'type': 'PROMISE',
    'actions': ['ARTICLE_ADDING', 'ARTICLE_ADDED', 'ARTICLE_ADD_FAILURE'],
    'promise': addArt(data)
  }
}
const delArticle = function (data){
  // debugger;
  console.log('delArticle');
  return {
    'type': 'PROMISE',
    'actions': ['ARTICLE_DELETING', 'ARTICLE_DELETED', 'ARTICLE_DEL_FAILURE'],
    'promise': delArt(data)
  }
}
const loadGallery = function (data){
  // debugger;
  console.log('delArticle');
  return {
    'type': 'PROMISE',
    'actions': ['GALLERY_LOADING', 'GALLERY_LOADED', 'GALLERY_LOAD_FAILURE'],
    'promise': loadGal(data)
  }
}
const addImg = function (data){
  // debugger;
  console.log('delArticle');
  return {
    'type': 'PROMISE',
    'actions': ['GALLERYIMG_ADDING', 'GALLERYIMG_ADDED', 'GALLERYIMG_ADD_FAILURE'],
    'promise': addGalImg(data)
  }
}
export { loadCars, loadArticles, upArticle, addArticle, delArticle, loadGallery, addImg }
