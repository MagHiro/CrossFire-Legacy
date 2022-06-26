(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_pages_Download_js"],{

/***/ "./resources/js/components/pages/Download.js":
/*!***************************************************!*\
  !*** ./resources/js/components/pages/Download.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Container.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Card.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-parallax */ "./node_modules/react-parallax/lib/index.js");
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_parallax__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_first_paralax_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../assets/first-paralax.jpg */ "./resources/js/assets/first-paralax.jpg");
/* harmony import */ var _DownloadElement_Download1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DownloadElement/Download1 */ "./resources/js/components/pages/DownloadElement/Download1.js");
/* harmony import */ var _DownloadElement_Download2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DownloadElement/Download2 */ "./resources/js/components/pages/DownloadElement/Download2.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












function Download() {
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
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_DownloadElement_Download1__WEBPACK_IMPORTED_MODULE_3__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_DownloadElement_Download2__WEBPACK_IMPORTED_MODULE_4__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_parallax__WEBPACK_IMPORTED_MODULE_1__.Parallax, {
      blur: 4,
      bgImage: _assets_first_paralax_jpg__WEBPACK_IMPORTED_MODULE_2__["default"],
      bgImageStyle: {
        opacity: ".5"
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        children: isDesktop ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
            style: {
              height: 1100
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
              className: "mt-5 justify-content-md-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
                className: "Spec-Section",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"].Body, {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"].Title, {
                      className: "mb-3",
                      children: "PROCESSOR (CPU)"
                    }), "Minimum:", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), "AMD Athlon\u2122 64 X2 Dual Core Processor 4600+ 2.4GHz", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), "Intel\xAE Core\u21222 Duo Processor T6400 2.0GHz", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), "Recommended:", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), "AMD Ryzen\u2122 3 1200 Processor @ 3.1GHz (4 Cores), ~3.4GHz", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), "Intel\xAE Core\u2122 i5-3470 Processor @ 3.20GHz (4 Cores),~3.2GHz"]
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
                className: "Spec-Section",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"].Body, {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"].Title, {
                      className: "mb-3",
                      children: "MEMORY (RAM)"
                    }), "Minimum:", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), "4 GB", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), "Recommended:", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), "8 GB"]
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
                className: "Spec-Section",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"].Body, {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"].Title, {
                      className: "mb-3",
                      children: "Video Card"
                    }), "Minimum:", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), "NVIDIA\xAE GeForce\xAE 9500 GT", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), "AMD Radeon\u2122 HD 6450", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), "Intel\xAE HD Graphics 3000", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), "Recommended:", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), "NVIDIA\xAE GeForce\xAE GT 630", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), "AMD Radeon\u2122 HD 6570", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), "Intel\xAE HD Graphics 6000"]
                  })
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
              className: "mt-5 Row-Spec-1",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
                className: "Spec-Section",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"].Body, {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"].Title, {
                      className: "mb-3",
                      children: "STORAGE (HDD)"
                    }), "Minimum:", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), "15 GB of free space", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), "Recommended:", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), "25 GB of free space"]
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
                className: "Spec-Section",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"].Body, {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"].Title, {
                      className: "mb-3",
                      children: "OPERATING SYSTEM"
                    }), "Minimum:", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), "Windows 7 32-bit", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), "Recommended:", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), "Windows 7/8/10 64-bit"]
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
                className: "Spec-Section",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"].Body, {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"].Title, {
                      className: "mb-3",
                      children: "DIRECTX\xA9"
                    }), "Minimum:", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), "DirectX\xA9 9.0c", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), "Recommended:", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), "DirectX\xA9 9.0c or higher"]
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
                className: "Spec-Section",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"].Body, {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"].Title, {
                      className: "mb-3",
                      children: "INTERNET CONNECTION"
                    }), "Minimum:", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), "Cable/DSL", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), "Recommended:", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), "Cable / DSL or better"]
                  })
                })
              })]
            })]
          })
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
            style: {
              height: 2000
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
              className: "mt-4",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  className: "download-head",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"].Body, {
                    className: "download-header",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h2", {
                      children: "PLAY CROSSFIRE LEGACY ON WINDOWS"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Link, {
                      to: "#",
                      className: "btn btn-primary",
                      children: ["Download For Windows", " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
                        className: "ms-auto",
                        src: (__webpack_require__(/*! ./../../assets/download-icon.png */ "./resources/js/assets/download-icon.png")["default"]),
                        width: 30,
                        height: 30
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                      className: "download-footer",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                        children: "Version : v2.0."
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                        children: "Size : 11.8 GB."
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                        children: "Hash f3c7135a80ec9754986e3e55f229653184b3a82e957dd409ea36cde90290f835"
                      })]
                    })]
                  })
                })
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
              className: "mt-5 justify-content-md-center Spec-Section",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"].Body, {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"].Title, {
                      className: "mb-3",
                      children: "PROCESSOR (CPU)"
                    }), "Minimum:", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), "AMD Athlon\u2122 64 X2 Dual Core Processor 4600+ 2.4GHz", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), "Intel\xAE Core\u21222 Duo Processor T6400 2.0GHz", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), "Recommended:", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), "AMD Ryzen\u2122 3 1200 Processor @ 3.1GHz (4 Cores), ~3.4GHz", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), "Intel\xAE Core\u2122 i5-3470 Processor @ 3.20GHz (4 Cores),~3.2GHz"]
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"].Body, {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"].Title, {
                      className: "mb-3",
                      children: "MEMORY (RAM)"
                    }), "Minimum:", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), "4 GB", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), "Recommended:", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), "8 GB"]
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"].Body, {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"].Title, {
                      className: "mb-3",
                      children: "Video Card"
                    }), "Minimum:", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), "NVIDIA\xAE GeForce\xAE 9500 GT", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), "AMD Radeon\u2122 HD 6450", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), "Intel\xAE HD Graphics 3000", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), "Recommended:", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), "NVIDIA\xAE GeForce\xAE GT 630", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), "AMD Radeon\u2122 HD 6570", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), "Intel\xAE HD Graphics 6000"]
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"].Body, {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"].Title, {
                      className: "mb-3",
                      children: "STORAGE (HDD)"
                    }), "Minimum:", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), "15 GB of free space", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), "Recommended:", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), "25 GB of free space"]
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"].Body, {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"].Title, {
                      className: "mb-3",
                      children: "OPERATING SYSTEM"
                    }), "Minimum:", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), "Windows 7 32-bit", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), "Recommended:", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), "Windows 7/8/10 64-bit"]
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"].Body, {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"].Title, {
                      className: "mb-3",
                      children: "DIRECTX\xA9"
                    }), "Minimum:", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), "DirectX\xA9 9.0c", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), "Recommended:", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), "DirectX\xA9 9.0c or higher"]
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"].Body, {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"].Title, {
                      className: "mb-3",
                      children: "INTERNET CONNECTION"
                    }), "Minimum:", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), "Cable/DSL", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), "Recommended:", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), "Cable / DSL or better"]
                  })
                })
              })]
            })]
          })
        })
      })
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Download);

/***/ }),

/***/ "./resources/js/components/pages/DownloadElement/Download1.js":
/*!********************************************************************!*\
  !*** ./resources/js/components/pages/DownloadElement/Download1.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-parallax */ "./node_modules/react-parallax/lib/index.js");
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_parallax__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_news_header_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../assets/news-header.webp */ "./resources/js/assets/news-header.webp");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





function Download1() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_parallax__WEBPACK_IMPORTED_MODULE_1__.Parallax, {
    className: "Download1",
    blur: 4,
    bgImage: _assets_news_header_webp__WEBPACK_IMPORTED_MODULE_2__["default"],
    bgImageStyle: {
      opacity: ".5"
    },
    strength: 0,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h1", {
      children: "Download Page"
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Download1);

/***/ }),

/***/ "./resources/js/components/pages/DownloadElement/Download2.js":
/*!********************************************************************!*\
  !*** ./resources/js/components/pages/DownloadElement/Download2.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Container.js");
/* harmony import */ var _assets_windows_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../assets/windows-logo.png */ "./resources/js/assets/windows-logo.png");
/* harmony import */ var _assets_android_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../assets/android-logo.png */ "./resources/js/assets/android-logo.png");
/* harmony import */ var _Download2Element1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Download2Element1 */ "./resources/js/components/pages/DownloadElement/Download2Element1.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");








function Download2() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "Download2",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("nav", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        "class": "nav nav-tabs",
        id: "nav-tab",
        role: "tablist",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("button", {
          "class": "nav-link active",
          id: "nav-download-tab",
          "data-bs-toggle": "tab",
          "data-bs-target": "#nav-download",
          type: "button",
          role: "tab",
          "aria-controls": "nav-download",
          "aria-selected": "true",
          children: ["DOWNLOAD FOR WINDOWS", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
            src: _assets_windows_logo_png__WEBPACK_IMPORTED_MODULE_1__["default"],
            width: 44,
            height: 32
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("button", {
          "class": "nav-link",
          id: "nav-android-tab",
          "data-bs-toggle": "tab",
          "data-bs-target": "#nav-android",
          type: "button",
          role: "tab",
          "aria-controls": "nav-android",
          "aria-selected": "false",
          children: ["DOWNLOAD FOR ANDROID", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
            className: "mb-2",
            src: _assets_android_logo_png__WEBPACK_IMPORTED_MODULE_2__["default"],
            width: 33,
            height: 21
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
          "class": "nav-link",
          id: "nav-system-tab",
          "data-bs-toggle": "tab",
          "data-bs-target": "#nav-system",
          type: "button",
          role: "tab",
          "aria-controls": "nav-system",
          "aria-selected": "false",
          children: "SYSTEM REQUIREMENTS"
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      "class": "tab-content",
      id: "nav-tabContent",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        "class": "tab-pane fade show active",
        id: "nav-download",
        role: "tabpanel",
        "aria-labelledby": "nav-download-tab",
        tabindex: "0",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Download2Element1__WEBPACK_IMPORTED_MODULE_3__["default"], {})
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        "class": "tab-pane fade",
        id: "nav-android",
        role: "tabpanel",
        "aria-labelledby": "nav-android-tab",
        tabindex: "0",
        children: "..."
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        "class": "tab-pane fade",
        id: "nav-system",
        role: "tabpanel",
        "aria-labelledby": "nav-system-tab",
        tabindex: "0",
        children: "..."
      })]
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Download2);

/***/ }),

/***/ "./resources/js/components/pages/DownloadElement/Download2Element1.js":
/*!****************************************************************************!*\
  !*** ./resources/js/components/pages/DownloadElement/Download2Element1.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _assets_windows_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../assets/windows-logo.png */ "./resources/js/assets/windows-logo.png");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Card.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






function Download2Element1() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "Download2Element1",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h1", {
        className: "mt-4",
        children: "CROSSFIRE LEGACY ON WINDOWS"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "col",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("h1", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
              children: "FULL"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
              children: " CLIENT"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("table", {
            className: "tablespec",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("tbody", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("tr", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th", {
                  children: "UKURAN CLIENT"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
                  children: "3.4 GB"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("tr", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th", {
                  children: "UPDATE TERAKHIR"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
                  children: "2022-06-23"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("tr", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th", {
                  children: "CLIENT VERSION"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
                  children: "CFID LEGACY 001"
                })]
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
              href: "#",
              children: "DOWNLAOD NOW"
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "col",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("h1", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
              children: "PARTIAL"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
              children: " CLIENT"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("table", {
            className: "tablespec",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("tbody", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("tr", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th", {
                  children: "UKURAN CLIENT"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
                  children: "12.8 GB"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("tr", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th", {
                  children: "UPDATE TERAKHIR"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
                  children: "2022-06-23"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("tr", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th", {
                  children: "CLIENT VERSION"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
                  children: "CFID LEGACY 001"
                })]
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
              href: "#",
              children: "DOWNLAOD HERE"
            })
          })]
        })]
      })]
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Download2Element1);

/***/ }),

/***/ "./node_modules/dom-helpers/esm/camelize.js":
/*!**************************************************!*\
  !*** ./node_modules/dom-helpers/esm/camelize.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./resources/js/assets/android-logo.png":
/*!**********************************************!*\
  !*** ./resources/js/assets/android-logo.png ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/android-logo.png?1cb29804af8cd984852f070d222c94c3");

/***/ }),

/***/ "./resources/js/assets/download-icon.png":
/*!***********************************************!*\
  !*** ./resources/js/assets/download-icon.png ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/download-icon.png?c13d09f72e5ca5f75f02dcdd58769bb2");

/***/ }),

/***/ "./resources/js/assets/first-paralax.jpg":
/*!***********************************************!*\
  !*** ./resources/js/assets/first-paralax.jpg ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/first-paralax.jpg?bc605e5911a39dcc75b32f6f1fb76d48");

/***/ }),

/***/ "./resources/js/assets/news-header.webp":
/*!**********************************************!*\
  !*** ./resources/js/assets/news-header.webp ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/news-header.webp?d25b25981c2fbe03fe5bab9de93484ea");

/***/ }),

/***/ "./resources/js/assets/windows-logo.png":
/*!**********************************************!*\
  !*** ./resources/js/assets/windows-logo.png ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/windows-logo.png?05dd90bd732ae80366ce3ab60b23fb87");

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/Card.js":
/*!**************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/Card.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/esm/ThemeProvider.js");
/* harmony import */ var _createWithBsPrefix__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createWithBsPrefix */ "./node_modules/react-bootstrap/esm/createWithBsPrefix.js");
/* harmony import */ var _divWithClassName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./divWithClassName */ "./node_modules/react-bootstrap/esm/divWithClassName.js");
/* harmony import */ var _CardImg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CardImg */ "./node_modules/react-bootstrap/esm/CardImg.js");
/* harmony import */ var _CardHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CardHeader */ "./node_modules/react-bootstrap/esm/CardHeader.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");








const DivStyledAsH5 = (0,_divWithClassName__WEBPACK_IMPORTED_MODULE_3__["default"])('h5');
const DivStyledAsH6 = (0,_divWithClassName__WEBPACK_IMPORTED_MODULE_3__["default"])('h6');
const CardBody = (0,_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_4__["default"])('card-body');
const CardTitle = (0,_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_4__["default"])('card-title', {
  Component: DivStyledAsH5
});
const CardSubtitle = (0,_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_4__["default"])('card-subtitle', {
  Component: DivStyledAsH6
});
const CardLink = (0,_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_4__["default"])('card-link', {
  Component: 'a'
});
const CardText = (0,_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_4__["default"])('card-text', {
  Component: 'p'
});
const CardFooter = (0,_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_4__["default"])('card-footer');
const CardImgOverlay = (0,_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_4__["default"])('card-img-overlay');
const defaultProps = {
  body: false
};
const Card = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({
  bsPrefix,
  className,
  bg,
  text,
  border,
  body,
  children,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'div',
  ...props
}, ref) => {
  const prefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__.useBootstrapPrefix)(bsPrefix, 'card');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Component, {
    ref: ref,
    ...props,
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, prefix, bg && `bg-${bg}`, text && `text-${text}`, border && `border-${border}`),
    children: body ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CardBody, {
      children: children
    }) : children
  });
});
Card.displayName = 'Card';
Card.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Object.assign(Card, {
  Img: _CardImg__WEBPACK_IMPORTED_MODULE_6__["default"],
  Title: CardTitle,
  Subtitle: CardSubtitle,
  Body: CardBody,
  Link: CardLink,
  Text: CardText,
  Header: _CardHeader__WEBPACK_IMPORTED_MODULE_7__["default"],
  Footer: CardFooter,
  ImgOverlay: CardImgOverlay
}));

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/CardHeader.js":
/*!********************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/CardHeader.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/esm/ThemeProvider.js");
/* harmony import */ var _CardHeaderContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CardHeaderContext */ "./node_modules/react-bootstrap/esm/CardHeaderContext.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






const CardHeader = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({
  bsPrefix,
  className,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'div',
  ...props
}, ref) => {
  const prefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_3__.useBootstrapPrefix)(bsPrefix, 'card-header');
  const contextValue = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => ({
    cardHeaderBsPrefix: prefix
  }), [prefix]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_CardHeaderContext__WEBPACK_IMPORTED_MODULE_4__["default"].Provider, {
    value: contextValue,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Component, {
      ref: ref,
      ...props,
      className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, prefix)
    })
  });
});
CardHeader.displayName = 'CardHeader';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardHeader);

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/CardHeaderContext.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/CardHeaderContext.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

const context = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
context.displayName = 'CardHeaderContext';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (context);

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/CardImg.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/CardImg.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/esm/ThemeProvider.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




const CardImg = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
({
  bsPrefix,
  className,
  variant,
  as: Component = 'img',
  ...props
}, ref) => {
  const prefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_3__.useBootstrapPrefix)(bsPrefix, 'card-img');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Component, {
    ref: ref,
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(variant ? `${prefix}-${variant}` : prefix, className),
    ...props
  });
});
CardImg.displayName = 'CardImg';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardImg);

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/Col.js":
/*!*************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/Col.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

/***/ "./node_modules/react-bootstrap/esm/Row.js":
/*!*************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/Row.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

/***/ "./node_modules/react-bootstrap/esm/divWithClassName.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/divWithClassName.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (className => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((p, ref) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", { ...p,
  ref: ref,
  className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(p.className, className)
})));

/***/ }),

/***/ "./node_modules/react-parallax/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/react-parallax/lib/index.js ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function webpackUniversalModuleDefinition(e,t){ true?module.exports=t(__webpack_require__(/*! react */ "./node_modules/react/index.js")):0}("undefined"!=typeof self?self:this,(function(e){return function(e){var t={};function __nested_webpack_require_387__(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,__nested_webpack_require_387__),r.l=!0,r.exports}return __nested_webpack_require_387__.m=e,__nested_webpack_require_387__.c=t,__nested_webpack_require_387__.d=function(e,t,n){__nested_webpack_require_387__.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},__nested_webpack_require_387__.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__nested_webpack_require_387__.t=function(e,t){if(1&t&&(e=__nested_webpack_require_387__(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(__nested_webpack_require_387__.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)__nested_webpack_require_387__.d(n,r,function(t){return e[t]}.bind(null,r));return n},__nested_webpack_require_387__.n=function(e){var t=e&&e.__esModule?function getDefault(){return e.default}:function getModuleExports(){return e};return __nested_webpack_require_387__.d(t,"a",t),t},__nested_webpack_require_387__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},__nested_webpack_require_387__.p="",__nested_webpack_require_387__(__nested_webpack_require_387__.s=3)}([function(t,n){t.exports=e},function(e,t,n){"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var n,r=_getPrototypeOf(e);if(t){var o=_getPrototypeOf(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return _possibleConstructorReturn(this,n)}}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Background=t.Parallax=void 0;var o=r(n(0)),i=function(e){_inherits(Parallax,e);var t=_createSuper(Parallax);function Parallax(){return _classCallCheck(this,Parallax),t.apply(this,arguments)}return Parallax}(o.default.Component);t.Parallax=i;var a=function(e){_inherits(Background,e);var t=_createSuper(Background);function Background(){return _classCallCheck(this,Background),t.apply(this,arguments)}return Background}(o.default.Component);t.Background=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.canUseDOM=t.getNodeHeight=t.isScrolledIntoView=t.getWindowHeight=void 0,t.getWindowHeight=function(e){if(!e)return 0;var t=window,n=document,r=n.documentElement,o=n.getElementsByTagName("body")[0];return t.innerHeight||r.clientHeight||o.clientHeight},t.isScrolledIntoView=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2?arguments[2]:void 0;if(!r)return!1;var o=e.getBoundingClientRect().top-n,i=e.getBoundingClientRect().bottom+n;return o<=t.getWindowHeight(r)&&i>=0},t.getNodeHeight=function(e,n){return e?n&&"clientHeight"in n?n.clientHeight:t.getWindowHeight(e):0},t.canUseDOM=function(){return!("undefined"==typeof window||!window.document||!window.document.createElement)}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Background=t.Parallax=void 0;var o=r(n(4));t.Parallax=o.default;var i=r(n(7));t.Background=i.default},function(e,t,n){"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var n,r=_getPrototypeOf(e);if(t){var o=_getPrototypeOf(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return _possibleConstructorReturn(this,n)}}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(0)),i=n(1),a=n(5),c=n(2),u=r(n(6)),s={position:"absolute",left:"50%",WebkitTransform:"translate3d(-50%, 0, 0)",transform:"translate3d(-50%, 0, 0)",WebkitTransformStyle:"preserve-3d",WebkitBackfaceVisibility:"hidden",MozBackfaceVisibility:"hidden",MsBackfaceVisibility:"hidden"},l=function(e){!function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}(Parallax,e);var t=_createSuper(Parallax);function Parallax(e){var n;return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Parallax),(n=t.call(this,e)).onWindowResize=function(){n.parentHeight=c.getNodeHeight(n.canUseDOM,n.parent),n.updatePosition()},n.onWindowLoad=function(){n.updatePosition()},n.onScroll=function(){if(n.canUseDOM){var e=Date.now();e-n.timestamp>=10&&c.isScrolledIntoView(n.node,100,n.canUseDOM)&&(window.requestAnimationFrame(n.updatePosition),n.timestamp=e)}},n.onContentMount=function(e){n.content=e},n.updatePosition=function(){if(n.content){var e=!1;n.contentHeight=n.content.getBoundingClientRect().height,n.contentWidth=n.node.getBoundingClientRect().width,n.img&&n.img.naturalWidth/n.img.naturalHeight<n.contentWidth/n.getImageHeight()&&(e=!0);var t=a.getRelativePosition(n.node,n.canUseDOM),r=!!n.img,o=n.bg&&n.state.splitChildren.bgChildren.length>0;r&&n.setImagePosition(t,e),o&&n.setBackgroundPosition(t),r||o||n.setState({percentage:t})}},n.state={bgImage:e.bgImage,bgImageSrcSet:e.bgImageSrcSet,bgImageSizes:e.bgImageSizes,imgStyle:s,bgStyle:Object.assign(Object.assign({},s),e.bgStyle),percentage:0,splitChildren:a.getSplitChildren(e)},n.canUseDOM=c.canUseDOM(),n.node=null,n.content=null,n.bgImageLoaded=!1,n.bgImageRef=void 0,n.parent=e.parent,n.parentHeight=c.getNodeHeight(n.canUseDOM,n.parent),n.timestamp=Date.now(),n.isDynamicBlur=a.getHasDynamicBlur(e.blur),n}return function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(Parallax,[{key:"componentDidMount",value:function componentDidMount(){var e=this.props.parent,t=this.state,n=t.bgImage,r=t.bgImageSrcSet,o=t.bgImageSizes;this.parent=e||document,this.addListeners(),n?this.loadImage(n,r,o):this.updatePosition()}},{key:"componentDidUpdate",value:function componentDidUpdate(e){var t=this.props,n=t.parent,r=t.bgImage,o=t.bgImageSrcSet,i=t.bgImageSizes,a=this.state.bgImage;e.parent!==n&&(this.removeListeners(this.parent),this.parent=n,n&&this.addListeners()),this.parentHeight=c.getNodeHeight(this.canUseDOM,this.parent),a!==r&&this.loadImage(r,o,i)}},{key:"componentWillUnmount",value:function componentWillUnmount(){this.removeListeners(this.parent),this.releaseImage()}},{key:"setBackgroundPosition",value:function setBackgroundPosition(e){var t=this.props,n=t.disabled,r=t.strength,o=Object.assign({},this.state.bgStyle);if(!n){var i="translate3d(-50%, ".concat((r<0?r:0)-r*e,"px, 0)");o.WebkitTransform=i,o.transform=i}this.setState({bgStyle:o,percentage:e})}},{key:"setImagePosition",value:function setImagePosition(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.props,r=n.disabled,o=n.strength,i=n.blur,c=t?"auto":"".concat(this.getImageHeight(),"px"),u=t?"".concat(this.contentWidth,"px"):"auto",s=Object.assign(Object.assign({},this.state.imgStyle),{height:c,width:u});if(!r){var l=o<0,f=(l?o:0)-o*e,p="translate3d(-50%, ".concat(f,"px, 0)"),d="none";i&&(d="blur(".concat(a.getBlurValue(this.isDynamicBlur,i,e),"px)")),s.WebkitTransform=p,s.transform=p,s.WebkitFilter=d,s.filter=d}this.setState({imgStyle:s,percentage:e})}},{key:"getImageHeight",value:function getImageHeight(){var e=this.props.strength,t=(e<0?2.5:1)*Math.abs(e);return Math.floor(this.contentHeight+t)}},{key:"loadImage",value:function loadImage(e,t,n){var r=this;this.releaseImage(),this.bgImageRef=new Image,this.bgImageRef.onload=function(o){r.setState({bgImage:e,bgImageSrcSet:t,bgImageSizes:n},(function(){return r.updatePosition()})),r.props.onLoad&&r.props.onLoad(o)},this.bgImageRef.onerror=this.bgImageRef.onload,this.bgImageRef.src=e,this.bgImageRef.srcset=t||"",this.bgImageRef.sizes=n||""}},{key:"releaseImage",value:function releaseImage(){this.bgImageRef&&(this.bgImageRef.onload=null,this.bgImageRef.onerror=null,delete this.bgImageRef)}},{key:"addListeners",value:function addListeners(){this.canUseDOM&&this.parent&&(this.parent.addEventListener("scroll",this.onScroll,!1),window.addEventListener("resize",this.onWindowResize,!1),window.addEventListener("load",this.onWindowLoad,!1))}},{key:"removeListeners",value:function removeListeners(e){this.canUseDOM&&(e&&e.removeEventListener("scroll",this.onScroll,!1),window.removeEventListener("resize",this.onWindowResize,!1),window.removeEventListener("load",this.onWindowLoad,!1))}},{key:"render",value:function render(){var e=this,t=this.props,n=t.className,r=t.style,i=t.bgClassName,a=t.contentClassName,c=t.bgImageAlt,s=t.renderLayer,l=t.bgImageStyle,f=t.lazy,p=this.state,d=p.bgImage,g=p.bgImageSrcSet,_=p.bgImageSizes,y=p.percentage,h=p.imgStyle,b=p.bgStyle,m=p.splitChildren;return o.default.createElement("div",{className:"react-parallax ".concat(n),style:Object.assign({position:"relative",overflow:"hidden"},r),ref:function ref(t){e.node=t}},d?o.default.createElement("img",{className:i,src:d,srcSet:g,sizes:_,ref:function ref(t){e.img=t},alt:c,style:Object.assign(Object.assign({},h),l),loading:f?"lazy":"eager"}):null,s?s(-(y-1)):null,m.bgChildren.length>0?o.default.createElement("div",{className:"react-parallax-background-children",ref:function ref(t){e.bg=t},style:b},m.bgChildren):null,o.default.createElement(u.default,{onMount:this.onContentMount,className:a},m.children))}}],[{key:"getDerivedStateFromProps",value:function getDerivedStateFromProps(e){return{splitChildren:a.getSplitChildren(e)}}}]),Parallax}(i.Parallax);l.defaultProps={bgClassName:"react-parallax-bgimage",bgImageAlt:"",className:"",contentClassName:"",disabled:!1,strength:100},t.default=l},function(e,t,n){"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.setBlur=t.getBlurValue=t.getHasDynamicBlur=t.getSplitChildren=t.getRelativePosition=t.getPercentage=void 0;var r=n(0),o=n(2);t.getPercentage=function(e,t,n){return(n-e)/(t-e)||0},t.getRelativePosition=function(e,n){if(!n)return 0;var r=e.getBoundingClientRect(),i=r.top,a=r.height,c=o.getNodeHeight(n),u=a>c?a:c,s=Math.round(i>u?u:i);return t.getPercentage(0,u,s)},t.getSplitChildren=function(e){var t=[],n=r.Children.toArray(e.children);return n.forEach((function(e,r){var o=e;o.type&&o.type.isParallaxBackground&&(t=t.concat(n.splice(r,1)))})),{bgChildren:t,children:n}},t.getHasDynamicBlur=function(e){return"object"===_typeof(e)&&void 0!==e.min&&void 0!==e.max},t.getBlurValue=function(e,t,n){return e?t.min+(1-n)*t.max:t},t.setBlur=function(e,t){e.style.webkitFilter="blur(".concat(t,"px)"),e.style.filter="blur(".concat(t,"px)")}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(0));t.default=function ParallaxChildren(e){var t=e.children,n=e.onMount,r=e.className;return o.default.createElement("div",{ref:function ref(e){return n(e)},className:r||"react-parallax-content",style:{position:"relative"}},t)}},function(e,t,n){"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var n,r=_getPrototypeOf(e);if(t){var o=_getPrototypeOf(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return _possibleConstructorReturn(this,n)}}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(0)),i=function(e){!function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}(Background,e);var t=_createSuper(Background);function Background(){return _classCallCheck(this,Background),t.apply(this,arguments)}return function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(Background,[{key:"render",value:function render(){var e=this.props,t=e.className,n=e.children;return o.default.createElement("div",{className:"react-parallax-background ".concat(t)},n)}}]),Background}(n(1).Background);i.defaultProps={className:""},i.isParallaxBackground=!0,t.default=i}])}));

/***/ })

}]);