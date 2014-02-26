var MainRouter = Backbone.Router.extend({

	routes: {
		"home" : "homePage",
		"about" : "aboutPage",
		"contact" : "contactPage",
		"rivers" : "riverSection",
		"trails" : "trailSection"
	},

	initialize: function(){
	},

	homePage: function(){
		new HomePageView()

	},

	aboutPage: function(){
		new AboutPageView()
	},

	contactPage: function(){
		new ContactPageView();
	},

	riverSection: function(){
		new RiverView()
	},

	trailSection: function(){
		new TrailView()
	}
});
