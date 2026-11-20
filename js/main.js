/* ============================================================
   M. M. JOSHI EYE INSTITUTE — main.js
   Author: Rohan Laxani (Interview Assignment)
   Features: Sticky header, mobile menu, smooth scroll,
             counter animation, form validation,
             active nav, scroll reveal
   ============================================================ */

(function () {
  'use strict';

  /* ======================================================
     1. STICKY HEADER — adds shadow on scroll
     ====================================================== */
  const header = document.getElementById('header');

  function handleHeaderScroll() {
    if (window.scrollY > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleHeaderScroll, { passive: true });
  handleHeaderScroll(); // run once on load

  /* ======================================================
     2. MOBILE HAMBURGER MENU — toggle open/close
     ====================================================== */
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');

  function closeMenu() {
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    navLinks.classList.remove('open');
    document.body.style.overflow = '';
  }

  function openMenu() {
    hamburger.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    navLinks.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  hamburger.addEventListener('click', function () {
    if (navLinks.classList.contains('open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close menu on nav link click
  navLinks.querySelectorAll('.nav-link').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  // Close menu on outside click
  document.addEventListener('click', function (e) {
    if (
      navLinks.classList.contains('open') &&
      !navLinks.contains(e.target) &&
      !hamburger.contains(e.target)
    ) {
      closeMenu();
    }
  });

  // Close menu on resize to desktop
  window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
      closeMenu();
    }
  });

  /* ======================================================
     3. SMOOTH SCROLL — all anchor nav links
     ====================================================== */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();

      const headerHeight = header.getBoundingClientRect().height;
      const targetTop = target.getBoundingClientRect().top + window.scrollY - headerHeight - 10;

      window.scrollTo({
        top: targetTop,
        behavior: 'smooth'
      });
    });
  });

  /* ======================================================
     4. COUNTER ANIMATION — counts up when in view
     ====================================================== */
  function formatIndian(num) {
    // Format as Indian number system (e.g., 1,00,000)
    var str = num.toString();
    if (str.length <= 3) return str;
    var last3 = str.slice(-3);
    var rest   = str.slice(0, -3);
    var formatted = rest.replace(/\B(?=(\d{2})+(?!\d))/g, ',');
    return formatted + ',' + last3;
  }

  function animateCounter(el) {
    var target  = parseInt(el.getAttribute('data-target'), 10);
    var suffix  = el.getAttribute('data-suffix') || '';
    var fmt     = el.getAttribute('data-format');
    var duration = 1800; // ms
    var start    = null;
    var startVal = 0;

    function easeOut(t) {
      return 1 - Math.pow(1 - t, 3);
    }

    function step(timestamp) {
      if (!start) start = timestamp;
      var elapsed  = timestamp - start;
      var progress = Math.min(elapsed / duration, 1);
      var eased    = easeOut(progress);
      var current  = Math.floor(eased * (target - startVal) + startVal);

      if (fmt === 'indian') {
        el.textContent = formatIndian(current) + suffix;
      } else {
        el.textContent = current.toLocaleString() + suffix;
      }

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        // Final value
        if (fmt === 'indian') {
          el.textContent = formatIndian(target) + suffix;
        } else {
          el.textContent = target.toLocaleString() + suffix;
        }
      }
    }

    requestAnimationFrame(step);
  }

  var counters = document.querySelectorAll('.stat-number[data-target]');
  var counterObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  counters.forEach(function (counter) {
    counterObserver.observe(counter);
  });

  /* ======================================================
     5. FORM VALIDATION — inline errors + success state
     ====================================================== */
  var form      = document.getElementById('appointmentForm');
  var formSuccess = document.getElementById('formSuccess');

  function showError(fieldId, message) {
    var field = document.getElementById(fieldId);
    var error = document.getElementById(fieldId + 'Error');
    if (field) field.classList.add('error');
    if (field) field.classList.remove('success');
    if (error) error.textContent = message;
    return false;
  }

  function clearError(fieldId) {
    var field = document.getElementById(fieldId);
    var error = document.getElementById(fieldId + 'Error');
    if (field) {
      field.classList.remove('error');
      field.classList.add('success');
    }
    if (error) error.textContent = '';
    return true;
  }

  function validateFullName() {
    var val = document.getElementById('fullName').value.trim();
    if (!val) return showError('fullName', 'Full name is required.');
    if (val.length < 2) return showError('fullName', 'Name must be at least 2 characters.');
    if (!/^[a-zA-Z\s.'-]+$/.test(val)) return showError('fullName', 'Please enter a valid name.');
    return clearError('fullName');
  }

  function validatePhone() {
    var val = document.getElementById('phone').value.trim();
    if (!val) return showError('phone', 'Phone number is required.');
    if (!/^\d{10}$/.test(val)) return showError('phone', 'Please enter a valid 10-digit mobile number.');
    return clearError('phone');
  }

  function validateEmail() {
    var val = document.getElementById('email').value.trim();
    if (!val) {
      // Email is optional — clear any previous errors
      var field = document.getElementById('email');
      var error = document.getElementById('emailError');
      if (field) { field.classList.remove('error', 'success'); }
      if (error) error.textContent = '';
      return true;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) return showError('email', 'Please enter a valid email address.');
    return clearError('email');
  }

  function validateSpecialty() {
    var val = document.getElementById('specialty').value;
    if (!val) return showError('specialty', 'Please select a specialty.');
    return clearError('specialty');
  }

  function validateReason() {
    var val = document.getElementById('reason').value.trim();
    if (!val) return showError('reason', 'Please describe your reason for visit.');
    if (val.length < 10) return showError('reason', 'Please provide more detail (at least 10 characters).');
    return clearError('reason');
  }

  // Live validation on blur
  var fields = ['fullName', 'phone', 'email', 'specialty', 'reason'];
  var validators = {
    fullName:  validateFullName,
    phone:     validatePhone,
    email:     validateEmail,
    specialty: validateSpecialty,
    reason:    validateReason
  };
  fields.forEach(function (id) {
    var el = document.getElementById(id);
    if (el) {
      el.addEventListener('blur', validators[id]);
      el.addEventListener('input', function () {
        // Clear error on input
        var errorEl = document.getElementById(id + 'Error');
        if (errorEl && errorEl.textContent) {
          validators[id]();
        }
      });
    }
  });

  // Phone: allow digits only
  var phoneInput = document.getElementById('phone');
  if (phoneInput) {
    phoneInput.addEventListener('input', function () {
      this.value = this.value.replace(/\D/g, '').slice(0, 10);
    });
  }

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var valid =
        validateFullName() &
        validatePhone() &
        validateEmail() &
        validateSpecialty() &
        validateReason();

      if (!valid) {
        // Scroll to first error
        var firstError = form.querySelector('.form-input.error');
        if (firstError) {
          firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
          firstError.focus();
        }
        return;
      }

      // Simulate submission with loading state
      var submitBtn = document.getElementById('submitBtn');
      submitBtn.disabled = true;
      submitBtn.textContent = 'Submitting…';

      setTimeout(function () {
        // Generate random 6-digit reference number
        var refNum = 'MMJ-' + Math.floor(100000 + Math.random() * 900000);

        // Show success state
        form.style.display = 'none';
        formSuccess.style.display = 'flex';
        document.getElementById('refNumber').textContent = 'Ref. No: ' + refNum;

        submitBtn.disabled = false;
        submitBtn.innerHTML =
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M19 4H5c-1.1 0-2 .9-2 2v14l4-4h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z"/></svg>Request Appointment';
      }, 1200);
    });
  }

  /* ======================================================
     6. ACTIVE NAV HIGHLIGHTING — current section in view
     ====================================================== */
  var sections = document.querySelectorAll('section[id], main > section');
  var navItems = document.querySelectorAll('.nav-link[href^="#"]');

  function setActiveNav() {
    var scrollPos = window.scrollY + header.getBoundingClientRect().height + 60;
    var current   = '';

    sections.forEach(function (section) {
      if (section.offsetTop <= scrollPos) {
        current = '#' + section.getAttribute('id');
      }
    });

    navItems.forEach(function (link) {
      link.classList.remove('active');
      if (link.getAttribute('href') === current) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', setActiveNav, { passive: true });
  setActiveNav();

  /* ======================================================
     7. SCROLL REVEAL — fade-in on scroll
     ====================================================== */
  var revealElements = document.querySelectorAll('.reveal');
  var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  revealElements.forEach(function (el) {
    revealObserver.observe(el);
  });

  /* ======================================================
     GLOBAL — Reset form function (called inline)
     ====================================================== */
  window.resetForm = function () {
    if (form) {
      form.reset();
      form.style.display = 'flex';
      formSuccess.style.display = 'none';

      // Clear all validation states
      form.querySelectorAll('.form-input').forEach(function (el) {
        el.classList.remove('error', 'success');
      });
      form.querySelectorAll('.form-error').forEach(function (el) {
        el.textContent = '';
      });
    }
  };

})();
