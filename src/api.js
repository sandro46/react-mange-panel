import axios from 'axios'

const getCars = function () {
  return new Promise(function(resolve, reject) {
    axios.get('http://malina.ru/cars')
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        reject('error');
      });
  })
}
const getArticles = function () {
  return new Promise(function(resolve, reject) {
    axios.get('http://malina.ru/api/articles')
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        reject('error');
      });
  })
}

export {getCars, getArticles};
