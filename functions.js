var totalPos = 1;
var selectedCharacter = 0;

var zellen = new Array();
zellen[0] = " "; // muss ein Leerzeichen sein sonst Fehler beim Löschen

var bit = new Array();
bit[0] = '000';
bit[1] = '100'; // oberster Punkt = kleinstes Bit
bit[2] = '010';
bit[3] = '110';
bit[4] = '001';
bit[5] = '101';
bit[6] = '011';
bit[7] = '111';
bit['000'] = '0';
bit['100'] = '1';
bit['010'] = '2';
bit['110'] = '3';
bit['001'] = '4';
bit['101'] = '5';
bit['011'] = '6';
bit['111'] = '7';

function loesch() {
  zellen = new Array();
  zellen[0] = " "; // muss ein Leerzeichen sein sonst Fehler beim Löschen
  totalPos = 1;
  ausgabe(1)
  writeToTextAusgabe();
}

// When the user clicks on <div>, open the popup
function openPopup() {
  var popup = document.getElementById("popup");
  popup.classList.toggle("show");
}

function ausgabe(drawPos) {
  screenpos = drawPos;
  var zeichen = zellen[drawPos - 1];
  var pu = [0, 0, 0, 0, 0, 0];
  if (bit[braillecode[zeichen].substr(0, 1)].charAt(0) == '1') pu[0] = 1;
  else pu[0] = 0;
  if (bit[braillecode[zeichen].substr(0, 1)].charAt(1) == '1') pu[1] = 1;
  else pu[1] = 0;
  if (bit[braillecode[zeichen].substr(0, 1)].charAt(2) == '1') pu[2] = 1;
  else pu[2] = 0;
  if (bit[braillecode[zeichen].substr(1, 1)].charAt(0) == '1') pu[3] = 1;
  else pu[3] = 0;
  if (bit[braillecode[zeichen].substr(1, 1)].charAt(1) == '1') pu[4] = 1;
  else pu[4] = 0;
  if (bit[braillecode[zeichen].substr(1, 1)].charAt(2) == '1') pu[5] = 1;
  else pu[5] = 0;

  for (var j = 0; j < 6; j++) {
    var bild = 'p' + screenpos + '_' + (j + 1);
    if (pu[j]) {
      document.getElementById(`checkbox${j + 1}small`).checked = true;
      
    } else {
      document.getElementById(`checkbox${j + 1}small`).checked = false;
    }
  }

  writeToTextAusgabe();
}

function klick(zelle, punkt) {
  var zeichen;
  var offset = zelle;
  var selectedCell = totalPos - 1;
  if (zelle == 9998) { // small checkboxes
    offset = selectedCell;
    if (selectedCharacter > 0) {
      offset = selectedCharacter;
    }
    zeichen = zellen[offset];
  } else {
    zeichen = zellen[offset];
  }

  var pu = [0, 0, 0, 0, 0, 0];
  if (bit[braillecode[zeichen].substr(0, 1)].charAt(0) == '1') pu[0] = 1;
  else pu[0] = 0;
  if (bit[braillecode[zeichen].substr(0, 1)].charAt(1) == '1') pu[1] = 1;
  else pu[1] = 0;
  if (bit[braillecode[zeichen].substr(0, 1)].charAt(2) == '1') pu[2] = 1;
  else pu[2] = 0;
  if (bit[braillecode[zeichen].substr(1, 1)].charAt(0) == '1') pu[3] = 1;
  else pu[3] = 0;
  if (bit[braillecode[zeichen].substr(1, 1)].charAt(1) == '1') pu[4] = 1;
  else pu[4] = 0;
  if (bit[braillecode[zeichen].substr(1, 1)].charAt(2) == '1') pu[5] = 1;
  else pu[5] = 0;

  if (pu[punkt - 1]) {
    pu[punkt - 1] = 0;
  } else {
    pu[punkt - 1] = 1;
  }

  var zeichen1, zeichen2;
  zeichen1 = bit[pu[0].toString() + pu[1].toString() + pu[2].toString()];
  zeichen2 = bit[pu[3].toString() + pu[4].toString() + pu[5].toString()];
  zellen[offset] = brailleback(zeichen1 + zeichen2);
  writeToTextAusgabe();
}

function grosseAuslesen() {
  selectedCharacter = totalPos;
  var pu = [0, 0, 0, 0, 0, 0];

  if (document.getElementById("checkbox1").checked) pu[0] = 1;
  else pu[0] = 0;
  if (document.getElementById("checkbox2").checked) pu[1] = 1;
  else pu[1] = 0;
  if (document.getElementById("checkbox3").checked) pu[2] = 1;
  else pu[2] = 0;
  if (document.getElementById("checkbox4").checked) pu[3] = 1;
  else pu[3] = 0;
  if (document.getElementById("checkbox5").checked) pu[4] = 1;
  else pu[4] = 0;
  if (document.getElementById("checkbox6").checked) pu[5] = 1;
  else pu[5] = 0;

  // reset big6
  document.getElementById("checkbox1").checked = false;
  document.getElementById("checkbox2").checked = false;
  document.getElementById("checkbox3").checked = false;
  document.getElementById("checkbox4").checked = false;
  document.getElementById("checkbox5").checked = false;
  document.getElementById("checkbox6").checked = false;

  var zeichen1, zeichen2;
  zeichen1 = bit[pu[0].toString() + pu[1].toString() + pu[2].toString()];
  zeichen2 = bit[pu[3].toString() + pu[4].toString() + pu[5].toString()];
  eingabe(zeichen1 + zeichen2);
  scrollTextToEnd();
}

function aend(zelle) {
  if (zelle < 1) {
    return;
  }
  var wert = zellen[zelle];

  if (wert == 'a') wert = '1'; // Ziffern
  else if (wert == '1') wert = 'a';
  else if (wert == 'b') wert = '2';
  else if (wert == '2') wert = 'b';
  else if (wert == 'en') wert = 'c';
  else if (wert == 'c') wert = '3';
  else if (wert == '3') wert = 'en';
  else if (wert == 'd') wert = '4';
  else if (wert == '4') wert = 'd';
  else if (wert == 'e') wert = '5';
  else if (wert == '5') wert = 'e';
  else if (wert == 'f') wert = '6';
  else if (wert == '6') wert = 'falls';
  else if (wert == 'falls') wert = 'f';
  else if (wert == 'g') wert = '7';
  else if (wert == '7') wert = 'g';
  else if (wert == 'h') wert = '8';
  else if (wert == '8') wert = 'heit';
  else if (wert == 'heit') wert = 'h';
  else if (wert == 'i') wert = '9';
  else if (wert == '9') wert = 'i';
  else if (wert == 'j') wert = '0';
  else if (wert == '0') wert = 'ion';
  else if (wert == 'ion') wert = 'j';

  else if (wert == ',') wert = '1.'; // Ordnungszahlen, Laute und Satzzeichen
  else if (wert == '1.') wert = ',';
  else if (wert == 'be') wert = '2.';
  else if (wert == '2.') wert = ';';
  else if (wert == ';') wert = 'be';
  else if (wert == 'al') wert = '3.';
  else if (wert == '3.') wert = ':';
  else if (wert == ':') wert = 'al';
  else if (wert == 'un') wert = '4.';
  else if (wert == '4.') wert = 'un';
  else if (wert == 'or') wert = '5.';
  else if (wert == '5.') wert = '?';
  else if (wert == '?') wert = 'or';
  else if (wert == 'an') wert = '6.';
  else if (wert == '6.') wert = '!';
  else if (wert == '!') wert = 'an';
  else if (wert == 'eh') wert = '7.';
  else if (wert == '7.') wert = '(=)';
  else if (wert == '(=)') wert = '(';
  else if (wert == '(') wert = '=';
  else if (wert == '=') wert = ')';
  else if (wert == ')') wert = 'eh';
  else if (wert == 'te') wert = '8.';
  else if (wert == '8.') wert = '\xbb'; // Anfang Anführungszeichen
  else if (wert == '\xbb') wert = 'te';
  else if (wert == 'in') wert = '9.';
  else if (wert == '9.') wert = 'in';
  else if (wert == 'ar') wert = '0.';
  else if (wert == '0.') wert = '\xab'; // Ende Anführungszeichen
  else if (wert == '\xab') wert = 'ar';

  else if (wert == 'c') wert = 'en'; // seltene Buchstaben mit Lauten
  else if (wert == 'en') wert = 'c';
  else if (wert == 'q') wert = 'll';
  else if (wert == 'll') wert = 'q';
  else if (wert == 'x') wert = 'mm';
  else if (wert == 'mm') wert = 'nis';
  else if (wert == 'nis') wert = 'x';
  else if (wert == 'y') wert = 'el';
  else if (wert == 'el') wert = 'y';
  else if (wert == 'ss') wert = '\xdf'; // ß
  else if (wert == '\xdf') wert = 'sam';
  else if (wert == 'sam') wert = 'ss';

  else if (wert == '#') wert = 'ich'; // Sonderzeichen mit Lauten
  else if (wert == 'ich') wert = '#';
  else if (wert == 'ck') wert = '$';
  else if (wert == '$') wert = 'ck';
  else if (wert == 'es') wert = '%';
  else if (wert == '%') wert = 'es';
  else if (wert == 'ge') wert = '&';
  else if (wert == '&') wert = 'ge';
  else if (wert == 'ver') wert = '-';
  else if (wert == '-') wert = 'ver';
  else if (wert == 'ach') wert = '<';
  else if (wert == '<') wert = 'ach';
  else if (wert == 'ig') wert = '>';
  else if (wert == '>') wert = 'ig';
  else if (wert == 'lich') wert = '_';
  else if (wert == '_') wert = 'lich';

  else if (wert == 'k') wert = 'keit'; // Silben mit Buchstaben
  else if (wert == 'keit') wert = 'k';
  else if (wert == 'm') wert = 'mal';
  else if (wert == 'mal') wert = 'm';
  else if (wert == 'u') wert = 'ung';
  else if (wert == 'ung') wert = 'u';
  else if (wert == 'sch') wert = 'schaft';
  else if (wert == 'schaft') wert = 'sch';
  else if (wert == 'w') wert = 'wärts';
  else if (wert == 'wärts') wert = 'w';

  zellen[zelle] = wert;
  writeToTextAusgabe();
}

function lastloe() {
  if (totalPos == 1) return;
  totalPos--;
  selectedCharacter = totalPos - 1;
  zellen.pop();
  // resets the output of the smaller checkboxes
  ausgabe(totalPos);
  writeToTextAusgabe();
}

function eingabe(graf) {
  var zeichen = brailleback(graf);
  zellen[totalPos] = zeichen;
  totalPos++;
  selectedCharacter = totalPos - 1;
  ausgabe(totalPos);
}

function zifferncode(graf) {
  if (graf == "00") return '0';
  var ziff = "";
  var code = bit[graf.charAt(0)] + bit[graf.charAt(1)] + bit[graf.charAt(2)];
  for (var i = 0; i < 9; i++) {
    if (code.charAt(i) == '1') ziff += (i + 1).toString();
  }
  return ziff;
}

var tasten = new Array;
tasten = [
  ['S', 0, 0],
  ['D', 0, 0],
  ['F', 0, 0],
  ['J', 0, 0],
  ['K', 0, 0],
  ['L', 0, 0],
  [' ', 0, 0]
];

function tastbewegung(e, r) // r fuer Richtung:     'd' down    'u' up
{
  if (e.keyCode == 27 && r == 'u') loesch(); // ESC
  if (e.keyCode == 8 && r == 'u') lastloe(); // Backspace
  if (e.key == '<' && r == 'u') aend(selectedCharacter); // <

  var weiter = String.fromCharCode(e.keyCode);
  if (/[SDFJKL ]/.test(weiter)) {
    for (var i = 0; i < 7; i++) {
      if (weiter == tasten[i][0]) {
        if (r == 'd') tasten[i][1] = tasten[i][2] = 1;
        else if (r == 'u') tasten[i][1] = 0;
      }
    }

    if (!tasten[0][1] && !tasten[1][1] && !tasten[2][1] && !tasten[3][1] && !tasten[4][1] && !tasten[5][1] && !tasten[6][1]) {
      var links = 0;
      if (tasten[2][2]) links += 1;
      if (tasten[1][2]) links += 2;
      if (tasten[0][2]) links += 4;
      var rechts = 0;
      if (tasten[3][2]) rechts = rechts + 1;
      if (tasten[4][2]) rechts = rechts + 2;
      if (tasten[5][2]) rechts = rechts + 4;
      weiter = links + "" + rechts;
      eingabe(weiter);
      scrollTextToEnd();
      tasten[0][2] = tasten[1][2] = tasten[2][2] = tasten[3][2] = tasten[4][2] = tasten[5][2] = tasten[6][2] = 0;
    }
  }
}

function writeToTextAusgabe() {
  var textAusgabeDiv = document.getElementById("textausgabe");
  textAusgabeDiv.innerHTML = "";
  let textDiv = "";
  let textNode = "";
  for (let stelle = 1; stelle < totalPos; stelle++) {
    var zeichen = zellen[stelle];
    if (typeof zeichen !== 'undefined'){
      textDiv = document.createElement("div");
      textNode = document.createTextNode(zeichen);
      if (zeichen == " ") {
        textDiv.classList.add("space");
      }
      if (stelle == selectedCharacter) {
        textDiv.classList.add("selected-character")
      }
      textDiv.appendChild(textNode);
      textDiv.setAttribute("onclick","selectCharacter(" + stelle + ")");
      textAusgabeDiv.appendChild(textDiv);
    }
  }
}

function selectCharacter(stelle) {
  selectedCharacter = stelle;
  ausgabe(selectedCharacter + 1);
}

function scrollTextToEnd() {
  var textAusgabeDiv = document.getElementById("textausgabe");
  textAusgabeDiv.scrollTop = textAusgabeDiv.scrollHeight;
}

const convertHeight = () => {
  const height = window.innerHeight;
  const body = document.getElementById("body");
  body.style.height = `calc(${height}px - 12vmin)`;
  const popup = document.getElementById("popup");
  popup.style.height = `calc(${height}px - 12vmin)`;
};
window.addEventListener("resize", convertHeight);
window.addEventListener("DOMContentLoaded", convertHeight);

// bei Klick in die leere Textausgabe selektiere das letzte Zeichen
function selectLastCharacter(event) {
  const textAusgabeDiv = document.getElementById("textausgabe");
  if (event.target === textAusgabeDiv) {
    selectCharacter(totalPos - 1);
  }
}

function copyText() {
  // verbinde alle Zellen ohne Komma und entferne das erste leere Zeichen
  if (zellen.length < 2) {
    return
  }
  const textCopy = zellen.join('').slice(1);
  if (textCopy.trim().length === 0) {
    return
  }
  if (window.isSecureContext) {
    navigator.clipboard.writeText(textCopy);
    alert("Text ist kopiert.\n\n" + textCopy.substring(0,42) + " …");
  } else {
    console.error("Diese Seite ist nicht sicher (http oder localhost) und darf deshalb das Clipboard nicht benutzen. \n\nDas Clipboard würde enthalten:\n" + textCopy)
  }
}
