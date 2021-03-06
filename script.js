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
    //console.log(data);

    //Loop over each object in data array
    for (let i in data) {
      let first = data[5];
      let second = data[3];
      let third = data[4];
      //log the repo name
      //console.log('Repo:', data[i].name);

      //log the repo description
      //console.log('Description:', data[i].description);

      //log the repo url
      //console.log('URL:', data[i].html_url);

      //add a separator between each repo
      //console.log('==========================');
      document.getElementById(
        'dem'
      ).innerHTML = `<strong>Repo:</strong> ${first.name}<br/><br/>
        <strong>Description:</strong> ${first.description}<br/><br/>
        <strong>URL:</strong> ${first.html_url}
        `;

      document.getElementById('demOne').innerHTML = `
      <strong>Repo:</strong> ${second.name}<br/><br/>
      <strong>Description:</strong> ${second.description}}<br/><br/>
      <strong>URL:</strong> ${second.html_url}
      `;

      document.getElementById('demTwo').innerHTML = `
      <strong>Repo:</strong> ${third.name}}<br/><br/>
      <strong>Description:</strong> ${third.description}}<br/><br/>
      <strong>URL:</strong> ${third.html_url}
      `;
    }
  };

  //Send the request to the server
  xhr.send();
}
requestUserRepos('alexwhitmore');
