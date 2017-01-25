# placeload.js
The best way to create a placeholder layout effect.

Placeload.js is a library to customize your interface previews/skeleton screen that yield a fantastic user experience.

Getting started
------------

Install placeload.js with npm:

```sh
$ npm install placeload.js
```

Paint your placeholder

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

Learning More
-------------

Read the [reference documentation](https://victorvoid.github.io/placeload.js/#documentation).
