$(document).ready ->
  class LightBox
    constructor: (options)->
      @container = $ options.container
      @id = "#{options.id}"
      @images = options.images
      @bindUI()
      @bindEvents()

    bindUI: ->
      UITemplate = "<div id=\"#{@id}\" class=\"lightbox\">
                      <a href=\"#\" class=\"close\">&times;</a>
                      <div class=\"inner\">
                        <div id=\"#{@id}-carousel\" class=\"carousel\" data-ride=\"carousel\">
                          <div class=\"carousel-inner\"></div>
                        </div>
                      </div>
                    </div>"

      navigationTemplate = "<a class=\"left carousel-control\" data-slide=\"prev\" href=\"##{@id}\">
                              <span class=\"glyphicon glyphicon-chevron-left\"></span>
                            </a>
                            <a class=\"right carousel-control\" data-slide=\"next\" href=\"##{@id}\">
                              <span class=\"glyphicon glyphicon-chevron-right\"></span>
                            </a>"

      imageTemplate = "<div class=\"item\">
                          <img>
                        </div>"

      lightbox = $ UITemplate # build template container

      for imageURL in @images # iterate over images and add all to lightbox
        image = $ imageTemplate
        image.find("img").attr("src", imageURL)
        lightbox.find(".carousel-inner").append image

      if @images.length > 1 then lightbox.append navigationTemplate # add navigation if needed

      @container.append lightbox

    bindEvents: ->
      @container.on "LightBox.Open", $.proxy(@open, @)
      @container.on "LightBox.Close", $.proxy(@close, @)
      @container.find("a.close").unbind().bind "click", $.proxy(@close, @)

    open: (e, payload)->
      e.preventDefault()
      @container.find(".item").removeClass("active");
      @container.find(".item:nth-child(#{payload.slideTo})").addClass("active");
      slideTo = $(e.target).closest("a").data("to")
      @container.find(".lightbox").show()

    close: (e)->
      e.preventDefault()
      @container.find(".lightbox").hide()