// Form Validation
function validateEmail(email) {
	const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return re.test(email);
}

function showError(field, message) {
	const input = document.getElementById(field);
	const error = document.getElementById(`${field}-error`);

	input.classList.add('error');
	error.classList.add('visible');
	error.textContent = message;
}

function clearError(field) {
	const input = document.getElementById(field);
	const error = document.getElementById(`${field}-error`);

	input.classList.remove('error');
	error.classList.remove('visible');
}

function validateForm() {
	let isValid = true;

	// Clear all previous errors
	['name', 'email', 'service', 'message'].forEach(clearError);

	// Validate name
	const name = document.getElementById('name').value.trim();
	if (name.length < 2) {
		showError('name', 'Please enter your name (at least 2 characters)');
		isValid = false;
	}

	// Validate email
	const email = document.getElementById('email').value.trim();
	if (!validateEmail(email)) {
		showError('email', 'Please enter a valid email address');
		isValid = false;
	}

	// Validate service
	const service = document.getElementById('service').value;
	if (!service) {
		showError('service', 'Please select a service');
		isValid = false;
	}

	// Validate message
	const message = document.getElementById('message').value.trim();
	if (message.length < 10) {
		showError('message', 'Please provide project details (at least 10 characters)');
		isValid = false;
	}

	return isValid;
}

// Contact Form Handler
function initContactForm() {
	const form = document.getElementById('contactForm');
	const result = document.getElementById('result');
	const submitBtn = form.querySelector('.btn-submit');
	const submitText = document.getElementById('submit-text');

	if (!form) return;

	// Add real-time validation
	['name', 'email', 'service', 'message'].forEach(field => {
		const input = document.getElementById(field);
		input.addEventListener('blur', () => {
			// Validate on blur
			if (field === 'name' && input.value.trim().length < 2) {
				showError(field, 'Please enter your name (at least 2 characters)');
			} else if (field === 'email' && !validateEmail(input.value.trim())) {
				showError(field, 'Please enter a valid email address');
			} else if (field === 'service' && !input.value) {
				showError(field, 'Please select a service');
			} else if (field === 'message' && input.value.trim().length < 10) {
				showError(field, 'Please provide project details (at least 10 characters)');
			} else {
				clearError(field);
			}
		});

		// Clear error on input
		input.addEventListener('input', () => clearError(field));
	});

	form.addEventListener('submit', async function (e) {
		e.preventDefault();

		// Validate form
		if (!validateForm()) {
			result.innerHTML = "Please fix the errors above";
			result.style.background = '#fee2e2';
			result.style.color = '#991b1b';
			result.style.display = 'block';
			setTimeout(() => {
				result.style.display = 'none';
			}, 3000);
			return;
		}

		// Show loading state
		submitBtn.disabled = true;
		submitText.innerHTML = '<span class="loading-spinner"></span> Sending...';
		result.style.display = 'none';

		// Get form data
		const formData = new FormData(form);

		// Get API key from data attribute
		const apiKey = form.dataset.web3formsKey;
		formData.append('access_key', apiKey);

		const object = Object.fromEntries(formData);
		const json = JSON.stringify(object);

		try {
			const response = await fetch('https://api.web3forms.com/submit', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json'
				},
				body: json
			});

			const data = await response.json();

			if (response.ok && response.status === 200) {
				result.innerHTML = "✓ Message sent successfully! I'll get back to you soon.";
				result.style.background = '#d1fae5';
				result.style.color = '#065f46';
				result.style.display = 'block';
				form.reset();
			} else {
				console.error('Form submission error:', data);
				result.innerHTML = data.message || "Something went wrong. Please try again.";
				result.style.background = '#fee2e2';
				result.style.color = '#991b1b';
				result.style.display = 'block';
			}
		} catch (error) {
			console.error('Form submission error:', error);
			result.innerHTML = "Network error. Please check your connection and try again.";
			result.style.background = '#fee2e2';
			result.style.color = '#991b1b';
			result.style.display = 'block';
		} finally {
			// Reset button state
			submitBtn.disabled = false;
			submitText.textContent = 'Send Message';

			// Hide result after 5 seconds
			setTimeout(() => {
				result.style.display = 'none';
			}, 5000);
		}
	});
}

// Smooth Scroll for Anchor Links
function initSmoothScroll() {
	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
		anchor.addEventListener('click', function (e) {
			const href = this.getAttribute('href');

			// Skip if it's just "#"
			if (href === '#') {
				e.preventDefault();
				return;
			}

			const target = document.querySelector(href);
			if (target) {
				e.preventDefault();
				target.scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				});

				// Close mobile menu if open
				const navLinks = document.querySelector('.nav-links');
				if (navLinks.classList.contains('active')) {
					navLinks.classList.remove('active');
					const toggle = document.querySelector('.mobile-menu-toggle');
					toggle.setAttribute('aria-expanded', 'false');
				}
			}
		});
	});
}

// Mobile Menu Toggle
function initMobileMenu() {
	const toggle = document.querySelector('.mobile-menu-toggle');
	const navLinks = document.querySelector('.nav-links');

	if (!toggle || !navLinks) return;

	toggle.addEventListener('click', () => {
		const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
		toggle.setAttribute('aria-expanded', !isExpanded);
		navLinks.classList.toggle('active');
	});

	// Close menu when clicking outside
	document.addEventListener('click', (e) => {
		if (!toggle.contains(e.target) && !navLinks.contains(e.target)) {
			navLinks.classList.remove('active');
			toggle.setAttribute('aria-expanded', 'false');
		}
	});

	// Close menu on escape key
	document.addEventListener('keydown', (e) => {
		if (e.key === 'Escape' && navLinks.classList.contains('active')) {
			navLinks.classList.remove('active');
			toggle.setAttribute('aria-expanded', 'false');
			toggle.focus();
		}
	});
}

// Testimonial Carousel
let currentSlideIndex = 1;

function showSlide(n) {
	let slides = document.getElementsByClassName("testimonial-slide");
	let dots = document.getElementsByClassName("dot");

	if (!slides.length) return;

	if (n > slides.length) { currentSlideIndex = 1 }
	if (n < 1) { currentSlideIndex = slides.length }

	for (let i = 0; i < slides.length; i++) {
		slides[i].classList.remove("active");
		slides[i].setAttribute('aria-hidden', 'true');
	}

	for (let i = 0; i < dots.length; i++) {
		dots[i].classList.remove("active");
		dots[i].setAttribute('aria-selected', 'false');
	}

	slides[currentSlideIndex - 1].classList.add("active");
	slides[currentSlideIndex - 1].setAttribute('aria-hidden', 'false');
	dots[currentSlideIndex - 1].classList.add("active");
	dots[currentSlideIndex - 1].setAttribute('aria-selected', 'true');
}

function changeSlide(n) {
	showSlide(currentSlideIndex += n);
}

function currentSlide(n) {
	showSlide(currentSlideIndex = n);
}

function initCarousel() {
	// Initialize carousel
	showSlide(currentSlideIndex);

	// Auto-advance carousel every 8 seconds
	setInterval(() => {
		changeSlide(1);
	}, 8000);

	// Add keyboard navigation for dots
	const dots = document.querySelectorAll('.dot');
	dots.forEach((dot, index) => {
		dot.addEventListener('keydown', (e) => {
			if (e.key === 'Enter' || e.key === ' ') {
				e.preventDefault();
				currentSlide(index + 1);
			}
		});
	});
}

// Theme Toggle
function initTheme() {
	const toggleBtn = document.querySelector('.theme-toggle');
	if (!toggleBtn) return;

	const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
	const currentTheme = localStorage.getItem('theme');

	// Icons
	const moonIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>';
	const sunIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>';

	if (currentTheme === 'dark' || (!currentTheme && prefersDarkScheme.matches)) {
		document.documentElement.setAttribute('data-theme', 'dark');
		toggleBtn.innerHTML = sunIcon;
	} else {
		document.documentElement.removeAttribute('data-theme');
		toggleBtn.innerHTML = moonIcon;
	}

	toggleBtn.addEventListener('click', function () {
		let theme = 'light';
		if (!document.documentElement.hasAttribute('data-theme')) {
			document.documentElement.setAttribute('data-theme', 'dark');
			toggleBtn.innerHTML = sunIcon;
			theme = 'dark';
		} else {
			document.documentElement.removeAttribute('data-theme');
			toggleBtn.innerHTML = moonIcon;
		}
		localStorage.setItem('theme', theme);
	});
}

// Scroll Animations
function initScrollAnimations() {
	const observerOptions = {
		threshold: 0.1,
		rootMargin: "0px 0px -50px 0px"
	};

	const observer = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('is-visible');
				observer.unobserve(entry.target); // Only animate once
			}
		});
	}, observerOptions);

	const animatedElements = document.querySelectorAll('.animate-on-scroll');
	animatedElements.forEach(el => observer.observe(el));
}

// Initialize all functionality when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
	initContactForm();
	initSmoothScroll();
	initCarousel();
	initMobileMenu();
	initTheme();
	initScrollAnimations();
});
