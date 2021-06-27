function writeBrailleline() {
  var brailleTable = document.getElementById("brailleline");
  var row = brailleTable.insertRow();

  for (var i = 1; i < limitZellen + 1; i++) {
    var cell = row.insertCell();
    cell.classList.add("zelle");
    cell.classList.add("braille");
    cell.classList.add("coursorpointer");

    var img = document.createElement('img');
    img.setAttribute("class", "smallpoint");
    img.setAttribute("src", "hilfspunkt.svg");
    img.setAttribute("alt", "·");
    img.setAttribute("title", "1");
    img.setAttribute("name", "p" + i + "_1");
    img.setAttribute("onclick", "klick(" + i + ", 1)");
    cell.appendChild(img);

    var img = document.createElement('img');
    img.setAttribute("class", "smallpoint");
    img.setAttribute("src", "hilfspunkt.svg");
    img.setAttribute("alt", "·");
    img.setAttribute("title", "4");
    img.setAttribute("name", "p" + i + "_4");
    img.setAttribute("onclick", "klick(" + i + ", 4)");
    cell.appendChild(img);

    cell.innerHTML += "<br>";

    var img = document.createElement('img');
    img.setAttribute("class", "smallpoint");
    img.setAttribute("src", "hilfspunkt.svg");
    img.setAttribute("alt", "·");
    img.setAttribute("title", "2");
    img.setAttribute("name", "p" + i + "_2");
    img.setAttribute("onclick", "klick(" + i + ", 2)");
    cell.appendChild(img);

    var img = document.createElement('img');
    img.setAttribute("class", "smallpoint");
    img.setAttribute("src", "hilfspunkt.svg");
    img.setAttribute("alt", "·");
    img.setAttribute("title", "5");
    img.setAttribute("name", "p" + i + "_5");
    img.setAttribute("onclick", "klick(" + i + ", 5)");
    cell.appendChild(img);

    cell.innerHTML += "<br>";

    var img = document.createElement('img');
    img.setAttribute("class", "smallpoint");
    img.setAttribute("src", "hilfspunkt.svg");
    img.setAttribute("alt", "·");
    img.setAttribute("title", "3");
    img.setAttribute("name", "p" + i + "_3");
    img.setAttribute("onclick", "klick(" + i + ", 3)");
    cell.appendChild(img);

    var img = document.createElement('img');
    img.setAttribute("class", "smallpoint");
    img.setAttribute("src", "hilfspunkt.svg");
    img.setAttribute("alt", "·");
    img.setAttribute("title", "6");
    img.setAttribute("name", "p" + i + "_6");
    img.setAttribute("onclick", "klick(" + i + ", 6)");
    cell.appendChild(img);
  }

  var row = brailleTable.insertRow();
  for (var i = 1; i < limitZellen + 1; i++) {
    var cell = row.insertCell();
    cell.classList.add("zelle");
    var input = document.createElement('input');
    input.classList.add("output");
    input.classList.add("bgtransparent");
    input.classList.add("coursorpointer");
    input.setAttribute("name", "z" + i)
    input.setAttribute("value", " ")
    input.setAttribute("maxlength", "4")
    input.setAttribute("type", "reset")
    input.setAttribute("onclick", "aend(" + i + ")");
    input.setAttribute("onfocus", "if(this.blur)this.blur()");
    cell.appendChild(input);
  }
}

function scaleBrailleline() {
  limitZellen = fieldsPerLine();
  // delete braille line
  var brailleTable = document.getElementById("brailleline");
  while(brailleTable.hasChildNodes()) {
    brailleTable.removeChild(brailleTable.firstChild);
  }
  // rebuild braille line
  writeBrailleline();
  limitZellen = fieldsPerLine();
  var startPos = 1;
  if (totalPos > limitZellen) {
    startPos = totalPos - limitZellen;
  }
  // repaint content of braille line
  for (var i = startPos; i < totalPos; i++) {
    ausgabe(i);
  }
}

writeBrailleline();
