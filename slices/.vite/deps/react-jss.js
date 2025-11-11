import {
  require_react
} from "./chunk-UNLUE3XC.js";
import {
  __commonJS,
  __toESM
} from "./chunk-5WRI5ZAA.js";

// node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var hasSymbol = typeof Symbol === "function" && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
        function isValidElementType(type) {
          return typeof type === "string" || typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
          type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
            }
          }
          return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
          return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// node_modules/react-is/index.js
var require_react_is = __commonJS({
  "node_modules/react-is/index.js"(exports, module2) {
    "use strict";
    if (false) {
      module2.exports = null;
    } else {
      module2.exports = require_react_is_development();
    }
  }
});

// node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var require_hoist_non_react_statics_cjs = __commonJS({
  "node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(exports, module2) {
    "use strict";
    var reactIs = require_react_is();
    var REACT_STATICS = {
      childContextTypes: true,
      contextType: true,
      contextTypes: true,
      defaultProps: true,
      displayName: true,
      getDefaultProps: true,
      getDerivedStateFromError: true,
      getDerivedStateFromProps: true,
      mixins: true,
      propTypes: true,
      type: true
    };
    var KNOWN_STATICS = {
      name: true,
      length: true,
      prototype: true,
      caller: true,
      callee: true,
      arguments: true,
      arity: true
    };
    var FORWARD_REF_STATICS = {
      "$$typeof": true,
      render: true,
      defaultProps: true,
      displayName: true,
      propTypes: true
    };
    var MEMO_STATICS = {
      "$$typeof": true,
      compare: true,
      defaultProps: true,
      displayName: true,
      propTypes: true,
      type: true
    };
    var TYPE_STATICS = {};
    TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
    TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
    function getStatics(component) {
      if (reactIs.isMemo(component)) {
        return MEMO_STATICS;
      }
      return TYPE_STATICS[component["$$typeof"]] || REACT_STATICS;
    }
    var defineProperty = Object.defineProperty;
    var getOwnPropertyNames = Object.getOwnPropertyNames;
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var getPrototypeOf = Object.getPrototypeOf;
    var objectPrototype = Object.prototype;
    function hoistNonReactStatics2(targetComponent, sourceComponent, blacklist) {
      if (typeof sourceComponent !== "string") {
        if (objectPrototype) {
          var inheritedComponent = getPrototypeOf(sourceComponent);
          if (inheritedComponent && inheritedComponent !== objectPrototype) {
            hoistNonReactStatics2(targetComponent, inheritedComponent, blacklist);
          }
        }
        var keys = getOwnPropertyNames(sourceComponent);
        if (getOwnPropertySymbols) {
          keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }
        var targetStatics = getStatics(targetComponent);
        var sourceStatics = getStatics(sourceComponent);
        for (var i = 0; i < keys.length; ++i) {
          var key = keys[i];
          if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
            var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
            try {
              defineProperty(targetComponent, key, descriptor);
            } catch (e) {
            }
          }
        }
      }
      return targetComponent;
    }
    module2.exports = hoistNonReactStatics2;
  }
});

// node_modules/object-assign/index.js
var require_object_assign = __commonJS({
  "node_modules/object-assign/index.js"(exports, module2) {
    "use strict";
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val === null || val === void 0) {
        throw new TypeError("Object.assign cannot be called with null or undefined");
      }
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        }
        var test1 = new String("abc");
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") {
          return false;
        }
        var test2 = {};
        for (var i = 0; i < 10; i++) {
          test2["_" + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
          return test2[n];
        });
        if (order2.join("") !== "0123456789") {
          return false;
        }
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
          test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
          return false;
        }
        return true;
      } catch (err) {
        return false;
      }
    }
    module2.exports = shouldUseNative() ? Object.assign : function(target, source) {
      var from;
      var to = toObject(target);
      var symbols;
      for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);
        for (var key in from) {
          if (hasOwnProperty.call(from, key)) {
            to[key] = from[key];
          }
        }
        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from);
          for (var i = 0; i < symbols.length; i++) {
            if (propIsEnumerable.call(from, symbols[i])) {
              to[symbols[i]] = from[symbols[i]];
            }
          }
        }
      }
      return to;
    };
  }
});

// node_modules/prop-types/lib/ReactPropTypesSecret.js
var require_ReactPropTypesSecret = __commonJS({
  "node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module2) {
    "use strict";
    var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    module2.exports = ReactPropTypesSecret;
  }
});

// node_modules/prop-types/lib/has.js
var require_has = __commonJS({
  "node_modules/prop-types/lib/has.js"(exports, module2) {
    module2.exports = Function.call.bind(Object.prototype.hasOwnProperty);
  }
});

// node_modules/prop-types/checkPropTypes.js
var require_checkPropTypes = __commonJS({
  "node_modules/prop-types/checkPropTypes.js"(exports, module2) {
    "use strict";
    var printWarning = function() {
    };
    if (true) {
      ReactPropTypesSecret = require_ReactPropTypesSecret();
      loggedTypeFailures = {};
      has = require_has();
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    var ReactPropTypesSecret;
    var loggedTypeFailures;
    var has;
    function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
      if (true) {
        for (var typeSpecName in typeSpecs) {
          if (has(typeSpecs, typeSpecName)) {
            var error;
            try {
              if (typeof typeSpecs[typeSpecName] !== "function") {
                var err = Error(
                  (componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                );
                err.name = "Invariant Violation";
                throw err;
              }
              error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
            } catch (ex) {
              error = ex;
            }
            if (error && !(error instanceof Error)) {
              printWarning(
                (componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
              );
            }
            if (error instanceof Error && !(error.message in loggedTypeFailures)) {
              loggedTypeFailures[error.message] = true;
              var stack = getStack ? getStack() : "";
              printWarning(
                "Failed " + location + " type: " + error.message + (stack != null ? stack : "")
              );
            }
          }
        }
      }
    }
    checkPropTypes.resetWarningCache = function() {
      if (true) {
        loggedTypeFailures = {};
      }
    };
    module2.exports = checkPropTypes;
  }
});

// node_modules/prop-types/factoryWithTypeCheckers.js
var require_factoryWithTypeCheckers = __commonJS({
  "node_modules/prop-types/factoryWithTypeCheckers.js"(exports, module2) {
    "use strict";
    var ReactIs = require_react_is();
    var assign = require_object_assign();
    var ReactPropTypesSecret = require_ReactPropTypesSecret();
    var has = require_has();
    var checkPropTypes = require_checkPropTypes();
    var printWarning = function() {
    };
    if (true) {
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    function emptyFunctionThatReturnsNull() {
      return null;
    }
    module2.exports = function(isValidElement, throwOnDirectAccess) {
      var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === "function") {
          return iteratorFn;
        }
      }
      var ANONYMOUS = "<<anonymous>>";
      var ReactPropTypes = {
        array: createPrimitiveTypeChecker("array"),
        bigint: createPrimitiveTypeChecker("bigint"),
        bool: createPrimitiveTypeChecker("boolean"),
        func: createPrimitiveTypeChecker("function"),
        number: createPrimitiveTypeChecker("number"),
        object: createPrimitiveTypeChecker("object"),
        string: createPrimitiveTypeChecker("string"),
        symbol: createPrimitiveTypeChecker("symbol"),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
      };
      function is(x, y) {
        if (x === y) {
          return x !== 0 || 1 / x === 1 / y;
        } else {
          return x !== x && y !== y;
        }
      }
      function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === "object" ? data : {};
        this.stack = "";
      }
      PropTypeError.prototype = Error.prototype;
      function createChainableTypeChecker(validate) {
        if (true) {
          var manualPropTypeCallCache = {};
          var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
          componentName = componentName || ANONYMOUS;
          propFullName = propFullName || propName;
          if (secret !== ReactPropTypesSecret) {
            if (throwOnDirectAccess) {
              var err = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
              );
              err.name = "Invariant Violation";
              throw err;
            } else if (typeof console !== "undefined") {
              var cacheKey = componentName + ":" + propName;
              if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
              manualPropTypeWarningCount < 3) {
                printWarning(
                  "You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
                );
                manualPropTypeCallCache[cacheKey] = true;
                manualPropTypeWarningCount++;
              }
            }
          }
          if (props[propName] == null) {
            if (isRequired) {
              if (props[propName] === null) {
                return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
              }
              return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
            }
            return null;
          } else {
            return validate(props, propName, componentName, location, propFullName);
          }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
      }
      function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== expectedType) {
            var preciseType = getPreciseType(propValue);
            return new PropTypeError(
              "Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."),
              { expectedType }
            );
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
      }
      function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
          }
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
          }
          for (var i = 0; i < propValue.length; i++) {
            var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
            if (error instanceof Error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!isValidElement(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!ReactIs.isValidElementType(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            var actualClassName = getClassName(props[propName]);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
          if (true) {
            if (arguments.length > 1) {
              printWarning(
                "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
              );
            } else {
              printWarning("Invalid argument supplied to oneOf, expected an array.");
            }
          }
          return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          for (var i = 0; i < expectedValues.length; i++) {
            if (is(propValue, expectedValues[i])) {
              return null;
            }
          }
          var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
            var type = getPreciseType(value);
            if (type === "symbol") {
              return String(value);
            }
            return value;
          });
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
          }
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
          }
          for (var key in propValue) {
            if (has(propValue, key)) {
              var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error instanceof Error) {
                return error;
              }
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
          true ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
          return emptyFunctionThatReturnsNull;
        }
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (typeof checker !== "function") {
            printWarning(
              "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + "."
            );
            return emptyFunctionThatReturnsNull;
          }
        }
        function validate(props, propName, componentName, location, propFullName) {
          var expectedTypes = [];
          for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
            var checker2 = arrayOfTypeCheckers[i2];
            var checkerResult = checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
            if (checkerResult == null) {
              return null;
            }
            if (checkerResult.data && has(checkerResult.data, "expectedType")) {
              expectedTypes.push(checkerResult.data.expectedType);
            }
          }
          var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          if (!isNode(props[propName])) {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError(
          (componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`."
        );
      }
      function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          var allKeys = assign({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (has(shapeTypes, key) && typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            if (!checker) {
              return new PropTypeError(
                "Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  ")
              );
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function isNode(propValue) {
        switch (typeof propValue) {
          case "number":
          case "string":
          case "undefined":
            return true;
          case "boolean":
            return !propValue;
          case "object":
            if (Array.isArray(propValue)) {
              return propValue.every(isNode);
            }
            if (propValue === null || isValidElement(propValue)) {
              return true;
            }
            var iteratorFn = getIteratorFn(propValue);
            if (iteratorFn) {
              var iterator = iteratorFn.call(propValue);
              var step;
              if (iteratorFn !== propValue.entries) {
                while (!(step = iterator.next()).done) {
                  if (!isNode(step.value)) {
                    return false;
                  }
                }
              } else {
                while (!(step = iterator.next()).done) {
                  var entry = step.value;
                  if (entry) {
                    if (!isNode(entry[1])) {
                      return false;
                    }
                  }
                }
              }
            } else {
              return false;
            }
            return true;
          default:
            return false;
        }
      }
      function isSymbol(propType, propValue) {
        if (propType === "symbol") {
          return true;
        }
        if (!propValue) {
          return false;
        }
        if (propValue["@@toStringTag"] === "Symbol") {
          return true;
        }
        if (typeof Symbol === "function" && propValue instanceof Symbol) {
          return true;
        }
        return false;
      }
      function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
          return "array";
        }
        if (propValue instanceof RegExp) {
          return "object";
        }
        if (isSymbol(propType, propValue)) {
          return "symbol";
        }
        return propType;
      }
      function getPreciseType(propValue) {
        if (typeof propValue === "undefined" || propValue === null) {
          return "" + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === "object") {
          if (propValue instanceof Date) {
            return "date";
          } else if (propValue instanceof RegExp) {
            return "regexp";
          }
        }
        return propType;
      }
      function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch (type) {
          case "array":
          case "object":
            return "an " + type;
          case "boolean":
          case "date":
          case "regexp":
            return "a " + type;
          default:
            return type;
        }
      }
      function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
          return ANONYMOUS;
        }
        return propValue.constructor.name;
      }
      ReactPropTypes.checkPropTypes = checkPropTypes;
      ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
  }
});

// node_modules/prop-types/index.js
var require_prop_types = __commonJS({
  "node_modules/prop-types/index.js"(exports, module2) {
    if (true) {
      ReactIs = require_react_is();
      throwOnDirectAccess = true;
      module2.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
    } else {
      module2.exports = null();
    }
    var ReactIs;
    var throwOnDirectAccess;
  }
});

// node_modules/react-display-name/lib/getDisplayName.js
var require_getDisplayName = __commonJS({
  "node_modules/react-display-name/lib/getDisplayName.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = getDisplayName4;
    function getDisplayName4(Component) {
      return Component.displayName || Component.name || (typeof Component === "string" && Component.length > 0 ? Component : "Unknown");
    }
  }
});

// node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}

// node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}

// node_modules/react-jss/dist/react-jss.esm.js
var import_react2 = __toESM(require_react());
var import_hoist_non_react_statics2 = __toESM(require_hoist_non_react_statics_cjs());

// node_modules/theming/dist/theming.esm.js
var import_react = __toESM(require_react());

// node_modules/tiny-warning/dist/tiny-warning.esm.js
var isProduction = false;
function warning(condition, message) {
  if (!isProduction) {
    if (condition) {
      return;
    }
    var text = "Warning: " + message;
    if (typeof console !== "undefined") {
      console.warn(text);
    }
    try {
      throw Error(text);
    } catch (x) {
    }
  }
}
var tiny_warning_esm_default = warning;

// node_modules/theming/dist/theming.esm.js
var import_prop_types = __toESM(require_prop_types());
var import_hoist_non_react_statics = __toESM(require_hoist_non_react_statics_cjs());
var import_react_display_name = __toESM(require_getDisplayName());
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _extends2() {
  _extends2 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends2.apply(this, arguments);
}
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
function _assertThisInitialized(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function isObject(obj) {
  return obj !== null && typeof obj === "object" && !Array.isArray(obj);
}
function createThemeProvider(context) {
  var ThemeProvider2 = (function(_React$Component) {
    _inheritsLoose(ThemeProvider3, _React$Component);
    function ThemeProvider3() {
      var _this;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "cachedTheme", void 0);
      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "lastOuterTheme", void 0);
      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "lastTheme", void 0);
      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderProvider", function(outerTheme) {
        var children = _this.props.children;
        return import_react.default.createElement(context.Provider, {
          value: _this.getTheme(outerTheme)
        }, children);
      });
      return _this;
    }
    var _proto = ThemeProvider3.prototype;
    _proto.getTheme = function getTheme(outerTheme) {
      if (this.props.theme !== this.lastTheme || outerTheme !== this.lastOuterTheme || !this.cachedTheme) {
        this.lastOuterTheme = outerTheme;
        this.lastTheme = this.props.theme;
        if (typeof this.lastTheme === "function") {
          var theme = this.props.theme;
          this.cachedTheme = theme(outerTheme);
          true ? tiny_warning_esm_default(isObject(this.cachedTheme), "[ThemeProvider] Please return an object from your theme function") : void 0;
        } else {
          var _theme = this.props.theme;
          true ? tiny_warning_esm_default(isObject(_theme), "[ThemeProvider] Please make your theme prop a plain object") : void 0;
          this.cachedTheme = outerTheme ? _extends2({}, outerTheme, _theme) : _theme;
        }
      }
      return this.cachedTheme;
    };
    _proto.render = function render() {
      var children = this.props.children;
      if (!children) {
        return null;
      }
      return import_react.default.createElement(context.Consumer, null, this.renderProvider);
    };
    return ThemeProvider3;
  })(import_react.default.Component);
  if (true) {
    ThemeProvider2.propTypes = {
      // eslint-disable-next-line react/require-default-props
      children: import_prop_types.default.node,
      theme: import_prop_types.default.oneOfType([import_prop_types.default.shape({}), import_prop_types.default.func]).isRequired
    };
  }
  return ThemeProvider2;
}
function createWithTheme(context) {
  return function hoc(Component) {
    var withTheme2 = import_react.default.forwardRef(function(props, ref) {
      return import_react.default.createElement(context.Consumer, null, function(theme) {
        true ? tiny_warning_esm_default(isObject(theme), "[theming] Please use withTheme only with the ThemeProvider") : void 0;
        return import_react.default.createElement(Component, _extends2({
          theme,
          ref
        }, props));
      });
    });
    if (true) {
      withTheme2.displayName = "WithTheme(" + (0, import_react_display_name.default)(Component) + ")";
    }
    (0, import_hoist_non_react_statics.default)(withTheme2, Component);
    return withTheme2;
  };
}
function createUseTheme(context) {
  var useTheme2 = function useTheme3() {
    var theme = import_react.default.useContext(context);
    true ? tiny_warning_esm_default(isObject(theme), "[theming] Please use useTheme only with the ThemeProvider") : void 0;
    return theme;
  };
  return useTheme2;
}
function createTheming(context) {
  return {
    context,
    withTheme: createWithTheme(context),
    useTheme: createUseTheme(context),
    ThemeProvider: createThemeProvider(context)
  };
}
var ThemeContext = (0, import_react.createContext)();
var _createTheming = createTheming(ThemeContext);
var withTheme = _createTheming.withTheme;
var ThemeProvider = _createTheming.ThemeProvider;
var useTheme = _createTheming.useTheme;

// node_modules/is-in-browser/dist/module.js
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
  return typeof obj;
} : function(obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};
var isBrowser = (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" && (typeof document === "undefined" ? "undefined" : _typeof(document)) === "object" && document.nodeType === 9;
var module_default = isBrowser;

// node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof2(o) {
  "@babel/helpers - typeof";
  return _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof2(o);
}

// node_modules/@babel/runtime/helpers/esm/toPrimitive.js
function toPrimitive(t, r) {
  if ("object" != _typeof2(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof2(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}

// node_modules/@babel/runtime/helpers/esm/toPropertyKey.js
function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof2(i) ? i : i + "";
}

// node_modules/@babel/runtime/helpers/esm/createClass.js
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: false
  }), e;
}

// node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t2, e2) {
    return t2.__proto__ = e2, t2;
  }, _setPrototypeOf(t, e);
}

// node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function _inheritsLoose2(t, o) {
  t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o);
}

// node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized2(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}

// node_modules/jss/dist/jss.esm.js
var plainObjectConstrurctor = {}.constructor;
function cloneStyle(style) {
  if (style == null || typeof style !== "object") return style;
  if (Array.isArray(style)) return style.map(cloneStyle);
  if (style.constructor !== plainObjectConstrurctor) return style;
  var newStyle = {};
  for (var name in style) {
    newStyle[name] = cloneStyle(style[name]);
  }
  return newStyle;
}
function createRule(name, decl, options) {
  if (name === void 0) {
    name = "unnamed";
  }
  var jss = options.jss;
  var declCopy = cloneStyle(decl);
  var rule = jss.plugins.onCreateRule(name, declCopy, options);
  if (rule) return rule;
  if (name[0] === "@") {
    true ? tiny_warning_esm_default(false, "[JSS] Unknown rule " + name) : void 0;
  }
  return null;
}
var join = function join2(value, by) {
  var result2 = "";
  for (var i = 0; i < value.length; i++) {
    if (value[i] === "!important") break;
    if (result2) result2 += by;
    result2 += value[i];
  }
  return result2;
};
var toCssValue = function toCssValue2(value) {
  if (!Array.isArray(value)) return value;
  var cssValue = "";
  if (Array.isArray(value[0])) {
    for (var i = 0; i < value.length; i++) {
      if (value[i] === "!important") break;
      if (cssValue) cssValue += ", ";
      cssValue += join(value[i], " ");
    }
  } else cssValue = join(value, ", ");
  if (value[value.length - 1] === "!important") {
    cssValue += " !important";
  }
  return cssValue;
};
function getWhitespaceSymbols(options) {
  if (options && options.format === false) {
    return {
      linebreak: "",
      space: ""
    };
  }
  return {
    linebreak: "\n",
    space: " "
  };
}
function indentStr(str, indent) {
  var result2 = "";
  for (var index4 = 0; index4 < indent; index4++) {
    result2 += "  ";
  }
  return result2 + str;
}
function toCss(selector, style, options) {
  if (options === void 0) {
    options = {};
  }
  var result2 = "";
  if (!style) return result2;
  var _options = options, _options$indent = _options.indent, indent = _options$indent === void 0 ? 0 : _options$indent;
  var fallbacks = style.fallbacks;
  if (options.format === false) {
    indent = -Infinity;
  }
  var _getWhitespaceSymbols = getWhitespaceSymbols(options), linebreak = _getWhitespaceSymbols.linebreak, space = _getWhitespaceSymbols.space;
  if (selector) indent++;
  if (fallbacks) {
    if (Array.isArray(fallbacks)) {
      for (var index4 = 0; index4 < fallbacks.length; index4++) {
        var fallback = fallbacks[index4];
        for (var prop in fallback) {
          var value = fallback[prop];
          if (value != null) {
            if (result2) result2 += linebreak;
            result2 += indentStr(prop + ":" + space + toCssValue(value) + ";", indent);
          }
        }
      }
    } else {
      for (var _prop in fallbacks) {
        var _value = fallbacks[_prop];
        if (_value != null) {
          if (result2) result2 += linebreak;
          result2 += indentStr(_prop + ":" + space + toCssValue(_value) + ";", indent);
        }
      }
    }
  }
  for (var _prop2 in style) {
    var _value2 = style[_prop2];
    if (_value2 != null && _prop2 !== "fallbacks") {
      if (result2) result2 += linebreak;
      result2 += indentStr(_prop2 + ":" + space + toCssValue(_value2) + ";", indent);
    }
  }
  if (!result2 && !options.allowEmpty) return result2;
  if (!selector) return result2;
  indent--;
  if (result2) result2 = "" + linebreak + result2 + linebreak;
  return indentStr("" + selector + space + "{" + result2, indent) + indentStr("}", indent);
}
var escapeRegex = /([[\].#*$><+~=|^:(),"'`\s])/g;
var nativeEscape = typeof CSS !== "undefined" && CSS.escape;
var escape = (function(str) {
  return nativeEscape ? nativeEscape(str) : str.replace(escapeRegex, "\\$1");
});
var BaseStyleRule = (function() {
  function BaseStyleRule2(key, style, options) {
    this.type = "style";
    this.isProcessed = false;
    var sheet = options.sheet, Renderer = options.Renderer;
    this.key = key;
    this.options = options;
    this.style = style;
    if (sheet) this.renderer = sheet.renderer;
    else if (Renderer) this.renderer = new Renderer();
  }
  var _proto = BaseStyleRule2.prototype;
  _proto.prop = function prop(name, value, options) {
    if (value === void 0) return this.style[name];
    var force = options ? options.force : false;
    if (!force && this.style[name] === value) return this;
    var newValue = value;
    if (!options || options.process !== false) {
      newValue = this.options.jss.plugins.onChangeValue(value, name, this);
    }
    var isEmpty = newValue == null || newValue === false;
    var isDefined = name in this.style;
    if (isEmpty && !isDefined && !force) return this;
    var remove = isEmpty && isDefined;
    if (remove) delete this.style[name];
    else this.style[name] = newValue;
    if (this.renderable && this.renderer) {
      if (remove) this.renderer.removeProperty(this.renderable, name);
      else this.renderer.setProperty(this.renderable, name, newValue);
      return this;
    }
    var sheet = this.options.sheet;
    if (sheet && sheet.attached) {
      true ? tiny_warning_esm_default(false, '[JSS] Rule is not linked. Missing sheet option "link: true".') : void 0;
    }
    return this;
  };
  return BaseStyleRule2;
})();
var StyleRule = (function(_BaseStyleRule) {
  _inheritsLoose2(StyleRule2, _BaseStyleRule);
  function StyleRule2(key, style, options) {
    var _this;
    _this = _BaseStyleRule.call(this, key, style, options) || this;
    var selector = options.selector, scoped = options.scoped, sheet = options.sheet, generateId = options.generateId;
    if (selector) {
      _this.selectorText = selector;
    } else if (scoped !== false) {
      _this.id = generateId(_assertThisInitialized2(_assertThisInitialized2(_this)), sheet);
      _this.selectorText = "." + escape(_this.id);
    }
    return _this;
  }
  var _proto2 = StyleRule2.prototype;
  _proto2.applyTo = function applyTo(renderable) {
    var renderer = this.renderer;
    if (renderer) {
      var json = this.toJSON();
      for (var prop in json) {
        renderer.setProperty(renderable, prop, json[prop]);
      }
    }
    return this;
  };
  _proto2.toJSON = function toJSON() {
    var json = {};
    for (var prop in this.style) {
      var value = this.style[prop];
      if (typeof value !== "object") json[prop] = value;
      else if (Array.isArray(value)) json[prop] = toCssValue(value);
    }
    return json;
  };
  _proto2.toString = function toString(options) {
    var sheet = this.options.sheet;
    var link = sheet ? sheet.options.link : false;
    var opts = link ? _extends({}, options, {
      allowEmpty: true
    }) : options;
    return toCss(this.selectorText, this.style, opts);
  };
  _createClass(StyleRule2, [{
    key: "selector",
    set: function set(selector) {
      if (selector === this.selectorText) return;
      this.selectorText = selector;
      var renderer = this.renderer, renderable = this.renderable;
      if (!renderable || !renderer) return;
      var hasChanged = renderer.setSelector(renderable, selector);
      if (!hasChanged) {
        renderer.replaceRule(renderable, this);
      }
    },
    get: function get() {
      return this.selectorText;
    }
  }]);
  return StyleRule2;
})(BaseStyleRule);
var pluginStyleRule = {
  onCreateRule: function onCreateRule(key, style, options) {
    if (key[0] === "@" || options.parent && options.parent.type === "keyframes") {
      return null;
    }
    return new StyleRule(key, style, options);
  }
};
var defaultToStringOptions = {
  indent: 1,
  children: true
};
var atRegExp = /@([\w-]+)/;
var ConditionalRule = (function() {
  function ConditionalRule2(key, styles, options) {
    this.type = "conditional";
    this.isProcessed = false;
    this.key = key;
    var atMatch = key.match(atRegExp);
    this.at = atMatch ? atMatch[1] : "unknown";
    this.query = options.name || "@" + this.at;
    this.options = options;
    this.rules = new RuleList(_extends({}, options, {
      parent: this
    }));
    for (var name in styles) {
      this.rules.add(name, styles[name]);
    }
    this.rules.process();
  }
  var _proto = ConditionalRule2.prototype;
  _proto.getRule = function getRule(name) {
    return this.rules.get(name);
  };
  _proto.indexOf = function indexOf(rule) {
    return this.rules.indexOf(rule);
  };
  _proto.addRule = function addRule(name, style, options) {
    var rule = this.rules.add(name, style, options);
    if (!rule) return null;
    this.options.jss.plugins.onProcessRule(rule);
    return rule;
  };
  _proto.replaceRule = function replaceRule(name, style, options) {
    var newRule = this.rules.replace(name, style, options);
    if (newRule) this.options.jss.plugins.onProcessRule(newRule);
    return newRule;
  };
  _proto.toString = function toString(options) {
    if (options === void 0) {
      options = defaultToStringOptions;
    }
    var _getWhitespaceSymbols = getWhitespaceSymbols(options), linebreak = _getWhitespaceSymbols.linebreak;
    if (options.indent == null) options.indent = defaultToStringOptions.indent;
    if (options.children == null) options.children = defaultToStringOptions.children;
    if (options.children === false) {
      return this.query + " {}";
    }
    var children = this.rules.toString(options);
    return children ? this.query + " {" + linebreak + children + linebreak + "}" : "";
  };
  return ConditionalRule2;
})();
var keyRegExp = /@container|@media|@supports\s+/;
var pluginConditionalRule = {
  onCreateRule: function onCreateRule2(key, styles, options) {
    return keyRegExp.test(key) ? new ConditionalRule(key, styles, options) : null;
  }
};
var defaultToStringOptions$1 = {
  indent: 1,
  children: true
};
var nameRegExp = /@keyframes\s+([\w-]+)/;
var KeyframesRule = (function() {
  function KeyframesRule2(key, frames, options) {
    this.type = "keyframes";
    this.at = "@keyframes";
    this.isProcessed = false;
    var nameMatch = key.match(nameRegExp);
    if (nameMatch && nameMatch[1]) {
      this.name = nameMatch[1];
    } else {
      this.name = "noname";
      true ? tiny_warning_esm_default(false, "[JSS] Bad keyframes name " + key) : void 0;
    }
    this.key = this.type + "-" + this.name;
    this.options = options;
    var scoped = options.scoped, sheet = options.sheet, generateId = options.generateId;
    this.id = scoped === false ? this.name : escape(generateId(this, sheet));
    this.rules = new RuleList(_extends({}, options, {
      parent: this
    }));
    for (var name in frames) {
      this.rules.add(name, frames[name], _extends({}, options, {
        parent: this
      }));
    }
    this.rules.process();
  }
  var _proto = KeyframesRule2.prototype;
  _proto.toString = function toString(options) {
    if (options === void 0) {
      options = defaultToStringOptions$1;
    }
    var _getWhitespaceSymbols = getWhitespaceSymbols(options), linebreak = _getWhitespaceSymbols.linebreak;
    if (options.indent == null) options.indent = defaultToStringOptions$1.indent;
    if (options.children == null) options.children = defaultToStringOptions$1.children;
    if (options.children === false) {
      return this.at + " " + this.id + " {}";
    }
    var children = this.rules.toString(options);
    if (children) children = "" + linebreak + children + linebreak;
    return this.at + " " + this.id + " {" + children + "}";
  };
  return KeyframesRule2;
})();
var keyRegExp$1 = /@keyframes\s+/;
var refRegExp = /\$([\w-]+)/g;
var findReferencedKeyframe = function findReferencedKeyframe2(val, keyframes) {
  if (typeof val === "string") {
    return val.replace(refRegExp, function(match, name) {
      if (name in keyframes) {
        return keyframes[name];
      }
      true ? tiny_warning_esm_default(false, '[JSS] Referenced keyframes rule "' + name + '" is not defined.') : void 0;
      return match;
    });
  }
  return val;
};
var replaceRef = function replaceRef2(style, prop, keyframes) {
  var value = style[prop];
  var refKeyframe = findReferencedKeyframe(value, keyframes);
  if (refKeyframe !== value) {
    style[prop] = refKeyframe;
  }
};
var pluginKeyframesRule = {
  onCreateRule: function onCreateRule3(key, frames, options) {
    return typeof key === "string" && keyRegExp$1.test(key) ? new KeyframesRule(key, frames, options) : null;
  },
  // Animation name ref replacer.
  onProcessStyle: function onProcessStyle(style, rule, sheet) {
    if (rule.type !== "style" || !sheet) return style;
    if ("animation-name" in style) replaceRef(style, "animation-name", sheet.keyframes);
    if ("animation" in style) replaceRef(style, "animation", sheet.keyframes);
    return style;
  },
  onChangeValue: function onChangeValue(val, prop, rule) {
    var sheet = rule.options.sheet;
    if (!sheet) {
      return val;
    }
    switch (prop) {
      case "animation":
        return findReferencedKeyframe(val, sheet.keyframes);
      case "animation-name":
        return findReferencedKeyframe(val, sheet.keyframes);
      default:
        return val;
    }
  }
};
var KeyframeRule = (function(_BaseStyleRule) {
  _inheritsLoose2(KeyframeRule2, _BaseStyleRule);
  function KeyframeRule2() {
    return _BaseStyleRule.apply(this, arguments) || this;
  }
  var _proto = KeyframeRule2.prototype;
  _proto.toString = function toString(options) {
    var sheet = this.options.sheet;
    var link = sheet ? sheet.options.link : false;
    var opts = link ? _extends({}, options, {
      allowEmpty: true
    }) : options;
    return toCss(this.key, this.style, opts);
  };
  return KeyframeRule2;
})(BaseStyleRule);
var pluginKeyframeRule = {
  onCreateRule: function onCreateRule4(key, style, options) {
    if (options.parent && options.parent.type === "keyframes") {
      return new KeyframeRule(key, style, options);
    }
    return null;
  }
};
var FontFaceRule = (function() {
  function FontFaceRule2(key, style, options) {
    this.type = "font-face";
    this.at = "@font-face";
    this.isProcessed = false;
    this.key = key;
    this.style = style;
    this.options = options;
  }
  var _proto = FontFaceRule2.prototype;
  _proto.toString = function toString(options) {
    var _getWhitespaceSymbols = getWhitespaceSymbols(options), linebreak = _getWhitespaceSymbols.linebreak;
    if (Array.isArray(this.style)) {
      var str = "";
      for (var index4 = 0; index4 < this.style.length; index4++) {
        str += toCss(this.at, this.style[index4]);
        if (this.style[index4 + 1]) str += linebreak;
      }
      return str;
    }
    return toCss(this.at, this.style, options);
  };
  return FontFaceRule2;
})();
var keyRegExp$2 = /@font-face/;
var pluginFontFaceRule = {
  onCreateRule: function onCreateRule5(key, style, options) {
    return keyRegExp$2.test(key) ? new FontFaceRule(key, style, options) : null;
  }
};
var ViewportRule = (function() {
  function ViewportRule2(key, style, options) {
    this.type = "viewport";
    this.at = "@viewport";
    this.isProcessed = false;
    this.key = key;
    this.style = style;
    this.options = options;
  }
  var _proto = ViewportRule2.prototype;
  _proto.toString = function toString(options) {
    return toCss(this.key, this.style, options);
  };
  return ViewportRule2;
})();
var pluginViewportRule = {
  onCreateRule: function onCreateRule6(key, style, options) {
    return key === "@viewport" || key === "@-ms-viewport" ? new ViewportRule(key, style, options) : null;
  }
};
var SimpleRule = (function() {
  function SimpleRule2(key, value, options) {
    this.type = "simple";
    this.isProcessed = false;
    this.key = key;
    this.value = value;
    this.options = options;
  }
  var _proto = SimpleRule2.prototype;
  _proto.toString = function toString(options) {
    if (Array.isArray(this.value)) {
      var str = "";
      for (var index4 = 0; index4 < this.value.length; index4++) {
        str += this.key + " " + this.value[index4] + ";";
        if (this.value[index4 + 1]) str += "\n";
      }
      return str;
    }
    return this.key + " " + this.value + ";";
  };
  return SimpleRule2;
})();
var keysMap = {
  "@charset": true,
  "@import": true,
  "@namespace": true
};
var pluginSimpleRule = {
  onCreateRule: function onCreateRule7(key, value, options) {
    return key in keysMap ? new SimpleRule(key, value, options) : null;
  }
};
var plugins = [pluginStyleRule, pluginConditionalRule, pluginKeyframesRule, pluginKeyframeRule, pluginFontFaceRule, pluginViewportRule, pluginSimpleRule];
var defaultUpdateOptions = {
  process: true
};
var forceUpdateOptions = {
  force: true,
  process: true
  /**
   * Contains rules objects and allows adding/removing etc.
   * Is used for e.g. by `StyleSheet` or `ConditionalRule`.
   */
};
var RuleList = (function() {
  function RuleList2(options) {
    this.map = {};
    this.raw = {};
    this.index = [];
    this.counter = 0;
    this.options = options;
    this.classes = options.classes;
    this.keyframes = options.keyframes;
  }
  var _proto = RuleList2.prototype;
  _proto.add = function add(name, decl, ruleOptions) {
    var _this$options = this.options, parent = _this$options.parent, sheet = _this$options.sheet, jss = _this$options.jss, Renderer = _this$options.Renderer, generateId = _this$options.generateId, scoped = _this$options.scoped;
    var options = _extends({
      classes: this.classes,
      parent,
      sheet,
      jss,
      Renderer,
      generateId,
      scoped,
      name,
      keyframes: this.keyframes,
      selector: void 0
    }, ruleOptions);
    var key = name;
    if (name in this.raw) {
      key = name + "-d" + this.counter++;
    }
    this.raw[key] = decl;
    if (key in this.classes) {
      options.selector = "." + escape(this.classes[key]);
    }
    var rule = createRule(key, decl, options);
    if (!rule) return null;
    this.register(rule);
    var index4 = options.index === void 0 ? this.index.length : options.index;
    this.index.splice(index4, 0, rule);
    return rule;
  };
  _proto.replace = function replace(name, decl, ruleOptions) {
    var oldRule = this.get(name);
    var oldIndex = this.index.indexOf(oldRule);
    if (oldRule) {
      this.remove(oldRule);
    }
    var options = ruleOptions;
    if (oldIndex !== -1) options = _extends({}, ruleOptions, {
      index: oldIndex
    });
    return this.add(name, decl, options);
  };
  _proto.get = function get(nameOrSelector) {
    return this.map[nameOrSelector];
  };
  _proto.remove = function remove(rule) {
    this.unregister(rule);
    delete this.raw[rule.key];
    this.index.splice(this.index.indexOf(rule), 1);
  };
  _proto.indexOf = function indexOf(rule) {
    return this.index.indexOf(rule);
  };
  _proto.process = function process2() {
    var plugins3 = this.options.jss.plugins;
    this.index.slice(0).forEach(plugins3.onProcessRule, plugins3);
  };
  _proto.register = function register(rule) {
    this.map[rule.key] = rule;
    if (rule instanceof StyleRule) {
      this.map[rule.selector] = rule;
      if (rule.id) this.classes[rule.key] = rule.id;
    } else if (rule instanceof KeyframesRule && this.keyframes) {
      this.keyframes[rule.name] = rule.id;
    }
  };
  _proto.unregister = function unregister(rule) {
    delete this.map[rule.key];
    if (rule instanceof StyleRule) {
      delete this.map[rule.selector];
      delete this.classes[rule.key];
    } else if (rule instanceof KeyframesRule) {
      delete this.keyframes[rule.name];
    }
  };
  _proto.update = function update() {
    var name;
    var data;
    var options;
    if (typeof (arguments.length <= 0 ? void 0 : arguments[0]) === "string") {
      name = arguments.length <= 0 ? void 0 : arguments[0];
      data = arguments.length <= 1 ? void 0 : arguments[1];
      options = arguments.length <= 2 ? void 0 : arguments[2];
    } else {
      data = arguments.length <= 0 ? void 0 : arguments[0];
      options = arguments.length <= 1 ? void 0 : arguments[1];
      name = null;
    }
    if (name) {
      this.updateOne(this.get(name), data, options);
    } else {
      for (var index4 = 0; index4 < this.index.length; index4++) {
        this.updateOne(this.index[index4], data, options);
      }
    }
  };
  _proto.updateOne = function updateOne(rule, data, options) {
    if (options === void 0) {
      options = defaultUpdateOptions;
    }
    var _this$options2 = this.options, plugins3 = _this$options2.jss.plugins, sheet = _this$options2.sheet;
    if (rule.rules instanceof RuleList2) {
      rule.rules.update(data, options);
      return;
    }
    var style = rule.style;
    plugins3.onUpdate(data, rule, sheet, options);
    if (options.process && style && style !== rule.style) {
      plugins3.onProcessStyle(rule.style, rule, sheet);
      for (var prop in rule.style) {
        var nextValue = rule.style[prop];
        var prevValue = style[prop];
        if (nextValue !== prevValue) {
          rule.prop(prop, nextValue, forceUpdateOptions);
        }
      }
      for (var _prop in style) {
        var _nextValue = rule.style[_prop];
        var _prevValue = style[_prop];
        if (_nextValue == null && _nextValue !== _prevValue) {
          rule.prop(_prop, null, forceUpdateOptions);
        }
      }
    }
  };
  _proto.toString = function toString(options) {
    var str = "";
    var sheet = this.options.sheet;
    var link = sheet ? sheet.options.link : false;
    var _getWhitespaceSymbols = getWhitespaceSymbols(options), linebreak = _getWhitespaceSymbols.linebreak;
    for (var index4 = 0; index4 < this.index.length; index4++) {
      var rule = this.index[index4];
      var css3 = rule.toString(options);
      if (!css3 && !link) continue;
      if (str) str += linebreak;
      str += css3;
    }
    return str;
  };
  return RuleList2;
})();
var StyleSheet = (function() {
  function StyleSheet2(styles, options) {
    this.attached = false;
    this.deployed = false;
    this.classes = {};
    this.keyframes = {};
    this.options = _extends({}, options, {
      sheet: this,
      parent: this,
      classes: this.classes,
      keyframes: this.keyframes
    });
    if (options.Renderer) {
      this.renderer = new options.Renderer(this);
    }
    this.rules = new RuleList(this.options);
    for (var name in styles) {
      this.rules.add(name, styles[name]);
    }
    this.rules.process();
  }
  var _proto = StyleSheet2.prototype;
  _proto.attach = function attach() {
    if (this.attached) return this;
    if (this.renderer) this.renderer.attach();
    this.attached = true;
    if (!this.deployed) this.deploy();
    return this;
  };
  _proto.detach = function detach() {
    if (!this.attached) return this;
    if (this.renderer) this.renderer.detach();
    this.attached = false;
    return this;
  };
  _proto.addRule = function addRule(name, decl, options) {
    var queue = this.queue;
    if (this.attached && !queue) this.queue = [];
    var rule = this.rules.add(name, decl, options);
    if (!rule) return null;
    this.options.jss.plugins.onProcessRule(rule);
    if (this.attached) {
      if (!this.deployed) return rule;
      if (queue) queue.push(rule);
      else {
        this.insertRule(rule);
        if (this.queue) {
          this.queue.forEach(this.insertRule, this);
          this.queue = void 0;
        }
      }
      return rule;
    }
    this.deployed = false;
    return rule;
  };
  _proto.replaceRule = function replaceRule(nameOrSelector, decl, options) {
    var oldRule = this.rules.get(nameOrSelector);
    if (!oldRule) return this.addRule(nameOrSelector, decl, options);
    var newRule = this.rules.replace(nameOrSelector, decl, options);
    if (newRule) {
      this.options.jss.plugins.onProcessRule(newRule);
    }
    if (this.attached) {
      if (!this.deployed) return newRule;
      if (this.renderer) {
        if (!newRule) {
          this.renderer.deleteRule(oldRule);
        } else if (oldRule.renderable) {
          this.renderer.replaceRule(oldRule.renderable, newRule);
        }
      }
      return newRule;
    }
    this.deployed = false;
    return newRule;
  };
  _proto.insertRule = function insertRule2(rule) {
    if (this.renderer) {
      this.renderer.insertRule(rule);
    }
  };
  _proto.addRules = function addRules(styles, options) {
    var added = [];
    for (var name in styles) {
      var rule = this.addRule(name, styles[name], options);
      if (rule) added.push(rule);
    }
    return added;
  };
  _proto.getRule = function getRule(nameOrSelector) {
    return this.rules.get(nameOrSelector);
  };
  _proto.deleteRule = function deleteRule(name) {
    var rule = typeof name === "object" ? name : this.rules.get(name);
    if (!rule || // Style sheet was created without link: true and attached, in this case we
    // won't be able to remove the CSS rule from the DOM.
    this.attached && !rule.renderable) {
      return false;
    }
    this.rules.remove(rule);
    if (this.attached && rule.renderable && this.renderer) {
      return this.renderer.deleteRule(rule.renderable);
    }
    return true;
  };
  _proto.indexOf = function indexOf(rule) {
    return this.rules.indexOf(rule);
  };
  _proto.deploy = function deploy() {
    if (this.renderer) this.renderer.deploy();
    this.deployed = true;
    return this;
  };
  _proto.update = function update() {
    var _this$rules;
    (_this$rules = this.rules).update.apply(_this$rules, arguments);
    return this;
  };
  _proto.updateOne = function updateOne(rule, data, options) {
    this.rules.updateOne(rule, data, options);
    return this;
  };
  _proto.toString = function toString(options) {
    return this.rules.toString(options);
  };
  return StyleSheet2;
})();
var PluginsRegistry = (function() {
  function PluginsRegistry2() {
    this.plugins = {
      internal: [],
      external: []
    };
    this.registry = {};
  }
  var _proto = PluginsRegistry2.prototype;
  _proto.onCreateRule = function onCreateRule8(name, decl, options) {
    for (var i = 0; i < this.registry.onCreateRule.length; i++) {
      var rule = this.registry.onCreateRule[i](name, decl, options);
      if (rule) return rule;
    }
    return null;
  };
  _proto.onProcessRule = function onProcessRule3(rule) {
    if (rule.isProcessed) return;
    var sheet = rule.options.sheet;
    for (var i = 0; i < this.registry.onProcessRule.length; i++) {
      this.registry.onProcessRule[i](rule, sheet);
    }
    if (rule.style) this.onProcessStyle(rule.style, rule, sheet);
    rule.isProcessed = true;
  };
  _proto.onProcessStyle = function onProcessStyle2(style, rule, sheet) {
    for (var i = 0; i < this.registry.onProcessStyle.length; i++) {
      rule.style = this.registry.onProcessStyle[i](rule.style, rule, sheet);
    }
  };
  _proto.onProcessSheet = function onProcessSheet(sheet) {
    for (var i = 0; i < this.registry.onProcessSheet.length; i++) {
      this.registry.onProcessSheet[i](sheet);
    }
  };
  _proto.onUpdate = function onUpdate(data, rule, sheet, options) {
    for (var i = 0; i < this.registry.onUpdate.length; i++) {
      this.registry.onUpdate[i](data, rule, sheet, options);
    }
  };
  _proto.onChangeValue = function onChangeValue2(value, prop, rule) {
    var processedValue = value;
    for (var i = 0; i < this.registry.onChangeValue.length; i++) {
      processedValue = this.registry.onChangeValue[i](processedValue, prop, rule);
    }
    return processedValue;
  };
  _proto.use = function use(newPlugin, options) {
    if (options === void 0) {
      options = {
        queue: "external"
      };
    }
    var plugins3 = this.plugins[options.queue];
    if (plugins3.indexOf(newPlugin) !== -1) {
      return;
    }
    plugins3.push(newPlugin);
    this.registry = [].concat(this.plugins.external, this.plugins.internal).reduce(function(registry, plugin) {
      for (var name in plugin) {
        if (name in registry) {
          registry[name].push(plugin[name]);
        } else {
          true ? tiny_warning_esm_default(false, '[JSS] Unknown hook "' + name + '".') : void 0;
        }
      }
      return registry;
    }, {
      onCreateRule: [],
      onProcessRule: [],
      onProcessStyle: [],
      onProcessSheet: [],
      onChangeValue: [],
      onUpdate: []
    });
  };
  return PluginsRegistry2;
})();
var SheetsRegistry = (function() {
  function SheetsRegistry2() {
    this.registry = [];
  }
  var _proto = SheetsRegistry2.prototype;
  _proto.add = function add(sheet) {
    var registry = this.registry;
    var index4 = sheet.options.index;
    if (registry.indexOf(sheet) !== -1) return;
    if (registry.length === 0 || index4 >= this.index) {
      registry.push(sheet);
      return;
    }
    for (var i = 0; i < registry.length; i++) {
      if (registry[i].options.index > index4) {
        registry.splice(i, 0, sheet);
        return;
      }
    }
  };
  _proto.reset = function reset() {
    this.registry = [];
  };
  _proto.remove = function remove(sheet) {
    var index4 = this.registry.indexOf(sheet);
    this.registry.splice(index4, 1);
  };
  _proto.toString = function toString(_temp) {
    var _ref = _temp === void 0 ? {} : _temp, attached = _ref.attached, options = _objectWithoutPropertiesLoose(_ref, ["attached"]);
    var _getWhitespaceSymbols = getWhitespaceSymbols(options), linebreak = _getWhitespaceSymbols.linebreak;
    var css3 = "";
    for (var i = 0; i < this.registry.length; i++) {
      var sheet = this.registry[i];
      if (attached != null && sheet.attached !== attached) {
        continue;
      }
      if (css3) css3 += linebreak;
      css3 += sheet.toString(options);
    }
    return css3;
  };
  _createClass(SheetsRegistry2, [{
    key: "index",
    /**
     * Current highest index number.
     */
    get: function get() {
      return this.registry.length === 0 ? 0 : this.registry[this.registry.length - 1].options.index;
    }
  }]);
  return SheetsRegistry2;
})();
var sheets = new SheetsRegistry();
var globalThis$1 = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" && window.Math === Math ? window : typeof self !== "undefined" && self.Math === Math ? self : Function("return this")();
var ns = "2f1acc6c3a606b082e5eef5e54414ffb";
if (globalThis$1[ns] == null) globalThis$1[ns] = 0;
var moduleId = globalThis$1[ns]++;
var maxRules = 1e10;
var createGenerateId = function createGenerateId2(options) {
  if (options === void 0) {
    options = {};
  }
  var ruleCounter = 0;
  var generateId = function generateId2(rule, sheet) {
    ruleCounter += 1;
    if (ruleCounter > maxRules) {
      true ? tiny_warning_esm_default(false, "[JSS] You might have a memory leak. Rule counter is at " + ruleCounter + ".") : void 0;
    }
    var jssId = "";
    var prefix2 = "";
    if (sheet) {
      if (sheet.options.classNamePrefix) {
        prefix2 = sheet.options.classNamePrefix;
      }
      if (sheet.options.jss.id != null) {
        jssId = String(sheet.options.jss.id);
      }
    }
    if (options.minify) {
      return "" + (prefix2 || "c") + moduleId + jssId + ruleCounter;
    }
    return prefix2 + rule.key + "-" + moduleId + (jssId ? "-" + jssId : "") + "-" + ruleCounter;
  };
  return generateId;
};
var memoize = function memoize2(fn) {
  var value;
  return function() {
    if (!value) value = fn();
    return value;
  };
};
var getPropertyValue = function getPropertyValue2(cssRule, prop) {
  try {
    if (cssRule.attributeStyleMap) {
      return cssRule.attributeStyleMap.get(prop);
    }
    return cssRule.style.getPropertyValue(prop);
  } catch (err) {
    return "";
  }
};
var setProperty = function setProperty2(cssRule, prop, value) {
  try {
    var cssValue = value;
    if (Array.isArray(value)) {
      cssValue = toCssValue(value);
    }
    if (cssRule.attributeStyleMap) {
      cssRule.attributeStyleMap.set(prop, cssValue);
    } else {
      var indexOfImportantFlag = cssValue ? cssValue.indexOf("!important") : -1;
      var cssValueWithoutImportantFlag = indexOfImportantFlag > -1 ? cssValue.substr(0, indexOfImportantFlag - 1) : cssValue;
      cssRule.style.setProperty(prop, cssValueWithoutImportantFlag, indexOfImportantFlag > -1 ? "important" : "");
    }
  } catch (err) {
    return false;
  }
  return true;
};
var removeProperty = function removeProperty2(cssRule, prop) {
  try {
    if (cssRule.attributeStyleMap) {
      cssRule.attributeStyleMap.delete(prop);
    } else {
      cssRule.style.removeProperty(prop);
    }
  } catch (err) {
    true ? tiny_warning_esm_default(false, '[JSS] DOMException "' + err.message + '" was thrown. Tried to remove property "' + prop + '".') : void 0;
  }
};
var setSelector = function setSelector2(cssRule, selectorText) {
  cssRule.selectorText = selectorText;
  return cssRule.selectorText === selectorText;
};
var getHead = memoize(function() {
  return document.querySelector("head");
});
function findHigherSheet(registry, options) {
  for (var i = 0; i < registry.length; i++) {
    var sheet = registry[i];
    if (sheet.attached && sheet.options.index > options.index && sheet.options.insertionPoint === options.insertionPoint) {
      return sheet;
    }
  }
  return null;
}
function findHighestSheet(registry, options) {
  for (var i = registry.length - 1; i >= 0; i--) {
    var sheet = registry[i];
    if (sheet.attached && sheet.options.insertionPoint === options.insertionPoint) {
      return sheet;
    }
  }
  return null;
}
function findCommentNode(text) {
  var head = getHead();
  for (var i = 0; i < head.childNodes.length; i++) {
    var node = head.childNodes[i];
    if (node.nodeType === 8 && node.nodeValue.trim() === text) {
      return node;
    }
  }
  return null;
}
function findPrevNode(options) {
  var registry = sheets.registry;
  if (registry.length > 0) {
    var sheet = findHigherSheet(registry, options);
    if (sheet && sheet.renderer) {
      return {
        parent: sheet.renderer.element.parentNode,
        node: sheet.renderer.element
      };
    }
    sheet = findHighestSheet(registry, options);
    if (sheet && sheet.renderer) {
      return {
        parent: sheet.renderer.element.parentNode,
        node: sheet.renderer.element.nextSibling
      };
    }
  }
  var insertionPoint = options.insertionPoint;
  if (insertionPoint && typeof insertionPoint === "string") {
    var comment = findCommentNode(insertionPoint);
    if (comment) {
      return {
        parent: comment.parentNode,
        node: comment.nextSibling
      };
    }
    true ? tiny_warning_esm_default(false, '[JSS] Insertion point "' + insertionPoint + '" not found.') : void 0;
  }
  return false;
}
function insertStyle(style, options) {
  var insertionPoint = options.insertionPoint;
  var nextNode = findPrevNode(options);
  if (nextNode !== false && nextNode.parent) {
    nextNode.parent.insertBefore(style, nextNode.node);
    return;
  }
  if (insertionPoint && typeof insertionPoint.nodeType === "number") {
    var insertionPointElement = insertionPoint;
    var parentNode = insertionPointElement.parentNode;
    if (parentNode) parentNode.insertBefore(style, insertionPointElement.nextSibling);
    else true ? tiny_warning_esm_default(false, "[JSS] Insertion point is not in the DOM.") : void 0;
    return;
  }
  getHead().appendChild(style);
}
var getNonce = memoize(function() {
  var node = document.querySelector('meta[property="csp-nonce"]');
  return node ? node.getAttribute("content") : null;
});
var _insertRule = function insertRule(container, rule, index4) {
  try {
    if ("insertRule" in container) {
      container.insertRule(rule, index4);
    } else if ("appendRule" in container) {
      container.appendRule(rule);
    }
  } catch (err) {
    true ? tiny_warning_esm_default(false, "[JSS] " + err.message) : void 0;
    return false;
  }
  return container.cssRules[index4];
};
var getValidRuleInsertionIndex = function getValidRuleInsertionIndex2(container, index4) {
  var maxIndex = container.cssRules.length;
  if (index4 === void 0 || index4 > maxIndex) {
    return maxIndex;
  }
  return index4;
};
var createStyle = function createStyle2() {
  var el2 = document.createElement("style");
  el2.textContent = "\n";
  return el2;
};
var DomRenderer = (function() {
  function DomRenderer2(sheet) {
    this.getPropertyValue = getPropertyValue;
    this.setProperty = setProperty;
    this.removeProperty = removeProperty;
    this.setSelector = setSelector;
    this.hasInsertedRules = false;
    this.cssRules = [];
    if (sheet) sheets.add(sheet);
    this.sheet = sheet;
    var _ref = this.sheet ? this.sheet.options : {}, media = _ref.media, meta = _ref.meta, element = _ref.element;
    this.element = element || createStyle();
    this.element.setAttribute("data-jss", "");
    if (media) this.element.setAttribute("media", media);
    if (meta) this.element.setAttribute("data-meta", meta);
    var nonce = getNonce();
    if (nonce) this.element.setAttribute("nonce", nonce);
  }
  var _proto = DomRenderer2.prototype;
  _proto.attach = function attach() {
    if (this.element.parentNode || !this.sheet) return;
    insertStyle(this.element, this.sheet.options);
    var deployed = Boolean(this.sheet && this.sheet.deployed);
    if (this.hasInsertedRules && deployed) {
      this.hasInsertedRules = false;
      this.deploy();
    }
  };
  _proto.detach = function detach() {
    if (!this.sheet) return;
    var parentNode = this.element.parentNode;
    if (parentNode) parentNode.removeChild(this.element);
    if (this.sheet.options.link) {
      this.cssRules = [];
      this.element.textContent = "\n";
    }
  };
  _proto.deploy = function deploy() {
    var sheet = this.sheet;
    if (!sheet) return;
    if (sheet.options.link) {
      this.insertRules(sheet.rules);
      return;
    }
    this.element.textContent = "\n" + sheet.toString() + "\n";
  };
  _proto.insertRules = function insertRules(rules, nativeParent) {
    for (var i = 0; i < rules.index.length; i++) {
      this.insertRule(rules.index[i], i, nativeParent);
    }
  };
  _proto.insertRule = function insertRule2(rule, index4, nativeParent) {
    if (nativeParent === void 0) {
      nativeParent = this.element.sheet;
    }
    if (rule.rules) {
      var parent = rule;
      var latestNativeParent = nativeParent;
      if (rule.type === "conditional" || rule.type === "keyframes") {
        var _insertionIndex = getValidRuleInsertionIndex(nativeParent, index4);
        latestNativeParent = _insertRule(nativeParent, parent.toString({
          children: false
        }), _insertionIndex);
        if (latestNativeParent === false) {
          return false;
        }
        this.refCssRule(rule, _insertionIndex, latestNativeParent);
      }
      this.insertRules(parent.rules, latestNativeParent);
      return latestNativeParent;
    }
    var ruleStr = rule.toString();
    if (!ruleStr) return false;
    var insertionIndex = getValidRuleInsertionIndex(nativeParent, index4);
    var nativeRule = _insertRule(nativeParent, ruleStr, insertionIndex);
    if (nativeRule === false) {
      return false;
    }
    this.hasInsertedRules = true;
    this.refCssRule(rule, insertionIndex, nativeRule);
    return nativeRule;
  };
  _proto.refCssRule = function refCssRule(rule, index4, cssRule) {
    rule.renderable = cssRule;
    if (rule.options.parent instanceof StyleSheet) {
      this.cssRules.splice(index4, 0, cssRule);
    }
  };
  _proto.deleteRule = function deleteRule(cssRule) {
    var sheet = this.element.sheet;
    var index4 = this.indexOf(cssRule);
    if (index4 === -1) return false;
    sheet.deleteRule(index4);
    this.cssRules.splice(index4, 1);
    return true;
  };
  _proto.indexOf = function indexOf(cssRule) {
    return this.cssRules.indexOf(cssRule);
  };
  _proto.replaceRule = function replaceRule(cssRule, rule) {
    var index4 = this.indexOf(cssRule);
    if (index4 === -1) return false;
    this.element.sheet.deleteRule(index4);
    this.cssRules.splice(index4, 1);
    return this.insertRule(rule, index4);
  };
  _proto.getRules = function getRules() {
    return this.element.sheet.cssRules;
  };
  return DomRenderer2;
})();
var instanceCounter = 0;
var Jss = (function() {
  function Jss2(options) {
    this.id = instanceCounter++;
    this.version = "10.10.0";
    this.plugins = new PluginsRegistry();
    this.options = {
      id: {
        minify: false
      },
      createGenerateId,
      Renderer: module_default ? DomRenderer : null,
      plugins: []
    };
    this.generateId = createGenerateId({
      minify: false
    });
    for (var i = 0; i < plugins.length; i++) {
      this.plugins.use(plugins[i], {
        queue: "internal"
      });
    }
    this.setup(options);
  }
  var _proto = Jss2.prototype;
  _proto.setup = function setup(options) {
    if (options === void 0) {
      options = {};
    }
    if (options.createGenerateId) {
      this.options.createGenerateId = options.createGenerateId;
    }
    if (options.id) {
      this.options.id = _extends({}, this.options.id, options.id);
    }
    if (options.createGenerateId || options.id) {
      this.generateId = this.options.createGenerateId(this.options.id);
    }
    if (options.insertionPoint != null) this.options.insertionPoint = options.insertionPoint;
    if ("Renderer" in options) {
      this.options.Renderer = options.Renderer;
    }
    if (options.plugins) this.use.apply(this, options.plugins);
    return this;
  };
  _proto.createStyleSheet = function createStyleSheet3(styles, options) {
    if (options === void 0) {
      options = {};
    }
    var _options = options, index4 = _options.index;
    if (typeof index4 !== "number") {
      index4 = sheets.index === 0 ? 0 : sheets.index + 1;
    }
    var sheet = new StyleSheet(styles, _extends({}, options, {
      jss: this,
      generateId: options.generateId || this.generateId,
      insertionPoint: this.options.insertionPoint,
      Renderer: this.options.Renderer,
      index: index4
    }));
    this.plugins.onProcessSheet(sheet);
    return sheet;
  };
  _proto.removeStyleSheet = function removeStyleSheet(sheet) {
    sheet.detach();
    sheets.remove(sheet);
    return this;
  };
  _proto.createRule = function createRule$1(name, style, options) {
    if (style === void 0) {
      style = {};
    }
    if (options === void 0) {
      options = {};
    }
    if (typeof name === "object") {
      return this.createRule(void 0, name, style);
    }
    var ruleOptions = _extends({}, options, {
      name,
      jss: this,
      Renderer: this.options.Renderer
    });
    if (!ruleOptions.generateId) ruleOptions.generateId = this.generateId;
    if (!ruleOptions.classes) ruleOptions.classes = {};
    if (!ruleOptions.keyframes) ruleOptions.keyframes = {};
    var rule = createRule(name, style, ruleOptions);
    if (rule) this.plugins.onProcessRule(rule);
    return rule;
  };
  _proto.use = function use() {
    var _this = this;
    for (var _len = arguments.length, plugins3 = new Array(_len), _key = 0; _key < _len; _key++) {
      plugins3[_key] = arguments[_key];
    }
    plugins3.forEach(function(plugin) {
      _this.plugins.use(plugin);
    });
    return this;
  };
  return Jss2;
})();
var createJss = function createJss2(options) {
  return new Jss(options);
};
var SheetsManager = (function() {
  function SheetsManager2() {
    this.length = 0;
    this.sheets = /* @__PURE__ */ new WeakMap();
  }
  var _proto = SheetsManager2.prototype;
  _proto.get = function get(key) {
    var entry = this.sheets.get(key);
    return entry && entry.sheet;
  };
  _proto.add = function add(key, sheet) {
    if (this.sheets.has(key)) return;
    this.length++;
    this.sheets.set(key, {
      sheet,
      refs: 0
    });
  };
  _proto.manage = function manage(key) {
    var entry = this.sheets.get(key);
    if (entry) {
      if (entry.refs === 0) {
        entry.sheet.attach();
      }
      entry.refs++;
      return entry.sheet;
    }
    tiny_warning_esm_default(false, "[JSS] SheetsManager: can't find sheet to manage");
    return void 0;
  };
  _proto.unmanage = function unmanage(key) {
    var entry = this.sheets.get(key);
    if (entry) {
      if (entry.refs > 0) {
        entry.refs--;
        if (entry.refs === 0) entry.sheet.detach();
      }
    } else {
      tiny_warning_esm_default(false, "SheetsManager: can't find sheet to unmanage");
    }
  };
  _createClass(SheetsManager2, [{
    key: "size",
    get: function get() {
      return this.length;
    }
  }]);
  return SheetsManager2;
})();
var hasCSSTOMSupport = typeof CSS === "object" && CSS != null && "number" in CSS;
function getDynamicStyles(styles) {
  var to = null;
  for (var key in styles) {
    var value = styles[key];
    var type = typeof value;
    if (type === "function") {
      if (!to) to = {};
      to[key] = value;
    } else if (type === "object" && value !== null && !Array.isArray(value)) {
      var extracted = getDynamicStyles(value);
      if (extracted) {
        if (!to) to = {};
        to[key] = extracted;
      }
    }
  }
  return to;
}
var index = createJss();

// node_modules/jss-plugin-rule-value-function/dist/jss-plugin-rule-value-function.esm.js
var now = Date.now();
var fnValuesNs = "fnValues" + now;
var fnRuleNs = "fnStyle" + ++now;
var functionPlugin = function functionPlugin2() {
  return {
    onCreateRule: function onCreateRule8(name, decl, options) {
      if (typeof decl !== "function") return null;
      var rule = createRule(name, {}, options);
      rule[fnRuleNs] = decl;
      return rule;
    },
    onProcessStyle: function onProcessStyle2(style, rule) {
      if (fnValuesNs in rule || fnRuleNs in rule) return style;
      var fnValues = {};
      for (var prop in style) {
        var value = style[prop];
        if (typeof value !== "function") continue;
        delete style[prop];
        fnValues[prop] = value;
      }
      rule[fnValuesNs] = fnValues;
      return style;
    },
    onUpdate: function onUpdate(data, rule, sheet, options) {
      var styleRule = rule;
      var fnRule = styleRule[fnRuleNs];
      if (fnRule) {
        styleRule.style = fnRule(data) || {};
        if (true) {
          for (var prop in styleRule.style) {
            if (typeof styleRule.style[prop] === "function") {
              true ? tiny_warning_esm_default(false, "[JSS] Function values inside function rules are not supported.") : void 0;
              break;
            }
          }
        }
      }
      var fnValues = styleRule[fnValuesNs];
      if (fnValues) {
        for (var _prop in fnValues) {
          styleRule.prop(_prop, fnValues[_prop](data), options);
        }
      }
    }
  };
};
var jss_plugin_rule_value_function_esm_default = functionPlugin;

// node_modules/symbol-observable/es/ponyfill.js
function symbolObservablePonyfill(root2) {
  var result2;
  var Symbol2 = root2.Symbol;
  if (typeof Symbol2 === "function") {
    if (Symbol2.observable) {
      result2 = Symbol2.observable;
    } else {
      result2 = Symbol2("observable");
      Symbol2.observable = result2;
    }
  } else {
    result2 = "@@observable";
  }
  return result2;
}

// node_modules/symbol-observable/es/index.js
var root;
if (typeof self !== "undefined") {
  root = self;
} else if (typeof window !== "undefined") {
  root = window;
} else if (typeof global !== "undefined") {
  root = global;
} else if (typeof module !== "undefined") {
  root = module;
} else {
  root = Function("return this")();
}
var result = symbolObservablePonyfill(root);
var es_default = result;

// node_modules/jss-plugin-rule-value-observable/dist/jss-plugin-rule-value-observable.esm.js
var isObservable = function isObservable2(value) {
  return value && value[es_default] && value === value[es_default]();
};
var observablePlugin = function observablePlugin2(updateOptions) {
  return {
    onCreateRule: function onCreateRule8(name, decl, options) {
      if (!isObservable(decl)) return null;
      var style$ = decl;
      var rule = createRule(name, {}, options);
      style$.subscribe(function(style) {
        for (var prop in style) {
          rule.prop(prop, style[prop], updateOptions);
        }
      });
      return rule;
    },
    onProcessRule: function onProcessRule3(rule) {
      if (rule && rule.type !== "style") return;
      var styleRule = rule;
      var style = styleRule.style;
      var _loop = function _loop2(prop2) {
        var value = style[prop2];
        if (!isObservable(value)) return "continue";
        delete style[prop2];
        value.subscribe({
          next: function next(nextValue) {
            styleRule.prop(prop2, nextValue, updateOptions);
          }
        });
      };
      for (var prop in style) {
        var _ret = _loop(prop);
        if (_ret === "continue") continue;
      }
    }
  };
};
var jss_plugin_rule_value_observable_esm_default = observablePlugin;

// node_modules/jss-plugin-template/dist/jss-plugin-template.esm.js
var semiWithNl = /;\n/;
var parse = function parse2(cssText) {
  var style = {};
  var split = cssText.split(semiWithNl);
  for (var i = 0; i < split.length; i++) {
    var decl = (split[i] || "").trim();
    if (!decl) continue;
    var colonIndex = decl.indexOf(":");
    if (colonIndex === -1) {
      true ? tiny_warning_esm_default(false, '[JSS] Malformed CSS string "' + decl + '"') : void 0;
      continue;
    }
    var prop = decl.substr(0, colonIndex).trim();
    var value = decl.substr(colonIndex + 1).trim();
    style[prop] = value;
  }
  return style;
};
var onProcessRule = function onProcessRule2(rule) {
  if (typeof rule.style === "string") {
    rule.style = parse(rule.style);
  }
};
function templatePlugin() {
  return {
    onProcessRule
  };
}
var jss_plugin_template_esm_default = templatePlugin;

// node_modules/jss-plugin-global/dist/jss-plugin-global.esm.js
var at = "@global";
var atPrefix = "@global ";
var GlobalContainerRule = (function() {
  function GlobalContainerRule2(key, styles, options) {
    this.type = "global";
    this.at = at;
    this.isProcessed = false;
    this.key = key;
    this.options = options;
    this.rules = new RuleList(_extends({}, options, {
      parent: this
    }));
    for (var selector in styles) {
      this.rules.add(selector, styles[selector]);
    }
    this.rules.process();
  }
  var _proto = GlobalContainerRule2.prototype;
  _proto.getRule = function getRule(name) {
    return this.rules.get(name);
  };
  _proto.addRule = function addRule(name, style, options) {
    var rule = this.rules.add(name, style, options);
    if (rule) this.options.jss.plugins.onProcessRule(rule);
    return rule;
  };
  _proto.replaceRule = function replaceRule(name, style, options) {
    var newRule = this.rules.replace(name, style, options);
    if (newRule) this.options.jss.plugins.onProcessRule(newRule);
    return newRule;
  };
  _proto.indexOf = function indexOf(rule) {
    return this.rules.indexOf(rule);
  };
  _proto.toString = function toString(options) {
    return this.rules.toString(options);
  };
  return GlobalContainerRule2;
})();
var GlobalPrefixedRule = (function() {
  function GlobalPrefixedRule2(key, style, options) {
    this.type = "global";
    this.at = at;
    this.isProcessed = false;
    this.key = key;
    this.options = options;
    var selector = key.substr(atPrefix.length);
    this.rule = options.jss.createRule(selector, style, _extends({}, options, {
      parent: this
    }));
  }
  var _proto2 = GlobalPrefixedRule2.prototype;
  _proto2.toString = function toString(options) {
    return this.rule ? this.rule.toString(options) : "";
  };
  return GlobalPrefixedRule2;
})();
var separatorRegExp = /\s*,\s*/g;
function addScope(selector, scope) {
  var parts = selector.split(separatorRegExp);
  var scoped = "";
  for (var i = 0; i < parts.length; i++) {
    scoped += scope + " " + parts[i].trim();
    if (parts[i + 1]) scoped += ", ";
  }
  return scoped;
}
function handleNestedGlobalContainerRule(rule, sheet) {
  var options = rule.options, style = rule.style;
  var rules = style ? style[at] : null;
  if (!rules) return;
  for (var name in rules) {
    sheet.addRule(name, rules[name], _extends({}, options, {
      selector: addScope(name, rule.selector)
    }));
  }
  delete style[at];
}
function handlePrefixedGlobalRule(rule, sheet) {
  var options = rule.options, style = rule.style;
  for (var prop in style) {
    if (prop[0] !== "@" || prop.substr(0, at.length) !== at) continue;
    var selector = addScope(prop.substr(at.length), rule.selector);
    sheet.addRule(selector, style[prop], _extends({}, options, {
      selector
    }));
    delete style[prop];
  }
}
function jssGlobal() {
  function onCreateRule8(name, styles, options) {
    if (!name) return null;
    if (name === at) {
      return new GlobalContainerRule(name, styles, options);
    }
    if (name[0] === "@" && name.substr(0, atPrefix.length) === atPrefix) {
      return new GlobalPrefixedRule(name, styles, options);
    }
    var parent = options.parent;
    if (parent) {
      if (parent.type === "global" || parent.options.parent && parent.options.parent.type === "global") {
        options.scoped = false;
      }
    }
    if (!options.selector && options.scoped === false) {
      options.selector = name;
    }
    return null;
  }
  function onProcessRule3(rule, sheet) {
    if (rule.type !== "style" || !sheet) return;
    handleNestedGlobalContainerRule(rule, sheet);
    handlePrefixedGlobalRule(rule, sheet);
  }
  return {
    onCreateRule: onCreateRule8,
    onProcessRule: onProcessRule3
  };
}
var jss_plugin_global_esm_default = jssGlobal;

// node_modules/jss-plugin-extend/dist/jss-plugin-extend.esm.js
var isObject2 = function isObject3(obj) {
  return obj && typeof obj === "object" && !Array.isArray(obj);
};
var valueNs = "extendCurrValue" + Date.now();
function mergeExtend(style, rule, sheet, newStyle) {
  var extendType = typeof style.extend;
  if (extendType === "string") {
    if (!sheet) return;
    var refRule = sheet.getRule(style.extend);
    if (!refRule) return;
    if (refRule === rule) {
      true ? tiny_warning_esm_default(false, "[JSS] A rule tries to extend itself \n" + rule.toString()) : void 0;
      return;
    }
    var parent = refRule.options.parent;
    if (parent) {
      var originalStyle = parent.rules.raw[style.extend];
      extend(originalStyle, rule, sheet, newStyle);
    }
    return;
  }
  if (Array.isArray(style.extend)) {
    for (var index4 = 0; index4 < style.extend.length; index4++) {
      var singleExtend = style.extend[index4];
      var singleStyle = typeof singleExtend === "string" ? _extends({}, style, {
        extend: singleExtend
      }) : style.extend[index4];
      extend(singleStyle, rule, sheet, newStyle);
    }
    return;
  }
  for (var prop in style.extend) {
    if (prop === "extend") {
      extend(style.extend.extend, rule, sheet, newStyle);
      continue;
    }
    if (isObject2(style.extend[prop])) {
      if (!(prop in newStyle)) newStyle[prop] = {};
      extend(style.extend[prop], rule, sheet, newStyle[prop]);
      continue;
    }
    newStyle[prop] = style.extend[prop];
  }
}
function mergeRest(style, rule, sheet, newStyle) {
  for (var prop in style) {
    if (prop === "extend") continue;
    if (isObject2(newStyle[prop]) && isObject2(style[prop])) {
      extend(style[prop], rule, sheet, newStyle[prop]);
      continue;
    }
    if (isObject2(style[prop])) {
      newStyle[prop] = extend(style[prop], rule, sheet);
      continue;
    }
    newStyle[prop] = style[prop];
  }
}
function extend(style, rule, sheet, newStyle) {
  if (newStyle === void 0) {
    newStyle = {};
  }
  mergeExtend(style, rule, sheet, newStyle);
  mergeRest(style, rule, sheet, newStyle);
  return newStyle;
}
function jssExtend() {
  function onProcessStyle2(style, rule, sheet) {
    if ("extend" in style) return extend(style, rule, sheet);
    return style;
  }
  function onChangeValue2(value, prop, rule) {
    if (prop !== "extend") return value;
    if (value == null || value === false) {
      for (var key in rule[valueNs]) {
        rule.prop(key, null);
      }
      rule[valueNs] = null;
      return null;
    }
    if (typeof value === "object") {
      for (var _key in value) {
        rule.prop(_key, value[_key]);
      }
      rule[valueNs] = value;
    }
    return null;
  }
  return {
    onProcessStyle: onProcessStyle2,
    onChangeValue: onChangeValue2
  };
}
var jss_plugin_extend_esm_default = jssExtend;

// node_modules/jss-plugin-nested/dist/jss-plugin-nested.esm.js
var separatorRegExp2 = /\s*,\s*/g;
var parentRegExp = /&/g;
var refRegExp2 = /\$([\w-]+)/g;
function jssNested() {
  function getReplaceRef(container, sheet) {
    return function(match, key) {
      var rule = container.getRule(key) || sheet && sheet.getRule(key);
      if (rule) {
        return rule.selector;
      }
      true ? tiny_warning_esm_default(false, '[JSS] Could not find the referenced rule "' + key + '" in "' + (container.options.meta || container.toString()) + '".') : void 0;
      return key;
    };
  }
  function replaceParentRefs(nestedProp, parentProp) {
    var parentSelectors = parentProp.split(separatorRegExp2);
    var nestedSelectors = nestedProp.split(separatorRegExp2);
    var result2 = "";
    for (var i = 0; i < parentSelectors.length; i++) {
      var parent = parentSelectors[i];
      for (var j = 0; j < nestedSelectors.length; j++) {
        var nested = nestedSelectors[j];
        if (result2) result2 += ", ";
        result2 += nested.indexOf("&") !== -1 ? nested.replace(parentRegExp, parent) : parent + " " + nested;
      }
    }
    return result2;
  }
  function getOptions(rule, container, prevOptions) {
    if (prevOptions) return _extends({}, prevOptions, {
      index: prevOptions.index + 1
    });
    var nestingLevel = rule.options.nestingLevel;
    nestingLevel = nestingLevel === void 0 ? 1 : nestingLevel + 1;
    var options = _extends({}, rule.options, {
      nestingLevel,
      index: container.indexOf(rule) + 1
      // We don't need the parent name to be set options for chlid.
    });
    delete options.name;
    return options;
  }
  function onProcessStyle2(style, rule, sheet) {
    if (rule.type !== "style") return style;
    var styleRule = rule;
    var container = styleRule.options.parent;
    var options;
    var replaceRef3;
    for (var prop in style) {
      var isNested = prop.indexOf("&") !== -1;
      var isNestedConditional = prop[0] === "@";
      if (!isNested && !isNestedConditional) continue;
      options = getOptions(styleRule, container, options);
      if (isNested) {
        var selector = replaceParentRefs(prop, styleRule.selector);
        if (!replaceRef3) replaceRef3 = getReplaceRef(container, sheet);
        selector = selector.replace(refRegExp2, replaceRef3);
        var name = styleRule.key + "-" + prop;
        if ("replaceRule" in container) {
          container.replaceRule(name, style[prop], _extends({}, options, {
            selector
          }));
        } else {
          container.addRule(name, style[prop], _extends({}, options, {
            selector
          }));
        }
      } else if (isNestedConditional) {
        container.addRule(prop, {}, options).addRule(styleRule.key, style[prop], {
          selector: styleRule.selector
        });
      }
      delete style[prop];
    }
    return style;
  }
  return {
    onProcessStyle: onProcessStyle2
  };
}
var jss_plugin_nested_esm_default = jssNested;

// node_modules/jss-plugin-compose/dist/jss-plugin-compose.esm.js
function registerClass(rule, className) {
  if (!className) return true;
  if (Array.isArray(className)) {
    for (var index4 = 0; index4 < className.length; index4++) {
      var isSetted = registerClass(rule, className[index4]);
      if (!isSetted) return false;
    }
    return true;
  }
  if (className.indexOf(" ") > -1) {
    return registerClass(rule, className.split(" "));
  }
  var parent = rule.options.parent;
  if (className[0] === "$") {
    var refRule = parent.getRule(className.substr(1));
    if (!refRule) {
      true ? tiny_warning_esm_default(false, "[JSS] Referenced rule is not defined. \n" + rule.toString()) : void 0;
      return false;
    }
    if (refRule === rule) {
      true ? tiny_warning_esm_default(false, "[JSS] Cyclic composition detected. \n" + rule.toString()) : void 0;
      return false;
    }
    parent.classes[rule.key] += " " + parent.classes[refRule.key];
    return true;
  }
  parent.classes[rule.key] += " " + className;
  return true;
}
function jssCompose() {
  function onProcessStyle2(style, rule) {
    if (!("composes" in style)) return style;
    registerClass(rule, style.composes);
    delete style.composes;
    return style;
  }
  return {
    onProcessStyle: onProcessStyle2
  };
}
var jss_plugin_compose_esm_default = jssCompose;

// node_modules/hyphenate-style-name/index.js
var uppercasePattern = /[A-Z]/g;
var msPattern = /^ms-/;
var cache = {};
function toHyphenLower(match) {
  return "-" + match.toLowerCase();
}
function hyphenateStyleName(name) {
  if (cache.hasOwnProperty(name)) {
    return cache[name];
  }
  var hName = name.replace(uppercasePattern, toHyphenLower);
  return cache[name] = msPattern.test(hName) ? "-" + hName : hName;
}
var hyphenate_style_name_default = hyphenateStyleName;

// node_modules/jss-plugin-camel-case/dist/jss-plugin-camel-case.esm.js
function convertCase(style) {
  var converted = {};
  for (var prop in style) {
    var key = prop.indexOf("--") === 0 ? prop : hyphenate_style_name_default(prop);
    converted[key] = style[prop];
  }
  if (style.fallbacks) {
    if (Array.isArray(style.fallbacks)) converted.fallbacks = style.fallbacks.map(convertCase);
    else converted.fallbacks = convertCase(style.fallbacks);
  }
  return converted;
}
function camelCase() {
  function onProcessStyle2(style) {
    if (Array.isArray(style)) {
      for (var index4 = 0; index4 < style.length; index4++) {
        style[index4] = convertCase(style[index4]);
      }
      return style;
    }
    return convertCase(style);
  }
  function onChangeValue2(value, prop, rule) {
    if (prop.indexOf("--") === 0) {
      return value;
    }
    var hyphenatedProp = hyphenate_style_name_default(prop);
    if (prop === hyphenatedProp) return value;
    rule.prop(hyphenatedProp, value);
    return null;
  }
  return {
    onProcessStyle: onProcessStyle2,
    onChangeValue: onChangeValue2
  };
}
var jss_plugin_camel_case_esm_default = camelCase;

// node_modules/jss-plugin-default-unit/dist/jss-plugin-default-unit.esm.js
var px = hasCSSTOMSupport && CSS ? CSS.px : "px";
var ms = hasCSSTOMSupport && CSS ? CSS.ms : "ms";
var percent = hasCSSTOMSupport && CSS ? CSS.percent : "%";
var defaultUnits = {
  // Animation properties
  "animation-delay": ms,
  "animation-duration": ms,
  // Background properties
  "background-position": px,
  "background-position-x": px,
  "background-position-y": px,
  "background-size": px,
  // Border Properties
  border: px,
  "border-bottom": px,
  "border-bottom-left-radius": px,
  "border-bottom-right-radius": px,
  "border-bottom-width": px,
  "border-left": px,
  "border-left-width": px,
  "border-radius": px,
  "border-right": px,
  "border-right-width": px,
  "border-top": px,
  "border-top-left-radius": px,
  "border-top-right-radius": px,
  "border-top-width": px,
  "border-width": px,
  "border-block": px,
  "border-block-end": px,
  "border-block-end-width": px,
  "border-block-start": px,
  "border-block-start-width": px,
  "border-block-width": px,
  "border-inline": px,
  "border-inline-end": px,
  "border-inline-end-width": px,
  "border-inline-start": px,
  "border-inline-start-width": px,
  "border-inline-width": px,
  "border-start-start-radius": px,
  "border-start-end-radius": px,
  "border-end-start-radius": px,
  "border-end-end-radius": px,
  // Margin properties
  margin: px,
  "margin-bottom": px,
  "margin-left": px,
  "margin-right": px,
  "margin-top": px,
  "margin-block": px,
  "margin-block-end": px,
  "margin-block-start": px,
  "margin-inline": px,
  "margin-inline-end": px,
  "margin-inline-start": px,
  // Padding properties
  padding: px,
  "padding-bottom": px,
  "padding-left": px,
  "padding-right": px,
  "padding-top": px,
  "padding-block": px,
  "padding-block-end": px,
  "padding-block-start": px,
  "padding-inline": px,
  "padding-inline-end": px,
  "padding-inline-start": px,
  // Mask properties
  "mask-position-x": px,
  "mask-position-y": px,
  "mask-size": px,
  // Width and height properties
  height: px,
  width: px,
  "min-height": px,
  "max-height": px,
  "min-width": px,
  "max-width": px,
  // Position properties
  bottom: px,
  left: px,
  top: px,
  right: px,
  inset: px,
  "inset-block": px,
  "inset-block-end": px,
  "inset-block-start": px,
  "inset-inline": px,
  "inset-inline-end": px,
  "inset-inline-start": px,
  // Shadow properties
  "box-shadow": px,
  "text-shadow": px,
  // Column properties
  "column-gap": px,
  "column-rule": px,
  "column-rule-width": px,
  "column-width": px,
  // Font and text properties
  "font-size": px,
  "font-size-delta": px,
  "letter-spacing": px,
  "text-decoration-thickness": px,
  "text-indent": px,
  "text-stroke": px,
  "text-stroke-width": px,
  "word-spacing": px,
  // Motion properties
  motion: px,
  "motion-offset": px,
  // Outline properties
  outline: px,
  "outline-offset": px,
  "outline-width": px,
  // Perspective properties
  perspective: px,
  "perspective-origin-x": percent,
  "perspective-origin-y": percent,
  // Transform properties
  "transform-origin": percent,
  "transform-origin-x": percent,
  "transform-origin-y": percent,
  "transform-origin-z": percent,
  // Transition properties
  "transition-delay": ms,
  "transition-duration": ms,
  // Alignment properties
  "vertical-align": px,
  "flex-basis": px,
  // Some random properties
  "shape-margin": px,
  size: px,
  gap: px,
  // Grid properties
  grid: px,
  "grid-gap": px,
  "row-gap": px,
  "grid-row-gap": px,
  "grid-column-gap": px,
  "grid-template-rows": px,
  "grid-template-columns": px,
  "grid-auto-rows": px,
  "grid-auto-columns": px,
  // Not existing properties.
  // Used to avoid issues with jss-plugin-expand integration.
  "box-shadow-x": px,
  "box-shadow-y": px,
  "box-shadow-blur": px,
  "box-shadow-spread": px,
  "font-line-height": px,
  "text-shadow-x": px,
  "text-shadow-y": px,
  "text-shadow-blur": px
};
function addCamelCasedVersion(obj) {
  var regExp2 = /(-[a-z])/g;
  var replace = function replace2(str) {
    return str[1].toUpperCase();
  };
  var newObj = {};
  for (var key in obj) {
    newObj[key] = obj[key];
    newObj[key.replace(regExp2, replace)] = obj[key];
  }
  return newObj;
}
var units = addCamelCasedVersion(defaultUnits);
function iterate(prop, value, options) {
  if (value == null) return value;
  if (Array.isArray(value)) {
    for (var i = 0; i < value.length; i++) {
      value[i] = iterate(prop, value[i], options);
    }
  } else if (typeof value === "object") {
    if (prop === "fallbacks") {
      for (var innerProp in value) {
        value[innerProp] = iterate(innerProp, value[innerProp], options);
      }
    } else {
      for (var _innerProp in value) {
        value[_innerProp] = iterate(prop + "-" + _innerProp, value[_innerProp], options);
      }
    }
  } else if (typeof value === "number" && isNaN(value) === false) {
    var unit = options[prop] || units[prop];
    if (unit && !(value === 0 && unit === px)) {
      return typeof unit === "function" ? unit(value).toString() : "" + value + unit;
    }
    return value.toString();
  }
  return value;
}
function defaultUnit(options) {
  if (options === void 0) {
    options = {};
  }
  var camelCasedOptions = addCamelCasedVersion(options);
  function onProcessStyle2(style, rule) {
    if (rule.type !== "style") return style;
    for (var prop in style) {
      style[prop] = iterate(prop, style[prop], camelCasedOptions);
    }
    return style;
  }
  function onChangeValue2(value, prop) {
    return iterate(prop, value, camelCasedOptions);
  }
  return {
    onProcessStyle: onProcessStyle2,
    onChangeValue: onChangeValue2
  };
}
var jss_plugin_default_unit_esm_default = defaultUnit;

// node_modules/jss-plugin-expand/dist/jss-plugin-expand.esm.js
var propArray = {
  "background-size": true,
  "background-position": true,
  border: true,
  "border-bottom": true,
  "border-left": true,
  "border-top": true,
  "border-right": true,
  "border-radius": true,
  "border-image": true,
  "border-width": true,
  "border-style": true,
  "border-color": true,
  "box-shadow": true,
  flex: true,
  margin: true,
  padding: true,
  outline: true,
  "transform-origin": true,
  transform: true,
  transition: true
  /**
   * A scheme for converting arrays to regular styles inside of objects.
   * For e.g.: "{position: [0, 0]}" => "background-position: 0 0;".
   */
};
var propArrayInObj = {
  position: true,
  // background-position
  size: true
  // background-size
  /**
   * A scheme for parsing and building correct styles from passed objects.
   */
};
var propObj = {
  padding: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  margin: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  background: {
    attachment: null,
    color: null,
    image: null,
    position: null,
    repeat: null
  },
  border: {
    width: null,
    style: null,
    color: null
  },
  "border-top": {
    width: null,
    style: null,
    color: null
  },
  "border-right": {
    width: null,
    style: null,
    color: null
  },
  "border-bottom": {
    width: null,
    style: null,
    color: null
  },
  "border-left": {
    width: null,
    style: null,
    color: null
  },
  outline: {
    width: null,
    style: null,
    color: null
  },
  "list-style": {
    type: null,
    position: null,
    image: null
  },
  transition: {
    property: null,
    duration: null,
    "timing-function": null,
    timingFunction: null,
    // Needed for avoiding comilation issues with jss-plugin-camel-case
    delay: null
  },
  animation: {
    name: null,
    duration: null,
    "timing-function": null,
    timingFunction: null,
    // Needed to avoid compilation issues with jss-plugin-camel-case
    delay: null,
    "iteration-count": null,
    iterationCount: null,
    // Needed to avoid compilation issues with jss-plugin-camel-case
    direction: null,
    "fill-mode": null,
    fillMode: null,
    // Needed to avoid compilation issues with jss-plugin-camel-case
    "play-state": null,
    playState: null
    // Needed to avoid compilation issues with jss-plugin-camel-case
  },
  "box-shadow": {
    x: 0,
    y: 0,
    blur: 0,
    spread: 0,
    color: null,
    inset: null
  },
  "text-shadow": {
    x: 0,
    y: 0,
    blur: null,
    color: null
  }
  /**
   * A scheme for converting non-standart properties inside object.
   * For e.g.: include 'border-radius' property inside 'border' object.
   */
};
var customPropObj = {
  border: {
    radius: "border-radius",
    image: "border-image",
    width: "border-width",
    style: "border-style",
    color: "border-color"
  },
  "border-bottom": {
    width: "border-bottom-width",
    style: "border-bottom-style",
    color: "border-bottom-color"
  },
  "border-top": {
    width: "border-top-width",
    style: "border-top-style",
    color: "border-top-color"
  },
  "border-left": {
    width: "border-left-width",
    style: "border-left-style",
    color: "border-left-color"
  },
  "border-right": {
    width: "border-right-width",
    style: "border-right-style",
    color: "border-right-color"
  },
  background: {
    size: "background-size",
    image: "background-image"
  },
  font: {
    style: "font-style",
    variant: "font-variant",
    weight: "font-weight",
    stretch: "font-stretch",
    size: "font-size",
    family: "font-family",
    lineHeight: "line-height",
    // Needed to avoid compilation issues with jss-plugin-camel-case
    "line-height": "line-height"
  },
  flex: {
    grow: "flex-grow",
    basis: "flex-basis",
    direction: "flex-direction",
    wrap: "flex-wrap",
    flow: "flex-flow",
    shrink: "flex-shrink"
  },
  align: {
    self: "align-self",
    items: "align-items",
    content: "align-content"
  },
  grid: {
    "template-columns": "grid-template-columns",
    templateColumns: "grid-template-columns",
    "template-rows": "grid-template-rows",
    templateRows: "grid-template-rows",
    "template-areas": "grid-template-areas",
    templateAreas: "grid-template-areas",
    template: "grid-template",
    "auto-columns": "grid-auto-columns",
    autoColumns: "grid-auto-columns",
    "auto-rows": "grid-auto-rows",
    autoRows: "grid-auto-rows",
    "auto-flow": "grid-auto-flow",
    autoFlow: "grid-auto-flow",
    row: "grid-row",
    column: "grid-column",
    "row-start": "grid-row-start",
    rowStart: "grid-row-start",
    "row-end": "grid-row-end",
    rowEnd: "grid-row-end",
    "column-start": "grid-column-start",
    columnStart: "grid-column-start",
    "column-end": "grid-column-end",
    columnEnd: "grid-column-end",
    area: "grid-area",
    gap: "grid-gap",
    "row-gap": "grid-row-gap",
    rowGap: "grid-row-gap",
    "column-gap": "grid-column-gap",
    columnGap: "grid-column-gap"
  }
};
function mapValuesByProp(value, prop, rule) {
  return value.map(function(item) {
    return objectToArray(item, prop, rule, false, true);
  });
}
function processArray(value, prop, scheme, rule) {
  if (scheme[prop] == null) return value;
  if (value.length === 0) return [];
  if (Array.isArray(value[0])) return processArray(value[0], prop, scheme, rule);
  if (typeof value[0] === "object") {
    return mapValuesByProp(value, prop, rule);
  }
  return [value];
}
function objectToArray(value, prop, rule, isFallback, isInArray) {
  if (!(propObj[prop] || customPropObj[prop])) return [];
  var result2 = [];
  if (customPropObj[prop]) {
    value = customPropsToStyle(value, rule, customPropObj[prop], isFallback);
  }
  if (Object.keys(value).length) {
    for (var baseProp in propObj[prop]) {
      if (value[baseProp]) {
        if (Array.isArray(value[baseProp])) {
          result2.push(propArrayInObj[baseProp] === null ? value[baseProp] : value[baseProp].join(" "));
        } else result2.push(value[baseProp]);
        continue;
      }
      if (propObj[prop][baseProp] != null) {
        result2.push(propObj[prop][baseProp]);
      }
    }
  }
  if (!result2.length || isInArray) return result2;
  return [result2];
}
function customPropsToStyle(value, rule, customProps, isFallback) {
  for (var prop in customProps) {
    var propName = customProps[prop];
    if (typeof value[prop] !== "undefined" && (isFallback || !rule.prop(propName))) {
      var _styleDetector;
      var appendedValue = styleDetector((_styleDetector = {}, _styleDetector[propName] = value[prop], _styleDetector), rule)[propName];
      if (isFallback) rule.style.fallbacks[propName] = appendedValue;
      else rule.style[propName] = appendedValue;
    }
    delete value[prop];
  }
  return value;
}
function styleDetector(style, rule, isFallback) {
  for (var prop in style) {
    var value = style[prop];
    if (Array.isArray(value)) {
      if (!Array.isArray(value[0])) {
        if (prop === "fallbacks") {
          for (var index4 = 0; index4 < style.fallbacks.length; index4++) {
            style.fallbacks[index4] = styleDetector(style.fallbacks[index4], rule, true);
          }
          continue;
        }
        style[prop] = processArray(value, prop, propArray, rule);
        if (!style[prop].length) delete style[prop];
      }
    } else if (typeof value === "object") {
      if (prop === "fallbacks") {
        style.fallbacks = styleDetector(style.fallbacks, rule, true);
        continue;
      }
      style[prop] = objectToArray(value, prop, rule, isFallback);
      if (!style[prop].length) delete style[prop];
    } else if (style[prop] === "") delete style[prop];
  }
  return style;
}
function jssExpand() {
  function onProcessStyle2(style, rule) {
    if (!style || rule.type !== "style") return style;
    if (Array.isArray(style)) {
      for (var index4 = 0; index4 < style.length; index4++) {
        style[index4] = styleDetector(style[index4], rule);
      }
      return style;
    }
    return styleDetector(style, rule);
  }
  return {
    onProcessStyle: onProcessStyle2
  };
}
var jss_plugin_expand_esm_default = jssExpand;

// node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}

// node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}

// node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}

// node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

// node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

// node_modules/@babel/runtime/helpers/esm/toConsumableArray.js
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}

// node_modules/css-vendor/dist/css-vendor.esm.js
var js = "";
var css = "";
var vendor = "";
var browser = "";
var isTouch = module_default && "ontouchstart" in document.documentElement;
if (module_default) {
  jsCssMap = {
    Moz: "-moz-",
    ms: "-ms-",
    O: "-o-",
    Webkit: "-webkit-"
  };
  _document$createEleme = document.createElement("p"), style = _document$createEleme.style;
  testProp = "Transform";
  for (key in jsCssMap) {
    if (key + testProp in style) {
      js = key;
      css = jsCssMap[key];
      break;
    }
  }
  if (js === "Webkit" && "msHyphens" in style) {
    js = "ms";
    css = jsCssMap.ms;
    browser = "edge";
  }
  if (js === "Webkit" && "-apple-trailing-word" in style) {
    vendor = "apple";
  }
}
var jsCssMap;
var _document$createEleme;
var style;
var testProp;
var key;
var prefix = {
  js,
  css,
  vendor,
  browser,
  isTouch
};
function supportedKeyframes(key) {
  if (key[1] === "-") return key;
  if (prefix.js === "ms") return key;
  return "@" + prefix.css + "keyframes" + key.substr(10);
}
var appearence = {
  noPrefill: ["appearance"],
  supportedProperty: function supportedProperty(prop) {
    if (prop !== "appearance") return false;
    if (prefix.js === "ms") return "-webkit-" + prop;
    return prefix.css + prop;
  }
};
var colorAdjust = {
  noPrefill: ["color-adjust"],
  supportedProperty: function supportedProperty2(prop) {
    if (prop !== "color-adjust") return false;
    if (prefix.js === "Webkit") return prefix.css + "print-" + prop;
    return prop;
  }
};
var regExp = /[-\s]+(.)?/g;
function toUpper(match, c) {
  return c ? c.toUpperCase() : "";
}
function camelize(str) {
  return str.replace(regExp, toUpper);
}
function pascalize(str) {
  return camelize("-" + str);
}
var mask = {
  noPrefill: ["mask"],
  supportedProperty: function supportedProperty3(prop, style) {
    if (!/^mask/.test(prop)) return false;
    if (prefix.js === "Webkit") {
      var longhand = "mask-image";
      if (camelize(longhand) in style) {
        return prop;
      }
      if (prefix.js + pascalize(longhand) in style) {
        return prefix.css + prop;
      }
    }
    return prop;
  }
};
var textOrientation = {
  noPrefill: ["text-orientation"],
  supportedProperty: function supportedProperty4(prop) {
    if (prop !== "text-orientation") return false;
    if (prefix.vendor === "apple" && !prefix.isTouch) {
      return prefix.css + prop;
    }
    return prop;
  }
};
var transform = {
  noPrefill: ["transform"],
  supportedProperty: function supportedProperty5(prop, style, options) {
    if (prop !== "transform") return false;
    if (options.transform) {
      return prop;
    }
    return prefix.css + prop;
  }
};
var transition = {
  noPrefill: ["transition"],
  supportedProperty: function supportedProperty6(prop, style, options) {
    if (prop !== "transition") return false;
    if (options.transition) {
      return prop;
    }
    return prefix.css + prop;
  }
};
var writingMode = {
  noPrefill: ["writing-mode"],
  supportedProperty: function supportedProperty7(prop) {
    if (prop !== "writing-mode") return false;
    if (prefix.js === "Webkit" || prefix.js === "ms" && prefix.browser !== "edge") {
      return prefix.css + prop;
    }
    return prop;
  }
};
var userSelect = {
  noPrefill: ["user-select"],
  supportedProperty: function supportedProperty8(prop) {
    if (prop !== "user-select") return false;
    if (prefix.js === "Moz" || prefix.js === "ms" || prefix.vendor === "apple") {
      return prefix.css + prop;
    }
    return prop;
  }
};
var breakPropsOld = {
  supportedProperty: function supportedProperty9(prop, style) {
    if (!/^break-/.test(prop)) return false;
    if (prefix.js === "Webkit") {
      var jsProp = "WebkitColumn" + pascalize(prop);
      return jsProp in style ? prefix.css + "column-" + prop : false;
    }
    if (prefix.js === "Moz") {
      var _jsProp = "page" + pascalize(prop);
      return _jsProp in style ? "page-" + prop : false;
    }
    return false;
  }
};
var inlineLogicalOld = {
  supportedProperty: function supportedProperty10(prop, style) {
    if (!/^(border|margin|padding)-inline/.test(prop)) return false;
    if (prefix.js === "Moz") return prop;
    var newProp = prop.replace("-inline", "");
    return prefix.js + pascalize(newProp) in style ? prefix.css + newProp : false;
  }
};
var unprefixed = {
  supportedProperty: function supportedProperty11(prop, style) {
    return camelize(prop) in style ? prop : false;
  }
};
var prefixed = {
  supportedProperty: function supportedProperty12(prop, style) {
    var pascalized = pascalize(prop);
    if (prop[0] === "-") return prop;
    if (prop[0] === "-" && prop[1] === "-") return prop;
    if (prefix.js + pascalized in style) return prefix.css + prop;
    if (prefix.js !== "Webkit" && "Webkit" + pascalized in style) return "-webkit-" + prop;
    return false;
  }
};
var scrollSnap = {
  supportedProperty: function supportedProperty13(prop) {
    if (prop.substring(0, 11) !== "scroll-snap") return false;
    if (prefix.js === "ms") {
      return "" + prefix.css + prop;
    }
    return prop;
  }
};
var overscrollBehavior = {
  supportedProperty: function supportedProperty14(prop) {
    if (prop !== "overscroll-behavior") return false;
    if (prefix.js === "ms") {
      return prefix.css + "scroll-chaining";
    }
    return prop;
  }
};
var propMap = {
  "flex-grow": "flex-positive",
  "flex-shrink": "flex-negative",
  "flex-basis": "flex-preferred-size",
  "justify-content": "flex-pack",
  order: "flex-order",
  "align-items": "flex-align",
  "align-content": "flex-line-pack"
  // 'align-self' is handled by 'align-self' plugin.
};
var flex2012 = {
  supportedProperty: function supportedProperty15(prop, style) {
    var newProp = propMap[prop];
    if (!newProp) return false;
    return prefix.js + pascalize(newProp) in style ? prefix.css + newProp : false;
  }
};
var propMap$1 = {
  flex: "box-flex",
  "flex-grow": "box-flex",
  "flex-direction": ["box-orient", "box-direction"],
  order: "box-ordinal-group",
  "align-items": "box-align",
  "flex-flow": ["box-orient", "box-direction"],
  "justify-content": "box-pack"
};
var propKeys = Object.keys(propMap$1);
var prefixCss = function prefixCss2(p) {
  return prefix.css + p;
};
var flex2009 = {
  supportedProperty: function supportedProperty16(prop, style, _ref) {
    var multiple = _ref.multiple;
    if (propKeys.indexOf(prop) > -1) {
      var newProp = propMap$1[prop];
      if (!Array.isArray(newProp)) {
        return prefix.js + pascalize(newProp) in style ? prefix.css + newProp : false;
      }
      if (!multiple) return false;
      for (var i = 0; i < newProp.length; i++) {
        if (!(prefix.js + pascalize(newProp[0]) in style)) {
          return false;
        }
      }
      return newProp.map(prefixCss);
    }
    return false;
  }
};
var plugins2 = [appearence, colorAdjust, mask, textOrientation, transform, transition, writingMode, userSelect, breakPropsOld, inlineLogicalOld, unprefixed, prefixed, scrollSnap, overscrollBehavior, flex2012, flex2009];
var propertyDetectors = plugins2.filter(function(p) {
  return p.supportedProperty;
}).map(function(p) {
  return p.supportedProperty;
});
var noPrefill = plugins2.filter(function(p) {
  return p.noPrefill;
}).reduce(function(a, p) {
  a.push.apply(a, _toConsumableArray(p.noPrefill));
  return a;
}, []);
var el;
var cache2 = {};
if (module_default) {
  el = document.createElement("p");
  computed = window.getComputedStyle(document.documentElement, "");
  for (key$1 in computed) {
    if (!isNaN(key$1)) cache2[computed[key$1]] = computed[key$1];
  }
  noPrefill.forEach(function(x) {
    return delete cache2[x];
  });
}
var computed;
var key$1;
function supportedProperty17(prop, options) {
  if (options === void 0) {
    options = {};
  }
  if (!el) return prop;
  if (cache2[prop] != null) {
    return cache2[prop];
  }
  if (prop === "transition" || prop === "transform") {
    options[prop] = prop in el.style;
  }
  for (var i = 0; i < propertyDetectors.length; i++) {
    cache2[prop] = propertyDetectors[i](prop, el.style, options);
    if (cache2[prop]) break;
  }
  try {
    el.style[prop] = "";
  } catch (err) {
    return false;
  }
  return cache2[prop];
}
var cache$1 = {};
var transitionProperties = {
  transition: 1,
  "transition-property": 1,
  "-webkit-transition": 1,
  "-webkit-transition-property": 1
};
var transPropsRegExp = /(^\s*[\w-]+)|, (\s*[\w-]+)(?![^()]*\))/g;
var el$1;
function prefixTransitionCallback(match, p1, p2) {
  if (p1 === "var") return "var";
  if (p1 === "all") return "all";
  if (p2 === "all") return ", all";
  var prefixedValue = p1 ? supportedProperty17(p1) : ", " + supportedProperty17(p2);
  if (!prefixedValue) return p1 || p2;
  return prefixedValue;
}
if (module_default) el$1 = document.createElement("p");
function supportedValue(property, value) {
  var prefixedValue = value;
  if (!el$1 || property === "content") return value;
  if (typeof prefixedValue !== "string" || !isNaN(parseInt(prefixedValue, 10))) {
    return prefixedValue;
  }
  var cacheKey = property + prefixedValue;
  if (cache$1[cacheKey] != null) {
    return cache$1[cacheKey];
  }
  try {
    el$1.style[property] = prefixedValue;
  } catch (err) {
    cache$1[cacheKey] = false;
    return false;
  }
  if (transitionProperties[property]) {
    prefixedValue = prefixedValue.replace(transPropsRegExp, prefixTransitionCallback);
  } else if (el$1.style[property] === "") {
    prefixedValue = prefix.css + prefixedValue;
    if (prefixedValue === "-ms-flex") el$1.style[property] = "-ms-flexbox";
    el$1.style[property] = prefixedValue;
    if (el$1.style[property] === "") {
      cache$1[cacheKey] = false;
      return false;
    }
  }
  el$1.style[property] = "";
  cache$1[cacheKey] = prefixedValue;
  return cache$1[cacheKey];
}

// node_modules/jss-plugin-vendor-prefixer/dist/jss-plugin-vendor-prefixer.esm.js
function jssVendorPrefixer() {
  function onProcessRule3(rule) {
    if (rule.type === "keyframes") {
      var atRule = rule;
      atRule.at = supportedKeyframes(atRule.at);
    }
  }
  function prefixStyle(style) {
    for (var prop in style) {
      var value = style[prop];
      if (prop === "fallbacks" && Array.isArray(value)) {
        style[prop] = value.map(prefixStyle);
        continue;
      }
      var changeProp = false;
      var supportedProp = supportedProperty17(prop);
      if (supportedProp && supportedProp !== prop) changeProp = true;
      var changeValue = false;
      var supportedValue$1 = supportedValue(supportedProp, toCssValue(value));
      if (supportedValue$1 && supportedValue$1 !== value) changeValue = true;
      if (changeProp || changeValue) {
        if (changeProp) delete style[prop];
        style[supportedProp || prop] = supportedValue$1 || value;
      }
    }
    return style;
  }
  function onProcessStyle2(style, rule) {
    if (rule.type !== "style") return style;
    return prefixStyle(style);
  }
  function onChangeValue2(value, prop) {
    return supportedValue(prop, toCssValue(value)) || value;
  }
  return {
    onProcessRule: onProcessRule3,
    onProcessStyle: onProcessStyle2,
    onChangeValue: onChangeValue2
  };
}
var jss_plugin_vendor_prefixer_esm_default = jssVendorPrefixer;

// node_modules/jss-plugin-props-sort/dist/jss-plugin-props-sort.esm.js
function jssPropsSort() {
  var sort = function sort2(prop0, prop1) {
    if (prop0.length === prop1.length) {
      return prop0 > prop1 ? 1 : -1;
    }
    return prop0.length - prop1.length;
  };
  return {
    onProcessStyle: function onProcessStyle2(style, rule) {
      if (rule.type !== "style") return style;
      var newStyle = {};
      var props = Object.keys(style).sort(sort);
      for (var i = 0; i < props.length; i++) {
        newStyle[props[i]] = style[props[i]];
      }
      return newStyle;
    }
  };
}
var jss_plugin_props_sort_esm_default = jssPropsSort;

// node_modules/jss-preset-default/dist/jss-preset-default.esm.js
var create = function create2(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    plugins: [jss_plugin_rule_value_function_esm_default(), jss_plugin_rule_value_observable_esm_default(options.observable), jss_plugin_template_esm_default(), jss_plugin_global_esm_default(), jss_plugin_extend_esm_default(), jss_plugin_nested_esm_default(), jss_plugin_compose_esm_default(), jss_plugin_camel_case_esm_default(), jss_plugin_default_unit_esm_default(options.defaultUnit), jss_plugin_expand_esm_default(), jss_plugin_vendor_prefixer_esm_default(), jss_plugin_props_sort_esm_default()]
  };
};
var jss_preset_default_esm_default = create;

// node_modules/shallow-equal/dist/index.esm.js
function shallowEqualObjects(objA, objB) {
  if (objA === objB) {
    return true;
  }
  if (!objA || !objB) {
    return false;
  }
  var aKeys = Object.keys(objA);
  var bKeys = Object.keys(objB);
  var len = aKeys.length;
  if (bKeys.length !== len) {
    return false;
  }
  for (var i = 0; i < len; i++) {
    var key = aKeys[i];
    if (objA[key] !== objB[key] || !Object.prototype.hasOwnProperty.call(objB, key)) {
      return false;
    }
  }
  return true;
}

// node_modules/@emotion/memoize/dist/memoize.browser.esm.js
function memoize3(fn) {
  var cache3 = {};
  return function(arg) {
    if (cache3[arg] === void 0) cache3[arg] = fn(arg);
    return cache3[arg];
  };
}
var memoize_browser_esm_default = memoize3;

// node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js
var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|default|defer|dir|disabled|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|itemProp|itemScope|itemType|itemID|itemRef|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
var index2 = memoize_browser_esm_default(
  function(prop) {
    return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
  }
  /* Z+1 */
);
var is_prop_valid_browser_esm_default = index2;

// node_modules/css-jss/dist/css-jss.esm.js
var MAX_RULES_PER_SHEET = 1e4;
var defaultJss = createJss(jss_preset_default_esm_default());
var createCss = function createCss2(jss) {
  if (jss === void 0) {
    jss = defaultJss;
  }
  var cache3 = /* @__PURE__ */ new Map();
  var ruleIndex = 0;
  var sheet;
  var getSheet = function getSheet2() {
    if (!sheet || sheet.rules.index.length > MAX_RULES_PER_SHEET) {
      sheet = jss.createStyleSheet().attach();
    }
    return sheet;
  };
  function css3() {
    var args = arguments;
    var argsStr = JSON.stringify(args);
    var cached = cache3.get(argsStr);
    if (cached) return cached.className;
    var flatArgs = [];
    for (var argIndex in args) {
      var arg = args[argIndex];
      if (!Array.isArray(arg)) {
        flatArgs.push(arg);
        continue;
      }
      for (var innerArgIndex = 0; innerArgIndex < arg.length; innerArgIndex++) {
        flatArgs.push(arg[innerArgIndex]);
      }
    }
    var mergedStyle = {};
    var labels = [];
    for (var i = 0; i < flatArgs.length; i++) {
      var style = flatArgs[i];
      if (!style) continue;
      var styleObject = style;
      if (typeof style === "string") {
        var _cached = cache3.get(style);
        if (_cached) {
          if (_cached.labels.length) labels.push.apply(labels, _cached.labels);
          styleObject = _cached.style;
        }
      }
      if (styleObject.label && labels.indexOf(styleObject.label) === -1) labels.push(styleObject.label);
      Object.assign(mergedStyle, styleObject);
    }
    delete mergedStyle.label;
    var label = labels.length === 0 ? "css" : labels.join("-");
    var key = label + "-" + ruleIndex++;
    getSheet().addRule(key, mergedStyle);
    var className = getSheet().classes[key];
    var cacheValue = {
      style: mergedStyle,
      labels,
      className
    };
    cache3.set(argsStr, cacheValue);
    cache3.set(className, cacheValue);
    return className;
  }
  css3.getSheet = getSheet;
  return css3;
};
var css2 = createCss();
var css_jss_esm_default = css2;

// node_modules/react-jss/dist/react-jss.esm.js
var getDisplayName2 = function getDisplayName3(Component) {
  return Component.displayName || Component.name || "Component";
};
var memoize4 = function memoize5(fn) {
  var lastArgs;
  var lastResult;
  return function() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (Array.isArray(lastArgs) && args.length === lastArgs.length) {
      var isSame = true;
      for (var i = 0; i < args.length; i++) {
        if (args[i] !== lastArgs[i]) {
          isSame = false;
        }
      }
      if (isSame) {
        return lastResult;
      }
    }
    lastArgs = args;
    lastResult = fn.apply(void 0, args);
    return lastResult;
  };
};
var mergeClasses = function mergeClasses2(baseClasses, additionalClasses) {
  var combinedClasses = _extends({}, baseClasses);
  for (var name in additionalClasses) {
    combinedClasses[name] = name in combinedClasses ? combinedClasses[name] + " " + additionalClasses[name] : additionalClasses[name];
  }
  return combinedClasses;
};
var index3 = Number.MIN_SAFE_INTEGER || -1e9;
var getSheetIndex = function getSheetIndex2() {
  return index3++;
};
var JssContext = (0, import_react2.createContext)({
  classNamePrefix: "",
  disableStylesGeneration: false,
  isSSR: !module_default
});
var defaultManagers = /* @__PURE__ */ new Map();
var getManager = function getManager2(context, managerId) {
  var managers = context.managers;
  if (managers) {
    if (!managers[managerId]) {
      managers[managerId] = new SheetsManager();
    }
    return managers[managerId];
  }
  var manager = defaultManagers.get(managerId);
  if (!manager) {
    manager = new SheetsManager();
    defaultManagers.set(managerId, manager);
  }
  return manager;
};
var manageSheet = function manageSheet2(options) {
  var sheet = options.sheet, context = options.context, index4 = options.index, theme = options.theme;
  if (!sheet) {
    return;
  }
  var manager = getManager(context, index4);
  manager.manage(theme);
  if (context.registry) {
    context.registry.add(sheet);
  }
};
var unmanageSheet = function unmanageSheet2(options) {
  if (!options.sheet) {
    return;
  }
  var manager = getManager(options.context, options.index);
  manager.unmanage(options.theme);
};
var defaultJss2 = createJss(jss_preset_default_esm_default());
var sheetsMeta = /* @__PURE__ */ new WeakMap();
var getMeta = function getMeta2(sheet) {
  return sheetsMeta.get(sheet);
};
var addMeta = function addMeta2(sheet, meta) {
  sheetsMeta.set(sheet, meta);
};
var getStyles = function getStyles2(options) {
  var styles = options.styles;
  if (typeof styles !== "function") {
    return styles;
  }
  true ? tiny_warning_esm_default(styles.length !== 0, "[JSS] <" + (options.name || "Hook") + ` />'s styles function doesn't rely on the "theme" argument. We recommend declaring styles as an object instead.`) : void 0;
  return styles(options.theme);
};
function getSheetOptions(options, link) {
  var minify;
  if (options.context.id && options.context.id.minify != null) {
    minify = options.context.id.minify;
  }
  var classNamePrefix = options.context.classNamePrefix || "";
  if (options.name && !minify) {
    classNamePrefix += options.name.replace(/\s/g, "-") + "-";
  }
  var meta = "";
  if (options.name) meta = options.name + ", ";
  meta += typeof options.styles === "function" ? "Themed" : "Unthemed";
  return _extends({}, options.sheetOptions, {
    index: options.index,
    meta,
    classNamePrefix,
    link,
    generateId: options.sheetOptions && options.sheetOptions.generateId ? options.sheetOptions.generateId : options.context.generateId
  });
}
var createStyleSheet = function createStyleSheet2(options) {
  if (options.context.disableStylesGeneration) {
    return void 0;
  }
  var manager = getManager(options.context, options.index);
  var existingSheet = manager.get(options.theme);
  if (existingSheet) {
    return existingSheet;
  }
  var jss = options.context.jss || defaultJss2;
  var styles = getStyles(options);
  var dynamicStyles = getDynamicStyles(styles);
  var sheet = jss.createStyleSheet(styles, getSheetOptions(options, dynamicStyles !== null));
  addMeta(sheet, {
    dynamicStyles,
    styles
  });
  manager.add(options.theme, sheet);
  return sheet;
};
var removeDynamicRules = function removeDynamicRules2(sheet, rules) {
  for (var key in rules) {
    sheet.deleteRule(rules[key]);
  }
};
var updateDynamicRules = function updateDynamicRules2(data, sheet, rules) {
  for (var key in rules) {
    sheet.updateOne(rules[key], data);
  }
};
var addDynamicRules = function addDynamicRules2(sheet, data) {
  var meta = getMeta(sheet);
  if (!meta) {
    return void 0;
  }
  var rules = {};
  for (var key in meta.dynamicStyles) {
    var initialRuleCount = sheet.rules.index.length;
    var originalRule = sheet.addRule(key, meta.dynamicStyles[key]);
    for (var i = initialRuleCount; i < sheet.rules.index.length; i++) {
      var rule = sheet.rules.index[i];
      sheet.updateOne(rule, data);
      rules[originalRule === rule ? key : rule.key] = rule;
    }
  }
  return rules;
};
var getSheetClasses = function getSheetClasses2(sheet, dynamicRules) {
  if (!dynamicRules) {
    return sheet.classes;
  }
  var meta = getMeta(sheet);
  if (!meta) {
    return sheet.classes;
  }
  var classes = {};
  for (var key in meta.styles) {
    classes[key] = sheet.classes[key];
    if (key in dynamicRules) {
      classes[key] += " " + sheet.classes[dynamicRules[key].key];
    }
  }
  return classes;
};
function getUseInsertionEffect(isSSR) {
  return isSSR ? import_react2.useEffect : import_react2.default.useInsertionEffect || // React 18+ (https://github.com/reactwg/react-18/discussions/110)
  import_react2.useLayoutEffect;
}
var noTheme = {};
var createUseStyles = function createUseStyles2(styles, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$index = _options.index, index4 = _options$index === void 0 ? getSheetIndex() : _options$index, theming = _options.theming, name = _options.name, sheetOptions = _objectWithoutPropertiesLoose(_options, ["index", "theming", "name"]);
  var ThemeContext$1 = theming && theming.context || ThemeContext;
  var useTheme2 = function useTheme3(theme) {
    if (typeof styles === "function") {
      return theme || (0, import_react2.useContext)(ThemeContext$1) || noTheme;
    }
    return noTheme;
  };
  var emptyObject = {};
  return function useStyles(data) {
    var isFirstMount = (0, import_react2.useRef)(true);
    var context = (0, import_react2.useContext)(JssContext);
    var theme = useTheme2(data && data.theme);
    var _useMemo = (0, import_react2.useMemo)(function() {
      var newSheet = createStyleSheet({
        context,
        styles,
        name,
        theme,
        index: index4,
        sheetOptions
      });
      if (newSheet && context.isSSR) {
        manageSheet({
          index: index4,
          context,
          sheet: newSheet,
          theme
        });
      }
      return [newSheet, newSheet ? addDynamicRules(newSheet, data) : null];
    }, [context, theme]), sheet = _useMemo[0], dynamicRules = _useMemo[1];
    getUseInsertionEffect(context.isSSR)(function() {
      if (sheet && dynamicRules && !isFirstMount.current) {
        updateDynamicRules(data, sheet, dynamicRules);
      }
    }, [data]);
    getUseInsertionEffect(context.isSSR)(function() {
      if (sheet) {
        manageSheet({
          index: index4,
          context,
          sheet,
          theme
        });
      }
      return function() {
        if (sheet) {
          unmanageSheet({
            index: index4,
            context,
            sheet,
            theme
          });
          if (dynamicRules) {
            removeDynamicRules(sheet, dynamicRules);
          }
        }
      };
    }, [sheet]);
    var classes = (0, import_react2.useMemo)(function() {
      return sheet && dynamicRules ? getSheetClasses(sheet, dynamicRules) : emptyObject;
    }, [sheet, dynamicRules]);
    (0, import_react2.useDebugValue)(classes);
    (0, import_react2.useDebugValue)(theme === noTheme ? "No theme" : theme);
    (0, import_react2.useEffect)(function() {
      isFirstMount.current = false;
    });
    return classes;
  };
};
var NoRenderer = function NoRenderer2(props) {
  return props.children || null;
};
var createWithStyles = function createWithStyles2(styles, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$index = _options.index, index4 = _options$index === void 0 ? getSheetIndex() : _options$index, theming = _options.theming, injectTheme = _options.injectTheme, sheetOptions = _objectWithoutPropertiesLoose(_options, ["index", "theming", "injectTheme"]);
  var ThemeContext$1 = theming ? theming.context : ThemeContext;
  return function(InnerComponent) {
    if (InnerComponent === void 0) {
      InnerComponent = NoRenderer;
    }
    var displayName = getDisplayName2(InnerComponent);
    var mergeClassesProp = memoize4(function(sheetClasses, classesProp) {
      return classesProp ? mergeClasses(sheetClasses, classesProp) : sheetClasses;
    });
    var hookOptions = Object.assign(sheetOptions, {
      theming,
      index: index4,
      name: displayName
    });
    var useStyles = createUseStyles(styles, hookOptions);
    var WithStyles = (0, import_react2.forwardRef)(function(props, ref) {
      var theme = (0, import_react2.useContext)(ThemeContext$1);
      var newProps = _extends({}, props);
      if (injectTheme && newProps.theme == null) {
        newProps.theme = theme;
      }
      var sheetClasses = useStyles(newProps);
      var classes = mergeClassesProp(sheetClasses, props.classes);
      return (0, import_react2.createElement)(InnerComponent, _extends({}, newProps, {
        classes,
        ref
      }));
    });
    WithStyles.displayName = "WithStyles(" + displayName + ")";
    WithStyles.defaultProps = _extends({}, InnerComponent.defaultProps);
    WithStyles.InnerComponent = InnerComponent;
    return (0, import_hoist_non_react_statics2.default)(WithStyles, InnerComponent);
  };
};
var initialContext = {};
function JssProvider(props) {
  var managersRef = (0, import_react2.useRef)({});
  var prevContextRef = (0, import_react2.useRef)();
  var registryRef = (0, import_react2.useRef)(null);
  var createContext3 = function createContext4(parentContext, prevContext) {
    if (prevContext === void 0) {
      prevContext = initialContext;
    }
    var registry = props.registry, classNamePrefix = props.classNamePrefix, jss = props.jss, generateId = props.generateId, disableStylesGeneration = props.disableStylesGeneration, media = props.media, id = props.id, isSSR = props.isSSR;
    var context = _extends({}, parentContext);
    if (registry) {
      context.registry = registry;
      if (registry !== registryRef.current) {
        managersRef.current = {};
        registryRef.current = registry;
      }
    }
    context.managers = managersRef.current;
    if (id !== void 0) {
      context.id = id;
    }
    if (generateId !== void 0) {
      context.generateId = generateId;
    } else if (!context.generateId || !prevContext || context.id !== prevContext.id) {
      context.generateId = createGenerateId(context.id);
    }
    if (classNamePrefix) {
      context.classNamePrefix = (context.classNamePrefix || "") + classNamePrefix;
    }
    if (media !== void 0) {
      context.media = media;
    }
    if (jss) {
      context.jss = jss;
    }
    if (disableStylesGeneration !== void 0) {
      context.disableStylesGeneration = disableStylesGeneration;
    }
    if (isSSR !== void 0) {
      context.isSSR = isSSR;
    }
    if (prevContext && shallowEqualObjects(prevContext, context)) {
      return prevContext;
    }
    return context;
  };
  var renderProvider = function renderProvider2(parentContext) {
    var children = props.children;
    var context = createContext3(parentContext, prevContextRef.current);
    prevContextRef.current = context;
    return (0, import_react2.createElement)(JssContext.Provider, {
      value: context
    }, children);
  };
  return (0, import_react2.createElement)(JssContext.Consumer, null, renderProvider);
}
var parseStyles = function parseStyles2(args) {
  var dynamicStyles = [];
  var staticStyle;
  var labels = [];
  for (var key in args) {
    var style = args[key];
    if (!style) continue;
    if (typeof style === "function") {
      dynamicStyles.push(style);
    } else {
      if (!staticStyle) staticStyle = {};
      Object.assign(staticStyle, style);
      var _staticStyle = staticStyle, _label = _staticStyle.label;
      if (_label) {
        if (labels.indexOf(_label) === -1) labels.push(_label);
      }
    }
  }
  var styles = {};
  var label = labels.length === 0 ? "sc" : labels.join("-");
  if (staticStyle) {
    if ("label" in staticStyle) delete staticStyle.label;
    styles[label] = staticStyle;
  }
  if (dynamicStyles.length === 1) {
    styles.scd = dynamicStyles[0];
  }
  if (dynamicStyles.length > 1) {
    styles.scd = function(props) {
      var merged = {};
      for (var i = 0; i < dynamicStyles.length; i++) {
        var dynamicStyle = dynamicStyles[i](props);
        if (dynamicStyle) Object.assign(merged, dynamicStyle);
      }
      return merged;
    };
  }
  return {
    styles,
    label
  };
};
var shouldForwardPropSymbol = Symbol("react-jss-styled");
var getShouldForwardProp = function getShouldForwardProp2(tagOrComponent, options) {
  var shouldForwardProp = options.shouldForwardProp;
  var childShouldForwardProp = tagOrComponent[shouldForwardPropSymbol];
  var finalShouldForwardProp = shouldForwardProp || childShouldForwardProp;
  if (shouldForwardProp && childShouldForwardProp) {
    finalShouldForwardProp = function finalShouldForwardProp2(prop) {
      return childShouldForwardProp(prop) && shouldForwardProp(prop);
    };
  }
  return finalShouldForwardProp;
};
var getChildProps = function getChildProps2(props, shouldForwardProp, isTag) {
  var childProps = {};
  for (var prop in props) {
    if (shouldForwardProp) {
      if (shouldForwardProp(prop) === true) {
        childProps[prop] = props[prop];
      }
      continue;
    }
    if (isTag) {
      if (is_prop_valid_browser_esm_default(prop)) {
        childProps[prop] = props[prop];
      }
      continue;
    }
    childProps[prop] = props[prop];
  }
  return childProps;
};
var configureStyled = function configureStyled2(tagOrComponent, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, theming = _options.theming;
  var isTag = typeof tagOrComponent === "string";
  var ThemeContext$1 = theming ? theming.context : ThemeContext;
  var shouldForwardProp = getShouldForwardProp(tagOrComponent, options);
  var _options2 = options, _ = _options2.shouldForwardProp, hookOptions = _objectWithoutPropertiesLoose(_options2, ["shouldForwardProp"]);
  return function createStyledComponent() {
    var _parseStyles = parseStyles(arguments), styles = _parseStyles.styles, label = _parseStyles.label;
    var useStyles = createUseStyles(styles, hookOptions);
    var Styled = function Styled2(props) {
      var as = props.as, className = props.className;
      var theme = (0, import_react2.useContext)(ThemeContext$1);
      var propsWithTheme = Object.assign({
        theme
      }, props);
      var classes = useStyles(propsWithTheme);
      var childProps = getChildProps(props, shouldForwardProp, isTag);
      var classNames = ((classes[label] || classes.sc || "") + " " + (classes.scd || "")).trim();
      childProps.className = className ? className + " " + classNames : classNames;
      if (!isTag && shouldForwardProp) {
        tagOrComponent[shouldForwardPropSymbol] = shouldForwardProp;
      }
      if (isTag && as) {
        return (0, import_react2.createElement)(as, childProps);
      }
      return (0, import_react2.createElement)(tagOrComponent, childProps);
    };
    return Styled;
  };
};
var create3 = function create4(css3) {
  if (css3 === void 0) {
    css3 = css_jss_esm_default;
  }
  return function createElement$1(type, props) {
    var args = arguments;
    if (props && props.css) {
      var className = css3(props.css);
      var newProps = Object.assign({}, props);
      newProps.className = props.className ? props.className + " " + className : className;
      delete newProps.css;
      args[1] = newProps;
    }
    return import_react2.createElement.apply(void 0, args);
  };
};
var jsx = create3();
var react_jss_esm_default = createWithStyles;
export {
  JssContext,
  JssProvider,
  SheetsRegistry,
  ThemeProvider,
  createGenerateId,
  create3 as createJsx,
  createTheming,
  createUseStyles,
  react_jss_esm_default as default,
  defaultJss2 as jss,
  jsx,
  configureStyled as styled,
  useTheme,
  createWithStyles as withStyles,
  withTheme
};
/*! Bundled license information:

react-is/cjs/react-is.development.js:
  (** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

object-assign/index.js:
  (*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  *)

jss/dist/jss.esm.js:
  (**
   * A better abstraction over CSS.
   *
   * @copyright Oleg Isonen (Slobodskoi) / Isonen 2014-present
   * @website https://github.com/cssinjs/jss
   * @license MIT
   *)
*/
//# sourceMappingURL=react-jss.js.map
