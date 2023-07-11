"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var _scripts_full_calendar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/full_calendar */ "./assets/scripts/full_calendar.js");
/* harmony import */ var _scripts_tiny_mce__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/tiny_mce */ "./assets/scripts/tiny_mce.js");
/* harmony import */ var vanillajs_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vanillajs-datepicker */ "./node_modules/vanillajs-datepicker/js/main.js");
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! choices.js */ "./node_modules/choices.js/public/assets/scripts/choices.js");
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(choices_js__WEBPACK_IMPORTED_MODULE_7__);








(0,_scripts_full_calendar__WEBPACK_IMPORTED_MODULE_4__["default"])();
(0,_scripts_tiny_mce__WEBPACK_IMPORTED_MODULE_5__["default"])();
var datepickers = document.querySelectorAll('.datepicker');
if (datepickers) {
  datepickers.forEach(function (el) {
    return new vanillajs_datepicker__WEBPACK_IMPORTED_MODULE_6__.Datepicker(el, {
      buttonClass: 'btn',
      format: 'dd-mm-yyyy hh:ii',
      autohide: true,
      language: 'fr-FR'
    });
  });
}
var choicesJsElements = document.querySelectorAll('.choices-js');
if (choicesJsElements) {
  choicesJsElements.forEach(function (el) {
    return new (choices_js__WEBPACK_IMPORTED_MODULE_7___default())(el, {
      searchEnabled: true,
      itemSelectText: '',
      shouldSort: true,
      removeItemButton: true
    });
  });
}

/***/ }),

/***/ "./assets/scripts/full_calendar.js":
/*!*****************************************!*\
  !*** ./assets/scripts/full_calendar.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fullcalendar/core */ "./node_modules/@fullcalendar/core/index.js");
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fullcalendar/daygrid */ "./node_modules/@fullcalendar/daygrid/index.js");
/* harmony import */ var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fullcalendar/timegrid */ "./node_modules/@fullcalendar/timegrid/index.js");
/* harmony import */ var _fullcalendar_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fullcalendar/list */ "./node_modules/@fullcalendar/list/index.js");
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fullcalendar/interaction */ "./node_modules/@fullcalendar/interaction/index.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");






/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.querySelector('.full-calendar');
    if (calendarEl) {
      var bookings = JSON.parse(calendarEl.dataset.bookings);
      var bookingModalEl = document.getElementById('modal-booking');
      var bookingModal = new bootstrap__WEBPACK_IMPORTED_MODULE_0__.Modal(bookingModalEl);
      var bookingTitleInput = document.getElementById('modal-booking-label');
      console.log(bookingTitleInput);

      // current id selection
      var currentId = null;
      var calendar = new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.Calendar(calendarEl, {
        plugins: [_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_2__["default"], _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_3__["default"], _fullcalendar_list__WEBPACK_IMPORTED_MODULE_4__["default"], _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_5__["default"]],
        selectable: true,
        editable: true,
        initialView: 'dayGridMonth',
        themeSystem: 'bootstrap',
        dayMaxEvents: true,
        events: bookings,
        buttonText: {
          prev: 'Previous',
          next: 'Next'
        },
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,listWeek'
        },
        select: function select(info) {
          bookingModal.show();
          console.log(info);
          bookingTitleInput.innerText = 'New booking';
          bookingModalEl.addEventListener('shown.bs.modal', function () {
            bookingTitleInput.focus();
          });
        },
        eventResize: function eventResize(info) {
          var event = info.event;
          var start = event.startStr;
          var end = event.endStr;
          console.log(event, start, end);
        },
        dateClick: function dateClick(e) {
          bookingModal.show();
          bookingTitleInput.innerText = 'New booking';
          bookingModalEl.addEventListener('shown.bs.modal', function () {
            bookingTitleInput.focus();
          });
        },
        eventClick: function eventClick(info) {
          currentId = info.event.id;
          bookingTitleInput.innerText = 'Edit booking';
          bookingModal.show();
          bookingModalEl.addEventListener('shown.bs.modal', function () {
            bookingTitleInput.focus();
          });
        }
      });
      calendar.render();

      // document.getElementById('addNewEventForm').addEventListener('submit', function (event) {
      //     event.preventDefault();
      //     calendar.addEvent({
      //         id: Math.random() * 10000, // this should be a unique id from your back-end or API
      //         title: bookingTitleInput.value,
      //         start: '2021-05-01',
      //         end: '2021-05-01',
      //         className: 'bg-secondary',
      //         dragabble: true
      //     });
      //     bookingModal.hide();
      // });
      //
      // document.getElementById('editEventForm').addEventListener('submit', function (event) {
      //     event.preventDefault();
      //     const editEvent = calendar.getEventById(currentId);
      //     const startDate = '2021-05-01';
      //     const endDate = '2021-05-01';
      //
      //     editEvent.setProp('title', bookingTitleInput.value);
      //     editEvent.setStart(startDate);
      //     editEvent.setEnd(endDate);
      //     bookingModal.hide();
      // });
    }
  });
}

/***/ }),

/***/ "./assets/scripts/tiny_mce.js":
/*!************************************!*\
  !*** ./assets/scripts/tiny_mce.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tinymce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tinymce */ "./node_modules/tinymce/tinymce.js");
/* harmony import */ var tinymce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tinymce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tinymce_models_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tinymce/models/dom */ "./node_modules/tinymce/models/dom/index.js");
/* harmony import */ var tinymce_models_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tinymce_models_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tinymce_icons_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tinymce/icons/default */ "./node_modules/tinymce/icons/default/index.js");
/* harmony import */ var tinymce_icons_default__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tinymce_icons_default__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tinymce_themes_silver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tinymce/themes/silver */ "./node_modules/tinymce/themes/silver/index.js");
/* harmony import */ var tinymce_themes_silver__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tinymce_themes_silver__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var tinymce_skins_ui_oxide_skin_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tinymce/skins/ui/oxide/skin.css */ "./node_modules/tinymce/skins/ui/oxide/skin.css");
/* harmony import */ var tinymce_skins_ui_oxide_content_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tinymce/skins/ui/oxide/content.css */ "./node_modules/tinymce/skins/ui/oxide/content.css");
/* harmony import */ var tinymce_skins_content_default_content_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tinymce/skins/content/default/content.css */ "./node_modules/tinymce/skins/content/default/content.css");
/* harmony import */ var tinymce_plugins_advlist__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tinymce/plugins/advlist */ "./node_modules/tinymce/plugins/advlist/index.js");
/* harmony import */ var tinymce_plugins_advlist__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_advlist__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var tinymce_plugins_code__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tinymce/plugins/code */ "./node_modules/tinymce/plugins/code/index.js");
/* harmony import */ var tinymce_plugins_code__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_code__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var tinymce_plugins_emoticons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tinymce/plugins/emoticons */ "./node_modules/tinymce/plugins/emoticons/index.js");
/* harmony import */ var tinymce_plugins_emoticons__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_emoticons__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var tinymce_plugins_emoticons_js_emojis__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tinymce/plugins/emoticons/js/emojis */ "./node_modules/tinymce/plugins/emoticons/js/emojis.js");
/* harmony import */ var tinymce_plugins_emoticons_js_emojis__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_emoticons_js_emojis__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var tinymce_plugins_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tinymce/plugins/link */ "./node_modules/tinymce/plugins/link/index.js");
/* harmony import */ var tinymce_plugins_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var tinymce_plugins_lists__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tinymce/plugins/lists */ "./node_modules/tinymce/plugins/lists/index.js");
/* harmony import */ var tinymce_plugins_lists__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_lists__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var tinymce_plugins_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tinymce/plugins/table */ "./node_modules/tinymce/plugins/table/index.js");
/* harmony import */ var tinymce_plugins_table__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(tinymce_plugins_table__WEBPACK_IMPORTED_MODULE_13__);



/* Default icons are required for TinyMCE 5.3 or above */


/* A theme is also required */


/* Import the skin */


/* Import content css */



/* Import plugins */







/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  document.addEventListener('DOMContentLoaded', function () {
    tinymce__WEBPACK_IMPORTED_MODULE_0___default().init({
      selector: '.tinymce',
      plugins: 'advlist code emoticons link lists table',
      toolbar: 'undo redo | bold italic removeformat | bullist numlist table | link emoticons ',
      menubar: false,
      statusbar: false
    });
  });
}

/***/ }),

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_bootstrap_dist_js_bootstrap_esm_js-node_modules_choices_js_public_assets-ab0aee"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7SUFDSjtFQUVKLENBQUMsQ0FBQztBQUNOOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRzhCO0FBQ0Y7O0FBRTVCO0FBQytCOztBQUUvQjtBQUMrQjs7QUFFL0I7QUFDeUM7O0FBRXpDO0FBQzRDO0FBQ087O0FBRW5EO0FBQ2lDO0FBQ0g7QUFDSztBQUNVO0FBQ2Y7QUFDQztBQUNBO0FBRS9CLDZCQUFlLHNDQUFZO0VBQ3ZCL0QsUUFBUSxDQUFDbUIsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsWUFBWTtJQUN0RDZDLG1EQUFZLENBQUM7TUFDVEUsUUFBUSxFQUFFLFVBQVU7TUFDcEJoQyxPQUFPLEVBQUUseUNBQXlDO01BQ2xEaUMsT0FBTyxFQUFFLGdGQUFnRjtNQUN6RkMsT0FBTyxFQUFFLEtBQUs7TUFDZEMsU0FBUyxFQUFFO0lBQ2YsQ0FBQyxDQUFDO0VBQ04sQ0FBQyxDQUFDO0FBQ047Ozs7Ozs7Ozs7O0FDbkNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9mdWxsX2NhbGVuZGFyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL3RpbnlfbWNlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5zY3NzJztcbmltcG9ydCBGdWxsQ2FsZW5kYXIgZnJvbSBcIi4vc2NyaXB0cy9mdWxsX2NhbGVuZGFyXCI7XG5pbXBvcnQgVGlueU1DRSBmcm9tIFwiLi9zY3JpcHRzL3RpbnlfbWNlXCI7XG5pbXBvcnQge0RhdGVwaWNrZXJ9IGZyb20gJ3ZhbmlsbGFqcy1kYXRlcGlja2VyJztcbmltcG9ydCBDaG9pY2VzIGZyb20gJ2Nob2ljZXMuanMnO1xuXG5GdWxsQ2FsZW5kYXIoKTtcblRpbnlNQ0UoKTtcblxuY29uc3QgZGF0ZXBpY2tlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGF0ZXBpY2tlcicpO1xuaWYgKGRhdGVwaWNrZXJzKSB7XG4gICAgZGF0ZXBpY2tlcnMuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlcGlja2VyKGVsLCB7XG4gICAgICAgICAgICBidXR0b25DbGFzczogJ2J0bicsXG4gICAgICAgICAgICBmb3JtYXQ6ICdkZC1tbS15eXl5IGhoOmlpJyxcbiAgICAgICAgICAgIGF1dG9oaWRlOiB0cnVlLFxuICAgICAgICAgICAgbGFuZ3VhZ2U6ICdmci1GUicsXG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuXG5jb25zdCBjaG9pY2VzSnNFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaG9pY2VzLWpzJyk7XG5pZiAoY2hvaWNlc0pzRWxlbWVudHMpIHtcbiAgICBjaG9pY2VzSnNFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICByZXR1cm4gbmV3IENob2ljZXMoZWwsIHtcbiAgICAgICAgICAgIHNlYXJjaEVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICBpdGVtU2VsZWN0VGV4dDogJycsXG4gICAgICAgICAgICBzaG91bGRTb3J0OiB0cnVlLFxuICAgICAgICAgICAgcmVtb3ZlSXRlbUJ1dHRvbjogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG4iLCJpbXBvcnQge0NhbGVuZGFyfSBmcm9tICdAZnVsbGNhbGVuZGFyL2NvcmUnO1xuaW1wb3J0IGRheUdyaWRQbHVnaW4gZnJvbSAnQGZ1bGxjYWxlbmRhci9kYXlncmlkJztcbmltcG9ydCB0aW1lR3JpZFBsdWdpbiBmcm9tICdAZnVsbGNhbGVuZGFyL3RpbWVncmlkJztcbmltcG9ydCBsaXN0UGx1Z2luIGZyb20gJ0BmdWxsY2FsZW5kYXIvbGlzdCc7XG5pbXBvcnQgaW50ZXJhY3Rpb25QbHVnaW4gZnJvbSAnQGZ1bGxjYWxlbmRhci9pbnRlcmFjdGlvbic7XG5pbXBvcnQge01vZGFsfSBmcm9tICdib290c3RyYXAnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgY2FsZW5kYXJFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mdWxsLWNhbGVuZGFyJyk7XG4gICAgICAgIGlmIChjYWxlbmRhckVsKSB7XG4gICAgICAgICAgICBjb25zdCBib29raW5ncyA9IEpTT04ucGFyc2UoY2FsZW5kYXJFbC5kYXRhc2V0LmJvb2tpbmdzKTtcblxuICAgICAgICAgICAgY29uc3QgYm9va2luZ01vZGFsRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtYm9va2luZycpO1xuICAgICAgICAgICAgY29uc3QgYm9va2luZ01vZGFsID0gbmV3IE1vZGFsKGJvb2tpbmdNb2RhbEVsKTtcbiAgICAgICAgICAgIGNvbnN0IGJvb2tpbmdUaXRsZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsLWJvb2tpbmctbGFiZWwnKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGJvb2tpbmdUaXRsZUlucHV0KVxuXG4gICAgICAgICAgICAvLyBjdXJyZW50IGlkIHNlbGVjdGlvblxuICAgICAgICAgICAgbGV0IGN1cnJlbnRJZCA9IG51bGw7XG5cbiAgICAgICAgICAgIGNvbnN0IGNhbGVuZGFyID0gbmV3IENhbGVuZGFyKGNhbGVuZGFyRWwsIHtcbiAgICAgICAgICAgICAgICBwbHVnaW5zOiBbZGF5R3JpZFBsdWdpbiwgdGltZUdyaWRQbHVnaW4sIGxpc3RQbHVnaW4sIGludGVyYWN0aW9uUGx1Z2luXSxcbiAgICAgICAgICAgICAgICBzZWxlY3RhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGluaXRpYWxWaWV3OiAnZGF5R3JpZE1vbnRoJyxcbiAgICAgICAgICAgICAgICB0aGVtZVN5c3RlbTogJ2Jvb3RzdHJhcCcsXG4gICAgICAgICAgICAgICAgZGF5TWF4RXZlbnRzOiB0cnVlLFxuICAgICAgICAgICAgICAgIGV2ZW50czogYm9va2luZ3MsXG4gICAgICAgICAgICAgICAgYnV0dG9uVGV4dDoge1xuICAgICAgICAgICAgICAgICAgICBwcmV2OiAnUHJldmlvdXMnLFxuICAgICAgICAgICAgICAgICAgICBuZXh0OiAnTmV4dCdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGhlYWRlclRvb2xiYXI6IHtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogJ3ByZXYsbmV4dCB0b2RheScsXG4gICAgICAgICAgICAgICAgICAgIGNlbnRlcjogJ3RpdGxlJyxcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6ICdkYXlHcmlkTW9udGgsdGltZUdyaWRXZWVrLGxpc3RXZWVrJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2VsZWN0OiAoaW5mbykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBib29raW5nTW9kYWwuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpbmZvKVxuICAgICAgICAgICAgICAgICAgICBib29raW5nVGl0bGVJbnB1dC5pbm5lclRleHQgPSAnTmV3IGJvb2tpbmcnO1xuXG4gICAgICAgICAgICAgICAgICAgIGJvb2tpbmdNb2RhbEVsLmFkZEV2ZW50TGlzdGVuZXIoJ3Nob3duLmJzLm1vZGFsJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9va2luZ1RpdGxlSW5wdXQuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBldmVudFJlc2l6ZTogKGluZm8pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXZlbnQgPSBpbmZvLmV2ZW50O1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGFydCA9IGV2ZW50LnN0YXJ0U3RyO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbmQgPSBldmVudC5lbmRTdHI7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50LCBzdGFydCwgZW5kKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRhdGVDbGljazogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgYm9va2luZ01vZGFsLnNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgYm9va2luZ1RpdGxlSW5wdXQuaW5uZXJUZXh0ID0gJ05ldyBib29raW5nJztcblxuICAgICAgICAgICAgICAgICAgICBib29raW5nTW9kYWxFbC5hZGRFdmVudExpc3RlbmVyKCdzaG93bi5icy5tb2RhbCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvb2tpbmdUaXRsZUlucHV0LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXZlbnRDbGljazogZnVuY3Rpb24gKGluZm8pIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudElkID0gaW5mby5ldmVudC5pZDtcbiAgICAgICAgICAgICAgICAgICAgYm9va2luZ1RpdGxlSW5wdXQuaW5uZXJUZXh0ID0gJ0VkaXQgYm9va2luZyc7XG5cbiAgICAgICAgICAgICAgICAgICAgYm9va2luZ01vZGFsLnNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgYm9va2luZ01vZGFsRWwuYWRkRXZlbnRMaXN0ZW5lcignc2hvd24uYnMubW9kYWwnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib29raW5nVGl0bGVJbnB1dC5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNhbGVuZGFyLnJlbmRlcigpO1xuXG4gICAgICAgICAgICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkTmV3RXZlbnRGb3JtJykuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAvLyAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIC8vICAgICBjYWxlbmRhci5hZGRFdmVudCh7XG4gICAgICAgICAgICAvLyAgICAgICAgIGlkOiBNYXRoLnJhbmRvbSgpICogMTAwMDAsIC8vIHRoaXMgc2hvdWxkIGJlIGEgdW5pcXVlIGlkIGZyb20geW91ciBiYWNrLWVuZCBvciBBUElcbiAgICAgICAgICAgIC8vICAgICAgICAgdGl0bGU6IGJvb2tpbmdUaXRsZUlucHV0LnZhbHVlLFxuICAgICAgICAgICAgLy8gICAgICAgICBzdGFydDogJzIwMjEtMDUtMDEnLFxuICAgICAgICAgICAgLy8gICAgICAgICBlbmQ6ICcyMDIxLTA1LTAxJyxcbiAgICAgICAgICAgIC8vICAgICAgICAgY2xhc3NOYW1lOiAnYmctc2Vjb25kYXJ5JyxcbiAgICAgICAgICAgIC8vICAgICAgICAgZHJhZ2FiYmxlOiB0cnVlXG4gICAgICAgICAgICAvLyAgICAgfSk7XG4gICAgICAgICAgICAvLyAgICAgYm9va2luZ01vZGFsLmhpZGUoKTtcbiAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0RXZlbnRGb3JtJykuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAvLyAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIC8vICAgICBjb25zdCBlZGl0RXZlbnQgPSBjYWxlbmRhci5nZXRFdmVudEJ5SWQoY3VycmVudElkKTtcbiAgICAgICAgICAgIC8vICAgICBjb25zdCBzdGFydERhdGUgPSAnMjAyMS0wNS0wMSc7XG4gICAgICAgICAgICAvLyAgICAgY29uc3QgZW5kRGF0ZSA9ICcyMDIxLTA1LTAxJztcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyAgICAgZWRpdEV2ZW50LnNldFByb3AoJ3RpdGxlJywgYm9va2luZ1RpdGxlSW5wdXQudmFsdWUpO1xuICAgICAgICAgICAgLy8gICAgIGVkaXRFdmVudC5zZXRTdGFydChzdGFydERhdGUpO1xuICAgICAgICAgICAgLy8gICAgIGVkaXRFdmVudC5zZXRFbmQoZW5kRGF0ZSk7XG4gICAgICAgICAgICAvLyAgICAgYm9va2luZ01vZGFsLmhpZGUoKTtcbiAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICB9XG5cbiAgICB9KTtcbn1cbiIsImltcG9ydCB0aW55bWNlIGZyb20gJ3RpbnltY2UnO1xuaW1wb3J0ICd0aW55bWNlL21vZGVscy9kb20nO1xuXG4vKiBEZWZhdWx0IGljb25zIGFyZSByZXF1aXJlZCBmb3IgVGlueU1DRSA1LjMgb3IgYWJvdmUgKi9cbmltcG9ydCAndGlueW1jZS9pY29ucy9kZWZhdWx0JztcblxuLyogQSB0aGVtZSBpcyBhbHNvIHJlcXVpcmVkICovXG5pbXBvcnQgJ3RpbnltY2UvdGhlbWVzL3NpbHZlcic7XG5cbi8qIEltcG9ydCB0aGUgc2tpbiAqL1xuaW1wb3J0ICd0aW55bWNlL3NraW5zL3VpL294aWRlL3NraW4uY3NzJztcblxuLyogSW1wb3J0IGNvbnRlbnQgY3NzICovXG5pbXBvcnQgJ3RpbnltY2Uvc2tpbnMvdWkvb3hpZGUvY29udGVudC5jc3MnO1xuaW1wb3J0ICd0aW55bWNlL3NraW5zL2NvbnRlbnQvZGVmYXVsdC9jb250ZW50LmNzcyc7XG5cbi8qIEltcG9ydCBwbHVnaW5zICovXG5pbXBvcnQgJ3RpbnltY2UvcGx1Z2lucy9hZHZsaXN0JztcbmltcG9ydCAndGlueW1jZS9wbHVnaW5zL2NvZGUnO1xuaW1wb3J0ICd0aW55bWNlL3BsdWdpbnMvZW1vdGljb25zJztcbmltcG9ydCAndGlueW1jZS9wbHVnaW5zL2Vtb3RpY29ucy9qcy9lbW9qaXMnO1xuaW1wb3J0ICd0aW55bWNlL3BsdWdpbnMvbGluayc7XG5pbXBvcnQgJ3RpbnltY2UvcGx1Z2lucy9saXN0cyc7XG5pbXBvcnQgJ3RpbnltY2UvcGx1Z2lucy90YWJsZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICB0aW55bWNlLmluaXQoe1xuICAgICAgICAgICAgc2VsZWN0b3I6ICcudGlueW1jZScsXG4gICAgICAgICAgICBwbHVnaW5zOiAnYWR2bGlzdCBjb2RlIGVtb3RpY29ucyBsaW5rIGxpc3RzIHRhYmxlJyxcbiAgICAgICAgICAgIHRvb2xiYXI6ICd1bmRvIHJlZG8gfCBib2xkIGl0YWxpYyByZW1vdmVmb3JtYXQgfCBidWxsaXN0IG51bWxpc3QgdGFibGUgfCBsaW5rIGVtb3RpY29ucyAnLFxuICAgICAgICAgICAgbWVudWJhcjogZmFsc2UsXG4gICAgICAgICAgICBzdGF0dXNiYXI6IGZhbHNlLFxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJGdWxsQ2FsZW5kYXIiLCJUaW55TUNFIiwiRGF0ZXBpY2tlciIsIkNob2ljZXMiLCJkYXRlcGlja2VycyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbCIsImJ1dHRvbkNsYXNzIiwiZm9ybWF0IiwiYXV0b2hpZGUiLCJsYW5ndWFnZSIsImNob2ljZXNKc0VsZW1lbnRzIiwic2VhcmNoRW5hYmxlZCIsIml0ZW1TZWxlY3RUZXh0Iiwic2hvdWxkU29ydCIsInJlbW92ZUl0ZW1CdXR0b24iLCJDYWxlbmRhciIsImRheUdyaWRQbHVnaW4iLCJ0aW1lR3JpZFBsdWdpbiIsImxpc3RQbHVnaW4iLCJpbnRlcmFjdGlvblBsdWdpbiIsIk1vZGFsIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbGVuZGFyRWwiLCJxdWVyeVNlbGVjdG9yIiwiYm9va2luZ3MiLCJKU09OIiwicGFyc2UiLCJkYXRhc2V0IiwiYm9va2luZ01vZGFsRWwiLCJnZXRFbGVtZW50QnlJZCIsImJvb2tpbmdNb2RhbCIsImJvb2tpbmdUaXRsZUlucHV0IiwiY29uc29sZSIsImxvZyIsImN1cnJlbnRJZCIsImNhbGVuZGFyIiwicGx1Z2lucyIsInNlbGVjdGFibGUiLCJlZGl0YWJsZSIsImluaXRpYWxWaWV3IiwidGhlbWVTeXN0ZW0iLCJkYXlNYXhFdmVudHMiLCJldmVudHMiLCJidXR0b25UZXh0IiwicHJldiIsIm5leHQiLCJoZWFkZXJUb29sYmFyIiwibGVmdCIsImNlbnRlciIsInJpZ2h0Iiwic2VsZWN0IiwiaW5mbyIsInNob3ciLCJpbm5lclRleHQiLCJmb2N1cyIsImV2ZW50UmVzaXplIiwiZXZlbnQiLCJzdGFydCIsInN0YXJ0U3RyIiwiZW5kIiwiZW5kU3RyIiwiZGF0ZUNsaWNrIiwiZSIsImV2ZW50Q2xpY2siLCJpZCIsInJlbmRlciIsInRpbnltY2UiLCJpbml0Iiwic2VsZWN0b3IiLCJ0b29sYmFyIiwibWVudWJhciIsInN0YXR1c2JhciJdLCJzb3VyY2VSb290IjoiIn0=