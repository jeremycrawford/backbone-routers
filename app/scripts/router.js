var MainRouter = Backbone.Router.extend({

	routes: {
		"home" : "homePage",
		"about" : "aboutPage",
		"contact" : "contactPage"
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
	}
});
