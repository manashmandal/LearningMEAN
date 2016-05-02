var Flight = function() {
    this.data = {
        number: null,
        origin: null,
        destination: null
    };
    
    this.setNumber = function(num) {
        this.data.number = num;
    };
    
    this.setOrigin = function(o) {
        this.data.origin = o;
    };
    
    this.setDestination = function (des) {
        this.data.destination = des;
    };
    
    this.getInfo = function () {
        return this.data;
    };
};

module.exports = function() {
    var instance = new Flight();
    return instance;
};