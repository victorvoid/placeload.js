var Placeload =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var _isPlaceholder = __webpack_require__(6);


/**
 * Optimized internal one-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
module.exports = function _curry1(fn) {
  return function f1(a) {
    if (arguments.length === 0 || _isPlaceholder(a)) {
      return f1;
    } else {
      return fn.apply(this, arguments);
    }
  };
};


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(0);
var _isPlaceholder = __webpack_require__(6);


/**
 * Optimized internal two-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
module.exports = function _curry2(fn) {
  return function f2(a, b) {
    switch (arguments.length) {
      case 0:
        return f2;
      case 1:
        return _isPlaceholder(a) ? f2
             : _curry1(function(_b) { return fn(a, _b); });
      default:
        return _isPlaceholder(a) && _isPlaceholder(b) ? f2
             : _isPlaceholder(a) ? _curry1(function(_a) { return fn(_a, b); })
             : _isPlaceholder(b) ? _curry1(function(_b) { return fn(a, _b); })
             : fn(a, b);
    }
  };
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(0);
var _toString = __webpack_require__(59);


/**
 * Returns the string representation of the given value. `eval`'ing the output
 * should result in a value equivalent to the input value. Many of the built-in
 * `toString` methods do not satisfy this requirement.
 *
 * If the given value is an `[object Object]` with a `toString` method other
 * than `Object.prototype.toString`, this method is invoked with no arguments
 * to produce the return value. This means user-defined constructor functions
 * can provide a suitable `toString` method. For example:
 *
 *     function Point(x, y) {
 *       this.x = x;
 *       this.y = y;
 *     }
 *
 *     Point.prototype.toString = function() {
 *       return 'new Point(' + this.x + ', ' + this.y + ')';
 *     };
 *
 *     R.toString(new Point(1, 2)); //=> 'new Point(1, 2)'
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category String
 * @sig * -> String
 * @param {*} val
 * @return {String}
 * @example
 *
 *      R.toString(42); //=> '42'
 *      R.toString('abc'); //=> '"abc"'
 *      R.toString([1, 2, 3]); //=> '[1, 2, 3]'
 *      R.toString({foo: 1, bar: 2, baz: 3}); //=> '{"bar": 2, "baz": 3, "foo": 1}'
 *      R.toString(new Date('2001-02-03T04:05:06Z')); //=> 'new Date("2001-02-03T04:05:06.000Z")'
 */
module.exports = _curry1(function toString(val) { return _toString(val, []); });


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var _equals = __webpack_require__(8);


module.exports = {

  baseMap: function(f) {
    return f(this.value);
  },

  getEquals: function(constructor) {
    return function equals(that) {
      return that instanceof constructor && _equals(this.value, that.value);
    };
  },

  extend: function(Child, Parent) {
    function Ctor() {
      this.constructor = Child;
    }
    Ctor.prototype = Parent.prototype;
    Child.prototype = new Ctor();
    Child.super_ = Parent.prototype;
  },

  identity: function(x) { return x; },

  notImplemented: function(str) {
    return function() {
      throw new Error(str + ' is not implemented');
    };
  },

  notCallable: function(fn) {
    return function() {
      throw new Error(fn + ' cannot be called directly');
    };
  },

  returnThis: function() { return this; },

  chainRecNext: function(v) {
    return { isNext: true, value: v };
  },

  chainRecDone: function(v) {
    return { isNext: false, value: v };
  },

  deriveAp: function (Type) {
    return function(fa) {
      return this.chain(function (f) {
        return fa.chain(function (a) {
          return Type.of(f(a));
        });
      });
    };
  },

  deriveMap: function (Type) {
    return function (f) {
      return this.chain(function (a) {
        return Type.of(f(a));
      });
    };
  }

};


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = function _arity(n, fn) {
  /* eslint-disable no-unused-vars */
  switch (n) {
    case 0: return function() { return fn.apply(this, arguments); };
    case 1: return function(a0) { return fn.apply(this, arguments); };
    case 2: return function(a0, a1) { return fn.apply(this, arguments); };
    case 3: return function(a0, a1, a2) { return fn.apply(this, arguments); };
    case 4: return function(a0, a1, a2, a3) { return fn.apply(this, arguments); };
    case 5: return function(a0, a1, a2, a3, a4) { return fn.apply(this, arguments); };
    case 6: return function(a0, a1, a2, a3, a4, a5) { return fn.apply(this, arguments); };
    case 7: return function(a0, a1, a2, a3, a4, a5, a6) { return fn.apply(this, arguments); };
    case 8: return function(a0, a1, a2, a3, a4, a5, a6, a7) { return fn.apply(this, arguments); };
    case 9: return function(a0, a1, a2, a3, a4, a5, a6, a7, a8) { return fn.apply(this, arguments); };
    case 10: return function(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) { return fn.apply(this, arguments); };
    default: throw new Error('First argument to _arity must be a non-negative integer no greater than ten');
  }
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(0);
var curryN = __webpack_require__(7);


/**
 * Returns a curried equivalent of the provided function. The curried function
 * has two unusual capabilities. First, its arguments needn't be provided one
 * at a time. If `f` is a ternary function and `g` is `R.curry(f)`, the
 * following are equivalent:
 *
 *   - `g(1)(2)(3)`
 *   - `g(1)(2, 3)`
 *   - `g(1, 2)(3)`
 *   - `g(1, 2, 3)`
 *
 * Secondly, the special placeholder value [`R.__`](#__) may be used to specify
 * "gaps", allowing partial application of any combination of arguments,
 * regardless of their positions. If `g` is as above and `_` is [`R.__`](#__),
 * the following are equivalent:
 *
 *   - `g(1, 2, 3)`
 *   - `g(_, 2, 3)(1)`
 *   - `g(_, _, 3)(1)(2)`
 *   - `g(_, _, 3)(1, 2)`
 *   - `g(_, 2)(1)(3)`
 *   - `g(_, 2)(1, 3)`
 *   - `g(_, 2)(_, 3)(1)`
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (* -> a) -> (* -> a)
 * @param {Function} fn The function to curry.
 * @return {Function} A new, curried function.
 * @see R.curryN
 * @example
 *
 *      var addFourNumbers = (a, b, c, d) => a + b + c + d;
 *
 *      var curriedAddFourNumbers = R.curry(addFourNumbers);
 *      var f = curriedAddFourNumbers(1, 2);
 *      var g = f(3);
 *      g(4); //=> 10
 */
module.exports = _curry1(function curry(fn) {
  return curryN(fn.length, fn);
});


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = function _isPlaceholder(a) {
  return a != null &&
         typeof a === 'object' &&
         a['@@functional/placeholder'] === true;
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var _arity = __webpack_require__(4);
var _curry1 = __webpack_require__(0);
var _curry2 = __webpack_require__(1);
var _curryN = __webpack_require__(44);


/**
 * Returns a curried equivalent of the provided function, with the specified
 * arity. The curried function has two unusual capabilities. First, its
 * arguments needn't be provided one at a time. If `g` is `R.curryN(3, f)`, the
 * following are equivalent:
 *
 *   - `g(1)(2)(3)`
 *   - `g(1)(2, 3)`
 *   - `g(1, 2)(3)`
 *   - `g(1, 2, 3)`
 *
 * Secondly, the special placeholder value [`R.__`](#__) may be used to specify
 * "gaps", allowing partial application of any combination of arguments,
 * regardless of their positions. If `g` is as above and `_` is [`R.__`](#__),
 * the following are equivalent:
 *
 *   - `g(1, 2, 3)`
 *   - `g(_, 2, 3)(1)`
 *   - `g(_, _, 3)(1)(2)`
 *   - `g(_, _, 3)(1, 2)`
 *   - `g(_, 2)(1)(3)`
 *   - `g(_, 2)(1, 3)`
 *   - `g(_, 2)(_, 3)(1)`
 *
 * @func
 * @memberOf R
 * @since v0.5.0
 * @category Function
 * @sig Number -> (* -> a) -> (* -> a)
 * @param {Number} length The arity for the returned function.
 * @param {Function} fn The function to curry.
 * @return {Function} A new, curried function.
 * @see R.curry
 * @example
 *
 *      var sumArgs = (...args) => R.sum(args);
 *
 *      var curriedAddFourNumbers = R.curryN(4, sumArgs);
 *      var f = curriedAddFourNumbers(1, 2);
 *      var g = f(3);
 *      g(4); //=> 10
 */
module.exports = _curry2(function curryN(length, fn) {
  if (length === 1) {
    return _curry1(fn);
  }
  return _arity(length, _curryN(length, [], fn));
});


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(1);
var _equals = __webpack_require__(46);


/**
 * Returns `true` if its arguments are equivalent, `false` otherwise. Handles
 * cyclical data structures.
 *
 * Dispatches symmetrically to the `equals` methods of both arguments, if
 * present.
 *
 * @func
 * @memberOf R
 * @since v0.15.0
 * @category Relation
 * @sig a -> b -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @example
 *
 *      R.equals(1, 1); //=> true
 *      R.equals(1, '1'); //=> false
 *      R.equals([1, 2, 3], [1, 2, 3]); //=> true
 *
 *      var a = {}; a.v = a;
 *      var b = {}; b.v = b;
 *      R.equals(a, b); //=> true
 */
module.exports = _curry2(function equals(a, b) {
  return _equals(a, b, [], []);
});


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var _isArray = __webpack_require__(11);


/**
 * This checks whether a function has a [methodname] function. If it isn't an
 * array it will execute that function otherwise it will default to the ramda
 * implementation.
 *
 * @private
 * @param {Function} fn ramda implemtation
 * @param {String} methodname property to check for a custom implementation
 * @return {Object} Whatever the return value of the method is.
 */
module.exports = function _checkForMethod(methodname, fn) {
  return function() {
    var length = arguments.length;
    if (length === 0) {
      return fn();
    }
    var obj = arguments[length - 1];
    return (_isArray(obj) || typeof obj[methodname] !== 'function') ?
      fn.apply(this, arguments) :
      obj[methodname].apply(obj, Array.prototype.slice.call(arguments, 0, length - 1));
  };
};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = function _has(prop, obj) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

/**
 * Tests whether or not an object is an array.
 *
 * @private
 * @param {*} val The object to test.
 * @return {Boolean} `true` if `val` is an array, `false` otherwise.
 * @example
 *
 *      _isArray([]); //=> true
 *      _isArray(null); //=> false
 *      _isArray({}); //=> false
 */
module.exports = Array.isArray || function _isArray(val) {
  return (val != null &&
          val.length >= 0 &&
          Object.prototype.toString.call(val) === '[object Array]');
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(0);
var _has = __webpack_require__(10);
var _isArguments = __webpack_require__(51);


/**
 * Returns a list containing the names of all the enumerable own properties of
 * the supplied object.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig {k: v} -> [k]
 * @param {Object} obj The object to extract properties from
 * @return {Array} An array of the object's own properties.
 * @see R.keysIn, R.values
 * @example
 *
 *      R.keys({a: 1, b: 2, c: 3}); //=> ['a', 'b', 'c']
 */
module.exports = (function() {
  // cover IE < 9 keys issues
  var hasEnumBug = !({toString: null}).propertyIsEnumerable('toString');
  var nonEnumerableProps = ['constructor', 'valueOf', 'isPrototypeOf', 'toString',
                            'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];
  // Safari bug
  var hasArgsEnumBug = (function() {
    'use strict';
    return arguments.propertyIsEnumerable('length');
  }());

  var contains = function contains(list, item) {
    var idx = 0;
    while (idx < list.length) {
      if (list[idx] === item) {
        return true;
      }
      idx += 1;
    }
    return false;
  };

  return typeof Object.keys === 'function' && !hasArgsEnumBug ?
    _curry1(function keys(obj) {
      return Object(obj) !== obj ? [] : Object.keys(obj);
    }) :
    _curry1(function keys(obj) {
      if (Object(obj) !== obj) {
        return [];
      }
      var prop, nIdx;
      var ks = [];
      var checkArgsLength = hasArgsEnumBug && _isArguments(obj);
      for (prop in obj) {
        if (_has(prop, obj) && (!checkArgsLength || prop !== 'length')) {
          ks[ks.length] = prop;
        }
      }
      if (hasEnumBug) {
        nIdx = nonEnumerableProps.length - 1;
        while (nIdx >= 0) {
          prop = nonEnumerableProps[nIdx];
          if (_has(prop, obj) && !contains(ks, prop)) {
            ks[ks.length] = prop;
          }
          nIdx -= 1;
        }
      }
      return ks;
    });
}());


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var toString = __webpack_require__(2);

var util = __webpack_require__(3);


/**
 * A data type that holds a value and exposes a monadic api.
 */

/**
 * Constructs a new `Identity[a]` data type that holds a single
 * value `a`.
 * @param {*} a Value of any type
 * @sig a -> Identity[a]
 */
function Identity(x) {
  if (!(this instanceof Identity)) {
    return new Identity(x);
  }
  this.value = x;
}

Identity.prototype['@@type'] = 'ramda-fantasy/Identity';

/**
 * Applicative specification. Creates a new `Identity[a]` holding the value `a`.
 * @param {*} a Value of any type
 * @returns Identity[a]
 * @sig a -> Identity[a]
 */
Identity.of = function(x) {
  return new Identity(x);
};
Identity.prototype.of = Identity.of;

/**
 * Functor specification. Creates a new `Identity[a]` mapping function `f` onto
 * `a` returning any value b.
 * @param {Function} f Maps `a` to any value `b`
 * @returns Identity[b]
 * @sig @Identity[a] => (a -> b) -> Identity[b]
 */
Identity.prototype.map = function(f) {
  return new Identity(f(this.value));
};

/**
 * Apply specification. Applies the function inside the `Identity[a]`
 * type to another applicative type.
 * @param {Applicative[a]} app Applicative that will apply its function
 * @returns Applicative[b]
 * @sig (Identity[a -> b], f: Applicative[_]) => f[a] -> f[b]
 */
Identity.prototype.ap = function(app) {
  return app.map(this.value);
};

/**
 * Chain specification. Transforms the value of the `Identity[a]`
 * type using an unary function to monads. The `Identity[a]` type
 * should contain a function, otherwise an error is thrown.
 *
 * @param {Function} fn Transforms `a` into a `Monad[b]`
 * @returns Monad[b]
 * @sig (Identity[a], m: Monad[_]) => (a -> m[b]) -> m[b]
 */
Identity.prototype.chain = function(fn) {
  return fn(this.value);
};

// chainRec
Identity.chainRec = Identity.prototype.chainRec = function(f, i) {
  var state = util.chainRecNext(i);
  while (state.isNext) {
    state = f(util.chainRecNext, util.chainRecDone, state.value).get();
  }
  return Identity(state.value);
};

/**
 * Returns the value of `Identity[a]`
 *
 * @returns a
 * @sig (Identity[a]) => a
 */
Identity.prototype.get = function() {
  return this.value;
};

// equality method to enable testing
Identity.prototype.equals = util.getEquals(Identity);

Identity.prototype.toString = function() {
  return 'Identity(' + toString(this.value) + ')';
};

module.exports = Identity;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var toString = __webpack_require__(2);
var equals = __webpack_require__(8);


function Tuple(x, y) {
  switch (arguments.length) {
    case 0:
      throw new TypeError('no arguments to Tuple');
    case 1:
      return function(y) {
        return new _Tuple(x, y);
      };
    default:
      return new _Tuple(x, y);
  }
}

function _Tuple(x, y) {
  this[0] = x;
  this[1] = y;
  this.length = 2;
}

function ensureConcat(xs) {
  xs.forEach(function(x) {
    if (typeof x.concat != 'function') {
      throw new TypeError(toString(x) + ' must be a semigroup to perform this operation');
    }
  });
}

Tuple.fst = function(x) {
  return x[0];
};

Tuple.snd = function(x) {
  return x[1];
};

_Tuple.prototype['@@type'] = 'ramda-fantasy/Tuple';

// semigroup
_Tuple.prototype.concat = function(x) {
  ensureConcat([this[0], this[1]]);
  return Tuple(this[0].concat(x[0]), this[1].concat(x[1]));
};

// functor
_Tuple.prototype.map = function(f) {
  return Tuple(this[0], f(this[1]));
};

// apply
_Tuple.prototype.ap = function(m) {
  ensureConcat([this[0]]);
  return Tuple(this[0].concat(m[0]), this[1](m[1]));
};

// setoid
_Tuple.prototype.equals = function(that) {
  return that instanceof _Tuple && equals(this[0], that[0]) && equals(this[1], that[1]);
};

_Tuple.prototype.toString = function() {
  return 'Tuple(' + toString(this[0]) + ', ' + toString(this[1]) + ')';
};

module.exports = Tuple;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var pipe = __webpack_require__(64);
var reverse = __webpack_require__(67);


/**
 * Performs right-to-left function composition. The rightmost function may have
 * any arity; the remaining functions must be unary.
 *
 * **Note:** The result of compose is not automatically curried.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig ((y -> z), (x -> y), ..., (o -> p), ((a, b, ..., n) -> o)) -> ((a, b, ..., n) -> z)
 * @param {...Function} ...functions The functions to compose
 * @return {Function}
 * @see R.pipe
 * @example
 *
 *      var classyGreeting = (firstName, lastName) => "The name's " + lastName + ", " + firstName + " " + lastName
 *      var yellGreeting = R.compose(R.toUpper, classyGreeting);
 *      yellGreeting('James', 'Bond'); //=> "THE NAME'S BOND, JAMES BOND"
 *
 *      R.compose(Math.abs, R.add(1), R.multiply(2))(-4) //=> 7
 *
 * @symb R.compose(f, g, h)(a, b) = f(g(h(a, b)))
 */
module.exports = function compose() {
  if (arguments.length === 0) {
    throw new Error('compose requires at least one argument');
  }
  return pipe.apply(this, reverse(arguments));
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(0);
var _curry2 = __webpack_require__(1);
var _isPlaceholder = __webpack_require__(6);


/**
 * Optimized internal three-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
module.exports = function _curry3(fn) {
  return function f3(a, b, c) {
    switch (arguments.length) {
      case 0:
        return f3;
      case 1:
        return _isPlaceholder(a) ? f3
             : _curry2(function(_b, _c) { return fn(a, _b, _c); });
      case 2:
        return _isPlaceholder(a) && _isPlaceholder(b) ? f3
             : _isPlaceholder(a) ? _curry2(function(_a, _c) { return fn(_a, b, _c); })
             : _isPlaceholder(b) ? _curry2(function(_b, _c) { return fn(a, _b, _c); })
             : _curry1(function(_c) { return fn(a, b, _c); });
      default:
        return _isPlaceholder(a) && _isPlaceholder(b) && _isPlaceholder(c) ? f3
             : _isPlaceholder(a) && _isPlaceholder(b) ? _curry2(function(_a, _b) { return fn(_a, _b, c); })
             : _isPlaceholder(a) && _isPlaceholder(c) ? _curry2(function(_a, _c) { return fn(_a, b, _c); })
             : _isPlaceholder(b) && _isPlaceholder(c) ? _curry2(function(_b, _c) { return fn(a, _b, _c); })
             : _isPlaceholder(a) ? _curry1(function(_a) { return fn(_a, b, c); })
             : _isPlaceholder(b) ? _curry1(function(_b) { return fn(a, _b, c); })
             : _isPlaceholder(c) ? _curry1(function(_c) { return fn(a, b, _c); })
             : fn(a, b, c);
    }
  };
};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = function _isString(x) {
  return Object.prototype.toString.call(x) === '[object String]';
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var _isArrayLike = __webpack_require__(52);
var _xwrap = __webpack_require__(62);
var bind = __webpack_require__(36);


module.exports = (function() {
  function _arrayReduce(xf, acc, list) {
    var idx = 0;
    var len = list.length;
    while (idx < len) {
      acc = xf['@@transducer/step'](acc, list[idx]);
      if (acc && acc['@@transducer/reduced']) {
        acc = acc['@@transducer/value'];
        break;
      }
      idx += 1;
    }
    return xf['@@transducer/result'](acc);
  }

  function _iterableReduce(xf, acc, iter) {
    var step = iter.next();
    while (!step.done) {
      acc = xf['@@transducer/step'](acc, step.value);
      if (acc && acc['@@transducer/reduced']) {
        acc = acc['@@transducer/value'];
        break;
      }
      step = iter.next();
    }
    return xf['@@transducer/result'](acc);
  }

  function _methodReduce(xf, acc, obj, methodName) {
    return xf['@@transducer/result'](obj[methodName](bind(xf['@@transducer/step'], xf), acc));
  }

  var symIterator = (typeof Symbol !== 'undefined') ? Symbol.iterator : '@@iterator';
  return function _reduce(fn, acc, list) {
    if (typeof fn === 'function') {
      fn = _xwrap(fn);
    }
    if (_isArrayLike(list)) {
      return _arrayReduce(fn, acc, list);
    }
    if (typeof list['fantasy-land/reduce'] === 'function') {
      return _methodReduce(fn, acc, list, 'fantasy-land/reduce');
    }
    if (list[symIterator] != null) {
      return _iterableReduce(fn, acc, list[symIterator]());
    }
    if (typeof list.next === 'function') {
      return _iterableReduce(fn, acc, list);
    }
    if (typeof list.reduce === 'function') {
      return _methodReduce(fn, acc, list, 'reduce');
    }

    throw new TypeError('reduce: list must be array or iterable');
  };
}());


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var defaultOptions = {
  primaryColor: '',
  speed: '1s',
  spaceBetween: '0',
  marginLeft: '0',
  right: false
};

exports.default = defaultOptions;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var styling = function styling(element, prop, value) {
  element.style[prop] = value;
  return element;
};
var _addClass = function _addClass(element, classname) {
  element.className += classname;
  return element;
};

var styl = function styl(element) {
  return {
    width: function width(value) {
      return styl(styling(element, 'width', value));
    },
    height: function height(value) {
      return styl(styling(element, 'height', value));
    },
    marginTop: function marginTop(value) {
      return styl(styling(element, 'margin-top', value));
    },
    marginLeft: function marginLeft(value) {
      return styl(styling(element, 'margin-left', value));
    },
    addClass: function addClass(classname) {
      return styl(_addClass(element, classname));
    },
    hide: function hide() {
      return styl(styling(element, 'display', 'none'));
    },
    toDOM: function toDOM() {
      return element;
    }
  };
};

exports.default = styl;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  Either: __webpack_require__(27),
  Future: __webpack_require__(28),
  Identity: __webpack_require__(13),
  IO: __webpack_require__(29),
  lift2: __webpack_require__(33),
  lift3: __webpack_require__(34),
  Maybe: __webpack_require__(30),
  Reader: __webpack_require__(31),
  State: __webpack_require__(32),
  Tuple: __webpack_require__(14)
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(25);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(71)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!./style.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!./style.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

__webpack_require__(22);

var _ramdaFantasy = __webpack_require__(21);

var _config = __webpack_require__(19);

var _config2 = _interopRequireDefault(_config);

var _styl = __webpack_require__(20);

var _styl2 = _interopRequireDefault(_styl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var Right = _ramdaFantasy.Either.Right;
var Left = _ramdaFantasy.Either.Left;

var Placeload = {
  $: function $(x) {
    return utils(getHoldersElements(x), selector(x));
  }

  // selector :: String -> Either
};var selector = function selector(x) {
  var element = document.querySelector(x);
  if (element) return Right(element);
  return Left('Don\' found ' + x + ' element');
};

// getHoldersElements :: String -> Either
var getHoldersElements = function getHoldersElements(x) {
  return (0, _ramdaFantasy.IO)(function () {
    return selector(x).chain(function (container) {
      var elementPlaceload = (0, _styl2.default)(document.createElement('div')).addClass('placeload-background').toDOM();
      container.appendChild(elementPlaceload);
      return Right({
        container: container,
        placeload: elementPlaceload,
        elems: []
      });
    });
  });
};

// place  :: IO -> Object
var utils = function utils(_IO, container) {
  return {
    config: function config(configs) {
      return utils(configIO(_IO, configs), container);
    },
    line: function line(f) {
      return utils(drawIO(f, _IO), container);
    },
    spaceBetween: function spaceBetween(size) {
      return utils(drawIO({ spaceBetween: size }, _IO), container);
    },
    fold: function fold(err, succ) {
      _IO.runIO().either(err, succ);
      return {
        remove: function remove() {
          container.map(function (element) {
            element.parentNode.removeChild(element);
          });
        }
      };
    },
    inspect: function inspect() {
      return console.log('IO: ', _IO.toString());
    }
  };
};

// drawIO :: F -> IO -> F(IO)
var drawIO = function drawIO(f, _IO) {
  return _IO.map(function (elements) {
    return elements.map(function (el) {
      var newElement = document.createElement('div');
      (0, _styl2.default)(newElement).addClass('placeload-masker');
      f(elementStyle(elements, newElement));
      return _extends({}, elements.value, { elems: [].concat(_toConsumableArray(elements.value.elems), [newElement]) });
    });
  });
};

// elementStyle :: Object(DOM Elements) -> Node(DOM) -> Object (fn, fn, ...)
var elementStyle = function elementStyle(elements, newElement) {
  return {
    width: function width(size) {
      return elementStyle(createElemFolk(elements, newElement, 'width', size), newElement);
    },
    height: function height(size) {
      return elementStyle(createElemFolk(elements, newElement, 'height', size), newElement);
    }
  };
};

// configIO :: IO -> IO
var configIO = function configIO(_IO, config) {
  return _IO.map(function (element) {
    return element.chain(function (elem) {
      var stylWithDefault = _extends({ defaultOptions: _config2.default }, config);
      var placeloadHeight = elem.placeload.style.height || 0;
      var newHeightToPlaceload = parseInt(placeloadHeight) + parseInt(stylWithDefault.spaceBetween);
      var newElement = (0, _styl2.default)(document.createElement('div')).width('100%').height(stylWithDefault.spaceBetween).marginTop(placeloadHeight).addClass('placeload-masker').toDOM();

      if (stylWithDefault.right) {
        runDrawRightLine(elem, stylWithDefault).runIO();
      } else {
        (0, _styl2.default)(elem.placeload).height(newHeightToPlaceload + 'px');
      }
      elem.placeload.style.animationDuration = stylWithDefault.speed;
      elem.placeload.appendChild(newElement);
      return element;
    });
  });
};

var runDrawRightLine = function runDrawRightLine(elem, stylWithDefault) {
  return (0, _ramdaFantasy.IO)(function () {
    var lastChild = elem.elems[elem.elems.length - 2];
    var itemToRight = elem.elems[elem.elems.length - 1];
    var elementRow = (0, _styl2.default)(document.createElement('div')).addClass('placeload-masker').width('100%').height('10px').marginTop('20px').marginLeft(lastChild.style.marginLeft).toDOM();

    (0, _styl2.default)(lastChild).hide();
    (0, _styl2.default)(itemToRight).width(stylWithDefault.marginLeft).height(itemToRight.style.marginTop).marginLeft(lastChild.style.marginLeft).marginTop(lastChild.style.marginTop);

    (0, _styl2.default)(elem.placeload).height(parseInt(lastChild.style.marginTop) + parseInt(lastChild.style.height) + 'px');
    elem.placeload.appendChild(elementRow);
  });
};

// createElemFolk :: Either -> Node(DOM) -> prop -> value -> Object(DOM Elements)
var createElemFolk = function createElemFolk(elements, newElement, prop, value) {
  return elements.map(function (elem) {
    var height = elem.placeload.style.height || 0;
    switch (prop) {
      case 'width':
        (0, _styl2.default)(newElement).width('100%').marginLeft(value + '%').marginTop(height);
        break;
      case 'height':
        (0, _styl2.default)(newElement).height(value + 'px');
        (0, _styl2.default)(elem.placeload).height(parseInt(height) + value + 'px');
        break;
    }
    elem.placeload.appendChild(newElement);
    return elem;
  });
};

// Export
if (typeof window !== 'undefined' && window) {
  if (( false ? 'undefined' : _typeof(module)) === 'object' && module.exports) {
    module.exports = Placeload;
  } else {
    // Browser
    window.Placeload = Placeload;
  }
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(23)(module)))

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(26)(undefined);
// imports


// module
exports.push([module.i, "/* Animation */\n@keyframes placeHolderShimmer{\n    0%{\n        background-position: -468px 0\n    }\n    100%{\n        background-position: 468px 0\n    }\n}\n\n.placeload-background {\n    animation-duration: 1s;\n    animation-fill-mode: forwards;\n    animation-iteration-count: infinite;\n    animation-name: placeHolderShimmer;\n    animation-timing-function: linear;\n    background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);\n    background-size: 1000px 104px;\n    height: 0;\n    position: relative;\n    overflow: hidden;\n}\n.placeload-masker {\n    background: #fff;\n    position: absolute;\n}\n", ""]);

// exports


/***/ }),
/* 26 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var curry = __webpack_require__(5);
var toString = __webpack_require__(2);

var util = __webpack_require__(3);


function Either(left, right) {
  switch (arguments.length) {
    case 0:
      throw new TypeError('no arguments to Either');
    case 1:
      return function(right) {
        return right == null ? Either.Left(left) : Either.Right(right);
      };
    default:
      return right == null ? Either.Left(left) : Either.Right(right);
  }
}

Either.prototype['@@type'] = 'ramda-fantasy/Either';

Either.prototype.map = util.returnThis;

Either.of = Either.prototype.of = function(value) {
  return Either.Right(value);
};

Either.prototype.chain = util.returnThis; // throw?

Either.either = curry(function either(leftFn, rightFn, e) {
  if (e instanceof _Left) {
    return leftFn(e.value);
  } else if (e instanceof _Right) {
    return rightFn(e.value);
  } else {
    throw new TypeError('invalid type given to Either.either');
  }
});

Either.isLeft = function(x) {
  return x.isLeft;
};

Either.isRight = function(x) {
  return x.isRight;
};


// Right
function _Right(x) {
  this.value = x;
}
util.extend(_Right, Either);

_Right.prototype.isRight = true;
_Right.prototype.isLeft = false;

_Right.prototype.map = function(fn) {
  return new _Right(fn(this.value));
};

_Right.prototype.ap = function(that) {
  return that.map(this.value);
};

_Right.prototype.chain = function(f) {
  return f(this.value);
};

//chainRec
Either.chainRec = Either.prototype.chainRec = function(f, i) {
  var res, state = util.chainRecNext(i);
  while (state.isNext) {
    res = f(util.chainRecNext, util.chainRecDone, state.value);
    if (Either.isLeft(res)) {
      return res;
    }
    state = res.value;
  }
  return Either.Right(state.value);
};

_Right.prototype.bimap = function(_, f) {
  return new _Right(f(this.value));
};

_Right.prototype.extend = function(f) {
  return new _Right(f(this));
};

_Right.prototype.toString = function() {
  return 'Either.Right(' + toString(this.value) + ')';
};

_Right.prototype.equals = util.getEquals(_Right);

Either.Right = function(value) {
  return new _Right(value);
};


// Left
function _Left(x) {
  this.value = x;
}
util.extend(_Left, Either);

_Left.prototype.isLeft = true;
_Left.prototype.isRight = false;

_Left.prototype.ap = util.returnThis;

_Left.prototype.bimap = function(f) {
  return new _Left(f(this.value));
};

_Left.prototype.extend = util.returnThis;

_Left.prototype.toString = function() {
  return 'Either.Left(' + toString(this.value) + ')';
};

_Left.prototype.equals = util.getEquals(_Left);

Either.Left = function(value) {
  return new _Left(value);
};


// either
Either.prototype.either = function instanceEither(leftFn, rightFn) {
  return this.isLeft ? leftFn(this.value) : rightFn(this.value);
};

module.exports = Either;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var once = __webpack_require__(63);
var forEach = __webpack_require__(38);
var toString = __webpack_require__(2);
var curry = __webpack_require__(5);

var util = __webpack_require__(3);

function jail(handler, f){
  return function(a){
    try{
      return f(a);
    } catch(err) {
      handler(err);
    }
  };
}

// `f` is a function that takes two function arguments: `reject` (failure) and `resolve` (success)
function Future(f) {
  if (!(this instanceof Future)) {
    return new Future(f);
  }
  this._fork = f;
}

Future.prototype['@@type'] = 'ramda-fantasy/Future';

Future.prototype.fork = function(reject, resolve) {
  this._fork(reject, jail(reject, resolve));
};

// functor
Future.prototype.map = function(f) {
  return this.chain(function(a) { return Future.of(f(a)); });
};

// apply
Future.prototype.ap = function(m) {
  var self = this;

  return new Future(function(rej, res) {
    var applyFn, val;
    var doReject = once(rej);

    var resolveIfDone = jail(doReject, function() {
      if (applyFn != null && val != null) {
        return res(applyFn(val));
      }
    });

    self._fork(doReject, function(fn) {
      applyFn = fn;
      resolveIfDone();
    });

    m._fork(doReject, function(v) {
      val = v;
      resolveIfDone();
    });

  });

};

// applicative
Future.of = function(x) {
  // should include a default rejection?
  return new Future(function(_, resolve) { return resolve(x); });
};

Future.prototype.of = Future.of;

// chain
//  f must be a function which returns a value
//  f must return a value of the same Chain
//  chain must return a value of the same Chain
//:: Future a, b => (b -> Future c) -> Future c
Future.prototype.chain = function(f) {  // Sorella's:
  return new Future(function(reject, resolve) {
    return this._fork(
      function(a) { return reject(a); },
      jail(reject, function(b) { return f(b)._fork(reject, resolve); })
    );
  }.bind(this));
};

// chainRec
//
// Heavily influenced by the Aff MonadRec instance
// https://github.com/slamdata/purescript-aff/blob/51106474122d0e5aec8e3d5da5bb66cfe8062f55/src/Control/Monad/Aff.js#L263-L322
Future.chainRec = Future.prototype.chainRec = function(f, a) {
  return Future(function(reject, resolve) {
    return function go(acc) {
      // isSync could be in three possable states
      // * null - unresolved status
      // * true - synchronous future
      // * false - asynchronous future
      var isSync = null;
      var state = util.chainRecNext(acc);
      var onResolve = function(v) {
        // If the `isSync` is still unresolved, we have observed a
        // synchronous future. Otherwise, `isSync` will be `false`.
        if (isSync === null) {
          isSync = true;
          // Store the result for further synchronous processing.
          state = v;
        } else {
          // When we have observed an asynchronous future, we use normal
          // recursion. This is safe because we will be on a new stack.
          (v.isNext ? go : resolve)(v.value);
        }
      };
      while (state.isNext) {
        isSync = null;
        f(util.chainRecNext, util.chainRecDone, state.value).fork(reject, onResolve);
        // If the `isSync` has already resolved to `true` by our `onResolve`, then
        // we have observed a synchronous future. Otherwise it will still be `null`.
        if (isSync === true) {
          continue;
        } else {
          // If the status has not resolved yet, then we have observed an
          // asynchronous or failed future so update status and exit the loop.
          isSync = false;
          return;
        }
      }
      resolve(state.value);
    }(a);
  });
};

// chainReject
// Like chain but operates on the reject instead of the resolve case.
//:: Future a, b => (a -> Future c) -> Future c
Future.prototype.chainReject = function(f) {
  return new Future(function(reject, resolve) {
    return this._fork(
      jail(reject, function(a) { return f(a)._fork(reject, resolve); }),
      function(b) { return resolve(b); }
    );
  }.bind(this));
};

// monad
// A value that implements the Monad specification must also implement the Applicative and Chain specifications.
// see above.

Future.prototype.bimap = function(errFn, successFn) {
  var self = this;
  return new Future(function(reject, resolve) {
    self._fork(
      jail(reject, function(err) { reject(errFn(err)); }),
      jail(reject, function(val) { resolve(successFn(val)); })
    );
  });
};

Future.reject = function(val) {
  return new Future(function(reject) {
    reject(val);
  });
};

Future.prototype.toString = function() {
  return 'Future(' + toString(this._fork) + ')';
};

Future.cache = function(f) {
  var status = 'IDLE';
  var listeners = [];
  var cachedValue;

  var handleCompletion = curry(function(newStatus, cb, val) {
    status = newStatus;
    cachedValue = val;
    cb(val);
    forEach(function(listener) {
      listener[status](cachedValue);
    }, listeners);
  });

  function addListeners(reject, resolve) {
    listeners.push({ REJECTED: reject, RESOLVED: resolve } );
  }

  function doResolve(reject, resolve) {
    status = 'PENDING';
    return f._fork(
      handleCompletion('REJECTED', reject),
      handleCompletion('RESOLVED', resolve)
    );
  }

  return new Future(function(reject, resolve) {

    switch(status) {
      case 'IDLE': doResolve(reject, resolve); break;
      case 'PENDING': addListeners(reject, resolve); break;
      case 'REJECTED': reject(cachedValue); break;
      case 'RESOLVED': resolve(cachedValue); break;
    }

  });
};

module.exports = Future;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var compose = __webpack_require__(15);
var toString = __webpack_require__(2);

var util = __webpack_require__(3);

module.exports = IO;

function IO(fn) {
  if (!(this instanceof IO)) {
    return new IO(fn);
  }
  this.fn = fn;
}

IO.prototype['@@type'] = 'ramda-fantasy/IO';

// `f` must return an IO
IO.prototype.chain = function(f) {
  var io = this;
  return new IO(function() {
    var next = f(io.fn.apply(io, arguments));
    return next.fn.apply(next, arguments);
  });
};

//chainRec
IO.chainRec = IO.prototype.chainRec = function(f, i) {
  return new IO(function() {
    var state = util.chainRecNext(i);
    while (state.isNext) {
      state = f(util.chainRecNext, util.chainRecDone, state.value).fn();
    }
    return state.value;
  });
};

IO.prototype.map = function(f) {
  var io = this;
  return new IO(compose(f, io.fn));
};

// `this` IO must wrap a function `f` that takes an IO (`thatIo`) as input
// `f` must return an IO
IO.prototype.ap = function(thatIo) {
  return this.chain(function(f) {
    return thatIo.map(f);
  });
};

IO.runIO = function(io) {
  return io.runIO.apply(io, [].slice.call(arguments, 1));
};

IO.prototype.runIO = function() {
  return this.fn.apply(this, arguments);
};

IO.prototype.of = function(x) {
  return new IO(function() { return x; });
};

IO.of = IO.prototype.of;

IO.prototype.toString = function() {
  return 'IO(' + toString(this.fn) + ')';
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var toString = __webpack_require__(2);
var curry = __webpack_require__(5);

var util = __webpack_require__(3);

function Maybe(x) {
  return x == null ? _nothing : Maybe.Just(x);
}

Maybe.prototype['@@type'] = 'ramda-fantasy/Maybe';

function Just(x) {
  this.value = x;
}
util.extend(Just, Maybe);

Just.prototype.isJust = true;
Just.prototype.isNothing = false;

function Nothing() {}
util.extend(Nothing, Maybe);

Nothing.prototype.isNothing = true;
Nothing.prototype.isJust = false;

var _nothing = new Nothing();

Maybe.Nothing = function() {
  return _nothing;
};

Maybe.Just = function(x) {
  return new Just(x);
};

Maybe.of = Maybe.Just;

Maybe.prototype.of = Maybe.Just;

Maybe.isJust = function(x) {
  return x.isJust;
};

Maybe.isNothing = function(x) {
  return x.isNothing;
};

Maybe.maybe = curry(function(nothingVal, justFn, m) {
  return m.reduce(function(_, x) {
    return justFn(x);
  }, nothingVal);
});

Maybe.toMaybe = Maybe;

// semigroup
Just.prototype.concat = function(that) {
  return that.isNothing ? this : this.of(
    this.value.concat(that.value)
  );
};

Nothing.prototype.concat = util.identity;

// functor
Just.prototype.map = function(f) {
  return this.of(f(this.value));
};

Nothing.prototype.map = util.returnThis;

// apply
// takes a Maybe that wraps a function (`app`) and applies its `map`
// method to this Maybe's value, which must be a function.
Just.prototype.ap = function(m) {
  return m.map(this.value);
};

Nothing.prototype.ap = util.returnThis;

// applicative
// `of` inherited from `Maybe`


// chain
//  f must be a function which returns a value
//  f must return a value of the same Chain
//  chain must return a value of the same Chain
Just.prototype.chain = util.baseMap;

Nothing.prototype.chain = util.returnThis;


//chainRec
Maybe.chainRec = Maybe.prototype.chainRec = function(f, i) {
  var res, state = util.chainRecNext(i);
  while (state.isNext) {
    res = f(util.chainRecNext, util.chainRecDone, state.value);
    if (Maybe.isNothing(res)) {
      return res;
    }
    state = res.value;
  }
  return Maybe.Just(state.value);
};


//
Just.prototype.datatype = Just;

Nothing.prototype.datatype = Nothing;

// monad
// A value that implements the Monad specification must also implement the Applicative and Chain specifications.
// see above.

// equality method to enable testing
Just.prototype.equals = util.getEquals(Just);

Nothing.prototype.equals = function(that) {
  return that === _nothing;
};

Maybe.prototype.isNothing = function() {
  return this === _nothing;
};

Maybe.prototype.isJust = function() {
  return this instanceof Just;
};

Just.prototype.getOrElse = function() {
  return this.value;
};

Nothing.prototype.getOrElse = function(a) {
  return a;
};

Just.prototype.reduce = function(f, x) {
  return f(x, this.value);
};

Nothing.prototype.reduce = function(f, x) {
  return x;
};

Just.prototype.toString = function() {
  return 'Maybe.Just(' + toString(this.value) + ')';
};

Nothing.prototype.toString = function() {
  return 'Maybe.Nothing()';
};

module.exports = Maybe;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var compose = __webpack_require__(15);
var identity = __webpack_require__(40);
var toString = __webpack_require__(2);
var always = __webpack_require__(35);


function Reader(run) {
  if (!(this instanceof Reader)) {
    return new Reader(run);
  }
  this.run = run;
}

Reader.run = function(reader) {
  return reader.run.apply(reader, [].slice.call(arguments, 1));
};

Reader.prototype['@@type'] = 'ramda-fantasy/Reader';

Reader.prototype.chain = function(f) {
  var reader = this;
  return new Reader(function(r) {
    return f(reader.run(r)).run(r);
  });
};

Reader.prototype.ap = function(a) {
  return this.chain(function(f) {
    return a.map(f);
  });
};

Reader.prototype.map = function(f) {
  return this.chain(function(a) {
    return Reader.of(f(a));
  });
};

Reader.prototype.of = function(a) {
  return new Reader(function() {
    return a;
  });
};
Reader.of = Reader.prototype.of;

Reader.ask = Reader(identity);

Reader.prototype.toString = function() {
  return 'Reader(' + toString(this.run) + ')';
};

Reader.T = function(M) {
  var ReaderT = function ReaderT(run) {
    if (!(this instanceof ReaderT)) {
      return new ReaderT(run);
    }
    this.run = run;
  };

  ReaderT.lift = compose(ReaderT, always);

  ReaderT.ask = ReaderT(M.of);

  ReaderT.prototype.of = ReaderT.of = function(a) {
    return ReaderT(function() {
      return M.of(a);
    });
  };

  ReaderT.prototype.chain = function(f) {
    var readerT = this;
    return ReaderT(function(e) {
      var m = readerT.run(e);
      return m.chain(function(a) {
        return f(a).run(e);
      });
    });
  };

  ReaderT.prototype.map = function(f) {
    return this.chain(function(a) {
      return ReaderT.of(f(a));
    });
  };

  ReaderT.prototype.ap = function(a) {
    var readerT = this;
    return ReaderT(function(e) {
      return readerT.run(e).ap(a.run(e));
    });
  };

  ReaderT.prototype.toString = function() {
    return 'ReaderT[' + M.name + '](' + toString(this.run) + ')';
  };

  return ReaderT;
};

module.exports = Reader;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var curry = __webpack_require__(5);

var Identity = __webpack_require__(13);
var Tuple = __webpack_require__(14);
var util = __webpack_require__(3);


function T(M) {
  function StateT(run) {
    if (!(this instanceof StateT)) {
      return new StateT(run);
    }
    this._run = run;
  }
  StateT.prototype.run = function(s) {
    return this._run(s);
  };
  StateT.prototype.eval = function(s) {
    return Tuple.fst(this.run(s));
  };
  StateT.prototype.exec = function(s) {
    return Tuple.snd(this.run(s));
  };
  StateT.prototype.chain = function(f) {
    var state = this;
    return StateT(function(s) {
      return state._run(s).chain(function(t) {
        return f(Tuple.fst(t))._run(Tuple.snd(t));
      });
    });
  };
  StateT.of = StateT.prototype.of = function(a) {
    return StateT(function (s) {
      return M.of(Tuple(a, s));
    });
  };
  StateT.prototype.ap = util.deriveAp(StateT);
  StateT.prototype.map = util.deriveMap(StateT);
  StateT.tailRec = curry(function(stepFn, init) {
    return StateT(function(s) {
      return M.tailRec(function(t) {
        return stepFn(Tuple.fst(t))._run(Tuple.snd(t)).chain(function (t_) {
          return M.of(Tuple.fst(t_).bimap(
            function(a) { return Tuple(a, Tuple.snd(t_)); },
            function(b) { return Tuple(b, Tuple.snd(t_)); }
          ));
        });
      }, Tuple(init, s));
    });
  });
  StateT.lift = function(ma) {
    return StateT(function(s) {
      return ma.chain(function(a) {
        return M.of(Tuple(a, s));
      });
    });
  };
  StateT.get = StateT(function(s) {
    return M.of(Tuple(s, s));
  });
  StateT.gets = function(f) {
    return StateT(function(s) {
      return M.of(Tuple(f(s), s));
    });
  };
  StateT.put = function(s) {
    return StateT(function(_) {
      return M.of(Tuple(void _, s));
    });
  };
  StateT.modify = function(f) {
    return StateT(function(s) {
      return M.of(Tuple(void 0, f(s)));
    });
  };

  return StateT;
}

var State = T(Identity);
State.T = T;
State.prototype.run = function(s) {
  return this._run(s).value;
};

module.exports = State;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var curryN = __webpack_require__(7);

module.exports = curryN(3, function lift2(f, a1, a2) {
  return a1.map(f).ap(a2);
});


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var curryN = __webpack_require__(7);

module.exports = curryN(4, function lift3(f, a1, a2, a3) {
  return a1.map(f).ap(a2).ap(a3);
});


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(0);


/**
 * Returns a function that always returns the given value. Note that for
 * non-primitives the value returned is a reference to the original value.
 *
 * This function is known as `const`, `constant`, or `K` (for K combinator) in
 * other languages and libraries.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig a -> (* -> a)
 * @param {*} val The value to wrap in a function
 * @return {Function} A Function :: * -> val.
 * @example
 *
 *      var t = R.always('Tee');
 *      t(); //=> 'Tee'
 */
module.exports = _curry1(function always(val) {
  return function() {
    return val;
  };
});


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var _arity = __webpack_require__(4);
var _curry2 = __webpack_require__(1);


/**
 * Creates a function that is bound to a context.
 * Note: `R.bind` does not provide the additional argument-binding capabilities of
 * [Function.prototype.bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).
 *
 * @func
 * @memberOf R
 * @since v0.6.0
 * @category Function
 * @category Object
 * @sig (* -> *) -> {*} -> (* -> *)
 * @param {Function} fn The function to bind to context
 * @param {Object} thisObj The context to bind `fn` to
 * @return {Function} A function that will execute in the context of `thisObj`.
 * @see R.partial
 * @example
 *
 *      var log = R.bind(console.log, console);
 *      R.pipe(R.assoc('a', 2), R.tap(log), R.assoc('a', 3))({a: 1}); //=> {a: 3}
 *      // logs {a: 2}
 * @symb R.bind(f, o)(a, b) = f.call(o, a, b)
 */
module.exports = _curry2(function bind(fn, thisObj) {
  return _arity(fn.length, function() {
    return fn.apply(thisObj, arguments);
  });
});


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(1);
var _dispatchable = __webpack_require__(45);
var _filter = __webpack_require__(47);
var _isObject = __webpack_require__(53);
var _reduce = __webpack_require__(18);
var _xfilter = __webpack_require__(61);
var keys = __webpack_require__(12);


/**
 * Takes a predicate and a `Filterable`, and returns a new filterable of the
 * same type containing the members of the given filterable which satisfy the
 * given predicate. Filterable objects include plain objects or any object
 * that has a filter method such as `Array`.
 *
 * Dispatches to the `filter` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Filterable f => (a -> Boolean) -> f a -> f a
 * @param {Function} pred
 * @param {Array} filterable
 * @return {Array} Filterable
 * @see R.reject, R.transduce, R.addIndex
 * @example
 *
 *      var isEven = n => n % 2 === 0;
 *
 *      R.filter(isEven, [1, 2, 3, 4]); //=> [2, 4]
 *
 *      R.filter(isEven, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
 */
module.exports = _curry2(_dispatchable(['filter'], _xfilter, function(pred, filterable) {
  return (
    _isObject(filterable) ?
      _reduce(function(acc, key) {
        if (pred(filterable[key])) {
          acc[key] = filterable[key];
        }
        return acc;
      }, {}, keys(filterable)) :
    // else
      _filter(pred, filterable)
  );
}));


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var _checkForMethod = __webpack_require__(9);
var _curry2 = __webpack_require__(1);


/**
 * Iterate over an input `list`, calling a provided function `fn` for each
 * element in the list.
 *
 * `fn` receives one argument: *(value)*.
 *
 * Note: `R.forEach` does not skip deleted or unassigned indices (sparse
 * arrays), unlike the native `Array.prototype.forEach` method. For more
 * details on this behavior, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#Description
 *
 * Also note that, unlike `Array.prototype.forEach`, Ramda's `forEach` returns
 * the original array. In some libraries this function is named `each`.
 *
 * Dispatches to the `forEach` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category List
 * @sig (a -> *) -> [a] -> [a]
 * @param {Function} fn The function to invoke. Receives one argument, `value`.
 * @param {Array} list The list to iterate over.
 * @return {Array} The original list.
 * @see R.addIndex
 * @example
 *
 *      var printXPlusFive = x => console.log(x + 5);
 *      R.forEach(printXPlusFive, [1, 2, 3]); //=> [1, 2, 3]
 *      // logs 6
 *      // logs 7
 *      // logs 8
 * @symb R.forEach(f, [a, b, c]) = [a, b, c]
 */
module.exports = _curry2(_checkForMethod('forEach', function forEach(fn, list) {
  var len = list.length;
  var idx = 0;
  while (idx < len) {
    fn(list[idx]);
    idx += 1;
  }
  return list;
}));


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(1);


/**
 * Returns true if its arguments are identical, false otherwise. Values are
 * identical if they reference the same memory. `NaN` is identical to `NaN`;
 * `0` and `-0` are not identical.
 *
 * @func
 * @memberOf R
 * @since v0.15.0
 * @category Relation
 * @sig a -> a -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @example
 *
 *      var o = {};
 *      R.identical(o, o); //=> true
 *      R.identical(1, 1); //=> true
 *      R.identical(1, '1'); //=> false
 *      R.identical([], []); //=> false
 *      R.identical(0, -0); //=> false
 *      R.identical(NaN, NaN); //=> true
 */
module.exports = _curry2(function identical(a, b) {
  // SameValue algorithm
  if (a === b) { // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    return a !== 0 || 1 / a === 1 / b;
  } else {
    // Step 6.a: NaN == NaN
    return a !== a && b !== b;
  }
});


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(0);
var _identity = __webpack_require__(49);


/**
 * A function that does nothing but return the parameter supplied to it. Good
 * as a default or placeholder function.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig a -> a
 * @param {*} x The value to return.
 * @return {*} The input value, `x`.
 * @example
 *
 *      R.identity(1); //=> 1
 *
 *      var obj = {};
 *      R.identity(obj) === obj; //=> true
 * @symb R.identity(a) = a
 */
module.exports = _curry1(_identity);


/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = function _arrayFromIterator(iter) {
  var list = [];
  var next;
  while (!(next = iter.next()).done) {
    list.push(next.value);
  }
  return list;
};


/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = function _complement(f) {
  return function() {
    return !f.apply(this, arguments);
  };
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var _indexOf = __webpack_require__(50);


module.exports = function _contains(a, list) {
  return _indexOf(list, a, 0) >= 0;
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var _arity = __webpack_require__(4);
var _isPlaceholder = __webpack_require__(6);


/**
 * Internal curryN function.
 *
 * @private
 * @category Function
 * @param {Number} length The arity of the curried function.
 * @param {Array} received An array of arguments received thus far.
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
module.exports = function _curryN(length, received, fn) {
  return function() {
    var combined = [];
    var argsIdx = 0;
    var left = length;
    var combinedIdx = 0;
    while (combinedIdx < received.length || argsIdx < arguments.length) {
      var result;
      if (combinedIdx < received.length &&
          (!_isPlaceholder(received[combinedIdx]) ||
           argsIdx >= arguments.length)) {
        result = received[combinedIdx];
      } else {
        result = arguments[argsIdx];
        argsIdx += 1;
      }
      combined[combinedIdx] = result;
      if (!_isPlaceholder(result)) {
        left -= 1;
      }
      combinedIdx += 1;
    }
    return left <= 0 ? fn.apply(this, combined)
                     : _arity(left, _curryN(length, combined, fn));
  };
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var _isArray = __webpack_require__(11);
var _isTransformer = __webpack_require__(54);


/**
 * Returns a function that dispatches with different strategies based on the
 * object in list position (last argument). If it is an array, executes [fn].
 * Otherwise, if it has a function with one of the given method names, it will
 * execute that function (functor case). Otherwise, if it is a transformer,
 * uses transducer [xf] to return a new transformer (transducer case).
 * Otherwise, it will default to executing [fn].
 *
 * @private
 * @param {Array} methodNames properties to check for a custom implementation
 * @param {Function} xf transducer to initialize if object is transformer
 * @param {Function} fn default ramda implementation
 * @return {Function} A function that dispatches on object in list position
 */
module.exports = function _dispatchable(methodNames, xf, fn) {
  return function() {
    if (arguments.length === 0) {
      return fn();
    }
    var args = Array.prototype.slice.call(arguments, 0);
    var obj = args.pop();
    if (!_isArray(obj)) {
      var idx = 0;
      while (idx < methodNames.length) {
        if (typeof obj[methodNames[idx]] === 'function') {
          return obj[methodNames[idx]].apply(obj, args);
        }
        idx += 1;
      }
      if (_isTransformer(obj)) {
        var transducer = xf.apply(null, args);
        return transducer(obj);
      }
    }
    return fn.apply(this, arguments);
  };
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var _arrayFromIterator = __webpack_require__(41);
var _functionName = __webpack_require__(48);
var _has = __webpack_require__(10);
var identical = __webpack_require__(39);
var keys = __webpack_require__(12);
var type = __webpack_require__(70);


module.exports = function _equals(a, b, stackA, stackB) {
  if (identical(a, b)) {
    return true;
  }

  if (type(a) !== type(b)) {
    return false;
  }

  if (a == null || b == null) {
    return false;
  }

  if (typeof a['fantasy-land/equals'] === 'function' || typeof b['fantasy-land/equals'] === 'function') {
    return typeof a['fantasy-land/equals'] === 'function' && a['fantasy-land/equals'](b) &&
           typeof b['fantasy-land/equals'] === 'function' && b['fantasy-land/equals'](a);
  }

  if (typeof a.equals === 'function' || typeof b.equals === 'function') {
    return typeof a.equals === 'function' && a.equals(b) &&
           typeof b.equals === 'function' && b.equals(a);
  }

  switch (type(a)) {
    case 'Arguments':
    case 'Array':
    case 'Object':
      if (typeof a.constructor === 'function' &&
          _functionName(a.constructor) === 'Promise') {
        return a === b;
      }
      break;
    case 'Boolean':
    case 'Number':
    case 'String':
      if (!(typeof a === typeof b && identical(a.valueOf(), b.valueOf()))) {
        return false;
      }
      break;
    case 'Date':
      if (!identical(a.valueOf(), b.valueOf())) {
        return false;
      }
      break;
    case 'Error':
      return a.name === b.name && a.message === b.message;
    case 'RegExp':
      if (!(a.source === b.source &&
            a.global === b.global &&
            a.ignoreCase === b.ignoreCase &&
            a.multiline === b.multiline &&
            a.sticky === b.sticky &&
            a.unicode === b.unicode)) {
        return false;
      }
      break;
    case 'Map':
    case 'Set':
      if (!_equals(_arrayFromIterator(a.entries()), _arrayFromIterator(b.entries()), stackA, stackB)) {
        return false;
      }
      break;
    case 'Int8Array':
    case 'Uint8Array':
    case 'Uint8ClampedArray':
    case 'Int16Array':
    case 'Uint16Array':
    case 'Int32Array':
    case 'Uint32Array':
    case 'Float32Array':
    case 'Float64Array':
      break;
    case 'ArrayBuffer':
      break;
    default:
      // Values of other types are only equal if identical.
      return false;
  }

  var keysA = keys(a);
  if (keysA.length !== keys(b).length) {
    return false;
  }

  var idx = stackA.length - 1;
  while (idx >= 0) {
    if (stackA[idx] === a) {
      return stackB[idx] === b;
    }
    idx -= 1;
  }

  stackA.push(a);
  stackB.push(b);
  idx = keysA.length - 1;
  while (idx >= 0) {
    var key = keysA[idx];
    if (!(_has(key, b) && _equals(b[key], a[key], stackA, stackB))) {
      return false;
    }
    idx -= 1;
  }
  stackA.pop();
  stackB.pop();
  return true;
};


/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = function _filter(fn, list) {
  var idx = 0;
  var len = list.length;
  var result = [];

  while (idx < len) {
    if (fn(list[idx])) {
      result[result.length] = list[idx];
    }
    idx += 1;
  }
  return result;
};


/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = function _functionName(f) {
  // String(x => x) evaluates to "x => x", so the pattern may not match.
  var match = String(f).match(/^function (\w*)/);
  return match == null ? '' : match[1];
};


/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = function _identity(x) { return x; };


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var equals = __webpack_require__(8);


module.exports = function _indexOf(list, a, idx) {
  var inf, item;
  // Array.prototype.indexOf doesn't exist below IE9
  if (typeof list.indexOf === 'function') {
    switch (typeof a) {
      case 'number':
        if (a === 0) {
          // manually crawl the list to distinguish between +0 and -0
          inf = 1 / a;
          while (idx < list.length) {
            item = list[idx];
            if (item === 0 && 1 / item === inf) {
              return idx;
            }
            idx += 1;
          }
          return -1;
        } else if (a !== a) {
          // NaN
          while (idx < list.length) {
            item = list[idx];
            if (typeof item === 'number' && item !== item) {
              return idx;
            }
            idx += 1;
          }
          return -1;
        }
        // non-zero numbers can utilise Set
        return list.indexOf(a, idx);

      // all these types can utilise Set
      case 'string':
      case 'boolean':
      case 'function':
      case 'undefined':
        return list.indexOf(a, idx);

      case 'object':
        if (a === null) {
          // null can utilise Set
          return list.indexOf(a, idx);
        }
    }
  }
  // anything else not covered above, defer to R.equals
  while (idx < list.length) {
    if (equals(list[idx], a)) {
      return idx;
    }
    idx += 1;
  }
  return -1;
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var _has = __webpack_require__(10);


module.exports = (function() {
  var toString = Object.prototype.toString;
  return toString.call(arguments) === '[object Arguments]' ?
    function _isArguments(x) { return toString.call(x) === '[object Arguments]'; } :
    function _isArguments(x) { return _has('callee', x); };
}());


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(0);
var _isArray = __webpack_require__(11);
var _isString = __webpack_require__(17);


/**
 * Tests whether or not an object is similar to an array.
 *
 * @private
 * @category Type
 * @category List
 * @sig * -> Boolean
 * @param {*} x The object to test.
 * @return {Boolean} `true` if `x` has a numeric length property and extreme indices defined; `false` otherwise.
 * @example
 *
 *      _isArrayLike([]); //=> true
 *      _isArrayLike(true); //=> false
 *      _isArrayLike({}); //=> false
 *      _isArrayLike({length: 10}); //=> false
 *      _isArrayLike({0: 'zero', 9: 'nine', length: 10}); //=> true
 */
module.exports = _curry1(function isArrayLike(x) {
  if (_isArray(x)) { return true; }
  if (!x) { return false; }
  if (typeof x !== 'object') { return false; }
  if (_isString(x)) { return false; }
  if (x.nodeType === 1) { return !!x.length; }
  if (x.length === 0) { return true; }
  if (x.length > 0) {
    return x.hasOwnProperty(0) && x.hasOwnProperty(x.length - 1);
  }
  return false;
});


/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = function _isObject(x) {
  return Object.prototype.toString.call(x) === '[object Object]';
};


/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = function _isTransformer(obj) {
  return typeof obj['@@transducer/step'] === 'function';
};


/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = function _map(fn, functor) {
  var idx = 0;
  var len = functor.length;
  var result = Array(len);
  while (idx < len) {
    result[idx] = fn(functor[idx]);
    idx += 1;
  }
  return result;
};


/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = function _pipe(f, g) {
  return function() {
    return g.call(this, f.apply(this, arguments));
  };
};


/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = function _quote(s) {
  var escaped = s
    .replace(/\\/g, '\\\\')
    .replace(/[\b]/g, '\\b')  // \b matches word boundary; [\b] matches backspace
    .replace(/\f/g, '\\f')
    .replace(/\n/g, '\\n')
    .replace(/\r/g, '\\r')
    .replace(/\t/g, '\\t')
    .replace(/\v/g, '\\v')
    .replace(/\0/g, '\\0');

  return '"' + escaped.replace(/"/g, '\\"') + '"';
};


/***/ }),
/* 58 */
/***/ (function(module, exports) {

/**
 * Polyfill from <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString>.
 */
module.exports = (function() {
  var pad = function pad(n) { return (n < 10 ? '0' : '') + n; };

  return typeof Date.prototype.toISOString === 'function' ?
    function _toISOString(d) {
      return d.toISOString();
    } :
    function _toISOString(d) {
      return (
        d.getUTCFullYear() + '-' +
        pad(d.getUTCMonth() + 1) + '-' +
        pad(d.getUTCDate()) + 'T' +
        pad(d.getUTCHours()) + ':' +
        pad(d.getUTCMinutes()) + ':' +
        pad(d.getUTCSeconds()) + '.' +
        (d.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) + 'Z'
      );
    };
}());


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var _contains = __webpack_require__(43);
var _map = __webpack_require__(55);
var _quote = __webpack_require__(57);
var _toISOString = __webpack_require__(58);
var keys = __webpack_require__(12);
var reject = __webpack_require__(66);


module.exports = function _toString(x, seen) {
  var recur = function recur(y) {
    var xs = seen.concat([x]);
    return _contains(y, xs) ? '<Circular>' : _toString(y, xs);
  };

  //  mapPairs :: (Object, [String]) -> [String]
  var mapPairs = function(obj, keys) {
    return _map(function(k) { return _quote(k) + ': ' + recur(obj[k]); }, keys.slice().sort());
  };

  switch (Object.prototype.toString.call(x)) {
    case '[object Arguments]':
      return '(function() { return arguments; }(' + _map(recur, x).join(', ') + '))';
    case '[object Array]':
      return '[' + _map(recur, x).concat(mapPairs(x, reject(function(k) { return /^\d+$/.test(k); }, keys(x)))).join(', ') + ']';
    case '[object Boolean]':
      return typeof x === 'object' ? 'new Boolean(' + recur(x.valueOf()) + ')' : x.toString();
    case '[object Date]':
      return 'new Date(' + (isNaN(x.valueOf()) ? recur(NaN) : _quote(_toISOString(x))) + ')';
    case '[object Null]':
      return 'null';
    case '[object Number]':
      return typeof x === 'object' ? 'new Number(' + recur(x.valueOf()) + ')' : 1 / x === -Infinity ? '-0' : x.toString(10);
    case '[object String]':
      return typeof x === 'object' ? 'new String(' + recur(x.valueOf()) + ')' : _quote(x);
    case '[object Undefined]':
      return 'undefined';
    default:
      if (typeof x.toString === 'function') {
        var repr = x.toString();
        if (repr !== '[object Object]') {
          return repr;
        }
      }
      return '{' + mapPairs(x, keys(x)).join(', ') + '}';
  }
};


/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = {
  init: function() {
    return this.xf['@@transducer/init']();
  },
  result: function(result) {
    return this.xf['@@transducer/result'](result);
  }
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(1);
var _xfBase = __webpack_require__(60);


module.exports = (function() {
  function XFilter(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XFilter.prototype['@@transducer/init'] = _xfBase.init;
  XFilter.prototype['@@transducer/result'] = _xfBase.result;
  XFilter.prototype['@@transducer/step'] = function(result, input) {
    return this.f(input) ? this.xf['@@transducer/step'](result, input) : result;
  };

  return _curry2(function _xfilter(f, xf) { return new XFilter(f, xf); });
}());


/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = (function() {
  function XWrap(fn) {
    this.f = fn;
  }
  XWrap.prototype['@@transducer/init'] = function() {
    throw new Error('init not implemented on XWrap');
  };
  XWrap.prototype['@@transducer/result'] = function(acc) { return acc; };
  XWrap.prototype['@@transducer/step'] = function(acc, x) {
    return this.f(acc, x);
  };

  return function _xwrap(fn) { return new XWrap(fn); };
}());


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var _arity = __webpack_require__(4);
var _curry1 = __webpack_require__(0);


/**
 * Accepts a function `fn` and returns a function that guards invocation of
 * `fn` such that `fn` can only ever be called once, no matter how many times
 * the returned function is invoked. The first value calculated is returned in
 * subsequent invocations.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (a... -> b) -> (a... -> b)
 * @param {Function} fn The function to wrap in a call-only-once wrapper.
 * @return {Function} The wrapped function.
 * @example
 *
 *      var addOneOnce = R.once(x => x + 1);
 *      addOneOnce(10); //=> 11
 *      addOneOnce(addOneOnce(50)); //=> 11
 */
module.exports = _curry1(function once(fn) {
  var called = false;
  var result;
  return _arity(fn.length, function() {
    if (called) {
      return result;
    }
    called = true;
    result = fn.apply(this, arguments);
    return result;
  });
});


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var _arity = __webpack_require__(4);
var _pipe = __webpack_require__(56);
var reduce = __webpack_require__(65);
var tail = __webpack_require__(69);


/**
 * Performs left-to-right function composition. The leftmost function may have
 * any arity; the remaining functions must be unary.
 *
 * In some libraries this function is named `sequence`.
 *
 * **Note:** The result of pipe is not automatically curried.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (((a, b, ..., n) -> o), (o -> p), ..., (x -> y), (y -> z)) -> ((a, b, ..., n) -> z)
 * @param {...Function} functions
 * @return {Function}
 * @see R.compose
 * @example
 *
 *      var f = R.pipe(Math.pow, R.negate, R.inc);
 *
 *      f(3, 4); // -(3^4) + 1
 * @symb R.pipe(f, g, h)(a, b) = h(g(f(a, b)))
 */
module.exports = function pipe() {
  if (arguments.length === 0) {
    throw new Error('pipe requires at least one argument');
  }
  return _arity(arguments[0].length,
                reduce(_pipe, arguments[0], tail(arguments)));
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(16);
var _reduce = __webpack_require__(18);


/**
 * Returns a single item by iterating through the list, successively calling
 * the iterator function and passing it an accumulator value and the current
 * value from the array, and then passing the result to the next call.
 *
 * The iterator function receives two values: *(acc, value)*. It may use
 * [`R.reduced`](#reduced) to shortcut the iteration.
 *
 * The arguments' order of [`reduceRight`](#reduceRight)'s iterator function
 * is *(value, acc)*.
 *
 * Note: `R.reduce` does not skip deleted or unassigned indices (sparse
 * arrays), unlike the native `Array.prototype.reduce` method. For more details
 * on this behavior, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#Description
 *
 * Dispatches to the `reduce` method of the third argument, if present. When
 * doing so, it is up to the user to handle the [`R.reduced`](#reduced)
 * shortcuting, as this is not implemented by `reduce`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig ((a, b) -> a) -> a -> [b] -> a
 * @param {Function} fn The iterator function. Receives two values, the accumulator and the
 *        current element from the array.
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.reduced, R.addIndex, R.reduceRight
 * @example
 *
 *      R.reduce(R.subtract, 0, [1, 2, 3, 4]) // => ((((0 - 1) - 2) - 3) - 4) = -10
 *                -               -10
 *               / \              / \
 *              -   4           -6   4
 *             / \              / \
 *            -   3   ==>     -3   3
 *           / \              / \
 *          -   2           -1   2
 *         / \              / \
 *        0   1            0   1
 *
 * @symb R.reduce(f, a, [b, c, d]) = f(f(f(a, b), c), d)
 */
module.exports = _curry3(_reduce);


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var _complement = __webpack_require__(42);
var _curry2 = __webpack_require__(1);
var filter = __webpack_require__(37);


/**
 * The complement of [`filter`](#filter).
 *
 * Acts as a transducer if a transformer is given in list position. Filterable
 * objects include plain objects or any object that has a filter method such
 * as `Array`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Filterable f => (a -> Boolean) -> f a -> f a
 * @param {Function} pred
 * @param {Array} filterable
 * @return {Array}
 * @see R.filter, R.transduce, R.addIndex
 * @example
 *
 *      var isOdd = (n) => n % 2 === 1;
 *
 *      R.reject(isOdd, [1, 2, 3, 4]); //=> [2, 4]
 *
 *      R.reject(isOdd, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
 */
module.exports = _curry2(function reject(pred, filterable) {
  return filter(_complement(pred), filterable);
});


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(0);
var _isString = __webpack_require__(17);


/**
 * Returns a new list or string with the elements or characters in reverse
 * order.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a]
 * @sig String -> String
 * @param {Array|String} list
 * @return {Array|String}
 * @example
 *
 *      R.reverse([1, 2, 3]);  //=> [3, 2, 1]
 *      R.reverse([1, 2]);     //=> [2, 1]
 *      R.reverse([1]);        //=> [1]
 *      R.reverse([]);         //=> []
 *
 *      R.reverse('abc');      //=> 'cba'
 *      R.reverse('ab');       //=> 'ba'
 *      R.reverse('a');        //=> 'a'
 *      R.reverse('');         //=> ''
 */
module.exports = _curry1(function reverse(list) {
  return _isString(list) ? list.split('').reverse().join('') :
                           Array.prototype.slice.call(list, 0).reverse();
});


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var _checkForMethod = __webpack_require__(9);
var _curry3 = __webpack_require__(16);


/**
 * Returns the elements of the given list or string (or object with a `slice`
 * method) from `fromIndex` (inclusive) to `toIndex` (exclusive).
 *
 * Dispatches to the `slice` method of the third argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.4
 * @category List
 * @sig Number -> Number -> [a] -> [a]
 * @sig Number -> Number -> String -> String
 * @param {Number} fromIndex The start index (inclusive).
 * @param {Number} toIndex The end index (exclusive).
 * @param {*} list
 * @return {*}
 * @example
 *
 *      R.slice(1, 3, ['a', 'b', 'c', 'd']);        //=> ['b', 'c']
 *      R.slice(1, Infinity, ['a', 'b', 'c', 'd']); //=> ['b', 'c', 'd']
 *      R.slice(0, -1, ['a', 'b', 'c', 'd']);       //=> ['a', 'b', 'c']
 *      R.slice(-3, -1, ['a', 'b', 'c', 'd']);      //=> ['b', 'c']
 *      R.slice(0, 3, 'ramda');                     //=> 'ram'
 */
module.exports = _curry3(_checkForMethod('slice', function slice(fromIndex, toIndex, list) {
  return Array.prototype.slice.call(list, fromIndex, toIndex);
}));


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var _checkForMethod = __webpack_require__(9);
var _curry1 = __webpack_require__(0);
var slice = __webpack_require__(68);


/**
 * Returns all but the first element of the given list or string (or object
 * with a `tail` method).
 *
 * Dispatches to the `slice` method of the first argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a]
 * @sig String -> String
 * @param {*} list
 * @return {*}
 * @see R.head, R.init, R.last
 * @example
 *
 *      R.tail([1, 2, 3]);  //=> [2, 3]
 *      R.tail([1, 2]);     //=> [2]
 *      R.tail([1]);        //=> []
 *      R.tail([]);         //=> []
 *
 *      R.tail('abc');  //=> 'bc'
 *      R.tail('ab');   //=> 'b'
 *      R.tail('a');    //=> ''
 *      R.tail('');     //=> ''
 */
module.exports = _curry1(_checkForMethod('tail', slice(1, Infinity)));


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(0);


/**
 * Gives a single-word string description of the (native) type of a value,
 * returning such answers as 'Object', 'Number', 'Array', or 'Null'. Does not
 * attempt to distinguish user Object types any further, reporting them all as
 * 'Object'.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Type
 * @sig (* -> {*}) -> String
 * @param {*} val The value to test
 * @return {String}
 * @example
 *
 *      R.type({}); //=> "Object"
 *      R.type(1); //=> "Number"
 *      R.type(false); //=> "Boolean"
 *      R.type('s'); //=> "String"
 *      R.type(null); //=> "Null"
 *      R.type([]); //=> "Array"
 *      R.type(/[A-z]/); //=> "RegExp"
 *      R.type(() => {}); //=> "Function"
 */
module.exports = _curry1(function type(val) {
  return val === null      ? 'Null'      :
         val === undefined ? 'Undefined' :
         Object.prototype.toString.call(val).slice(8, -1);
});


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(72);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 72 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);
//# sourceMappingURL=placeload.js.map