Ecwid.OnPageLoaded.add(function (page) {
  if (page.type == 'CHECKOUT_PAYMENT_DETAILS') {
    // Initialize extra fields
    ec = ec || {};
    ec.order = ec.order || {};
    ec.order.extraFields = ec.order.extraFields || {};
    // Set order surcharge
    ec.order.extraFields.surcharge = {
      value: 'Custom charge',
      options: [
        {
          title: 'Custom charge',
          surcharge: 4,
        },
      ],
      surchargeShortName: {
        name: 'Sovrapprezzo Contrassegno',
        showSurchargePercentValue: false,
      },
      surchargeType: 'ABSOLUTE',
    };
    Ecwid.refreshConfig && Ecwid.refreshConfig();

    document.querySelector('#ecwid-products > div.ec-loader-wrapper.ec-size.ec-size--xxs.ec-size--xs.ec-size--s.ecwid-no-touch.ecwid-supports-cssanimations.ecwid-responsive.ecwid-lte-768px > div > div > div:nth-child(3) > div > div.ec-store.ec-store__checkout-page > div > div > div.ec-cart__body > div > div.ec-cart__steps > div.ec-cart__step.ec-cart-step.ec-cart-step--payment.ec-cart-step--current > div.ec-cart-step__wrap > div.ec-cart-step__body > div:nth-child(1) > div.ec-cart-step__section > div > div > div > fieldset > div > label.ec-radiogroup__item.ec-radiogroup__item--checked.ec-radiogroup__item--1020506238-1594377264110.ec-radiogroup__item--Credit-or-debit-card.ec-radiogroup__item--module-Stripe.ec-radiogroup__item--multiline > div.ec-radiogroup__radio > div > div.form-control__radio-wrap > input').addEventListener('click', function () {
      ec.order.extraFields.surcharge = {
        'value': 'Custom charge',
        "options": [
        { 
            "title": "Custom charge",
            "surcharge": 0
        },
        ],
        "surchargeShortName": {
            "name": "Surcharge",
             "showSurchargePercentValue": false
        },
        'surchargeType': 'PERCENT',
        'showZeroSurchargeInTotal': false // hides 0 surcharge from the order total table
    }
    Ecwid.refreshConfig()
    });
  };
});

/*
    if (
      document.querySelector(
        '#ecwid-products > div.ec-loader-wrapper.ecwid-lte-768px.ec-size.ec-size--xxs.ec-size--xs.ec-size--s.ecwid-no-touch.ecwid-supports-cssanimations.ecwid-responsive > div > div > div:nth-child(3) > div > div.ec-store.ec-store__checkout-page > div > div > div.ec-cart__body > div > div.ec-cart__steps > div.ec-cart__step.ec-cart-step.ec-cart-step--payment.ec-cart-step--current > div.ec-cart-step__wrap > div.ec-cart-step__body > div:nth-child(1) > div.ec-cart-step__section > div > div > div > fieldset > div > label.ec-radiogroup__item.ec-radiogroup__item--checked.ec-radiogroup__item--46797-1594116265426.ec-radiogroup__item--Contrassegno.ec-radiogroup__item--multiline > div.ec-radiogroup__radio > div > div.form-control__radio-wrap > input'
      ).checked == true
    ) {
      
    }
  ;

  
*/
