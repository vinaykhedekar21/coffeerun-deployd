/* @VinayKhedekar
  This is truck module to handle order operations like create, deliver, and print order
*/
(function(window) {
  "use strict";
  var App = window.App || {};

  function Truck(truckId, db) {
    this.truckId = truckId;
    this.db = db;
  }
  Truck.prototype.createOrder = function(order) {
    //console.log("Adding order for" + order.emailAddress);
    this.db.add(order.emailAddress, order);
  };
  Truck.prototype.deliverOrder = function(customerId) {
    //console.log("Delivering order for" + customerId);
    this.db.remove(customerId);
  };
  Truck.prototype.printOrders = function() {
    var customerIdArray = Object.keys(this.db.getAll());
    //console.log("Truck #" + this.truckId + " has pending orders:");
    customerIdArray.forEach(function() {
      //console.log(this.db.get(id));
    }.bind(this));
  };
  App.Truck = Truck;
  window.App = App;
})(window);
