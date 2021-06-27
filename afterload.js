window.onload = function() {
  window.addEventListener("resize", scaleBrailleline);
  window.addEventListener("resize", checkKeyboard);
  if (isMobileDevice()) hideTableKeyboard(); // wenn mobil dannn Tabelle obendrüber ausblenden
}
