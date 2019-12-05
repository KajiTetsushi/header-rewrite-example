// Function to change the content of t2
function modifyText() {
  const text = 'example.js is running!';
  const textElement = document.getElementById('text');

  if (textElement.firstChild.nodeValue !== text) {
    textElement.firstChild.nodeValue = text;
    console.log(text);
  } else {
    textElement.firstChild.nodeValue = '---';
  }
}

(function () {
  var button = document.getElementById('button');
  button.addEventListener('click', modifyText, false);
})();
