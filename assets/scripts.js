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
/******/ 	return __webpack_require__(__webpack_require__.s = 62);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.2.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2017-03-20T18:59Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};



	function DOMEval( code, doc ) {
		doc = doc || document;

		var script = doc.createElement( "script" );

		script.text = code;
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.2.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && Array.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isFunction: function( obj ) {
		return jQuery.type( obj ) === "function";
	},

	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function( obj ) {

		// As of jQuery 3.0, isNumeric is limited to
		// strings and numbers (primitives or objects)
		// that can be coerced to finite numbers (gh-2662)
		var type = jQuery.type( obj );
		return ( type === "number" || type === "string" ) &&

			// parseFloat NaNs numeric-cast false positives ("")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			!isNaN( obj - parseFloat( obj ) );
	},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}

		// Support: Android <=2.3 only (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE <=9 - 11, Edge 12 - 13
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: Date.now,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Simple selector that can be filtered directly, removing non-Elements
	if ( risSimple.test( qualifier ) ) {
		return jQuery.filter( qualifier, elements, not );
	}

	// Complex selector, compare the two sets, removing non-Elements
	qualifier = jQuery.filter( qualifier, elements );
	return jQuery.grep( elements, function( elem ) {
		return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
	} );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
        if ( nodeName( elem, "iframe" ) ) {
            return elem.contentDocument;
        }

        // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
        // Treat the template element as a regular one in browsers that
        // don't support it.
        if ( nodeName( elem, "template" ) ) {
            elem = elem.content || elem;
        }

        return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( jQuery.isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( jQuery.isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ jQuery.camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ jQuery.camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( jQuery.camelCase );
			} else {
				key = jQuery.camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted,
		scale = 1,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		do {

			// If previous iteration zeroed out, double until we get *something*.
			// Use string for doubling so we don't accidentally see scale as unchanged below
			scale = scale || ".5";

			// Adjust and apply
			initialInUnit = initialInUnit / scale;
			jQuery.style( elem, prop, initialInUnit + unit );

		// Update scale, tolerating zero or NaN from tween.cur()
		// Break the loop if scale is unchanged or perfect, or if we've just had enough.
		} while (
			scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
		);
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( jQuery.type( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: jQuery.isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( ">tbody", elem )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );

	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		isFunction = jQuery.isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( isFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( isFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rmargin = ( /^margin/ );

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		div.style.cssText =
			"box-sizing:border-box;" +
			"position:relative;display:block;" +
			"margin:auto;border:1px;padding:1px;" +
			"top:1%;width:50%";
		div.innerHTML = "";
		documentElement.appendChild( container );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = divStyle.marginLeft === "2px";
		boxSizingReliableVal = divStyle.width === "4px";

		// Support: Android 4.0 - 4.3 only
		// Some styles come back with percentage values, even though they shouldn't
		div.style.marginRight = "50%";
		pixelMarginRightVal = divStyle.marginRight === "4px";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
		"padding:0;margin-top:1px;position:absolute";
	container.appendChild( div );

	jQuery.extend( support, {
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelMarginRight: function() {
			computeStyleTests();
			return pixelMarginRightVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function finalPropName( name ) {
	var ret = jQuery.cssProps[ name ];
	if ( !ret ) {
		ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;
	}
	return ret;
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i,
		val = 0;

	// If we already have the right measurement, avoid augmentation
	if ( extra === ( isBorderBox ? "border" : "content" ) ) {
		i = 4;

	// Otherwise initialize for horizontal or vertical properties
	} else {
		i = name === "width" ? 1 : 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {

			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// At this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {

			// At this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// At this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with computed style
	var valueIsBorderBox,
		styles = getStyles( elem ),
		val = curCSS( elem, name, styles ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// Computed unit is not pixels. Stop here and return.
	if ( rnumnonpx.test( val ) ) {
		return val;
	}

	// Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox = isBorderBox &&
		( support.boxSizingReliable() || val === elem.style[ name ] );

	// Fall back to offsetWidth/Height when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	if ( val === "auto" ) {
		val = elem[ "offset" + name[ 0 ].toUpperCase() + name.slice( 1 ) ];
	}

	// Normalize "", auto, and prepare for extra
	val = parseFloat( val ) || 0;

	// Use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		"float": "cssFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = jQuery.camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						} ) :
						getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = extra && getStyles( elem ),
				subtract = extra && augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				);

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ name ] = value;
				value = jQuery.css( elem, name );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 13
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( jQuery.isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					jQuery.proxy( result.stop, result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( type === "string" ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = value.match( rnothtmlwhite ) || [];

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




support.focusin = "onfocusin" in window;


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = jQuery.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = jQuery.isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( jQuery.isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 13
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( jQuery.isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var doc, docElem, rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		rect = elem.getBoundingClientRect();

		doc = elem.ownerDocument;
		docElem = doc.documentElement;
		win = doc.defaultView;

		return {
			top: rect.top + win.pageYOffset - docElem.clientTop,
			left: rect.left + win.pageXOffset - docElem.clientLeft
		};
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
		// because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume getBoundingClientRect is there when computed position is fixed
			offset = elem.getBoundingClientRect();

		} else {

			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset = {
				top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
				left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
			};
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( jQuery.isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
		return jQuery;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports.css = __webpack_require__ (8);
module.exports.js = __webpack_require__ (5);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(55);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! tether 1.4.0 */

(function(root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports === 'object') {
    module.exports = factory(require, exports, module);
  } else {
    root.Tether = factory();
  }
}(this, function(require, exports, module) {

'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var TetherBase = undefined;
if (typeof TetherBase === 'undefined') {
  TetherBase = { modules: [] };
}

var zeroElement = null;

// Same as native getBoundingClientRect, except it takes into account parent <frame> offsets
// if the element lies within a nested document (<frame> or <iframe>-like).
function getActualBoundingClientRect(node) {
  var boundingRect = node.getBoundingClientRect();

  // The original object returned by getBoundingClientRect is immutable, so we clone it
  // We can't use extend because the properties are not considered part of the object by hasOwnProperty in IE9
  var rect = {};
  for (var k in boundingRect) {
    rect[k] = boundingRect[k];
  }

  if (node.ownerDocument !== document) {
    var _frameElement = node.ownerDocument.defaultView.frameElement;
    if (_frameElement) {
      var frameRect = getActualBoundingClientRect(_frameElement);
      rect.top += frameRect.top;
      rect.bottom += frameRect.top;
      rect.left += frameRect.left;
      rect.right += frameRect.left;
    }
  }

  return rect;
}

function getScrollParents(el) {
  // In firefox if the el is inside an iframe with display: none; window.getComputedStyle() will return null;
  // https://bugzilla.mozilla.org/show_bug.cgi?id=548397
  var computedStyle = getComputedStyle(el) || {};
  var position = computedStyle.position;
  var parents = [];

  if (position === 'fixed') {
    return [el];
  }

  var parent = el;
  while ((parent = parent.parentNode) && parent && parent.nodeType === 1) {
    var style = undefined;
    try {
      style = getComputedStyle(parent);
    } catch (err) {}

    if (typeof style === 'undefined' || style === null) {
      parents.push(parent);
      return parents;
    }

    var _style = style;
    var overflow = _style.overflow;
    var overflowX = _style.overflowX;
    var overflowY = _style.overflowY;

    if (/(auto|scroll)/.test(overflow + overflowY + overflowX)) {
      if (position !== 'absolute' || ['relative', 'absolute', 'fixed'].indexOf(style.position) >= 0) {
        parents.push(parent);
      }
    }
  }

  parents.push(el.ownerDocument.body);

  // If the node is within a frame, account for the parent window scroll
  if (el.ownerDocument !== document) {
    parents.push(el.ownerDocument.defaultView);
  }

  return parents;
}

var uniqueId = (function () {
  var id = 0;
  return function () {
    return ++id;
  };
})();

var zeroPosCache = {};
var getOrigin = function getOrigin() {
  // getBoundingClientRect is unfortunately too accurate.  It introduces a pixel or two of
  // jitter as the user scrolls that messes with our ability to detect if two positions
  // are equivilant or not.  We place an element at the top left of the page that will
  // get the same jitter, so we can cancel the two out.
  var node = zeroElement;
  if (!node || !document.body.contains(node)) {
    node = document.createElement('div');
    node.setAttribute('data-tether-id', uniqueId());
    extend(node.style, {
      top: 0,
      left: 0,
      position: 'absolute'
    });

    document.body.appendChild(node);

    zeroElement = node;
  }

  var id = node.getAttribute('data-tether-id');
  if (typeof zeroPosCache[id] === 'undefined') {
    zeroPosCache[id] = getActualBoundingClientRect(node);

    // Clear the cache when this position call is done
    defer(function () {
      delete zeroPosCache[id];
    });
  }

  return zeroPosCache[id];
};

function removeUtilElements() {
  if (zeroElement) {
    document.body.removeChild(zeroElement);
  }
  zeroElement = null;
};

function getBounds(el) {
  var doc = undefined;
  if (el === document) {
    doc = document;
    el = document.documentElement;
  } else {
    doc = el.ownerDocument;
  }

  var docEl = doc.documentElement;

  var box = getActualBoundingClientRect(el);

  var origin = getOrigin();

  box.top -= origin.top;
  box.left -= origin.left;

  if (typeof box.width === 'undefined') {
    box.width = document.body.scrollWidth - box.left - box.right;
  }
  if (typeof box.height === 'undefined') {
    box.height = document.body.scrollHeight - box.top - box.bottom;
  }

  box.top = box.top - docEl.clientTop;
  box.left = box.left - docEl.clientLeft;
  box.right = doc.body.clientWidth - box.width - box.left;
  box.bottom = doc.body.clientHeight - box.height - box.top;

  return box;
}

function getOffsetParent(el) {
  return el.offsetParent || document.documentElement;
}

var _scrollBarSize = null;
function getScrollBarSize() {
  if (_scrollBarSize) {
    return _scrollBarSize;
  }
  var inner = document.createElement('div');
  inner.style.width = '100%';
  inner.style.height = '200px';

  var outer = document.createElement('div');
  extend(outer.style, {
    position: 'absolute',
    top: 0,
    left: 0,
    pointerEvents: 'none',
    visibility: 'hidden',
    width: '200px',
    height: '150px',
    overflow: 'hidden'
  });

  outer.appendChild(inner);

  document.body.appendChild(outer);

  var widthContained = inner.offsetWidth;
  outer.style.overflow = 'scroll';
  var widthScroll = inner.offsetWidth;

  if (widthContained === widthScroll) {
    widthScroll = outer.clientWidth;
  }

  document.body.removeChild(outer);

  var width = widthContained - widthScroll;

  _scrollBarSize = { width: width, height: width };
  return _scrollBarSize;
}

function extend() {
  var out = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var args = [];

  Array.prototype.push.apply(args, arguments);

  args.slice(1).forEach(function (obj) {
    if (obj) {
      for (var key in obj) {
        if (({}).hasOwnProperty.call(obj, key)) {
          out[key] = obj[key];
        }
      }
    }
  });

  return out;
}

function removeClass(el, name) {
  if (typeof el.classList !== 'undefined') {
    name.split(' ').forEach(function (cls) {
      if (cls.trim()) {
        el.classList.remove(cls);
      }
    });
  } else {
    var regex = new RegExp('(^| )' + name.split(' ').join('|') + '( |$)', 'gi');
    var className = getClassName(el).replace(regex, ' ');
    setClassName(el, className);
  }
}

function addClass(el, name) {
  if (typeof el.classList !== 'undefined') {
    name.split(' ').forEach(function (cls) {
      if (cls.trim()) {
        el.classList.add(cls);
      }
    });
  } else {
    removeClass(el, name);
    var cls = getClassName(el) + (' ' + name);
    setClassName(el, cls);
  }
}

function hasClass(el, name) {
  if (typeof el.classList !== 'undefined') {
    return el.classList.contains(name);
  }
  var className = getClassName(el);
  return new RegExp('(^| )' + name + '( |$)', 'gi').test(className);
}

function getClassName(el) {
  // Can't use just SVGAnimatedString here since nodes within a Frame in IE have
  // completely separately SVGAnimatedString base classes
  if (el.className instanceof el.ownerDocument.defaultView.SVGAnimatedString) {
    return el.className.baseVal;
  }
  return el.className;
}

function setClassName(el, className) {
  el.setAttribute('class', className);
}

function updateClasses(el, add, all) {
  // Of the set of 'all' classes, we need the 'add' classes, and only the
  // 'add' classes to be set.
  all.forEach(function (cls) {
    if (add.indexOf(cls) === -1 && hasClass(el, cls)) {
      removeClass(el, cls);
    }
  });

  add.forEach(function (cls) {
    if (!hasClass(el, cls)) {
      addClass(el, cls);
    }
  });
}

var deferred = [];

var defer = function defer(fn) {
  deferred.push(fn);
};

var flush = function flush() {
  var fn = undefined;
  while (fn = deferred.pop()) {
    fn();
  }
};

var Evented = (function () {
  function Evented() {
    _classCallCheck(this, Evented);
  }

  _createClass(Evented, [{
    key: 'on',
    value: function on(event, handler, ctx) {
      var once = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];

      if (typeof this.bindings === 'undefined') {
        this.bindings = {};
      }
      if (typeof this.bindings[event] === 'undefined') {
        this.bindings[event] = [];
      }
      this.bindings[event].push({ handler: handler, ctx: ctx, once: once });
    }
  }, {
    key: 'once',
    value: function once(event, handler, ctx) {
      this.on(event, handler, ctx, true);
    }
  }, {
    key: 'off',
    value: function off(event, handler) {
      if (typeof this.bindings === 'undefined' || typeof this.bindings[event] === 'undefined') {
        return;
      }

      if (typeof handler === 'undefined') {
        delete this.bindings[event];
      } else {
        var i = 0;
        while (i < this.bindings[event].length) {
          if (this.bindings[event][i].handler === handler) {
            this.bindings[event].splice(i, 1);
          } else {
            ++i;
          }
        }
      }
    }
  }, {
    key: 'trigger',
    value: function trigger(event) {
      if (typeof this.bindings !== 'undefined' && this.bindings[event]) {
        var i = 0;

        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        while (i < this.bindings[event].length) {
          var _bindings$event$i = this.bindings[event][i];
          var handler = _bindings$event$i.handler;
          var ctx = _bindings$event$i.ctx;
          var once = _bindings$event$i.once;

          var context = ctx;
          if (typeof context === 'undefined') {
            context = this;
          }

          handler.apply(context, args);

          if (once) {
            this.bindings[event].splice(i, 1);
          } else {
            ++i;
          }
        }
      }
    }
  }]);

  return Evented;
})();

TetherBase.Utils = {
  getActualBoundingClientRect: getActualBoundingClientRect,
  getScrollParents: getScrollParents,
  getBounds: getBounds,
  getOffsetParent: getOffsetParent,
  extend: extend,
  addClass: addClass,
  removeClass: removeClass,
  hasClass: hasClass,
  updateClasses: updateClasses,
  defer: defer,
  flush: flush,
  uniqueId: uniqueId,
  Evented: Evented,
  getScrollBarSize: getScrollBarSize,
  removeUtilElements: removeUtilElements
};
/* globals TetherBase, performance */

'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x6, _x7, _x8) { var _again = true; _function: while (_again) { var object = _x6, property = _x7, receiver = _x8; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x6 = parent; _x7 = property; _x8 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (typeof TetherBase === 'undefined') {
  throw new Error('You must include the utils.js file before tether.js');
}

var _TetherBase$Utils = TetherBase.Utils;
var getScrollParents = _TetherBase$Utils.getScrollParents;
var getBounds = _TetherBase$Utils.getBounds;
var getOffsetParent = _TetherBase$Utils.getOffsetParent;
var extend = _TetherBase$Utils.extend;
var addClass = _TetherBase$Utils.addClass;
var removeClass = _TetherBase$Utils.removeClass;
var updateClasses = _TetherBase$Utils.updateClasses;
var defer = _TetherBase$Utils.defer;
var flush = _TetherBase$Utils.flush;
var getScrollBarSize = _TetherBase$Utils.getScrollBarSize;
var removeUtilElements = _TetherBase$Utils.removeUtilElements;

function within(a, b) {
  var diff = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];

  return a + diff >= b && b >= a - diff;
}

var transformKey = (function () {
  if (typeof document === 'undefined') {
    return '';
  }
  var el = document.createElement('div');

  var transforms = ['transform', 'WebkitTransform', 'OTransform', 'MozTransform', 'msTransform'];
  for (var i = 0; i < transforms.length; ++i) {
    var key = transforms[i];
    if (el.style[key] !== undefined) {
      return key;
    }
  }
})();

var tethers = [];

var position = function position() {
  tethers.forEach(function (tether) {
    tether.position(false);
  });
  flush();
};

function now() {
  if (typeof performance !== 'undefined' && typeof performance.now !== 'undefined') {
    return performance.now();
  }
  return +new Date();
}

(function () {
  var lastCall = null;
  var lastDuration = null;
  var pendingTimeout = null;

  var tick = function tick() {
    if (typeof lastDuration !== 'undefined' && lastDuration > 16) {
      // We voluntarily throttle ourselves if we can't manage 60fps
      lastDuration = Math.min(lastDuration - 16, 250);

      // Just in case this is the last event, remember to position just once more
      pendingTimeout = setTimeout(tick, 250);
      return;
    }

    if (typeof lastCall !== 'undefined' && now() - lastCall < 10) {
      // Some browsers call events a little too frequently, refuse to run more than is reasonable
      return;
    }

    if (pendingTimeout != null) {
      clearTimeout(pendingTimeout);
      pendingTimeout = null;
    }

    lastCall = now();
    position();
    lastDuration = now() - lastCall;
  };

  if (typeof window !== 'undefined' && typeof window.addEventListener !== 'undefined') {
    ['resize', 'scroll', 'touchmove'].forEach(function (event) {
      window.addEventListener(event, tick);
    });
  }
})();

var MIRROR_LR = {
  center: 'center',
  left: 'right',
  right: 'left'
};

var MIRROR_TB = {
  middle: 'middle',
  top: 'bottom',
  bottom: 'top'
};

var OFFSET_MAP = {
  top: 0,
  left: 0,
  middle: '50%',
  center: '50%',
  bottom: '100%',
  right: '100%'
};

var autoToFixedAttachment = function autoToFixedAttachment(attachment, relativeToAttachment) {
  var left = attachment.left;
  var top = attachment.top;

  if (left === 'auto') {
    left = MIRROR_LR[relativeToAttachment.left];
  }

  if (top === 'auto') {
    top = MIRROR_TB[relativeToAttachment.top];
  }

  return { left: left, top: top };
};

var attachmentToOffset = function attachmentToOffset(attachment) {
  var left = attachment.left;
  var top = attachment.top;

  if (typeof OFFSET_MAP[attachment.left] !== 'undefined') {
    left = OFFSET_MAP[attachment.left];
  }

  if (typeof OFFSET_MAP[attachment.top] !== 'undefined') {
    top = OFFSET_MAP[attachment.top];
  }

  return { left: left, top: top };
};

function addOffset() {
  var out = { top: 0, left: 0 };

  for (var _len = arguments.length, offsets = Array(_len), _key = 0; _key < _len; _key++) {
    offsets[_key] = arguments[_key];
  }

  offsets.forEach(function (_ref) {
    var top = _ref.top;
    var left = _ref.left;

    if (typeof top === 'string') {
      top = parseFloat(top, 10);
    }
    if (typeof left === 'string') {
      left = parseFloat(left, 10);
    }

    out.top += top;
    out.left += left;
  });

  return out;
}

function offsetToPx(offset, size) {
  if (typeof offset.left === 'string' && offset.left.indexOf('%') !== -1) {
    offset.left = parseFloat(offset.left, 10) / 100 * size.width;
  }
  if (typeof offset.top === 'string' && offset.top.indexOf('%') !== -1) {
    offset.top = parseFloat(offset.top, 10) / 100 * size.height;
  }

  return offset;
}

var parseOffset = function parseOffset(value) {
  var _value$split = value.split(' ');

  var _value$split2 = _slicedToArray(_value$split, 2);

  var top = _value$split2[0];
  var left = _value$split2[1];

  return { top: top, left: left };
};
var parseAttachment = parseOffset;

var TetherClass = (function (_Evented) {
  _inherits(TetherClass, _Evented);

  function TetherClass(options) {
    var _this = this;

    _classCallCheck(this, TetherClass);

    _get(Object.getPrototypeOf(TetherClass.prototype), 'constructor', this).call(this);
    this.position = this.position.bind(this);

    tethers.push(this);

    this.history = [];

    this.setOptions(options, false);

    TetherBase.modules.forEach(function (module) {
      if (typeof module.initialize !== 'undefined') {
        module.initialize.call(_this);
      }
    });

    this.position();
  }

  _createClass(TetherClass, [{
    key: 'getClass',
    value: function getClass() {
      var key = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
      var classes = this.options.classes;

      if (typeof classes !== 'undefined' && classes[key]) {
        return this.options.classes[key];
      } else if (this.options.classPrefix) {
        return this.options.classPrefix + '-' + key;
      } else {
        return key;
      }
    }
  }, {
    key: 'setOptions',
    value: function setOptions(options) {
      var _this2 = this;

      var pos = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

      var defaults = {
        offset: '0 0',
        targetOffset: '0 0',
        targetAttachment: 'auto auto',
        classPrefix: 'tether'
      };

      this.options = extend(defaults, options);

      var _options = this.options;
      var element = _options.element;
      var target = _options.target;
      var targetModifier = _options.targetModifier;

      this.element = element;
      this.target = target;
      this.targetModifier = targetModifier;

      if (this.target === 'viewport') {
        this.target = document.body;
        this.targetModifier = 'visible';
      } else if (this.target === 'scroll-handle') {
        this.target = document.body;
        this.targetModifier = 'scroll-handle';
      }

      ['element', 'target'].forEach(function (key) {
        if (typeof _this2[key] === 'undefined') {
          throw new Error('Tether Error: Both element and target must be defined');
        }

        if (typeof _this2[key].jquery !== 'undefined') {
          _this2[key] = _this2[key][0];
        } else if (typeof _this2[key] === 'string') {
          _this2[key] = document.querySelector(_this2[key]);
        }
      });

      addClass(this.element, this.getClass('element'));
      if (!(this.options.addTargetClasses === false)) {
        addClass(this.target, this.getClass('target'));
      }

      if (!this.options.attachment) {
        throw new Error('Tether Error: You must provide an attachment');
      }

      this.targetAttachment = parseAttachment(this.options.targetAttachment);
      this.attachment = parseAttachment(this.options.attachment);
      this.offset = parseOffset(this.options.offset);
      this.targetOffset = parseOffset(this.options.targetOffset);

      if (typeof this.scrollParents !== 'undefined') {
        this.disable();
      }

      if (this.targetModifier === 'scroll-handle') {
        this.scrollParents = [this.target];
      } else {
        this.scrollParents = getScrollParents(this.target);
      }

      if (!(this.options.enabled === false)) {
        this.enable(pos);
      }
    }
  }, {
    key: 'getTargetBounds',
    value: function getTargetBounds() {
      if (typeof this.targetModifier !== 'undefined') {
        if (this.targetModifier === 'visible') {
          if (this.target === document.body) {
            return { top: pageYOffset, left: pageXOffset, height: innerHeight, width: innerWidth };
          } else {
            var bounds = getBounds(this.target);

            var out = {
              height: bounds.height,
              width: bounds.width,
              top: bounds.top,
              left: bounds.left
            };

            out.height = Math.min(out.height, bounds.height - (pageYOffset - bounds.top));
            out.height = Math.min(out.height, bounds.height - (bounds.top + bounds.height - (pageYOffset + innerHeight)));
            out.height = Math.min(innerHeight, out.height);
            out.height -= 2;

            out.width = Math.min(out.width, bounds.width - (pageXOffset - bounds.left));
            out.width = Math.min(out.width, bounds.width - (bounds.left + bounds.width - (pageXOffset + innerWidth)));
            out.width = Math.min(innerWidth, out.width);
            out.width -= 2;

            if (out.top < pageYOffset) {
              out.top = pageYOffset;
            }
            if (out.left < pageXOffset) {
              out.left = pageXOffset;
            }

            return out;
          }
        } else if (this.targetModifier === 'scroll-handle') {
          var bounds = undefined;
          var target = this.target;
          if (target === document.body) {
            target = document.documentElement;

            bounds = {
              left: pageXOffset,
              top: pageYOffset,
              height: innerHeight,
              width: innerWidth
            };
          } else {
            bounds = getBounds(target);
          }

          var style = getComputedStyle(target);

          var hasBottomScroll = target.scrollWidth > target.clientWidth || [style.overflow, style.overflowX].indexOf('scroll') >= 0 || this.target !== document.body;

          var scrollBottom = 0;
          if (hasBottomScroll) {
            scrollBottom = 15;
          }

          var height = bounds.height - parseFloat(style.borderTopWidth) - parseFloat(style.borderBottomWidth) - scrollBottom;

          var out = {
            width: 15,
            height: height * 0.975 * (height / target.scrollHeight),
            left: bounds.left + bounds.width - parseFloat(style.borderLeftWidth) - 15
          };

          var fitAdj = 0;
          if (height < 408 && this.target === document.body) {
            fitAdj = -0.00011 * Math.pow(height, 2) - 0.00727 * height + 22.58;
          }

          if (this.target !== document.body) {
            out.height = Math.max(out.height, 24);
          }

          var scrollPercentage = this.target.scrollTop / (target.scrollHeight - height);
          out.top = scrollPercentage * (height - out.height - fitAdj) + bounds.top + parseFloat(style.borderTopWidth);

          if (this.target === document.body) {
            out.height = Math.max(out.height, 24);
          }

          return out;
        }
      } else {
        return getBounds(this.target);
      }
    }
  }, {
    key: 'clearCache',
    value: function clearCache() {
      this._cache = {};
    }
  }, {
    key: 'cache',
    value: function cache(k, getter) {
      // More than one module will often need the same DOM info, so
      // we keep a cache which is cleared on each position call
      if (typeof this._cache === 'undefined') {
        this._cache = {};
      }

      if (typeof this._cache[k] === 'undefined') {
        this._cache[k] = getter.call(this);
      }

      return this._cache[k];
    }
  }, {
    key: 'enable',
    value: function enable() {
      var _this3 = this;

      var pos = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

      if (!(this.options.addTargetClasses === false)) {
        addClass(this.target, this.getClass('enabled'));
      }
      addClass(this.element, this.getClass('enabled'));
      this.enabled = true;

      this.scrollParents.forEach(function (parent) {
        if (parent !== _this3.target.ownerDocument) {
          parent.addEventListener('scroll', _this3.position);
        }
      });

      if (pos) {
        this.position();
      }
    }
  }, {
    key: 'disable',
    value: function disable() {
      var _this4 = this;

      removeClass(this.target, this.getClass('enabled'));
      removeClass(this.element, this.getClass('enabled'));
      this.enabled = false;

      if (typeof this.scrollParents !== 'undefined') {
        this.scrollParents.forEach(function (parent) {
          parent.removeEventListener('scroll', _this4.position);
        });
      }
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      var _this5 = this;

      this.disable();

      tethers.forEach(function (tether, i) {
        if (tether === _this5) {
          tethers.splice(i, 1);
        }
      });

      // Remove any elements we were using for convenience from the DOM
      if (tethers.length === 0) {
        removeUtilElements();
      }
    }
  }, {
    key: 'updateAttachClasses',
    value: function updateAttachClasses(elementAttach, targetAttach) {
      var _this6 = this;

      elementAttach = elementAttach || this.attachment;
      targetAttach = targetAttach || this.targetAttachment;
      var sides = ['left', 'top', 'bottom', 'right', 'middle', 'center'];

      if (typeof this._addAttachClasses !== 'undefined' && this._addAttachClasses.length) {
        // updateAttachClasses can be called more than once in a position call, so
        // we need to clean up after ourselves such that when the last defer gets
        // ran it doesn't add any extra classes from previous calls.
        this._addAttachClasses.splice(0, this._addAttachClasses.length);
      }

      if (typeof this._addAttachClasses === 'undefined') {
        this._addAttachClasses = [];
      }
      var add = this._addAttachClasses;

      if (elementAttach.top) {
        add.push(this.getClass('element-attached') + '-' + elementAttach.top);
      }
      if (elementAttach.left) {
        add.push(this.getClass('element-attached') + '-' + elementAttach.left);
      }
      if (targetAttach.top) {
        add.push(this.getClass('target-attached') + '-' + targetAttach.top);
      }
      if (targetAttach.left) {
        add.push(this.getClass('target-attached') + '-' + targetAttach.left);
      }

      var all = [];
      sides.forEach(function (side) {
        all.push(_this6.getClass('element-attached') + '-' + side);
        all.push(_this6.getClass('target-attached') + '-' + side);
      });

      defer(function () {
        if (!(typeof _this6._addAttachClasses !== 'undefined')) {
          return;
        }

        updateClasses(_this6.element, _this6._addAttachClasses, all);
        if (!(_this6.options.addTargetClasses === false)) {
          updateClasses(_this6.target, _this6._addAttachClasses, all);
        }

        delete _this6._addAttachClasses;
      });
    }
  }, {
    key: 'position',
    value: function position() {
      var _this7 = this;

      var flushChanges = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

      // flushChanges commits the changes immediately, leave true unless you are positioning multiple
      // tethers (in which case call Tether.Utils.flush yourself when you're done)

      if (!this.enabled) {
        return;
      }

      this.clearCache();

      // Turn 'auto' attachments into the appropriate corner or edge
      var targetAttachment = autoToFixedAttachment(this.targetAttachment, this.attachment);

      this.updateAttachClasses(this.attachment, targetAttachment);

      var elementPos = this.cache('element-bounds', function () {
        return getBounds(_this7.element);
      });

      var width = elementPos.width;
      var height = elementPos.height;

      if (width === 0 && height === 0 && typeof this.lastSize !== 'undefined') {
        var _lastSize = this.lastSize;

        // We cache the height and width to make it possible to position elements that are
        // getting hidden.
        width = _lastSize.width;
        height = _lastSize.height;
      } else {
        this.lastSize = { width: width, height: height };
      }

      var targetPos = this.cache('target-bounds', function () {
        return _this7.getTargetBounds();
      });
      var targetSize = targetPos;

      // Get an actual px offset from the attachment
      var offset = offsetToPx(attachmentToOffset(this.attachment), { width: width, height: height });
      var targetOffset = offsetToPx(attachmentToOffset(targetAttachment), targetSize);

      var manualOffset = offsetToPx(this.offset, { width: width, height: height });
      var manualTargetOffset = offsetToPx(this.targetOffset, targetSize);

      // Add the manually provided offset
      offset = addOffset(offset, manualOffset);
      targetOffset = addOffset(targetOffset, manualTargetOffset);

      // It's now our goal to make (element position + offset) == (target position + target offset)
      var left = targetPos.left + targetOffset.left - offset.left;
      var top = targetPos.top + targetOffset.top - offset.top;

      for (var i = 0; i < TetherBase.modules.length; ++i) {
        var _module2 = TetherBase.modules[i];
        var ret = _module2.position.call(this, {
          left: left,
          top: top,
          targetAttachment: targetAttachment,
          targetPos: targetPos,
          elementPos: elementPos,
          offset: offset,
          targetOffset: targetOffset,
          manualOffset: manualOffset,
          manualTargetOffset: manualTargetOffset,
          scrollbarSize: scrollbarSize,
          attachment: this.attachment
        });

        if (ret === false) {
          return false;
        } else if (typeof ret === 'undefined' || typeof ret !== 'object') {
          continue;
        } else {
          top = ret.top;
          left = ret.left;
        }
      }

      // We describe the position three different ways to give the optimizer
      // a chance to decide the best possible way to position the element
      // with the fewest repaints.
      var next = {
        // It's position relative to the page (absolute positioning when
        // the element is a child of the body)
        page: {
          top: top,
          left: left
        },

        // It's position relative to the viewport (fixed positioning)
        viewport: {
          top: top - pageYOffset,
          bottom: pageYOffset - top - height + innerHeight,
          left: left - pageXOffset,
          right: pageXOffset - left - width + innerWidth
        }
      };

      var doc = this.target.ownerDocument;
      var win = doc.defaultView;

      var scrollbarSize = undefined;
      if (win.innerHeight > doc.documentElement.clientHeight) {
        scrollbarSize = this.cache('scrollbar-size', getScrollBarSize);
        next.viewport.bottom -= scrollbarSize.height;
      }

      if (win.innerWidth > doc.documentElement.clientWidth) {
        scrollbarSize = this.cache('scrollbar-size', getScrollBarSize);
        next.viewport.right -= scrollbarSize.width;
      }

      if (['', 'static'].indexOf(doc.body.style.position) === -1 || ['', 'static'].indexOf(doc.body.parentElement.style.position) === -1) {
        // Absolute positioning in the body will be relative to the page, not the 'initial containing block'
        next.page.bottom = doc.body.scrollHeight - top - height;
        next.page.right = doc.body.scrollWidth - left - width;
      }

      if (typeof this.options.optimizations !== 'undefined' && this.options.optimizations.moveElement !== false && !(typeof this.targetModifier !== 'undefined')) {
        (function () {
          var offsetParent = _this7.cache('target-offsetparent', function () {
            return getOffsetParent(_this7.target);
          });
          var offsetPosition = _this7.cache('target-offsetparent-bounds', function () {
            return getBounds(offsetParent);
          });
          var offsetParentStyle = getComputedStyle(offsetParent);
          var offsetParentSize = offsetPosition;

          var offsetBorder = {};
          ['Top', 'Left', 'Bottom', 'Right'].forEach(function (side) {
            offsetBorder[side.toLowerCase()] = parseFloat(offsetParentStyle['border' + side + 'Width']);
          });

          offsetPosition.right = doc.body.scrollWidth - offsetPosition.left - offsetParentSize.width + offsetBorder.right;
          offsetPosition.bottom = doc.body.scrollHeight - offsetPosition.top - offsetParentSize.height + offsetBorder.bottom;

          if (next.page.top >= offsetPosition.top + offsetBorder.top && next.page.bottom >= offsetPosition.bottom) {
            if (next.page.left >= offsetPosition.left + offsetBorder.left && next.page.right >= offsetPosition.right) {
              // We're within the visible part of the target's scroll parent
              var scrollTop = offsetParent.scrollTop;
              var scrollLeft = offsetParent.scrollLeft;

              // It's position relative to the target's offset parent (absolute positioning when
              // the element is moved to be a child of the target's offset parent).
              next.offset = {
                top: next.page.top - offsetPosition.top + scrollTop - offsetBorder.top,
                left: next.page.left - offsetPosition.left + scrollLeft - offsetBorder.left
              };
            }
          }
        })();
      }

      // We could also travel up the DOM and try each containing context, rather than only
      // looking at the body, but we're gonna get diminishing returns.

      this.move(next);

      this.history.unshift(next);

      if (this.history.length > 3) {
        this.history.pop();
      }

      if (flushChanges) {
        flush();
      }

      return true;
    }

    // THE ISSUE
  }, {
    key: 'move',
    value: function move(pos) {
      var _this8 = this;

      if (!(typeof this.element.parentNode !== 'undefined')) {
        return;
      }

      var same = {};

      for (var type in pos) {
        same[type] = {};

        for (var key in pos[type]) {
          var found = false;

          for (var i = 0; i < this.history.length; ++i) {
            var point = this.history[i];
            if (typeof point[type] !== 'undefined' && !within(point[type][key], pos[type][key])) {
              found = true;
              break;
            }
          }

          if (!found) {
            same[type][key] = true;
          }
        }
      }

      var css = { top: '', left: '', right: '', bottom: '' };

      var transcribe = function transcribe(_same, _pos) {
        var hasOptimizations = typeof _this8.options.optimizations !== 'undefined';
        var gpu = hasOptimizations ? _this8.options.optimizations.gpu : null;
        if (gpu !== false) {
          var yPos = undefined,
              xPos = undefined;
          if (_same.top) {
            css.top = 0;
            yPos = _pos.top;
          } else {
            css.bottom = 0;
            yPos = -_pos.bottom;
          }

          if (_same.left) {
            css.left = 0;
            xPos = _pos.left;
          } else {
            css.right = 0;
            xPos = -_pos.right;
          }

          if (window.matchMedia) {
            // HubSpot/tether#207
            var retina = window.matchMedia('only screen and (min-resolution: 1.3dppx)').matches || window.matchMedia('only screen and (-webkit-min-device-pixel-ratio: 1.3)').matches;
            if (!retina) {
              xPos = Math.round(xPos);
              yPos = Math.round(yPos);
            }
          }

          css[transformKey] = 'translateX(' + xPos + 'px) translateY(' + yPos + 'px)';

          if (transformKey !== 'msTransform') {
            // The Z transform will keep this in the GPU (faster, and prevents artifacts),
            // but IE9 doesn't support 3d transforms and will choke.
            css[transformKey] += " translateZ(0)";
          }
        } else {
          if (_same.top) {
            css.top = _pos.top + 'px';
          } else {
            css.bottom = _pos.bottom + 'px';
          }

          if (_same.left) {
            css.left = _pos.left + 'px';
          } else {
            css.right = _pos.right + 'px';
          }
        }
      };

      var moved = false;
      if ((same.page.top || same.page.bottom) && (same.page.left || same.page.right)) {
        css.position = 'absolute';
        transcribe(same.page, pos.page);
      } else if ((same.viewport.top || same.viewport.bottom) && (same.viewport.left || same.viewport.right)) {
        css.position = 'fixed';
        transcribe(same.viewport, pos.viewport);
      } else if (typeof same.offset !== 'undefined' && same.offset.top && same.offset.left) {
        (function () {
          css.position = 'absolute';
          var offsetParent = _this8.cache('target-offsetparent', function () {
            return getOffsetParent(_this8.target);
          });

          if (getOffsetParent(_this8.element) !== offsetParent) {
            defer(function () {
              _this8.element.parentNode.removeChild(_this8.element);
              offsetParent.appendChild(_this8.element);
            });
          }

          transcribe(same.offset, pos.offset);
          moved = true;
        })();
      } else {
        css.position = 'absolute';
        transcribe({ top: true, left: true }, pos.page);
      }

      if (!moved) {
        if (this.options.bodyElement) {
          this.options.bodyElement.appendChild(this.element);
        } else {
          var offsetParentIsBody = true;
          var currentNode = this.element.parentNode;
          while (currentNode && currentNode.nodeType === 1 && currentNode.tagName !== 'BODY') {
            if (getComputedStyle(currentNode).position !== 'static') {
              offsetParentIsBody = false;
              break;
            }

            currentNode = currentNode.parentNode;
          }

          if (!offsetParentIsBody) {
            this.element.parentNode.removeChild(this.element);
            this.element.ownerDocument.body.appendChild(this.element);
          }
        }
      }

      // Any css change will trigger a repaint, so let's avoid one if nothing changed
      var writeCSS = {};
      var write = false;
      for (var key in css) {
        var val = css[key];
        var elVal = this.element.style[key];

        if (elVal !== val) {
          write = true;
          writeCSS[key] = val;
        }
      }

      if (write) {
        defer(function () {
          extend(_this8.element.style, writeCSS);
          _this8.trigger('repositioned');
        });
      }
    }
  }]);

  return TetherClass;
})(Evented);

TetherClass.modules = [];

TetherBase.position = position;

var Tether = extend(TetherClass, TetherBase);
/* globals TetherBase */

'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var _TetherBase$Utils = TetherBase.Utils;
var getBounds = _TetherBase$Utils.getBounds;
var extend = _TetherBase$Utils.extend;
var updateClasses = _TetherBase$Utils.updateClasses;
var defer = _TetherBase$Utils.defer;

var BOUNDS_FORMAT = ['left', 'top', 'right', 'bottom'];

function getBoundingRect(tether, to) {
  if (to === 'scrollParent') {
    to = tether.scrollParents[0];
  } else if (to === 'window') {
    to = [pageXOffset, pageYOffset, innerWidth + pageXOffset, innerHeight + pageYOffset];
  }

  if (to === document) {
    to = to.documentElement;
  }

  if (typeof to.nodeType !== 'undefined') {
    (function () {
      var node = to;
      var size = getBounds(to);
      var pos = size;
      var style = getComputedStyle(to);

      to = [pos.left, pos.top, size.width + pos.left, size.height + pos.top];

      // Account any parent Frames scroll offset
      if (node.ownerDocument !== document) {
        var win = node.ownerDocument.defaultView;
        to[0] += win.pageXOffset;
        to[1] += win.pageYOffset;
        to[2] += win.pageXOffset;
        to[3] += win.pageYOffset;
      }

      BOUNDS_FORMAT.forEach(function (side, i) {
        side = side[0].toUpperCase() + side.substr(1);
        if (side === 'Top' || side === 'Left') {
          to[i] += parseFloat(style['border' + side + 'Width']);
        } else {
          to[i] -= parseFloat(style['border' + side + 'Width']);
        }
      });
    })();
  }

  return to;
}

TetherBase.modules.push({
  position: function position(_ref) {
    var _this = this;

    var top = _ref.top;
    var left = _ref.left;
    var targetAttachment = _ref.targetAttachment;

    if (!this.options.constraints) {
      return true;
    }

    var _cache = this.cache('element-bounds', function () {
      return getBounds(_this.element);
    });

    var height = _cache.height;
    var width = _cache.width;

    if (width === 0 && height === 0 && typeof this.lastSize !== 'undefined') {
      var _lastSize = this.lastSize;

      // Handle the item getting hidden as a result of our positioning without glitching
      // the classes in and out
      width = _lastSize.width;
      height = _lastSize.height;
    }

    var targetSize = this.cache('target-bounds', function () {
      return _this.getTargetBounds();
    });

    var targetHeight = targetSize.height;
    var targetWidth = targetSize.width;

    var allClasses = [this.getClass('pinned'), this.getClass('out-of-bounds')];

    this.options.constraints.forEach(function (constraint) {
      var outOfBoundsClass = constraint.outOfBoundsClass;
      var pinnedClass = constraint.pinnedClass;

      if (outOfBoundsClass) {
        allClasses.push(outOfBoundsClass);
      }
      if (pinnedClass) {
        allClasses.push(pinnedClass);
      }
    });

    allClasses.forEach(function (cls) {
      ['left', 'top', 'right', 'bottom'].forEach(function (side) {
        allClasses.push(cls + '-' + side);
      });
    });

    var addClasses = [];

    var tAttachment = extend({}, targetAttachment);
    var eAttachment = extend({}, this.attachment);

    this.options.constraints.forEach(function (constraint) {
      var to = constraint.to;
      var attachment = constraint.attachment;
      var pin = constraint.pin;

      if (typeof attachment === 'undefined') {
        attachment = '';
      }

      var changeAttachX = undefined,
          changeAttachY = undefined;
      if (attachment.indexOf(' ') >= 0) {
        var _attachment$split = attachment.split(' ');

        var _attachment$split2 = _slicedToArray(_attachment$split, 2);

        changeAttachY = _attachment$split2[0];
        changeAttachX = _attachment$split2[1];
      } else {
        changeAttachX = changeAttachY = attachment;
      }

      var bounds = getBoundingRect(_this, to);

      if (changeAttachY === 'target' || changeAttachY === 'both') {
        if (top < bounds[1] && tAttachment.top === 'top') {
          top += targetHeight;
          tAttachment.top = 'bottom';
        }

        if (top + height > bounds[3] && tAttachment.top === 'bottom') {
          top -= targetHeight;
          tAttachment.top = 'top';
        }
      }

      if (changeAttachY === 'together') {
        if (tAttachment.top === 'top') {
          if (eAttachment.top === 'bottom' && top < bounds[1]) {
            top += targetHeight;
            tAttachment.top = 'bottom';

            top += height;
            eAttachment.top = 'top';
          } else if (eAttachment.top === 'top' && top + height > bounds[3] && top - (height - targetHeight) >= bounds[1]) {
            top -= height - targetHeight;
            tAttachment.top = 'bottom';

            eAttachment.top = 'bottom';
          }
        }

        if (tAttachment.top === 'bottom') {
          if (eAttachment.top === 'top' && top + height > bounds[3]) {
            top -= targetHeight;
            tAttachment.top = 'top';

            top -= height;
            eAttachment.top = 'bottom';
          } else if (eAttachment.top === 'bottom' && top < bounds[1] && top + (height * 2 - targetHeight) <= bounds[3]) {
            top += height - targetHeight;
            tAttachment.top = 'top';

            eAttachment.top = 'top';
          }
        }

        if (tAttachment.top === 'middle') {
          if (top + height > bounds[3] && eAttachment.top === 'top') {
            top -= height;
            eAttachment.top = 'bottom';
          } else if (top < bounds[1] && eAttachment.top === 'bottom') {
            top += height;
            eAttachment.top = 'top';
          }
        }
      }

      if (changeAttachX === 'target' || changeAttachX === 'both') {
        if (left < bounds[0] && tAttachment.left === 'left') {
          left += targetWidth;
          tAttachment.left = 'right';
        }

        if (left + width > bounds[2] && tAttachment.left === 'right') {
          left -= targetWidth;
          tAttachment.left = 'left';
        }
      }

      if (changeAttachX === 'together') {
        if (left < bounds[0] && tAttachment.left === 'left') {
          if (eAttachment.left === 'right') {
            left += targetWidth;
            tAttachment.left = 'right';

            left += width;
            eAttachment.left = 'left';
          } else if (eAttachment.left === 'left') {
            left += targetWidth;
            tAttachment.left = 'right';

            left -= width;
            eAttachment.left = 'right';
          }
        } else if (left + width > bounds[2] && tAttachment.left === 'right') {
          if (eAttachment.left === 'left') {
            left -= targetWidth;
            tAttachment.left = 'left';

            left -= width;
            eAttachment.left = 'right';
          } else if (eAttachment.left === 'right') {
            left -= targetWidth;
            tAttachment.left = 'left';

            left += width;
            eAttachment.left = 'left';
          }
        } else if (tAttachment.left === 'center') {
          if (left + width > bounds[2] && eAttachment.left === 'left') {
            left -= width;
            eAttachment.left = 'right';
          } else if (left < bounds[0] && eAttachment.left === 'right') {
            left += width;
            eAttachment.left = 'left';
          }
        }
      }

      if (changeAttachY === 'element' || changeAttachY === 'both') {
        if (top < bounds[1] && eAttachment.top === 'bottom') {
          top += height;
          eAttachment.top = 'top';
        }

        if (top + height > bounds[3] && eAttachment.top === 'top') {
          top -= height;
          eAttachment.top = 'bottom';
        }
      }

      if (changeAttachX === 'element' || changeAttachX === 'both') {
        if (left < bounds[0]) {
          if (eAttachment.left === 'right') {
            left += width;
            eAttachment.left = 'left';
          } else if (eAttachment.left === 'center') {
            left += width / 2;
            eAttachment.left = 'left';
          }
        }

        if (left + width > bounds[2]) {
          if (eAttachment.left === 'left') {
            left -= width;
            eAttachment.left = 'right';
          } else if (eAttachment.left === 'center') {
            left -= width / 2;
            eAttachment.left = 'right';
          }
        }
      }

      if (typeof pin === 'string') {
        pin = pin.split(',').map(function (p) {
          return p.trim();
        });
      } else if (pin === true) {
        pin = ['top', 'left', 'right', 'bottom'];
      }

      pin = pin || [];

      var pinned = [];
      var oob = [];

      if (top < bounds[1]) {
        if (pin.indexOf('top') >= 0) {
          top = bounds[1];
          pinned.push('top');
        } else {
          oob.push('top');
        }
      }

      if (top + height > bounds[3]) {
        if (pin.indexOf('bottom') >= 0) {
          top = bounds[3] - height;
          pinned.push('bottom');
        } else {
          oob.push('bottom');
        }
      }

      if (left < bounds[0]) {
        if (pin.indexOf('left') >= 0) {
          left = bounds[0];
          pinned.push('left');
        } else {
          oob.push('left');
        }
      }

      if (left + width > bounds[2]) {
        if (pin.indexOf('right') >= 0) {
          left = bounds[2] - width;
          pinned.push('right');
        } else {
          oob.push('right');
        }
      }

      if (pinned.length) {
        (function () {
          var pinnedClass = undefined;
          if (typeof _this.options.pinnedClass !== 'undefined') {
            pinnedClass = _this.options.pinnedClass;
          } else {
            pinnedClass = _this.getClass('pinned');
          }

          addClasses.push(pinnedClass);
          pinned.forEach(function (side) {
            addClasses.push(pinnedClass + '-' + side);
          });
        })();
      }

      if (oob.length) {
        (function () {
          var oobClass = undefined;
          if (typeof _this.options.outOfBoundsClass !== 'undefined') {
            oobClass = _this.options.outOfBoundsClass;
          } else {
            oobClass = _this.getClass('out-of-bounds');
          }

          addClasses.push(oobClass);
          oob.forEach(function (side) {
            addClasses.push(oobClass + '-' + side);
          });
        })();
      }

      if (pinned.indexOf('left') >= 0 || pinned.indexOf('right') >= 0) {
        eAttachment.left = tAttachment.left = false;
      }
      if (pinned.indexOf('top') >= 0 || pinned.indexOf('bottom') >= 0) {
        eAttachment.top = tAttachment.top = false;
      }

      if (tAttachment.top !== targetAttachment.top || tAttachment.left !== targetAttachment.left || eAttachment.top !== _this.attachment.top || eAttachment.left !== _this.attachment.left) {
        _this.updateAttachClasses(eAttachment, tAttachment);
        _this.trigger('update', {
          attachment: eAttachment,
          targetAttachment: tAttachment
        });
      }
    });

    defer(function () {
      if (!(_this.options.addTargetClasses === false)) {
        updateClasses(_this.target, addClasses, allClasses);
      }
      updateClasses(_this.element, addClasses, allClasses);
    });

    return { top: top, left: left };
  }
});
/* globals TetherBase */

'use strict';

var _TetherBase$Utils = TetherBase.Utils;
var getBounds = _TetherBase$Utils.getBounds;
var updateClasses = _TetherBase$Utils.updateClasses;
var defer = _TetherBase$Utils.defer;

TetherBase.modules.push({
  position: function position(_ref) {
    var _this = this;

    var top = _ref.top;
    var left = _ref.left;

    var _cache = this.cache('element-bounds', function () {
      return getBounds(_this.element);
    });

    var height = _cache.height;
    var width = _cache.width;

    var targetPos = this.getTargetBounds();

    var bottom = top + height;
    var right = left + width;

    var abutted = [];
    if (top <= targetPos.bottom && bottom >= targetPos.top) {
      ['left', 'right'].forEach(function (side) {
        var targetPosSide = targetPos[side];
        if (targetPosSide === left || targetPosSide === right) {
          abutted.push(side);
        }
      });
    }

    if (left <= targetPos.right && right >= targetPos.left) {
      ['top', 'bottom'].forEach(function (side) {
        var targetPosSide = targetPos[side];
        if (targetPosSide === top || targetPosSide === bottom) {
          abutted.push(side);
        }
      });
    }

    var allClasses = [];
    var addClasses = [];

    var sides = ['left', 'top', 'right', 'bottom'];
    allClasses.push(this.getClass('abutted'));
    sides.forEach(function (side) {
      allClasses.push(_this.getClass('abutted') + '-' + side);
    });

    if (abutted.length) {
      addClasses.push(this.getClass('abutted'));
    }

    abutted.forEach(function (side) {
      addClasses.push(_this.getClass('abutted') + '-' + side);
    });

    defer(function () {
      if (!(_this.options.addTargetClasses === false)) {
        updateClasses(_this.target, addClasses, allClasses);
      }
      updateClasses(_this.element, addClasses, allClasses);
    });

    return true;
  }
});
/* globals TetherBase */

'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

TetherBase.modules.push({
  position: function position(_ref) {
    var top = _ref.top;
    var left = _ref.left;

    if (!this.options.shift) {
      return;
    }

    var shift = this.options.shift;
    if (typeof this.options.shift === 'function') {
      shift = this.options.shift.call(this, { top: top, left: left });
    }

    var shiftTop = undefined,
        shiftLeft = undefined;
    if (typeof shift === 'string') {
      shift = shift.split(' ');
      shift[1] = shift[1] || shift[0];

      var _shift = shift;

      var _shift2 = _slicedToArray(_shift, 2);

      shiftTop = _shift2[0];
      shiftLeft = _shift2[1];

      shiftTop = parseFloat(shiftTop, 10);
      shiftLeft = parseFloat(shiftLeft, 10);
    } else {
      shiftTop = shift.top;
      shiftLeft = shift.left;
    }

    top += shiftTop;
    left += shiftLeft;

    return { top: top, left: left };
  }
});
return Tether;

}));


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(0);

// Inclusion of project static html files
__webpack_require__(18);
__webpack_require__(20);
__webpack_require__(16);
__webpack_require__(15);
__webpack_require__(19);
__webpack_require__(17);
__webpack_require__(25);
__webpack_require__(24);
__webpack_require__(21);
__webpack_require__(22);
__webpack_require__(23);
__webpack_require__(14);
__webpack_require__(13);
__webpack_require__(12);
__webpack_require__(11);
__webpack_require__(10);
__webpack_require__(9);

// Images
__webpack_require__(30);
__webpack_require__(33);
__webpack_require__(32);
__webpack_require__(31);
__webpack_require__(34);
__webpack_require__(35);

__webpack_require__(36);
__webpack_require__(37);
__webpack_require__(41);
__webpack_require__(38);
__webpack_require__(39);
__webpack_require__(40);

__webpack_require__(42);

// Javascript functions used for custom effects
var effects = __webpack_require__(60);
var formtools = __webpack_require__(61);

// Entry point
$(document).ready(function() {
	if (document.title.startsWith("Accueil")) {
		effects.parallax();
	}
	
	if (document.title.startsWith("Réservation")) {
		// Logic to recover query params from the url and feed them to the form
		formtools.fillFieldsFromParams(["titre", "date"]);

		// Sending of emails when form data are submitted
		$("#reservation-form").submit(function (e) {
			emailjs.init("user_f3UGTQZMDAd5TjT4Ymleh");
			emailjs.sendForm("tchappui_gmail_com","confirmation_de_reservation", "reservation-form").then(
				function(response) {
					var fields = $("#reservation-form").serialize();
					$("#reservation-confirmation").fadeIn(2000).delay(5000).fadeOut(200);
					if (typeof(Storage) !== "undefined") {
						console.log(fields);
					} else {
						// Sorry! No Web Storage support..
					}
				},
				function(error) {
				}
			);
			e.preventDefault();
		});
	}
});


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__ (54);
__webpack_require__ (44);
__webpack_require__ (45);
__webpack_require__ (46);
__webpack_require__ (47);
__webpack_require__ (48);
__webpack_require__ (49);
__webpack_require__ (53);
__webpack_require__ (50);
__webpack_require__ (51);
__webpack_require__ (52);
__webpack_require__ (43);


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(undefined);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n.fa-border {\n  padding: .2em .25em .15em;\n  border: solid 0.08em #eee;\n  border-radius: .1em; }\n\n.fa-pull-left {\n  float: left; }\n\n.fa-pull-right {\n  float: right; }\n\n.fa.fa-pull-left {\n  margin-right: .3em; }\n\n.fa.fa-pull-right {\n  margin-left: .3em; }\n\n/* Deprecated as of 4.4.0 */\n.pull-right {\n  float: right; }\n\n.pull-left {\n  float: left; }\n\n.fa.pull-left {\n  margin-right: .3em; }\n\n.fa.pull-right {\n  margin-left: .3em; }\n\n.fa {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n.fa-fw {\n  width: 1.28571em;\n  text-align: center; }\n\n/* Font Awesome uses the Unicode Private Use Area (PUA) to ensure screen\n   readers do not read off random characters that represent icons */\n.fa-glass:before {\n  content: \"\\F000\"; }\n\n.fa-music:before {\n  content: \"\\F001\"; }\n\n.fa-search:before {\n  content: \"\\F002\"; }\n\n.fa-envelope-o:before {\n  content: \"\\F003\"; }\n\n.fa-heart:before {\n  content: \"\\F004\"; }\n\n.fa-star:before {\n  content: \"\\F005\"; }\n\n.fa-star-o:before {\n  content: \"\\F006\"; }\n\n.fa-user:before {\n  content: \"\\F007\"; }\n\n.fa-film:before {\n  content: \"\\F008\"; }\n\n.fa-th-large:before {\n  content: \"\\F009\"; }\n\n.fa-th:before {\n  content: \"\\F00A\"; }\n\n.fa-th-list:before {\n  content: \"\\F00B\"; }\n\n.fa-check:before {\n  content: \"\\F00C\"; }\n\n.fa-remove:before,\n.fa-close:before,\n.fa-times:before {\n  content: \"\\F00D\"; }\n\n.fa-search-plus:before {\n  content: \"\\F00E\"; }\n\n.fa-search-minus:before {\n  content: \"\\F010\"; }\n\n.fa-power-off:before {\n  content: \"\\F011\"; }\n\n.fa-signal:before {\n  content: \"\\F012\"; }\n\n.fa-gear:before,\n.fa-cog:before {\n  content: \"\\F013\"; }\n\n.fa-trash-o:before {\n  content: \"\\F014\"; }\n\n.fa-home:before {\n  content: \"\\F015\"; }\n\n.fa-file-o:before {\n  content: \"\\F016\"; }\n\n.fa-clock-o:before {\n  content: \"\\F017\"; }\n\n.fa-road:before {\n  content: \"\\F018\"; }\n\n.fa-download:before {\n  content: \"\\F019\"; }\n\n.fa-arrow-circle-o-down:before {\n  content: \"\\F01A\"; }\n\n.fa-arrow-circle-o-up:before {\n  content: \"\\F01B\"; }\n\n.fa-inbox:before {\n  content: \"\\F01C\"; }\n\n.fa-play-circle-o:before {\n  content: \"\\F01D\"; }\n\n.fa-rotate-right:before,\n.fa-repeat:before {\n  content: \"\\F01E\"; }\n\n.fa-refresh:before {\n  content: \"\\F021\"; }\n\n.fa-list-alt:before {\n  content: \"\\F022\"; }\n\n.fa-lock:before {\n  content: \"\\F023\"; }\n\n.fa-flag:before {\n  content: \"\\F024\"; }\n\n.fa-headphones:before {\n  content: \"\\F025\"; }\n\n.fa-volume-off:before {\n  content: \"\\F026\"; }\n\n.fa-volume-down:before {\n  content: \"\\F027\"; }\n\n.fa-volume-up:before {\n  content: \"\\F028\"; }\n\n.fa-qrcode:before {\n  content: \"\\F029\"; }\n\n.fa-barcode:before {\n  content: \"\\F02A\"; }\n\n.fa-tag:before {\n  content: \"\\F02B\"; }\n\n.fa-tags:before {\n  content: \"\\F02C\"; }\n\n.fa-book:before {\n  content: \"\\F02D\"; }\n\n.fa-bookmark:before {\n  content: \"\\F02E\"; }\n\n.fa-print:before {\n  content: \"\\F02F\"; }\n\n.fa-camera:before {\n  content: \"\\F030\"; }\n\n.fa-font:before {\n  content: \"\\F031\"; }\n\n.fa-bold:before {\n  content: \"\\F032\"; }\n\n.fa-italic:before {\n  content: \"\\F033\"; }\n\n.fa-text-height:before {\n  content: \"\\F034\"; }\n\n.fa-text-width:before {\n  content: \"\\F035\"; }\n\n.fa-align-left:before {\n  content: \"\\F036\"; }\n\n.fa-align-center:before {\n  content: \"\\F037\"; }\n\n.fa-align-right:before {\n  content: \"\\F038\"; }\n\n.fa-align-justify:before {\n  content: \"\\F039\"; }\n\n.fa-list:before {\n  content: \"\\F03A\"; }\n\n.fa-dedent:before,\n.fa-outdent:before {\n  content: \"\\F03B\"; }\n\n.fa-indent:before {\n  content: \"\\F03C\"; }\n\n.fa-video-camera:before {\n  content: \"\\F03D\"; }\n\n.fa-photo:before,\n.fa-image:before,\n.fa-picture-o:before {\n  content: \"\\F03E\"; }\n\n.fa-pencil:before {\n  content: \"\\F040\"; }\n\n.fa-map-marker:before {\n  content: \"\\F041\"; }\n\n.fa-adjust:before {\n  content: \"\\F042\"; }\n\n.fa-tint:before {\n  content: \"\\F043\"; }\n\n.fa-edit:before,\n.fa-pencil-square-o:before {\n  content: \"\\F044\"; }\n\n.fa-share-square-o:before {\n  content: \"\\F045\"; }\n\n.fa-check-square-o:before {\n  content: \"\\F046\"; }\n\n.fa-arrows:before {\n  content: \"\\F047\"; }\n\n.fa-step-backward:before {\n  content: \"\\F048\"; }\n\n.fa-fast-backward:before {\n  content: \"\\F049\"; }\n\n.fa-backward:before {\n  content: \"\\F04A\"; }\n\n.fa-play:before {\n  content: \"\\F04B\"; }\n\n.fa-pause:before {\n  content: \"\\F04C\"; }\n\n.fa-stop:before {\n  content: \"\\F04D\"; }\n\n.fa-forward:before {\n  content: \"\\F04E\"; }\n\n.fa-fast-forward:before {\n  content: \"\\F050\"; }\n\n.fa-step-forward:before {\n  content: \"\\F051\"; }\n\n.fa-eject:before {\n  content: \"\\F052\"; }\n\n.fa-chevron-left:before {\n  content: \"\\F053\"; }\n\n.fa-chevron-right:before {\n  content: \"\\F054\"; }\n\n.fa-plus-circle:before {\n  content: \"\\F055\"; }\n\n.fa-minus-circle:before {\n  content: \"\\F056\"; }\n\n.fa-times-circle:before {\n  content: \"\\F057\"; }\n\n.fa-check-circle:before {\n  content: \"\\F058\"; }\n\n.fa-question-circle:before {\n  content: \"\\F059\"; }\n\n.fa-info-circle:before {\n  content: \"\\F05A\"; }\n\n.fa-crosshairs:before {\n  content: \"\\F05B\"; }\n\n.fa-times-circle-o:before {\n  content: \"\\F05C\"; }\n\n.fa-check-circle-o:before {\n  content: \"\\F05D\"; }\n\n.fa-ban:before {\n  content: \"\\F05E\"; }\n\n.fa-arrow-left:before {\n  content: \"\\F060\"; }\n\n.fa-arrow-right:before {\n  content: \"\\F061\"; }\n\n.fa-arrow-up:before {\n  content: \"\\F062\"; }\n\n.fa-arrow-down:before {\n  content: \"\\F063\"; }\n\n.fa-mail-forward:before,\n.fa-share:before {\n  content: \"\\F064\"; }\n\n.fa-expand:before {\n  content: \"\\F065\"; }\n\n.fa-compress:before {\n  content: \"\\F066\"; }\n\n.fa-plus:before {\n  content: \"\\F067\"; }\n\n.fa-minus:before {\n  content: \"\\F068\"; }\n\n.fa-asterisk:before {\n  content: \"\\F069\"; }\n\n.fa-exclamation-circle:before {\n  content: \"\\F06A\"; }\n\n.fa-gift:before {\n  content: \"\\F06B\"; }\n\n.fa-leaf:before {\n  content: \"\\F06C\"; }\n\n.fa-fire:before {\n  content: \"\\F06D\"; }\n\n.fa-eye:before {\n  content: \"\\F06E\"; }\n\n.fa-eye-slash:before {\n  content: \"\\F070\"; }\n\n.fa-warning:before,\n.fa-exclamation-triangle:before {\n  content: \"\\F071\"; }\n\n.fa-plane:before {\n  content: \"\\F072\"; }\n\n.fa-calendar:before {\n  content: \"\\F073\"; }\n\n.fa-random:before {\n  content: \"\\F074\"; }\n\n.fa-comment:before {\n  content: \"\\F075\"; }\n\n.fa-magnet:before {\n  content: \"\\F076\"; }\n\n.fa-chevron-up:before {\n  content: \"\\F077\"; }\n\n.fa-chevron-down:before {\n  content: \"\\F078\"; }\n\n.fa-retweet:before {\n  content: \"\\F079\"; }\n\n.fa-shopping-cart:before {\n  content: \"\\F07A\"; }\n\n.fa-folder:before {\n  content: \"\\F07B\"; }\n\n.fa-folder-open:before {\n  content: \"\\F07C\"; }\n\n.fa-arrows-v:before {\n  content: \"\\F07D\"; }\n\n.fa-arrows-h:before {\n  content: \"\\F07E\"; }\n\n.fa-bar-chart-o:before,\n.fa-bar-chart:before {\n  content: \"\\F080\"; }\n\n.fa-twitter-square:before {\n  content: \"\\F081\"; }\n\n.fa-facebook-square:before {\n  content: \"\\F082\"; }\n\n.fa-camera-retro:before {\n  content: \"\\F083\"; }\n\n.fa-key:before {\n  content: \"\\F084\"; }\n\n.fa-gears:before,\n.fa-cogs:before {\n  content: \"\\F085\"; }\n\n.fa-comments:before {\n  content: \"\\F086\"; }\n\n.fa-thumbs-o-up:before {\n  content: \"\\F087\"; }\n\n.fa-thumbs-o-down:before {\n  content: \"\\F088\"; }\n\n.fa-star-half:before {\n  content: \"\\F089\"; }\n\n.fa-heart-o:before {\n  content: \"\\F08A\"; }\n\n.fa-sign-out:before {\n  content: \"\\F08B\"; }\n\n.fa-linkedin-square:before {\n  content: \"\\F08C\"; }\n\n.fa-thumb-tack:before {\n  content: \"\\F08D\"; }\n\n.fa-external-link:before {\n  content: \"\\F08E\"; }\n\n.fa-sign-in:before {\n  content: \"\\F090\"; }\n\n.fa-trophy:before {\n  content: \"\\F091\"; }\n\n.fa-github-square:before {\n  content: \"\\F092\"; }\n\n.fa-upload:before {\n  content: \"\\F093\"; }\n\n.fa-lemon-o:before {\n  content: \"\\F094\"; }\n\n.fa-phone:before {\n  content: \"\\F095\"; }\n\n.fa-square-o:before {\n  content: \"\\F096\"; }\n\n.fa-bookmark-o:before {\n  content: \"\\F097\"; }\n\n.fa-phone-square:before {\n  content: \"\\F098\"; }\n\n.fa-twitter:before {\n  content: \"\\F099\"; }\n\n.fa-facebook-f:before,\n.fa-facebook:before {\n  content: \"\\F09A\"; }\n\n.fa-github:before {\n  content: \"\\F09B\"; }\n\n.fa-unlock:before {\n  content: \"\\F09C\"; }\n\n.fa-credit-card:before {\n  content: \"\\F09D\"; }\n\n.fa-feed:before,\n.fa-rss:before {\n  content: \"\\F09E\"; }\n\n.fa-hdd-o:before {\n  content: \"\\F0A0\"; }\n\n.fa-bullhorn:before {\n  content: \"\\F0A1\"; }\n\n.fa-bell:before {\n  content: \"\\F0F3\"; }\n\n.fa-certificate:before {\n  content: \"\\F0A3\"; }\n\n.fa-hand-o-right:before {\n  content: \"\\F0A4\"; }\n\n.fa-hand-o-left:before {\n  content: \"\\F0A5\"; }\n\n.fa-hand-o-up:before {\n  content: \"\\F0A6\"; }\n\n.fa-hand-o-down:before {\n  content: \"\\F0A7\"; }\n\n.fa-arrow-circle-left:before {\n  content: \"\\F0A8\"; }\n\n.fa-arrow-circle-right:before {\n  content: \"\\F0A9\"; }\n\n.fa-arrow-circle-up:before {\n  content: \"\\F0AA\"; }\n\n.fa-arrow-circle-down:before {\n  content: \"\\F0AB\"; }\n\n.fa-globe:before {\n  content: \"\\F0AC\"; }\n\n.fa-wrench:before {\n  content: \"\\F0AD\"; }\n\n.fa-tasks:before {\n  content: \"\\F0AE\"; }\n\n.fa-filter:before {\n  content: \"\\F0B0\"; }\n\n.fa-briefcase:before {\n  content: \"\\F0B1\"; }\n\n.fa-arrows-alt:before {\n  content: \"\\F0B2\"; }\n\n.fa-group:before,\n.fa-users:before {\n  content: \"\\F0C0\"; }\n\n.fa-chain:before,\n.fa-link:before {\n  content: \"\\F0C1\"; }\n\n.fa-cloud:before {\n  content: \"\\F0C2\"; }\n\n.fa-flask:before {\n  content: \"\\F0C3\"; }\n\n.fa-cut:before,\n.fa-scissors:before {\n  content: \"\\F0C4\"; }\n\n.fa-copy:before,\n.fa-files-o:before {\n  content: \"\\F0C5\"; }\n\n.fa-paperclip:before {\n  content: \"\\F0C6\"; }\n\n.fa-save:before,\n.fa-floppy-o:before {\n  content: \"\\F0C7\"; }\n\n.fa-square:before {\n  content: \"\\F0C8\"; }\n\n.fa-navicon:before,\n.fa-reorder:before,\n.fa-bars:before {\n  content: \"\\F0C9\"; }\n\n.fa-list-ul:before {\n  content: \"\\F0CA\"; }\n\n.fa-list-ol:before {\n  content: \"\\F0CB\"; }\n\n.fa-strikethrough:before {\n  content: \"\\F0CC\"; }\n\n.fa-underline:before {\n  content: \"\\F0CD\"; }\n\n.fa-table:before {\n  content: \"\\F0CE\"; }\n\n.fa-magic:before {\n  content: \"\\F0D0\"; }\n\n.fa-truck:before {\n  content: \"\\F0D1\"; }\n\n.fa-pinterest:before {\n  content: \"\\F0D2\"; }\n\n.fa-pinterest-square:before {\n  content: \"\\F0D3\"; }\n\n.fa-google-plus-square:before {\n  content: \"\\F0D4\"; }\n\n.fa-google-plus:before {\n  content: \"\\F0D5\"; }\n\n.fa-money:before {\n  content: \"\\F0D6\"; }\n\n.fa-caret-down:before {\n  content: \"\\F0D7\"; }\n\n.fa-caret-up:before {\n  content: \"\\F0D8\"; }\n\n.fa-caret-left:before {\n  content: \"\\F0D9\"; }\n\n.fa-caret-right:before {\n  content: \"\\F0DA\"; }\n\n.fa-columns:before {\n  content: \"\\F0DB\"; }\n\n.fa-unsorted:before,\n.fa-sort:before {\n  content: \"\\F0DC\"; }\n\n.fa-sort-down:before,\n.fa-sort-desc:before {\n  content: \"\\F0DD\"; }\n\n.fa-sort-up:before,\n.fa-sort-asc:before {\n  content: \"\\F0DE\"; }\n\n.fa-envelope:before {\n  content: \"\\F0E0\"; }\n\n.fa-linkedin:before {\n  content: \"\\F0E1\"; }\n\n.fa-rotate-left:before,\n.fa-undo:before {\n  content: \"\\F0E2\"; }\n\n.fa-legal:before,\n.fa-gavel:before {\n  content: \"\\F0E3\"; }\n\n.fa-dashboard:before,\n.fa-tachometer:before {\n  content: \"\\F0E4\"; }\n\n.fa-comment-o:before {\n  content: \"\\F0E5\"; }\n\n.fa-comments-o:before {\n  content: \"\\F0E6\"; }\n\n.fa-flash:before,\n.fa-bolt:before {\n  content: \"\\F0E7\"; }\n\n.fa-sitemap:before {\n  content: \"\\F0E8\"; }\n\n.fa-umbrella:before {\n  content: \"\\F0E9\"; }\n\n.fa-paste:before,\n.fa-clipboard:before {\n  content: \"\\F0EA\"; }\n\n.fa-lightbulb-o:before {\n  content: \"\\F0EB\"; }\n\n.fa-exchange:before {\n  content: \"\\F0EC\"; }\n\n.fa-cloud-download:before {\n  content: \"\\F0ED\"; }\n\n.fa-cloud-upload:before {\n  content: \"\\F0EE\"; }\n\n.fa-user-md:before {\n  content: \"\\F0F0\"; }\n\n.fa-stethoscope:before {\n  content: \"\\F0F1\"; }\n\n.fa-suitcase:before {\n  content: \"\\F0F2\"; }\n\n.fa-bell-o:before {\n  content: \"\\F0A2\"; }\n\n.fa-coffee:before {\n  content: \"\\F0F4\"; }\n\n.fa-cutlery:before {\n  content: \"\\F0F5\"; }\n\n.fa-file-text-o:before {\n  content: \"\\F0F6\"; }\n\n.fa-building-o:before {\n  content: \"\\F0F7\"; }\n\n.fa-hospital-o:before {\n  content: \"\\F0F8\"; }\n\n.fa-ambulance:before {\n  content: \"\\F0F9\"; }\n\n.fa-medkit:before {\n  content: \"\\F0FA\"; }\n\n.fa-fighter-jet:before {\n  content: \"\\F0FB\"; }\n\n.fa-beer:before {\n  content: \"\\F0FC\"; }\n\n.fa-h-square:before {\n  content: \"\\F0FD\"; }\n\n.fa-plus-square:before {\n  content: \"\\F0FE\"; }\n\n.fa-angle-double-left:before {\n  content: \"\\F100\"; }\n\n.fa-angle-double-right:before {\n  content: \"\\F101\"; }\n\n.fa-angle-double-up:before {\n  content: \"\\F102\"; }\n\n.fa-angle-double-down:before {\n  content: \"\\F103\"; }\n\n.fa-angle-left:before {\n  content: \"\\F104\"; }\n\n.fa-angle-right:before {\n  content: \"\\F105\"; }\n\n.fa-angle-up:before {\n  content: \"\\F106\"; }\n\n.fa-angle-down:before {\n  content: \"\\F107\"; }\n\n.fa-desktop:before {\n  content: \"\\F108\"; }\n\n.fa-laptop:before {\n  content: \"\\F109\"; }\n\n.fa-tablet:before {\n  content: \"\\F10A\"; }\n\n.fa-mobile-phone:before,\n.fa-mobile:before {\n  content: \"\\F10B\"; }\n\n.fa-circle-o:before {\n  content: \"\\F10C\"; }\n\n.fa-quote-left:before {\n  content: \"\\F10D\"; }\n\n.fa-quote-right:before {\n  content: \"\\F10E\"; }\n\n.fa-spinner:before {\n  content: \"\\F110\"; }\n\n.fa-circle:before {\n  content: \"\\F111\"; }\n\n.fa-mail-reply:before,\n.fa-reply:before {\n  content: \"\\F112\"; }\n\n.fa-github-alt:before {\n  content: \"\\F113\"; }\n\n.fa-folder-o:before {\n  content: \"\\F114\"; }\n\n.fa-folder-open-o:before {\n  content: \"\\F115\"; }\n\n.fa-smile-o:before {\n  content: \"\\F118\"; }\n\n.fa-frown-o:before {\n  content: \"\\F119\"; }\n\n.fa-meh-o:before {\n  content: \"\\F11A\"; }\n\n.fa-gamepad:before {\n  content: \"\\F11B\"; }\n\n.fa-keyboard-o:before {\n  content: \"\\F11C\"; }\n\n.fa-flag-o:before {\n  content: \"\\F11D\"; }\n\n.fa-flag-checkered:before {\n  content: \"\\F11E\"; }\n\n.fa-terminal:before {\n  content: \"\\F120\"; }\n\n.fa-code:before {\n  content: \"\\F121\"; }\n\n.fa-mail-reply-all:before,\n.fa-reply-all:before {\n  content: \"\\F122\"; }\n\n.fa-star-half-empty:before,\n.fa-star-half-full:before,\n.fa-star-half-o:before {\n  content: \"\\F123\"; }\n\n.fa-location-arrow:before {\n  content: \"\\F124\"; }\n\n.fa-crop:before {\n  content: \"\\F125\"; }\n\n.fa-code-fork:before {\n  content: \"\\F126\"; }\n\n.fa-unlink:before,\n.fa-chain-broken:before {\n  content: \"\\F127\"; }\n\n.fa-question:before {\n  content: \"\\F128\"; }\n\n.fa-info:before {\n  content: \"\\F129\"; }\n\n.fa-exclamation:before {\n  content: \"\\F12A\"; }\n\n.fa-superscript:before {\n  content: \"\\F12B\"; }\n\n.fa-subscript:before {\n  content: \"\\F12C\"; }\n\n.fa-eraser:before {\n  content: \"\\F12D\"; }\n\n.fa-puzzle-piece:before {\n  content: \"\\F12E\"; }\n\n.fa-microphone:before {\n  content: \"\\F130\"; }\n\n.fa-microphone-slash:before {\n  content: \"\\F131\"; }\n\n.fa-shield:before {\n  content: \"\\F132\"; }\n\n.fa-calendar-o:before {\n  content: \"\\F133\"; }\n\n.fa-fire-extinguisher:before {\n  content: \"\\F134\"; }\n\n.fa-rocket:before {\n  content: \"\\F135\"; }\n\n.fa-maxcdn:before {\n  content: \"\\F136\"; }\n\n.fa-chevron-circle-left:before {\n  content: \"\\F137\"; }\n\n.fa-chevron-circle-right:before {\n  content: \"\\F138\"; }\n\n.fa-chevron-circle-up:before {\n  content: \"\\F139\"; }\n\n.fa-chevron-circle-down:before {\n  content: \"\\F13A\"; }\n\n.fa-html5:before {\n  content: \"\\F13B\"; }\n\n.fa-css3:before {\n  content: \"\\F13C\"; }\n\n.fa-anchor:before {\n  content: \"\\F13D\"; }\n\n.fa-unlock-alt:before {\n  content: \"\\F13E\"; }\n\n.fa-bullseye:before {\n  content: \"\\F140\"; }\n\n.fa-ellipsis-h:before {\n  content: \"\\F141\"; }\n\n.fa-ellipsis-v:before {\n  content: \"\\F142\"; }\n\n.fa-rss-square:before {\n  content: \"\\F143\"; }\n\n.fa-play-circle:before {\n  content: \"\\F144\"; }\n\n.fa-ticket:before {\n  content: \"\\F145\"; }\n\n.fa-minus-square:before {\n  content: \"\\F146\"; }\n\n.fa-minus-square-o:before {\n  content: \"\\F147\"; }\n\n.fa-level-up:before {\n  content: \"\\F148\"; }\n\n.fa-level-down:before {\n  content: \"\\F149\"; }\n\n.fa-check-square:before {\n  content: \"\\F14A\"; }\n\n.fa-pencil-square:before {\n  content: \"\\F14B\"; }\n\n.fa-external-link-square:before {\n  content: \"\\F14C\"; }\n\n.fa-share-square:before {\n  content: \"\\F14D\"; }\n\n.fa-compass:before {\n  content: \"\\F14E\"; }\n\n.fa-toggle-down:before,\n.fa-caret-square-o-down:before {\n  content: \"\\F150\"; }\n\n.fa-toggle-up:before,\n.fa-caret-square-o-up:before {\n  content: \"\\F151\"; }\n\n.fa-toggle-right:before,\n.fa-caret-square-o-right:before {\n  content: \"\\F152\"; }\n\n.fa-euro:before,\n.fa-eur:before {\n  content: \"\\F153\"; }\n\n.fa-gbp:before {\n  content: \"\\F154\"; }\n\n.fa-dollar:before,\n.fa-usd:before {\n  content: \"\\F155\"; }\n\n.fa-rupee:before,\n.fa-inr:before {\n  content: \"\\F156\"; }\n\n.fa-cny:before,\n.fa-rmb:before,\n.fa-yen:before,\n.fa-jpy:before {\n  content: \"\\F157\"; }\n\n.fa-ruble:before,\n.fa-rouble:before,\n.fa-rub:before {\n  content: \"\\F158\"; }\n\n.fa-won:before,\n.fa-krw:before {\n  content: \"\\F159\"; }\n\n.fa-bitcoin:before,\n.fa-btc:before {\n  content: \"\\F15A\"; }\n\n.fa-file:before {\n  content: \"\\F15B\"; }\n\n.fa-file-text:before {\n  content: \"\\F15C\"; }\n\n.fa-sort-alpha-asc:before {\n  content: \"\\F15D\"; }\n\n.fa-sort-alpha-desc:before {\n  content: \"\\F15E\"; }\n\n.fa-sort-amount-asc:before {\n  content: \"\\F160\"; }\n\n.fa-sort-amount-desc:before {\n  content: \"\\F161\"; }\n\n.fa-sort-numeric-asc:before {\n  content: \"\\F162\"; }\n\n.fa-sort-numeric-desc:before {\n  content: \"\\F163\"; }\n\n.fa-thumbs-up:before {\n  content: \"\\F164\"; }\n\n.fa-thumbs-down:before {\n  content: \"\\F165\"; }\n\n.fa-youtube-square:before {\n  content: \"\\F166\"; }\n\n.fa-youtube:before {\n  content: \"\\F167\"; }\n\n.fa-xing:before {\n  content: \"\\F168\"; }\n\n.fa-xing-square:before {\n  content: \"\\F169\"; }\n\n.fa-youtube-play:before {\n  content: \"\\F16A\"; }\n\n.fa-dropbox:before {\n  content: \"\\F16B\"; }\n\n.fa-stack-overflow:before {\n  content: \"\\F16C\"; }\n\n.fa-instagram:before {\n  content: \"\\F16D\"; }\n\n.fa-flickr:before {\n  content: \"\\F16E\"; }\n\n.fa-adn:before {\n  content: \"\\F170\"; }\n\n.fa-bitbucket:before {\n  content: \"\\F171\"; }\n\n.fa-bitbucket-square:before {\n  content: \"\\F172\"; }\n\n.fa-tumblr:before {\n  content: \"\\F173\"; }\n\n.fa-tumblr-square:before {\n  content: \"\\F174\"; }\n\n.fa-long-arrow-down:before {\n  content: \"\\F175\"; }\n\n.fa-long-arrow-up:before {\n  content: \"\\F176\"; }\n\n.fa-long-arrow-left:before {\n  content: \"\\F177\"; }\n\n.fa-long-arrow-right:before {\n  content: \"\\F178\"; }\n\n.fa-apple:before {\n  content: \"\\F179\"; }\n\n.fa-windows:before {\n  content: \"\\F17A\"; }\n\n.fa-android:before {\n  content: \"\\F17B\"; }\n\n.fa-linux:before {\n  content: \"\\F17C\"; }\n\n.fa-dribbble:before {\n  content: \"\\F17D\"; }\n\n.fa-skype:before {\n  content: \"\\F17E\"; }\n\n.fa-foursquare:before {\n  content: \"\\F180\"; }\n\n.fa-trello:before {\n  content: \"\\F181\"; }\n\n.fa-female:before {\n  content: \"\\F182\"; }\n\n.fa-male:before {\n  content: \"\\F183\"; }\n\n.fa-gittip:before,\n.fa-gratipay:before {\n  content: \"\\F184\"; }\n\n.fa-sun-o:before {\n  content: \"\\F185\"; }\n\n.fa-moon-o:before {\n  content: \"\\F186\"; }\n\n.fa-archive:before {\n  content: \"\\F187\"; }\n\n.fa-bug:before {\n  content: \"\\F188\"; }\n\n.fa-vk:before {\n  content: \"\\F189\"; }\n\n.fa-weibo:before {\n  content: \"\\F18A\"; }\n\n.fa-renren:before {\n  content: \"\\F18B\"; }\n\n.fa-pagelines:before {\n  content: \"\\F18C\"; }\n\n.fa-stack-exchange:before {\n  content: \"\\F18D\"; }\n\n.fa-arrow-circle-o-right:before {\n  content: \"\\F18E\"; }\n\n.fa-arrow-circle-o-left:before {\n  content: \"\\F190\"; }\n\n.fa-toggle-left:before,\n.fa-caret-square-o-left:before {\n  content: \"\\F191\"; }\n\n.fa-dot-circle-o:before {\n  content: \"\\F192\"; }\n\n.fa-wheelchair:before {\n  content: \"\\F193\"; }\n\n.fa-vimeo-square:before {\n  content: \"\\F194\"; }\n\n.fa-turkish-lira:before,\n.fa-try:before {\n  content: \"\\F195\"; }\n\n.fa-plus-square-o:before {\n  content: \"\\F196\"; }\n\n.fa-space-shuttle:before {\n  content: \"\\F197\"; }\n\n.fa-slack:before {\n  content: \"\\F198\"; }\n\n.fa-envelope-square:before {\n  content: \"\\F199\"; }\n\n.fa-wordpress:before {\n  content: \"\\F19A\"; }\n\n.fa-openid:before {\n  content: \"\\F19B\"; }\n\n.fa-institution:before,\n.fa-bank:before,\n.fa-university:before {\n  content: \"\\F19C\"; }\n\n.fa-mortar-board:before,\n.fa-graduation-cap:before {\n  content: \"\\F19D\"; }\n\n.fa-yahoo:before {\n  content: \"\\F19E\"; }\n\n.fa-google:before {\n  content: \"\\F1A0\"; }\n\n.fa-reddit:before {\n  content: \"\\F1A1\"; }\n\n.fa-reddit-square:before {\n  content: \"\\F1A2\"; }\n\n.fa-stumbleupon-circle:before {\n  content: \"\\F1A3\"; }\n\n.fa-stumbleupon:before {\n  content: \"\\F1A4\"; }\n\n.fa-delicious:before {\n  content: \"\\F1A5\"; }\n\n.fa-digg:before {\n  content: \"\\F1A6\"; }\n\n.fa-pied-piper-pp:before {\n  content: \"\\F1A7\"; }\n\n.fa-pied-piper-alt:before {\n  content: \"\\F1A8\"; }\n\n.fa-drupal:before {\n  content: \"\\F1A9\"; }\n\n.fa-joomla:before {\n  content: \"\\F1AA\"; }\n\n.fa-language:before {\n  content: \"\\F1AB\"; }\n\n.fa-fax:before {\n  content: \"\\F1AC\"; }\n\n.fa-building:before {\n  content: \"\\F1AD\"; }\n\n.fa-child:before {\n  content: \"\\F1AE\"; }\n\n.fa-paw:before {\n  content: \"\\F1B0\"; }\n\n.fa-spoon:before {\n  content: \"\\F1B1\"; }\n\n.fa-cube:before {\n  content: \"\\F1B2\"; }\n\n.fa-cubes:before {\n  content: \"\\F1B3\"; }\n\n.fa-behance:before {\n  content: \"\\F1B4\"; }\n\n.fa-behance-square:before {\n  content: \"\\F1B5\"; }\n\n.fa-steam:before {\n  content: \"\\F1B6\"; }\n\n.fa-steam-square:before {\n  content: \"\\F1B7\"; }\n\n.fa-recycle:before {\n  content: \"\\F1B8\"; }\n\n.fa-automobile:before,\n.fa-car:before {\n  content: \"\\F1B9\"; }\n\n.fa-cab:before,\n.fa-taxi:before {\n  content: \"\\F1BA\"; }\n\n.fa-tree:before {\n  content: \"\\F1BB\"; }\n\n.fa-spotify:before {\n  content: \"\\F1BC\"; }\n\n.fa-deviantart:before {\n  content: \"\\F1BD\"; }\n\n.fa-soundcloud:before {\n  content: \"\\F1BE\"; }\n\n.fa-database:before {\n  content: \"\\F1C0\"; }\n\n.fa-file-pdf-o:before {\n  content: \"\\F1C1\"; }\n\n.fa-file-word-o:before {\n  content: \"\\F1C2\"; }\n\n.fa-file-excel-o:before {\n  content: \"\\F1C3\"; }\n\n.fa-file-powerpoint-o:before {\n  content: \"\\F1C4\"; }\n\n.fa-file-photo-o:before,\n.fa-file-picture-o:before,\n.fa-file-image-o:before {\n  content: \"\\F1C5\"; }\n\n.fa-file-zip-o:before,\n.fa-file-archive-o:before {\n  content: \"\\F1C6\"; }\n\n.fa-file-sound-o:before,\n.fa-file-audio-o:before {\n  content: \"\\F1C7\"; }\n\n.fa-file-movie-o:before,\n.fa-file-video-o:before {\n  content: \"\\F1C8\"; }\n\n.fa-file-code-o:before {\n  content: \"\\F1C9\"; }\n\n.fa-vine:before {\n  content: \"\\F1CA\"; }\n\n.fa-codepen:before {\n  content: \"\\F1CB\"; }\n\n.fa-jsfiddle:before {\n  content: \"\\F1CC\"; }\n\n.fa-life-bouy:before,\n.fa-life-buoy:before,\n.fa-life-saver:before,\n.fa-support:before,\n.fa-life-ring:before {\n  content: \"\\F1CD\"; }\n\n.fa-circle-o-notch:before {\n  content: \"\\F1CE\"; }\n\n.fa-ra:before,\n.fa-resistance:before,\n.fa-rebel:before {\n  content: \"\\F1D0\"; }\n\n.fa-ge:before,\n.fa-empire:before {\n  content: \"\\F1D1\"; }\n\n.fa-git-square:before {\n  content: \"\\F1D2\"; }\n\n.fa-git:before {\n  content: \"\\F1D3\"; }\n\n.fa-y-combinator-square:before,\n.fa-yc-square:before,\n.fa-hacker-news:before {\n  content: \"\\F1D4\"; }\n\n.fa-tencent-weibo:before {\n  content: \"\\F1D5\"; }\n\n.fa-qq:before {\n  content: \"\\F1D6\"; }\n\n.fa-wechat:before,\n.fa-weixin:before {\n  content: \"\\F1D7\"; }\n\n.fa-send:before,\n.fa-paper-plane:before {\n  content: \"\\F1D8\"; }\n\n.fa-send-o:before,\n.fa-paper-plane-o:before {\n  content: \"\\F1D9\"; }\n\n.fa-history:before {\n  content: \"\\F1DA\"; }\n\n.fa-circle-thin:before {\n  content: \"\\F1DB\"; }\n\n.fa-header:before {\n  content: \"\\F1DC\"; }\n\n.fa-paragraph:before {\n  content: \"\\F1DD\"; }\n\n.fa-sliders:before {\n  content: \"\\F1DE\"; }\n\n.fa-share-alt:before {\n  content: \"\\F1E0\"; }\n\n.fa-share-alt-square:before {\n  content: \"\\F1E1\"; }\n\n.fa-bomb:before {\n  content: \"\\F1E2\"; }\n\n.fa-soccer-ball-o:before,\n.fa-futbol-o:before {\n  content: \"\\F1E3\"; }\n\n.fa-tty:before {\n  content: \"\\F1E4\"; }\n\n.fa-binoculars:before {\n  content: \"\\F1E5\"; }\n\n.fa-plug:before {\n  content: \"\\F1E6\"; }\n\n.fa-slideshare:before {\n  content: \"\\F1E7\"; }\n\n.fa-twitch:before {\n  content: \"\\F1E8\"; }\n\n.fa-yelp:before {\n  content: \"\\F1E9\"; }\n\n.fa-newspaper-o:before {\n  content: \"\\F1EA\"; }\n\n.fa-wifi:before {\n  content: \"\\F1EB\"; }\n\n.fa-calculator:before {\n  content: \"\\F1EC\"; }\n\n.fa-paypal:before {\n  content: \"\\F1ED\"; }\n\n.fa-google-wallet:before {\n  content: \"\\F1EE\"; }\n\n.fa-cc-visa:before {\n  content: \"\\F1F0\"; }\n\n.fa-cc-mastercard:before {\n  content: \"\\F1F1\"; }\n\n.fa-cc-discover:before {\n  content: \"\\F1F2\"; }\n\n.fa-cc-amex:before {\n  content: \"\\F1F3\"; }\n\n.fa-cc-paypal:before {\n  content: \"\\F1F4\"; }\n\n.fa-cc-stripe:before {\n  content: \"\\F1F5\"; }\n\n.fa-bell-slash:before {\n  content: \"\\F1F6\"; }\n\n.fa-bell-slash-o:before {\n  content: \"\\F1F7\"; }\n\n.fa-trash:before {\n  content: \"\\F1F8\"; }\n\n.fa-copyright:before {\n  content: \"\\F1F9\"; }\n\n.fa-at:before {\n  content: \"\\F1FA\"; }\n\n.fa-eyedropper:before {\n  content: \"\\F1FB\"; }\n\n.fa-paint-brush:before {\n  content: \"\\F1FC\"; }\n\n.fa-birthday-cake:before {\n  content: \"\\F1FD\"; }\n\n.fa-area-chart:before {\n  content: \"\\F1FE\"; }\n\n.fa-pie-chart:before {\n  content: \"\\F200\"; }\n\n.fa-line-chart:before {\n  content: \"\\F201\"; }\n\n.fa-lastfm:before {\n  content: \"\\F202\"; }\n\n.fa-lastfm-square:before {\n  content: \"\\F203\"; }\n\n.fa-toggle-off:before {\n  content: \"\\F204\"; }\n\n.fa-toggle-on:before {\n  content: \"\\F205\"; }\n\n.fa-bicycle:before {\n  content: \"\\F206\"; }\n\n.fa-bus:before {\n  content: \"\\F207\"; }\n\n.fa-ioxhost:before {\n  content: \"\\F208\"; }\n\n.fa-angellist:before {\n  content: \"\\F209\"; }\n\n.fa-cc:before {\n  content: \"\\F20A\"; }\n\n.fa-shekel:before,\n.fa-sheqel:before,\n.fa-ils:before {\n  content: \"\\F20B\"; }\n\n.fa-meanpath:before {\n  content: \"\\F20C\"; }\n\n.fa-buysellads:before {\n  content: \"\\F20D\"; }\n\n.fa-connectdevelop:before {\n  content: \"\\F20E\"; }\n\n.fa-dashcube:before {\n  content: \"\\F210\"; }\n\n.fa-forumbee:before {\n  content: \"\\F211\"; }\n\n.fa-leanpub:before {\n  content: \"\\F212\"; }\n\n.fa-sellsy:before {\n  content: \"\\F213\"; }\n\n.fa-shirtsinbulk:before {\n  content: \"\\F214\"; }\n\n.fa-simplybuilt:before {\n  content: \"\\F215\"; }\n\n.fa-skyatlas:before {\n  content: \"\\F216\"; }\n\n.fa-cart-plus:before {\n  content: \"\\F217\"; }\n\n.fa-cart-arrow-down:before {\n  content: \"\\F218\"; }\n\n.fa-diamond:before {\n  content: \"\\F219\"; }\n\n.fa-ship:before {\n  content: \"\\F21A\"; }\n\n.fa-user-secret:before {\n  content: \"\\F21B\"; }\n\n.fa-motorcycle:before {\n  content: \"\\F21C\"; }\n\n.fa-street-view:before {\n  content: \"\\F21D\"; }\n\n.fa-heartbeat:before {\n  content: \"\\F21E\"; }\n\n.fa-venus:before {\n  content: \"\\F221\"; }\n\n.fa-mars:before {\n  content: \"\\F222\"; }\n\n.fa-mercury:before {\n  content: \"\\F223\"; }\n\n.fa-intersex:before,\n.fa-transgender:before {\n  content: \"\\F224\"; }\n\n.fa-transgender-alt:before {\n  content: \"\\F225\"; }\n\n.fa-venus-double:before {\n  content: \"\\F226\"; }\n\n.fa-mars-double:before {\n  content: \"\\F227\"; }\n\n.fa-venus-mars:before {\n  content: \"\\F228\"; }\n\n.fa-mars-stroke:before {\n  content: \"\\F229\"; }\n\n.fa-mars-stroke-v:before {\n  content: \"\\F22A\"; }\n\n.fa-mars-stroke-h:before {\n  content: \"\\F22B\"; }\n\n.fa-neuter:before {\n  content: \"\\F22C\"; }\n\n.fa-genderless:before {\n  content: \"\\F22D\"; }\n\n.fa-facebook-official:before {\n  content: \"\\F230\"; }\n\n.fa-pinterest-p:before {\n  content: \"\\F231\"; }\n\n.fa-whatsapp:before {\n  content: \"\\F232\"; }\n\n.fa-server:before {\n  content: \"\\F233\"; }\n\n.fa-user-plus:before {\n  content: \"\\F234\"; }\n\n.fa-user-times:before {\n  content: \"\\F235\"; }\n\n.fa-hotel:before,\n.fa-bed:before {\n  content: \"\\F236\"; }\n\n.fa-viacoin:before {\n  content: \"\\F237\"; }\n\n.fa-train:before {\n  content: \"\\F238\"; }\n\n.fa-subway:before {\n  content: \"\\F239\"; }\n\n.fa-medium:before {\n  content: \"\\F23A\"; }\n\n.fa-yc:before,\n.fa-y-combinator:before {\n  content: \"\\F23B\"; }\n\n.fa-optin-monster:before {\n  content: \"\\F23C\"; }\n\n.fa-opencart:before {\n  content: \"\\F23D\"; }\n\n.fa-expeditedssl:before {\n  content: \"\\F23E\"; }\n\n.fa-battery-4:before,\n.fa-battery:before,\n.fa-battery-full:before {\n  content: \"\\F240\"; }\n\n.fa-battery-3:before,\n.fa-battery-three-quarters:before {\n  content: \"\\F241\"; }\n\n.fa-battery-2:before,\n.fa-battery-half:before {\n  content: \"\\F242\"; }\n\n.fa-battery-1:before,\n.fa-battery-quarter:before {\n  content: \"\\F243\"; }\n\n.fa-battery-0:before,\n.fa-battery-empty:before {\n  content: \"\\F244\"; }\n\n.fa-mouse-pointer:before {\n  content: \"\\F245\"; }\n\n.fa-i-cursor:before {\n  content: \"\\F246\"; }\n\n.fa-object-group:before {\n  content: \"\\F247\"; }\n\n.fa-object-ungroup:before {\n  content: \"\\F248\"; }\n\n.fa-sticky-note:before {\n  content: \"\\F249\"; }\n\n.fa-sticky-note-o:before {\n  content: \"\\F24A\"; }\n\n.fa-cc-jcb:before {\n  content: \"\\F24B\"; }\n\n.fa-cc-diners-club:before {\n  content: \"\\F24C\"; }\n\n.fa-clone:before {\n  content: \"\\F24D\"; }\n\n.fa-balance-scale:before {\n  content: \"\\F24E\"; }\n\n.fa-hourglass-o:before {\n  content: \"\\F250\"; }\n\n.fa-hourglass-1:before,\n.fa-hourglass-start:before {\n  content: \"\\F251\"; }\n\n.fa-hourglass-2:before,\n.fa-hourglass-half:before {\n  content: \"\\F252\"; }\n\n.fa-hourglass-3:before,\n.fa-hourglass-end:before {\n  content: \"\\F253\"; }\n\n.fa-hourglass:before {\n  content: \"\\F254\"; }\n\n.fa-hand-grab-o:before,\n.fa-hand-rock-o:before {\n  content: \"\\F255\"; }\n\n.fa-hand-stop-o:before,\n.fa-hand-paper-o:before {\n  content: \"\\F256\"; }\n\n.fa-hand-scissors-o:before {\n  content: \"\\F257\"; }\n\n.fa-hand-lizard-o:before {\n  content: \"\\F258\"; }\n\n.fa-hand-spock-o:before {\n  content: \"\\F259\"; }\n\n.fa-hand-pointer-o:before {\n  content: \"\\F25A\"; }\n\n.fa-hand-peace-o:before {\n  content: \"\\F25B\"; }\n\n.fa-trademark:before {\n  content: \"\\F25C\"; }\n\n.fa-registered:before {\n  content: \"\\F25D\"; }\n\n.fa-creative-commons:before {\n  content: \"\\F25E\"; }\n\n.fa-gg:before {\n  content: \"\\F260\"; }\n\n.fa-gg-circle:before {\n  content: \"\\F261\"; }\n\n.fa-tripadvisor:before {\n  content: \"\\F262\"; }\n\n.fa-odnoklassniki:before {\n  content: \"\\F263\"; }\n\n.fa-odnoklassniki-square:before {\n  content: \"\\F264\"; }\n\n.fa-get-pocket:before {\n  content: \"\\F265\"; }\n\n.fa-wikipedia-w:before {\n  content: \"\\F266\"; }\n\n.fa-safari:before {\n  content: \"\\F267\"; }\n\n.fa-chrome:before {\n  content: \"\\F268\"; }\n\n.fa-firefox:before {\n  content: \"\\F269\"; }\n\n.fa-opera:before {\n  content: \"\\F26A\"; }\n\n.fa-internet-explorer:before {\n  content: \"\\F26B\"; }\n\n.fa-tv:before,\n.fa-television:before {\n  content: \"\\F26C\"; }\n\n.fa-contao:before {\n  content: \"\\F26D\"; }\n\n.fa-500px:before {\n  content: \"\\F26E\"; }\n\n.fa-amazon:before {\n  content: \"\\F270\"; }\n\n.fa-calendar-plus-o:before {\n  content: \"\\F271\"; }\n\n.fa-calendar-minus-o:before {\n  content: \"\\F272\"; }\n\n.fa-calendar-times-o:before {\n  content: \"\\F273\"; }\n\n.fa-calendar-check-o:before {\n  content: \"\\F274\"; }\n\n.fa-industry:before {\n  content: \"\\F275\"; }\n\n.fa-map-pin:before {\n  content: \"\\F276\"; }\n\n.fa-map-signs:before {\n  content: \"\\F277\"; }\n\n.fa-map-o:before {\n  content: \"\\F278\"; }\n\n.fa-map:before {\n  content: \"\\F279\"; }\n\n.fa-commenting:before {\n  content: \"\\F27A\"; }\n\n.fa-commenting-o:before {\n  content: \"\\F27B\"; }\n\n.fa-houzz:before {\n  content: \"\\F27C\"; }\n\n.fa-vimeo:before {\n  content: \"\\F27D\"; }\n\n.fa-black-tie:before {\n  content: \"\\F27E\"; }\n\n.fa-fonticons:before {\n  content: \"\\F280\"; }\n\n.fa-reddit-alien:before {\n  content: \"\\F281\"; }\n\n.fa-edge:before {\n  content: \"\\F282\"; }\n\n.fa-credit-card-alt:before {\n  content: \"\\F283\"; }\n\n.fa-codiepie:before {\n  content: \"\\F284\"; }\n\n.fa-modx:before {\n  content: \"\\F285\"; }\n\n.fa-fort-awesome:before {\n  content: \"\\F286\"; }\n\n.fa-usb:before {\n  content: \"\\F287\"; }\n\n.fa-product-hunt:before {\n  content: \"\\F288\"; }\n\n.fa-mixcloud:before {\n  content: \"\\F289\"; }\n\n.fa-scribd:before {\n  content: \"\\F28A\"; }\n\n.fa-pause-circle:before {\n  content: \"\\F28B\"; }\n\n.fa-pause-circle-o:before {\n  content: \"\\F28C\"; }\n\n.fa-stop-circle:before {\n  content: \"\\F28D\"; }\n\n.fa-stop-circle-o:before {\n  content: \"\\F28E\"; }\n\n.fa-shopping-bag:before {\n  content: \"\\F290\"; }\n\n.fa-shopping-basket:before {\n  content: \"\\F291\"; }\n\n.fa-hashtag:before {\n  content: \"\\F292\"; }\n\n.fa-bluetooth:before {\n  content: \"\\F293\"; }\n\n.fa-bluetooth-b:before {\n  content: \"\\F294\"; }\n\n.fa-percent:before {\n  content: \"\\F295\"; }\n\n.fa-gitlab:before {\n  content: \"\\F296\"; }\n\n.fa-wpbeginner:before {\n  content: \"\\F297\"; }\n\n.fa-wpforms:before {\n  content: \"\\F298\"; }\n\n.fa-envira:before {\n  content: \"\\F299\"; }\n\n.fa-universal-access:before {\n  content: \"\\F29A\"; }\n\n.fa-wheelchair-alt:before {\n  content: \"\\F29B\"; }\n\n.fa-question-circle-o:before {\n  content: \"\\F29C\"; }\n\n.fa-blind:before {\n  content: \"\\F29D\"; }\n\n.fa-audio-description:before {\n  content: \"\\F29E\"; }\n\n.fa-volume-control-phone:before {\n  content: \"\\F2A0\"; }\n\n.fa-braille:before {\n  content: \"\\F2A1\"; }\n\n.fa-assistive-listening-systems:before {\n  content: \"\\F2A2\"; }\n\n.fa-asl-interpreting:before,\n.fa-american-sign-language-interpreting:before {\n  content: \"\\F2A3\"; }\n\n.fa-deafness:before,\n.fa-hard-of-hearing:before,\n.fa-deaf:before {\n  content: \"\\F2A4\"; }\n\n.fa-glide:before {\n  content: \"\\F2A5\"; }\n\n.fa-glide-g:before {\n  content: \"\\F2A6\"; }\n\n.fa-signing:before,\n.fa-sign-language:before {\n  content: \"\\F2A7\"; }\n\n.fa-low-vision:before {\n  content: \"\\F2A8\"; }\n\n.fa-viadeo:before {\n  content: \"\\F2A9\"; }\n\n.fa-viadeo-square:before {\n  content: \"\\F2AA\"; }\n\n.fa-snapchat:before {\n  content: \"\\F2AB\"; }\n\n.fa-snapchat-ghost:before {\n  content: \"\\F2AC\"; }\n\n.fa-snapchat-square:before {\n  content: \"\\F2AD\"; }\n\n.fa-pied-piper:before {\n  content: \"\\F2AE\"; }\n\n.fa-first-order:before {\n  content: \"\\F2B0\"; }\n\n.fa-yoast:before {\n  content: \"\\F2B1\"; }\n\n.fa-themeisle:before {\n  content: \"\\F2B2\"; }\n\n.fa-google-plus-circle:before,\n.fa-google-plus-official:before {\n  content: \"\\F2B3\"; }\n\n.fa-fa:before,\n.fa-font-awesome:before {\n  content: \"\\F2B4\"; }\n\n.fa-handshake-o:before {\n  content: \"\\F2B5\"; }\n\n.fa-envelope-open:before {\n  content: \"\\F2B6\"; }\n\n.fa-envelope-open-o:before {\n  content: \"\\F2B7\"; }\n\n.fa-linode:before {\n  content: \"\\F2B8\"; }\n\n.fa-address-book:before {\n  content: \"\\F2B9\"; }\n\n.fa-address-book-o:before {\n  content: \"\\F2BA\"; }\n\n.fa-vcard:before,\n.fa-address-card:before {\n  content: \"\\F2BB\"; }\n\n.fa-vcard-o:before,\n.fa-address-card-o:before {\n  content: \"\\F2BC\"; }\n\n.fa-user-circle:before {\n  content: \"\\F2BD\"; }\n\n.fa-user-circle-o:before {\n  content: \"\\F2BE\"; }\n\n.fa-user-o:before {\n  content: \"\\F2C0\"; }\n\n.fa-id-badge:before {\n  content: \"\\F2C1\"; }\n\n.fa-drivers-license:before,\n.fa-id-card:before {\n  content: \"\\F2C2\"; }\n\n.fa-drivers-license-o:before,\n.fa-id-card-o:before {\n  content: \"\\F2C3\"; }\n\n.fa-quora:before {\n  content: \"\\F2C4\"; }\n\n.fa-free-code-camp:before {\n  content: \"\\F2C5\"; }\n\n.fa-telegram:before {\n  content: \"\\F2C6\"; }\n\n.fa-thermometer-4:before,\n.fa-thermometer:before,\n.fa-thermometer-full:before {\n  content: \"\\F2C7\"; }\n\n.fa-thermometer-3:before,\n.fa-thermometer-three-quarters:before {\n  content: \"\\F2C8\"; }\n\n.fa-thermometer-2:before,\n.fa-thermometer-half:before {\n  content: \"\\F2C9\"; }\n\n.fa-thermometer-1:before,\n.fa-thermometer-quarter:before {\n  content: \"\\F2CA\"; }\n\n.fa-thermometer-0:before,\n.fa-thermometer-empty:before {\n  content: \"\\F2CB\"; }\n\n.fa-shower:before {\n  content: \"\\F2CC\"; }\n\n.fa-bathtub:before,\n.fa-s15:before,\n.fa-bath:before {\n  content: \"\\F2CD\"; }\n\n.fa-podcast:before {\n  content: \"\\F2CE\"; }\n\n.fa-window-maximize:before {\n  content: \"\\F2D0\"; }\n\n.fa-window-minimize:before {\n  content: \"\\F2D1\"; }\n\n.fa-window-restore:before {\n  content: \"\\F2D2\"; }\n\n.fa-times-rectangle:before,\n.fa-window-close:before {\n  content: \"\\F2D3\"; }\n\n.fa-times-rectangle-o:before,\n.fa-window-close-o:before {\n  content: \"\\F2D4\"; }\n\n.fa-bandcamp:before {\n  content: \"\\F2D5\"; }\n\n.fa-grav:before {\n  content: \"\\F2D6\"; }\n\n.fa-etsy:before {\n  content: \"\\F2D7\"; }\n\n.fa-imdb:before {\n  content: \"\\F2D8\"; }\n\n.fa-ravelry:before {\n  content: \"\\F2D9\"; }\n\n.fa-eercast:before {\n  content: \"\\F2DA\"; }\n\n.fa-microchip:before {\n  content: \"\\F2DB\"; }\n\n.fa-snowflake-o:before {\n  content: \"\\F2DC\"; }\n\n.fa-superpowers:before {\n  content: \"\\F2DD\"; }\n\n.fa-wpexplorer:before {\n  content: \"\\F2DE\"; }\n\n.fa-meetup:before {\n  content: \"\\F2E0\"; }\n\n/* makes the font 33% larger relative to the icon container */\n.fa-lg {\n  font-size: 1.33333em;\n  line-height: 0.75em;\n  vertical-align: -15%; }\n\n.fa-2x {\n  font-size: 2em; }\n\n.fa-3x {\n  font-size: 3em; }\n\n.fa-4x {\n  font-size: 4em; }\n\n.fa-5x {\n  font-size: 5em; }\n\n.fa-ul {\n  padding-left: 0;\n  margin-left: 2.14286em;\n  list-style-type: none; }\n  .fa-ul > li {\n    position: relative; }\n\n.fa-li {\n  position: absolute;\n  left: -2.14286em;\n  width: 2.14286em;\n  top: 0.14286em;\n  text-align: center; }\n  .fa-li.fa-lg {\n    left: -1.85714em; }\n\n/* FONT PATH\n * -------------------------- */\n@font-face {\n  font-family: 'FontAwesome';\n  src: url(" + __webpack_require__(27) + ");\n  src: url(" + __webpack_require__(26) + "?#iefix&v=4.7.0) format(\"embedded-opentype\"), url(" + __webpack_require__(58) + ") format(\"woff2\"), url(" + __webpack_require__(59) + ") format(\"woff\"), url(" + __webpack_require__(29) + ") format(\"truetype\"), url(" + __webpack_require__(28) + "#fontawesomeregular) format(\"svg\");\n  font-weight: normal;\n  font-style: normal; }\n\n.fa-rotate-90 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\n  -webkit-transform: rotate(90deg);\n  -ms-transform: rotate(90deg);\n  transform: rotate(90deg); }\n\n.fa-rotate-180 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\n  -webkit-transform: rotate(180deg);\n  -ms-transform: rotate(180deg);\n  transform: rotate(180deg); }\n\n.fa-rotate-270 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\n  -webkit-transform: rotate(270deg);\n  -ms-transform: rotate(270deg);\n  transform: rotate(270deg); }\n\n.fa-flip-horizontal {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\n  -webkit-transform: scale(-1, 1);\n  -ms-transform: scale(-1, 1);\n  transform: scale(-1, 1); }\n\n.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(1, -1);\n  -ms-transform: scale(1, -1);\n  transform: scale(1, -1); }\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical {\n  filter: none; }\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n  animation: fa-spin 2s infinite linear; }\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n  animation: fa-spin 1s infinite steps(8); }\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg); } }\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg); } }\n\n.fa-stack {\n  position: relative;\n  display: inline-block;\n  width: 2em;\n  height: 2em;\n  line-height: 2em;\n  vertical-align: middle; }\n\n.fa-stack-1x, .fa-stack-2x {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  text-align: center; }\n\n.fa-stack-1x {\n  line-height: inherit; }\n\n.fa-stack-2x {\n  font-size: 2em; }\n\n.fa-inverse {\n  color: #fff; }\n", ""]);

// exports


/***/ }),
/* 7 */
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
/* 8 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2017-05-26-les-jeunes-se-ruent-sur-les-soirees.html";

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2017-06-01-visite-ambassadeur-ffpa.html";

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2017-06-15-mountain-prime-a-fribourg.html";

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2017-06-21-mathew-kenneth-au-ffpa.html";

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2017-06-23-thierry-romanens-president.html";

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2017-07-01-festival-a-guichets-fermes.html";

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "actualites-02.html";

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "actualites.html";

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "contact.html";

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "index.html";

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "infos.html";

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "presentation.html";

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "programme-06.html";

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "programme-07.html";

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "programme-08.html";

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "programme.html";

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "reservation.html";

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = "../assets/fonts/fontawesome-webfont.eot";

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = "../assets/fonts/fontawesome-webfont.eot";

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = "../assets/fonts/fontawesome-webfont.svg";

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = "../assets/fonts/fontawesome-webfont.ttf";

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = "../assets/images/banner-1-1200px-100.png";

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = "../assets/images/banner-1-450px-100.png";

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = "../assets/images/banner-1-768px-100.png";

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = "../assets/images/banner-1-992px-100.png";

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = "../assets/images/banner-3-original-100.jpg";

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = "../assets/images/banner-5-1200px-100.jpg";

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = "../assets/images/film-festival-team.jpg";

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = "../assets/images/la-jeune-fille-et-laigle.jpg";

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = "../assets/images/mathew-kenneth-au-ffpa.jpg";

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = "../assets/images/mountain-prime-a-fribourg.jpg";

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = "../assets/images/soirees-cinema-fpa.jpg";

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = "../assets/images/thierry-romanens-president.jpg";

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "docs/programme.pdf";

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/
var jQuery = __webpack_require__(0);

/* ========================================================================
 * Bootstrap: affix.js v3.3.7
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // AFFIX CLASS DEFINITION
  // ======================

  var Affix = function (element, options) {
    this.options = $.extend({}, Affix.DEFAULTS, options)

    this.$target = $(this.options.target)
      .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
      .on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))

    this.$element     = $(element)
    this.affixed      = null
    this.unpin        = null
    this.pinnedOffset = null

    this.checkPosition()
  }

  Affix.VERSION  = '3.3.7'

  Affix.RESET    = 'affix affix-top affix-bottom'

  Affix.DEFAULTS = {
    offset: 0,
    target: window
  }

  Affix.prototype.getState = function (scrollHeight, height, offsetTop, offsetBottom) {
    var scrollTop    = this.$target.scrollTop()
    var position     = this.$element.offset()
    var targetHeight = this.$target.height()

    if (offsetTop != null && this.affixed == 'top') return scrollTop < offsetTop ? 'top' : false

    if (this.affixed == 'bottom') {
      if (offsetTop != null) return (scrollTop + this.unpin <= position.top) ? false : 'bottom'
      return (scrollTop + targetHeight <= scrollHeight - offsetBottom) ? false : 'bottom'
    }

    var initializing   = this.affixed == null
    var colliderTop    = initializing ? scrollTop : position.top
    var colliderHeight = initializing ? targetHeight : height

    if (offsetTop != null && scrollTop <= offsetTop) return 'top'
    if (offsetBottom != null && (colliderTop + colliderHeight >= scrollHeight - offsetBottom)) return 'bottom'

    return false
  }

  Affix.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset
    this.$element.removeClass(Affix.RESET).addClass('affix')
    var scrollTop = this.$target.scrollTop()
    var position  = this.$element.offset()
    return (this.pinnedOffset = position.top - scrollTop)
  }

  Affix.prototype.checkPositionWithEventLoop = function () {
    setTimeout($.proxy(this.checkPosition, this), 1)
  }

  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return

    var height       = this.$element.height()
    var offset       = this.options.offset
    var offsetTop    = offset.top
    var offsetBottom = offset.bottom
    var scrollHeight = Math.max($(document).height(), $(document.body).height())

    if (typeof offset != 'object')         offsetBottom = offsetTop = offset
    if (typeof offsetTop == 'function')    offsetTop    = offset.top(this.$element)
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element)

    var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom)

    if (this.affixed != affix) {
      if (this.unpin != null) this.$element.css('top', '')

      var affixType = 'affix' + (affix ? '-' + affix : '')
      var e         = $.Event(affixType + '.bs.affix')

      this.$element.trigger(e)

      if (e.isDefaultPrevented()) return

      this.affixed = affix
      this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null

      this.$element
        .removeClass(Affix.RESET)
        .addClass(affixType)
        .trigger(affixType.replace('affix', 'affixed') + '.bs.affix')
    }

    if (affix == 'bottom') {
      this.$element.offset({
        top: scrollHeight - height - offsetBottom
      })
    }
  }


  // AFFIX PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.affix')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.affix

  $.fn.affix             = Plugin
  $.fn.affix.Constructor = Affix


  // AFFIX NO CONFLICT
  // =================

  $.fn.affix.noConflict = function () {
    $.fn.affix = old
    return this
  }


  // AFFIX DATA-API
  // ==============

  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this)
      var data = $spy.data()

      data.offset = data.offset || {}

      if (data.offsetBottom != null) data.offset.bottom = data.offsetBottom
      if (data.offsetTop    != null) data.offset.top    = data.offsetTop

      Plugin.call($spy, data)
    })
  })

}(jQuery);



/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/
var jQuery = __webpack_require__(0);

/* ========================================================================
 * Bootstrap: alert.js v3.3.7
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // ALERT CLASS DEFINITION
  // ======================

  var dismiss = '[data-dismiss="alert"]'
  var Alert   = function (el) {
    $(el).on('click', dismiss, this.close)
  }

  Alert.VERSION = '3.3.7'

  Alert.TRANSITION_DURATION = 150

  Alert.prototype.close = function (e) {
    var $this    = $(this)
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = $(selector === '#' ? [] : selector)

    if (e) e.preventDefault()

    if (!$parent.length) {
      $parent = $this.closest('.alert')
    }

    $parent.trigger(e = $.Event('close.bs.alert'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
      // detach from parent, fire event then clean up data
      $parent.detach().trigger('closed.bs.alert').remove()
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent
        .one('bsTransitionEnd', removeElement)
        .emulateTransitionEnd(Alert.TRANSITION_DURATION) :
      removeElement()
  }


  // ALERT PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.alert')

      if (!data) $this.data('bs.alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.alert

  $.fn.alert             = Plugin
  $.fn.alert.Constructor = Alert


  // ALERT NO CONFLICT
  // =================

  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }


  // ALERT DATA-API
  // ==============

  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

}(jQuery);



/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/
var jQuery = __webpack_require__(0);

/* ========================================================================
 * Bootstrap: button.js v3.3.7
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // BUTTON PUBLIC CLASS DEFINITION
  // ==============================

  var Button = function (element, options) {
    this.$element  = $(element)
    this.options   = $.extend({}, Button.DEFAULTS, options)
    this.isLoading = false
  }

  Button.VERSION  = '3.3.7'

  Button.DEFAULTS = {
    loadingText: 'loading...'
  }

  Button.prototype.setState = function (state) {
    var d    = 'disabled'
    var $el  = this.$element
    var val  = $el.is('input') ? 'val' : 'html'
    var data = $el.data()

    state += 'Text'

    if (data.resetText == null) $el.data('resetText', $el[val]())

    // push to event loop to allow forms to submit
    setTimeout($.proxy(function () {
      $el[val](data[state] == null ? this.options[state] : data[state])

      if (state == 'loadingText') {
        this.isLoading = true
        $el.addClass(d).attr(d, d).prop(d, true)
      } else if (this.isLoading) {
        this.isLoading = false
        $el.removeClass(d).removeAttr(d).prop(d, false)
      }
    }, this), 0)
  }

  Button.prototype.toggle = function () {
    var changed = true
    var $parent = this.$element.closest('[data-toggle="buttons"]')

    if ($parent.length) {
      var $input = this.$element.find('input')
      if ($input.prop('type') == 'radio') {
        if ($input.prop('checked')) changed = false
        $parent.find('.active').removeClass('active')
        this.$element.addClass('active')
      } else if ($input.prop('type') == 'checkbox') {
        if (($input.prop('checked')) !== this.$element.hasClass('active')) changed = false
        this.$element.toggleClass('active')
      }
      $input.prop('checked', this.$element.hasClass('active'))
      if (changed) $input.trigger('change')
    } else {
      this.$element.attr('aria-pressed', !this.$element.hasClass('active'))
      this.$element.toggleClass('active')
    }
  }


  // BUTTON PLUGIN DEFINITION
  // ========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.button')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.button', (data = new Button(this, options)))

      if (option == 'toggle') data.toggle()
      else if (option) data.setState(option)
    })
  }

  var old = $.fn.button

  $.fn.button             = Plugin
  $.fn.button.Constructor = Button


  // BUTTON NO CONFLICT
  // ==================

  $.fn.button.noConflict = function () {
    $.fn.button = old
    return this
  }


  // BUTTON DATA-API
  // ===============

  $(document)
    .on('click.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      var $btn = $(e.target).closest('.btn')
      Plugin.call($btn, 'toggle')
      if (!($(e.target).is('input[type="radio"], input[type="checkbox"]'))) {
        // Prevent double click on radios, and the double selections (so cancellation) on checkboxes
        e.preventDefault()
        // The target component still receive the focus
        if ($btn.is('input,button')) $btn.trigger('focus')
        else $btn.find('input:visible,button:visible').first().trigger('focus')
      }
    })
    .on('focus.bs.button.data-api blur.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      $(e.target).closest('.btn').toggleClass('focus', /^focus(in)?$/.test(e.type))
    })

}(jQuery);



/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/
var jQuery = __webpack_require__(0);

/* ========================================================================
 * Bootstrap: carousel.js v3.3.7
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CAROUSEL CLASS DEFINITION
  // =========================

  var Carousel = function (element, options) {
    this.$element    = $(element)
    this.$indicators = this.$element.find('.carousel-indicators')
    this.options     = options
    this.paused      = null
    this.sliding     = null
    this.interval    = null
    this.$active     = null
    this.$items      = null

    this.options.keyboard && this.$element.on('keydown.bs.carousel', $.proxy(this.keydown, this))

    this.options.pause == 'hover' && !('ontouchstart' in document.documentElement) && this.$element
      .on('mouseenter.bs.carousel', $.proxy(this.pause, this))
      .on('mouseleave.bs.carousel', $.proxy(this.cycle, this))
  }

  Carousel.VERSION  = '3.3.7'

  Carousel.TRANSITION_DURATION = 600

  Carousel.DEFAULTS = {
    interval: 5000,
    pause: 'hover',
    wrap: true,
    keyboard: true
  }

  Carousel.prototype.keydown = function (e) {
    if (/input|textarea/i.test(e.target.tagName)) return
    switch (e.which) {
      case 37: this.prev(); break
      case 39: this.next(); break
      default: return
    }

    e.preventDefault()
  }

  Carousel.prototype.cycle = function (e) {
    e || (this.paused = false)

    this.interval && clearInterval(this.interval)

    this.options.interval
      && !this.paused
      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))

    return this
  }

  Carousel.prototype.getItemIndex = function (item) {
    this.$items = item.parent().children('.item')
    return this.$items.index(item || this.$active)
  }

  Carousel.prototype.getItemForDirection = function (direction, active) {
    var activeIndex = this.getItemIndex(active)
    var willWrap = (direction == 'prev' && activeIndex === 0)
                || (direction == 'next' && activeIndex == (this.$items.length - 1))
    if (willWrap && !this.options.wrap) return active
    var delta = direction == 'prev' ? -1 : 1
    var itemIndex = (activeIndex + delta) % this.$items.length
    return this.$items.eq(itemIndex)
  }

  Carousel.prototype.to = function (pos) {
    var that        = this
    var activeIndex = this.getItemIndex(this.$active = this.$element.find('.item.active'))

    if (pos > (this.$items.length - 1) || pos < 0) return

    if (this.sliding)       return this.$element.one('slid.bs.carousel', function () { that.to(pos) }) // yes, "slid"
    if (activeIndex == pos) return this.pause().cycle()

    return this.slide(pos > activeIndex ? 'next' : 'prev', this.$items.eq(pos))
  }

  Carousel.prototype.pause = function (e) {
    e || (this.paused = true)

    if (this.$element.find('.next, .prev').length && $.support.transition) {
      this.$element.trigger($.support.transition.end)
      this.cycle(true)
    }

    this.interval = clearInterval(this.interval)

    return this
  }

  Carousel.prototype.next = function () {
    if (this.sliding) return
    return this.slide('next')
  }

  Carousel.prototype.prev = function () {
    if (this.sliding) return
    return this.slide('prev')
  }

  Carousel.prototype.slide = function (type, next) {
    var $active   = this.$element.find('.item.active')
    var $next     = next || this.getItemForDirection(type, $active)
    var isCycling = this.interval
    var direction = type == 'next' ? 'left' : 'right'
    var that      = this

    if ($next.hasClass('active')) return (this.sliding = false)

    var relatedTarget = $next[0]
    var slideEvent = $.Event('slide.bs.carousel', {
      relatedTarget: relatedTarget,
      direction: direction
    })
    this.$element.trigger(slideEvent)
    if (slideEvent.isDefaultPrevented()) return

    this.sliding = true

    isCycling && this.pause()

    if (this.$indicators.length) {
      this.$indicators.find('.active').removeClass('active')
      var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)])
      $nextIndicator && $nextIndicator.addClass('active')
    }

    var slidEvent = $.Event('slid.bs.carousel', { relatedTarget: relatedTarget, direction: direction }) // yes, "slid"
    if ($.support.transition && this.$element.hasClass('slide')) {
      $next.addClass(type)
      $next[0].offsetWidth // force reflow
      $active.addClass(direction)
      $next.addClass(direction)
      $active
        .one('bsTransitionEnd', function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () {
            that.$element.trigger(slidEvent)
          }, 0)
        })
        .emulateTransitionEnd(Carousel.TRANSITION_DURATION)
    } else {
      $active.removeClass('active')
      $next.addClass('active')
      this.sliding = false
      this.$element.trigger(slidEvent)
    }

    isCycling && this.cycle()

    return this
  }


  // CAROUSEL PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.carousel')
      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
      var action  = typeof option == 'string' ? option : options.slide

      if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.pause().cycle()
    })
  }

  var old = $.fn.carousel

  $.fn.carousel             = Plugin
  $.fn.carousel.Constructor = Carousel


  // CAROUSEL NO CONFLICT
  // ====================

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old
    return this
  }


  // CAROUSEL DATA-API
  // =================

  var clickHandler = function (e) {
    var href
    var $this   = $(this)
    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) // strip for ie7
    if (!$target.hasClass('carousel')) return
    var options = $.extend({}, $target.data(), $this.data())
    var slideIndex = $this.attr('data-slide-to')
    if (slideIndex) options.interval = false

    Plugin.call($target, options)

    if (slideIndex) {
      $target.data('bs.carousel').to(slideIndex)
    }

    e.preventDefault()
  }

  $(document)
    .on('click.bs.carousel.data-api', '[data-slide]', clickHandler)
    .on('click.bs.carousel.data-api', '[data-slide-to]', clickHandler)

  $(window).on('load', function () {
    $('[data-ride="carousel"]').each(function () {
      var $carousel = $(this)
      Plugin.call($carousel, $carousel.data())
    })
  })

}(jQuery);



/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/
var jQuery = __webpack_require__(0);

/* ========================================================================
 * Bootstrap: collapse.js v3.3.7
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

/* jshint latedef: false */

+function ($) {
  'use strict';

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function (element, options) {
    this.$element      = $(element)
    this.options       = $.extend({}, Collapse.DEFAULTS, options)
    this.$trigger      = $('[data-toggle="collapse"][href="#' + element.id + '"],' +
                           '[data-toggle="collapse"][data-target="#' + element.id + '"]')
    this.transitioning = null

    if (this.options.parent) {
      this.$parent = this.getParent()
    } else {
      this.addAriaAndCollapsedClass(this.$element, this.$trigger)
    }

    if (this.options.toggle) this.toggle()
  }

  Collapse.VERSION  = '3.3.7'

  Collapse.TRANSITION_DURATION = 350

  Collapse.DEFAULTS = {
    toggle: true
  }

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width')
    return hasWidth ? 'width' : 'height'
  }

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return

    var activesData
    var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing')

    if (actives && actives.length) {
      activesData = actives.data('bs.collapse')
      if (activesData && activesData.transitioning) return
    }

    var startEvent = $.Event('show.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    if (actives && actives.length) {
      Plugin.call(actives, 'hide')
      activesData || actives.data('bs.collapse', null)
    }

    var dimension = this.dimension()

    this.$element
      .removeClass('collapse')
      .addClass('collapsing')[dimension](0)
      .attr('aria-expanded', true)

    this.$trigger
      .removeClass('collapsed')
      .attr('aria-expanded', true)

    this.transitioning = 1

    var complete = function () {
      this.$element
        .removeClass('collapsing')
        .addClass('collapse in')[dimension]('')
      this.transitioning = 0
      this.$element
        .trigger('shown.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

    this.$element
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])
  }

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return

    var startEvent = $.Event('hide.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var dimension = this.dimension()

    this.$element[dimension](this.$element[dimension]())[0].offsetHeight

    this.$element
      .addClass('collapsing')
      .removeClass('collapse in')
      .attr('aria-expanded', false)

    this.$trigger
      .addClass('collapsed')
      .attr('aria-expanded', false)

    this.transitioning = 1

    var complete = function () {
      this.transitioning = 0
      this.$element
        .removeClass('collapsing')
        .addClass('collapse')
        .trigger('hidden.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    this.$element
      [dimension](0)
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)
  }

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']()
  }

  Collapse.prototype.getParent = function () {
    return $(this.options.parent)
      .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
      .each($.proxy(function (i, element) {
        var $element = $(element)
        this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element)
      }, this))
      .end()
  }

  Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {
    var isOpen = $element.hasClass('in')

    $element.attr('aria-expanded', isOpen)
    $trigger
      .toggleClass('collapsed', !isOpen)
      .attr('aria-expanded', isOpen)
  }

  function getTargetFromTrigger($trigger) {
    var href
    var target = $trigger.attr('data-target')
      || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7

    return $(target)
  }


  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.collapse')
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false
      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.collapse

  $.fn.collapse             = Plugin
  $.fn.collapse.Constructor = Collapse


  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


  // COLLAPSE DATA-API
  // =================

  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
    var $this   = $(this)

    if (!$this.attr('data-target')) e.preventDefault()

    var $target = getTargetFromTrigger($this)
    var data    = $target.data('bs.collapse')
    var option  = data ? 'toggle' : $this.data()

    Plugin.call($target, option)
  })

}(jQuery);



/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/
var jQuery = __webpack_require__(0);

/* ========================================================================
 * Bootstrap: dropdown.js v3.3.7
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '.dropdown-backdrop'
  var toggle   = '[data-toggle="dropdown"]'
  var Dropdown = function (element) {
    $(element).on('click.bs.dropdown', this.toggle)
  }

  Dropdown.VERSION = '3.3.7'

  function getParent($this) {
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = selector && $(selector)

    return $parent && $parent.length ? $parent : $this.parent()
  }

  function clearMenus(e) {
    if (e && e.which === 3) return
    $(backdrop).remove()
    $(toggle).each(function () {
      var $this         = $(this)
      var $parent       = getParent($this)
      var relatedTarget = { relatedTarget: this }

      if (!$parent.hasClass('open')) return

      if (e && e.type == 'click' && /input|textarea/i.test(e.target.tagName) && $.contains($parent[0], e.target)) return

      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this.attr('aria-expanded', 'false')
      $parent.removeClass('open').trigger($.Event('hidden.bs.dropdown', relatedTarget))
    })
  }

  Dropdown.prototype.toggle = function (e) {
    var $this = $(this)

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    clearMenus()

    if (!isActive) {
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
        // if mobile we use a backdrop because click events don't delegate
        $(document.createElement('div'))
          .addClass('dropdown-backdrop')
          .insertAfter($(this))
          .on('click', clearMenus)
      }

      var relatedTarget = { relatedTarget: this }
      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this
        .trigger('focus')
        .attr('aria-expanded', 'true')

      $parent
        .toggleClass('open')
        .trigger($.Event('shown.bs.dropdown', relatedTarget))
    }

    return false
  }

  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return

    var $this = $(this)

    e.preventDefault()
    e.stopPropagation()

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    if (!isActive && e.which != 27 || isActive && e.which == 27) {
      if (e.which == 27) $parent.find(toggle).trigger('focus')
      return $this.trigger('click')
    }

    var desc = ' li:not(.disabled):visible a'
    var $items = $parent.find('.dropdown-menu' + desc)

    if (!$items.length) return

    var index = $items.index(e.target)

    if (e.which == 38 && index > 0)                 index--         // up
    if (e.which == 40 && index < $items.length - 1) index++         // down
    if (!~index)                                    index = 0

    $items.eq(index).trigger('focus')
  }


  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.dropdown')

      if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.dropdown

  $.fn.dropdown             = Plugin
  $.fn.dropdown.Constructor = Dropdown


  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================

  $(document)
    .on('click.bs.dropdown.data-api', clearMenus)
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
    .on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown)
    .on('keydown.bs.dropdown.data-api', '.dropdown-menu', Dropdown.prototype.keydown)

}(jQuery);



/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/
var jQuery = __webpack_require__(0);

/* ========================================================================
 * Bootstrap: modal.js v3.3.7
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
    this.options             = options
    this.$body               = $(document.body)
    this.$element            = $(element)
    this.$dialog             = this.$element.find('.modal-dialog')
    this.$backdrop           = null
    this.isShown             = null
    this.originalBodyPad     = null
    this.scrollbarWidth      = 0
    this.ignoreBackdropClick = false

    if (this.options.remote) {
      this.$element
        .find('.modal-content')
        .load(this.options.remote, $.proxy(function () {
          this.$element.trigger('loaded.bs.modal')
        }, this))
    }
  }

  Modal.VERSION  = '3.3.7'

  Modal.TRANSITION_DURATION = 300
  Modal.BACKDROP_TRANSITION_DURATION = 150

  Modal.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  }

  Modal.prototype.toggle = function (_relatedTarget) {
    return this.isShown ? this.hide() : this.show(_relatedTarget)
  }

  Modal.prototype.show = function (_relatedTarget) {
    var that = this
    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.checkScrollbar()
    this.setScrollbar()
    this.$body.addClass('modal-open')

    this.escape()
    this.resize()

    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

    this.$dialog.on('mousedown.dismiss.bs.modal', function () {
      that.$element.one('mouseup.dismiss.bs.modal', function (e) {
        if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true
      })
    })

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade')

      if (!that.$element.parent().length) {
        that.$element.appendTo(that.$body) // don't move modals dom position
      }

      that.$element
        .show()
        .scrollTop(0)

      that.adjustDialog()

      if (transition) {
        that.$element[0].offsetWidth // force reflow
      }

      that.$element.addClass('in')

      that.enforceFocus()

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

      transition ?
        that.$dialog // wait for modal to slide in
          .one('bsTransitionEnd', function () {
            that.$element.trigger('focus').trigger(e)
          })
          .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
        that.$element.trigger('focus').trigger(e)
    })
  }

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = $.Event('hide.bs.modal')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.escape()
    this.resize()

    $(document).off('focusin.bs.modal')

    this.$element
      .removeClass('in')
      .off('click.dismiss.bs.modal')
      .off('mouseup.dismiss.bs.modal')

    this.$dialog.off('mousedown.dismiss.bs.modal')

    $.support.transition && this.$element.hasClass('fade') ?
      this.$element
        .one('bsTransitionEnd', $.proxy(this.hideModal, this))
        .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
      this.hideModal()
  }

  Modal.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', $.proxy(function (e) {
        if (document !== e.target &&
            this.$element[0] !== e.target &&
            !this.$element.has(e.target).length) {
          this.$element.trigger('focus')
        }
      }, this))
  }

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keydown.dismiss.bs.modal')
    }
  }

  Modal.prototype.resize = function () {
    if (this.isShown) {
      $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this))
    } else {
      $(window).off('resize.bs.modal')
    }
  }

  Modal.prototype.hideModal = function () {
    var that = this
    this.$element.hide()
    this.backdrop(function () {
      that.$body.removeClass('modal-open')
      that.resetAdjustments()
      that.resetScrollbar()
      that.$element.trigger('hidden.bs.modal')
    })
  }

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  }

  Modal.prototype.backdrop = function (callback) {
    var that = this
    var animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $(document.createElement('div'))
        .addClass('modal-backdrop ' + animate)
        .appendTo(this.$body)

      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
        if (this.ignoreBackdropClick) {
          this.ignoreBackdropClick = false
          return
        }
        if (e.target !== e.currentTarget) return
        this.options.backdrop == 'static'
          ? this.$element[0].focus()
          : this.hide()
      }, this))

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      if (!callback) return

      doAnimate ?
        this.$backdrop
          .one('bsTransitionEnd', callback)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      var callbackRemove = function () {
        that.removeBackdrop()
        callback && callback()
      }
      $.support.transition && this.$element.hasClass('fade') ?
        this.$backdrop
          .one('bsTransitionEnd', callbackRemove)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callbackRemove()

    } else if (callback) {
      callback()
    }
  }

  // these following methods are used to handle overflowing modals

  Modal.prototype.handleUpdate = function () {
    this.adjustDialog()
  }

  Modal.prototype.adjustDialog = function () {
    var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight

    this.$element.css({
      paddingLeft:  !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
      paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
    })
  }

  Modal.prototype.resetAdjustments = function () {
    this.$element.css({
      paddingLeft: '',
      paddingRight: ''
    })
  }

  Modal.prototype.checkScrollbar = function () {
    var fullWindowWidth = window.innerWidth
    if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
      var documentElementRect = document.documentElement.getBoundingClientRect()
      fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left)
    }
    this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth
    this.scrollbarWidth = this.measureScrollbar()
  }

  Modal.prototype.setScrollbar = function () {
    var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
    this.originalBodyPad = document.body.style.paddingRight || ''
    if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
  }

  Modal.prototype.resetScrollbar = function () {
    this.$body.css('padding-right', this.originalBodyPad)
  }

  Modal.prototype.measureScrollbar = function () { // thx walsh
    var scrollDiv = document.createElement('div')
    scrollDiv.className = 'modal-scrollbar-measure'
    this.$body.append(scrollDiv)
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
    this.$body[0].removeChild(scrollDiv)
    return scrollbarWidth
  }


  // MODAL PLUGIN DEFINITION
  // =======================

  function Plugin(option, _relatedTarget) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.modal')
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }

  var old = $.fn.modal

  $.fn.modal             = Plugin
  $.fn.modal.Constructor = Modal


  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this   = $(this)
    var href    = $this.attr('href')
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
    var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

    if ($this.is('a')) e.preventDefault()

    $target.one('show.bs.modal', function (showEvent) {
      if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
      $target.one('hidden.bs.modal', function () {
        $this.is(':visible') && $this.trigger('focus')
      })
    })
    Plugin.call($target, option, this)
  })

}(jQuery);



/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/
var jQuery = __webpack_require__(0);

/* ========================================================================
 * Bootstrap: popover.js v3.3.7
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // POPOVER PUBLIC CLASS DEFINITION
  // ===============================

  var Popover = function (element, options) {
    this.init('popover', element, options)
  }

  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')

  Popover.VERSION  = '3.3.7'

  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  })


  // NOTE: POPOVER EXTENDS tooltip.js
  // ================================

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)

  Popover.prototype.constructor = Popover

  Popover.prototype.getDefaults = function () {
    return Popover.DEFAULTS
  }

  Popover.prototype.setContent = function () {
    var $tip    = this.tip()
    var title   = this.getTitle()
    var content = this.getContent()

    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
    $tip.find('.popover-content').children().detach().end()[ // we use append for html objects to maintain js events
      this.options.html ? (typeof content == 'string' ? 'html' : 'append') : 'text'
    ](content)

    $tip.removeClass('fade top bottom left right in')

    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
    // this manually by checking the contents.
    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
  }

  Popover.prototype.hasContent = function () {
    return this.getTitle() || this.getContent()
  }

  Popover.prototype.getContent = function () {
    var $e = this.$element
    var o  = this.options

    return $e.attr('data-content')
      || (typeof o.content == 'function' ?
            o.content.call($e[0]) :
            o.content)
  }

  Popover.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.arrow'))
  }


  // POPOVER PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.popover')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.popover

  $.fn.popover             = Plugin
  $.fn.popover.Constructor = Popover


  // POPOVER NO CONFLICT
  // ===================

  $.fn.popover.noConflict = function () {
    $.fn.popover = old
    return this
  }

}(jQuery);



/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/
var jQuery = __webpack_require__(0);

/* ========================================================================
 * Bootstrap: scrollspy.js v3.3.7
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // SCROLLSPY CLASS DEFINITION
  // ==========================

  function ScrollSpy(element, options) {
    this.$body          = $(document.body)
    this.$scrollElement = $(element).is(document.body) ? $(window) : $(element)
    this.options        = $.extend({}, ScrollSpy.DEFAULTS, options)
    this.selector       = (this.options.target || '') + ' .nav li > a'
    this.offsets        = []
    this.targets        = []
    this.activeTarget   = null
    this.scrollHeight   = 0

    this.$scrollElement.on('scroll.bs.scrollspy', $.proxy(this.process, this))
    this.refresh()
    this.process()
  }

  ScrollSpy.VERSION  = '3.3.7'

  ScrollSpy.DEFAULTS = {
    offset: 10
  }

  ScrollSpy.prototype.getScrollHeight = function () {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
  }

  ScrollSpy.prototype.refresh = function () {
    var that          = this
    var offsetMethod  = 'offset'
    var offsetBase    = 0

    this.offsets      = []
    this.targets      = []
    this.scrollHeight = this.getScrollHeight()

    if (!$.isWindow(this.$scrollElement[0])) {
      offsetMethod = 'position'
      offsetBase   = this.$scrollElement.scrollTop()
    }

    this.$body
      .find(this.selector)
      .map(function () {
        var $el   = $(this)
        var href  = $el.data('target') || $el.attr('href')
        var $href = /^#./.test(href) && $(href)

        return ($href
          && $href.length
          && $href.is(':visible')
          && [[$href[offsetMethod]().top + offsetBase, href]]) || null
      })
      .sort(function (a, b) { return a[0] - b[0] })
      .each(function () {
        that.offsets.push(this[0])
        that.targets.push(this[1])
      })
  }

  ScrollSpy.prototype.process = function () {
    var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset
    var scrollHeight = this.getScrollHeight()
    var maxScroll    = this.options.offset + scrollHeight - this.$scrollElement.height()
    var offsets      = this.offsets
    var targets      = this.targets
    var activeTarget = this.activeTarget
    var i

    if (this.scrollHeight != scrollHeight) {
      this.refresh()
    }

    if (scrollTop >= maxScroll) {
      return activeTarget != (i = targets[targets.length - 1]) && this.activate(i)
    }

    if (activeTarget && scrollTop < offsets[0]) {
      this.activeTarget = null
      return this.clear()
    }

    for (i = offsets.length; i--;) {
      activeTarget != targets[i]
        && scrollTop >= offsets[i]
        && (offsets[i + 1] === undefined || scrollTop < offsets[i + 1])
        && this.activate(targets[i])
    }
  }

  ScrollSpy.prototype.activate = function (target) {
    this.activeTarget = target

    this.clear()

    var selector = this.selector +
      '[data-target="' + target + '"],' +
      this.selector + '[href="' + target + '"]'

    var active = $(selector)
      .parents('li')
      .addClass('active')

    if (active.parent('.dropdown-menu').length) {
      active = active
        .closest('li.dropdown')
        .addClass('active')
    }

    active.trigger('activate.bs.scrollspy')
  }

  ScrollSpy.prototype.clear = function () {
    $(this.selector)
      .parentsUntil(this.options.target, '.active')
      .removeClass('active')
  }


  // SCROLLSPY PLUGIN DEFINITION
  // ===========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.scrollspy')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.scrollspy

  $.fn.scrollspy             = Plugin
  $.fn.scrollspy.Constructor = ScrollSpy


  // SCROLLSPY NO CONFLICT
  // =====================

  $.fn.scrollspy.noConflict = function () {
    $.fn.scrollspy = old
    return this
  }


  // SCROLLSPY DATA-API
  // ==================

  $(window).on('load.bs.scrollspy.data-api', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this)
      Plugin.call($spy, $spy.data())
    })
  })

}(jQuery);



/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/
var jQuery = __webpack_require__(0);

/* ========================================================================
 * Bootstrap: tab.js v3.3.7
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TAB CLASS DEFINITION
  // ====================

  var Tab = function (element) {
    // jscs:disable requireDollarBeforejQueryAssignment
    this.element = $(element)
    // jscs:enable requireDollarBeforejQueryAssignment
  }

  Tab.VERSION = '3.3.7'

  Tab.TRANSITION_DURATION = 150

  Tab.prototype.show = function () {
    var $this    = this.element
    var $ul      = $this.closest('ul:not(.dropdown-menu)')
    var selector = $this.data('target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    if ($this.parent('li').hasClass('active')) return

    var $previous = $ul.find('.active:last a')
    var hideEvent = $.Event('hide.bs.tab', {
      relatedTarget: $this[0]
    })
    var showEvent = $.Event('show.bs.tab', {
      relatedTarget: $previous[0]
    })

    $previous.trigger(hideEvent)
    $this.trigger(showEvent)

    if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) return

    var $target = $(selector)

    this.activate($this.closest('li'), $ul)
    this.activate($target, $target.parent(), function () {
      $previous.trigger({
        type: 'hidden.bs.tab',
        relatedTarget: $this[0]
      })
      $this.trigger({
        type: 'shown.bs.tab',
        relatedTarget: $previous[0]
      })
    })
  }

  Tab.prototype.activate = function (element, container, callback) {
    var $active    = container.find('> .active')
    var transition = callback
      && $.support.transition
      && ($active.length && $active.hasClass('fade') || !!container.find('> .fade').length)

    function next() {
      $active
        .removeClass('active')
        .find('> .dropdown-menu > .active')
          .removeClass('active')
        .end()
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', false)

      element
        .addClass('active')
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', true)

      if (transition) {
        element[0].offsetWidth // reflow for transition
        element.addClass('in')
      } else {
        element.removeClass('fade')
      }

      if (element.parent('.dropdown-menu').length) {
        element
          .closest('li.dropdown')
            .addClass('active')
          .end()
          .find('[data-toggle="tab"]')
            .attr('aria-expanded', true)
      }

      callback && callback()
    }

    $active.length && transition ?
      $active
        .one('bsTransitionEnd', next)
        .emulateTransitionEnd(Tab.TRANSITION_DURATION) :
      next()

    $active.removeClass('in')
  }


  // TAB PLUGIN DEFINITION
  // =====================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.tab')

      if (!data) $this.data('bs.tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tab

  $.fn.tab             = Plugin
  $.fn.tab.Constructor = Tab


  // TAB NO CONFLICT
  // ===============

  $.fn.tab.noConflict = function () {
    $.fn.tab = old
    return this
  }


  // TAB DATA-API
  // ============

  var clickHandler = function (e) {
    e.preventDefault()
    Plugin.call($(this), 'show')
  }

  $(document)
    .on('click.bs.tab.data-api', '[data-toggle="tab"]', clickHandler)
    .on('click.bs.tab.data-api', '[data-toggle="pill"]', clickHandler)

}(jQuery);



/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/
var jQuery = __webpack_require__(0);

/* ========================================================================
 * Bootstrap: tooltip.js v3.3.7
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TOOLTIP PUBLIC CLASS DEFINITION
  // ===============================

  var Tooltip = function (element, options) {
    this.type       = null
    this.options    = null
    this.enabled    = null
    this.timeout    = null
    this.hoverState = null
    this.$element   = null
    this.inState    = null

    this.init('tooltip', element, options)
  }

  Tooltip.VERSION  = '3.3.7'

  Tooltip.TRANSITION_DURATION = 150

  Tooltip.DEFAULTS = {
    animation: true,
    placement: 'top',
    selector: false,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    container: false,
    viewport: {
      selector: 'body',
      padding: 0
    }
  }

  Tooltip.prototype.init = function (type, element, options) {
    this.enabled   = true
    this.type      = type
    this.$element  = $(element)
    this.options   = this.getOptions(options)
    this.$viewport = this.options.viewport && $($.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : (this.options.viewport.selector || this.options.viewport))
    this.inState   = { click: false, hover: false, focus: false }

    if (this.$element[0] instanceof document.constructor && !this.options.selector) {
      throw new Error('`selector` option must be specified when initializing ' + this.type + ' on the window.document object!')
    }

    var triggers = this.options.trigger.split(' ')

    for (var i = triggers.length; i--;) {
      var trigger = triggers[i]

      if (trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
      } else if (trigger != 'manual') {
        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focusin'
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'

        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
      }
    }

    this.options.selector ?
      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
      this.fixTitle()
  }

  Tooltip.prototype.getDefaults = function () {
    return Tooltip.DEFAULTS
  }

  Tooltip.prototype.getOptions = function (options) {
    options = $.extend({}, this.getDefaults(), this.$element.data(), options)

    if (options.delay && typeof options.delay == 'number') {
      options.delay = {
        show: options.delay,
        hide: options.delay
      }
    }

    return options
  }

  Tooltip.prototype.getDelegateOptions = function () {
    var options  = {}
    var defaults = this.getDefaults()

    this._options && $.each(this._options, function (key, value) {
      if (defaults[key] != value) options[key] = value
    })

    return options
  }

  Tooltip.prototype.enter = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    if (obj instanceof $.Event) {
      self.inState[obj.type == 'focusin' ? 'focus' : 'hover'] = true
    }

    if (self.tip().hasClass('in') || self.hoverState == 'in') {
      self.hoverState = 'in'
      return
    }

    clearTimeout(self.timeout)

    self.hoverState = 'in'

    if (!self.options.delay || !self.options.delay.show) return self.show()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'in') self.show()
    }, self.options.delay.show)
  }

  Tooltip.prototype.isInStateTrue = function () {
    for (var key in this.inState) {
      if (this.inState[key]) return true
    }

    return false
  }

  Tooltip.prototype.leave = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    if (obj instanceof $.Event) {
      self.inState[obj.type == 'focusout' ? 'focus' : 'hover'] = false
    }

    if (self.isInStateTrue()) return

    clearTimeout(self.timeout)

    self.hoverState = 'out'

    if (!self.options.delay || !self.options.delay.hide) return self.hide()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'out') self.hide()
    }, self.options.delay.hide)
  }

  Tooltip.prototype.show = function () {
    var e = $.Event('show.bs.' + this.type)

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e)

      var inDom = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0])
      if (e.isDefaultPrevented() || !inDom) return
      var that = this

      var $tip = this.tip()

      var tipId = this.getUID(this.type)

      this.setContent()
      $tip.attr('id', tipId)
      this.$element.attr('aria-describedby', tipId)

      if (this.options.animation) $tip.addClass('fade')

      var placement = typeof this.options.placement == 'function' ?
        this.options.placement.call(this, $tip[0], this.$element[0]) :
        this.options.placement

      var autoToken = /\s?auto?\s?/i
      var autoPlace = autoToken.test(placement)
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'

      $tip
        .detach()
        .css({ top: 0, left: 0, display: 'block' })
        .addClass(placement)
        .data('bs.' + this.type, this)

      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)
      this.$element.trigger('inserted.bs.' + this.type)

      var pos          = this.getPosition()
      var actualWidth  = $tip[0].offsetWidth
      var actualHeight = $tip[0].offsetHeight

      if (autoPlace) {
        var orgPlacement = placement
        var viewportDim = this.getPosition(this.$viewport)

        placement = placement == 'bottom' && pos.bottom + actualHeight > viewportDim.bottom ? 'top'    :
                    placement == 'top'    && pos.top    - actualHeight < viewportDim.top    ? 'bottom' :
                    placement == 'right'  && pos.right  + actualWidth  > viewportDim.width  ? 'left'   :
                    placement == 'left'   && pos.left   - actualWidth  < viewportDim.left   ? 'right'  :
                    placement

        $tip
          .removeClass(orgPlacement)
          .addClass(placement)
      }

      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

      this.applyPlacement(calculatedOffset, placement)

      var complete = function () {
        var prevHoverState = that.hoverState
        that.$element.trigger('shown.bs.' + that.type)
        that.hoverState = null

        if (prevHoverState == 'out') that.leave(that)
      }

      $.support.transition && this.$tip.hasClass('fade') ?
        $tip
          .one('bsTransitionEnd', complete)
          .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
        complete()
    }
  }

  Tooltip.prototype.applyPlacement = function (offset, placement) {
    var $tip   = this.tip()
    var width  = $tip[0].offsetWidth
    var height = $tip[0].offsetHeight

    // manually read margins because getBoundingClientRect includes difference
    var marginTop = parseInt($tip.css('margin-top'), 10)
    var marginLeft = parseInt($tip.css('margin-left'), 10)

    // we must check for NaN for ie 8/9
    if (isNaN(marginTop))  marginTop  = 0
    if (isNaN(marginLeft)) marginLeft = 0

    offset.top  += marginTop
    offset.left += marginLeft

    // $.fn.offset doesn't round pixel values
    // so we use setOffset directly with our own function B-0
    $.offset.setOffset($tip[0], $.extend({
      using: function (props) {
        $tip.css({
          top: Math.round(props.top),
          left: Math.round(props.left)
        })
      }
    }, offset), 0)

    $tip.addClass('in')

    // check to see if placing tip in new offset caused the tip to resize itself
    var actualWidth  = $tip[0].offsetWidth
    var actualHeight = $tip[0].offsetHeight

    if (placement == 'top' && actualHeight != height) {
      offset.top = offset.top + height - actualHeight
    }

    var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight)

    if (delta.left) offset.left += delta.left
    else offset.top += delta.top

    var isVertical          = /top|bottom/.test(placement)
    var arrowDelta          = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight
    var arrowOffsetPosition = isVertical ? 'offsetWidth' : 'offsetHeight'

    $tip.offset(offset)
    this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical)
  }

  Tooltip.prototype.replaceArrow = function (delta, dimension, isVertical) {
    this.arrow()
      .css(isVertical ? 'left' : 'top', 50 * (1 - delta / dimension) + '%')
      .css(isVertical ? 'top' : 'left', '')
  }

  Tooltip.prototype.setContent = function () {
    var $tip  = this.tip()
    var title = this.getTitle()

    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
    $tip.removeClass('fade in top bottom left right')
  }

  Tooltip.prototype.hide = function (callback) {
    var that = this
    var $tip = $(this.$tip)
    var e    = $.Event('hide.bs.' + this.type)

    function complete() {
      if (that.hoverState != 'in') $tip.detach()
      if (that.$element) { // TODO: Check whether guarding this code with this `if` is really necessary.
        that.$element
          .removeAttr('aria-describedby')
          .trigger('hidden.bs.' + that.type)
      }
      callback && callback()
    }

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    $tip.removeClass('in')

    $.support.transition && $tip.hasClass('fade') ?
      $tip
        .one('bsTransitionEnd', complete)
        .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
      complete()

    this.hoverState = null

    return this
  }

  Tooltip.prototype.fixTitle = function () {
    var $e = this.$element
    if ($e.attr('title') || typeof $e.attr('data-original-title') != 'string') {
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
    }
  }

  Tooltip.prototype.hasContent = function () {
    return this.getTitle()
  }

  Tooltip.prototype.getPosition = function ($element) {
    $element   = $element || this.$element

    var el     = $element[0]
    var isBody = el.tagName == 'BODY'

    var elRect    = el.getBoundingClientRect()
    if (elRect.width == null) {
      // width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
      elRect = $.extend({}, elRect, { width: elRect.right - elRect.left, height: elRect.bottom - elRect.top })
    }
    var isSvg = window.SVGElement && el instanceof window.SVGElement
    // Avoid using $.offset() on SVGs since it gives incorrect results in jQuery 3.
    // See https://github.com/twbs/bootstrap/issues/20280
    var elOffset  = isBody ? { top: 0, left: 0 } : (isSvg ? null : $element.offset())
    var scroll    = { scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop() }
    var outerDims = isBody ? { width: $(window).width(), height: $(window).height() } : null

    return $.extend({}, elRect, scroll, outerDims, elOffset)
  }

  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width }

  }

  Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {
    var delta = { top: 0, left: 0 }
    if (!this.$viewport) return delta

    var viewportPadding = this.options.viewport && this.options.viewport.padding || 0
    var viewportDimensions = this.getPosition(this.$viewport)

    if (/right|left/.test(placement)) {
      var topEdgeOffset    = pos.top - viewportPadding - viewportDimensions.scroll
      var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight
      if (topEdgeOffset < viewportDimensions.top) { // top overflow
        delta.top = viewportDimensions.top - topEdgeOffset
      } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) { // bottom overflow
        delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset
      }
    } else {
      var leftEdgeOffset  = pos.left - viewportPadding
      var rightEdgeOffset = pos.left + viewportPadding + actualWidth
      if (leftEdgeOffset < viewportDimensions.left) { // left overflow
        delta.left = viewportDimensions.left - leftEdgeOffset
      } else if (rightEdgeOffset > viewportDimensions.right) { // right overflow
        delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset
      }
    }

    return delta
  }

  Tooltip.prototype.getTitle = function () {
    var title
    var $e = this.$element
    var o  = this.options

    title = $e.attr('data-original-title')
      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

    return title
  }

  Tooltip.prototype.getUID = function (prefix) {
    do prefix += ~~(Math.random() * 1000000)
    while (document.getElementById(prefix))
    return prefix
  }

  Tooltip.prototype.tip = function () {
    if (!this.$tip) {
      this.$tip = $(this.options.template)
      if (this.$tip.length != 1) {
        throw new Error(this.type + ' `template` option must consist of exactly 1 top-level element!')
      }
    }
    return this.$tip
  }

  Tooltip.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'))
  }

  Tooltip.prototype.enable = function () {
    this.enabled = true
  }

  Tooltip.prototype.disable = function () {
    this.enabled = false
  }

  Tooltip.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled
  }

  Tooltip.prototype.toggle = function (e) {
    var self = this
    if (e) {
      self = $(e.currentTarget).data('bs.' + this.type)
      if (!self) {
        self = new this.constructor(e.currentTarget, this.getDelegateOptions())
        $(e.currentTarget).data('bs.' + this.type, self)
      }
    }

    if (e) {
      self.inState.click = !self.inState.click
      if (self.isInStateTrue()) self.enter(self)
      else self.leave(self)
    } else {
      self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
    }
  }

  Tooltip.prototype.destroy = function () {
    var that = this
    clearTimeout(this.timeout)
    this.hide(function () {
      that.$element.off('.' + that.type).removeData('bs.' + that.type)
      if (that.$tip) {
        that.$tip.detach()
      }
      that.$tip = null
      that.$arrow = null
      that.$viewport = null
      that.$element = null
    })
  }


  // TOOLTIP PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.tooltip')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tooltip

  $.fn.tooltip             = Plugin
  $.fn.tooltip.Constructor = Tooltip


  // TOOLTIP NO CONFLICT
  // ===================

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }

}(jQuery);



/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/
var jQuery = __webpack_require__(0);

/* ========================================================================
 * Bootstrap: transition.js v3.3.7
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      WebkitTransition : 'webkitTransitionEnd',
      MozTransition    : 'transitionend',
      OTransition      : 'oTransitionEnd otransitionend',
      transition       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }

    return false // explicit for ie8 (  ._.)
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false
    var $el = this
    $(this).one('bsTransitionEnd', function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()

    if (!$.support.transition) return

    $.event.special.bsTransitionEnd = {
      bindType: $.support.transition.end,
      delegateType: $.support.transition.end,
      handle: function (e) {
        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
      }
    }
  })

}(jQuery);



/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(6);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(56)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../css-loader/index.js!../sass-loader/lib/loader.js!./font-awesome-styles.loader.js!./font-awesome.config.js", function() {
			var newContent = require("!!../css-loader/index.js!../sass-loader/lib/loader.js!./font-awesome-styles.loader.js!./font-awesome.config.js");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 56 */
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

var	fixUrls = __webpack_require__(57);

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
/* 57 */
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


/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = "data:application/font-woff2;base64,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"

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = "data:application/font-woff;base64,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"

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// Enable parallax and fade effects on homepage sections.
var $ = __webpack_require__(0);

var parallax = function() {	
	$(window).scroll(function(){

		scrolltop = $(window).scrollTop()
		scrollwindow = scrolltop + $(window).height();

		$("#home-section-1").css("backgroundPosition", "100% " + -(scrolltop/6) + "px");

		if ( $("#home-section-3").length ) {

			sectionthreeoffset = $("#home-section-3").offset().top;

			if( scrollwindow > sectionthreeoffset ) {

				// Enable parallax effect.
				backgroundscroll = scrollwindow - sectionthreeoffset;
				$("#home-section-3").css("backgroundPosition", "50% " + -(backgroundscroll/6) + "px");

			}
		}

		if ( $("#home-section-5").length ) {

			sectionfiveoffset = $("#home-section-5").offset().top;

			if( scrollwindow > sectionfiveoffset ) {

				// Enable parallax effect.
				backgroundscroll = scrollwindow - sectionfiveoffset;
				$("#home-section-5").css("backgroundPosition", "50% " + -(backgroundscroll/6) + "px");

			}

		}

	});
}

module.exports.parallax = parallax;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(0);

var fillFieldsFromParams = function(fields) {
	var urlParams = new URLSearchParams(window.location.search);

	fields.forEach(function(field) {
		if (urlParams.has(field)) {
			$("#" + field).val(urlParams.get(field));
		}
	});
}

module.exports.fillFieldsFromParams = fillFieldsFromParams;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);
__webpack_require__(1);
__webpack_require__(3);
module.exports = __webpack_require__(4);


/***/ })
/******/ ]);