// node stuffs

// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// var request = require("request");
// const fetch = require("node-fetch");


// const xhr = new XMLHttpRequest();

// append url params + 


var key = "your key here";

const url = 'https://www.googleapis.com/civicinfo/v2/representatives?address=90001&key={key}';

var data;

// get json object called data w/ fetch

fetch(url)
    .then(response => {
        return response.json()
    })
    .then(data => {
        // work with json data
        // console.log(data)
        // console.log(JSON.stringify(data));
        console.log(data);
        for(var i = 0; i <= data.officials.length ; i++) // find out max # officials
        {
            // console.log(data.officials.length);
            console.log(data.officials[i].name + " " + data.officials[i].photoUrl);
        }

        for(var i = 0; i <= 11; i++) // find out max # officials
        {
            console.log(data.offices[i].name);
        }    
    })
    .catch(err => {
        // do something for an error
    })




