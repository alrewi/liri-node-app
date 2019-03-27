
require("dotenv").config();

var keys = require("./keys.js");

var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

var moment = require('moment');
moment().format();

var fs = require("fs");

var axios = require("axios");




var command = process.argv[2];

if (command === "concert-this"){
    var concert = process.argv.slice(3);
    var artist = concert.join("+");
    var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
    axios.get(queryUrl).then(
        function(response){
            console.log("Venue: " + response.data[0].venue.name);
            console.log("Location: " + response.data[0].venue.city);
            var date = moment(response.data[0].datetime).format("MM/DD/YYYY");
            console.log("Date: " + date);
            }
        )
} else if (command === "movie-this"){
    if (!process.argv[3]){
        axios.get("http://www.omdbapi.com/?t=Mr.+Nobody&y=&plot=short&apikey=trilogy").then(
            function(response){
            console.log("Title: " + response.data.Title);
            console.log("Released in: " + response.data.Year);
            console.log("IMDB rating: " + response.data.Ratings[0].Value);
            console.log("Rotten Tomatoes rating: " + response.data.Ratings[1].Value);
            console.log("Country: " + response.data.Country);
            console.log("Language: " + response.data.Language);
            console.log("Plot: " + response.data.Plot);
            console.log("Actors: " + response.data.Actors);
        })
    } else {
        var movie = process.argv.slice(3);
        var movieName = movie.join("+");
        var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
        axios.get(queryUrl).then(
            function(response){
            console.log("Title: " + response.data.Title);
            console.log("Released in: " + response.data.Year);
            console.log("IMDB rating: " + response.data.Ratings[0].Value);
            console.log("Rotten Tomatoes rating: " + response.data.Ratings[1].Value);
            console.log("Country: " + response.data.Country);
            console.log("Language: " + response.data.Language);
            console.log("Plot: " + response.data.Plot);
            console.log("Actors: " + response.data.Actors);
        })
    } 
} else if (command === "spotify-this-song"){
    if (!process.argv[3]){
        spotify
        .search({ type: 'track', query: 'The Sign Ace of Base', limit: 1 })
        .then(function(response) {
            console.log("Artist(s): " + response.tracks.items[0].album.artists[0].name);
            console.log("Song: " + response.tracks.items[0].name);
            console.log("Album: " + response.tracks.items[0].album.name);
            console.log("Snippet: " + response.tracks.items[0].preview_url);
        })
        .catch(function(err) {
            console.log(err);
        })
    } else {
        var song = String(process.argv.slice(3));
        spotify
        .search({ type: 'track', query: song, limit: 1 })
        .then(function(response) {
            console.log("Artist(s): " + response.tracks.items[0].album.artists[0].name);
            console.log("Song: " + response.tracks.items[0].name);
            console.log("Album: " + response.tracks.items[0].album.name);
            console.log("Snippet: " + response.tracks.items[0].preview_url);
        })
        .catch(function(err) {
            console.log(err);
        });
    }
} else if (command === "do-what-it-says"){
// do-what-it-says
// in terminal: node liri.js do-what-it-says
// Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
// It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
    fs.readFile("random.txt", "utf8", function(error, data) {
        if (error) {
        return console.log(error);
        }
        console.log(data);

        var dataArr = data.split(",");

        console.log(dataArr);

        var track = dataArr[1];
        var song = track.join("+");
        spotify
        .search({ type: 'track', query: song, limit: 1 })
        .then(function(response) {
            console.log(response);
        })
        .catch(function(err) {
            console.log(err);
        });
    })
};
