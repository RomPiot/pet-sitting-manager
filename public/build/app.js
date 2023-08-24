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
/* harmony import */ var _scripts_chart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scripts/chart */ "./assets/scripts/chart.js");
/* harmony import */ var _eonasdan_tempus_dominus__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @eonasdan/tempus-dominus */ "./node_modules/@eonasdan/tempus-dominus/dist/js/tempus-dominus.esm.js");
/* harmony import */ var vanillajs_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vanillajs-datepicker */ "./node_modules/vanillajs-datepicker/js/main.js");
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! choices.js */ "./node_modules/choices.js/public/assets/scripts/choices.js");
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(choices_js__WEBPACK_IMPORTED_MODULE_9__);










(0,_scripts_full_calendar__WEBPACK_IMPORTED_MODULE_4__["default"])();
(0,_scripts_tiny_mce__WEBPACK_IMPORTED_MODULE_5__["default"])();
(0,_scripts_chart__WEBPACK_IMPORTED_MODULE_6__["default"])();
document.addEventListener('DOMContentLoaded', function () {
  var datepickers = document.querySelectorAll('.datepicker');
  if (datepickers) {
    datepickers.forEach(function (el) {
      return new vanillajs_datepicker__WEBPACK_IMPORTED_MODULE_8__.Datepicker(el, {
        buttonClass: 'btn',
        format: 'yyyy-mm-dd',
        autohide: true,
        language: 'fr-FR'
      });
    });
  }

  // select form name owner
  var formOwner = document.querySelector('form[name="owner"]');
  if (formOwner) {
    var choicesJsElements = document.querySelectorAll('.choices-js');
    console.log(choicesJsElements);
    if (choicesJsElements) {
      choicesJsElements.forEach(function (el) {
        return new (choices_js__WEBPACK_IMPORTED_MODULE_9___default())(el, {
          searchEnabled: true,
          itemSelectText: '',
          shouldSort: true,
          removeItemButton: true
        });
      });
    }
  }

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
/* harmony import */ var _fullcalendar_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fullcalendar/core */ "./node_modules/@fullcalendar/core/index.js");
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fullcalendar/daygrid */ "./node_modules/@fullcalendar/daygrid/index.js");
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fullcalendar/interaction */ "./node_modules/@fullcalendar/interaction/index.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! choices.js */ "./node_modules/choices.js/public/assets/scripts/choices.js");
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(choices_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _tiny_mce__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tiny_mce */ "./assets/scripts/tiny_mce.js");

















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
      var calendar = new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_14__.Calendar(calendarEl, {
        plugins: [_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_15__["default"],
        // timeGridPlugin,
        // listPlugin,
        _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_16__["default"]],
        displayEventTime: false,
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_eonasdan_tempus-dominus_dist_js_tempus-dominus_esm_js-node_modules_boots-0da450"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEyQjtBQUN3QjtBQUNWO0FBQ0w7QUFDbUI7QUFDUDtBQUNmO0FBRWpDQSxrRUFBWSxFQUFFO0FBQ2RDLDZEQUFPLEVBQUU7QUFDVEMsMERBQU0sRUFBRTtBQUVSSSxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQVk7RUFDdEQsSUFBTUMsV0FBVyxHQUFHRixRQUFRLENBQUNHLGdCQUFnQixDQUFDLGFBQWEsQ0FBQztFQUM1RCxJQUFJRCxXQUFXLEVBQUU7SUFDYkEsV0FBVyxDQUFDRSxPQUFPLENBQUMsVUFBVUMsRUFBRSxFQUFFO01BQzlCLE9BQU8sSUFBSVAsNERBQVUsQ0FBQ08sRUFBRSxFQUFFO1FBQ3RCQyxXQUFXLEVBQUUsS0FBSztRQUNsQkMsTUFBTSxFQUFFLFlBQVk7UUFDcEJDLFFBQVEsRUFBRSxJQUFJO1FBQ2RDLFFBQVEsRUFBRTtNQUNkLENBQUMsQ0FBQztJQUNOLENBQUMsQ0FBQztFQUNOOztFQUVBO0VBQ0EsSUFBTUMsU0FBUyxHQUFHVixRQUFRLENBQUNXLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQztFQUM5RCxJQUFJRCxTQUFTLEVBQUU7SUFDWCxJQUFNRSxpQkFBaUIsR0FBR1osUUFBUSxDQUFDRyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUM7SUFDbEVVLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixpQkFBaUIsQ0FBQztJQUM5QixJQUFJQSxpQkFBaUIsRUFBRTtNQUNuQkEsaUJBQWlCLENBQUNSLE9BQU8sQ0FBQyxVQUFVQyxFQUFFLEVBQUU7UUFDcEMsT0FBTyxJQUFJTixtREFBTyxDQUFDTSxFQUFFLEVBQUU7VUFDbkJVLGFBQWEsRUFBRSxJQUFJO1VBQ25CQyxjQUFjLEVBQUUsRUFBRTtVQUNsQkMsVUFBVSxFQUFFLElBQUk7VUFDaEJDLGdCQUFnQixFQUFFO1FBQ3RCLENBQUMsQ0FBQztNQUNOLENBQUMsQ0FBQztJQUNOO0VBQ0o7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0FBRUosQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RCtCO0FBRWpDLDZCQUFlLHNDQUFZO0VBQ3ZCbEIsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxZQUFZO0lBQ3RELElBQU1tQixXQUFXLEdBQUdwQixRQUFRLENBQUNxQixjQUFjLENBQUMsYUFBYSxDQUFDO0lBRTFELElBQUlELFdBQVcsRUFBRTtNQUNiUCxPQUFPLENBQUNDLEdBQUcsQ0FBQ00sV0FBVyxDQUFDO01BRXhCLElBQU1FLFlBQVksR0FBR0MsUUFBUSxDQUFDSCxXQUFXLENBQUNJLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDO01BQzNELElBQU1DLGNBQWMsR0FBR0gsUUFBUSxDQUFDSCxXQUFXLENBQUNJLE9BQU8sQ0FBQ0csVUFBVSxDQUFDO01BQy9EZCxPQUFPLENBQUNDLEdBQUcsQ0FBQ1EsWUFBWSxDQUFDO01BQ3pCVCxPQUFPLENBQUNDLEdBQUcsQ0FBQ1ksY0FBYyxDQUFDO01BRzNCLElBQUlFLFVBQVUsR0FBRztRQUNiQyxNQUFNLEVBQUUsQ0FDSixVQUFVLEVBQ1YsYUFBYSxDQUNoQjtRQUNEQyxRQUFRLEVBQUUsQ0FDTjtVQUNJQyxJQUFJLEVBQUUsQ0FBQ1QsWUFBWSxFQUFFSSxjQUFjLENBQUM7VUFDcENNLGVBQWUsRUFBRSxDQUNiLFNBQVMsRUFDVCxTQUFTO1FBR2pCLENBQUM7TUFDVCxDQUFDO01BRUQsSUFBSWIscURBQUssQ0FBQ0MsV0FBVyxFQUFFO1FBQ25CYSxJQUFJLEVBQUUsS0FBSztRQUNYRixJQUFJLEVBQUVILFVBQVU7UUFDaEJNLE9BQU8sRUFBRTtVQUNMQyxVQUFVLEVBQUUsSUFBSTtVQUNoQkMsT0FBTyxFQUFFO1lBQ0xDLE1BQU0sRUFBRTtjQUNKQyxRQUFRLEVBQUU7WUFDZCxDQUFDO1lBQ0RDLEtBQUssRUFBRTtjQUNIQyxPQUFPLEVBQUUsSUFBSTtjQUNiQyxJQUFJLEVBQUU7WUFDVjtVQUNKO1FBQ0o7TUFDSixDQUFDLENBQUM7SUFDTjtFQUVKLENBQUMsQ0FBQztBQUVOOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRDRDO0FBQ007QUFDUTtBQUMxQjtBQUNDO0FBQ0E7QUFFakMsU0FBU0ssaUJBQWlCQSxDQUFDQyxJQUFJLEVBQUU7RUFDN0IsSUFBTUMsS0FBSyxHQUFHRCxJQUFJLENBQUNFLEtBQUssQ0FBQ0MsUUFBUTtFQUNqQyxJQUFNQyxHQUFHLEdBQUdKLElBQUksQ0FBQ0UsS0FBSyxDQUFDRyxNQUFNO0VBQzdCLElBQU1DLE9BQU8sR0FBR04sSUFBSSxDQUFDRSxLQUFLLENBQUNLLEVBQUU7RUFFN0IsSUFBTUMscUJBQXFCLEdBQUcseUJBQXlCLEdBQUdGLE9BQU8sR0FBRyxHQUFHLEdBQUdMLEtBQUssR0FBRyxHQUFHLEdBQUdHLEdBQUc7RUFDM0ZLLEtBQUssQ0FBQ0QscUJBQXFCLENBQUMsQ0FDdkJFLElBQUksQ0FBQyxVQUFBQyxRQUFRO0lBQUEsT0FBSUEsUUFBUSxDQUFDQyxJQUFJLEVBQUU7RUFBQSxFQUFDLENBQ2pDRixJQUFJLENBQUMsVUFBQTFCLElBQUksRUFBSTtJQUNWbEIsT0FBTyxDQUFDQyxHQUFHLENBQUNpQixJQUFJLENBQUM7RUFDckIsQ0FBQyxDQUFDO0FBQ1Y7QUFFQSxTQUFTNkIsZ0JBQWdCQSxDQUFBLEVBQUc7RUFDeEIsSUFBTWhELGlCQUFpQixHQUFHWixRQUFRLENBQUNHLGdCQUFnQixDQUFDLGFBQWEsQ0FBQztFQUNsRSxJQUFJUyxpQkFBaUIsRUFBRTtJQUNuQkEsaUJBQWlCLENBQUNSLE9BQU8sQ0FBQyxVQUFVQyxFQUFFLEVBQUU7TUFDcEMsT0FBTyxJQUFJTixvREFBTyxDQUFDTSxFQUFFLEVBQUU7UUFDbkJVLGFBQWEsRUFBRSxJQUFJO1FBQ25CQyxjQUFjLEVBQUUsRUFBRTtRQUNsQkMsVUFBVSxFQUFFLElBQUk7UUFDaEJDLGdCQUFnQixFQUFFO01BQ3RCLENBQUMsQ0FBQztJQUNOLENBQUMsQ0FBQztFQUNOO0FBQ0o7QUFFQSw2QkFBZSxzQ0FBWTtFQUN2QmxCLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsWUFBWTtJQUN0RCxJQUFNNEQsVUFBVSxHQUFHN0QsUUFBUSxDQUFDVyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7SUFDM0QsSUFBSWtELFVBQVUsRUFBRTtNQUNaLElBQU1DLFFBQVEsR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNILFVBQVUsQ0FBQ3JDLE9BQU8sQ0FBQ3NDLFFBQVEsQ0FBQztNQUV4RCxJQUFNRyxjQUFjLEdBQUdqRSxRQUFRLENBQUNxQixjQUFjLENBQUMsZUFBZSxDQUFDO01BQy9ELElBQU02QyxZQUFZLEdBQUcsSUFBSXJCLDZDQUFLLENBQUNvQixjQUFjLENBQUM7TUFDOUMsSUFBTUUsaUJBQWlCLEdBQUduRSxRQUFRLENBQUNxQixjQUFjLENBQUMscUJBQXFCLENBQUM7TUFFeEUsSUFBSStDLFNBQVMsR0FBRyxJQUFJO01BRXBCLElBQU1DLFFBQVEsR0FBRyxJQUFJM0IseURBQVEsQ0FBQ21CLFVBQVUsRUFBRTtRQUN0Q3pCLE9BQU8sRUFBRSxDQUNMTyw4REFBYTtRQUNiO1FBQ0E7UUFDQUMsa0VBQWlCLENBQ3BCO1FBQ0QwQixnQkFBZ0IsRUFBRSxLQUFLO1FBQ3ZCQyxhQUFhLEVBQUUsS0FBSztRQUNwQkMsVUFBVSxFQUFFLElBQUk7UUFDaEJDLFFBQVEsRUFBRSxJQUFJO1FBQ2RDLFdBQVcsRUFBRSxjQUFjO1FBQzNCQyxXQUFXLEVBQUUsV0FBVztRQUN4QkMsWUFBWSxFQUFFLElBQUk7UUFDbEJDLE1BQU0sRUFBRWYsUUFBUTtRQUNoQmdCLFVBQVUsRUFBRTtVQUNSQyxJQUFJLEVBQUUsVUFBVTtVQUNoQkMsSUFBSSxFQUFFO1FBQ1YsQ0FBQztRQUNEQyxhQUFhLEVBQUU7VUFDWEMsSUFBSSxFQUFFLGlCQUFpQjtVQUN2QkMsTUFBTSxFQUFFLE9BQU87VUFDZkMsS0FBSyxFQUFFO1FBQ1gsQ0FBQztRQUNEQyxNQUFNLEVBQUUsU0FBQUEsT0FBQ3RDLElBQUksRUFBSztVQUNkYSxnQkFBZ0IsRUFBRTtVQUNsQixJQUFNMEIsWUFBWSxHQUFHdEYsUUFBUSxDQUFDVyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7VUFDN0QsSUFBSTJFLFlBQVksRUFBRTtZQUNkQSxZQUFZLENBQUNDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsQ0FBQztVQUN4QztVQUVBdEIsWUFBWSxDQUFDdUIsSUFBSSxFQUFFO1VBQ25CdEIsaUJBQWlCLENBQUN1QixTQUFTLEdBQUcsYUFBYTtVQUMzQyxJQUFNMUMsS0FBSyxHQUFHRCxJQUFJLENBQUNHLFFBQVE7VUFDM0IsSUFBTUMsR0FBRyxHQUFHSixJQUFJLENBQUNLLE1BQU07VUFFdkIsSUFBTXVDLFVBQVUsR0FBRzNGLFFBQVEsQ0FBQ3FCLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQztVQUMvRCxJQUFNdUUsUUFBUSxHQUFHNUYsUUFBUSxDQUFDcUIsY0FBYyxDQUFDLGlCQUFpQixDQUFDO1VBRTNEc0UsVUFBVSxDQUFDRSxLQUFLLEdBQUc3QyxLQUFLO1VBQ3hCNEMsUUFBUSxDQUFDQyxLQUFLLEdBQUcxQyxHQUFHO1VBRXBCYyxjQUFjLENBQUNoRSxnQkFBZ0IsQ0FBQyxnQkFBZ0IsRUFBRSxZQUFZO1lBQzFEa0UsaUJBQWlCLENBQUMyQixLQUFLLEVBQUU7VUFDN0IsQ0FBQyxDQUFDO1FBQ04sQ0FBQztRQUNEQyxXQUFXLEVBQUUsU0FBQUEsWUFBQ2hELElBQUksRUFBSztVQUNuQkQsaUJBQWlCLENBQUNDLElBQUksQ0FBQztRQUMzQixDQUFDO1FBQ0RpRCxTQUFTLEVBQUUsU0FBQUEsVUFBQ2pELElBQUksRUFBSztVQUNqQkQsaUJBQWlCLENBQUNDLElBQUksQ0FBQztRQUMzQixDQUFDO1FBQ0RrRCxTQUFTLEVBQUUsU0FBQUEsVUFBVWxELElBQUksRUFBRTtVQUN2QmEsZ0JBQWdCLEVBQUU7VUFDbEIsSUFBTTBCLFlBQVksR0FBR3RGLFFBQVEsQ0FBQ1csYUFBYSxDQUFDLGdCQUFnQixDQUFDO1VBQzdELElBQUkyRSxZQUFZLEVBQUU7WUFDZEEsWUFBWSxDQUFDQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxRQUFRLENBQUM7VUFDeEM7VUFDQSxJQUFNVSxJQUFJLEdBQUduRCxJQUFJLENBQUNvRCxPQUFPO1VBQ3pCLElBQU1SLFVBQVUsR0FBRzNGLFFBQVEsQ0FBQ3FCLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQztVQUMvRCxJQUFNdUUsUUFBUSxHQUFHNUYsUUFBUSxDQUFDcUIsY0FBYyxDQUFDLGlCQUFpQixDQUFDO1VBRTNEc0UsVUFBVSxDQUFDRSxLQUFLLEdBQUdLLElBQUk7VUFDdkJOLFFBQVEsQ0FBQ0MsS0FBSyxHQUFHSyxJQUFJO1VBRXJCaEMsWUFBWSxDQUFDdUIsSUFBSSxFQUFFO1VBQ25CdEIsaUJBQWlCLENBQUN1QixTQUFTLEdBQUcsYUFBYTtVQUUzQ3pCLGNBQWMsQ0FBQ2hFLGdCQUFnQixDQUFDLGdCQUFnQixFQUFFLFlBQVk7WUFDMURrRSxpQkFBaUIsQ0FBQzJCLEtBQUssRUFBRTtVQUM3QixDQUFDLENBQUM7UUFDTixDQUFDO1FBQ0RNLFVBQVUsRUFBRSxTQUFBQSxXQUFVckQsSUFBSSxFQUFFO1VBQ3hCb0IsaUJBQWlCLENBQUN1QixTQUFTLEdBQUcsY0FBYztVQUM1QyxJQUFNVyxZQUFZLEdBQUdyRyxRQUFRLENBQUNxQixjQUFjLENBQUMsZ0JBQWdCLENBQUM7VUFDOURnRixZQUFZLENBQUNYLFNBQVMsR0FBRyxNQUFNO1VBQy9CdEIsU0FBUyxHQUFHN0MsUUFBUSxDQUFDd0IsSUFBSSxDQUFDRSxLQUFLLENBQUNLLEVBQUUsQ0FBQztVQUVuQyxJQUFNUSxRQUFRLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDSCxVQUFVLENBQUNyQyxPQUFPLENBQUNzQyxRQUFRLENBQUM7VUFDeEQsSUFBTXdCLFlBQVksR0FBR3RGLFFBQVEsQ0FBQ1csYUFBYSxDQUFDLGdCQUFnQixDQUFDO1VBQzdELElBQUkyRSxZQUFZLEVBQUU7WUFDZEEsWUFBWSxDQUFDQyxTQUFTLENBQUNlLE1BQU0sQ0FBQyxRQUFRLENBQUM7VUFDM0M7VUFDQWhCLFlBQVksQ0FBQ2lCLElBQUksR0FBR2pCLFlBQVksQ0FBQ2lCLElBQUksQ0FBQ0MsT0FBTyxDQUFDLGFBQWEsRUFBRXBDLFNBQVMsQ0FBQztVQUV2RSxJQUFNcUMsY0FBYyxHQUFHLGlCQUFpQixHQUFHckMsU0FBUztVQUNwRCxJQUFJc0MsZ0JBQWdCLEdBQUcsSUFBSTtVQUUzQmxELEtBQUssQ0FBQ2lELGNBQWMsQ0FBQyxDQUNoQmhELElBQUksQ0FBQyxVQUFBQyxRQUFRO1lBQUEsT0FBSUEsUUFBUSxDQUFDakIsSUFBSSxFQUFFO1VBQUEsRUFBQyxDQUNqQ2dCLElBQUksQ0FBQyxVQUFBMUIsSUFBSSxFQUFJO1lBQ04yRSxnQkFBZ0IsR0FBRzNFLElBQUk7VUFDM0IsQ0FBQyxDQUNKO1VBRUwsSUFBTTRFLE9BQU8sR0FBRzdDLFFBQVEsQ0FBQzhDLElBQUksQ0FBQyxVQUFBRCxPQUFPO1lBQUEsT0FBSUEsT0FBTyxDQUFDckQsRUFBRSxLQUFLYyxTQUFTO1VBQUEsRUFBQztVQUNsRXZELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDNkYsT0FBTyxDQUFDO1VBRXBCLElBQU1oQixVQUFVLEdBQUczRixRQUFRLENBQUNxQixjQUFjLENBQUMsbUJBQW1CLENBQUM7VUFDL0QsSUFBTXVFLFFBQVEsR0FBRzVGLFFBQVEsQ0FBQ3FCLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQztVQUMzRCxJQUFNd0YsVUFBVSxHQUFHN0csUUFBUSxDQUFDcUIsY0FBYyxDQUFDLGVBQWUsQ0FBQztVQUMzRCxJQUFNeUYsV0FBVyxHQUFHOUcsUUFBUSxDQUFDcUIsY0FBYyxDQUFDLGtCQUFrQixDQUFDO1VBQy9ELElBQU0wRixjQUFjLEdBQUcvRyxRQUFRLENBQUNxQixjQUFjLENBQUMsbUJBQW1CLENBQUM7VUFDbkUsSUFBTTJGLFlBQVksR0FBR2hILFFBQVEsQ0FBQ3FCLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQztVQUMvRCxJQUFNNEYsb0JBQW9CLEdBQUdqSCxRQUFRLENBQUNxQixjQUFjLENBQUMseUJBQXlCLENBQUM7VUFDL0UsSUFBTTZGLGNBQWMsR0FBR2xILFFBQVEsQ0FBQ3FCLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQztVQUNuRSxJQUFNOEYsY0FBYyxHQUFHbkgsUUFBUSxDQUFDcUIsY0FBYyxDQUFDLG1CQUFtQixDQUFDO1VBRW5FLElBQU1ULGlCQUFpQixHQUFHWixRQUFRLENBQUNHLGdCQUFnQixDQUFDLGFBQWEsQ0FBQztVQUVsRSxJQUFNaUgsY0FBYyxHQUFHVCxPQUFPLENBQUNVLElBQUksQ0FBQ0MsR0FBRyxDQUFDLFVBQUFDLEdBQUc7WUFBQSxPQUFJQSxHQUFHLENBQUNqRSxFQUFFO1VBQUEsRUFBQztVQUV0RCxJQUFJMUMsaUJBQWlCLEVBQUU7WUFDbkJBLGlCQUFpQixDQUFDUixPQUFPLENBQUMsVUFBVW9ILGVBQWUsRUFBRTtjQUNqRCxLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR0QsZUFBZSxDQUFDdEYsT0FBTyxDQUFDd0YsTUFBTSxFQUFFRCxDQUFDLEVBQUUsRUFBRTtnQkFDckQsSUFBTUUsTUFBTSxHQUFHSCxlQUFlLENBQUN0RixPQUFPLENBQUN1RixDQUFDLENBQUM7Z0JBQ3pDLElBQUlMLGNBQWMsQ0FBQ1EsUUFBUSxDQUFDckcsUUFBUSxDQUFDb0csTUFBTSxDQUFDOUIsS0FBSyxDQUFDLENBQUMsRUFBRTtrQkFDakQ4QixNQUFNLENBQUNFLFFBQVEsR0FBRyxJQUFJO2dCQUMxQjtjQUNKO2NBRUEsT0FBTyxJQUFJOUgsb0RBQU8sQ0FBQ3lILGVBQWUsRUFBRTtnQkFDaEN6RyxhQUFhLEVBQUUsSUFBSTtnQkFDbkJDLGNBQWMsRUFBRSxFQUFFO2dCQUNsQkMsVUFBVSxFQUFFLElBQUk7Z0JBQ2hCQyxnQkFBZ0IsRUFBRTtjQUN0QixDQUFDLENBQUM7WUFDTixDQUFDLENBQUM7VUFDTjtVQUVBeUUsVUFBVSxHQUFHQSxVQUFVLENBQUNFLEtBQUssR0FBR2MsT0FBTyxDQUFDM0QsS0FBSyxHQUFHLElBQUk7VUFDcEQ0QyxRQUFRLEdBQUdBLFFBQVEsQ0FBQ0MsS0FBSyxHQUFHYyxPQUFPLENBQUN4RCxHQUFHLEdBQUcsSUFBSTtVQUM5QzBELFVBQVUsR0FBR0EsVUFBVSxDQUFDaEIsS0FBSyxHQUFHYyxPQUFPLENBQUNtQixLQUFLLEdBQUcsSUFBSTtVQUNwRGhCLFdBQVcsR0FBR0EsV0FBVyxDQUFDakIsS0FBSyxHQUFHYyxPQUFPLENBQUNvQixNQUFNLEdBQUcsSUFBSTtVQUN2RGhCLGNBQWMsR0FBR0EsY0FBYyxDQUFDbEIsS0FBSyxHQUFHYyxPQUFPLENBQUNxQixTQUFTLEdBQUcsSUFBSTtVQUNoRWhCLFlBQVksR0FBR0EsWUFBWSxDQUFDbkIsS0FBSyxHQUFHYyxPQUFPLENBQUNzQixPQUFPLEdBQUcsSUFBSTtVQUMxRGhCLG9CQUFvQixHQUFHQSxvQkFBb0IsQ0FBQ3BCLEtBQUssR0FBR2MsT0FBTyxDQUFDM0UsZUFBZSxHQUFHLElBQUk7VUFDbEZrRixjQUFjLEdBQUdBLGNBQWMsQ0FBQ3JCLEtBQUssR0FBR2MsT0FBTyxDQUFDdUIsU0FBUyxHQUFHLElBQUk7VUFDaEVmLGNBQWMsR0FBR0EsY0FBYyxDQUFDdEIsS0FBSyxHQUFHekIsU0FBUyxHQUFHLElBQUk7VUFFeERGLFlBQVksQ0FBQ3VCLElBQUksRUFBRTtVQUNuQnhCLGNBQWMsQ0FBQ2hFLGdCQUFnQixDQUFDLGdCQUFnQixFQUFFLFlBQVk7WUFDMURrRSxpQkFBaUIsQ0FBQzJCLEtBQUssRUFBRTtVQUM3QixDQUFDLENBQUM7UUFDTjtNQUNKLENBQUMsQ0FBQztNQUNGekIsUUFBUSxDQUFDOEQsTUFBTSxFQUFFO0lBQ3JCO0VBQ0osQ0FBQyxDQUFDO0FBQ047Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25NOEI7QUFDRjs7QUFFNUI7QUFDK0I7O0FBRS9CO0FBQytCOztBQUUvQjtBQUN5Qzs7QUFFekM7QUFDNEM7QUFDTzs7QUFFbkQ7QUFDaUM7QUFDSDtBQUNLO0FBQ1U7QUFDZjtBQUNDO0FBQ0E7QUFFL0IsNkJBQWUsc0NBQVk7RUFDdkJuSSxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQVk7SUFDdERtSSxtREFBWSxDQUFDO01BQ1RFLFFBQVEsRUFBRSxVQUFVO01BQ3BCbEcsT0FBTyxFQUFFLHlDQUF5QztNQUNsRG1HLE9BQU8sRUFBRSxnRkFBZ0Y7TUFDekZDLE9BQU8sRUFBRSxLQUFLO01BQ2RDLFNBQVMsRUFBRTtJQUNmLENBQUMsQ0FBQztFQUNOLENBQUMsQ0FBQztBQUNOOzs7Ozs7Ozs7OztBQ25DQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvY2hhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvZnVsbF9jYWxlbmRhci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy90aW55X21jZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5zY3NzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9zdHlsZXMvYXBwLnNjc3MnO1xuaW1wb3J0IEZ1bGxDYWxlbmRhciBmcm9tIFwiLi9zY3JpcHRzL2Z1bGxfY2FsZW5kYXJcIjtcbmltcG9ydCBUaW55TUNFIGZyb20gXCIuL3NjcmlwdHMvdGlueV9tY2VcIjtcbmltcG9ydCBDaGFydHMgZnJvbSBcIi4vc2NyaXB0cy9jaGFydFwiXG5pbXBvcnQge1RlbXB1c0RvbWludXN9IGZyb20gJ0Blb25hc2Rhbi90ZW1wdXMtZG9taW51cyc7XG5pbXBvcnQge0RhdGVwaWNrZXJ9IGZyb20gJ3ZhbmlsbGFqcy1kYXRlcGlja2VyJztcbmltcG9ydCBDaG9pY2VzIGZyb20gJ2Nob2ljZXMuanMnO1xuXG5GdWxsQ2FsZW5kYXIoKTtcblRpbnlNQ0UoKTtcbkNoYXJ0cygpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGRhdGVwaWNrZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRhdGVwaWNrZXInKTtcbiAgICBpZiAoZGF0ZXBpY2tlcnMpIHtcbiAgICAgICAgZGF0ZXBpY2tlcnMuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZXBpY2tlcihlbCwge1xuICAgICAgICAgICAgICAgIGJ1dHRvbkNsYXNzOiAnYnRuJyxcbiAgICAgICAgICAgICAgICBmb3JtYXQ6ICd5eXl5LW1tLWRkJyxcbiAgICAgICAgICAgICAgICBhdXRvaGlkZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBsYW5ndWFnZTogJ2ZyLUZSJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBzZWxlY3QgZm9ybSBuYW1lIG93bmVyXG4gICAgY29uc3QgZm9ybU93bmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybVtuYW1lPVwib3duZXJcIl0nKTtcbiAgICBpZiAoZm9ybU93bmVyKSB7XG4gICAgICAgIGNvbnN0IGNob2ljZXNKc0VsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNob2ljZXMtanMnKTtcbiAgICAgICAgY29uc29sZS5sb2coY2hvaWNlc0pzRWxlbWVudHMpXG4gICAgICAgIGlmIChjaG9pY2VzSnNFbGVtZW50cykge1xuICAgICAgICAgICAgY2hvaWNlc0pzRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENob2ljZXMoZWwsIHtcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoRW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgaXRlbVNlbGVjdFRleHQ6ICcnLFxuICAgICAgICAgICAgICAgICAgICBzaG91bGRTb3J0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICByZW1vdmVJdGVtQnV0dG9uOiB0cnVlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpZiAoZGF0ZXBpY2tlcnMpIHtcbiAgICAvLyAgICAgZGF0ZXBpY2tlcnMuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAvLyAgICAgICAgIG5ldyBUZW1wdXNEb21pbnVzKGVsLCB7XG4gICAgLy8gICAgICAgICAgICAgZGlzcGxheToge1xuICAgIC8vICAgICAgICAgICAgICAgICB2aWV3TW9kZTogJ2NhbGVuZGFyJyxcbiAgICAvLyAgICAgICAgICAgICAgICAgY29tcG9uZW50czoge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgZGVjYWRlczogdHJ1ZSxcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHllYXI6IHRydWUsXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBtb250aDogdHJ1ZSxcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGRhdGU6IHRydWUsXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBob3VyczogdHJ1ZSxcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIG1pbnV0ZXM6IGZhbHNlLFxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgc2Vjb25kczogZmFsc2VcbiAgICAvLyAgICAgICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIH0pO1xuICAgIC8vICAgICB9KTtcbiAgICAvLyB9XG5cbn0pO1xuXG4iLCJpbXBvcnQgQ2hhcnQgZnJvbSAnY2hhcnQuanMvYXV0bydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgcHJvZml0Q2hhcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2ZpdENoYXJ0XCIpO1xyXG5cclxuICAgICAgICBpZiAocHJvZml0Q2hhcnQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocHJvZml0Q2hhcnQpXHJcblxyXG4gICAgICAgICAgICBjb25zdCBkYXRhRGVjbGFyZWQgPSBwYXJzZUludChwcm9maXRDaGFydC5kYXRhc2V0LmRlY2xhcmVkKTtcclxuICAgICAgICAgICAgY29uc3QgZGF0YU5vRGVjbGFyZWQgPSBwYXJzZUludChwcm9maXRDaGFydC5kYXRhc2V0LnVuZGVjbGFyZWQpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhRGVjbGFyZWQpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGFOb0RlY2xhcmVkKVxyXG5cclxuXHJcbiAgICAgICAgICAgIHZhciBwcm9maXREYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgbGFiZWxzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCJEZWNsYXJlZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiTm8gZGVjbGFyZWRcIixcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBkYXRhc2V0czogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogW2RhdGFEZWNsYXJlZCwgZGF0YU5vRGVjbGFyZWRdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIzFlZDdiY1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIjZmY5MTAyXCIsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIG5ldyBDaGFydChwcm9maXRDaGFydCwge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogJ3BpZScsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBwcm9maXREYXRhLFxyXG4gICAgICAgICAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgcGx1Z2luczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWdlbmQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAndG9wJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnRMOpY2xhcmVkIFZTIE5vIGRlY2xhcmVkJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxufVxyXG4iLCJpbXBvcnQge0NhbGVuZGFyfSBmcm9tICdAZnVsbGNhbGVuZGFyL2NvcmUnO1xuaW1wb3J0IGRheUdyaWRQbHVnaW4gZnJvbSAnQGZ1bGxjYWxlbmRhci9kYXlncmlkJztcbmltcG9ydCBpbnRlcmFjdGlvblBsdWdpbiBmcm9tICdAZnVsbGNhbGVuZGFyL2ludGVyYWN0aW9uJztcbmltcG9ydCB7TW9kYWx9IGZyb20gJ2Jvb3RzdHJhcCc7XG5pbXBvcnQgQ2hvaWNlcyBmcm9tIFwiY2hvaWNlcy5qc1wiO1xuaW1wb3J0IFRpbnlNQ0UgZnJvbSBcIi4vdGlueV9tY2VcIjtcblxuZnVuY3Rpb24gdXBkYXRlQm9va2luZ0RhdGUoaW5mbykge1xuICAgIGNvbnN0IHN0YXJ0ID0gaW5mby5ldmVudC5zdGFydFN0cjtcbiAgICBjb25zdCBlbmQgPSBpbmZvLmV2ZW50LmVuZFN0cjtcbiAgICBjb25zdCBldmVudElkID0gaW5mby5ldmVudC5pZDtcblxuICAgIGNvbnN0IHVwZGF0ZUJvb2tpbmdEYXRlc1VybCA9IFwiL2Jvb2tpbmdzL3VwZGF0ZS1kYXRlcy9cIiArIGV2ZW50SWQgKyBcIi9cIiArIHN0YXJ0ICsgXCIvXCIgKyBlbmQ7XG4gICAgZmV0Y2godXBkYXRlQm9va2luZ0RhdGVzVXJsKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgfSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURvZ0Nob2ljZXMoKSB7XG4gICAgY29uc3QgY2hvaWNlc0pzRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hvaWNlcy1qcycpO1xuICAgIGlmIChjaG9pY2VzSnNFbGVtZW50cykge1xuICAgICAgICBjaG9pY2VzSnNFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBDaG9pY2VzKGVsLCB7XG4gICAgICAgICAgICAgICAgc2VhcmNoRW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBpdGVtU2VsZWN0VGV4dDogJycsXG4gICAgICAgICAgICAgICAgc2hvdWxkU29ydDogdHJ1ZSxcbiAgICAgICAgICAgICAgICByZW1vdmVJdGVtQnV0dG9uOiB0cnVlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGNhbGVuZGFyRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZnVsbC1jYWxlbmRhcicpO1xuICAgICAgICBpZiAoY2FsZW5kYXJFbCkge1xuICAgICAgICAgICAgY29uc3QgYm9va2luZ3MgPSBKU09OLnBhcnNlKGNhbGVuZGFyRWwuZGF0YXNldC5ib29raW5ncyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGJvb2tpbmdNb2RhbEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsLWJvb2tpbmcnKTtcbiAgICAgICAgICAgIGNvbnN0IGJvb2tpbmdNb2RhbCA9IG5ldyBNb2RhbChib29raW5nTW9kYWxFbCk7XG4gICAgICAgICAgICBjb25zdCBib29raW5nVGl0bGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbC1ib29raW5nLWxhYmVsJyk7XG5cbiAgICAgICAgICAgIGxldCBjdXJyZW50SWQgPSBudWxsO1xuXG4gICAgICAgICAgICBjb25zdCBjYWxlbmRhciA9IG5ldyBDYWxlbmRhcihjYWxlbmRhckVsLCB7XG4gICAgICAgICAgICAgICAgcGx1Z2luczogW1xuICAgICAgICAgICAgICAgICAgICBkYXlHcmlkUGx1Z2luLFxuICAgICAgICAgICAgICAgICAgICAvLyB0aW1lR3JpZFBsdWdpbixcbiAgICAgICAgICAgICAgICAgICAgLy8gbGlzdFBsdWdpbixcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJhY3Rpb25QbHVnaW5cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIGRpc3BsYXlFdmVudFRpbWU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRlZmF1bHRBbGxEYXk6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNlbGVjdGFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgaW5pdGlhbFZpZXc6ICdkYXlHcmlkTW9udGgnLFxuICAgICAgICAgICAgICAgIHRoZW1lU3lzdGVtOiAnYm9vdHN0cmFwJyxcbiAgICAgICAgICAgICAgICBkYXlNYXhFdmVudHM6IHRydWUsXG4gICAgICAgICAgICAgICAgZXZlbnRzOiBib29raW5ncyxcbiAgICAgICAgICAgICAgICBidXR0b25UZXh0OiB7XG4gICAgICAgICAgICAgICAgICAgIHByZXY6ICdQcmV2aW91cycsXG4gICAgICAgICAgICAgICAgICAgIG5leHQ6ICdOZXh0J1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaGVhZGVyVG9vbGJhcjoge1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAncHJldixuZXh0IHRvZGF5JyxcbiAgICAgICAgICAgICAgICAgICAgY2VudGVyOiAndGl0bGUnLFxuICAgICAgICAgICAgICAgICAgICByaWdodDogJ2RheUdyaWRNb250aCdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNlbGVjdDogKGluZm8pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlRG9nQ2hvaWNlcygpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9va2luZ0RlbGV0ZScpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGVsZXRlQnV0dG9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBib29raW5nTW9kYWwuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICBib29raW5nVGl0bGVJbnB1dC5pbm5lclRleHQgPSAnTmV3IGJvb2tpbmcnO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGFydCA9IGluZm8uc3RhcnRTdHI7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVuZCA9IGluZm8uZW5kU3RyO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9va2luZ19kYXRlU3RhcnQnKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZW5kSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9va2luZ19kYXRlRW5kJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgc3RhcnRJbnB1dC52YWx1ZSA9IHN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICBlbmRJbnB1dC52YWx1ZSA9IGVuZDtcblxuICAgICAgICAgICAgICAgICAgICBib29raW5nTW9kYWxFbC5hZGRFdmVudExpc3RlbmVyKCdzaG93bi5icy5tb2RhbCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvb2tpbmdUaXRsZUlucHV0LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXZlbnRSZXNpemU6IChpbmZvKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUJvb2tpbmdEYXRlKGluZm8pO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXZlbnREcm9wOiAoaW5mbykgPT4ge1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVCb29raW5nRGF0ZShpbmZvKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRhdGVDbGljazogZnVuY3Rpb24gKGluZm8pIHtcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlRG9nQ2hvaWNlcygpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9va2luZ0RlbGV0ZScpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGVsZXRlQnV0dG9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0ZSA9IGluZm8uZGF0ZVN0clxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGFydElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jvb2tpbmdfZGF0ZVN0YXJ0Jyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVuZElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jvb2tpbmdfZGF0ZUVuZCcpO1xuXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0SW5wdXQudmFsdWUgPSBkYXRlO1xuICAgICAgICAgICAgICAgICAgICBlbmRJbnB1dC52YWx1ZSA9IGRhdGU7XG5cbiAgICAgICAgICAgICAgICAgICAgYm9va2luZ01vZGFsLnNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgYm9va2luZ1RpdGxlSW5wdXQuaW5uZXJUZXh0ID0gJ05ldyBib29raW5nJztcblxuICAgICAgICAgICAgICAgICAgICBib29raW5nTW9kYWxFbC5hZGRFdmVudExpc3RlbmVyKCdzaG93bi5icy5tb2RhbCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvb2tpbmdUaXRsZUlucHV0LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXZlbnRDbGljazogZnVuY3Rpb24gKGluZm8pIHtcbiAgICAgICAgICAgICAgICAgICAgYm9va2luZ1RpdGxlSW5wdXQuaW5uZXJUZXh0ID0gJ0VkaXQgYm9va2luZyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib29raW5nX3N1Ym1pdCcpO1xuICAgICAgICAgICAgICAgICAgICBzdWJtaXRCdXR0b24uaW5uZXJUZXh0ID0gJ0VkaXQnO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50SWQgPSBwYXJzZUludChpbmZvLmV2ZW50LmlkKTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBib29raW5ncyA9IEpTT04ucGFyc2UoY2FsZW5kYXJFbC5kYXRhc2V0LmJvb2tpbmdzKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvb2tpbmdEZWxldGUnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlbGV0ZUJ1dHRvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZUJ1dHRvbi5ocmVmID0gZGVsZXRlQnV0dG9uLmhyZWYucmVwbGFjZSgndG9CZVJlcGxhY2UnLCBjdXJyZW50SWQpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVkaXRCb29raW5nVXJsID0gXCIvYm9va2luZ3MvZWRpdC9cIiArIGN1cnJlbnRJZDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVkaXRGb3JtUmVzcG9uc2UgPSBudWxsO1xuXG4gICAgICAgICAgICAgICAgICAgIGZldGNoKGVkaXRCb29raW5nVXJsKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRGb3JtUmVzcG9uc2UgPSBkYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYm9va2luZyA9IGJvb2tpbmdzLmZpbmQoYm9va2luZyA9PiBib29raW5nLmlkID09PSBjdXJyZW50SWQpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhib29raW5nKVxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9va2luZ19kYXRlU3RhcnQnKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZW5kSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9va2luZ19kYXRlRW5kJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9va2luZ19wcmljZScpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGF0dXNJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib29raW5nX2RlY2xhcmVkJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGludmVudG9yeUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jvb2tpbmdfaW52ZW50b3J5Jyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbW1lbnRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib29raW5nX2NvbW1lbnQnKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYmFja2dyb3VuZENvbG9ySW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9va2luZ19iYWNrZ3JvdW5kQ29sb3InKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGV4dENvbG9ySW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9va2luZ190ZXh0Q29sb3InKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYm9va2luZ0lkSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9va2luZ19ib29raW5nSWQnKTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjaG9pY2VzSnNFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaG9pY2VzLWpzJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZG9nSWRzVG9TZWxlY3QgPSBib29raW5nLmRvZ3MubWFwKGRvZyA9PiBkb2cuaWQpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjaG9pY2VzSnNFbGVtZW50cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hvaWNlc0pzRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoY2hvaWNlSnNFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaG9pY2VKc0VsZW1lbnQub3B0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb24gPSBjaG9pY2VKc0VsZW1lbnQub3B0aW9uc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRvZ0lkc1RvU2VsZWN0LmluY2x1ZGVzKHBhcnNlSW50KG9wdGlvbi52YWx1ZSkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDaG9pY2VzKGNob2ljZUpzRWxlbWVudCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hFbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtU2VsZWN0VGV4dDogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3VsZFNvcnQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZUl0ZW1CdXR0b246IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0SW5wdXQgPyBzdGFydElucHV0LnZhbHVlID0gYm9va2luZy5zdGFydCA6IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGVuZElucHV0ID8gZW5kSW5wdXQudmFsdWUgPSBib29raW5nLmVuZCA6IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHByaWNlSW5wdXQgPyBwcmljZUlucHV0LnZhbHVlID0gYm9va2luZy5wcmljZSA6IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1c0lucHV0ID8gc3RhdHVzSW5wdXQudmFsdWUgPSBib29raW5nLnN0YXR1cyA6IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGludmVudG9yeUlucHV0ID8gaW52ZW50b3J5SW5wdXQudmFsdWUgPSBib29raW5nLmludmVudG9yeSA6IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGNvbW1lbnRJbnB1dCA/IGNvbW1lbnRJbnB1dC52YWx1ZSA9IGJvb2tpbmcuY29tbWVudCA6IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcklucHV0ID8gYmFja2dyb3VuZENvbG9ySW5wdXQudmFsdWUgPSBib29raW5nLmJhY2tncm91bmRDb2xvciA6IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHRleHRDb2xvcklucHV0ID8gdGV4dENvbG9ySW5wdXQudmFsdWUgPSBib29raW5nLnRleHRDb2xvciA6IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGJvb2tpbmdJZElucHV0ID8gYm9va2luZ0lkSW5wdXQudmFsdWUgPSBjdXJyZW50SWQgOiBudWxsO1xuXG4gICAgICAgICAgICAgICAgICAgIGJvb2tpbmdNb2RhbC5zaG93KCk7XG4gICAgICAgICAgICAgICAgICAgIGJvb2tpbmdNb2RhbEVsLmFkZEV2ZW50TGlzdGVuZXIoJ3Nob3duLmJzLm1vZGFsJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9va2luZ1RpdGxlSW5wdXQuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjYWxlbmRhci5yZW5kZXIoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwiaW1wb3J0IHRpbnltY2UgZnJvbSAndGlueW1jZSc7XHJcbmltcG9ydCAndGlueW1jZS9tb2RlbHMvZG9tJztcclxuXHJcbi8qIERlZmF1bHQgaWNvbnMgYXJlIHJlcXVpcmVkIGZvciBUaW55TUNFIDUuMyBvciBhYm92ZSAqL1xyXG5pbXBvcnQgJ3RpbnltY2UvaWNvbnMvZGVmYXVsdCc7XHJcblxyXG4vKiBBIHRoZW1lIGlzIGFsc28gcmVxdWlyZWQgKi9cclxuaW1wb3J0ICd0aW55bWNlL3RoZW1lcy9zaWx2ZXInO1xyXG5cclxuLyogSW1wb3J0IHRoZSBza2luICovXHJcbmltcG9ydCAndGlueW1jZS9za2lucy91aS9veGlkZS9za2luLmNzcyc7XHJcblxyXG4vKiBJbXBvcnQgY29udGVudCBjc3MgKi9cclxuaW1wb3J0ICd0aW55bWNlL3NraW5zL3VpL294aWRlL2NvbnRlbnQuY3NzJztcclxuaW1wb3J0ICd0aW55bWNlL3NraW5zL2NvbnRlbnQvZGVmYXVsdC9jb250ZW50LmNzcyc7XHJcblxyXG4vKiBJbXBvcnQgcGx1Z2lucyAqL1xyXG5pbXBvcnQgJ3RpbnltY2UvcGx1Z2lucy9hZHZsaXN0JztcclxuaW1wb3J0ICd0aW55bWNlL3BsdWdpbnMvY29kZSc7XHJcbmltcG9ydCAndGlueW1jZS9wbHVnaW5zL2Vtb3RpY29ucyc7XHJcbmltcG9ydCAndGlueW1jZS9wbHVnaW5zL2Vtb3RpY29ucy9qcy9lbW9qaXMnO1xyXG5pbXBvcnQgJ3RpbnltY2UvcGx1Z2lucy9saW5rJztcclxuaW1wb3J0ICd0aW55bWNlL3BsdWdpbnMvbGlzdHMnO1xyXG5pbXBvcnQgJ3RpbnltY2UvcGx1Z2lucy90YWJsZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRpbnltY2UuaW5pdCh7XHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnLnRpbnltY2UnLFxyXG4gICAgICAgICAgICBwbHVnaW5zOiAnYWR2bGlzdCBjb2RlIGVtb3RpY29ucyBsaW5rIGxpc3RzIHRhYmxlJyxcclxuICAgICAgICAgICAgdG9vbGJhcjogJ3VuZG8gcmVkbyB8IGJvbGQgaXRhbGljIHJlbW92ZWZvcm1hdCB8IGJ1bGxpc3QgbnVtbGlzdCB0YWJsZSB8IGxpbmsgZW1vdGljb25zICcsXHJcbiAgICAgICAgICAgIG1lbnViYXI6IGZhbHNlLFxyXG4gICAgICAgICAgICBzdGF0dXNiYXI6IGZhbHNlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIkZ1bGxDYWxlbmRhciIsIlRpbnlNQ0UiLCJDaGFydHMiLCJUZW1wdXNEb21pbnVzIiwiRGF0ZXBpY2tlciIsIkNob2ljZXMiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJkYXRlcGlja2VycyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWwiLCJidXR0b25DbGFzcyIsImZvcm1hdCIsImF1dG9oaWRlIiwibGFuZ3VhZ2UiLCJmb3JtT3duZXIiLCJxdWVyeVNlbGVjdG9yIiwiY2hvaWNlc0pzRWxlbWVudHMiLCJjb25zb2xlIiwibG9nIiwic2VhcmNoRW5hYmxlZCIsIml0ZW1TZWxlY3RUZXh0Iiwic2hvdWxkU29ydCIsInJlbW92ZUl0ZW1CdXR0b24iLCJDaGFydCIsInByb2ZpdENoYXJ0IiwiZ2V0RWxlbWVudEJ5SWQiLCJkYXRhRGVjbGFyZWQiLCJwYXJzZUludCIsImRhdGFzZXQiLCJkZWNsYXJlZCIsImRhdGFOb0RlY2xhcmVkIiwidW5kZWNsYXJlZCIsInByb2ZpdERhdGEiLCJsYWJlbHMiLCJkYXRhc2V0cyIsImRhdGEiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0eXBlIiwib3B0aW9ucyIsInJlc3BvbnNpdmUiLCJwbHVnaW5zIiwibGVnZW5kIiwicG9zaXRpb24iLCJ0aXRsZSIsImRpc3BsYXkiLCJ0ZXh0IiwiQ2FsZW5kYXIiLCJkYXlHcmlkUGx1Z2luIiwiaW50ZXJhY3Rpb25QbHVnaW4iLCJNb2RhbCIsInVwZGF0ZUJvb2tpbmdEYXRlIiwiaW5mbyIsInN0YXJ0IiwiZXZlbnQiLCJzdGFydFN0ciIsImVuZCIsImVuZFN0ciIsImV2ZW50SWQiLCJpZCIsInVwZGF0ZUJvb2tpbmdEYXRlc1VybCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImNyZWF0ZURvZ0Nob2ljZXMiLCJjYWxlbmRhckVsIiwiYm9va2luZ3MiLCJKU09OIiwicGFyc2UiLCJib29raW5nTW9kYWxFbCIsImJvb2tpbmdNb2RhbCIsImJvb2tpbmdUaXRsZUlucHV0IiwiY3VycmVudElkIiwiY2FsZW5kYXIiLCJkaXNwbGF5RXZlbnRUaW1lIiwiZGVmYXVsdEFsbERheSIsInNlbGVjdGFibGUiLCJlZGl0YWJsZSIsImluaXRpYWxWaWV3IiwidGhlbWVTeXN0ZW0iLCJkYXlNYXhFdmVudHMiLCJldmVudHMiLCJidXR0b25UZXh0IiwicHJldiIsIm5leHQiLCJoZWFkZXJUb29sYmFyIiwibGVmdCIsImNlbnRlciIsInJpZ2h0Iiwic2VsZWN0IiwiZGVsZXRlQnV0dG9uIiwiY2xhc3NMaXN0IiwiYWRkIiwic2hvdyIsImlubmVyVGV4dCIsInN0YXJ0SW5wdXQiLCJlbmRJbnB1dCIsInZhbHVlIiwiZm9jdXMiLCJldmVudFJlc2l6ZSIsImV2ZW50RHJvcCIsImRhdGVDbGljayIsImRhdGUiLCJkYXRlU3RyIiwiZXZlbnRDbGljayIsInN1Ym1pdEJ1dHRvbiIsInJlbW92ZSIsImhyZWYiLCJyZXBsYWNlIiwiZWRpdEJvb2tpbmdVcmwiLCJlZGl0Rm9ybVJlc3BvbnNlIiwiYm9va2luZyIsImZpbmQiLCJwcmljZUlucHV0Iiwic3RhdHVzSW5wdXQiLCJpbnZlbnRvcnlJbnB1dCIsImNvbW1lbnRJbnB1dCIsImJhY2tncm91bmRDb2xvcklucHV0IiwidGV4dENvbG9ySW5wdXQiLCJib29raW5nSWRJbnB1dCIsImRvZ0lkc1RvU2VsZWN0IiwiZG9ncyIsIm1hcCIsImRvZyIsImNob2ljZUpzRWxlbWVudCIsImkiLCJsZW5ndGgiLCJvcHRpb24iLCJpbmNsdWRlcyIsInNlbGVjdGVkIiwicHJpY2UiLCJzdGF0dXMiLCJpbnZlbnRvcnkiLCJjb21tZW50IiwidGV4dENvbG9yIiwicmVuZGVyIiwidGlueW1jZSIsImluaXQiLCJzZWxlY3RvciIsInRvb2xiYXIiLCJtZW51YmFyIiwic3RhdHVzYmFyIl0sInNvdXJjZVJvb3QiOiIifQ==