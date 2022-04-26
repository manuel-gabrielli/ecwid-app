Ecwid.OnPageLoaded.add(function(page) {
  if (page.type == "CHECKOUT_PAYMENT_DETAILS") {
    if (document.querySelector(".ec-radiogroup__item--Contrassegno input").checked == true) {
      console.log("checked");
    }
}
});