(function() {
    
gls2.FixedRandom = {
    index: -1,
    data: null,
    setup: function(seed) {
        // this.data = [];
        // var mt = new MersenneTwister(seed);
        // for (var i = 0; i < 1000; i++) {
        //     this.data[i] = mt.next();
        // }
    },
    random: function() {
        // this.index += 1;
        // if (1000 <= this.index) {
        //     this.index = this.index % 1000;
        // }
        // return this.data[this.index];
        return Math.random();
    },
    rand: function(min, max) {
        return Math.floor( this.random()*(max-min+1) ) + min;
    },
    randf: function(min, max) {
        return this.random()*(max-min)+min;
    },
};

})();
