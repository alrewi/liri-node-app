# liri-node-app

LIRI is a CLI Node.js app that allows users to look up concerts, movies and songs by name, by accessing the Bands In Town, OMDB and Spotify APIs. 

To use LIRI, open your command line 

![liri-1]()

and enter 
    node liri.js 
    
![liri-2]()

followed by one of these commands:
    1. concert-this band
    
    ![concert-1]()
    
    2. movie-this movie
    
    ![movie-1]()
    
    3. spotify-this-song song
    
    ![song-1]()
    
    4. do-what-it-says
    
    ![random-1]()


Entering concert-this and a band of your choice will generate the information for an upcoming show.

![concert-2]()


Entering movie-this and no movie title will bring up details about the film Mr. Nobody.

![movie-2]()

If you choose a specific movie, 

![movie-3]()

it's details are generated.

![movie-4]()


Try spotify-this-song without entering a song and you'll get back this Ace of Base classic.

![song-2]()

If you do add a track, 

![song-3]()

you'll see information about the song and, if available, a link to a preview of it.

![song-4]()


Typing do-what-it-says will produce a random result, which takes the form of one of the previous commands. It takes it's lead from the random.txt file where a command and a query are stored. Here are some examples:

![random-concert]()

![random-movie]()

![random-song]()
