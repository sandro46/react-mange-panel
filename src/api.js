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
const getArticles = function (id = null) {
  return new Promise(function(resolve, reject) {
    axios.get('http://malina.ru/api/articles'+(id ? '/'+id : ''))
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        reject('error');
      });
  })
}
const upArt = function (data) {
  return new Promise(function(resolve, reject) {
    axios.put('http://malina.ru/api/articles', data)
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        reject('error');
      });
  })
}
const addArt = function (data) {
  return new Promise(function(resolve, reject) {
    axios.post('http://malina.ru/api/articles', data)
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        reject('error');
      });
  })
}
const delArt = function (data) {
  return new Promise(function(resolve, reject) {
    axios.delete('http://malina.ru/api/articles/'+data)
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        reject('HTTP error');
      });
  })
}
const loadGal = function (data) {
  return new Promise(function(resolve, reject) {
    axios.get('http://malina.ru/api/gallery/'+data)
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        reject('HTTP error');
      });
  })
}
const addGalImg = function (data) {
  let fd = new FormData();
  fd.append('id_art', data.id_art);
  fd.append('file', data.files['0']);
  // debugger;
  return new Promise(function(resolve, reject) {
    axios.post('http://malina.ru/api/gallery/'+data.art_id, fd)
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        reject('HTTP error');
      });
  })
}
const setImgM = function (id, art_id) {
  return new Promise(function(resolve, reject) {
    axios.put('http://malina.ru/api/gallery/'+art_id+'/'+id)
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        reject('HTTP error');
      });
  })
}
const delImgPromise = function (id) {
  return new Promise(function(resolve, reject) {
    axios.delete('http://malina.ru/api/gallery/'+id)
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        reject('HTTP error');
      });
  })
}
const authUserAp = function (login, pass) {
  return new Promise(function(resolve, reject) {
    axios.get('http://malina.ru/api/user/'+login+'/'+pass)
      .then(function (response) {
        // debugger;
        if( !response.data.res ) reject(response.data.err);
        else resolve(response);
      })
      .catch(function (error) {
        reject('HTTP error');
      });
  })
}

export {getCars, getArticles, upArt, addArt, delArt,
        loadGal, addGalImg, setImgM, delImgPromise, authUserAp};
