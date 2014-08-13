bootstrap-lightbox
==================

A minimalist lightbox for integration with Twitter Bootstrap.

Built for my latest project in SASS and CoffeeScript. I've included the compiled source for anyone who'd prefer vanilla CSS/JS.

## Usage

Assuming you have a list of thumbnail images like so:

	<ul id="thumbnails">
		<li>
			<a href="#" data-to="1">
				<img src="image1-tmb.jpg">
			</a>
		</li>

		<li>
			<a href="#" data-to="2">
				<img src="image2-tmb.jpg">
			</a>
		</li>
	</ul>

And we can then execute the following code:

	$(document).ready(function(){
	  // Create a new LightBox instance
	  new LightBox({
	    id: "my-lightbox",							// Unique identifier for your carousel
	    container: "#thumbnails",					// Containing element to bind to
	    images: ["image1-lg.jpg", "image2-lg.jpg"]	// An array of image urls
	  });

	  $("#thumbnails").find("a").unbind().bind("click", function(e){
	    e.preventDefault();
	    var slideTo = $(e.target).closest("a").data("to");
	    $("#thumbnails").trigger("LightBox.Open", { slideTo: slideTo });
	  });
	});

## Caveats & Todos

At the moment there's bad coupling and cohesion. Having to define the url images twice rather than have the provided my the elements directly. There's also a reliance on this 'slideTo' data attribute for use within the internal carousel; it also is pretty dumb as it just finds the element index rather than the actual related imag in the lightbox carousel. Pretty much all the LightBox options can be dumped.

It's a work in progress.