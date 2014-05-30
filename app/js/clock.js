var TICK_INTERVAL = 500;

App.Clock = Em.Object.extend({
  second: null

, minute: null

, hour:   null

, init: function() {
    this.tick();
  }

, tick: function() {
    var now = new Date();

    this.setProperties({
      second: now.getSeconds()
    , minute: now.getMinutes()
    , hour:   now.getHours()
    });

    var self = this;
    setTimeout(function(){ self.tick(); }, TICK_INTERVAL);
  }

});
