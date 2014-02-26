// Home Page View

var HomePageView = Backbone.View.extend({

		createTemplate: _.template($('#home-page-template').text()),

		initialize: function(){
			$('.jumbotron').html(this.el);

			this.render();
		},

		render: function(){

			var renderedTemplate = this.createTemplate(this.model);
			this.$el.html(renderedTemplate)


		}

});

// About Page View

var AboutPageView = Backbone.View.extend({

	className: "mount-cook-photo",

  createTemplate: _.template($('#about-page-template').text()),

  initialize: function(){
    $('.jumbotron').html(this.el);

    this.render();
  },

  render: function(){

    var renderedTemplate = this.createTemplate(this.model);
    this.$el.html(renderedTemplate)

  }
});

// Contact Page View

var ContactPageView = Backbone.View.extend({

		createTemplate: _.template($('#contact-page-template').text()),

		initialize: function(){
			$('.jumbotron').html(this.el);

			this.render();
		},

		render: function(){

			var renderedTemplate = this.createTemplate(this.model);
			this.$el.html(renderedTemplate)

		}
});