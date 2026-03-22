document.addEventListener('DOMContentLoaded', function () {
  const hobbyMenu = document.getElementById('hobbyMenu');
  const hobbiesSection = document.getElementById('hobbies');

  if (hobbyMenu && hobbiesSection) {
    hobbyMenu.addEventListener('click', function (event) {
      event.preventDefault();
      hobbiesSection.classList.toggle('hidden');
    });
  }
});
