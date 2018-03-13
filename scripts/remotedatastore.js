/*@VinayKhedekar
  This module is to handle operations like add, retrive and delete
  data from the remote server (Back-end)
  */
(function(window) {
  "use strict";
  var App = window.App || {};
  var $ = window.jQuery;

  function RemoteDataStore(url) {
    if (!url) {
      throw new Error("No remote URL supplied.");
    }
    this.serverUrl = url;
  }
  RemoteDataStore.prototype.add = function(key, value) {
    this.remove(key);
    $.post(this.serverUrl, value, function(serverResponse) {
      console.log(serverResponse);
    });
  };
  RemoteDataStore.prototype.getAll = function(cb) {
    $.get(this.serverUrl, function(serverResponse) {
      console.log(serverResponse);
      cb(serverResponse);
    });
  };
  RemoteDataStore.prototype.get = function(key, cb) {
    $.get(this.serverUrl + "?emailAddress=" + key, function(serverResponse) {
      console.log(serverResponse);
      cb(serverResponse);
    });
  };
  //Functon to remove order from deployd
  RemoteDataStore.prototype.remove = function(key) {
      this.get(key, function(serverResponse) {
        var serverUrl = this.serverUrl;
      console.log(serverResponse);
      var id = serverResponse[0]["id"];
      $.ajax(serverUrl + "/" + id, {
        type: "DELETE"
      });
    });
  };
  App.RemoteDataStore = RemoteDataStore;
  window.App = App;
})(window);
