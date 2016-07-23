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

// Step 11: Defining actions to make API calls
function toggleLoading () {
  return {
    type: 'TOGGLE_LOADING'
  }
}

// Step 11: Defining actions to make API calls
function postCreated(postDetails, postId) {
  return {
    type: 'POST_CREATED',
    postDetails,
    postId
  }
}

// Step 11: Defining actions to make API calls
export function newPost(postDetails) {
  return function(dispatch) {
    dispatch(toggleLoading());

    return makeRequest('POST', 'http://0.0.0.0:8081/post', JSON.stringify(postDetails))
      .then(function (res) {
        var postId = res;
        dispatch(toggleLoading());
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