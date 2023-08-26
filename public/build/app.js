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
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var _scripts_full_calendar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./scripts/full_calendar */ "./assets/scripts/full_calendar.js");
/* harmony import */ var _scripts_tiny_mce__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./scripts/tiny_mce */ "./assets/scripts/tiny_mce.js");
/* harmony import */ var _scripts_chart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./scripts/chart */ "./assets/scripts/chart.js");
/* harmony import */ var _eonasdan_tempus_dominus__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @eonasdan/tempus-dominus */ "./node_modules/@eonasdan/tempus-dominus/dist/js/tempus-dominus.esm.js");
/* harmony import */ var vanillajs_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vanillajs-datepicker */ "./node_modules/vanillajs-datepicker/js/main.js");
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! choices.js */ "./node_modules/choices.js/public/assets/scripts/choices.js");
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(choices_js__WEBPACK_IMPORTED_MODULE_13__);














(0,_scripts_full_calendar__WEBPACK_IMPORTED_MODULE_8__["default"])();
(0,_scripts_tiny_mce__WEBPACK_IMPORTED_MODULE_9__["default"])();
(0,_scripts_chart__WEBPACK_IMPORTED_MODULE_10__["default"])();
document.addEventListener('DOMContentLoaded', function () {
  var datepickers = document.querySelectorAll('.datepicker');
  var datetimepickers = document.querySelectorAll('.datetimepicker');
  if (datepickers) {
    datepickers.forEach(function (el) {
      return new vanillajs_datepicker__WEBPACK_IMPORTED_MODULE_12__.Datepicker(el, {
        buttonClass: 'btn',
        format: 'yyyy-mm-dd',
        autohide: true,
        language: 'fr-FR'
      });
    });
  }
  var formOwner = document.querySelector('form[name="owner"]');
  var filterBookings = document.querySelector('#filter_bookings_dogs');
  if (formOwner || filterBookings) {
    var choicesJsElements = document.querySelectorAll('.choices-js');
    console.log(choicesJsElements);
    if (choicesJsElements) {
      choicesJsElements.forEach(function (el) {
        return new (choices_js__WEBPACK_IMPORTED_MODULE_13___default())(el, {
          searchEnabled: true,
          itemSelectText: '',
          shouldSort: true,
          removeItemButton: true
        });
      });
    }
  }
  var formBooking = document.querySelector('.bookingForm');
  if (formBooking) {
    var _choicesJsElements = document.querySelectorAll('.choices-js');
    var booking = JSON.parse(formBooking.dataset.booking);
    var dogIdsToSelect = booking.dogs.map(function (dog) {
      return dog.id;
    });
    if (_choicesJsElements) {
      _choicesJsElements.forEach(function (choiceJsElement) {
        for (var i = 0; i < choiceJsElement.options.length; i++) {
          var option = choiceJsElement.options[i];
          if (dogIdsToSelect.includes(parseInt(option.value))) {
            option.selected = true;
          }
        }
        return new (choices_js__WEBPACK_IMPORTED_MODULE_13___default())(choiceJsElement, {
          searchEnabled: true,
          itemSelectText: '',
          shouldSort: true,
          removeItemButton: true
        });
      });
    }
  }
  if (datetimepickers) {
    datetimepickers.forEach(function (el) {
      new _eonasdan_tempus_dominus__WEBPACK_IMPORTED_MODULE_11__.TempusDominus(el, {
        localization: {
          format: 'dd-MM-yyyy HH:mm'
        },
        display: {
          viewMode: 'calendar',
          components: {
            decades: true,
            year: true,
            month: true,
            date: true,
            hours: true,
            minutes: true,
            seconds: false
          }
        }
      });
    });
  }
  var actionButtonClicks = document.querySelectorAll('.action-button-click');
  var actionButton = document.querySelector('.action-button');
  if (actionButtonClicks) {
    actionButtonClicks.forEach(function (actionButtonClick) {
      actionButtonClick.addEventListener('click', function (e) {
        actionButton.click();
      });
    });
  }
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
      var dataDeclared = parseInt(profitChart.dataset.declared);
      var dataNoDeclared = parseInt(profitChart.dataset.undeclared);
      var profitData = {
        labels: ["Declaré", "Non déclaré"],
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
              text: 'Déclaré VS Non declaré'
            }
          }
        }
      });
    }
    var viewPerMonthChart = document.getElementById('view-per-month');
    if (viewPerMonthChart) {
      var labels = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
      var data = {
        labels: labels,
        datasets: [{
          label: 'Déclaré',
          data: [26, 59, 80, 81, 56, 55, 40, 26, 59, 80, 81, 56],
          borderWidth: 1
        }, {
          label: 'Non déclaré',
          data: [26, 59, 80, 81, 56, 55, 40, 26, 59, 80, 81, 56]
        }]
      };
      new chart_js_auto__WEBPACK_IMPORTED_MODULE_1__["default"](viewPerMonthChart, {
        type: 'bar',
        labels: labels,
        data: data,
        options: {
          plugins: {
            title: {
              display: true,
              text: "Gains par mois sur l'année en cours"
            }
          },
          responsive: true,
          scales: {
            x: {
              beginAtZero: true,
              stacked: true
            },
            y: {
              beginAtZero: true,
              stacked: true
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
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fullcalendar/core */ "./node_modules/@fullcalendar/core/index.js");
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fullcalendar/daygrid */ "./node_modules/@fullcalendar/daygrid/index.js");
/* harmony import */ var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fullcalendar/timegrid */ "./node_modules/@fullcalendar/timegrid/index.js");
/* harmony import */ var _fullcalendar_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fullcalendar/list */ "./node_modules/@fullcalendar/list/index.js");
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fullcalendar/interaction */ "./node_modules/@fullcalendar/interaction/index.js");






function updateBookingDate(info) {
  var start = info.event.startStr;
  var end = info.event.endStr;
  end = end ? end : start;
  var eventId = info.event.id;
  console.log(eventId, start, end);
  var updateBookingDatesUrl = "/booking/" + eventId + "/edit-dates/" + start + "/" + end + "/";
  window.location.assign(updateBookingDatesUrl);
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.querySelector('.full-calendar');
    if (calendarEl) {
      var bookings = JSON.parse(calendarEl.dataset.bookings);
      console.log(bookings);
      var currentId = null;
      var calendar = new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.Calendar(calendarEl, {
        locale: 'fr',
        plugins: [_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_2__["default"], _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_3__["default"], _fullcalendar_list__WEBPACK_IMPORTED_MODULE_4__["default"], _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_5__["default"]],
        // displayEventTime: false,
        // defaultAllDay: false,
        firstDay: 1,
        selectable: true,
        editable: true,
        initialView: 'dayGridMonth',
        themeSystem: 'bootstrap',
        dayMaxEvents: true,
        events: bookings,
        buttonText: {
          prev: 'Précédent',
          next: 'Suivant',
          today: 'Aujourd\'hui',
          month: 'Mois',
          week: 'Semaine',
          day: 'Jour',
          list: 'Liste'
        },
        allDayText: 'Toute la journée',
        noEventsText: 'Aucun événement à afficher',
        weekTextLong: 'Semaine',
        weekTextShort: 'Sem',
        timeText: 'Heure',
        weekText: 'Semaine',
        moreLinkText: 'Voir plus',
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
        },
        select: function select(info) {
          var start = info.startStr;
          var end = info.endStr;
          var editBookingUrl = "/booking/new/" + start + "/" + end + "/";
          window.location.assign(editBookingUrl);
        },
        eventResize: function eventResize(info) {
          updateBookingDate(info);
        },
        eventDrop: function eventDrop(info) {
          updateBookingDate(info);
        },
        dateClick: function dateClick(info) {
          var date = info.dateStr;
          var editBookingUrl = "/booking/new/" + date + "/" + date + "/";
          window.location.assign(editBookingUrl);
        },
        eventClick: function eventClick(info) {
          currentId = parseInt(info.event.id);
          var bookings = JSON.parse(calendarEl.dataset.bookings);
          var editBookingUrl = "/booking/" + currentId + "/edit/";
          window.location.assign(editBookingUrl);
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_eonasdan_tempus-dominus_dist_js_tempus-dominus_esm_js-node_modules_choic-85f316"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O01BQ2xEdUUsT0FBTyxFQUFFLGdGQUFnRjtNQUN6RkMsT0FBTyxFQUFFLEtBQUs7TUFDZEMsU0FBUyxFQUFFO0lBQ2YsQ0FBQyxDQUFDO0VBQ04sQ0FBQyxDQUFDO0FBQ047Ozs7Ozs7Ozs7O0FDbkNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9jaGFydC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9mdWxsX2NhbGVuZGFyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL3RpbnlfbWNlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3M/OGY1OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vc3R5bGVzL2FwcC5zY3NzJztcbmltcG9ydCBGdWxsQ2FsZW5kYXIgZnJvbSBcIi4vc2NyaXB0cy9mdWxsX2NhbGVuZGFyXCI7XG5pbXBvcnQgVGlueU1DRSBmcm9tIFwiLi9zY3JpcHRzL3RpbnlfbWNlXCI7XG5pbXBvcnQgQ2hhcnRzIGZyb20gXCIuL3NjcmlwdHMvY2hhcnRcIlxuaW1wb3J0IHtUZW1wdXNEb21pbnVzfSBmcm9tICdAZW9uYXNkYW4vdGVtcHVzLWRvbWludXMnO1xuaW1wb3J0IHtEYXRlcGlja2VyfSBmcm9tICd2YW5pbGxhanMtZGF0ZXBpY2tlcic7XG5pbXBvcnQgQ2hvaWNlcyBmcm9tICdjaG9pY2VzLmpzJztcblxuRnVsbENhbGVuZGFyKCk7XG5UaW55TUNFKCk7XG5DaGFydHMoKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBkYXRlcGlja2VycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYXRlcGlja2VyJyk7XG4gICAgY29uc3QgZGF0ZXRpbWVwaWNrZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRhdGV0aW1lcGlja2VyJyk7XG4gICAgaWYgKGRhdGVwaWNrZXJzKSB7XG4gICAgICAgIGRhdGVwaWNrZXJzLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IERhdGVwaWNrZXIoZWwsIHtcbiAgICAgICAgICAgICAgICBidXR0b25DbGFzczogJ2J0bicsXG4gICAgICAgICAgICAgICAgZm9ybWF0OiAneXl5eS1tbS1kZCcsXG4gICAgICAgICAgICAgICAgYXV0b2hpZGU6IHRydWUsXG4gICAgICAgICAgICAgICAgbGFuZ3VhZ2U6ICdmci1GUicsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgZm9ybU93bmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybVtuYW1lPVwib3duZXJcIl0nKTtcbiAgICBjb25zdCBmaWx0ZXJCb29raW5ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmaWx0ZXJfYm9va2luZ3NfZG9ncycpO1xuICAgIGlmIChmb3JtT3duZXIgfHwgZmlsdGVyQm9va2luZ3MpIHtcbiAgICAgICAgY29uc3QgY2hvaWNlc0pzRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hvaWNlcy1qcycpO1xuICAgICAgICBjb25zb2xlLmxvZyhjaG9pY2VzSnNFbGVtZW50cylcbiAgICAgICAgaWYgKGNob2ljZXNKc0VsZW1lbnRzKSB7XG4gICAgICAgICAgICBjaG9pY2VzSnNFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ2hvaWNlcyhlbCwge1xuICAgICAgICAgICAgICAgICAgICBzZWFyY2hFbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBpdGVtU2VsZWN0VGV4dDogJycsXG4gICAgICAgICAgICAgICAgICAgIHNob3VsZFNvcnQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUl0ZW1CdXR0b246IHRydWUsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGZvcm1Cb29raW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvb2tpbmdGb3JtJyk7XG4gICAgaWYgKGZvcm1Cb29raW5nKSB7XG4gICAgICAgIGNvbnN0IGNob2ljZXNKc0VsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNob2ljZXMtanMnKTtcbiAgICAgICAgY29uc3QgYm9va2luZyA9IEpTT04ucGFyc2UoZm9ybUJvb2tpbmcuZGF0YXNldC5ib29raW5nKTtcblxuICAgICAgICBjb25zdCBkb2dJZHNUb1NlbGVjdCA9IGJvb2tpbmcuZG9ncy5tYXAoZG9nID0+IGRvZy5pZCk7XG5cbiAgICAgICAgaWYgKGNob2ljZXNKc0VsZW1lbnRzKSB7XG4gICAgICAgICAgICBjaG9pY2VzSnNFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChjaG9pY2VKc0VsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNob2ljZUpzRWxlbWVudC5vcHRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGNob2ljZUpzRWxlbWVudC5vcHRpb25zW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZG9nSWRzVG9TZWxlY3QuaW5jbHVkZXMocGFyc2VJbnQob3B0aW9uLnZhbHVlKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENob2ljZXMoY2hvaWNlSnNFbGVtZW50LCB7XG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaEVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1TZWxlY3RUZXh0OiAnJyxcbiAgICAgICAgICAgICAgICAgICAgc2hvdWxkU29ydDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlSXRlbUJ1dHRvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGRhdGV0aW1lcGlja2Vycykge1xuICAgICAgICBkYXRldGltZXBpY2tlcnMuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgIG5ldyBUZW1wdXNEb21pbnVzKGVsLCB7XG4gICAgICAgICAgICAgICAgbG9jYWxpemF0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdDogJ2RkLU1NLXl5eXkgSEg6bW0nLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZGlzcGxheToge1xuICAgICAgICAgICAgICAgICAgICB2aWV3TW9kZTogJ2NhbGVuZGFyJyxcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50czoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVjYWRlczogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHllYXI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBtb250aDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBob3VyczogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbnV0ZXM6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmRzOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGFjdGlvbkJ1dHRvbkNsaWNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY3Rpb24tYnV0dG9uLWNsaWNrJyk7XG4gICAgY29uc3QgYWN0aW9uQnV0dG9uPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aW9uLWJ1dHRvbicpO1xuICAgIGlmIChhY3Rpb25CdXR0b25DbGlja3MpIHtcbiAgICAgICAgYWN0aW9uQnV0dG9uQ2xpY2tzLmZvckVhY2goZnVuY3Rpb24gKGFjdGlvbkJ1dHRvbkNsaWNrKSB7XG4gICAgICAgICAgICBhY3Rpb25CdXR0b25DbGljay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgYWN0aW9uQnV0dG9uLmNsaWNrKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cblxufSk7XG5cbiIsImltcG9ydCBDaGFydCBmcm9tICdjaGFydC5qcy9hdXRvJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBwcm9maXRDaGFydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZml0Q2hhcnRcIik7XG4gICAgICAgIGlmIChwcm9maXRDaGFydCkge1xuICAgICAgICAgICAgY29uc3QgZGF0YURlY2xhcmVkID0gcGFyc2VJbnQocHJvZml0Q2hhcnQuZGF0YXNldC5kZWNsYXJlZCk7XG4gICAgICAgICAgICBjb25zdCBkYXRhTm9EZWNsYXJlZCA9IHBhcnNlSW50KHByb2ZpdENoYXJ0LmRhdGFzZXQudW5kZWNsYXJlZCk7XG4gICAgICAgICAgICB2YXIgcHJvZml0RGF0YSA9IHtcbiAgICAgICAgICAgICAgICBsYWJlbHM6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJEZWNsYXLDqVwiLFxuICAgICAgICAgICAgICAgICAgICBcIk5vbiBkw6ljbGFyw6lcIixcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIGRhdGFzZXRzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IFtkYXRhRGVjbGFyZWQsIGRhdGFOb0RlY2xhcmVkXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIzFlZDdiY1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiI2ZmOTEwMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgbmV3IENoYXJ0KHByb2ZpdENoYXJ0LCB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3BpZScsXG4gICAgICAgICAgICAgICAgZGF0YTogcHJvZml0RGF0YSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHBsdWdpbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAndG9wJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0TDqWNsYXLDqSBWUyBOb24gZGVjbGFyw6knXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB2aWV3UGVyTW9udGhDaGFydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWV3LXBlci1tb250aCcpO1xuXG4gICAgICAgIGlmICh2aWV3UGVyTW9udGhDaGFydCkge1xuICAgICAgICAgICAgY29uc3QgbGFiZWxzID0gWydKYW52aWVyJywgJ0bDqXZyaWVyJywgJ01hcnMnLCAnQXZyaWwnLCAnTWFpJywgJ0p1aW4nLCAnSnVpbGxldCcsICdBb3V0JywgJ1NlcHRlbWJyZScsICdPY3RvYnJlJywgJ05vdmVtYnJlJywgJ0TDqWNlbWJyZSddO1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICBsYWJlbHM6IGxhYmVscyxcbiAgICAgICAgICAgICAgICBkYXRhc2V0czogW3tcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdEw6ljbGFyw6knLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBbMjYsIDU5LCA4MCwgODEsIDU2LCA1NSwgNDAsIDI2LCA1OSwgODAsIDgxLCA1Nl0sXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnTm9uIGTDqWNsYXLDqScsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IFsyNiwgNTksIDgwLCA4MSwgNTYsIDU1LCA0MCwgMjYsIDU5LCA4MCwgODEsIDU2XSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfTtcblxuXG5cbiAgICAgICAgICAgIG5ldyBDaGFydCh2aWV3UGVyTW9udGhDaGFydCwge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdiYXInLFxuICAgICAgICAgICAgICAgIGxhYmVsczogbGFiZWxzLFxuICAgICAgICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICBwbHVnaW5zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJHYWlucyBwYXIgbW9pcyBzdXIgbCdhbm7DqWUgZW4gY291cnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgc2NhbGVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB4OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVnaW5BdFplcm86IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2tlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVnaW5BdFplcm86IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2tlZDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsImltcG9ydCB7Q2FsZW5kYXJ9IGZyb20gJ0BmdWxsY2FsZW5kYXIvY29yZSc7XG5pbXBvcnQgZGF5R3JpZFBsdWdpbiBmcm9tICdAZnVsbGNhbGVuZGFyL2RheWdyaWQnO1xuaW1wb3J0IHRpbWVHcmlkUGx1Z2luIGZyb20gJ0BmdWxsY2FsZW5kYXIvdGltZWdyaWQnXG5pbXBvcnQgbGlzdFBsdWdpbiBmcm9tICdAZnVsbGNhbGVuZGFyL2xpc3QnO1xuaW1wb3J0IGludGVyYWN0aW9uUGx1Z2luIGZyb20gJ0BmdWxsY2FsZW5kYXIvaW50ZXJhY3Rpb24nO1xuXG5mdW5jdGlvbiB1cGRhdGVCb29raW5nRGF0ZShpbmZvKSB7XG4gICAgY29uc3Qgc3RhcnQgPSBpbmZvLmV2ZW50LnN0YXJ0U3RyO1xuICAgIGxldCBlbmQgPSBpbmZvLmV2ZW50LmVuZFN0cjtcbiAgICBlbmQgPSBlbmQgPyBlbmQgOiBzdGFydDtcbiAgICBjb25zdCBldmVudElkID0gaW5mby5ldmVudC5pZDtcbiAgICBjb25zb2xlLmxvZyhldmVudElkLCBzdGFydCwgZW5kKVxuICAgIGNvbnN0IHVwZGF0ZUJvb2tpbmdEYXRlc1VybCA9IFwiL2Jvb2tpbmcvXCIgKyBldmVudElkICsgXCIvZWRpdC1kYXRlcy9cIiArIHN0YXJ0ICsgXCIvXCIgKyBlbmQgKyBcIi9cIjtcblxuICAgIHdpbmRvdy5sb2NhdGlvbi5hc3NpZ24odXBkYXRlQm9va2luZ0RhdGVzVXJsKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGNhbGVuZGFyRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZnVsbC1jYWxlbmRhcicpO1xuICAgICAgICBpZiAoY2FsZW5kYXJFbCkge1xuICAgICAgICAgICAgY29uc3QgYm9va2luZ3MgPSBKU09OLnBhcnNlKGNhbGVuZGFyRWwuZGF0YXNldC5ib29raW5ncyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhib29raW5ncyk7XG4gICAgICAgICAgICBsZXQgY3VycmVudElkID0gbnVsbDtcblxuICAgICAgICAgICAgY29uc3QgY2FsZW5kYXIgPSBuZXcgQ2FsZW5kYXIoY2FsZW5kYXJFbCwge1xuICAgICAgICAgICAgICAgIGxvY2FsZTogJ2ZyJyxcbiAgICAgICAgICAgICAgICBwbHVnaW5zOiBbXG4gICAgICAgICAgICAgICAgICAgIGRheUdyaWRQbHVnaW4sXG4gICAgICAgICAgICAgICAgICAgIHRpbWVHcmlkUGx1Z2luLFxuICAgICAgICAgICAgICAgICAgICBsaXN0UGx1Z2luLFxuICAgICAgICAgICAgICAgICAgICBpbnRlcmFjdGlvblBsdWdpblxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgLy8gZGlzcGxheUV2ZW50VGltZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgLy8gZGVmYXVsdEFsbERheTogZmFsc2UsXG4gICAgICAgICAgICAgICAgZmlyc3REYXk6IDEsXG4gICAgICAgICAgICAgICAgc2VsZWN0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBpbml0aWFsVmlldzogJ2RheUdyaWRNb250aCcsXG4gICAgICAgICAgICAgICAgdGhlbWVTeXN0ZW06ICdib290c3RyYXAnLFxuICAgICAgICAgICAgICAgIGRheU1heEV2ZW50czogdHJ1ZSxcbiAgICAgICAgICAgICAgICBldmVudHM6IGJvb2tpbmdzLFxuICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ6IHtcbiAgICAgICAgICAgICAgICAgICAgcHJldjogJ1Byw6ljw6lkZW50JyxcbiAgICAgICAgICAgICAgICAgICAgbmV4dDogJ1N1aXZhbnQnLFxuICAgICAgICAgICAgICAgICAgICB0b2RheTogJ0F1am91cmRcXCdodWknLFxuICAgICAgICAgICAgICAgICAgICBtb250aDogJ01vaXMnLFxuICAgICAgICAgICAgICAgICAgICB3ZWVrOiAnU2VtYWluZScsXG4gICAgICAgICAgICAgICAgICAgIGRheTogJ0pvdXInLFxuICAgICAgICAgICAgICAgICAgICBsaXN0OiAnTGlzdGUnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYWxsRGF5VGV4dDogJ1RvdXRlIGxhIGpvdXJuw6llJyxcbiAgICAgICAgICAgICAgICBub0V2ZW50c1RleHQ6ICdBdWN1biDDqXbDqW5lbWVudCDDoCBhZmZpY2hlcicsXG4gICAgICAgICAgICAgICAgd2Vla1RleHRMb25nOiAnU2VtYWluZScsXG4gICAgICAgICAgICAgICAgd2Vla1RleHRTaG9ydDogJ1NlbScsXG4gICAgICAgICAgICAgICAgdGltZVRleHQ6ICdIZXVyZScsXG4gICAgICAgICAgICAgICAgd2Vla1RleHQ6ICdTZW1haW5lJyxcbiAgICAgICAgICAgICAgICBtb3JlTGlua1RleHQ6ICdWb2lyIHBsdXMnLFxuICAgICAgICAgICAgICAgIGhlYWRlclRvb2xiYXI6IHtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogJ3ByZXYsbmV4dCB0b2RheScsXG4gICAgICAgICAgICAgICAgICAgIGNlbnRlcjogJ3RpdGxlJyxcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6ICdkYXlHcmlkTW9udGgsdGltZUdyaWRXZWVrLHRpbWVHcmlkRGF5LGxpc3RXZWVrJ1xuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICBzZWxlY3Q6IChpbmZvKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gaW5mby5zdGFydFN0cjtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZW5kID0gaW5mby5lbmRTdHI7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVkaXRCb29raW5nVXJsID0gXCIvYm9va2luZy9uZXcvXCIgKyBzdGFydCArIFwiL1wiICsgZW5kICsgXCIvXCI7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5hc3NpZ24oZWRpdEJvb2tpbmdVcmwpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXZlbnRSZXNpemU6IChpbmZvKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUJvb2tpbmdEYXRlKGluZm8pO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXZlbnREcm9wOiAoaW5mbykgPT4ge1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVCb29raW5nRGF0ZShpbmZvKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRhdGVDbGljazogZnVuY3Rpb24gKGluZm8pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0ZSA9IGluZm8uZGF0ZVN0cjtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZWRpdEJvb2tpbmdVcmwgPSBcIi9ib29raW5nL25ldy9cIiArIGRhdGUgKyBcIi9cIiArIGRhdGUgKyBcIi9cIjtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmFzc2lnbihlZGl0Qm9va2luZ1VybCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBldmVudENsaWNrOiBmdW5jdGlvbiAoaW5mbykge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50SWQgPSBwYXJzZUludChpbmZvLmV2ZW50LmlkKTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBib29raW5ncyA9IEpTT04ucGFyc2UoY2FsZW5kYXJFbC5kYXRhc2V0LmJvb2tpbmdzKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZWRpdEJvb2tpbmdVcmwgPSBcIi9ib29raW5nL1wiICsgY3VycmVudElkICsgXCIvZWRpdC9cIjtcblxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uYXNzaWduKGVkaXRCb29raW5nVXJsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNhbGVuZGFyLnJlbmRlcigpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgdGlueW1jZSBmcm9tICd0aW55bWNlJztcclxuaW1wb3J0ICd0aW55bWNlL21vZGVscy9kb20nO1xyXG5cclxuLyogRGVmYXVsdCBpY29ucyBhcmUgcmVxdWlyZWQgZm9yIFRpbnlNQ0UgNS4zIG9yIGFib3ZlICovXHJcbmltcG9ydCAndGlueW1jZS9pY29ucy9kZWZhdWx0JztcclxuXHJcbi8qIEEgdGhlbWUgaXMgYWxzbyByZXF1aXJlZCAqL1xyXG5pbXBvcnQgJ3RpbnltY2UvdGhlbWVzL3NpbHZlcic7XHJcblxyXG4vKiBJbXBvcnQgdGhlIHNraW4gKi9cclxuaW1wb3J0ICd0aW55bWNlL3NraW5zL3VpL294aWRlL3NraW4uY3NzJztcclxuXHJcbi8qIEltcG9ydCBjb250ZW50IGNzcyAqL1xyXG5pbXBvcnQgJ3RpbnltY2Uvc2tpbnMvdWkvb3hpZGUvY29udGVudC5jc3MnO1xyXG5pbXBvcnQgJ3RpbnltY2Uvc2tpbnMvY29udGVudC9kZWZhdWx0L2NvbnRlbnQuY3NzJztcclxuXHJcbi8qIEltcG9ydCBwbHVnaW5zICovXHJcbmltcG9ydCAndGlueW1jZS9wbHVnaW5zL2Fkdmxpc3QnO1xyXG5pbXBvcnQgJ3RpbnltY2UvcGx1Z2lucy9jb2RlJztcclxuaW1wb3J0ICd0aW55bWNlL3BsdWdpbnMvZW1vdGljb25zJztcclxuaW1wb3J0ICd0aW55bWNlL3BsdWdpbnMvZW1vdGljb25zL2pzL2Vtb2ppcyc7XHJcbmltcG9ydCAndGlueW1jZS9wbHVnaW5zL2xpbmsnO1xyXG5pbXBvcnQgJ3RpbnltY2UvcGx1Z2lucy9saXN0cyc7XHJcbmltcG9ydCAndGlueW1jZS9wbHVnaW5zL3RhYmxlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGlueW1jZS5pbml0KHtcclxuICAgICAgICAgICAgc2VsZWN0b3I6ICcudGlueW1jZScsXHJcbiAgICAgICAgICAgIHBsdWdpbnM6ICdhZHZsaXN0IGNvZGUgZW1vdGljb25zIGxpbmsgbGlzdHMgdGFibGUnLFxyXG4gICAgICAgICAgICB0b29sYmFyOiAndW5kbyByZWRvIHwgYm9sZCBpdGFsaWMgcmVtb3ZlZm9ybWF0IHwgYnVsbGlzdCBudW1saXN0IHRhYmxlIHwgbGluayBlbW90aWNvbnMgJyxcclxuICAgICAgICAgICAgbWVudWJhcjogZmFsc2UsXHJcbiAgICAgICAgICAgIHN0YXR1c2JhcjogZmFsc2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiRnVsbENhbGVuZGFyIiwiVGlueU1DRSIsIkNoYXJ0cyIsIlRlbXB1c0RvbWludXMiLCJEYXRlcGlja2VyIiwiQ2hvaWNlcyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImRhdGVwaWNrZXJzIiwicXVlcnlTZWxlY3RvckFsbCIsImRhdGV0aW1lcGlja2VycyIsImZvckVhY2giLCJlbCIsImJ1dHRvbkNsYXNzIiwiZm9ybWF0IiwiYXV0b2hpZGUiLCJsYW5ndWFnZSIsImZvcm1Pd25lciIsInF1ZXJ5U2VsZWN0b3IiLCJmaWx0ZXJCb29raW5ncyIsImNob2ljZXNKc0VsZW1lbnRzIiwiY29uc29sZSIsImxvZyIsInNlYXJjaEVuYWJsZWQiLCJpdGVtU2VsZWN0VGV4dCIsInNob3VsZFNvcnQiLCJyZW1vdmVJdGVtQnV0dG9uIiwiZm9ybUJvb2tpbmciLCJib29raW5nIiwiSlNPTiIsInBhcnNlIiwiZGF0YXNldCIsImRvZ0lkc1RvU2VsZWN0IiwiZG9ncyIsIm1hcCIsImRvZyIsImlkIiwiY2hvaWNlSnNFbGVtZW50IiwiaSIsIm9wdGlvbnMiLCJsZW5ndGgiLCJvcHRpb24iLCJpbmNsdWRlcyIsInBhcnNlSW50IiwidmFsdWUiLCJzZWxlY3RlZCIsImxvY2FsaXphdGlvbiIsImRpc3BsYXkiLCJ2aWV3TW9kZSIsImNvbXBvbmVudHMiLCJkZWNhZGVzIiwieWVhciIsIm1vbnRoIiwiZGF0ZSIsImhvdXJzIiwibWludXRlcyIsInNlY29uZHMiLCJhY3Rpb25CdXR0b25DbGlja3MiLCJhY3Rpb25CdXR0b24iLCJhY3Rpb25CdXR0b25DbGljayIsImUiLCJjbGljayIsIkNoYXJ0IiwicHJvZml0Q2hhcnQiLCJnZXRFbGVtZW50QnlJZCIsImRhdGFEZWNsYXJlZCIsImRlY2xhcmVkIiwiZGF0YU5vRGVjbGFyZWQiLCJ1bmRlY2xhcmVkIiwicHJvZml0RGF0YSIsImxhYmVscyIsImRhdGFzZXRzIiwiZGF0YSIsImJhY2tncm91bmRDb2xvciIsInR5cGUiLCJyZXNwb25zaXZlIiwicGx1Z2lucyIsImxlZ2VuZCIsInBvc2l0aW9uIiwidGl0bGUiLCJ0ZXh0Iiwidmlld1Blck1vbnRoQ2hhcnQiLCJsYWJlbCIsImJvcmRlcldpZHRoIiwic2NhbGVzIiwieCIsImJlZ2luQXRaZXJvIiwic3RhY2tlZCIsInkiLCJDYWxlbmRhciIsImRheUdyaWRQbHVnaW4iLCJ0aW1lR3JpZFBsdWdpbiIsImxpc3RQbHVnaW4iLCJpbnRlcmFjdGlvblBsdWdpbiIsInVwZGF0ZUJvb2tpbmdEYXRlIiwiaW5mbyIsInN0YXJ0IiwiZXZlbnQiLCJzdGFydFN0ciIsImVuZCIsImVuZFN0ciIsImV2ZW50SWQiLCJ1cGRhdGVCb29raW5nRGF0ZXNVcmwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImFzc2lnbiIsImNhbGVuZGFyRWwiLCJib29raW5ncyIsImN1cnJlbnRJZCIsImNhbGVuZGFyIiwibG9jYWxlIiwiZmlyc3REYXkiLCJzZWxlY3RhYmxlIiwiZWRpdGFibGUiLCJpbml0aWFsVmlldyIsInRoZW1lU3lzdGVtIiwiZGF5TWF4RXZlbnRzIiwiZXZlbnRzIiwiYnV0dG9uVGV4dCIsInByZXYiLCJuZXh0IiwidG9kYXkiLCJ3ZWVrIiwiZGF5IiwibGlzdCIsImFsbERheVRleHQiLCJub0V2ZW50c1RleHQiLCJ3ZWVrVGV4dExvbmciLCJ3ZWVrVGV4dFNob3J0IiwidGltZVRleHQiLCJ3ZWVrVGV4dCIsIm1vcmVMaW5rVGV4dCIsImhlYWRlclRvb2xiYXIiLCJsZWZ0IiwiY2VudGVyIiwicmlnaHQiLCJzZWxlY3QiLCJlZGl0Qm9va2luZ1VybCIsImV2ZW50UmVzaXplIiwiZXZlbnREcm9wIiwiZGF0ZUNsaWNrIiwiZGF0ZVN0ciIsImV2ZW50Q2xpY2siLCJyZW5kZXIiLCJ0aW55bWNlIiwiaW5pdCIsInNlbGVjdG9yIiwidG9vbGJhciIsIm1lbnViYXIiLCJzdGF0dXNiYXIiXSwic291cmNlUm9vdCI6IiJ9