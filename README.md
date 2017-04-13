# placeload.js
The best way to create a placeholder layout effect.

What is it?
-------------
Placeload.js is a library to customize your interface previews/skeleton screen that yield a fantastic user experience.

![](https://github.com/victorvoid/placeload.js/blob/master/placeload-desc.jpg)


Getting started
------------

Compiled and production-ready code can be found in the lib directory. The src directory contains development code.


Install placeload.js with npm:

```sh
$ npm install placeload.js
```

Install placeload.js with bower:

```sh
$ bower install https://github.com/victorvoid/placeload.js.git
```


[You can also download it here](https://drive.google.com/open?id=0B4kDE1zGyQeaNDh1ZDg1VFRlek0)

### 1. Include placeload on your site.

```html
<link href="lib/placeload.css">

<script src="lib/placeload.js"></script>
```

### 2. Paint your placeholder

```js
  var placeUserUI = new Placeload('.user__panel--placeholder');
  placeUserUI.draw({
    width: '300px',
    height: '200px'
  });

  placeUserUI.draw({
    width: '400px',
    height: '20px',
    marginTop: '10px'
  });

  placeUserUI.draw({
    width: '400px',
    height: '20px',
    marginTop: '10px'
  });

  placeUserUI.draw({
    width: '250px',
    height: '20px',
    marginTop: '10px'
  });
```

![](https://github.com/victorvoid/placeload.js/blob/master/docs/imgs/placeload_example.gif)

Demos
--------

[User load - vanillajs](https://victorvoid.github.io/placeload.js/examples/vanillajs/user_load/index.html)


Learning More
-------------

Read the [reference documentation](https://victorvoid.github.io/placeload.js/#documentation).

Authors
--------
The repo is written and maintained by [Victor Igor](https://github.com/victorvoid). Other contributors that have submitted  something, in alphabetical order:

- [Raniel Oliveira](https://github.com/raniel182)

License
-------

The code is available under the [MIT License](LICENSE.md).
