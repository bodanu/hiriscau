

var iframe = document.getElementsByTagName('iframe');
var z = iframe[0];
var url = z.attributes[0].baseURI;
var lastpart = url.split('.').pop();
var iframesrc = z.getAttribute('src');
z.setAttribute('src', iframesrc + lastpart );
console.log('iframesrc');
