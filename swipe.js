let isSwiping = false;
let toggledCheckboxes = new Set();

const body = document.getElementById('body');
body.addEventListener('click', (e) => {
  // body.style.backgroundColor = "red";
});

const container = document.getElementById('checkboxContainer');

// draw braille with finger touch
container.addEventListener('touchstart', (e) => {
  isSwiping = true;
  toggledCheckboxes.clear();
  handleCheckboxToggle(e.touches[0]);
}, { passive: true });

container.addEventListener('touchmove', (e) => {
  if (isSwiping) {
    handleCheckboxToggle(e.touches[0]);
  }
}, { passive: true });

container.addEventListener('touchend', (e) => {
  if (isSwiping) {
    isSwiping = false;

    grosseAuslesen();
  }
  // Tap: unterdrücke nachfolgenden Click
  // Sonst wird das Zeichen doppelt ausgelesen
  // oder der erste Klick nach dem Wischen nicht erkannt
  e.preventDefault();
}, { passive: false }); // <- wichtig! Nur so wirkt preventDefault()

// Klick (Tap) Event für einzelne Checkboxes
container.addEventListener('click', (e) => {
  const target = e.target.closest('input[type="checkbox"]');
  if (!isSwiping && target) {
    target.checked = !target.checked;
  }
});

// draw braille with mouse
container.addEventListener('mousedown', (e) => {
  isSwiping = true;
  toggledCheckboxes.clear();
  handleCheckboxToggle(e);
});

container.addEventListener('mousemove', (e) => {
  if (isSwiping) {
    handleCheckboxToggle(e);
  }
});

// event auf das document nicht nur container
// Wischer nach außerhalb würden sonst kein Ende mehr finden
document.addEventListener('mouseup', () => {
  if (isSwiping) {
    isSwiping = false;
    grosseAuslesen();
  }
});

// Swipe-Handler
function handleCheckboxToggle(touch) {
  const target = document.elementFromPoint(touch.clientX, touch.clientY);

  if (target && target.type === 'checkbox' && !toggledCheckboxes.has(target)) {
    target.checked = !target.checked;
    toggledCheckboxes.add(target);  // Nur einmal pro Swipe
  }
}
