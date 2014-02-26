var ParkPics = Backbone.Model.extend({});

var ParkPicsCollection = Backbone.Collection.extend({
	model: ParkPics,
})

  // url: // This is where your url goes from the api that your fetching

  // parse: function(response) {
  //   return response.results;
  // }