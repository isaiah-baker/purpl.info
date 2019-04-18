// node stuffs

// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// var request = require("request");
// const fetch = require("node-fetch");


// const xhr = new XMLHttpRequest();

// append url params + 

var key = "xxx";

const url = '';

var data;

class representative {
    constructor( ) {
        this.name = '';
        this.party = '';
        this.phone = '';
        this.urls = '';
        this.photoUrl = '';
    }
}

reprArr = {};


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


        // loop through officials
        for(var i = 0; i <= data.officials.length ; i++) // find out max # officials
        {
            // console.log(data.officials.length);
            // console.log(data.officials[i].name + " " + data.officials[i].photoUrl);
            
            var repr = new representative();
            repr.name = data.officials[i].name;
            repr.party = data.officials[i].party;
            repr.phone = data.officials[i].phone;
            repr.urls = data.officials[i].urls;
            repr.photoUrl = data.officials[i].photoUrl;

            console.log(repr.name + " " + repr.party + " " + repr.phone + " "+ repr.urls[0]);
            continue;
        }

        for(var i = 0; i <= data.offices.length; i++) // loop through offices
        {
            // console.log(data.offices[i]);
            // console.log(data.offices[i].officialIndices)
        }    
    })
    .catch(err => {
        // do something for an error
    })

