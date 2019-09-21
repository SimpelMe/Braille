function createbutton(graf, titel) {
  if (graf == '') {
    document.write(" &nbsp; ");
  } else if (graf == 'xx') // backspace
  {
    document.write("<button onclick='lastloe()' type='button' title='" + titel + "'>");
    document.write("<img src='backspace.svg' title='" + titel + "' alt='" + titel + "' width='10' height='20'>");
    document.write("<\/button>");
  } else if (graf == 'xxxx') // delete all
  {
    document.write("<button onclick='loesch()' type='button' title='" + titel + "'>");
    document.write("<img src='trash.svg' title='" + titel + "' alt='" + titel + "' width='10' height='20'>");
    document.write("<\/button>");
  } else {
    var alt = alt_l[graf.charAt(0)] + alt_r[graf.charAt(1)];
    if (alt == 'p') alt = 'P0';
    titel = alt + ' = ' + titel;
    document.write("<button onclick='eingabe(\"" + graf + "\")' type='button' title='" + titel + "'>");
    document.write("<img src='" + bgrafik + graf.charAt(0) + ".svg' title='" + titel + "' alt='&nbsp;' width='5' height='20'>");
    document.write("<img src='" + bgrafik + graf.charAt(1) + ".svg' title='" + titel + "' alt='" + alt + "' width='5' height='20'>");
    document.write("<\/button>");
  }
}


document.write("<br><table cellpadding=0 cellspacing=0>");
//document.write("<tr><td class='middle'>P1245 &nbsp; &nbsp;<\/td><td>");	// Punkte 1245
document.write("<tr><td>"); // Punkte 1245
createbutton('10', 'Buchstabe a oder Ziffer 1');
createbutton('30', 'Buchstabe b oder Ziffer 2');
createbutton('11', 'Buchstabe c oder en oder Ziffer 3');
createbutton('13', 'Buchstabe d oder Ziffer 4');
createbutton('12', 'Buchstabe e oder Ziffer 5');
createbutton('', '');
createbutton('31', 'Buchstabe f oder Ziffer 6');
createbutton('33', 'Buchstabe g oder Ziffer 7');
createbutton('32', 'Buchstabe h oder Ziffer 8');
createbutton('21', 'Buchstabe i oder Ziffer 9');
createbutton('23', 'Buchstabe j oder Ziffer 0');
createbutton('', '');
createbutton('01', 'Pipe | oder ausl&auml;ndisches Zeichen oder mathematisches Zeichen');
createbutton('03', 'ig oder mehrere Gro&szlig;buchstaben folgen');
createbutton('', '');
createbutton('00', 'Leerzeichen; mit Computer Taste "Space"');

//document.write("<\/td><\/tr><tr><td class='middle'>+ P3 &nbsp; &nbsp;<\/td><td>");	// Punkte 12345
document.write("<\/td><\/tr><tr><td>"); // Punkte 12345
createbutton('50', 'Buchstabe k');
createbutton('70', 'Buchstabe l');
createbutton('51', 'Buchstabe m');
createbutton('53', 'Buchstabe n');
createbutton('52', 'Buchstabe o');
createbutton('', '');
createbutton('71', 'Buchstabe p');
createbutton('73', 'Buchstabe q oder ll');
createbutton('72', 'Buchstabe r');
createbutton('61', 'Buchstabe s');
createbutton('63', 'Buchstabe t');
createbutton('', '');
createbutton('41', '&auml;u');
createbutton('43', 'Buchstabe &auml; oder @');
createbutton('', '');
createbutton('xx', 'letztes Zeichen l&ouml;schen\; mit Computer Taste "Backspace"');

//document.write("<\/td><\/tr><tr><td class='middle'>+ P6 &nbsp; &nbsp;<\/td><td>");	// Punkte 123456
document.write("<\/td><\/tr><tr><td>"); // Punkte 123456
createbutton('54', 'Buchstabe u');
createbutton('74', 'Buchstabe v');
createbutton('55', 'Buchstabe x oder mm');
createbutton('57', 'Buchstabe y oder el');
createbutton('56', 'Buchstabe z');
createbutton('', '');
createbutton('75', 'ge oder &');
createbutton('77', 'es oder % oder "etwas durchgestrichen"');
createbutton('76', 'em');
createbutton('65', 'Buchstabe &szlig; oder ss');
createbutton('67', 'st');
createbutton('', '');
createbutton('45', 'ie oder Paragraf &sect;');
createbutton('47', 'Raute # (Zahlenzeichen) oder ich');
createbutton('', '');
createbutton('xxxx', 'alle Zeichen l&ouml;schen\; mit Computer Taste "Escape"');

//document.write("<\/td><\/tr><tr><td class='middle'>&minus; P3 &nbsp; &nbsp;<\/td><td>");	// Punkte 12456
document.write("<\/td><\/tr><tr><td>"); // Punkte 12456
createbutton('14', 'au');
createbutton('34', 'eu');
createbutton('15', 'ei');
createbutton('17', 'ch');
createbutton('16', 'sch');
createbutton('', '');
createbutton('35', 'ein');
createbutton('37', 'er');
createbutton('36', 'Buchstabe &uuml;');
createbutton('25', 'Buchstabe &ouml;');
createbutton('27', 'Buchstabe w');
createbutton('', '');
createbutton('05', 'ck oder Dollar $ (ein Gro&szlig;buchstabe folgt)');
createbutton('07', 'lich oder Unterstreichung _ Anfang und Ende');

//document.write("<\/td><\/tr><tr><td class='middle'>P2356 &nbsp; &nbsp;<\/td><td>");	// Punkte 2356
document.write("<\/td><\/tr><tr><td>"); // Punkte 2356
createbutton('20', 'Komma ,');
createbutton('60', 'be oder Semikolon ;');
createbutton('22', 'al oder Doppelpunkt :');
createbutton('26', 'un');
createbutton('24', 'or oder ?');
createbutton('', '');
createbutton('62', 'an oder ! oder +');
createbutton('66', 'eh oder () oder gleich =');
createbutton('64', 'te oder &raquo;');
createbutton('42', 'in');
createbutton('46', 'ar oder &laquo;');
createbutton('', '');
createbutton('02', 'rund ~ oder Umlautzeichen der n&auml;chsten K&uuml;rzung');
createbutton('06', 'ach oder <');
createbutton('', '');
createbutton('40', 'Punkt .');
createbutton('44', 'ver oder Bindestrich -');
createbutton('04', 'Apostroph &prime;  oder Ende Ziffern oder Ende Gro&szlig;buchstaben oder Buchstabe in Basisschrift folgt');


document.write("<\/td><\/tr><tr><td>&nbsp;<\/td><td>");
document.write("<\/td><\/tr><tr><td class='middle'> <\/td><td>");

document.write("<\/td><\/tr><\/table>");
