/* @VinayKhedekar
  This is Payment Handler module to handle submit handler and
  creating dynamic div elements and showing thank you message.
*/
(function(window) {
  "use strict";
  var App = window.App || {};
  var $ = window.jQuery;

  function FormHandler(selector) {
    if (!selector) {
      throw new Error("No Selector Provided");
    }
    this.$formElement = $(selector);
    if (this.$formElement.length === 0) {
      throw new Error("Could not find element with selector: " + selector);
    }
  }
  FormHandler.prototype.addSubmitHandler = function(DYNAMIC_DIV_SELECTOR) {
    //console.log("Setting submit handler for payment form");
    this.$formElement.on("submit", function(event) {
      event.preventDefault();
      this.$element = $(DYNAMIC_DIV_SELECTOR);
      var data = {};
      $(this).serializeArray().forEach(function(item) {
        data[item.name] = item.value;
        //console.log(item.name + " is " + item.value);
      });

      //Dynamic Div creation
      var $innerDiv = $("<div></div>", {
        "id": "innerDiv",
        "class": "modal",
        "style": "display: inline-block;",
      });
      //Modal Message
      $innerDiv.append("<p>Thank you for your payment, " + data["title"] + " " + data["username"] + "</p>")
        .append("<a href=\"payment.html\" rel=\"modal:close\" class=\"close-modal\">Close</a>");

      var $outerDiv = $("<div></div>", {
        "class": "jquery-modal blocker current",
      });

      $outerDiv.append($innerDiv);
      this.$element.append($outerDiv);

      //console.log(data);
      this.reset();
      this.elements[0].focus();
    });
  };
  App.PaymentHandler = FormHandler;
  window.App = App;
})(window);
