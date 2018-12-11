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
    var deferred = new $.Deferred();
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
                        artists: eachTrack.artists[0].name || 'Unknown',
                        name: eachTrack.name,
                        preview_url: eachTrack.preview_url,
                        id: eachTrack.id
                    }
                    //console.log(eachTrack.artists[0].name);
                    self.list.push(currTrack);
                }
            }
            self.numberTracks = self.list.length;
            //console.log(self.list);

            deferred.resolve();
        });
    });

    return deferred;
};

/*
 *  increment the current counter
 */
spotifyPlayer.prototype.next = function() { 
    console.log(this.counter); 
    this.counter++; 
    
};

spotifyPlayer.prototype.getSongName = function() {
    if(this.counter < this.numberTracks) {
        return this.list[this.counter].name;
    }
}

spotifyPlayer.prototype.getArtist = function() {
    if(this.counter < this.numberTracks) {
        return this.list[this.counter].artists;
        console.log(this.list[this.counter].artists);
    }
}
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
 *  validate userinput function
 */
spotifyPlayer.prototype.checkAnswer = function (answer) {
    var word = (this.list[this.counter].name).replace(/ *\([^)]*\) */g, "");
    var sanitized_word = word.replace(/[^\w\s]/gi, ''); //no non-word char
    var sanitized_key_words = sanitized_word.split("\\s+");
    var key_words = word.split("\\s+"); // split by space
    var ans_words = answer.split("\\s+"); // split by non-word chars
    // console.log("s_key_words = " + sanitized_key_words);
    // console.log("key_words = " + key_words);
    // console.log("ans_words =" + ans_words);
    var hint_words = [];
    var correct = true;

    for (var i = 0; i < key_words.length; i++) {
        correct &= (ans_words[i] && key_words[i].toLowerCase() == ans_words[i].toLowerCase());
        hint_words[i] = "__";
    } 

    if(!correct) {
        console.log("in loop");
        for (var i = 0; i < key_words.length; i++) {
            // console.log("sanitizied" + sanitized_key_words[i].toLowerCase());
            // console.log("ans" + ans_words[i].toLowerCase());
            if(sanitized_key_words[i].toLowerCase() == ans_words[i].toLowerCase()) {
                correct = true;
                 //console.log(correct);
            }
            else
                correct = false;
           
        }
    }

    for (var ans of ans_words) {
        for (var j = 0; j < key_words.length; j++) {
            if (key_words[j].toLowerCase() == ans.toLowerCase() || 
                sanitized_key_words[j].toLowerCase() == ans.toLowerCase()) {
                hint_words[j] = key_words[j];
            }
        }
    }

    var hint_string = hint_words.join(' ');
    return {'isCorrect': correct, 'hint': hint_string};

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
