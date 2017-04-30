/*!
 * swapchar - Монгол/Англи үсгийн байрлалаар хөрвүүлэгч
 * https://github.com/swganzo/swapchar
 * MIT License | (c) swganzo 2017
 */
 
/*!
 *
 * version 1.0
 *
 * хэрэглэх: swapchar("vgay ee0", false) // false - Кириллээс Латин руу, true - Латинаас Кирилл рүү
 * үр дүн: 'сайн уу?'
 */

!function(root, name, definition){
if (typeof module != 'undefined' && module.exports) module.exports = definition()
else if (typeof define == 'function' && define.amd) define(name, definition)
  else root[name] = definition()
}(this, 'swapchar', function(){
  var mon = [
  '=','№','-','"','₮',':','.','_',',','%','?','е','щ','ф','ц','у','ж','э','н','г','ш','ү','з','к','ъ','\\','й','ы','б','ө','а','х','р','о','л','д','п','я','ч','ё','с','м','и','т','ь','в','ю','+','1','2','3','4','5','6','7','8','9','0','Е','Щ','Ф','Ц','У','Ж','Э','Н','Г','Ш','Ү','З','К','Ъ','|','Й','Ы','Б','Ө','А','Х','Р','О','Л','Д','П','Я','Ч','Ё','С','М','И','Т','Ь','В','Ю'
  ];

  var eng = [
  '`','1','2','3','4','5','6','7','8','9','0','-','=','q','w','e','r','t','y','u','i','o','p','[',']','\\','a','s','d','f','g','h','j','k','l',';',"'",'z','x','c','v','b','n','m',',','.','/','~','!','@','#','$','%','^','&','*','(',')','_','+','Q','W','E','R','T','Y','U','I','O','P','{','}','|','A','S','D','F','G','H','J','K','L',':','"','Z','X','C','V','B','N','M','<','>','?'
  ];

  var obfuscate = function(string, type){
    var lines = string.split(/\n/);
    var obfuscatedLines = [];
    var wordsAmount = 0;

    lines.forEach(function(line){
      var words = line.split(/\s+/);
      wordsAmount+=words.length;
      var counter = 0;

      var obfuscatedWords = words.map(function(word){
        counter++;
        var newWord = '';
        len = word.length;

        for (var i = 0; i < len; i++) {
          var char = word[i];
          var index = 0;

          // Кириллээс латин
          if( type === false ){
            index = mon.indexOf(word[i]);
            if( index != -1 ){
              char = eng[index];
            }
          }else{
            index = eng.indexOf(word[i]);
            if( index != -1 ){
              char = mon[index];
            }
          }

          newWord += char;
        }

        return newWord;
      });

      obfuscatedLines.push(obfuscatedWords.join(" "));
    });

    return obfuscatedLines.join("\n");
  };

  return function(string, type) {
    return obfuscate(string, type);
  };

});