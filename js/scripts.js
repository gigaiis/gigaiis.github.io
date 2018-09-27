(function($) {

	$('.gif-with-play').on('click', function() {

		var $this   = $(this),				
				$img    = $this.children('img'),
				$imgSrc = $img.attr('src'),
				$imgSrcgif = $img.attr('data-srcgif'),
				$imgExt = $imgSrcgif.split('.');
				
		if($imgExt[1] === 'gif') {
			$this.addClass('loading-hide');

			$img.attr('src', $img.data('srcgif')).attr('data-srcgif', $imgSrc);

			$($img).load(function(){
	      $this.removeClass('loading-hide');
		  });		
		} else {
			$img.attr('src', $imgSrcgif).attr('data-srcgif', $img.data('srcgif'));
		}

		$this.toggleClass('play');

	});


	// Fallback SVG to PNG
	if (!Modernizr.svg) {
    var imgs = document.getElementsByTagName('img');
    var svgExtension = /.*\.svg$/
    var l = imgs.length;
    for(var i = 0; i < l; i++) {
      if(imgs[i].src.match(svgExtension)) {
        imgs[i].src = imgs[i].src.slice(0, -3) + 'png';
        console.log(imgs[i].src);
      }
    }
	}
})(jQuery);