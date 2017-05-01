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

// Google analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-98364698-1', 'auto');
ga('send', 'pageview');

