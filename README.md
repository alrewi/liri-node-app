# liri-node-app

LIRI is a CLI Node.js app that allows users to look up concerts, movies and songs by name, by accessing the Bands In Town, OMDB and Spotify APIs. 

To use LIRI, open your command line 

![liri-1](/images/liri-1.png)

and enter 
    node liri.js 
    
![liri-2](/images/liri-2.png)

followed by one of these commands: concert-this, movie-this, spotify-this-song or do-what-it-says.
    
  
Entering concert-this 

![concert-1](/images/concert-1.png)

and a band of your choice will generate the information for an upcoming show.

![concert-2](/images/concert-2.png)


Entering movie-this 

![movie-1](/images/movie-1.png)

and no movie title will bring up details about the film Mr. Nobody.

![movie-2](/images/movie-2.png)

If you choose a specific movie, 

![movie-3](/images/movie-3.png)

it's details are generated.

![movie-4](/images/movie-4.png)


Try spotify-this-song without entering a song 

![song-1](/images/song-1.png)

and you'll get back this Ace of Base classic.

![song-2](/images/song-2.png)

If you do add a track, 

![song-3](/images/song-3.png)

you'll see information about the song and, if available, a link to a preview of it.

![song-4](/images/song-4.png)


Typing do-what-it-says 

![random-1](/images/random-1.png)

will produce a random result, which takes the form of one of the previous commands. It takes it's lead from the random.txt file where a command and a query are stored. Here are some examples:

![random-concert](/images/random-concert.png)

![random-movie](/images/random-movie.png)

![random-song](/images/random-song.png)
