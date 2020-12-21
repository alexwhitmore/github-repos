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

function requestUserRepos(username) {
  //create new XMLHttpsRequest
  const xhr = new XMLHttpRequest();

  //Github endpoint, dynamically passing in username
  const url = `https://api.github.com/users/${username}/repos`;

  //Open new connection, using a get requestvia URL endpoint
  //Providing 3 arguments (GET/POST, the URL, Async True/False)
  xhr.open('GET', url, true);


  xhr.onload = function () {
    //Parse API data into JSON
    const data = JSON.parse(this.response);

    //Log the response
    // console.log(data);

    //Loop over each object in data array
    for (let i in data) {

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
