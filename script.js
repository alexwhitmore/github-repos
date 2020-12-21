'use strict';
/*
Steps:

Create API Function Wrapper
Instantiate new XMLHttpRequest object
Define Our Github API Endpoint
Establish connectiong to Githubs server
Send request & Parse returned data into JSON
I can then view the entire API response
*/

// const nameContainer = document.querySelector('collapse');
// const searchButton = document.querySelector('.button');

// searchButton.addEventListener('click', () => {
//   let username = requestUserRepos(username);
// });

function requestUserRepos(username) {
  //create new XMLHttpsRequest
  const xhr = new XMLHttpRequest();

  //Github endpoint, dynamically passing in username
  const url = `https://api.github.com/users/${username}/repos`;

  //Open new connection, using a get requestvia URL endpoint
  //Providing 3 arguments (GET/POST, the URL, Async True/False)
  xhr.open('GET', url, true);

  //When request is recieved
  //Process is here
  xhr.onload = function () {
    //Parse API data into JSON
    const data = JSON.parse(this.response);

    //Log the response
    // console.log(data);

    //Loop over each object in data array
    for (let i in data) {
      //log the repo name
      //console.log('Repo:', data[i].name);

      //log the repo description
      //console.log('Description:', data[i].description);

      //log the repo url
      //console.log('URL:', data[i].html_url);

      //add a separator between each repo
      //console.log('==========================');
      document.getElementById('dem').innerHTML = `
        Repo: ${data[i].name}
        Description: ${data[i].description}
        URL: ${data[i].html_url}
        `;
    }
  };

  //Send the request to the server
  xhr.send();
}
requestUserRepos('brignano');
