/*VinayKhedekar
 javaScript for Payment validation operation,
 used to call paymentHandler by passing the SELECTOR of payment details
*/
(function(window) {
  "use strict";
  var FORM_SELECTOR = "[data-payment-details=\"form\"]";
  var DYNAMIC_DIV_SELECTOR = "[data-submit-payment=\"dynamicDiv\"]";
  var App = window.App;
  var PaymentHandler = App.PaymentHandler;
  var paymentHandler = new PaymentHandler(FORM_SELECTOR);
  paymentHandler.addSubmitHandler(DYNAMIC_DIV_SELECTOR);
})(window);
