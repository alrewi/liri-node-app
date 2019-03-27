require("dotenv").config();

var keys = require("./keys.js");

var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

var moment = require('moment');
moment().format();

var fs = require("fs");

var axios = require("axios");




var command = process.argv[2];
var query;

function goLiri () {
    if (command === "concert-this"){
        var query = process.argv.slice(3);
        var modifiedQuery = query.join("+");
        var queryUrl = "https://rest.bandsintown.com/artists/" + modifiedQuery + "/events?app_id=codingbootcamp";
        axios.get(queryUrl).then(
            function(response){
                console.log("Venue: " + response.data[0].venue.name);
                console.log("Location: " + response.data[0].venue.city);
                var date = moment(response.data[0].datetime).format("MM/DD/YYYY");
                console.log("Date: " + date);
            }).catch(function(error) {
                console.log(error);
            })
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
            }).catch(function(error) {
                console.log(error);
            })
        } else {
            var query = process.argv.slice(3);
            var modifiedQuery = query.join("+");
            var queryUrl = "http://www.omdbapi.com/?t=" + modifiedQuery + "&y=&plot=short&apikey=trilogy";
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
            }).catch(function(error) {
                console.log(error);
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
            .catch(function(error) {
                console.log(error);
            })
        } else {
            var query = String(process.argv.slice(3));
            spotify
            .search({ type: 'track', query: query, limit: 1 })
            .then(function(response) {
                console.log("Artist(s): " + response.tracks.items[0].album.artists[0].name);
                console.log("Song: " + response.tracks.items[0].name);
                console.log("Album: " + response.tracks.items[0].album.name);
                console.log("Snippet: " + response.tracks.items[0].preview_url);
            })
            .catch(function(error) {
                console.log(error);
            });
        }
    } else if (command === "do-what-it-says"){
        fs.readFile("random.txt", "utf8", function(error, data) {
            if (error) {
                return console.log(error);
            } else {
                var dataArr = data.split(",");
                command = dataArr[0];
                query = dataArr[1];
                goLiri();
            }
        })
    }
}

goLiri();
