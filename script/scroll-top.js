
	$(document).ready(function() {
		$("#img-top").click(function(event) {
			event.preventDefault();
		$("html, body").animate({ scrollTop: 0 }, "slow");
			return false;

			});

	});