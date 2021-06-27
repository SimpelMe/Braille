function vh(v) {
  var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  return h / v;
}

function vw(v) {
  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  return w / v;
}

function vmin(v) {
  return Math.min(vh(v), vw(v));
}

function vmax(v) {
  return Math.max(vh(v), vw(v));
}

var percentPerField = 9.2;

function fieldsPerLine() {
  var fields = parseInt(vw(vmin(percentPerField)));
  if (vmin(1) < 750) {
    fields --;
  }
  return fields;
}

// how many cells should the braille line have
var limitZellen = fieldsPerLine();
// if changing limitZellen then adapt at index.html "zelle img" and "zelle input"

var pos = 0;

var zellen = new Array(limitZellen + 1);
zellen.fill(" "); // fill all indexes with " "

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
  zellen.fill(" "); // fill all indexes with " "
  for (var i = 0; i < limitZellen; i++) ausgabe(i); // affected by count of zellen-limit
  document.images['pBig_1'].src = 'hilfspunkt.svg', document.images['pBig_1'].alt = '.';
  document.images['pBig_2'].src = 'hilfspunkt.svg', document.images['pBig_2'].alt = '.';
  document.images['pBig_3'].src = 'hilfspunkt.svg', document.images['pBig_3'].alt = '.';
  document.images['pBig_4'].src = 'hilfspunkt.svg', document.images['pBig_4'].alt = '.';
  document.images['pBig_5'].src = 'hilfspunkt.svg', document.images['pBig_5'].alt = '.';
  document.images['pBig_6'].src = 'hilfspunkt.svg', document.images['pBig_6'].alt = '.';
  pos = 0;
}

function umschalten() {
  var x = document.getElementById("big6");
  var y = document.getElementById("braille64");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";
  } else {
    x.style.display = "none";
    y.style.display = "block";
  }
}

// When the user clicks on <div>, open the popup
function openPopup() {
  var popup = document.getElementById("popup");
  popup.classList.toggle("show");
}

function ausgabe(pos) {
  var zeichen = zellen[pos];
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
    var bild = 'p' + (pos + 1) + '_' + (j + 1);
    if (pu[j])
      document.images[bild].src = 'punkt.svg', document.images[bild].alt = 'o';
    else
      document.images[bild].src = 'hilfspunkt.svg', document.images[bild].alt = '.';
  }

  var ausgzelle = 'z' + (pos + 1);
  document.form[ausgzelle].value = zeichen;
}

function klick(zelle, punkt) {
  var bild;
  var zeichen;
  if (zelle == 9999) { // bigCell
    bild = 'pBig_' + punkt;
    zeichen = zellen[limitZellen];
    zelle = limitZellen + 1;
  } else {
    bild = 'p' + zelle + '_' + punkt;
    zeichen = zellen[zelle - 1];
    if (zelle - 1 > pos) pos = zelle;
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
    document.images[bild].src = 'hilfspunkt.svg', document.images[bild].alt = '.';
    pu[punkt - 1] = 0;
  } else {
    document.images[bild].src = 'punkt.svg', document.images[bild].alt = 'o';
    pu[punkt - 1] = 1;
  }

  var zeichen1, zeichen2;
  zeichen1 = bit[pu[0].toString() + pu[1].toString() + pu[2].toString()];
  zeichen2 = bit[pu[3].toString() + pu[4].toString() + pu[5].toString()];
  zellen[zelle - 1] = brailleback(zeichen1 + zeichen2);
  if (zelle < limitZellen + 1) {
    var ausgzelle = 'z' + zelle;
    document.form[ausgzelle].value = brailleback(zeichen1 + zeichen2);
  }
}

function grosseAuslesen() {
  var zeichen = zellen[limitZellen];

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

  var zeichen1, zeichen2;
  zeichen1 = bit[pu[0].toString() + pu[1].toString() + pu[2].toString()];
  zeichen2 = bit[pu[3].toString() + pu[4].toString() + pu[5].toString()];
  eingabe(zeichen1 + zeichen2);
  zellen[limitZellen] = brailleback('00');
  document.images['pBig_1'].src = 'hilfspunkt.svg', document.images['pBig_1'].alt = '.';
  document.images['pBig_2'].src = 'hilfspunkt.svg', document.images['pBig_2'].alt = '.';
  document.images['pBig_3'].src = 'hilfspunkt.svg', document.images['pBig_3'].alt = '.';
  document.images['pBig_4'].src = 'hilfspunkt.svg', document.images['pBig_4'].alt = '.';
  document.images['pBig_5'].src = 'hilfspunkt.svg', document.images['pBig_5'].alt = '.';
  document.images['pBig_6'].src = 'hilfspunkt.svg', document.images['pBig_6'].alt = '.';
}

function aend(zelle) {
  var ausgzelle = 'z' + zelle;
  var wert = document.form[ausgzelle].value;

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
  else if (wert == '7.') wert = '(';
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

  document.form[ausgzelle].value = wert;
  zellen[zelle - 1] = wert; // neues Zeichen auch in das Array schreiben
}

var bgrafik = 'min-';
var bild_0 = new Image;
bild_0.src = bgrafik + "0.svg";
var bild_1 = new Image;
bild_1.src = bgrafik + "1.svg";
var bild_2 = new Image;
bild_2.src = bgrafik + "2.svg";
var bild_3 = new Image;
bild_3.src = bgrafik + "3.svg";
var bild_4 = new Image;
bild_4.src = bgrafik + "4.svg";
var bild_5 = new Image;
bild_5.src = bgrafik + "5.svg";
var bild_6 = new Image;
bild_6.src = bgrafik + "6.svg";
var bild_7 = new Image;
bild_7.src = bgrafik + "7.svg";

function lastloe() {
  if (pos == 0) return;
  pos--;
  zellen[pos] = ' ';
  ausgabe(pos);
}

function eingabe(graf) {
  // test if limit is reached
  var shift = 0;
  if (pos > limitZellen - 1) {
    pos = limitZellen - 1;
    shift = 1;
  }
  // if limit exceeded then shift all leading chararacters
  if (shift == 1) {
    for (var i = 0; i < pos; i++) {
      zellen[i] = zellen[i + 1];
      ausgabe(i);
    }
  }
  // paint chararacter
  var zeichen = brailleback(graf);
  zellen[pos] = zeichen;
  ausgabe(pos);
  // next place
  pos++;
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
  var weiter = String.fromCharCode(e.keyCode);
  if (weiter == ' ') {
    if (e.preventDefault) e.preventDefault();
    else e.returnValue = false;
  } // Leerzeichen no-scroll
  if (e.keyCode == 8) {
    if (e.preventDefault) e.preventDefault();
    else e.returnValue = false;
  } // Backspace no-history-back
  if (weiter == '\r') {
    if (e.preventDefault) e.preventDefault();
    else e.returnValue = false;
  } // Enter no-history-forward
  if (weiter == '\t') {
    if (e.preventDefault) e.preventDefault();
    else e.returnValue = false;
  } // Tab no-jump
  if (e.keyCode == 13 && r == 'u') grosseAuslesen(); // Enter
  if (e.keyCode == 27 && r == 'u') loesch(); // ESC
  if (e.keyCode == 8 && r == 'u') lastloe(); // Backspace

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
      tasten[0][2] = tasten[1][2] = tasten[2][2] = tasten[3][2] = tasten[4][2] = tasten[5][2] = tasten[6][2] = 0;
    }
  }
}

var isMobile = {
  Android: function() {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function() {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function() {
    return navigator.userAgent.match(/iPhone|iPod|iPad/i);
  },
  Opera: function() {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function() {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function() {
    return ((isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()));
  }
};

function isMobileDevice() {
  var result = 0;
  if (isMobile.any()) {
    result = 1;
  }
  return result
};

function deleteTableKeyboard() {
  document.getElementById("keyboard").style="display:none";
};

function sizeContent() {
  var newWidth = document.body.offsetWidth + "px";
}

function translateKurz(asciitext) {
  /*var unicode_braille = liblouis.translateString("tables/unicode.dis,tables/de-de-g0.utb", asciitext)
  return unicode_braille*/
  return asciitext;
}
