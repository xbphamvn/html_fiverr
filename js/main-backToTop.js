(function () {
	// Back to Top - by CodyHouse.co
	var bgTopColor = document.getElementsByClassName('js-bg-top')[0],
		backTop = document.getElementsByClassName('js-cd-top')[0],
		button = document.getElementsByClassName('js-scroll-btn')[0],
		additionalCategories = document.getElementsByClassName('js-add-categories')[0],
		offset = 1, // browser window scroll (in pixels) after which the "back to top" link is shown
		additionalOffset = 200,
		// offsetOpacity = false, //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		// scrollDuration = 700,
		scrolling = false;

	if (backTop || button || bgTop || additionalCategories) {
		//update back to top visibility on scrolling
		window.addEventListener("scroll", function (event) {
			if (!scrolling) {
				scrolling = true;
				(!window.requestAnimationFrame) ? setTimeout(checkBackToTop, 0) : window.requestAnimationFrame(checkBackToTop);
			}
		});
	}

	function checkBackToTop() {
		var windowTop = window.scrollY || document.documentElement.scrollTop;
		(windowTop > offset) ? Util.addClass(bgTopColor, 'cd-top--is-visible') : Util.removeClass(bgTopColor, 'cd-top--is-visible');
		(windowTop > offset) ? Util.addClass(backTop, 'cd-top--is-visible') : Util.removeClass(backTop, 'cd-top--is-visible');
		(windowTop > offset) ? Util.addClass(button, 'cd-top-btn--is-visible') : Util.removeClass(button, 'cd-top-btn--is-visible');
		(windowTop > additionalOffset) ? Util.addClass(additionalCategories, 'cd-top-add--is-visible') : Util.removeClass(additionalCategories, 'cd-top-add--is-visible');
		scrolling = false;
	}

})();