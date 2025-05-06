var totalPos = 1;
var selectedCharacter = 0;

var zellen = new Array();
zellen[0] = " "; // muss ein Leerzeichen sein sonst Fehler beim Löschen

var saveTextToLocalStorageBool = false;
var useVollschrift = true;

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

// When the user clicks on manual button open the manual
function openManual() {
  var manual = document.getElementById("manual");
  manual.classList.toggle("show");
}

// When the user clicks on settings button open settings
function openSettings() {
  var settings = document.getElementById("settings");
  settings.classList.toggle("show");
}

function brailleback(code) {
  for (let i = 0; i < brailleArray.length; i++)
    if (code == brailleArray[i][PUNKTCODE]) {
      var preferredCharacter;
      if (useVollschrift) {
        preferredCharacter = brailleArray[i][ALLEZEICHEN][0];
      } else {
        preferredCharacter = brailleArray[i][ALLEZEICHEN][brailleArray[i][KURZSCHRIFTPOINTER]];
      }
      return preferredCharacter;
    }
  return false;
}

function ausgabe(drawPos) {
  // lese den Buchstaben aus z.B. 'e'
  // charToBraillecodeArray von 'e' ist '12'
  // linke Ziffer ist '1' binär '001'
  // rechte Ziffer ist '2' binär '010'
  var zeichen = zellen[drawPos - 1];
  var leftColNumber = charToBraillecodeArray[zeichen].substr(0, 1);
  var rightColNumber = charToBraillecodeArray[zeichen].substr(1, 1)

  // linke Spalte schauen, ob das Bit gesetzt ist (Bsp: cb1 gesetzt)
  if (leftColNumber & 1) {
    document.getElementById(`checkbox1small`).checked = true;
  } else {
    document.getElementById(`checkbox1small`).checked = false;
  }
  if (leftColNumber & 2) {
    document.getElementById(`checkbox2small`).checked = true;
  } else {
    document.getElementById(`checkbox2small`).checked = false;
  }
  if (leftColNumber & 4) {
    document.getElementById(`checkbox3small`).checked = true;
  } else {
    document.getElementById(`checkbox3small`).checked = false;
  }
  // rechte Spalte schauen, ob das Bit gesetzt ist (Bsp: cb5 gesetzt)
  if (rightColNumber & 1) {
    document.getElementById(`checkbox4small`).checked = true;
  } else {
    document.getElementById(`checkbox4small`).checked = false;
  }
  if (rightColNumber & 2) {
    document.getElementById(`checkbox5small`).checked = true;
  } else {
    document.getElementById(`checkbox5small`).checked = false;
  }
  if (rightColNumber & 4) {
    document.getElementById(`checkbox6small`).checked = true;
  } else {
    document.getElementById(`checkbox6small`).checked = false;
  }

  writeToTextAusgabe();
}

function klick(zelle, punkt) {
  var zeichen;
  var offset = zelle;
  var selectedCell = totalPos - 1;
  if (zelle == 999999) { // small checkboxes
    offset = selectedCell;
    if (selectedCharacter > 0) {
      offset = selectedCharacter;
    }
    zeichen = zellen[offset];
  } else {
    zeichen = zellen[offset];
  }

  var pu = [0, 0, 0, 0, 0, 0];
  if (bit[charToBraillecodeArray[zeichen].substr(0, 1)].charAt(0) == '1') pu[0] = 1;
  else pu[0] = 0;
  if (bit[charToBraillecodeArray[zeichen].substr(0, 1)].charAt(1) == '1') pu[1] = 1;
  else pu[1] = 0;
  if (bit[charToBraillecodeArray[zeichen].substr(0, 1)].charAt(2) == '1') pu[2] = 1;
  else pu[2] = 0;
  if (bit[charToBraillecodeArray[zeichen].substr(1, 1)].charAt(0) == '1') pu[3] = 1;
  else pu[3] = 0;
  if (bit[charToBraillecodeArray[zeichen].substr(1, 1)].charAt(1) == '1') pu[4] = 1;
  else pu[4] = 0;
  if (bit[charToBraillecodeArray[zeichen].substr(1, 1)].charAt(2) == '1') pu[5] = 1;
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
  var point = [0, 0, 0, 0, 0, 0, 0];

  if (document.getElementById("checkbox1").checked) point[1] = 1;
  else point[1] = 0;
  if (document.getElementById("checkbox2").checked) point[2] = 1;
  else point[2] = 0;
  if (document.getElementById("checkbox3").checked) point[3] = 1;
  else point[3] = 0;
  if (document.getElementById("checkbox4").checked) point[4] = 1;
  else point[4] = 0;
  if (document.getElementById("checkbox5").checked) point[5] = 1;
  else point[5] = 0;
  if (document.getElementById("checkbox6").checked) point[6] = 1;
  else point[6] = 0;

  // reset big braille field
  document.getElementById("checkbox1").checked = false;
  document.getElementById("checkbox2").checked = false;
  document.getElementById("checkbox3").checked = false;
  document.getElementById("checkbox4").checked = false;
  document.getElementById("checkbox5").checked = false;
  document.getElementById("checkbox6").checked = false;

  var zeichen1, zeichen2;
  zeichen1 = bit[point[1].toString() + point[2].toString() + point[3].toString()];
  zeichen2 = bit[point[4].toString() + point[5].toString() + point[6].toString()];
  eingabe(zeichen1 + zeichen2);
  scrollTextToEnd();
}

function alternativesZeichen(zelle) {
  if (zelle < 1) {
    return;
  }
  let character = zellen[zelle];

  // Index des Zeichens im brailleArray finden
  let indexOfCurrentCharacter;
  let punktcode = charToBraillecodeArray[character];
  for (let i = 0; i < brailleArray.length; i++) {
    if (punktcode == brailleArray[i][PUNKTCODE]) {
      indexOfCurrentCharacter = i;
    }
  }

  // inneres Array der Alternativen
  let alleAlternativen = brailleArray[indexOfCurrentCharacter][ALLEZEICHEN];
  // Index des Zeichens im inneren Array der Alternativen finden
  let currentIndex = alleAlternativen.indexOf(character);

  // den neuen Index über die Alternativen hochzählen
  // bzw. von vorne anfangen wenn das Ende erreicht ist
  let newIndex;
  let count = alleAlternativen.length;
  if (currentIndex == count - 1) {
    newIndex = 0;
  } else {
    newIndex = currentIndex + 1;
  }

  zellen[zelle] = alleAlternativen[newIndex];
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
  if (e.key == '<' && r == 'u') alternativesZeichen(selectedCharacter); // <
  // unterdrücke das Leerzeichen, sonst geht der Steno-Modus kaputt
  // es werden evtl. fokussierte Tasten "geklickt"
  if (weiter == ' ') {
    if (e.preventDefault) e.preventDefault();
    else e.returnValue = false;
  }

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
  saveTextToLocalStorage();
  removeTestButton();
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
  const manual = document.getElementById("manual");
  manual.style.height = `calc(${height}px - 12vmin)`;
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

function test() {
  const testString = " der weg des gerechten ist von allen seiten von den ungerechtigkeiten der egoisten und der tyrannei der bösen umgeben. gesegnet ist derjenige, der im namen der nächstenliebe und des guten willens die schwachen durch das tal der finsternis führt, denn er ist wahrhaftig der hüter seines bruders und der finder verlorener kinder. und ich werde mit großer rache und zornigem grimm diejenigen schlagen, die versuchen, meine brüder zu vergiften und zu vernichten. und ihr werdet meinen namen erkennen, wenn ich meine rache an euch vollziehe.";

  const testArray = testString.split('');
  zellen = testArray;
  totalPos = zellen.length;
  writeToTextAusgabe();
  selectCharacter(totalPos - 1);
  scrollTextToEnd();
}

function removeTestButton() {
  const testButton = document.getElementById("test-button");
  if (testButton && totalPos > 1) {
    testButton.remove();
  }
}

function saveTextToLocalStorage() {
  if(!window.localStorage) {
    console.warn("Zugriff auf Local Storage unterbunden.");
    return;
  } else if (saveTextToLocalStorageBool === false) {
    return
  }
  localStorage.setObj("zellen", zellen);
}

function readFromLocalStorage() {
  if (localStorage.getItem("zellen") === null) {
    return;
  }
  zellen = localStorage.getObj("zellen");
  totalPos = zellen.length;
  writeToTextAusgabe();
  selectCharacter(totalPos - 1);
  scrollTextToEnd();
}

Storage.prototype.setObj = function(key, obj) {
  return this.setItem(key, JSON.stringify(obj))
}

Storage.prototype.getObj = function(key) {
  return JSON.parse(this.getItem(key))
}

function toggleVollschrift(event) {
  const vollschriftCB = document.getElementById("checkboxVollschrift");
  if (vollschriftCB.checked) {
    localStorage.removeItem("useVollschrift");
    useVollschrift = true;
  } else {
    localStorage.setObj("useVollschrift", false);
    useVollschrift = false;
  }
  doNotClickParents(event);
  // selectBrailleSchrift();
}

function toggleLocalStorage(event) {
  const localStorageCB = document.getElementById("checkboxLocalStorage");
  if (localStorageCB.checked) {
    saveTextToLocalStorageBool = true;
    localStorage.setObj("saveTextToLocalStorageBool", saveTextToLocalStorageBool);
  } else {
    saveTextToLocalStorageBool = false;
    localStorage.removeItem("zellen");
    localStorage.removeItem("saveTextToLocalStorageBool");
  }
  doNotClickParents(event);
}

/* click auf Label klickt auch das Div über der Checkbox
  damit würde sich aber das Settings-Menü schließen */
function doNotClickParents(event) {
  event.stopPropagation();
}
