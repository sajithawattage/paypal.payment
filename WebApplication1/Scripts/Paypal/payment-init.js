paypal.Button.render({
    env: 'sandbox', // 'production' Or 'sandbox',

    commit: true, // Show a 'Pay Now' button

    style: {
        color: 'gold',
        size: 'small'
    },

    payment: function (data, actions) {
        /* 
         * Set up the payment here 
         */
    },

    onAuthorize: function (data, actions) {
        /* 
         * Execute the payment here 
         */
    },

    onCancel: function (data, actions) {
        /* 
         * Buyer cancelled the payment 
         */
    },

    onError: function (err) {
        /* 
         * An error occurred during the transaction 
         */
    }
}, '#paypal-button');