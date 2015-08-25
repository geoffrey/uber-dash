var THROTTLE = 1000*10;
var LAST_CALL = null;

module.exports = {
  throttled: function() {
    var ok = Date.now() - LAST_CALL > THROTTLE;

    if (ok) {
      LAST_CALL = Date.now();
    }
    return ok;
  },

  d2h: function(d) {
    var h = d.toString(16);
    if (h.length < 2) {
      h = '0' + h;
    }
    return h;
  },

  dadd2hadd: function(dadd) {
    return dadd.map(this.d2h).join(':');
  }
};
