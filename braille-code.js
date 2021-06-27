var braillecode = new Array();
// braillecode must have ALL signs that could be shown to make (un)click a point
braillecode[' '] = "00";
braillecode['a'] = "10";
braillecode['b'] = "30";
braillecode['c'] = "11";
braillecode['d'] = "13";
braillecode['e'] = "12";
braillecode['f'] = "31";
braillecode['falls'] = "31";
braillecode['g'] = "33";
braillecode['h'] = "32";
braillecode['heit'] = "32";
braillecode['i'] = "21";
braillecode['j'] = "23";
braillecode['ion'] = "23";
braillecode['k'] = "50";
braillecode['keit'] = "50";
braillecode['l'] = "70";
braillecode['m'] = "51";
braillecode['mal'] = "51";
braillecode['n'] = "53";
braillecode['o'] = "52";
braillecode['p'] = "71";
braillecode['q'] = "73";
braillecode['r'] = "72";
braillecode['s'] = "61";
braillecode['t'] = "63";
braillecode['u'] = "54";
braillecode['ung'] = "54";
braillecode['v'] = "74";
braillecode['w'] = "27";
braillecode['wärts'] = "27";
braillecode['x'] = "55";
braillecode['y'] = "57";
braillecode['z'] = "56";
braillecode['1'] = "10";
braillecode['2'] = "30";
braillecode['3'] = "11";
braillecode['4'] = "13";
braillecode['5'] = "12";
braillecode['6'] = "31";
braillecode['7'] = "33";
braillecode['8'] = "32";
braillecode['9'] = "21";
braillecode['0'] = "23";
braillecode['1.'] = "20";
braillecode['2.'] = "60";
braillecode['3.'] = "22";
braillecode['4.'] = "26";
braillecode['5.'] = "24";
braillecode['6.'] = "62";
braillecode['7.'] = "66";
braillecode['8.'] = "64";
braillecode['9.'] = "42";
braillecode['en'] = "11";
braillecode['ll'] = "73";
braillecode['mm'] = "55";
braillecode['nis'] = "55";
braillecode['el'] = "57";

braillecode['@'] = "43";
braillecode['\xe4'] = "43"; // ae
braillecode['\xf6'] = "25"; // oe
braillecode['\xfc'] = "36"; // ue
braillecode['ss'] = "65"; // ß '\xdf'
braillecode['sam'] = "65"; // ß '\xdf'
braillecode['\xc4'] = "43"; // Ae
braillecode['\xd6'] = "25"; // Oe
braillecode['\xdc'] = "36"; // Ue
braillecode['ie'] = "45";
braillecode['\xef'] = "45"; // i umlaut
braillecode['ei'] = "15";
braillecode['\xeb'] = "15"; // e umlaut
braillecode['eu'] = "34";
braillecode['\xea'] = "34"; // e dach
braillecode['\xe4u'] = "41";
braillecode['\xe2'] = "41"; // a dach
braillecode['au'] = "14";
braillecode['\xfb'] = "14"; // u dach
braillecode['ch'] = "17";
braillecode['\xa2'] = "17"; // cent
braillecode['sch'] = "16";
braillecode['schaft'] = "16";
braillecode['\xa9'] = "16"; // copy
braillecode['st'] = "67";
braillecode['\xb0'] = "67"; // grad

braillecode[','] = "20";
braillecode['.'] = "40";
braillecode['al'] = "22";
braillecode['ver'] = "44";
braillecode['-'] = "44";
braillecode['be'] = "60";
braillecode['!'] = "62";
braillecode['+'] = "62";
braillecode['an'] = "62";
braillecode['!+'] = "62";
braillecode['or'] = "24";
braillecode['in'] = "42";
braillecode['un'] = "26";
braillecode['ge'] = "75";
braillecode['&'] = "75";
braillecode['lich'] = "07";
braillecode['_'] = "07";
braillecode['ck'] = "05";
braillecode['$'] = "05";
braillecode['#'] = "47"; // Zahlenzeichen
braillecode['ich'] = "47"; // Zahlenzeichen
braillecode['es'] = "77";
braillecode['%'] = "77";
braillecode['\''] = "04"; // Apostroph
braillecode['|'] = "01";
braillecode['\'\''] = "01"; // "
braillecode['~'] = "02"; // (P5)
braillecode['er'] = "37"; //  ^
braillecode['ein'] = "35"; //  grave

braillecode['eh'] = "66";
braillecode['('] = "66";
braillecode[')'] = "66";
braillecode['='] = "66";
braillecode['()'] = "66";
braillecode['( )'] = "66";
braillecode['(=)'] = "66";
braillecode['ach'] = "06";
braillecode['<'] = "06";
braillecode['ig'] = "03";
braillecode['>'] = "03";

braillecode['\xbb'] = "64"; // Anfang Anführungszeichen
braillecode['\xab'] = "46"; // Ende Anführungszeichen
braillecode['te'] = "64";
braillecode['ar'] = "46";
braillecode['{'] = "64";
braillecode['}'] = "46";
braillecode['art.'] = "46";
braillecode['em'] = "76";
braillecode['st'] = "67";
braillecode['['] = "76";
braillecode[']'] = "67";


function brailleback(code) {
  for (var yy = 0; yy < brailletab.length; yy++)
    if (code == brailletab[yy][0]) return brailletab[yy][1];
  return false;
}

var brailletab = new Array();
// brailletab only needs that sign which should be shown first
brailletab = [
  // code deutsch
  ['10', 'a'],
  ['30', 'b'],
  ['11', 'en'],
  ['13', 'd'],
  ['12', 'e'],
  ['31', 'f'],
  ['33', 'g'],
  ['32', 'h'],
  ['21', 'i'],
  ['23', 'j'],
  ['50', 'k'],
  ['70', 'l'],
  ['51', 'm'],
  ['53', 'n'],
  ['52', 'o'],
  ['71', 'p'],
  ['73', 'll'], // q
  ['72', 'r'],
  ['61', 's'],
  ['63', 't'],
  ['54', 'u'],
  ['74', 'v'],
  ['27', 'w'],
  ['55', 'mm'], // x
  ['57', 'el'], // y
  ['56', 'z'],
  ['45', 'ie'], // Paragraph
  ['14', 'au'],
  ['34', 'eu'],
  ['15', 'ei'],
  ['17', 'ch'],
  ['16', 'sch'],
  ['35', 'ein'], // grave
  ['37', 'er'], // ^
  ['36', '\xfc'], // ü
  ['25', '\xf6'], // ö
  ['00', ' '],
  ['02', '~'],
  ['47', '#'],
  ['05', 'ck'], // $
  ['77', 'es'], // %
  ['75', 'ge'], // &
  ['64', 'te'], // Anfang Anführungszeichen
  ['46', 'ar'], // Ende Anführungszeichen
  ['42', 'in'], // *
  ['62', 'an'], // !
  ['20', ','],
  ['44', 'ver'], // -
  ['40', '.'],
  ['26', 'un'],
  ['22', 'al'], // :
  ['60', 'be'], // ;
  ['06', 'ach'], // <
  ['66', 'eh'], // (=)
  ['03', 'ig'], // >
  ['24', 'or'], // ?
  ['01', '|'], // engl ACC
  ['04', '\''], // Apostroph
  ['07', 'lich'], // _
  ['43', '\xe4'], // ä
  ['76', 'em'], // [
  ['41', '\xe4u'], // äu
  ['67', 'st'], //]
  ['65', 'ss'] // ß '\xdf'
];

var alt_l = new Array();
alt_l[0] = 'P';
alt_l[1] = 'P1';
alt_l[2] = 'P2';
alt_l[3] = 'P12';
alt_l[4] = 'P3';
alt_l[5] = 'P13';
alt_l[6] = 'P23';
alt_l[7] = 'P123';

var alt_r = new Array();
alt_r[0] = '';
alt_r[1] = '4';
alt_r[2] = '5';
alt_r[3] = '45';
alt_r[4] = '6';
alt_r[5] = '46';
alt_r[6] = '56';
alt_r[7] = '456';
