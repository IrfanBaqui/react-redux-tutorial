var uuid = require('node-uuid')

export function upVote (postId) {
  return {
    type: 'UPVOTE',
    postId
  }
}

export function downVote (postId) {
  return {
    type: 'DOWNVOTE',
    postId
  }
}

function createPost () {
  return {
    type: 'CREATE_POST'
  }
}

function postCreated(postDetails, postId) {
  return {
    type: 'POST_CREATED',
    postDetails,
    postId
  }
}

export function newPost(postDetails) {
  return function(dispatch) {
    dispatch(createPost());

    return makeRequest('POST', 'http://localhost:8081/post', JSON.stringify(postDetails))
      .then(function (res) {
        var postId = res;
        return dispatch(postCreated(postDetails, postId));
      })
      .catch(function (err) {
        console.error('Augh, there was an error!', err.statusText);
        return Promise.reject(err);
      });
  }
}

function makeRequest (method, url, body) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onload = function () {
      if (this.status >= 200 && this.status < 300) {
        return resolve(xhr.response);
      } else {
        reject({
          status: this.status,
          statusText: xhr.statusText
        });
      }
    };
    xhr.onerror = function () {
      reject({
        status: this.status,
        statusText: xhr.statusText
      });
    };
    xhr.send(body);
  });
}