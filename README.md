# liri-node-app

LIRI is a CLI Node.js app that allows users to look up concerts, movies and songs by name, by accessing the Bands In Town, OMDB and Spotify APIs. 

To use LIRI, open your command line and enter 
    node liri.js 
followed by one of these command/query pairs:
    1. concert-this band
    2. movie-this movie
    3. spotify-this-song song
    4. do-what-it-says

Entering concert-this and a band of your choice will generate the information for an upcoming show.

Entering movie-this and a movie title will bring up relevant details about that film.

Try spotify-this-song and a track of your choosing to see information about the song and, if available, a link to a preview of it.

Typing do-what-it-says will produce a random result, which takes the form of one of the previous commands. It takes it's lead from the random.txt file where a command and a query are stored (ex: spotify-this-song,pour some sugar on me).