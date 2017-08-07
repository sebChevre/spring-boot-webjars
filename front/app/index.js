var bonjour = require('./bonjour');

var disBonjour = bonjour.disBonjour();

if (typeof document !== 'undefined') {
    var el = document.createElement('h1');
    el.innerHTML = disBonjour;
    document.body.appendChild(el);
} else {
    console.log(disBonjour);
}