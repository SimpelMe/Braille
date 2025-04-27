/*** ENUMS für das brailleArray ***/
// Zusammensetzung der binären Entsprechung der Spalten des Braillezeichens
const PUNKTCODE = 0;
// zeigt auf das Zeichen, mit dem bei Kurzschrift gestartet werden soll
const KURZSCHRIFTPOINTER = 1;
// zeigt auf das innere Array, das alle Zeichen für dieses Braillezeichen hat
const ALLEZEICHEN = 2;
/**********************************/

var brailleArray = [
  ['00', '0', [' ']],
  ['01', '0', ['"', '|']],
  ['02', '0', ['~']],
  ['03', '1', ['>', 'ig']],
  ['04', '0', ['\'']],
  ['05', '1', ['$', 'ck']],
  ['06', '1', ['<', 'ach']],
  ['07', '1', ['_', 'lich']],
  ['10', '0', ['a', '1', 'aber', 'all']],
  ['11', '2', ['c', '3', 'en', 'sich']],
  ['12', '0', ['e', '5', 'den']],
  ['13', '0', ['d', '4', 'das']],
  ['14', '0', ['au', 'auf']],
  ['15', '0', ['ei', 'als']],
  ['16', '0', ['sch', 'schaft', 'schon']],
  ['17', '0', ['ch', 'durch', 'möcht']],
  ['20', '0', [',', '1.']],
  ['21', '0', ['i', '9', 'ihr']],
  ['22', '2', [':', '3.', 'al']],
  ['23', '0', ['j', '0', 'ion', 'jetzt']],
  ['24', '2', ['?', '5.', 'or', 'vor']],
  ['25', '0', ['ö', 'sein']],
  ['26', '2', ['/', '4.', 'un', 'unter']],
  ['27', '0', ['w', 'wärts', 'was']],
  ['30', '0', ['b', '2', 'bei']],
  ['31', '0', ['f', '6', 'falls', 'für']],
  ['32', '0', ['h', '8', 'heit', 'hatt']],
  ['33', '0', ['g', '7', 'gegen']],
  ['34', '0', ['eu', 'wie']],
  ['35', '1', ['`', 'ein']],
  ['36', '0', ['ü', 'über', 'würd']],
  ['37', '1', ['^', 'er']],
  ['40', '0', ['.', 'des']],
  ['41', '0', ['äu', 'aus', 'auch']],
  ['42', '2', ['*', '9.', 'in']],
  ['43', '0', ['ä', '@', 'hätt']],
  ['44', '1', ['-', 'ver', 'im']],
  ['45', '1', ['§', 'ie', 'die', 'dies']],
  ['46', '3', ['«', '0.', '}', 'ar', 'war']],
  ['47', '0', ['#', 'ich']],
  ['50', '0', ['k', 'keit', 'kann']],
  ['51', '0', ['m', 'mal', 'man']],
  ['52', '0', ['o', 'oder']],
  ['53', '0', ['n', 'nicht']],
  ['54', '0', ['u', 'ung', 'und', 'wurd']],
  ['55', '3', ['x', 'nis', 'ex', 'mm', 'immer']],
  ['56', '0', ['z', 'zu']],
  ['57', '1', ['y', 'el', 'welch']],
  ['60', '2', [';', '2.', 'be', 'besonder']],
  ['61', '0', ['s', 'sie']],
  ['62', '3', ['!', '+', '6.', 'an']],
  ['63', '0', ['t', 'mit']],
  ['64', '3', ['»', '8.', '{', 'te', 'ihm']],
  ['65', '1', ['ß', 'ss', 'sam', 'ent', 'dass']],
  ['66', '4', ['(', ')', '=', '7.', 'eh', 'mehr']],
  ['67', '1', [']', 'st', 'ist']],
  ['70', '0', ['l', 'lässt']],
  ['71', '0', ['p', 'so']],
  ['72', '0', ['r', 'der']],
  ['73', '1', ['q', 'll', 'pro', 'voll']],
  ['74', '0', ['v', 'von']],
  ['75', '1', ['&', 'ge', 'gewesen']],
  ['76', '1', ['[', 'em', 'dem']],
  ['77', '1', ['%', 'es']]
];

function createCharacterToBraillecodeArray() {
  let array = new Array();
  for (let i = 0; i < brailleArray.length; i++) {
    for (let j = 0; j < brailleArray[i][ALLEZEICHEN].length; j++) {
      let character = brailleArray[i][ALLEZEICHEN][j];
      let punktcode = brailleArray[i][PUNKTCODE];
      array[character] = punktcode;
    }
  }
  return array;
}

// must have ALL characters that could be shown to make (un)click a point
var charToBraillecodeArray = createCharacterToBraillecodeArray();
