module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ({

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("c5xW");


/***/ }),

/***/ "1Tbd":
/***/ (function(module, exports) {

module.exports = require("sanitize-html");

/***/ }),

/***/ "7+yl":
/***/ (function(module, exports) {

let urlAlphabet =
  'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict'
module.exports = { urlAlphabet }


/***/ }),

/***/ "Aog/":
/***/ (function(module, exports) {

module.exports = require("@sanity/client");

/***/ }),

/***/ "FwU/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return writeClient; });
const sanityClient = __webpack_require__("Aog/");

const tkn = "skMXye8pdO7eb6iVJin58jAaQWBBtQJaSIKw8mXUnJztatn9qSXbFMU5oMcw0EPfPQsi9m4al6rtf9VH66jEBRNcjbgLgrZhyq81L1gdaRd1VC2RvVyetVANwWjJTKkoQmkUaPoILzOkRhozpdwGbiNOanaKKtaaUFeuYF8NprFzYTIXWjvZ";
const writeClient = sanityClient({
  projectId: "0rqwu0ui",
  dataset: 'production',
  token: tkn,
  useCdn: false
});

/***/ }),

/***/ "PJMN":
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),

/***/ "c5xW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return handler; });
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("k4gg");
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nanoid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nextjs_cors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ue/U");
/* harmony import */ var nextjs_cors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nextjs_cors__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var sanitize_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("1Tbd");
/* harmony import */ var sanitize_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sanitize_html__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_sanityClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("FwU/");
// We need this to generate random keys both here and later when we’ll map React Components

 // Sanitize the html for security reasons


 // RegEx to identify urls and set the comment as unapproved

const urlRegEx = new RegExp("([a-zA-Z0-9]+://)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?([^ ])+");
function handler(req, res) {
  return new Promise(async (resolve, reject) => {
    await nextjs_cors__WEBPACK_IMPORTED_MODULE_1___default()(req, res, {
      // Options
      methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
      origin: "*",
      optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204

    });
    const document = req.body;
    console.log(document);
    document._type = "comment";
    document._key = Object(nanoid__WEBPACK_IMPORTED_MODULE_0__["nanoid"])();
    document._id = document._key;
    document._createdAt = new Date();
    document._blogId = document.blogId;
    document.comment = sanitize_html__WEBPACK_IMPORTED_MODULE_2___default()(document.comment, {
      allowedTags: ["b", "i", "em", "strong", "a", "li", "ul"],
      allowedAttributes: {
        a: ["href"]
      }
    });
    if (!document.name) document.name = "Anonymous";
    if (document.comment.match(urlRegEx)) document.approved = false;else document.approved = true;

    try {
      if (document.parentCommentId) {
        // Remove these values from the document, as they're not expected in the database
        const firstParentId = document.firstParentId;
        const parentCommentId = document.parentCommentId;
        delete document.parentCommentId;
        delete document.firstParentId;
        appendChildComment(firstParentId, parentCommentId, document).then(() => {
          resolve(res.status(200).json({
            message: "Comment Created"
          }));
        });
      } else {
        // If there's no parentCommentId, just create a new comment
        _lib_sanityClient__WEBPACK_IMPORTED_MODULE_3__[/* writeClient */ "a"].create(document).then(() => {
          resolve(res.status(200).json({
            message: "Comment Created"
          }));
        });
      }
    } catch (err) {
      reject(res.status(500).json({
        message: String(err)
      }));
    }
  });
}

const appendChildComment = (firstParentId, parentCommentId, childComment) => {
  return new Promise(async resolve => {
    // Get the first level parent comment
    const query = `*[_type == "comment" && _id == "${firstParentId}"][0]`;
    const parentComment = await _lib_sanityClient__WEBPACK_IMPORTED_MODULE_3__[/* writeClient */ "a"].fetch(query);

    if (!parentComment.childComments) {
      // Parent Comment has no children, just create a new Array with the child comment
      parentComment.childComments = [childComment];
    } else if (parentComment._id === parentCommentId) {
      // Parent Comment is a first level comment, so just append the comment
      parentComment.childComments = [...parentComment.childComments.filter(c => c._id !== childComment._id), childComment]; // The filter is not necessary right now, but in case you want to add an Edit
      // functionality, you'll need this.
    } else {
      // Parent comment is a level two or more nested comment
      // We need to find the actual parent comment in all nested comments
      const childToUpdate = getChildComment(parentComment, parentCommentId);

      if (!childToUpdate.childComments) {
        // Parent comment has no children, create new Array with the new child
        childToUpdate.childComments = [childComment];
      } else {
        // Parent comment already has some children
        // Append the new childComment
        childToUpdate.childComments = [...childToUpdate.childComments.filter(c => c._id !== childComment._id), childComment];
      }
    } // Patch the document


    _lib_sanityClient__WEBPACK_IMPORTED_MODULE_3__[/* writeClient */ "a"].patch(parentComment._id).set(parentComment).commit().then(() => resolve());
  });
};

const getChildComment = (firstParentComment, childCommentId) => {
  var _firstParentComment$c;

  let returnComment = null;
  firstParentComment === null || firstParentComment === void 0 ? void 0 : (_firstParentComment$c = firstParentComment.childComments) === null || _firstParentComment$c === void 0 ? void 0 : _firstParentComment$c.forEach(c => {
    if (c._id == childCommentId) {
      returnComment = c;
    } else if (c.childComments) {
      returnComment = getChildComment(c, childCommentId);
    } else {
      return returnComment;
    }
  });
  return returnComment;
};

/***/ }),

/***/ "k4gg":
/***/ (function(module, exports, __webpack_require__) {

let crypto = __webpack_require__("PJMN")
let { urlAlphabet } = __webpack_require__("7+yl")
const POOL_SIZE_MULTIPLIER = 128
let pool, poolOffset
let fillPool = bytes => {
  if (!pool || pool.length < bytes) {
    pool = Buffer.allocUnsafe(bytes * POOL_SIZE_MULTIPLIER)
    crypto.randomFillSync(pool)
    poolOffset = 0
  } else if (poolOffset + bytes > pool.length) {
    crypto.randomFillSync(pool)
    poolOffset = 0
  }
  poolOffset += bytes
}
let random = bytes => {
  fillPool(bytes)
  return pool.subarray(poolOffset - bytes, poolOffset)
}
let customRandom = (alphabet, size, getRandom) => {
  let mask = (2 << (31 - Math.clz32((alphabet.length - 1) | 1))) - 1
  let step = Math.ceil((1.6 * mask * size) / alphabet.length)
  return () => {
    let id = ''
    while (true) {
      let bytes = getRandom(step)
      let i = step
      while (i--) {
        id += alphabet[bytes[i] & mask] || ''
        if (id.length === size) return id
      }
    }
  }
}
let customAlphabet = (alphabet, size) => customRandom(alphabet, size, random)
let nanoid = (size = 21) => {
  fillPool(size)
  let id = ''
  for (let i = poolOffset - size; i < poolOffset; i++) {
    id += urlAlphabet[pool[i] & 63]
  }
  return id
}
module.exports = { nanoid, customAlphabet, customRandom, urlAlphabet, random }


/***/ }),

/***/ "ue/U":
/***/ (function(module, exports) {

module.exports = require("nextjs-cors");

/***/ })

/******/ });