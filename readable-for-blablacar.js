var fontOverride = '* { font-family: "Helvetica Neue",Helvetica,Arial,sans-serif !important; }';

var style = document.createElement('style');
style.type = 'text/css';
style.appendChild(document.createTextNode(fontOverride));

document.head.appendChild(style);