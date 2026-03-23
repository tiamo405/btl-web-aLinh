document.addEventListener('DOMContentLoaded', function () {
  const popupButtons = document.querySelectorAll('[data-popup-target]');
  const closeButtons = document.querySelectorAll('[data-popup-close]');
  const homeButton = document.querySelector('[data-home]');
  const popups = document.querySelectorAll('.popup');

  function closeAllPopups() {
    popups.forEach(function (popup) {
      popup.classList.remove('show');
      popup.setAttribute('aria-hidden', 'true');
    });
    document.body.classList.remove('no-scroll');
  }

  function openPopup(id) {
    const popup = document.getElementById(id);
    if (!popup) {
      return;
    }
    closeAllPopups();
    popup.classList.add('show');
    popup.setAttribute('aria-hidden', 'false');
    document.body.classList.add('no-scroll');
  }

  popupButtons.forEach(function (button) {
    button.addEventListener('click', function (event) {
      event.preventDefault();
      openPopup(button.getAttribute('data-popup-target'));
    });
  });

  closeButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      closeAllPopups();
    });
  });

  if (homeButton) {
    homeButton.addEventListener('click', function (event) {
      event.preventDefault();
      closeAllPopups();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeAllPopups();
    }
  });
});
