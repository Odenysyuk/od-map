
var globalPowerbi = powerbi;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "assets";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = false;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(define) {/**
 * Globalize v1.6.0
 *
 * http://github.com/jquery/globalize
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2020-09-08T11:54Z
 */
/*!
 * Globalize v1.6.0 2020-09-08T11:54Z Released under the MIT license
 * http://git.io/TrdQbw
 */
(function( root, factory ) {

	// UMD returnExports
	if ( typeof define === "function" && define.amd ) {

		// AMD
		define([
			"cldr",
			"cldr/event"
		], factory );
	} else if ( true ) {

		// Node, CommonJS
		module.exports = factory( __webpack_require__( 2 ) );
	} else {}
}( this, function( Cldr ) {


/**
 * A toString method that outputs meaningful values for objects or arrays and
 * still performs as fast as a plain string in case variable is string, or as
 * fast as `"" + number` in case variable is a number.
 * Ref: http://jsperf.com/my-stringify
 */
var toString = function( variable ) {
	return typeof variable === "string" ? variable : ( typeof variable === "number" ? "" +
		variable : JSON.stringify( variable ) );
};




/**
 * formatMessage( message, data )
 *
 * @message [String] A message with optional {vars} to be replaced.
 *
 * @data [Array or JSON] Object with replacing-variables content.
 *
 * Return the formatted message. For example:
 *
 * - formatMessage( "{0} second", [ 1 ] ); // 1 second
 *
 * - formatMessage( "{0}/{1}", ["m", "s"] ); // m/s
 *
 * - formatMessage( "{name} <{email}>", {
 *     name: "Foo",
 *     email: "bar@baz.qux"
 *   }); // Foo <bar@baz.qux>
 */
var formatMessage = function( message, data ) {

	// Replace {attribute}'s
	message = message.replace( /{[0-9a-zA-Z-_. ]+}/g, function( name ) {
		name = name.replace( /^{([^}]*)}$/, "$1" );
		return toString( data[ name ] );
	});

	return message;
};




var objectExtend = function() {
	var destination = arguments[ 0 ],
		sources = [].slice.call( arguments, 1 );

	sources.forEach(function( source ) {
		var prop;
		for ( prop in source ) {
			destination[ prop ] = source[ prop ];
		}
	});

	return destination;
};




var createError = function( code, message, attributes ) {
	var error;

	message = code + ( message ? ": " + formatMessage( message, attributes ) : "" );
	error = new Error( message );
	error.code = code;

	objectExtend( error, attributes );

	return error;
};




/**
 * Pushes part to parts array, concat two consecutive parts of the same type.
 */
var partsPush = function( parts, type, value ) {

		// Concat two consecutive parts of same type
		if ( parts.length && parts[ parts.length - 1 ].type === type ) {
			parts[ parts.length - 1 ].value += value;
			return;
		}

		parts.push( { type: type, value: value } );
};




/**
 * formatMessage( message, data )
 *
 * @message [String] A message with optional {vars} to be replaced.
 *
 * @data [Array or JSON] Object with replacing-variables content.
 *
 * Return the formatted message. For example:
 *
 * - formatMessage( "{0} second", [ 1 ] );
 * > [{type: "variable", value: "1", name: "0"}, {type: "literal", value: " second"}]
 *
 * - formatMessage( "{0}/{1}", ["m", "s"] );
 * > [
 *     { type: "variable", value: "m", name: "0" },
 *     { type: "literal", value: " /" },
 *     { type: "variable", value: "s", name: "1" }
 *   ]
 */
var formatMessageToParts = function( message, data ) {

	var lastOffset = 0,
		parts = [];

	// Create parts.
	message.replace( /{[0-9a-zA-Z-_. ]+}/g, function( nameIncludingBrackets, offset ) {
		var name = nameIncludingBrackets.slice( 1, -1 );
		partsPush( parts, "literal", message.slice( lastOffset, offset ));
		partsPush( parts, "variable", data[ name ] );
		parts[ parts.length - 1 ].name = name;
		lastOffset += offset + nameIncludingBrackets.length;
	});

	// Skip empty ones such as `{ type: 'literal', value: '' }`.
	return parts.filter(function( part ) {
		return part.value !== "";
	});
};




/**
 * Returns joined parts values.
 */
var partsJoin = function( parts ) {
	return parts.map( function( part ) {
		return part.value;
	}).join( "" );
};




var runtimeStringify = function( args ) {
	return JSON.stringify( args, function( key, value ) {
		if ( value && value.runtimeKey ) {
			return value.runtimeKey;
		}
		return value;
	} );
};




// Based on http://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript-jquery
var stringHash = function( str ) {
	return [].reduce.call( str, function( hash, i ) {
		var chr = i.charCodeAt( 0 );
		hash = ( ( hash << 5 ) - hash ) + chr;
		return hash | 0;
	}, 0 );
};




var runtimeKey = function( fnName, locale, args, argsStr ) {
	var hash;
	argsStr = argsStr || runtimeStringify( args );
	hash = stringHash( fnName + locale + argsStr );
	return hash > 0 ? "a" + hash : "b" + Math.abs( hash );
};




var functionName = function( fn ) {
	if ( fn.name !== undefined ) {
		return fn.name;
	}

	// fn.name is not supported by IE.
	var matches = /^function\s+([\w\$]+)\s*\(/.exec( fn.toString() );

	if ( matches && matches.length > 0 ) {
		return matches[ 1 ];
	}
};




var runtimeBind = function( args, cldr, fn, runtimeArgs ) {

	var argsStr = runtimeStringify( args ),
		fnName = functionName( fn ),
		locale = cldr.locale;

	// If name of the function is not available, this is most likely due to uglification,
	// which most likely means we are in production, and runtimeBind here is not necessary.
	if ( !fnName ) {
		return fn;
	}

	fn.runtimeKey = runtimeKey( fnName, locale, null, argsStr );

	fn.generatorString = function() {
		return "Globalize(\"" + locale + "\")." + fnName + "(" + argsStr.slice( 1, -1 ) + ")";
	};

	fn.runtimeArgs = runtimeArgs;

	return fn;
};




var validate = function( code, message, check, attributes ) {
	if ( !check ) {
		throw createError( code, message, attributes );
	}
};




var alwaysArray = function( stringOrArray ) {
	return Array.isArray( stringOrArray ) ? stringOrArray : stringOrArray ? [ stringOrArray ] : [];
};




var validateCldr = function( path, value, options ) {
	var skipBoolean;
	options = options || {};

	skipBoolean = alwaysArray( options.skip ).some(function( pathRe ) {
		return pathRe.test( path );
	});

	validate( "E_MISSING_CLDR", "Missing required CLDR content `{path}`.", value || skipBoolean, {
		path: path
	});
};




var validateDefaultLocale = function( value ) {
	validate( "E_DEFAULT_LOCALE_NOT_DEFINED", "Default locale has not been defined.",
		value !== undefined, {} );
};




var validateParameterPresence = function( value, name ) {
	validate( "E_MISSING_PARAMETER", "Missing required parameter `{name}`.",
		value !== undefined, { name: name });
};




/**
 * range( value, name, minimum, maximum )
 *
 * @value [Number].
 *
 * @name [String] name of variable.
 *
 * @minimum [Number]. The lowest valid value, inclusive.
 *
 * @maximum [Number]. The greatest valid value, inclusive.
 */
var validateParameterRange = function( value, name, minimum, maximum ) {
	validate(
		"E_PAR_OUT_OF_RANGE",
		"Parameter `{name}` has value `{value}` out of range [{minimum}, {maximum}].",
		value === undefined || value >= minimum && value <= maximum,
		{
			maximum: maximum,
			minimum: minimum,
			name: name,
			value: value
		}
	);
};




var validateParameterType = function( value, name, check, expected ) {
	validate(
		"E_INVALID_PAR_TYPE",
		"Invalid `{name}` parameter ({value}). {expected} expected.",
		check,
		{
			expected: expected,
			name: name,
			value: value
		}
	);
};




var validateParameterTypeLocale = function( value, name ) {
	validateParameterType(
		value,
		name,
		value === undefined || typeof value === "string" || value instanceof Cldr,
		"String or Cldr instance"
	);
};




/**
 * Function inspired by jQuery Core, but reduced to our use case.
 */
var isPlainObject = function( obj ) {
	return obj !== null && "" + obj === "[object Object]";
};




var validateParameterTypePlainObject = function( value, name ) {
	validateParameterType(
		value,
		name,
		value === undefined || isPlainObject( value ),
		"Plain Object"
	);
};




var alwaysCldr = function( localeOrCldr ) {
	return localeOrCldr instanceof Cldr ? localeOrCldr : new Cldr( localeOrCldr );
};




// ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions?redirectlocale=en-US&redirectslug=JavaScript%2FGuide%2FRegular_Expressions
var regexpEscape = function( string ) {
	return string.replace( /([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1" );
};




var stringPad = function( str, count, right ) {
	var length;
	if ( typeof str !== "string" ) {
		str = String( str );
	}
	for ( length = str.length; length < count; length += 1 ) {
		str = ( right ? ( str + "0" ) : ( "0" + str ) );
	}
	return str;
};




function validateLikelySubtags( cldr ) {
	cldr.once( "get", validateCldr );
	cldr.get( "supplemental/likelySubtags" );
}

/**
 * [new] Globalize( locale|cldr )
 *
 * @locale [String]
 *
 * @cldr [Cldr instance]
 *
 * Create a Globalize instance.
 */
function Globalize( locale ) {
	if ( !( this instanceof Globalize ) ) {
		return new Globalize( locale );
	}

	validateParameterPresence( locale, "locale" );
	validateParameterTypeLocale( locale, "locale" );

	this.cldr = alwaysCldr( locale );

	validateLikelySubtags( this.cldr );
}

/**
 * Globalize.load( json, ... )
 *
 * @json [JSON]
 *
 * Load resolved or unresolved cldr data.
 * Somewhat equivalent to previous Globalize.addCultureInfo(...).
 */
Globalize.load = function() {

	// validations are delegated to Cldr.load().
	Cldr.load.apply( Cldr, arguments );
};

/**
 * Globalize.locale( [locale|cldr] )
 *
 * @locale [String]
 *
 * @cldr [Cldr instance]
 *
 * Set default Cldr instance if locale or cldr argument is passed.
 *
 * Return the default Cldr instance.
 */
Globalize.locale = function( locale ) {
	validateParameterTypeLocale( locale, "locale" );

	if ( arguments.length ) {
		this.cldr = alwaysCldr( locale );
		validateLikelySubtags( this.cldr );
	}
	return this.cldr;
};

/**
 * Optimization to avoid duplicating some internal functions across modules.
 */
Globalize._alwaysArray = alwaysArray;
Globalize._createError = createError;
Globalize._formatMessage = formatMessage;
Globalize._formatMessageToParts = formatMessageToParts;
Globalize._isPlainObject = isPlainObject;
Globalize._objectExtend = objectExtend;
Globalize._partsJoin = partsJoin;
Globalize._partsPush = partsPush;
Globalize._regexpEscape = regexpEscape;
Globalize._runtimeBind = runtimeBind;
Globalize._stringPad = stringPad;
Globalize._validate = validate;
Globalize._validateCldr = validateCldr;
Globalize._validateDefaultLocale = validateDefaultLocale;
Globalize._validateParameterPresence = validateParameterPresence;
Globalize._validateParameterRange = validateParameterRange;
Globalize._validateParameterTypePlainObject = validateParameterTypePlainObject;
Globalize._validateParameterType = validateParameterType;

return Globalize;




}));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * CLDR JavaScript Library v0.5.3
 * http://jquery.com/
 *
 * Copyright 2013 Rafael Xavier de Souza
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2020-08-05T21:43Z
 */
/*!
 * CLDR JavaScript Library v0.5.3 2020-08-05T21:43Z MIT license © Rafael Xavier
 * http://git.io/h4lmVg
 */

// Cldr
module.exports = __webpack_require__( 3 );

// Extent Cldr with the following modules
__webpack_require__( 7 );
__webpack_require__( 8 );
__webpack_require__( 9 );


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(define) {/**
 * CLDR JavaScript Library v0.5.3
 * http://jquery.com/
 *
 * Copyright 2013 Rafael Xavier de Souza
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2020-08-05T21:43Z
 */
/*!
 * CLDR JavaScript Library v0.5.3 2020-08-05T21:43Z MIT license © Rafael Xavier
 * http://git.io/h4lmVg
 */
(function( root, factory ) {

	if ( typeof define === "function" && define.amd ) {
		// AMD.
		define( factory );
	} else if (  true && typeof module.exports === "object" ) {
		// Node. CommonJS.
		module.exports = factory();
	} else {
		// Global
		root.Cldr = factory();
	}

}( this, function() {


	var arrayIsArray = Array.isArray || function( obj ) {
		return Object.prototype.toString.call( obj ) === "[object Array]";
	};




	var pathNormalize = function( path, attributes ) {
		if ( arrayIsArray( path ) ) {
			path = path.join( "/" );
		}
		if ( typeof path !== "string" ) {
			throw new Error( "invalid path \"" + path + "\"" );
		}
		// 1: Ignore leading slash `/`
		// 2: Ignore leading `cldr/`
		path = path
			.replace( /^\// , "" ) /* 1 */
			.replace( /^cldr\// , "" ); /* 2 */

		// Replace {attribute}'s
		path = path.replace( /{[a-zA-Z]+}/g, function( name ) {
			name = name.replace( /^{([^}]*)}$/, "$1" );
			return attributes[ name ];
		});

		return path.split( "/" );
	};




	var arraySome = function( array, callback ) {
		var i, length;
		if ( array.some ) {
			return array.some( callback );
		}
		for ( i = 0, length = array.length; i < length; i++ ) {
			if ( callback( array[ i ], i, array ) ) {
				return true;
			}
		}
		return false;
	};




	/**
	 * Return the maximized language id as defined in
	 * http://www.unicode.org/reports/tr35/#Likely_Subtags
	 * 1. Canonicalize.
	 * 1.1 Make sure the input locale is in canonical form: uses the right
	 * separator, and has the right casing.
	 * TODO Right casing? What df? It seems languages are lowercase, scripts are
	 * Capitalized, territory is uppercase. I am leaving this as an exercise to
	 * the user.
	 *
	 * 1.2 Replace any deprecated subtags with their canonical values using the
	 * <alias> data in supplemental metadata. Use the first value in the
	 * replacement list, if it exists. Language tag replacements may have multiple
	 * parts, such as "sh" ➞ "sr_Latn" or mo" ➞ "ro_MD". In such a case, the
	 * original script and/or region are retained if there is one. Thus
	 * "sh_Arab_AQ" ➞ "sr_Arab_AQ", not "sr_Latn_AQ".
	 * TODO What <alias> data?
	 *
	 * 1.3 If the tag is grandfathered (see <variable id="$grandfathered"
	 * type="choice"> in the supplemental data), then return it.
	 * TODO grandfathered?
	 *
	 * 1.4 Remove the script code 'Zzzz' and the region code 'ZZ' if they occur.
	 * 1.5 Get the components of the cleaned-up source tag (languages, scripts,
	 * and regions), plus any variants and extensions.
	 * 2. Lookup. Lookup each of the following in order, and stop on the first
	 * match:
	 * 2.1 languages_scripts_regions
	 * 2.2 languages_regions
	 * 2.3 languages_scripts
	 * 2.4 languages
	 * 2.5 und_scripts
	 * 3. Return
	 * 3.1 If there is no match, either return an error value, or the match for
	 * "und" (in APIs where a valid language tag is required).
	 * 3.2 Otherwise there is a match = languagem_scriptm_regionm
	 * 3.3 Let xr = xs if xs is not empty, and xm otherwise.
	 * 3.4 Return the language tag composed of languager _ scriptr _ regionr +
	 * variants + extensions.
	 *
	 * @subtags [Array] normalized language id subtags tuple (see init.js).
	 */
	var coreLikelySubtags = function( Cldr, cldr, subtags, options ) {
		var match, matchFound,
			language = subtags[ 0 ],
			script = subtags[ 1 ],
			sep = Cldr.localeSep,
			territory = subtags[ 2 ],
			variants = subtags.slice( 3, 4 );
		options = options || {};

		// Skip if (language, script, territory) is not empty [3.3]
		if ( language !== "und" && script !== "Zzzz" && territory !== "ZZ" ) {
			return [ language, script, territory ].concat( variants );
		}

		// Skip if no supplemental likelySubtags data is present
		if ( typeof cldr.get( "supplemental/likelySubtags" ) === "undefined" ) {
			return;
		}

		// [2]
		matchFound = arraySome([
			[ language, script, territory ],
			[ language, territory ],
			[ language, script ],
			[ language ],
			[ "und", script ]
		], function( test ) {
			return match = !(/\b(Zzzz|ZZ)\b/).test( test.join( sep ) ) /* [1.4] */ && cldr.get( [ "supplemental/likelySubtags", test.join( sep ) ] );
		});

		// [3]
		if ( matchFound ) {
			// [3.2 .. 3.4]
			match = match.split( sep );
			return [
				language !== "und" ? language : match[ 0 ],
				script !== "Zzzz" ? script : match[ 1 ],
				territory !== "ZZ" ? territory : match[ 2 ]
			].concat( variants );
		} else if ( options.force ) {
			// [3.1.2]
			return cldr.get( "supplemental/likelySubtags/und" ).split( sep );
		} else {
			// [3.1.1]
			return;
		}
	};



	/**
	 * Given a locale, remove any fields that Add Likely Subtags would add.
	 * http://www.unicode.org/reports/tr35/#Likely_Subtags
	 * 1. First get max = AddLikelySubtags(inputLocale). If an error is signaled,
	 * return it.
	 * 2. Remove the variants from max.
	 * 3. Then for trial in {language, language _ region, language _ script}. If
	 * AddLikelySubtags(trial) = max, then return trial + variants.
	 * 4. If you do not get a match, return max + variants.
	 * 
	 * @maxLanguageId [Array] maxLanguageId tuple (see init.js).
	 */
	var coreRemoveLikelySubtags = function( Cldr, cldr, maxLanguageId ) {
		var match, matchFound,
			language = maxLanguageId[ 0 ],
			script = maxLanguageId[ 1 ],
			territory = maxLanguageId[ 2 ],
			variants = maxLanguageId[ 3 ];

		// [3]
		matchFound = arraySome([
			[ [ language, "Zzzz", "ZZ" ], [ language ] ],
			[ [ language, "Zzzz", territory ], [ language, territory ] ],
			[ [ language, script, "ZZ" ], [ language, script ] ]
		], function( test ) {
			var result = coreLikelySubtags( Cldr, cldr, test[ 0 ] );
			match = test[ 1 ];
			return result && result[ 0 ] === maxLanguageId[ 0 ] &&
				result[ 1 ] === maxLanguageId[ 1 ] &&
				result[ 2 ] === maxLanguageId[ 2 ];
		});

		if ( matchFound ) {
			if ( variants ) {
				match.push( variants );
			}
			return match;
		}

		// [4]
		return maxLanguageId;
	};




	/**
	 * subtags( locale )
	 *
	 * @locale [String]
	 */
	var coreSubtags = function( locale ) {
		var aux, unicodeLanguageId,
			subtags = [];

		locale = locale.replace( /_/, "-" );

		// Unicode locale extensions.
		aux = locale.split( "-u-" );
		if ( aux[ 1 ] ) {
			aux[ 1 ] = aux[ 1 ].split( "-t-" );
			locale = aux[ 0 ] + ( aux[ 1 ][ 1 ] ? "-t-" + aux[ 1 ][ 1 ] : "");
			subtags[ 4 /* unicodeLocaleExtensions */ ] = aux[ 1 ][ 0 ];
		}

		// TODO normalize transformed extensions. Currently, skipped.
		// subtags[ x ] = locale.split( "-t-" )[ 1 ];
		unicodeLanguageId = locale.split( "-t-" )[ 0 ];

		// unicode_language_id = "root"
		//   | unicode_language_subtag         
		//     (sep unicode_script_subtag)? 
		//     (sep unicode_region_subtag)?
		//     (sep unicode_variant_subtag)* ;
		//
		// Although unicode_language_subtag = alpha{2,8}, I'm using alpha{2,3}. Because, there's no language on CLDR lengthier than 3.
		aux = unicodeLanguageId.match( /^(([a-z]{2,3})(-([A-Z][a-z]{3}))?(-([A-Z]{2}|[0-9]{3}))?)((-([a-zA-Z0-9]{5,8}|[0-9][a-zA-Z0-9]{3}))*)$|^(root)$/ );
		if ( aux === null ) {
			return [ "und", "Zzzz", "ZZ" ];
		}
		subtags[ 0 /* language */ ] = aux[ 10 ] /* root */ || aux[ 2 ] || "und";
		subtags[ 1 /* script */ ] = aux[ 4 ] || "Zzzz";
		subtags[ 2 /* territory */ ] = aux[ 6 ] || "ZZ";
		if ( aux[ 7 ] && aux[ 7 ].length ) {
			subtags[ 3 /* variant */ ] = aux[ 7 ].slice( 1 ) /* remove leading "-" */;
		}

		// 0: language
		// 1: script
		// 2: territory (aka region)
		// 3: variant
		// 4: unicodeLocaleExtensions
		return subtags;
	};




	var arrayForEach = function( array, callback ) {
		var i, length;
		if ( array.forEach ) {
			return array.forEach( callback );
		}
		for ( i = 0, length = array.length; i < length; i++ ) {
			callback( array[ i ], i, array );
		}
	};




	/**
	 * bundleLookup( minLanguageId )
	 *
	 * @Cldr [Cldr class]
	 *
	 * @cldr [Cldr instance]
	 *
	 * @minLanguageId [String] requested languageId after applied remove likely subtags.
	 */
	var bundleLookup = function( Cldr, cldr, minLanguageId ) {
		var availableBundleMap = Cldr._availableBundleMap,
			availableBundleMapQueue = Cldr._availableBundleMapQueue;

		if ( availableBundleMapQueue.length ) {
			arrayForEach( availableBundleMapQueue, function( bundle ) {
				var existing, maxBundle, minBundle, subtags;
				subtags = coreSubtags( bundle );
				maxBundle = coreLikelySubtags( Cldr, cldr, subtags );
				if ( maxBundle === undefined ) {
					availableBundleMapQueue.splice( i, 1 );
					throw new Error( "Could not find likelySubtags for " + bundle );
				}
				minBundle = coreRemoveLikelySubtags( Cldr, cldr, maxBundle );
				minBundle = minBundle.join( Cldr.localeSep );
				existing = availableBundleMap[ minBundle ];
				if ( existing && existing.length < bundle.length ) {
					return;
				}
				availableBundleMap[ minBundle ] = bundle;
			});
			Cldr._availableBundleMapQueue = [];
		}

		return availableBundleMap[ minLanguageId ] || null;
	};




	var objectKeys = function( object ) {
		var i,
			result = [];

		if ( Object.keys ) {
			return Object.keys( object );
		}

		for ( i in object ) {
			result.push( i );
		}

		return result;
	};




	var createError = function( code, attributes ) {
		var error, message;

		message = code + ( attributes && JSON ? ": " + JSON.stringify( attributes ) : "" );
		error = new Error( message );
		error.code = code;

		// extend( error, attributes );
		arrayForEach( objectKeys( attributes ), function( attribute ) {
			error[ attribute ] = attributes[ attribute ];
		});

		return error;
	};




	var validate = function( code, check, attributes ) {
		if ( !check ) {
			throw createError( code, attributes );
		}
	};




	var validatePresence = function( value, name ) {
		validate( "E_MISSING_PARAMETER", typeof value !== "undefined", {
			name: name
		});
	};




	var validateType = function( value, name, check, expected ) {
		validate( "E_INVALID_PAR_TYPE", check, {
			expected: expected,
			name: name,
			value: value
		});
	};




	var validateTypePath = function( value, name ) {
		validateType( value, name, typeof value === "string" || arrayIsArray( value ), "String or Array" );
	};




	/**
	 * Function inspired by jQuery Core, but reduced to our use case.
	 */
	var isPlainObject = function( obj ) {
		return obj !== null && "" + obj === "[object Object]";
	};




	var validateTypePlainObject = function( value, name ) {
		validateType( value, name, typeof value === "undefined" || isPlainObject( value ), "Plain Object" );
	};




	var validateTypeString = function( value, name ) {
		validateType( value, name, typeof value === "string", "a string" );
	};




	// @path: normalized path
	var resourceGet = function( data, path ) {
		var i,
			node = data,
			length = path.length;

		for ( i = 0; i < length - 1; i++ ) {
			node = node[ path[ i ] ];
			if ( !node ) {
				return undefined;
			}
		}
		return node[ path[ i ] ];
	};




	/**
	 * setAvailableBundles( Cldr, json )
	 *
	 * @Cldr [Cldr class]
	 *
	 * @json resolved/unresolved cldr data.
	 *
	 * Set available bundles queue based on passed json CLDR data. Considers a bundle as any String at /main/{bundle}.
	 */
	var coreSetAvailableBundles = function( Cldr, json ) {
		var bundle,
			availableBundleMapQueue = Cldr._availableBundleMapQueue,
			main = resourceGet( json, [ "main" ] );

		if ( main ) {
			for ( bundle in main ) {
				if ( main.hasOwnProperty( bundle ) && bundle !== "root" &&
							availableBundleMapQueue.indexOf( bundle ) === -1 ) {
					availableBundleMapQueue.push( bundle );
				}
			}
		}
	};



	var alwaysArray = function( somethingOrArray ) {
		return arrayIsArray( somethingOrArray ) ?  somethingOrArray : [ somethingOrArray ];
	};


	var jsonMerge = (function() {

	// Returns new deeply merged JSON.
	//
	// Eg.
	// merge( { a: { b: 1, c: 2 } }, { a: { b: 3, d: 4 } } )
	// -> { a: { b: 3, c: 2, d: 4 } }
	//
	// @arguments JSON's
	// 
	var merge = function() {
		var destination = {},
			sources = [].slice.call( arguments, 0 );
		arrayForEach( sources, function( source ) {
			var prop;
			for ( prop in source ) {
				if ( prop in destination && typeof destination[ prop ] === "object" && !arrayIsArray( destination[ prop ] ) ) {

					// Merge Objects
					destination[ prop ] = merge( destination[ prop ], source[ prop ] );

				} else {

					// Set new values
					destination[ prop ] = source[ prop ];

				}
			}
		});
		return destination;
	};

	return merge;

}());


	/**
	 * load( Cldr, source, jsons )
	 *
	 * @Cldr [Cldr class]
	 *
	 * @source [Object]
	 *
	 * @jsons [arguments]
	 */
	var coreLoad = function( Cldr, source, jsons ) {
		var i, j, json;

		validatePresence( jsons[ 0 ], "json" );

		// Support arbitrary parameters, e.g., `Cldr.load({...}, {...})`.
		for ( i = 0; i < jsons.length; i++ ) {

			// Support array parameters, e.g., `Cldr.load([{...}, {...}])`.
			json = alwaysArray( jsons[ i ] );

			for ( j = 0; j < json.length; j++ ) {
				validateTypePlainObject( json[ j ], "json" );
				source = jsonMerge( source, json[ j ] );
				coreSetAvailableBundles( Cldr, json[ j ] );
			}
		}

		return source;
	};



	var itemGetResolved = function( Cldr, path, attributes ) {
		// Resolve path
		var normalizedPath = pathNormalize( path, attributes );

		return resourceGet( Cldr._resolved, normalizedPath );
	};




	/**
	 * new Cldr()
	 */
	var Cldr = function( locale ) {
		this.init( locale );
	};

	// Build optimization hack to avoid duplicating functions across modules.
	Cldr._alwaysArray = alwaysArray;
	Cldr._coreLoad = coreLoad;
	Cldr._createError = createError;
	Cldr._itemGetResolved = itemGetResolved;
	Cldr._jsonMerge = jsonMerge;
	Cldr._pathNormalize = pathNormalize;
	Cldr._resourceGet = resourceGet;
	Cldr._validatePresence = validatePresence;
	Cldr._validateType = validateType;
	Cldr._validateTypePath = validateTypePath;
	Cldr._validateTypePlainObject = validateTypePlainObject;

	Cldr._availableBundleMap = {};
	Cldr._availableBundleMapQueue = [];
	Cldr._resolved = {};

	// Allow user to override locale separator "-" (default) | "_". According to http://www.unicode.org/reports/tr35/#Unicode_language_identifier, both "-" and "_" are valid locale separators (eg. "en_GB", "en-GB"). According to http://unicode.org/cldr/trac/ticket/6786 its usage must be consistent throughout the data set.
	Cldr.localeSep = "-";

	/**
	 * Cldr.load( json [, json, ...] )
	 *
	 * @json [JSON] CLDR data or [Array] Array of @json's.
	 *
	 * Load resolved cldr data.
	 */
	Cldr.load = function() {
		Cldr._resolved = coreLoad( Cldr, Cldr._resolved, arguments );
	};

	/**
	 * .init() automatically run on instantiation/construction.
	 */
	Cldr.prototype.init = function( locale ) {
		var attributes, language, maxLanguageId, minLanguageId, script, subtags, territory, unicodeLocaleExtensions, variant,
			sep = Cldr.localeSep,
			unicodeLocaleExtensionsRaw = "";

		validatePresence( locale, "locale" );
		validateTypeString( locale, "locale" );

		subtags = coreSubtags( locale );

		if ( subtags.length === 5 ) {
			unicodeLocaleExtensions = subtags.pop();
			unicodeLocaleExtensionsRaw = sep + "u" + sep + unicodeLocaleExtensions;
			// Remove trailing null when there is unicodeLocaleExtensions but no variants.
			if ( !subtags[ 3 ] ) {
				subtags.pop();
			}
		}
		variant = subtags[ 3 ];

		// Normalize locale code.
		// Get (or deduce) the "triple subtags": language, territory (also aliased as region), and script subtags.
		// Get the variant subtags (calendar, collation, currency, etc).
		// refs:
		// - http://www.unicode.org/reports/tr35/#Field_Definitions
		// - http://www.unicode.org/reports/tr35/#Language_and_Locale_IDs
		// - http://www.unicode.org/reports/tr35/#Unicode_locale_identifier

		// When a locale id does not specify a language, or territory (region), or script, they are obtained by Likely Subtags.
		maxLanguageId = coreLikelySubtags( Cldr, this, subtags, { force: true } ) || subtags;
		language = maxLanguageId[ 0 ];
		script = maxLanguageId[ 1 ];
		territory = maxLanguageId[ 2 ];

		minLanguageId = coreRemoveLikelySubtags( Cldr, this, maxLanguageId ).join( sep );

		// Set attributes
		this.attributes = attributes = {
			bundle: bundleLookup( Cldr, this, minLanguageId ),

			// Unicode Language Id
			minLanguageId: minLanguageId + unicodeLocaleExtensionsRaw,
			maxLanguageId: maxLanguageId.join( sep ) + unicodeLocaleExtensionsRaw,

			// Unicode Language Id Subtabs
			language: language,
			script: script,
			territory: territory,
			region: territory, /* alias */
			variant: variant
		};

		// Unicode locale extensions.
		unicodeLocaleExtensions && ( "-" + unicodeLocaleExtensions ).replace( /-[a-z]{3,8}|(-[a-z]{2})-([a-z]{3,8})/g, function( attribute, key, type ) {

			if ( key ) {

				// Extension is in the `keyword` form.
				attributes[ "u" + key ] = type;
			} else {

				// Extension is in the `attribute` form.
				attributes[ "u" + attribute ] = true;
			}
		});

		this.locale = locale;
	};

	/**
	 * .get()
	 */
	Cldr.prototype.get = function( path ) {

		validatePresence( path, "path" );
		validateTypePath( path, "path" );

		return itemGetResolved( Cldr, path, this.attributes );
	};

	/**
	 * .main()
	 */
	Cldr.prototype.main = function( path ) {
		validatePresence( path, "path" );
		validateTypePath( path, "path" );

		validate( "E_MISSING_BUNDLE", this.attributes.bundle !== null, {
			locale: this.locale
		});

		path = alwaysArray( path );
		return this.get( [ "main/{bundle}" ].concat( path ) );
	};

	return Cldr;




}));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(window, define) {

var powerbi = window.powerbi;

/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var dataview;
            (function (dataview) {
                // TODO: refactor & focus DataViewTransform into a service with well-defined dependencies.
                var DataViewTransform;
                (function (DataViewTransform) {
                    // TODO: refactor this, setGrouped, and groupValues to a test helper to stop using it in the product
                    function createValueColumns(values, valueIdentityFields, source) {
                        if (values === void 0) { values = []; }
                        var result = values;
                        setGrouped(result);
                        if (valueIdentityFields) {
                            result.identityFields = valueIdentityFields;
                        }
                        if (source) {
                            result.source = source;
                        }
                        return result;
                    }
                    DataViewTransform.createValueColumns = createValueColumns;
                    function setGrouped(values, groupedResult) {
                        values.grouped = groupedResult
                            ? function () { return groupedResult; }
                            : function () { return groupValues(values); };
                    }
                    DataViewTransform.setGrouped = setGrouped;
                    /** Group together the values with a common identity. */
                    function groupValues(values) {
                        var groups = [], currentGroup;
                        for (var i = 0, len = values.length; i < len; i++) {
                            var value = values[i];
                            if (!currentGroup || currentGroup.identity !== value.identity) {
                                currentGroup = {
                                    values: []
                                };
                                if (value.identity) {
                                    currentGroup.identity = value.identity;
                                    var source = value.source;
                                    // allow null, which will be formatted as (Blank).
                                    if (source.groupName !== undefined) {
                                        currentGroup.name = source.groupName;
                                    }
                                    else if (source.displayName) {
                                        currentGroup.name = source.displayName;
                                    }
                                }
                                groups.push(currentGroup);
                            }
                            currentGroup.values.push(value);
                        }
                        return groups;
                    }
                    DataViewTransform.groupValues = groupValues;
                })(DataViewTransform = dataview.DataViewTransform || (dataview.DataViewTransform = {}));
            })(dataview = utils.dataview || (utils.dataview = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var dataview;
            (function (dataview) {
                var DataRoleHelper;
                (function (DataRoleHelper) {
                    function getMeasureIndexOfRole(grouped, roleName) {
                        if (!grouped || !grouped.length) {
                            return -1;
                        }
                        var firstGroup = grouped[0];
                        if (firstGroup.values && firstGroup.values.length > 0) {
                            for (var i = 0, len = firstGroup.values.length; i < len; ++i) {
                                var value = firstGroup.values[i];
                                if (value && value.source) {
                                    if (hasRole(value.source, roleName)) {
                                        return i;
                                    }
                                }
                            }
                        }
                        return -1;
                    }
                    DataRoleHelper.getMeasureIndexOfRole = getMeasureIndexOfRole;
                    function getCategoryIndexOfRole(categories, roleName) {
                        if (categories && categories.length) {
                            for (var i = 0, ilen = categories.length; i < ilen; i++) {
                                if (hasRole(categories[i].source, roleName)) {
                                    return i;
                                }
                            }
                        }
                        return -1;
                    }
                    DataRoleHelper.getCategoryIndexOfRole = getCategoryIndexOfRole;
                    function hasRole(column, name) {
                        var roles = column.roles;
                        return roles && roles[name];
                    }
                    DataRoleHelper.hasRole = hasRole;
                    function hasRoleInDataView(dataView, name) {
                        return dataView != null
                            && dataView.metadata != null
                            && dataView.metadata.columns
                            && dataView.metadata.columns.some(function (c) { return c.roles && c.roles[name] !== undefined; }); // any is an alias of some
                    }
                    DataRoleHelper.hasRoleInDataView = hasRoleInDataView;
                    function hasRoleInValueColumn(valueColumn, name) {
                        return valueColumn
                            && valueColumn.source
                            && valueColumn.source.roles
                            && (valueColumn.source.roles[name] === true);
                    }
                    DataRoleHelper.hasRoleInValueColumn = hasRoleInValueColumn;
                })(DataRoleHelper = dataview.DataRoleHelper || (dataview.DataRoleHelper = {}));
            })(dataview = utils.dataview || (utils.dataview = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var dataview;
            (function (dataview) {
                var DataViewObject;
                (function (DataViewObject) {
                    function getValue(object, propertyName, defaultValue) {
                        if (!object) {
                            return defaultValue;
                        }
                        var propertyValue = object[propertyName];
                        if (propertyValue === undefined) {
                            return defaultValue;
                        }
                        return propertyValue;
                    }
                    DataViewObject.getValue = getValue;
                    /** Gets the solid color from a fill property using only a propertyName */
                    function getFillColorByPropertyName(object, propertyName, defaultColor) {
                        var value = getValue(object, propertyName);
                        if (!value || !value.solid) {
                            return defaultColor;
                        }
                        return value.solid.color;
                    }
                    DataViewObject.getFillColorByPropertyName = getFillColorByPropertyName;
                })(DataViewObject = dataview.DataViewObject || (dataview.DataViewObject = {}));
            })(dataview = utils.dataview || (utils.dataview = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var dataview;
            (function (dataview) {
                var DataViewObjects;
                (function (DataViewObjects) {
                    /** Gets the value of the given object/property pair. */
                    function getValue(objects, propertyId, defaultValue) {
                        if (!objects) {
                            return defaultValue;
                        }
                        return dataview.DataViewObject.getValue(objects[propertyId.objectName], propertyId.propertyName, defaultValue);
                    }
                    DataViewObjects.getValue = getValue;
                    /** Gets an object from objects. */
                    function getObject(objects, objectName, defaultValue) {
                        if (objects && objects[objectName]) {
                            return objects[objectName];
                        }
                        return defaultValue;
                    }
                    DataViewObjects.getObject = getObject;
                    /** Gets the solid color from a fill property. */
                    function getFillColor(objects, propertyId, defaultColor) {
                        var value = getValue(objects, propertyId);
                        if (!value || !value.solid) {
                            return defaultColor;
                        }
                        return value.solid.color;
                    }
                    DataViewObjects.getFillColor = getFillColor;
                    function getCommonValue(objects, propertyId, defaultValue) {
                        var value = getValue(objects, propertyId, defaultValue);
                        if (value && value.solid) {
                            return value.solid.color;
                        }
                        if (value === undefined
                            || value === null
                            || (typeof value === "object" && !value.solid)) {
                            return defaultValue;
                        }
                        return value;
                    }
                    DataViewObjects.getCommonValue = getCommonValue;
                })(DataViewObjects = dataview.DataViewObjects || (dataview.DataViewObjects = {}));
            })(dataview = utils.dataview || (utils.dataview = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var dataview;
            (function (dataview) {
                // powerbi.extensibility.utils.dataview
                var DataRoleHelper = powerbi.extensibility.utils.dataview.DataRoleHelper;
                var converterHelper;
                (function (converterHelper) {
                    function categoryIsAlsoSeriesRole(dataView, seriesRoleName, categoryRoleName) {
                        if (dataView.categories && dataView.categories.length > 0) {
                            // Need to pivot data if our category soure is a series role
                            var category = dataView.categories[0];
                            return category.source &&
                                DataRoleHelper.hasRole(category.source, seriesRoleName) &&
                                DataRoleHelper.hasRole(category.source, categoryRoleName);
                        }
                        return false;
                    }
                    converterHelper.categoryIsAlsoSeriesRole = categoryIsAlsoSeriesRole;
                    function getSeriesName(source) {
                        return (source.groupName !== undefined)
                            ? source.groupName
                            : source.queryName;
                    }
                    converterHelper.getSeriesName = getSeriesName;
                    function isImageUrlColumn(column) {
                        var misc = getMiscellaneousTypeDescriptor(column);
                        return misc != null && misc.imageUrl === true;
                    }
                    converterHelper.isImageUrlColumn = isImageUrlColumn;
                    function isWebUrlColumn(column) {
                        var misc = getMiscellaneousTypeDescriptor(column);
                        return misc != null && misc.webUrl === true;
                    }
                    converterHelper.isWebUrlColumn = isWebUrlColumn;
                    function getMiscellaneousTypeDescriptor(column) {
                        return column
                            && column.type
                            && column.type.misc;
                    }
                    converterHelper.getMiscellaneousTypeDescriptor = getMiscellaneousTypeDescriptor;
                    function hasImageUrlColumn(dataView) {
                        if (!dataView || !dataView.metadata || !dataView.metadata.columns || !dataView.metadata.columns.length) {
                            return false;
                        }
                        return dataView.metadata.columns.some(function (column) { return isImageUrlColumn(column) === true; });
                    }
                    converterHelper.hasImageUrlColumn = hasImageUrlColumn;
                })(converterHelper = dataview.converterHelper || (dataview.converterHelper = {}));
            })(dataview = utils.dataview || (utils.dataview = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var dataview;
            (function (dataview) {
                var DataViewObjectsParser = (function () {
                    function DataViewObjectsParser() {
                    }
                    DataViewObjectsParser.getDefault = function () {
                        return new this();
                    };
                    DataViewObjectsParser.createPropertyIdentifier = function (objectName, propertyName) {
                        return {
                            objectName: objectName,
                            propertyName: propertyName
                        };
                    };
                    DataViewObjectsParser.parse = function (dataView) {
                        var dataViewObjectParser = this.getDefault(), properties;
                        if (!dataView || !dataView.metadata || !dataView.metadata.objects) {
                            return dataViewObjectParser;
                        }
                        properties = dataViewObjectParser.getProperties();
                        for (var objectName in properties) {
                            for (var propertyName in properties[objectName]) {
                                var defaultValue = dataViewObjectParser[objectName][propertyName];
                                dataViewObjectParser[objectName][propertyName] = dataview.DataViewObjects.getCommonValue(dataView.metadata.objects, properties[objectName][propertyName], defaultValue);
                            }
                        }
                        return dataViewObjectParser;
                    };
                    DataViewObjectsParser.isPropertyEnumerable = function (propertyName) {
                        return !DataViewObjectsParser.InnumerablePropertyPrefix.test(propertyName);
                    };
                    DataViewObjectsParser.enumerateObjectInstances = function (dataViewObjectParser, options) {
                        var dataViewProperties = dataViewObjectParser && dataViewObjectParser[options.objectName];
                        if (!dataViewProperties) {
                            return [];
                        }
                        var instance = {
                            objectName: options.objectName,
                            selector: null,
                            properties: {}
                        };
                        for (var key in dataViewProperties) {
                            if (dataViewProperties.hasOwnProperty(key)) {
                                instance.properties[key] = dataViewProperties[key];
                            }
                        }
                        return {
                            instances: [instance]
                        };
                    };
                    DataViewObjectsParser.prototype.getProperties = function () {
                        var _this = this;
                        var properties = {}, objectNames = Object.keys(this);
                        objectNames.forEach(function (objectName) {
                            if (DataViewObjectsParser.isPropertyEnumerable(objectName)) {
                                var propertyNames = Object.keys(_this[objectName]);
                                properties[objectName] = {};
                                propertyNames.forEach(function (propertyName) {
                                    if (DataViewObjectsParser.isPropertyEnumerable(objectName)) {
                                        properties[objectName][propertyName] =
                                            DataViewObjectsParser.createPropertyIdentifier(objectName, propertyName);
                                    }
                                });
                            }
                        });
                        return properties;
                    };
                    return DataViewObjectsParser;
                }());
                DataViewObjectsParser.InnumerablePropertyPrefix = /^_/;
                dataview.DataViewObjectsParser = DataViewObjectsParser;
            })(dataview = utils.dataview || (utils.dataview = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));

!function(){function n(n){return n&&(n.ownerDocument||n.document||n).documentElement}function t(n){return n&&(n.ownerDocument&&n.ownerDocument.defaultView||n.document&&n||n.defaultView)}function e(n,t){return t>n?-1:n>t?1:n>=t?0:NaN}function r(n){return null===n?NaN:+n}function i(n){return!isNaN(n)}function u(n){return{left:function(t,e,r,i){for(arguments.length<3&&(r=0),arguments.length<4&&(i=t.length);i>r;){var u=r+i>>>1;n(t[u],e)<0?r=u+1:i=u}return r},right:function(t,e,r,i){for(arguments.length<3&&(r=0),arguments.length<4&&(i=t.length);i>r;){var u=r+i>>>1;n(t[u],e)>0?i=u:r=u+1}return r}}}function o(n){return n.length}function a(n){for(var t=1;n*t%1;)t*=10;return t}function l(n,t){for(var e in t)Object.defineProperty(n.prototype,e,{value:t[e],enumerable:!1})}function c(){this._=Object.create(null)}function f(n){return(n+="")===bo||n[0]===_o?_o+n:n}function s(n){return(n+="")[0]===_o?n.slice(1):n}function h(n){return f(n)in this._}function p(n){return(n=f(n))in this._&&delete this._[n]}function g(){var n=[];for(var t in this._)n.push(s(t));return n}function v(){var n=0;for(var t in this._)++n;return n}function d(){for(var n in this._)return!1;return!0}function y(){this._=Object.create(null)}function m(n){return n}function M(n,t,e){return function(){var r=e.apply(t,arguments);return r===t?n:r}}function x(n,t){if(t in n)return t;t=t.charAt(0).toUpperCase()+t.slice(1);for(var e=0,r=wo.length;r>e;++e){var i=wo[e]+t;if(i in n)return i}}function b(){}function _(){}function w(n){function t(){for(var t,r=e,i=-1,u=r.length;++i<u;)(t=r[i].on)&&t.apply(this,arguments);return n}var e=[],r=new c;return t.on=function(t,i){var u,o=r.get(t);return arguments.length<2?o&&o.on:(o&&(o.on=null,e=e.slice(0,u=e.indexOf(o)).concat(e.slice(u+1)),r.remove(t)),i&&e.push(r.set(t,{on:i})),n)},t}function S(){ao.event.preventDefault()}function k(){for(var n,t=ao.event;n=t.sourceEvent;)t=n;return t}function N(n){for(var t=new _,e=0,r=arguments.length;++e<r;)t[arguments[e]]=w(t);return t.of=function(e,r){return function(i){try{var u=i.sourceEvent=ao.event;i.target=n,ao.event=i,t[i.type].apply(e,r)}finally{ao.event=u}}},t}function E(n){return ko(n,Co),n}function A(n){return"function"==typeof n?n:function(){return No(n,this)}}function C(n){return"function"==typeof n?n:function(){return Eo(n,this)}}function z(n,t){function e(){this.removeAttribute(n)}function r(){this.removeAttributeNS(n.space,n.local)}function i(){this.setAttribute(n,t)}function u(){this.setAttributeNS(n.space,n.local,t)}function o(){var e=t.apply(this,arguments);null==e?this.removeAttribute(n):this.setAttribute(n,e)}function a(){var e=t.apply(this,arguments);null==e?this.removeAttributeNS(n.space,n.local):this.setAttributeNS(n.space,n.local,e)}return n=ao.ns.qualify(n),null==t?n.local?r:e:"function"==typeof t?n.local?a:o:n.local?u:i}function L(n){return n.trim().replace(/\s+/g," ")}function q(n){return new RegExp("(?:^|\\s+)"+ao.requote(n)+"(?:\\s+|$)","g")}function T(n){return(n+"").trim().split(/^|\s+/)}function R(n,t){function e(){for(var e=-1;++e<i;)n[e](this,t)}function r(){for(var e=-1,r=t.apply(this,arguments);++e<i;)n[e](this,r)}n=T(n).map(D);var i=n.length;return"function"==typeof t?r:e}function D(n){var t=q(n);return function(e,r){if(i=e.classList)return r?i.add(n):i.remove(n);var i=e.getAttribute("class")||"";r?(t.lastIndex=0,t.test(i)||e.setAttribute("class",L(i+" "+n))):e.setAttribute("class",L(i.replace(t," ")))}}function P(n,t,e){function r(){this.style.removeProperty(n)}function i(){this.style.setProperty(n,t,e)}function u(){var r=t.apply(this,arguments);null==r?this.style.removeProperty(n):this.style.setProperty(n,r,e)}return null==t?r:"function"==typeof t?u:i}function U(n,t){function e(){delete this[n]}function r(){this[n]=t}function i(){var e=t.apply(this,arguments);null==e?delete this[n]:this[n]=e}return null==t?e:"function"==typeof t?i:r}function j(n){function t(){var t=this.ownerDocument,e=this.namespaceURI;return e===zo&&t.documentElement.namespaceURI===zo?t.createElement(n):t.createElementNS(e,n)}function e(){return this.ownerDocument.createElementNS(n.space,n.local)}return"function"==typeof n?n:(n=ao.ns.qualify(n)).local?e:t}function F(){var n=this.parentNode;n&&n.removeChild(this)}function H(n){return{__data__:n}}function O(n){return function(){return Ao(this,n)}}function I(n){return arguments.length||(n=e),function(t,e){return t&&e?n(t.__data__,e.__data__):!t-!e}}function Y(n,t){for(var e=0,r=n.length;r>e;e++)for(var i,u=n[e],o=0,a=u.length;a>o;o++)(i=u[o])&&t(i,o,e);return n}function Z(n){return ko(n,qo),n}function V(n){var t,e;return function(r,i,u){var o,a=n[u].update,l=a.length;for(u!=e&&(e=u,t=0),i>=t&&(t=i+1);!(o=a[t])&&++t<l;);return o}}function X(n,t,e){function r(){var t=this[o];t&&(this.removeEventListener(n,t,t.$),delete this[o])}function i(){var i=l(t,co(arguments));r.call(this),this.addEventListener(n,this[o]=i,i.$=e),i._=t}function u(){var t,e=new RegExp("^__on([^.]+)"+ao.requote(n)+"$");for(var r in this)if(t=r.match(e)){var i=this[r];this.removeEventListener(t[1],i,i.$),delete this[r]}}var o="__on"+n,a=n.indexOf("."),l=$;a>0&&(n=n.slice(0,a));var c=To.get(n);return c&&(n=c,l=B),a?t?i:r:t?b:u}function $(n,t){return function(e){var r=ao.event;ao.event=e,t[0]=this.__data__;try{n.apply(this,t)}finally{ao.event=r}}}function B(n,t){var e=$(n,t);return function(n){var t=this,r=n.relatedTarget;r&&(r===t||8&r.compareDocumentPosition(t))||e.call(t,n)}}function W(e){var r=".dragsuppress-"+ ++Do,i="click"+r,u=ao.select(t(e)).on("touchmove"+r,S).on("dragstart"+r,S).on("selectstart"+r,S);if(null==Ro&&(Ro="onselectstart"in e?!1:x(e.style,"userSelect")),Ro){var o=n(e).style,a=o[Ro];o[Ro]="none"}return function(n){if(u.on(r,null),Ro&&(o[Ro]=a),n){var t=function(){u.on(i,null)};u.on(i,function(){S(),t()},!0),setTimeout(t,0)}}}function J(n,e){e.changedTouches&&(e=e.changedTouches[0]);var r=n.ownerSVGElement||n;if(r.createSVGPoint){var i=r.createSVGPoint();if(0>Po){var u=t(n);if(u.scrollX||u.scrollY){r=ao.select("body").append("svg").style({position:"absolute",top:0,left:0,margin:0,padding:0,border:"none"},"important");var o=r[0][0].getScreenCTM();Po=!(o.f||o.e),r.remove()}}return Po?(i.x=e.pageX,i.y=e.pageY):(i.x=e.clientX,i.y=e.clientY),i=i.matrixTransform(n.getScreenCTM().inverse()),[i.x,i.y]}var a=n.getBoundingClientRect();return[e.clientX-a.left-n.clientLeft,e.clientY-a.top-n.clientTop]}function G(){return ao.event.changedTouches[0].identifier}function K(n){return n>0?1:0>n?-1:0}function Q(n,t,e){return(t[0]-n[0])*(e[1]-n[1])-(t[1]-n[1])*(e[0]-n[0])}function nn(n){return n>1?0:-1>n?Fo:Math.acos(n)}function tn(n){return n>1?Io:-1>n?-Io:Math.asin(n)}function en(n){return((n=Math.exp(n))-1/n)/2}function rn(n){return((n=Math.exp(n))+1/n)/2}function un(n){return((n=Math.exp(2*n))-1)/(n+1)}function on(n){return(n=Math.sin(n/2))*n}function an(){}function ln(n,t,e){return this instanceof ln?(this.h=+n,this.s=+t,void(this.l=+e)):arguments.length<2?n instanceof ln?new ln(n.h,n.s,n.l):_n(""+n,wn,ln):new ln(n,t,e)}function cn(n,t,e){function r(n){return n>360?n-=360:0>n&&(n+=360),60>n?u+(o-u)*n/60:180>n?o:240>n?u+(o-u)*(240-n)/60:u}function i(n){return Math.round(255*r(n))}var u,o;return n=isNaN(n)?0:(n%=360)<0?n+360:n,t=isNaN(t)?0:0>t?0:t>1?1:t,e=0>e?0:e>1?1:e,o=.5>=e?e*(1+t):e+t-e*t,u=2*e-o,new mn(i(n+120),i(n),i(n-120))}function fn(n,t,e){return this instanceof fn?(this.h=+n,this.c=+t,void(this.l=+e)):arguments.length<2?n instanceof fn?new fn(n.h,n.c,n.l):n instanceof hn?gn(n.l,n.a,n.b):gn((n=Sn((n=ao.rgb(n)).r,n.g,n.b)).l,n.a,n.b):new fn(n,t,e)}function sn(n,t,e){return isNaN(n)&&(n=0),isNaN(t)&&(t=0),new hn(e,Math.cos(n*=Yo)*t,Math.sin(n)*t)}function hn(n,t,e){return this instanceof hn?(this.l=+n,this.a=+t,void(this.b=+e)):arguments.length<2?n instanceof hn?new hn(n.l,n.a,n.b):n instanceof fn?sn(n.h,n.c,n.l):Sn((n=mn(n)).r,n.g,n.b):new hn(n,t,e)}function pn(n,t,e){var r=(n+16)/116,i=r+t/500,u=r-e/200;return i=vn(i)*na,r=vn(r)*ta,u=vn(u)*ea,new mn(yn(3.2404542*i-1.5371385*r-.4985314*u),yn(-.969266*i+1.8760108*r+.041556*u),yn(.0556434*i-.2040259*r+1.0572252*u))}function gn(n,t,e){return n>0?new fn(Math.atan2(e,t)*Zo,Math.sqrt(t*t+e*e),n):new fn(NaN,NaN,n)}function vn(n){return n>.206893034?n*n*n:(n-4/29)/7.787037}function dn(n){return n>.008856?Math.pow(n,1/3):7.787037*n+4/29}function yn(n){return Math.round(255*(.00304>=n?12.92*n:1.055*Math.pow(n,1/2.4)-.055))}function mn(n,t,e){return this instanceof mn?(this.r=~~n,this.g=~~t,void(this.b=~~e)):arguments.length<2?n instanceof mn?new mn(n.r,n.g,n.b):_n(""+n,mn,cn):new mn(n,t,e)}function Mn(n){return new mn(n>>16,n>>8&255,255&n)}function xn(n){return Mn(n)+""}function bn(n){return 16>n?"0"+Math.max(0,n).toString(16):Math.min(255,n).toString(16)}function _n(n,t,e){var r,i,u,o=0,a=0,l=0;if(r=/([a-z]+)\((.*)\)/.exec(n=n.toLowerCase()))switch(i=r[2].split(","),r[1]){case"hsl":return e(parseFloat(i[0]),parseFloat(i[1])/100,parseFloat(i[2])/100);case"rgb":return t(Nn(i[0]),Nn(i[1]),Nn(i[2]))}return(u=ua.get(n))?t(u.r,u.g,u.b):(null==n||"#"!==n.charAt(0)||isNaN(u=parseInt(n.slice(1),16))||(4===n.length?(o=(3840&u)>>4,o=o>>4|o,a=240&u,a=a>>4|a,l=15&u,l=l<<4|l):7===n.length&&(o=(16711680&u)>>16,a=(65280&u)>>8,l=255&u)),t(o,a,l))}function wn(n,t,e){var r,i,u=Math.min(n/=255,t/=255,e/=255),o=Math.max(n,t,e),a=o-u,l=(o+u)/2;return a?(i=.5>l?a/(o+u):a/(2-o-u),r=n==o?(t-e)/a+(e>t?6:0):t==o?(e-n)/a+2:(n-t)/a+4,r*=60):(r=NaN,i=l>0&&1>l?0:r),new ln(r,i,l)}function Sn(n,t,e){n=kn(n),t=kn(t),e=kn(e);var r=dn((.4124564*n+.3575761*t+.1804375*e)/na),i=dn((.2126729*n+.7151522*t+.072175*e)/ta),u=dn((.0193339*n+.119192*t+.9503041*e)/ea);return hn(116*i-16,500*(r-i),200*(i-u))}function kn(n){return(n/=255)<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4)}function Nn(n){var t=parseFloat(n);return"%"===n.charAt(n.length-1)?Math.round(2.55*t):t}function En(n){return"function"==typeof n?n:function(){return n}}function An(n){return function(t,e,r){return 2===arguments.length&&"function"==typeof e&&(r=e,e=null),Cn(t,e,n,r)}}function Cn(n,t,e,r){function i(){var n,t=l.status;if(!t&&Ln(l)||t>=200&&300>t||304===t){try{n=e.call(u,l)}catch(r){return void o.error.call(u,r)}o.load.call(u,n)}else o.error.call(u,l)}var u={},o=ao.dispatch("beforesend","progress","load","error"),a={},l=new XMLHttpRequest,c=null;return!this.XDomainRequest||"withCredentials"in l||!/^(http(s)?:)?\/\//.test(n)||(l=new XDomainRequest),"onload"in l?l.onload=l.onerror=i:l.onreadystatechange=function(){l.readyState>3&&i()},l.onprogress=function(n){var t=ao.event;ao.event=n;try{o.progress.call(u,l)}finally{ao.event=t}},u.header=function(n,t){return n=(n+"").toLowerCase(),arguments.length<2?a[n]:(null==t?delete a[n]:a[n]=t+"",u)},u.mimeType=function(n){return arguments.length?(t=null==n?null:n+"",u):t},u.responseType=function(n){return arguments.length?(c=n,u):c},u.response=function(n){return e=n,u},["get","post"].forEach(function(n){u[n]=function(){return u.send.apply(u,[n].concat(co(arguments)))}}),u.send=function(e,r,i){if(2===arguments.length&&"function"==typeof r&&(i=r,r=null),l.open(e,n,!0),null==t||"accept"in a||(a.accept=t+",*/*"),l.setRequestHeader)for(var f in a)l.setRequestHeader(f,a[f]);return null!=t&&l.overrideMimeType&&l.overrideMimeType(t),null!=c&&(l.responseType=c),null!=i&&u.on("error",i).on("load",function(n){i(null,n)}),o.beforesend.call(u,l),l.send(null==r?null:r),u},u.abort=function(){return l.abort(),u},ao.rebind(u,o,"on"),null==r?u:u.get(zn(r))}function zn(n){return 1===n.length?function(t,e){n(null==t?e:null)}:n}function Ln(n){var t=n.responseType;return t&&"text"!==t?n.response:n.responseText}function qn(n,t,e){var r=arguments.length;2>r&&(t=0),3>r&&(e=Date.now());var i=e+t,u={c:n,t:i,n:null};return aa?aa.n=u:oa=u,aa=u,la||(ca=clearTimeout(ca),la=1,fa(Tn)),u}function Tn(){var n=Rn(),t=Dn()-n;t>24?(isFinite(t)&&(clearTimeout(ca),ca=setTimeout(Tn,t)),la=0):(la=1,fa(Tn))}function Rn(){for(var n=Date.now(),t=oa;t;)n>=t.t&&t.c(n-t.t)&&(t.c=null),t=t.n;return n}function Dn(){for(var n,t=oa,e=1/0;t;)t.c?(t.t<e&&(e=t.t),t=(n=t).n):t=n?n.n=t.n:oa=t.n;return aa=n,e}function Pn(n,t){return t-(n?Math.ceil(Math.log(n)/Math.LN10):1)}function Un(n,t){var e=Math.pow(10,3*xo(8-t));return{scale:t>8?function(n){return n/e}:function(n){return n*e},symbol:n}}function jn(n){var t=n.decimal,e=n.thousands,r=n.grouping,i=n.currency,u=r&&e?function(n,t){for(var i=n.length,u=[],o=0,a=r[0],l=0;i>0&&a>0&&(l+a+1>t&&(a=Math.max(1,t-l)),u.push(n.substring(i-=a,i+a)),!((l+=a+1)>t));)a=r[o=(o+1)%r.length];return u.reverse().join(e)}:m;return function(n){var e=ha.exec(n),r=e[1]||" ",o=e[2]||">",a=e[3]||"-",l=e[4]||"",c=e[5],f=+e[6],s=e[7],h=e[8],p=e[9],g=1,v="",d="",y=!1,m=!0;switch(h&&(h=+h.substring(1)),(c||"0"===r&&"="===o)&&(c=r="0",o="="),p){case"n":s=!0,p="g";break;case"%":g=100,d="%",p="f";break;case"p":g=100,d="%",p="r";break;case"b":case"o":case"x":case"X":"#"===l&&(v="0"+p.toLowerCase());case"c":m=!1;case"d":y=!0,h=0;break;case"s":g=-1,p="r"}"$"===l&&(v=i[0],d=i[1]),"r"!=p||h||(p="g"),null!=h&&("g"==p?h=Math.max(1,Math.min(21,h)):"e"!=p&&"f"!=p||(h=Math.max(0,Math.min(20,h)))),p=pa.get(p)||Fn;var M=c&&s;return function(n){var e=d;if(y&&n%1)return"";var i=0>n||0===n&&0>1/n?(n=-n,"-"):"-"===a?"":a;if(0>g){var l=ao.formatPrefix(n,h);n=l.scale(n),e=l.symbol+d}else n*=g;n=p(n,h);var x,b,_=n.lastIndexOf(".");if(0>_){var w=m?n.lastIndexOf("e"):-1;0>w?(x=n,b=""):(x=n.substring(0,w),b=n.substring(w))}else x=n.substring(0,_),b=t+n.substring(_+1);!c&&s&&(x=u(x,1/0));var S=v.length+x.length+b.length+(M?0:i.length),k=f>S?new Array(S=f-S+1).join(r):"";return M&&(x=u(k+x,k.length?f-b.length:1/0)),i+=v,n=x+b,("<"===o?i+n+k:">"===o?k+i+n:"^"===o?k.substring(0,S>>=1)+i+n+k.substring(S):i+(M?n:k+n))+e}}}function Fn(n){return n+""}function Hn(){this._=new Date(arguments.length>1?Date.UTC.apply(this,arguments):arguments[0])}function On(n,t,e){function r(t){var e=n(t),r=u(e,1);return r-t>t-e?e:r}function i(e){return t(e=n(new va(e-1)),1),e}function u(n,e){return t(n=new va(+n),e),n}function o(n,r,u){var o=i(n),a=[];if(u>1)for(;r>o;)e(o)%u||a.push(new Date(+o)),t(o,1);else for(;r>o;)a.push(new Date(+o)),t(o,1);return a}function a(n,t,e){try{va=Hn;var r=new Hn;return r._=n,o(r,t,e)}finally{va=Date}}n.floor=n,n.round=r,n.ceil=i,n.offset=u,n.range=o;var l=n.utc=In(n);return l.floor=l,l.round=In(r),l.ceil=In(i),l.offset=In(u),l.range=a,n}function In(n){return function(t,e){try{va=Hn;var r=new Hn;return r._=t,n(r,e)._}finally{va=Date}}}function Yn(n){function t(n){function t(t){for(var e,i,u,o=[],a=-1,l=0;++a<r;)37===n.charCodeAt(a)&&(o.push(n.slice(l,a)),null!=(i=ya[e=n.charAt(++a)])&&(e=n.charAt(++a)),(u=A[e])&&(e=u(t,null==i?"e"===e?" ":"0":i)),o.push(e),l=a+1);return o.push(n.slice(l,a)),o.join("")}var r=n.length;return t.parse=function(t){var r={y:1900,m:0,d:1,H:0,M:0,S:0,L:0,Z:null},i=e(r,n,t,0);if(i!=t.length)return null;"p"in r&&(r.H=r.H%12+12*r.p);var u=null!=r.Z&&va!==Hn,o=new(u?Hn:va);return"j"in r?o.setFullYear(r.y,0,r.j):"W"in r||"U"in r?("w"in r||(r.w="W"in r?1:0),o.setFullYear(r.y,0,1),o.setFullYear(r.y,0,"W"in r?(r.w+6)%7+7*r.W-(o.getDay()+5)%7:r.w+7*r.U-(o.getDay()+6)%7)):o.setFullYear(r.y,r.m,r.d),o.setHours(r.H+(r.Z/100|0),r.M+r.Z%100,r.S,r.L),u?o._:o},t.toString=function(){return n},t}function e(n,t,e,r){for(var i,u,o,a=0,l=t.length,c=e.length;l>a;){if(r>=c)return-1;if(i=t.charCodeAt(a++),37===i){if(o=t.charAt(a++),u=C[o in ya?t.charAt(a++):o],!u||(r=u(n,e,r))<0)return-1}else if(i!=e.charCodeAt(r++))return-1}return r}function r(n,t,e){_.lastIndex=0;var r=_.exec(t.slice(e));return r?(n.w=w.get(r[0].toLowerCase()),e+r[0].length):-1}function i(n,t,e){x.lastIndex=0;var r=x.exec(t.slice(e));return r?(n.w=b.get(r[0].toLowerCase()),e+r[0].length):-1}function u(n,t,e){N.lastIndex=0;var r=N.exec(t.slice(e));return r?(n.m=E.get(r[0].toLowerCase()),e+r[0].length):-1}function o(n,t,e){S.lastIndex=0;var r=S.exec(t.slice(e));return r?(n.m=k.get(r[0].toLowerCase()),e+r[0].length):-1}function a(n,t,r){return e(n,A.c.toString(),t,r)}function l(n,t,r){return e(n,A.x.toString(),t,r)}function c(n,t,r){return e(n,A.X.toString(),t,r)}function f(n,t,e){var r=M.get(t.slice(e,e+=2).toLowerCase());return null==r?-1:(n.p=r,e)}var s=n.dateTime,h=n.date,p=n.time,g=n.periods,v=n.days,d=n.shortDays,y=n.months,m=n.shortMonths;t.utc=function(n){function e(n){try{va=Hn;var t=new va;return t._=n,r(t)}finally{va=Date}}var r=t(n);return e.parse=function(n){try{va=Hn;var t=r.parse(n);return t&&t._}finally{va=Date}},e.toString=r.toString,e},t.multi=t.utc.multi=ct;var M=ao.map(),x=Vn(v),b=Xn(v),_=Vn(d),w=Xn(d),S=Vn(y),k=Xn(y),N=Vn(m),E=Xn(m);g.forEach(function(n,t){M.set(n.toLowerCase(),t)});var A={a:function(n){return d[n.getDay()]},A:function(n){return v[n.getDay()]},b:function(n){return m[n.getMonth()]},B:function(n){return y[n.getMonth()]},c:t(s),d:function(n,t){return Zn(n.getDate(),t,2)},e:function(n,t){return Zn(n.getDate(),t,2)},H:function(n,t){return Zn(n.getHours(),t,2)},I:function(n,t){return Zn(n.getHours()%12||12,t,2)},j:function(n,t){return Zn(1+ga.dayOfYear(n),t,3)},L:function(n,t){return Zn(n.getMilliseconds(),t,3)},m:function(n,t){return Zn(n.getMonth()+1,t,2)},M:function(n,t){return Zn(n.getMinutes(),t,2)},p:function(n){return g[+(n.getHours()>=12)]},S:function(n,t){return Zn(n.getSeconds(),t,2)},U:function(n,t){return Zn(ga.sundayOfYear(n),t,2)},w:function(n){return n.getDay()},W:function(n,t){return Zn(ga.mondayOfYear(n),t,2)},x:t(h),X:t(p),y:function(n,t){return Zn(n.getFullYear()%100,t,2)},Y:function(n,t){return Zn(n.getFullYear()%1e4,t,4)},Z:at,"%":function(){return"%"}},C={a:r,A:i,b:u,B:o,c:a,d:tt,e:tt,H:rt,I:rt,j:et,L:ot,m:nt,M:it,p:f,S:ut,U:Bn,w:$n,W:Wn,x:l,X:c,y:Gn,Y:Jn,Z:Kn,"%":lt};return t}function Zn(n,t,e){var r=0>n?"-":"",i=(r?-n:n)+"",u=i.length;return r+(e>u?new Array(e-u+1).join(t)+i:i)}function Vn(n){return new RegExp("^(?:"+n.map(ao.requote).join("|")+")","i")}function Xn(n){for(var t=new c,e=-1,r=n.length;++e<r;)t.set(n[e].toLowerCase(),e);return t}function $n(n,t,e){ma.lastIndex=0;var r=ma.exec(t.slice(e,e+1));return r?(n.w=+r[0],e+r[0].length):-1}function Bn(n,t,e){ma.lastIndex=0;var r=ma.exec(t.slice(e));return r?(n.U=+r[0],e+r[0].length):-1}function Wn(n,t,e){ma.lastIndex=0;var r=ma.exec(t.slice(e));return r?(n.W=+r[0],e+r[0].length):-1}function Jn(n,t,e){ma.lastIndex=0;var r=ma.exec(t.slice(e,e+4));return r?(n.y=+r[0],e+r[0].length):-1}function Gn(n,t,e){ma.lastIndex=0;var r=ma.exec(t.slice(e,e+2));return r?(n.y=Qn(+r[0]),e+r[0].length):-1}function Kn(n,t,e){return/^[+-]\d{4}$/.test(t=t.slice(e,e+5))?(n.Z=-t,e+5):-1}function Qn(n){return n+(n>68?1900:2e3)}function nt(n,t,e){ma.lastIndex=0;var r=ma.exec(t.slice(e,e+2));return r?(n.m=r[0]-1,e+r[0].length):-1}function tt(n,t,e){ma.lastIndex=0;var r=ma.exec(t.slice(e,e+2));return r?(n.d=+r[0],e+r[0].length):-1}function et(n,t,e){ma.lastIndex=0;var r=ma.exec(t.slice(e,e+3));return r?(n.j=+r[0],e+r[0].length):-1}function rt(n,t,e){ma.lastIndex=0;var r=ma.exec(t.slice(e,e+2));return r?(n.H=+r[0],e+r[0].length):-1}function it(n,t,e){ma.lastIndex=0;var r=ma.exec(t.slice(e,e+2));return r?(n.M=+r[0],e+r[0].length):-1}function ut(n,t,e){ma.lastIndex=0;var r=ma.exec(t.slice(e,e+2));return r?(n.S=+r[0],e+r[0].length):-1}function ot(n,t,e){ma.lastIndex=0;var r=ma.exec(t.slice(e,e+3));return r?(n.L=+r[0],e+r[0].length):-1}function at(n){var t=n.getTimezoneOffset(),e=t>0?"-":"+",r=xo(t)/60|0,i=xo(t)%60;return e+Zn(r,"0",2)+Zn(i,"0",2)}function lt(n,t,e){Ma.lastIndex=0;var r=Ma.exec(t.slice(e,e+1));return r?e+r[0].length:-1}function ct(n){for(var t=n.length,e=-1;++e<t;)n[e][0]=this(n[e][0]);return function(t){for(var e=0,r=n[e];!r[1](t);)r=n[++e];return r[0](t)}}function ft(){}function st(n,t,e){var r=e.s=n+t,i=r-n,u=r-i;e.t=n-u+(t-i)}function ht(n,t){n&&wa.hasOwnProperty(n.type)&&wa[n.type](n,t)}function pt(n,t,e){var r,i=-1,u=n.length-e;for(t.lineStart();++i<u;)r=n[i],t.point(r[0],r[1],r[2]);t.lineEnd()}function gt(n,t){var e=-1,r=n.length;for(t.polygonStart();++e<r;)pt(n[e],t,1);t.polygonEnd()}function vt(){function n(n,t){n*=Yo,t=t*Yo/2+Fo/4;var e=n-r,o=e>=0?1:-1,a=o*e,l=Math.cos(t),c=Math.sin(t),f=u*c,s=i*l+f*Math.cos(a),h=f*o*Math.sin(a);ka.add(Math.atan2(h,s)),r=n,i=l,u=c}var t,e,r,i,u;Na.point=function(o,a){Na.point=n,r=(t=o)*Yo,i=Math.cos(a=(e=a)*Yo/2+Fo/4),u=Math.sin(a)},Na.lineEnd=function(){n(t,e)}}function dt(n){var t=n[0],e=n[1],r=Math.cos(e);return[r*Math.cos(t),r*Math.sin(t),Math.sin(e)]}function yt(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]}function mt(n,t){return[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]]}function Mt(n,t){n[0]+=t[0],n[1]+=t[1],n[2]+=t[2]}function xt(n,t){return[n[0]*t,n[1]*t,n[2]*t]}function bt(n){var t=Math.sqrt(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);n[0]/=t,n[1]/=t,n[2]/=t}function _t(n){return[Math.atan2(n[1],n[0]),tn(n[2])]}function wt(n,t){return xo(n[0]-t[0])<Uo&&xo(n[1]-t[1])<Uo}function St(n,t){n*=Yo;var e=Math.cos(t*=Yo);kt(e*Math.cos(n),e*Math.sin(n),Math.sin(t))}function kt(n,t,e){++Ea,Ca+=(n-Ca)/Ea,za+=(t-za)/Ea,La+=(e-La)/Ea}function Nt(){function n(n,i){n*=Yo;var u=Math.cos(i*=Yo),o=u*Math.cos(n),a=u*Math.sin(n),l=Math.sin(i),c=Math.atan2(Math.sqrt((c=e*l-r*a)*c+(c=r*o-t*l)*c+(c=t*a-e*o)*c),t*o+e*a+r*l);Aa+=c,qa+=c*(t+(t=o)),Ta+=c*(e+(e=a)),Ra+=c*(r+(r=l)),kt(t,e,r)}var t,e,r;ja.point=function(i,u){i*=Yo;var o=Math.cos(u*=Yo);t=o*Math.cos(i),e=o*Math.sin(i),r=Math.sin(u),ja.point=n,kt(t,e,r)}}function Et(){ja.point=St}function At(){function n(n,t){n*=Yo;var e=Math.cos(t*=Yo),o=e*Math.cos(n),a=e*Math.sin(n),l=Math.sin(t),c=i*l-u*a,f=u*o-r*l,s=r*a-i*o,h=Math.sqrt(c*c+f*f+s*s),p=r*o+i*a+u*l,g=h&&-nn(p)/h,v=Math.atan2(h,p);Da+=g*c,Pa+=g*f,Ua+=g*s,Aa+=v,qa+=v*(r+(r=o)),Ta+=v*(i+(i=a)),Ra+=v*(u+(u=l)),kt(r,i,u)}var t,e,r,i,u;ja.point=function(o,a){t=o,e=a,ja.point=n,o*=Yo;var l=Math.cos(a*=Yo);r=l*Math.cos(o),i=l*Math.sin(o),u=Math.sin(a),kt(r,i,u)},ja.lineEnd=function(){n(t,e),ja.lineEnd=Et,ja.point=St}}function Ct(n,t){function e(e,r){return e=n(e,r),t(e[0],e[1])}return n.invert&&t.invert&&(e.invert=function(e,r){return e=t.invert(e,r),e&&n.invert(e[0],e[1])}),e}function zt(){return!0}function Lt(n,t,e,r,i){var u=[],o=[];if(n.forEach(function(n){if(!((t=n.length-1)<=0)){var t,e=n[0],r=n[t];if(wt(e,r)){i.lineStart();for(var a=0;t>a;++a)i.point((e=n[a])[0],e[1]);return void i.lineEnd()}var l=new Tt(e,n,null,!0),c=new Tt(e,null,l,!1);l.o=c,u.push(l),o.push(c),l=new Tt(r,n,null,!1),c=new Tt(r,null,l,!0),l.o=c,u.push(l),o.push(c)}}),o.sort(t),qt(u),qt(o),u.length){for(var a=0,l=e,c=o.length;c>a;++a)o[a].e=l=!l;for(var f,s,h=u[0];;){for(var p=h,g=!0;p.v;)if((p=p.n)===h)return;f=p.z,i.lineStart();do{if(p.v=p.o.v=!0,p.e){if(g)for(var a=0,c=f.length;c>a;++a)i.point((s=f[a])[0],s[1]);else r(p.x,p.n.x,1,i);p=p.n}else{if(g){f=p.p.z;for(var a=f.length-1;a>=0;--a)i.point((s=f[a])[0],s[1])}else r(p.x,p.p.x,-1,i);p=p.p}p=p.o,f=p.z,g=!g}while(!p.v);i.lineEnd()}}}function qt(n){if(t=n.length){for(var t,e,r=0,i=n[0];++r<t;)i.n=e=n[r],e.p=i,i=e;i.n=e=n[0],e.p=i}}function Tt(n,t,e,r){this.x=n,this.z=t,this.o=e,this.e=r,this.v=!1,this.n=this.p=null}function Rt(n,t,e,r){return function(i,u){function o(t,e){var r=i(t,e);n(t=r[0],e=r[1])&&u.point(t,e)}function a(n,t){var e=i(n,t);d.point(e[0],e[1])}function l(){m.point=a,d.lineStart()}function c(){m.point=o,d.lineEnd()}function f(n,t){v.push([n,t]);var e=i(n,t);x.point(e[0],e[1])}function s(){x.lineStart(),v=[]}function h(){f(v[0][0],v[0][1]),x.lineEnd();var n,t=x.clean(),e=M.buffer(),r=e.length;if(v.pop(),g.push(v),v=null,r)if(1&t){n=e[0];var i,r=n.length-1,o=-1;if(r>0){for(b||(u.polygonStart(),b=!0),u.lineStart();++o<r;)u.point((i=n[o])[0],i[1]);u.lineEnd()}}else r>1&&2&t&&e.push(e.pop().concat(e.shift())),p.push(e.filter(Dt))}var p,g,v,d=t(u),y=i.invert(r[0],r[1]),m={point:o,lineStart:l,lineEnd:c,polygonStart:function(){m.point=f,m.lineStart=s,m.lineEnd=h,p=[],g=[]},polygonEnd:function(){m.point=o,m.lineStart=l,m.lineEnd=c,p=ao.merge(p);var n=Ot(y,g);p.length?(b||(u.polygonStart(),b=!0),Lt(p,Ut,n,e,u)):n&&(b||(u.polygonStart(),b=!0),u.lineStart(),e(null,null,1,u),u.lineEnd()),b&&(u.polygonEnd(),b=!1),p=g=null},sphere:function(){u.polygonStart(),u.lineStart(),e(null,null,1,u),u.lineEnd(),u.polygonEnd()}},M=Pt(),x=t(M),b=!1;return m}}function Dt(n){return n.length>1}function Pt(){var n,t=[];return{lineStart:function(){t.push(n=[])},point:function(t,e){n.push([t,e])},lineEnd:b,buffer:function(){var e=t;return t=[],n=null,e},rejoin:function(){t.length>1&&t.push(t.pop().concat(t.shift()))}}}function Ut(n,t){return((n=n.x)[0]<0?n[1]-Io-Uo:Io-n[1])-((t=t.x)[0]<0?t[1]-Io-Uo:Io-t[1])}function jt(n){var t,e=NaN,r=NaN,i=NaN;return{lineStart:function(){n.lineStart(),t=1},point:function(u,o){var a=u>0?Fo:-Fo,l=xo(u-e);xo(l-Fo)<Uo?(n.point(e,r=(r+o)/2>0?Io:-Io),n.point(i,r),n.lineEnd(),n.lineStart(),n.point(a,r),n.point(u,r),t=0):i!==a&&l>=Fo&&(xo(e-i)<Uo&&(e-=i*Uo),xo(u-a)<Uo&&(u-=a*Uo),r=Ft(e,r,u,o),n.point(i,r),n.lineEnd(),n.lineStart(),n.point(a,r),t=0),n.point(e=u,r=o),i=a},lineEnd:function(){n.lineEnd(),e=r=NaN},clean:function(){return 2-t}}}function Ft(n,t,e,r){var i,u,o=Math.sin(n-e);return xo(o)>Uo?Math.atan((Math.sin(t)*(u=Math.cos(r))*Math.sin(e)-Math.sin(r)*(i=Math.cos(t))*Math.sin(n))/(i*u*o)):(t+r)/2}function Ht(n,t,e,r){var i;if(null==n)i=e*Io,r.point(-Fo,i),r.point(0,i),r.point(Fo,i),r.point(Fo,0),r.point(Fo,-i),r.point(0,-i),r.point(-Fo,-i),r.point(-Fo,0),r.point(-Fo,i);else if(xo(n[0]-t[0])>Uo){var u=n[0]<t[0]?Fo:-Fo;i=e*u/2,r.point(-u,i),r.point(0,i),r.point(u,i)}else r.point(t[0],t[1])}function Ot(n,t){var e=n[0],r=n[1],i=[Math.sin(e),-Math.cos(e),0],u=0,o=0;ka.reset();for(var a=0,l=t.length;l>a;++a){var c=t[a],f=c.length;if(f)for(var s=c[0],h=s[0],p=s[1]/2+Fo/4,g=Math.sin(p),v=Math.cos(p),d=1;;){d===f&&(d=0),n=c[d];var y=n[0],m=n[1]/2+Fo/4,M=Math.sin(m),x=Math.cos(m),b=y-h,_=b>=0?1:-1,w=_*b,S=w>Fo,k=g*M;if(ka.add(Math.atan2(k*_*Math.sin(w),v*x+k*Math.cos(w))),u+=S?b+_*Ho:b,S^h>=e^y>=e){var N=mt(dt(s),dt(n));bt(N);var E=mt(i,N);bt(E);var A=(S^b>=0?-1:1)*tn(E[2]);(r>A||r===A&&(N[0]||N[1]))&&(o+=S^b>=0?1:-1)}if(!d++)break;h=y,g=M,v=x,s=n}}return(-Uo>u||Uo>u&&-Uo>ka)^1&o}function It(n){function t(n,t){return Math.cos(n)*Math.cos(t)>u}function e(n){var e,u,l,c,f;return{lineStart:function(){c=l=!1,f=1},point:function(s,h){var p,g=[s,h],v=t(s,h),d=o?v?0:i(s,h):v?i(s+(0>s?Fo:-Fo),h):0;if(!e&&(c=l=v)&&n.lineStart(),v!==l&&(p=r(e,g),(wt(e,p)||wt(g,p))&&(g[0]+=Uo,g[1]+=Uo,v=t(g[0],g[1]))),v!==l)f=0,v?(n.lineStart(),p=r(g,e),n.point(p[0],p[1])):(p=r(e,g),n.point(p[0],p[1]),n.lineEnd()),e=p;else if(a&&e&&o^v){var y;d&u||!(y=r(g,e,!0))||(f=0,o?(n.lineStart(),n.point(y[0][0],y[0][1]),n.point(y[1][0],y[1][1]),n.lineEnd()):(n.point(y[1][0],y[1][1]),n.lineEnd(),n.lineStart(),n.point(y[0][0],y[0][1])))}!v||e&&wt(e,g)||n.point(g[0],g[1]),e=g,l=v,u=d},lineEnd:function(){l&&n.lineEnd(),e=null},clean:function(){return f|(c&&l)<<1}}}function r(n,t,e){var r=dt(n),i=dt(t),o=[1,0,0],a=mt(r,i),l=yt(a,a),c=a[0],f=l-c*c;if(!f)return!e&&n;var s=u*l/f,h=-u*c/f,p=mt(o,a),g=xt(o,s),v=xt(a,h);Mt(g,v);var d=p,y=yt(g,d),m=yt(d,d),M=y*y-m*(yt(g,g)-1);if(!(0>M)){var x=Math.sqrt(M),b=xt(d,(-y-x)/m);if(Mt(b,g),b=_t(b),!e)return b;var _,w=n[0],S=t[0],k=n[1],N=t[1];w>S&&(_=w,w=S,S=_);var E=S-w,A=xo(E-Fo)<Uo,C=A||Uo>E;if(!A&&k>N&&(_=k,k=N,N=_),C?A?k+N>0^b[1]<(xo(b[0]-w)<Uo?k:N):k<=b[1]&&b[1]<=N:E>Fo^(w<=b[0]&&b[0]<=S)){var z=xt(d,(-y+x)/m);return Mt(z,g),[b,_t(z)]}}}function i(t,e){var r=o?n:Fo-n,i=0;return-r>t?i|=1:t>r&&(i|=2),-r>e?i|=4:e>r&&(i|=8),i}var u=Math.cos(n),o=u>0,a=xo(u)>Uo,l=ve(n,6*Yo);return Rt(t,e,l,o?[0,-n]:[-Fo,n-Fo])}function Yt(n,t,e,r){return function(i){var u,o=i.a,a=i.b,l=o.x,c=o.y,f=a.x,s=a.y,h=0,p=1,g=f-l,v=s-c;if(u=n-l,g||!(u>0)){if(u/=g,0>g){if(h>u)return;p>u&&(p=u)}else if(g>0){if(u>p)return;u>h&&(h=u)}if(u=e-l,g||!(0>u)){if(u/=g,0>g){if(u>p)return;u>h&&(h=u)}else if(g>0){if(h>u)return;p>u&&(p=u)}if(u=t-c,v||!(u>0)){if(u/=v,0>v){if(h>u)return;p>u&&(p=u)}else if(v>0){if(u>p)return;u>h&&(h=u)}if(u=r-c,v||!(0>u)){if(u/=v,0>v){if(u>p)return;u>h&&(h=u)}else if(v>0){if(h>u)return;p>u&&(p=u)}return h>0&&(i.a={x:l+h*g,y:c+h*v}),1>p&&(i.b={x:l+p*g,y:c+p*v}),i}}}}}}function Zt(n,t,e,r){function i(r,i){return xo(r[0]-n)<Uo?i>0?0:3:xo(r[0]-e)<Uo?i>0?2:1:xo(r[1]-t)<Uo?i>0?1:0:i>0?3:2}function u(n,t){return o(n.x,t.x)}function o(n,t){var e=i(n,1),r=i(t,1);return e!==r?e-r:0===e?t[1]-n[1]:1===e?n[0]-t[0]:2===e?n[1]-t[1]:t[0]-n[0]}return function(a){function l(n){for(var t=0,e=d.length,r=n[1],i=0;e>i;++i)for(var u,o=1,a=d[i],l=a.length,c=a[0];l>o;++o)u=a[o],c[1]<=r?u[1]>r&&Q(c,u,n)>0&&++t:u[1]<=r&&Q(c,u,n)<0&&--t,c=u;return 0!==t}function c(u,a,l,c){var f=0,s=0;if(null==u||(f=i(u,l))!==(s=i(a,l))||o(u,a)<0^l>0){do c.point(0===f||3===f?n:e,f>1?r:t);while((f=(f+l+4)%4)!==s)}else c.point(a[0],a[1])}function f(i,u){return i>=n&&e>=i&&u>=t&&r>=u}function s(n,t){f(n,t)&&a.point(n,t)}function h(){C.point=g,d&&d.push(y=[]),S=!0,w=!1,b=_=NaN}function p(){v&&(g(m,M),x&&w&&E.rejoin(),v.push(E.buffer())),C.point=s,w&&a.lineEnd()}function g(n,t){n=Math.max(-Ha,Math.min(Ha,n)),t=Math.max(-Ha,Math.min(Ha,t));var e=f(n,t);if(d&&y.push([n,t]),S)m=n,M=t,x=e,S=!1,e&&(a.lineStart(),a.point(n,t));else if(e&&w)a.point(n,t);else{var r={a:{x:b,y:_},b:{x:n,y:t}};A(r)?(w||(a.lineStart(),a.point(r.a.x,r.a.y)),a.point(r.b.x,r.b.y),e||a.lineEnd(),k=!1):e&&(a.lineStart(),a.point(n,t),k=!1)}b=n,_=t,w=e}var v,d,y,m,M,x,b,_,w,S,k,N=a,E=Pt(),A=Yt(n,t,e,r),C={point:s,lineStart:h,lineEnd:p,polygonStart:function(){a=E,v=[],d=[],k=!0},polygonEnd:function(){a=N,v=ao.merge(v);var t=l([n,r]),e=k&&t,i=v.length;(e||i)&&(a.polygonStart(),e&&(a.lineStart(),c(null,null,1,a),a.lineEnd()),i&&Lt(v,u,t,c,a),a.polygonEnd()),v=d=y=null}};return C}}function Vt(n){var t=0,e=Fo/3,r=ae(n),i=r(t,e);return i.parallels=function(n){return arguments.length?r(t=n[0]*Fo/180,e=n[1]*Fo/180):[t/Fo*180,e/Fo*180]},i}function Xt(n,t){function e(n,t){var e=Math.sqrt(u-2*i*Math.sin(t))/i;return[e*Math.sin(n*=i),o-e*Math.cos(n)]}var r=Math.sin(n),i=(r+Math.sin(t))/2,u=1+r*(2*i-r),o=Math.sqrt(u)/i;return e.invert=function(n,t){var e=o-t;return[Math.atan2(n,e)/i,tn((u-(n*n+e*e)*i*i)/(2*i))]},e}function $t(){function n(n,t){Ia+=i*n-r*t,r=n,i=t}var t,e,r,i;$a.point=function(u,o){$a.point=n,t=r=u,e=i=o},$a.lineEnd=function(){n(t,e)}}function Bt(n,t){Ya>n&&(Ya=n),n>Va&&(Va=n),Za>t&&(Za=t),t>Xa&&(Xa=t)}function Wt(){function n(n,t){o.push("M",n,",",t,u)}function t(n,t){o.push("M",n,",",t),a.point=e}function e(n,t){o.push("L",n,",",t)}function r(){a.point=n}function i(){o.push("Z")}var u=Jt(4.5),o=[],a={point:n,lineStart:function(){a.point=t},lineEnd:r,polygonStart:function(){a.lineEnd=i},polygonEnd:function(){a.lineEnd=r,a.point=n},pointRadius:function(n){return u=Jt(n),a},result:function(){if(o.length){var n=o.join("");return o=[],n}}};return a}function Jt(n){return"m0,"+n+"a"+n+","+n+" 0 1,1 0,"+-2*n+"a"+n+","+n+" 0 1,1 0,"+2*n+"z"}function Gt(n,t){Ca+=n,za+=t,++La}function Kt(){function n(n,r){var i=n-t,u=r-e,o=Math.sqrt(i*i+u*u);qa+=o*(t+n)/2,Ta+=o*(e+r)/2,Ra+=o,Gt(t=n,e=r)}var t,e;Wa.point=function(r,i){Wa.point=n,Gt(t=r,e=i)}}function Qt(){Wa.point=Gt}function ne(){function n(n,t){var e=n-r,u=t-i,o=Math.sqrt(e*e+u*u);qa+=o*(r+n)/2,Ta+=o*(i+t)/2,Ra+=o,o=i*n-r*t,Da+=o*(r+n),Pa+=o*(i+t),Ua+=3*o,Gt(r=n,i=t)}var t,e,r,i;Wa.point=function(u,o){Wa.point=n,Gt(t=r=u,e=i=o)},Wa.lineEnd=function(){n(t,e)}}function te(n){function t(t,e){n.moveTo(t+o,e),n.arc(t,e,o,0,Ho)}function e(t,e){n.moveTo(t,e),a.point=r}function r(t,e){n.lineTo(t,e)}function i(){a.point=t}function u(){n.closePath()}var o=4.5,a={point:t,lineStart:function(){a.point=e},lineEnd:i,polygonStart:function(){a.lineEnd=u},polygonEnd:function(){a.lineEnd=i,a.point=t},pointRadius:function(n){return o=n,a},result:b};return a}function ee(n){function t(n){return(a?r:e)(n)}function e(t){return ue(t,function(e,r){e=n(e,r),t.point(e[0],e[1])})}function r(t){function e(e,r){e=n(e,r),t.point(e[0],e[1])}function r(){M=NaN,S.point=u,t.lineStart()}function u(e,r){var u=dt([e,r]),o=n(e,r);i(M,x,m,b,_,w,M=o[0],x=o[1],m=e,b=u[0],_=u[1],w=u[2],a,t),t.point(M,x)}function o(){S.point=e,t.lineEnd()}function l(){
r(),S.point=c,S.lineEnd=f}function c(n,t){u(s=n,h=t),p=M,g=x,v=b,d=_,y=w,S.point=u}function f(){i(M,x,m,b,_,w,p,g,s,v,d,y,a,t),S.lineEnd=o,o()}var s,h,p,g,v,d,y,m,M,x,b,_,w,S={point:e,lineStart:r,lineEnd:o,polygonStart:function(){t.polygonStart(),S.lineStart=l},polygonEnd:function(){t.polygonEnd(),S.lineStart=r}};return S}function i(t,e,r,a,l,c,f,s,h,p,g,v,d,y){var m=f-t,M=s-e,x=m*m+M*M;if(x>4*u&&d--){var b=a+p,_=l+g,w=c+v,S=Math.sqrt(b*b+_*_+w*w),k=Math.asin(w/=S),N=xo(xo(w)-1)<Uo||xo(r-h)<Uo?(r+h)/2:Math.atan2(_,b),E=n(N,k),A=E[0],C=E[1],z=A-t,L=C-e,q=M*z-m*L;(q*q/x>u||xo((m*z+M*L)/x-.5)>.3||o>a*p+l*g+c*v)&&(i(t,e,r,a,l,c,A,C,N,b/=S,_/=S,w,d,y),y.point(A,C),i(A,C,N,b,_,w,f,s,h,p,g,v,d,y))}}var u=.5,o=Math.cos(30*Yo),a=16;return t.precision=function(n){return arguments.length?(a=(u=n*n)>0&&16,t):Math.sqrt(u)},t}function re(n){var t=ee(function(t,e){return n([t*Zo,e*Zo])});return function(n){return le(t(n))}}function ie(n){this.stream=n}function ue(n,t){return{point:t,sphere:function(){n.sphere()},lineStart:function(){n.lineStart()},lineEnd:function(){n.lineEnd()},polygonStart:function(){n.polygonStart()},polygonEnd:function(){n.polygonEnd()}}}function oe(n){return ae(function(){return n})()}function ae(n){function t(n){return n=a(n[0]*Yo,n[1]*Yo),[n[0]*h+l,c-n[1]*h]}function e(n){return n=a.invert((n[0]-l)/h,(c-n[1])/h),n&&[n[0]*Zo,n[1]*Zo]}function r(){a=Ct(o=se(y,M,x),u);var n=u(v,d);return l=p-n[0]*h,c=g+n[1]*h,i()}function i(){return f&&(f.valid=!1,f=null),t}var u,o,a,l,c,f,s=ee(function(n,t){return n=u(n,t),[n[0]*h+l,c-n[1]*h]}),h=150,p=480,g=250,v=0,d=0,y=0,M=0,x=0,b=Fa,_=m,w=null,S=null;return t.stream=function(n){return f&&(f.valid=!1),f=le(b(o,s(_(n)))),f.valid=!0,f},t.clipAngle=function(n){return arguments.length?(b=null==n?(w=n,Fa):It((w=+n)*Yo),i()):w},t.clipExtent=function(n){return arguments.length?(S=n,_=n?Zt(n[0][0],n[0][1],n[1][0],n[1][1]):m,i()):S},t.scale=function(n){return arguments.length?(h=+n,r()):h},t.translate=function(n){return arguments.length?(p=+n[0],g=+n[1],r()):[p,g]},t.center=function(n){return arguments.length?(v=n[0]%360*Yo,d=n[1]%360*Yo,r()):[v*Zo,d*Zo]},t.rotate=function(n){return arguments.length?(y=n[0]%360*Yo,M=n[1]%360*Yo,x=n.length>2?n[2]%360*Yo:0,r()):[y*Zo,M*Zo,x*Zo]},ao.rebind(t,s,"precision"),function(){return u=n.apply(this,arguments),t.invert=u.invert&&e,r()}}function le(n){return ue(n,function(t,e){n.point(t*Yo,e*Yo)})}function ce(n,t){return[n,t]}function fe(n,t){return[n>Fo?n-Ho:-Fo>n?n+Ho:n,t]}function se(n,t,e){return n?t||e?Ct(pe(n),ge(t,e)):pe(n):t||e?ge(t,e):fe}function he(n){return function(t,e){return t+=n,[t>Fo?t-Ho:-Fo>t?t+Ho:t,e]}}function pe(n){var t=he(n);return t.invert=he(-n),t}function ge(n,t){function e(n,t){var e=Math.cos(t),a=Math.cos(n)*e,l=Math.sin(n)*e,c=Math.sin(t),f=c*r+a*i;return[Math.atan2(l*u-f*o,a*r-c*i),tn(f*u+l*o)]}var r=Math.cos(n),i=Math.sin(n),u=Math.cos(t),o=Math.sin(t);return e.invert=function(n,t){var e=Math.cos(t),a=Math.cos(n)*e,l=Math.sin(n)*e,c=Math.sin(t),f=c*u-l*o;return[Math.atan2(l*u+c*o,a*r+f*i),tn(f*r-a*i)]},e}function ve(n,t){var e=Math.cos(n),r=Math.sin(n);return function(i,u,o,a){var l=o*t;null!=i?(i=de(e,i),u=de(e,u),(o>0?u>i:i>u)&&(i+=o*Ho)):(i=n+o*Ho,u=n-.5*l);for(var c,f=i;o>0?f>u:u>f;f-=l)a.point((c=_t([e,-r*Math.cos(f),-r*Math.sin(f)]))[0],c[1])}}function de(n,t){var e=dt(t);e[0]-=n,bt(e);var r=nn(-e[1]);return((-e[2]<0?-r:r)+2*Math.PI-Uo)%(2*Math.PI)}function ye(n,t,e){var r=ao.range(n,t-Uo,e).concat(t);return function(n){return r.map(function(t){return[n,t]})}}function me(n,t,e){var r=ao.range(n,t-Uo,e).concat(t);return function(n){return r.map(function(t){return[t,n]})}}function Me(n){return n.source}function xe(n){return n.target}function be(n,t,e,r){var i=Math.cos(t),u=Math.sin(t),o=Math.cos(r),a=Math.sin(r),l=i*Math.cos(n),c=i*Math.sin(n),f=o*Math.cos(e),s=o*Math.sin(e),h=2*Math.asin(Math.sqrt(on(r-t)+i*o*on(e-n))),p=1/Math.sin(h),g=h?function(n){var t=Math.sin(n*=h)*p,e=Math.sin(h-n)*p,r=e*l+t*f,i=e*c+t*s,o=e*u+t*a;return[Math.atan2(i,r)*Zo,Math.atan2(o,Math.sqrt(r*r+i*i))*Zo]}:function(){return[n*Zo,t*Zo]};return g.distance=h,g}function _e(){function n(n,i){var u=Math.sin(i*=Yo),o=Math.cos(i),a=xo((n*=Yo)-t),l=Math.cos(a);Ja+=Math.atan2(Math.sqrt((a=o*Math.sin(a))*a+(a=r*u-e*o*l)*a),e*u+r*o*l),t=n,e=u,r=o}var t,e,r;Ga.point=function(i,u){t=i*Yo,e=Math.sin(u*=Yo),r=Math.cos(u),Ga.point=n},Ga.lineEnd=function(){Ga.point=Ga.lineEnd=b}}function we(n,t){function e(t,e){var r=Math.cos(t),i=Math.cos(e),u=n(r*i);return[u*i*Math.sin(t),u*Math.sin(e)]}return e.invert=function(n,e){var r=Math.sqrt(n*n+e*e),i=t(r),u=Math.sin(i),o=Math.cos(i);return[Math.atan2(n*u,r*o),Math.asin(r&&e*u/r)]},e}function Se(n,t){function e(n,t){o>0?-Io+Uo>t&&(t=-Io+Uo):t>Io-Uo&&(t=Io-Uo);var e=o/Math.pow(i(t),u);return[e*Math.sin(u*n),o-e*Math.cos(u*n)]}var r=Math.cos(n),i=function(n){return Math.tan(Fo/4+n/2)},u=n===t?Math.sin(n):Math.log(r/Math.cos(t))/Math.log(i(t)/i(n)),o=r*Math.pow(i(n),u)/u;return u?(e.invert=function(n,t){var e=o-t,r=K(u)*Math.sqrt(n*n+e*e);return[Math.atan2(n,e)/u,2*Math.atan(Math.pow(o/r,1/u))-Io]},e):Ne}function ke(n,t){function e(n,t){var e=u-t;return[e*Math.sin(i*n),u-e*Math.cos(i*n)]}var r=Math.cos(n),i=n===t?Math.sin(n):(r-Math.cos(t))/(t-n),u=r/i+n;return xo(i)<Uo?ce:(e.invert=function(n,t){var e=u-t;return[Math.atan2(n,e)/i,u-K(i)*Math.sqrt(n*n+e*e)]},e)}function Ne(n,t){return[n,Math.log(Math.tan(Fo/4+t/2))]}function Ee(n){var t,e=oe(n),r=e.scale,i=e.translate,u=e.clipExtent;return e.scale=function(){var n=r.apply(e,arguments);return n===e?t?e.clipExtent(null):e:n},e.translate=function(){var n=i.apply(e,arguments);return n===e?t?e.clipExtent(null):e:n},e.clipExtent=function(n){var o=u.apply(e,arguments);if(o===e){if(t=null==n){var a=Fo*r(),l=i();u([[l[0]-a,l[1]-a],[l[0]+a,l[1]+a]])}}else t&&(o=null);return o},e.clipExtent(null)}function Ae(n,t){return[Math.log(Math.tan(Fo/4+t/2)),-n]}function Ce(n){return n[0]}function ze(n){return n[1]}function Le(n){for(var t=n.length,e=[0,1],r=2,i=2;t>i;i++){for(;r>1&&Q(n[e[r-2]],n[e[r-1]],n[i])<=0;)--r;e[r++]=i}return e.slice(0,r)}function qe(n,t){return n[0]-t[0]||n[1]-t[1]}function Te(n,t,e){return(e[0]-t[0])*(n[1]-t[1])<(e[1]-t[1])*(n[0]-t[0])}function Re(n,t,e,r){var i=n[0],u=e[0],o=t[0]-i,a=r[0]-u,l=n[1],c=e[1],f=t[1]-l,s=r[1]-c,h=(a*(l-c)-s*(i-u))/(s*o-a*f);return[i+h*o,l+h*f]}function De(n){var t=n[0],e=n[n.length-1];return!(t[0]-e[0]||t[1]-e[1])}function Pe(){rr(this),this.edge=this.site=this.circle=null}function Ue(n){var t=cl.pop()||new Pe;return t.site=n,t}function je(n){Be(n),ol.remove(n),cl.push(n),rr(n)}function Fe(n){var t=n.circle,e=t.x,r=t.cy,i={x:e,y:r},u=n.P,o=n.N,a=[n];je(n);for(var l=u;l.circle&&xo(e-l.circle.x)<Uo&&xo(r-l.circle.cy)<Uo;)u=l.P,a.unshift(l),je(l),l=u;a.unshift(l),Be(l);for(var c=o;c.circle&&xo(e-c.circle.x)<Uo&&xo(r-c.circle.cy)<Uo;)o=c.N,a.push(c),je(c),c=o;a.push(c),Be(c);var f,s=a.length;for(f=1;s>f;++f)c=a[f],l=a[f-1],nr(c.edge,l.site,c.site,i);l=a[0],c=a[s-1],c.edge=Ke(l.site,c.site,null,i),$e(l),$e(c)}function He(n){for(var t,e,r,i,u=n.x,o=n.y,a=ol._;a;)if(r=Oe(a,o)-u,r>Uo)a=a.L;else{if(i=u-Ie(a,o),!(i>Uo)){r>-Uo?(t=a.P,e=a):i>-Uo?(t=a,e=a.N):t=e=a;break}if(!a.R){t=a;break}a=a.R}var l=Ue(n);if(ol.insert(t,l),t||e){if(t===e)return Be(t),e=Ue(t.site),ol.insert(l,e),l.edge=e.edge=Ke(t.site,l.site),$e(t),void $e(e);if(!e)return void(l.edge=Ke(t.site,l.site));Be(t),Be(e);var c=t.site,f=c.x,s=c.y,h=n.x-f,p=n.y-s,g=e.site,v=g.x-f,d=g.y-s,y=2*(h*d-p*v),m=h*h+p*p,M=v*v+d*d,x={x:(d*m-p*M)/y+f,y:(h*M-v*m)/y+s};nr(e.edge,c,g,x),l.edge=Ke(c,n,null,x),e.edge=Ke(n,g,null,x),$e(t),$e(e)}}function Oe(n,t){var e=n.site,r=e.x,i=e.y,u=i-t;if(!u)return r;var o=n.P;if(!o)return-(1/0);e=o.site;var a=e.x,l=e.y,c=l-t;if(!c)return a;var f=a-r,s=1/u-1/c,h=f/c;return s?(-h+Math.sqrt(h*h-2*s*(f*f/(-2*c)-l+c/2+i-u/2)))/s+r:(r+a)/2}function Ie(n,t){var e=n.N;if(e)return Oe(e,t);var r=n.site;return r.y===t?r.x:1/0}function Ye(n){this.site=n,this.edges=[]}function Ze(n){for(var t,e,r,i,u,o,a,l,c,f,s=n[0][0],h=n[1][0],p=n[0][1],g=n[1][1],v=ul,d=v.length;d--;)if(u=v[d],u&&u.prepare())for(a=u.edges,l=a.length,o=0;l>o;)f=a[o].end(),r=f.x,i=f.y,c=a[++o%l].start(),t=c.x,e=c.y,(xo(r-t)>Uo||xo(i-e)>Uo)&&(a.splice(o,0,new tr(Qe(u.site,f,xo(r-s)<Uo&&g-i>Uo?{x:s,y:xo(t-s)<Uo?e:g}:xo(i-g)<Uo&&h-r>Uo?{x:xo(e-g)<Uo?t:h,y:g}:xo(r-h)<Uo&&i-p>Uo?{x:h,y:xo(t-h)<Uo?e:p}:xo(i-p)<Uo&&r-s>Uo?{x:xo(e-p)<Uo?t:s,y:p}:null),u.site,null)),++l)}function Ve(n,t){return t.angle-n.angle}function Xe(){rr(this),this.x=this.y=this.arc=this.site=this.cy=null}function $e(n){var t=n.P,e=n.N;if(t&&e){var r=t.site,i=n.site,u=e.site;if(r!==u){var o=i.x,a=i.y,l=r.x-o,c=r.y-a,f=u.x-o,s=u.y-a,h=2*(l*s-c*f);if(!(h>=-jo)){var p=l*l+c*c,g=f*f+s*s,v=(s*p-c*g)/h,d=(l*g-f*p)/h,s=d+a,y=fl.pop()||new Xe;y.arc=n,y.site=i,y.x=v+o,y.y=s+Math.sqrt(v*v+d*d),y.cy=s,n.circle=y;for(var m=null,M=ll._;M;)if(y.y<M.y||y.y===M.y&&y.x<=M.x){if(!M.L){m=M.P;break}M=M.L}else{if(!M.R){m=M;break}M=M.R}ll.insert(m,y),m||(al=y)}}}}function Be(n){var t=n.circle;t&&(t.P||(al=t.N),ll.remove(t),fl.push(t),rr(t),n.circle=null)}function We(n){for(var t,e=il,r=Yt(n[0][0],n[0][1],n[1][0],n[1][1]),i=e.length;i--;)t=e[i],(!Je(t,n)||!r(t)||xo(t.a.x-t.b.x)<Uo&&xo(t.a.y-t.b.y)<Uo)&&(t.a=t.b=null,e.splice(i,1))}function Je(n,t){var e=n.b;if(e)return!0;var r,i,u=n.a,o=t[0][0],a=t[1][0],l=t[0][1],c=t[1][1],f=n.l,s=n.r,h=f.x,p=f.y,g=s.x,v=s.y,d=(h+g)/2,y=(p+v)/2;if(v===p){if(o>d||d>=a)return;if(h>g){if(u){if(u.y>=c)return}else u={x:d,y:l};e={x:d,y:c}}else{if(u){if(u.y<l)return}else u={x:d,y:c};e={x:d,y:l}}}else if(r=(h-g)/(v-p),i=y-r*d,-1>r||r>1)if(h>g){if(u){if(u.y>=c)return}else u={x:(l-i)/r,y:l};e={x:(c-i)/r,y:c}}else{if(u){if(u.y<l)return}else u={x:(c-i)/r,y:c};e={x:(l-i)/r,y:l}}else if(v>p){if(u){if(u.x>=a)return}else u={x:o,y:r*o+i};e={x:a,y:r*a+i}}else{if(u){if(u.x<o)return}else u={x:a,y:r*a+i};e={x:o,y:r*o+i}}return n.a=u,n.b=e,!0}function Ge(n,t){this.l=n,this.r=t,this.a=this.b=null}function Ke(n,t,e,r){var i=new Ge(n,t);return il.push(i),e&&nr(i,n,t,e),r&&nr(i,t,n,r),ul[n.i].edges.push(new tr(i,n,t)),ul[t.i].edges.push(new tr(i,t,n)),i}function Qe(n,t,e){var r=new Ge(n,null);return r.a=t,r.b=e,il.push(r),r}function nr(n,t,e,r){n.a||n.b?n.l===e?n.b=r:n.a=r:(n.a=r,n.l=t,n.r=e)}function tr(n,t,e){var r=n.a,i=n.b;this.edge=n,this.site=t,this.angle=e?Math.atan2(e.y-t.y,e.x-t.x):n.l===t?Math.atan2(i.x-r.x,r.y-i.y):Math.atan2(r.x-i.x,i.y-r.y)}function er(){this._=null}function rr(n){n.U=n.C=n.L=n.R=n.P=n.N=null}function ir(n,t){var e=t,r=t.R,i=e.U;i?i.L===e?i.L=r:i.R=r:n._=r,r.U=i,e.U=r,e.R=r.L,e.R&&(e.R.U=e),r.L=e}function ur(n,t){var e=t,r=t.L,i=e.U;i?i.L===e?i.L=r:i.R=r:n._=r,r.U=i,e.U=r,e.L=r.R,e.L&&(e.L.U=e),r.R=e}function or(n){for(;n.L;)n=n.L;return n}function ar(n,t){var e,r,i,u=n.sort(lr).pop();for(il=[],ul=new Array(n.length),ol=new er,ll=new er;;)if(i=al,u&&(!i||u.y<i.y||u.y===i.y&&u.x<i.x))u.x===e&&u.y===r||(ul[u.i]=new Ye(u),He(u),e=u.x,r=u.y),u=n.pop();else{if(!i)break;Fe(i.arc)}t&&(We(t),Ze(t));var o={cells:ul,edges:il};return ol=ll=il=ul=null,o}function lr(n,t){return t.y-n.y||t.x-n.x}function cr(n,t,e){return(n.x-e.x)*(t.y-n.y)-(n.x-t.x)*(e.y-n.y)}function fr(n){return n.x}function sr(n){return n.y}function hr(){return{leaf:!0,nodes:[],point:null,x:null,y:null}}function pr(n,t,e,r,i,u){if(!n(t,e,r,i,u)){var o=.5*(e+i),a=.5*(r+u),l=t.nodes;l[0]&&pr(n,l[0],e,r,o,a),l[1]&&pr(n,l[1],o,r,i,a),l[2]&&pr(n,l[2],e,a,o,u),l[3]&&pr(n,l[3],o,a,i,u)}}function gr(n,t,e,r,i,u,o){var a,l=1/0;return function c(n,f,s,h,p){if(!(f>u||s>o||r>h||i>p)){if(g=n.point){var g,v=t-n.x,d=e-n.y,y=v*v+d*d;if(l>y){var m=Math.sqrt(l=y);r=t-m,i=e-m,u=t+m,o=e+m,a=g}}for(var M=n.nodes,x=.5*(f+h),b=.5*(s+p),_=t>=x,w=e>=b,S=w<<1|_,k=S+4;k>S;++S)if(n=M[3&S])switch(3&S){case 0:c(n,f,s,x,b);break;case 1:c(n,x,s,h,b);break;case 2:c(n,f,b,x,p);break;case 3:c(n,x,b,h,p)}}}(n,r,i,u,o),a}function vr(n,t){n=ao.rgb(n),t=ao.rgb(t);var e=n.r,r=n.g,i=n.b,u=t.r-e,o=t.g-r,a=t.b-i;return function(n){return"#"+bn(Math.round(e+u*n))+bn(Math.round(r+o*n))+bn(Math.round(i+a*n))}}function dr(n,t){var e,r={},i={};for(e in n)e in t?r[e]=Mr(n[e],t[e]):i[e]=n[e];for(e in t)e in n||(i[e]=t[e]);return function(n){for(e in r)i[e]=r[e](n);return i}}function yr(n,t){return n=+n,t=+t,function(e){return n*(1-e)+t*e}}function mr(n,t){var e,r,i,u=hl.lastIndex=pl.lastIndex=0,o=-1,a=[],l=[];for(n+="",t+="";(e=hl.exec(n))&&(r=pl.exec(t));)(i=r.index)>u&&(i=t.slice(u,i),a[o]?a[o]+=i:a[++o]=i),(e=e[0])===(r=r[0])?a[o]?a[o]+=r:a[++o]=r:(a[++o]=null,l.push({i:o,x:yr(e,r)})),u=pl.lastIndex;return u<t.length&&(i=t.slice(u),a[o]?a[o]+=i:a[++o]=i),a.length<2?l[0]?(t=l[0].x,function(n){return t(n)+""}):function(){return t}:(t=l.length,function(n){for(var e,r=0;t>r;++r)a[(e=l[r]).i]=e.x(n);return a.join("")})}function Mr(n,t){for(var e,r=ao.interpolators.length;--r>=0&&!(e=ao.interpolators[r](n,t)););return e}function xr(n,t){var e,r=[],i=[],u=n.length,o=t.length,a=Math.min(n.length,t.length);for(e=0;a>e;++e)r.push(Mr(n[e],t[e]));for(;u>e;++e)i[e]=n[e];for(;o>e;++e)i[e]=t[e];return function(n){for(e=0;a>e;++e)i[e]=r[e](n);return i}}function br(n){return function(t){return 0>=t?0:t>=1?1:n(t)}}function _r(n){return function(t){return 1-n(1-t)}}function wr(n){return function(t){return.5*(.5>t?n(2*t):2-n(2-2*t))}}function Sr(n){return n*n}function kr(n){return n*n*n}function Nr(n){if(0>=n)return 0;if(n>=1)return 1;var t=n*n,e=t*n;return 4*(.5>n?e:3*(n-t)+e-.75)}function Er(n){return function(t){return Math.pow(t,n)}}function Ar(n){return 1-Math.cos(n*Io)}function Cr(n){return Math.pow(2,10*(n-1))}function zr(n){return 1-Math.sqrt(1-n*n)}function Lr(n,t){var e;return arguments.length<2&&(t=.45),arguments.length?e=t/Ho*Math.asin(1/n):(n=1,e=t/4),function(r){return 1+n*Math.pow(2,-10*r)*Math.sin((r-e)*Ho/t)}}function qr(n){return n||(n=1.70158),function(t){return t*t*((n+1)*t-n)}}function Tr(n){return 1/2.75>n?7.5625*n*n:2/2.75>n?7.5625*(n-=1.5/2.75)*n+.75:2.5/2.75>n?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375}function Rr(n,t){n=ao.hcl(n),t=ao.hcl(t);var e=n.h,r=n.c,i=n.l,u=t.h-e,o=t.c-r,a=t.l-i;return isNaN(o)&&(o=0,r=isNaN(r)?t.c:r),isNaN(u)?(u=0,e=isNaN(e)?t.h:e):u>180?u-=360:-180>u&&(u+=360),function(n){return sn(e+u*n,r+o*n,i+a*n)+""}}function Dr(n,t){n=ao.hsl(n),t=ao.hsl(t);var e=n.h,r=n.s,i=n.l,u=t.h-e,o=t.s-r,a=t.l-i;return isNaN(o)&&(o=0,r=isNaN(r)?t.s:r),isNaN(u)?(u=0,e=isNaN(e)?t.h:e):u>180?u-=360:-180>u&&(u+=360),function(n){return cn(e+u*n,r+o*n,i+a*n)+""}}function Pr(n,t){n=ao.lab(n),t=ao.lab(t);var e=n.l,r=n.a,i=n.b,u=t.l-e,o=t.a-r,a=t.b-i;return function(n){return pn(e+u*n,r+o*n,i+a*n)+""}}function Ur(n,t){return t-=n,function(e){return Math.round(n+t*e)}}function jr(n){var t=[n.a,n.b],e=[n.c,n.d],r=Hr(t),i=Fr(t,e),u=Hr(Or(e,t,-i))||0;t[0]*e[1]<e[0]*t[1]&&(t[0]*=-1,t[1]*=-1,r*=-1,i*=-1),this.rotate=(r?Math.atan2(t[1],t[0]):Math.atan2(-e[0],e[1]))*Zo,this.translate=[n.e,n.f],this.scale=[r,u],this.skew=u?Math.atan2(i,u)*Zo:0}function Fr(n,t){return n[0]*t[0]+n[1]*t[1]}function Hr(n){var t=Math.sqrt(Fr(n,n));return t&&(n[0]/=t,n[1]/=t),t}function Or(n,t,e){return n[0]+=e*t[0],n[1]+=e*t[1],n}function Ir(n){return n.length?n.pop()+",":""}function Yr(n,t,e,r){if(n[0]!==t[0]||n[1]!==t[1]){var i=e.push("translate(",null,",",null,")");r.push({i:i-4,x:yr(n[0],t[0])},{i:i-2,x:yr(n[1],t[1])})}else(t[0]||t[1])&&e.push("translate("+t+")")}function Zr(n,t,e,r){n!==t?(n-t>180?t+=360:t-n>180&&(n+=360),r.push({i:e.push(Ir(e)+"rotate(",null,")")-2,x:yr(n,t)})):t&&e.push(Ir(e)+"rotate("+t+")")}function Vr(n,t,e,r){n!==t?r.push({i:e.push(Ir(e)+"skewX(",null,")")-2,x:yr(n,t)}):t&&e.push(Ir(e)+"skewX("+t+")")}function Xr(n,t,e,r){if(n[0]!==t[0]||n[1]!==t[1]){var i=e.push(Ir(e)+"scale(",null,",",null,")");r.push({i:i-4,x:yr(n[0],t[0])},{i:i-2,x:yr(n[1],t[1])})}else 1===t[0]&&1===t[1]||e.push(Ir(e)+"scale("+t+")")}function $r(n,t){var e=[],r=[];return n=ao.transform(n),t=ao.transform(t),Yr(n.translate,t.translate,e,r),Zr(n.rotate,t.rotate,e,r),Vr(n.skew,t.skew,e,r),Xr(n.scale,t.scale,e,r),n=t=null,function(n){for(var t,i=-1,u=r.length;++i<u;)e[(t=r[i]).i]=t.x(n);return e.join("")}}function Br(n,t){return t=(t-=n=+n)||1/t,function(e){return(e-n)/t}}function Wr(n,t){return t=(t-=n=+n)||1/t,function(e){return Math.max(0,Math.min(1,(e-n)/t))}}function Jr(n){for(var t=n.source,e=n.target,r=Kr(t,e),i=[t];t!==r;)t=t.parent,i.push(t);for(var u=i.length;e!==r;)i.splice(u,0,e),e=e.parent;return i}function Gr(n){for(var t=[],e=n.parent;null!=e;)t.push(n),n=e,e=e.parent;return t.push(n),t}function Kr(n,t){if(n===t)return n;for(var e=Gr(n),r=Gr(t),i=e.pop(),u=r.pop(),o=null;i===u;)o=i,i=e.pop(),u=r.pop();return o}function Qr(n){n.fixed|=2}function ni(n){n.fixed&=-7}function ti(n){n.fixed|=4,n.px=n.x,n.py=n.y}function ei(n){n.fixed&=-5}function ri(n,t,e){var r=0,i=0;if(n.charge=0,!n.leaf)for(var u,o=n.nodes,a=o.length,l=-1;++l<a;)u=o[l],null!=u&&(ri(u,t,e),n.charge+=u.charge,r+=u.charge*u.cx,i+=u.charge*u.cy);if(n.point){n.leaf||(n.point.x+=Math.random()-.5,n.point.y+=Math.random()-.5);var c=t*e[n.point.index];n.charge+=n.pointCharge=c,r+=c*n.point.x,i+=c*n.point.y}n.cx=r/n.charge,n.cy=i/n.charge}function ii(n,t){return ao.rebind(n,t,"sort","children","value"),n.nodes=n,n.links=fi,n}function ui(n,t){for(var e=[n];null!=(n=e.pop());)if(t(n),(i=n.children)&&(r=i.length))for(var r,i;--r>=0;)e.push(i[r])}function oi(n,t){for(var e=[n],r=[];null!=(n=e.pop());)if(r.push(n),(u=n.children)&&(i=u.length))for(var i,u,o=-1;++o<i;)e.push(u[o]);for(;null!=(n=r.pop());)t(n)}function ai(n){return n.children}function li(n){return n.value}function ci(n,t){return t.value-n.value}function fi(n){return ao.merge(n.map(function(n){return(n.children||[]).map(function(t){return{source:n,target:t}})}))}function si(n){return n.x}function hi(n){return n.y}function pi(n,t,e){n.y0=t,n.y=e}function gi(n){return ao.range(n.length)}function vi(n){for(var t=-1,e=n[0].length,r=[];++t<e;)r[t]=0;return r}function di(n){for(var t,e=1,r=0,i=n[0][1],u=n.length;u>e;++e)(t=n[e][1])>i&&(r=e,i=t);return r}function yi(n){return n.reduce(mi,0)}function mi(n,t){return n+t[1]}function Mi(n,t){return xi(n,Math.ceil(Math.log(t.length)/Math.LN2+1))}function xi(n,t){for(var e=-1,r=+n[0],i=(n[1]-r)/t,u=[];++e<=t;)u[e]=i*e+r;return u}function bi(n){return[ao.min(n),ao.max(n)]}function _i(n,t){return n.value-t.value}function wi(n,t){var e=n._pack_next;n._pack_next=t,t._pack_prev=n,t._pack_next=e,e._pack_prev=t}function Si(n,t){n._pack_next=t,t._pack_prev=n}function ki(n,t){var e=t.x-n.x,r=t.y-n.y,i=n.r+t.r;return.999*i*i>e*e+r*r}function Ni(n){function t(n){f=Math.min(n.x-n.r,f),s=Math.max(n.x+n.r,s),h=Math.min(n.y-n.r,h),p=Math.max(n.y+n.r,p)}if((e=n.children)&&(c=e.length)){var e,r,i,u,o,a,l,c,f=1/0,s=-(1/0),h=1/0,p=-(1/0);if(e.forEach(Ei),r=e[0],r.x=-r.r,r.y=0,t(r),c>1&&(i=e[1],i.x=i.r,i.y=0,t(i),c>2))for(u=e[2],zi(r,i,u),t(u),wi(r,u),r._pack_prev=u,wi(u,i),i=r._pack_next,o=3;c>o;o++){zi(r,i,u=e[o]);var g=0,v=1,d=1;for(a=i._pack_next;a!==i;a=a._pack_next,v++)if(ki(a,u)){g=1;break}if(1==g)for(l=r._pack_prev;l!==a._pack_prev&&!ki(l,u);l=l._pack_prev,d++);g?(d>v||v==d&&i.r<r.r?Si(r,i=a):Si(r=l,i),o--):(wi(r,u),i=u,t(u))}var y=(f+s)/2,m=(h+p)/2,M=0;for(o=0;c>o;o++)u=e[o],u.x-=y,u.y-=m,M=Math.max(M,u.r+Math.sqrt(u.x*u.x+u.y*u.y));n.r=M,e.forEach(Ai)}}function Ei(n){n._pack_next=n._pack_prev=n}function Ai(n){delete n._pack_next,delete n._pack_prev}function Ci(n,t,e,r){var i=n.children;if(n.x=t+=r*n.x,n.y=e+=r*n.y,n.r*=r,i)for(var u=-1,o=i.length;++u<o;)Ci(i[u],t,e,r)}function zi(n,t,e){var r=n.r+e.r,i=t.x-n.x,u=t.y-n.y;if(r&&(i||u)){var o=t.r+e.r,a=i*i+u*u;o*=o,r*=r;var l=.5+(r-o)/(2*a),c=Math.sqrt(Math.max(0,2*o*(r+a)-(r-=a)*r-o*o))/(2*a);e.x=n.x+l*i+c*u,e.y=n.y+l*u-c*i}else e.x=n.x+r,e.y=n.y}function Li(n,t){return n.parent==t.parent?1:2}function qi(n){var t=n.children;return t.length?t[0]:n.t}function Ti(n){var t,e=n.children;return(t=e.length)?e[t-1]:n.t}function Ri(n,t,e){var r=e/(t.i-n.i);t.c-=r,t.s+=e,n.c+=r,t.z+=e,t.m+=e}function Di(n){for(var t,e=0,r=0,i=n.children,u=i.length;--u>=0;)t=i[u],t.z+=e,t.m+=e,e+=t.s+(r+=t.c)}function Pi(n,t,e){return n.a.parent===t.parent?n.a:e}function Ui(n){return 1+ao.max(n,function(n){return n.y})}function ji(n){return n.reduce(function(n,t){return n+t.x},0)/n.length}function Fi(n){var t=n.children;return t&&t.length?Fi(t[0]):n}function Hi(n){var t,e=n.children;return e&&(t=e.length)?Hi(e[t-1]):n}function Oi(n){return{x:n.x,y:n.y,dx:n.dx,dy:n.dy}}function Ii(n,t){var e=n.x+t[3],r=n.y+t[0],i=n.dx-t[1]-t[3],u=n.dy-t[0]-t[2];return 0>i&&(e+=i/2,i=0),0>u&&(r+=u/2,u=0),{x:e,y:r,dx:i,dy:u}}function Yi(n){var t=n[0],e=n[n.length-1];return e>t?[t,e]:[e,t]}function Zi(n){return n.rangeExtent?n.rangeExtent():Yi(n.range())}function Vi(n,t,e,r){var i=e(n[0],n[1]),u=r(t[0],t[1]);return function(n){return u(i(n))}}function Xi(n,t){var e,r=0,i=n.length-1,u=n[r],o=n[i];return u>o&&(e=r,r=i,i=e,e=u,u=o,o=e),n[r]=t.floor(u),n[i]=t.ceil(o),n}function $i(n){return n?{floor:function(t){return Math.floor(t/n)*n},ceil:function(t){return Math.ceil(t/n)*n}}:Sl}function Bi(n,t,e,r){var i=[],u=[],o=0,a=Math.min(n.length,t.length)-1;for(n[a]<n[0]&&(n=n.slice().reverse(),t=t.slice().reverse());++o<=a;)i.push(e(n[o-1],n[o])),u.push(r(t[o-1],t[o]));return function(t){var e=ao.bisect(n,t,1,a)-1;return u[e](i[e](t))}}function Wi(n,t,e,r){function i(){var i=Math.min(n.length,t.length)>2?Bi:Vi,l=r?Wr:Br;return o=i(n,t,l,e),a=i(t,n,l,Mr),u}function u(n){return o(n)}var o,a;return u.invert=function(n){return a(n)},u.domain=function(t){return arguments.length?(n=t.map(Number),i()):n},u.range=function(n){return arguments.length?(t=n,i()):t},u.rangeRound=function(n){return u.range(n).interpolate(Ur)},u.clamp=function(n){return arguments.length?(r=n,i()):r},u.interpolate=function(n){return arguments.length?(e=n,i()):e},u.ticks=function(t){return Qi(n,t)},u.tickFormat=function(t,e){return nu(n,t,e)},u.nice=function(t){return Gi(n,t),i()},u.copy=function(){return Wi(n,t,e,r)},i()}function Ji(n,t){return ao.rebind(n,t,"range","rangeRound","interpolate","clamp")}function Gi(n,t){return Xi(n,$i(Ki(n,t)[2])),Xi(n,$i(Ki(n,t)[2])),n}function Ki(n,t){null==t&&(t=10);var e=Yi(n),r=e[1]-e[0],i=Math.pow(10,Math.floor(Math.log(r/t)/Math.LN10)),u=t/r*i;return.15>=u?i*=10:.35>=u?i*=5:.75>=u&&(i*=2),e[0]=Math.ceil(e[0]/i)*i,e[1]=Math.floor(e[1]/i)*i+.5*i,e[2]=i,e}function Qi(n,t){return ao.range.apply(ao,Ki(n,t))}function nu(n,t,e){var r=Ki(n,t);if(e){var i=ha.exec(e);if(i.shift(),"s"===i[8]){var u=ao.formatPrefix(Math.max(xo(r[0]),xo(r[1])));return i[7]||(i[7]="."+tu(u.scale(r[2]))),i[8]="f",e=ao.format(i.join("")),function(n){return e(u.scale(n))+u.symbol}}i[7]||(i[7]="."+eu(i[8],r)),e=i.join("")}else e=",."+tu(r[2])+"f";return ao.format(e)}function tu(n){return-Math.floor(Math.log(n)/Math.LN10+.01)}function eu(n,t){var e=tu(t[2]);return n in kl?Math.abs(e-tu(Math.max(xo(t[0]),xo(t[1]))))+ +("e"!==n):e-2*("%"===n)}function ru(n,t,e,r){function i(n){return(e?Math.log(0>n?0:n):-Math.log(n>0?0:-n))/Math.log(t)}function u(n){return e?Math.pow(t,n):-Math.pow(t,-n)}function o(t){return n(i(t))}return o.invert=function(t){return u(n.invert(t))},o.domain=function(t){return arguments.length?(e=t[0]>=0,n.domain((r=t.map(Number)).map(i)),o):r},o.base=function(e){return arguments.length?(t=+e,n.domain(r.map(i)),o):t},o.nice=function(){var t=Xi(r.map(i),e?Math:El);return n.domain(t),r=t.map(u),o},o.ticks=function(){var n=Yi(r),o=[],a=n[0],l=n[1],c=Math.floor(i(a)),f=Math.ceil(i(l)),s=t%1?2:t;if(isFinite(f-c)){if(e){for(;f>c;c++)for(var h=1;s>h;h++)o.push(u(c)*h);o.push(u(c))}else for(o.push(u(c));c++<f;)for(var h=s-1;h>0;h--)o.push(u(c)*h);for(c=0;o[c]<a;c++);for(f=o.length;o[f-1]>l;f--);o=o.slice(c,f)}return o},o.tickFormat=function(n,e){if(!arguments.length)return Nl;arguments.length<2?e=Nl:"function"!=typeof e&&(e=ao.format(e));var r=Math.max(1,t*n/o.ticks().length);return function(n){var o=n/u(Math.round(i(n)));return t-.5>o*t&&(o*=t),r>=o?e(n):""}},o.copy=function(){return ru(n.copy(),t,e,r)},Ji(o,n)}function iu(n,t,e){function r(t){return n(i(t))}var i=uu(t),u=uu(1/t);return r.invert=function(t){return u(n.invert(t))},r.domain=function(t){return arguments.length?(n.domain((e=t.map(Number)).map(i)),r):e},r.ticks=function(n){return Qi(e,n)},r.tickFormat=function(n,t){return nu(e,n,t)},r.nice=function(n){return r.domain(Gi(e,n))},r.exponent=function(o){return arguments.length?(i=uu(t=o),u=uu(1/t),n.domain(e.map(i)),r):t},r.copy=function(){return iu(n.copy(),t,e)},Ji(r,n)}function uu(n){return function(t){return 0>t?-Math.pow(-t,n):Math.pow(t,n)}}function ou(n,t){function e(e){return u[((i.get(e)||("range"===t.t?i.set(e,n.push(e)):NaN))-1)%u.length]}function r(t,e){return ao.range(n.length).map(function(n){return t+e*n})}var i,u,o;return e.domain=function(r){if(!arguments.length)return n;n=[],i=new c;for(var u,o=-1,a=r.length;++o<a;)i.has(u=r[o])||i.set(u,n.push(u));return e[t.t].apply(e,t.a)},e.range=function(n){return arguments.length?(u=n,o=0,t={t:"range",a:arguments},e):u},e.rangePoints=function(i,a){arguments.length<2&&(a=0);var l=i[0],c=i[1],f=n.length<2?(l=(l+c)/2,0):(c-l)/(n.length-1+a);return u=r(l+f*a/2,f),o=0,t={t:"rangePoints",a:arguments},e},e.rangeRoundPoints=function(i,a){arguments.length<2&&(a=0);var l=i[0],c=i[1],f=n.length<2?(l=c=Math.round((l+c)/2),0):(c-l)/(n.length-1+a)|0;return u=r(l+Math.round(f*a/2+(c-l-(n.length-1+a)*f)/2),f),o=0,t={t:"rangeRoundPoints",a:arguments},e},e.rangeBands=function(i,a,l){arguments.length<2&&(a=0),arguments.length<3&&(l=a);var c=i[1]<i[0],f=i[c-0],s=i[1-c],h=(s-f)/(n.length-a+2*l);return u=r(f+h*l,h),c&&u.reverse(),o=h*(1-a),t={t:"rangeBands",a:arguments},e},e.rangeRoundBands=function(i,a,l){arguments.length<2&&(a=0),arguments.length<3&&(l=a);var c=i[1]<i[0],f=i[c-0],s=i[1-c],h=Math.floor((s-f)/(n.length-a+2*l));return u=r(f+Math.round((s-f-(n.length-a)*h)/2),h),c&&u.reverse(),o=Math.round(h*(1-a)),t={t:"rangeRoundBands",a:arguments},e},e.rangeBand=function(){return o},e.rangeExtent=function(){return Yi(t.a[0])},e.copy=function(){return ou(n,t)},e.domain(n)}function au(n,t){function u(){var e=0,r=t.length;for(a=[];++e<r;)a[e-1]=ao.quantile(n,e/r);return o}function o(n){return isNaN(n=+n)?void 0:t[ao.bisect(a,n)]}var a;return o.domain=function(t){return arguments.length?(n=t.map(r).filter(i).sort(e),u()):n},o.range=function(n){return arguments.length?(t=n,u()):t},o.quantiles=function(){return a},o.invertExtent=function(e){return e=t.indexOf(e),0>e?[NaN,NaN]:[e>0?a[e-1]:n[0],e<a.length?a[e]:n[n.length-1]]},o.copy=function(){return au(n,t)},u()}function lu(n,t,e){function r(t){return e[Math.max(0,Math.min(o,Math.floor(u*(t-n))))]}function i(){return u=e.length/(t-n),o=e.length-1,r}var u,o;return r.domain=function(e){return arguments.length?(n=+e[0],t=+e[e.length-1],i()):[n,t]},r.range=function(n){return arguments.length?(e=n,i()):e},r.invertExtent=function(t){return t=e.indexOf(t),t=0>t?NaN:t/u+n,[t,t+1/u]},r.copy=function(){return lu(n,t,e)},i()}function cu(n,t){function e(e){return e>=e?t[ao.bisect(n,e)]:void 0}return e.domain=function(t){return arguments.length?(n=t,e):n},e.range=function(n){return arguments.length?(t=n,e):t},e.invertExtent=function(e){return e=t.indexOf(e),[n[e-1],n[e]]},e.copy=function(){return cu(n,t)},e}function fu(n){function t(n){return+n}return t.invert=t,t.domain=t.range=function(e){return arguments.length?(n=e.map(t),t):n},t.ticks=function(t){return Qi(n,t)},t.tickFormat=function(t,e){return nu(n,t,e)},t.copy=function(){return fu(n)},t}function su(){return 0}function hu(n){return n.innerRadius}function pu(n){return n.outerRadius}function gu(n){return n.startAngle}function vu(n){return n.endAngle}function du(n){return n&&n.padAngle}function yu(n,t,e,r){return(n-e)*t-(t-r)*n>0?0:1}function mu(n,t,e,r,i){var u=n[0]-t[0],o=n[1]-t[1],a=(i?r:-r)/Math.sqrt(u*u+o*o),l=a*o,c=-a*u,f=n[0]+l,s=n[1]+c,h=t[0]+l,p=t[1]+c,g=(f+h)/2,v=(s+p)/2,d=h-f,y=p-s,m=d*d+y*y,M=e-r,x=f*p-h*s,b=(0>y?-1:1)*Math.sqrt(Math.max(0,M*M*m-x*x)),_=(x*y-d*b)/m,w=(-x*d-y*b)/m,S=(x*y+d*b)/m,k=(-x*d+y*b)/m,N=_-g,E=w-v,A=S-g,C=k-v;return N*N+E*E>A*A+C*C&&(_=S,w=k),[[_-l,w-c],[_*e/M,w*e/M]]}function Mu(n){function t(t){function o(){c.push("M",u(n(f),a))}for(var l,c=[],f=[],s=-1,h=t.length,p=En(e),g=En(r);++s<h;)i.call(this,l=t[s],s)?f.push([+p.call(this,l,s),+g.call(this,l,s)]):f.length&&(o(),f=[]);return f.length&&o(),c.length?c.join(""):null}var e=Ce,r=ze,i=zt,u=xu,o=u.key,a=.7;return t.x=function(n){return arguments.length?(e=n,t):e},t.y=function(n){return arguments.length?(r=n,t):r},t.defined=function(n){return arguments.length?(i=n,t):i},t.interpolate=function(n){return arguments.length?(o="function"==typeof n?u=n:(u=Tl.get(n)||xu).key,t):o},t.tension=function(n){return arguments.length?(a=n,t):a},t}function xu(n){return n.length>1?n.join("L"):n+"Z"}function bu(n){return n.join("L")+"Z"}function _u(n){for(var t=0,e=n.length,r=n[0],i=[r[0],",",r[1]];++t<e;)i.push("H",(r[0]+(r=n[t])[0])/2,"V",r[1]);return e>1&&i.push("H",r[0]),i.join("")}function wu(n){for(var t=0,e=n.length,r=n[0],i=[r[0],",",r[1]];++t<e;)i.push("V",(r=n[t])[1],"H",r[0]);return i.join("")}function Su(n){for(var t=0,e=n.length,r=n[0],i=[r[0],",",r[1]];++t<e;)i.push("H",(r=n[t])[0],"V",r[1]);return i.join("")}function ku(n,t){return n.length<4?xu(n):n[1]+Au(n.slice(1,-1),Cu(n,t))}function Nu(n,t){return n.length<3?bu(n):n[0]+Au((n.push(n[0]),n),Cu([n[n.length-2]].concat(n,[n[1]]),t))}function Eu(n,t){return n.length<3?xu(n):n[0]+Au(n,Cu(n,t))}function Au(n,t){if(t.length<1||n.length!=t.length&&n.length!=t.length+2)return xu(n);var e=n.length!=t.length,r="",i=n[0],u=n[1],o=t[0],a=o,l=1;if(e&&(r+="Q"+(u[0]-2*o[0]/3)+","+(u[1]-2*o[1]/3)+","+u[0]+","+u[1],i=n[1],l=2),t.length>1){a=t[1],u=n[l],l++,r+="C"+(i[0]+o[0])+","+(i[1]+o[1])+","+(u[0]-a[0])+","+(u[1]-a[1])+","+u[0]+","+u[1];for(var c=2;c<t.length;c++,l++)u=n[l],a=t[c],r+="S"+(u[0]-a[0])+","+(u[1]-a[1])+","+u[0]+","+u[1]}if(e){var f=n[l];r+="Q"+(u[0]+2*a[0]/3)+","+(u[1]+2*a[1]/3)+","+f[0]+","+f[1]}return r}function Cu(n,t){for(var e,r=[],i=(1-t)/2,u=n[0],o=n[1],a=1,l=n.length;++a<l;)e=u,u=o,o=n[a],r.push([i*(o[0]-e[0]),i*(o[1]-e[1])]);return r}function zu(n){if(n.length<3)return xu(n);var t=1,e=n.length,r=n[0],i=r[0],u=r[1],o=[i,i,i,(r=n[1])[0]],a=[u,u,u,r[1]],l=[i,",",u,"L",Ru(Pl,o),",",Ru(Pl,a)];for(n.push(n[e-1]);++t<=e;)r=n[t],o.shift(),o.push(r[0]),a.shift(),a.push(r[1]),Du(l,o,a);return n.pop(),l.push("L",r),l.join("")}function Lu(n){if(n.length<4)return xu(n);for(var t,e=[],r=-1,i=n.length,u=[0],o=[0];++r<3;)t=n[r],u.push(t[0]),o.push(t[1]);for(e.push(Ru(Pl,u)+","+Ru(Pl,o)),--r;++r<i;)t=n[r],u.shift(),u.push(t[0]),o.shift(),o.push(t[1]),Du(e,u,o);return e.join("")}function qu(n){for(var t,e,r=-1,i=n.length,u=i+4,o=[],a=[];++r<4;)e=n[r%i],o.push(e[0]),a.push(e[1]);for(t=[Ru(Pl,o),",",Ru(Pl,a)],--r;++r<u;)e=n[r%i],o.shift(),o.push(e[0]),a.shift(),a.push(e[1]),Du(t,o,a);return t.join("")}function Tu(n,t){var e=n.length-1;if(e)for(var r,i,u=n[0][0],o=n[0][1],a=n[e][0]-u,l=n[e][1]-o,c=-1;++c<=e;)r=n[c],i=c/e,r[0]=t*r[0]+(1-t)*(u+i*a),r[1]=t*r[1]+(1-t)*(o+i*l);return zu(n)}function Ru(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]+n[3]*t[3]}function Du(n,t,e){n.push("C",Ru(Rl,t),",",Ru(Rl,e),",",Ru(Dl,t),",",Ru(Dl,e),",",Ru(Pl,t),",",Ru(Pl,e))}function Pu(n,t){return(t[1]-n[1])/(t[0]-n[0])}function Uu(n){for(var t=0,e=n.length-1,r=[],i=n[0],u=n[1],o=r[0]=Pu(i,u);++t<e;)r[t]=(o+(o=Pu(i=u,u=n[t+1])))/2;return r[t]=o,r}function ju(n){for(var t,e,r,i,u=[],o=Uu(n),a=-1,l=n.length-1;++a<l;)t=Pu(n[a],n[a+1]),xo(t)<Uo?o[a]=o[a+1]=0:(e=o[a]/t,r=o[a+1]/t,i=e*e+r*r,i>9&&(i=3*t/Math.sqrt(i),o[a]=i*e,o[a+1]=i*r));for(a=-1;++a<=l;)i=(n[Math.min(l,a+1)][0]-n[Math.max(0,a-1)][0])/(6*(1+o[a]*o[a])),u.push([i||0,o[a]*i||0]);return u}function Fu(n){return n.length<3?xu(n):n[0]+Au(n,ju(n))}function Hu(n){for(var t,e,r,i=-1,u=n.length;++i<u;)t=n[i],e=t[0],r=t[1]-Io,t[0]=e*Math.cos(r),t[1]=e*Math.sin(r);return n}function Ou(n){function t(t){function l(){v.push("M",a(n(y),s),f,c(n(d.reverse()),s),"Z")}for(var h,p,g,v=[],d=[],y=[],m=-1,M=t.length,x=En(e),b=En(i),_=e===r?function(){
return p}:En(r),w=i===u?function(){return g}:En(u);++m<M;)o.call(this,h=t[m],m)?(d.push([p=+x.call(this,h,m),g=+b.call(this,h,m)]),y.push([+_.call(this,h,m),+w.call(this,h,m)])):d.length&&(l(),d=[],y=[]);return d.length&&l(),v.length?v.join(""):null}var e=Ce,r=Ce,i=0,u=ze,o=zt,a=xu,l=a.key,c=a,f="L",s=.7;return t.x=function(n){return arguments.length?(e=r=n,t):r},t.x0=function(n){return arguments.length?(e=n,t):e},t.x1=function(n){return arguments.length?(r=n,t):r},t.y=function(n){return arguments.length?(i=u=n,t):u},t.y0=function(n){return arguments.length?(i=n,t):i},t.y1=function(n){return arguments.length?(u=n,t):u},t.defined=function(n){return arguments.length?(o=n,t):o},t.interpolate=function(n){return arguments.length?(l="function"==typeof n?a=n:(a=Tl.get(n)||xu).key,c=a.reverse||a,f=a.closed?"M":"L",t):l},t.tension=function(n){return arguments.length?(s=n,t):s},t}function Iu(n){return n.radius}function Yu(n){return[n.x,n.y]}function Zu(n){return function(){var t=n.apply(this,arguments),e=t[0],r=t[1]-Io;return[e*Math.cos(r),e*Math.sin(r)]}}function Vu(){return 64}function Xu(){return"circle"}function $u(n){var t=Math.sqrt(n/Fo);return"M0,"+t+"A"+t+","+t+" 0 1,1 0,"+-t+"A"+t+","+t+" 0 1,1 0,"+t+"Z"}function Bu(n){return function(){var t,e,r;(t=this[n])&&(r=t[e=t.active])&&(r.timer.c=null,r.timer.t=NaN,--t.count?delete t[e]:delete this[n],t.active+=.5,r.event&&r.event.interrupt.call(this,this.__data__,r.index))}}function Wu(n,t,e){return ko(n,Yl),n.namespace=t,n.id=e,n}function Ju(n,t,e,r){var i=n.id,u=n.namespace;return Y(n,"function"==typeof e?function(n,o,a){n[u][i].tween.set(t,r(e.call(n,n.__data__,o,a)))}:(e=r(e),function(n){n[u][i].tween.set(t,e)}))}function Gu(n){return null==n&&(n=""),function(){this.textContent=n}}function Ku(n){return null==n?"__transition__":"__transition_"+n+"__"}function Qu(n,t,e,r,i){function u(n){var t=v.delay;return f.t=t+l,n>=t?o(n-t):void(f.c=o)}function o(e){var i=g.active,u=g[i];u&&(u.timer.c=null,u.timer.t=NaN,--g.count,delete g[i],u.event&&u.event.interrupt.call(n,n.__data__,u.index));for(var o in g)if(r>+o){var c=g[o];c.timer.c=null,c.timer.t=NaN,--g.count,delete g[o]}f.c=a,qn(function(){return f.c&&a(e||1)&&(f.c=null,f.t=NaN),1},0,l),g.active=r,v.event&&v.event.start.call(n,n.__data__,t),p=[],v.tween.forEach(function(e,r){(r=r.call(n,n.__data__,t))&&p.push(r)}),h=v.ease,s=v.duration}function a(i){for(var u=i/s,o=h(u),a=p.length;a>0;)p[--a].call(n,o);return u>=1?(v.event&&v.event.end.call(n,n.__data__,t),--g.count?delete g[r]:delete n[e],1):void 0}var l,f,s,h,p,g=n[e]||(n[e]={active:0,count:0}),v=g[r];v||(l=i.time,f=qn(u,0,l),v=g[r]={tween:new c,time:l,timer:f,delay:i.delay,duration:i.duration,ease:i.ease,index:t},i=null,++g.count)}function no(n,t,e){n.attr("transform",function(n){var r=t(n);return"translate("+(isFinite(r)?r:e(n))+",0)"})}function to(n,t,e){n.attr("transform",function(n){var r=t(n);return"translate(0,"+(isFinite(r)?r:e(n))+")"})}function eo(n){return n.toISOString()}function ro(n,t,e){function r(t){return n(t)}function i(n,e){var r=n[1]-n[0],i=r/e,u=ao.bisect(Kl,i);return u==Kl.length?[t.year,Ki(n.map(function(n){return n/31536e6}),e)[2]]:u?t[i/Kl[u-1]<Kl[u]/i?u-1:u]:[tc,Ki(n,e)[2]]}return r.invert=function(t){return io(n.invert(t))},r.domain=function(t){return arguments.length?(n.domain(t),r):n.domain().map(io)},r.nice=function(n,t){function e(e){return!isNaN(e)&&!n.range(e,io(+e+1),t).length}var u=r.domain(),o=Yi(u),a=null==n?i(o,10):"number"==typeof n&&i(o,n);return a&&(n=a[0],t=a[1]),r.domain(Xi(u,t>1?{floor:function(t){for(;e(t=n.floor(t));)t=io(t-1);return t},ceil:function(t){for(;e(t=n.ceil(t));)t=io(+t+1);return t}}:n))},r.ticks=function(n,t){var e=Yi(r.domain()),u=null==n?i(e,10):"number"==typeof n?i(e,n):!n.range&&[{range:n},t];return u&&(n=u[0],t=u[1]),n.range(e[0],io(+e[1]+1),1>t?1:t)},r.tickFormat=function(){return e},r.copy=function(){return ro(n.copy(),t,e)},Ji(r,n)}function io(n){return new Date(n)}function uo(n){return JSON.parse(n.responseText)}function oo(n){var t=fo.createRange();return t.selectNode(fo.body),t.createContextualFragment(n.responseText)}var ao={version:"3.5.17"},lo=[].slice,co=function(n){return lo.call(n)},fo=this.document;if(fo)try{co(fo.documentElement.childNodes)[0].nodeType}catch(so){co=function(n){for(var t=n.length,e=new Array(t);t--;)e[t]=n[t];return e}}if(Date.now||(Date.now=function(){return+new Date}),fo)try{fo.createElement("DIV").style.setProperty("opacity",0,"")}catch(ho){var po=this.Element.prototype,go=po.setAttribute,vo=po.setAttributeNS,yo=this.CSSStyleDeclaration.prototype,mo=yo.setProperty;po.setAttribute=function(n,t){go.call(this,n,t+"")},po.setAttributeNS=function(n,t,e){vo.call(this,n,t,e+"")},yo.setProperty=function(n,t,e){mo.call(this,n,t+"",e)}}ao.ascending=e,ao.descending=function(n,t){return n>t?-1:t>n?1:t>=n?0:NaN},ao.min=function(n,t){var e,r,i=-1,u=n.length;if(1===arguments.length){for(;++i<u;)if(null!=(r=n[i])&&r>=r){e=r;break}for(;++i<u;)null!=(r=n[i])&&e>r&&(e=r)}else{for(;++i<u;)if(null!=(r=t.call(n,n[i],i))&&r>=r){e=r;break}for(;++i<u;)null!=(r=t.call(n,n[i],i))&&e>r&&(e=r)}return e},ao.max=function(n,t){var e,r,i=-1,u=n.length;if(1===arguments.length){for(;++i<u;)if(null!=(r=n[i])&&r>=r){e=r;break}for(;++i<u;)null!=(r=n[i])&&r>e&&(e=r)}else{for(;++i<u;)if(null!=(r=t.call(n,n[i],i))&&r>=r){e=r;break}for(;++i<u;)null!=(r=t.call(n,n[i],i))&&r>e&&(e=r)}return e},ao.extent=function(n,t){var e,r,i,u=-1,o=n.length;if(1===arguments.length){for(;++u<o;)if(null!=(r=n[u])&&r>=r){e=i=r;break}for(;++u<o;)null!=(r=n[u])&&(e>r&&(e=r),r>i&&(i=r))}else{for(;++u<o;)if(null!=(r=t.call(n,n[u],u))&&r>=r){e=i=r;break}for(;++u<o;)null!=(r=t.call(n,n[u],u))&&(e>r&&(e=r),r>i&&(i=r))}return[e,i]},ao.sum=function(n,t){var e,r=0,u=n.length,o=-1;if(1===arguments.length)for(;++o<u;)i(e=+n[o])&&(r+=e);else for(;++o<u;)i(e=+t.call(n,n[o],o))&&(r+=e);return r},ao.mean=function(n,t){var e,u=0,o=n.length,a=-1,l=o;if(1===arguments.length)for(;++a<o;)i(e=r(n[a]))?u+=e:--l;else for(;++a<o;)i(e=r(t.call(n,n[a],a)))?u+=e:--l;return l?u/l:void 0},ao.quantile=function(n,t){var e=(n.length-1)*t+1,r=Math.floor(e),i=+n[r-1],u=e-r;return u?i+u*(n[r]-i):i},ao.median=function(n,t){var u,o=[],a=n.length,l=-1;if(1===arguments.length)for(;++l<a;)i(u=r(n[l]))&&o.push(u);else for(;++l<a;)i(u=r(t.call(n,n[l],l)))&&o.push(u);return o.length?ao.quantile(o.sort(e),.5):void 0},ao.variance=function(n,t){var e,u,o=n.length,a=0,l=0,c=-1,f=0;if(1===arguments.length)for(;++c<o;)i(e=r(n[c]))&&(u=e-a,a+=u/++f,l+=u*(e-a));else for(;++c<o;)i(e=r(t.call(n,n[c],c)))&&(u=e-a,a+=u/++f,l+=u*(e-a));return f>1?l/(f-1):void 0},ao.deviation=function(){var n=ao.variance.apply(this,arguments);return n?Math.sqrt(n):n};var Mo=u(e);ao.bisectLeft=Mo.left,ao.bisect=ao.bisectRight=Mo.right,ao.bisector=function(n){return u(1===n.length?function(t,r){return e(n(t),r)}:n)},ao.shuffle=function(n,t,e){(u=arguments.length)<3&&(e=n.length,2>u&&(t=0));for(var r,i,u=e-t;u;)i=Math.random()*u--|0,r=n[u+t],n[u+t]=n[i+t],n[i+t]=r;return n},ao.permute=function(n,t){for(var e=t.length,r=new Array(e);e--;)r[e]=n[t[e]];return r},ao.pairs=function(n){for(var t,e=0,r=n.length-1,i=n[0],u=new Array(0>r?0:r);r>e;)u[e]=[t=i,i=n[++e]];return u},ao.transpose=function(n){if(!(i=n.length))return[];for(var t=-1,e=ao.min(n,o),r=new Array(e);++t<e;)for(var i,u=-1,a=r[t]=new Array(i);++u<i;)a[u]=n[u][t];return r},ao.zip=function(){return ao.transpose(arguments)},ao.keys=function(n){var t=[];for(var e in n)t.push(e);return t},ao.values=function(n){var t=[];for(var e in n)t.push(n[e]);return t},ao.entries=function(n){var t=[];for(var e in n)t.push({key:e,value:n[e]});return t},ao.merge=function(n){for(var t,e,r,i=n.length,u=-1,o=0;++u<i;)o+=n[u].length;for(e=new Array(o);--i>=0;)for(r=n[i],t=r.length;--t>=0;)e[--o]=r[t];return e};var xo=Math.abs;ao.range=function(n,t,e){if(arguments.length<3&&(e=1,arguments.length<2&&(t=n,n=0)),(t-n)/e===1/0)throw new Error("infinite range");var r,i=[],u=a(xo(e)),o=-1;if(n*=u,t*=u,e*=u,0>e)for(;(r=n+e*++o)>t;)i.push(r/u);else for(;(r=n+e*++o)<t;)i.push(r/u);return i},ao.map=function(n,t){var e=new c;if(n instanceof c)n.forEach(function(n,t){e.set(n,t)});else if(Array.isArray(n)){var r,i=-1,u=n.length;if(1===arguments.length)for(;++i<u;)e.set(i,n[i]);else for(;++i<u;)e.set(t.call(n,r=n[i],i),r)}else for(var o in n)e.set(o,n[o]);return e};var bo="__proto__",_o="\x00";l(c,{has:h,get:function(n){return this._[f(n)]},set:function(n,t){return this._[f(n)]=t},remove:p,keys:g,values:function(){var n=[];for(var t in this._)n.push(this._[t]);return n},entries:function(){var n=[];for(var t in this._)n.push({key:s(t),value:this._[t]});return n},size:v,empty:d,forEach:function(n){for(var t in this._)n.call(this,s(t),this._[t])}}),ao.nest=function(){function n(t,o,a){if(a>=u.length)return r?r.call(i,o):e?o.sort(e):o;for(var l,f,s,h,p=-1,g=o.length,v=u[a++],d=new c;++p<g;)(h=d.get(l=v(f=o[p])))?h.push(f):d.set(l,[f]);return t?(f=t(),s=function(e,r){f.set(e,n(t,r,a))}):(f={},s=function(e,r){f[e]=n(t,r,a)}),d.forEach(s),f}function t(n,e){if(e>=u.length)return n;var r=[],i=o[e++];return n.forEach(function(n,i){r.push({key:n,values:t(i,e)})}),i?r.sort(function(n,t){return i(n.key,t.key)}):r}var e,r,i={},u=[],o=[];return i.map=function(t,e){return n(e,t,0)},i.entries=function(e){return t(n(ao.map,e,0),0)},i.key=function(n){return u.push(n),i},i.sortKeys=function(n){return o[u.length-1]=n,i},i.sortValues=function(n){return e=n,i},i.rollup=function(n){return r=n,i},i},ao.set=function(n){var t=new y;if(n)for(var e=0,r=n.length;r>e;++e)t.add(n[e]);return t},l(y,{has:h,add:function(n){return this._[f(n+="")]=!0,n},remove:p,values:g,size:v,empty:d,forEach:function(n){for(var t in this._)n.call(this,s(t))}}),ao.behavior={},ao.rebind=function(n,t){for(var e,r=1,i=arguments.length;++r<i;)n[e=arguments[r]]=M(n,t,t[e]);return n};var wo=["webkit","ms","moz","Moz","o","O"];ao.dispatch=function(){for(var n=new _,t=-1,e=arguments.length;++t<e;)n[arguments[t]]=w(n);return n},_.prototype.on=function(n,t){var e=n.indexOf("."),r="";if(e>=0&&(r=n.slice(e+1),n=n.slice(0,e)),n)return arguments.length<2?this[n].on(r):this[n].on(r,t);if(2===arguments.length){if(null==t)for(n in this)this.hasOwnProperty(n)&&this[n].on(r,null);return this}},ao.event=null,ao.requote=function(n){return n.replace(So,"\\$&")};var So=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g,ko={}.__proto__?function(n,t){n.__proto__=t}:function(n,t){for(var e in t)n[e]=t[e]},No=function(n,t){return t.querySelector(n)},Eo=function(n,t){return t.querySelectorAll(n)},Ao=function(n,t){var e=n.matches||n[x(n,"matchesSelector")];return(Ao=function(n,t){return e.call(n,t)})(n,t)};"function"==typeof Sizzle&&(No=function(n,t){return Sizzle(n,t)[0]||null},Eo=Sizzle,Ao=Sizzle.matchesSelector),ao.selection=function(){return ao.select(fo.documentElement)};var Co=ao.selection.prototype=[];Co.select=function(n){var t,e,r,i,u=[];n=A(n);for(var o=-1,a=this.length;++o<a;){u.push(t=[]),t.parentNode=(r=this[o]).parentNode;for(var l=-1,c=r.length;++l<c;)(i=r[l])?(t.push(e=n.call(i,i.__data__,l,o)),e&&"__data__"in i&&(e.__data__=i.__data__)):t.push(null)}return E(u)},Co.selectAll=function(n){var t,e,r=[];n=C(n);for(var i=-1,u=this.length;++i<u;)for(var o=this[i],a=-1,l=o.length;++a<l;)(e=o[a])&&(r.push(t=co(n.call(e,e.__data__,a,i))),t.parentNode=e);return E(r)};var zo="http://www.w3.org/1999/xhtml",Lo={svg:"http://www.w3.org/2000/svg",xhtml:zo,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};ao.ns={prefix:Lo,qualify:function(n){var t=n.indexOf(":"),e=n;return t>=0&&"xmlns"!==(e=n.slice(0,t))&&(n=n.slice(t+1)),Lo.hasOwnProperty(e)?{space:Lo[e],local:n}:n}},Co.attr=function(n,t){if(arguments.length<2){if("string"==typeof n){var e=this.node();return n=ao.ns.qualify(n),n.local?e.getAttributeNS(n.space,n.local):e.getAttribute(n)}for(t in n)this.each(z(t,n[t]));return this}return this.each(z(n,t))},Co.classed=function(n,t){if(arguments.length<2){if("string"==typeof n){var e=this.node(),r=(n=T(n)).length,i=-1;if(t=e.classList){for(;++i<r;)if(!t.contains(n[i]))return!1}else for(t=e.getAttribute("class");++i<r;)if(!q(n[i]).test(t))return!1;return!0}for(t in n)this.each(R(t,n[t]));return this}return this.each(R(n,t))},Co.style=function(n,e,r){var i=arguments.length;if(3>i){if("string"!=typeof n){2>i&&(e="");for(r in n)this.each(P(r,n[r],e));return this}if(2>i){var u=this.node();return t(u).getComputedStyle(u,null).getPropertyValue(n)}r=""}return this.each(P(n,e,r))},Co.property=function(n,t){if(arguments.length<2){if("string"==typeof n)return this.node()[n];for(t in n)this.each(U(t,n[t]));return this}return this.each(U(n,t))},Co.text=function(n){return arguments.length?this.each("function"==typeof n?function(){var t=n.apply(this,arguments);this.textContent=null==t?"":t}:null==n?function(){this.textContent=""}:function(){this.textContent=n}):this.node().textContent},Co.html=function(n){return arguments.length?this.each("function"==typeof n?function(){var t=n.apply(this,arguments);this.innerHTML=null==t?"":t}:null==n?function(){this.innerHTML=""}:function(){this.innerHTML=n}):this.node().innerHTML},Co.append=function(n){return n=j(n),this.select(function(){return this.appendChild(n.apply(this,arguments))})},Co.insert=function(n,t){return n=j(n),t=A(t),this.select(function(){return this.insertBefore(n.apply(this,arguments),t.apply(this,arguments)||null)})},Co.remove=function(){return this.each(F)},Co.data=function(n,t){function e(n,e){var r,i,u,o=n.length,s=e.length,h=Math.min(o,s),p=new Array(s),g=new Array(s),v=new Array(o);if(t){var d,y=new c,m=new Array(o);for(r=-1;++r<o;)(i=n[r])&&(y.has(d=t.call(i,i.__data__,r))?v[r]=i:y.set(d,i),m[r]=d);for(r=-1;++r<s;)(i=y.get(d=t.call(e,u=e[r],r)))?i!==!0&&(p[r]=i,i.__data__=u):g[r]=H(u),y.set(d,!0);for(r=-1;++r<o;)r in m&&y.get(m[r])!==!0&&(v[r]=n[r])}else{for(r=-1;++r<h;)i=n[r],u=e[r],i?(i.__data__=u,p[r]=i):g[r]=H(u);for(;s>r;++r)g[r]=H(e[r]);for(;o>r;++r)v[r]=n[r]}g.update=p,g.parentNode=p.parentNode=v.parentNode=n.parentNode,a.push(g),l.push(p),f.push(v)}var r,i,u=-1,o=this.length;if(!arguments.length){for(n=new Array(o=(r=this[0]).length);++u<o;)(i=r[u])&&(n[u]=i.__data__);return n}var a=Z([]),l=E([]),f=E([]);if("function"==typeof n)for(;++u<o;)e(r=this[u],n.call(r,r.parentNode.__data__,u));else for(;++u<o;)e(r=this[u],n);return l.enter=function(){return a},l.exit=function(){return f},l},Co.datum=function(n){return arguments.length?this.property("__data__",n):this.property("__data__")},Co.filter=function(n){var t,e,r,i=[];"function"!=typeof n&&(n=O(n));for(var u=0,o=this.length;o>u;u++){i.push(t=[]),t.parentNode=(e=this[u]).parentNode;for(var a=0,l=e.length;l>a;a++)(r=e[a])&&n.call(r,r.__data__,a,u)&&t.push(r)}return E(i)},Co.order=function(){for(var n=-1,t=this.length;++n<t;)for(var e,r=this[n],i=r.length-1,u=r[i];--i>=0;)(e=r[i])&&(u&&u!==e.nextSibling&&u.parentNode.insertBefore(e,u),u=e);return this},Co.sort=function(n){n=I.apply(this,arguments);for(var t=-1,e=this.length;++t<e;)this[t].sort(n);return this.order()},Co.each=function(n){return Y(this,function(t,e,r){n.call(t,t.__data__,e,r)})},Co.call=function(n){var t=co(arguments);return n.apply(t[0]=this,t),this},Co.empty=function(){return!this.node()},Co.node=function(){for(var n=0,t=this.length;t>n;n++)for(var e=this[n],r=0,i=e.length;i>r;r++){var u=e[r];if(u)return u}return null},Co.size=function(){var n=0;return Y(this,function(){++n}),n};var qo=[];ao.selection.enter=Z,ao.selection.enter.prototype=qo,qo.append=Co.append,qo.empty=Co.empty,qo.node=Co.node,qo.call=Co.call,qo.size=Co.size,qo.select=function(n){for(var t,e,r,i,u,o=[],a=-1,l=this.length;++a<l;){r=(i=this[a]).update,o.push(t=[]),t.parentNode=i.parentNode;for(var c=-1,f=i.length;++c<f;)(u=i[c])?(t.push(r[c]=e=n.call(i.parentNode,u.__data__,c,a)),e.__data__=u.__data__):t.push(null)}return E(o)},qo.insert=function(n,t){return arguments.length<2&&(t=V(this)),Co.insert.call(this,n,t)},ao.select=function(t){var e;return"string"==typeof t?(e=[No(t,fo)],e.parentNode=fo.documentElement):(e=[t],e.parentNode=n(t)),E([e])},ao.selectAll=function(n){var t;return"string"==typeof n?(t=co(Eo(n,fo)),t.parentNode=fo.documentElement):(t=co(n),t.parentNode=null),E([t])},Co.on=function(n,t,e){var r=arguments.length;if(3>r){if("string"!=typeof n){2>r&&(t=!1);for(e in n)this.each(X(e,n[e],t));return this}if(2>r)return(r=this.node()["__on"+n])&&r._;e=!1}return this.each(X(n,t,e))};var To=ao.map({mouseenter:"mouseover",mouseleave:"mouseout"});fo&&To.forEach(function(n){"on"+n in fo&&To.remove(n)});var Ro,Do=0;ao.mouse=function(n){return J(n,k())};var Po=this.navigator&&/WebKit/.test(this.navigator.userAgent)?-1:0;ao.touch=function(n,t,e){if(arguments.length<3&&(e=t,t=k().changedTouches),t)for(var r,i=0,u=t.length;u>i;++i)if((r=t[i]).identifier===e)return J(n,r)},ao.behavior.drag=function(){function n(){this.on("mousedown.drag",u).on("touchstart.drag",o)}function e(n,t,e,u,o){return function(){function a(){var n,e,r=t(h,v);r&&(n=r[0]-M[0],e=r[1]-M[1],g|=n|e,M=r,p({type:"drag",x:r[0]+c[0],y:r[1]+c[1],dx:n,dy:e}))}function l(){t(h,v)&&(y.on(u+d,null).on(o+d,null),m(g),p({type:"dragend"}))}var c,f=this,s=ao.event.target.correspondingElement||ao.event.target,h=f.parentNode,p=r.of(f,arguments),g=0,v=n(),d=".drag"+(null==v?"":"-"+v),y=ao.select(e(s)).on(u+d,a).on(o+d,l),m=W(s),M=t(h,v);i?(c=i.apply(f,arguments),c=[c.x-M[0],c.y-M[1]]):c=[0,0],p({type:"dragstart"})}}var r=N(n,"drag","dragstart","dragend"),i=null,u=e(b,ao.mouse,t,"mousemove","mouseup"),o=e(G,ao.touch,m,"touchmove","touchend");return n.origin=function(t){return arguments.length?(i=t,n):i},ao.rebind(n,r,"on")},ao.touches=function(n,t){return arguments.length<2&&(t=k().touches),t?co(t).map(function(t){var e=J(n,t);return e.identifier=t.identifier,e}):[]};var Uo=1e-6,jo=Uo*Uo,Fo=Math.PI,Ho=2*Fo,Oo=Ho-Uo,Io=Fo/2,Yo=Fo/180,Zo=180/Fo,Vo=Math.SQRT2,Xo=2,$o=4;ao.interpolateZoom=function(n,t){var e,r,i=n[0],u=n[1],o=n[2],a=t[0],l=t[1],c=t[2],f=a-i,s=l-u,h=f*f+s*s;if(jo>h)r=Math.log(c/o)/Vo,e=function(n){return[i+n*f,u+n*s,o*Math.exp(Vo*n*r)]};else{var p=Math.sqrt(h),g=(c*c-o*o+$o*h)/(2*o*Xo*p),v=(c*c-o*o-$o*h)/(2*c*Xo*p),d=Math.log(Math.sqrt(g*g+1)-g),y=Math.log(Math.sqrt(v*v+1)-v);r=(y-d)/Vo,e=function(n){var t=n*r,e=rn(d),a=o/(Xo*p)*(e*un(Vo*t+d)-en(d));return[i+a*f,u+a*s,o*e/rn(Vo*t+d)]}}return e.duration=1e3*r,e},ao.behavior.zoom=function(){function n(n){n.on(L,s).on(Wo+".zoom",p).on("dblclick.zoom",g).on(R,h)}function e(n){return[(n[0]-k.x)/k.k,(n[1]-k.y)/k.k]}function r(n){return[n[0]*k.k+k.x,n[1]*k.k+k.y]}function i(n){k.k=Math.max(A[0],Math.min(A[1],n))}function u(n,t){t=r(t),k.x+=n[0]-t[0],k.y+=n[1]-t[1]}function o(t,e,r,o){t.__chart__={x:k.x,y:k.y,k:k.k},i(Math.pow(2,o)),u(d=e,r),t=ao.select(t),C>0&&(t=t.transition().duration(C)),t.call(n.event)}function a(){b&&b.domain(x.range().map(function(n){return(n-k.x)/k.k}).map(x.invert)),w&&w.domain(_.range().map(function(n){return(n-k.y)/k.k}).map(_.invert))}function l(n){z++||n({type:"zoomstart"})}function c(n){a(),n({type:"zoom",scale:k.k,translate:[k.x,k.y]})}function f(n){--z||(n({type:"zoomend"}),d=null)}function s(){function n(){a=1,u(ao.mouse(i),h),c(o)}function r(){s.on(q,null).on(T,null),p(a),f(o)}var i=this,o=D.of(i,arguments),a=0,s=ao.select(t(i)).on(q,n).on(T,r),h=e(ao.mouse(i)),p=W(i);Il.call(i),l(o)}function h(){function n(){var n=ao.touches(g);return p=k.k,n.forEach(function(n){n.identifier in d&&(d[n.identifier]=e(n))}),n}function t(){var t=ao.event.target;ao.select(t).on(x,r).on(b,a),_.push(t);for(var e=ao.event.changedTouches,i=0,u=e.length;u>i;++i)d[e[i].identifier]=null;var l=n(),c=Date.now();if(1===l.length){if(500>c-M){var f=l[0];o(g,f,d[f.identifier],Math.floor(Math.log(k.k)/Math.LN2)+1),S()}M=c}else if(l.length>1){var f=l[0],s=l[1],h=f[0]-s[0],p=f[1]-s[1];y=h*h+p*p}}function r(){var n,t,e,r,o=ao.touches(g);Il.call(g);for(var a=0,l=o.length;l>a;++a,r=null)if(e=o[a],r=d[e.identifier]){if(t)break;n=e,t=r}if(r){var f=(f=e[0]-n[0])*f+(f=e[1]-n[1])*f,s=y&&Math.sqrt(f/y);n=[(n[0]+e[0])/2,(n[1]+e[1])/2],t=[(t[0]+r[0])/2,(t[1]+r[1])/2],i(s*p)}M=null,u(n,t),c(v)}function a(){if(ao.event.touches.length){for(var t=ao.event.changedTouches,e=0,r=t.length;r>e;++e)delete d[t[e].identifier];for(var i in d)return void n()}ao.selectAll(_).on(m,null),w.on(L,s).on(R,h),N(),f(v)}var p,g=this,v=D.of(g,arguments),d={},y=0,m=".zoom-"+ao.event.changedTouches[0].identifier,x="touchmove"+m,b="touchend"+m,_=[],w=ao.select(g),N=W(g);t(),l(v),w.on(L,null).on(R,t)}function p(){var n=D.of(this,arguments);m?clearTimeout(m):(Il.call(this),v=e(d=y||ao.mouse(this)),l(n)),m=setTimeout(function(){m=null,f(n)},50),S(),i(Math.pow(2,.002*Bo())*k.k),u(d,v),c(n)}function g(){var n=ao.mouse(this),t=Math.log(k.k)/Math.LN2;o(this,n,e(n),ao.event.shiftKey?Math.ceil(t)-1:Math.floor(t)+1)}var v,d,y,m,M,x,b,_,w,k={x:0,y:0,k:1},E=[960,500],A=Jo,C=250,z=0,L="mousedown.zoom",q="mousemove.zoom",T="mouseup.zoom",R="touchstart.zoom",D=N(n,"zoomstart","zoom","zoomend");return Wo||(Wo="onwheel"in fo?(Bo=function(){return-ao.event.deltaY*(ao.event.deltaMode?120:1)},"wheel"):"onmousewheel"in fo?(Bo=function(){return ao.event.wheelDelta},"mousewheel"):(Bo=function(){return-ao.event.detail},"MozMousePixelScroll")),n.event=function(n){n.each(function(){var n=D.of(this,arguments),t=k;Hl?ao.select(this).transition().each("start.zoom",function(){k=this.__chart__||{x:0,y:0,k:1},l(n)}).tween("zoom:zoom",function(){var e=E[0],r=E[1],i=d?d[0]:e/2,u=d?d[1]:r/2,o=ao.interpolateZoom([(i-k.x)/k.k,(u-k.y)/k.k,e/k.k],[(i-t.x)/t.k,(u-t.y)/t.k,e/t.k]);return function(t){var r=o(t),a=e/r[2];this.__chart__=k={x:i-r[0]*a,y:u-r[1]*a,k:a},c(n)}}).each("interrupt.zoom",function(){f(n)}).each("end.zoom",function(){f(n)}):(this.__chart__=k,l(n),c(n),f(n))})},n.translate=function(t){return arguments.length?(k={x:+t[0],y:+t[1],k:k.k},a(),n):[k.x,k.y]},n.scale=function(t){return arguments.length?(k={x:k.x,y:k.y,k:null},i(+t),a(),n):k.k},n.scaleExtent=function(t){return arguments.length?(A=null==t?Jo:[+t[0],+t[1]],n):A},n.center=function(t){return arguments.length?(y=t&&[+t[0],+t[1]],n):y},n.size=function(t){return arguments.length?(E=t&&[+t[0],+t[1]],n):E},n.duration=function(t){return arguments.length?(C=+t,n):C},n.x=function(t){return arguments.length?(b=t,x=t.copy(),k={x:0,y:0,k:1},n):b},n.y=function(t){return arguments.length?(w=t,_=t.copy(),k={x:0,y:0,k:1},n):w},ao.rebind(n,D,"on")};var Bo,Wo,Jo=[0,1/0];ao.color=an,an.prototype.toString=function(){return this.rgb()+""},ao.hsl=ln;var Go=ln.prototype=new an;Go.brighter=function(n){return n=Math.pow(.7,arguments.length?n:1),new ln(this.h,this.s,this.l/n)},Go.darker=function(n){return n=Math.pow(.7,arguments.length?n:1),new ln(this.h,this.s,n*this.l)},Go.rgb=function(){return cn(this.h,this.s,this.l)},ao.hcl=fn;var Ko=fn.prototype=new an;Ko.brighter=function(n){return new fn(this.h,this.c,Math.min(100,this.l+Qo*(arguments.length?n:1)))},Ko.darker=function(n){return new fn(this.h,this.c,Math.max(0,this.l-Qo*(arguments.length?n:1)))},Ko.rgb=function(){return sn(this.h,this.c,this.l).rgb()},ao.lab=hn;var Qo=18,na=.95047,ta=1,ea=1.08883,ra=hn.prototype=new an;ra.brighter=function(n){return new hn(Math.min(100,this.l+Qo*(arguments.length?n:1)),this.a,this.b)},ra.darker=function(n){return new hn(Math.max(0,this.l-Qo*(arguments.length?n:1)),this.a,this.b)},ra.rgb=function(){return pn(this.l,this.a,this.b)},ao.rgb=mn;var ia=mn.prototype=new an;ia.brighter=function(n){n=Math.pow(.7,arguments.length?n:1);var t=this.r,e=this.g,r=this.b,i=30;return t||e||r?(t&&i>t&&(t=i),e&&i>e&&(e=i),r&&i>r&&(r=i),new mn(Math.min(255,t/n),Math.min(255,e/n),Math.min(255,r/n))):new mn(i,i,i)},ia.darker=function(n){return n=Math.pow(.7,arguments.length?n:1),new mn(n*this.r,n*this.g,n*this.b)},ia.hsl=function(){return wn(this.r,this.g,this.b)},ia.toString=function(){return"#"+bn(this.r)+bn(this.g)+bn(this.b)};var ua=ao.map({aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074});ua.forEach(function(n,t){ua.set(n,Mn(t))}),ao.functor=En,ao.xhr=An(m),ao.dsv=function(n,t){function e(n,e,u){arguments.length<3&&(u=e,e=null);var o=Cn(n,t,null==e?r:i(e),u);return o.row=function(n){return arguments.length?o.response(null==(e=n)?r:i(n)):e},o}function r(n){return e.parse(n.responseText)}function i(n){return function(t){return e.parse(t.responseText,n)}}function u(t){return t.map(o).join(n)}function o(n){return a.test(n)?'"'+n.replace(/\"/g,'""')+'"':n}var a=new RegExp('["'+n+"\n]"),l=n.charCodeAt(0);return e.parse=function(n,t){var r;return e.parseRows(n,function(n,e){if(r)return r(n,e-1);var i=new Function("d","return {"+n.map(function(n,t){return JSON.stringify(n)+": d["+t+"]"}).join(",")+"}");r=t?function(n,e){return t(i(n),e)}:i})},e.parseRows=function(n,t){function e(){if(f>=c)return o;if(i)return i=!1,u;var t=f;if(34===n.charCodeAt(t)){for(var e=t;e++<c;)if(34===n.charCodeAt(e)){if(34!==n.charCodeAt(e+1))break;++e}f=e+2;var r=n.charCodeAt(e+1);return 13===r?(i=!0,10===n.charCodeAt(e+2)&&++f):10===r&&(i=!0),n.slice(t+1,e).replace(/""/g,'"')}for(;c>f;){var r=n.charCodeAt(f++),a=1;if(10===r)i=!0;else if(13===r)i=!0,10===n.charCodeAt(f)&&(++f,++a);else if(r!==l)continue;return n.slice(t,f-a)}return n.slice(t)}for(var r,i,u={},o={},a=[],c=n.length,f=0,s=0;(r=e())!==o;){for(var h=[];r!==u&&r!==o;)h.push(r),r=e();t&&null==(h=t(h,s++))||a.push(h)}return a},e.format=function(t){if(Array.isArray(t[0]))return e.formatRows(t);var r=new y,i=[];return t.forEach(function(n){for(var t in n)r.has(t)||i.push(r.add(t))}),[i.map(o).join(n)].concat(t.map(function(t){return i.map(function(n){return o(t[n])}).join(n)})).join("\n")},e.formatRows=function(n){return n.map(u).join("\n")},e},ao.csv=ao.dsv(",","text/csv"),ao.tsv=ao.dsv("	","text/tab-separated-values");var oa,aa,la,ca,fa=this[x(this,"requestAnimationFrame")]||function(n){setTimeout(n,17)};ao.timer=function(){qn.apply(this,arguments)},ao.timer.flush=function(){Rn(),Dn()},ao.round=function(n,t){return t?Math.round(n*(t=Math.pow(10,t)))/t:Math.round(n)};var sa=["y","z","a","f","p","n","\xb5","m","","k","M","G","T","P","E","Z","Y"].map(Un);ao.formatPrefix=function(n,t){var e=0;return(n=+n)&&(0>n&&(n*=-1),t&&(n=ao.round(n,Pn(n,t))),e=1+Math.floor(1e-12+Math.log(n)/Math.LN10),e=Math.max(-24,Math.min(24,3*Math.floor((e-1)/3)))),sa[8+e/3]};var ha=/(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i,pa=ao.map({b:function(n){return n.toString(2)},c:function(n){return String.fromCharCode(n)},o:function(n){return n.toString(8)},x:function(n){return n.toString(16)},X:function(n){return n.toString(16).toUpperCase()},g:function(n,t){return n.toPrecision(t)},e:function(n,t){return n.toExponential(t)},f:function(n,t){return n.toFixed(t)},r:function(n,t){return(n=ao.round(n,Pn(n,t))).toFixed(Math.max(0,Math.min(20,Pn(n*(1+1e-15),t))))}}),ga=ao.time={},va=Date;Hn.prototype={getDate:function(){return this._.getUTCDate()},getDay:function(){return this._.getUTCDay()},getFullYear:function(){return this._.getUTCFullYear()},getHours:function(){return this._.getUTCHours()},getMilliseconds:function(){return this._.getUTCMilliseconds()},getMinutes:function(){return this._.getUTCMinutes()},getMonth:function(){return this._.getUTCMonth()},getSeconds:function(){return this._.getUTCSeconds()},getTime:function(){return this._.getTime()},getTimezoneOffset:function(){return 0},valueOf:function(){return this._.valueOf()},setDate:function(){da.setUTCDate.apply(this._,arguments)},setDay:function(){da.setUTCDay.apply(this._,arguments)},setFullYear:function(){da.setUTCFullYear.apply(this._,arguments)},setHours:function(){da.setUTCHours.apply(this._,arguments)},setMilliseconds:function(){da.setUTCMilliseconds.apply(this._,arguments)},setMinutes:function(){da.setUTCMinutes.apply(this._,arguments)},setMonth:function(){da.setUTCMonth.apply(this._,arguments)},setSeconds:function(){da.setUTCSeconds.apply(this._,arguments)},setTime:function(){da.setTime.apply(this._,arguments)}};var da=Date.prototype;ga.year=On(function(n){return n=ga.day(n),n.setMonth(0,1),n},function(n,t){n.setFullYear(n.getFullYear()+t)},function(n){return n.getFullYear()}),ga.years=ga.year.range,ga.years.utc=ga.year.utc.range,ga.day=On(function(n){var t=new va(2e3,0);return t.setFullYear(n.getFullYear(),n.getMonth(),n.getDate()),t},function(n,t){n.setDate(n.getDate()+t)},function(n){return n.getDate()-1}),ga.days=ga.day.range,ga.days.utc=ga.day.utc.range,ga.dayOfYear=function(n){var t=ga.year(n);return Math.floor((n-t-6e4*(n.getTimezoneOffset()-t.getTimezoneOffset()))/864e5)},["sunday","monday","tuesday","wednesday","thursday","friday","saturday"].forEach(function(n,t){t=7-t;var e=ga[n]=On(function(n){return(n=ga.day(n)).setDate(n.getDate()-(n.getDay()+t)%7),n},function(n,t){n.setDate(n.getDate()+7*Math.floor(t))},function(n){var e=ga.year(n).getDay();return Math.floor((ga.dayOfYear(n)+(e+t)%7)/7)-(e!==t)});ga[n+"s"]=e.range,ga[n+"s"].utc=e.utc.range,ga[n+"OfYear"]=function(n){var e=ga.year(n).getDay();return Math.floor((ga.dayOfYear(n)+(e+t)%7)/7)}}),ga.week=ga.sunday,ga.weeks=ga.sunday.range,ga.weeks.utc=ga.sunday.utc.range,ga.weekOfYear=ga.sundayOfYear;var ya={"-":"",_:" ",0:"0"},ma=/^\s*\d+/,Ma=/^%/;ao.locale=function(n){return{numberFormat:jn(n),timeFormat:Yn(n)}};var xa=ao.locale({decimal:".",thousands:",",grouping:[3],currency:["$",""],dateTime:"%a %b %e %X %Y",date:"%m/%d/%Y",time:"%H:%M:%S",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});ao.format=xa.numberFormat,ao.geo={},ft.prototype={s:0,t:0,add:function(n){st(n,this.t,ba),st(ba.s,this.s,this),this.s?this.t+=ba.t:this.s=ba.t},reset:function(){this.s=this.t=0},valueOf:function(){return this.s}};var ba=new ft;ao.geo.stream=function(n,t){n&&_a.hasOwnProperty(n.type)?_a[n.type](n,t):ht(n,t)};var _a={Feature:function(n,t){ht(n.geometry,t)},FeatureCollection:function(n,t){for(var e=n.features,r=-1,i=e.length;++r<i;)ht(e[r].geometry,t)}},wa={Sphere:function(n,t){t.sphere()},Point:function(n,t){n=n.coordinates,t.point(n[0],n[1],n[2])},MultiPoint:function(n,t){for(var e=n.coordinates,r=-1,i=e.length;++r<i;)n=e[r],t.point(n[0],n[1],n[2])},LineString:function(n,t){pt(n.coordinates,t,0)},MultiLineString:function(n,t){for(var e=n.coordinates,r=-1,i=e.length;++r<i;)pt(e[r],t,0)},Polygon:function(n,t){gt(n.coordinates,t)},MultiPolygon:function(n,t){for(var e=n.coordinates,r=-1,i=e.length;++r<i;)gt(e[r],t)},GeometryCollection:function(n,t){for(var e=n.geometries,r=-1,i=e.length;++r<i;)ht(e[r],t)}};ao.geo.area=function(n){return Sa=0,ao.geo.stream(n,Na),Sa};var Sa,ka=new ft,Na={sphere:function(){Sa+=4*Fo},point:b,lineStart:b,lineEnd:b,polygonStart:function(){ka.reset(),Na.lineStart=vt},polygonEnd:function(){var n=2*ka;Sa+=0>n?4*Fo+n:n,Na.lineStart=Na.lineEnd=Na.point=b}};ao.geo.bounds=function(){function n(n,t){M.push(x=[f=n,h=n]),s>t&&(s=t),t>p&&(p=t)}function t(t,e){var r=dt([t*Yo,e*Yo]);if(y){var i=mt(y,r),u=[i[1],-i[0],0],o=mt(u,i);bt(o),o=_t(o);var l=t-g,c=l>0?1:-1,v=o[0]*Zo*c,d=xo(l)>180;if(d^(v>c*g&&c*t>v)){var m=o[1]*Zo;m>p&&(p=m)}else if(v=(v+360)%360-180,d^(v>c*g&&c*t>v)){var m=-o[1]*Zo;s>m&&(s=m)}else s>e&&(s=e),e>p&&(p=e);d?g>t?a(f,t)>a(f,h)&&(h=t):a(t,h)>a(f,h)&&(f=t):h>=f?(f>t&&(f=t),t>h&&(h=t)):t>g?a(f,t)>a(f,h)&&(h=t):a(t,h)>a(f,h)&&(f=t)}else n(t,e);y=r,g=t}function e(){b.point=t}function r(){x[0]=f,x[1]=h,b.point=n,y=null}function i(n,e){if(y){var r=n-g;m+=xo(r)>180?r+(r>0?360:-360):r}else v=n,d=e;Na.point(n,e),t(n,e)}function u(){Na.lineStart()}function o(){i(v,d),Na.lineEnd(),xo(m)>Uo&&(f=-(h=180)),x[0]=f,x[1]=h,y=null}function a(n,t){return(t-=n)<0?t+360:t}function l(n,t){return n[0]-t[0]}function c(n,t){return t[0]<=t[1]?t[0]<=n&&n<=t[1]:n<t[0]||t[1]<n}var f,s,h,p,g,v,d,y,m,M,x,b={point:n,lineStart:e,lineEnd:r,polygonStart:function(){b.point=i,b.lineStart=u,b.lineEnd=o,m=0,Na.polygonStart()},polygonEnd:function(){Na.polygonEnd(),b.point=n,b.lineStart=e,b.lineEnd=r,0>ka?(f=-(h=180),s=-(p=90)):m>Uo?p=90:-Uo>m&&(s=-90),x[0]=f,x[1]=h}};return function(n){p=h=-(f=s=1/0),M=[],ao.geo.stream(n,b);var t=M.length;if(t){M.sort(l);for(var e,r=1,i=M[0],u=[i];t>r;++r)e=M[r],c(e[0],i)||c(e[1],i)?(a(i[0],e[1])>a(i[0],i[1])&&(i[1]=e[1]),a(e[0],i[1])>a(i[0],i[1])&&(i[0]=e[0])):u.push(i=e);for(var o,e,g=-(1/0),t=u.length-1,r=0,i=u[t];t>=r;i=e,++r)e=u[r],(o=a(i[1],e[0]))>g&&(g=o,f=e[0],h=i[1])}return M=x=null,f===1/0||s===1/0?[[NaN,NaN],[NaN,NaN]]:[[f,s],[h,p]]}}(),ao.geo.centroid=function(n){Ea=Aa=Ca=za=La=qa=Ta=Ra=Da=Pa=Ua=0,ao.geo.stream(n,ja);var t=Da,e=Pa,r=Ua,i=t*t+e*e+r*r;return jo>i&&(t=qa,e=Ta,r=Ra,Uo>Aa&&(t=Ca,e=za,r=La),i=t*t+e*e+r*r,jo>i)?[NaN,NaN]:[Math.atan2(e,t)*Zo,tn(r/Math.sqrt(i))*Zo]};var Ea,Aa,Ca,za,La,qa,Ta,Ra,Da,Pa,Ua,ja={sphere:b,point:St,lineStart:Nt,lineEnd:Et,polygonStart:function(){ja.lineStart=At},polygonEnd:function(){ja.lineStart=Nt}},Fa=Rt(zt,jt,Ht,[-Fo,-Fo/2]),Ha=1e9;ao.geo.clipExtent=function(){var n,t,e,r,i,u,o={stream:function(n){return i&&(i.valid=!1),i=u(n),i.valid=!0,i},extent:function(a){return arguments.length?(u=Zt(n=+a[0][0],t=+a[0][1],e=+a[1][0],r=+a[1][1]),i&&(i.valid=!1,i=null),o):[[n,t],[e,r]]}};return o.extent([[0,0],[960,500]])},(ao.geo.conicEqualArea=function(){return Vt(Xt)}).raw=Xt,ao.geo.albers=function(){return ao.geo.conicEqualArea().rotate([96,0]).center([-.6,38.7]).parallels([29.5,45.5]).scale(1070)},ao.geo.albersUsa=function(){function n(n){var u=n[0],o=n[1];return t=null,e(u,o),t||(r(u,o),t)||i(u,o),t}var t,e,r,i,u=ao.geo.albers(),o=ao.geo.conicEqualArea().rotate([154,0]).center([-2,58.5]).parallels([55,65]),a=ao.geo.conicEqualArea().rotate([157,0]).center([-3,19.9]).parallels([8,18]),l={point:function(n,e){t=[n,e]}};return n.invert=function(n){var t=u.scale(),e=u.translate(),r=(n[0]-e[0])/t,i=(n[1]-e[1])/t;return(i>=.12&&.234>i&&r>=-.425&&-.214>r?o:i>=.166&&.234>i&&r>=-.214&&-.115>r?a:u).invert(n)},n.stream=function(n){var t=u.stream(n),e=o.stream(n),r=a.stream(n);return{point:function(n,i){t.point(n,i),e.point(n,i),r.point(n,i)},sphere:function(){t.sphere(),e.sphere(),r.sphere()},lineStart:function(){t.lineStart(),e.lineStart(),r.lineStart()},lineEnd:function(){t.lineEnd(),e.lineEnd(),r.lineEnd()},polygonStart:function(){t.polygonStart(),e.polygonStart(),r.polygonStart()},polygonEnd:function(){t.polygonEnd(),e.polygonEnd(),r.polygonEnd()}}},n.precision=function(t){return arguments.length?(u.precision(t),o.precision(t),a.precision(t),n):u.precision()},n.scale=function(t){return arguments.length?(u.scale(t),o.scale(.35*t),a.scale(t),n.translate(u.translate())):u.scale()},n.translate=function(t){if(!arguments.length)return u.translate();var c=u.scale(),f=+t[0],s=+t[1];return e=u.translate(t).clipExtent([[f-.455*c,s-.238*c],[f+.455*c,s+.238*c]]).stream(l).point,r=o.translate([f-.307*c,s+.201*c]).clipExtent([[f-.425*c+Uo,s+.12*c+Uo],[f-.214*c-Uo,s+.234*c-Uo]]).stream(l).point,i=a.translate([f-.205*c,s+.212*c]).clipExtent([[f-.214*c+Uo,s+.166*c+Uo],[f-.115*c-Uo,s+.234*c-Uo]]).stream(l).point,n},n.scale(1070)};var Oa,Ia,Ya,Za,Va,Xa,$a={point:b,lineStart:b,lineEnd:b,polygonStart:function(){Ia=0,$a.lineStart=$t},polygonEnd:function(){$a.lineStart=$a.lineEnd=$a.point=b,Oa+=xo(Ia/2)}},Ba={point:Bt,lineStart:b,lineEnd:b,polygonStart:b,polygonEnd:b},Wa={point:Gt,lineStart:Kt,lineEnd:Qt,polygonStart:function(){Wa.lineStart=ne},polygonEnd:function(){Wa.point=Gt,Wa.lineStart=Kt,Wa.lineEnd=Qt}};ao.geo.path=function(){function n(n){return n&&("function"==typeof a&&u.pointRadius(+a.apply(this,arguments)),o&&o.valid||(o=i(u)),ao.geo.stream(n,o)),u.result()}function t(){return o=null,n}var e,r,i,u,o,a=4.5;return n.area=function(n){return Oa=0,ao.geo.stream(n,i($a)),Oa},n.centroid=function(n){return Ca=za=La=qa=Ta=Ra=Da=Pa=Ua=0,ao.geo.stream(n,i(Wa)),Ua?[Da/Ua,Pa/Ua]:Ra?[qa/Ra,Ta/Ra]:La?[Ca/La,za/La]:[NaN,NaN]},n.bounds=function(n){return Va=Xa=-(Ya=Za=1/0),ao.geo.stream(n,i(Ba)),[[Ya,Za],[Va,Xa]]},n.projection=function(n){return arguments.length?(i=(e=n)?n.stream||re(n):m,t()):e},n.context=function(n){return arguments.length?(u=null==(r=n)?new Wt:new te(n),"function"!=typeof a&&u.pointRadius(a),t()):r},n.pointRadius=function(t){return arguments.length?(a="function"==typeof t?t:(u.pointRadius(+t),+t),n):a},n.projection(ao.geo.albersUsa()).context(null)},ao.geo.transform=function(n){return{stream:function(t){var e=new ie(t);for(var r in n)e[r]=n[r];return e}}},ie.prototype={point:function(n,t){this.stream.point(n,t)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}},ao.geo.projection=oe,ao.geo.projectionMutator=ae,(ao.geo.equirectangular=function(){return oe(ce)}).raw=ce.invert=ce,ao.geo.rotation=function(n){function t(t){return t=n(t[0]*Yo,t[1]*Yo),t[0]*=Zo,t[1]*=Zo,t}return n=se(n[0]%360*Yo,n[1]*Yo,n.length>2?n[2]*Yo:0),t.invert=function(t){return t=n.invert(t[0]*Yo,t[1]*Yo),t[0]*=Zo,t[1]*=Zo,t},t},fe.invert=ce,ao.geo.circle=function(){function n(){var n="function"==typeof r?r.apply(this,arguments):r,t=se(-n[0]*Yo,-n[1]*Yo,0).invert,i=[];return e(null,null,1,{point:function(n,e){i.push(n=t(n,e)),n[0]*=Zo,n[1]*=Zo}}),{type:"Polygon",coordinates:[i]}}var t,e,r=[0,0],i=6;return n.origin=function(t){return arguments.length?(r=t,n):r},n.angle=function(r){return arguments.length?(e=ve((t=+r)*Yo,i*Yo),n):t},n.precision=function(r){return arguments.length?(e=ve(t*Yo,(i=+r)*Yo),n):i},n.angle(90)},ao.geo.distance=function(n,t){var e,r=(t[0]-n[0])*Yo,i=n[1]*Yo,u=t[1]*Yo,o=Math.sin(r),a=Math.cos(r),l=Math.sin(i),c=Math.cos(i),f=Math.sin(u),s=Math.cos(u);return Math.atan2(Math.sqrt((e=s*o)*e+(e=c*f-l*s*a)*e),l*f+c*s*a)},ao.geo.graticule=function(){function n(){return{type:"MultiLineString",coordinates:t()}}function t(){return ao.range(Math.ceil(u/d)*d,i,d).map(h).concat(ao.range(Math.ceil(c/y)*y,l,y).map(p)).concat(ao.range(Math.ceil(r/g)*g,e,g).filter(function(n){return xo(n%d)>Uo}).map(f)).concat(ao.range(Math.ceil(a/v)*v,o,v).filter(function(n){return xo(n%y)>Uo}).map(s))}var e,r,i,u,o,a,l,c,f,s,h,p,g=10,v=g,d=90,y=360,m=2.5;return n.lines=function(){return t().map(function(n){return{type:"LineString",coordinates:n}})},n.outline=function(){return{type:"Polygon",coordinates:[h(u).concat(p(l).slice(1),h(i).reverse().slice(1),p(c).reverse().slice(1))]}},n.extent=function(t){return arguments.length?n.majorExtent(t).minorExtent(t):n.minorExtent()},n.majorExtent=function(t){return arguments.length?(u=+t[0][0],i=+t[1][0],c=+t[0][1],l=+t[1][1],u>i&&(t=u,u=i,i=t),c>l&&(t=c,c=l,l=t),n.precision(m)):[[u,c],[i,l]]},n.minorExtent=function(t){return arguments.length?(r=+t[0][0],e=+t[1][0],a=+t[0][1],o=+t[1][1],r>e&&(t=r,r=e,e=t),a>o&&(t=a,a=o,o=t),n.precision(m)):[[r,a],[e,o]]},n.step=function(t){return arguments.length?n.majorStep(t).minorStep(t):n.minorStep()},n.majorStep=function(t){return arguments.length?(d=+t[0],y=+t[1],n):[d,y]},n.minorStep=function(t){return arguments.length?(g=+t[0],v=+t[1],n):[g,v]},n.precision=function(t){return arguments.length?(m=+t,f=ye(a,o,90),s=me(r,e,m),h=ye(c,l,90),p=me(u,i,m),n):m},n.majorExtent([[-180,-90+Uo],[180,90-Uo]]).minorExtent([[-180,-80-Uo],[180,80+Uo]])},ao.geo.greatArc=function(){function n(){return{type:"LineString",coordinates:[t||r.apply(this,arguments),e||i.apply(this,arguments)]}}var t,e,r=Me,i=xe;return n.distance=function(){return ao.geo.distance(t||r.apply(this,arguments),e||i.apply(this,arguments))},n.source=function(e){return arguments.length?(r=e,t="function"==typeof e?null:e,n):r},n.target=function(t){return arguments.length?(i=t,e="function"==typeof t?null:t,n):i},n.precision=function(){return arguments.length?n:0},n},ao.geo.interpolate=function(n,t){return be(n[0]*Yo,n[1]*Yo,t[0]*Yo,t[1]*Yo)},ao.geo.length=function(n){return Ja=0,ao.geo.stream(n,Ga),Ja};var Ja,Ga={sphere:b,point:b,lineStart:_e,lineEnd:b,polygonStart:b,polygonEnd:b},Ka=we(function(n){return Math.sqrt(2/(1+n))},function(n){return 2*Math.asin(n/2)});(ao.geo.azimuthalEqualArea=function(){return oe(Ka)}).raw=Ka;var Qa=we(function(n){var t=Math.acos(n);return t&&t/Math.sin(t)},m);(ao.geo.azimuthalEquidistant=function(){return oe(Qa)}).raw=Qa,(ao.geo.conicConformal=function(){return Vt(Se)}).raw=Se,(ao.geo.conicEquidistant=function(){return Vt(ke)}).raw=ke;var nl=we(function(n){return 1/n},Math.atan);(ao.geo.gnomonic=function(){return oe(nl)}).raw=nl,Ne.invert=function(n,t){return[n,2*Math.atan(Math.exp(t))-Io]},(ao.geo.mercator=function(){return Ee(Ne)}).raw=Ne;var tl=we(function(){return 1},Math.asin);(ao.geo.orthographic=function(){return oe(tl)}).raw=tl;var el=we(function(n){return 1/(1+n)},function(n){return 2*Math.atan(n)});(ao.geo.stereographic=function(){return oe(el)}).raw=el,Ae.invert=function(n,t){return[-t,2*Math.atan(Math.exp(n))-Io]},(ao.geo.transverseMercator=function(){var n=Ee(Ae),t=n.center,e=n.rotate;return n.center=function(n){return n?t([-n[1],n[0]]):(n=t(),[n[1],-n[0]])},n.rotate=function(n){return n?e([n[0],n[1],n.length>2?n[2]+90:90]):(n=e(),[n[0],n[1],n[2]-90])},e([0,0,90])}).raw=Ae,ao.geom={},ao.geom.hull=function(n){function t(n){if(n.length<3)return[];var t,i=En(e),u=En(r),o=n.length,a=[],l=[];for(t=0;o>t;t++)a.push([+i.call(this,n[t],t),+u.call(this,n[t],t),t]);for(a.sort(qe),t=0;o>t;t++)l.push([a[t][0],-a[t][1]]);var c=Le(a),f=Le(l),s=f[0]===c[0],h=f[f.length-1]===c[c.length-1],p=[];for(t=c.length-1;t>=0;--t)p.push(n[a[c[t]][2]]);for(t=+s;t<f.length-h;++t)p.push(n[a[f[t]][2]]);return p}var e=Ce,r=ze;return arguments.length?t(n):(t.x=function(n){return arguments.length?(e=n,t):e},t.y=function(n){return arguments.length?(r=n,t):r},t)},ao.geom.polygon=function(n){return ko(n,rl),n};var rl=ao.geom.polygon.prototype=[];rl.area=function(){for(var n,t=-1,e=this.length,r=this[e-1],i=0;++t<e;)n=r,r=this[t],i+=n[1]*r[0]-n[0]*r[1];return.5*i},rl.centroid=function(n){var t,e,r=-1,i=this.length,u=0,o=0,a=this[i-1];for(arguments.length||(n=-1/(6*this.area()));++r<i;)t=a,a=this[r],e=t[0]*a[1]-a[0]*t[1],u+=(t[0]+a[0])*e,o+=(t[1]+a[1])*e;return[u*n,o*n]},rl.clip=function(n){for(var t,e,r,i,u,o,a=De(n),l=-1,c=this.length-De(this),f=this[c-1];++l<c;){for(t=n.slice(),n.length=0,i=this[l],u=t[(r=t.length-a)-1],e=-1;++e<r;)o=t[e],Te(o,f,i)?(Te(u,f,i)||n.push(Re(u,o,f,i)),n.push(o)):Te(u,f,i)&&n.push(Re(u,o,f,i)),u=o;a&&n.push(n[0]),f=i}return n};var il,ul,ol,al,ll,cl=[],fl=[];Ye.prototype.prepare=function(){for(var n,t=this.edges,e=t.length;e--;)n=t[e].edge,n.b&&n.a||t.splice(e,1);return t.sort(Ve),t.length},tr.prototype={start:function(){return this.edge.l===this.site?this.edge.a:this.edge.b},end:function(){return this.edge.l===this.site?this.edge.b:this.edge.a}},er.prototype={insert:function(n,t){var e,r,i;if(n){if(t.P=n,t.N=n.N,n.N&&(n.N.P=t),n.N=t,n.R){for(n=n.R;n.L;)n=n.L;n.L=t}else n.R=t;e=n}else this._?(n=or(this._),t.P=null,t.N=n,n.P=n.L=t,e=n):(t.P=t.N=null,this._=t,e=null);for(t.L=t.R=null,t.U=e,t.C=!0,n=t;e&&e.C;)r=e.U,e===r.L?(i=r.R,i&&i.C?(e.C=i.C=!1,r.C=!0,n=r):(n===e.R&&(ir(this,e),n=e,e=n.U),e.C=!1,r.C=!0,ur(this,r))):(i=r.L,i&&i.C?(e.C=i.C=!1,r.C=!0,n=r):(n===e.L&&(ur(this,e),n=e,e=n.U),e.C=!1,r.C=!0,ir(this,r))),e=n.U;this._.C=!1},remove:function(n){n.N&&(n.N.P=n.P),n.P&&(n.P.N=n.N),n.N=n.P=null;var t,e,r,i=n.U,u=n.L,o=n.R;if(e=u?o?or(o):u:o,i?i.L===n?i.L=e:i.R=e:this._=e,u&&o?(r=e.C,e.C=n.C,e.L=u,u.U=e,e!==o?(i=e.U,e.U=n.U,n=e.R,i.L=n,e.R=o,o.U=e):(e.U=i,i=e,n=e.R)):(r=n.C,n=e),n&&(n.U=i),!r){if(n&&n.C)return void(n.C=!1);do{if(n===this._)break;if(n===i.L){if(t=i.R,t.C&&(t.C=!1,i.C=!0,ir(this,i),t=i.R),t.L&&t.L.C||t.R&&t.R.C){t.R&&t.R.C||(t.L.C=!1,t.C=!0,ur(this,t),t=i.R),t.C=i.C,i.C=t.R.C=!1,ir(this,i),n=this._;break}}else if(t=i.L,t.C&&(t.C=!1,i.C=!0,ur(this,i),t=i.L),t.L&&t.L.C||t.R&&t.R.C){t.L&&t.L.C||(t.R.C=!1,t.C=!0,ir(this,t),t=i.L),t.C=i.C,i.C=t.L.C=!1,ur(this,i),n=this._;break}t.C=!0,n=i,i=i.U}while(!n.C);n&&(n.C=!1)}}},ao.geom.voronoi=function(n){function t(n){var t=new Array(n.length),r=a[0][0],i=a[0][1],u=a[1][0],o=a[1][1];return ar(e(n),a).cells.forEach(function(e,a){var l=e.edges,c=e.site,f=t[a]=l.length?l.map(function(n){var t=n.start();return[t.x,t.y]}):c.x>=r&&c.x<=u&&c.y>=i&&c.y<=o?[[r,o],[u,o],[u,i],[r,i]]:[];f.point=n[a]}),t}function e(n){return n.map(function(n,t){return{x:Math.round(u(n,t)/Uo)*Uo,y:Math.round(o(n,t)/Uo)*Uo,i:t}})}var r=Ce,i=ze,u=r,o=i,a=sl;return n?t(n):(t.links=function(n){return ar(e(n)).edges.filter(function(n){return n.l&&n.r}).map(function(t){return{source:n[t.l.i],target:n[t.r.i]}})},t.triangles=function(n){var t=[];return ar(e(n)).cells.forEach(function(e,r){for(var i,u,o=e.site,a=e.edges.sort(Ve),l=-1,c=a.length,f=a[c-1].edge,s=f.l===o?f.r:f.l;++l<c;)i=f,u=s,f=a[l].edge,s=f.l===o?f.r:f.l,r<u.i&&r<s.i&&cr(o,u,s)<0&&t.push([n[r],n[u.i],n[s.i]])}),t},t.x=function(n){return arguments.length?(u=En(r=n),t):r},t.y=function(n){return arguments.length?(o=En(i=n),t):i},t.clipExtent=function(n){return arguments.length?(a=null==n?sl:n,t):a===sl?null:a},t.size=function(n){return arguments.length?t.clipExtent(n&&[[0,0],n]):a===sl?null:a&&a[1]},t)};var sl=[[-1e6,-1e6],[1e6,1e6]];ao.geom.delaunay=function(n){return ao.geom.voronoi().triangles(n)},ao.geom.quadtree=function(n,t,e,r,i){function u(n){function u(n,t,e,r,i,u,o,a){if(!isNaN(e)&&!isNaN(r))if(n.leaf){var l=n.x,f=n.y;if(null!=l)if(xo(l-e)+xo(f-r)<.01)c(n,t,e,r,i,u,o,a);else{var s=n.point;n.x=n.y=n.point=null,c(n,s,l,f,i,u,o,a),c(n,t,e,r,i,u,o,a)}else n.x=e,n.y=r,n.point=t}else c(n,t,e,r,i,u,o,a)}function c(n,t,e,r,i,o,a,l){var c=.5*(i+a),f=.5*(o+l),s=e>=c,h=r>=f,p=h<<1|s;n.leaf=!1,n=n.nodes[p]||(n.nodes[p]=hr()),s?i=c:a=c,h?o=f:l=f,u(n,t,e,r,i,o,a,l)}var f,s,h,p,g,v,d,y,m,M=En(a),x=En(l);if(null!=t)v=t,d=e,y=r,m=i;else if(y=m=-(v=d=1/0),s=[],h=[],g=n.length,o)for(p=0;g>p;++p)f=n[p],f.x<v&&(v=f.x),f.y<d&&(d=f.y),f.x>y&&(y=f.x),f.y>m&&(m=f.y),s.push(f.x),h.push(f.y);else for(p=0;g>p;++p){var b=+M(f=n[p],p),_=+x(f,p);v>b&&(v=b),d>_&&(d=_),b>y&&(y=b),_>m&&(m=_),s.push(b),h.push(_)}var w=y-v,S=m-d;w>S?m=d+w:y=v+S;var k=hr();if(k.add=function(n){u(k,n,+M(n,++p),+x(n,p),v,d,y,m)},k.visit=function(n){pr(n,k,v,d,y,m)},k.find=function(n){return gr(k,n[0],n[1],v,d,y,m)},p=-1,null==t){for(;++p<g;)u(k,n[p],s[p],h[p],v,d,y,m);--p}else n.forEach(k.add);return s=h=n=f=null,k}var o,a=Ce,l=ze;return(o=arguments.length)?(a=fr,l=sr,3===o&&(i=e,r=t,e=t=0),u(n)):(u.x=function(n){return arguments.length?(a=n,u):a},u.y=function(n){return arguments.length?(l=n,u):l},u.extent=function(n){return arguments.length?(null==n?t=e=r=i=null:(t=+n[0][0],e=+n[0][1],r=+n[1][0],i=+n[1][1]),u):null==t?null:[[t,e],[r,i]]},u.size=function(n){return arguments.length?(null==n?t=e=r=i=null:(t=e=0,r=+n[0],i=+n[1]),u):null==t?null:[r-t,i-e]},u)},ao.interpolateRgb=vr,ao.interpolateObject=dr,ao.interpolateNumber=yr,ao.interpolateString=mr;var hl=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,pl=new RegExp(hl.source,"g");ao.interpolate=Mr,ao.interpolators=[function(n,t){var e=typeof t;return("string"===e?ua.has(t.toLowerCase())||/^(#|rgb\(|hsl\()/i.test(t)?vr:mr:t instanceof an?vr:Array.isArray(t)?xr:"object"===e&&isNaN(t)?dr:yr)(n,t)}],ao.interpolateArray=xr;var gl=function(){return m},vl=ao.map({linear:gl,poly:Er,quad:function(){return Sr},cubic:function(){return kr},sin:function(){return Ar},exp:function(){return Cr},circle:function(){return zr},elastic:Lr,back:qr,bounce:function(){return Tr}}),dl=ao.map({"in":m,out:_r,"in-out":wr,"out-in":function(n){return wr(_r(n))}});ao.ease=function(n){var t=n.indexOf("-"),e=t>=0?n.slice(0,t):n,r=t>=0?n.slice(t+1):"in";return e=vl.get(e)||gl,r=dl.get(r)||m,br(r(e.apply(null,lo.call(arguments,1))))},ao.interpolateHcl=Rr,ao.interpolateHsl=Dr,ao.interpolateLab=Pr,ao.interpolateRound=Ur,ao.transform=function(n){var t=fo.createElementNS(ao.ns.prefix.svg,"g");return(ao.transform=function(n){if(null!=n){t.setAttribute("transform",n);var e=t.transform.baseVal.consolidate()}return new jr(e?e.matrix:yl)})(n)},jr.prototype.toString=function(){return"translate("+this.translate+")rotate("+this.rotate+")skewX("+this.skew+")scale("+this.scale+")"};var yl={a:1,b:0,c:0,d:1,e:0,f:0};ao.interpolateTransform=$r,ao.layout={},ao.layout.bundle=function(){return function(n){for(var t=[],e=-1,r=n.length;++e<r;)t.push(Jr(n[e]));return t}},ao.layout.chord=function(){function n(){var n,c,s,h,p,g={},v=[],d=ao.range(u),y=[];for(e=[],r=[],n=0,h=-1;++h<u;){for(c=0,p=-1;++p<u;)c+=i[h][p];v.push(c),y.push(ao.range(u)),n+=c}for(o&&d.sort(function(n,t){return o(v[n],v[t])}),a&&y.forEach(function(n,t){n.sort(function(n,e){return a(i[t][n],i[t][e])})}),n=(Ho-f*u)/n,c=0,h=-1;++h<u;){for(s=c,p=-1;++p<u;){var m=d[h],M=y[m][p],x=i[m][M],b=c,_=c+=x*n;g[m+"-"+M]={index:m,subindex:M,startAngle:b,endAngle:_,value:x}}r[m]={index:m,startAngle:s,endAngle:c,value:v[m]},c+=f}for(h=-1;++h<u;)for(p=h-1;++p<u;){var w=g[h+"-"+p],S=g[p+"-"+h];(w.value||S.value)&&e.push(w.value<S.value?{source:S,target:w}:{source:w,target:S})}l&&t()}function t(){e.sort(function(n,t){return l((n.source.value+n.target.value)/2,(t.source.value+t.target.value)/2)})}var e,r,i,u,o,a,l,c={},f=0;return c.matrix=function(n){return arguments.length?(u=(i=n)&&i.length,e=r=null,c):i},c.padding=function(n){return arguments.length?(f=n,e=r=null,c):f},c.sortGroups=function(n){return arguments.length?(o=n,e=r=null,c):o},c.sortSubgroups=function(n){return arguments.length?(a=n,e=null,c):a},c.sortChords=function(n){return arguments.length?(l=n,e&&t(),c):l},c.chords=function(){return e||n(),e},c.groups=function(){return r||n(),r},c},ao.layout.force=function(){function n(n){return function(t,e,r,i){if(t.point!==n){var u=t.cx-n.x,o=t.cy-n.y,a=i-e,l=u*u+o*o;if(l>a*a/y){if(v>l){var c=t.charge/l;n.px-=u*c,n.py-=o*c}return!0}if(t.point&&l&&v>l){var c=t.pointCharge/l;n.px-=u*c,n.py-=o*c}}return!t.charge}}function t(n){n.px=ao.event.x,n.py=ao.event.y,l.resume()}var e,r,i,u,o,a,l={},c=ao.dispatch("start","tick","end"),f=[1,1],s=.9,h=ml,p=Ml,g=-30,v=xl,d=.1,y=.64,M=[],x=[];return l.tick=function(){if((i*=.99)<.005)return e=null,c.end({type:"end",alpha:i=0}),!0;var t,r,l,h,p,v,y,m,b,_=M.length,w=x.length;for(r=0;w>r;++r)l=x[r],h=l.source,p=l.target,m=p.x-h.x,b=p.y-h.y,(v=m*m+b*b)&&(v=i*o[r]*((v=Math.sqrt(v))-u[r])/v,m*=v,b*=v,p.x-=m*(y=h.weight+p.weight?h.weight/(h.weight+p.weight):.5),p.y-=b*y,h.x+=m*(y=1-y),h.y+=b*y);if((y=i*d)&&(m=f[0]/2,b=f[1]/2,r=-1,y))for(;++r<_;)l=M[r],l.x+=(m-l.x)*y,l.y+=(b-l.y)*y;if(g)for(ri(t=ao.geom.quadtree(M),i,a),r=-1;++r<_;)(l=M[r]).fixed||t.visit(n(l));for(r=-1;++r<_;)l=M[r],l.fixed?(l.x=l.px,l.y=l.py):(l.x-=(l.px-(l.px=l.x))*s,l.y-=(l.py-(l.py=l.y))*s);c.tick({type:"tick",alpha:i})},l.nodes=function(n){return arguments.length?(M=n,l):M},l.links=function(n){return arguments.length?(x=n,l):x},l.size=function(n){return arguments.length?(f=n,l):f},l.linkDistance=function(n){return arguments.length?(h="function"==typeof n?n:+n,l):h},l.distance=l.linkDistance,l.linkStrength=function(n){return arguments.length?(p="function"==typeof n?n:+n,l):p},l.friction=function(n){return arguments.length?(s=+n,l):s},l.charge=function(n){return arguments.length?(g="function"==typeof n?n:+n,l):g},l.chargeDistance=function(n){return arguments.length?(v=n*n,l):Math.sqrt(v)},l.gravity=function(n){return arguments.length?(d=+n,l):d},l.theta=function(n){return arguments.length?(y=n*n,l):Math.sqrt(y)},l.alpha=function(n){return arguments.length?(n=+n,i?n>0?i=n:(e.c=null,e.t=NaN,e=null,c.end({type:"end",alpha:i=0})):n>0&&(c.start({type:"start",alpha:i=n}),e=qn(l.tick)),l):i},l.start=function(){function n(n,r){if(!e){for(e=new Array(i),l=0;i>l;++l)e[l]=[];for(l=0;c>l;++l){var u=x[l];e[u.source.index].push(u.target),e[u.target.index].push(u.source)}}for(var o,a=e[t],l=-1,f=a.length;++l<f;)if(!isNaN(o=a[l][n]))return o;return Math.random()*r}var t,e,r,i=M.length,c=x.length,s=f[0],v=f[1];for(t=0;i>t;++t)(r=M[t]).index=t,r.weight=0;for(t=0;c>t;++t)r=x[t],"number"==typeof r.source&&(r.source=M[r.source]),"number"==typeof r.target&&(r.target=M[r.target]),++r.source.weight,++r.target.weight;for(t=0;i>t;++t)r=M[t],isNaN(r.x)&&(r.x=n("x",s)),isNaN(r.y)&&(r.y=n("y",v)),isNaN(r.px)&&(r.px=r.x),isNaN(r.py)&&(r.py=r.y);if(u=[],"function"==typeof h)for(t=0;c>t;++t)u[t]=+h.call(this,x[t],t);else for(t=0;c>t;++t)u[t]=h;if(o=[],"function"==typeof p)for(t=0;c>t;++t)o[t]=+p.call(this,x[t],t);else for(t=0;c>t;++t)o[t]=p;if(a=[],"function"==typeof g)for(t=0;i>t;++t)a[t]=+g.call(this,M[t],t);else for(t=0;i>t;++t)a[t]=g;return l.resume()},l.resume=function(){return l.alpha(.1)},l.stop=function(){return l.alpha(0)},l.drag=function(){return r||(r=ao.behavior.drag().origin(m).on("dragstart.force",Qr).on("drag.force",t).on("dragend.force",ni)),arguments.length?void this.on("mouseover.force",ti).on("mouseout.force",ei).call(r):r},ao.rebind(l,c,"on")};var ml=20,Ml=1,xl=1/0;ao.layout.hierarchy=function(){function n(i){var u,o=[i],a=[];for(i.depth=0;null!=(u=o.pop());)if(a.push(u),(c=e.call(n,u,u.depth))&&(l=c.length)){for(var l,c,f;--l>=0;)o.push(f=c[l]),f.parent=u,f.depth=u.depth+1;r&&(u.value=0),u.children=c}else r&&(u.value=+r.call(n,u,u.depth)||0),delete u.children;return oi(i,function(n){var e,i;t&&(e=n.children)&&e.sort(t),r&&(i=n.parent)&&(i.value+=n.value)}),a}var t=ci,e=ai,r=li;return n.sort=function(e){return arguments.length?(t=e,n):t},n.children=function(t){return arguments.length?(e=t,n):e},n.value=function(t){return arguments.length?(r=t,n):r},n.revalue=function(t){return r&&(ui(t,function(n){n.children&&(n.value=0)}),oi(t,function(t){var e;t.children||(t.value=+r.call(n,t,t.depth)||0),(e=t.parent)&&(e.value+=t.value)})),t},n},ao.layout.partition=function(){function n(t,e,r,i){var u=t.children;if(t.x=e,t.y=t.depth*i,t.dx=r,t.dy=i,u&&(o=u.length)){var o,a,l,c=-1;for(r=t.value?r/t.value:0;++c<o;)n(a=u[c],e,l=a.value*r,i),e+=l}}function t(n){var e=n.children,r=0;if(e&&(i=e.length))for(var i,u=-1;++u<i;)r=Math.max(r,t(e[u]));return 1+r}function e(e,u){var o=r.call(this,e,u);return n(o[0],0,i[0],i[1]/t(o[0])),o}var r=ao.layout.hierarchy(),i=[1,1];return e.size=function(n){return arguments.length?(i=n,e):i},ii(e,r)},ao.layout.pie=function(){function n(o){var a,l=o.length,c=o.map(function(e,r){return+t.call(n,e,r)}),f=+("function"==typeof r?r.apply(this,arguments):r),s=("function"==typeof i?i.apply(this,arguments):i)-f,h=Math.min(Math.abs(s)/l,+("function"==typeof u?u.apply(this,arguments):u)),p=h*(0>s?-1:1),g=ao.sum(c),v=g?(s-l*p)/g:0,d=ao.range(l),y=[];return null!=e&&d.sort(e===bl?function(n,t){return c[t]-c[n]}:function(n,t){return e(o[n],o[t])}),d.forEach(function(n){y[n]={data:o[n],value:a=c[n],startAngle:f,endAngle:f+=a*v+p,padAngle:h}}),y}var t=Number,e=bl,r=0,i=Ho,u=0;return n.value=function(e){return arguments.length?(t=e,n):t},n.sort=function(t){return arguments.length?(e=t,n):e},n.startAngle=function(t){return arguments.length?(r=t,n):r},n.endAngle=function(t){return arguments.length?(i=t,n):i},n.padAngle=function(t){return arguments.length?(u=t,n):u},n};var bl={};ao.layout.stack=function(){function n(a,l){if(!(h=a.length))return a;var c=a.map(function(e,r){return t.call(n,e,r)}),f=c.map(function(t){return t.map(function(t,e){return[u.call(n,t,e),o.call(n,t,e)]})}),s=e.call(n,f,l);c=ao.permute(c,s),f=ao.permute(f,s);var h,p,g,v,d=r.call(n,f,l),y=c[0].length;for(g=0;y>g;++g)for(i.call(n,c[0][g],v=d[g],f[0][g][1]),p=1;h>p;++p)i.call(n,c[p][g],v+=f[p-1][g][1],f[p][g][1]);return a}var t=m,e=gi,r=vi,i=pi,u=si,o=hi;return n.values=function(e){return arguments.length?(t=e,n):t},n.order=function(t){return arguments.length?(e="function"==typeof t?t:_l.get(t)||gi,n):e},n.offset=function(t){return arguments.length?(r="function"==typeof t?t:wl.get(t)||vi,n):r},n.x=function(t){return arguments.length?(u=t,n):u},n.y=function(t){return arguments.length?(o=t,n):o},n.out=function(t){return arguments.length?(i=t,n):i},n};var _l=ao.map({"inside-out":function(n){var t,e,r=n.length,i=n.map(di),u=n.map(yi),o=ao.range(r).sort(function(n,t){return i[n]-i[t]}),a=0,l=0,c=[],f=[];for(t=0;r>t;++t)e=o[t],l>a?(a+=u[e],c.push(e)):(l+=u[e],f.push(e));return f.reverse().concat(c)},reverse:function(n){return ao.range(n.length).reverse()},"default":gi}),wl=ao.map({silhouette:function(n){var t,e,r,i=n.length,u=n[0].length,o=[],a=0,l=[];for(e=0;u>e;++e){for(t=0,r=0;i>t;t++)r+=n[t][e][1];r>a&&(a=r),o.push(r)}for(e=0;u>e;++e)l[e]=(a-o[e])/2;return l},wiggle:function(n){var t,e,r,i,u,o,a,l,c,f=n.length,s=n[0],h=s.length,p=[];for(p[0]=l=c=0,e=1;h>e;++e){for(t=0,i=0;f>t;++t)i+=n[t][e][1];for(t=0,u=0,a=s[e][0]-s[e-1][0];f>t;++t){for(r=0,o=(n[t][e][1]-n[t][e-1][1])/(2*a);t>r;++r)o+=(n[r][e][1]-n[r][e-1][1])/a;u+=o*n[t][e][1]}p[e]=l-=i?u/i*a:0,c>l&&(c=l)}for(e=0;h>e;++e)p[e]-=c;return p},expand:function(n){var t,e,r,i=n.length,u=n[0].length,o=1/i,a=[];for(e=0;u>e;++e){for(t=0,r=0;i>t;t++)r+=n[t][e][1];if(r)for(t=0;i>t;t++)n[t][e][1]/=r;else for(t=0;i>t;t++)n[t][e][1]=o}for(e=0;u>e;++e)a[e]=0;return a},zero:vi});ao.layout.histogram=function(){function n(n,u){for(var o,a,l=[],c=n.map(e,this),f=r.call(this,c,u),s=i.call(this,f,c,u),u=-1,h=c.length,p=s.length-1,g=t?1:1/h;++u<p;)o=l[u]=[],o.dx=s[u+1]-(o.x=s[u]),o.y=0;if(p>0)for(u=-1;++u<h;)a=c[u],a>=f[0]&&a<=f[1]&&(o=l[ao.bisect(s,a,1,p)-1],o.y+=g,o.push(n[u]));return l}var t=!0,e=Number,r=bi,i=Mi;return n.value=function(t){return arguments.length?(e=t,n):e},n.range=function(t){return arguments.length?(r=En(t),n):r},n.bins=function(t){return arguments.length?(i="number"==typeof t?function(n){return xi(n,t)}:En(t),n):i},n.frequency=function(e){return arguments.length?(t=!!e,n):t},n},ao.layout.pack=function(){function n(n,u){var o=e.call(this,n,u),a=o[0],l=i[0],c=i[1],f=null==t?Math.sqrt:"function"==typeof t?t:function(){return t};if(a.x=a.y=0,oi(a,function(n){n.r=+f(n.value)}),oi(a,Ni),r){var s=r*(t?1:Math.max(2*a.r/l,2*a.r/c))/2;oi(a,function(n){n.r+=s}),oi(a,Ni),oi(a,function(n){n.r-=s})}return Ci(a,l/2,c/2,t?1:1/Math.max(2*a.r/l,2*a.r/c)),o}var t,e=ao.layout.hierarchy().sort(_i),r=0,i=[1,1];return n.size=function(t){return arguments.length?(i=t,n):i},n.radius=function(e){return arguments.length?(t=null==e||"function"==typeof e?e:+e,n):t},n.padding=function(t){return arguments.length?(r=+t,n):r},ii(n,e)},ao.layout.tree=function(){function n(n,i){var f=o.call(this,n,i),s=f[0],h=t(s);if(oi(h,e),h.parent.m=-h.z,ui(h,r),c)ui(s,u);else{var p=s,g=s,v=s;ui(s,function(n){n.x<p.x&&(p=n),n.x>g.x&&(g=n),n.depth>v.depth&&(v=n)});var d=a(p,g)/2-p.x,y=l[0]/(g.x+a(g,p)/2+d),m=l[1]/(v.depth||1);ui(s,function(n){n.x=(n.x+d)*y,n.y=n.depth*m})}return f}function t(n){for(var t,e={A:null,children:[n]},r=[e];null!=(t=r.pop());)for(var i,u=t.children,o=0,a=u.length;a>o;++o)r.push((u[o]=i={_:u[o],parent:t,children:(i=u[o].children)&&i.slice()||[],A:null,a:null,z:0,m:0,c:0,s:0,t:null,i:o}).a=i);return e.children[0]}function e(n){var t=n.children,e=n.parent.children,r=n.i?e[n.i-1]:null;if(t.length){Di(n);var u=(t[0].z+t[t.length-1].z)/2;r?(n.z=r.z+a(n._,r._),n.m=n.z-u):n.z=u}else r&&(n.z=r.z+a(n._,r._));n.parent.A=i(n,r,n.parent.A||e[0])}function r(n){n._.x=n.z+n.parent.m,n.m+=n.parent.m}function i(n,t,e){if(t){for(var r,i=n,u=n,o=t,l=i.parent.children[0],c=i.m,f=u.m,s=o.m,h=l.m;o=Ti(o),i=qi(i),o&&i;)l=qi(l),u=Ti(u),u.a=n,r=o.z+s-i.z-c+a(o._,i._),r>0&&(Ri(Pi(o,n,e),n,r),c+=r,f+=r),s+=o.m,c+=i.m,h+=l.m,f+=u.m;o&&!Ti(u)&&(u.t=o,u.m+=s-f),i&&!qi(l)&&(l.t=i,l.m+=c-h,e=n)}return e}function u(n){n.x*=l[0],n.y=n.depth*l[1]}var o=ao.layout.hierarchy().sort(null).value(null),a=Li,l=[1,1],c=null;return n.separation=function(t){return arguments.length?(a=t,n):a},n.size=function(t){return arguments.length?(c=null==(l=t)?u:null,n):c?null:l},n.nodeSize=function(t){return arguments.length?(c=null==(l=t)?null:u,n):c?l:null},ii(n,o)},ao.layout.cluster=function(){function n(n,u){var o,a=t.call(this,n,u),l=a[0],c=0;oi(l,function(n){var t=n.children;t&&t.length?(n.x=ji(t),n.y=Ui(t)):(n.x=o?c+=e(n,o):0,n.y=0,o=n)});var f=Fi(l),s=Hi(l),h=f.x-e(f,s)/2,p=s.x+e(s,f)/2;return oi(l,i?function(n){n.x=(n.x-l.x)*r[0],n.y=(l.y-n.y)*r[1]}:function(n){n.x=(n.x-h)/(p-h)*r[0],n.y=(1-(l.y?n.y/l.y:1))*r[1]}),a}var t=ao.layout.hierarchy().sort(null).value(null),e=Li,r=[1,1],i=!1;return n.separation=function(t){return arguments.length?(e=t,n):e},n.size=function(t){return arguments.length?(i=null==(r=t),n):i?null:r},n.nodeSize=function(t){return arguments.length?(i=null!=(r=t),n):i?r:null},ii(n,t)},ao.layout.treemap=function(){function n(n,t){for(var e,r,i=-1,u=n.length;++i<u;)r=(e=n[i]).value*(0>t?0:t),e.area=isNaN(r)||0>=r?0:r}function t(e){var u=e.children;if(u&&u.length){var o,a,l,c=s(e),f=[],h=u.slice(),g=1/0,v="slice"===p?c.dx:"dice"===p?c.dy:"slice-dice"===p?1&e.depth?c.dy:c.dx:Math.min(c.dx,c.dy);for(n(h,c.dx*c.dy/e.value),f.area=0;(l=h.length)>0;)f.push(o=h[l-1]),f.area+=o.area,"squarify"!==p||(a=r(f,v))<=g?(h.pop(),g=a):(f.area-=f.pop().area,i(f,v,c,!1),v=Math.min(c.dx,c.dy),f.length=f.area=0,g=1/0);f.length&&(i(f,v,c,!0),f.length=f.area=0),u.forEach(t)}}function e(t){var r=t.children;if(r&&r.length){var u,o=s(t),a=r.slice(),l=[];for(n(a,o.dx*o.dy/t.value),l.area=0;u=a.pop();)l.push(u),l.area+=u.area,null!=u.z&&(i(l,u.z?o.dx:o.dy,o,!a.length),l.length=l.area=0);r.forEach(e)}}function r(n,t){for(var e,r=n.area,i=0,u=1/0,o=-1,a=n.length;++o<a;)(e=n[o].area)&&(u>e&&(u=e),e>i&&(i=e));return r*=r,t*=t,r?Math.max(t*i*g/r,r/(t*u*g)):1/0}function i(n,t,e,r){var i,u=-1,o=n.length,a=e.x,c=e.y,f=t?l(n.area/t):0;
if(t==e.dx){for((r||f>e.dy)&&(f=e.dy);++u<o;)i=n[u],i.x=a,i.y=c,i.dy=f,a+=i.dx=Math.min(e.x+e.dx-a,f?l(i.area/f):0);i.z=!0,i.dx+=e.x+e.dx-a,e.y+=f,e.dy-=f}else{for((r||f>e.dx)&&(f=e.dx);++u<o;)i=n[u],i.x=a,i.y=c,i.dx=f,c+=i.dy=Math.min(e.y+e.dy-c,f?l(i.area/f):0);i.z=!1,i.dy+=e.y+e.dy-c,e.x+=f,e.dx-=f}}function u(r){var i=o||a(r),u=i[0];return u.x=u.y=0,u.value?(u.dx=c[0],u.dy=c[1]):u.dx=u.dy=0,o&&a.revalue(u),n([u],u.dx*u.dy/u.value),(o?e:t)(u),h&&(o=i),i}var o,a=ao.layout.hierarchy(),l=Math.round,c=[1,1],f=null,s=Oi,h=!1,p="squarify",g=.5*(1+Math.sqrt(5));return u.size=function(n){return arguments.length?(c=n,u):c},u.padding=function(n){function t(t){var e=n.call(u,t,t.depth);return null==e?Oi(t):Ii(t,"number"==typeof e?[e,e,e,e]:e)}function e(t){return Ii(t,n)}if(!arguments.length)return f;var r;return s=null==(f=n)?Oi:"function"==(r=typeof n)?t:"number"===r?(n=[n,n,n,n],e):e,u},u.round=function(n){return arguments.length?(l=n?Math.round:Number,u):l!=Number},u.sticky=function(n){return arguments.length?(h=n,o=null,u):h},u.ratio=function(n){return arguments.length?(g=n,u):g},u.mode=function(n){return arguments.length?(p=n+"",u):p},ii(u,a)},ao.random={normal:function(n,t){var e=arguments.length;return 2>e&&(t=1),1>e&&(n=0),function(){var e,r,i;do e=2*Math.random()-1,r=2*Math.random()-1,i=e*e+r*r;while(!i||i>1);return n+t*e*Math.sqrt(-2*Math.log(i)/i)}},logNormal:function(){var n=ao.random.normal.apply(ao,arguments);return function(){return Math.exp(n())}},bates:function(n){var t=ao.random.irwinHall(n);return function(){return t()/n}},irwinHall:function(n){return function(){for(var t=0,e=0;n>e;e++)t+=Math.random();return t}}},ao.scale={};var Sl={floor:m,ceil:m};ao.scale.linear=function(){return Wi([0,1],[0,1],Mr,!1)};var kl={s:1,g:1,p:1,r:1,e:1};ao.scale.log=function(){return ru(ao.scale.linear().domain([0,1]),10,!0,[1,10])};var Nl=ao.format(".0e"),El={floor:function(n){return-Math.ceil(-n)},ceil:function(n){return-Math.floor(-n)}};ao.scale.pow=function(){return iu(ao.scale.linear(),1,[0,1])},ao.scale.sqrt=function(){return ao.scale.pow().exponent(.5)},ao.scale.ordinal=function(){return ou([],{t:"range",a:[[]]})},ao.scale.category10=function(){return ao.scale.ordinal().range(Al)},ao.scale.category20=function(){return ao.scale.ordinal().range(Cl)},ao.scale.category20b=function(){return ao.scale.ordinal().range(zl)},ao.scale.category20c=function(){return ao.scale.ordinal().range(Ll)};var Al=[2062260,16744206,2924588,14034728,9725885,9197131,14907330,8355711,12369186,1556175].map(xn),Cl=[2062260,11454440,16744206,16759672,2924588,10018698,14034728,16750742,9725885,12955861,9197131,12885140,14907330,16234194,8355711,13092807,12369186,14408589,1556175,10410725].map(xn),zl=[3750777,5395619,7040719,10264286,6519097,9216594,11915115,13556636,9202993,12426809,15186514,15190932,8666169,11356490,14049643,15177372,8077683,10834324,13528509,14589654].map(xn),Ll=[3244733,7057110,10406625,13032431,15095053,16616764,16625259,16634018,3253076,7652470,10607003,13101504,7695281,10394312,12369372,14342891,6513507,9868950,12434877,14277081].map(xn);ao.scale.quantile=function(){return au([],[])},ao.scale.quantize=function(){return lu(0,1,[0,1])},ao.scale.threshold=function(){return cu([.5],[0,1])},ao.scale.identity=function(){return fu([0,1])},ao.svg={},ao.svg.arc=function(){function n(){var n=Math.max(0,+e.apply(this,arguments)),c=Math.max(0,+r.apply(this,arguments)),f=o.apply(this,arguments)-Io,s=a.apply(this,arguments)-Io,h=Math.abs(s-f),p=f>s?0:1;if(n>c&&(g=c,c=n,n=g),h>=Oo)return t(c,p)+(n?t(n,1-p):"")+"Z";var g,v,d,y,m,M,x,b,_,w,S,k,N=0,E=0,A=[];if((y=(+l.apply(this,arguments)||0)/2)&&(d=u===ql?Math.sqrt(n*n+c*c):+u.apply(this,arguments),p||(E*=-1),c&&(E=tn(d/c*Math.sin(y))),n&&(N=tn(d/n*Math.sin(y)))),c){m=c*Math.cos(f+E),M=c*Math.sin(f+E),x=c*Math.cos(s-E),b=c*Math.sin(s-E);var C=Math.abs(s-f-2*E)<=Fo?0:1;if(E&&yu(m,M,x,b)===p^C){var z=(f+s)/2;m=c*Math.cos(z),M=c*Math.sin(z),x=b=null}}else m=M=0;if(n){_=n*Math.cos(s-N),w=n*Math.sin(s-N),S=n*Math.cos(f+N),k=n*Math.sin(f+N);var L=Math.abs(f-s+2*N)<=Fo?0:1;if(N&&yu(_,w,S,k)===1-p^L){var q=(f+s)/2;_=n*Math.cos(q),w=n*Math.sin(q),S=k=null}}else _=w=0;if(h>Uo&&(g=Math.min(Math.abs(c-n)/2,+i.apply(this,arguments)))>.001){v=c>n^p?0:1;var T=g,R=g;if(Fo>h){var D=null==S?[_,w]:null==x?[m,M]:Re([m,M],[S,k],[x,b],[_,w]),P=m-D[0],U=M-D[1],j=x-D[0],F=b-D[1],H=1/Math.sin(Math.acos((P*j+U*F)/(Math.sqrt(P*P+U*U)*Math.sqrt(j*j+F*F)))/2),O=Math.sqrt(D[0]*D[0]+D[1]*D[1]);R=Math.min(g,(n-O)/(H-1)),T=Math.min(g,(c-O)/(H+1))}if(null!=x){var I=mu(null==S?[_,w]:[S,k],[m,M],c,T,p),Y=mu([x,b],[_,w],c,T,p);g===T?A.push("M",I[0],"A",T,",",T," 0 0,",v," ",I[1],"A",c,",",c," 0 ",1-p^yu(I[1][0],I[1][1],Y[1][0],Y[1][1]),",",p," ",Y[1],"A",T,",",T," 0 0,",v," ",Y[0]):A.push("M",I[0],"A",T,",",T," 0 1,",v," ",Y[0])}else A.push("M",m,",",M);if(null!=S){var Z=mu([m,M],[S,k],n,-R,p),V=mu([_,w],null==x?[m,M]:[x,b],n,-R,p);g===R?A.push("L",V[0],"A",R,",",R," 0 0,",v," ",V[1],"A",n,",",n," 0 ",p^yu(V[1][0],V[1][1],Z[1][0],Z[1][1]),",",1-p," ",Z[1],"A",R,",",R," 0 0,",v," ",Z[0]):A.push("L",V[0],"A",R,",",R," 0 0,",v," ",Z[0])}else A.push("L",_,",",w)}else A.push("M",m,",",M),null!=x&&A.push("A",c,",",c," 0 ",C,",",p," ",x,",",b),A.push("L",_,",",w),null!=S&&A.push("A",n,",",n," 0 ",L,",",1-p," ",S,",",k);return A.push("Z"),A.join("")}function t(n,t){return"M0,"+n+"A"+n+","+n+" 0 1,"+t+" 0,"+-n+"A"+n+","+n+" 0 1,"+t+" 0,"+n}var e=hu,r=pu,i=su,u=ql,o=gu,a=vu,l=du;return n.innerRadius=function(t){return arguments.length?(e=En(t),n):e},n.outerRadius=function(t){return arguments.length?(r=En(t),n):r},n.cornerRadius=function(t){return arguments.length?(i=En(t),n):i},n.padRadius=function(t){return arguments.length?(u=t==ql?ql:En(t),n):u},n.startAngle=function(t){return arguments.length?(o=En(t),n):o},n.endAngle=function(t){return arguments.length?(a=En(t),n):a},n.padAngle=function(t){return arguments.length?(l=En(t),n):l},n.centroid=function(){var n=(+e.apply(this,arguments)+ +r.apply(this,arguments))/2,t=(+o.apply(this,arguments)+ +a.apply(this,arguments))/2-Io;return[Math.cos(t)*n,Math.sin(t)*n]},n};var ql="auto";ao.svg.line=function(){return Mu(m)};var Tl=ao.map({linear:xu,"linear-closed":bu,step:_u,"step-before":wu,"step-after":Su,basis:zu,"basis-open":Lu,"basis-closed":qu,bundle:Tu,cardinal:Eu,"cardinal-open":ku,"cardinal-closed":Nu,monotone:Fu});Tl.forEach(function(n,t){t.key=n,t.closed=/-closed$/.test(n)});var Rl=[0,2/3,1/3,0],Dl=[0,1/3,2/3,0],Pl=[0,1/6,2/3,1/6];ao.svg.line.radial=function(){var n=Mu(Hu);return n.radius=n.x,delete n.x,n.angle=n.y,delete n.y,n},wu.reverse=Su,Su.reverse=wu,ao.svg.area=function(){return Ou(m)},ao.svg.area.radial=function(){var n=Ou(Hu);return n.radius=n.x,delete n.x,n.innerRadius=n.x0,delete n.x0,n.outerRadius=n.x1,delete n.x1,n.angle=n.y,delete n.y,n.startAngle=n.y0,delete n.y0,n.endAngle=n.y1,delete n.y1,n},ao.svg.chord=function(){function n(n,a){var l=t(this,u,n,a),c=t(this,o,n,a);return"M"+l.p0+r(l.r,l.p1,l.a1-l.a0)+(e(l,c)?i(l.r,l.p1,l.r,l.p0):i(l.r,l.p1,c.r,c.p0)+r(c.r,c.p1,c.a1-c.a0)+i(c.r,c.p1,l.r,l.p0))+"Z"}function t(n,t,e,r){var i=t.call(n,e,r),u=a.call(n,i,r),o=l.call(n,i,r)-Io,f=c.call(n,i,r)-Io;return{r:u,a0:o,a1:f,p0:[u*Math.cos(o),u*Math.sin(o)],p1:[u*Math.cos(f),u*Math.sin(f)]}}function e(n,t){return n.a0==t.a0&&n.a1==t.a1}function r(n,t,e){return"A"+n+","+n+" 0 "+ +(e>Fo)+",1 "+t}function i(n,t,e,r){return"Q 0,0 "+r}var u=Me,o=xe,a=Iu,l=gu,c=vu;return n.radius=function(t){return arguments.length?(a=En(t),n):a},n.source=function(t){return arguments.length?(u=En(t),n):u},n.target=function(t){return arguments.length?(o=En(t),n):o},n.startAngle=function(t){return arguments.length?(l=En(t),n):l},n.endAngle=function(t){return arguments.length?(c=En(t),n):c},n},ao.svg.diagonal=function(){function n(n,i){var u=t.call(this,n,i),o=e.call(this,n,i),a=(u.y+o.y)/2,l=[u,{x:u.x,y:a},{x:o.x,y:a},o];return l=l.map(r),"M"+l[0]+"C"+l[1]+" "+l[2]+" "+l[3]}var t=Me,e=xe,r=Yu;return n.source=function(e){return arguments.length?(t=En(e),n):t},n.target=function(t){return arguments.length?(e=En(t),n):e},n.projection=function(t){return arguments.length?(r=t,n):r},n},ao.svg.diagonal.radial=function(){var n=ao.svg.diagonal(),t=Yu,e=n.projection;return n.projection=function(n){return arguments.length?e(Zu(t=n)):t},n},ao.svg.symbol=function(){function n(n,r){return(Ul.get(t.call(this,n,r))||$u)(e.call(this,n,r))}var t=Xu,e=Vu;return n.type=function(e){return arguments.length?(t=En(e),n):t},n.size=function(t){return arguments.length?(e=En(t),n):e},n};var Ul=ao.map({circle:$u,cross:function(n){var t=Math.sqrt(n/5)/2;return"M"+-3*t+","+-t+"H"+-t+"V"+-3*t+"H"+t+"V"+-t+"H"+3*t+"V"+t+"H"+t+"V"+3*t+"H"+-t+"V"+t+"H"+-3*t+"Z"},diamond:function(n){var t=Math.sqrt(n/(2*Fl)),e=t*Fl;return"M0,"+-t+"L"+e+",0 0,"+t+" "+-e+",0Z"},square:function(n){var t=Math.sqrt(n)/2;return"M"+-t+","+-t+"L"+t+","+-t+" "+t+","+t+" "+-t+","+t+"Z"},"triangle-down":function(n){var t=Math.sqrt(n/jl),e=t*jl/2;return"M0,"+e+"L"+t+","+-e+" "+-t+","+-e+"Z"},"triangle-up":function(n){var t=Math.sqrt(n/jl),e=t*jl/2;return"M0,"+-e+"L"+t+","+e+" "+-t+","+e+"Z"}});ao.svg.symbolTypes=Ul.keys();var jl=Math.sqrt(3),Fl=Math.tan(30*Yo);Co.transition=function(n){for(var t,e,r=Hl||++Zl,i=Ku(n),u=[],o=Ol||{time:Date.now(),ease:Nr,delay:0,duration:250},a=-1,l=this.length;++a<l;){u.push(t=[]);for(var c=this[a],f=-1,s=c.length;++f<s;)(e=c[f])&&Qu(e,f,i,r,o),t.push(e)}return Wu(u,i,r)},Co.interrupt=function(n){return this.each(null==n?Il:Bu(Ku(n)))};var Hl,Ol,Il=Bu(Ku()),Yl=[],Zl=0;Yl.call=Co.call,Yl.empty=Co.empty,Yl.node=Co.node,Yl.size=Co.size,ao.transition=function(n,t){return n&&n.transition?Hl?n.transition(t):n:ao.selection().transition(n)},ao.transition.prototype=Yl,Yl.select=function(n){var t,e,r,i=this.id,u=this.namespace,o=[];n=A(n);for(var a=-1,l=this.length;++a<l;){o.push(t=[]);for(var c=this[a],f=-1,s=c.length;++f<s;)(r=c[f])&&(e=n.call(r,r.__data__,f,a))?("__data__"in r&&(e.__data__=r.__data__),Qu(e,f,u,i,r[u][i]),t.push(e)):t.push(null)}return Wu(o,u,i)},Yl.selectAll=function(n){var t,e,r,i,u,o=this.id,a=this.namespace,l=[];n=C(n);for(var c=-1,f=this.length;++c<f;)for(var s=this[c],h=-1,p=s.length;++h<p;)if(r=s[h]){u=r[a][o],e=n.call(r,r.__data__,h,c),l.push(t=[]);for(var g=-1,v=e.length;++g<v;)(i=e[g])&&Qu(i,g,a,o,u),t.push(i)}return Wu(l,a,o)},Yl.filter=function(n){var t,e,r,i=[];"function"!=typeof n&&(n=O(n));for(var u=0,o=this.length;o>u;u++){i.push(t=[]);for(var e=this[u],a=0,l=e.length;l>a;a++)(r=e[a])&&n.call(r,r.__data__,a,u)&&t.push(r)}return Wu(i,this.namespace,this.id)},Yl.tween=function(n,t){var e=this.id,r=this.namespace;return arguments.length<2?this.node()[r][e].tween.get(n):Y(this,null==t?function(t){t[r][e].tween.remove(n)}:function(i){i[r][e].tween.set(n,t)})},Yl.attr=function(n,t){function e(){this.removeAttribute(a)}function r(){this.removeAttributeNS(a.space,a.local)}function i(n){return null==n?e:(n+="",function(){var t,e=this.getAttribute(a);return e!==n&&(t=o(e,n),function(n){this.setAttribute(a,t(n))})})}function u(n){return null==n?r:(n+="",function(){var t,e=this.getAttributeNS(a.space,a.local);return e!==n&&(t=o(e,n),function(n){this.setAttributeNS(a.space,a.local,t(n))})})}if(arguments.length<2){for(t in n)this.attr(t,n[t]);return this}var o="transform"==n?$r:Mr,a=ao.ns.qualify(n);return Ju(this,"attr."+n,t,a.local?u:i)},Yl.attrTween=function(n,t){function e(n,e){var r=t.call(this,n,e,this.getAttribute(i));return r&&function(n){this.setAttribute(i,r(n))}}function r(n,e){var r=t.call(this,n,e,this.getAttributeNS(i.space,i.local));return r&&function(n){this.setAttributeNS(i.space,i.local,r(n))}}var i=ao.ns.qualify(n);return this.tween("attr."+n,i.local?r:e)},Yl.style=function(n,e,r){function i(){this.style.removeProperty(n)}function u(e){return null==e?i:(e+="",function(){var i,u=t(this).getComputedStyle(this,null).getPropertyValue(n);return u!==e&&(i=Mr(u,e),function(t){this.style.setProperty(n,i(t),r)})})}var o=arguments.length;if(3>o){if("string"!=typeof n){2>o&&(e="");for(r in n)this.style(r,n[r],e);return this}r=""}return Ju(this,"style."+n,e,u)},Yl.styleTween=function(n,e,r){function i(i,u){var o=e.call(this,i,u,t(this).getComputedStyle(this,null).getPropertyValue(n));return o&&function(t){this.style.setProperty(n,o(t),r)}}return arguments.length<3&&(r=""),this.tween("style."+n,i)},Yl.text=function(n){return Ju(this,"text",n,Gu)},Yl.remove=function(){var n=this.namespace;return this.each("end.transition",function(){var t;this[n].count<2&&(t=this.parentNode)&&t.removeChild(this)})},Yl.ease=function(n){var t=this.id,e=this.namespace;return arguments.length<1?this.node()[e][t].ease:("function"!=typeof n&&(n=ao.ease.apply(ao,arguments)),Y(this,function(r){r[e][t].ease=n}))},Yl.delay=function(n){var t=this.id,e=this.namespace;return arguments.length<1?this.node()[e][t].delay:Y(this,"function"==typeof n?function(r,i,u){r[e][t].delay=+n.call(r,r.__data__,i,u)}:(n=+n,function(r){r[e][t].delay=n}))},Yl.duration=function(n){var t=this.id,e=this.namespace;return arguments.length<1?this.node()[e][t].duration:Y(this,"function"==typeof n?function(r,i,u){r[e][t].duration=Math.max(1,n.call(r,r.__data__,i,u))}:(n=Math.max(1,n),function(r){r[e][t].duration=n}))},Yl.each=function(n,t){var e=this.id,r=this.namespace;if(arguments.length<2){var i=Ol,u=Hl;try{Hl=e,Y(this,function(t,i,u){Ol=t[r][e],n.call(t,t.__data__,i,u)})}finally{Ol=i,Hl=u}}else Y(this,function(i){var u=i[r][e];(u.event||(u.event=ao.dispatch("start","end","interrupt"))).on(n,t)});return this},Yl.transition=function(){for(var n,t,e,r,i=this.id,u=++Zl,o=this.namespace,a=[],l=0,c=this.length;c>l;l++){a.push(n=[]);for(var t=this[l],f=0,s=t.length;s>f;f++)(e=t[f])&&(r=e[o][i],Qu(e,f,o,u,{time:r.time,ease:r.ease,delay:r.delay+r.duration,duration:r.duration})),n.push(e)}return Wu(a,o,u)},ao.svg.axis=function(){function n(n){n.each(function(){var n,c=ao.select(this),f=this.__chart__||e,s=this.__chart__=e.copy(),h=null==l?s.ticks?s.ticks.apply(s,a):s.domain():l,p=null==t?s.tickFormat?s.tickFormat.apply(s,a):m:t,g=c.selectAll(".tick").data(h,s),v=g.enter().insert("g",".domain").attr("class","tick").style("opacity",Uo),d=ao.transition(g.exit()).style("opacity",Uo).remove(),y=ao.transition(g.order()).style("opacity",1),M=Math.max(i,0)+o,x=Zi(s),b=c.selectAll(".domain").data([0]),_=(b.enter().append("path").attr("class","domain"),ao.transition(b));v.append("line"),v.append("text");var w,S,k,N,E=v.select("line"),A=y.select("line"),C=g.select("text").text(p),z=v.select("text"),L=y.select("text"),q="top"===r||"left"===r?-1:1;if("bottom"===r||"top"===r?(n=no,w="x",k="y",S="x2",N="y2",C.attr("dy",0>q?"0em":".71em").style("text-anchor","middle"),_.attr("d","M"+x[0]+","+q*u+"V0H"+x[1]+"V"+q*u)):(n=to,w="y",k="x",S="y2",N="x2",C.attr("dy",".32em").style("text-anchor",0>q?"end":"start"),_.attr("d","M"+q*u+","+x[0]+"H0V"+x[1]+"H"+q*u)),E.attr(N,q*i),z.attr(k,q*M),A.attr(S,0).attr(N,q*i),L.attr(w,0).attr(k,q*M),s.rangeBand){var T=s,R=T.rangeBand()/2;f=s=function(n){return T(n)+R}}else f.rangeBand?f=s:d.call(n,s,f);v.call(n,f,s),y.call(n,s,s)})}var t,e=ao.scale.linear(),r=Vl,i=6,u=6,o=3,a=[10],l=null;return n.scale=function(t){return arguments.length?(e=t,n):e},n.orient=function(t){return arguments.length?(r=t in Xl?t+"":Vl,n):r},n.ticks=function(){return arguments.length?(a=co(arguments),n):a},n.tickValues=function(t){return arguments.length?(l=t,n):l},n.tickFormat=function(e){return arguments.length?(t=e,n):t},n.tickSize=function(t){var e=arguments.length;return e?(i=+t,u=+arguments[e-1],n):i},n.innerTickSize=function(t){return arguments.length?(i=+t,n):i},n.outerTickSize=function(t){return arguments.length?(u=+t,n):u},n.tickPadding=function(t){return arguments.length?(o=+t,n):o},n.tickSubdivide=function(){return arguments.length&&n},n};var Vl="bottom",Xl={top:1,right:1,bottom:1,left:1};ao.svg.brush=function(){function n(t){t.each(function(){var t=ao.select(this).style("pointer-events","all").style("-webkit-tap-highlight-color","rgba(0,0,0,0)").on("mousedown.brush",u).on("touchstart.brush",u),o=t.selectAll(".background").data([0]);o.enter().append("rect").attr("class","background").style("visibility","hidden").style("cursor","crosshair"),t.selectAll(".extent").data([0]).enter().append("rect").attr("class","extent").style("cursor","move");var a=t.selectAll(".resize").data(v,m);a.exit().remove(),a.enter().append("g").attr("class",function(n){return"resize "+n}).style("cursor",function(n){return $l[n]}).append("rect").attr("x",function(n){return/[ew]$/.test(n)?-3:null}).attr("y",function(n){return/^[ns]/.test(n)?-3:null}).attr("width",6).attr("height",6).style("visibility","hidden"),a.style("display",n.empty()?"none":null);var l,s=ao.transition(t),h=ao.transition(o);c&&(l=Zi(c),h.attr("x",l[0]).attr("width",l[1]-l[0]),r(s)),f&&(l=Zi(f),h.attr("y",l[0]).attr("height",l[1]-l[0]),i(s)),e(s)})}function e(n){n.selectAll(".resize").attr("transform",function(n){return"translate("+s[+/e$/.test(n)]+","+h[+/^s/.test(n)]+")"})}function r(n){n.select(".extent").attr("x",s[0]),n.selectAll(".extent,.n>rect,.s>rect").attr("width",s[1]-s[0])}function i(n){n.select(".extent").attr("y",h[0]),n.selectAll(".extent,.e>rect,.w>rect").attr("height",h[1]-h[0])}function u(){function u(){32==ao.event.keyCode&&(C||(M=null,L[0]-=s[1],L[1]-=h[1],C=2),S())}function v(){32==ao.event.keyCode&&2==C&&(L[0]+=s[1],L[1]+=h[1],C=0,S())}function d(){var n=ao.mouse(b),t=!1;x&&(n[0]+=x[0],n[1]+=x[1]),C||(ao.event.altKey?(M||(M=[(s[0]+s[1])/2,(h[0]+h[1])/2]),L[0]=s[+(n[0]<M[0])],L[1]=h[+(n[1]<M[1])]):M=null),E&&y(n,c,0)&&(r(k),t=!0),A&&y(n,f,1)&&(i(k),t=!0),t&&(e(k),w({type:"brush",mode:C?"move":"resize"}))}function y(n,t,e){var r,i,u=Zi(t),l=u[0],c=u[1],f=L[e],v=e?h:s,d=v[1]-v[0];return C&&(l-=f,c-=d+f),r=(e?g:p)?Math.max(l,Math.min(c,n[e])):n[e],C?i=(r+=f)+d:(M&&(f=Math.max(l,Math.min(c,2*M[e]-r))),r>f?(i=r,r=f):i=f),v[0]!=r||v[1]!=i?(e?a=null:o=null,v[0]=r,v[1]=i,!0):void 0}function m(){d(),k.style("pointer-events","all").selectAll(".resize").style("display",n.empty()?"none":null),ao.select("body").style("cursor",null),q.on("mousemove.brush",null).on("mouseup.brush",null).on("touchmove.brush",null).on("touchend.brush",null).on("keydown.brush",null).on("keyup.brush",null),z(),w({type:"brushend"})}var M,x,b=this,_=ao.select(ao.event.target),w=l.of(b,arguments),k=ao.select(b),N=_.datum(),E=!/^(n|s)$/.test(N)&&c,A=!/^(e|w)$/.test(N)&&f,C=_.classed("extent"),z=W(b),L=ao.mouse(b),q=ao.select(t(b)).on("keydown.brush",u).on("keyup.brush",v);if(ao.event.changedTouches?q.on("touchmove.brush",d).on("touchend.brush",m):q.on("mousemove.brush",d).on("mouseup.brush",m),k.interrupt().selectAll("*").interrupt(),C)L[0]=s[0]-L[0],L[1]=h[0]-L[1];else if(N){var T=+/w$/.test(N),R=+/^n/.test(N);x=[s[1-T]-L[0],h[1-R]-L[1]],L[0]=s[T],L[1]=h[R]}else ao.event.altKey&&(M=L.slice());k.style("pointer-events","none").selectAll(".resize").style("display",null),ao.select("body").style("cursor",_.style("cursor")),w({type:"brushstart"}),d()}var o,a,l=N(n,"brushstart","brush","brushend"),c=null,f=null,s=[0,0],h=[0,0],p=!0,g=!0,v=Bl[0];return n.event=function(n){n.each(function(){var n=l.of(this,arguments),t={x:s,y:h,i:o,j:a},e=this.__chart__||t;this.__chart__=t,Hl?ao.select(this).transition().each("start.brush",function(){o=e.i,a=e.j,s=e.x,h=e.y,n({type:"brushstart"})}).tween("brush:brush",function(){var e=xr(s,t.x),r=xr(h,t.y);return o=a=null,function(i){s=t.x=e(i),h=t.y=r(i),n({type:"brush",mode:"resize"})}}).each("end.brush",function(){o=t.i,a=t.j,n({type:"brush",mode:"resize"}),n({type:"brushend"})}):(n({type:"brushstart"}),n({type:"brush",mode:"resize"}),n({type:"brushend"}))})},n.x=function(t){return arguments.length?(c=t,v=Bl[!c<<1|!f],n):c},n.y=function(t){return arguments.length?(f=t,v=Bl[!c<<1|!f],n):f},n.clamp=function(t){return arguments.length?(c&&f?(p=!!t[0],g=!!t[1]):c?p=!!t:f&&(g=!!t),n):c&&f?[p,g]:c?p:f?g:null},n.extent=function(t){var e,r,i,u,l;return arguments.length?(c&&(e=t[0],r=t[1],f&&(e=e[0],r=r[0]),o=[e,r],c.invert&&(e=c(e),r=c(r)),e>r&&(l=e,e=r,r=l),e==s[0]&&r==s[1]||(s=[e,r])),f&&(i=t[0],u=t[1],c&&(i=i[1],u=u[1]),a=[i,u],f.invert&&(i=f(i),u=f(u)),i>u&&(l=i,i=u,u=l),i==h[0]&&u==h[1]||(h=[i,u])),n):(c&&(o?(e=o[0],r=o[1]):(e=s[0],r=s[1],c.invert&&(e=c.invert(e),r=c.invert(r)),e>r&&(l=e,e=r,r=l))),f&&(a?(i=a[0],u=a[1]):(i=h[0],u=h[1],f.invert&&(i=f.invert(i),u=f.invert(u)),i>u&&(l=i,i=u,u=l))),c&&f?[[e,i],[r,u]]:c?[e,r]:f&&[i,u])},n.clear=function(){return n.empty()||(s=[0,0],h=[0,0],o=a=null),n},n.empty=function(){return!!c&&s[0]==s[1]||!!f&&h[0]==h[1]},ao.rebind(n,l,"on")};var $l={n:"ns-resize",e:"ew-resize",s:"ns-resize",w:"ew-resize",nw:"nwse-resize",ne:"nesw-resize",se:"nwse-resize",sw:"nesw-resize"},Bl=[["n","e","s","w","nw","ne","se","sw"],["e","w"],["n","s"],[]],Wl=ga.format=xa.timeFormat,Jl=Wl.utc,Gl=Jl("%Y-%m-%dT%H:%M:%S.%LZ");Wl.iso=Date.prototype.toISOString&&+new Date("2000-01-01T00:00:00.000Z")?eo:Gl,eo.parse=function(n){var t=new Date(n);return isNaN(t)?null:t},eo.toString=Gl.toString,ga.second=On(function(n){return new va(1e3*Math.floor(n/1e3))},function(n,t){n.setTime(n.getTime()+1e3*Math.floor(t))},function(n){return n.getSeconds()}),ga.seconds=ga.second.range,ga.seconds.utc=ga.second.utc.range,ga.minute=On(function(n){return new va(6e4*Math.floor(n/6e4))},function(n,t){n.setTime(n.getTime()+6e4*Math.floor(t))},function(n){return n.getMinutes()}),ga.minutes=ga.minute.range,ga.minutes.utc=ga.minute.utc.range,ga.hour=On(function(n){var t=n.getTimezoneOffset()/60;return new va(36e5*(Math.floor(n/36e5-t)+t))},function(n,t){n.setTime(n.getTime()+36e5*Math.floor(t))},function(n){return n.getHours()}),ga.hours=ga.hour.range,ga.hours.utc=ga.hour.utc.range,ga.month=On(function(n){return n=ga.day(n),n.setDate(1),n},function(n,t){n.setMonth(n.getMonth()+t)},function(n){return n.getMonth()}),ga.months=ga.month.range,ga.months.utc=ga.month.utc.range;var Kl=[1e3,5e3,15e3,3e4,6e4,3e5,9e5,18e5,36e5,108e5,216e5,432e5,864e5,1728e5,6048e5,2592e6,7776e6,31536e6],Ql=[[ga.second,1],[ga.second,5],[ga.second,15],[ga.second,30],[ga.minute,1],[ga.minute,5],[ga.minute,15],[ga.minute,30],[ga.hour,1],[ga.hour,3],[ga.hour,6],[ga.hour,12],[ga.day,1],[ga.day,2],[ga.week,1],[ga.month,1],[ga.month,3],[ga.year,1]],nc=Wl.multi([[".%L",function(n){return n.getMilliseconds()}],[":%S",function(n){return n.getSeconds()}],["%I:%M",function(n){return n.getMinutes()}],["%I %p",function(n){return n.getHours()}],["%a %d",function(n){return n.getDay()&&1!=n.getDate()}],["%b %d",function(n){return 1!=n.getDate()}],["%B",function(n){return n.getMonth()}],["%Y",zt]]),tc={range:function(n,t,e){return ao.range(Math.ceil(n/e)*e,+t,e).map(io)},floor:m,ceil:m};Ql.year=ga.year,ga.scale=function(){return ro(ao.scale.linear(),Ql,nc)};var ec=Ql.map(function(n){return[n[0].utc,n[1]]}),rc=Jl.multi([[".%L",function(n){return n.getUTCMilliseconds()}],[":%S",function(n){return n.getUTCSeconds()}],["%I:%M",function(n){return n.getUTCMinutes()}],["%I %p",function(n){return n.getUTCHours()}],["%a %d",function(n){return n.getUTCDay()&&1!=n.getUTCDate()}],["%b %d",function(n){return 1!=n.getUTCDate()}],["%B",function(n){return n.getUTCMonth()}],["%Y",zt]]);ec.year=ga.year.utc,ga.scale.utc=function(){return ro(ao.scale.linear(),ec,rc)},ao.text=An(function(n){return n.responseText}),ao.json=function(n,t){return Cn(n,"application/json",uo,t)},ao.html=function(n,t){return Cn(n,"text/html",oo,t)},ao.xml=An(function(n){return n.responseXML}),"function"==typeof define&&define.amd?(this.d3=ao,define(ao)): true&&module.exports?module.exports=ao:this.d3=ao}();
/// <reference path="types/MicrosoftMaps/Microsoft.Maps.All.d.ts"/>
(function InitBingMapScript(w, d) {
    console.log('InitBingMapScript');
    let script = d.createElement('script');
    script.type = "text/javascript";
    script.src = "https://www.bing.com/api/maps/mapcontrol?callback=loadMap";
    script.async = false;
    script.defer = false;
    d.body.appendChild(script);
})(window, document);
class MapController {
    constructor(div, data, format) {
        this._div = div;
        this._format = format;
        this._data = data;
        this._polylineColorGeneration = new ColoringGeneration(format.lineColoring);
        this._polygonColorGeneration = new ColoringGeneration(format.polygonColoring);
        this._polylineService = new PolylineService(this._polylineColorGeneration);
        this._nodeService = new NodeService(this._polylineColorGeneration);
        this._titleService = new TitleSevice();
        this._polygonService = new PolygonService(this._polygonColorGeneration);
        this.layerFront = new Microsoft.Maps.Layer();
        this.layerBehind = new Microsoft.Maps.Layer();
        loadMap = () => {
            this._remap();
            this._then && this._then(this._map);
            this._then = null;
            this._tooltipService = new TooltipService(this._map);
            this.drawMap(data, format);
        };
    }
    drawMap(data, format) {
        if (Microsoft.Maps.WellKnownText) {
            return this.reDrawMap(data, format);
        }
        else {
            Microsoft.Maps.loadModule('Microsoft.Maps.WellKnownText', () => {
                return this.reDrawMap(data, format);
            });
        }
    }
    _remap() {
        var setting = this.getMapParameter(this._map, this._div, this._format);
        this._map = new Microsoft.Maps.Map(this._div, setting);
        Microsoft.Maps.loadModule('Microsoft.Maps.SpatialMath');
        Microsoft.Maps.loadModule('Microsoft.Maps.WellKnownText');
        Microsoft.Maps.loadModule('Microsoft.Maps.SpatialMath');
        return this._map;
    }
    getMapParameter(map, div, fm) {
        var para = {
            credentials: 'AidYBxBA7LCx2Uo3v-4QJE2zRVgvqg4KquhupR_dRRIGbmKd1A1CpWnjEJulgAUe',
            showDashboard: false,
            showTermsLink: false,
            showLogo: false,
            customMapStyle: this.customStyle(),
            mapTypeId: this.mapType(fm.mapLayers),
            liteMode: false
        };
        if (map) {
            para.center = map.getCenter();
            para.zoom = map.getZoom();
        }
        else {
            para.center = new Microsoft.Maps.Location(0, 0);
            para.zoom = this.defaultZoom(div.offsetWidth, div.offsetHeight);
        }
        return para;
    }
    mapType(v) {
        switch (v.type) {
            case 'aerial': return Microsoft.Maps.MapTypeId.aerial;
            case 'road': return Microsoft.Maps.MapTypeId.road;
            case 'canvasDark': return Microsoft.Maps.MapTypeId.canvasDark;
            case 'canvasLight': return Microsoft.Maps.MapTypeId.canvasLight;
            case 'grayscale': return Microsoft.Maps.MapTypeId.grayscale;
        }
    }
    customStyle() {
        let v = { label: "Label", building: false };
        var nothing = { labelVisible: false, visible: false };
        var visible = { visible: true, labelVisible: v.label };
        var result = {
            version: "1.0",
            elements: {
                highSpeedRamp: nothing,
                ramp: nothing,
                unpavedStreet: nothing,
                tollRoad: nothing,
                trail: nothing
            }
        };
        if (!v.building) {
            result.elements.structure = { visible: false };
            result.elements.building = { visible: false };
        }
        result.elements.mapElement = { labelVisible: v.label };
        result.elements.political = { labelVisible: v.label, visible: true };
        result.elements.district = { labelVisible: v.label, visible: true };
        if (v.road === 'gray' || v.road === 'gray_label') {
            result.elements.transportation = {
                visible: true,
                labelVisible: v.road === 'gray_label',
                fillColor: '#DDDDDD',
                strokeColor: '#AAAAAA',
                labelOutlineColor: '#EEEEEE'
            };
            result.elements.street = {
                visible: true,
                labelVisible: v.road === 'gray_label',
                fillColor: "#EEEEEE",
                strokeColor: "#DDDDDD",
                labelOutlineColor: '#DDDDDD'
            };
        }
        else if (v.road === 'hidden') {
            result.elements.transportation = nothing;
        }
        result.elements.point = v.icon ? visible : nothing;
        result.elements.vegetation = v.forest ? visible : nothing;
        result.elements.populatedPlace = { labelVisible: v.city, visible: v.icon };
        result.elements.area = v.area ? visible : nothing;
        return result;
    }
    defaultZoom(width, height) {
        var min = Math.min(width, height);
        for (var level = 1; level < 20; level++) {
            if (256 * Math.pow(2, level) > min) {
                break;
            }
        }
        return level;
    }
    async restyleMap(fm) {
        let mapTypeId = this.mapType(fm);
        if (this._map.getMapTypeId() !== mapTypeId) {
            this._map.setMapType(mapTypeId);
        }
    }
    async reDrawMap(data, format) {
        this.resetMap();
        this.setDefaultData(data, format);
        const dataFrontLine = data.filter(d => d.IsLineOverlapsPolygon); // Front line, behind polygon
        const dataBehindLine = data.filter(d => !d.IsLineOverlapsPolygon); // Behind line, front polygon
        await Promise.all([
            this.restyleMap(format.mapLayers),
            this.drawPolygonData(this.layerFront, format, dataFrontLine),
            this.drawPolygonData(this.layerBehind, format, dataBehindLine)
        ]);
        await Promise.all([
            this.drawPolylineData(this.layerFront, format, dataBehindLine),
            this.drawPolylineData(this.layerBehind, format, dataFrontLine),
        ]);
        this._map.layers.insert(this.layerBehind);
        this._map.layers.insert(this.layerFront);
        await this.setBestView();
    }
    setDefaultData(data, format) {
        this._polylineColorGeneration.setColorColumn(data, ColumnView.LineColor);
        this._polylineColorGeneration.setColoringFormat(format.lineColoring);
        this._polygonColorGeneration.setColorColumn(data, ColumnView.PolygonColor);
        this._polygonColorGeneration.setColoringFormat(format.polygonColoring);
        this._format = format;
        this._data = data;
    }
    async drawPolygonData(layer, format, data) {
        if (format.polygon.show) {
            const polygonModels = this._polygonService.draw(data, format.polygon);
            const polygons = polygonModels.map(x => x.polygon);
            layer.add(polygons);
            if (format.polygonLabel.show && polygons.length) {
                const labels = this._titleService.drawPolygonLabel(polygonModels, format.polygonLabel);
                layer.add(labels);
            }
            this._polygons = this._polygons.concat(polygons);
        }
        else {
            this._polygons = [];
        }
    }
    async drawPolylineData(layer, format, data) {
        let polylineModels = this._polylineService.draw(data, this._format.lineColoring);
        if (polylineModels) {
            await Promise.all([this.drawDataLabel(layer, format, polylineModels),
                this.drawPolyline(layer, polylineModels),
                this.drawOriginandCategoryNode(layer, polylineModels, format),
                this.drawDestinationNode(layer, format, polylineModels)]);
        }
        polylineModels.filter(model => model.data.Tooltip).forEach(model => {
            this._tooltipService.add(model.polyline, model.data.Tooltip.toString());
        });
    }
    async drawPolyline(layer, polylineModels) {
        const polylines = polylineModels.map(x => x.polyline);
        layer.add(polylines);
        this._polylines = this._polylines.concat(polylines);
    }
    drawDataLabel(layer, format, polylineModels) {
        if (format.dataLabel.show) {
            let dataLabels = this._titleService.drawDataLabel(polylineModels, format.dataLabel);
            layer.add(dataLabels);
        }
    }
    drawDestinationNode(layer, format, polylineModels) {
        if (format.destinationNode.show) {
            let destNode = this.getDestinationNote(polylineModels);
            let destMapNodes = this._nodeService.drawArroweNode(destNode, format.node, format.destinationNode);
            layer.add(destMapNodes);
        }
    }
    async drawOriginandCategoryNode(layer, polylineModels, format) {
        const originNotes = this.getOriginNotes(polylineModels);
        if (format.category.show && originNotes) {
            let titles = this._titleService.draw(originNotes, format.category, format.oridinNode);
            layer.add(titles);
        }
        if (format.oridinNode.show) {
            let originMapNodes = this._nodeService.drawCircleNode(originNotes, format.node, format.oridinNode);
            layer.add(originMapNodes);
        }
    }
    async setBestView() {
        let primitive = [];
        primitive = primitive.concat(this._polylines);
        primitive = primitive.concat(this._polygons);
        var vbounds = Microsoft.Maps.LocationRect.fromShapes(primitive);
        this._map.setView({ bounds: vbounds, padding: 5 });
    }
    getOriginNotes(polylines) {
        return polylines.map(line => {
            let locations = line.polyline.getLocations();
            return { location: locations[0], data: line.data };
        });
    }
    getDestinationNote(polylines) {
        return polylines.map(line => {
            let locations = line.polyline.getLocations();
            let size = locations.length;
            if (size == 1) {
                return {
                    data: line.data,
                    location: [locations[0], locations[0]]
                };
            }
            else if (size == 0) {
                return {
                    data: line.data,
                    location: []
                };
            }
            return {
                data: line.data,
                location: [locations[size - 2], locations[size - 1]]
            };
        });
    }
    async resetMap() {
        this._polylines = [];
        this._polygons = [];
        Promise.all([
            this._map.entities.clear(),
            this.layerBehind.clear(),
            this.layerFront.clear(),
        ]);
    }
}
class RgbColor {
    constructor(r, g, b, a) {
        this.Red = 0;
        this.Green = 0;
        this.Blue = 0;
        this.Alpha = 0;
        this.toString = () => {
            return "rgba(" + this.Red + ", " + this.Green + ", " + this.Blue + "," + (this.Alpha || 0) + ")";
        };
        this.Red = r;
        this.Blue = b;
        this.Green = g;
        this.Alpha = a;
    }
    static hexToRgb(hex, alpha) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? new RgbColor(parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16), alpha) : null;
    }
}
class ColoringGeneration {
    constructor(colorGenerator) {
        this.colorValues = [];
        this.minColorValues = 0;
        this.maxColorValues = 0;
        this.coloringFormat = colorGenerator;
    }
    setColoringFormat(format) {
        this.coloringFormat = format;
    }
    setColorColumn(modelView, propertyName) {
        this.colorValues = modelView.map(x => Number(x[propertyName])).filter(x => !isNaN(x));
        this.minColorValues = Math.min(...this.colorValues);
        this.maxColorValues = Math.max(...this.colorValues);
    }
    getColor(colorValue, transparency = 100) {
        let colorNumber = Number(colorValue);
        if (isNaN(colorNumber)) {
            let colorHex = RgbColor.hexToRgb(colorValue, transparency / 100);
            return colorHex.toString();
        }
        if (this.coloringFormat.gradient) {
            return this.getGradientColor(colorNumber, transparency / 100);
        }
        return this.getNearestColor(colorNumber, transparency / 100);
    }
    getGradientColor(colorNumber, transparency) {
        var colorMin = RgbColor.hexToRgb(this.coloringFormat.minColor, transparency);
        if (this.minColorValues >= this.maxColorValues) {
            return colorMin.toString();
        }
        let center = (this.minColorValues + this.maxColorValues) / 2;
        var colorMin = RgbColor.hexToRgb(this.coloringFormat.minColor, 1);
        var colorMiddle = RgbColor.hexToRgb(this.coloringFormat.centerColor, 1);
        var colorMax = RgbColor.hexToRgb(this.coloringFormat.maxColor, 1);
        if (colorNumber <= center) {
            let colorW = this.pickHex(colorMin, colorMiddle, 1 - colorNumber / center, transparency);
            return colorW.toString();
        }
        else {
            let colorW = this.pickHex(colorMiddle, colorMax, 2 - colorNumber / center, transparency);
            return colorW.toString();
        }
    }
    getNearestColor(colorNumber, transparency) {
        if (colorNumber < this.coloringFormat.colorMinValue) {
            return RgbColor.hexToRgb(this.coloringFormat.minColor, transparency).toString();
            ;
        }
        else if (colorNumber < this.coloringFormat.colorMaxValue) {
            return RgbColor.hexToRgb(this.coloringFormat.centerColor, transparency).toString();
            ;
        }
        return RgbColor.hexToRgb(this.coloringFormat.maxColor, transparency).toString();
        ;
    }
    pickHex(color1, color2, weight, opacity) {
        var p = weight;
        var w = p * 2 - 1;
        var w1 = (w / 1 + 1) / 2;
        var w2 = 1 - w1;
        return new RgbColor(Math.round(color1.Red * w1 + color2.Red * w2), Math.round(color1.Green * w1 + color2.Green * w2), Math.round(color1.Blue * w1 + color2.Blue * w2), opacity);
    }
}
class PolylineService {
    constructor(colorGeneration) {
        this.colorGeneration = colorGeneration;
        this._lineColorDefault = "#0700FF";
        this._strokeThicknessDefault = 3;
    }
    draw(data, format) {
        return data.filter(x => x.Linestring).map(item => this.createPolyline(item, format));
    }
    createPolyline(dataView, format) {
        var polyline = Microsoft.Maps.WellKnownText.read(dataView.Linestring, {
            polylineOptions: {
                strokeColor: this.colorGeneration.getColor(dataView.LineColor || this._lineColorDefault, format.transparency),
                strokeThickness: this._strokeThicknessDefault
            }
        });
        Microsoft.Maps.Events.addHandler(polyline, 'click', function () { console.log('createPolyline'); });
        return {
            polyline: polyline,
            data: dataView
        };
    }
}
class NodeService {
    constructor(colorGeneration) {
        this.colorGeneration = colorGeneration;
        this._lineColorDefault = "#0700FF";
        this.strokeWidthDefault = 3;
        this.nodeSizeDefault = 20;
    }
    drawCircleNode(nodes, format, sizeFormat) {
        return nodes.map(node => {
            const gradientColor = this.getNodeColor(node, format);
            const gradientColorLine = this.getLineColor(format, node, gradientColor);
            const svgSize = this.getNodeSize(node.data.Size, sizeFormat) / 2;
            return this.CreateCirclePushpin(node.location, svgSize, gradientColor, gradientColorLine, 1);
        });
    }
    drawArroweNode(nodes, format, sizeFormat) {
        return nodes.map(node => {
            const locationLines = node.location;
            const heading = Microsoft.Maps.SpatialMath.getHeading(locationLines[0], locationLines[1]);
            const gradientColor = this.getNodeColor(node, format);
            const gradientColorLine = this.getLineColor(format, node, gradientColor);
            const svgSize = this.getNodeSize(node.data.Size, sizeFormat) / 2;
            return this.CreateArrowPushpin(heading, locationLines[1], svgSize, gradientColor, gradientColorLine, 2);
        });
    }
    CreateCirclePushpin(location, radius, fillColor, strokeColor, strokeWidth) {
        strokeWidth = strokeWidth || this.strokeWidthDefault;
        //Create an SVG string of a circle with the specified radius and color.
        const svg = ['<svg xmlns="http://www.w3.org/2000/svg" width="', (radius * 2),
            '" height="', (radius * 2), '"><circle cx="', radius, '" cy="', radius, '" r="',
            (radius - strokeWidth), '" stroke="', strokeColor, '" stroke-width="', strokeWidth, '" fill="', fillColor, '"/></svg>'];
        //Create a pushpin from the SVG and anchor it to the center of the circle.
        var pushin = new Microsoft.Maps.Pushpin(location, {
            icon: svg.join(''),
            anchor: new Microsoft.Maps.Point(radius, radius)
        });
        Microsoft.Maps.Events.addHandler(pushin, 'click', function () { console.log('CreateCirclePushpin'); });
        return pushin;
    }
    CreateArrowPushpin(heading, location, radius, fillColor, strokeColor, strokeWidth) {
        strokeWidth = strokeWidth || this.strokeWidthDefault;
        //Create an SVG string of a circle with the specified radius and color.
        var svg = ['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="', (radius * 2),
            '" height="', (radius * 2), '" transform="rotate(', heading, ')"', '> <polygon points="50,0 88,83 50,60 12,83" ', ' stroke="', strokeColor, '" stroke-width="', strokeWidth, '" fill="', fillColor, '"/></svg>'];
        //Create a pushpin from the SVG and anchor it to the center of the circle.
        var pushin = new Microsoft.Maps.Pushpin(location, {
            icon: svg.join(''),
            anchor: new Microsoft.Maps.Point(radius, radius)
        });
        Microsoft.Maps.Events.addHandler(pushin, 'click', function () { console.log('CreateArrowPushpin'); });
        return pushin;
    }
    getNodeSize(nodeSize, sizeFormat) {
        let svgSize = nodeSize || this.nodeSizeDefault;
        if (!sizeFormat.changedSize) {
            return svgSize;
        }
        let minValue = Math.max(svgSize, sizeFormat.minValue);
        return Math.min(minValue, sizeFormat.maxValue);
    }
    getNodeColor(node, format) {
        const nodeColor = node.data.LineColor || this._lineColorDefault;
        return this.colorGeneration.getColor(nodeColor, format.transparency);
    }
    getLineColor(format, node, gradientColor) {
        return format.showNodeLine ? this.colorGeneration.getColor(node.data.LineColor || this._lineColorDefault) : gradientColor;
    }
}
class TitleSevice {
    constructor() {
        this._textColorDefault = '#7F898A';
        this._fontSizeDefault = 10;
        this._fontFamilyDefault = 'Arial';
        this.nodeSizeDefault = 20;
    }
    ;
    measureTextWidth(text, fontSize, fontFamily) {
        if (!this.offScreenCanvas) {
            this.offScreenCanvas = document.createElement('canvas').getContext("2d");
        }
        this.offScreenCanvas.font = fontSize + 'px ' + fontFamily;
        return this.offScreenCanvas.measureText(text).width;
    }
    createLabelIcon(text, textColor, fontSize, fontFamily) {
        let labelPushpinTemplate = '<svg xmlns="http://www.w3.org/2000/svg" width="{width}" height="{height}"><text x="{x}" y="{y}" style="font-size:{fontSize}px;fill:{textColor};font-family:{fontFamily}" text-anchor="middle">{text}</text></svg>';
        textColor = textColor || 'black';
        fontSize = fontSize || 16;
        fontFamily = fontFamily || 'arial';
        let width = this.measureTextWidth(text, fontSize, fontFamily);
        return labelPushpinTemplate.replace('{width}', width.toString())
            .replace('{height}', (fontSize * 1.2).toString())
            .replace('{x}', (width / 2).toString())
            .replace('{y}', fontSize.toString())
            .replace('{textColor}', textColor)
            .replace('{fontSize}', fontSize.toString())
            .replace('{fontFamily}', fontFamily);
    }
    draw(nodes, format, sizeFormat) {
        return nodes.filter(node => node.data.Category)
            .map(node => {
            const nodeSize = this.getNodeSize(node.data.Size, sizeFormat);
            return this.createLabelPushpin(node.location, node.data.Category.toString(), nodeSize, format);
        });
    }
    drawPolygonLabel(polygons, format) {
        return polygons.filter(node => node.data.PolygonCategory)
            .map(polygon => {
            return this.createLabelPushpin(Microsoft.Maps.SpatialMath.Geometry.centroid(polygon.polygon), polygon.data.PolygonCategory.toString(), polygon.data.Size || 20, format);
        });
    }
    drawDataLabel(polylines, format) {
        return polylines.filter(x => x.data.DataLabel).map(item => {
            return this.createLabelPushpin(Microsoft.Maps.SpatialMath.Geometry.centroid(item.polyline), item.data.DataLabel.toString(), 20, format);
        });
    }
    createLabelPushpin(location, text, size, format) {
        let textColor = format.fontColor || this._textColorDefault;
        let fontSize = format.fontSize || this._fontSizeDefault;
        let fontFamily = format.fontType || this._fontFamilyDefault;
        var width = this.measureTextWidth(text, fontSize, fontFamily);
        var pin = new Microsoft.Maps.Pushpin(location, {
            icon: this.createLabelIcon(text, textColor, fontSize, fontFamily),
            text: text,
            anchor: new Microsoft.Maps.Point(this.getAligmantOfTitle(format.textAlignment, width), size / 2 + fontSize * 1)
        });
        //Store font info in metadata so we can update icons if needed.
        pin.metadata = {
            textColor: textColor,
            fontSize: fontSize,
            fontFamily: fontFamily
        };
        return pin;
    }
    getAligmantOfTitle(textAlignment, width) {
        switch (textAlignment) {
            case 'left': return width;
            case 'center': return width / 2;
            default: return 0;
        }
    }
    getNodeSize(nodeSize, sizeFormat) {
        if (!sizeFormat.show) {
            return 0;
        }
        let svgSize = nodeSize || this.nodeSizeDefault;
        if (!sizeFormat.changedSize) {
            return svgSize;
        }
        let minValue = Math.max(svgSize, sizeFormat.minValue);
        return Math.min(minValue, sizeFormat.maxValue);
    }
}
class PolygonService {
    constructor(colorGeneration) {
        this.colorGeneration = colorGeneration;
        this._strokeThicknessDefault = 2;
    }
    draw(data, format) {
        let strokeThickness = format.showline ? this._strokeThicknessDefault : 0;
        return data.filter(x => x.Polygon).map(item => this.createPolygon(item, format, strokeThickness));
    }
    createPolygon(item, format, strokeThickness) {
        const polygonColor = item.PolygonColor || format.color;
        const polygon = Microsoft.Maps.WellKnownText.read(item.Polygon, {
            polygonOptions: {
                strokeColor: this.colorGeneration.getColor(polygonColor),
                strokeThickness: strokeThickness,
                fillColor: this.colorGeneration.getColor(polygonColor, format.transparency)
            }
        });
        return { data: item, polygon: polygon };
    }
    darwLabel(data) {
        return data.map(item => {
            return this.addLabelToPolygon(item.polygon, item.data.PolygonCategory.toString());
        });
    }
    addLabelToPolygon(polygon, label) {
        var centroid = Microsoft.Maps.SpatialMath.Geometry.centroid(polygon);
        //Create a pushpin that has a transparent icon and a title property set to the label value.
        var labelPin = new Microsoft.Maps.Pushpin(centroid, {
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="1" height="1"></svg>',
            title: label
        });
        //Store a reference to the label pushpin in the polygon metadata.
        polygon.metadata = {
            label: labelPin,
            textColor: 'red',
            fontSize: 18,
            fontFamily: 'Arial'
        };
        return labelPin;
    }
}
class TooltipService {
    constructor(map) {
        this.tooltip = new Microsoft.Maps.Infobox(map.getCenter(), {
            visible: false,
            showPointer: false,
            showCloseButton: false,
            offset: new Microsoft.Maps.Point(-75, 10)
        });
        this.tooltip.setMap(map);
        this.tooltipTemplate = this.getTooltipTemplate();
    }
    add(item, text) {
        if (text && text !== '') {
            Microsoft.Maps.Events.addHandler(item, 'mouseover', e => {
                this.tooltip.setOptions({ visible: false });
                //Set the infobox options with the metadata of the pushpin.
                this.tooltip.setOptions({
                    location: e.location,
                    //Microsoft.Maps.SpatialMath.Geometry.centroid(item),// item.getLocations(),//.target.getLocation(),
                    htmlContent: this.tooltipTemplate.replace('{title}', text),
                    visible: true
                });
            });
            Microsoft.Maps.Events.addHandler(item, 'mouseout', x => { this.tooltip.setOptions({ visible: false }); });
        }
    }
    getTooltipTemplate() {
        return '<div class="tooltiptext"><b>{title}</b></div>';
    }
}
class ColumnView {
    static toArray() {
        return [
            this.Category,
            this.LineColor,
            this.Linestring,
            this.IconUrl,
            this.IsLineOverlapsPolygon,
            this.Polygon,
            this.PolygonCategory,
            this.PolygonColor,
            this.Size,
            this.Tooltip
        ];
    }
}
ColumnView.Category = "Category";
ColumnView.Size = "Size";
ColumnView.LineColor = "LineColor";
ColumnView.Linestring = "Linestring";
ColumnView.IconUrl = "IconUrl";
ColumnView.IsLineOverlapsPolygon = "IsLineOverlapsPolygon";
ColumnView.PolygonCategory = "PolygonCategory";
ColumnView.Polygon = "Polygon";
ColumnView.PolygonColor = "PolygonColor";
ColumnView.Tooltip = "Tooltip";
class MapView {
    constructor() {
        this.Linestring = "";
        this.Size = 0;
        this.LineColor = "";
        this.IconUrl = "";
        this.Polygon = "";
        this.PolygonColor = "";
    }
}
class LocationModel {
}
class PolylineModel {
}
class PolygonModel {
}
class DataLabel {
    constructor(fieldName, value) {
        this.toString = () => {
            return this.fieldName + " : " + this.value;
        };
        this.fieldName = fieldName;
        this.value = value;
    }
    static getFields() {
        return [ColumnView.Category, ColumnView.PolygonCategory, ColumnView.Tooltip];
    }
}
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var visual;
        (function (visual) {
            "use strict";
            var DataViewObjectsParser = powerbi.extensibility.utils.dataview.DataViewObjectsParser;
            class LineColoringSettings {
                constructor() {
                    this.minColor = "#00FF46";
                    this.centerColor = "#FFCA00";
                    this.maxColor = "#FF1912";
                    this.gradient = false;
                    this.colorMinValue = 0;
                    this.colorMaxValue = 80;
                    this.transparency = 100;
                }
            }
            visual.LineColoringSettings = LineColoringSettings;
            class TextSettings {
                constructor() {
                    this.show = false;
                    this.fontType = "helvetica, arial, sans-serif";
                    this.fontSize = 10;
                    this.fontColor = "#7F898A";
                    this.textAlignment = "center";
                }
            }
            visual.TextSettings = TextSettings;
            class PolygonLabelSettings {
                constructor() {
                    this.show = false;
                    this.fontType = "helvetica, arial, sans-serif";
                    this.fontSize = 10;
                    this.fontColor = "#293537";
                    this.textAlignment = "center";
                }
            }
            visual.PolygonLabelSettings = PolygonLabelSettings;
            class DataLabelSettings {
                constructor() {
                    this.show = false;
                    this.fontType = "helvetica, arial, sans-serif";
                    this.fontSize = 10;
                    this.fontColor = "#293537";
                    this.textAlignment = "center";
                }
            }
            visual.DataLabelSettings = DataLabelSettings;
            class MapLayerSettings {
                constructor() {
                    this.type = "road";
                }
            }
            visual.MapLayerSettings = MapLayerSettings;
            class NodeSettings {
                constructor() {
                    this.transparency = 0;
                    this.showNodeLine = true;
                }
            }
            visual.NodeSettings = NodeSettings;
            class NodeSizeSettings {
                constructor() {
                    this.show = true;
                    this.changedSize = false;
                    this.minValue = 0;
                    this.maxValue = 20;
                }
            }
            visual.NodeSizeSettings = NodeSizeSettings;
            class PolygonSettings {
                constructor() {
                    this.show = false;
                    this.showline = true;
                    this.color = "0052FF";
                    this.transparency = 50;
                }
            }
            visual.PolygonSettings = PolygonSettings;
            class PolygonColoringSettings {
                constructor() {
                    this.minColor = "#00FF46";
                    this.centerColor = "#FFCA00";
                    this.maxColor = "#FF1912";
                    this.gradient = false;
                    this.colorMinValue = 0;
                    this.colorMaxValue = 80;
                }
            }
            visual.PolygonColoringSettings = PolygonColoringSettings;
            class VisualSettings extends DataViewObjectsParser {
                constructor() {
                    super(...arguments);
                    this.category = new TextSettings();
                    this.mapLayers = new MapLayerSettings();
                    this.lineColoring = new LineColoringSettings();
                    this.node = new NodeSettings();
                    this.oridinNode = new NodeSizeSettings();
                    this.destinationNode = new NodeSizeSettings();
                    this.polygon = new PolygonSettings();
                    this.polygonLabel = new PolygonLabelSettings();
                    this.polygonColoring = new PolygonColoringSettings();
                    this.dataLabel = new DataLabelSettings();
                }
            }
            visual.VisualSettings = VisualSettings;
        })(visual = extensibility.visual || (extensibility.visual = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visual CLI
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
// powerbi.visuals
let mapctl;
function init(div, setting, format) {
    if (!mapctl) {
        mapctl = new MapController(div, setting, format);
    }
    else {
        mapctl.drawMap(setting, format);
    }
}
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var visual;
        (function (visual) {
            "use strict";
            class Visual {
                constructor(options) {
                    this._options = null;
                    debugger;
                    this.host = options.host;
                    this.selectionManager = this.host.createSelectionManager();
                    this.divMap = d3.select(options.element)
                        .append('div')
                        .classed('map', true)
                        .attr({ id: "map_id" });
                }
                update(options) {
                    debugger;
                    let dataView = visual.VisualSettings.parse(options.dataViews[0] || {});
                    this.visualSettings = dataView;
                    try {
                        this.viewModel = this.getViewModel(options);
                    }
                    catch (exception) {
                        console.error("Couldn't parse models", exception);
                    }
                    init(this.divMap.node(), this.viewModel, this.visualSettings);
                }
                getViewModel(options) {
                    let dv = options.dataViews;
                    let viewModel = [];
                    let datalabels = DataLabel.getFields();
                    if (!dv || !dv[0] || !dv[0].table || !dv[0].table.columns || !dv[0].table.rows) {
                        return viewModel;
                    }
                    let columns = dv[0].table.columns;
                    let rows = dv[0].table.rows;
                    let columnIndexes = columns.map(c => { return { ...c.roles, index: c.index, fieldName: c.displayName }; });
                    for (let i = 0, len = rows.length; i < len; i++) {
                        let polyline = new MapView();
                        ColumnView.toArray().forEach(columnName => {
                            var col = columnIndexes.find(x => x[columnName]);
                            if (col) {
                                //Note: parse filed for data label
                                if (datalabels.indexOf(columnName) > -1) {
                                    polyline[columnName] = new DataLabel(col.fieldName, rows[i][col.index]);
                                }
                                else if (columnName === ColumnView.Size) { // NOTE: If Size value isn't empty, write it in DataLabel 
                                    polyline.DataLabel = new DataLabel(col.fieldName, rows[i][col.index]);
                                    polyline[columnName] = rows[i][col.index];
                                }
                                else {
                                    polyline[columnName] = rows[i][col.index];
                                }
                            }
                        });
                        polyline.SelectionId = this.host.createSelectionIdBuilder().withTable(dv[0].table, i);
                        viewModel.push(polyline);
                    }
                    return viewModel;
                }
                enumerateObjectInstances(options) {
                    const settings = this.visualSettings || visual.VisualSettings.getDefault();
                    var visualObjects = visual.VisualSettings.enumerateObjectInstances(settings, options);
                    let propeties = visualObjects.instances[0].properties;
                    switch (options.objectName) {
                        case 'lineColoring': {
                            if (propeties.gradient) {
                                delete visualObjects.instances[0].properties.colorMaxValue;
                                delete visualObjects.instances[0].properties.colorMinValue;
                            }
                            break;
                        }
                        case 'oridinNode': {
                            if (!propeties.changedSize) {
                                delete visualObjects.instances[0].properties.minValue;
                                delete visualObjects.instances[0].properties.maxValue;
                            }
                            break;
                        }
                        case 'destinationNode': {
                            if (!propeties.changedSize) {
                                delete visualObjects.instances[0].properties.minValue;
                                delete visualObjects.instances[0].properties.maxValue;
                            }
                            break;
                        }
                    }
                    return visualObjects;
                }
            }
            visual.Visual = Visual;
        })(visual = extensibility.visual || (extensibility.visual = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
powerbi.visuals = powerbi.visuals || {};
powerbi.visuals.plugins = powerbi.visuals.plugins || {};
powerbi.visuals.plugins["oDmapD5AA58DF977C4921BDDC0050BFF97A2B_DEBUG"] = {
    name: 'oDmapD5AA58DF977C4921BDDC0050BFF97A2B_DEBUG',
    displayName: 'OD map',
    class: 'Visual',
    version: '1.0.1',
    apiVersion: '2.5.0',
    create: (options) => new powerbi.extensibility.visual.Visual(options),
    custom: true
};
//# sourceMappingURL=visual.js.map
var Globalize = Globalize || window["Globalize"] || __webpack_require__(6);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(5), __webpack_require__(0)))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = Function('return this')();

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Globalize v1.6.0
 *
 * http://github.com/jquery/globalize
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2020-09-08T11:54Z
 */

// Core
module.exports = __webpack_require__( 1 );

// Extent core with the following modules
__webpack_require__( 10 );
__webpack_require__( 11 );
__webpack_require__( 12 );

// Load after globalize/number
__webpack_require__( 13 );
__webpack_require__( 14 );

// Load after globalize/number and globalize/plural
__webpack_require__( 15 );
__webpack_require__( 16 );


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(define) {/**
 * CLDR JavaScript Library v0.5.3
 * http://jquery.com/
 *
 * Copyright 2013 Rafael Xavier de Souza
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2020-08-05T21:43Z
 */
/*!
 * CLDR JavaScript Library v0.5.3 2020-08-05T21:43Z MIT license © Rafael Xavier
 * http://git.io/h4lmVg
 */
(function( factory ) {

	if ( typeof define === "function" && define.amd ) {
		// AMD.
		define( [ "../cldr" ], factory );
	} else if (  true && typeof module.exports === "object" ) {
		// Node. CommonJS.
		module.exports = factory( __webpack_require__( 3 ) );
	} else {
		// Global
		factory( Cldr );
	}

}(function( Cldr ) {

	// Build optimization hack to avoid duplicating functions across modules.
	var pathNormalize = Cldr._pathNormalize,
		validatePresence = Cldr._validatePresence,
		validateType = Cldr._validateType;

/*!
 * EventEmitter v4.2.7 - git.io/ee
 * Oliver Caldwell
 * MIT license
 * @preserve
 */

var EventEmitter;
/* jshint ignore:start */
EventEmitter = (function () {


	/**
	 * Class for managing events.
	 * Can be extended to provide event functionality in other classes.
	 *
	 * @class EventEmitter Manages event registering and emitting.
	 */
	function EventEmitter() {}

	// Shortcuts to improve speed and size
	var proto = EventEmitter.prototype;
	var exports = {};
	

	/**
	 * Finds the index of the listener for the event in it's storage array.
	 *
	 * @param {Function[]} listeners Array of listeners to search through.
	 * @param {Function} listener Method to look for.
	 * @return {Number} Index of the specified listener, -1 if not found
	 * @api private
	 */
	function indexOfListener(listeners, listener) {
		var i = listeners.length;
		while (i--) {
			if (listeners[i].listener === listener) {
				return i;
			}
		}

		return -1;
	}

	/**
	 * Alias a method while keeping the context correct, to allow for overwriting of target method.
	 *
	 * @param {String} name The name of the target method.
	 * @return {Function} The aliased method
	 * @api private
	 */
	function alias(name) {
		return function aliasClosure() {
			return this[name].apply(this, arguments);
		};
	}

	/**
	 * Returns the listener array for the specified event.
	 * Will initialise the event object and listener arrays if required.
	 * Will return an object if you use a regex search. The object contains keys for each matched event. So /ba[rz]/ might return an object containing bar and baz. But only if you have either defined them with defineEvent or added some listeners to them.
	 * Each property in the object response is an array of listener functions.
	 *
	 * @param {String|RegExp} evt Name of the event to return the listeners from.
	 * @return {Function[]|Object} All listener functions for the event.
	 */
	proto.getListeners = function getListeners(evt) {
		var events = this._getEvents();
		var response;
		var key;

		// Return a concatenated array of all matching events if
		// the selector is a regular expression.
		if (evt instanceof RegExp) {
			response = {};
			for (key in events) {
				if (events.hasOwnProperty(key) && evt.test(key)) {
					response[key] = events[key];
				}
			}
		}
		else {
			response = events[evt] || (events[evt] = []);
		}

		return response;
	};

	/**
	 * Takes a list of listener objects and flattens it into a list of listener functions.
	 *
	 * @param {Object[]} listeners Raw listener objects.
	 * @return {Function[]} Just the listener functions.
	 */
	proto.flattenListeners = function flattenListeners(listeners) {
		var flatListeners = [];
		var i;

		for (i = 0; i < listeners.length; i += 1) {
			flatListeners.push(listeners[i].listener);
		}

		return flatListeners;
	};

	/**
	 * Fetches the requested listeners via getListeners but will always return the results inside an object. This is mainly for internal use but others may find it useful.
	 *
	 * @param {String|RegExp} evt Name of the event to return the listeners from.
	 * @return {Object} All listener functions for an event in an object.
	 */
	proto.getListenersAsObject = function getListenersAsObject(evt) {
		var listeners = this.getListeners(evt);
		var response;

		if (listeners instanceof Array) {
			response = {};
			response[evt] = listeners;
		}

		return response || listeners;
	};

	/**
	 * Adds a listener function to the specified event.
	 * The listener will not be added if it is a duplicate.
	 * If the listener returns true then it will be removed after it is called.
	 * If you pass a regular expression as the event name then the listener will be added to all events that match it.
	 *
	 * @param {String|RegExp} evt Name of the event to attach the listener to.
	 * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.addListener = function addListener(evt, listener) {
		var listeners = this.getListenersAsObject(evt);
		var listenerIsWrapped = typeof listener === 'object';
		var key;

		for (key in listeners) {
			if (listeners.hasOwnProperty(key) && indexOfListener(listeners[key], listener) === -1) {
				listeners[key].push(listenerIsWrapped ? listener : {
					listener: listener,
					once: false
				});
			}
		}

		return this;
	};

	/**
	 * Alias of addListener
	 */
	proto.on = alias('addListener');

	/**
	 * Semi-alias of addListener. It will add a listener that will be
	 * automatically removed after it's first execution.
	 *
	 * @param {String|RegExp} evt Name of the event to attach the listener to.
	 * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.addOnceListener = function addOnceListener(evt, listener) {
		return this.addListener(evt, {
			listener: listener,
			once: true
		});
	};

	/**
	 * Alias of addOnceListener.
	 */
	proto.once = alias('addOnceListener');

	/**
	 * Defines an event name. This is required if you want to use a regex to add a listener to multiple events at once. If you don't do this then how do you expect it to know what event to add to? Should it just add to every possible match for a regex? No. That is scary and bad.
	 * You need to tell it what event names should be matched by a regex.
	 *
	 * @param {String} evt Name of the event to create.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.defineEvent = function defineEvent(evt) {
		this.getListeners(evt);
		return this;
	};

	/**
	 * Uses defineEvent to define multiple events.
	 *
	 * @param {String[]} evts An array of event names to define.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.defineEvents = function defineEvents(evts) {
		for (var i = 0; i < evts.length; i += 1) {
			this.defineEvent(evts[i]);
		}
		return this;
	};

	/**
	 * Removes a listener function from the specified event.
	 * When passed a regular expression as the event name, it will remove the listener from all events that match it.
	 *
	 * @param {String|RegExp} evt Name of the event to remove the listener from.
	 * @param {Function} listener Method to remove from the event.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.removeListener = function removeListener(evt, listener) {
		var listeners = this.getListenersAsObject(evt);
		var index;
		var key;

		for (key in listeners) {
			if (listeners.hasOwnProperty(key)) {
				index = indexOfListener(listeners[key], listener);

				if (index !== -1) {
					listeners[key].splice(index, 1);
				}
			}
		}

		return this;
	};

	/**
	 * Alias of removeListener
	 */
	proto.off = alias('removeListener');

	/**
	 * Adds listeners in bulk using the manipulateListeners method.
	 * If you pass an object as the second argument you can add to multiple events at once. The object should contain key value pairs of events and listeners or listener arrays. You can also pass it an event name and an array of listeners to be added.
	 * You can also pass it a regular expression to add the array of listeners to all events that match it.
	 * Yeah, this function does quite a bit. That's probably a bad thing.
	 *
	 * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add to multiple events at once.
	 * @param {Function[]} [listeners] An optional array of listener functions to add.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.addListeners = function addListeners(evt, listeners) {
		// Pass through to manipulateListeners
		return this.manipulateListeners(false, evt, listeners);
	};

	/**
	 * Removes listeners in bulk using the manipulateListeners method.
	 * If you pass an object as the second argument you can remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
	 * You can also pass it an event name and an array of listeners to be removed.
	 * You can also pass it a regular expression to remove the listeners from all events that match it.
	 *
	 * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to remove from multiple events at once.
	 * @param {Function[]} [listeners] An optional array of listener functions to remove.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.removeListeners = function removeListeners(evt, listeners) {
		// Pass through to manipulateListeners
		return this.manipulateListeners(true, evt, listeners);
	};

	/**
	 * Edits listeners in bulk. The addListeners and removeListeners methods both use this to do their job. You should really use those instead, this is a little lower level.
	 * The first argument will determine if the listeners are removed (true) or added (false).
	 * If you pass an object as the second argument you can add/remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
	 * You can also pass it an event name and an array of listeners to be added/removed.
	 * You can also pass it a regular expression to manipulate the listeners of all events that match it.
	 *
	 * @param {Boolean} remove True if you want to remove listeners, false if you want to add.
	 * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add/remove from multiple events at once.
	 * @param {Function[]} [listeners] An optional array of listener functions to add/remove.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.manipulateListeners = function manipulateListeners(remove, evt, listeners) {
		var i;
		var value;
		var single = remove ? this.removeListener : this.addListener;
		var multiple = remove ? this.removeListeners : this.addListeners;

		// If evt is an object then pass each of it's properties to this method
		if (typeof evt === 'object' && !(evt instanceof RegExp)) {
			for (i in evt) {
				if (evt.hasOwnProperty(i) && (value = evt[i])) {
					// Pass the single listener straight through to the singular method
					if (typeof value === 'function') {
						single.call(this, i, value);
					}
					else {
						// Otherwise pass back to the multiple function
						multiple.call(this, i, value);
					}
				}
			}
		}
		else {
			// So evt must be a string
			// And listeners must be an array of listeners
			// Loop over it and pass each one to the multiple method
			i = listeners.length;
			while (i--) {
				single.call(this, evt, listeners[i]);
			}
		}

		return this;
	};

	/**
	 * Removes all listeners from a specified event.
	 * If you do not specify an event then all listeners will be removed.
	 * That means every event will be emptied.
	 * You can also pass a regex to remove all events that match it.
	 *
	 * @param {String|RegExp} [evt] Optional name of the event to remove all listeners for. Will remove from every event if not passed.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.removeEvent = function removeEvent(evt) {
		var type = typeof evt;
		var events = this._getEvents();
		var key;

		// Remove different things depending on the state of evt
		if (type === 'string') {
			// Remove all listeners for the specified event
			delete events[evt];
		}
		else if (evt instanceof RegExp) {
			// Remove all events matching the regex.
			for (key in events) {
				if (events.hasOwnProperty(key) && evt.test(key)) {
					delete events[key];
				}
			}
		}
		else {
			// Remove all listeners in all events
			delete this._events;
		}

		return this;
	};

	/**
	 * Alias of removeEvent.
	 *
	 * Added to mirror the node API.
	 */
	proto.removeAllListeners = alias('removeEvent');

	/**
	 * Emits an event of your choice.
	 * When emitted, every listener attached to that event will be executed.
	 * If you pass the optional argument array then those arguments will be passed to every listener upon execution.
	 * Because it uses `apply`, your array of arguments will be passed as if you wrote them out separately.
	 * So they will not arrive within the array on the other side, they will be separate.
	 * You can also pass a regular expression to emit to all events that match it.
	 *
	 * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
	 * @param {Array} [args] Optional array of arguments to be passed to each listener.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.emitEvent = function emitEvent(evt, args) {
		var listeners = this.getListenersAsObject(evt);
		var listener;
		var i;
		var key;
		var response;

		for (key in listeners) {
			if (listeners.hasOwnProperty(key)) {
				i = listeners[key].length;

				while (i--) {
					// If the listener returns true then it shall be removed from the event
					// The function is executed either with a basic call or an apply if there is an args array
					listener = listeners[key][i];

					if (listener.once === true) {
						this.removeListener(evt, listener.listener);
					}

					response = listener.listener.apply(this, args || []);

					if (response === this._getOnceReturnValue()) {
						this.removeListener(evt, listener.listener);
					}
				}
			}
		}

		return this;
	};

	/**
	 * Alias of emitEvent
	 */
	proto.trigger = alias('emitEvent');

	/**
	 * Subtly different from emitEvent in that it will pass its arguments on to the listeners, as opposed to taking a single array of arguments to pass on.
	 * As with emitEvent, you can pass a regex in place of the event name to emit to all events that match it.
	 *
	 * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
	 * @param {...*} Optional additional arguments to be passed to each listener.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.emit = function emit(evt) {
		var args = Array.prototype.slice.call(arguments, 1);
		return this.emitEvent(evt, args);
	};

	/**
	 * Sets the current value to check against when executing listeners. If a
	 * listeners return value matches the one set here then it will be removed
	 * after execution. This value defaults to true.
	 *
	 * @param {*} value The new value to check for when executing listeners.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.setOnceReturnValue = function setOnceReturnValue(value) {
		this._onceReturnValue = value;
		return this;
	};

	/**
	 * Fetches the current value to check against when executing listeners. If
	 * the listeners return value matches this one then it should be removed
	 * automatically. It will return true by default.
	 *
	 * @return {*|Boolean} The current value to check for or the default, true.
	 * @api private
	 */
	proto._getOnceReturnValue = function _getOnceReturnValue() {
		if (this.hasOwnProperty('_onceReturnValue')) {
			return this._onceReturnValue;
		}
		else {
			return true;
		}
	};

	/**
	 * Fetches the events object and creates one if required.
	 *
	 * @return {Object} The events storage object.
	 * @api private
	 */
	proto._getEvents = function _getEvents() {
		return this._events || (this._events = {});
	};

	/**
	 * Reverts the global {@link EventEmitter} to its previous value and returns a reference to this version.
	 *
	 * @return {Function} Non conflicting EventEmitter class.
	 */
	EventEmitter.noConflict = function noConflict() {
		exports.EventEmitter = originalGlobalValue;
		return EventEmitter;
	};

	return EventEmitter;
}());
/* jshint ignore:end */



	var validateTypeFunction = function( value, name ) {
		validateType( value, name, typeof value === "undefined" || typeof value === "function", "Function" );
	};




	var superGet, superInit,
		globalEe = new EventEmitter();

	function validateTypeEvent( value, name ) {
		validateType( value, name, typeof value === "string" || value instanceof RegExp, "String or RegExp" );
	}

	function validateThenCall( method, self ) {
		return function( event, listener ) {
			validatePresence( event, "event" );
			validateTypeEvent( event, "event" );

			validatePresence( listener, "listener" );
			validateTypeFunction( listener, "listener" );

			return self[ method ].apply( self, arguments );
		};
	}

	function off( self ) {
		return validateThenCall( "off", self );
	}

	function on( self ) {
		return validateThenCall( "on", self );
	}

	function once( self ) {
		return validateThenCall( "once", self );
	}

	Cldr.off = off( globalEe );
	Cldr.on = on( globalEe );
	Cldr.once = once( globalEe );

	/**
	 * Overload Cldr.prototype.init().
	 */
	superInit = Cldr.prototype.init;
	Cldr.prototype.init = function() {
		var ee;
		this.ee = ee = new EventEmitter();
		this.off = off( ee );
		this.on = on( ee );
		this.once = once( ee );
		superInit.apply( this, arguments );
	};

	/**
	 * getOverload is encapsulated, because of cldr/unresolved. If it's loaded
	 * after cldr/event (and note it overwrites .get), it can trigger this
	 * overload again.
	 */
	function getOverload() {

		/**
		 * Overload Cldr.prototype.get().
		 */
		superGet = Cldr.prototype.get;
		Cldr.prototype.get = function( path ) {
			var value = superGet.apply( this, arguments );
			path = pathNormalize( path, this.attributes ).join( "/" );
			globalEe.trigger( "get", [ path, value ] );
			this.ee.trigger( "get", [ path, value ] );
			return value;
		};
	}

	Cldr._eventInit = getOverload;
	getOverload();

	return Cldr;




}));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(define) {/**
 * CLDR JavaScript Library v0.5.3
 * http://jquery.com/
 *
 * Copyright 2013 Rafael Xavier de Souza
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2020-08-05T21:43Z
 */
/*!
 * CLDR JavaScript Library v0.5.3 2020-08-05T21:43Z MIT license © Rafael Xavier
 * http://git.io/h4lmVg
 */
(function( factory ) {

	if ( typeof define === "function" && define.amd ) {
		// AMD.
		define( [ "../cldr" ], factory );
	} else if (  true && typeof module.exports === "object" ) {
		// Node. CommonJS.
		module.exports = factory( __webpack_require__( 3 ) );
	} else {
		// Global
		factory( Cldr );
	}

}(function( Cldr ) {

	// Build optimization hack to avoid duplicating functions across modules.
	var alwaysArray = Cldr._alwaysArray;



	var supplementalMain = function( cldr ) {

		var prepend, supplemental;
		
		prepend = function( prepend ) {
			return function( path ) {
				path = alwaysArray( path );
				return cldr.get( [ prepend ].concat( path ) );
			};
		};

		supplemental = prepend( "supplemental" );

		// Week Data
		// http://www.unicode.org/reports/tr35/tr35-dates.html#Week_Data
		supplemental.weekData = prepend( "supplemental/weekData" );

		supplemental.weekData.firstDay = function() {
			return cldr.get( "supplemental/weekData/firstDay/{territory}" ) ||
				cldr.get( "supplemental/weekData/firstDay/001" );
		};

		supplemental.weekData.minDays = function() {
			var minDays = cldr.get( "supplemental/weekData/minDays/{territory}" ) ||
				cldr.get( "supplemental/weekData/minDays/001" );
			return parseInt( minDays, 10 );
		};

		// Time Data
		// http://www.unicode.org/reports/tr35/tr35-dates.html#Time_Data
		supplemental.timeData = prepend( "supplemental/timeData" );

		supplemental.timeData.allowed = function() {
			return cldr.get( "supplemental/timeData/{territory}/_allowed" ) ||
				cldr.get( "supplemental/timeData/001/_allowed" );
		};

		supplemental.timeData.preferred = function() {
			return cldr.get( "supplemental/timeData/{territory}/_preferred" ) ||
				cldr.get( "supplemental/timeData/001/_preferred" );
		};

		return supplemental;

	};




	var initSuper = Cldr.prototype.init;

	/**
	 * .init() automatically ran on construction.
	 *
	 * Overload .init().
	 */
	Cldr.prototype.init = function() {
		initSuper.apply( this, arguments );
		this.supplemental = supplementalMain( this );
	};

	return Cldr;




}));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(define) {/**
 * CLDR JavaScript Library v0.5.3
 * http://jquery.com/
 *
 * Copyright 2013 Rafael Xavier de Souza
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2020-08-05T21:43Z
 */
/*!
 * CLDR JavaScript Library v0.5.3 2020-08-05T21:43Z MIT license © Rafael Xavier
 * http://git.io/h4lmVg
 */
(function( factory ) {

	if ( typeof define === "function" && define.amd ) {
		// AMD.
		define( [ "../cldr" ], factory );
	} else if (  true && typeof module.exports === "object" ) {
		// Node. CommonJS.
		module.exports = factory( __webpack_require__( 3 ) );
	} else {
		// Global
		factory( Cldr );
	}

}(function( Cldr ) {

	// Build optimization hack to avoid duplicating functions across modules.
	var coreLoad = Cldr._coreLoad;
	var jsonMerge = Cldr._jsonMerge;
	var pathNormalize = Cldr._pathNormalize;
	var resourceGet = Cldr._resourceGet;
	var validatePresence = Cldr._validatePresence;
	var validateTypePath = Cldr._validateTypePath;



	var bundleParentLookup = function( Cldr, locale ) {
		var normalizedPath, parent;

		if ( locale === "root" ) {
			return;
		}

		// First, try to find parent on supplemental data.
		normalizedPath = pathNormalize( [ "supplemental/parentLocales/parentLocale", locale ] );
		parent = resourceGet( Cldr._resolved, normalizedPath ) || resourceGet( Cldr._raw, normalizedPath );
		if ( parent ) {
			return parent;
		}

		// Or truncate locale.
		parent = locale.substr( 0, locale.lastIndexOf( Cldr.localeSep ) );
		if ( !parent ) {
			return "root";
		}

		return parent;
	};




	// @path: normalized path
	var resourceSet = function( data, path, value ) {
		var i,
			node = data,
			length = path.length;

		for ( i = 0; i < length - 1; i++ ) {
			if ( !node[ path[ i ] ] ) {
				node[ path[ i ] ] = {};
			}
			node = node[ path[ i ] ];
		}
		node[ path[ i ] ] = value;
	};


	var itemLookup = (function() {

	var lookup;

	lookup = function( Cldr, locale, path, attributes, childLocale ) {
		var normalizedPath, parent, value;

		// 1: Finish recursion
		// 2: Avoid infinite loop
		if ( typeof locale === "undefined" /* 1 */ || locale === childLocale /* 2 */ ) {
			return;
		}

		// Resolve path
		normalizedPath = pathNormalize( path, attributes );

		// Check resolved (cached) data first
		// 1: Due to #16, never use the cached resolved non-leaf nodes. It may not
		//    represent its leafs in its entirety.
		value = resourceGet( Cldr._resolved, normalizedPath );
		if ( value !== undefined && typeof value !== "object" /* 1 */ ) {
			return value;
		}

		// Check raw data
		value = resourceGet( Cldr._raw, normalizedPath );

		if ( value === undefined ) {
			// Or, lookup at parent locale
			parent = bundleParentLookup( Cldr, locale );
			value = lookup( Cldr, parent, path, jsonMerge( attributes, { bundle: parent }), locale );
		}

		if ( value !== undefined ) {
			// Set resolved (cached)
			resourceSet( Cldr._resolved, normalizedPath, value );
		}

		return value;
	};

	return lookup;

}());


	Cldr._raw = {};

	/**
	 * Cldr.load( json [, json, ...] )
	 *
	 * @json [JSON] CLDR data or [Array] Array of @json's.
	 *
	 * Load resolved or unresolved cldr data.
	 * Overwrite Cldr.load().
	 */
	Cldr.load = function() {
		Cldr._raw = coreLoad( Cldr, Cldr._raw, arguments );
	};

	/**
	 * Overwrite Cldr.prototype.get().
	 */
	Cldr.prototype.get = function( path ) {
		validatePresence( path, "path" );
		validateTypePath( path, "path" );

		// 1: use bundle as locale on item lookup for simplification purposes, because no other extended subtag is used anyway on bundle parent lookup.
		// 2: during init(), this method is called, but bundle is yet not defined. Use "" as a workaround in this very specific scenario.
		return itemLookup( Cldr, this.attributes && this.attributes.bundle /* 1 */ || "" /* 2 */, path, this.attributes );
	};

	// In case cldr/unresolved is loaded after cldr/event, we trigger its overloads again. Because, .get is overwritten in here.
	if ( Cldr._eventInit ) {
		Cldr._eventInit();
	}

	return Cldr;




}));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(define) {/**
 * Globalize v1.6.0
 *
 * http://github.com/jquery/globalize
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2020-09-08T11:54Z
 */
/*!
 * Globalize v1.6.0 2020-09-08T11:54Z Released under the MIT license
 * http://git.io/TrdQbw
 */
(function( root, factory ) {

	// UMD returnExports
	if ( typeof define === "function" && define.amd ) {

		// AMD
		define([
			"cldr",
			"../globalize",
			"cldr/event"
		], factory );
	} else if ( true ) {

		// Node, CommonJS
		module.exports = factory( __webpack_require__( 2 ), __webpack_require__( 1 ) );
	} else {}
}(this, function( Cldr, Globalize ) {

var alwaysArray = Globalize._alwaysArray,
	createError = Globalize._createError,
	isPlainObject = Globalize._isPlainObject,
	runtimeBind = Globalize._runtimeBind,
	validateDefaultLocale = Globalize._validateDefaultLocale,
	validate = Globalize._validate,
	validateParameterPresence = Globalize._validateParameterPresence,
	validateParameterType = Globalize._validateParameterType,
	validateParameterTypePlainObject = Globalize._validateParameterTypePlainObject;
var MessageFormat;
/* jshint ignore:start */
MessageFormat = (function() {
MessageFormat._parse = (function() {

  /*
   * Generated by PEG.js 0.8.0.
   *
   * http://pegjs.majda.cz/
   */

  function peg$subclass(child, parent) {
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor();
  }

  function SyntaxError(message, expected, found, offset, line, column) {
    this.message  = message;
    this.expected = expected;
    this.found    = found;
    this.offset   = offset;
    this.line     = line;
    this.column   = column;

    this.name     = "SyntaxError";
  }

  peg$subclass(SyntaxError, Error);

  function parse(input) {
    var options = arguments.length > 1 ? arguments[1] : {},

        peg$FAILED = {},

        peg$startRuleFunctions = { start: peg$parsestart },
        peg$startRuleFunction  = peg$parsestart,

        peg$c0 = [],
        peg$c1 = function(st) {
              return { type: 'messageFormatPattern', statements: st };
            },
        peg$c2 = peg$FAILED,
        peg$c3 = "{",
        peg$c4 = { type: "literal", value: "{", description: "\"{\"" },
        peg$c5 = null,
        peg$c6 = ",",
        peg$c7 = { type: "literal", value: ",", description: "\",\"" },
        peg$c8 = "}",
        peg$c9 = { type: "literal", value: "}", description: "\"}\"" },
        peg$c10 = function(argIdx, efmt) {
              var res = {
                type: "messageFormatElement",
                argumentIndex: argIdx
              };
              if (efmt && efmt.length) {
                res.elementFormat = efmt[1];
              } else {
                res.output = true;
              }
              return res;
            },
        peg$c11 = "plural",
        peg$c12 = { type: "literal", value: "plural", description: "\"plural\"" },
        peg$c13 = function(t, s) {
              return { type: "elementFormat", key: t, val: s };
            },
        peg$c14 = "selectordinal",
        peg$c15 = { type: "literal", value: "selectordinal", description: "\"selectordinal\"" },
        peg$c16 = "select",
        peg$c17 = { type: "literal", value: "select", description: "\"select\"" },
        peg$c18 = function(t, p) {
              return { type: "elementFormat", key: t, val: p };
            },
        peg$c19 = function(op, pf) {
              return { type: "pluralFormatPattern", pluralForms: pf, offset: op || 0 };
            },
        peg$c20 = "offset",
        peg$c21 = { type: "literal", value: "offset", description: "\"offset\"" },
        peg$c22 = ":",
        peg$c23 = { type: "literal", value: ":", description: "\":\"" },
        peg$c24 = function(d) { return d; },
        peg$c25 = function(k, mfp) {
              return { key: k, val: mfp };
            },
        peg$c26 = function(i) { return i; },
        peg$c27 = "=",
        peg$c28 = { type: "literal", value: "=", description: "\"=\"" },
        peg$c29 = function(pf) { return { type: "selectFormatPattern", pluralForms: pf }; },
        peg$c30 = function(p) { return p; },
        peg$c31 = "#",
        peg$c32 = { type: "literal", value: "#", description: "\"#\"" },
        peg$c33 = function() { return {type: 'octothorpe'}; },
        peg$c34 = function(s) { return { type: "string", val: s.join('') }; },
        peg$c35 = { type: "other", description: "identifier" },
        peg$c36 = /^[0-9a-zA-Z$_]/,
        peg$c37 = { type: "class", value: "[0-9a-zA-Z$_]", description: "[0-9a-zA-Z$_]" },
        peg$c38 = /^[^ \t\n\r,.+={}]/,
        peg$c39 = { type: "class", value: "[^ \\t\\n\\r,.+={}]", description: "[^ \\t\\n\\r,.+={}]" },
        peg$c40 = function(s) { return s; },
        peg$c41 = function(chars) { return chars.join(''); },
        peg$c42 = /^[^{}#\\\0-\x1F \t\n\r]/,
        peg$c43 = { type: "class", value: "[^{}#\\\\\\0-\\x1F \\t\\n\\r]", description: "[^{}#\\\\\\0-\\x1F \\t\\n\\r]" },
        peg$c44 = function(x) { return x; },
        peg$c45 = "\\\\",
        peg$c46 = { type: "literal", value: "\\\\", description: "\"\\\\\\\\\"" },
        peg$c47 = function() { return "\\"; },
        peg$c48 = "\\#",
        peg$c49 = { type: "literal", value: "\\#", description: "\"\\\\#\"" },
        peg$c50 = function() { return "#"; },
        peg$c51 = "\\{",
        peg$c52 = { type: "literal", value: "\\{", description: "\"\\\\{\"" },
        peg$c53 = function() { return "\u007B"; },
        peg$c54 = "\\}",
        peg$c55 = { type: "literal", value: "\\}", description: "\"\\\\}\"" },
        peg$c56 = function() { return "\u007D"; },
        peg$c57 = "\\u",
        peg$c58 = { type: "literal", value: "\\u", description: "\"\\\\u\"" },
        peg$c59 = function(h1, h2, h3, h4) {
              return String.fromCharCode(parseInt("0x" + h1 + h2 + h3 + h4));
            },
        peg$c60 = /^[0-9]/,
        peg$c61 = { type: "class", value: "[0-9]", description: "[0-9]" },
        peg$c62 = function(ds) {
            //the number might start with 0 but must not be interpreted as an octal number
            //Hence, the base is passed to parseInt explicitely
            return parseInt((ds.join('')), 10);
          },
        peg$c63 = /^[0-9a-fA-F]/,
        peg$c64 = { type: "class", value: "[0-9a-fA-F]", description: "[0-9a-fA-F]" },
        peg$c65 = { type: "other", description: "whitespace" },
        peg$c66 = function(w) { return w.join(''); },
        peg$c67 = /^[ \t\n\r]/,
        peg$c68 = { type: "class", value: "[ \\t\\n\\r]", description: "[ \\t\\n\\r]" },

        peg$currPos          = 0,
        peg$reportedPos      = 0,
        peg$cachedPos        = 0,
        peg$cachedPosDetails = { line: 1, column: 1, seenCR: false },
        peg$maxFailPos       = 0,
        peg$maxFailExpected  = [],
        peg$silentFails      = 0,

        peg$result;

    if ("startRule" in options) {
      if (!(options.startRule in peg$startRuleFunctions)) {
        throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
      }

      peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
    }

    function text() {
      return input.substring(peg$reportedPos, peg$currPos);
    }

    function offset() {
      return peg$reportedPos;
    }

    function line() {
      return peg$computePosDetails(peg$reportedPos).line;
    }

    function column() {
      return peg$computePosDetails(peg$reportedPos).column;
    }

    function expected(description) {
      throw peg$buildException(
        null,
        [{ type: "other", description: description }],
        peg$reportedPos
      );
    }

    function error(message) {
      throw peg$buildException(message, null, peg$reportedPos);
    }

    function peg$computePosDetails(pos) {
      function advance(details, startPos, endPos) {
        var p, ch;

        for (p = startPos; p < endPos; p++) {
          ch = input.charAt(p);
          if (ch === "\n") {
            if (!details.seenCR) { details.line++; }
            details.column = 1;
            details.seenCR = false;
          } else if (ch === "\r" || ch === "\u2028" || ch === "\u2029") {
            details.line++;
            details.column = 1;
            details.seenCR = true;
          } else {
            details.column++;
            details.seenCR = false;
          }
        }
      }

      if (peg$cachedPos !== pos) {
        if (peg$cachedPos > pos) {
          peg$cachedPos = 0;
          peg$cachedPosDetails = { line: 1, column: 1, seenCR: false };
        }
        advance(peg$cachedPosDetails, peg$cachedPos, pos);
        peg$cachedPos = pos;
      }

      return peg$cachedPosDetails;
    }

    function peg$fail(expected) {
      if (peg$currPos < peg$maxFailPos) { return; }

      if (peg$currPos > peg$maxFailPos) {
        peg$maxFailPos = peg$currPos;
        peg$maxFailExpected = [];
      }

      peg$maxFailExpected.push(expected);
    }

    function peg$buildException(message, expected, pos) {
      function cleanupExpected(expected) {
        var i = 1;

        expected.sort(function(a, b) {
          if (a.description < b.description) {
            return -1;
          } else if (a.description > b.description) {
            return 1;
          } else {
            return 0;
          }
        });

        while (i < expected.length) {
          if (expected[i - 1] === expected[i]) {
            expected.splice(i, 1);
          } else {
            i++;
          }
        }
      }

      function buildMessage(expected, found) {
        function stringEscape(s) {
          function hex(ch) { return ch.charCodeAt(0).toString(16).toUpperCase(); }

          return s
            .replace(/\\/g,   '\\\\')
            .replace(/"/g,    '\\"')
            .replace(/\x08/g, '\\b')
            .replace(/\t/g,   '\\t')
            .replace(/\n/g,   '\\n')
            .replace(/\f/g,   '\\f')
            .replace(/\r/g,   '\\r')
            .replace(/[\x00-\x07\x0B\x0E\x0F]/g, function(ch) { return '\\x0' + hex(ch); })
            .replace(/[\x10-\x1F\x80-\xFF]/g,    function(ch) { return '\\x'  + hex(ch); })
            .replace(/[\u0180-\u0FFF]/g,         function(ch) { return '\\u0' + hex(ch); })
            .replace(/[\u1080-\uFFFF]/g,         function(ch) { return '\\u'  + hex(ch); });
        }

        var expectedDescs = new Array(expected.length),
            expectedDesc, foundDesc, i;

        for (i = 0; i < expected.length; i++) {
          expectedDescs[i] = expected[i].description;
        }

        expectedDesc = expected.length > 1
          ? expectedDescs.slice(0, -1).join(", ")
              + " or "
              + expectedDescs[expected.length - 1]
          : expectedDescs[0];

        foundDesc = found ? "\"" + stringEscape(found) + "\"" : "end of input";

        return "Expected " + expectedDesc + " but " + foundDesc + " found.";
      }

      var posDetails = peg$computePosDetails(pos),
          found      = pos < input.length ? input.charAt(pos) : null;

      if (expected !== null) {
        cleanupExpected(expected);
      }

      return new SyntaxError(
        message !== null ? message : buildMessage(expected, found),
        expected,
        found,
        pos,
        posDetails.line,
        posDetails.column
      );
    }

    function peg$parsestart() {
      var s0;

      s0 = peg$parsemessageFormatPattern();

      return s0;
    }

    function peg$parsemessageFormatPattern() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parsemessageFormatElement();
      if (s2 === peg$FAILED) {
        s2 = peg$parsestring();
        if (s2 === peg$FAILED) {
          s2 = peg$parseoctothorpe();
        }
      }
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parsemessageFormatElement();
        if (s2 === peg$FAILED) {
          s2 = peg$parsestring();
          if (s2 === peg$FAILED) {
            s2 = peg$parseoctothorpe();
          }
        }
      }
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c1(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parsemessageFormatElement() {
      var s0, s1, s2, s3, s4, s5, s6;

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 123) {
        s1 = peg$c3;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c4); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseid();
          if (s3 !== peg$FAILED) {
            s4 = peg$currPos;
            if (input.charCodeAt(peg$currPos) === 44) {
              s5 = peg$c6;
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c7); }
            }
            if (s5 !== peg$FAILED) {
              s6 = peg$parseelementFormat();
              if (s6 !== peg$FAILED) {
                s5 = [s5, s6];
                s4 = s5;
              } else {
                peg$currPos = s4;
                s4 = peg$c2;
              }
            } else {
              peg$currPos = s4;
              s4 = peg$c2;
            }
            if (s4 === peg$FAILED) {
              s4 = peg$c5;
            }
            if (s4 !== peg$FAILED) {
              s5 = peg$parse_();
              if (s5 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 125) {
                  s6 = peg$c8;
                  peg$currPos++;
                } else {
                  s6 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c9); }
                }
                if (s6 !== peg$FAILED) {
                  peg$reportedPos = s0;
                  s1 = peg$c10(s3, s4);
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$c2;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$c2;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c2;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c2;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c2;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c2;
      }

      return s0;
    }

    function peg$parseelementFormat() {
      var s0, s1, s2, s3, s4, s5, s6, s7;

      s0 = peg$currPos;
      s1 = peg$parse_();
      if (s1 !== peg$FAILED) {
        if (input.substr(peg$currPos, 6) === peg$c11) {
          s2 = peg$c11;
          peg$currPos += 6;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c12); }
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parse_();
          if (s3 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 44) {
              s4 = peg$c6;
              peg$currPos++;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c7); }
            }
            if (s4 !== peg$FAILED) {
              s5 = peg$parse_();
              if (s5 !== peg$FAILED) {
                s6 = peg$parsepluralFormatPattern();
                if (s6 !== peg$FAILED) {
                  s7 = peg$parse_();
                  if (s7 !== peg$FAILED) {
                    peg$reportedPos = s0;
                    s1 = peg$c13(s2, s6);
                    s0 = s1;
                  } else {
                    peg$currPos = s0;
                    s0 = peg$c2;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$c2;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$c2;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c2;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c2;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c2;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c2;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parse_();
        if (s1 !== peg$FAILED) {
          if (input.substr(peg$currPos, 13) === peg$c14) {
            s2 = peg$c14;
            peg$currPos += 13;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c15); }
          }
          if (s2 !== peg$FAILED) {
            s3 = peg$parse_();
            if (s3 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 44) {
                s4 = peg$c6;
                peg$currPos++;
              } else {
                s4 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c7); }
              }
              if (s4 !== peg$FAILED) {
                s5 = peg$parse_();
                if (s5 !== peg$FAILED) {
                  s6 = peg$parsepluralFormatPattern();
                  if (s6 !== peg$FAILED) {
                    s7 = peg$parse_();
                    if (s7 !== peg$FAILED) {
                      peg$reportedPos = s0;
                      s1 = peg$c13(s2, s6);
                      s0 = s1;
                    } else {
                      peg$currPos = s0;
                      s0 = peg$c2;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$c2;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$c2;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$c2;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c2;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c2;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c2;
        }
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          s1 = peg$parse_();
          if (s1 !== peg$FAILED) {
            if (input.substr(peg$currPos, 6) === peg$c16) {
              s2 = peg$c16;
              peg$currPos += 6;
            } else {
              s2 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c17); }
            }
            if (s2 !== peg$FAILED) {
              s3 = peg$parse_();
              if (s3 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 44) {
                  s4 = peg$c6;
                  peg$currPos++;
                } else {
                  s4 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c7); }
                }
                if (s4 !== peg$FAILED) {
                  s5 = peg$parse_();
                  if (s5 !== peg$FAILED) {
                    s6 = peg$parseselectFormatPattern();
                    if (s6 !== peg$FAILED) {
                      s7 = peg$parse_();
                      if (s7 !== peg$FAILED) {
                        peg$reportedPos = s0;
                        s1 = peg$c13(s2, s6);
                        s0 = s1;
                      } else {
                        peg$currPos = s0;
                        s0 = peg$c2;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$c2;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$c2;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$c2;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$c2;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c2;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c2;
          }
          if (s0 === peg$FAILED) {
            s0 = peg$currPos;
            s1 = peg$parse_();
            if (s1 !== peg$FAILED) {
              s2 = peg$parseid();
              if (s2 !== peg$FAILED) {
                s3 = [];
                s4 = peg$parseargStylePattern();
                while (s4 !== peg$FAILED) {
                  s3.push(s4);
                  s4 = peg$parseargStylePattern();
                }
                if (s3 !== peg$FAILED) {
                  peg$reportedPos = s0;
                  s1 = peg$c18(s2, s3);
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$c2;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$c2;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c2;
            }
          }
        }
      }

      return s0;
    }

    function peg$parsepluralFormatPattern() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      s1 = peg$parseoffsetPattern();
      if (s1 === peg$FAILED) {
        s1 = peg$c5;
      }
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$parsepluralForm();
        if (s3 !== peg$FAILED) {
          while (s3 !== peg$FAILED) {
            s2.push(s3);
            s3 = peg$parsepluralForm();
          }
        } else {
          s2 = peg$c2;
        }
        if (s2 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c19(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$c2;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c2;
      }

      return s0;
    }

    function peg$parseoffsetPattern() {
      var s0, s1, s2, s3, s4, s5, s6, s7;

      s0 = peg$currPos;
      s1 = peg$parse_();
      if (s1 !== peg$FAILED) {
        if (input.substr(peg$currPos, 6) === peg$c20) {
          s2 = peg$c20;
          peg$currPos += 6;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c21); }
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parse_();
          if (s3 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 58) {
              s4 = peg$c22;
              peg$currPos++;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c23); }
            }
            if (s4 !== peg$FAILED) {
              s5 = peg$parse_();
              if (s5 !== peg$FAILED) {
                s6 = peg$parsedigits();
                if (s6 !== peg$FAILED) {
                  s7 = peg$parse_();
                  if (s7 !== peg$FAILED) {
                    peg$reportedPos = s0;
                    s1 = peg$c24(s6);
                    s0 = s1;
                  } else {
                    peg$currPos = s0;
                    s0 = peg$c2;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$c2;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$c2;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c2;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c2;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c2;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c2;
      }

      return s0;
    }

    function peg$parsepluralForm() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8;

      s0 = peg$currPos;
      s1 = peg$parse_();
      if (s1 !== peg$FAILED) {
        s2 = peg$parsepluralKey();
        if (s2 !== peg$FAILED) {
          s3 = peg$parse_();
          if (s3 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 123) {
              s4 = peg$c3;
              peg$currPos++;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c4); }
            }
            if (s4 !== peg$FAILED) {
              s5 = peg$parse_();
              if (s5 !== peg$FAILED) {
                s6 = peg$parsemessageFormatPattern();
                if (s6 !== peg$FAILED) {
                  s7 = peg$parse_();
                  if (s7 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 125) {
                      s8 = peg$c8;
                      peg$currPos++;
                    } else {
                      s8 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c9); }
                    }
                    if (s8 !== peg$FAILED) {
                      peg$reportedPos = s0;
                      s1 = peg$c25(s2, s6);
                      s0 = s1;
                    } else {
                      peg$currPos = s0;
                      s0 = peg$c2;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$c2;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$c2;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$c2;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c2;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c2;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c2;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c2;
      }

      return s0;
    }

    function peg$parsepluralKey() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = peg$parseid();
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c26(s1);
      }
      s0 = s1;
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        if (input.charCodeAt(peg$currPos) === 61) {
          s1 = peg$c27;
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c28); }
        }
        if (s1 !== peg$FAILED) {
          s2 = peg$parsedigits();
          if (s2 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c24(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$c2;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c2;
        }
      }

      return s0;
    }

    function peg$parseselectFormatPattern() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parseselectForm();
      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          s2 = peg$parseselectForm();
        }
      } else {
        s1 = peg$c2;
      }
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c29(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parseselectForm() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8;

      s0 = peg$currPos;
      s1 = peg$parse_();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseid();
        if (s2 !== peg$FAILED) {
          s3 = peg$parse_();
          if (s3 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 123) {
              s4 = peg$c3;
              peg$currPos++;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c4); }
            }
            if (s4 !== peg$FAILED) {
              s5 = peg$parse_();
              if (s5 !== peg$FAILED) {
                s6 = peg$parsemessageFormatPattern();
                if (s6 !== peg$FAILED) {
                  s7 = peg$parse_();
                  if (s7 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 125) {
                      s8 = peg$c8;
                      peg$currPos++;
                    } else {
                      s8 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c9); }
                    }
                    if (s8 !== peg$FAILED) {
                      peg$reportedPos = s0;
                      s1 = peg$c25(s2, s6);
                      s0 = s1;
                    } else {
                      peg$currPos = s0;
                      s0 = peg$c2;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$c2;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$c2;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$c2;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c2;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c2;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c2;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c2;
      }

      return s0;
    }

    function peg$parseargStylePattern() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      s1 = peg$parse_();
      if (s1 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 44) {
          s2 = peg$c6;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c7); }
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parse_();
          if (s3 !== peg$FAILED) {
            s4 = peg$parseid();
            if (s4 !== peg$FAILED) {
              s5 = peg$parse_();
              if (s5 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c30(s4);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$c2;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c2;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c2;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c2;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c2;
      }

      return s0;
    }

    function peg$parseoctothorpe() {
      var s0, s1;

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 35) {
        s1 = peg$c31;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c32); }
      }
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c33();
      }
      s0 = s1;

      return s0;
    }

    function peg$parsestring() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parsechars();
      if (s2 === peg$FAILED) {
        s2 = peg$parsewhitespace();
      }
      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          s2 = peg$parsechars();
          if (s2 === peg$FAILED) {
            s2 = peg$parsewhitespace();
          }
        }
      } else {
        s1 = peg$c2;
      }
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c34(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parseid() {
      var s0, s1, s2, s3, s4, s5, s6;

      peg$silentFails++;
      s0 = peg$currPos;
      s1 = peg$parse_();
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        s3 = peg$currPos;
        if (peg$c36.test(input.charAt(peg$currPos))) {
          s4 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s4 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c37); }
        }
        if (s4 !== peg$FAILED) {
          s5 = [];
          if (peg$c38.test(input.charAt(peg$currPos))) {
            s6 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s6 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c39); }
          }
          while (s6 !== peg$FAILED) {
            s5.push(s6);
            if (peg$c38.test(input.charAt(peg$currPos))) {
              s6 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s6 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c39); }
            }
          }
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$c2;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$c2;
        }
        if (s3 !== peg$FAILED) {
          s3 = input.substring(s2, peg$currPos);
        }
        s2 = s3;
        if (s2 !== peg$FAILED) {
          s3 = peg$parse_();
          if (s3 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c40(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$c2;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c2;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c2;
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c35); }
      }

      return s0;
    }

    function peg$parsechars() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parsechar();
      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          s2 = peg$parsechar();
        }
      } else {
        s1 = peg$c2;
      }
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c41(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parsechar() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      if (peg$c42.test(input.charAt(peg$currPos))) {
        s1 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c43); }
      }
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c44(s1);
      }
      s0 = s1;
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 2) === peg$c45) {
          s1 = peg$c45;
          peg$currPos += 2;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c46); }
        }
        if (s1 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c47();
        }
        s0 = s1;
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          if (input.substr(peg$currPos, 2) === peg$c48) {
            s1 = peg$c48;
            peg$currPos += 2;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c49); }
          }
          if (s1 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c50();
          }
          s0 = s1;
          if (s0 === peg$FAILED) {
            s0 = peg$currPos;
            if (input.substr(peg$currPos, 2) === peg$c51) {
              s1 = peg$c51;
              peg$currPos += 2;
            } else {
              s1 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c52); }
            }
            if (s1 !== peg$FAILED) {
              peg$reportedPos = s0;
              s1 = peg$c53();
            }
            s0 = s1;
            if (s0 === peg$FAILED) {
              s0 = peg$currPos;
              if (input.substr(peg$currPos, 2) === peg$c54) {
                s1 = peg$c54;
                peg$currPos += 2;
              } else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c55); }
              }
              if (s1 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c56();
              }
              s0 = s1;
              if (s0 === peg$FAILED) {
                s0 = peg$currPos;
                if (input.substr(peg$currPos, 2) === peg$c57) {
                  s1 = peg$c57;
                  peg$currPos += 2;
                } else {
                  s1 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c58); }
                }
                if (s1 !== peg$FAILED) {
                  s2 = peg$parsehexDigit();
                  if (s2 !== peg$FAILED) {
                    s3 = peg$parsehexDigit();
                    if (s3 !== peg$FAILED) {
                      s4 = peg$parsehexDigit();
                      if (s4 !== peg$FAILED) {
                        s5 = peg$parsehexDigit();
                        if (s5 !== peg$FAILED) {
                          peg$reportedPos = s0;
                          s1 = peg$c59(s2, s3, s4, s5);
                          s0 = s1;
                        } else {
                          peg$currPos = s0;
                          s0 = peg$c2;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$c2;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$c2;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$c2;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$c2;
                }
              }
            }
          }
        }
      }

      return s0;
    }

    function peg$parsedigits() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = [];
      if (peg$c60.test(input.charAt(peg$currPos))) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c61); }
      }
      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          if (peg$c60.test(input.charAt(peg$currPos))) {
            s2 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c61); }
          }
        }
      } else {
        s1 = peg$c2;
      }
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c62(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parsehexDigit() {
      var s0;

      if (peg$c63.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c64); }
      }

      return s0;
    }

    function peg$parse_() {
      var s0, s1, s2;

      peg$silentFails++;
      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parsewhitespace();
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parsewhitespace();
      }
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c66(s1);
      }
      s0 = s1;
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c65); }
      }

      return s0;
    }

    function peg$parsewhitespace() {
      var s0;

      if (peg$c67.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c68); }
      }

      return s0;
    }

    peg$result = peg$startRuleFunction();

    if (peg$result !== peg$FAILED && peg$currPos === input.length) {
      return peg$result;
    } else {
      if (peg$result !== peg$FAILED && peg$currPos < input.length) {
        peg$fail({ type: "end", description: "end of input" });
      }

      throw peg$buildException(null, peg$maxFailExpected, peg$maxFailPos);
    }
  }

  return {
    SyntaxError: SyntaxError,
    parse:       parse
  };
}()).parse;


/** @file messageformat.js - ICU PluralFormat + SelectFormat for JavaScript
 *  @author Alex Sexton - @SlexAxton
 *  @version 0.3.0-1
 *  @copyright 2012-2015 Alex Sexton, Eemeli Aro, and Contributors
 *  @license To use or fork, MIT. To contribute back, Dojo CLA  */


/** Utility function for quoting an Object's key value iff required
 *  @private  */
function propname(key, obj) {
  if (/^[A-Z_$][0-9A-Z_$]*$/i.test(key)) {
    return obj ? obj + '.' + key : key;
  } else {
    var jkey = JSON.stringify(key);
    return obj ? obj + '[' + jkey + ']' : jkey;
  }
};


/** Create a new message formatter
 *
 *  @class
 *  @global
 *  @param {string|string[]} [locale="en"] - The locale to use, with fallbacks
 *  @param {function} [pluralFunc] - Optional custom pluralization function
 *  @param {function[]} [formatters] - Optional custom formatting functions  */
function MessageFormat(locale, pluralFunc, formatters) {
  this.lc = [locale];  
  this.runtime.pluralFuncs = {};
  this.runtime.pluralFuncs[this.lc[0]] = pluralFunc;
  this.runtime.fmt = {};
  if (formatters) for (var f in formatters) {
    this.runtime.fmt[f] = formatters[f];
  }
}




/** Parse an input string to its AST
 *
 *  Precompiled from `lib/messageformat-parser.pegjs` by
 *  {@link http://pegjs.org/ PEG.js}. Included in MessageFormat object
 *  to enable testing.
 *
 *  @private  */



/** Pluralization functions from
 *  {@link http://github.com/eemeli/make-plural.js make-plural}
 *
 *  @memberof MessageFormat
 *  @type Object.<string,function>  */
MessageFormat.plurals = {};


/** Default number formatting functions in the style of ICU's
 *  {@link http://icu-project.org/apiref/icu4j/com/ibm/icu/text/MessageFormat.html simpleArg syntax}
 *  implemented using the
 *  {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl Intl}
 *  object defined by ECMA-402.
 *
 *  **Note**: Intl is not defined in default Node until 0.11.15 / 0.12.0, so
 *  earlier versions require a {@link https://www.npmjs.com/package/intl polyfill}.
 *  Therefore {@link MessageFormat.withIntlSupport} needs to be true for these
 *  functions to be available for inclusion in the output.
 *
 *  @see MessageFormat#setIntlSupport
 *
 *  @namespace
 *  @memberof MessageFormat
 *  @property {function} number - Represent a number as an integer, percent or currency value
 *  @property {function} date - Represent a date as a full/long/default/short string
 *  @property {function} time - Represent a time as a full/long/default/short string
 *
 *  @example
 *  > var MessageFormat = require('messageformat');
 *  > var mf = (new MessageFormat('en')).setIntlSupport(true);
 *  > mf.currency = 'EUR';
 *  > var mfunc = mf.compile("The total is {V,number,currency}.");
 *  > mfunc({V:5.5})
 *  "The total is €5.50."
 *
 *  @example
 *  > var MessageFormat = require('messageformat');
 *  > var mf = new MessageFormat('en', null, {number: MessageFormat.number});
 *  > mf.currency = 'EUR';
 *  > var mfunc = mf.compile("The total is {V,number,currency}.");
 *  > mfunc({V:5.5})
 *  "The total is €5.50."  */
MessageFormat.formatters = {};

/** Enable or disable support for the default formatters, which require the
 *  `Intl` object. Note that this can't be autodetected, as the environment
 *  in which the formatted text is compiled into Javascript functions is not
 *  necessarily the same environment in which they will get executed.
 *
 *  @see MessageFormat.formatters
 *
 *  @memberof MessageFormat
 *  @param {boolean} [enable=true]
 *  @returns {Object} The MessageFormat instance, to allow for chaining
 *  @example
 *  > var Intl = require('intl');
 *  > var MessageFormat = require('messageformat');
 *  > var mf = (new MessageFormat('en')).setIntlSupport(true);
 *  > mf.currency = 'EUR';
 *  > mf.compile("The total is {V,number,currency}.")({V:5.5});
 *  "The total is €5.50."  */



/** A set of utility functions that are called by the compiled Javascript
 *  functions, these are included locally in the output of {@link
 *  MessageFormat#compile compile()}.
 *
 *  @namespace
 *  @memberof MessageFormat  */
MessageFormat.prototype.runtime = {

  /** Utility function for `#` in plural rules
   *
   *  @param {number} value - The value to operate on
   *  @param {number} [offset=0] - An optional offset, set by the surrounding context  */
  number: function(value, offset) {
    if (isNaN(value)) throw new Error("'" + value + "' isn't a number.");
    return value - (offset || 0);
  },

  /** Utility function for `{N, plural|selectordinal, ...}`
   *
   *  @param {number} value - The key to use to find a pluralization rule
   *  @param {number} offset - An offset to apply to `value`
   *  @param {function} lcfunc - A locale function from `pluralFuncs`
   *  @param {Object.<string,string>} data - The object from which results are looked up
   *  @param {?boolean} isOrdinal - If true, use ordinal rather than cardinal rules
   *  @returns {string} The result of the pluralization  */
  plural: function(value, offset, lcfunc, data, isOrdinal) {
    if ({}.hasOwnProperty.call(data, value)) return data[value]();
    if (offset) value -= offset;
    var key = lcfunc(value, isOrdinal);
    if (key in data) return data[key]();
    return data.other();
  },

  /** Utility function for `{N, select, ...}`
   *
   *  @param {number} value - The key to use to find a selection
   *  @param {Object.<string,string>} data - The object from which results are looked up
   *  @returns {string} The result of the select statement  */
  select: function(value, data) {
    if ({}.hasOwnProperty.call(data, value)) return data[value]();
    return data.other()
  },

  /** Pluralization functions included in compiled output
   *  @instance
   *  @type Object.<string,function>  */
  pluralFuncs: {},

  /** Custom formatting functions called by `{var, fn[, args]*}` syntax
   *
   *  For examples, see {@link MessageFormat.formatters}
   *
   *  @instance
   *  @see MessageFormat.formatters
   *  @type Object.<string,function>  */
  fmt: {},

  /** Custom stringifier to clean up browser inconsistencies
   *  @instance  */
  toString: function () {
    var _stringify = function(o, level) {
      if (typeof o != 'object') {
        var funcStr = o.toString().replace(/^(function )\w*/, '$1');
        var indent = /([ \t]*)\S.*$/.exec(funcStr);
        return indent ? funcStr.replace(new RegExp('^' + indent[1], 'mg'), '') : funcStr;
      }
      var s = [];
      for (var i in o) if (i != 'toString') {
        if (level == 0) s.push('var ' + i + ' = ' + _stringify(o[i], level + 1) + ';\n');
        else s.push(propname(i) + ': ' + _stringify(o[i], level + 1));
      }
      if (level == 0) return s.join('');
      if (s.length == 0) return '{}';
      var indent = '  '; while (--level) indent += '  ';
      return '{\n' + s.join(',\n').replace(/^/gm, indent) + '\n}';
    };
    return _stringify(this, 0);
  }
};


/** Recursively map an AST to its resulting string
 *
 *  @memberof MessageFormat
 *
 *  @param ast - the Ast node for which the JS code should be generated
 *
 *  @private  */
MessageFormat.prototype._precompile = function(ast, data) {
  data = data || { keys: {}, offset: {} };
  var r = [], i, tmp, args = [];

  switch ( ast.type ) {
    case 'messageFormatPattern':
      for ( i = 0; i < ast.statements.length; ++i ) {
        r.push(this._precompile( ast.statements[i], data ));
      }
      tmp = r.join(' + ') || '""';
      return data.pf_count ? tmp : 'function(d) { return ' + tmp + '; }';

    case 'messageFormatElement':
      data.pf_count = data.pf_count || 0;
      if ( ast.output ) {
        return propname(ast.argumentIndex, 'd');
      }
      else {
        data.keys[data.pf_count] = ast.argumentIndex;
        return this._precompile( ast.elementFormat, data );
      }
      return '';

    case 'elementFormat':
      args = [ propname(data.keys[data.pf_count], 'd') ];
      switch (ast.key) {
        case 'select':
          args.push(this._precompile(ast.val, data));
          return 'select(' + args.join(', ') + ')';
        case 'selectordinal':
          args = args.concat([ 0, propname(this.lc[0], 'pluralFuncs'), this._precompile(ast.val, data), 1 ]);
          return 'plural(' + args.join(', ') + ')';
        case 'plural':
          data.offset[data.pf_count || 0] = ast.val.offset || 0;
          args = args.concat([ data.offset[data.pf_count] || 0, propname(this.lc[0], 'pluralFuncs'), this._precompile(ast.val, data) ]);
          return 'plural(' + args.join(', ') + ')';
        default:
          if (this.withIntlSupport && !(ast.key in this.runtime.fmt) && (ast.key in MessageFormat.formatters)) {
            tmp = MessageFormat.formatters[ast.key];
            this.runtime.fmt[ast.key] = (typeof tmp(this) == 'function') ? tmp(this) : tmp;
          }
          args.push(JSON.stringify(this.lc));
          if (ast.val && ast.val.length) args.push(JSON.stringify(ast.val.length == 1 ? ast.val[0] : ast.val));
          return 'fmt.' + ast.key + '(' + args.join(', ') + ')';
      }

    case 'pluralFormatPattern':
    case 'selectFormatPattern':
      data.pf_count = data.pf_count || 0;
      if (ast.type == 'selectFormatPattern') data.offset[data.pf_count] = 0;
      var needOther = true;
      for (i = 0; i < ast.pluralForms.length; ++i) {
        var key = ast.pluralForms[i].key;
        if (key === 'other') needOther = false;
        var data_copy = JSON.parse(JSON.stringify(data));
        data_copy.pf_count++;
        r.push(propname(key) + ': function() { return ' + this._precompile(ast.pluralForms[i].val, data_copy) + ';}');
      }
      if (needOther) throw new Error("No 'other' form found in " + ast.type + " " + data.pf_count);
      return '{ ' + r.join(', ') + ' }';

    case 'string':
      return JSON.stringify(ast.val || "");

    case 'octothorpe':
      if (!data.pf_count) return '"#"';
      args = [ propname(data.keys[data.pf_count-1], 'd') ];
      if (data.offset[data.pf_count-1]) args.push(data.offset[data.pf_count-1]);
      return 'number(' + args.join(', ') + ')';

    default:
      throw new Error( 'Bad AST type: ' + ast.type );
  }
};

/** Compile messages into an executable function with clean string
 *  representation.
 *
 *  If `messages` is a single string including ICU MessageFormat declarations,
 *  `opt` is ignored and the returned function takes a single Object parameter
 *  `d` representing each of the input's defined variables. The returned
 *  function will be defined in a local scope that includes all the required
 *  runtime variables.
 *
 *  If `messages` is a map of keys to strings, or a map of namespace keys to
 *  such key/string maps, the returned function will fill the specified global
 *  with javascript functions matching the structure of the input. In such use,
 *  the output of `compile()` is expected to be serialized using `.toString()`,
 *  and will include definitions of the runtime functions. If `opt.global` is
 *  null, calling the output function will return the object itself.
 *
 *  Together, the input parameters should match the following patterns:
 *  ```js
 *  messages = "string" || { key0: "string0", key1: "string1", ... } || {
 *    ns0: { key0: "string0", key1: "string1", ...  },
 *    ns1: { key0: "string0", key1: "string1", ...  },
 *    ...
 *  }
 *
 *  opt = null || {
 *    locale: null || {
 *      ns0: "lc0" || [ "lc0", ... ],
 *      ns1: "lc1" || [ "lc1", ... ],
 *      ...
 *    },
 *    global: null || "module.exports" || "exports" || "i18n" || ...
 *  }
 *  ```
 *
 *  @memberof MessageFormat
 *  @param {string|Object}
 *      messages - The input message(s) to be compiled, in ICU MessageFormat
 *  @param {Object} [opt={}] - Options controlling output for non-simple intput
 *  @param {Object} [opt.locale] - The locales to use for the messages, with a
 *      structure matching that of `messages`
 *  @param {string} [opt.global=""] - The global variable that the output
 *      function should use, or a null string for none. "exports" and
 *      "module.exports" are recognised as special cases.
 *  @returns {function} The first match found for the given locale(s)
 *
 *  @example
 * > var MessageFormat = require('messageformat'),
 * ...   mf = new MessageFormat('en'),
 * ...   mfunc0 = mf.compile('A {TYPE} example.');
 * > mfunc0({TYPE:'simple'})
 * 'A simple example.'
 * > mfunc0.toString()
 * 'function (d) { return "A " + d.TYPE + " example."; }'
 *
 *  @example
 * > var msgSet = { a: 'A {TYPE} example.',
 * ...              b: 'This has {COUNT, plural, one{one member} other{# members}}.' },
 * ...   mfuncSet = mf.compile(msgSet);
 * > mfuncSet().a({TYPE:'more complex'})
 * 'A more complex example.'
 * > mfuncSet().b({COUNT:2})
 * 'This has 2 members.'
 *
 * > console.log(mfuncSet.toString())
 * function anonymous() {
 * var number = function (value, offset) {
 *   if (isNaN(value)) throw new Error("'" + value + "' isn't a number.");
 *   return value - (offset || 0);
 * };
 * var plural = function (value, offset, lcfunc, data, isOrdinal) {
 *   if ({}.hasOwnProperty.call(data, value)) return data[value]();
 *   if (offset) value -= offset;
 *   var key = lcfunc(value, isOrdinal);
 *   if (key in data) return data[key]();
 *   return data.other();
 * };
 * var select = function (value, data) {
 *   if ({}.hasOwnProperty.call(data, value)) return data[value]();
 *   return data.other()
 * };
 * var pluralFuncs = {
 *   en: function (n, ord) {
 *     var s = String(n).split('.'), v0 = !s[1], t0 = Number(s[0]) == n,
 *         n10 = t0 && s[0].slice(-1), n100 = t0 && s[0].slice(-2);
 *     if (ord) return (n10 == 1 && n100 != 11) ? 'one'
 *         : (n10 == 2 && n100 != 12) ? 'two'
 *         : (n10 == 3 && n100 != 13) ? 'few'
 *         : 'other';
 *     return (n == 1 && v0) ? 'one' : 'other';
 *   }
 * };
 * var fmt = {};
 *
 * return {
 *   a: function(d) { return "A " + d.TYPE + " example."; },
 *   b: function(d) { return "This has " + plural(d.COUNT, 0, pluralFuncs.en, { one: function() { return "one member";}, other: function() { return number(d.COUNT)+" members";} }) + "."; }
 * }
 * }
 *
 *  @example
 * > mf.runtime.pluralFuncs.fi = MessageFormat.plurals.fi;
 * > var multiSet = { en: { a: 'A {TYPE} example.',
 * ...                      b: 'This is the {COUNT, selectordinal, one{#st} two{#nd} few{#rd} other{#th}} example.' },
 * ...                fi: { a: '{TYPE} esimerkki.',
 * ...                      b: 'Tämä on {COUNT, selectordinal, other{#.}} esimerkki.' } },
 * ...   multiSetLocales = { en: 'en', fi: 'fi' },
 * ...   mfuncSet = mf.compile(multiSet, { locale: multiSetLocales, global: 'i18n' });
 * > mfuncSet(this);
 * > i18n.en.b({COUNT:3})
 * 'This is the 3rd example.'
 * > i18n.fi.b({COUNT:3})
 * 'Tämä on 3. esimerkki.'  */
MessageFormat.prototype.compile = function ( messages, opt ) {
  var r = {}, lc0 = this.lc,
      compileMsg = function(self, msg) {
        try {
          var ast = MessageFormat._parse(msg);
          return self._precompile(ast);
        } catch (e) {
          throw new Error((ast ? 'Precompiler' : 'Parser') + ' error: ' + e.toString());
        }
      },
      stringify = function(r, level) {
        if (!level) level = 0;
        if (typeof r != 'object') return r;
        var o = [], indent = '';
        for (var i = 0; i < level; ++i) indent += '  ';
        for (var k in r) o.push('\n' + indent + '  ' + propname(k) + ': ' + stringify(r[k], level + 1));
        return '{' + o.join(',') + '\n' + indent + '}';
      };

  if (typeof messages == 'string') {
    var f = new Function(
        'number, plural, select, pluralFuncs, fmt',
        'return ' + compileMsg(this, messages));
    return f(this.runtime.number, this.runtime.plural, this.runtime.select,
        this.runtime.pluralFuncs, this.runtime.fmt);
  }

  opt = opt || {};

  for (var ns in messages) {
    if (opt.locale) this.lc = opt.locale[ns] && [].concat(opt.locale[ns]) || lc0;
    if (typeof messages[ns] == 'string') {
      try { r[ns] = compileMsg(this, messages[ns]); }
      catch (e) { e.message = e.message.replace(':', ' with `' + ns + '`:'); throw e; }
    } else {
      r[ns] = {};
      for (var key in messages[ns]) {
        try { r[ns][key] = compileMsg(this, messages[ns][key]); }
        catch (e) { e.message = e.message.replace(':', ' with `' + key + '` in `' + ns + '`:'); throw e; }
      }
    }
  }

  this.lc = lc0;
  var s = this.runtime.toString() + '\n';
  switch (opt.global || '') {
    case 'exports':
      var o = [];
      for (var k in r) o.push(propname(k, 'exports') + ' = ' + stringify(r[k]));
      return new Function(s + o.join(';\n'));
    case 'module.exports':
      return new Function(s + 'module.exports = ' + stringify(r));
    case '':
      return new Function(s + 'return ' + stringify(r));
    default:
      return new Function('G', s + propname(opt.global, 'G') + ' = ' + stringify(r));
  }
};


return MessageFormat;
}());
/* jshint ignore:end */


var createErrorPluralModulePresence = function() {
	return createError( "E_MISSING_PLURAL_MODULE", "Plural module not loaded." );
};




var validateMessageBundle = function( cldr ) {
	validate(
		"E_MISSING_MESSAGE_BUNDLE",
		"Missing message bundle for locale `{locale}`.",
		cldr.attributes.bundle && cldr.get( "globalize-messages/{bundle}" ) !== undefined,
		{
			locale: cldr.locale
		}
	);
};




var validateMessagePresence = function( path, value ) {
	path = path.join( "/" );
	validate( "E_MISSING_MESSAGE", "Missing required message content `{path}`.",
		value !== undefined, { path: path } );
};




var validateMessageType = function( path, value ) {
	path = path.join( "/" );
	validate(
		"E_INVALID_MESSAGE",
		"Invalid message content `{path}`. {expected} expected.",
		typeof value === "string",
		{
			expected: "a string",
			path: path
		}
	);
};




var validateParameterTypeMessageVariables = function( value, name ) {
	validateParameterType(
		value,
		name,
		value === undefined || isPlainObject( value ) || Array.isArray( value ),
		"Array or Plain Object"
	);
};




var messageFormatterFn = function( formatter ) {
	return function messageFormatter( variables ) {
		if ( typeof variables === "number" || typeof variables === "string" ) {
			variables = [].slice.call( arguments, 0 );
		}
		validateParameterTypeMessageVariables( variables, "variables" );
		return formatter( variables );
	};
};




var messageFormatterRuntimeBind = function( cldr, messageformatter ) {
	var locale = cldr.locale,
		origToString = messageformatter.toString;

	messageformatter.toString = function() {
		var argNames, argValues, output,
			args = {};

		// Properly adjust SlexAxton/messageformat.js compiled variables with Globalize variables:
		output = origToString.call( messageformatter );

		if ( /number\(/.test( output ) ) {
			args.number = "messageFormat.number";
		}

		if ( /plural\(/.test( output ) ) {
			args.plural = "messageFormat.plural";
		}

		if ( /select\(/.test( output ) ) {
			args.select = "messageFormat.select";
		}

		output.replace( /pluralFuncs(\[([^\]]+)\]|\.([a-zA-Z]+))/, function( match ) {
			args.pluralFuncs = "{" +
				"\"" + locale + "\": Globalize(\"" + locale + "\").pluralGenerator()" +
				"}";
			return match;
		});

		argNames = Object.keys( args ).join( ", " );
		argValues = Object.keys( args ).map(function( key ) {
			return args[ key ];
		}).join( ", " );

		return "(function( " + argNames + " ) {\n" +
			"  return " + output + "\n" +
			"})(" + argValues + ")";
	};

	return messageformatter;
};




var slice = [].slice;

/**
 * .loadMessages( json )
 *
 * @json [JSON]
 *
 * Load translation data.
 */
Globalize.loadMessages = function( json ) {
	var locale,
		customData = {
			"globalize-messages": json,
			"main": {}
		};

	validateParameterPresence( json, "json" );
	validateParameterTypePlainObject( json, "json" );

	// Set available bundles by populating customData main dataset.
	for ( locale in json ) {
		if ( json.hasOwnProperty( locale ) ) {
			customData.main[ locale ] = {};
		}
	}

	Cldr.load( customData );
};

/**
 * .messageFormatter( path )
 *
 * @path [String or Array]
 *
 * Format a message given its path.
 */
Globalize.messageFormatter =
Globalize.prototype.messageFormatter = function( path ) {
	var cldr, formatter, message, pluralGenerator, returnFn,
		args = slice.call( arguments, 0 );

	validateParameterPresence( path, "path" );
	validateParameterType( path, "path", typeof path === "string" || Array.isArray( path ),
		"a String nor an Array" );

	path = alwaysArray( path );
	cldr = this.cldr;

	validateDefaultLocale( cldr );
	validateMessageBundle( cldr );

	message = cldr.get( [ "globalize-messages/{bundle}" ].concat( path ) );
	validateMessagePresence( path, message );

	// If message is an Array, concatenate it.
	if ( Array.isArray( message ) ) {
		message = message.join( " " );
	}
	validateMessageType( path, message );

	// Is plural module present? Yes, use its generator. Nope, use an error generator.
	pluralGenerator = this.plural !== undefined ?
		this.pluralGenerator() :
		createErrorPluralModulePresence;

	formatter = new MessageFormat( cldr.locale, pluralGenerator ).compile( message );

	returnFn = messageFormatterFn( formatter );

	runtimeBind( args, cldr, returnFn,
		[ messageFormatterRuntimeBind( cldr, formatter ), pluralGenerator ] );

	return returnFn;
};

/**
 * .formatMessage( path [, variables] )
 *
 * @path [String or Array]
 *
 * @variables [Number, String, Array or Object]
 *
 * Format a message given its path.
 */
Globalize.formatMessage =
Globalize.prototype.formatMessage = function( path /* , variables */ ) {
	return this.messageFormatter( path ).apply( {}, slice.call( arguments, 1 ) );
};

return Globalize;




}));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(define) {/**
 * Globalize v1.6.0
 *
 * http://github.com/jquery/globalize
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2020-09-08T11:54Z
 */
/*!
 * Globalize v1.6.0 2020-09-08T11:54Z Released under the MIT license
 * http://git.io/TrdQbw
 */
(function( root, factory ) {

	// UMD returnExports
	if ( typeof define === "function" && define.amd ) {

		// AMD
		define([
			"cldr",
			"../globalize",
			"cldr/event",
			"cldr/supplemental"
		], factory );
	} else if ( true ) {

		// Node, CommonJS
		module.exports = factory( __webpack_require__( 2 ), __webpack_require__( 1 ) );
	} else {}
}(this, function( Cldr, Globalize ) {

var createError = Globalize._createError,
	partsJoin = Globalize._partsJoin,
	partsPush = Globalize._partsPush,
	regexpEscape = Globalize._regexpEscape,
	runtimeBind = Globalize._runtimeBind,
	stringPad = Globalize._stringPad,
	validateCldr = Globalize._validateCldr,
	validateDefaultLocale = Globalize._validateDefaultLocale,
	validateParameterPresence = Globalize._validateParameterPresence,
	validateParameterRange = Globalize._validateParameterRange,
	validateParameterType = Globalize._validateParameterType,
	validateParameterTypePlainObject = Globalize._validateParameterTypePlainObject;


var createErrorUnsupportedFeature = function( feature ) {
	return createError( "E_UNSUPPORTED", "Unsupported {feature}.", {
		feature: feature
	});
};




var validateParameterTypeNumber = function( value, name ) {
	validateParameterType(
		value,
		name,
		value === undefined || typeof value === "number",
		"Number"
	);
};




var validateParameterTypeString = function( value, name ) {
	validateParameterType(
		value,
		name,
		value === undefined || typeof value === "string",
		"a string"
	);
};




var numberFormatterFn = function( numberToPartsFormatter ) {
	return function numberFormatter( value ) {
		return partsJoin( numberToPartsFormatter( value ));
	};
};




/**
 * NumberingSystem( cldr )
 *
 * - http://www.unicode.org/reports/tr35/tr35-numbers.html#otherNumberingSystems
 * - http://cldr.unicode.org/index/bcp47-extension
 * - http://www.unicode.org/reports/tr35/#u_Extension
 */
var numberNumberingSystem = function( cldr ) {
	var nu = cldr.attributes[ "u-nu" ];

	if ( nu ) {
		if ( nu === "traditio" ) {
			nu = "traditional";
		}
		if ( [ "native", "traditional", "finance" ].indexOf( nu ) !== -1 ) {

			// Unicode locale extension `u-nu` is set using either (native, traditional or
			// finance). So, lookup the respective locale's numberingSystem and return it.
			return cldr.main([ "numbers/otherNumberingSystems", nu ]);
		}

		// Unicode locale extension `u-nu` is set with an explicit numberingSystem. Return it.
		return nu;
	}

	// Return the default numberingSystem.
	return cldr.main( "numbers/defaultNumberingSystem" );
};




/**
 * Compact( name, cldr )
 *
 * @compactType [String] Compact mode, `short` or `long`.
 *
 * @cldr [Cldr instance].
 *
 * Return the localized compact map for the given compact mode.
 */
var numberCompact = function( compactType, cldr ) {
	var maxExponent = 0;

	var object = cldr.main([
		"numbers/decimalFormats-numberSystem-" + numberNumberingSystem( cldr ),
		compactType,
		"decimalFormat"
	]);

	object = Object.keys( object ).reduce(function( newObject, compactKey ) {
		var numberExponent = compactKey.split( "0" ).length - 1;
		var pluralForm = compactKey.split( "-" )[ 2 ];
		newObject[ numberExponent ] = newObject[ numberExponent ] || {};
		newObject[ numberExponent ][ pluralForm ] = object[ compactKey ];
		maxExponent = Math.max( numberExponent, maxExponent );
		return newObject;
	}, {});

	object.maxExponent = maxExponent;

	return object;
};




/**
 * nuMap( cldr )
 *
 * @cldr [Cldr instance].
 *
 * Return digits map if numbering system is different than `latn`.
 */
var numberNumberingSystemDigitsMap = function( cldr ) {
	var aux,
		nu = numberNumberingSystem( cldr );

	if ( nu === "latn" ) {
		return;
	}

	aux = cldr.supplemental([ "numberingSystems", nu ]);

	if ( aux._type !== "numeric" ) {
		throw createErrorUnsupportedFeature( "`" + aux._type + "` numbering system" );
	}

	return aux._digits;
};




/**
 * EBNF representation:
 *
 * number_pattern_re =        prefix?
 *                            padding?
 *                            (integer_fraction_pattern | significant_pattern)
 *                            scientific_notation?
 *                            suffix?
 *
 * prefix =                   non_number_stuff
 *
 * padding =                  "*" regexp(.)
 *
 * integer_fraction_pattern = integer_pattern
 *                            fraction_pattern?
 *
 * integer_pattern =          regexp([#,]*[0,]*0+)
 *
 * fraction_pattern =         "." regexp(0*[0-9]*#*)
 *
 * significant_pattern =      regexp([#,]*@+#*)
 *
 * scientific_notation =      regexp(E\+?0+)
 *
 * suffix =                   non_number_stuff
 *
 * non_number_stuff =         regexp(('[^']+'|''|[^*#@0,.E])*)
 *
 *
 * Regexp groups:
 *
 *  0: number_pattern_re
 *  1: prefix
 *  2: -
 *  3: -
 *  4: padding
 *  5: (integer_fraction_pattern | significant_pattern)
 *  6: integer_fraction_pattern
 *  7: integer_pattern
 *  8: fraction_pattern
 *  9: significant_pattern
 * 10: scientific_notation
 * 11: suffix
 * 12: -
 */
var numberPatternRe = ( /^(('([^']|'')*'|[^*#@0,.E])*)(\*.)?((([#,]*[0,]*0+)(\.0*[0-9]*#*)?)|([#,]*@+#*))(E\+?0+)?(('[^']+'|''|[^*#@0,.E])*)$/ );




/**
 * format( number, pattern )
 *
 * @number [Number].
 *
 * @pattern [String] raw pattern for numbers.
 *
 * Return the formatted number.
 * ref: http://www.unicode.org/reports/tr35/tr35-numbers.html
 */
var numberPatternProperties = function( pattern ) {
	var aux1, aux2, fractionPattern, integerFractionOrSignificantPattern, integerPattern,
		maximumFractionDigits, maximumSignificantDigits, minimumFractionDigits,
		minimumIntegerDigits, minimumSignificantDigits, padding, prefix, primaryGroupingSize,
		roundIncrement, scientificNotation, secondaryGroupingSize, significantPattern, suffix;

	pattern = pattern.match( numberPatternRe );
	if ( !pattern ) {
		throw new Error( "Invalid pattern: " + pattern );
	}

	prefix = pattern[ 1 ];
	padding = pattern[ 4 ];
	integerFractionOrSignificantPattern = pattern[ 5 ];
	significantPattern = pattern[ 9 ];
	scientificNotation = pattern[ 10 ];
	suffix = pattern[ 11 ];

	// Significant digit format
	if ( significantPattern ) {
		significantPattern.replace( /(@+)(#*)/, function( match, minimumSignificantDigitsMatch, maximumSignificantDigitsMatch ) {
			minimumSignificantDigits = minimumSignificantDigitsMatch.length;
			maximumSignificantDigits = minimumSignificantDigits +
				maximumSignificantDigitsMatch.length;
		});

	// Integer and fractional format
	} else {
		fractionPattern = pattern[ 8 ];
		integerPattern = pattern[ 7 ];

		if ( fractionPattern ) {

			// Minimum fraction digits, and rounding.
			fractionPattern.replace( /[0-9]+/, function( match ) {
				minimumFractionDigits = match;
			});
			if ( minimumFractionDigits ) {
				roundIncrement = +( "0." + minimumFractionDigits );
				minimumFractionDigits = minimumFractionDigits.length;
			} else {
				minimumFractionDigits = 0;
			}

			// Maximum fraction digits
			// 1: ignore decimal character
			maximumFractionDigits = fractionPattern.length - 1 /* 1 */;
		} else {
			minimumFractionDigits = 0;
			maximumFractionDigits = 0;
		}

		// Minimum integer digits
		integerPattern.replace( /0+$/, function( match ) {
			minimumIntegerDigits = match.length;
		});
	}

	// Scientific notation
	if ( scientificNotation ) {
		throw createErrorUnsupportedFeature({
			feature: "scientific notation (not implemented)"
		});
	}

	// Padding
	if ( padding ) {
		throw createErrorUnsupportedFeature({
			feature: "padding (not implemented)"
		});
	}

	// Grouping
	if ( ( aux1 = integerFractionOrSignificantPattern.lastIndexOf( "," ) ) !== -1 ) {

		// Primary grouping size is the interval between the last group separator and the end of
		// the integer (or the end of the significant pattern).
		aux2 = integerFractionOrSignificantPattern.split( "." )[ 0 ];
		primaryGroupingSize = aux2.length - aux1 - 1;

		// Secondary grouping size is the interval between the last two group separators.
		if ( ( aux2 = integerFractionOrSignificantPattern.lastIndexOf( ",", aux1 - 1 ) ) !== -1 ) {
			secondaryGroupingSize = aux1 - 1 - aux2;
		}
	}

	// Return:
	//  0: @prefix String
	//  1: @padding Array [ <character>, <count> ] TODO
	//  2: @minimumIntegerDigits non-negative integer Number value indicating the minimum integer
	//        digits to be used. Numbers will be padded with leading zeroes if necessary.
	//  3: @minimumFractionDigits and
	//  4: @maximumFractionDigits are non-negative integer Number values indicating the minimum and
	//        maximum fraction digits to be used. Numbers will be rounded or padded with trailing
	//        zeroes if necessary.
	//  5: @minimumSignificantDigits and
	//  6: @maximumSignificantDigits are positive integer Number values indicating the minimum and
	//        maximum fraction digits to be shown. Either none or both of these properties are
	//        present; if they are, they override minimum and maximum integer and fraction digits
	//        – the formatter uses however many integer and fraction digits are required to display
	//        the specified number of significant digits.
	//  7: @roundIncrement Decimal round increment or null
	//  8: @primaryGroupingSize
	//  9: @secondaryGroupingSize
	// 10: @suffix String
	return [
		prefix,
		padding,
		minimumIntegerDigits,
		minimumFractionDigits,
		maximumFractionDigits,
		minimumSignificantDigits,
		maximumSignificantDigits,
		roundIncrement,
		primaryGroupingSize,
		secondaryGroupingSize,
		suffix
	];
};




/**
 * Symbol( name, cldr )
 *
 * @name [String] Symbol name.
 *
 * @cldr [Cldr instance].
 *
 * Return the localized symbol given its name.
 */
var numberSymbol = function( name, cldr ) {
	return cldr.main([
		"numbers/symbols-numberSystem-" + numberNumberingSystem( cldr ),
		name
	]);
};




var numberSymbolName = {
	".": "decimal",
	",": "group",
	"%": "percentSign",
	"+": "plusSign",
	"-": "minusSign",
	"E": "exponential",
	"\u2030": "perMille"
};




/**
 * symbolMap( cldr )
 *
 * @cldr [Cldr instance].
 *
 * Return the (localized symbol, pattern symbol) key value pair, eg. {
 *   ".": "٫",
 *   ",": "٬",
 *   "%": "٪",
 *   ...
 * };
 */
var numberSymbolMap = function( cldr ) {
	var symbol,
		symbolMap = {};

	for ( symbol in numberSymbolName ) {
		symbolMap[ symbol ] = numberSymbol( numberSymbolName[ symbol ], cldr );
	}

	return symbolMap;
};




var numberTruncate = function( value ) {
	if ( isNaN( value ) ) {
		return NaN;
	}
	return Math[ value < 0 ? "ceil" : "floor" ]( value );
};




/**
 * round( method )
 *
 * @method [String] with either "round", "ceil", "floor", or "truncate".
 *
 * Return function( value, incrementOrExp ):
 *
 *   @value [Number] eg. 123.45.
 *
 *   @incrementOrExp [Number] optional, eg. 0.1; or
 *     [Object] Either { increment: <value> } or { exponent: <value> }
 *
 *   Return the rounded number, eg:
 *   - round( "round" )( 123.45 ): 123;
 *   - round( "ceil" )( 123.45 ): 124;
 *   - round( "floor" )( 123.45 ): 123;
 *   - round( "truncate" )( 123.45 ): 123;
 *   - round( "round" )( 123.45, 0.1 ): 123.5;
 *   - round( "round" )( 123.45, 10 ): 120;
 *
 *   Based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
 *   Ref: #376
 */
var numberRound = function( method ) {
	method = method || "round";
	method = method === "truncate" ? numberTruncate : Math[ method ];

	return function( value, incrementOrExp ) {
		var exp, increment;

		value = +value;

		// If the value is not a number, return NaN.
		if ( isNaN( value ) ) {
			return NaN;
		}

		// Exponent given.
		if ( typeof incrementOrExp === "object" && incrementOrExp.exponent ) {
			exp = +incrementOrExp.exponent;
			increment = 1;

			if ( exp === 0 ) {
				return method( value );
			}

			// If the exp is not an integer, return NaN.
			if ( !( typeof exp === "number" && exp % 1 === 0 ) ) {
				return NaN;
			}

		// Increment given.
		} else {
			increment = +incrementOrExp || 1;

			if ( increment === 1 ) {
				return method( value );
			}

			// If the increment is not a number, return NaN.
			if ( isNaN( increment ) ) {
				return NaN;
			}

			increment = increment.toExponential().split( "e" );
			exp = +increment[ 1 ];
			increment = +increment[ 0 ];
		}

		// Shift & Round
		value = value.toString().split( "e" );
		value[ 0 ] = +value[ 0 ] / increment;
		value[ 1 ] = value[ 1 ] ? ( +value[ 1 ] - exp ) : -exp;
		value = method( +( value[ 0 ] + "e" + value[ 1 ] ) );

		// Shift back
		value = value.toString().split( "e" );
		value[ 0 ] = +value[ 0 ] * increment;
		value[ 1 ] = value[ 1 ] ? ( +value[ 1 ] + exp ) : exp;
		return +( value[ 0 ] + "e" + value[ 1 ] );
	};
};




/**
 * formatProperties( pattern, cldr [, options] )
 *
 * @pattern [String] raw pattern for numbers.
 *
 * @cldr [Cldr instance].
 *
 * @options [Object]:
 * - minimumIntegerDigits [Number]
 * - minimumFractionDigits, maximumFractionDigits [Number]
 * - minimumSignificantDigits, maximumSignificantDigits [Number]
 * - round [String] "ceil", "floor", "round" (default), or "truncate".
 * - useGrouping [Boolean] default true.
 *
 * Return the processed properties that will be used in number/format.
 * ref: http://www.unicode.org/reports/tr35/tr35-numbers.html
 */
var numberFormatProperties = function( pattern, cldr, options ) {
	var negativePattern, negativePrefix, negativeProperties, negativeSuffix, positivePattern,
		roundFn, properties;

	function getOptions( attribute, propertyIndex ) {
		if ( attribute in options ) {
			properties[ propertyIndex ] = options[ attribute ];
		}
	}

	options = options || {};
	pattern = pattern.split( ";" );

	positivePattern = pattern[ 0 ];

	negativePattern = pattern[ 1 ] || "-" + positivePattern;
	negativeProperties = numberPatternProperties( negativePattern );
	negativePrefix = negativeProperties[ 0 ];
	negativeSuffix = negativeProperties[ 10 ];

	// Have runtime code to refer to numberRound() instead of including it explicitly.
	roundFn = numberRound( options.round );
	roundFn.generatorString = function() {
		return "numberRound(" + ( options.round ? "\"" + options.round + "\"" : "" ) + ")";
	};

	properties = numberPatternProperties( positivePattern ).concat([
		positivePattern,
		negativePrefix + positivePattern + negativeSuffix,
		negativePrefix,
		negativeSuffix,
		roundFn,
		numberSymbol( "infinity", cldr ),
		numberSymbol( "nan", cldr ),
		numberSymbolMap( cldr ),
		numberNumberingSystemDigitsMap( cldr )
	]);

	if ( options.compact ) {

		// The compact digits number pattern is always `0+`, so override the following properties.
		// Note: minimumIntegerDigits would actually range from `0` to `000` based on the scale of
		// the value to be formatted, though we're always using 1 as a simplification, because the
		// number won't be zero-padded since we chose the right format based on the scale, i.e.,
		// we'd never see something like `003M` anyway.
		properties[ 2 ] = 1; // minimumIntegerDigits
		properties[ 3 ] = 0; // minimumFractionDigits
		properties[ 4 ] = 0; // maximumFractionDigits
		properties[ 5 ] = // minimumSignificantDigits &
			properties[ 6 ] = undefined ; // maximumSignificantDigits

		properties[20] = numberCompact( options.compact, cldr );
	}

	getOptions( "minimumIntegerDigits", 2 );
	getOptions( "minimumFractionDigits", 3 );
	getOptions( "maximumFractionDigits", 4 );
	getOptions( "minimumSignificantDigits", 5 );
	getOptions( "maximumSignificantDigits", 6 );

	// Grouping separators
	if ( options.useGrouping === false ) {
		properties[ 8 ] = null;
	}

	// Normalize number of digits if only one of either minimumFractionDigits or
	// maximumFractionDigits is passed in as an option
	if ( "minimumFractionDigits" in options && !( "maximumFractionDigits" in options ) ) {

		// maximumFractionDigits = Math.max( minimumFractionDigits, maximumFractionDigits );
		properties[ 4 ] = Math.max( properties[ 3 ], properties[ 4 ] );
	} else if ( !( "minimumFractionDigits" in options ) &&
			"maximumFractionDigits" in options ) {

		// minimumFractionDigits = Math.min( minimumFractionDigits, maximumFractionDigits );
		properties[ 3 ] = Math.min( properties[ 3 ], properties[ 4 ] );
	}

	// Return:
	// 0-10: see number/pattern-properties.
	// 11: @positivePattern [String] Positive pattern.
	// 12: @negativePattern [String] Negative pattern.
	// 13: @negativePrefix [String] Negative prefix.
	// 14: @negativeSuffix [String] Negative suffix.
	// 15: @round [Function] Round function.
	// 16: @infinitySymbol [String] Infinity symbol.
	// 17: @nanSymbol [String] NaN symbol.
	// 18: @symbolMap [Object] A bunch of other symbols.
	// 19: @nuDigitsMap [Array] Digits map if numbering system is different than `latn`.
	// 20: @compactMap [Object] Map of per-digit-count format patterns for specified compact mode.
	return properties;
};




/**
 * Generated by:
 *
 * var regenerate = require( "regenerate" );
 * var formatSymbols = require( * "unicode-8.0.0/General_Category/Format/symbols" );
 * regenerate().add( formatSymbols ).toString();
 *
 * https://github.com/mathiasbynens/regenerate
 * https://github.com/mathiasbynens/unicode-8.0.0
 */
var regexpCfG = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804\uDCBD|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/g;




/**
 * Generated by:
 *
 * var regenerate = require( "regenerate" );
 * var dashSymbols = require( * "unicode-8.0.0/General_Category/Dash_Punctuation/symbols" );
 * regenerate().add( dashSymbols ).toString();
 *
 * https://github.com/mathiasbynens/regenerate
 * https://github.com/mathiasbynens/unicode-8.0.0
 *
 * NOTE: In addition to [:dash:],  the below includes MINUS SIGN U+2212.
 */
var regexpDashG = /[\-\u058A\u05BE\u1400\u1806\u2010-\u2015\u2E17\u2E1A\u2E3A\u2E3B\u2E40\u301C\u3030\u30A0\uFE31\uFE32\uFE58\uFE63\uFF0D\u2212]/g;




/**
 * Generated by:
 *
 * var regenerate = require( "regenerate" );
 * var spaceSeparatorSymbols = require( "unicode-8.0.0/General_Category/Space_Separator/symbols" );
 * regenerate().add( spaceSeparatorSymbols ).toString();
 *
 * https://github.com/mathiasbynens/regenerate
 * https://github.com/mathiasbynens/unicode-8.0.0
 */
var regexpZsG = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/g;




/**
 * Loose Matching:
 * - Ignore all format characters, which includes RLM, LRM or ALM used to control BIDI
 *   formatting.
 * - Map all characters in [:Zs:] to U+0020 SPACE;
 * - Map all characters in [:Dash:] to U+002D HYPHEN-MINUS;
 */
var looseMatching = function( value ) {
	return value
		.replace( regexpCfG, "" )
		.replace( regexpDashG, "-" )
		.replace( regexpZsG, " " );
};




/**
 * parse( value, properties )
 *
 * @value [String].
 *
 * @properties [Object] Parser properties is a reduced pre-processed cldr
 * data set returned by numberParserProperties().
 *
 * Return the parsed Number (including Infinity) or NaN when value is invalid.
 * ref: http://www.unicode.org/reports/tr35/tr35-numbers.html
 */
var numberParse = function( value, properties ) {
	var grammar, invertedNuDigitsMap, invertedSymbolMap, negative, number, prefix, prefixNSuffix,
		suffix, tokenizer, valid;

	// Grammar:
	// - Value <=           NaN | PositiveNumber | NegativeNumber
	// - PositiveNumber <=  PositivePrefix NumberOrInf PositiveSufix
	// - NegativeNumber <=  NegativePrefix NumberOrInf
	// - NumberOrInf <=     Number | Inf
	grammar = [
		[ "nan" ],
		[ "prefix", "infinity", "suffix" ],
		[ "prefix", "number", "suffix" ],
		[ "negativePrefix", "infinity", "negativeSuffix" ],
		[ "negativePrefix", "number", "negativeSuffix" ]
	];

	invertedSymbolMap = properties[ 0 ];
	invertedNuDigitsMap = properties[ 1 ] || {};
	tokenizer = properties[ 2 ];

	value = looseMatching( value );

	function parse( type ) {
		return function( lexeme ) {

			// Reverse localized symbols and numbering system.
			lexeme = lexeme.split( "" ).map(function( character ) {
				return invertedSymbolMap[ character ] ||
					invertedNuDigitsMap[ character ] ||
					character;
			}).join( "" );

			switch ( type ) {
				case "infinity":
					number = Infinity;
					break;

				case "nan":
					number = NaN;
					break;

				case "number":

					// Remove grouping separators.
					lexeme = lexeme.replace( /,/g, "" );

					number = +lexeme;
					break;

				case "prefix":
				case "negativePrefix":
					prefix = lexeme;
					break;

				case "suffix":
					suffix = lexeme;
					break;

				case "negativeSuffix":
					suffix = lexeme;
					negative = true;
					break;

				// This should never be reached.
				default:
					throw new Error( "Internal error" );
			}
			return "";
		};
	}

	function tokenizeNParse( _value, grammar ) {
		return grammar.some(function( statement ) {
			var value = _value;

			// The whole grammar statement should be used (i.e., .every() return true) and value be
			// entirely consumed (i.e., !value.length).
			return statement.every(function( type ) {
				if ( value.match( tokenizer[ type ] ) === null ) {
					return false;
				}

				// Consume and parse it.
				value = value.replace( tokenizer[ type ], parse( type ) );
				return true;
			}) && !value.length;
		});
	}

	valid = tokenizeNParse( value, grammar );

	// NaN
	if ( !valid || isNaN( number ) ) {
		return NaN;
	}

	prefixNSuffix = "" + prefix + suffix;

	// Percent
	if ( prefixNSuffix.indexOf( "%" ) !== -1 ) {
		number /= 100;

	// Per mille
	} else if ( prefixNSuffix.indexOf( "\u2030" ) !== -1 ) {
		number /= 1000;
	}

	// Negative number
	if ( negative ) {
		number *= -1;
	}

	return number;
};




var numberParserFn = function( properties ) {
	return function numberParser( value ) {
		validateParameterPresence( value, "value" );
		validateParameterTypeString( value, "value" );

		return numberParse( value, properties );
	};

};




/**
 * symbolMap( cldr )
 *
 * @cldr [Cldr instance].
 *
 * Return the (localized symbol, pattern symbol) key value pair, eg. {
 *   "٫": ".",
 *   "٬": ",",
 *   "٪": "%",
 *   ...
 * };
 */
var numberSymbolInvertedMap = function( cldr ) {
	var symbol,
		symbolMap = {};

	for ( symbol in numberSymbolName ) {
		symbolMap[ numberSymbol( numberSymbolName[ symbol ], cldr ) ] = symbol;
	}

	return symbolMap;
};




/**
 * objectMap( object, fn)
 *
 * - object
 *
 * - fn( pair ) => pair
 */
var objectMap = function( object, fn ) {
	return Object.keys( object ).map(function( key ) {
		return fn([ key, object[ key ] ]);
	}).reduce(function( object, pair ) {
		object[ pair[ 0 ] ] = pair[ 1 ];
		return object;
	}, {});
};




/**
 * removeLiteralQuotes( string )
 *
 * Return:
 * - `'` if input string is `''`.
 * - `o'clock` if input string is `'o''clock'`.
 * - `foo` if input string is `foo`, i.e., return the same value in case it isn't a single-quoted
 *   string.
 */
var removeLiteralQuotes = function( string ) {
	if ( string[ 0 ] + string[ string.length - 1 ] !== "''" ) {
		return string;
	}
	if ( string === "''" ) {
		return "'";
	}
	return string.replace( /''/g, "'" ).slice( 1, -1 );
};




/**
 * parseProperties( pattern, cldr )
 *
 * @pattern [String] raw pattern for numbers.
 *
 * @cldr [Cldr instance].
 *
 * Return parser properties, used to feed parser function.
 *
 * TODO:
 * - Scientific_notation;
 * - Padding;
 */
var numberParseProperties = function( pattern, cldr, options ) {
	var aux, decimalSymbolRe, digitsRe, groupingSeparatorRe, infinitySymbol, invertedNuDigitsMap,
		invertedSymbolMap, maximumFractionDigits, maximumSignificantDigits,
		minimumSignificantDigits, nanSymbol, negativePrefix, negativeSuffix, nuDigitsMap,
		numberTokenizer, prefix, primaryGroupingSize, secondaryGroupingSize, suffix, symbolMap,
		formatProperties = numberFormatProperties( pattern, cldr, options );

	prefix = looseMatching( formatProperties[ 0 ] );
	maximumFractionDigits = formatProperties[ 4 ];
	minimumSignificantDigits = formatProperties[ 5 ];
	maximumSignificantDigits = formatProperties[ 6 ];
	primaryGroupingSize = formatProperties[ 8 ];
	secondaryGroupingSize = formatProperties[ 9 ];
	suffix = looseMatching( formatProperties[ 10 ] );
	negativePrefix = looseMatching( formatProperties[ 13 ] );
	negativeSuffix = looseMatching( formatProperties[ 14 ] );
	infinitySymbol = looseMatching( formatProperties[ 16 ] );
	nanSymbol = looseMatching( formatProperties[ 17 ] );
	symbolMap = objectMap( formatProperties[ 18 ], function( pair ) {
		return [ pair[ 0 ], looseMatching( pair[ 1 ] ) ];
	});
	nuDigitsMap = formatProperties[ 19 ];

	invertedSymbolMap = objectMap( numberSymbolInvertedMap( cldr ), function( pair ) {
		return [ looseMatching( pair[ 0 ] ), pair[ 1 ] ];
	});

	digitsRe = nuDigitsMap ? "[" + nuDigitsMap + "]" : "\\d";
	groupingSeparatorRe = regexpEscape( symbolMap[ "," ] );
	decimalSymbolRe = regexpEscape( symbolMap[ "." ] );

	if ( nuDigitsMap ) {
		invertedNuDigitsMap = nuDigitsMap.split( "" ).reduce(function( object, localizedDigit, i ) {
			object[ localizedDigit ] = String( i );
			return object;
		}, {} );
	}

	aux = [ prefix, suffix, negativePrefix, negativeSuffix ].map(function( value ) {
		return value.replace( /('([^']|'')+'|'')|./g, function( character, literal ) {

			// Literals
			if ( literal ) {
				return removeLiteralQuotes( literal );
			}

			// Symbols
			character = character.replace( /[\-+E%\u2030]/, function( symbol ) {
				return symbolMap[ symbol ];
			});

			return character;
		});
	});

	prefix = aux[ 0 ];
	suffix = aux[ 1 ];
	negativePrefix = aux[ 2 ];
	negativeSuffix = aux[ 3 ];

	// Number
	//
	// number_re =                       integer fraction?
	//
	// integer =                         digits | digits_using_grouping_separators
	//
	// fraction =                        regexp((.\d+)?)
	//
	// digits =                          regexp(\d+)
	//
	// digits_w_grouping_separators =    digits_w_1_grouping_separators |
	//                                   digits_w_2_grouping_separators
	//
	// digits_w_1_grouping_separators =  regexp(\d{1,3}(,\d{3})+)
	//
	// digits_w_2_grouping_separators =  regexp(\d{1,2}((,\d{2})*(,\d{3})))

	// Integer part
	numberTokenizer = digitsRe + "+";

	// Grouping separators
	if ( primaryGroupingSize ) {
		if ( secondaryGroupingSize ) {
			aux = digitsRe + "{1," + secondaryGroupingSize + "}((" + groupingSeparatorRe +
				digitsRe + "{" + secondaryGroupingSize + "})*(" + groupingSeparatorRe +
				digitsRe + "{" + primaryGroupingSize + "}))";
		} else {
			aux = digitsRe + "{1," + primaryGroupingSize + "}(" + groupingSeparatorRe +
				digitsRe + "{" + primaryGroupingSize + "})+";
		}
		numberTokenizer = "(" + aux + "|" + numberTokenizer + ")";
	}

	// Fraction part? Only included if 1 or 2.
	// 1: Using significant digit format.
	// 2: Using integer and fractional format && it has a maximumFractionDigits.
	if ( !isNaN( minimumSignificantDigits * maximumSignificantDigits ) || /* 1 */
				maximumFractionDigits /* 2 */ ) {

		// 1: Handle trailing decimal separator, e.g., `"1." => `1``.
		aux = decimalSymbolRe + digitsRe + "+";
		numberTokenizer = numberTokenizer + "(" + aux + "|" + decimalSymbolRe /* 1 */ + ")?" +

			// Handle non-padded decimals, e.g., `".12"` => `0.12` by making the integer part
			// optional.
			"|(" + numberTokenizer + ")?" + aux;

		numberTokenizer = "(" + numberTokenizer + ")";
	}

	// 0: @invertedSymbolMap [Object] Inverted symbol map.
	// 1: @invertedNuDigitsMap [Object] Inverted digits map if numbering system is different than
	//    `latn`.
	// 2: @tokenizer [Object] Tokenizer map, used by parser to consume input.
	return [
		invertedSymbolMap,
		invertedNuDigitsMap,
		{
			infinity: new RegExp( "^" + regexpEscape( infinitySymbol ) ),
			nan:  new RegExp( "^" + regexpEscape( nanSymbol ) ),
			negativePrefix: new RegExp( "^" + regexpEscape( negativePrefix ) ),
			negativeSuffix: new RegExp( "^" + regexpEscape( negativeSuffix ) ),
			number: new RegExp( "^" + numberTokenizer ),
			prefix: new RegExp( "^" + regexpEscape( prefix ) ),
			suffix: new RegExp( "^" + regexpEscape( suffix ) )
		}
	];

};




/**
 * Pattern( style )
 *
 * @style [String] "decimal" (default) or "percent".
 *
 * @cldr [Cldr instance].
 */
var numberPattern = function( style, cldr ) {
	if ( style !== "decimal" && style !== "percent" ) {
		throw new Error( "Invalid style" );
	}

	return cldr.main([
		"numbers",
		style + "Formats-numberSystem-" + numberNumberingSystem( cldr ),
		"standard"
	]);
};




/**
 * EBNF representation:
 *
 * compact_pattern_re =       prefix?
 *                            number_pattern_re
 *                            suffix?
 *
 * number_pattern_re =        0+
 *
 * Regexp groups:
 *
 *  0: compact_pattern_re
 *  1: prefix
 *  2: number_pattern_re (the number pattern to use in compact mode)
 *  3: suffix
 */
var numberCompactPatternRe = ( /^([^0]*)(0+)([^0]*)$/ );




/**
 * goupingSeparator( number, primaryGroupingSize, secondaryGroupingSize )
 *
 * @number [Number].
 *
 * @primaryGroupingSize [Number]
 *
 * @secondaryGroupingSize [Number]
 *
 * Return the formatted number with group separator.
 */
var numberFormatGroupingSeparator = function( number, primaryGroupingSize, secondaryGroupingSize ) {
	var index,
		currentGroupingSize = primaryGroupingSize,
		ret = "",
		sep = ",",
		switchToSecondary = secondaryGroupingSize ? true : false;

	number = String( number ).split( "." );
	index = number[ 0 ].length;

	while ( index > currentGroupingSize ) {
		ret = number[ 0 ].slice( index - currentGroupingSize, index ) +
			( ret.length ? sep : "" ) + ret;
		index -= currentGroupingSize;
		if ( switchToSecondary ) {
			currentGroupingSize = secondaryGroupingSize;
			switchToSecondary = false;
		}
	}

	number[ 0 ] = number[ 0 ].slice( 0, index ) + ( ret.length ? sep : "" ) + ret;
	return number.join( "." );
};




/**
 * integerFractionDigits( number, minimumIntegerDigits, minimumFractionDigits,
 * maximumFractionDigits, round, roundIncrement )
 *
 * @number [Number]
 *
 * @minimumIntegerDigits [Number]
 *
 * @minimumFractionDigits [Number]
 *
 * @maximumFractionDigits [Number]
 *
 * @round [Function]
 *
 * @roundIncrement [Function]
 *
 * Return the formatted integer and fraction digits.
 */
var numberFormatIntegerFractionDigits = function( number, minimumIntegerDigits, minimumFractionDigits, maximumFractionDigits, round,
	roundIncrement ) {

	// Fraction
	if ( maximumFractionDigits ) {

		// Rounding
		if ( roundIncrement ) {
			number = round( number, roundIncrement );

		// Maximum fraction digits
		} else {
			number = round( number, { exponent: -maximumFractionDigits } );
		}

	} else {
		number = round( number );
	}

	number = String( number );

	// Maximum integer digits (post string phase)
	if ( maximumFractionDigits && /e-/.test( number ) ) {

		// Use toFixed( maximumFractionDigits ) to make sure small numbers like 1e-7 are
		// displayed using plain digits instead of scientific notation.
		// 1: Remove leading decimal zeros.
		// 2: Remove leading decimal separator.
		// Note: String() is still preferred so it doesn't mess up with a number precision
		// unnecessarily, e.g., (123456789.123).toFixed(10) === "123456789.1229999959",
		// String(123456789.123) === "123456789.123".
		number = ( +number ).toFixed( maximumFractionDigits )
			.replace( /0+$/, "" ) /* 1 */
			.replace( /\.$/, "" ) /* 2 */;
	}

	// Minimum fraction digits (post string phase)
	if ( minimumFractionDigits ) {
		number = number.split( "." );
		number[ 1 ] = stringPad( number[ 1 ] || "", minimumFractionDigits, true );
		number = number.join( "." );
	}

	// Minimum integer digits
	if ( minimumIntegerDigits ) {
		number = number.split( "." );
		number[ 0 ] = stringPad( number[ 0 ], minimumIntegerDigits );
		number = number.join( "." );
	}

	return number;
};




/**
 * toPrecision( number, precision, round )
 *
 * @number (Number)
 *
 * @precision (Number) significant figures precision (not decimal precision).
 *
 * @round (Function)
 *
 * Return number.toPrecision( precision ) using the given round function.
 */
var numberToPrecision = function( number, precision, round ) {
	var roundOrder;

	if ( number === 0 ) {  // Fix #706
		return number;
	}

	roundOrder = Math.ceil( Math.log( Math.abs( number ) ) / Math.log( 10 ) );
	roundOrder -= precision;

	return round( number, { exponent: roundOrder } );
};




/**
 * toPrecision( number, minimumSignificantDigits, maximumSignificantDigits, round )
 *
 * @number [Number]
 *
 * @minimumSignificantDigits [Number]
 *
 * @maximumSignificantDigits [Number]
 *
 * @round [Function]
 *
 * Return the formatted significant digits number.
 */
var numberFormatSignificantDigits = function( number, minimumSignificantDigits, maximumSignificantDigits, round ) {
	var atMinimum, atMaximum;

	// Sanity check.
	if ( minimumSignificantDigits > maximumSignificantDigits ) {
		maximumSignificantDigits = minimumSignificantDigits;
	}

	atMinimum = numberToPrecision( number, minimumSignificantDigits, round );
	atMaximum = numberToPrecision( number, maximumSignificantDigits, round );

	// Use atMaximum only if it has more significant digits than atMinimum.
	number = +atMinimum === +atMaximum ? atMinimum : atMaximum;

	// Expand integer numbers, eg. 123e5 to 12300.
	number = ( +number ).toString( 10 );

	if ( ( /e/ ).test( number ) ) {
		throw createErrorUnsupportedFeature({
			feature: "integers out of (1e21, 1e-7)"
		});
	}

	// Add trailing zeros if necessary.
	if ( minimumSignificantDigits - number.replace( /^0+|\./g, "" ).length > 0 ) {
		number = number.split( "." );
		number[ 1 ] = stringPad( number[ 1 ] || "", minimumSignificantDigits - number[ 0 ].replace( /^0+/, "" ).length, true );
		number = number.join( "." );
	}

	return number;
};




/**
 * format( number, properties )
 *
 * @number [Number].
 *
 * @properties [Object] Output of number/format-properties.
 *
 * Return the formatted number.
 * ref: http://www.unicode.org/reports/tr35/tr35-numbers.html
 */
var numberFormat = function( number, properties, pluralGenerator ) {
	var aux, compactMap, infinitySymbol, maximumFractionDigits, maximumSignificantDigits,
		minimumFractionDigits, minimumIntegerDigits, minimumSignificantDigits, nanSymbol,
		nuDigitsMap, padding, prefix, primaryGroupingSize, pattern, round, roundIncrement,
		secondaryGroupingSize, stringToParts, suffix, symbolMap;

	padding = properties[ 1 ];
	minimumIntegerDigits = properties[ 2 ];
	minimumFractionDigits = properties[ 3 ];
	maximumFractionDigits = properties[ 4 ];
	minimumSignificantDigits = properties[ 5 ];
	maximumSignificantDigits = properties[ 6 ];
	roundIncrement = properties[ 7 ];
	primaryGroupingSize = properties[ 8 ];
	secondaryGroupingSize = properties[ 9 ];
	round = properties[ 15 ];
	infinitySymbol = properties[ 16 ];
	nanSymbol = properties[ 17 ];
	symbolMap = properties[ 18 ];
	nuDigitsMap = properties[ 19 ];
	compactMap = properties[ 20 ];

	// NaN
	if ( isNaN( number ) ) {
		return [ { type: "nan", value: nanSymbol } ];
	}

	if ( number < 0 ) {
		pattern = properties[ 12 ];
		prefix = properties[ 13 ];
		suffix = properties[ 14 ];
	} else {
		pattern = properties[ 11 ];
		prefix = properties[ 0 ];
		suffix = properties[ 10 ];
	}

	// For prefix, suffix, and number parts.
	stringToParts = function( string ) {
		var numberType = "integer",
			parts = [];

		// TODO Move the tokenization of all parts that don't depend on number into
		// format-properties.
		string.replace( /('([^']|'')+'|'')|./g, function( character, literal ) {

			// Literals
			if ( literal ) {
				partsPush( parts, "literal", removeLiteralQuotes( literal ) );
				return;
			}

			// Currency symbol
			if ( character === "\u00A4" ) {
				partsPush( parts, "currency", character );
				return;
			}

			// Symbols
			character = character.replace( /[.,\-+E%\u2030]/, function( symbol ) {
				if ( symbol === "." ) {
					numberType = "fraction";
				}
				partsPush( parts, numberSymbolName[symbol], symbolMap[ symbol ] );

				// "Erase" handled character.
				return "";
			});

			// Number
			character = character.replace( /[0-9]/, function( digit ) {

				// Numbering system
				if ( nuDigitsMap ) {
					digit = nuDigitsMap[ +digit ];
				}
				partsPush( parts, numberType, digit );

				// "Erase" handled character.
				return "";
			});

			// Etc
			character.replace( /./, function( etc ) {
				partsPush( parts, "literal", etc );
			});
		});
		return parts;
	};

	prefix = stringToParts( prefix );
	suffix = stringToParts( suffix );

	// Infinity
	if ( !isFinite( number ) ) {
		return prefix.concat(
			{ type: "infinity", value: infinitySymbol },
			suffix
		);
	}

	// Percent
	if ( pattern.indexOf( "%" ) !== -1 ) {
		number *= 100;

	// Per mille
	} else if ( pattern.indexOf( "\u2030" ) !== -1 ) {
		number *= 1000;
	}

	var compactPattern, compactDigits, compactProperties, divisor, numberExponent, pluralForm;

	// Compact mode: initial number digit processing
	if ( compactMap ) {
		numberExponent = Math.abs( Math.floor( number ) ).toString().length - 1;
		numberExponent = Math.min( numberExponent, compactMap.maxExponent );

		// Use default plural form to perform initial decimal shift
		if ( numberExponent >= 3 ) {
			compactPattern = compactMap[ numberExponent ] && compactMap[ numberExponent ].other;
		}

		if ( compactPattern === "0" ) {
			compactPattern = null;
		} else if ( compactPattern ) {
			compactDigits = compactPattern.split( "0" ).length - 1;
			divisor = numberExponent - ( compactDigits - 1 );
			number = number / Math.pow( 10, divisor );
		}
	}

	// Significant digit format
	if ( !isNaN( minimumSignificantDigits * maximumSignificantDigits ) ) {
		number = numberFormatSignificantDigits( number, minimumSignificantDigits,
			maximumSignificantDigits, round );

	// Integer and fractional format
	} else {
		number = numberFormatIntegerFractionDigits( number, minimumIntegerDigits,
			minimumFractionDigits, maximumFractionDigits, round, roundIncrement );
	}

	// Compact mode: apply formatting
	if ( compactMap && compactPattern ) {

		// Get plural form after possible roundings
		pluralForm = pluralGenerator ? pluralGenerator( +number ) : "other";

		compactPattern = compactMap[ numberExponent ][ pluralForm ] || compactPattern;
		compactProperties = compactPattern.match( numberCompactPatternRe );

		// TODO Move the tokenization of all parts that don't depend on number into
		// format-properties.
		aux = function( string ) {
			var parts = [];
			string.replace( /(\s+)|([^\s0]+)/g, function( garbage, space, compact ) {

				// Literals
				if ( space ) {
					partsPush( parts, "literal", space );
					return;
				}

				// Compact value
				if ( compact ) {
					partsPush( parts, "compact", compact );
					return;
				}
			});
			return parts;
		};

		// update prefix/suffix with compact prefix/suffix
		prefix = prefix.concat( aux( compactProperties[ 1 ] ) );
		suffix = aux( compactProperties[ 3 ] ).concat( suffix );
	}

	// Remove the possible number minus sign
	number = number.replace( /^-/, "" );

	// Grouping separators
	if ( primaryGroupingSize ) {
		number = numberFormatGroupingSeparator( number, primaryGroupingSize,
			secondaryGroupingSize );
	}

	// Scientific notation
	// TODO implement here

	// Padding/'([^']|'')+'|''|[.,\-+E%\u2030]/g
	// TODO implement here

	return prefix.concat(
		stringToParts( number ),
		suffix
	);
};




var numberToPartsFormatterFn = function( properties, pluralGenerator ) {
	return function numberToPartsFormatter( value ) {
		validateParameterPresence( value, "value" );
		validateParameterTypeNumber( value, "value" );

		return numberFormat( value, properties, pluralGenerator );
	};
};




function validateDigits( properties ) {
	var minimumIntegerDigits = properties[ 2 ],
		minimumFractionDigits = properties[ 3 ],
		maximumFractionDigits = properties[ 4 ],
		minimumSignificantDigits = properties[ 5 ],
		maximumSignificantDigits = properties[ 6 ];

	// Validate significant digit format properties
	if ( !isNaN( minimumSignificantDigits * maximumSignificantDigits ) ) {
		validateParameterRange( minimumSignificantDigits, "minimumSignificantDigits", 1, 21 );
		validateParameterRange( maximumSignificantDigits, "maximumSignificantDigits",
			minimumSignificantDigits, 21 );

	} else if ( !isNaN( minimumSignificantDigits ) || !isNaN( maximumSignificantDigits ) ) {
		throw new Error( "Neither or both the minimum and maximum significant digits must be " +
			"present" );

	// Validate integer and fractional format
	} else {
		validateParameterRange( minimumIntegerDigits, "minimumIntegerDigits", 1, 21 );
		validateParameterRange( minimumFractionDigits, "minimumFractionDigits", 0, 20 );
		validateParameterRange( maximumFractionDigits, "maximumFractionDigits",
			minimumFractionDigits, 20 );
	}
}

/**
 * .numberFormatter( [options] )
 *
 * @options [Object]:
 * - style: [String] "decimal" (default) or "percent".
 * - see also number/format options.
 *
 * Return a function that formats a number according to the given options and default/instance
 * locale.
 */
Globalize.numberFormatter =
Globalize.prototype.numberFormatter = function( options ) {
	var args, numberToPartsFormatter, returnFn;

	validateParameterTypePlainObject( options, "options" );

	options = options || {};
	args = [ options ];

	numberToPartsFormatter = this.numberToPartsFormatter( options );
	returnFn = numberFormatterFn( numberToPartsFormatter );
	runtimeBind( args, this.cldr, returnFn, [ numberToPartsFormatter ] );

	return returnFn;
};

/**
 * .numberToPartsFormatter( [options] )
 *
 * @options [Object]:
 * - style: [String] "symbol" (default), "accounting", "code" or "name".
 * - see also number/format options.
 *
 * Return a function that formats a number to parts according to the given options and
 * default/instance locale.
 */
Globalize.numberToPartsFormatter =
Globalize.prototype.numberToPartsFormatter = function( options ) {
	var args, cldr, fnArgs, pattern, properties, returnFn;

	validateParameterTypePlainObject( options, "options" );

	options = options || {};
	cldr = this.cldr;

	args = [ options ];

	validateDefaultLocale( cldr );

	cldr.on( "get", validateCldr );
	try {
		if ( options.raw ) {
			pattern = options.raw;
		} else {
			pattern = numberPattern( options.style || "decimal", cldr );
		}

		properties = numberFormatProperties( pattern, cldr, options );
		fnArgs = [ properties ];
	} finally {
		cldr.off( "get", validateCldr );
	}

	validateDigits( properties );

	if ( options.compact ) {
		fnArgs.push( this.pluralGenerator() );
	}
	returnFn = numberToPartsFormatterFn.apply( null, fnArgs );
	runtimeBind( args, cldr, returnFn, fnArgs );

	return returnFn;
};

/**
 * .numberParser( [options] )
 *
 * @options [Object]:
 * - style: [String] "decimal" (default) or "percent".
 *
 * Return the number parser according to the default/instance locale.
 */
Globalize.numberParser =
Globalize.prototype.numberParser = function( options ) {
	var args, cldr, pattern, properties, returnFn;

	validateParameterTypePlainObject( options, "options" );

	options = options || {};
	cldr = this.cldr;

	args = [ options ];

	validateDefaultLocale( cldr );
	if ( options.compact ) {
		throw createErrorUnsupportedFeature({
			feature: "compact number parsing (not implemented)"
		});
	}

	cldr.on( "get", validateCldr );

	if ( options.raw ) {
		pattern = options.raw;
	} else {
		pattern = numberPattern( options.style || "decimal", cldr );
	}

	properties = numberParseProperties( pattern, cldr, options );

	cldr.off( "get", validateCldr );

	returnFn = numberParserFn( properties );

	runtimeBind( args, cldr, returnFn, [ properties ] );

	return returnFn;
};

/**
 * .formatNumber( value [, options] )
 *
 * @value [Number] number to be formatted.
 *
 * @options [Object]: see number/format-properties.
 *
 * Format a number according to the given options and default/instance locale.
 */
Globalize.formatNumber =
Globalize.prototype.formatNumber = function( value, options ) {
	validateParameterPresence( value, "value" );
	validateParameterTypeNumber( value, "value" );

	return this.numberFormatter( options )( value );
};

/**
 * .formatNumberToParts( value [, options] )
 *
 * @value [Number] number to be formatted.
 *
 * @options [Object]: see number/format-properties.
 *
 * Format a number to pars according to the given options and default/instance locale.
 */
Globalize.formatNumberToParts =
Globalize.prototype.formatNumberToParts = function( value, options ) {
	validateParameterPresence( value, "value" );
	validateParameterTypeNumber( value, "value" );

	return this.numberToPartsFormatter( options )( value );
};

/**
 * .parseNumber( value [, options] )
 *
 * @value [String]
 *
 * @options [Object]: See numberParser().
 *
 * Return the parsed Number (including Infinity) or NaN when value is invalid.
 */
Globalize.parseNumber =
Globalize.prototype.parseNumber = function( value, options ) {
	validateParameterPresence( value, "value" );
	validateParameterTypeString( value, "value" );

	return this.numberParser( options )( value );
};

/**
 * Optimization to avoid duplicating some internal functions across modules.
 */
Globalize._createErrorUnsupportedFeature = createErrorUnsupportedFeature;
Globalize._numberNumberingSystem = numberNumberingSystem;
Globalize._numberNumberingSystemDigitsMap = numberNumberingSystemDigitsMap;
Globalize._numberPattern = numberPattern;
Globalize._numberSymbol = numberSymbol;
Globalize._looseMatching = looseMatching;
Globalize._removeLiteralQuotes = removeLiteralQuotes;
Globalize._stringPad = stringPad;
Globalize._validateParameterTypeNumber = validateParameterTypeNumber;
Globalize._validateParameterTypeString = validateParameterTypeString;

return Globalize;




}));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(define) {/**
 * Globalize v1.6.0
 *
 * http://github.com/jquery/globalize
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2020-09-08T11:54Z
 */
/*!
 * Globalize v1.6.0 2020-09-08T11:54Z Released under the MIT license
 * http://git.io/TrdQbw
 */
(function( root, factory ) {

	// UMD returnExports
	if ( typeof define === "function" && define.amd ) {

		// AMD
		define([
			"cldr",
			"../globalize",
			"cldr/event",
			"cldr/supplemental"
		], factory );
	} else if ( true ) {

		// Node, CommonJS
		module.exports = factory( __webpack_require__( 2 ), __webpack_require__( 1 ) );
	} else {}
}(this, function( Cldr, Globalize ) {

var runtimeBind = Globalize._runtimeBind,
	validateCldr = Globalize._validateCldr,
	validateDefaultLocale = Globalize._validateDefaultLocale,
	validateParameterPresence = Globalize._validateParameterPresence,
	validateParameterType = Globalize._validateParameterType,
	validateParameterTypePlainObject = Globalize._validateParameterTypePlainObject;
var MakePlural;
/* jshint ignore:start */
MakePlural = (function() {
'use strict';

var _toArray = function (arr) { return Array.isArray(arr) ? arr : Array.from(arr); };

var _toConsumableArray = function (arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();


/**
 * make-plural.js -- https://github.com/eemeli/make-plural.js/
 * Copyright (c) 2014-2015 by Eemeli Aro <eemeli@gmail.com>
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * The software is provided "as is" and the author disclaims all warranties
 * with regard to this software including all implied warranties of
 * merchantability and fitness. In no event shall the author be liable for
 * any special, direct, indirect, or consequential damages or any damages
 * whatsoever resulting from loss of use, data or profits, whether in an
 * action of contract, negligence or other tortious action, arising out of
 * or in connection with the use or performance of this software.
 */

var Parser = (function () {
    function Parser() {
        _classCallCheck(this, Parser);
    }

    _createClass(Parser, [{
        key: 'parse',
        value: function parse(cond) {
            var _this = this;

            if (cond === 'i = 0 or n = 1') {
                return 'n >= 0 && n <= 1';
            }if (cond === 'i = 0,1') {
                return 'n >= 0 && n < 2';
            }if (cond === 'i = 1 and v = 0') {
                this.v0 = 1;
                return 'n == 1 && v0';
            }
            return cond.replace(/([tv]) (!?)= 0/g, function (m, sym, noteq) {
                var sn = sym + '0';
                _this[sn] = 1;
                return noteq ? '!' + sn : sn;
            }).replace(/\b[fintv]\b/g, function (m) {
                _this[m] = 1;
                return m;
            }).replace(/([fin]) % (10+)/g, function (m, sym, num) {
                var sn = sym + num;
                _this[sn] = 1;
                return sn;
            }).replace(/n10+ = 0/g, 't0 && $&').replace(/(\w+ (!?)= )([0-9.]+,[0-9.,]+)/g, function (m, se, noteq, x) {
                if (m === 'n = 0,1') return '(n == 0 || n == 1)';
                if (noteq) return se + x.split(',').join(' && ' + se);
                return '(' + se + x.split(',').join(' || ' + se) + ')';
            }).replace(/(\w+) (!?)= ([0-9]+)\.\.([0-9]+)/g, function (m, sym, noteq, x0, x1) {
                if (Number(x0) + 1 === Number(x1)) {
                    if (noteq) return '' + sym + ' != ' + x0 + ' && ' + sym + ' != ' + x1;
                    return '(' + sym + ' == ' + x0 + ' || ' + sym + ' == ' + x1 + ')';
                }
                if (noteq) return '(' + sym + ' < ' + x0 + ' || ' + sym + ' > ' + x1 + ')';
                if (sym === 'n') {
                    _this.t0 = 1;return '(t0 && n >= ' + x0 + ' && n <= ' + x1 + ')';
                }
                return '(' + sym + ' >= ' + x0 + ' && ' + sym + ' <= ' + x1 + ')';
            }).replace(/ and /g, ' && ').replace(/ or /g, ' || ').replace(/ = /g, ' == ');
        }
    }, {
        key: 'vars',
        value: (function (_vars) {
            function vars() {
                return _vars.apply(this, arguments);
            }

            vars.toString = function () {
                return _vars.toString();
            };

            return vars;
        })(function () {
            var vars = [];
            if (this.i) vars.push('i = s[0]');
            if (this.f || this.v) vars.push('f = s[1] || \'\'');
            if (this.t) vars.push('t = (s[1] || \'\').replace(/0+$/, \'\')');
            if (this.v) vars.push('v = f.length');
            if (this.v0) vars.push('v0 = !s[1]');
            if (this.t0 || this.n10 || this.n100) vars.push('t0 = Number(s[0]) == n');
            for (var k in this) {
                if (/^.10+$/.test(k)) {
                    var k0 = k[0] === 'n' ? 't0 && s[0]' : k[0];
                    vars.push('' + k + ' = ' + k0 + '.slice(-' + k.substr(2).length + ')');
                }
            }if (!vars.length) return '';
            return 'var ' + ['s = String(n).split(\'.\')'].concat(vars).join(', ');
        })
    }]);

    return Parser;
})();



var MakePlural = (function () {
    function MakePlural(lc) {
        var _ref = arguments[1] === undefined ? MakePlural : arguments[1];

        var cardinals = _ref.cardinals;
        var ordinals = _ref.ordinals;

        _classCallCheck(this, MakePlural);

        if (!cardinals && !ordinals) throw new Error('At least one type of plural is required');
        this.lc = lc;
        this.categories = { cardinal: [], ordinal: [] };
        this.parser = new Parser();
        
        this.fn = this.buildFunction(cardinals, ordinals);
        this.fn._obj = this;
        this.fn.categories = this.categories;
        
        this.fn.toString = this.fnToString.bind(this);
        return this.fn;
    }

    _createClass(MakePlural, [{
        key: 'compile',
        value: function compile(type, req) {
            var cases = [];
            var rules = MakePlural.rules[type][this.lc];
            if (!rules) {
                if (req) throw new Error('Locale "' + this.lc + '" ' + type + ' rules not found');
                this.categories[type] = ['other'];
                return '\'other\'';
            }
            for (var r in rules) {
                var _rules$r$trim$split = rules[r].trim().split(/\s*@\w*/);

                var _rules$r$trim$split2 = _toArray(_rules$r$trim$split);

                var cond = _rules$r$trim$split2[0];
                var examples = _rules$r$trim$split2.slice(1);
                var cat = r.replace('pluralRule-count-', '');
                if (cond) cases.push([this.parser.parse(cond), cat]);
                
            }
            this.categories[type] = cases.map(function (c) {
                return c[1];
            }).concat('other');
            if (cases.length === 1) {
                return '(' + cases[0][0] + ') ? \'' + cases[0][1] + '\' : \'other\'';
            } else {
                return [].concat(_toConsumableArray(cases.map(function (c) {
                    return '(' + c[0] + ') ? \'' + c[1] + '\'';
                })), ['\'other\'']).join('\n      : ');
            }
        }
    }, {
        key: 'buildFunction',
        value: function buildFunction(cardinals, ordinals) {
            var _this3 = this;

            var compile = function compile(c) {
                return c ? (c[1] ? 'return ' : 'if (ord) return ') + _this3.compile.apply(_this3, _toConsumableArray(c)) : '';
            },
                fold = { vars: function vars(str) {
                    return ('  ' + str + ';').replace(/(.{1,78})(,|$) ?/g, '$1$2\n      ');
                },
                cond: function cond(str) {
                    return ('  ' + str + ';').replace(/(.{1,78}) (\|\| |$) ?/gm, '$1\n          $2');
                } },
                cond = [ordinals && ['ordinal', !cardinals], cardinals && ['cardinal', true]].map(compile).map(fold.cond),
                body = [fold.vars(this.parser.vars())].concat(_toConsumableArray(cond)).join('\n').replace(/\s+$/gm, '').replace(/^[\s;]*[\r\n]+/gm, ''),
                args = ordinals && cardinals ? 'n, ord' : 'n';
            return new Function(args, body);
        }
    }, {
        key: 'fnToString',
        value: function fnToString(name) {
            return Function.prototype.toString.call(this.fn).replace(/^function( \w+)?/, name ? 'function ' + name : 'function').replace('\n/**/', '');
        }
    }], [{
        key: 'load',
        value: function load() {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            args.forEach(function (cldr) {
                var data = cldr && cldr.supplemental || null;
                if (!data) throw new Error('Data does not appear to be CLDR data');
                MakePlural.rules = {
                    cardinal: data['plurals-type-cardinal'] || MakePlural.rules.cardinal,
                    ordinal: data['plurals-type-ordinal'] || MakePlural.rules.ordinal
                };
            });
            return MakePlural;
        }
    }]);

    return MakePlural;
})();



MakePlural.cardinals = true;
MakePlural.ordinals = false;
MakePlural.rules = { cardinal: {}, ordinal: {} };


return MakePlural;
}());
/* jshint ignore:end */


var validateParameterTypeNumber = function( value, name ) {
	validateParameterType(
		value,
		name,
		value === undefined || typeof value === "number",
		"Number"
	);
};




var validateParameterTypePluralType = function( value, name ) {
	validateParameterType(
		value,
		name,
		value === undefined || value === "cardinal" || value === "ordinal",
		"String \"cardinal\" or \"ordinal\""
	);
};




var pluralGeneratorFn = function( plural ) {
	return function pluralGenerator( value ) {
		validateParameterPresence( value, "value" );
		validateParameterTypeNumber( value, "value" );

		return plural( value );
	};
};




/**
 * .plural( value )
 *
 * @value [Number]
 *
 * Return the corresponding form (zero | one | two | few | many | other) of a
 * value given locale.
 */
Globalize.plural =
Globalize.prototype.plural = function( value, options ) {
	validateParameterPresence( value, "value" );
	validateParameterTypeNumber( value, "value" );
	return this.pluralGenerator( options )( value );
};

/**
 * .pluralGenerator( [options] )
 *
 * Return a plural function (of the form below).
 *
 * fn( value )
 *
 * @value [Number]
 *
 * Return the corresponding form (zero | one | two | few | many | other) of a value given the
 * default/instance locale.
 */
Globalize.pluralGenerator =
Globalize.prototype.pluralGenerator = function( options ) {
	var args, cldr, isOrdinal, plural, returnFn, type;

	validateParameterTypePlainObject( options, "options" );

	options = options || {};
	cldr = this.cldr;

	args = [ options ];
	type = options.type || "cardinal";

	validateParameterTypePluralType( options.type, "options.type" );

	validateDefaultLocale( cldr );

	isOrdinal = type === "ordinal";

	cldr.on( "get", validateCldr );
	try {
		cldr.supplemental([ "plurals-type-" + type, "{language}" ]);
	} finally {
		cldr.off( "get", validateCldr );
	}

	MakePlural.rules = {};
	MakePlural.rules[ type ] = cldr.supplemental( "plurals-type-" + type );

	plural = new MakePlural( cldr.attributes.language, {
		"ordinals": isOrdinal,
		"cardinals": !isOrdinal
	});

	returnFn = pluralGeneratorFn( plural );

	runtimeBind( args, cldr, returnFn, [ plural ] );

	return returnFn;
};

return Globalize;




}));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(define) {/*!
 * Globalize v1.6.0
 *
 * http://github.com/jquery/globalize
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2020-09-08T11:54Z
 */
(function( root, factory ) {

	// UMD returnExports
	if ( typeof define === "function" && define.amd ) {

		// AMD
		define([
			"cldr",
			"../globalize",
			"./number",
			"cldr/event",
			"cldr/supplemental"
		], factory );
	} else if ( true ) {

		// Node, CommonJS
		module.exports = factory( __webpack_require__( 2 ), __webpack_require__( 1 ) );
	} else {}
}(this, function( Cldr, Globalize ) {

var alwaysArray = Globalize._alwaysArray,
	createError = Globalize._createError,
	formatMessageToParts = Globalize._formatMessageToParts,
	numberNumberingSystem = Globalize._numberNumberingSystem,
	numberPattern = Globalize._numberPattern,
	partsJoin = Globalize._partsJoin,
	partsPush = Globalize._partsPush,
	runtimeBind = Globalize._runtimeBind,
	stringPad = Globalize._stringPad,
	validateCldr = Globalize._validateCldr,
	validateDefaultLocale = Globalize._validateDefaultLocale,
	validateParameterPresence = Globalize._validateParameterPresence,
	validateParameterType = Globalize._validateParameterType,
	validateParameterTypeNumber = Globalize._validateParameterTypeNumber,
	validateParameterTypePlainObject = Globalize._validateParameterTypePlainObject;


var createErrorPluralModulePresence = function() {
	return createError( "E_MISSING_PLURAL_MODULE", "Plural module not loaded." );
};




var validateParameterTypeCurrency = function( value, name ) {
	validateParameterType(
		value,
		name,
		value === undefined || typeof value === "string" && ( /^[A-Za-z]{3}$/ ).test( value ),
		"3-letter currency code string as defined by ISO 4217"
	);
};




var currencyFormatterFn = function( currencyToPartsFormatter ) {
	return function currencyFormatter( value ) {
		return partsJoin( currencyToPartsFormatter( value ));
	};
};




/**
 * supplementalOverride( currency, pattern, cldr )
 *
 * Return pattern with fraction digits overriden by supplemental currency data.
 */
var currencySupplementalOverride = function( currency, pattern, cldr ) {
	var digits,
		fraction = "",
		fractionData = cldr.supplemental([ "currencyData/fractions", currency ]) ||
			cldr.supplemental( "currencyData/fractions/DEFAULT" );

	digits = +fractionData._digits;

	if ( digits ) {
		fraction = "." + stringPad( "0", digits ).slice( 0, -1 ) + fractionData._rounding;
	}

	return pattern.replace( /\.(#+|0*[0-9]|0+[0-9]?)/g, fraction );
};




var objectFilter = function( object, testRe ) {
	var key,
		copy = {};

	for ( key in object ) {
		if ( testRe.test( key ) ) {
			copy[ key ] = object[ key ];
		}
	}

	return copy;
};




var currencyUnitPatterns = function( cldr ) {
	return objectFilter( cldr.main([
		"numbers",
		"currencyFormats-numberSystem-" + numberNumberingSystem( cldr )
	]), /^unitPattern/ );
};




/**
 * nameProperties( currency, cldr )
 *
 * Return number pattern with the appropriate currency code in as literal.
 */
var currencyNameProperties = function( currency, cldr ) {
	var pattern = numberPattern( "decimal", cldr );

	// The number of decimal places and the rounding for each currency is not locale-specific. Those
	// values overridden by Supplemental Currency Data.
	pattern = currencySupplementalOverride( currency, pattern, cldr );

	return {
		displayNames: objectFilter( cldr.main([
			"numbers/currencies",
			currency
		]), /^displayName/ ),
		pattern: pattern,
		unitPatterns: currencyUnitPatterns( cldr )
	};
};




/**
 * Unicode regular expression for: everything except math symbols, currency signs, dingbats, and
 * box-drawing characters.
 *
 * Generated by:
 *
 * regenerate()
 *   .addRange( 0x0, 0x10FFFF )
 *   .remove( require( "unicode-7.0.0/categories/S/symbols" ) ).toString();
 *
 * https://github.com/mathiasbynens/regenerate
 * https://github.com/mathiasbynens/unicode-7.0.0
 */
var regexpNotS = /[\0-#%-\*,-;\?-\]_a-\{\}\x7F-\xA1\xA7\xAA\xAB\xAD\xB2\xB3\xB5-\xB7\xB9-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376-\u0383\u0386-\u03F5\u03F7-\u0481\u0483-\u058C\u0590-\u0605\u0609\u060A\u060C\u060D\u0610-\u06DD\u06DF-\u06E8\u06EA-\u06FC\u06FF-\u07F5\u07F7-\u09F1\u09F4-\u09F9\u09FC-\u0AF0\u0AF2-\u0B6F\u0B71-\u0BF2\u0BFB-\u0C7E\u0C80-\u0D78\u0D7A-\u0E3E\u0E40-\u0F00\u0F04-\u0F12\u0F14\u0F18\u0F19\u0F20-\u0F33\u0F35\u0F37\u0F39-\u0FBD\u0FC6\u0FCD\u0FD0-\u0FD4\u0FD9-\u109D\u10A0-\u138F\u139A-\u17DA\u17DC-\u193F\u1941-\u19DD\u1A00-\u1B60\u1B6B-\u1B73\u1B7D-\u1FBC\u1FBE\u1FC2-\u1FCC\u1FD0-\u1FDC\u1FE0-\u1FEC\u1FF0-\u1FFC\u1FFF-\u2043\u2045-\u2051\u2053-\u2079\u207D-\u2089\u208D-\u209F\u20BE-\u20FF\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u218F\u2308-\u230B\u2329\u232A\u23FB-\u23FF\u2427-\u243F\u244B-\u249B\u24EA-\u24FF\u2768-\u2793\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2B74\u2B75\u2B96\u2B97\u2BBA-\u2BBC\u2BC9\u2BD2-\u2CE4\u2CEB-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u2FEF\u2FFC-\u3003\u3005-\u3011\u3014-\u301F\u3021-\u3035\u3038-\u303D\u3040-\u309A\u309D-\u318F\u3192-\u3195\u31A0-\u31BF\u31E4-\u31FF\u321F-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u32FF\u3400-\u4DBF\u4E00-\uA48F\uA4C7-\uA6FF\uA717-\uA71F\uA722-\uA788\uA78B-\uA827\uA82C-\uA835\uA83A-\uAA76\uAA7A-\uAB5A\uAB5C-\uD7FF\uDC00-\uFB28\uFB2A-\uFBB1\uFBC2-\uFDFB\uFDFE-\uFE61\uFE63\uFE67\uFE68\uFE6A-\uFF03\uFF05-\uFF0A\uFF0C-\uFF1B\uFF1F-\uFF3D\uFF3F\uFF41-\uFF5B\uFF5D\uFF5F-\uFFDF\uFFE7\uFFEF-\uFFFB\uFFFE\uFFFF]|\uD800[\uDC00-\uDD36\uDD40-\uDD78\uDD8A\uDD8B\uDD8D-\uDD8F\uDD9C-\uDD9F\uDDA1-\uDDCF\uDDFD-\uDFFF]|[\uD801\uD803-\uD819\uD81B-\uD82E\uD830-\uD833\uD836-\uD83A\uD83F-\uDBFF][\uDC00-\uDFFF]|\uD802[\uDC00-\uDC76\uDC79-\uDEC7\uDEC9-\uDFFF]|\uD81A[\uDC00-\uDF3B\uDF40-\uDF44\uDF46-\uDFFF]|\uD82F[\uDC00-\uDC9B\uDC9D-\uDFFF]|\uD834[\uDCF6-\uDCFF\uDD27\uDD28\uDD65-\uDD69\uDD6D-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDDDE-\uDDFF\uDE42-\uDE44\uDE46-\uDEFF\uDF57-\uDFFF]|\uD835[\uDC00-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFFF]|\uD83B[\uDC00-\uDEEF\uDEF2-\uDFFF]|\uD83C[\uDC2C-\uDC2F\uDC94-\uDC9F\uDCAF\uDCB0\uDCC0\uDCD0\uDCF6-\uDD0F\uDD2F\uDD6C-\uDD6F\uDD9B-\uDDE5\uDE03-\uDE0F\uDE3B-\uDE3F\uDE49-\uDE4F\uDE52-\uDEFF\uDF2D-\uDF2F\uDF7E\uDF7F\uDFCF-\uDFD3\uDFF8-\uDFFF]|\uD83D[\uDCFF\uDD4B-\uDD4F\uDD7A\uDDA4\uDE43\uDE44\uDED0-\uDEDF\uDEED-\uDEEF\uDEF4-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDFFF]|[\uD800-\uDBFF]/;




/**
 * symbolProperties( currency, cldr )
 *
 * Return pattern replacing `¤` with the appropriate currency symbol literal.
 */
var currencySymbolProperties = function( currency, cldr, options ) {
	var currencySpacing, pattern, symbol, symbolEntries,
		regexp = {
			"[:digit:]": /\d/,
			"[:^S:]": regexpNotS
		};

	if ( options.style === "code" ) {
		symbol = currency;
	} else {
		symbolEntries = [ "symbol" ];

		// If options.symbolForm === "narrow" was passed, prepend it.
		if ( options.symbolForm === "narrow" ) {
			symbolEntries.unshift( "symbol-alt-narrow" );
		}

		symbolEntries.some(function( symbolEntry ) {
			return symbol = cldr.main([
				"numbers/currencies",
				currency,
				symbolEntry
			]);
		});
	}

	currencySpacing = [ "beforeCurrency", "afterCurrency" ].map(function( position ) {
		return cldr.main([
			"numbers",
			"currencyFormats-numberSystem-" + numberNumberingSystem( cldr ),
			"currencySpacing",
			position
		]);
	});

	pattern = cldr.main([
		"numbers",
		"currencyFormats-numberSystem-" + numberNumberingSystem( cldr ),
		options.style === "accounting" ? "accounting" : "standard"
	]);

	pattern =

		// The number of decimal places and the rounding for each currency is not locale-specific.
		// Those values are overridden by Supplemental Currency Data.
		currencySupplementalOverride( currency, pattern, cldr )

		// Replace "¤" (\u00A4) with the appropriate symbol literal.
		.split( ";" ).map(function( pattern ) {

			return pattern.split( "\u00A4" ).map(function( part, i ) {
				var currencyMatch = regexp[ currencySpacing[ i ].currencyMatch ],
					surroundingMatch = regexp[ currencySpacing[ i ].surroundingMatch ],
					insertBetween = "";

				// For currencyMatch and surroundingMatch definitions, read [1].
				// When i === 0, beforeCurrency is being handled. Otherwise, afterCurrency.
				// 1: http://www.unicode.org/reports/tr35/tr35-numbers.html#Currencies
				currencyMatch = currencyMatch.test( symbol.charAt( i ? symbol.length - 1 : 0 ) );
				surroundingMatch = surroundingMatch.test(
					part.charAt( i ? 0 : part.length - 1 ).replace( /[#@,.]/g, "0" )
				);

				if ( currencyMatch && part && surroundingMatch ) {
					insertBetween = currencySpacing[ i ].insertBetween;
				}

				return ( i ? insertBetween : "" ) + part + ( i ? "" : insertBetween );
			}).join( "\u00A4" );
		}).join( ";" );

	return {
		pattern: pattern,
		symbol: symbol
	};
};




/**
 * nameFormat( formattedNumber, pluralForm, properties )
 *
 * Return the appropriate name form currency format.
 */
var currencyNameFormat = function( formattedNumber, pluralForm, properties ) {
	var displayName, unitPattern,
		parts = [],
		displayNames = properties.displayNames || {},
		unitPatterns = properties.unitPatterns;

	displayName = displayNames[ "displayName-count-" + pluralForm ] ||
		displayNames[ "displayName-count-other" ] ||
		displayNames.displayName ||
		properties.currency;
	unitPattern = unitPatterns[ "unitPattern-count-" + pluralForm ] ||
		unitPatterns[ "unitPattern-count-other" ];

	formatMessageToParts( unitPattern, [ formattedNumber, displayName ]).forEach(function( part ) {
		if ( part.type === "variable" && part.name === "0" ) {
			part.value.forEach(function( part ) {
				partsPush( parts, part.type, part.value );
			});
		} else if ( part.type === "variable" && part.name === "1" ) {
			partsPush( parts, "currency", part.value );
		} else {
			partsPush( parts, "literal", part.value );
		}
	});

	return parts;
};




/**
 * symbolFormat( parts, symbol )
 *
 * Return the appropriate symbol/account form format.
 */
var currencySymbolFormat = function( parts, symbol ) {
	parts.forEach(function( part ) {
		if ( part.type === "currency" ) {
			part.value = symbol;
		}
	});
	return parts;
};




var currencyToPartsFormatterFn = function( numberToPartsFormatter, pluralGenerator, properties ) {
	var fn;

	// Return formatter when style is "name".
	if ( pluralGenerator && properties ) {
		fn = function currencyToPartsFormatter( value ) {
			validateParameterPresence( value, "value" );
			validateParameterTypeNumber( value, "value" );
			return currencyNameFormat(
				numberToPartsFormatter( value ),
				pluralGenerator( value ),
				properties
			);
		};

	// Return formatter when style is "symbol", "accounting", or "code".
	} else {
		fn = function currencyToPartsFormatter( value ) {

			// 1: Reusing pluralGenerator argument, but in this case it is actually `symbol`
			return currencySymbolFormat( numberToPartsFormatter( value ), pluralGenerator /* 1 */ );
		};
	}

	return fn;
};




/**
 * objectOmit( object, keys )
 *
 * Return a copy of the object, filtered to omit the blacklisted key or array of keys.
 */
var objectOmit = function( object, keys ) {
	var key,
		copy = {};

	keys = alwaysArray( keys );

	for ( key in object ) {
		if ( keys.indexOf( key ) === -1 ) {
			copy[ key ] = object[ key ];
		}
	}

	return copy;
};




function validateRequiredCldr( path, value ) {
	validateCldr( path, value, {
		skip: [
			/numbers\/currencies\/[^/]+\/symbol-alt-/,
			/supplemental\/currencyData\/fractions\/[A-Za-z]{3}$/
		]
	});
}

/**
 * .currencyFormatter( currency [, options] )
 *
 * @currency [String] 3-letter currency code as defined by ISO 4217.
 *
 * @options [Object]:
 * - style: [String] "symbol" (default), "accounting", "code" or "name".
 * - see also number/format options.
 *
 * Return a function that formats a currency according to the given options and default/instance
 * locale.
 */
Globalize.currencyFormatter =
Globalize.prototype.currencyFormatter = function( currency, options ) {
	var args, currencyToPartsFormatter, returnFn;

	validateParameterPresence( currency, "currency" );
	validateParameterTypeCurrency( currency, "currency" );

	validateParameterTypePlainObject( options, "options" );

	options = options || {};
	args = [ currency, options ];

	currencyToPartsFormatter = this.currencyToPartsFormatter( currency, options );
	returnFn = currencyFormatterFn( currencyToPartsFormatter );
	runtimeBind( args, this.cldr, returnFn, [ currencyToPartsFormatter ] );

	return returnFn;
};

/**
 * .currencyToPartsFormatter( currency [, options] )
 *
 * @currency [String] 3-letter currency code as defined by ISO 4217.
 *
 * @options [Object]:
 * - style: [String] "symbol" (default), "accounting", "code" or "name".
 * - see also number/format options.
 *
 * Return a currency formatter function (of the form below) according to the given options and the
 * default/instance locale.
 *
 * fn( value )
 *
 * @value [Number]
 *
 * Return a function that formats a currency to parts according to the given options
 * and the default/instance locale.
 */
Globalize.currencyToPartsFormatter =
Globalize.prototype.currencyToPartsFormatter = function( currency, options ) {
	var args, cldr, numberToPartsFormatter, pluralGenerator, properties, returnFn, style;

	validateParameterPresence( currency, "currency" );
	validateParameterTypeCurrency( currency, "currency" );

	validateParameterTypePlainObject( options, "options" );

	cldr = this.cldr;
	options = options || {};

	args = [ currency, options ];
	style = options.style || "symbol";

	validateDefaultLocale( cldr );

	// Get properties given style ("symbol" default, "code" or "name").
	cldr.on( "get", validateRequiredCldr );
	try {
		properties = ({
			accounting: currencySymbolProperties,
			code: currencySymbolProperties,
			name: currencyNameProperties,
			symbol: currencySymbolProperties
		}[ style ] )( currency, cldr, options );
	} finally {
		cldr.off( "get", validateRequiredCldr );
	}

	// options = options minus style, plus raw pattern.
	options = objectOmit( options, "style" );
	options.raw = properties.pattern;

	// Return formatter when style is "symbol", "accounting", or "code".
	if ( style === "symbol" || style === "accounting" || style === "code" ) {
		numberToPartsFormatter = this.numberToPartsFormatter( options );

		returnFn = currencyToPartsFormatterFn( numberToPartsFormatter, properties.symbol );

		runtimeBind( args, cldr, returnFn, [ numberToPartsFormatter, properties.symbol ] );

	// Return formatter when style is "name".
	} else {
		numberToPartsFormatter = this.numberToPartsFormatter( options );

		// Is plural module present? Yes, use its generator. Nope, use an error generator.
		pluralGenerator = this.plural !== undefined ?
			this.pluralGenerator() :
			createErrorPluralModulePresence;

		returnFn = currencyToPartsFormatterFn(
			numberToPartsFormatter,
			pluralGenerator,
			properties
		);

		runtimeBind( args, cldr, returnFn, [
			numberToPartsFormatter,
			pluralGenerator,
			properties
		]);
	}

	return returnFn;
};

/**
 * .currencyParser( currency [, options] )
 *
 * @currency [String] 3-letter currency code as defined by ISO 4217.
 *
 * @options [Object] see currencyFormatter.
 *
 * Return the currency parser according to the given options and the default/instance locale.
 */
Globalize.currencyParser =
Globalize.prototype.currencyParser = function( /* currency, options */ ) {

	// TODO implement parser.

};

/**
 * .formatCurrency( value, currency [, options] )
 *
 * @value [Number] number to be formatted.
 *
 * @currency [String] 3-letter currency code as defined by ISO 4217.
 *
 * @options [Object] see currencyFormatter.
 *
 * Format a currency according to the given options and the default/instance locale.
 */
Globalize.formatCurrency =
Globalize.prototype.formatCurrency = function( value, currency, options ) {
	validateParameterPresence( value, "value" );
	validateParameterTypeNumber( value, "value" );
	return this.currencyFormatter( currency, options )( value );
};

/**
 * .formatCurrencyToParts( value, currency [, options] )
 *
 * @value [Number] number to be formatted.
 *
 * @currency [String] 3-letter currency code as defined by ISO 4217.
 *
 * @options [Object] see currencyFormatter.
 *
 * Format a currency to parts according to the given options and the default/instance locale.
 */
Globalize.formatCurrencyToParts =
Globalize.prototype.formatCurrencyToParts = function( value, currency, options ) {
	validateParameterPresence( value, "value" );
	validateParameterTypeNumber( value, "value" );
	return this.currencyToPartsFormatter( currency, options )( value );
};

/**
 * .parseCurrency( value, currency [, options] )
 *
 * @value [String]
 *
 * @currency [String] 3-letter currency code as defined by ISO 4217.
 *
 * @options [Object]: See currencyFormatter.
 *
 * Return the parsed currency or NaN when value is invalid.
 */
Globalize.parseCurrency =
Globalize.prototype.parseCurrency = function( /* value, currency, options */ ) {
};

return Globalize;




}));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(define) {/**
 * Globalize v1.6.0
 *
 * http://github.com/jquery/globalize
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2020-09-08T11:54Z
 */
/*!
 * Globalize v1.6.0 2020-09-08T11:54Z Released under the MIT license
 * http://git.io/TrdQbw
 */
(function( root, factory ) {

	// UMD returnExports
	if ( typeof define === "function" && define.amd ) {

		// AMD
		define([
			"cldr",
			"../globalize",
			"./number",
			"cldr/event",
			"cldr/supplemental"
		], factory );
	} else if ( true ) {

		// Node, CommonJS
		module.exports = factory( __webpack_require__( 2 ), __webpack_require__( 1 ) );
	} else {}
}(this, function( Cldr, Globalize ) {

var createError = Globalize._createError,
	createErrorUnsupportedFeature = Globalize._createErrorUnsupportedFeature,
	formatMessage = Globalize._formatMessage,
	isPlainObject = Globalize._isPlainObject,
	looseMatching = Globalize._looseMatching,
	numberNumberingSystemDigitsMap = Globalize._numberNumberingSystemDigitsMap,
	numberSymbol = Globalize._numberSymbol,
	partsJoin = Globalize._partsJoin,
	partsPush = Globalize._partsPush,
	regexpEscape = Globalize._regexpEscape,
	removeLiteralQuotes = Globalize._removeLiteralQuotes,
	runtimeBind = Globalize._runtimeBind,
	stringPad = Globalize._stringPad,
	validate = Globalize._validate,
	validateCldr = Globalize._validateCldr,
	validateDefaultLocale = Globalize._validateDefaultLocale,
	validateParameterPresence = Globalize._validateParameterPresence,
	validateParameterType = Globalize._validateParameterType,
	validateParameterTypePlainObject = Globalize._validateParameterTypePlainObject,
	validateParameterTypeString = Globalize._validateParameterTypeString;


var validateParameterTypeDate = function( value, name ) {
	validateParameterType( value, name, value === undefined || value instanceof Date, "Date" );
};




var createErrorInvalidParameterValue = function( name, value ) {
	return createError( "E_INVALID_PAR_VALUE", "Invalid `{name}` value ({value}).", {
		name: name,
		value: value
	});
};




/**
 * Create a map between the skeleton fields and their positions, e.g.,
 * {
 *   G: 0
 *   y: 1
 *   ...
 * }
 */
var validateSkeletonFieldsPosMap = "GyYuUrQqMLlwWEecdDFghHKkmsSAzZOvVXx".split( "" ).reduce(function( memo, item, i ) {
	memo[ item ] = i;
	return memo;
}, {});




/**
 * validateSkeleton( skeleton )
 *
 * skeleton: Assume `j` has already been converted into a localized hour field.
 */
var validateSkeleton = function validateSkeleton( skeleton ) {
	var last,

		// Using easier to read variable.
		fieldsPosMap = validateSkeletonFieldsPosMap;

	// "The fields are from the Date Field Symbol Table in Date Format Patterns"
	// Ref: http://www.unicode.org/reports/tr35/tr35-dates.html#availableFormats_appendItems
	// I.e., check for invalid characters.
	skeleton.replace( /[^GyYuUrQqMLlwWEecdDFghHKkmsSAzZOvVXx]/, function( field ) {
		throw createError(
			"E_INVALID_OPTIONS", "Invalid field `{invalidField}` of skeleton `{value}`",
			{
				invalidField: field,
				type: "skeleton",
				value: skeleton
			}
		);
	});

	// "The canonical order is from top to bottom in that table; that is, yM not My".
	// http://www.unicode.org/reports/tr35/tr35-dates.html#availableFormats_appendItems
	// I.e., check for invalid order.
	skeleton.split( "" ).every(function( field ) {
		if ( fieldsPosMap[ field ] < last ) {
			throw createError(
				"E_INVALID_OPTIONS", "Invalid order `{invalidField}` of skeleton `{value}`",
				{
					invalidField: field,
					type: "skeleton",
					value: skeleton
				}
			);
		}
		last = fieldsPosMap[ field ];
		return true;
	});
};




/**
 * Returns a new object created by using `object`'s values as keys, and the keys as values.
 */
var objectInvert = function( object, fn ) {
	fn = fn || function( object, key, value ) {
		object[ value ] = key;
		return object;
	};
	return Object.keys( object ).reduce(function( newObject, key ) {
		return fn( newObject, key, object[ key ] );
	}, {});
};




// Invert key and values, e.g., {"e": "eEc"} ==> {"e": "e", "E": "e", "c": "e"}.
var dateExpandPatternSimilarFieldsMap = objectInvert({
	"e": "eEc",
	"L": "ML"
}, function( object, key, value ) {
	value.split( "" ).forEach(function( field ) {
		object[ field ] = key;
	});
	return object;
});




var dateExpandPatternNormalizePatternType = function( character ) {
	return dateExpandPatternSimilarFieldsMap[ character ] || character;
};




var datePatternRe = ( /([a-z])\1*|'([^']|'')+'|''|./ig );




var stringRepeat = function( str, count ) {
	var i, result = "";
	for ( i = 0; i < count; i++ ) {
		result = result + str;
	}
	return result;
};




function expandBestMatchFormat( skeletonWithoutFractionalSeconds, bestMatchFormat ) {
	var i, j, bestMatchFormatParts, matchedType, matchedLength, requestedType,
		requestedLength, requestedSkeletonParts,

		// Using an easier to read variable.
		normalizePatternType = dateExpandPatternNormalizePatternType;

	requestedSkeletonParts = skeletonWithoutFractionalSeconds.match( datePatternRe );
	bestMatchFormatParts = bestMatchFormat.match( datePatternRe );

	for ( i = 0; i < bestMatchFormatParts.length; i++ ) {
		matchedType = bestMatchFormatParts[i].charAt( 0 );
		matchedLength = bestMatchFormatParts[i].length;
		for ( j = 0; j < requestedSkeletonParts.length; j++ ) {
			requestedType = requestedSkeletonParts[j].charAt( 0 );
			requestedLength = requestedSkeletonParts[j].length;
			if ( normalizePatternType( matchedType ) === normalizePatternType( requestedType ) &&
				matchedLength < requestedLength
			) {
				bestMatchFormatParts[i] = stringRepeat( matchedType, requestedLength );
			}
		}
	}

	return bestMatchFormatParts.join( "" );
}

// See: http://www.unicode.org/reports/tr35/tr35-dates.html#Matching_Skeletons
var dateExpandPatternAugmentFormat = function( requestedSkeleton, bestMatchFormat, decimalSeparator ) {
	var countOfFractionalSeconds, fractionalSecondMatch, lastSecondIdx,
		skeletonWithoutFractionalSeconds;

	fractionalSecondMatch = requestedSkeleton.match( /S/g );
	countOfFractionalSeconds = fractionalSecondMatch ? fractionalSecondMatch.length : 0;
	skeletonWithoutFractionalSeconds = requestedSkeleton.replace( /S/g, "" );

	bestMatchFormat = expandBestMatchFormat( skeletonWithoutFractionalSeconds, bestMatchFormat );

	lastSecondIdx = bestMatchFormat.lastIndexOf( "s" );
	if ( lastSecondIdx !== -1 && countOfFractionalSeconds !== 0 ) {
		bestMatchFormat =
			bestMatchFormat.slice( 0, lastSecondIdx + 1 ) +
			decimalSeparator +
			stringRepeat( "S", countOfFractionalSeconds ) +
			bestMatchFormat.slice( lastSecondIdx + 1 );
	}
	return bestMatchFormat;
};




var dateExpandPatternCompareFormats = function( formatA, formatB ) {
	var a, b, distance, lenA, lenB, typeA, typeB, i, j,

		// Using easier to read variables.
		normalizePatternType = dateExpandPatternNormalizePatternType;

	if ( formatA === formatB ) {
		return 0;
	}

	formatA = formatA.match( datePatternRe );
	formatB = formatB.match( datePatternRe );

	if ( formatA.length !== formatB.length ) {
		return -1;
	}

	distance = 1;
	for ( i = 0; i < formatA.length; i++ ) {
		a = formatA[ i ].charAt( 0 );
		typeA = normalizePatternType( a );
		typeB = null;
		for ( j = 0; j < formatB.length; j++ ) {
			b = formatB[ j ].charAt( 0 );
			typeB = normalizePatternType( b );
			if ( typeA === typeB ) {
				break;
			} else {
				typeB = null;
			}
		}
		if ( typeB === null ) {
			return -1;
		}
		lenA = formatA[ i ].length;
		lenB = formatB[ j ].length;
		distance = distance + Math.abs( lenA - lenB );

		// Most symbols have a small distance from each other, e.g., M ≅ L; E ≅ c; a ≅ b ≅ B;
		// H ≅ k ≅ h ≅ K; ...
		if ( a !== b ) {
			distance += 1;
		}

		// Numeric (l<3) and text fields (l>=3) are given a larger distance from each other.
		if ( ( lenA < 3 && lenB >= 3 ) || ( lenA >= 3 && lenB < 3 ) ) {
			distance += 20;
		}
	}
	return distance;
};




var dateExpandPatternGetBestMatchPattern = function( cldr, askedSkeleton ) {
	var availableFormats, decimalSeparator, pattern, ratedFormats, skeleton,
		path = "dates/calendars/gregorian/dateTimeFormats/availableFormats",

		// Using easier to read variables.
		augmentFormat = dateExpandPatternAugmentFormat,
		compareFormats = dateExpandPatternCompareFormats;

	pattern = cldr.main([ path, askedSkeleton ]);

	if ( askedSkeleton && !pattern ) {
		availableFormats = cldr.main([ path ]);
		ratedFormats = [];

		for ( skeleton in availableFormats ) {
			ratedFormats.push({
				skeleton: skeleton,
				pattern: availableFormats[ skeleton ],
				rate: compareFormats( askedSkeleton, skeleton )
			});
		}

		ratedFormats = ratedFormats
			.filter( function( format ) {
				return format.rate > -1;
			} )
			.sort( function( formatA, formatB ) {
				return formatA.rate - formatB.rate;
			});

		if ( ratedFormats.length ) {
			decimalSeparator = numberSymbol( "decimal", cldr );
			pattern = augmentFormat( askedSkeleton, ratedFormats[0].pattern, decimalSeparator );
		}
	}

	return pattern;
};




/**
 * expandPattern( options, cldr )
 *
 * @options [Object] if String, it's considered a skeleton. Object accepts:
 * - skeleton: [String] lookup availableFormat;
 * - date: [String] ( "full" | "long" | "medium" | "short" );
 * - time: [String] ( "full" | "long" | "medium" | "short" );
 * - datetime: [String] ( "full" | "long" | "medium" | "short" );
 * - raw: [String] For more info see datetime/format.js.
 *
 * @cldr [Cldr instance].
 *
 * Return the corresponding pattern.
 * Eg for "en":
 * - "GyMMMd" returns "MMM d, y G";
 * - { skeleton: "GyMMMd" } returns "MMM d, y G";
 * - { date: "full" } returns "EEEE, MMMM d, y";
 * - { time: "full" } returns "h:mm:ss a zzzz";
 * - { datetime: "full" } returns "EEEE, MMMM d, y 'at' h:mm:ss a zzzz";
 * - { raw: "dd/mm" } returns "dd/mm";
 */
var dateExpandPattern = function( options, cldr ) {
	var dateSkeleton, result, skeleton, timeSkeleton, type,

		// Using easier to read variables.
		getBestMatchPattern = dateExpandPatternGetBestMatchPattern;

	function combineDateTime( type, datePattern, timePattern ) {
		return formatMessage(
			cldr.main([
				"dates/calendars/gregorian/dateTimeFormats",
				type
			]),
			[ timePattern, datePattern ]
		);
	}

	switch ( true ) {
		case "skeleton" in options:
			skeleton = options.skeleton;

			// Preferred hour (j).
			skeleton = skeleton.replace( /j/g, function() {
				return cldr.supplemental.timeData.preferred();
			});

			validateSkeleton( skeleton );

			// Try direct map (note that getBestMatchPattern handles it).
			// ... or, try to "best match" the whole skeleton.
			result = getBestMatchPattern(
				cldr,
				skeleton
			);
			if ( result ) {
				break;
			}

			// ... or, try to "best match" the date and time parts individually.
			timeSkeleton = skeleton.split( /[^hHKkmsSAzZOvVXx]/ ).slice( -1 )[ 0 ];
			dateSkeleton = skeleton.split( /[^GyYuUrQqMLlwWdDFgEec]/ )[ 0 ];
			dateSkeleton = getBestMatchPattern(
				cldr,
				dateSkeleton
			);
			timeSkeleton = getBestMatchPattern(
				cldr,
				timeSkeleton
			);

			if ( /(MMMM|LLLL).*[Ec]/.test( dateSkeleton ) ) {
				type = "full";
			} else if ( /MMMM|LLLL/.test( dateSkeleton ) ) {
				type = "long";
			} else if ( /MMM|LLL/.test( dateSkeleton ) ) {
				type = "medium";
			} else {
				type = "short";
			}

			if ( dateSkeleton && timeSkeleton ) {
				result = combineDateTime( type, dateSkeleton, timeSkeleton );
			} else {
				result = dateSkeleton || timeSkeleton;
			}

			break;

		case "date" in options:
		case "time" in options:
			result = cldr.main([
				"dates/calendars/gregorian",
				"date" in options ? "dateFormats" : "timeFormats",
				( options.date || options.time )
			]);
			break;

		case "datetime" in options:
			result = combineDateTime( options.datetime,
				cldr.main([ "dates/calendars/gregorian/dateFormats", options.datetime ]),
				cldr.main([ "dates/calendars/gregorian/timeFormats", options.datetime ])
			);
			break;

		case "raw" in options:
			result = options.raw;
			break;

		default:
			throw createErrorInvalidParameterValue({
				name: "options",
				value: options
			});
	}

	return result;
};




var dateWeekDays = [ "sun", "mon", "tue", "wed", "thu", "fri", "sat" ];




/**
 * firstDayOfWeek
 */
var dateFirstDayOfWeek = function( cldr ) {
	return dateWeekDays.indexOf( cldr.supplemental.weekData.firstDay() );
};




/**
 * getTimeZoneName( length, type )
 */
var dateGetTimeZoneName = function( length, type, timeZone, cldr ) {
	var metaZone, result;

	if ( !timeZone ) {
		return;
	}

	result = cldr.main([
		"dates/timeZoneNames/zone",
		timeZone,
		length < 4 ? "short" : "long",
		type
	]);

	if ( result ) {
		return result;
	}

	// The latest metazone data of the metazone array.
	// TODO expand to support the historic metazones based on the given date.
	metaZone = cldr.supplemental([
		"metaZones/metazoneInfo/timezone", timeZone, 0,
		"usesMetazone/_mzone"
	]);

	return cldr.main([
		"dates/timeZoneNames/metazone",
		metaZone,
		length < 4 ? "short" : "long",
		type
	]);
};




/**
 * timezoneHourFormatShortH( hourFormat )
 *
 * @hourFormat [String]
 *
 * Unofficial deduction of the short hourFormat given time zone `hourFormat` element.
 * Official spec is pending resolution: http://unicode.org/cldr/trac/ticket/8293
 *
 * Example:
 * - "+HH.mm;-HH.mm" => "+H;-H"
 * - "+HH:mm;-HH:mm" => "+H;-H"
 * - "+HH:mm;−HH:mm" => "+H;−H" (Note MINUS SIGN \u2212)
 * - "+HHmm;-HHmm" => "+H:-H"
 */
var dateTimezoneHourFormatH = function( hourFormat ) {
	return hourFormat
		.split( ";" )
		.map(function( format ) {
			return format.slice( 0, format.indexOf( "H" ) + 1 );
		})
		.join( ";" );
};




/**
 * timezoneHourFormatLongHm( hourFormat )
 *
 * @hourFormat [String]
 *
 * Unofficial deduction of the short hourFormat given time zone `hourFormat` element.
 * Official spec is pending resolution: http://unicode.org/cldr/trac/ticket/8293
 *
 * Example (hFormat === "H"): (used for short Hm)
 * - "+HH.mm;-HH.mm" => "+H.mm;-H.mm"
 * - "+HH:mm;-HH:mm" => "+H:mm;-H:mm"
 * - "+HH:mm;−HH:mm" => "+H:mm;−H:mm" (Note MINUS SIGN \u2212)
 * - "+HHmm;-HHmm" => "+Hmm:-Hmm"
 *
 * Example (hFormat === "HH": (used for long Hm)
 * - "+HH.mm;-HH.mm" => "+HH.mm;-HH.mm"
 * - "+HH:mm;-HH:mm" => "+HH:mm;-HH:mm"
 * - "+H:mm;-H:mm"   => "+HH:mm;-HH:mm"
 * - "+HH:mm;−HH:mm" => "+HH:mm;−HH:mm" (Note MINUS SIGN \u2212)
 * - "+HHmm;-HHmm" => "+HHmm:-HHmm"
 */
var dateTimezoneHourFormatHm = function( hourFormat, hFormat ) {
	return hourFormat
		.split( ";" )
		.map(function( format ) {
			var parts = format.split( /H+/ );
			parts.splice( 1, 0, hFormat );
			return parts.join( "" );
		})
		.join( ";" );
};




var runtimeCacheDataBind = function( key, data ) {
	var fn = function() {
		return data;
	};
	fn.dataCacheKey = key;
	return fn;
};




/**
 * properties( pattern, cldr )
 *
 * @pattern [String] raw pattern.
 * ref: http://www.unicode.org/reports/tr35/tr35-dates.html#Date_Format_Patterns
 *
 * @cldr [Cldr instance].
 *
 * Return the properties given the pattern and cldr.
 *
 * TODO Support other calendar types.
 */
var dateFormatProperties = function( pattern, cldr, timeZone ) {
	var properties = {
			numberFormatters: {},
			pattern: pattern,
			timeSeparator: numberSymbol( "timeSeparator", cldr )
		},
		widths = [ "abbreviated", "wide", "narrow" ];

	function setNumberFormatterPattern( pad ) {
		properties.numberFormatters[ pad ] = stringPad( "", pad );
	}

	if ( timeZone ) {
		properties.timeZoneData = runtimeCacheDataBind( "iana/" + timeZone, {
			offsets: cldr.get([ "globalize-iana/zoneData", timeZone, "offsets" ]),
			untils: cldr.get([ "globalize-iana/zoneData", timeZone, "untils" ]),
			isdsts: cldr.get([ "globalize-iana/zoneData", timeZone, "isdsts" ])
		});
	}

	pattern.replace( datePatternRe, function( current ) {
		var aux, chr, daylightTzName, formatNumber, genericTzName, length, standardTzName;

		chr = current.charAt( 0 );
		length = current.length;

		if ( chr === "j" ) {

			// Locale preferred hHKk.
			// http://www.unicode.org/reports/tr35/tr35-dates.html#Time_Data
			properties.preferredTime = chr = cldr.supplemental.timeData.preferred();
		}

		// ZZZZ: same as "OOOO".
		if ( chr === "Z" && length === 4 ) {
			chr = "O";
			length = 4;
		}

		// z...zzz: "{shortRegion}", eg. "PST" or "PDT".
		// zzzz: "{regionName} {Standard Time}" or "{regionName} {Daylight Time}",
		//       e.g., "Pacific Standard Time" or "Pacific Daylight Time".
		// http://unicode.org/reports/tr35/tr35-dates.html#Date_Format_Patterns
		if ( chr === "z" ) {
			standardTzName = dateGetTimeZoneName( length, "standard", timeZone, cldr );
			daylightTzName = dateGetTimeZoneName( length, "daylight", timeZone, cldr );
			if ( standardTzName ) {
				properties.standardTzName = standardTzName;
			}
			if ( daylightTzName ) {
				properties.daylightTzName = daylightTzName;
			}

			// Fall through the "O" format in case one name is missing.
			if ( !standardTzName || !daylightTzName ) {
				chr = "O";
				if ( length < 4 ) {
					length = 1;
				}
			}
		}

		// v...vvv: "{shortRegion}", eg. "PT".
		// vvvv: "{regionName} {Time}" or "{regionName} {Time}",
		// e.g., "Pacific Time"
		// http://unicode.org/reports/tr35/tr35-dates.html#Date_Format_Patterns
		if ( chr === "v" ) {
			genericTzName = dateGetTimeZoneName( length, "generic", timeZone, cldr );

			// Fall back to "V" format.
			if ( !genericTzName ) {
				chr = "V";
				length = 4;
			}
		}

		switch ( chr ) {

			// Era
			case "G":
				properties.eras = cldr.main([
					"dates/calendars/gregorian/eras",
					length <= 3 ? "eraAbbr" : ( length === 4 ? "eraNames" : "eraNarrow" )
				]);
				break;

			// Year
			case "y":

				// Plain year.
				formatNumber = true;
				break;

			case "Y":

				// Year in "Week of Year"
				properties.firstDay = dateFirstDayOfWeek( cldr );
				properties.minDays = cldr.supplemental.weekData.minDays();
				formatNumber = true;
				break;

			case "u": // Extended year. Need to be implemented.
			case "U": // Cyclic year name. Need to be implemented.
				throw createErrorUnsupportedFeature({
					feature: "year pattern `" + chr + "`"
				});

			// Quarter
			case "Q":
			case "q":
				if ( length > 2 ) {
					if ( !properties.quarters ) {
						properties.quarters = {};
					}
					if ( !properties.quarters[ chr ] ) {
						properties.quarters[ chr ] = {};
					}
					properties.quarters[ chr ][ length ] = cldr.main([
						"dates/calendars/gregorian/quarters",
						chr === "Q" ? "format" : "stand-alone",
						widths[ length - 3 ]
					]);
				} else {
					formatNumber = true;
				}
				break;

			// Month
			case "M":
			case "L":
				if ( length > 2 ) {
					if ( !properties.months ) {
						properties.months = {};
					}
					if ( !properties.months[ chr ] ) {
						properties.months[ chr ] = {};
					}
					properties.months[ chr ][ length ] = cldr.main([
						"dates/calendars/gregorian/months",
						chr === "M" ? "format" : "stand-alone",
						widths[ length - 3 ]
					]);
				} else {
					formatNumber = true;
				}
				break;

			// Week - Week of Year (w) or Week of Month (W).
			case "w":
			case "W":
				properties.firstDay = dateFirstDayOfWeek( cldr );
				properties.minDays = cldr.supplemental.weekData.minDays();
				formatNumber = true;
				break;

			// Day
			case "d":
			case "D":
			case "F":
				formatNumber = true;
				break;

			case "g":

				// Modified Julian day. Need to be implemented.
				throw createErrorUnsupportedFeature({
					feature: "Julian day pattern `g`"
				});

			// Week day
			case "e":
			case "c":
				if ( length <= 2 ) {
					properties.firstDay = dateFirstDayOfWeek( cldr );
					formatNumber = true;
					break;
				}

			/* falls through */
			case "E":
				if ( !properties.days ) {
					properties.days = {};
				}
				if ( !properties.days[ chr ] ) {
					properties.days[ chr ] = {};
				}
				if ( length === 6 ) {

					// If short day names are not explicitly specified, abbreviated day names are
					// used instead.
					// http://www.unicode.org/reports/tr35/tr35-dates.html#months_days_quarters_eras
					// http://unicode.org/cldr/trac/ticket/6790
					properties.days[ chr ][ length ] = cldr.main([
							"dates/calendars/gregorian/days",
							chr === "c" ? "stand-alone" : "format",
							"short"
						]) || cldr.main([
							"dates/calendars/gregorian/days",
							chr === "c" ? "stand-alone" : "format",
							"abbreviated"
						]);
				} else {
					properties.days[ chr ][ length ] = cldr.main([
						"dates/calendars/gregorian/days",
						chr === "c" ? "stand-alone" : "format",
						widths[ length < 3 ? 0 : length - 3 ]
					]);
				}
				break;

			// Period (AM or PM)
			case "a":
				properties.dayPeriods = {
					am: cldr.main(
						"dates/calendars/gregorian/dayPeriods/format/wide/am"
					),
					pm: cldr.main(
						"dates/calendars/gregorian/dayPeriods/format/wide/pm"
					)
				};
				break;

			// Hour
			case "h": // 1-12
			case "H": // 0-23
			case "K": // 0-11
			case "k": // 1-24

			// Minute
			case "m":

			// Second
			case "s":
			case "S":
			case "A":
				formatNumber = true;
				break;

			// Zone
			case "v":
				if ( length !== 1 && length !== 4 ) {
					throw createErrorUnsupportedFeature({
						feature: "timezone pattern `" + pattern + "`"
					});
				}
				properties.genericTzName = genericTzName;
				break;

			case "V":

				if ( length === 1 ) {
					throw createErrorUnsupportedFeature({
						feature: "timezone pattern `" + pattern + "`"
					});
				}

				if ( timeZone ) {
					if ( length === 2 ) {
						properties.timeZoneName = timeZone;
						break;
					}

					var timeZoneName,
						exemplarCity = cldr.main([
							"dates/timeZoneNames/zone", timeZone, "exemplarCity"
						]);

					if ( length === 3 ) {
						if ( !exemplarCity ) {
							exemplarCity = cldr.main([
								"dates/timeZoneNames/zone/Etc/Unknown/exemplarCity"
							]);
						}
						timeZoneName = exemplarCity;
					}

					if ( exemplarCity && length === 4 ) {
						timeZoneName = formatMessage(
							cldr.main(
								"dates/timeZoneNames/regionFormat"
							),
							[ exemplarCity ]
						);
					}

					if ( timeZoneName ) {
						properties.timeZoneName = timeZoneName;
						break;
					}
				}

				if ( current === "v" ) {
					length = 1;
				}

			/* falls through */
			case "O":

				// O: "{gmtFormat}+H;{gmtFormat}-H" or "{gmtZeroFormat}", eg. "GMT-8" or "GMT".
				// OOOO: "{gmtFormat}{hourFormat}" or "{gmtZeroFormat}", eg. "GMT-08:00" or "GMT".
				properties.gmtFormat = cldr.main( "dates/timeZoneNames/gmtFormat" );
				properties.gmtZeroFormat = cldr.main( "dates/timeZoneNames/gmtZeroFormat" );

				// Unofficial deduction of the hourFormat variations.
				// Official spec is pending resolution: http://unicode.org/cldr/trac/ticket/8293
				aux = cldr.main( "dates/timeZoneNames/hourFormat" );
				properties.hourFormat = length < 4 ?
					[ dateTimezoneHourFormatH( aux ), dateTimezoneHourFormatHm( aux, "H" ) ] :
					dateTimezoneHourFormatHm( aux, "HH" );

			/* falls through */
			case "Z":
			case "X":
			case "x":
				setNumberFormatterPattern( 1 );
				setNumberFormatterPattern( 2 );
				break;
		}

		if ( formatNumber ) {
			setNumberFormatterPattern( length );
		}
	});

	return properties;
};




var dateFormatterFn = function( dateToPartsFormatter ) {
	return function dateFormatter( value ) {
		return partsJoin( dateToPartsFormatter( value ));
	};
};




/**
 * parseProperties( cldr )
 *
 * @cldr [Cldr instance].
 *
 * @timeZone [String] FIXME.
 *
 * Return parser properties.
 */
var dateParseProperties = function( cldr, timeZone ) {
	var properties = {
		preferredTimeData: cldr.supplemental.timeData.preferred()
	};

	if ( timeZone ) {
		properties.timeZoneData = runtimeCacheDataBind( "iana/" + timeZone, {
			offsets: cldr.get([ "globalize-iana/zoneData", timeZone, "offsets" ]),
			untils: cldr.get([ "globalize-iana/zoneData", timeZone, "untils" ]),
			isdsts: cldr.get([ "globalize-iana/zoneData", timeZone, "isdsts" ])
		});
	}

	return properties;
};


var ZonedDateTime = (function() {
function definePrivateProperty(object, property, value) {
  Object.defineProperty(object, property, {
    value: value
  });
}

function getUntilsIndex(original, untils) {
  var index = 0;
  var originalTime = original.getTime();

  // TODO Should we do binary search for improved performance?
  while (index < untils.length - 1 && originalTime >= untils[index]) {
    index++;
  }
  return index;
}

function setWrap(fn) {
  var offset1 = this.getTimezoneOffset();
  var ret = fn();
  this.original.setTime(new Date(this.getTime()));
  var offset2 = this.getTimezoneOffset();
  if (offset2 - offset1) {
    this.original.setMinutes(this.original.getMinutes() + offset2 - offset1);
  }
  return ret;
}

var ZonedDateTime = function(date, timeZoneData) {
  definePrivateProperty(this, "original", new Date(date.getTime()));
  definePrivateProperty(this, "local", new Date(date.getTime()));
  definePrivateProperty(this, "timeZoneData", timeZoneData);
  definePrivateProperty(this, "setWrap", setWrap);
  if (!(timeZoneData.untils && timeZoneData.offsets && timeZoneData.isdsts)) {
    throw new Error("Invalid IANA data");
  }
  this.setTime(this.local.getTime() - this.getTimezoneOffset() * 60 * 1000);
};

ZonedDateTime.prototype.clone = function() {
  return new ZonedDateTime(this.original, this.timeZoneData);
};

// Date field getters.
["getFullYear", "getMonth", "getDate", "getDay", "getHours", "getMinutes",
"getSeconds", "getMilliseconds"].forEach(function(method) {
  // Corresponding UTC method, e.g., "getUTCFullYear" if method === "getFullYear".
  var utcMethod = "getUTC" + method.substr(3);
  ZonedDateTime.prototype[method] = function() {
    return this.local[utcMethod]();
  };
});

// Note: Define .valueOf = .getTime for arithmetic operations like date1 - date2.
ZonedDateTime.prototype.valueOf =
ZonedDateTime.prototype.getTime = function() {
  return this.local.getTime() + this.getTimezoneOffset() * 60 * 1000;
};

ZonedDateTime.prototype.getTimezoneOffset = function() {
  var index = getUntilsIndex(this.original, this.timeZoneData.untils);
  return this.timeZoneData.offsets[index];
};

// Date field setters.
["setFullYear", "setMonth", "setDate", "setHours", "setMinutes", "setSeconds", "setMilliseconds"].forEach(function(method) {
  // Corresponding UTC method, e.g., "setUTCFullYear" if method === "setFullYear".
  var utcMethod = "setUTC" + method.substr(3);
  ZonedDateTime.prototype[method] = function(value) {
    var local = this.local;
    // Note setWrap is needed for seconds and milliseconds just because
    // abs(value) could be >= a minute.
    return this.setWrap(function() {
      return local[utcMethod](value);
    });
  };
});

ZonedDateTime.prototype.setTime = function(time) {
  return this.local.setTime(time);
};

ZonedDateTime.prototype.isDST = function() {
  var index = getUntilsIndex(this.original, this.timeZoneData.untils);
  return Boolean(this.timeZoneData.isdsts[index]);
};

ZonedDateTime.prototype.inspect = function() {
  var index = getUntilsIndex(this.original, this.timeZoneData.untils);
  var abbrs = this.timeZoneData.abbrs;
  return this.local.toISOString().replace(/Z$/, "") + " " +
    (abbrs && abbrs[index] + " " || (this.getTimezoneOffset() * -1) + " ") +
    (this.isDST() ? "(daylight savings)" : "");
};

ZonedDateTime.prototype.toDate = function() {
  return new Date(this.getTime());
};

// Type cast getters.
["toISOString", "toJSON", "toUTCString"].forEach(function(method) {
  ZonedDateTime.prototype[method] = function() {
    return this.toDate()[method]();
  };
});

return ZonedDateTime;
}());


/**
 * isLeapYear( year )
 *
 * @year [Number]
 *
 * Returns an indication whether the specified year is a leap year.
 */
var dateIsLeapYear = function( year ) {
	return new Date( year, 1, 29 ).getMonth() === 1;
};




/**
 * lastDayOfMonth( date )
 *
 * @date [Date]
 *
 * Return the last day of the given date's month
 */
var dateLastDayOfMonth = function( date ) {
	return new Date( date.getFullYear(), date.getMonth() + 1, 0 ).getDate();
};




/**
 * startOf changes the input to the beginning of the given unit.
 *
 * For example, starting at the start of a day, resets hours, minutes
 * seconds and milliseconds to 0. Starting at the month does the same, but
 * also sets the date to 1.
 *
 * Returns the modified date
 */
var dateStartOf = function( date, unit ) {
	date = date instanceof ZonedDateTime ? date.clone() : new Date( date.getTime() );
	switch ( unit ) {
		case "year":
			date.setMonth( 0 );
		/* falls through */
		case "month":
			date.setDate( 1 );
		/* falls through */
		case "day":
			date.setHours( 0 );
		/* falls through */
		case "hour":
			date.setMinutes( 0 );
		/* falls through */
		case "minute":
			date.setSeconds( 0 );
		/* falls through */
		case "second":
			date.setMilliseconds( 0 );
	}
	return date;
};




/**
 * Differently from native date.setDate(), this function returns a date whose
 * day remains inside the month boundaries. For example:
 *
 * setDate( FebDate, 31 ): a "Feb 28" date.
 * setDate( SepDate, 31 ): a "Sep 30" date.
 */
var dateSetDate = function( date, day ) {
	var lastDay = new Date( date.getFullYear(), date.getMonth() + 1, 0 ).getDate();

	date.setDate( day < 1 ? 1 : day < lastDay ? day : lastDay );
};




/**
 * Differently from native date.setMonth(), this function adjusts date if
 * needed, so final month is always the one set.
 *
 * setMonth( Jan31Date, 1 ): a "Feb 28" date.
 * setDate( Jan31Date, 8 ): a "Sep 30" date.
 */
var dateSetMonth = function( date, month ) {
	var originalDate = date.getDate();

	date.setDate( 1 );
	date.setMonth( month );
	dateSetDate( date, originalDate );
};




var outOfRange = function( value, low, high ) {
	return value < low || value > high;
};




/**
 * parse( value, tokens, properties )
 *
 * @value [String] string date.
 *
 * @tokens [Object] tokens returned by date/tokenizer.
 *
 * @properties [Object] output returned by date/tokenizer-properties.
 *
 * ref: http://www.unicode.org/reports/tr35/tr35-dates.html#Date_Format_Patterns
 */
var dateParse = function( value, tokens, properties ) {
	var amPm, day, daysOfYear, month, era, hour, hour12, timezoneOffset, valid,
		YEAR = 0,
		MONTH = 1,
		DAY = 2,
		HOUR = 3,
		MINUTE = 4,
		SECOND = 5,
		MILLISECONDS = 6,
		date = new Date(),
		truncateAt = [],
		units = [ "year", "month", "day", "hour", "minute", "second", "milliseconds" ];

	// Create globalize date with given timezone data.
	if ( properties.timeZoneData ) {
		date = new ZonedDateTime( date, properties.timeZoneData() );
	}

	if ( !tokens.length ) {
		return null;
	}

	valid = tokens.every(function( token ) {
		var century, chr, value, length;

		if ( token.type === "literal" ) {

			// continue
			return true;
		}

		chr = token.type.charAt( 0 );
		length = token.type.length;

		if ( chr === "j" ) {

			// Locale preferred hHKk.
			// http://www.unicode.org/reports/tr35/tr35-dates.html#Time_Data
			chr = properties.preferredTimeData;
		}

		switch ( chr ) {

			// Era
			case "G":
				truncateAt.push( YEAR );
				era = +token.value;
				break;

			// Year
			case "y":
				value = token.value;
				if ( length === 2 ) {
					if ( outOfRange( value, 0, 99 ) ) {
						return false;
					}

					// mimic dojo/date/locale: choose century to apply, according to a sliding
					// window of 80 years before and 20 years after present year.
					century = Math.floor( date.getFullYear() / 100 ) * 100;
					value += century;
					if ( value > date.getFullYear() + 20 ) {
						value -= 100;
					}
				}
				date.setFullYear( value );
				truncateAt.push( YEAR );
				break;

			case "Y": // Year in "Week of Year"
				throw createErrorUnsupportedFeature({
					feature: "year pattern `" + chr + "`"
				});

			// Quarter (skip)
			case "Q":
			case "q":
				break;

			// Month
			case "M":
			case "L":
				if ( length <= 2 ) {
					value = token.value;
				} else {
					value = +token.value;
				}
				if ( outOfRange( value, 1, 12 ) ) {
					return false;
				}

				// Setting the month later so that we have the correct year and can determine
				// the correct last day of February in case of leap year.
				month = value;
				truncateAt.push( MONTH );
				break;

			// Week (skip)
			case "w": // Week of Year.
			case "W": // Week of Month.
				break;

			// Day
			case "d":
				day = token.value;
				truncateAt.push( DAY );
				break;

			case "D":
				daysOfYear = token.value;
				truncateAt.push( DAY );
				break;

			case "F":

				// Day of Week in month. eg. 2nd Wed in July.
				// Skip
				break;

			// Week day
			case "e":
			case "c":
			case "E":

				// Skip.
				// value = arrayIndexOf( dateWeekDays, token.value );
				break;

			// Period (AM or PM)
			case "a":
				amPm = token.value;
				break;

			// Hour
			case "h": // 1-12
				value = token.value;
				if ( outOfRange( value, 1, 12 ) ) {
					return false;
				}
				hour = hour12 = true;
				date.setHours( value === 12 ? 0 : value );
				truncateAt.push( HOUR );
				break;

			case "K": // 0-11
				value = token.value;
				if ( outOfRange( value, 0, 11 ) ) {
					return false;
				}
				hour = hour12 = true;
				date.setHours( value );
				truncateAt.push( HOUR );
				break;

			case "k": // 1-24
				value = token.value;
				if ( outOfRange( value, 1, 24 ) ) {
					return false;
				}
				hour = true;
				date.setHours( value === 24 ? 0 : value );
				truncateAt.push( HOUR );
				break;

			case "H": // 0-23
				value = token.value;
				if ( outOfRange( value, 0, 23 ) ) {
					return false;
				}
				hour = true;
				date.setHours( value );
				truncateAt.push( HOUR );
				break;

			// Minute
			case "m":
				value = token.value;
				if ( outOfRange( value, 0, 59 ) ) {
					return false;
				}
				date.setMinutes( value );
				truncateAt.push( MINUTE );
				break;

			// Second
			case "s":
				value = token.value;
				if ( outOfRange( value, 0, 59 ) ) {
					return false;
				}
				date.setSeconds( value );
				truncateAt.push( SECOND );
				break;

			case "A":
				date.setHours( 0 );
				date.setMinutes( 0 );
				date.setSeconds( 0 );

			/* falls through */
			case "S":
				value = Math.round( token.value * Math.pow( 10, 3 - length ) );
				date.setMilliseconds( value );
				truncateAt.push( MILLISECONDS );
				break;

			// Zone
			case "z":
			case "Z":
			case "O":
			case "v":
			case "V":
			case "X":
			case "x":
				if ( typeof token.value === "number" ) {
					timezoneOffset = token.value;
				}
				break;
		}

		return true;
	});

	if ( !valid ) {
		return null;
	}

	// 12-hour format needs AM or PM, 24-hour format doesn't, ie. return null
	// if amPm && !hour12 || !amPm && hour12.
	if ( hour && !( !amPm ^ hour12 ) ) {
		return null;
	}

	if ( era === 0 ) {

		// 1 BC = year 0
		date.setFullYear( date.getFullYear() * -1 + 1 );
	}

	if ( month !== undefined ) {
		dateSetMonth( date, month - 1 );
	}

	if ( day !== undefined ) {
		if ( outOfRange( day, 1, dateLastDayOfMonth( date ) ) ) {
			return null;
		}
		date.setDate( day );
	} else if ( daysOfYear !== undefined ) {
		if ( outOfRange( daysOfYear, 1, dateIsLeapYear( date.getFullYear() ) ? 366 : 365 ) ) {
			return null;
		}
		date.setMonth( 0 );
		date.setDate( daysOfYear );
	}

	if ( hour12 && amPm === "pm" ) {
		date.setHours( date.getHours() + 12 );
	}

	if ( timezoneOffset !== undefined ) {
		date.setMinutes( date.getMinutes() + timezoneOffset - date.getTimezoneOffset() );
	}

	// Truncate date at the most precise unit defined. Eg.
	// If value is "12/31", and pattern is "MM/dd":
	// => new Date( <current Year>, 12, 31, 0, 0, 0, 0 );
	truncateAt = Math.max.apply( null, truncateAt );
	date = dateStartOf( date, units[ truncateAt ] );

	// Get date back from globalize date.
	if ( date instanceof ZonedDateTime ) {
		date = date.toDate();
	}

	return date;
};




/**
 * tokenizer( value, numberParser, properties )
 *
 * @value [String] string date.
 *
 * @numberParser [Function]
 *
 * @properties [Object] output returned by date/tokenizer-properties.
 *
 * Returns an Array of tokens, eg. value "5 o'clock PM", pattern "h 'o''clock' a":
 * [{
 *   type: "h",
 *   lexeme: "5"
 * }, {
 *   type: "literal",
 *   lexeme: " "
 * }, {
 *   type: "literal",
 *   lexeme: "o'clock"
 * }, {
 *   type: "literal",
 *   lexeme: " "
 * }, {
 *   type: "a",
 *   lexeme: "PM",
 *   value: "pm"
 * }]
 *
 * OBS: lexeme's are always String and may return invalid ranges depending of the token type.
 * Eg. "99" for month number.
 *
 * Return an empty Array when not successfully parsed.
 */
var dateTokenizer = function( value, numberParser, properties ) {
	var digitsRe, valid,
		tokens = [],
		widths = [ "abbreviated", "wide", "narrow" ];

	digitsRe = properties.digitsRe;
	value = looseMatching( value );

	valid = properties.pattern.match( datePatternRe ).every(function( current ) {
		var aux, chr, length, numeric, tokenRe,
			token = {};

		function hourFormatParse( tokenRe, numberParser ) {
			var aux, isPositive,
				match = value.match( tokenRe );
			numberParser = numberParser || function( value ) {
				return +value;
			};

			if ( !match ) {
				return false;
			}

			isPositive = match[ 1 ];

			// hourFormat containing H only, e.g., `+H;-H`
			if ( match.length < 6 ) {
				aux = isPositive ? 1 : 3;
				token.value = numberParser( match[ aux ] ) * 60;

			// hourFormat containing H and m, e.g., `+HHmm;-HHmm`
			} else if ( match.length < 10 ) {
				aux = isPositive ? [ 1, 3 ] : [ 5, 7 ];
				token.value = numberParser( match[ aux[ 0 ] ] ) * 60 +
					numberParser( match[ aux[ 1 ] ] );

			// hourFormat containing H, m, and s e.g., `+HHmmss;-HHmmss`
			} else {
				aux = isPositive ? [ 1, 3, 5 ] : [ 7, 9, 11 ];
				token.value = numberParser( match[ aux[ 0 ] ] ) * 60 +
					numberParser( match[ aux[ 1 ] ] ) +
					numberParser( match[ aux[ 2 ] ] ) / 60;
			}

			if ( isPositive ) {
				token.value *= -1;
			}

			return true;
		}

		function oneDigitIfLengthOne() {
			if ( length === 1 ) {

				// Unicode equivalent to /\d/
				numeric = true;
				return tokenRe = digitsRe;
			}
		}

		function oneOrTwoDigitsIfLengthOne() {
			if ( length === 1 ) {

				// Unicode equivalent to /\d\d?/
				numeric = true;
				return tokenRe = new RegExp( "^(" + digitsRe.source + "){1,2}" );
			}
		}

		function oneOrTwoDigitsIfLengthOneOrTwo() {
			if ( length === 1 || length === 2 ) {

				// Unicode equivalent to /\d\d?/
				numeric = true;
				return tokenRe = new RegExp( "^(" + digitsRe.source + "){1,2}" );
			}
		}

		function twoDigitsIfLengthTwo() {
			if ( length === 2 ) {

				// Unicode equivalent to /\d\d/
				numeric = true;
				return tokenRe = new RegExp( "^(" + digitsRe.source + "){2}" );
			}
		}

		// Brute-force test every locale entry in an attempt to match the given value.
		// Return the first found one (and set token accordingly), or null.
		function lookup( path ) {
			var array = properties[ path.join( "/" ) ];

			if ( !array ) {
				return null;
			}

			// array of pairs [key, value] sorted by desc value length.
			array.some(function( item ) {
				var valueRe = item[ 1 ];
				if ( valueRe.test( value ) ) {
					token.value = item[ 0 ];
					tokenRe = item[ 1 ];
					return true;
				}
			});
			return null;
		}

		token.type = current;
		chr = current.charAt( 0 );
		length = current.length;

		if ( chr === "Z" ) {

			// Z..ZZZ: same as "xxxx".
			if ( length < 4 ) {
				chr = "x";
				length = 4;

			// ZZZZ: same as "OOOO".
			} else if ( length < 5 ) {
				chr = "O";
				length = 4;

			// ZZZZZ: same as "XXXXX"
			} else {
				chr = "X";
				length = 5;
			}
		}

		if ( chr === "z" ) {
			if ( properties.standardOrDaylightTzName ) {
				token.value = null;
				tokenRe = properties.standardOrDaylightTzName;
			}
		}

		// v...vvv: "{shortRegion}", eg. "PT".
		// vvvv: "{regionName} {Time}" or "{regionName} {Time}",
		// e.g., "Pacific Time"
		// http://unicode.org/reports/tr35/tr35-dates.html#Date_Format_Patterns
		if ( chr === "v" ) {
			if ( properties.genericTzName ) {
				token.value = null;
				tokenRe = properties.genericTzName;

			// Fall back to "V" format.
			} else {
				chr = "V";
				length = 4;
			}
		}

		if ( chr === "V" && properties.timeZoneName ) {
			token.value = length === 2 ? properties.timeZoneName : null;
			tokenRe = properties.timeZoneNameRe;
		}

		switch ( chr ) {

			// Era
			case "G":
				lookup([
					"gregorian/eras",
					length <= 3 ? "eraAbbr" : ( length === 4 ? "eraNames" : "eraNarrow" )
				]);
				break;

			// Year
			case "y":
			case "Y":
				numeric = true;

				// number l=1:+, l=2:{2}, l=3:{3,}, l=4:{4,}, ...
				if ( length === 1 ) {

					// Unicode equivalent to /\d+/.
					tokenRe = new RegExp( "^(" + digitsRe.source + ")+" );
				} else if ( length === 2 ) {

					// Lenient parsing: there's no year pattern to indicate non-zero-padded 2-digits
					// year, so parser accepts both zero-padded and non-zero-padded for `yy`.
					//
					// Unicode equivalent to /\d\d?/
					tokenRe = new RegExp( "^(" + digitsRe.source + "){1,2}" );
				} else {

					// Unicode equivalent to /\d{length,}/
					tokenRe = new RegExp( "^(" + digitsRe.source + "){" + length + ",}" );
				}
				break;

			// Quarter
			case "Q":
			case "q":

				// number l=1:{1}, l=2:{2}.
				// lookup l=3...
				oneDigitIfLengthOne() || twoDigitsIfLengthTwo() ||
					lookup([
						"gregorian/quarters",
						chr === "Q" ? "format" : "stand-alone",
						widths[ length - 3 ]
					]);
				break;

			// Month
			case "M":
			case "L":

				// number l=1:{1,2}, l=2:{2}.
				// lookup l=3...
				//
				// Lenient parsing: skeleton "yMd" (i.e., one M) may include MM for the pattern,
				// therefore parser accepts both zero-padded and non-zero-padded for M and MM.
				// Similar for L.
				oneOrTwoDigitsIfLengthOneOrTwo() || lookup([
					"gregorian/months",
					chr === "M" ? "format" : "stand-alone",
					widths[ length - 3 ]
				]);
				break;

			// Day
			case "D":

				// number {l,3}.
				if ( length <= 3 ) {

					// Equivalent to /\d{length,3}/
					numeric = true;
					tokenRe = new RegExp( "^(" + digitsRe.source + "){" + length + ",3}" );
				}
				break;

			case "W":
			case "F":

				// number l=1:{1}.
				oneDigitIfLengthOne();
				break;

			// Week day
			case "e":
			case "c":

				// number l=1:{1}, l=2:{2}.
				// lookup for length >=3.
				if ( length <= 2 ) {
					oneDigitIfLengthOne() || twoDigitsIfLengthTwo();
					break;
				}

			/* falls through */
			case "E":
				if ( length === 6 ) {

					// Note: if short day names are not explicitly specified, abbreviated day
					// names are used instead http://www.unicode.org/reports/tr35/tr35-dates.html#months_days_quarters_eras
					lookup([
						"gregorian/days",
						[ chr === "c" ? "stand-alone" : "format" ],
						"short"
					]) || lookup([
						"gregorian/days",
						[ chr === "c" ? "stand-alone" : "format" ],
						"abbreviated"
					]);
				} else {
					lookup([
						"gregorian/days",
						[ chr === "c" ? "stand-alone" : "format" ],
						widths[ length < 3 ? 0 : length - 3 ]
					]);
				}
				break;

			// Period (AM or PM)
			case "a":
				lookup([
					"gregorian/dayPeriods/format/wide"
				]);
				break;

			// Week
			case "w":

				// number l1:{1,2}, l2:{2}.
				oneOrTwoDigitsIfLengthOne() || twoDigitsIfLengthTwo();
				break;

			// Day, Hour, Minute, or Second
			case "d":
			case "h":
			case "H":
			case "K":
			case "k":
			case "j":
			case "m":
			case "s":

				// number l1:{1,2}, l2:{2}.
				//
				// Lenient parsing:
				// - skeleton "hms" (i.e., one m) always includes mm for the pattern, i.e., it's
				//   impossible to use a different skeleton to parse non-zero-padded minutes,
				//   therefore parser accepts both zero-padded and non-zero-padded for m. Similar
				//   for seconds s.
				// - skeleton "hms" (i.e., one h) may include h or hh for the pattern, i.e., it's
				//   impossible to use a different skeleton to parser non-zero-padded hours for some
				//   locales, therefore parser accepts both zero-padded and non-zero-padded for h.
				//   Similar for d (in skeleton yMd).
				oneOrTwoDigitsIfLengthOneOrTwo();
				break;

			case "S":

				// number {l}.

				// Unicode equivalent to /\d{length}/
				numeric = true;
				tokenRe = new RegExp( "^(" + digitsRe.source + "){" + length + "}" );
				break;

			case "A":

				// number {l+5}.

				// Unicode equivalent to /\d{length+5}/
				numeric = true;
				tokenRe = new RegExp( "^(" + digitsRe.source + "){" + ( length + 5 ) + "}" );
				break;

			// Zone
			case "v":
			case "V":
			case "z":
				if ( tokenRe && tokenRe.test( value ) ) {
					break;
				}
				if ( chr === "V" && length === 2 ) {
					break;
				}

			/* falls through */
			case "O":

				// O: "{gmtFormat}+H;{gmtFormat}-H" or "{gmtZeroFormat}", eg. "GMT-8" or "GMT".
				// OOOO: "{gmtFormat}{hourFormat}" or "{gmtZeroFormat}", eg. "GMT-08:00" or "GMT".
				if ( value === properties[ "timeZoneNames/gmtZeroFormat" ] ) {
					token.value = 0;
					tokenRe = properties[ "timeZoneNames/gmtZeroFormatRe" ];
				} else {
					aux = properties[ "timeZoneNames/hourFormat" ].some(function( hourFormatRe ) {
						if ( hourFormatParse( hourFormatRe, numberParser ) ) {
							tokenRe = hourFormatRe;
							return true;
						}
					});
					if ( !aux ) {
						return null;
					}
				}
				break;

			case "X":

				// Same as x*, except it uses "Z" for zero offset.
				if ( value === "Z" ) {
					token.value = 0;
					tokenRe = /^Z/;
					break;
				}

			/* falls through */
			case "x":

				// x: hourFormat("+HH[mm];-HH[mm]")
				// xx: hourFormat("+HHmm;-HHmm")
				// xxx: hourFormat("+HH:mm;-HH:mm")
				// xxxx: hourFormat("+HHmm[ss];-HHmm[ss]")
				// xxxxx: hourFormat("+HH:mm[:ss];-HH:mm[:ss]")
				aux = properties.x.some(function( hourFormatRe ) {
					if ( hourFormatParse( hourFormatRe ) ) {
						tokenRe = hourFormatRe;
						return true;
					}
				});
				if ( !aux ) {
					return null;
				}
				break;

			case "'":
				token.type = "literal";
				tokenRe = new RegExp( "^" + regexpEscape( removeLiteralQuotes( current ) ) );
				break;

			default:
				token.type = "literal";
				tokenRe = new RegExp( "^" + regexpEscape( current ) );
		}

		if ( !tokenRe ) {
			return false;
		}

		// Get lexeme and consume it.
		value = value.replace( tokenRe, function( lexeme ) {
			token.lexeme = lexeme;
			if ( numeric ) {
				token.value = numberParser( lexeme );
			}
			return "";
		});

		if ( !token.lexeme ) {
			return false;
		}

		if ( numeric && isNaN( token.value ) ) {
			return false;
		}

		tokens.push( token );
		return true;
	});

	if ( value !== "" ) {
		valid = false;
	}

	return valid ? tokens : [];
};




var dateParserFn = function( numberParser, parseProperties, tokenizerProperties ) {
	return function dateParser( value ) {
		var tokens;

		validateParameterPresence( value, "value" );
		validateParameterTypeString( value, "value" );

		tokens = dateTokenizer( value, numberParser, tokenizerProperties );
		return dateParse( value, tokens, parseProperties ) || null;
	};
};




var objectFilter = function( object, testRe ) {
	var key,
		copy = {};

	for ( key in object ) {
		if ( testRe.test( key ) ) {
			copy[ key ] = object[ key ];
		}
	}

	return copy;
};




/**
 * tokenizerProperties( pattern, cldr )
 *
 * @pattern [String] raw pattern.
 *
 * @cldr [Cldr instance].
 *
 * Return Object with data that will be used by tokenizer.
 */
var dateTokenizerProperties = function( pattern, cldr, timeZone ) {
	var digitsReSource,
		properties = {
			pattern: looseMatching( pattern )
		},
		timeSeparator = numberSymbol( "timeSeparator", cldr ),
		widths = [ "abbreviated", "wide", "narrow" ];

	digitsReSource = numberNumberingSystemDigitsMap( cldr );
	digitsReSource = digitsReSource ? "[" + digitsReSource + "]" : "\\d";
	properties.digitsRe = new RegExp( digitsReSource );

	// Transform:
	// - "+H;-H" -> /\+(\d\d?)|-(\d\d?)/
	// - "+HH;-HH" -> /\+(\d\d)|-(\d\d)/
	// - "+HHmm;-HHmm" -> /\+(\d\d)(\d\d)|-(\d\d)(\d\d)/
	// - "+HH:mm;-HH:mm" -> /\+(\d\d):(\d\d)|-(\d\d):(\d\d)/
	//
	// If gmtFormat is GMT{0}, the regexp must fill {0} in each side, e.g.:
	// - "+H;-H" -> /GMT\+(\d\d?)|GMT-(\d\d?)/
	function hourFormatRe( hourFormat, gmtFormat, digitsReSource, timeSeparator ) {
		var re;

		if ( !digitsReSource ) {
			digitsReSource = "\\d";
		}
		if ( !gmtFormat ) {
			gmtFormat = "{0}";
		}

		re = hourFormat
			.replace( "+", "\\+" )

			// Unicode equivalent to (\\d\\d)
			.replace( /HH|mm|ss/g, "((" + digitsReSource + "){2})" )

			// Unicode equivalent to (\\d\\d?)
			.replace( /H|m/g, "((" + digitsReSource + "){1,2})" );

		if ( timeSeparator ) {
			re = re.replace( /:/g, timeSeparator );
		}

		re = re.split( ";" ).map(function( part ) {
			return gmtFormat.replace( "{0}", part );
		}).join( "|" );

		return new RegExp( "^" + re );
	}

	function populateProperties( path, value ) {

		// Skip
		var skipRe = /(timeZoneNames\/zone|supplemental\/metaZones|timeZoneNames\/metazone|timeZoneNames\/regionFormat|timeZoneNames\/gmtFormat)/;
		if ( skipRe.test( path ) ) {
			return;
		}

		if ( !value ) {
			return;
		}

		// The `dates` and `calendars` trim's purpose is to reduce properties' key size only.
		path = path.replace( /^.*\/dates\//, "" ).replace( /calendars\//, "" );

		// Specific filter for "gregorian/dayPeriods/format/wide".
		if ( path === "gregorian/dayPeriods/format/wide" ) {
			value = objectFilter( value, /^am|^pm/ );
		}

		// Transform object into array of pairs [key, /value/], sort by desc value length.
		if ( isPlainObject( value ) ) {
			value = Object.keys( value ).map(function( key ) {
				return [ key, new RegExp( "^" + regexpEscape( looseMatching( value[ key ] ) ) ) ];
			}).sort(function( a, b ) {
				return b[ 1 ].source.length - a[ 1 ].source.length;
			});

		// If typeof value === "string".
		} else {
			value = looseMatching( value );
		}
		properties[ path ] = value;
	}

	function regexpSourceSomeTerm( terms ) {
		return "(" + terms.filter(function( item ) {
			return item;
		}).reduce(function( memo, item ) {
			return memo + "|" + item;
		}) + ")";
	}

	cldr.on( "get", populateProperties );

	pattern.match( datePatternRe ).forEach(function( current ) {
		var aux, chr, daylightTzName, gmtFormat, length, standardTzName;

		chr = current.charAt( 0 );
		length = current.length;

		if ( chr === "Z" ) {
			if ( length < 5 ) {
				chr = "O";
				length = 4;
			} else {
				chr = "X";
				length = 5;
			}
		}

		// z...zzz: "{shortRegion}", eg. "PST" or "PDT".
		// zzzz: "{regionName} {Standard Time}" or "{regionName} {Daylight Time}",
		//       e.g., "Pacific Standard Time" or "Pacific Daylight Time".
		// http://unicode.org/reports/tr35/tr35-dates.html#Date_Format_Patterns
		if ( chr === "z" ) {
			standardTzName = dateGetTimeZoneName( length, "standard", timeZone, cldr );
			daylightTzName = dateGetTimeZoneName( length, "daylight", timeZone, cldr );
			if ( standardTzName ) {
				standardTzName = regexpEscape( looseMatching( standardTzName ) );
			}
			if ( daylightTzName ) {
				daylightTzName = regexpEscape( looseMatching( daylightTzName ) );
			}
			if ( standardTzName || daylightTzName ) {
				properties.standardOrDaylightTzName = new RegExp(
					"^" + regexpSourceSomeTerm([ standardTzName, daylightTzName ])
				);
			}

			// Fall through the "O" format in case one name is missing.
			if ( !standardTzName || !daylightTzName ) {
				chr = "O";
				if ( length < 4 ) {
					length = 1;
				}
			}
		}

		// v...vvv: "{shortRegion}", eg. "PT".
		// vvvv: "{regionName} {Time}" or "{regionName} {Time}",
		// e.g., "Pacific Time"
		// http://unicode.org/reports/tr35/tr35-dates.html#Date_Format_Patterns
		if ( chr === "v" ) {
			if ( length !== 1 && length !== 4 ) {
				throw createErrorUnsupportedFeature({
					feature: "timezone pattern `" + pattern + "`"
				});
			}
			var genericTzName = dateGetTimeZoneName( length, "generic", timeZone, cldr );
			if ( genericTzName ) {
				properties.genericTzName = new RegExp(
					"^" + regexpEscape( looseMatching( genericTzName ) )
				);
				chr = "O";

			// Fall back to "V" format.
			} else {
				chr = "V";
				length = 4;
			}
		}

		switch ( chr ) {

			// Era
			case "G":
				cldr.main([
					"dates/calendars/gregorian/eras",
					length <= 3 ? "eraAbbr" : ( length === 4 ? "eraNames" : "eraNarrow" )
				]);
				break;

			// Year
			case "u": // Extended year. Need to be implemented.
			case "U": // Cyclic year name. Need to be implemented.
				throw createErrorUnsupportedFeature({
					feature: "year pattern `" + chr + "`"
				});

			// Quarter
			case "Q":
			case "q":
				if ( length > 2 ) {
					cldr.main([
						"dates/calendars/gregorian/quarters",
						chr === "Q" ? "format" : "stand-alone",
						widths[ length - 3 ]
					]);
				}
				break;

			// Month
			case "M":
			case "L":

				// number l=1:{1,2}, l=2:{2}.
				// lookup l=3...
				if ( length > 2 ) {
					cldr.main([
						"dates/calendars/gregorian/months",
						chr === "M" ? "format" : "stand-alone",
						widths[ length - 3 ]
					]);
				}
				break;

			// Day
			case "g":

				// Modified Julian day. Need to be implemented.
				throw createErrorUnsupportedFeature({
					feature: "Julian day pattern `g`"
				});

			// Week day
			case "e":
			case "c":

				// lookup for length >=3.
				if ( length <= 2 ) {
					break;
				}

			/* falls through */
			case "E":
				if ( length === 6 ) {

					// Note: if short day names are not explicitly specified, abbreviated day
					// names are used instead http://www.unicode.org/reports/tr35/tr35-dates.html#months_days_quarters_eras
					cldr.main([
						"dates/calendars/gregorian/days",
						[ chr === "c" ? "stand-alone" : "format" ],
						"short"
					]) || cldr.main([
						"dates/calendars/gregorian/days",
						[ chr === "c" ? "stand-alone" : "format" ],
						"abbreviated"
					]);
				} else {
					cldr.main([
						"dates/calendars/gregorian/days",
						[ chr === "c" ? "stand-alone" : "format" ],
						widths[ length < 3 ? 0 : length - 3 ]
					]);
				}
				break;

			// Period (AM or PM)
			case "a":
				cldr.main(
					"dates/calendars/gregorian/dayPeriods/format/wide"
				);
				break;

			// Zone
			case "V":

				if ( length === 1 ) {
					throw createErrorUnsupportedFeature({
						feature: "timezone pattern `" + pattern + "`"
					});
				}

				if ( timeZone ) {
					if ( length === 2 ) {

						// Skip looseMatching processing since timeZone is a canonical posix value.
						properties.timeZoneName = timeZone;
						properties.timeZoneNameRe = new RegExp( "^" + regexpEscape( timeZone ) );
						break;
					}

					var timeZoneName,
						exemplarCity = cldr.main([
							"dates/timeZoneNames/zone", timeZone, "exemplarCity"
						]);

					if ( length === 3 ) {
						if ( !exemplarCity ) {
							exemplarCity = cldr.main([
								"dates/timeZoneNames/zone/Etc/Unknown/exemplarCity"
							]);
						}
						timeZoneName = exemplarCity;
					}

					if ( exemplarCity && length === 4 ) {
						timeZoneName = formatMessage(
							cldr.main(
								"dates/timeZoneNames/regionFormat"
							),
							[ exemplarCity ]
						);
					}

					if ( timeZoneName ) {
						timeZoneName = looseMatching( timeZoneName );
						properties.timeZoneName = timeZoneName;
						properties.timeZoneNameRe = new RegExp(
							"^" + regexpEscape( timeZoneName )
						);
					}
				}

				if ( current === "v" ) {
					length = 1;
				}

			/* falls through */
			case "z":
			case "O":
				gmtFormat = cldr.main( "dates/timeZoneNames/gmtFormat" );
				cldr.main( "dates/timeZoneNames/gmtZeroFormat" );
				cldr.main( "dates/timeZoneNames/hourFormat" );
				properties[ "timeZoneNames/gmtZeroFormatRe" ] =
					new RegExp( "^" + regexpEscape( properties[ "timeZoneNames/gmtZeroFormat" ] ) );
				aux = properties[ "timeZoneNames/hourFormat" ];
				properties[ "timeZoneNames/hourFormat" ] = (
					length < 4 ?
						[ dateTimezoneHourFormatHm( aux, "H" ), dateTimezoneHourFormatH( aux ) ] :
						[ dateTimezoneHourFormatHm( aux, "HH" ) ]
				).map(function( hourFormat ) {
					return hourFormatRe(
						hourFormat,
						gmtFormat,
						digitsReSource,
						timeSeparator
					);
				});

			/* falls through */
			case "X":
			case "x":

				// x: hourFormat("+HH[mm];-HH[mm]")
				// xx: hourFormat("+HHmm;-HHmm")
				// xxx: hourFormat("+HH:mm;-HH:mm")
				// xxxx: hourFormat("+HHmm[ss];-HHmm[ss]")
				// xxxxx: hourFormat("+HH:mm[:ss];-HH:mm[:ss]")
				properties.x = [
					[ "+HHmm;-HHmm", "+HH;-HH" ],
					[ "+HHmm;-HHmm" ],
					[ "+HH:mm;-HH:mm" ],
					[ "+HHmmss;-HHmmss", "+HHmm;-HHmm" ],
					[ "+HH:mm:ss;-HH:mm:ss", "+HH:mm;-HH:mm" ]
				][ length - 1 ].map(function( hourFormat ) {
					return hourFormatRe( hourFormat );
				});
		}
	});

	cldr.off( "get", populateProperties );

	return properties;
};




/**
 * dayOfWeek( date, firstDay )
 *
 * @date
 *
 * @firstDay the result of `dateFirstDayOfWeek( cldr )`
 *
 * Return the day of the week normalized by the territory's firstDay [0-6].
 * Eg for "mon":
 * - return 0 if territory is GB, or BR, or DE, or FR (week starts on "mon");
 * - return 1 if territory is US (week starts on "sun");
 * - return 2 if territory is EG (week starts on "sat");
 */
var dateDayOfWeek = function( date, firstDay ) {
	return ( date.getDay() - firstDay + 7 ) % 7;
};




/**
 * distanceInDays( from, to )
 *
 * Return the distance in days between from and to Dates.
 */
var dateDistanceInDays = function( from, to ) {
	var inDays = 864e5;
	return ( to.getTime() - from.getTime() ) / inDays;
};




/**
 * dayOfYear
 *
 * Return the distance in days of the date to the begin of the year [0-d].
 */
var dateDayOfYear = function( date ) {
	return Math.floor( dateDistanceInDays( dateStartOf( date, "year" ), date ) );
};




// Invert key and values, e.g., {"year": "yY"} ==> {"y": "year", "Y": "year"}
var dateFieldsMap = objectInvert({
	"era": "G",
	"year": "yY",
	"quarter": "qQ",
	"month": "ML",
	"week": "wW",
	"day": "dDF",
	"weekday": "ecE",
	"dayperiod": "a",
	"hour": "hHkK",
	"minute": "m",
	"second": "sSA",
	"zone": "zvVOxX"
}, function( object, key, value ) {
	value.split( "" ).forEach(function( symbol ) {
		object[ symbol ] = key;
	});
	return object;
});




/**
 * millisecondsInDay
 */
var dateMillisecondsInDay = function( date ) {

	// TODO Handle daylight savings discontinuities
	return date - dateStartOf( date, "day" );
};




/**
 * hourFormat( date, format, timeSeparator, formatNumber )
 *
 * Return date's timezone offset according to the format passed.
 * Eg for format when timezone offset is 180:
 * - "+H;-H": -3
 * - "+HHmm;-HHmm": -0300
 * - "+HH:mm;-HH:mm": -03:00
 * - "+HH:mm:ss;-HH:mm:ss": -03:00:00
 */
var dateTimezoneHourFormat = function( date, format, timeSeparator, formatNumber ) {
	var absOffset,
		offset = date.getTimezoneOffset();

	absOffset = Math.abs( offset );
	formatNumber = formatNumber || {
		1: function( value ) {
			return stringPad( value, 1 );
		},
		2: function( value ) {
			return stringPad( value, 2 );
		}
	};

	return format

		// Pick the correct sign side (+ or -).
		.split( ";" )[ offset > 0 ? 1 : 0 ]

		// Localize time separator
		.replace( ":", timeSeparator )

		// Update hours offset.
		.replace( /HH?/, function( match ) {
			return formatNumber[ match.length ]( Math.floor( absOffset / 60 ) );
		})

		// Update minutes offset and return.
		.replace( /mm/, function() {
			return formatNumber[ 2 ]( Math.floor( absOffset % 60 ) );
		})

		// Update minutes offset and return.
		.replace( /ss/, function() {
			return formatNumber[ 2 ]( Math.floor( absOffset % 1 * 60 ) );
		});
};




/**
 * format( date, properties )
 *
 * @date [Date instance].
 *
 * @properties
 *
 * TODO Support other calendar types.
 *
 * Disclosure: this function borrows excerpts of dojo/date/locale.
 */
var dateFormat = function( date, numberFormatters, properties ) {
	var parts = [];

	var timeSeparator = properties.timeSeparator;

	// create globalize date with given timezone data
	if ( properties.timeZoneData ) {
		date = new ZonedDateTime( date, properties.timeZoneData() );
	}

	properties.pattern.replace( datePatternRe, function( current ) {
		var aux, dateField, type, value,
			chr = current.charAt( 0 ),
			length = current.length;

		if ( chr === "j" ) {

			// Locale preferred hHKk.
			// http://www.unicode.org/reports/tr35/tr35-dates.html#Time_Data
			chr = properties.preferredTime;
		}

		if ( chr === "Z" ) {

			// Z..ZZZ: same as "xxxx".
			if ( length < 4 ) {
				chr = "x";
				length = 4;

			// ZZZZ: same as "OOOO".
			} else if ( length < 5 ) {
				chr = "O";
				length = 4;

			// ZZZZZ: same as "XXXXX"
			} else {
				chr = "X";
				length = 5;
			}
		}

		// z...zzz: "{shortRegion}", e.g., "PST" or "PDT".
		// zzzz: "{regionName} {Standard Time}" or "{regionName} {Daylight Time}",
		//       e.g., "Pacific Standard Time" or "Pacific Daylight Time".
		if ( chr === "z" ) {
			if ( date.isDST ) {
				value = date.isDST() ? properties.daylightTzName : properties.standardTzName;
			}

			// Fall back to "O" format.
			if ( !value ) {
				chr = "O";
				if ( length < 4 ) {
					length = 1;
				}
			}
		}

		switch ( chr ) {

			// Era
			case "G":
				value = properties.eras[ date.getFullYear() < 0 ? 0 : 1 ];
				break;

			// Year
			case "y":

				// Plain year.
				// The length specifies the padding, but for two letters it also specifies the
				// maximum length.
				value = date.getFullYear();
				if ( length === 2 ) {
					value = String( value );
					value = +value.substr( value.length - 2 );
				}
				break;

			case "Y":

				// Year in "Week of Year"
				// The length specifies the padding, but for two letters it also specifies the
				// maximum length.
				// yearInWeekofYear = date + DaysInAWeek - (dayOfWeek - firstDay) - minDays
				value = new Date( date.getTime() );
				value.setDate(
					value.getDate() + 7 -
					dateDayOfWeek( date, properties.firstDay ) -
					properties.firstDay -
					properties.minDays
				);
				value = value.getFullYear();
				if ( length === 2 ) {
					value = String( value );
					value = +value.substr( value.length - 2 );
				}
				break;

			// Quarter
			case "Q":
			case "q":
				value = Math.ceil( ( date.getMonth() + 1 ) / 3 );
				if ( length > 2 ) {
					value = properties.quarters[ chr ][ length ][ value ];
				}
				break;

			// Month
			case "M":
			case "L":
				value = date.getMonth() + 1;
				if ( length > 2 ) {
					value = properties.months[ chr ][ length ][ value ];
				}
				break;

			// Week
			case "w":

				// Week of Year.
				// woy = ceil( ( doy + dow of 1/1 ) / 7 ) - minDaysStuff ? 1 : 0.
				// TODO should pad on ww? Not documented, but I guess so.
				value = dateDayOfWeek( dateStartOf( date, "year" ), properties.firstDay );
				value = Math.ceil( ( dateDayOfYear( date ) + value ) / 7 ) -
					( 7 - value >= properties.minDays ? 0 : 1 );
				break;

			case "W":

				// Week of Month.
				// wom = ceil( ( dom + dow of `1/month` ) / 7 ) - minDaysStuff ? 1 : 0.
				value = dateDayOfWeek( dateStartOf( date, "month" ), properties.firstDay );
				value = Math.ceil( ( date.getDate() + value ) / 7 ) -
					( 7 - value >= properties.minDays ? 0 : 1 );
				break;

			// Day
			case "d":
				value = date.getDate();
				break;

			case "D":
				value = dateDayOfYear( date ) + 1;
				break;

			case "F":

				// Day of Week in month. eg. 2nd Wed in July.
				value = Math.floor( date.getDate() / 7 ) + 1;
				break;

			// Week day
			case "e":
			case "c":
				if ( length <= 2 ) {

					// Range is [1-7] (deduced by example provided on documentation)
					// TODO Should pad with zeros (not specified in the docs)?
					value = dateDayOfWeek( date, properties.firstDay ) + 1;
					break;
				}

			/* falls through */
			case "E":
				value = dateWeekDays[ date.getDay() ];
				value = properties.days[ chr ][ length ][ value ];
				break;

			// Period (AM or PM)
			case "a":
				value = properties.dayPeriods[ date.getHours() < 12 ? "am" : "pm" ];
				break;

			// Hour
			case "h": // 1-12
				value = ( date.getHours() % 12 ) || 12;
				break;

			case "H": // 0-23
				value = date.getHours();
				break;

			case "K": // 0-11
				value = date.getHours() % 12;
				break;

			case "k": // 1-24
				value = date.getHours() || 24;
				break;

			// Minute
			case "m":
				value = date.getMinutes();
				break;

			// Second
			case "s":
				value = date.getSeconds();
				break;

			case "S":
				value = Math.round( date.getMilliseconds() * Math.pow( 10, length - 3 ) );
				break;

			case "A":
				value = Math.round( dateMillisecondsInDay( date ) * Math.pow( 10, length - 3 ) );
				break;

			// Zone
			case "z":
				break;

			case "v":

				// v...vvv: "{shortRegion}", eg. "PT".
				// vvvv: "{regionName} {Time}",
				//       e.g., "Pacific Time".
				if ( properties.genericTzName ) {
					value = properties.genericTzName;
					break;
				}

			/* falls through */
			case "V":

				//VVVV: "{explarCity} {Time}", e.g., "Los Angeles Time"
				if ( properties.timeZoneName ) {
					value = properties.timeZoneName;
					break;
				}

				if ( current === "v" ) {
					length = 1;
				}

			/* falls through */
			case "O":

				// O: "{gmtFormat}+H;{gmtFormat}-H" or "{gmtZeroFormat}", eg. "GMT-8" or "GMT".
				// OOOO: "{gmtFormat}{hourFormat}" or "{gmtZeroFormat}", eg. "GMT-08:00" or "GMT".
				if ( date.getTimezoneOffset() === 0 ) {
					value = properties.gmtZeroFormat;
				} else {

					// If O..OOO and timezone offset has non-zero minutes, show minutes.
					if ( length < 4 ) {
						aux = date.getTimezoneOffset();
						aux = properties.hourFormat[ aux % 60 - aux % 1 === 0 ? 0 : 1 ];
					} else {
						aux = properties.hourFormat;
					}

					value = dateTimezoneHourFormat(
						date,
						aux,
						timeSeparator,
						numberFormatters
					);
					value = properties.gmtFormat.replace( /\{0\}/, value );
				}
				break;

			case "X":

				// Same as x*, except it uses "Z" for zero offset.
				if ( date.getTimezoneOffset() === 0 ) {
					value = "Z";
					break;
				}

			/* falls through */
			case "x":

				// x: hourFormat("+HH[mm];-HH[mm]")
				// xx: hourFormat("+HHmm;-HHmm")
				// xxx: hourFormat("+HH:mm;-HH:mm")
				// xxxx: hourFormat("+HHmm[ss];-HHmm[ss]")
				// xxxxx: hourFormat("+HH:mm[:ss];-HH:mm[:ss]")
				aux = date.getTimezoneOffset();

				// If x and timezone offset has non-zero minutes, use xx (i.e., show minutes).
				if ( length === 1 && aux % 60 - aux % 1 !== 0 ) {
					length += 1;
				}

				// If (xxxx or xxxxx) and timezone offset has zero seconds, use xx or xxx
				// respectively (i.e., don't show optional seconds).
				if ( ( length === 4 || length === 5 ) && aux % 1 === 0 ) {
					length -= 2;
				}

				value = [
					"+HH;-HH",
					"+HHmm;-HHmm",
					"+HH:mm;-HH:mm",
					"+HHmmss;-HHmmss",
					"+HH:mm:ss;-HH:mm:ss"
				][ length - 1 ];

				value = dateTimezoneHourFormat( date, value, ":" );
				break;

			// timeSeparator
			case ":":
				value = timeSeparator;
				break;

			// ' literals.
			case "'":
				value = removeLiteralQuotes( current );
				break;

			// Anything else is considered a literal, including [ ,:/.@#], chinese, japonese, and
			// arabic characters.
			default:
				value = current;

		}
		if ( typeof value === "number" ) {
			value = numberFormatters[ length ]( value );
		}

		dateField = dateFieldsMap[ chr ];
		type = dateField ? dateField : "literal";

		partsPush( parts, type, value );
	});

	return parts;

};




var dateToPartsFormatterFn = function( numberFormatters, properties ) {
	return function dateToPartsFormatter( value ) {
		validateParameterPresence( value, "value" );
		validateParameterTypeDate( value, "value" );

		return dateFormat( value, numberFormatters, properties );
	};

};




function optionsHasStyle( options ) {
	return options.skeleton !== undefined ||
		options.date !== undefined ||
		options.time !== undefined ||
		options.datetime !== undefined ||
		options.raw !== undefined;
}

function validateRequiredCldr( path, value ) {
	validateCldr( path, value, {
		skip: [
			/dates\/calendars\/gregorian\/dateTimeFormats\/availableFormats/,
			/dates\/calendars\/gregorian\/days\/.*\/short/,
			/dates\/timeZoneNames\/zone/,
			/dates\/timeZoneNames\/metazone/,
			/globalize-iana/,
			/supplemental\/metaZones/,
			/supplemental\/timeData\/(?!001)/,
			/supplemental\/weekData\/(?!001)/
		]
	});
}

function validateOptionsPreset( options ) {
	validateOptionsPresetEach( "date", options );
	validateOptionsPresetEach( "time", options );
	validateOptionsPresetEach( "datetime", options );
}

function validateOptionsPresetEach( type, options ) {
	var value = options[ type ];
	validate(
		"E_INVALID_OPTIONS",
		"Invalid `{{type}: \"{value}\"}`.",
		value === undefined || [ "short", "medium", "long", "full" ].indexOf( value ) !== -1,
		{ type: type, value: value }
	);
}

function validateOptionsSkeleton( pattern, skeleton ) {
	validate(
		"E_INVALID_OPTIONS",
		"Invalid `{skeleton: \"{value}\"}` based on provided CLDR.",
		skeleton === undefined || ( typeof pattern === "string" && pattern ),
		{ type: "skeleton", value: skeleton }
	);
}

function validateRequiredIana( timeZone ) {
	return function( path, value ) {

		if ( !/globalize-iana/.test( path ) ) {
			return;
		}

		validate(
			"E_MISSING_IANA_TZ",
			"Missing required IANA timezone content for `{timeZone}`: `{path}`.",
			value,
			{
				path: path.replace( /globalize-iana\//, "" ),
				timeZone: timeZone
			}
		);
	};
}

/**
 * .loadTimeZone( json )
 *
 * @json [JSON]
 *
 * Load IANA timezone data.
 */
Globalize.loadTimeZone = function( json ) {
	var customData = {
			"globalize-iana": json
		};

	validateParameterPresence( json, "json" );
	validateParameterTypePlainObject( json, "json" );

	Cldr.load( customData );
};

/**
 * .dateFormatter( options )
 *
 * @options [Object] see date/expand_pattern for more info.
 *
 * Return a date formatter function (of the form below) according to the given options and the
 * default/instance locale.
 *
 * fn( value )
 *
 * @value [Date]
 *
 * Return a function that formats a date according to the given `format` and the default/instance
 * locale.
 */
Globalize.dateFormatter =
Globalize.prototype.dateFormatter = function( options ) {
	var args, dateToPartsFormatter, returnFn;

	validateParameterTypePlainObject( options, "options" );

	options = options || {};
	if ( !optionsHasStyle( options ) ) {
		options.skeleton = "yMd";
	}
	args = [ options ];

	dateToPartsFormatter = this.dateToPartsFormatter( options );
	returnFn = dateFormatterFn( dateToPartsFormatter );
	runtimeBind( args, this.cldr, returnFn, [ dateToPartsFormatter ] );

	return returnFn;
};

/**
 * .dateToPartsFormatter( options )
 *
 * @options [Object] see date/expand_pattern for more info.
 *
 * Return a date formatter function (of the form below) according to the given options and the
 * default/instance locale.
 *
 * fn( value )
 *
 * @value [Date]
 *
 * Return a function that formats a date to parts according to the given `format`
 * and the default/instance
 * locale.
 */
Globalize.dateToPartsFormatter =
Globalize.prototype.dateToPartsFormatter = function( options ) {
	var args, cldr, numberFormatters, pad, pattern, properties, returnFn,
		timeZone, ianaListener;

	validateParameterTypePlainObject( options, "options" );

	cldr = this.cldr;
	options = options || {};
	if ( !optionsHasStyle( options ) ) {
		options.skeleton = "yMd";
	}

	validateOptionsPreset( options );
	validateDefaultLocale( cldr );

	timeZone = options.timeZone;
	validateParameterTypeString( timeZone, "options.timeZone" );

	args = [ options ];

	cldr.on( "get", validateRequiredCldr );
	if ( timeZone ) {
		ianaListener = validateRequiredIana( timeZone );
		cldr.on( "get", ianaListener );
	}
	try {
		pattern = dateExpandPattern( options, cldr );
		validateOptionsSkeleton( pattern, options.skeleton );
		properties = dateFormatProperties( pattern, cldr, timeZone );
	} finally {
		cldr.off( "get", validateRequiredCldr );
		if ( ianaListener ) {
			cldr.off( "get", ianaListener );
		}
	}

	// Create needed number formatters.
	numberFormatters = properties.numberFormatters;
	delete properties.numberFormatters;
	for ( pad in numberFormatters ) {
		numberFormatters[ pad ] = this.numberFormatter({
			raw: numberFormatters[ pad ]
		});
	}

	returnFn = dateToPartsFormatterFn( numberFormatters, properties );

	runtimeBind( args, cldr, returnFn, [ numberFormatters, properties ] );

	return returnFn;
};

/**
 * .dateParser( options )
 *
 * @options [Object] see date/expand_pattern for more info.
 *
 * Return a function that parses a string date according to the given `formats` and the
 * default/instance locale.
 */
Globalize.dateParser =
Globalize.prototype.dateParser = function( options ) {
	var args, cldr, numberParser, parseProperties, pattern, returnFn, timeZone,
		tokenizerProperties;

	validateParameterTypePlainObject( options, "options" );

	cldr = this.cldr;
	options = options || {};
	if ( !optionsHasStyle( options ) ) {
		options.skeleton = "yMd";
	}

	validateOptionsPreset( options );
	validateDefaultLocale( cldr );

	timeZone = options.timeZone;
	validateParameterTypeString( timeZone, "options.timeZone" );

	args = [ options ];

	try {
		cldr.on( "get", validateRequiredCldr );
		if ( timeZone ) {
			cldr.on( "get", validateRequiredIana( timeZone ) );
		}
		pattern = dateExpandPattern( options, cldr );
		validateOptionsSkeleton( pattern, options.skeleton );
		tokenizerProperties = dateTokenizerProperties( pattern, cldr, timeZone );
		parseProperties = dateParseProperties( cldr, timeZone );
	} finally {
		cldr.off( "get", validateRequiredCldr );
		if ( timeZone ) {
			cldr.off( "get", validateRequiredIana( timeZone ) );
		}
	}
	numberParser = this.numberParser({ raw: "0" });

	returnFn = dateParserFn( numberParser, parseProperties, tokenizerProperties );

	runtimeBind( args, cldr, returnFn, [ numberParser, parseProperties, tokenizerProperties ] );

	return returnFn;
};

/**
 * .formatDate( value, options )
 *
 * @value [Date]
 *
 * @options [Object] see date/expand_pattern for more info.
 *
 * Formats a date or number according to the given options string and the default/instance locale.
 */
Globalize.formatDate =
Globalize.prototype.formatDate = function( value, options ) {
	validateParameterPresence( value, "value" );
	validateParameterTypeDate( value, "value" );

	return this.dateFormatter( options )( value );
};

/**
 * .formatDateToParts( value, options )
 *
 * @value [Date]
 *
 * @options [Object] see date/expand_pattern for more info.
 *
 * Formats a date or number to parts according to the given options and the default/instance locale.
 */
Globalize.formatDateToParts =
Globalize.prototype.formatDateToParts = function( value, options ) {
	validateParameterPresence( value, "value" );
	validateParameterTypeDate( value, "value" );

	return this.dateToPartsFormatter( options )( value );
};

/**
 * .parseDate( value, options )
 *
 * @value [String]
 *
 * @options [Object] see date/expand_pattern for more info.
 *
 * Return a Date instance or null.
 */
Globalize.parseDate =
Globalize.prototype.parseDate = function( value, options ) {
	validateParameterPresence( value, "value" );
	validateParameterTypeString( value, "value" );

	return this.dateParser( options )( value );
};

return Globalize;




}));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(define) {/**
 * Globalize v1.6.0
 *
 * http://github.com/jquery/globalize
 *
 * Copyright 2010, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2020-09-08T11:54Z
 */
/*!
 * Globalize v1.6.0 2020-09-08T11:54Z Released under the MIT license
 * http://git.io/TrdQbw
 */
(function( root, factory ) {

	// UMD returnExports
	if ( typeof define === "function" && define.amd ) {

		// AMD
		define([
			"cldr",
			"../globalize",
			"./number",
			"./plural",
			"cldr/event",
			"cldr/supplemental"
		], factory );
	} else if ( true ) {

		// Node, CommonJS
		module.exports = factory( __webpack_require__( 2 ), __webpack_require__( 1 ) );
	} else {}
}(this, function( Cldr, Globalize ) {

var formatMessage = Globalize._formatMessage,
	runtimeBind = Globalize._runtimeBind,
	validateCldr = Globalize._validateCldr,
	validateDefaultLocale = Globalize._validateDefaultLocale,
	validateParameterPresence = Globalize._validateParameterPresence,
	validateParameterTypeString = Globalize._validateParameterTypeString,
	validateParameterTypeNumber = Globalize._validateParameterTypeNumber;


/**
 * format( value, numberFormatter, pluralGenerator, properties )
 *
 * @value [Number] The number to format
 *
 * @numberFormatter [String] A numberFormatter from Globalize.numberFormatter
 *
 * @pluralGenerator [String] A pluralGenerator from Globalize.pluralGenerator
 *
 * @properties [Object] containing relative time plural message.
 *
 * Format relative time.
 */
var relativeTimeFormat = function( value, numberFormatter, pluralGenerator, properties ) {

	var relativeTime,
		message = properties[ "relative-type-" + value ];

	if ( message ) {
		return message;
	}

	relativeTime = value <= 0 ? properties[ "relativeTime-type-past" ]
		: properties[ "relativeTime-type-future" ];

	value = Math.abs( value );

	message = relativeTime[ "relativeTimePattern-count-" + pluralGenerator( value ) ];
	return formatMessage( message, [ numberFormatter( value ) ] );
};




var relativeTimeFormatterFn = function( numberFormatter, pluralGenerator, properties ) {
	return function relativeTimeFormatter( value ) {
		validateParameterPresence( value, "value" );
		validateParameterTypeNumber( value, "value" );

		return relativeTimeFormat( value, numberFormatter, pluralGenerator, properties );
	};

};




/**
 * properties( unit, cldr, options )
 *
 * @unit [String] eg. "day", "week", "month", etc.
 *
 * @cldr [Cldr instance].
 *
 * @options [Object]
 * - form: [String] eg. "short" or "narrow". Or falsy for default long form.
 *
 * Return relative time properties.
 */
var relativeTimeProperties = function( unit, cldr, options ) {

	var form = options.form,
		raw, properties, key, match;

	if ( form ) {
		unit = unit + "-" + form;
	}

	raw = cldr.main( [ "dates", "fields", unit ] );
	properties = {
		"relativeTime-type-future": raw[ "relativeTime-type-future" ],
		"relativeTime-type-past": raw[ "relativeTime-type-past" ]
	};
	for ( key in raw ) {
		if ( raw.hasOwnProperty( key ) ) {
			match = /relative-type-(-?[0-9]+)/.exec( key );
			if ( match ) {
				properties[ key ] = raw[ key ];
			}
		}
	}

	return properties;
};




/**
 * .formatRelativeTime( value, unit [, options] )
 *
 * @value [Number] The number of unit to format.
 *
 * @unit [String] see .relativeTimeFormatter() for details.
 *
 * @options [Object] see .relativeTimeFormatter() for details.
 *
 * Formats a relative time according to the given unit, options, and the default/instance locale.
 */
Globalize.formatRelativeTime =
Globalize.prototype.formatRelativeTime = function( value, unit, options ) {
	validateParameterPresence( value, "value" );
	validateParameterTypeNumber( value, "value" );

	return this.relativeTimeFormatter( unit, options )( value );
};

/**
 * .relativeTimeFormatter( unit [, options ])
 *
 * @unit [String] String value indicating the unit to be formatted. eg. "day", "week", "month", etc.
 *
 * @options [Object]
 * - form: [String] eg. "short" or "narrow". Or falsy for default long form.
 *
 * Returns a function that formats a relative time according to the given unit, options, and the
 * default/instance locale.
 */
Globalize.relativeTimeFormatter =
Globalize.prototype.relativeTimeFormatter = function( unit, options ) {
	var args, cldr, numberFormatter, pluralGenerator, properties, returnFn;

	validateParameterPresence( unit, "unit" );
	validateParameterTypeString( unit, "unit" );

	cldr = this.cldr;
	options = options || {};

	args = [ unit, options ];

	validateDefaultLocale( cldr );

	cldr.on( "get", validateCldr );
	try {
		properties = relativeTimeProperties( unit, cldr, options );
	} finally {
		cldr.off( "get", validateCldr );
	}
	numberFormatter = this.numberFormatter( options );
	pluralGenerator = this.pluralGenerator();

	returnFn = relativeTimeFormatterFn( numberFormatter, pluralGenerator, properties );

	runtimeBind( args, cldr, returnFn, [ numberFormatter, pluralGenerator, properties ] );

	return returnFn;
};

return Globalize;




}));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(define) {/**
 * Globalize v1.6.0
 *
 * http://github.com/jquery/globalize
 *
 * Copyright 2010, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2020-09-08T11:54Z
 */
/*!
 * Globalize v1.6.0 2020-09-08T11:54Z Released under the MIT license
 * http://git.io/TrdQbw
 */
(function( root, factory ) {

	// UMD returnExports
	if ( typeof define === "function" && define.amd ) {

		// AMD
		define([
			"cldr",
			"../globalize",
			"./number",
			"./plural"
		], factory );
	} else if ( true ) {

		// Node, CommonJS
		module.exports = factory( __webpack_require__( 2 ), __webpack_require__( 1 ) );
	} else {}
}(this, function( Cldr, Globalize ) {

var formatMessage = Globalize._formatMessage,
	runtimeBind = Globalize._runtimeBind,
	validateParameterPresence = Globalize._validateParameterPresence,
	validateParameterTypePlainObject = Globalize._validateParameterTypePlainObject,
	validateParameterTypeNumber = Globalize._validateParameterTypeNumber,
	validateParameterTypeString = Globalize._validateParameterTypeString;


/**
 * format( value, numberFormatter, pluralGenerator, unitProperies )
 *
 * @value [Number]
 *
 * @numberFormatter [Object]: A numberFormatter from Globalize.numberFormatter.
 *
 * @pluralGenerator [Object]: A pluralGenerator from Globalize.pluralGenerator.
 *
 * @unitProperies [Object]: localized unit data from cldr.
 *
 * Format units such as seconds, minutes, days, weeks, etc.
 *
 * OBS:
 *
 * Unit Sequences are not implemented.
 * http://www.unicode.org/reports/tr35/tr35-35/tr35-general.html#Unit_Sequences
 *
 * Duration Unit (for composed time unit durations) is not implemented.
 * http://www.unicode.org/reports/tr35/tr35-35/tr35-general.html#durationUnit
 */
var unitFormat = function( value, numberFormatter, pluralGenerator, unitProperties ) {
	var compoundUnitPattern = unitProperties.compoundUnitPattern, dividend, dividendProperties,
		formattedValue, divisor, divisorProperties, message, pluralValue, oneProperty;

	unitProperties = unitProperties.unitProperties;
	formattedValue = numberFormatter( value );
	pluralValue = pluralGenerator( value );

	// computed compound unit, eg. "megabyte-per-second".
	if ( unitProperties instanceof Array ) {
		dividendProperties = unitProperties[ 0 ];
		divisorProperties = unitProperties[ 1 ];
		oneProperty = divisorProperties.hasOwnProperty( "one" ) ? "one" : "other";

		dividend = formatMessage( dividendProperties[ pluralValue ], [ formattedValue ] );
		divisor = formatMessage( divisorProperties[oneProperty], [ "" ] ).trim();

		return formatMessage( compoundUnitPattern, [ dividend, divisor ] );
	}

	message = unitProperties[ pluralValue ];

	return formatMessage( message, [ formattedValue ] );
};




var unitFormatterFn = function( numberFormatter, pluralGenerator, unitProperties ) {
	return function unitFormatter( value ) {
		validateParameterPresence( value, "value" );
		validateParameterTypeNumber( value, "value" );

		return unitFormat( value, numberFormatter, pluralGenerator, unitProperties );
	};

};




/**
 * categories()
 *
 * Return all unit categories.
 */
var unitCategories = [ "acceleration", "angle", "area", "digital", "duration", "length", "mass", "power",
"pressure", "speed", "temperature", "volume" ];




function stripPluralGarbage( data ) {
	var aux, pluralCount;

	if ( data ) {
		aux = {};
		for ( pluralCount in data ) {
			aux[ pluralCount.replace( /unitPattern-count-/, "" ) ] = data[ pluralCount ];
		}
	}

	return aux;
}

/**
 * get( unit, form, cldr )
 *
 * @unit [String] The full type-unit name (eg. duration-second), or the short unit name
 * (eg. second).
 *
 * @form [String] A string describing the form of the unit representation (eg. long,
 * short, narrow).
 *
 * @cldr [Cldr instance].
 *
 * Return the plural map of a unit, eg: "second"
 * { "one": "{0} second",
 *   "other": "{0} seconds" }
 * }
 *
 * Or the Array of plural maps of a compound-unit, eg: "foot-per-second"
 * [ { "one": "{0} foot",
 *     "other": "{0} feet" },
 *   { "one": "{0} second",
 *     "other": "{0} seconds" } ]
 *
 * Uses the precomputed form of a compound-unit if available, eg: "mile-per-hour"
 * { "displayName": "miles per hour",
 *    "unitPattern-count-one": "{0} mile per hour",
 *    "unitPattern-count-other": "{0} miles per hour"
 * },
 *
 * Also supports "/" instead of "-per-", eg. "foot/second", using the precomputed form if
 * available.
 *
 * Or the Array of plural maps of a compound-unit, eg: "foot-per-second"
 * [ { "one": "{0} foot",
 *     "other": "{0} feet" },
 *   { "one": "{0} second",
 *     "other": "{0} seconds" } ]
 *
 * Or undefined in case the unit (or a unit of the compound-unit) doesn't exist.
 */
var get = function( unit, form, cldr ) {
	var ret;

	// Ensure that we get the 'precomputed' form, if present.
	unit = unit.replace( /\//, "-per-" );

	// Get unit or <category>-unit (eg. "duration-second").
	[ "" ].concat( unitCategories ).some(function( category ) {
		return ret = cldr.main([
			"units",
			form,
			category.length ? category + "-" + unit : unit
		]);
	});

	// Rename keys s/unitPattern-count-//g.
	ret = stripPluralGarbage( ret );

	// Compound Unit, eg. "foot-per-second" or "foot/second".
	if ( !ret && ( /-per-/ ).test( unit ) ) {

		// "Some units already have 'precomputed' forms, such as kilometer-per-hour;
		// where such units exist, they should be used in preference" UTS#35.
		// Note that precomputed form has already been handled above (!ret).

		// Get both recursively.
		unit = unit.split( "-per-" );
		ret = unit.map(function( unit ) {
			return get( unit, form, cldr );
		});
		if ( !ret[ 0 ] || !ret[ 1 ] ) {
			return;
		}
	}

	return ret;
};

var unitGet = get;




/**
 * properties( unit, form, cldr )
 *
 * @unit [String] The full type-unit name (eg. duration-second), or the short unit name
 * (eg. second).
 *
 * @form [String] A string describing the form of the unit representation (eg. long,
 * short, narrow).
 *
 * @cldr [Cldr instance].
 */
var unitProperties = function( unit, form, cldr ) {
	var compoundUnitPattern, unitProperties;

	compoundUnitPattern = cldr.main( [ "units", form, "per/compoundUnitPattern" ] );
	unitProperties = unitGet( unit, form, cldr );

	return {
		compoundUnitPattern: compoundUnitPattern,
		unitProperties: unitProperties
	};
};




/**
 * Globalize.formatUnit( value, unit, options )
 *
 * @value [Number]
 *
 * @unit [String]: The unit (e.g "second", "day", "year")
 *
 * @options [Object]
 * - form: [String] "long", "short" (default), or "narrow".
 *
 * Format units such as seconds, minutes, days, weeks, etc.
 */
Globalize.formatUnit =
Globalize.prototype.formatUnit = function( value, unit, options ) {
	validateParameterPresence( value, "value" );
	validateParameterTypeNumber( value, "value" );

	return this.unitFormatter( unit, options )( value );
};

/**
 * Globalize.unitFormatter( unit, options )
 *
 * @unit [String]: The unit (e.g "second", "day", "year")
 *
 * @options [Object]
 * - form: [String] "long", "short" (default), or "narrow".
 *
 * - numberFormatter: [Function] a number formatter function. Defaults to Globalize
 *   `.numberFormatter()` for the current locale using the default options.
 */
Globalize.unitFormatter =
Globalize.prototype.unitFormatter = function( unit, options ) {
	var args, form, numberFormatter, pluralGenerator, returnFn, properties;

	validateParameterPresence( unit, "unit" );
	validateParameterTypeString( unit, "unit" );

	validateParameterTypePlainObject( options, "options" );

	options = options || {};

	args = [ unit, options ];
	form = options.form || "long";
	properties = unitProperties( unit, form, this.cldr );

	numberFormatter = options.numberFormatter || this.numberFormatter();
	pluralGenerator = this.pluralGenerator();
	returnFn = unitFormatterFn( numberFormatter, pluralGenerator, properties );

	runtimeBind( args, this.cldr, returnFn, [ numberFormatter, pluralGenerator, properties ] );

	return returnFn;
};

return Globalize;




}));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ })
/******/ ]);
//# sourceMappingURL=visual.js.map