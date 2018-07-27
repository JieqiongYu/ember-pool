App = Ember.Application.create()

App.Router.map(function() {
    // put your routes here
    this.route("about");
    this.route("collections");
    this.resource("exhibits");
    this.route("notes");
});