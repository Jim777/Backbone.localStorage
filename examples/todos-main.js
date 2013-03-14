// RequireJS config
// ---------------

// Here we setup path aliases and dependencies
require.config({
    paths: {
        'libs': '../spec/support',
        'jquery': '../spec/support/jquery',
        'underscore': '../spec/support/underscore',
        'backbone': '../spec/support/backbone',
        'backbone.localStorage': '../backbone.localStorage',
    },
    shim: {
        'jquery': {
            exports: '$',
        },
        'underscore': {
            exports: '_',
        },
        'backbone': {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone',
        },
        'backbone.localStorage': {
            deps: ['backbone'],
            exports: 'Backbone.localStorage',
        }
    }
});

// Load todos-router.js as TodosRouter
require([
    'todos-router'
], function(TodosRouter) {

    // We kick things off by creating the **App**.
    window.app = new TodosRouter();
});
