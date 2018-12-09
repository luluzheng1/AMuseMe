/*
 *  initialize function prototype and attributes
 */
function spotifyPlayer(genre, number) {
    this.genre = genre;
    this.numberTracks = number;
    this.accessToken = undefined;
    this.counter = 0;
    this.list = [];
}

/*
 *  initialize play list by using spotify recommendations api
 */
spotifyPlayer.prototype.initList = function() {
    var self = this;
    this.getCredential()
    .done(function(){
        console.log('Bearer ' + self.accessToken);
        $.ajax({
            url: 'https://api.spotify.com/v1/recommendations',
            method: 'GET',
            dataType: 'json',
            data: {
                seed_genres: self.genre,
                market: 'US',
            },

            headers: {
                'Authorization': 'Bearer ' + self.accessToken
            }

        })
        .done(function(data) {
            console.log(data);
            for (eachTrack of data.tracks) {
                if (eachTrack.preview_url !== null) {
                    let currTrack = {
                        album: eachTrack.album || 'Unknown',
                        artists: eachTrack.artists || 'Unknown',
                        name: eachTrack.name,
                        preview_url: eachTrack.preview_url,
                        id: eachTrack.id
                    }
                    self.list.push(currTrack);
                }
            }
            self.numberTracks = self.list.length;
            console.log(self.list);
        });
    });
};

/*
 *  increment the current counter
 */
spotifyPlayer.prototype.next = function() { 
    console.log(this.counter); 
    this.counter++; 
    
};

/*
 *  return a url to the song
 */
spotifyPlayer.prototype.getPlayerURL = function() {
    if (this.counter < this.numberTracks) {
        console.log(this.list[this.counter].name);
        console.log(this.list[this.counter].name);
        return this.list[this.counter].preview_url;
    }
    else {
        console.error('Exhausted');
    }
};

/*
 *  NOT IMPLEMENTED: checkAnswer function
 */
spotifyPlayer.prototype.checkAnswer = function () {
    console.log(this.list[this.counter].album);
    console.log(this.list[this.counter].artists);
};

spotifyPlayer.prototype.getCredential = function () {
    var self = this;
    var deferred = new $.Deferred();

    $.ajax({
        url: 'https://peaceful-castle-28546.herokuapp.com/credential',
        method: 'GET',
        dataType: 'json',
        crossOrigin: true
    })
    .done(function(data) {
        console.log(data.access_token);
        self.accessToken = data.access_token;
        deferred.resolve();
    });

    return deferred;
}

