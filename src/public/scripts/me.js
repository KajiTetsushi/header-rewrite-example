(function () {
  var text = 'This text was rendered by me.js!';
  const textElement = document.getElementById('text');
  textElement.firstChild.nodeValue = text;
})();
