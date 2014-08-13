
$(document).ready(function() {
  var LightBox;
  return LightBox = (function() {

    function LightBox(options) {
      this.container = $(options.container);
      this.id = "" + options.id;
      this.images = options.images;
      this.bindUI();
      this.bindEvents();
    }

    LightBox.prototype.bindUI = function() {
      var UITemplate, image, imageTemplate, imageURL, lightbox, navigationTemplate, _i, _len, _ref;
      UITemplate = "<div id=\"" + this.id + "\" class=\"lightbox\">                      <a href=\"#\" class=\"close\">&times;</a>                      <div class=\"inner\">                        <div id=\"" + this.id + "-carousel\" class=\"carousel\" data-ride=\"carousel\">                          <div class=\"carousel-inner\"></div>                        </div>                      </div>                    </div>";
      navigationTemplate = "<a class=\"left carousel-control\" data-slide=\"prev\" href=\"#" + this.id + "\">                              <span class=\"glyphicon glyphicon-chevron-left\"></span>                            </a>                            <a class=\"right carousel-control\" data-slide=\"next\" href=\"#" + this.id + "\">                              <span class=\"glyphicon glyphicon-chevron-right\"></span>                            </a>";
      imageTemplate = "<div class=\"item\">                          <img>                        </div>";
      lightbox = $(UITemplate);
      _ref = this.images;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        imageURL = _ref[_i];
        image = $(imageTemplate);
        image.find("img").attr("src", imageURL);
        lightbox.find(".carousel-inner").append(image);
      }
      if (this.images.length > 1) lightbox.append(navigationTemplate);
      return this.container.append(lightbox);
    };

    LightBox.prototype.bindEvents = function() {
      this.container.on("LightBox.Open", $.proxy(this.open, this));
      this.container.on("LightBox.Close", $.proxy(this.close, this));
      return this.container.find("a.close").unbind().bind("click", $.proxy(this.close, this));
    };

    LightBox.prototype.open = function(e, payload) {
      var slideTo;
      e.preventDefault();
      this.container.find(".item").removeClass("active");
      this.container.find(".item:nth-child(" + payload.slideTo + ")").addClass("active");
      slideTo = $(e.target).closest("a").data("to");
      return this.container.find(".lightbox").show();
    };

    LightBox.prototype.close = function(e) {
      e.preventDefault();
      return this.container.find(".lightbox").hide();
    };

    return LightBox;

  })();
});
