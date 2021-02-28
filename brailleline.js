document.write("<tr>");
for (var i = 1; i < limitZellen + 1; i++) {
  document.write('<td class="zelle braille coursorpointer">');
  document.write('<img class="smallpoint" src="hilfspunkt.svg" name="p' + i +'_1" alt="·" title="1" onClick="klick(' + i +',1);">');
  document.write('<img class="smallpoint" src="hilfspunkt.svg" name="p' + i +'_4" alt="·" title="4" onClick="klick(' + i +',4);"><br>');
  document.write('<img class="smallpoint" src="hilfspunkt.svg" name="p' + i +'_2" alt="·" title="1" onClick="klick(' + i +',2);">');
  document.write('<img class="smallpoint" src="hilfspunkt.svg" name="p' + i +'_5" alt="·" title="4" onClick="klick(' + i +',5);"><br>');
  document.write('<img class="smallpoint" src="hilfspunkt.svg" name="p' + i +'_3" alt="·" title="1" onClick="klick(' + i +',3);">');
  document.write('<img class="smallpoint" src="hilfspunkt.svg" name="p' + i +'_6" alt="·" title="4" onClick="klick(' + i +',6);"></td>');
}
document.write('</tr>');
document.write("<tr>");
for (var i = 1; i < limitZellen + 1; i++) {
  document.write('<td class="zelle"><input name="z' + i +'" onclick="aend(' + i +')" value=" " maxlength="4" class="output bgtransparent coursorpointer" onfocus="if(this.blur)this.blur()" type="reset"></td>');
}
document.write("</tr>");
