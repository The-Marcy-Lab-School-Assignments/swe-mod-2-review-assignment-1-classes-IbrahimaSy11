// Problem 1: Inheritance and Polymorphism - Media Player
// Implement your MediaItem, Song, Podcast, and Audiobook classes below
class MediaItem {
    constructor (title , duration){
        this.title = title;
        this.duration = duration;
    }

    play (){
        return `PLaying: ${this.tilte}`
    }

    getFormattedDuration (){
        
    }

}

class Song {

}

class Podcast {

}

class Audiobook {

}

const test = () => {

}

module.exports = { MediaItem, Song, Podcast, Audiobook };

