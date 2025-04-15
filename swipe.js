let isSwiping = false;
let toggledCheckboxes = new Set();

// Verhindert Pull-to-Refresh auf iOS
// was durch Swipen versehentlich audgelöst werden kann
document.addEventListener('touchmove', (e) => {
  if (!e.target.closest('.checkbox-container')) {
    e.preventDefault();
  }
}, { passive: false });

const container = document.getElementById('checkboxContainer');

container.addEventListener('touchstart', (e) => {
  isSwiping = true;
  toggledCheckboxes.clear();
  handleCheckboxToggle(e.touches[0]);
}, {passive: true});

container.addEventListener('touchmove', (e) => {
  if (isSwiping) {
    handleCheckboxToggle(e.touches[0]);
  }
}, {passive: true});

container.addEventListener('touchend', () => {
  isSwiping = false;
});

// Klick (Tap) Event für einzelne Checkboxes
container.addEventListener('click', (e) => {
  const target = e.target.closest('input[type="checkbox"]');
  if (target) {
    target.checked = !target.checked;
  }
});

// Swipe-Handler
function handleCheckboxToggle(touch) {
  const target = document.elementFromPoint(touch.clientX, touch.clientY);
  
  if (target && target.type === 'checkbox' && !toggledCheckboxes.has(target)) {
    target.checked = !target.checked;
    toggledCheckboxes.add(target);  // Nur einmal pro Swipe
    // console.log(`Checkbox ${target.id} geändert: ${target.checked ? 'AN' : 'AUS'}`);
  }
}
