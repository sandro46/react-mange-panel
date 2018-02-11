import {getCars, getArticles} from './api'

const loadCars = function (){
  return {
    'type': 'PROMISE',
    'actions': ['CARS_LOADING', 'CARS_LOADED', 'CARS_LOAD_FAILURE'],
    'promise': getCars()
  }
}
const loadArticles = function (){
  return {
    'type': 'PROMISE',
    'actions': ['ARTICLES_LOADING', 'ARTICLES_LOADED', 'ARTICLES_LOAD_FAILURE'],
    'promise': getArticles()
  }
}
export { loadCars, loadArticles }
