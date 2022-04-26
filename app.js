/* Ecwid.OnPageLoaded.add(function (page) {
  if (page.type == 'CHECKOUT_PAYMENT_DETAILS') {
    if (
      document.querySelector(
        '#ecwid-products > div.ec-loader-wrapper.ecwid-lte-768px.ec-size.ec-size--xxs.ec-size--xs.ec-size--s.ecwid-no-touch.ecwid-supports-cssanimations.ecwid-responsive > div > div > div:nth-child(3) > div > div.ec-store.ec-store__checkout-page > div > div > div.ec-cart__body > div > div.ec-cart__steps > div.ec-cart__step.ec-cart-step.ec-cart-step--payment.ec-cart-step--current > div.ec-cart-step__wrap > div.ec-cart-step__body > div:nth-child(1) > div.ec-cart-step__section > div > div > div > fieldset > div > label.ec-radiogroup__item.ec-radiogroup__item--checked.ec-radiogroup__item--46797-1594116265426.ec-radiogroup__item--Contrassegno > input'
      ).checked == true
    ) {
      
    }
  }
});
*/


ec = ec || {};
      ec.order = ec.order || {};
      ec.order.extraFields = ec.order.extraFields || {};
      // Set order surcharge
      ec.order.extraFields.surcharge = {
        value: 'Custom charge',
        options: [
          {
            title: 'Custom charge',
            surcharge: 5,
          },
        ],
        surchargeShortName: {
          name: 'Surcharge',
          showSurchargePercentValue: false,
        },
        surchargeType: 'absolute',
      };
      Ecwid.refreshConfig && Ecwid.refreshConfig();