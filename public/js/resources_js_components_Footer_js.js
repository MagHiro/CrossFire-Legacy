"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Footer_js"],{

/***/ "./node_modules/@restart/hooks/esm/index.js":
/*!**************************************************!*\
  !*** ./node_modules/@restart/hooks/esm/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useCallbackRef": () => (/* reexport safe */ _useCallbackRef__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "useCommittedRef": () => (/* reexport safe */ _useCommittedRef__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "useEventCallback": () => (/* reexport safe */ _useEventCallback__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "useEventListener": () => (/* reexport safe */ _useEventListener__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "useGlobalListener": () => (/* reexport safe */ _useGlobalListener__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   "useImage": () => (/* reexport safe */ _useImage__WEBPACK_IMPORTED_MODULE_11__["default"]),
/* harmony export */   "useInterval": () => (/* reexport safe */ _useInterval__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   "useMergeState": () => (/* reexport safe */ _useMergeState__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   "useMergeStateFromProps": () => (/* reexport safe */ _useMergeStateFromProps__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   "useMounted": () => (/* reexport safe */ _useMounted__WEBPACK_IMPORTED_MODULE_9__["default"]),
/* harmony export */   "usePrevious": () => (/* reexport safe */ _usePrevious__WEBPACK_IMPORTED_MODULE_10__["default"]),
/* harmony export */   "useRafInterval": () => (/* reexport safe */ _useRafInterval__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   "useResizeObserver": () => (/* reexport safe */ _useResizeObserver__WEBPACK_IMPORTED_MODULE_12__["default"])
/* harmony export */ });
/* harmony import */ var _useCallbackRef__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useCallbackRef */ "./node_modules/@restart/hooks/esm/useCallbackRef.js");
/* harmony import */ var _useCommittedRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useCommittedRef */ "./node_modules/@restart/hooks/esm/useCommittedRef.js");
/* harmony import */ var _useEventCallback__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useEventCallback */ "./node_modules/@restart/hooks/esm/useEventCallback.js");
/* harmony import */ var _useEventListener__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useEventListener */ "./node_modules/@restart/hooks/esm/useEventListener.js");
/* harmony import */ var _useGlobalListener__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useGlobalListener */ "./node_modules/@restart/hooks/esm/useGlobalListener.js");
/* harmony import */ var _useInterval__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useInterval */ "./node_modules/@restart/hooks/esm/useInterval.js");
/* harmony import */ var _useRafInterval__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./useRafInterval */ "./node_modules/@restart/hooks/esm/useRafInterval.js");
/* harmony import */ var _useMergeState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./useMergeState */ "./node_modules/@restart/hooks/esm/useMergeState.js");
/* harmony import */ var _useMergeStateFromProps__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./useMergeStateFromProps */ "./node_modules/@restart/hooks/esm/useMergeStateFromProps.js");
/* harmony import */ var _useMounted__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./useMounted */ "./node_modules/@restart/hooks/esm/useMounted.js");
/* harmony import */ var _usePrevious__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./usePrevious */ "./node_modules/@restart/hooks/esm/usePrevious.js");
/* harmony import */ var _useImage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./useImage */ "./node_modules/@restart/hooks/esm/useImage.js");
/* harmony import */ var _useResizeObserver__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./useResizeObserver */ "./node_modules/@restart/hooks/esm/useResizeObserver.js");















/***/ }),

/***/ "./node_modules/@restart/hooks/esm/useCallbackRef.js":
/*!***********************************************************!*\
  !*** ./node_modules/@restart/hooks/esm/useCallbackRef.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useCallbackRef)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

/**
 * A convenience hook around `useState` designed to be paired with
 * the component [callback ref](https://reactjs.org/docs/refs-and-the-dom.html#callback-refs) api.
 * Callback refs are useful over `useRef()` when you need to respond to the ref being set
 * instead of lazily accessing it in an effect.
 *
 * ```ts
 * const [element, attachRef] = useCallbackRef<HTMLDivElement>()
 *
 * useEffect(() => {
 *   if (!element) return
 *
 *   const calendar = new FullCalendar.Calendar(element)
 *
 *   return () => {
 *     calendar.destroy()
 *   }
 * }, [element])
 *
 * return <div ref={attachRef} />
 * ```
 *
 * @category refs
 */

function useCallbackRef() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
}

/***/ }),

/***/ "./node_modules/@restart/hooks/esm/useCommittedRef.js":
/*!************************************************************!*\
  !*** ./node_modules/@restart/hooks/esm/useCommittedRef.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

/**
 * Creates a `Ref` whose value is updated in an effect, ensuring the most recent
 * value is the one rendered with. Generally only required for Concurrent mode usage
 * where previous work in `render()` may be discarded before being used.
 *
 * This is safe to access in an event handler.
 *
 * @param value The `Ref` value
 */

function useCommittedRef(value) {
  var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(value);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    ref.current = value;
  }, [value]);
  return ref;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useCommittedRef);

/***/ }),

/***/ "./node_modules/@restart/hooks/esm/useEventCallback.js":
/*!*************************************************************!*\
  !*** ./node_modules/@restart/hooks/esm/useEventCallback.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useEventCallback)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _useCommittedRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useCommittedRef */ "./node_modules/@restart/hooks/esm/useCommittedRef.js");


function useEventCallback(fn) {
  var ref = (0,_useCommittedRef__WEBPACK_IMPORTED_MODULE_1__["default"])(fn);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    return ref.current && ref.current.apply(ref, arguments);
  }, [ref]);
}

/***/ }),

/***/ "./node_modules/@restart/hooks/esm/useEventListener.js":
/*!*************************************************************!*\
  !*** ./node_modules/@restart/hooks/esm/useEventListener.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useEventListener)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _useEventCallback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useEventCallback */ "./node_modules/@restart/hooks/esm/useEventCallback.js");



/**
 * Attaches an event handler outside directly to specified DOM element
 * bypassing the react synthetic event system.
 *
 * @param element The target to listen for events on
 * @param event The DOM event name
 * @param handler An event handler
 * @param capture Whether or not to listen during the capture event phase
 */
function useEventListener(eventTarget, event, listener, capture) {
  if (capture === void 0) {
    capture = false;
  }

  var handler = (0,_useEventCallback__WEBPACK_IMPORTED_MODULE_1__["default"])(listener);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var target = typeof eventTarget === 'function' ? eventTarget() : eventTarget;
    target.addEventListener(event, handler, capture);
    return function () {
      return target.removeEventListener(event, handler, capture);
    };
  }, [eventTarget]);
}

/***/ }),

/***/ "./node_modules/@restart/hooks/esm/useForceUpdate.js":
/*!***********************************************************!*\
  !*** ./node_modules/@restart/hooks/esm/useForceUpdate.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useForceUpdate)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

/**
 * Returns a function that triggers a component update. the hook equivalent to
 * `this.forceUpdate()` in a class component. In most cases using a state value directly
 * is preferable but may be required in some advanced usages of refs for interop or
 * when direct DOM manipulation is required.
 *
 * ```ts
 * const forceUpdate = useForceUpdate();
 *
 * const updateOnClick = useCallback(() => {
 *  forceUpdate()
 * }, [forceUpdate])
 *
 * return <button type="button" onClick={updateOnClick}>Hi there</button>
 * ```
 */

function useForceUpdate() {
  // The toggling state value is designed to defeat React optimizations for skipping
  // updates when they are stricting equal to the last state value
  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(function (state) {
    return !state;
  }, false),
      dispatch = _useReducer[1];

  return dispatch;
}

/***/ }),

/***/ "./node_modules/@restart/hooks/esm/useGlobalListener.js":
/*!**************************************************************!*\
  !*** ./node_modules/@restart/hooks/esm/useGlobalListener.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useGlobalListener)
/* harmony export */ });
/* harmony import */ var _useEventListener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useEventListener */ "./node_modules/@restart/hooks/esm/useEventListener.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");



/**
 * Attaches an event handler outside directly to the `document`,
 * bypassing the react synthetic event system.
 *
 * ```ts
 * useGlobalListener('keydown', (event) => {
 *  console.log(event.key)
 * })
 * ```
 *
 * @param event The DOM event name
 * @param handler An event handler
 * @param capture Whether or not to listen during the capture event phase
 */
function useGlobalListener(event, handler, capture) {
  if (capture === void 0) {
    capture = false;
  }

  var documentTarget = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function () {
    return document;
  }, []);
  return (0,_useEventListener__WEBPACK_IMPORTED_MODULE_0__["default"])(documentTarget, event, handler, capture);
}

/***/ }),

/***/ "./node_modules/@restart/hooks/esm/useImage.js":
/*!*****************************************************!*\
  !*** ./node_modules/@restart/hooks/esm/useImage.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useImage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


/**
 * Fetch and load an image for programatic use such as in a `<canvas>` element.
 *
 * @param imageOrUrl The `HtmlImageElement` or image url to load
 * @param crossOrigin The `crossorigin` attribute to set
 *
 * ```ts
 * const { image, error } = useImage('/static/kittens.png')
 * const ref = useRef<HTMLCanvasElement>()
 *
 * useEffect(() => {
 *   const ctx = ref.current.getContext('2d')
 *
 *   if (image) {
 *     ctx.drawImage(image, 0, 0)
 *   }
 * }, [ref, image])
 *
 * return (
 *   <>
 *     {error && "there was a problem loading the image"}
 *     <canvas ref={ref} />
 *   </>
 * ```
 */
function useImage(imageOrUrl, crossOrigin) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    image: null,
    error: null
  }),
      state = _useState[0],
      setState = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!imageOrUrl) return undefined;
    var image;

    if (typeof imageOrUrl === 'string') {
      image = new Image();
      if (crossOrigin) image.crossOrigin = crossOrigin;
      image.src = imageOrUrl;
    } else {
      image = imageOrUrl;

      if (image.complete && image.naturalHeight > 0) {
        setState({
          image: image,
          error: null
        });
        return;
      }
    }

    function onLoad() {
      setState({
        image: image,
        error: null
      });
    }

    function onError(error) {
      setState({
        image: image,
        error: error
      });
    }

    image.addEventListener('load', onLoad);
    image.addEventListener('error', onError);
    return function () {
      image.removeEventListener('load', onLoad);
      image.removeEventListener('error', onError);
    };
  }, [imageOrUrl, crossOrigin]);
  return state;
}

/***/ }),

/***/ "./node_modules/@restart/hooks/esm/useInterval.js":
/*!********************************************************!*\
  !*** ./node_modules/@restart/hooks/esm/useInterval.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _useCommittedRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useCommittedRef */ "./node_modules/@restart/hooks/esm/useCommittedRef.js");


/**
 * Creates a `setInterval` that is properly cleaned up when a component unmounted
 *
 * ```tsx
 *  function Timer() {
 *    const [timer, setTimer] = useState(0)
 *    useInterval(() => setTimer(i => i + 1), 1000)
 *
 *    return <span>{timer} seconds past</span>
 *  }
 * ```
 *
 * @param fn an function run on each interval
 * @param ms The milliseconds duration of the interval
 */

function useInterval(fn, ms, paused, runImmediately) {
  if (paused === void 0) {
    paused = false;
  }

  if (runImmediately === void 0) {
    runImmediately = false;
  }

  var handle;
  var fnRef = (0,_useCommittedRef__WEBPACK_IMPORTED_MODULE_1__["default"])(fn); // this ref is necessary b/c useEffect will sometimes miss a paused toggle
  // orphaning a setTimeout chain in the aether, so relying on it's refresh logic is not reliable.

  var pausedRef = (0,_useCommittedRef__WEBPACK_IMPORTED_MODULE_1__["default"])(paused);

  var tick = function tick() {
    if (pausedRef.current) return;
    fnRef.current();
    schedule(); // eslint-disable-line no-use-before-define
  };

  var schedule = function schedule() {
    clearTimeout(handle);
    handle = setTimeout(tick, ms);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (runImmediately) {
      tick();
    } else {
      schedule();
    }

    return function () {
      return clearTimeout(handle);
    };
  }, [paused, runImmediately]);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useInterval);

/***/ }),

/***/ "./node_modules/@restart/hooks/esm/useIsomorphicEffect.js":
/*!****************************************************************!*\
  !*** ./node_modules/@restart/hooks/esm/useIsomorphicEffect.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var isReactNative = typeof __webpack_require__.g !== 'undefined' && // @ts-ignore
__webpack_require__.g.navigator && // @ts-ignore
__webpack_require__.g.navigator.product === 'ReactNative';
var isDOM = typeof document !== 'undefined';
/**
 * Is `useLayoutEffect` in a DOM or React Native environment, otherwise resolves to useEffect
 * Only useful to avoid the console warning.
 *
 * PREFER `useEffect` UNLESS YOU KNOW WHAT YOU ARE DOING.
 *
 * @category effects
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isDOM || isReactNative ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect);

/***/ }),

/***/ "./node_modules/@restart/hooks/esm/useMergeState.js":
/*!**********************************************************!*\
  !*** ./node_modules/@restart/hooks/esm/useMergeState.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useMergeState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



/**
 * Mimics a React class component's state model, of having a single unified
 * `state` object and an updater that merges updates into the existing state, as
 * opposed to replacing it.
 *
 * ```js
 * const [state, setState] = useMergeState({ name: 'Betsy', age: 24 })
 *
 * setState({ name: 'Johan' }) // { name: 'Johan', age: 24 }
 *
 * setState(state => ({ age: state.age + 10 })) // { name: 'Johan', age: 34 }
 * ```
 *
 * @param initialState The initial state object
 */
function useMergeState(initialState) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialState),
      state = _useState[0],
      setState = _useState[1];

  var updater = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (update) {
    if (update === null) return;

    if (typeof update === 'function') {
      setState(function (state) {
        var nextState = update(state);
        return nextState == null ? state : _extends({}, state, nextState);
      });
    } else {
      setState(function (state) {
        return _extends({}, state, update);
      });
    }
  }, [setState]);
  return [state, updater];
}

/***/ }),

/***/ "./node_modules/@restart/hooks/esm/useMergeStateFromProps.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@restart/hooks/esm/useMergeStateFromProps.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useMergeStateFromProps)
/* harmony export */ });
/* harmony import */ var _useMergeState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useMergeState */ "./node_modules/@restart/hooks/esm/useMergeState.js");

function useMergeStateFromProps(props, gDSFP, initialState) {
  var _useMergeState = (0,_useMergeState__WEBPACK_IMPORTED_MODULE_0__["default"])(initialState),
      state = _useMergeState[0],
      setState = _useMergeState[1];

  var nextState = gDSFP(props, state);
  if (nextState !== null) setState(nextState);
  return [state, setState];
}

/***/ }),

/***/ "./node_modules/@restart/hooks/esm/useMergedRefs.js":
/*!**********************************************************!*\
  !*** ./node_modules/@restart/hooks/esm/useMergedRefs.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "mergeRefs": () => (/* binding */ mergeRefs)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


var toFnRef = function toFnRef(ref) {
  return !ref || typeof ref === 'function' ? ref : function (value) {
    ref.current = value;
  };
};

function mergeRefs(refA, refB) {
  var a = toFnRef(refA);
  var b = toFnRef(refB);
  return function (value) {
    if (a) a(value);
    if (b) b(value);
  };
}
/**
 * Create and returns a single callback ref composed from two other Refs.
 *
 * ```tsx
 * const Button = React.forwardRef((props, ref) => {
 *   const [element, attachRef] = useCallbackRef<HTMLButtonElement>();
 *   const mergedRef = useMergedRefs(ref, attachRef);
 *
 *   return <button ref={mergedRef} {...props}/>
 * })
 * ```
 *
 * @param refA A Callback or mutable Ref
 * @param refB A Callback or mutable Ref
 * @category refs
 */

function useMergedRefs(refA, refB) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return mergeRefs(refA, refB);
  }, [refA, refB]);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useMergedRefs);

/***/ }),

/***/ "./node_modules/@restart/hooks/esm/useMounted.js":
/*!*******************************************************!*\
  !*** ./node_modules/@restart/hooks/esm/useMounted.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useMounted)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

/**
 * Track whether a component is current mounted. Generally less preferable than
 * properlly canceling effects so they don't run after a component is unmounted,
 * but helpful in cases where that isn't feasible, such as a `Promise` resolution.
 *
 * @returns a function that returns the current isMounted state of the component
 *
 * ```ts
 * const [data, setData] = useState(null)
 * const isMounted = useMounted()
 *
 * useEffect(() => {
 *   fetchdata().then((newData) => {
 *      if (isMounted()) {
 *        setData(newData);
 *      }
 *   })
 * })
 * ```
 */

function useMounted() {
  var mounted = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(true);
  var isMounted = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(function () {
    return mounted.current;
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    mounted.current = true;
    return function () {
      mounted.current = false;
    };
  }, []);
  return isMounted.current;
}

/***/ }),

/***/ "./node_modules/@restart/hooks/esm/usePrevious.js":
/*!********************************************************!*\
  !*** ./node_modules/@restart/hooks/esm/usePrevious.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ usePrevious)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

/**
 * Store the last of some value. Tracked via a `Ref` only updating it
 * after the component renders.
 *
 * Helpful if you need to compare a prop value to it's previous value during render.
 *
 * ```ts
 * function Component(props) {
 *   const lastProps = usePrevious(props)
 *
 *   if (lastProps.foo !== props.foo)
 *     resetValueFromProps(props.foo)
 * }
 * ```
 *
 * @param value the value to track
 */

function usePrevious(value) {
  var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    ref.current = value;
  });
  return ref.current;
}

/***/ }),

/***/ "./node_modules/@restart/hooks/esm/useRafInterval.js":
/*!***********************************************************!*\
  !*** ./node_modules/@restart/hooks/esm/useRafInterval.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _useCommittedRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useCommittedRef */ "./node_modules/@restart/hooks/esm/useCommittedRef.js");



function useRafInterval(fn, ms, paused) {
  if (paused === void 0) {
    paused = false;
  }

  var handle;
  var start = new Date().getTime();
  var fnRef = (0,_useCommittedRef__WEBPACK_IMPORTED_MODULE_1__["default"])(fn); // this ref is necessary b/c useEffect will sometimes miss a paused toggle
  // orphaning a setTimeout chain in the aether, so relying on it's refresh logic is not reliable.

  var pausedRef = (0,_useCommittedRef__WEBPACK_IMPORTED_MODULE_1__["default"])(paused);

  function loop() {
    var current = new Date().getTime();
    var delta = current - start;
    if (pausedRef.current) return;

    if (delta >= ms && fnRef.current) {
      fnRef.current();
      start = new Date().getTime();
    }

    cancelAnimationFrame(handle);
    handle = requestAnimationFrame(loop);
  }

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    handle = requestAnimationFrame(loop);
    return function () {
      return cancelAnimationFrame(handle);
    };
  }, []);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useRafInterval);

/***/ }),

/***/ "./node_modules/@restart/hooks/esm/useResizeObserver.js":
/*!**************************************************************!*\
  !*** ./node_modules/@restart/hooks/esm/useResizeObserver.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useResizeObserver)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _useIsomorphicEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useIsomorphicEffect */ "./node_modules/@restart/hooks/esm/useIsomorphicEffect.js");


var targetMap = new WeakMap();
var resizeObserver;

function getResizeObserver() {
  // eslint-disable-next-line no-return-assign
  return resizeObserver = resizeObserver || new window.ResizeObserver(function (entries) {
    entries.forEach(function (entry) {
      var handler = targetMap.get(entry.target);
      if (handler) handler(entry.contentRect);
    });
  });
}
/**
 * Efficiently observe size changes on an element. Depends on the `ResizeObserver` api,
 * and polyfills are needed in older browsers.
 *
 * ```ts
 * const [ref, attachRef] = useCallbackRef(null);
 *
 * const rect = useResizeObserver(ref);
 *
 * return (
 *  <div ref={attachRef}>
 *    {JSON.stringify(rect)}
 *  </div>
 * )
 * ```
 *
 * @param element The DOM element to observe
 */


function useResizeObserver(element) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      rect = _useState[0],
      setRect = _useState[1];

  (0,_useIsomorphicEffect__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
    if (!element) return;
    getResizeObserver().observe(element);
    setRect(element.getBoundingClientRect());
    targetMap.set(element, function (rect) {
      setRect(rect);
    });
    return function () {
      targetMap.delete(element);
    };
  }, [element]);
  return rect;
}

/***/ }),

/***/ "./node_modules/@restart/ui/esm/Anchor.js":
/*!************************************************!*\
  !*** ./node_modules/@restart/ui/esm/Anchor.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "isTrivialHref": () => (/* binding */ isTrivialHref)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _restart_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @restart/hooks */ "./node_modules/@restart/hooks/esm/index.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Button */ "./node_modules/@restart/ui/esm/Button.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
const _excluded = ["onKeyDown"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* eslint-disable jsx-a11y/no-static-element-interactions */

/* eslint-disable jsx-a11y/anchor-has-content */




function isTrivialHref(href) {
  return !href || href.trim() === '#';
}

/**
 * An generic `<a>` component that covers a few A11y cases, ensuring that
 * cases where the `href` is missing or trivial like "#" are treated like buttons.
 */
const Anchor = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((_ref, ref) => {
  let {
    onKeyDown
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  const [buttonProps] = (0,_Button__WEBPACK_IMPORTED_MODULE_3__.useButtonProps)(Object.assign({
    tagName: 'a'
  }, props));
  const handleKeyDown = (0,_restart_hooks__WEBPACK_IMPORTED_MODULE_1__.useEventCallback)(e => {
    buttonProps.onKeyDown(e);
    onKeyDown == null ? void 0 : onKeyDown(e);
  });

  if (isTrivialHref(props.href) && !props.role || props.role === 'button') {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", Object.assign({
      ref: ref
    }, props, buttonProps, {
      onKeyDown: handleKeyDown
    }));
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", Object.assign({
    ref: ref
  }, props, {
    onKeyDown: onKeyDown
  }));
});
Anchor.displayName = 'Anchor';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Anchor);

/***/ }),

/***/ "./node_modules/@restart/ui/esm/Button.js":
/*!************************************************!*\
  !*** ./node_modules/@restart/ui/esm/Button.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "isTrivialHref": () => (/* binding */ isTrivialHref),
/* harmony export */   "useButtonProps": () => (/* binding */ useButtonProps)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
const _excluded = ["as", "disabled"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function isTrivialHref(href) {
  return !href || href.trim() === '#';
}
function useButtonProps({
  tagName,
  disabled,
  href,
  target,
  rel,
  onClick,
  tabIndex = 0,
  type
}) {
  if (!tagName) {
    if (href != null || target != null || rel != null) {
      tagName = 'a';
    } else {
      tagName = 'button';
    }
  }

  const meta = {
    tagName
  };

  if (tagName === 'button') {
    return [{
      type: type || 'button',
      disabled
    }, meta];
  }

  const handleClick = event => {
    if (disabled || tagName === 'a' && isTrivialHref(href)) {
      event.preventDefault();
    }

    if (disabled) {
      event.stopPropagation();
      return;
    }

    onClick == null ? void 0 : onClick(event);
  };

  const handleKeyDown = event => {
    if (event.key === ' ') {
      event.preventDefault();
      handleClick(event);
    }
  };

  if (tagName === 'a') {
    // Ensure there's a href so Enter can trigger anchor button.
    href || (href = '#');

    if (disabled) {
      href = undefined;
    }
  }

  return [{
    role: 'button',
    // explicitly undefined so that it overrides the props disabled in a spread
    // e.g. <Tag {...props} {...hookProps} />
    disabled: undefined,
    tabIndex: disabled ? undefined : tabIndex,
    href,
    target: tagName === 'a' ? target : undefined,
    'aria-disabled': !disabled ? undefined : disabled,
    rel: tagName === 'a' ? rel : undefined,
    onClick: handleClick,
    onKeyDown: handleKeyDown
  }, meta];
}
const Button = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((_ref, ref) => {
  let {
    as: asProp,
    disabled
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  const [buttonProps, {
    tagName: Component
  }] = useButtonProps(Object.assign({
    tagName: asProp,
    disabled
  }, props));
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Component, Object.assign({}, props, buttonProps, {
    ref: ref
  }));
});
Button.displayName = 'Button';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);

/***/ }),

/***/ "./node_modules/@restart/ui/esm/DataKey.js":
/*!*************************************************!*\
  !*** ./node_modules/@restart/ui/esm/DataKey.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ATTRIBUTE_PREFIX": () => (/* binding */ ATTRIBUTE_PREFIX),
/* harmony export */   "PROPERTY_PREFIX": () => (/* binding */ PROPERTY_PREFIX),
/* harmony export */   "dataAttr": () => (/* binding */ dataAttr),
/* harmony export */   "dataProp": () => (/* binding */ dataProp)
/* harmony export */ });
const ATTRIBUTE_PREFIX = `data-rr-ui-`;
const PROPERTY_PREFIX = `rrUi`;
function dataAttr(property) {
  return `${ATTRIBUTE_PREFIX}${property}`;
}
function dataProp(property) {
  return `${PROPERTY_PREFIX}${property}`;
}

/***/ }),

/***/ "./node_modules/@restart/ui/esm/Nav.js":
/*!*********************************************!*\
  !*** ./node_modules/@restart/ui/esm/Nav.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var dom_helpers_querySelectorAll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dom-helpers/querySelectorAll */ "./node_modules/dom-helpers/esm/querySelectorAll.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _restart_hooks_useForceUpdate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @restart/hooks/useForceUpdate */ "./node_modules/@restart/hooks/esm/useForceUpdate.js");
/* harmony import */ var _restart_hooks_useMergedRefs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @restart/hooks/useMergedRefs */ "./node_modules/@restart/hooks/esm/useMergedRefs.js");
/* harmony import */ var _NavContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./NavContext */ "./node_modules/@restart/ui/esm/NavContext.js");
/* harmony import */ var _SelectableContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SelectableContext */ "./node_modules/@restart/ui/esm/SelectableContext.js");
/* harmony import */ var _TabContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TabContext */ "./node_modules/@restart/ui/esm/TabContext.js");
/* harmony import */ var _DataKey__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DataKey */ "./node_modules/@restart/ui/esm/DataKey.js");
/* harmony import */ var _NavItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./NavItem */ "./node_modules/@restart/ui/esm/NavItem.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
const _excluded = ["as", "onSelect", "activeKey", "role", "onKeyDown"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }













// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {};

const EVENT_KEY_ATTR = (0,_DataKey__WEBPACK_IMPORTED_MODULE_5__.dataAttr)('event-key');
const Nav = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((_ref, ref) => {
  let {
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: Component = 'div',
    onSelect,
    activeKey,
    role,
    onKeyDown
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  // A ref and forceUpdate for refocus, b/c we only want to trigger when needed
  // and don't want to reset the set in the effect
  const forceUpdate = (0,_restart_hooks_useForceUpdate__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const needsRefocusRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);
  const parentOnSelect = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_SelectableContext__WEBPACK_IMPORTED_MODULE_6__["default"]);
  const tabContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_TabContext__WEBPACK_IMPORTED_MODULE_7__["default"]);
  let getControlledId, getControllerId;

  if (tabContext) {
    role = role || 'tablist';
    activeKey = tabContext.activeKey; // TODO: do we need to duplicate these?

    getControlledId = tabContext.getControlledId;
    getControllerId = tabContext.getControllerId;
  }

  const listNode = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);

  const getNextActiveTab = offset => {
    const currentListNode = listNode.current;
    if (!currentListNode) return null;
    const items = (0,dom_helpers_querySelectorAll__WEBPACK_IMPORTED_MODULE_0__["default"])(currentListNode, `[${EVENT_KEY_ATTR}]:not([aria-disabled=true])`);
    const activeChild = currentListNode.querySelector('[aria-selected=true]');
    if (!activeChild || activeChild !== document.activeElement) return null;
    const index = items.indexOf(activeChild);
    if (index === -1) return null;
    let nextIndex = index + offset;
    if (nextIndex >= items.length) nextIndex = 0;
    if (nextIndex < 0) nextIndex = items.length - 1;
    return items[nextIndex];
  };

  const handleSelect = (key, event) => {
    if (key == null) return;
    onSelect == null ? void 0 : onSelect(key, event);
    parentOnSelect == null ? void 0 : parentOnSelect(key, event);
  };

  const handleKeyDown = event => {
    onKeyDown == null ? void 0 : onKeyDown(event);

    if (!tabContext) {
      return;
    }

    let nextActiveChild;

    switch (event.key) {
      case 'ArrowLeft':
      case 'ArrowUp':
        nextActiveChild = getNextActiveTab(-1);
        break;

      case 'ArrowRight':
      case 'ArrowDown':
        nextActiveChild = getNextActiveTab(1);
        break;

      default:
        return;
    }

    if (!nextActiveChild) return;
    event.preventDefault();
    handleSelect(nextActiveChild.dataset[(0,_DataKey__WEBPACK_IMPORTED_MODULE_5__.dataProp)('EventKey')] || null, event);
    needsRefocusRef.current = true;
    forceUpdate();
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (listNode.current && needsRefocusRef.current) {
      const activeChild = listNode.current.querySelector(`[${EVENT_KEY_ATTR}][aria-selected=true]`);
      activeChild == null ? void 0 : activeChild.focus();
    }

    needsRefocusRef.current = false;
  });
  const mergedRef = (0,_restart_hooks_useMergedRefs__WEBPACK_IMPORTED_MODULE_3__["default"])(ref, listNode);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_SelectableContext__WEBPACK_IMPORTED_MODULE_6__["default"].Provider, {
    value: handleSelect,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_NavContext__WEBPACK_IMPORTED_MODULE_8__["default"].Provider, {
      value: {
        role,
        // used by NavLink to determine it's role
        activeKey: (0,_SelectableContext__WEBPACK_IMPORTED_MODULE_6__.makeEventKey)(activeKey),
        getControlledId: getControlledId || noop,
        getControllerId: getControllerId || noop
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Component, Object.assign({}, props, {
        onKeyDown: handleKeyDown,
        ref: mergedRef,
        role: role
      }))
    })
  });
});
Nav.displayName = 'Nav';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Object.assign(Nav, {
  Item: _NavItem__WEBPACK_IMPORTED_MODULE_9__["default"]
}));

/***/ }),

/***/ "./node_modules/@restart/ui/esm/NavContext.js":
/*!****************************************************!*\
  !*** ./node_modules/@restart/ui/esm/NavContext.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

const NavContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
NavContext.displayName = 'NavContext';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavContext);

/***/ }),

/***/ "./node_modules/@restart/ui/esm/NavItem.js":
/*!*************************************************!*\
  !*** ./node_modules/@restart/ui/esm/NavItem.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "useNavItem": () => (/* binding */ useNavItem)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @restart/hooks/useEventCallback */ "./node_modules/@restart/hooks/esm/useEventCallback.js");
/* harmony import */ var _NavContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NavContext */ "./node_modules/@restart/ui/esm/NavContext.js");
/* harmony import */ var _SelectableContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SelectableContext */ "./node_modules/@restart/ui/esm/SelectableContext.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Button */ "./node_modules/@restart/ui/esm/Button.js");
/* harmony import */ var _DataKey__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DataKey */ "./node_modules/@restart/ui/esm/DataKey.js");
/* harmony import */ var _TabContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TabContext */ "./node_modules/@restart/ui/esm/TabContext.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
const _excluded = ["as", "active", "eventKey"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }










function useNavItem({
  key,
  onClick,
  active,
  id,
  role,
  disabled
}) {
  const parentOnSelect = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_SelectableContext__WEBPACK_IMPORTED_MODULE_3__["default"]);
  const navContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_NavContext__WEBPACK_IMPORTED_MODULE_4__["default"]);
  const tabContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_TabContext__WEBPACK_IMPORTED_MODULE_5__["default"]);
  let isActive = active;
  const props = {
    role
  };

  if (navContext) {
    if (!role && navContext.role === 'tablist') props.role = 'tab';
    const contextControllerId = navContext.getControllerId(key != null ? key : null);
    const contextControlledId = navContext.getControlledId(key != null ? key : null); // @ts-ignore

    props[(0,_DataKey__WEBPACK_IMPORTED_MODULE_6__.dataAttr)('event-key')] = key;
    props.id = contextControllerId || id;
    isActive = active == null && key != null ? navContext.activeKey === key : active;
    /**
     * Simplified scenario for `mountOnEnter`.
     *
     * While it would make sense to keep 'aria-controls' for tabs that have been mounted at least
     * once, it would also complicate the code quite a bit, for very little gain.
     * The following implementation is probably good enough.
     *
     * @see https://github.com/react-restart/ui/pull/40#issuecomment-1009971561
     */

    if (isActive || !(tabContext != null && tabContext.unmountOnExit) && !(tabContext != null && tabContext.mountOnEnter)) props['aria-controls'] = contextControlledId;
  }

  if (props.role === 'tab') {
    if (disabled) {
      props.tabIndex = -1;
      props['aria-disabled'] = true;
    }

    if (isActive) {
      props['aria-selected'] = isActive;
    } else {
      props.tabIndex = -1;
    }
  }

  props.onClick = (0,_restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_1__["default"])(e => {
    if (disabled) return;
    onClick == null ? void 0 : onClick(e);

    if (key == null) {
      return;
    }

    if (parentOnSelect && !e.isPropagationStopped()) {
      parentOnSelect(key, e);
    }
  });
  return [props, {
    isActive
  }];
}
const NavItem = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((_ref, ref) => {
  let {
    as: Component = _Button__WEBPACK_IMPORTED_MODULE_7__["default"],
    active,
    eventKey
  } = _ref,
      options = _objectWithoutPropertiesLoose(_ref, _excluded);

  const [props, meta] = useNavItem(Object.assign({
    key: (0,_SelectableContext__WEBPACK_IMPORTED_MODULE_3__.makeEventKey)(eventKey, options.href),
    active
  }, options)); // @ts-ignore

  props[(0,_DataKey__WEBPACK_IMPORTED_MODULE_6__.dataAttr)('active')] = meta.isActive;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Component, Object.assign({}, options, props, {
    ref: ref
  }));
});
NavItem.displayName = 'NavItem';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavItem);

/***/ }),

/***/ "./node_modules/@restart/ui/esm/SelectableContext.js":
/*!***********************************************************!*\
  !*** ./node_modules/@restart/ui/esm/SelectableContext.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "makeEventKey": () => (/* binding */ makeEventKey)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

const SelectableContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
const makeEventKey = (eventKey, href = null) => {
  if (eventKey != null) return String(eventKey);
  return href || null;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectableContext);

/***/ }),

/***/ "./node_modules/@restart/ui/esm/TabContext.js":
/*!****************************************************!*\
  !*** ./node_modules/@restart/ui/esm/TabContext.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

const TabContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TabContext);

/***/ }),

/***/ "./resources/js/components/Footer.js":
/*!*******************************************!*\
  !*** ./resources/js/components/Footer.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Container.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Nav.js");
/* harmony import */ var _styled_landingpage_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styled/landingpage.css */ "./resources/js/styled/landingpage.css");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







function Footer() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(window.innerWidth > 768),
      _useState2 = _slicedToArray(_useState, 2),
      isDesktop = _useState2[0],
      setDesktop = _useState2[1];

  var updateMedia = function updateMedia() {
    setDesktop(window.innerWidth > 768);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    window.addEventListener("resize", updateMedia);
    return function () {
      return window.removeEventListener("resize", updateMedia);
    };
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "footerBG",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        children: isDesktop ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
              xs: 4,
              className: "mt-4 mb-4",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("iframe", {
                className: "visible-lg",
                src: "https://discord.com/widget?id=924649291992150036&theme=dark",
                height: "250",
                allowtransparency: "true",
                frameBorder: "0",
                sandbox: "allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts",
                style: {
                  width: "100%"
                },
                bis_size: "{\"x\":176,\"y\":4703,\"w\":400,\"h\":250,\"abs_x\":176,\"abs_y\":4703}"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
              className: "mt-4 mb-4 md",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
                className: "footer-menu me-auto",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"].Link, {
                  href: "/",
                  children: "Homepage"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"].Link, {
                  href: "#",
                  children: "Contact Us"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"].Link, {
                  href: "#",
                  children: "Privacy Policy"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"].Link, {
                  href: "#",
                  children: "Term and Conditions"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                className: "mt60",
                children: "CrossFire Legacy is Private Server From Indonesia Maintained by The Community."
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                className: "cff-status",
                children: [" ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                  children: "Server Status"
                }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("figure", {
                  className: "cff-status-indicator mt-2",
                  children: [" ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {}), " "]
                }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("figcaption", {
                  id: "serverStatusCaption",
                  className: "serverStatusCaption mt-1",
                  children: "Offline"
                }), " "]
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "footer-line"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
            className: "footer-under",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
              children: "\xA9 2022"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
              style: {
                textAlign: "right"
              },
              children: "All rights belong to their respective owners"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
            className: "mt-4",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {})
          })]
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
              className: "mt-4 mb-4",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
                className: "footer-menu",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"].Link, {
                  href: "/",
                  children: "Homepage"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"].Link, {
                  href: "#",
                  children: "Contact Us"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"].Link, {
                  href: "#",
                  children: "Privacy Policy"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"].Link, {
                  href: "#",
                  children: "Term and Conditions"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                className: "mt60",
                children: "CrossFire Legacy is Private Server From Indonesia Maintained by The Community."
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                className: "cff-status",
                children: [" ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                  children: "Server Status"
                }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("figure", {
                  className: "cff-status-indicator mt-2",
                  children: [" ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {}), " "]
                }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("figcaption", {
                  id: "serverStatusCaption",
                  className: "serverStatusCaption mt-1",
                  children: "Offline"
                }), " "]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("iframe", {
                className: "visible-lg",
                src: "https://discord.com/widget?id=924649291992150036&theme=dark",
                height: "250",
                allowtransparency: "true",
                frameBorder: "0",
                sandbox: "allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts",
                style: {
                  width: "100%"
                },
                bis_size: "{\"x\":176,\"y\":4703,\"w\":400,\"h\":250,\"abs_x\":176,\"abs_y\":4703}"
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "footer-line"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
            className: "footer-under",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
              children: "\xA9 2022"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
              style: {
                textAlign: "right"
              },
              children: "All rights belong to their respective owners"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"], {
            className: "mt-4",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {})
          })]
        })
      })
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/styled/landingpage.css":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/styled/landingpage.css ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helmet_regular_webfont_woff2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helmet-regular-webfont.woff2 */ "./resources/js/styled/helmet-regular-webfont.woff2");
/* harmony import */ var _helmet_regular_webfont_woff__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helmet-regular-webfont.woff */ "./resources/js/styled/helmet-regular-webfont.woff");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_helmet_regular_webfont_woff2__WEBPACK_IMPORTED_MODULE_2__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_helmet_regular_webfont_woff__WEBPACK_IMPORTED_MODULE_3__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: \"helmetregular\";\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\"),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\");\n    font-weight: normal;\n    font-style: normal;\n}\n/* Standart Page Backround */\n.pageBG {\n    background-color: #121212;\n    background-size: fit-content;\n    overflow: hidden;\n    max-height: 100%;\n}\n\n/* Spinner */\n.Puteran .spinner-border {\n    width: 12rem;\n    height: 12rem;\n    position: absolute;\n    top: 300px;\n    left: 664px;\n}\n\n.Puteran span {\n    color: #dd7c35;\n    font-family: \"helmetregular\";\n    font-size: 2rem;\n    position: absolute;\n    top: 505px;\n    left: 666px;\n}\n/* Navigation bar Styling */\n\n.container {\n    max-width: 1300px;\n}\n\n.navbar {\n    background: linear-gradient(\n        90deg,\n        rgba(23, 23, 23, 1) 30%,\n        rgba(221, 124, 53, 1) 200%\n    );\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    z-index: 3;\n    height: 70px;\n}\n\n.navbar-light .navbar-nav .nav-link {\n    font-family: \"helmetregular\", sans-serif;\n    font-weight: normal;\n    font-size: 19px;\n    color: #ebebeb;\n    border-bottom: 4px groove transparent;\n    border-radius: 4px;\n    letter-spacing: 0.5px;\n}\n\n.navbar-light .navbar-nav .nav-link:hover {\n    transition-duration: 2ms;\n    color: #dd7c35;\n    border-bottom: 4px groove #dd7c35;\n    border-radius: 4px;\n    filter: drop-shadow(2px 5px 30px #dd7c35);\n}\n.navbar .navbar-nav .dropdown-menu {\n    background: linear-gradient(\n        20deg,\n        rgba(23, 23, 23, 1) 10%,\n        rgba(221, 124, 53, 1) 200%\n    );\n}\n\n.btn-primary {\n    font-family: \"helmetregular\", sans-serif;\n    font-weight: 400;\n    font-size: 18px;\n    color: #ebebeb;\n    background-color: #dd7c35;\n    text-align: center;\n    border-color: #dd7c35;\n    box-shadow: none;\n    padding: 3px 30px;\n    line-height: 2;\n}\n\n.btn-primary:hover {\n    font-family: \"helmetregular\", sans-serif;\n    font-weight: 400;\n    font-size: 18px;\n    text-align: center;\n    color: #ebebeb;\n    background-color: #dd7c35;\n    border-color: #dd7c35;\n    padding: 3px 30px;\n    line-height: 2;\n    filter: drop-shadow(2px 5px 30px #dd7c35);\n    transform: scale(1.1);\n}\n\na.btn.btn-primary:active {\n    box-shadow: 3px 3px 20px #dd7c35;\n}\n\n.btn-primary:focus {\n    box-shadow: 3px 3px 20px #dd7c35;\n    background-color: #dd7c35;\n    border-color: #dd7c35;\n}\n\n.btn-outline-secondary {\n    font-family: \"helmetregular\", sans-serif;\n    font-weight: 400;\n    font-size: 18px;\n    text-align: center;\n    color: #dd7c35;\n    background-color: #212121;\n    border-color: #212121;\n    padding: 3px 25px;\n    line-height: 2;\n}\n\n.btn-outline-secondary:hover {\n    font-family: \"helmetregular\", sans-serif;\n    font-weight: 400;\n    font-size: 18px;\n    text-align: center;\n    color: #dd7c35;\n    background-color: #212121;\n    border-color: #212121;\n    padding: 3px 25px;\n    line-height: 2;\n    filter: drop-shadow(2px 5px 30px #212121);\n    transform: scale(1.1);\n}\n.btn-outline-secondary:active {\n    box-shadow: none;\n}\n.btn-outline-secondary:focus {\n    box-shadow: none;\n}\n\n/* Home1 */\n\n.Home1 {\n    margin-top: 60px;\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n    height: 600px;\n}\n\n.Home1 h1 {\n    font-family: \"helmetregular\", sans-serif;\n    font-size: 110px;\n    font-weight: bold;\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    line-height: 6rem;\n}\n\n.Home1 p {\n    font-family: \"helmetregular\", sans-serif;\n    text-shadow: 1px 1px 1px rgb(14, 13, 13);\n    margin-top: 20px;\n    font-size: 25px;\n    font-weight: 400;\n    text-align: center;\n    color: rgb(236, 232, 232);\n    width: 100%;\n}\n\n.btn-outline-light {\n    background-color: white;\n    font-weight: 600;\n    color: #dd7c35;\n    width: 40%;\n    margin-top: 30px;\n    font-size: 40px;\n    font-style: italic;\n    transition-duration: 1ms;\n}\n\n.btn-outline-light:hover {\n    background-color: #dd7c35;\n    font-weight: 600;\n    color: #eaeaea;\n    border-color: #dd7c35;\n    width: 40%;\n    margin-top: 30px;\n    font-size: 40px;\n    font-style: italic;\n    filter: drop-shadow(2px 2px 10px #dd7c35);\n}\n\n/* Home2 */\n\n.Home2 {\n    height: 840px;\n}\n\n.Home2 h1 {\n    font-family: \"helmetregular\", sans-serif;\n    font-size: 90px;\n    font-weight: bold;\n    text-align: center;\n}\n\n.Home2 p {\n    font-family: \"helmetregular\", sans-serif;\n    text-shadow: 1px 1px 1px rgb(14, 13, 13);\n    margin-top: 5px;\n    font-size: 25px;\n    font-weight: 400;\n    text-align: center;\n    color: rgb(236, 232, 232);\n    width: 100%;\n}\n\n.Home2 section img:first-child {\n    position: relative;\n    border-radius: 10px;\n    width: 80%;\n}\n.Home2 section img:active {\n    filter: drop-shadow(2px 2px 10px #dd7c35);\n    transform: scale(1.05);\n}\n\n.Home2 section img:last-child {\n    border-radius: 10px;\n    position: relative;\n    top: -400px;\n    left: 270px;\n    width: 80%;\n}\n.Home2 section img:last-child:active {\n    filter: drop-shadow(2px 2px 10px #dd7c35);\n    transform: scale(1.05);\n}\n\n.gambar {\n    z-index: 1;\n}\n/* Home3 */\n\n.Home3 {\n    height: 580px;\n}\n\n.Home3 h1 {\n    font-family: \"helmetregular\", sans-serif;\n    font-size: 90px;\n    font-weight: bold;\n    text-align: center;\n}\n\n.Home3 p {\n    font-family: \"helmetregular\", sans-serif;\n    text-shadow: 1px 1px 1px rgb(14, 13, 13);\n    margin-top: 5px;\n    font-size: 25px;\n    font-weight: 400;\n    text-align: center;\n    color: rgb(236, 232, 232);\n    width: 100%;\n}\n\n.carousel-item {\n    -webkit-backface-visibility: visible;\n            backface-visibility: visible;\n    position: relative;\n    display: none;\n    float: left;\n    width: 100%;\n    margin-right: -100%;\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden;\n    transition: transform 0.6s ease-in-out;\n}\n\n.carousel-item.active {\n    -webkit-backface-visibility: visible;\n            backface-visibility: visible;\n    display: flex;\n    justify-content: space-around;\n}\n\n.Home3 .card {\n    border: none;\n    width: 40%;\n    background: linear-gradient(\n        313deg,\n        rgba(23, 23, 23, 1) 30%,\n        rgba(221, 124, 53, 1) 200%\n    );\n    height: -webkit-max-content;\n    height: -moz-max-content;\n    height: max-content;\n    border-radius: 20px;\n}\n\n.Home3 .card img {\n    border-top-left-radius: 20px;\n    border-top-right-radius: 20px;\n}\n\n.Home3 .card section {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    margin: 15px 15px;\n}\n\n.Home3 .card section h4 {\n    font-size: 25px;\n    color: #dd7c35;\n}\n\n.carousel-indicators {\n    position: relative;\n    bottom: -340px;\n}\n\n.carousel-control-next,\n.carousel-control-prev {\n    display: none;\n}\n/* Home4 */\n\n.Home4 {\n    margin-bottom: 30px;\n}\n\n.Home4 h1 {\n    font-family: \"helmetregular\", sans-serif;\n    font-size: 90px;\n    font-weight: bold;\n    text-align: center;\n}\n\n.accordion-item {\n    background: transparent;\n}\n\n.accordion-button {\n    background: linear-gradient(\n        90deg,\n        rgba(23, 23, 23, 1) 30%,\n        rgba(221, 124, 53, 1) 200%\n    );\n    color: #eaeaea;\n    font-family: \"helmetregular\", sans-serif;\n    font-size: 20px;\n    font-weight: 400;\n}\n\n.accordion-body {\n    background: linear-gradient(\n        90deg,\n        rgba(23, 23, 23, 1) 30%,\n        rgba(221, 124, 53, 1) 200%\n    );\n    color: #eaeaea;\n    font-family: \"helmetregular\", sans-serif;\n    font-size: 18px;\n}\n\n/* NewsPage */\n/* News1 */\n\n.News1 h1 {\n    font-family: \"helmetregular\", sans-serif;\n    font-size: 90px;\n    font-weight: bold;\n    text-align: center;\n    color: #dd7c35;\n}\n\n/* News2 */\n\n.News2 .card {\n    display: flex;\n    flex-direction: row;\n    gap: 20px;\n    background-color: #eaeaea;\n    border: none;\n    margin: 15px 15px;\n    border-radius: 10px;\n    box-shadow: 3px 3px 20px #212121;\n}\n.News2 .card img {\n    width: 20%;\n    margin: 0;\n    border-bottom-left-radius: 10px;\n    border-top-left-radius: 10px;\n}\n\n.News2 .card section h2 {\n    font-family: \"helmetregular\", sans-serif;\n    font-size: 30px;\n    font-weight: bold;\n    text-align: left;\n    color: #dd7c35;\n    margin-top: 10px;\n}\n.News2 .card section h2 a {\n    text-decoration: none;\n    color: #dd7c35;\n}\n\n.News2 .card section p {\n    font-family: \"helmetregular\", sans-serif;\n    font-size: 16px;\n    text-align: left;\n    color: #c87941;\n    text-overflow: ellipsis;\n    word-wrap: break-word;\n    overflow: hidden;\n    max-height: 2em;\n    line-height: 1.8em;\n    width: 80%;\n}\n\n.News2 .card section span {\n    font-family: \"helmetregular\", sans-serif;\n    text-align: left;\n    color: #665f59;\n}\n\n.News2 .pagination {\n    margin: 15px 15px 15px 15px\n}\n\n.News2 ul li.page-item a {\n    font-family: \"helmetregular\", sans-serif;\n    color: #121212;\n    font-size: 1em;\n}\n.News2 ul li.page-item.active a {\n    font-family: \"helmetregular\", sans-serif;\n    background-color: #dd7c35;\n    color: #121212;\n    border: none;\n}\n\n.page-item:first-child .page-link {\n    font-family: \"helmetregular\", sans-serif;\n    background-color: #dd7c35;\n    border: none;\n    color: #ebebeb;\n}\n\n.page-item:last-child .page-link {\n    font-family: \"helmetregular\", sans-serif;\n    background-color: #dd7c35;\n    border: none;\n    color: #ebebeb;\n}\n\n/* NewsIndex */\n\n.NewsIndex .card {\n    display: flex;\n    flex-direction: column;\n    margin: 15px 15px;\n}\n\n.NewsIndex .card h1 {\n    font-family: \"helmetregular\", sans-serif;\n    font-size: 40px;\n    font-weight: bold;\n    text-align: left;\n    color: #dd7c35;\n    margin-left: 20px;\n    margin-top: 10px;\n}\n\n.NewsIndex .card img {\n    width: 50%;\n    height: 20%;\n    align-items: center;\n    margin: 15px 10px 20px 20px;\n    position: relative;\n    left: 25%;\n    border-radius: 10px;\n}\n\n.NewsIndex .card section article {\n    font-family: \"helmetregular\", sans-serif;\n    font-size: 20px;\n    text-align: left;\n    color: #c87941;\n    margin-left: 20px;\n    margin-right: 20px;\n}\n\n.NewsIndex .card section span {\n    font-family: \"helmetregular\", sans-serif;\n    font-size: 18px;\n    text-align: left;\n    margin-left: 20px;\n    width: 100%;\n    margin-bottom: 10px;\n}\n\n/* Download Page */\n/* Download1 */\n\n.Download1 h1 {\n    font-family: \"helmetregular\", sans-serif;\n    font-size: 90px;\n    font-weight: bold;\n    text-align: center;\n    color: #dd7c35;\n}\n\n/* Download2 */\n\n.Download2 {\n    margin-top: 20px;\n    margin-bottom: 20px;\n}\n\n.Download2 nav .nav-tabs {\n    border: none;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    margin-bottom: 5px;\n}\n\n.Download2 nav .nav-tabs button {\n    padding: 1% 6%;\n    font-family: \"helmetregular\", sans-serif;\n    font-weight: bold;\n    background-color: #dd7c35;\n    border: none;\n    color: #eaeaea;\n    border-radius: 20px;\n}\n.Download2 nav .nav-tabs button.active {\n    color: #dd7c35;\n    border: none;\n    border-radius: 20px;\n}\n\n/* Download2Element1 */\n\n.Download2Element1 .card {\n    display: flex;\n    flex-direction: column;\n    border-radius: 15px;\n    background: linear-gradient(\n        313deg,\n        rgba(23, 23, 23, 1) 30%,\n        rgba(221, 124, 53, 1) 200%\n    );\n    border: none;\n}\n\n.Download2Element1 .card h1 {\n    font-family: \"helmetregular\", sans-serif;\n    color: #dd7c35;\n    font-size: 1.5rem;\n    font-weight: bold;\n    text-align: center;\n    margin: 10px 10px 10px 10px;\n}\n\n.Download2Element1 .card section .col button {\n    width: 100%;\n    padding: 10px 10px;\n    text-decoration: none;\n    border-radius: 10px;\n    background: #212121;\n    border: #212121;\n    box-shadow: 3px 3px 20px #212121;\n}\n\n.Download2Element1 .card section .col button:hover {\n    background: #dd7c35;\n    border: #dd7c35;\n    color: #eaeaea;\n    box-shadow: 3px 3px 20px #dd7c35;\n    transform: scaleY(1.2);\n}\n\n.Download2Element1 .card section .col button a {\n    text-decoration: none;\n    color: white;\n    font-family: \"helmetregular\", sans-serif;\n    letter-spacing: 3px;\n    font-weight: bold;\n}\n\n.Download2Element1 .card section .col button a:hover {\n    color: #eaeaea;\n}\n\n.Download2Element1 .card section {\n    display: flex;\n    flex-direction: row;\n}\n\n.Download2Element1 .col {\n    padding: 1.5rem 2.5rem;\n}\n\n.Download2Element1 table {\n    width: 100%;\n    margin-bottom: 2rem;\n    border-bottom: 1px solid #dd7c35;\n}\n\n.Download2Element1 table th {\n    padding: 15px 0;\n    font-weight: normal;\n    font-family: \"helmetregular\", sans-serif;\n    font-size: 1.2rem;\n    text-align: left;\n    color: white;\n}\n\n.Download2Element1 table td {\n    padding: 15px 0;\n    font-weight: normal;\n    font-family: \"helmetregular\", sans-serif;\n    color: #c87941;\n    font-size: 1.2rem;\n    text-align: right;\n    letter-spacing: 3px;\n}\n\n.Download2Element1 table tr {\n    border-top: 1px solid #dd7c35;\n}\n\n.Download2Element1 tbody {\n    box-sizing: border-box;\n}\n\n/* Download2Element2 */\n\n.Download2Element2 .card {\n    display: flex;\n    flex-direction: column;\n    border-radius: 15px;\n    background: linear-gradient(\n        313deg,\n        rgba(23, 23, 23, 1) 30%,\n        rgba(221, 124, 53, 1) 200%\n    );\n    border: none;\n}\n\n.Download2Element2 .card h1 {\n    font-family: \"helmetregular\", sans-serif;\n    color: #dd7c35;\n    font-size: 1.5rem;\n    font-weight: bold;\n    text-align: center;\n    margin: 10px 10px 10px 10px;\n}\n\n.Download2Element2 .card section .col button {\n    width: 100%;\n    padding: 10px 10px;\n    text-decoration: none;\n    border-radius: 10px;\n    background: #212121;\n    border: #212121;\n    box-shadow: 3px 3px 20px #212121;\n}\n\n.Download2Element2 .card section .col button:hover {\n    background: #dd7c35;\n    border: #dd7c35;\n    color: #eaeaea;\n    box-shadow: 3px 3px 20px #dd7c35;\n    transform: scaleY(1.2);\n}\n\n.Download2Element2 .card section .col button a {\n    text-decoration: none;\n    color: white;\n    font-family: \"helmetregular\", sans-serif;\n    letter-spacing: 3px;\n    font-weight: bold;\n}\n\n.Download2Element2 .card section .col button a:hover {\n    color: #eaeaea;\n}\n\n.Download2Element2 .card section {\n    display: flex;\n    flex-direction: row;\n}\n\n.Download2Element2 .col {\n    padding: 1.5rem 2.5rem;\n}\n\n.Download2Element2 table {\n    width: 100%;\n    margin-bottom: 2rem;\n    border-bottom: 1px solid #dd7c35;\n}\n\n.Download2Element2 table th {\n    padding: 15px 0;\n    font-weight: normal;\n    font-family: \"helmetregular\", sans-serif;\n    font-size: 1.2rem;\n    text-align: left;\n    color: white;\n}\n\n.Download2Element2 table td {\n    padding: 15px 0;\n    font-weight: normal;\n    font-family: \"helmetregular\", sans-serif;\n    color: #c87941;\n    font-size: 1.2rem;\n    text-align: right;\n    letter-spacing: 3px;\n}\n\n.Download2Element2 table tr {\n    border-top: 1px solid #dd7c35;\n}\n\n.Download2Element2 tbody {\n    box-sizing: border-box;\n}\n\n/* Download2Element3 */\n\n.Download2Element3 .card h1 {\n    font-family: \"helmetregular\", sans-serif;\n    color: #dd7c35;\n    font-size: 1.5rem;\n    font-weight: bold;\n    text-align: center;\n    margin: 10px 10px 10px 10px;\n}\n\n.Download2Element3 .nav-pills {\n    font-family: \"helmetregular\", sans-serif;\n    font-weight: bold;\n    background-color: #dd7c35;\n    color: #eaeaea;\n}\n\n.Download2Element3 .nav-pills .nav-link {\n    padding: 16% 26%;\n    font-family: \"helmetregular\", sans-serif;\n    font-weight: bold;\n    font-size: 20px;\n    border-radius: 0px;\n    background-color: #dd7c35;\n    color: #eaeaea;\n    border: 2px solid #dd7c35;\n}\n\n.Download2Element3 .nav-pills .nav-link.active {\n    background-color: #eaeaea;\n    border: 2px solid #eaeaea;\n    color: #dd7c35;\n}\n\n.Download2Element3 .card {\n    display: flex;\n    flex-direction: column;\n    border-radius: 15px;\n    background: linear-gradient(\n        313deg,\n        rgba(23, 23, 23, 1) 30%,\n        rgba(221, 124, 53, 1) 200%\n    );\n    border: none;\n}\n\n.Download2Element3 .card .tab-pane {\n    margin: 10px 10px;\n}\n\n.Download2Element3 .card .tab-pane ul li:first-child {\n    font-family: \"helmetregular\";\n    color: #dd7c35;\n    font-size: 25px;\n    font-weight: bold;\n    text-align: left;\n    list-style-type: none;\n}\n\n.Download2Element3 .card .tab-pane ul li {\n    font-family: \"helmetregular\";\n    color: #dd7c35;\n    font-size: 20px;\n    font-weight: normal;\n    text-align: left;\n    list-style-type: none;\n}\n\n/* Register1 */\n\n.Register1 .card {\n    margin: 30px auto;\n    padding: 20px 30px;\n    width: 60%;\n    font-family: 'helmetregular', sans-serif;\n    background: linear-gradient(\n        90deg,\n        rgba(23, 23, 23, 1) 30%,\n        rgba(221, 124, 53, 1) 200%\n    );\n    border: none;\n}\n\n.Register1 .card h1 {\n    font-size: 3rem;\n    color: #d37c35;\n    font-weight: bold;\n    letter-spacing: 1px;\n}\n\n.Register1 .card button {\n    margin: 3px;\n}\n\n.Register1 .card .form-control {\n    height: 3rem;\n    background: #eaeaea;\n}\n.Register1 .card .form-floating span{\n    margin-left: 3px;\n    margin-top: 2px;\n    color: #e21313;\n}\n\n\n.Register1 .card .form-floating label {\n    padding: 12px .75rem;\n}\n\n/* Footer Cus */\n\n.footerBG {\n    background: linear-gradient(\n        90deg,\n        rgba(23, 23, 23, 1) 30%,\n        rgba(221, 124, 53, 1) 200%\n    );\n    width: 100%;\n    position: static;\n    bottom: 0;\n}\n\n.footer-menu .nav-link {\n    font-family: \"helmetregular\", sans-serif;\n    font-weight: normal;\n    font-size: 19px;\n    color: #ebebeb;\n    border-bottom: 4px groove transparent;\n    border-radius: 4px;\n    letter-spacing: 0.5px;\n}\n.footer-menu .nav-link:hover {\n    transition-duration: 2ms;\n    color: #dd7c35;\n    border-bottom: 4px groove #dd7c35;\n    border-radius: 4px;\n    filter: drop-shadow(2px 5px 30px #dd7c35);\n}\n\n.mt60 {\n    margin-top: 10px;\n    font-size: 17px;\n    color: #dd7c35;\n    margin-left: 16px;\n    font-family: \"helmetregular\", sans-serif;\n    font-weight: 200;\n    width: 100%;\n}\n\n.cff-status {\n    font-family: \"helmetregular\", sans-serif;\n    font-weight: 600;\n    font-size: 20px;\n    font-style: italic;\n    color: #ebebeb;\n    margin-top: 30px;\n    display: flex;\n    margin-left: 16px;\n}\n\n.cff-status-indicator {\n    background-color: #ff0000;\n    box-shadow: 0 0 25px #ff0000;\n    width: 1.5rem;\n    height: 1.5rem;\n    border-radius: 0.9375rem;\n    margin: 0.1875rem 0.625rem 0;\n}\n\n.footer-line {\n    border-bottom: 3px solid #dd7c35;\n    border-radius: 5px;\n}\n\n.footer-under {\n    margin-top: 15px;\n}\n\n.footer-under .col {\n    color: #eaeaea;\n}\n\n/* Dashboard Page */\n\n.user-nav {\n    box-shadow: 2px 2px 15px 0.4px rgb(0, 0, 0);\n}\n.user-nav h3 {\n    margin-top: 10px;\n    font-family: \"helmetregular\", sans-serif;\n    color: #dd7c35;\n    font-size: 20px;\n    text-shadow: 1px 1px 1px rgb(0, 0, 0);\n}\n.user-nav span {\n    font-family: \"helmetregular\", sans-serif;\n    color: #eaeaea;\n    font-size: 16px;\n    text-shadow: 1px 1px 1px rgb(0, 0, 0);\n}\n\n.user-nav .card-body img {\n    border-radius: 20px;\n}\n\n.user-nav .card-body {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    margin-bottom: 10px;\n}\n.user-nav .card-body button {\n    margin-top: 10px;\n    font-size: 16px;\n    margin-bottom: 10px;\n    background-color: transparent;\n    color: #dd7c35;\n    border-color: #dd7c35;\n    font-style: italic;\n    transition-duration: 1ms;\n}\n.user-nav .card-body button:hover {\n    font-size: 16px;\n    margin-bottom: 10px;\n    background-color: #dd7c35;\n    color: #dd7c35;\n    border-color: #dd7c35;\n    font-style: italic;\n    color: #eaeaea;\n    border-color: #dd7c35;\n    font-style: italic;\n}\n.user-nav .card-body button:active {\n    box-shadow: none;\n}\n.user-nav .card-body button:focus {\n    box-shadow: none;\n}\n\n.dashboard-column .btn-group {\n    margin-top: 10px;\n    display: flex;\n    flex-direction: column;\n}\n\n.dashboard-column .btn-group .btn-outline-primary {\n    font-family: \"helmetregular\", sans-serif;\n    margin-bottom: 5px;\n    font-size: 15px;\n    text-transform: uppercase;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    background-color: transparent;\n    color: #dd7c35;\n    border-color: #dd7c35;\n    transition-duration: 0.4ms;\n}\n\n.dashboard-column .btn-group .btn-outline-primary:hover {\n    font-family: \"helmetregular\", sans-serif;\n    margin-bottom: 5px;\n    font-size: 15px;\n    text-transform: uppercase;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    background-color: #dd7c35;\n    color: #eaeaea;\n    border-color: #dd7c35;\n    transition-duration: 1ms;\n}\n.dashboard-column .btn-group .btn-outline-primary:active {\n    box-shadow: none;\n}\n.dashboard-column .btn-group .btn-outline-primary:focus {\n    box-shadow: none;\n}\n\n.profile-tab {\n    box-shadow: 2px 2px 15px 0.4px rgb(0, 0, 0);\n}\n\n.profile-tab .card-body button {\n    font-family: \"helmetregular\", sans-serif;\n    margin-bottom: 5px;\n    font-size: 16px;\n    text-transform: uppercase;\n    background-color: transparent;\n    color: #dd7c35;\n    border-color: #dd7c35;\n    transition-duration: 0.4ms;\n}\n\n.profile-tab .card-body button:hover {\n    font-family: \"helmetregular\", sans-serif;\n    margin-bottom: 5px;\n    font-size: 16px;\n    text-transform: uppercase;\n    background-color: #dd7c35;\n    color: #eaeaea;\n    border-color: #dd7c35;\n    transition-duration: 1ms;\n}\n\n.dashboard-right h4 {\n    font-family: \"helmetregular\", sans-serif;\n    color: #dd7c35;\n    font-size: 20px;\n    text-transform: uppercase;\n    margin: auto;\n}\n\n.dashboard-right .informasi-dashboard p {\n    font-family: \"helmetregular\", sans-serif;\n    color: #eaeaea;\n    font-size: 16px;\n}\n.dashboard-right .informasi-dashboard p span {\n    font-style: oblique;\n}\n\n/* Karakter Page */\n\n.karakter-info tbody tr th {\n    font-family: \"helmetregular\", sans-serif;\n    color: #eaeaea;\n    font-size: 16px;\n    font-weight: 600;\n    font-style: bold;\n}\n.karakter-info tbody tr td {\n    font-family: \"helmetregular\", sans-serif;\n    color: #eaeaea;\n    font-size: 16px;\n    font-weight: 400;\n}\n\n@media screen and (max-width: 768px) {\n    .navbar {\n        height: auto;\n    }\n\n    .Home1 h1 {\n        font-size: 45px;\n        line-height: 2.5rem;\n        width: 100%;\n    }\n\n    /* Home1 */\n\n    .Home1 p {\n        margin-top: 10px;\n        font-size: 18px;\n        width: 100%;\n    }\n\n    .btn-outline-light {\n        width: 80%;\n        margin-top: 20px;\n        font-size: 20px;\n        font-style: italic;\n        transition-duration: 1ms;\n    }\n\n    .btn-outline-light:hover {\n        width: 80%;\n        margin-top: 20px;\n        font-size: 20px;\n        font-style: italic;\n        filter: drop-shadow(2px 2px 10px #dd7c35);\n    }\n\n    /* Home2 */\n\n    .Home2 {\n        height: 500px;\n    }\n    .Home2 h1 {\n        font-size: 45px;\n        line-height: 2.5rem;\n        width: 100%;\n    }\n\n    .Home2 p {\n        margin-top: 20px;\n        font-size: 18px;\n        width: 100%;\n    }\n\n    .Home2 section img {\n        width: 70%;\n        height: 35%;\n    }\n\n    .Home2 section img:first-child {\n        top: 2rem;\n        left: 1rem;\n    }\n\n    .Home2 section img:last-child {\n        top: -5rem;\n        left: 3.5rem;\n    }\n\n    /* Home3 */\n\n    .Home3 {\n        height: 600px;\n    }\n    .Home3 h1 {\n        font-size: 45px;\n        line-height: 2.5rem;\n        width: 100%;\n    }\n\n    .Home3 p {\n        margin-top: 20px;\n        font-size: 18px;\n        width: 100%;\n    }\n\n    .Home3 .carousel {\n        top: -35px;\n    }\n\n    .Home3 .card {\n        width: 90%;\n    }\n\n    /* Home4 */\n\n    .Home4 h1 {\n        margin-top: 20px;\n        font-family: \"helmetregular\", sans-serif;\n        font-size: 45px;\n        font-weight: bold;\n        text-align: center;\n    }\n\n    .accordion-button {\n        font-size: 18px;\n        font-weight: 400;\n    }\n\n    /* News1 */\n\n    .News1 h1 {\n        font-size: 50px;\n    }\n\n    /* News2 */\n\n    .News2 .card {\n        gap: 5px;\n        margin: 20px 0px;\n        box-shadow: 3px 3px 20px #212121;\n    }\n    .News2 .card img {\n        width: 35%;\n        border-bottom-left-radius: 10px;\n        border-top-left-radius: 10px;\n    }\n\n    .News2 .card section {\n        line-height: 33px;\n    }\n\n    .News2 .card section h2 {\n        font-family: \"helmetregular\", sans-serif;\n        font-size: 14px;\n        font-weight: bold;\n        text-align: left;\n        color: #dd7c35;\n        margin-top: 5px;\n    }\n    .News2 .card section h2 a {\n        text-decoration: none;\n        color: #dd7c35;\n    }\n\n    .News2 .card section p {\n        display: none;\n    }\n\n    .News2 .card section span {\n        font-family: \"helmetregular\", sans-serif;\n        text-align: left;\n        color: #665f59;\n    }\n\n    .News2 ul li.page-item a {\n        font-family: \"helmetregular\", sans-serif;\n        color: #121212;\n        font-size: rem(2);\n    }\n    .News2 ul li.page-item.active a {\n        font-family: \"helmetregular\", sans-serif;\n        background-color: #dd7c35;\n        border-color: #dd7c35;\n    }\n\n    .page-item:first-child .page-link {\n        font-family: \"helmetregular\", sans-serif;\n        background-color: #dd7c35;\n        border-color: #dd7c35;\n    }\n\n    .page-item:last-child .page-link {\n        font-family: \"helmetregular\", sans-serif;\n        background-color: #dd7c35;\n        border-color: #dd7c35;\n    }\n\n    /* NewsIndex */\n\n    .NewsIndex .card {\n        display: flex;\n        flex-direction: column;\n        margin: 15px 0px;\n    }\n\n    .NewsIndex .card h1 {\n        font-family: \"helmetregular\", sans-serif;\n        font-size: 16px;\n        font-weight: bold;\n        text-align: left;\n        color: #dd7c35;\n        margin-left: 10px;\n        margin-right: 10px;\n        margin-top: 20px;\n    }\n\n    .NewsIndex .card img {\n        width: 80%;\n        height: 20%;\n        align-items: center;\n        margin: 15px 10px;\n        position: relative;\n        left: 7%;\n        border-radius: 10px;\n    }\n\n    .NewsIndex .card section article {\n        font-family: \"helmetregular\", sans-serif;\n        font-size: 16px;\n        text-align: left;\n        color: #c87941;\n        margin-left: 15px;\n        margin-right: 15px;\n    }\n\n    .NewsIndex .card section span {\n        font-family: \"helmetregular\", sans-serif;\n        font-size: 18px;\n        text-align: left;\n        margin-left: 15px;\n        margin-right: 15px;\n    }\n\n    /* Download Page */\n    /* Download1 */\n\n    .Download1 h1 {\n        font-family: \"helmetregular\", sans-serif;\n        font-size: 45px;\n        font-weight: bold;\n        text-align: center;\n        color: #dd7c35;\n    }\n\n    /* Download2 */\n\n    .Download2 {\n        margin-top: 20px;\n        margin-bottom: 20px;\n    }\n\n    .Download2 nav .nav-tabs {\n        flex-direction: column;\n        margin-bottom: 10px;\n    }\n\n    .Download2 nav .nav-tabs button {\n        margin-bottom: 5px;\n        border-radius: 15px;\n    }\n\n    .Download2 nav .nav-tabs button:hover {\n        margin-bottom: 5px;\n        border-radius: 15px;\n    }\n\n    /* Download2Element1 */\n\n    .Download2Element1 .card h1 {\n        font-family: \"helmetregular\", sans-serif;\n        color: #dd7c35;\n        font-size: 1.5rem;\n        font-weight: bold;\n        text-align: center;\n        margin: 10px 10px 10px 10px;\n    }\n\n\n    .Download2Element1 .card section {\n        flex-direction: column;\n    }\n\n\n    /* Download2Element2 */\n\n    .Download2Element2 .card h1 {\n        font-size: 1.5rem;\n        margin-right: 15px;\n        margin-left: 15px;\n    }\n\n    .Download2Element2 .card section {\n        display: flex;\n        flex-direction: column;\n    }\n\n    .nav {\n        display: flex;\n        flex-direction: column;\n    }\n\n    .mt60 {\n        margin-top: 0;\n    }\n\n    .cff-status {\n        margin-top: 10px;\n        margin-bottom: 20px;\n    }\n\n    .download-header h2 {\n        width: 100%;\n        font-size: 16px;\n        letter-spacing: 0;\n    }\n\n    .download-header .btn-primary {\n        width: 100%;\n        padding: 0px 0px;\n        font-size: 20px;\n        border: none;\n        transition-duration: 1ms;\n        line-height: 60px;\n        margin-top: 10px;\n    }\n\n    .download-header .btn-primary:hover {\n        width: 100%;\n        padding: 0px 0px;\n        font-size: 20px;\n        color: black;\n        line-height: 60px;\n        margin-top: 10px;\n    }\n    .download-footer {\n        display: flex;\n        flex-direction: column;\n    }\n\n    .download-footer p {\n        margin-left: 0;\n        font-size: 15px;\n        margin-top: 0;\n        margin-bottom: 0;\n        font-weight: 0;\n        width: 100%;\n    }\n\n    .Spec-Section {\n        display: flex;\n        flex-direction: column;\n    }\n\n    .Spec-Section .col {\n        margin-bottom: 10px;\n    }\n\n    .Spec-Section .card-body {\n        height: auto;\n    }\n    .Regis-Tab .card {\n        margin-left: 15px;\n        margin-right: 15px;\n        border-radius: 10px;\n    }\n\n    .Regis-Tab .card h1 {\n        font-size: 35px;\n    }\n    .Login-Tab .card {\n        margin-left: 15px;\n        margin-right: 15px;\n        border-radius: 10px;\n    }\n\n    .Login-Tab .card h1 {\n        font-size: 35px;\n    }\n\n    .dashboard-column {\n        width: 100%;\n    }\n\n    .dashboard-right .informasi-dashboard p {\n        width: 100%;\n    }\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/dom-helpers/esm/camelize.js":
/*!**************************************************!*\
  !*** ./node_modules/dom-helpers/esm/camelize.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ camelize)
/* harmony export */ });
var rHyphen = /-(.)/g;
function camelize(string) {
  return string.replace(rHyphen, function (_, chr) {
    return chr.toUpperCase();
  });
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/querySelectorAll.js":
/*!**********************************************************!*\
  !*** ./node_modules/dom-helpers/esm/querySelectorAll.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ qsa)
/* harmony export */ });
var toArray = Function.prototype.bind.call(Function.prototype.call, [].slice);
/**
 * Runs `querySelectorAll` on a given element.
 * 
 * @param element the element
 * @param selector the selector
 */

function qsa(element, selector) {
  return toArray(element.querySelectorAll(selector));
}

/***/ }),

/***/ "./resources/js/styled/helmet-regular-webfont.woff":
/*!*********************************************************!*\
  !*** ./resources/js/styled/helmet-regular-webfont.woff ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/helmet-regular-webfont.woff?fd568705d0cd4494870e790ffa75b881");

/***/ }),

/***/ "./resources/js/styled/helmet-regular-webfont.woff2":
/*!**********************************************************!*\
  !*** ./resources/js/styled/helmet-regular-webfont.woff2 ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/helmet-regular-webfont.woff2?c99cd98215b835635a31c0f22b12c256");

/***/ }),

/***/ "./node_modules/invariant/browser.js":
/*!*******************************************!*\
  !*** ./node_modules/invariant/browser.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (true) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),

/***/ "./node_modules/prop-types-extra/lib/all.js":
/*!**************************************************!*\
  !*** ./node_modules/prop-types-extra/lib/all.js ***!
  \**************************************************/
/***/ ((module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = all;

var _createChainableTypeChecker = __webpack_require__(/*! ./utils/createChainableTypeChecker */ "./node_modules/prop-types-extra/lib/utils/createChainableTypeChecker.js");

var _createChainableTypeChecker2 = _interopRequireDefault(_createChainableTypeChecker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function all() {
  for (var _len = arguments.length, validators = Array(_len), _key = 0; _key < _len; _key++) {
    validators[_key] = arguments[_key];
  }

  function allPropTypes() {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    var error = null;

    validators.forEach(function (validator) {
      if (error != null) {
        return;
      }

      var result = validator.apply(undefined, args);
      if (result != null) {
        error = result;
      }
    });

    return error;
  }

  return (0, _createChainableTypeChecker2.default)(allPropTypes);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/prop-types-extra/lib/utils/createChainableTypeChecker.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/prop-types-extra/lib/utils/createChainableTypeChecker.js ***!
  \*******************************************************************************/
/***/ ((module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = createChainableTypeChecker;
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

// Mostly taken from ReactPropTypes.

function createChainableTypeChecker(validate) {
  function checkType(isRequired, props, propName, componentName, location, propFullName) {
    var componentNameSafe = componentName || '<<anonymous>>';
    var propFullNameSafe = propFullName || propName;

    if (props[propName] == null) {
      if (isRequired) {
        return new Error('Required ' + location + ' `' + propFullNameSafe + '` was not specified ' + ('in `' + componentNameSafe + '`.'));
      }

      return null;
    }

    for (var _len = arguments.length, args = Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
      args[_key - 6] = arguments[_key];
    }

    return validate.apply(undefined, [props, propName, componentNameSafe, location, propFullNameSafe].concat(args));
  }

  var chainedCheckType = checkType.bind(null, false);
  chainedCheckType.isRequired = checkType.bind(null, true);

  return chainedCheckType;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/CardHeaderContext.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/CardHeaderContext.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

const context = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
context.displayName = 'CardHeaderContext';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (context);

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/Col.js":
/*!*************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/Col.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "useCol": () => (/* binding */ useCol)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/esm/ThemeProvider.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




function useCol({
  as,
  bsPrefix,
  className,
  ...props
}) {
  bsPrefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_3__.useBootstrapPrefix)(bsPrefix, 'col');
  const breakpoints = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_3__.useBootstrapBreakpoints)();
  const spans = [];
  const classes = [];
  breakpoints.forEach(brkPoint => {
    const propValue = props[brkPoint];
    delete props[brkPoint];
    let span;
    let offset;
    let order;

    if (typeof propValue === 'object' && propValue != null) {
      ({
        span,
        offset,
        order
      } = propValue);
    } else {
      span = propValue;
    }

    const infix = brkPoint !== 'xs' ? `-${brkPoint}` : '';
    if (span) spans.push(span === true ? `${bsPrefix}${infix}` : `${bsPrefix}${infix}-${span}`);
    if (order != null) classes.push(`order${infix}-${order}`);
    if (offset != null) classes.push(`offset${infix}-${offset}`);
  });
  return [{ ...props,
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, ...spans, ...classes)
  }, {
    as,
    bsPrefix,
    spans
  }];
}
const Col = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
(props, ref) => {
  const [{
    className,
    ...colProps
  }, {
    as: Component = 'div',
    bsPrefix,
    spans
  }] = useCol(props);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Component, { ...colProps,
    ref: ref,
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, !spans.length && bsPrefix)
  });
});
Col.displayName = 'Col';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Col);

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/Container.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/Container.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/esm/ThemeProvider.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




const defaultProps = {
  fluid: false
};
const Container = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({
  bsPrefix,
  fluid,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'div',
  className,
  ...props
}, ref) => {
  const prefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_3__.useBootstrapPrefix)(bsPrefix, 'container');
  const suffix = typeof fluid === 'string' ? `-${fluid}` : '-fluid';
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Component, {
    ref: ref,
    ...props,
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, fluid ? `${prefix}${suffix}` : prefix)
  });
});
Container.displayName = 'Container';
Container.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Container);

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/Nav.js":
/*!*************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/Nav.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types_extra_lib_all__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types-extra/lib/all */ "./node_modules/prop-types-extra/lib/all.js");
/* harmony import */ var prop_types_extra_lib_all__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types_extra_lib_all__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var uncontrollable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uncontrollable */ "./node_modules/uncontrollable/lib/esm/index.js");
/* harmony import */ var _restart_ui_Nav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @restart/ui/Nav */ "./node_modules/@restart/ui/esm/Nav.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/esm/ThemeProvider.js");
/* harmony import */ var _NavbarContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NavbarContext */ "./node_modules/react-bootstrap/esm/NavbarContext.js");
/* harmony import */ var _CardHeaderContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CardHeaderContext */ "./node_modules/react-bootstrap/esm/CardHeaderContext.js");
/* harmony import */ var _NavItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./NavItem */ "./node_modules/react-bootstrap/esm/NavItem.js");
/* harmony import */ var _NavLink__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./NavLink */ "./node_modules/react-bootstrap/esm/NavLink.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");












const defaultProps = {
  justify: false,
  fill: false
};
const Nav = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef((uncontrolledProps, ref) => {
  const {
    as = 'div',
    bsPrefix: initialBsPrefix,
    variant,
    fill,
    justify,
    navbar,
    navbarScroll,
    className,
    activeKey,
    ...props
  } = (0,uncontrollable__WEBPACK_IMPORTED_MODULE_3__.useUncontrolled)(uncontrolledProps, {
    activeKey: 'onSelect'
  });
  const bsPrefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__.useBootstrapPrefix)(initialBsPrefix, 'nav');
  let navbarBsPrefix;
  let cardHeaderBsPrefix;
  let isNavbar = false;
  const navbarContext = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_NavbarContext__WEBPACK_IMPORTED_MODULE_6__["default"]);
  const cardHeaderContext = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_CardHeaderContext__WEBPACK_IMPORTED_MODULE_7__["default"]);

  if (navbarContext) {
    navbarBsPrefix = navbarContext.bsPrefix;
    isNavbar = navbar == null ? true : navbar;
  } else if (cardHeaderContext) {
    ({
      cardHeaderBsPrefix
    } = cardHeaderContext);
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_restart_ui_Nav__WEBPACK_IMPORTED_MODULE_8__["default"], {
    as: as,
    ref: ref,
    activeKey: activeKey,
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, {
      [bsPrefix]: !isNavbar,
      [`${navbarBsPrefix}-nav`]: isNavbar,
      [`${navbarBsPrefix}-nav-scroll`]: isNavbar && navbarScroll,
      [`${cardHeaderBsPrefix}-${variant}`]: !!cardHeaderBsPrefix,
      [`${bsPrefix}-${variant}`]: !!variant,
      [`${bsPrefix}-fill`]: fill,
      [`${bsPrefix}-justified`]: justify
    }),
    ...props
  });
});
Nav.displayName = 'Nav';
Nav.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Object.assign(Nav, {
  Item: _NavItem__WEBPACK_IMPORTED_MODULE_9__["default"],
  Link: _NavLink__WEBPACK_IMPORTED_MODULE_10__["default"]
}));

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/NavItem.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/NavItem.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createWithBsPrefix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createWithBsPrefix */ "./node_modules/react-bootstrap/esm/createWithBsPrefix.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_0__["default"])('nav-item'));

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/NavLink.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/NavLink.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _restart_ui_Anchor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @restart/ui/Anchor */ "./node_modules/@restart/ui/esm/Anchor.js");
/* harmony import */ var _restart_ui_NavItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @restart/ui/NavItem */ "./node_modules/@restart/ui/esm/NavItem.js");
/* harmony import */ var _restart_ui_SelectableContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @restart/ui/SelectableContext */ "./node_modules/@restart/ui/esm/SelectableContext.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/esm/ThemeProvider.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");







const defaultProps = {
  disabled: false
};
const NavLink = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({
  bsPrefix,
  className,
  as: Component = _restart_ui_Anchor__WEBPACK_IMPORTED_MODULE_3__["default"],
  active,
  eventKey,
  ...props
}, ref) => {
  bsPrefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__.useBootstrapPrefix)(bsPrefix, 'nav-link');
  const [navItemProps, meta] = (0,_restart_ui_NavItem__WEBPACK_IMPORTED_MODULE_5__.useNavItem)({
    key: (0,_restart_ui_SelectableContext__WEBPACK_IMPORTED_MODULE_6__.makeEventKey)(eventKey, props.href),
    active,
    ...props
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Component, { ...props,
    ...navItemProps,
    ref: ref,
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, bsPrefix, props.disabled && 'disabled', meta.isActive && 'active')
  });
});
NavLink.displayName = 'NavLink';
NavLink.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavLink);

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/NavbarContext.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/NavbarContext.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
 // TODO: check

const context = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
context.displayName = 'NavbarContext';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (context);

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/Row.js":
/*!*************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/Row.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/esm/ThemeProvider.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




const Row = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({
  bsPrefix,
  className,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'div',
  ...props
}, ref) => {
  const decoratedBsPrefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_3__.useBootstrapPrefix)(bsPrefix, 'row');
  const breakpoints = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_3__.useBootstrapBreakpoints)();
  const sizePrefix = `${decoratedBsPrefix}-cols`;
  const classes = [];
  breakpoints.forEach(brkPoint => {
    const propValue = props[brkPoint];
    delete props[brkPoint];
    let cols;

    if (propValue != null && typeof propValue === 'object') {
      ({
        cols
      } = propValue);
    } else {
      cols = propValue;
    }

    const infix = brkPoint !== 'xs' ? `-${brkPoint}` : '';
    if (cols != null) classes.push(`${sizePrefix}${infix}-${cols}`);
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Component, {
    ref: ref,
    ...props,
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, decoratedBsPrefix, ...classes)
  });
});
Row.displayName = 'Row';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Row);

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/createWithBsPrefix.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/createWithBsPrefix.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createWithBsPrefix)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dom_helpers_camelize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dom-helpers/camelize */ "./node_modules/dom-helpers/esm/camelize.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/esm/ThemeProvider.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






const pascalCase = str => str[0].toUpperCase() + (0,dom_helpers_camelize__WEBPACK_IMPORTED_MODULE_1__["default"])(str).slice(1);

// TODO: emstricten & fix the typing here! `createWithBsPrefix<TElementType>...`
function createWithBsPrefix(prefix, {
  displayName = pascalCase(prefix),
  Component,
  defaultProps
} = {}) {
  const BsComponent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(({
    className,
    bsPrefix,
    as: Tag = Component || 'div',
    ...props
  }, ref) => {
    const resolvedPrefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__.useBootstrapPrefix)(bsPrefix, prefix);
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Tag, {
      ref: ref,
      className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, resolvedPrefix),
      ...props
    });
  });
  BsComponent.defaultProps = defaultProps;
  BsComponent.displayName = displayName;
  return BsComponent;
}

/***/ }),

/***/ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "polyfill": () => (/* binding */ polyfill)
/* harmony export */ });
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

function componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  // Use the setState() updater to ensure state isn't stale in certain edge cases.
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== undefined ? state : null;
  }
  // Binding "this" is important for shallow renderer support.
  this.setState(updater.bind(this));
}

function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      prevProps,
      prevState
    );
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}

// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

function polyfill(Component) {
  var prototype = Component.prototype;

  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  }

  if (
    typeof Component.getDerivedStateFromProps !== 'function' &&
    typeof prototype.getSnapshotBeforeUpdate !== 'function'
  ) {
    return Component;
  }

  // If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Error if any of these lifecycles are present,
  // Because they would work differently between older and newer (16.3+) versions of React.
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === 'function') {
    foundWillMountName = 'componentWillMount';
  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
    foundWillMountName = 'UNSAFE_componentWillMount';
  }
  if (typeof prototype.componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'componentWillReceiveProps';
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
  }
  if (typeof prototype.componentWillUpdate === 'function') {
    foundWillUpdateName = 'componentWillUpdate';
  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
  }
  if (
    foundWillMountName !== null ||
    foundWillReceivePropsName !== null ||
    foundWillUpdateName !== null
  ) {
    var componentName = Component.displayName || Component.name;
    var newApiName =
      typeof Component.getDerivedStateFromProps === 'function'
        ? 'getDerivedStateFromProps()'
        : 'getSnapshotBeforeUpdate()';

    throw Error(
      'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
        componentName +
        ' uses ' +
        newApiName +
        ' but also contains the following legacy lifecycles:' +
        (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
        (foundWillReceivePropsName !== null
          ? '\n  ' + foundWillReceivePropsName
          : '') +
        (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
        '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
        'https://fb.me/react-async-component-lifecycle-hooks'
    );
  }

  // React <= 16.2 does not support static getDerivedStateFromProps.
  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
  // Newer versions of React will ignore these lifecycles if gDSFP exists.
  if (typeof Component.getDerivedStateFromProps === 'function') {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }

  // React <= 16.2 does not support getSnapshotBeforeUpdate.
  // As a workaround, use cWU to invoke the new lifecycle.
  // Newer versions of React will ignore that lifecycle if gSBU exists.
  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
    if (typeof prototype.componentDidUpdate !== 'function') {
      throw new Error(
        'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
      );
    }

    prototype.componentWillUpdate = componentWillUpdate;

    var componentDidUpdate = prototype.componentDidUpdate;

    prototype.componentDidUpdate = function componentDidUpdatePolyfill(
      prevProps,
      prevState,
      maybeSnapshot
    ) {
      // 16.3+ will not execute our will-update method;
      // It will pass a snapshot value to did-update though.
      // Older versions will require our polyfilled will-update value.
      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
      // Because for <= 15.x versions this might be a "prevContext" object.
      // We also can't just check "__reactInternalSnapshot",
      // Because get-snapshot might return a falsy value.
      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
      var snapshot = this.__reactInternalSnapshotFlag
        ? this.__reactInternalSnapshot
        : maybeSnapshot;

      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }

  return Component;
}




/***/ }),

/***/ "./resources/js/styled/landingpage.css":
/*!*********************************************!*\
  !*** ./resources/js/styled/landingpage.css ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_landingpage_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./landingpage.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/styled/landingpage.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_landingpage_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_landingpage_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/uncontrollable/lib/esm/hook.js":
/*!*****************************************************!*\
  !*** ./node_modules/uncontrollable/lib/esm/hook.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useUncontrolled),
/* harmony export */   "useUncontrolledProp": () => (/* binding */ useUncontrolledProp)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./node_modules/uncontrollable/lib/esm/utils.js");



function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




function useUncontrolledProp(propValue, defaultValue, handler) {
  var wasPropRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(propValue !== undefined);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(defaultValue),
      stateValue = _useState[0],
      setState = _useState[1];

  var isProp = propValue !== undefined;
  var wasProp = wasPropRef.current;
  wasPropRef.current = isProp;
  /**
   * If a prop switches from controlled to Uncontrolled
   * reset its value to the defaultValue
   */

  if (!isProp && wasProp && stateValue !== defaultValue) {
    setState(defaultValue);
  }

  return [isProp ? propValue : stateValue, (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function (value) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (handler) handler.apply(void 0, [value].concat(args));
    setState(value);
  }, [handler])];
}


function useUncontrolled(props, config) {
  return Object.keys(config).reduce(function (result, fieldName) {
    var _extends2;

    var _ref = result,
        defaultValue = _ref[_utils__WEBPACK_IMPORTED_MODULE_3__.defaultKey(fieldName)],
        propsValue = _ref[fieldName],
        rest = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, [_utils__WEBPACK_IMPORTED_MODULE_3__.defaultKey(fieldName), fieldName].map(_toPropertyKey));

    var handlerName = config[fieldName];

    var _useUncontrolledProp = useUncontrolledProp(propsValue, defaultValue, props[handlerName]),
        value = _useUncontrolledProp[0],
        handler = _useUncontrolledProp[1];

    return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, rest, (_extends2 = {}, _extends2[fieldName] = value, _extends2[handlerName] = handler, _extends2));
  }, props);
}

/***/ }),

/***/ "./node_modules/uncontrollable/lib/esm/index.js":
/*!******************************************************!*\
  !*** ./node_modules/uncontrollable/lib/esm/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "uncontrollable": () => (/* reexport safe */ _uncontrollable__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "useUncontrolled": () => (/* reexport safe */ _hook__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "useUncontrolledProp": () => (/* reexport safe */ _hook__WEBPACK_IMPORTED_MODULE_0__.useUncontrolledProp)
/* harmony export */ });
/* harmony import */ var _hook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hook */ "./node_modules/uncontrollable/lib/esm/hook.js");
/* harmony import */ var _uncontrollable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uncontrollable */ "./node_modules/uncontrollable/lib/esm/uncontrollable.js");



/***/ }),

/***/ "./node_modules/uncontrollable/lib/esm/uncontrollable.js":
/*!***************************************************************!*\
  !*** ./node_modules/uncontrollable/lib/esm/uncontrollable.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ uncontrollable)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ "./node_modules/uncontrollable/lib/esm/utils.js");



var _jsxFileName = "/Users/jquense/src/uncontrollable/src/uncontrollable.js";




function uncontrollable(Component, controlledValues, methods) {
  if (methods === void 0) {
    methods = [];
  }

  var displayName = Component.displayName || Component.name || 'Component';
  var canAcceptRef = _utils__WEBPACK_IMPORTED_MODULE_6__.canAcceptRef(Component);
  var controlledProps = Object.keys(controlledValues);
  var PROPS_TO_OMIT = controlledProps.map(_utils__WEBPACK_IMPORTED_MODULE_6__.defaultKey);
  !(canAcceptRef || !methods.length) ?  true ? invariant__WEBPACK_IMPORTED_MODULE_5___default()(false, '[uncontrollable] stateless function components cannot pass through methods ' + 'because they have no associated instances. Check component: ' + displayName + ', ' + 'attempting to pass through methods: ' + methods.join(', ')) : 0 : void 0;

  var UncontrolledComponent =
  /*#__PURE__*/
  function (_React$Component) {
    (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(UncontrolledComponent, _React$Component);

    function UncontrolledComponent() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
      _this.handlers = Object.create(null);
      controlledProps.forEach(function (propName) {
        var handlerName = controlledValues[propName];

        var handleChange = function handleChange(value) {
          if (_this.props[handlerName]) {
            var _this$props;

            _this._notifying = true;

            for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              args[_key2 - 1] = arguments[_key2];
            }

            (_this$props = _this.props)[handlerName].apply(_this$props, [value].concat(args));

            _this._notifying = false;
          }

          if (!_this.unmounted) _this.setState(function (_ref) {
            var _extends2;

            var values = _ref.values;
            return {
              values: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])(Object.create(null), values, (_extends2 = {}, _extends2[propName] = value, _extends2))
            };
          });
        };

        _this.handlers[handlerName] = handleChange;
      });
      if (methods.length) _this.attachRef = function (ref) {
        _this.inner = ref;
      };
      var values = Object.create(null);
      controlledProps.forEach(function (key) {
        values[key] = _this.props[_utils__WEBPACK_IMPORTED_MODULE_6__.defaultKey(key)];
      });
      _this.state = {
        values: values,
        prevProps: {}
      };
      return _this;
    }

    var _proto = UncontrolledComponent.prototype;

    _proto.shouldComponentUpdate = function shouldComponentUpdate() {
      //let setState trigger the update
      return !this._notifying;
    };

    UncontrolledComponent.getDerivedStateFromProps = function getDerivedStateFromProps(props, _ref2) {
      var values = _ref2.values,
          prevProps = _ref2.prevProps;
      var nextState = {
        values: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])(Object.create(null), values),
        prevProps: {}
      };
      controlledProps.forEach(function (key) {
        /**
         * If a prop switches from controlled to Uncontrolled
         * reset its value to the defaultValue
         */
        nextState.prevProps[key] = props[key];

        if (!_utils__WEBPACK_IMPORTED_MODULE_6__.isProp(props, key) && _utils__WEBPACK_IMPORTED_MODULE_6__.isProp(prevProps, key)) {
          nextState.values[key] = props[_utils__WEBPACK_IMPORTED_MODULE_6__.defaultKey(key)];
        }
      });
      return nextState;
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      this.unmounted = true;
    };

    _proto.render = function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          innerRef = _this$props2.innerRef,
          props = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$props2, ["innerRef"]);

      PROPS_TO_OMIT.forEach(function (prop) {
        delete props[prop];
      });
      var newProps = {};
      controlledProps.forEach(function (propName) {
        var propValue = _this2.props[propName];
        newProps[propName] = propValue !== undefined ? propValue : _this2.state.values[propName];
      });
      return react__WEBPACK_IMPORTED_MODULE_3__.createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, newProps, this.handlers, {
        ref: innerRef || this.attachRef
      }));
    };

    return UncontrolledComponent;
  }(react__WEBPACK_IMPORTED_MODULE_3__.Component);

  (0,react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_4__.polyfill)(UncontrolledComponent);
  UncontrolledComponent.displayName = "Uncontrolled(" + displayName + ")";
  UncontrolledComponent.propTypes = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    innerRef: function innerRef() {}
  }, _utils__WEBPACK_IMPORTED_MODULE_6__.uncontrolledPropTypes(controlledValues, displayName));
  methods.forEach(function (method) {
    UncontrolledComponent.prototype[method] = function $proxiedMethod() {
      var _this$inner;

      return (_this$inner = this.inner)[method].apply(_this$inner, arguments);
    };
  });
  var WrappedComponent = UncontrolledComponent;

  if (react__WEBPACK_IMPORTED_MODULE_3__.forwardRef) {
    WrappedComponent = react__WEBPACK_IMPORTED_MODULE_3__.forwardRef(function (props, ref) {
      return react__WEBPACK_IMPORTED_MODULE_3__.createElement(UncontrolledComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
        innerRef: ref,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }));
    });
    WrappedComponent.propTypes = UncontrolledComponent.propTypes;
  }

  WrappedComponent.ControlledComponent = Component;
  /**
   * useful when wrapping a Component and you want to control
   * everything
   */

  WrappedComponent.deferControlTo = function (newComponent, additions, nextMethods) {
    if (additions === void 0) {
      additions = {};
    }

    return uncontrollable(newComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, controlledValues, additions), nextMethods);
  };

  return WrappedComponent;
}

/***/ }),

/***/ "./node_modules/uncontrollable/lib/esm/utils.js":
/*!******************************************************!*\
  !*** ./node_modules/uncontrollable/lib/esm/utils.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "canAcceptRef": () => (/* binding */ canAcceptRef),
/* harmony export */   "defaultKey": () => (/* binding */ defaultKey),
/* harmony export */   "isProp": () => (/* binding */ isProp),
/* harmony export */   "uncontrolledPropTypes": () => (/* binding */ uncontrolledPropTypes)
/* harmony export */ });
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_0__);


var noop = function noop() {};

function readOnlyPropType(handler, name) {
  return function (props, propName) {
    if (props[propName] !== undefined) {
      if (!props[handler]) {
        return new Error("You have provided a `" + propName + "` prop to `" + name + "` " + ("without an `" + handler + "` handler prop. This will render a read-only field. ") + ("If the field should be mutable use `" + defaultKey(propName) + "`. ") + ("Otherwise, set `" + handler + "`."));
      }
    }
  };
}

function uncontrolledPropTypes(controlledValues, displayName) {
  var propTypes = {};
  Object.keys(controlledValues).forEach(function (prop) {
    // add default propTypes for folks that use runtime checks
    propTypes[defaultKey(prop)] = noop;

    if (true) {
      var handler = controlledValues[prop];
      !(typeof handler === 'string' && handler.trim().length) ?  true ? invariant__WEBPACK_IMPORTED_MODULE_0___default()(false, 'Uncontrollable - [%s]: the prop `%s` needs a valid handler key name in order to make it uncontrollable', displayName, prop) : 0 : void 0;
      propTypes[prop] = readOnlyPropType(handler, displayName);
    }
  });
  return propTypes;
}
function isProp(props, prop) {
  return props[prop] !== undefined;
}
function defaultKey(key) {
  return 'default' + key.charAt(0).toUpperCase() + key.substr(1);
}
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

function canAcceptRef(component) {
  return !!component && (typeof component !== 'function' || component.prototype && component.prototype.isReactComponent);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inheritsLoose)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _objectWithoutPropertiesLoose)
/* harmony export */ });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

/***/ })

}]);