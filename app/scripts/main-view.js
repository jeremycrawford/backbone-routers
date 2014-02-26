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

// River Page View

var RiverView = Backbone.View.extend({

		className: "river-photo",

		createTemplate: _.template($('#river-page-template').text()),

		initialize: function(){
			$('.featured-park').html(this.el);

			this.render();
		},

		render: function(){

			var renderedTemplate = this.createTemplate(this.model);
			this.$el.html(renderedTemplate)

		}
});

// Trail Page View

var TrailView = Backbone.View.extend({

		className: "trail-photo",

		createTemplate: _.template($('#trail-page-template').text()),

		initialize: function(){
			$('.featured-park').html(this.el);

			this.render();
		},

		render: function(){

			var renderedTemplate = this.createTemplate(this.model);
			this.$el.html(renderedTemplate)

		}
});

// Waterfall Page View

var WaterfallView = Backbone.View.extend({

		className: "waterfall-photo",

		createTemplate: _.template($('#waterfall-page-template').text()),

		initialize: function(){
			$('.featured-park').html(this.el);

			this.render();
		},

		render: function(){

			var renderedTemplate = this.createTemplate(this.model);
			this.$el.html(renderedTemplate)

		}
});