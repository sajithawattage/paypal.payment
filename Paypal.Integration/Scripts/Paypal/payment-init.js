paypal.Button.render({
    env: 'sandbox', // 'production' Or 'sandbox',

    client: {
        sandbox: "AeZ6pUAr6j-azR6uMpuK85PlXTF67AGelEbT-aEhiBLelnmzL3qbBftIfHPEtoUTuyNiydPLsxji1jcQ",
        production: ""
    },

    commit: true, // Show a 'Pay Now' button

    style: {
        color: 'gold',
        size: 'small'
    },

    payment: function (data, actions) {
        /* 
         * Set up the payment here 
         */
        return actions.payment.create({
            payment: {
                transactions: [
                    {
                        amount: { total: '17.49', currency: 'SGD' }
                    }
                ]
            }
        });
    },

    onAuthorize: function (data, actions) {
        /* 
         * Execute the payment here 
         */
        return actions.payment.execute().then(function (payment) {

            // The payment is complete!
            // You can now show a confirmation message to the customer
            console.log('Payment Complete', payment);
        });
    },

    onCancel: function (data, actions) {
        /* 
         * Buyer cancelled the payment 
         */
        console.log('Buyer cancel the payment', actions);
    },

    onError: function (err) {
        /* 
         * An error occurred during the transaction 
         */
    }
}, '#paypal-button');