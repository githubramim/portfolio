/* ====================================
   Portfolio App - JavaScript
   ==================================== */

$(document).ready(function () {

	// ============ Dark Mode Toggle ============
	const darkModeToggle = $('#darkModeToggle');
	const htmlElement = $('html');
	const body = $('body');

	// Check if user has a saved dark mode preference
	const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
	if (isDarkMode) {
		body.addClass('dark-mode');
		darkModeToggle.html('<i class="fas fa-sun"></i>');
	}

	// Toggle dark mode
	darkModeToggle.on('click', function () {
		body.toggleClass('dark-mode');

		if (body.hasClass('dark-mode')) {
			localStorage.setItem('darkMode', 'enabled');
			darkModeToggle.html('<i class="fas fa-sun"></i>');
		} else {
			localStorage.setItem('darkMode', 'disabled');
			darkModeToggle.html('<i class="fas fa-moon"></i>');
		}
	});

	// ============ Active Nav Link on Scroll ============
	$(window).on('scroll', function () {
		let scrollPos = $(window).scrollTop();

		$('section').each(function () {
			let sectionTop = $(this).offset().top - 100;
			let sectionId = $(this).attr('id');

			if (scrollPos >= sectionTop) {
				$('.nav-link').removeClass('active');
				$('a[href="#' + sectionId + '"]').addClass('active');
			}
		});
	});

	// Smooth scroll for nav links
	$('.nav-link').on('click', function (e) {
		e.preventDefault();

		let target = $(this).attr('href');
		let targetOffset = $(target).offset().top - 80;

		$('html, body').animate({
			scrollTop: targetOffset
		}, 800);

		// Close mobile menu
		if (window.innerWidth < 992) {
			$('.navbar-collapse').collapse('hide');
		}
	});

	// ============ Live Time Update for Bangladesh ============
	function updateBangladeshTime() {
		// Bangladesh timezone is UTC+6
		const bangladeshTime = new Date().toLocaleString('en-US', {
			timeZone: 'Asia/Dhaka',
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit',
			hour12: true
		});

		const bangladeshDate = new Date().toLocaleString('en-US', {
			timeZone: 'Asia/Dhaka',
			weekday: 'long',
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});

		$('#timeDisplay').text(bangladeshTime);
		$('#dateDisplay').text(bangladeshDate);
	}

	// Update time immediately and then every second
	updateBangladeshTime();
	setInterval(updateBangladeshTime, 1000);

	// ============ Scroll to Top Button ============
	const scrollTopBtn = $('<button id="scrollTopBtn" class="btn btn-primary rounded-circle position-fixed" style="bottom: 30px; right: 30px; width: 50px; height: 50px; display: none; z-index: 99;"><i class="fas fa-arrow-up"></i></button>');
	$('body').append(scrollTopBtn);

	$(window).on('scroll', function () {
		if ($(this).scrollTop() > 300) {
			scrollTopBtn.fadeIn();
		} else {
			scrollTopBtn.fadeOut();
		}
	});

	scrollTopBtn.on('click', function (e) {
		e.preventDefault();
		$('html, body').animate({ scrollTop: 0 }, 800);
	});

	// ============ Navbar Scroll Effect ============
	$(window).on('scroll', function () {
		const navbar = $('#navbar');
		if ($(this).scrollTop() > 50) {
			navbar.css('box-shadow', '0 4px 8px rgba(0, 0, 0, 0.2)');
		} else {
			navbar.css('box-shadow', 'none');
		}
	});

});
