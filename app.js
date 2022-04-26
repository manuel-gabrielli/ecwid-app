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
        name: 'Sovrapprezzo contrassegno',
        showSurchargePercentValue: false,
      },
      surchargeType: 'ABSOLUTE',
    };
    Ecwid.refreshConfig && Ecwid.refreshConfig();

    document
      .querySelector(
        '.ec-radiogroup__item--Credit-or-debit-card input'
      )
      .addEventListener('click', function () {
        ec.order.extraFields.surcharge = {
          value: 'Custom charge',
          options: [
            {
              title: 'Custom charge',
              surcharge: 0,
            },
          ],
          surchargeShortName: {
            name: 'Sovrapprezzo contrassegno',
            showSurchargePercentValue: false,
          },
          surchargeType: 'ABSOLUTE',
          showZeroSurchargeInTotal: false, // hides 0 surcharge from the order total table
        };
        Ecwid.refreshConfig();
      });

    document
      .querySelector(
        '.ec-radiogroup__item--Contrassegno input'
      )
      .addEventListener('click', function () {
        ec.order.extraFields.surcharge = {
          value: 'Custom charge',
          options: [
            {
              title: 'Custom charge',
              surcharge: 4,
            },
          ],
          surchargeShortName: {
            name: 'Sovrapprezzo contrassegno',
            showSurchargePercentValue: false,
          },
          surchargeType: 'ABSOLUTE',
        };
        Ecwid.refreshConfig();
      });
  } else {
    ec.order.extraFields.surcharge = {
      value: 'Custom charge',
      options: [
        {
          title: 'Custom charge',
          surcharge: 0,
        },
      ],
      surchargeShortName: {
        name: 'Sovrapprezzo contrassegno',
        showSurchargePercentValue: false,
      },
      surchargeType: 'ABSOLUTE',
      showZeroSurchargeInTotal: false,
    }; // hides 0 surcharge from the order total table
  }
  Ecwid.refreshConfig();
});







