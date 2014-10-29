jquery.simpleterm
=================

[![License](http://img.shields.io/:license-mit-blue.svg)](http://tonekk.mit-license.org)

[Demo](http://jsfiddle.net/aky622fe/)

## Usage

As always, include js / css, then go:


```js
// Create terminal for log output
$('#element').simpleterm();
```


You can also update the text in the terminal via:
```js
var text = 'I am the terminal content.';

// Create terminal for log output
$('#element').simpleterm(text);
```

## Thanks
Thanks to https://github.com/nstephens/cssterm for the CSS!
Yes, I could have forked the project, but as this is a jQuery plugin, I felt it was better to create an own repo.
