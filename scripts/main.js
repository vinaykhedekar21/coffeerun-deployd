/* @VinayKhedekar
  This is main javaScript for truck and checklist modules
*/
(function(window) {
  "use strict";
  var FORM_SELECTOR = "[data-coffee-order=\"form\"]";
  var CHECKLIST_SELECTOR = "[data-coffee-order=\"checklist\"]";
  //var SERVER_URL = "http://coffeerun-v2-rest-api.herokuapp.com/api/coffeeorders";
  var SERVER_URL = "http://localhost:2403/coffeeorders";
  var App = window.App;
  var $ = window.jQuery;
  var Truck = App.Truck;
  var Validation = App.Validation;
  //var DataStore = App.DataStore;
  var RemoteDataStore = App.RemoteDataStore;
  var FormHandler = App.FormHandler;
  var CheckList = App.CheckList;
  var remoteDS = new RemoteDataStore(SERVER_URL);
  var myTruck = new Truck("ncc-1701", remoteDS);
  window.myTruck = myTruck;
  var checkList = new CheckList(CHECKLIST_SELECTOR);
  checkList.addClickHandler(myTruck.deliverOrder.bind(myTruck));
  var formHandler = new FormHandler(FORM_SELECTOR);
  //Load orders saved in deployd when page refresh
  $(FORM_SELECTOR).ready(function() {
    console.log("Page on-load");
    myTruck.displayOrders.call(myTruck, function(serverResponse) {
      $.each(serverResponse, function(i, coffeeOrder) {
        checkList.addRow.call(checkList, coffeeOrder);
      });
    });
  });

  formHandler.addSubmitHandler(function(data) {
    myTruck.createOrder.call(myTruck, data);
    checkList.addRow.call(checkList, data);
  });
  formHandler.addInputHandler(Validation.isCompanyEmail);

})(window);
