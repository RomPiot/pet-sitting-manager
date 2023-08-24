"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var _scripts_full_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/full_calendar */ "./assets/scripts/full_calendar.js");
/* harmony import */ var _scripts_tiny_mce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/tiny_mce */ "./assets/scripts/tiny_mce.js");
/* harmony import */ var _scripts_chart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/chart */ "./assets/scripts/chart.js");
/* harmony import */ var _eonasdan_tempus_dominus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @eonasdan/tempus-dominus */ "./node_modules/@eonasdan/tempus-dominus/dist/js/tempus-dominus.esm.js");





(0,_scripts_full_calendar__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_scripts_tiny_mce__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_scripts_chart__WEBPACK_IMPORTED_MODULE_3__["default"])();
document.addEventListener('DOMContentLoaded', function () {
  var datepickers = document.querySelectorAll('.datepicker');

  // if (datepickers) {
  //     datepickers.forEach(function (el) {
  //         new TempusDominus(el, {
  //             display: {
  //                 viewMode: 'calendar',
  //                 components: {
  //                     decades: true,
  //                     year: true,
  //                     month: true,
  //                     date: true,
  //                     hours: true,
  //                     minutes: false,
  //                     seconds: false
  //                 }
  //             }
  //         });
  //     });
  // }
});

/***/ }),

/***/ "./assets/scripts/chart.js":
/*!*********************************!*\
  !*** ./assets/scripts/chart.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var chart_js_auto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js/auto */ "./node_modules/chart.js/auto/auto.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  document.addEventListener('DOMContentLoaded', function () {
    var profitChart = document.getElementById("profitChart");
    if (profitChart) {
      console.log(profitChart);
      var dataDeclared = parseInt(profitChart.dataset.declared);
      var dataNoDeclared = parseInt(profitChart.dataset.undeclared);
      console.log(dataDeclared);
      console.log(dataNoDeclared);
      var profitData = {
        labels: ["Declared", "No declared"],
        datasets: [{
          data: [dataDeclared, dataNoDeclared],
          backgroundColor: ["#1ed7bc", "#ff9102"]
        }]
      };
      new chart_js_auto__WEBPACK_IMPORTED_MODULE_1__["default"](profitChart, {
        type: 'pie',
        data: profitData,
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top'
            },
            title: {
              display: true,
              text: 'Déclared VS No declared'
            }
          }
        }
      });
    }
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
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _fullcalendar_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fullcalendar/core */ "./node_modules/@fullcalendar/core/index.js");
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fullcalendar/daygrid */ "./node_modules/@fullcalendar/daygrid/index.js");
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fullcalendar/interaction */ "./node_modules/@fullcalendar/interaction/index.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! choices.js */ "./node_modules/choices.js/public/assets/scripts/choices.js");
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(choices_js__WEBPACK_IMPORTED_MODULE_12__);
















function updateBookingDate(info) {
  var start = info.event.startStr;
  var end = info.event.endStr;
  var eventId = info.event.id;
  var updateBookingDatesUrl = "/bookings/update-dates/" + eventId + "/" + start + "/" + end;
  fetch(updateBookingDatesUrl).then(function (response) {
    return response.json();
  }).then(function (data) {
    console.log(data);
  });
}
function createDogChoices() {
  var choicesJsElements = document.querySelectorAll('.choices-js');
  if (choicesJsElements) {
    choicesJsElements.forEach(function (el) {
      return new (choices_js__WEBPACK_IMPORTED_MODULE_12___default())(el, {
        searchEnabled: true,
        itemSelectText: '',
        shouldSort: true,
        removeItemButton: true
      });
    });
  }
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.querySelector('.full-calendar');
    if (calendarEl) {
      var bookings = JSON.parse(calendarEl.dataset.bookings);
      var bookingModalEl = document.getElementById('modal-booking');
      var bookingModal = new bootstrap__WEBPACK_IMPORTED_MODULE_11__.Modal(bookingModalEl);
      var bookingTitleInput = document.getElementById('modal-booking-label');
      var currentId = null;
      var calendar = new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_13__.Calendar(calendarEl, {
        plugins: [_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_14__["default"],
        // timeGridPlugin,
        // listPlugin,
        _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_15__["default"]],
        defaultAllDay: false,
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
          right: 'dayGridMonth'
        },
        select: function select(info) {
          createDogChoices();
          var deleteButton = document.querySelector('.bookingDelete');
          if (deleteButton) {
            deleteButton.classList.add('d-none');
          }
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
          updateBookingDate(info);
        },
        eventDrop: function eventDrop(info) {
          updateBookingDate(info);
        },
        dateClick: function dateClick(info) {
          createDogChoices();
          var deleteButton = document.querySelector('.bookingDelete');
          if (deleteButton) {
            deleteButton.classList.add('d-none');
          }
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
          var submitButton = document.getElementById('booking_submit');
          submitButton.innerText = 'Edit';
          currentId = parseInt(info.event.id);
          var bookings = JSON.parse(calendarEl.dataset.bookings);
          var deleteButton = document.querySelector('.bookingDelete');
          if (deleteButton) {
            deleteButton.classList.remove('d-none');
          }
          deleteButton.href = deleteButton.href.replace('toBeReplace', currentId);
          var editBookingUrl = "/bookings/edit/" + currentId;
          var editFormResponse = null;
          fetch(editBookingUrl).then(function (response) {
            return response.text();
          }).then(function (data) {
            editFormResponse = data;
          });
          var booking = bookings.find(function (booking) {
            return booking.id === currentId;
          });
          console.log(booking);
          var startInput = document.getElementById('booking_dateStart');
          var endInput = document.getElementById('booking_dateEnd');
          var priceInput = document.getElementById('booking_price');
          var statusInput = document.getElementById('booking_declared');
          var inventoryInput = document.getElementById('booking_inventory');
          var commentInput = document.getElementById('booking_comment');
          var backgroundColorInput = document.getElementById('booking_backgroundColor');
          var textColorInput = document.getElementById('booking_textColor');
          var bookingIdInput = document.getElementById('booking_bookingId');
          var choicesJsElements = document.querySelectorAll('.choices-js');
          var dogIdsToSelect = booking.dogs.map(function (dog) {
            return dog.id;
          });
          console.log(dogIdsToSelect);
          if (choicesJsElements) {
            choicesJsElements.forEach(function (choiceJsElement) {
              for (var i = 0; i < choiceJsElement.options.length; i++) {
                var option = choiceJsElement.options[i];
                if (dogIdsToSelect.includes(parseInt(option.value))) {
                  option.selected = true;
                }
              }
              return new (choices_js__WEBPACK_IMPORTED_MODULE_12___default())(choiceJsElement, {
                searchEnabled: true,
                itemSelectText: '',
                shouldSort: true,
                removeItemButton: true
              });
            });
          }
          startInput ? startInput.value = booking.start : null;
          endInput ? endInput.value = booking.end : null;
          priceInput ? priceInput.value = booking.price : null;
          statusInput ? statusInput.value = booking.status : null;
          inventoryInput ? inventoryInput.value = booking.inventory : null;
          commentInput ? commentInput.value = booking.comment : null;
          backgroundColorInput ? backgroundColorInput.value = booking.backgroundColor : null;
          textColorInput ? textColorInput.value = booking.textColor : null;
          bookingIdInput ? bookingIdInput.value = currentId : null;
          bookingModal.show();
          bookingModalEl.addEventListener('shown.bs.modal', function () {
            bookingTitleInput.focus();
          });
        }
      });
      calendar.render();
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_eonasdan_tempus-dominus_dist_js_tempus-dominus_esm_js-node_modules_boots-cbfa0b"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWlCLENBQUMwQixLQUFLLEVBQUU7VUFDN0IsQ0FBQyxDQUFDO1FBQ047TUFDSixDQUFDLENBQUM7TUFDRnhCLFFBQVEsQ0FBQzZELE1BQU0sRUFBRTtJQUNyQjtFQUNKLENBQUMsQ0FBQztBQUNOOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsTThCO0FBQ0Y7O0FBRTVCO0FBQytCOztBQUUvQjtBQUMrQjs7QUFFL0I7QUFDeUM7O0FBRXpDO0FBQzRDO0FBQ087O0FBRW5EO0FBQ2lDO0FBQ0g7QUFDSztBQUNVO0FBQ2Y7QUFDQztBQUNBO0FBRS9CLDZCQUFlLHNDQUFZO0VBQ3ZCOUgsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxZQUFZO0lBQ3REOEgsbURBQVksQ0FBQztNQUNURSxRQUFRLEVBQUUsVUFBVTtNQUNwQjFHLE9BQU8sRUFBRSx5Q0FBeUM7TUFDbEQyRyxPQUFPLEVBQUUsZ0ZBQWdGO01BQ3pGQyxPQUFPLEVBQUUsS0FBSztNQUNkQyxTQUFTLEVBQUU7SUFDZixDQUFDLENBQUM7RUFDTixDQUFDLENBQUM7QUFDTjs7Ozs7Ozs7Ozs7QUNuQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL2NoYXJ0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL2Z1bGxfY2FsZW5kYXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvdGlueV9tY2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuc2NzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vc3R5bGVzL2FwcC5zY3NzJztcbmltcG9ydCBGdWxsQ2FsZW5kYXIgZnJvbSBcIi4vc2NyaXB0cy9mdWxsX2NhbGVuZGFyXCI7XG5pbXBvcnQgVGlueU1DRSBmcm9tIFwiLi9zY3JpcHRzL3RpbnlfbWNlXCI7XG5pbXBvcnQgQ2hhcnRzIGZyb20gXCIuL3NjcmlwdHMvY2hhcnRcIlxuaW1wb3J0IHtUZW1wdXNEb21pbnVzfSBmcm9tICdAZW9uYXNkYW4vdGVtcHVzLWRvbWludXMnO1xuXG5cbkZ1bGxDYWxlbmRhcigpO1xuVGlueU1DRSgpO1xuQ2hhcnRzKCk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgZGF0ZXBpY2tlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGF0ZXBpY2tlcicpO1xuXG4gICAgLy8gaWYgKGRhdGVwaWNrZXJzKSB7XG4gICAgLy8gICAgIGRhdGVwaWNrZXJzLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgLy8gICAgICAgICBuZXcgVGVtcHVzRG9taW51cyhlbCwge1xuICAgIC8vICAgICAgICAgICAgIGRpc3BsYXk6IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgdmlld01vZGU6ICdjYWxlbmRhcicsXG4gICAgLy8gICAgICAgICAgICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGRlY2FkZXM6IHRydWUsXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB5ZWFyOiB0cnVlLFxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgbW9udGg6IHRydWUsXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBkYXRlOiB0cnVlLFxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgaG91cnM6IHRydWUsXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBtaW51dGVzOiBmYWxzZSxcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHNlY29uZHM6IGZhbHNlXG4gICAgLy8gICAgICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICB9KTtcbiAgICAvLyAgICAgfSk7XG4gICAgLy8gfVxufSk7XG5cbiIsImltcG9ydCBDaGFydCBmcm9tICdjaGFydC5qcy9hdXRvJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgcHJvZml0Q2hhcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2ZpdENoYXJ0XCIpO1xuXG4gICAgICAgIGlmIChwcm9maXRDaGFydCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocHJvZml0Q2hhcnQpXG5cbiAgICAgICAgICAgIGNvbnN0IGRhdGFEZWNsYXJlZCA9IHBhcnNlSW50KHByb2ZpdENoYXJ0LmRhdGFzZXQuZGVjbGFyZWQpO1xuICAgICAgICAgICAgY29uc3QgZGF0YU5vRGVjbGFyZWQgPSBwYXJzZUludChwcm9maXRDaGFydC5kYXRhc2V0LnVuZGVjbGFyZWQpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YURlY2xhcmVkKVxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YU5vRGVjbGFyZWQpXG5cblxuICAgICAgICAgICAgdmFyIHByb2ZpdERhdGEgPSB7XG4gICAgICAgICAgICAgICAgbGFiZWxzOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiRGVjbGFyZWRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJObyBkZWNsYXJlZFwiLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgZGF0YXNldHM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogW2RhdGFEZWNsYXJlZCwgZGF0YU5vRGVjbGFyZWRdLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIjMWVkN2JjXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIjZmY5MTAyXCIsXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIG5ldyBDaGFydChwcm9maXRDaGFydCwge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdwaWUnLFxuICAgICAgICAgICAgICAgIGRhdGE6IHByb2ZpdERhdGEsXG4gICAgICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBwbHVnaW5zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3RvcCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdEw6ljbGFyZWQgVlMgTm8gZGVjbGFyZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgIH0pO1xuXG59XG4iLCJpbXBvcnQge0NhbGVuZGFyfSBmcm9tICdAZnVsbGNhbGVuZGFyL2NvcmUnO1xuaW1wb3J0IGRheUdyaWRQbHVnaW4gZnJvbSAnQGZ1bGxjYWxlbmRhci9kYXlncmlkJztcbmltcG9ydCBpbnRlcmFjdGlvblBsdWdpbiBmcm9tICdAZnVsbGNhbGVuZGFyL2ludGVyYWN0aW9uJztcbmltcG9ydCB7TW9kYWx9IGZyb20gJ2Jvb3RzdHJhcCc7XG5pbXBvcnQgQ2hvaWNlcyBmcm9tIFwiY2hvaWNlcy5qc1wiO1xuXG5mdW5jdGlvbiB1cGRhdGVCb29raW5nRGF0ZShpbmZvKSB7XG4gICAgY29uc3Qgc3RhcnQgPSBpbmZvLmV2ZW50LnN0YXJ0U3RyO1xuICAgIGNvbnN0IGVuZCA9IGluZm8uZXZlbnQuZW5kU3RyO1xuICAgIGNvbnN0IGV2ZW50SWQgPSBpbmZvLmV2ZW50LmlkO1xuXG4gICAgY29uc3QgdXBkYXRlQm9va2luZ0RhdGVzVXJsID0gXCIvYm9va2luZ3MvdXBkYXRlLWRhdGVzL1wiICsgZXZlbnRJZCArIFwiL1wiICsgc3RhcnQgKyBcIi9cIiArIGVuZDtcbiAgICBmZXRjaCh1cGRhdGVCb29raW5nRGF0ZXNVcmwpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICB9KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRG9nQ2hvaWNlcygpIHtcbiAgICBjb25zdCBjaG9pY2VzSnNFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaG9pY2VzLWpzJyk7XG4gICAgaWYgKGNob2ljZXNKc0VsZW1lbnRzKSB7XG4gICAgICAgIGNob2ljZXNKc0VsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IENob2ljZXMoZWwsIHtcbiAgICAgICAgICAgICAgICBzZWFyY2hFbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIGl0ZW1TZWxlY3RUZXh0OiAnJyxcbiAgICAgICAgICAgICAgICBzaG91bGRTb3J0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHJlbW92ZUl0ZW1CdXR0b246IHRydWUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgY2FsZW5kYXJFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mdWxsLWNhbGVuZGFyJyk7XG4gICAgICAgIGlmIChjYWxlbmRhckVsKSB7XG4gICAgICAgICAgICBjb25zdCBib29raW5ncyA9IEpTT04ucGFyc2UoY2FsZW5kYXJFbC5kYXRhc2V0LmJvb2tpbmdzKTtcblxuICAgICAgICAgICAgY29uc3QgYm9va2luZ01vZGFsRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtYm9va2luZycpO1xuICAgICAgICAgICAgY29uc3QgYm9va2luZ01vZGFsID0gbmV3IE1vZGFsKGJvb2tpbmdNb2RhbEVsKTtcbiAgICAgICAgICAgIGNvbnN0IGJvb2tpbmdUaXRsZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsLWJvb2tpbmctbGFiZWwnKTtcblxuICAgICAgICAgICAgbGV0IGN1cnJlbnRJZCA9IG51bGw7XG5cbiAgICAgICAgICAgIGNvbnN0IGNhbGVuZGFyID0gbmV3IENhbGVuZGFyKGNhbGVuZGFyRWwsIHtcbiAgICAgICAgICAgICAgICBwbHVnaW5zOiBbXG4gICAgICAgICAgICAgICAgICAgIGRheUdyaWRQbHVnaW4sXG4gICAgICAgICAgICAgICAgICAgIC8vIHRpbWVHcmlkUGx1Z2luLFxuICAgICAgICAgICAgICAgICAgICAvLyBsaXN0UGx1Z2luLFxuICAgICAgICAgICAgICAgICAgICBpbnRlcmFjdGlvblBsdWdpblxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgZGVmYXVsdEFsbERheTogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2VsZWN0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBpbml0aWFsVmlldzogJ2RheUdyaWRNb250aCcsXG4gICAgICAgICAgICAgICAgdGhlbWVTeXN0ZW06ICdib290c3RyYXAnLFxuICAgICAgICAgICAgICAgIGRheU1heEV2ZW50czogdHJ1ZSxcbiAgICAgICAgICAgICAgICBldmVudHM6IGJvb2tpbmdzLFxuICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ6IHtcbiAgICAgICAgICAgICAgICAgICAgcHJldjogJ1ByZXZpb3VzJyxcbiAgICAgICAgICAgICAgICAgICAgbmV4dDogJ05leHQnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBoZWFkZXJUb29sYmFyOiB7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6ICdwcmV2LG5leHQgdG9kYXknLFxuICAgICAgICAgICAgICAgICAgICBjZW50ZXI6ICd0aXRsZScsXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAnZGF5R3JpZE1vbnRoJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2VsZWN0OiAoaW5mbykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjcmVhdGVEb2dDaG9pY2VzKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib29raW5nRGVsZXRlJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZWxldGVCdXR0b24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGJvb2tpbmdNb2RhbC5zaG93KCk7XG4gICAgICAgICAgICAgICAgICAgIGJvb2tpbmdUaXRsZUlucHV0LmlubmVyVGV4dCA9ICdOZXcgYm9va2luZyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gaW5mby5zdGFydFN0cjtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZW5kID0gaW5mby5lbmRTdHI7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhcnRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib29raW5nX2RhdGVTdGFydCcpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbmRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib29raW5nX2RhdGVFbmQnKTtcblxuICAgICAgICAgICAgICAgICAgICBzdGFydElucHV0LnZhbHVlID0gc3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgIGVuZElucHV0LnZhbHVlID0gZW5kO1xuXG4gICAgICAgICAgICAgICAgICAgIGJvb2tpbmdNb2RhbEVsLmFkZEV2ZW50TGlzdGVuZXIoJ3Nob3duLmJzLm1vZGFsJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9va2luZ1RpdGxlSW5wdXQuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBldmVudFJlc2l6ZTogKGluZm8pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlQm9va2luZ0RhdGUoaW5mbyk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBldmVudERyb3A6IChpbmZvKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUJvb2tpbmdEYXRlKGluZm8pO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZGF0ZUNsaWNrOiBmdW5jdGlvbiAoaW5mbykge1xuICAgICAgICAgICAgICAgICAgICBjcmVhdGVEb2dDaG9pY2VzKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib29raW5nRGVsZXRlJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZWxldGVCdXR0b24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRlID0gaW5mby5kYXRlU3RyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9va2luZ19kYXRlU3RhcnQnKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZW5kSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9va2luZ19kYXRlRW5kJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgc3RhcnRJbnB1dC52YWx1ZSA9IGRhdGU7XG4gICAgICAgICAgICAgICAgICAgIGVuZElucHV0LnZhbHVlID0gZGF0ZTtcblxuICAgICAgICAgICAgICAgICAgICBib29raW5nTW9kYWwuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICBib29raW5nVGl0bGVJbnB1dC5pbm5lclRleHQgPSAnTmV3IGJvb2tpbmcnO1xuXG4gICAgICAgICAgICAgICAgICAgIGJvb2tpbmdNb2RhbEVsLmFkZEV2ZW50TGlzdGVuZXIoJ3Nob3duLmJzLm1vZGFsJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9va2luZ1RpdGxlSW5wdXQuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBldmVudENsaWNrOiBmdW5jdGlvbiAoaW5mbykge1xuICAgICAgICAgICAgICAgICAgICBib29raW5nVGl0bGVJbnB1dC5pbm5lclRleHQgPSAnRWRpdCBib29raW5nJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jvb2tpbmdfc3VibWl0Jyk7XG4gICAgICAgICAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbi5pbm5lclRleHQgPSAnRWRpdCc7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRJZCA9IHBhcnNlSW50KGluZm8uZXZlbnQuaWQpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJvb2tpbmdzID0gSlNPTi5wYXJzZShjYWxlbmRhckVsLmRhdGFzZXQuYm9va2luZ3MpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9va2luZ0RlbGV0ZScpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGVsZXRlQnV0dG9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlQnV0dG9uLmhyZWYgPSBkZWxldGVCdXR0b24uaHJlZi5yZXBsYWNlKCd0b0JlUmVwbGFjZScsIGN1cnJlbnRJZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZWRpdEJvb2tpbmdVcmwgPSBcIi9ib29raW5ncy9lZGl0L1wiICsgY3VycmVudElkO1xuICAgICAgICAgICAgICAgICAgICBsZXQgZWRpdEZvcm1SZXNwb25zZSA9IG51bGw7XG5cbiAgICAgICAgICAgICAgICAgICAgZmV0Y2goZWRpdEJvb2tpbmdVcmwpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS50ZXh0KCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRpdEZvcm1SZXNwb25zZSA9IGRhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBib29raW5nID0gYm9va2luZ3MuZmluZChib29raW5nID0+IGJvb2tpbmcuaWQgPT09IGN1cnJlbnRJZCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGJvb2tpbmcpXG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhcnRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib29raW5nX2RhdGVTdGFydCcpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbmRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib29raW5nX2RhdGVFbmQnKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJpY2VJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib29raW5nX3ByaWNlJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXR1c0lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jvb2tpbmdfZGVjbGFyZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW52ZW50b3J5SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9va2luZ19pbnZlbnRvcnknKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tbWVudElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jvb2tpbmdfY29tbWVudCcpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBiYWNrZ3JvdW5kQ29sb3JJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib29raW5nX2JhY2tncm91bmRDb2xvcicpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXh0Q29sb3JJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib29raW5nX3RleHRDb2xvcicpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBib29raW5nSWRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib29raW5nX2Jvb2tpbmdJZCcpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNob2ljZXNKc0VsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNob2ljZXMtanMnKTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkb2dJZHNUb1NlbGVjdCA9IGJvb2tpbmcuZG9ncy5tYXAoZG9nID0+IGRvZy5pZCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRvZ0lkc1RvU2VsZWN0KTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoY2hvaWNlc0pzRWxlbWVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNob2ljZXNKc0VsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGNob2ljZUpzRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hvaWNlSnNFbGVtZW50Lm9wdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gY2hvaWNlSnNFbGVtZW50Lm9wdGlvbnNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkb2dJZHNUb1NlbGVjdC5pbmNsdWRlcyhwYXJzZUludChvcHRpb24udmFsdWUpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ2hvaWNlcyhjaG9pY2VKc0VsZW1lbnQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoRW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVNlbGVjdFRleHQ6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG91bGRTb3J0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVJdGVtQnV0dG9uOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBzdGFydElucHV0ID8gc3RhcnRJbnB1dC52YWx1ZSA9IGJvb2tpbmcuc3RhcnQgOiBudWxsO1xuICAgICAgICAgICAgICAgICAgICBlbmRJbnB1dCA/IGVuZElucHV0LnZhbHVlID0gYm9va2luZy5lbmQgOiBudWxsO1xuICAgICAgICAgICAgICAgICAgICBwcmljZUlucHV0ID8gcHJpY2VJbnB1dC52YWx1ZSA9IGJvb2tpbmcucHJpY2UgOiBudWxsO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXNJbnB1dCA/IHN0YXR1c0lucHV0LnZhbHVlID0gYm9va2luZy5zdGF0dXMgOiBudWxsO1xuICAgICAgICAgICAgICAgICAgICBpbnZlbnRvcnlJbnB1dCA/IGludmVudG9yeUlucHV0LnZhbHVlID0gYm9va2luZy5pbnZlbnRvcnkgOiBudWxsO1xuICAgICAgICAgICAgICAgICAgICBjb21tZW50SW5wdXQgPyBjb21tZW50SW5wdXQudmFsdWUgPSBib29raW5nLmNvbW1lbnQgOiBudWxsO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3JJbnB1dCA/IGJhY2tncm91bmRDb2xvcklucHV0LnZhbHVlID0gYm9va2luZy5iYWNrZ3JvdW5kQ29sb3IgOiBudWxsO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0Q29sb3JJbnB1dCA/IHRleHRDb2xvcklucHV0LnZhbHVlID0gYm9va2luZy50ZXh0Q29sb3IgOiBudWxsO1xuICAgICAgICAgICAgICAgICAgICBib29raW5nSWRJbnB1dCA/IGJvb2tpbmdJZElucHV0LnZhbHVlID0gY3VycmVudElkIDogbnVsbDtcblxuICAgICAgICAgICAgICAgICAgICBib29raW5nTW9kYWwuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICBib29raW5nTW9kYWxFbC5hZGRFdmVudExpc3RlbmVyKCdzaG93bi5icy5tb2RhbCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvb2tpbmdUaXRsZUlucHV0LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY2FsZW5kYXIucmVuZGVyKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsImltcG9ydCB0aW55bWNlIGZyb20gJ3RpbnltY2UnO1xuaW1wb3J0ICd0aW55bWNlL21vZGVscy9kb20nO1xuXG4vKiBEZWZhdWx0IGljb25zIGFyZSByZXF1aXJlZCBmb3IgVGlueU1DRSA1LjMgb3IgYWJvdmUgKi9cbmltcG9ydCAndGlueW1jZS9pY29ucy9kZWZhdWx0JztcblxuLyogQSB0aGVtZSBpcyBhbHNvIHJlcXVpcmVkICovXG5pbXBvcnQgJ3RpbnltY2UvdGhlbWVzL3NpbHZlcic7XG5cbi8qIEltcG9ydCB0aGUgc2tpbiAqL1xuaW1wb3J0ICd0aW55bWNlL3NraW5zL3VpL294aWRlL3NraW4uY3NzJztcblxuLyogSW1wb3J0IGNvbnRlbnQgY3NzICovXG5pbXBvcnQgJ3RpbnltY2Uvc2tpbnMvdWkvb3hpZGUvY29udGVudC5jc3MnO1xuaW1wb3J0ICd0aW55bWNlL3NraW5zL2NvbnRlbnQvZGVmYXVsdC9jb250ZW50LmNzcyc7XG5cbi8qIEltcG9ydCBwbHVnaW5zICovXG5pbXBvcnQgJ3RpbnltY2UvcGx1Z2lucy9hZHZsaXN0JztcbmltcG9ydCAndGlueW1jZS9wbHVnaW5zL2NvZGUnO1xuaW1wb3J0ICd0aW55bWNlL3BsdWdpbnMvZW1vdGljb25zJztcbmltcG9ydCAndGlueW1jZS9wbHVnaW5zL2Vtb3RpY29ucy9qcy9lbW9qaXMnO1xuaW1wb3J0ICd0aW55bWNlL3BsdWdpbnMvbGluayc7XG5pbXBvcnQgJ3RpbnltY2UvcGx1Z2lucy9saXN0cyc7XG5pbXBvcnQgJ3RpbnltY2UvcGx1Z2lucy90YWJsZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICB0aW55bWNlLmluaXQoe1xuICAgICAgICAgICAgc2VsZWN0b3I6ICcudGlueW1jZScsXG4gICAgICAgICAgICBwbHVnaW5zOiAnYWR2bGlzdCBjb2RlIGVtb3RpY29ucyBsaW5rIGxpc3RzIHRhYmxlJyxcbiAgICAgICAgICAgIHRvb2xiYXI6ICd1bmRvIHJlZG8gfCBib2xkIGl0YWxpYyByZW1vdmVmb3JtYXQgfCBidWxsaXN0IG51bWxpc3QgdGFibGUgfCBsaW5rIGVtb3RpY29ucyAnLFxuICAgICAgICAgICAgbWVudWJhcjogZmFsc2UsXG4gICAgICAgICAgICBzdGF0dXNiYXI6IGZhbHNlLFxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJGdWxsQ2FsZW5kYXIiLCJUaW55TUNFIiwiQ2hhcnRzIiwiVGVtcHVzRG9taW51cyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImRhdGVwaWNrZXJzIiwicXVlcnlTZWxlY3RvckFsbCIsIkNoYXJ0IiwicHJvZml0Q2hhcnQiLCJnZXRFbGVtZW50QnlJZCIsImNvbnNvbGUiLCJsb2ciLCJkYXRhRGVjbGFyZWQiLCJwYXJzZUludCIsImRhdGFzZXQiLCJkZWNsYXJlZCIsImRhdGFOb0RlY2xhcmVkIiwidW5kZWNsYXJlZCIsInByb2ZpdERhdGEiLCJsYWJlbHMiLCJkYXRhc2V0cyIsImRhdGEiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0eXBlIiwib3B0aW9ucyIsInJlc3BvbnNpdmUiLCJwbHVnaW5zIiwibGVnZW5kIiwicG9zaXRpb24iLCJ0aXRsZSIsImRpc3BsYXkiLCJ0ZXh0IiwiQ2FsZW5kYXIiLCJkYXlHcmlkUGx1Z2luIiwiaW50ZXJhY3Rpb25QbHVnaW4iLCJNb2RhbCIsIkNob2ljZXMiLCJ1cGRhdGVCb29raW5nRGF0ZSIsImluZm8iLCJzdGFydCIsImV2ZW50Iiwic3RhcnRTdHIiLCJlbmQiLCJlbmRTdHIiLCJldmVudElkIiwiaWQiLCJ1cGRhdGVCb29raW5nRGF0ZXNVcmwiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJjcmVhdGVEb2dDaG9pY2VzIiwiY2hvaWNlc0pzRWxlbWVudHMiLCJmb3JFYWNoIiwiZWwiLCJzZWFyY2hFbmFibGVkIiwiaXRlbVNlbGVjdFRleHQiLCJzaG91bGRTb3J0IiwicmVtb3ZlSXRlbUJ1dHRvbiIsImNhbGVuZGFyRWwiLCJxdWVyeVNlbGVjdG9yIiwiYm9va2luZ3MiLCJKU09OIiwicGFyc2UiLCJib29raW5nTW9kYWxFbCIsImJvb2tpbmdNb2RhbCIsImJvb2tpbmdUaXRsZUlucHV0IiwiY3VycmVudElkIiwiY2FsZW5kYXIiLCJkZWZhdWx0QWxsRGF5Iiwic2VsZWN0YWJsZSIsImVkaXRhYmxlIiwiaW5pdGlhbFZpZXciLCJ0aGVtZVN5c3RlbSIsImRheU1heEV2ZW50cyIsImV2ZW50cyIsImJ1dHRvblRleHQiLCJwcmV2IiwibmV4dCIsImhlYWRlclRvb2xiYXIiLCJsZWZ0IiwiY2VudGVyIiwicmlnaHQiLCJzZWxlY3QiLCJkZWxldGVCdXR0b24iLCJjbGFzc0xpc3QiLCJhZGQiLCJzaG93IiwiaW5uZXJUZXh0Iiwic3RhcnRJbnB1dCIsImVuZElucHV0IiwidmFsdWUiLCJmb2N1cyIsImV2ZW50UmVzaXplIiwiZXZlbnREcm9wIiwiZGF0ZUNsaWNrIiwiZGF0ZSIsImRhdGVTdHIiLCJldmVudENsaWNrIiwic3VibWl0QnV0dG9uIiwicmVtb3ZlIiwiaHJlZiIsInJlcGxhY2UiLCJlZGl0Qm9va2luZ1VybCIsImVkaXRGb3JtUmVzcG9uc2UiLCJib29raW5nIiwiZmluZCIsInByaWNlSW5wdXQiLCJzdGF0dXNJbnB1dCIsImludmVudG9yeUlucHV0IiwiY29tbWVudElucHV0IiwiYmFja2dyb3VuZENvbG9ySW5wdXQiLCJ0ZXh0Q29sb3JJbnB1dCIsImJvb2tpbmdJZElucHV0IiwiZG9nSWRzVG9TZWxlY3QiLCJkb2dzIiwibWFwIiwiZG9nIiwiY2hvaWNlSnNFbGVtZW50IiwiaSIsImxlbmd0aCIsIm9wdGlvbiIsImluY2x1ZGVzIiwic2VsZWN0ZWQiLCJwcmljZSIsInN0YXR1cyIsImludmVudG9yeSIsImNvbW1lbnQiLCJ0ZXh0Q29sb3IiLCJyZW5kZXIiLCJ0aW55bWNlIiwiaW5pdCIsInNlbGVjdG9yIiwidG9vbGJhciIsIm1lbnViYXIiLCJzdGF0dXNiYXIiXSwic291cmNlUm9vdCI6IiJ9