// The Application
// ---------------

// Our overall **Backbone.Router** is the top-level piece of UI.
define([
    'jquery',
    'backbone'
], function(_, Backbone) {
    return Backbone.Router.extend({
        routes: {
            // Hashtag routes and their handlers
            'todos': 'todos',

            // default route, called on Router init
            '': 'todos'
        },
        todos: function() {
            this.setView({
                name: 'TodoListView'
            });
            return this;
        },
        initialize: function(options) {
            // start Backbone Hashtag routing
            Backbone.history.start();
            return this;
        },
        setView: function(options) {
            $.proxy(require(['views/'+options.name], function(View) {
                if (this.view)
                    this.view.remove();
                this.view = new View(options);
                $('#todoapp').append(this.view.render().$el);
            }), this);
            return this;
        }
    });
});
