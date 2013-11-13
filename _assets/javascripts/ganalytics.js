// Wait for jQuery to be ready.
$( document ).ready(function() {
	// Setup gAnalytics tracking source.
	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

	// Track initial page request.
	ga('create', $('body').data('analytics-tracking-code'), $('body').data('analytics-tracking-domain'));
	ga('send', 'pageview');

	// Track more complex event.

	// Track the use of mailto links as an event.
	// Bind click events to any mailto links.
	$('a[href^=mailto]').click(function(e) {
		// Log the use to google.
		ga('send', 'event', 'contact', 'mailto');
	});

	// Track the use of the mobile call link.
	// Bind a click event on the call link.
	$('a[href^=tel]').click(function(e) {
		// Log the use to google.
		ga('send', 'event', 'contact', 'tel');
	});	
});