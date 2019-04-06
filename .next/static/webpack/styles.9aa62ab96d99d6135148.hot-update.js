webpackHotUpdate("styles",{

/***/ "./styles/style.scss":
/*!***************************!*\
  !*** ./styles/style.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"linkStyle":"ewoqoJX0N8oD-_69JYF1z","layoutStyle":"_1tp_OCziAAyTUOEtchuvQu","headerStyle":"_33OQ-OmlexhDg64J13rVM9","footerStyle":"_1I8ar22uumuD0INBaOT0y5"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1554592415119");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.9aa62ab96d99d6135148.hot-update.js.map