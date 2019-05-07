class user {
    constructor() {
        this.state = "";
        this.zipCode = "";
        this.userName = "";
    }
}

var usrInfo = new user;

usrInfo.zipCode = prompt("Enter Zip: ");

// format strings

var key = "fizzbuzz";

// figure out this electionID situation
var electionId = '4795';

var address = usrInfo.zipCode;

const reprUrl = `https://www.googleapis.com/civicinfo/v2/representatives?address=${address}&key=${key}`;
const viqUrl = `https://www.googleapis.com/civicinfo/v2/voterinfo?address=${address}&key=${key}&electionId=${electionId}`;
const electionUrl = `https://www.googleapis.com/civicinfo/v2/elections?address=${address}&key=${key}`;

var reprData;
var viData;
var electionData;




class representative {
    constructor( ) {
        this.name = '';
        this.party = '';
        this.phone = '';
        this.urls = '';
        this.photoUrl = '';
    }
}

class voterInfo {
    constructor() {
        this.id = "";
        this.electionDay = "";
        this.electionName = "";
        this.contests = [];
    }
}


reprArr = {};


// get json object called data w/ fetch

// election query
fetch(electionUrl)
    .then(response => {
        return response.json()
    })
    .then(electionData => {
        // work with json data
        // console.log(data)
        // console.log(JSON.stringify(data));
        console.log("------------------------------");
        console.log("Printing Election Query: ");
        console.log("------------------------------");
        console.log(electionData);

        for(var i = 0; i < electionData.elections.length; i++)
        {
            console.log("Election: " + electionData.elections[i].name +
            " \nID: " + electionData.elections[i].id)
        }

    })
    .catch(err => {
        // do something for an error
        console.log("error")
    })


// voter info query

fetch(viqUrl)
    .then(response => {
        return response.json()
    })
    .then(viData => {
        // work with json data
        // console.log(data)
        // console.log(JSON.stringify(data));
        console.log("------------------------------");
        console.log("Fetched Voter Info Query: ")
        console.log("------------------------------");
        console.log(viData);

        var Info = new voterInfo();            
            Info.name = viData.election.name;
            Info.electionDay = viData.election.electionDay;
            Info.id = viData.election.id;

        console.log("The Election is " + Info.name + " " + Info.id +"\n");
        console.log("Election day is on " + Info.electionDay);
       
    })
    .catch(err => {
        // do something for an error
        console.log("error")
    })


// representative info query

fetch(reprUrl)
    .then(response => {
        return response.json()
    })
    .then(reprData => {
        // work with json data
        // console.log(data)
        // console.log(JSON.stringify(data));
        console.log("------------------------------");
        console.log("Fetched representative data: ")
        console.log("------------------------------");
        console.log(reprData);
        


        // loop through officials
        for(var i = 0; i <= reprData.officials.length ; i++) // find out max # officials
        {
            // console.log(data.officials.length);
            // console.log(data.officials[i].name + " " + data.officials[i].photoUrl);
            
            var repr = new representative();
            repr.name = reprData.officials[i].name;
            repr.party = reprData.officials[i].party;
            repr.phone = reprData.officials[i].phones;
            repr.urls = reprData.officials[i].urls;
            repr.photoUrl = reprData.officials[i].photoUrl;

            console.log(repr.name + ": " + repr.party + " \n" + repr.phone + " \n"+ repr.urls[0]);
            
            continue;
        }

        console.log("end of repr data");
        // for(var i = 0; i <= reprData.offices.length; i++) // loop through offices
        // {
        //     // console.log(data.offices[i]);
        //     // console.log(data.offices[i].officialIndices)
        // }    
    })
    .catch(err => {
        // do something for an error
    })

