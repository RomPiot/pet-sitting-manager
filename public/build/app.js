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
document.addEventListener('DOMContentLoaded', function () {
  var datepickers = document.querySelectorAll('.datepicker');
  if (datepickers) {
    datepickers.forEach(function (el) {
      return new vanillajs_datepicker__WEBPACK_IMPORTED_MODULE_6__.Datepicker(el, {
        buttonClass: 'btn',
        format: 'dd-mm-yyyy',
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
});

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
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fullcalendar_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fullcalendar/core */ "./node_modules/@fullcalendar/core/index.js");
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fullcalendar/daygrid */ "./node_modules/@fullcalendar/daygrid/index.js");
/* harmony import */ var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fullcalendar/timegrid */ "./node_modules/@fullcalendar/timegrid/index.js");
/* harmony import */ var _fullcalendar_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fullcalendar/list */ "./node_modules/@fullcalendar/list/index.js");
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fullcalendar/interaction */ "./node_modules/@fullcalendar/interaction/index.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! choices.js */ "./node_modules/choices.js/public/assets/scripts/choices.js");
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(choices_js__WEBPACK_IMPORTED_MODULE_4__);










/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.querySelector('.full-calendar');
    if (calendarEl) {
      var bookings = JSON.parse(calendarEl.dataset.bookings);
      var bookingModalEl = document.getElementById('modal-booking');
      var bookingModal = new bootstrap__WEBPACK_IMPORTED_MODULE_3__.Modal(bookingModalEl);
      var bookingTitleInput = document.getElementById('modal-booking-label');

      // current id selection
      var currentId = null;
      var calendar = new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_5__.Calendar(calendarEl, {
        plugins: [_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_6__["default"], _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_7__["default"], _fullcalendar_list__WEBPACK_IMPORTED_MODULE_8__["default"], _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_9__["default"]],
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
          bookingTitleInput.innerText = 'New booking';
          var start = info.startStr;
          var end = info.endStr;
          var startInput = document.getElementById('booking_dateStart');
          var endInput = document.getElementById('booking_dateEnd');
          startInput.value = start;
          endInput.value = end;
          bookingModalEl.addEventListener('shown.bs.modal', function () {
            bookingTitleInput.focus();
          });
        },
        eventResize: function eventResize(info) {
          var start = info.startStr;
          var end = info.endStr;
          var startInput = document.getElementById('booking_dateStart');
          var endInput = document.getElementById('booking_dateEnd');
          startInput.value = start;
          endInput.value = end;
        },
        dateClick: function dateClick(info) {
          var date = info.dateStr;
          var startInput = document.getElementById('booking_dateStart');
          var endInput = document.getElementById('booking_dateEnd');
          startInput.value = date;
          endInput.value = date;
          bookingModal.show();
          bookingTitleInput.innerText = 'New booking';
          bookingModalEl.addEventListener('shown.bs.modal', function () {
            bookingTitleInput.focus();
          });
        },
        eventClick: function eventClick(info) {
          bookingTitleInput.innerText = 'Edit booking';
          currentId = parseInt(info.event.id);
          var bookings = JSON.parse(calendarEl.dataset.bookings);
          var url = '/bookings/edit/' + currentId;
          fetch(url).then(function (response) {
            return response.text();
          }).then(function (data) {
            var modalToReplace = document.querySelector('#modal-booking');
            // replace modalToReplace by data
            modalToReplace.outerHTML = data;
          });

          // const booking = bookings.find(booking => booking.id === currentId);
          // console.log(booking)
          //
          // const startInput = document.getElementById('booking_dateStart');
          // const endInput = document.getElementById('booking_dateEnd');
          // const priceInput = document.getElementById('booking_price');
          // const statusInput = document.getElementById('booking_declared');
          // const inventoryInput = document.getElementById('booking_inventory');
          // const commentInput = document.getElementById('booking_comment');
          // const backgroundColorInput = document.getElementById('booking_backgroundColor');
          // const textColorInput = document.getElementById('booking_textColor');
          // const dogsInputSelect = document.getElementById('booking_dogs');
          // const dogsChoices = document.querySelectorAll('.choices__item--choice');
          // console.log(dogsChoices);

          // booking.dogs.forEach(dog => {
          //     console.log(dog)
          //     dogsChoices.forEach(choice => {
          //         if (choice.dataset.value === dog.id.toString()) {
          //             console.log(choice)
          //             // select this choice in the select
          //             choice.classList.add('choices__item--selected');
          //             // add this choice to the select
          //             const choicesList = document.querySelector('.choices__list--multiple');
          //             const newChoice = document.createElement('div');
          //             newChoice.classList.add('choices__item', 'choices__item--choice', 'choices__item--selectable', 'choices__item--removable', 'is-highlighted', 'is-selected');
          //             newChoice.setAttribute('data-item', '');
          //             newChoice.setAttribute('data-id', dog.id);
          //             newChoice.setAttribute('data-value', dog.id);
          //             newChoice.setAttribute('aria-selected', 'true');
          //             newChoice.innerHTML = dog.name;
          //             choicesList.appendChild(newChoice);

          // }
          // })
          // });

          // startInput ? startInput.value = booking.start : null;
          // endInput ? endInput.value = booking.end : null;
          // // dogsInputSelect ? dogsInputSelect.value = booking.dogs : null;
          // // dogsInputSelect ? dogsInputSelect.value = booking.dogs.map(dog => dog.id) : null;
          // priceInput ? priceInput.value = booking.price : null;
          // statusInput ? statusInput.value = booking.status : null;
          // inventoryInput ? inventoryInput.value = booking.inventory : null;
          // commentInput ? commentInput.value = booking.comment : null;
          // backgroundColorInput ? backgroundColorInput.value = booking.backgroundColor : null;
          // textColorInput ? textColorInput.value = booking.textColor : null;

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
/******/ __webpack_require__.O(0, ["vendors-node_modules_bootstrap_dist_js_bootstrap_esm_js-node_modules_choices_js_public_assets-64a03f"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBOztVQUVBM0MsWUFBWSxDQUFDb0IsSUFBSSxFQUFFO1VBQ25CdEIsY0FBYyxDQUFDMUIsZ0JBQWdCLENBQUMsZ0JBQWdCLEVBQUUsWUFBWTtZQUMxRDZCLGlCQUFpQixDQUFDNEIsS0FBSyxFQUFFO1VBQzdCLENBQUMsQ0FBQztRQUNOO01BQ0osQ0FBQyxDQUFDO01BQ0YxQixRQUFRLENBQUMyQyxNQUFNLEVBQUU7O01BRWpCO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtJQUNKO0VBRUosQ0FBQyxDQUFDO0FBQ047Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25MOEI7QUFDRjs7QUFFNUI7QUFDK0I7O0FBRS9CO0FBQytCOztBQUUvQjtBQUN5Qzs7QUFFekM7QUFDNEM7QUFDTzs7QUFFbkQ7QUFDaUM7QUFDSDtBQUNLO0FBQ1U7QUFDZjtBQUNDO0FBQ0E7QUFFL0IsNkJBQWUsc0NBQVk7RUFDdkIzRSxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQVk7SUFDdEQyRSxtREFBWSxDQUFDO01BQ1RFLFFBQVEsRUFBRSxVQUFVO01BQ3BCN0MsT0FBTyxFQUFFLHlDQUF5QztNQUNsRDhDLE9BQU8sRUFBRSxnRkFBZ0Y7TUFDekZDLE9BQU8sRUFBRSxLQUFLO01BQ2RDLFNBQVMsRUFBRTtJQUNmLENBQUMsQ0FBQztFQUNOLENBQUMsQ0FBQztBQUNOOzs7Ozs7Ozs7OztBQ25DQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvZnVsbF9jYWxlbmRhci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy90aW55X21jZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5zY3NzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9zdHlsZXMvYXBwLnNjc3MnO1xuaW1wb3J0IEZ1bGxDYWxlbmRhciBmcm9tIFwiLi9zY3JpcHRzL2Z1bGxfY2FsZW5kYXJcIjtcbmltcG9ydCBUaW55TUNFIGZyb20gXCIuL3NjcmlwdHMvdGlueV9tY2VcIjtcbmltcG9ydCB7RGF0ZXBpY2tlcn0gZnJvbSAndmFuaWxsYWpzLWRhdGVwaWNrZXInO1xuaW1wb3J0IENob2ljZXMgZnJvbSAnY2hvaWNlcy5qcyc7XG5cbkZ1bGxDYWxlbmRhcigpO1xuVGlueU1DRSgpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGRhdGVwaWNrZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRhdGVwaWNrZXInKTtcbiAgICBpZiAoZGF0ZXBpY2tlcnMpIHtcbiAgICAgICAgZGF0ZXBpY2tlcnMuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZXBpY2tlcihlbCwge1xuICAgICAgICAgICAgICAgIGJ1dHRvbkNsYXNzOiAnYnRuJyxcbiAgICAgICAgICAgICAgICBmb3JtYXQ6ICdkZC1tbS15eXl5JyxcbiAgICAgICAgICAgICAgICBhdXRvaGlkZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBsYW5ndWFnZTogJ2ZyLUZSJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBjaG9pY2VzSnNFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaG9pY2VzLWpzJyk7XG4gICAgaWYgKGNob2ljZXNKc0VsZW1lbnRzKSB7XG4gICAgICAgIGNob2ljZXNKc0VsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IENob2ljZXMoZWwsIHtcbiAgICAgICAgICAgICAgICBzZWFyY2hFbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIGl0ZW1TZWxlY3RUZXh0OiAnJyxcbiAgICAgICAgICAgICAgICBzaG91bGRTb3J0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHJlbW92ZUl0ZW1CdXR0b246IHRydWUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufSk7XG4iLCJpbXBvcnQge0NhbGVuZGFyfSBmcm9tICdAZnVsbGNhbGVuZGFyL2NvcmUnO1xuaW1wb3J0IGRheUdyaWRQbHVnaW4gZnJvbSAnQGZ1bGxjYWxlbmRhci9kYXlncmlkJztcbmltcG9ydCB0aW1lR3JpZFBsdWdpbiBmcm9tICdAZnVsbGNhbGVuZGFyL3RpbWVncmlkJztcbmltcG9ydCBsaXN0UGx1Z2luIGZyb20gJ0BmdWxsY2FsZW5kYXIvbGlzdCc7XG5pbXBvcnQgaW50ZXJhY3Rpb25QbHVnaW4gZnJvbSAnQGZ1bGxjYWxlbmRhci9pbnRlcmFjdGlvbic7XG5pbXBvcnQge01vZGFsfSBmcm9tICdib290c3RyYXAnO1xuaW1wb3J0IENob2ljZXMgZnJvbSBcImNob2ljZXMuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGNhbGVuZGFyRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZnVsbC1jYWxlbmRhcicpO1xuICAgICAgICBpZiAoY2FsZW5kYXJFbCkge1xuICAgICAgICAgICAgY29uc3QgYm9va2luZ3MgPSBKU09OLnBhcnNlKGNhbGVuZGFyRWwuZGF0YXNldC5ib29raW5ncyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGJvb2tpbmdNb2RhbEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsLWJvb2tpbmcnKTtcbiAgICAgICAgICAgIGNvbnN0IGJvb2tpbmdNb2RhbCA9IG5ldyBNb2RhbChib29raW5nTW9kYWxFbCk7XG4gICAgICAgICAgICBjb25zdCBib29raW5nVGl0bGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbC1ib29raW5nLWxhYmVsJyk7XG5cbiAgICAgICAgICAgIC8vIGN1cnJlbnQgaWQgc2VsZWN0aW9uXG4gICAgICAgICAgICBsZXQgY3VycmVudElkID0gbnVsbDtcblxuICAgICAgICAgICAgY29uc3QgY2FsZW5kYXIgPSBuZXcgQ2FsZW5kYXIoY2FsZW5kYXJFbCwge1xuICAgICAgICAgICAgICAgIHBsdWdpbnM6IFtkYXlHcmlkUGx1Z2luLCB0aW1lR3JpZFBsdWdpbiwgbGlzdFBsdWdpbiwgaW50ZXJhY3Rpb25QbHVnaW5dLFxuICAgICAgICAgICAgICAgIHNlbGVjdGFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgaW5pdGlhbFZpZXc6ICdkYXlHcmlkTW9udGgnLFxuICAgICAgICAgICAgICAgIHRoZW1lU3lzdGVtOiAnYm9vdHN0cmFwJyxcbiAgICAgICAgICAgICAgICBkYXlNYXhFdmVudHM6IHRydWUsXG4gICAgICAgICAgICAgICAgZXZlbnRzOiBib29raW5ncyxcbiAgICAgICAgICAgICAgICBidXR0b25UZXh0OiB7XG4gICAgICAgICAgICAgICAgICAgIHByZXY6ICdQcmV2aW91cycsXG4gICAgICAgICAgICAgICAgICAgIG5leHQ6ICdOZXh0J1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaGVhZGVyVG9vbGJhcjoge1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAncHJldixuZXh0IHRvZGF5JyxcbiAgICAgICAgICAgICAgICAgICAgY2VudGVyOiAndGl0bGUnLFxuICAgICAgICAgICAgICAgICAgICByaWdodDogJ2RheUdyaWRNb250aCx0aW1lR3JpZFdlZWssbGlzdFdlZWsnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzZWxlY3Q6IChpbmZvKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGJvb2tpbmdNb2RhbC5zaG93KCk7XG4gICAgICAgICAgICAgICAgICAgIGJvb2tpbmdUaXRsZUlucHV0LmlubmVyVGV4dCA9ICdOZXcgYm9va2luZyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gaW5mby5zdGFydFN0cjtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZW5kID0gaW5mby5lbmRTdHI7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhcnRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib29raW5nX2RhdGVTdGFydCcpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbmRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib29raW5nX2RhdGVFbmQnKTtcblxuICAgICAgICAgICAgICAgICAgICBzdGFydElucHV0LnZhbHVlID0gc3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgIGVuZElucHV0LnZhbHVlID0gZW5kO1xuXG4gICAgICAgICAgICAgICAgICAgIGJvb2tpbmdNb2RhbEVsLmFkZEV2ZW50TGlzdGVuZXIoJ3Nob3duLmJzLm1vZGFsJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9va2luZ1RpdGxlSW5wdXQuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBldmVudFJlc2l6ZTogKGluZm8pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSBpbmZvLnN0YXJ0U3RyO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbmQgPSBpbmZvLmVuZFN0cjtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGFydElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jvb2tpbmdfZGF0ZVN0YXJ0Jyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVuZElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jvb2tpbmdfZGF0ZUVuZCcpO1xuXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0SW5wdXQudmFsdWUgPSBzdGFydDtcbiAgICAgICAgICAgICAgICAgICAgZW5kSW5wdXQudmFsdWUgPSBlbmQ7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkYXRlQ2xpY2s6IGZ1bmN0aW9uIChpbmZvKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBpbmZvLmRhdGVTdHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhcnRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib29raW5nX2RhdGVTdGFydCcpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbmRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib29raW5nX2RhdGVFbmQnKTtcblxuICAgICAgICAgICAgICAgICAgICBzdGFydElucHV0LnZhbHVlID0gZGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgZW5kSW5wdXQudmFsdWUgPSBkYXRlOyBcblxuICAgICAgICAgICAgICAgICAgICBib29raW5nTW9kYWwuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICBib29raW5nVGl0bGVJbnB1dC5pbm5lclRleHQgPSAnTmV3IGJvb2tpbmcnO1xuXG4gICAgICAgICAgICAgICAgICAgIGJvb2tpbmdNb2RhbEVsLmFkZEV2ZW50TGlzdGVuZXIoJ3Nob3duLmJzLm1vZGFsJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9va2luZ1RpdGxlSW5wdXQuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBldmVudENsaWNrOiBmdW5jdGlvbiAoaW5mbykge1xuICAgICAgICAgICAgICAgICAgICBib29raW5nVGl0bGVJbnB1dC5pbm5lclRleHQgPSAnRWRpdCBib29raW5nJztcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudElkID0gcGFyc2VJbnQoaW5mby5ldmVudC5pZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYm9va2luZ3MgPSBKU09OLnBhcnNlKGNhbGVuZGFyRWwuZGF0YXNldC5ib29raW5ncyk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gJy9ib29raW5ncy9lZGl0LycgKyBjdXJyZW50SWQ7XG4gICAgICAgICAgICAgICAgICAgIGZldGNoKHVybClcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLnRleHQoKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vZGFsVG9SZXBsYWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWJvb2tpbmcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlcGxhY2UgbW9kYWxUb1JlcGxhY2UgYnkgZGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGFsVG9SZXBsYWNlLm91dGVySFRNTCA9IGRhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc3QgYm9va2luZyA9IGJvb2tpbmdzLmZpbmQoYm9va2luZyA9PiBib29raW5nLmlkID09PSBjdXJyZW50SWQpO1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhib29raW5nKVxuICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCBzdGFydElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jvb2tpbmdfZGF0ZVN0YXJ0Jyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IGVuZElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jvb2tpbmdfZGF0ZUVuZCcpO1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCBwcmljZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jvb2tpbmdfcHJpY2UnKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc3Qgc3RhdHVzSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9va2luZ19kZWNsYXJlZCcpO1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCBpbnZlbnRvcnlJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib29raW5nX2ludmVudG9yeScpO1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCBjb21tZW50SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9va2luZ19jb21tZW50Jyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IGJhY2tncm91bmRDb2xvcklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jvb2tpbmdfYmFja2dyb3VuZENvbG9yJyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IHRleHRDb2xvcklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jvb2tpbmdfdGV4dENvbG9yJyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IGRvZ3NJbnB1dFNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib29raW5nX2RvZ3MnKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc3QgZG9nc0Nob2ljZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hvaWNlc19faXRlbS0tY2hvaWNlJyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRvZ3NDaG9pY2VzKTtcblxuXG4gICAgICAgICAgICAgICAgICAgIC8vIGJvb2tpbmcuZG9ncy5mb3JFYWNoKGRvZyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhkb2cpXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBkb2dzQ2hvaWNlcy5mb3JFYWNoKGNob2ljZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgaWYgKGNob2ljZS5kYXRhc2V0LnZhbHVlID09PSBkb2cuaWQudG9TdHJpbmcoKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhjaG9pY2UpXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIC8vIHNlbGVjdCB0aGlzIGNob2ljZSBpbiB0aGUgc2VsZWN0XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGNob2ljZS5jbGFzc0xpc3QuYWRkKCdjaG9pY2VzX19pdGVtLS1zZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAvLyBhZGQgdGhpcyBjaG9pY2UgdG8gdGhlIHNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBjb25zdCBjaG9pY2VzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaG9pY2VzX19saXN0LS1tdWx0aXBsZScpO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBjb25zdCBuZXdDaG9pY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgbmV3Q2hvaWNlLmNsYXNzTGlzdC5hZGQoJ2Nob2ljZXNfX2l0ZW0nLCAnY2hvaWNlc19faXRlbS0tY2hvaWNlJywgJ2Nob2ljZXNfX2l0ZW0tLXNlbGVjdGFibGUnLCAnY2hvaWNlc19faXRlbS0tcmVtb3ZhYmxlJywgJ2lzLWhpZ2hsaWdodGVkJywgJ2lzLXNlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIG5ld0Nob2ljZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaXRlbScsICcnKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgbmV3Q2hvaWNlLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGRvZy5pZCk7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIG5ld0Nob2ljZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsdWUnLCBkb2cuaWQpO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBuZXdDaG9pY2Uuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgJ3RydWUnKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgbmV3Q2hvaWNlLmlubmVySFRNTCA9IGRvZy5uYW1lO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBjaG9pY2VzTGlzdC5hcHBlbmRDaGlsZChuZXdDaG9pY2UpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gfSlcbiAgICAgICAgICAgICAgICAgICAgLy8gfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gc3RhcnRJbnB1dCA/IHN0YXJ0SW5wdXQudmFsdWUgPSBib29raW5nLnN0YXJ0IDogbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgLy8gZW5kSW5wdXQgPyBlbmRJbnB1dC52YWx1ZSA9IGJvb2tpbmcuZW5kIDogbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgLy8gLy8gZG9nc0lucHV0U2VsZWN0ID8gZG9nc0lucHV0U2VsZWN0LnZhbHVlID0gYm9va2luZy5kb2dzIDogbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgLy8gLy8gZG9nc0lucHV0U2VsZWN0ID8gZG9nc0lucHV0U2VsZWN0LnZhbHVlID0gYm9va2luZy5kb2dzLm1hcChkb2cgPT4gZG9nLmlkKSA6IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIC8vIHByaWNlSW5wdXQgPyBwcmljZUlucHV0LnZhbHVlID0gYm9va2luZy5wcmljZSA6IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIC8vIHN0YXR1c0lucHV0ID8gc3RhdHVzSW5wdXQudmFsdWUgPSBib29raW5nLnN0YXR1cyA6IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIC8vIGludmVudG9yeUlucHV0ID8gaW52ZW50b3J5SW5wdXQudmFsdWUgPSBib29raW5nLmludmVudG9yeSA6IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbW1lbnRJbnB1dCA/IGNvbW1lbnRJbnB1dC52YWx1ZSA9IGJvb2tpbmcuY29tbWVudCA6IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmRDb2xvcklucHV0ID8gYmFja2dyb3VuZENvbG9ySW5wdXQudmFsdWUgPSBib29raW5nLmJhY2tncm91bmRDb2xvciA6IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRleHRDb2xvcklucHV0ID8gdGV4dENvbG9ySW5wdXQudmFsdWUgPSBib29raW5nLnRleHRDb2xvciA6IG51bGw7XG5cbiAgICAgICAgICAgICAgICAgICAgYm9va2luZ01vZGFsLnNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgYm9va2luZ01vZGFsRWwuYWRkRXZlbnRMaXN0ZW5lcignc2hvd24uYnMubW9kYWwnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib29raW5nVGl0bGVJbnB1dC5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNhbGVuZGFyLnJlbmRlcigpO1xuXG4gICAgICAgICAgICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkTmV3RXZlbnRGb3JtJykuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAvLyAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIC8vICAgICBjYWxlbmRhci5hZGRFdmVudCh7XG4gICAgICAgICAgICAvLyAgICAgICAgIGlkOiBNYXRoLnJhbmRvbSgpICogMTAwMDAsIC8vIHRoaXMgc2hvdWxkIGJlIGEgdW5pcXVlIGlkIGZyb20geW91ciBiYWNrLWVuZCBvciBBUElcbiAgICAgICAgICAgIC8vICAgICAgICAgdGl0bGU6IGJvb2tpbmdUaXRsZUlucHV0LnZhbHVlLFxuICAgICAgICAgICAgLy8gICAgICAgICBzdGFydDogJzIwMjEtMDUtMDEnLFxuICAgICAgICAgICAgLy8gICAgICAgICBlbmQ6ICcyMDIxLTA1LTAxJyxcbiAgICAgICAgICAgIC8vICAgICAgICAgY2xhc3NOYW1lOiAnYmctc2Vjb25kYXJ5JyxcbiAgICAgICAgICAgIC8vICAgICAgICAgZHJhZ2FiYmxlOiB0cnVlXG4gICAgICAgICAgICAvLyAgICAgfSk7XG4gICAgICAgICAgICAvLyAgICAgYm9va2luZ01vZGFsLmhpZGUoKTtcbiAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0RXZlbnRGb3JtJykuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAvLyAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIC8vICAgICBjb25zdCBlZGl0RXZlbnQgPSBjYWxlbmRhci5nZXRFdmVudEJ5SWQoY3VycmVudElkKTtcbiAgICAgICAgICAgIC8vICAgICBjb25zdCBzdGFydERhdGUgPSAnMjAyMS0wNS0wMSc7XG4gICAgICAgICAgICAvLyAgICAgY29uc3QgZW5kRGF0ZSA9ICcyMDIxLTA1LTAxJztcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyAgICAgZWRpdEV2ZW50LnNldFByb3AoJ3RpdGxlJywgYm9va2luZ1RpdGxlSW5wdXQudmFsdWUpO1xuICAgICAgICAgICAgLy8gICAgIGVkaXRFdmVudC5zZXRTdGFydChzdGFydERhdGUpO1xuICAgICAgICAgICAgLy8gICAgIGVkaXRFdmVudC5zZXRFbmQoZW5kRGF0ZSk7XG4gICAgICAgICAgICAvLyAgICAgYm9va2luZ01vZGFsLmhpZGUoKTtcbiAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICB9XG5cbiAgICB9KTtcbn1cbiIsImltcG9ydCB0aW55bWNlIGZyb20gJ3RpbnltY2UnO1xuaW1wb3J0ICd0aW55bWNlL21vZGVscy9kb20nO1xuXG4vKiBEZWZhdWx0IGljb25zIGFyZSByZXF1aXJlZCBmb3IgVGlueU1DRSA1LjMgb3IgYWJvdmUgKi9cbmltcG9ydCAndGlueW1jZS9pY29ucy9kZWZhdWx0JztcblxuLyogQSB0aGVtZSBpcyBhbHNvIHJlcXVpcmVkICovXG5pbXBvcnQgJ3RpbnltY2UvdGhlbWVzL3NpbHZlcic7XG5cbi8qIEltcG9ydCB0aGUgc2tpbiAqL1xuaW1wb3J0ICd0aW55bWNlL3NraW5zL3VpL294aWRlL3NraW4uY3NzJztcblxuLyogSW1wb3J0IGNvbnRlbnQgY3NzICovXG5pbXBvcnQgJ3RpbnltY2Uvc2tpbnMvdWkvb3hpZGUvY29udGVudC5jc3MnO1xuaW1wb3J0ICd0aW55bWNlL3NraW5zL2NvbnRlbnQvZGVmYXVsdC9jb250ZW50LmNzcyc7XG5cbi8qIEltcG9ydCBwbHVnaW5zICovXG5pbXBvcnQgJ3RpbnltY2UvcGx1Z2lucy9hZHZsaXN0JztcbmltcG9ydCAndGlueW1jZS9wbHVnaW5zL2NvZGUnO1xuaW1wb3J0ICd0aW55bWNlL3BsdWdpbnMvZW1vdGljb25zJztcbmltcG9ydCAndGlueW1jZS9wbHVnaW5zL2Vtb3RpY29ucy9qcy9lbW9qaXMnO1xuaW1wb3J0ICd0aW55bWNlL3BsdWdpbnMvbGluayc7XG5pbXBvcnQgJ3RpbnltY2UvcGx1Z2lucy9saXN0cyc7XG5pbXBvcnQgJ3RpbnltY2UvcGx1Z2lucy90YWJsZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICB0aW55bWNlLmluaXQoe1xuICAgICAgICAgICAgc2VsZWN0b3I6ICcudGlueW1jZScsXG4gICAgICAgICAgICBwbHVnaW5zOiAnYWR2bGlzdCBjb2RlIGVtb3RpY29ucyBsaW5rIGxpc3RzIHRhYmxlJyxcbiAgICAgICAgICAgIHRvb2xiYXI6ICd1bmRvIHJlZG8gfCBib2xkIGl0YWxpYyByZW1vdmVmb3JtYXQgfCBidWxsaXN0IG51bWxpc3QgdGFibGUgfCBsaW5rIGVtb3RpY29ucyAnLFxuICAgICAgICAgICAgbWVudWJhcjogZmFsc2UsXG4gICAgICAgICAgICBzdGF0dXNiYXI6IGZhbHNlLFxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJGdWxsQ2FsZW5kYXIiLCJUaW55TUNFIiwiRGF0ZXBpY2tlciIsIkNob2ljZXMiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJkYXRlcGlja2VycyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWwiLCJidXR0b25DbGFzcyIsImZvcm1hdCIsImF1dG9oaWRlIiwibGFuZ3VhZ2UiLCJjaG9pY2VzSnNFbGVtZW50cyIsInNlYXJjaEVuYWJsZWQiLCJpdGVtU2VsZWN0VGV4dCIsInNob3VsZFNvcnQiLCJyZW1vdmVJdGVtQnV0dG9uIiwiQ2FsZW5kYXIiLCJkYXlHcmlkUGx1Z2luIiwidGltZUdyaWRQbHVnaW4iLCJsaXN0UGx1Z2luIiwiaW50ZXJhY3Rpb25QbHVnaW4iLCJNb2RhbCIsImNhbGVuZGFyRWwiLCJxdWVyeVNlbGVjdG9yIiwiYm9va2luZ3MiLCJKU09OIiwicGFyc2UiLCJkYXRhc2V0IiwiYm9va2luZ01vZGFsRWwiLCJnZXRFbGVtZW50QnlJZCIsImJvb2tpbmdNb2RhbCIsImJvb2tpbmdUaXRsZUlucHV0IiwiY3VycmVudElkIiwiY2FsZW5kYXIiLCJwbHVnaW5zIiwic2VsZWN0YWJsZSIsImVkaXRhYmxlIiwiaW5pdGlhbFZpZXciLCJ0aGVtZVN5c3RlbSIsImRheU1heEV2ZW50cyIsImV2ZW50cyIsImJ1dHRvblRleHQiLCJwcmV2IiwibmV4dCIsImhlYWRlclRvb2xiYXIiLCJsZWZ0IiwiY2VudGVyIiwicmlnaHQiLCJzZWxlY3QiLCJpbmZvIiwic2hvdyIsImlubmVyVGV4dCIsInN0YXJ0Iiwic3RhcnRTdHIiLCJlbmQiLCJlbmRTdHIiLCJzdGFydElucHV0IiwiZW5kSW5wdXQiLCJ2YWx1ZSIsImZvY3VzIiwiZXZlbnRSZXNpemUiLCJkYXRlQ2xpY2siLCJkYXRlIiwiZGF0ZVN0ciIsImV2ZW50Q2xpY2siLCJwYXJzZUludCIsImV2ZW50IiwiaWQiLCJ1cmwiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsInRleHQiLCJkYXRhIiwibW9kYWxUb1JlcGxhY2UiLCJvdXRlckhUTUwiLCJyZW5kZXIiLCJ0aW55bWNlIiwiaW5pdCIsInNlbGVjdG9yIiwidG9vbGJhciIsIm1lbnViYXIiLCJzdGF0dXNiYXIiXSwic291cmNlUm9vdCI6IiJ9