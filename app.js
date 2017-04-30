document.addEventListener('DOMContentLoaded', function(){
  var input = document.getElementById('in');
  var output = document.getElementById('out');
  var generateBtn = document.getElementById('regenerate');
  var copyBtn = document.getElementById('copy');
  var radios = document.getElementsByName('radioBtn');
  var clipboard = new Clipboard(copyBtn);

  generateBtn.addEventListener('click', function(ev){
    var type = get_type();
    output.value = swapchar( input.value, type );
  });

  generateBtn.addEventListener('click', function(ev){
    var type = get_type();
    output.value = swapchar( input.value, type );
  });

  function get_type(){
    for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
        return ( radios[i].value === '0' )?false:true;
      }
    }
  }
});