window.onload = function() {
    window.addEventListener("resize", scaleBody);
    scaleBody(); // once at start
	if (isMobileDevice()) deleteTableKeyboard(); // wenn mobil dannn Tabelle obendrüber ausblenden
	if (isMobileDevice()) document.getElementById ("Manual").style.fontSize = "1.3vw";  
}
