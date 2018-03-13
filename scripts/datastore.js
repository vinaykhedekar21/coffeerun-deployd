/* @VinayKhedekar
  This is DataStore module  to store the order data
*/
(function(window) {
  "use strict";
  var App = window.App || {};

  //Constructor for data store
  function DataStore() {
    this.data = {};
  }
  //Store data in key-value pair
  DataStore.prototype.add = function(key, val) {
    this.data[key] = val;
  };
  //Data Store methods
  DataStore.prototype.get = function(key) {
    return this.data[key];
  };
  DataStore.prototype.getAll = function() {
    return this.data;
  };
  DataStore.prototype.remove = function(key) {
    delete this.data[key];
  };
  App.DataStore = DataStore;
  window.App = App;
})(window);
