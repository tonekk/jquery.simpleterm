jquery.simpleterm
=================

Give any jQuery element the terminal look!
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

### Thanks
Thanks to https://github.com/nstephens/cssterm for the CSS!
Yes, I could have forked the project, but as this is a jQuery plugin, I felt it was better to create an own repo.
