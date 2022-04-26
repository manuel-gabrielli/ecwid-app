Ecwid.OnPageLoaded.add(function(page) {
  if (page.type == "CHECKOUT_PAYMENT_DETAILS") {
    console.log("Hello World!");
}
});