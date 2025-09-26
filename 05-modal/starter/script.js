// 'use strict';

// console.log('=== MODAL DEVELOPMENT: FOUNDATION & CLASS TOGGLING ===');

// console.log('Modal project ready!');

// const modalEl = document.querySelector('.modal');
// const overlayEl = document.querySelector('.overlay');
// const btnCloseModalEl = document.querySelector('.close-modal');
// const btnsOpenModalEl = document.querySelectorAll('.show-modal');
// console.log('Open buttons:', btnsOpenModalEl.length);

// const openModal = function () {
//   modalEl.classList.remove('hidden');
//   overlayEl.classList.remove('hidden');
// };

// const closeModal = function () {
//   modalEl.classList.add('hidden');
//   overlayEl.classList.add('hidden');
// };

// btnsOpenModalEl.forEach(btn => btn.addEventListener('click', openModal));
// btnCloseModalEl.addEventListener('click', closeModal);
// overlayEl.addEventListener('click', closeModal);

// 'use strict';

// const modalElf = document.querySelector('.modal');
// const overlayElf = document.querySelector('.overlay');
// const btnCloseModalElf = document.querySelector('.close-modal');
// const btnsOpenModalElf = document.querySelectorAll('.show-modal');

// const openModalf = function () {
//   modalEl.classList.remove('hidden');
//   overlayEl.classList.remove('hidden');
// };

// const closeModalf = function () {
//   modalElf.classList.add('hidden');
//   overlayElf.classList.add('hidden');
// };

// btnsOpenModalElf.forEach(btn => btn.addEventListener('click', openModal));
// btnCloseModalElf.addEventListener('click', closeModal);
// overlayElf.addEventListener('click', closeModal);

'use strict';

const modalElq = document.querySelector('.modal');
const overlayElq = document.querySelector('.overlay');
const btnCloseModalElq = document.querySelector('.close-modal');
const btnsOpenModalElq = document.querySelectorAll('.show-modal');

const openModal = function () {
  modalEl.classList.remove('hidden');
  overlayEl.classList.remove('hidden');
};

const closeModalq = function () {
  modalEl.classList.add('hidden');
  overlayEl.classList.add('hidden');
};

btnsOpenModalEl.forEach(btn => btn.addEventListener('click', openModal));
btnCloseModalEl.addEventListener('click', closeModal);
overlayEl.addEventListener('click', closeModal);

console.log('=== MODAL DEVELOPMENT: KEYBOARD EVENTS & ADVANCED UX ===');
console.log('Enhanced modal development ready!');
console.log('Keyboard events test');

document.addEventListener('keydown', function (e) {
  console.log('Key pressed:', e);

  console.log('Key name:', e.key);
});
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    console.log('ESC key pressed!');
  }
});
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modalEl.classList.contains('hidden')) {
    closeModal();
  }
});

document.addEventListener('keydown', function (e) {
  console.log(
    'Key pressed:',
    e.key,
    'Modal visible:',
    !modalEl.classList.contains('hidden')
  );

  if (e.key === 'Escape' && !modalEl.classList.contains('hidden')) {
    closeModal();
  }
});
let lastFocusedButtonq = null;

const openModals = function () {
  modalEl.classList.remove('hidden');
  overlayEl.classList.remove('hidden');
  modalEl.focus();
  lastFocusedButton = document.activeElement;
};

const closeModals = function () {
  modalEl.classList.add('hidden');
  overlayEl.classList.add('hidden');
  if (lastFocusedButton) {
    lastFocusedButton.focus();
  }
};

modalEl.setAttribute('role', 'dialog');
modalEl.setAttribute('aria-modal', 'true');
btnCloseModalEl.setAttribute('aria-label', 'Close modal');

('use strict');

const modalEl = document.querySelector('.modal');
const overlayEl = document.querySelector('.overlay');
const btnCloseModalEl = document.querySelector('.close-modal');
const btnsOpenModalEl = document.querySelectorAll('.show-modal');

let lastFocusedButton = null;

const openModalq = function () {
  modalEl.classList.remove('hidden');
  overlayEl.classList.remove('hidden');
  modalEl.focus();
  lastFocusedButton = document.activeElement;
};

const closeModal = function () {
  modalEl.classList.add('hidden');
  overlayEl.classList.add('hidden');
  if (lastFocusedButton) {
    lastFocusedButton.focus();
  }
};

btnsOpenModalEl.forEach(btn => btn.addEventListener('click', openModal));
btnCloseModalEl.addEventListener('click', closeModal);
overlayEl.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modalEl.classList.contains('hidden')) {
    closeModal();
  }
});

modalEl.setAttribute('role', 'dialog');
modalEl.setAttribute('aria-modal', 'true');
btnCloseModalEl.setAttribute('aria-label', 'Close modal');
