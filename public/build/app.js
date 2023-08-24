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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEyQjtBQUN3QjtBQUNWO0FBQ0w7QUFDbUI7QUFDUDtBQUNmO0FBRWpDQSxrRUFBWSxFQUFFO0FBQ2RDLDZEQUFPLEVBQUU7QUFDVEMsMkRBQU0sRUFBRTtBQUVSSSxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQVk7RUFDdEQsSUFBTUMsV0FBVyxHQUFHRixRQUFRLENBQUNHLGdCQUFnQixDQUFDLGFBQWEsQ0FBQztFQUM1RCxJQUFNQyxlQUFlLEdBQUdKLFFBQVEsQ0FBQ0csZ0JBQWdCLENBQUMsaUJBQWlCLENBQUM7RUFDcEUsSUFBSUQsV0FBVyxFQUFFO0lBQ2JBLFdBQVcsQ0FBQ0csT0FBTyxDQUFDLFVBQVVDLEVBQUUsRUFBRTtNQUM5QixPQUFPLElBQUlSLDZEQUFVLENBQUNRLEVBQUUsRUFBRTtRQUN0QkMsV0FBVyxFQUFFLEtBQUs7UUFDbEJDLE1BQU0sRUFBRSxZQUFZO1FBQ3BCQyxRQUFRLEVBQUUsSUFBSTtRQUNkQyxRQUFRLEVBQUU7TUFDZCxDQUFDLENBQUM7SUFDTixDQUFDLENBQUM7RUFDTjtFQUVBLElBQU1DLFNBQVMsR0FBR1gsUUFBUSxDQUFDWSxhQUFhLENBQUMsb0JBQW9CLENBQUM7RUFDOUQsSUFBTUMsY0FBYyxHQUFHYixRQUFRLENBQUNZLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQztFQUN0RSxJQUFJRCxTQUFTLElBQUlFLGNBQWMsRUFBRTtJQUM3QixJQUFNQyxpQkFBaUIsR0FBR2QsUUFBUSxDQUFDRyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUM7SUFDbEVZLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixpQkFBaUIsQ0FBQztJQUM5QixJQUFJQSxpQkFBaUIsRUFBRTtNQUNuQkEsaUJBQWlCLENBQUNULE9BQU8sQ0FBQyxVQUFVQyxFQUFFLEVBQUU7UUFDcEMsT0FBTyxJQUFJUCxvREFBTyxDQUFDTyxFQUFFLEVBQUU7VUFDbkJXLGFBQWEsRUFBRSxJQUFJO1VBQ25CQyxjQUFjLEVBQUUsRUFBRTtVQUNsQkMsVUFBVSxFQUFFLElBQUk7VUFDaEJDLGdCQUFnQixFQUFFO1FBQ3RCLENBQUMsQ0FBQztNQUNOLENBQUMsQ0FBQztJQUNOO0VBQ0o7RUFFQSxJQUFNQyxXQUFXLEdBQUdyQixRQUFRLENBQUNZLGFBQWEsQ0FBQyxjQUFjLENBQUM7RUFDMUQsSUFBSVMsV0FBVyxFQUFFO0lBQ2IsSUFBTVAsa0JBQWlCLEdBQUdkLFFBQVEsQ0FBQ0csZ0JBQWdCLENBQUMsYUFBYSxDQUFDO0lBQ2xFLElBQU1tQixPQUFPLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDSCxXQUFXLENBQUNJLE9BQU8sQ0FBQ0gsT0FBTyxDQUFDO0lBRXZELElBQU1JLGNBQWMsR0FBR0osT0FBTyxDQUFDSyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxVQUFBQyxHQUFHO01BQUEsT0FBSUEsR0FBRyxDQUFDQyxFQUFFO0lBQUEsRUFBQztJQUV0RCxJQUFJaEIsa0JBQWlCLEVBQUU7TUFDbkJBLGtCQUFpQixDQUFDVCxPQUFPLENBQUMsVUFBVTBCLGVBQWUsRUFBRTtRQUNqRCxLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR0QsZUFBZSxDQUFDRSxPQUFPLENBQUNDLE1BQU0sRUFBRUYsQ0FBQyxFQUFFLEVBQUU7VUFDckQsSUFBTUcsTUFBTSxHQUFHSixlQUFlLENBQUNFLE9BQU8sQ0FBQ0QsQ0FBQyxDQUFDO1VBQ3pDLElBQUlOLGNBQWMsQ0FBQ1UsUUFBUSxDQUFDQyxRQUFRLENBQUNGLE1BQU0sQ0FBQ0csS0FBSyxDQUFDLENBQUMsRUFBRTtZQUNqREgsTUFBTSxDQUFDSSxRQUFRLEdBQUcsSUFBSTtVQUMxQjtRQUNKO1FBRUEsT0FBTyxJQUFJeEMsb0RBQU8sQ0FBQ2dDLGVBQWUsRUFBRTtVQUNoQ2QsYUFBYSxFQUFFLElBQUk7VUFDbkJDLGNBQWMsRUFBRSxFQUFFO1VBQ2xCQyxVQUFVLEVBQUUsSUFBSTtVQUNoQkMsZ0JBQWdCLEVBQUU7UUFDdEIsQ0FBQyxDQUFDO01BQ04sQ0FBQyxDQUFDO0lBQ047RUFDSjtFQUVBLElBQUloQixlQUFlLEVBQUU7SUFDakJBLGVBQWUsQ0FBQ0MsT0FBTyxDQUFDLFVBQVVDLEVBQUUsRUFBRTtNQUNsQyxJQUFJVCxvRUFBYSxDQUFDUyxFQUFFLEVBQUU7UUFDbEJrQyxZQUFZLEVBQUU7VUFDVmhDLE1BQU0sRUFBRTtRQUNaLENBQUM7UUFDRGlDLE9BQU8sRUFBRTtVQUNMQyxRQUFRLEVBQUUsVUFBVTtVQUNwQkMsVUFBVSxFQUFFO1lBQ1JDLE9BQU8sRUFBRSxJQUFJO1lBQ2JDLElBQUksRUFBRSxJQUFJO1lBQ1ZDLEtBQUssRUFBRSxJQUFJO1lBQ1hDLElBQUksRUFBRSxJQUFJO1lBQ1ZDLEtBQUssRUFBRSxJQUFJO1lBQ1hDLE9BQU8sRUFBRSxJQUFJO1lBQ2JDLE9BQU8sRUFBRTtVQUNiO1FBQ0o7TUFDSixDQUFDLENBQUM7SUFDTixDQUFDLENBQUM7RUFDTjtFQUVBLElBQU1DLGtCQUFrQixHQUFHbkQsUUFBUSxDQUFDRyxnQkFBZ0IsQ0FBQyxzQkFBc0IsQ0FBQztFQUM1RSxJQUFNaUQsWUFBWSxHQUFFcEQsUUFBUSxDQUFDWSxhQUFhLENBQUMsZ0JBQWdCLENBQUM7RUFDNUQsSUFBSXVDLGtCQUFrQixFQUFFO0lBQ3BCQSxrQkFBa0IsQ0FBQzlDLE9BQU8sQ0FBQyxVQUFVZ0QsaUJBQWlCLEVBQUU7TUFDcERBLGlCQUFpQixDQUFDcEQsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQVVxRCxDQUFDLEVBQUU7UUFDckRGLFlBQVksQ0FBQ0csS0FBSyxFQUFFO01BQ3hCLENBQUMsQ0FBQztJQUNOLENBQUMsQ0FBQztFQUNOO0FBSUosQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2RytCO0FBRWpDLDZCQUFlLHNDQUFZO0VBQ3ZCdkQsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxZQUFZO0lBQ3RELElBQU13RCxXQUFXLEdBQUd6RCxRQUFRLENBQUMwRCxjQUFjLENBQUMsYUFBYSxDQUFDO0lBRTFELElBQUlELFdBQVcsRUFBRTtNQUNiMUMsT0FBTyxDQUFDQyxHQUFHLENBQUN5QyxXQUFXLENBQUM7TUFFeEIsSUFBTUUsWUFBWSxHQUFHdEIsUUFBUSxDQUFDb0IsV0FBVyxDQUFDaEMsT0FBTyxDQUFDbUMsUUFBUSxDQUFDO01BQzNELElBQU1DLGNBQWMsR0FBR3hCLFFBQVEsQ0FBQ29CLFdBQVcsQ0FBQ2hDLE9BQU8sQ0FBQ3FDLFVBQVUsQ0FBQztNQUMvRC9DLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDMkMsWUFBWSxDQUFDO01BQ3pCNUMsT0FBTyxDQUFDQyxHQUFHLENBQUM2QyxjQUFjLENBQUM7TUFHM0IsSUFBSUUsVUFBVSxHQUFHO1FBQ2JDLE1BQU0sRUFBRSxDQUNKLFVBQVUsRUFDVixhQUFhLENBQ2hCO1FBQ0RDLFFBQVEsRUFBRSxDQUNOO1VBQ0lDLElBQUksRUFBRSxDQUFDUCxZQUFZLEVBQUVFLGNBQWMsQ0FBQztVQUNwQ00sZUFBZSxFQUFFLENBQ2IsU0FBUyxFQUNULFNBQVM7UUFHakIsQ0FBQztNQUNULENBQUM7TUFFRCxJQUFJWCxxREFBSyxDQUFDQyxXQUFXLEVBQUU7UUFDbkJXLElBQUksRUFBRSxLQUFLO1FBQ1hGLElBQUksRUFBRUgsVUFBVTtRQUNoQjlCLE9BQU8sRUFBRTtVQUNMb0MsVUFBVSxFQUFFLElBQUk7VUFDaEJDLE9BQU8sRUFBRTtZQUNMQyxNQUFNLEVBQUU7Y0FDSkMsUUFBUSxFQUFFO1lBQ2QsQ0FBQztZQUNEQyxLQUFLLEVBQUU7Y0FDSGhDLE9BQU8sRUFBRSxJQUFJO2NBQ2JpQyxJQUFJLEVBQUU7WUFDVjtVQUNKO1FBQ0o7TUFDSixDQUFDLENBQUM7SUFDTjtFQUVKLENBQUMsQ0FBQztBQUVOOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkQ0QztBQUNNO0FBQ0M7QUFDUDtBQUNjO0FBRTFELFNBQVNNLGlCQUFpQkEsQ0FBQ0MsSUFBSSxFQUFFO0VBQzdCLElBQU1DLEtBQUssR0FBR0QsSUFBSSxDQUFDRSxLQUFLLENBQUNDLFFBQVE7RUFDakMsSUFBSUMsR0FBRyxHQUFHSixJQUFJLENBQUNFLEtBQUssQ0FBQ0csTUFBTTtFQUMzQkQsR0FBRyxHQUFHQSxHQUFHLEdBQUdBLEdBQUcsR0FBR0gsS0FBSztFQUN2QixJQUFNSyxPQUFPLEdBQUdOLElBQUksQ0FBQ0UsS0FBSyxDQUFDckQsRUFBRTtFQUM3QmYsT0FBTyxDQUFDQyxHQUFHLENBQUN1RSxPQUFPLEVBQUVMLEtBQUssRUFBRUcsR0FBRyxDQUFDO0VBQ2hDLElBQU1HLHFCQUFxQixHQUFHLFdBQVcsR0FBR0QsT0FBTyxHQUFHLGNBQWMsR0FBR0wsS0FBSyxHQUFHLEdBQUcsR0FBR0csR0FBRyxHQUFHLEdBQUc7RUFFOUZJLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDQyxNQUFNLENBQUNILHFCQUFxQixDQUFDO0FBQ2pEO0FBRUEsNkJBQWUsc0NBQVk7RUFDdkJ4RixRQUFRLENBQUNDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQVk7SUFDdEQsSUFBTTJGLFVBQVUsR0FBRzVGLFFBQVEsQ0FBQ1ksYUFBYSxDQUFDLGdCQUFnQixDQUFDO0lBQzNELElBQUlnRixVQUFVLEVBQUU7TUFDWixJQUFNQyxRQUFRLEdBQUd0RSxJQUFJLENBQUNDLEtBQUssQ0FBQ29FLFVBQVUsQ0FBQ25FLE9BQU8sQ0FBQ29FLFFBQVEsQ0FBQztNQUN4RDlFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDNkUsUUFBUSxDQUFDO01BQ3JCLElBQUlDLFNBQVMsR0FBRyxJQUFJO01BRXBCLElBQU1DLFFBQVEsR0FBRyxJQUFJcEIsd0RBQVEsQ0FBQ2lCLFVBQVUsRUFBRTtRQUN0Q0ksTUFBTSxFQUFFLElBQUk7UUFDWjFCLE9BQU8sRUFBRSxDQUNMTSw2REFBYSxFQUNiQyw4REFBYyxFQUNkQywwREFBVSxFQUNWQyxpRUFBaUIsQ0FDcEI7UUFDRDtRQUNBO1FBQ0FrQixVQUFVLEVBQUUsSUFBSTtRQUNoQkMsUUFBUSxFQUFFLElBQUk7UUFDZEMsV0FBVyxFQUFFLGNBQWM7UUFDM0JDLFdBQVcsRUFBRSxXQUFXO1FBQ3hCQyxZQUFZLEVBQUUsSUFBSTtRQUNsQkMsTUFBTSxFQUFFVCxRQUFRO1FBQ2hCVSxVQUFVLEVBQUU7VUFDUkMsSUFBSSxFQUFFLFdBQVc7VUFDakJDLElBQUksRUFBRSxTQUFTO1VBQ2ZDLEtBQUssRUFBRSxjQUFjO1VBQ3JCNUQsS0FBSyxFQUFFLE1BQU07VUFDYjZELElBQUksRUFBRSxTQUFTO1VBQ2ZDLEdBQUcsRUFBRSxNQUFNO1VBQ1hDLElBQUksRUFBRTtRQUNWLENBQUM7UUFDREMsVUFBVSxFQUFFLGtCQUFrQjtRQUM5QkMsWUFBWSxFQUFFLDRCQUE0QjtRQUMxQ0MsWUFBWSxFQUFFLFNBQVM7UUFDdkJDLGFBQWEsRUFBRSxLQUFLO1FBQ3BCQyxRQUFRLEVBQUUsT0FBTztRQUNqQkMsUUFBUSxFQUFFLFNBQVM7UUFDbkJDLFlBQVksRUFBRSxXQUFXO1FBQ3pCQyxhQUFhLEVBQUU7VUFDWEMsSUFBSSxFQUFFLGlCQUFpQjtVQUN2QkMsTUFBTSxFQUFFLE9BQU87VUFDZkMsS0FBSyxFQUFFO1FBQ1gsQ0FBQztRQUVEQyxNQUFNLEVBQUUsU0FBQUEsT0FBQ3hDLElBQUksRUFBSztVQUNkLElBQU1DLEtBQUssR0FBR0QsSUFBSSxDQUFDRyxRQUFRO1VBQzNCLElBQU1DLEdBQUcsR0FBR0osSUFBSSxDQUFDSyxNQUFNO1VBQ3ZCLElBQU1vQyxjQUFjLEdBQUcsZUFBZSxHQUFHeEMsS0FBSyxHQUFHLEdBQUcsR0FBR0csR0FBRyxHQUFHLEdBQUc7VUFDaEVJLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDQyxNQUFNLENBQUMrQixjQUFjLENBQUM7UUFDMUMsQ0FBQztRQUNEQyxXQUFXLEVBQUUsU0FBQUEsWUFBQzFDLElBQUksRUFBSztVQUNuQkQsaUJBQWlCLENBQUNDLElBQUksQ0FBQztRQUMzQixDQUFDO1FBQ0QyQyxTQUFTLEVBQUUsU0FBQUEsVUFBQzNDLElBQUksRUFBSztVQUNqQkQsaUJBQWlCLENBQUNDLElBQUksQ0FBQztRQUMzQixDQUFDO1FBQ0Q0QyxTQUFTLEVBQUUsU0FBQUEsVUFBVTVDLElBQUksRUFBRTtVQUN2QixJQUFNbEMsSUFBSSxHQUFHa0MsSUFBSSxDQUFDNkMsT0FBTztVQUN6QixJQUFNSixjQUFjLEdBQUcsZUFBZSxHQUFHM0UsSUFBSSxHQUFHLEdBQUcsR0FBR0EsSUFBSSxHQUFHLEdBQUc7VUFDaEUwQyxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDK0IsY0FBYyxDQUFDO1FBQzFDLENBQUM7UUFDREssVUFBVSxFQUFFLFNBQUFBLFdBQVU5QyxJQUFJLEVBQUU7VUFDeEJhLFNBQVMsR0FBR3pELFFBQVEsQ0FBQzRDLElBQUksQ0FBQ0UsS0FBSyxDQUFDckQsRUFBRSxDQUFDO1VBRW5DLElBQU0rRCxRQUFRLEdBQUd0RSxJQUFJLENBQUNDLEtBQUssQ0FBQ29FLFVBQVUsQ0FBQ25FLE9BQU8sQ0FBQ29FLFFBQVEsQ0FBQztVQUN4RCxJQUFNNkIsY0FBYyxHQUFHLFdBQVcsR0FBRzVCLFNBQVMsR0FBRyxRQUFRO1VBRXpETCxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDK0IsY0FBYyxDQUFDO1FBQzFDO01BQ0osQ0FBQyxDQUFDO01BQ0YzQixRQUFRLENBQUNpQyxNQUFNLEVBQUU7SUFDckI7RUFDSixDQUFDLENBQUM7QUFDTjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUY4QjtBQUNGOztBQUU1QjtBQUMrQjs7QUFFL0I7QUFDK0I7O0FBRS9CO0FBQ3lDOztBQUV6QztBQUM0QztBQUNPOztBQUVuRDtBQUNpQztBQUNIO0FBQ0s7QUFDVTtBQUNmO0FBQ0M7QUFDQTtBQUUvQiw2QkFBZSxzQ0FBWTtFQUN2QmhJLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsWUFBWTtJQUN0RGdJLG1EQUFZLENBQUM7TUFDVEUsUUFBUSxFQUFFLFVBQVU7TUFDcEI3RCxPQUFPLEVBQUUseUNBQXlDO01BQ2xEOEQsT0FBTyxFQUFFLGdGQUFnRjtNQUN6RkMsT0FBTyxFQUFFLEtBQUs7TUFDZEMsU0FBUyxFQUFFO0lBQ2YsQ0FBQyxDQUFDO0VBQ04sQ0FBQyxDQUFDO0FBQ047Ozs7Ozs7Ozs7O0FDbkNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9jaGFydC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9mdWxsX2NhbGVuZGFyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL3RpbnlfbWNlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL3N0eWxlcy9hcHAuc2Nzcyc7XG5pbXBvcnQgRnVsbENhbGVuZGFyIGZyb20gXCIuL3NjcmlwdHMvZnVsbF9jYWxlbmRhclwiO1xuaW1wb3J0IFRpbnlNQ0UgZnJvbSBcIi4vc2NyaXB0cy90aW55X21jZVwiO1xuaW1wb3J0IENoYXJ0cyBmcm9tIFwiLi9zY3JpcHRzL2NoYXJ0XCJcbmltcG9ydCB7VGVtcHVzRG9taW51c30gZnJvbSAnQGVvbmFzZGFuL3RlbXB1cy1kb21pbnVzJztcbmltcG9ydCB7RGF0ZXBpY2tlcn0gZnJvbSAndmFuaWxsYWpzLWRhdGVwaWNrZXInO1xuaW1wb3J0IENob2ljZXMgZnJvbSAnY2hvaWNlcy5qcyc7XG5cbkZ1bGxDYWxlbmRhcigpO1xuVGlueU1DRSgpO1xuQ2hhcnRzKCk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgZGF0ZXBpY2tlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGF0ZXBpY2tlcicpO1xuICAgIGNvbnN0IGRhdGV0aW1lcGlja2VycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYXRldGltZXBpY2tlcicpO1xuICAgIGlmIChkYXRlcGlja2Vycykge1xuICAgICAgICBkYXRlcGlja2Vycy5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlcGlja2VyKGVsLCB7XG4gICAgICAgICAgICAgICAgYnV0dG9uQ2xhc3M6ICdidG4nLFxuICAgICAgICAgICAgICAgIGZvcm1hdDogJ3l5eXktbW0tZGQnLFxuICAgICAgICAgICAgICAgIGF1dG9oaWRlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGxhbmd1YWdlOiAnZnItRlInLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGZvcm1Pd25lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bbmFtZT1cIm93bmVyXCJdJyk7XG4gICAgY29uc3QgZmlsdGVyQm9va2luZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmlsdGVyX2Jvb2tpbmdzX2RvZ3MnKTtcbiAgICBpZiAoZm9ybU93bmVyIHx8IGZpbHRlckJvb2tpbmdzKSB7XG4gICAgICAgIGNvbnN0IGNob2ljZXNKc0VsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNob2ljZXMtanMnKTtcbiAgICAgICAgY29uc29sZS5sb2coY2hvaWNlc0pzRWxlbWVudHMpXG4gICAgICAgIGlmIChjaG9pY2VzSnNFbGVtZW50cykge1xuICAgICAgICAgICAgY2hvaWNlc0pzRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENob2ljZXMoZWwsIHtcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoRW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgaXRlbVNlbGVjdFRleHQ6ICcnLFxuICAgICAgICAgICAgICAgICAgICBzaG91bGRTb3J0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICByZW1vdmVJdGVtQnV0dG9uOiB0cnVlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBmb3JtQm9va2luZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib29raW5nRm9ybScpO1xuICAgIGlmIChmb3JtQm9va2luZykge1xuICAgICAgICBjb25zdCBjaG9pY2VzSnNFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaG9pY2VzLWpzJyk7XG4gICAgICAgIGNvbnN0IGJvb2tpbmcgPSBKU09OLnBhcnNlKGZvcm1Cb29raW5nLmRhdGFzZXQuYm9va2luZyk7XG5cbiAgICAgICAgY29uc3QgZG9nSWRzVG9TZWxlY3QgPSBib29raW5nLmRvZ3MubWFwKGRvZyA9PiBkb2cuaWQpO1xuXG4gICAgICAgIGlmIChjaG9pY2VzSnNFbGVtZW50cykge1xuICAgICAgICAgICAgY2hvaWNlc0pzRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoY2hvaWNlSnNFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaG9pY2VKc0VsZW1lbnQub3B0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb24gPSBjaG9pY2VKc0VsZW1lbnQub3B0aW9uc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRvZ0lkc1RvU2VsZWN0LmluY2x1ZGVzKHBhcnNlSW50KG9wdGlvbi52YWx1ZSkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDaG9pY2VzKGNob2ljZUpzRWxlbWVudCwge1xuICAgICAgICAgICAgICAgICAgICBzZWFyY2hFbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBpdGVtU2VsZWN0VGV4dDogJycsXG4gICAgICAgICAgICAgICAgICAgIHNob3VsZFNvcnQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUl0ZW1CdXR0b246IHRydWUsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChkYXRldGltZXBpY2tlcnMpIHtcbiAgICAgICAgZGF0ZXRpbWVwaWNrZXJzLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICBuZXcgVGVtcHVzRG9taW51cyhlbCwge1xuICAgICAgICAgICAgICAgIGxvY2FsaXphdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6ICdkZC1NTS15eXl5IEhIOm1tJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IHtcbiAgICAgICAgICAgICAgICAgICAgdmlld01vZGU6ICdjYWxlbmRhcicsXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlY2FkZXM6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB5ZWFyOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9udGg6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgaG91cnM6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW51dGVzOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2Vjb25kczogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBhY3Rpb25CdXR0b25DbGlja3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWN0aW9uLWJ1dHRvbi1jbGljaycpO1xuICAgIGNvbnN0IGFjdGlvbkJ1dHRvbj0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGlvbi1idXR0b24nKTtcbiAgICBpZiAoYWN0aW9uQnV0dG9uQ2xpY2tzKSB7XG4gICAgICAgIGFjdGlvbkJ1dHRvbkNsaWNrcy5mb3JFYWNoKGZ1bmN0aW9uIChhY3Rpb25CdXR0b25DbGljaykge1xuICAgICAgICAgICAgYWN0aW9uQnV0dG9uQ2xpY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIGFjdGlvbkJ1dHRvbi5jbGljaygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG5cbn0pO1xuXG4iLCJpbXBvcnQgQ2hhcnQgZnJvbSAnY2hhcnQuanMvYXV0bydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgcHJvZml0Q2hhcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2ZpdENoYXJ0XCIpO1xyXG5cclxuICAgICAgICBpZiAocHJvZml0Q2hhcnQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocHJvZml0Q2hhcnQpXHJcblxyXG4gICAgICAgICAgICBjb25zdCBkYXRhRGVjbGFyZWQgPSBwYXJzZUludChwcm9maXRDaGFydC5kYXRhc2V0LmRlY2xhcmVkKTtcclxuICAgICAgICAgICAgY29uc3QgZGF0YU5vRGVjbGFyZWQgPSBwYXJzZUludChwcm9maXRDaGFydC5kYXRhc2V0LnVuZGVjbGFyZWQpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhRGVjbGFyZWQpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGFOb0RlY2xhcmVkKVxyXG5cclxuXHJcbiAgICAgICAgICAgIHZhciBwcm9maXREYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgbGFiZWxzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCJEZWNsYXJlZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiTm8gZGVjbGFyZWRcIixcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBkYXRhc2V0czogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogW2RhdGFEZWNsYXJlZCwgZGF0YU5vRGVjbGFyZWRdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIzFlZDdiY1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIjZmY5MTAyXCIsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIG5ldyBDaGFydChwcm9maXRDaGFydCwge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogJ3BpZScsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBwcm9maXREYXRhLFxyXG4gICAgICAgICAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgcGx1Z2luczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWdlbmQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAndG9wJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnRMOpY2xhcmVkIFZTIE5vIGRlY2xhcmVkJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxufVxyXG4iLCJpbXBvcnQge0NhbGVuZGFyfSBmcm9tICdAZnVsbGNhbGVuZGFyL2NvcmUnO1xuaW1wb3J0IGRheUdyaWRQbHVnaW4gZnJvbSAnQGZ1bGxjYWxlbmRhci9kYXlncmlkJztcbmltcG9ydCB0aW1lR3JpZFBsdWdpbiBmcm9tICdAZnVsbGNhbGVuZGFyL3RpbWVncmlkJ1xuaW1wb3J0IGxpc3RQbHVnaW4gZnJvbSAnQGZ1bGxjYWxlbmRhci9saXN0JztcbmltcG9ydCBpbnRlcmFjdGlvblBsdWdpbiBmcm9tICdAZnVsbGNhbGVuZGFyL2ludGVyYWN0aW9uJztcblxuZnVuY3Rpb24gdXBkYXRlQm9va2luZ0RhdGUoaW5mbykge1xuICAgIGNvbnN0IHN0YXJ0ID0gaW5mby5ldmVudC5zdGFydFN0cjtcbiAgICBsZXQgZW5kID0gaW5mby5ldmVudC5lbmRTdHI7XG4gICAgZW5kID0gZW5kID8gZW5kIDogc3RhcnQ7XG4gICAgY29uc3QgZXZlbnRJZCA9IGluZm8uZXZlbnQuaWQ7XG4gICAgY29uc29sZS5sb2coZXZlbnRJZCwgc3RhcnQsIGVuZClcbiAgICBjb25zdCB1cGRhdGVCb29raW5nRGF0ZXNVcmwgPSBcIi9ib29raW5nL1wiICsgZXZlbnRJZCArIFwiL2VkaXQtZGF0ZXMvXCIgKyBzdGFydCArIFwiL1wiICsgZW5kICsgXCIvXCI7XG5cbiAgICB3aW5kb3cubG9jYXRpb24uYXNzaWduKHVwZGF0ZUJvb2tpbmdEYXRlc1VybCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBjYWxlbmRhckVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZ1bGwtY2FsZW5kYXInKTtcbiAgICAgICAgaWYgKGNhbGVuZGFyRWwpIHtcbiAgICAgICAgICAgIGNvbnN0IGJvb2tpbmdzID0gSlNPTi5wYXJzZShjYWxlbmRhckVsLmRhdGFzZXQuYm9va2luZ3MpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYm9va2luZ3MpO1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRJZCA9IG51bGw7XG5cbiAgICAgICAgICAgIGNvbnN0IGNhbGVuZGFyID0gbmV3IENhbGVuZGFyKGNhbGVuZGFyRWwsIHtcbiAgICAgICAgICAgICAgICBsb2NhbGU6ICdmcicsXG4gICAgICAgICAgICAgICAgcGx1Z2luczogW1xuICAgICAgICAgICAgICAgICAgICBkYXlHcmlkUGx1Z2luLFxuICAgICAgICAgICAgICAgICAgICB0aW1lR3JpZFBsdWdpbixcbiAgICAgICAgICAgICAgICAgICAgbGlzdFBsdWdpbixcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJhY3Rpb25QbHVnaW5cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIC8vIGRpc3BsYXlFdmVudFRpbWU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIC8vIGRlZmF1bHRBbGxEYXk6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNlbGVjdGFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgaW5pdGlhbFZpZXc6ICdkYXlHcmlkTW9udGgnLFxuICAgICAgICAgICAgICAgIHRoZW1lU3lzdGVtOiAnYm9vdHN0cmFwJyxcbiAgICAgICAgICAgICAgICBkYXlNYXhFdmVudHM6IHRydWUsXG4gICAgICAgICAgICAgICAgZXZlbnRzOiBib29raW5ncyxcbiAgICAgICAgICAgICAgICBidXR0b25UZXh0OiB7XG4gICAgICAgICAgICAgICAgICAgIHByZXY6ICdQcsOpY8OpZGVudCcsXG4gICAgICAgICAgICAgICAgICAgIG5leHQ6ICdTdWl2YW50JyxcbiAgICAgICAgICAgICAgICAgICAgdG9kYXk6ICdBdWpvdXJkXFwnaHVpJyxcbiAgICAgICAgICAgICAgICAgICAgbW9udGg6ICdNb2lzJyxcbiAgICAgICAgICAgICAgICAgICAgd2VlazogJ1NlbWFpbmUnLFxuICAgICAgICAgICAgICAgICAgICBkYXk6ICdKb3VyJyxcbiAgICAgICAgICAgICAgICAgICAgbGlzdDogJ0xpc3RlJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGFsbERheVRleHQ6ICdUb3V0ZSBsYSBqb3VybsOpZScsXG4gICAgICAgICAgICAgICAgbm9FdmVudHNUZXh0OiAnQXVjdW4gw6l2w6luZW1lbnQgw6AgYWZmaWNoZXInLFxuICAgICAgICAgICAgICAgIHdlZWtUZXh0TG9uZzogJ1NlbWFpbmUnLFxuICAgICAgICAgICAgICAgIHdlZWtUZXh0U2hvcnQ6ICdTZW0nLFxuICAgICAgICAgICAgICAgIHRpbWVUZXh0OiAnSGV1cmUnLFxuICAgICAgICAgICAgICAgIHdlZWtUZXh0OiAnU2VtYWluZScsXG4gICAgICAgICAgICAgICAgbW9yZUxpbmtUZXh0OiAnVm9pciBwbHVzJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJUb29sYmFyOiB7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6ICdwcmV2LG5leHQgdG9kYXknLFxuICAgICAgICAgICAgICAgICAgICBjZW50ZXI6ICd0aXRsZScsXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAnZGF5R3JpZE1vbnRoLHRpbWVHcmlkV2Vlayx0aW1lR3JpZERheSxsaXN0V2VlaydcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgc2VsZWN0OiAoaW5mbykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGFydCA9IGluZm8uc3RhcnRTdHI7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVuZCA9IGluZm8uZW5kU3RyO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlZGl0Qm9va2luZ1VybCA9IFwiL2Jvb2tpbmcvbmV3L1wiICsgc3RhcnQgKyBcIi9cIiArIGVuZCArIFwiL1wiO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uYXNzaWduKGVkaXRCb29raW5nVXJsKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGV2ZW50UmVzaXplOiAoaW5mbykgPT4ge1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVCb29raW5nRGF0ZShpbmZvKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGV2ZW50RHJvcDogKGluZm8pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlQm9va2luZ0RhdGUoaW5mbyk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkYXRlQ2xpY2s6IGZ1bmN0aW9uIChpbmZvKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBpbmZvLmRhdGVTdHI7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVkaXRCb29raW5nVXJsID0gXCIvYm9va2luZy9uZXcvXCIgKyBkYXRlICsgXCIvXCIgKyBkYXRlICsgXCIvXCI7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5hc3NpZ24oZWRpdEJvb2tpbmdVcmwpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXZlbnRDbGljazogZnVuY3Rpb24gKGluZm8pIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudElkID0gcGFyc2VJbnQoaW5mby5ldmVudC5pZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYm9va2luZ3MgPSBKU09OLnBhcnNlKGNhbGVuZGFyRWwuZGF0YXNldC5ib29raW5ncyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVkaXRCb29raW5nVXJsID0gXCIvYm9va2luZy9cIiArIGN1cnJlbnRJZCArIFwiL2VkaXQvXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmFzc2lnbihlZGl0Qm9va2luZ1VybCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjYWxlbmRhci5yZW5kZXIoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwiaW1wb3J0IHRpbnltY2UgZnJvbSAndGlueW1jZSc7XHJcbmltcG9ydCAndGlueW1jZS9tb2RlbHMvZG9tJztcclxuXHJcbi8qIERlZmF1bHQgaWNvbnMgYXJlIHJlcXVpcmVkIGZvciBUaW55TUNFIDUuMyBvciBhYm92ZSAqL1xyXG5pbXBvcnQgJ3RpbnltY2UvaWNvbnMvZGVmYXVsdCc7XHJcblxyXG4vKiBBIHRoZW1lIGlzIGFsc28gcmVxdWlyZWQgKi9cclxuaW1wb3J0ICd0aW55bWNlL3RoZW1lcy9zaWx2ZXInO1xyXG5cclxuLyogSW1wb3J0IHRoZSBza2luICovXHJcbmltcG9ydCAndGlueW1jZS9za2lucy91aS9veGlkZS9za2luLmNzcyc7XHJcblxyXG4vKiBJbXBvcnQgY29udGVudCBjc3MgKi9cclxuaW1wb3J0ICd0aW55bWNlL3NraW5zL3VpL294aWRlL2NvbnRlbnQuY3NzJztcclxuaW1wb3J0ICd0aW55bWNlL3NraW5zL2NvbnRlbnQvZGVmYXVsdC9jb250ZW50LmNzcyc7XHJcblxyXG4vKiBJbXBvcnQgcGx1Z2lucyAqL1xyXG5pbXBvcnQgJ3RpbnltY2UvcGx1Z2lucy9hZHZsaXN0JztcclxuaW1wb3J0ICd0aW55bWNlL3BsdWdpbnMvY29kZSc7XHJcbmltcG9ydCAndGlueW1jZS9wbHVnaW5zL2Vtb3RpY29ucyc7XHJcbmltcG9ydCAndGlueW1jZS9wbHVnaW5zL2Vtb3RpY29ucy9qcy9lbW9qaXMnO1xyXG5pbXBvcnQgJ3RpbnltY2UvcGx1Z2lucy9saW5rJztcclxuaW1wb3J0ICd0aW55bWNlL3BsdWdpbnMvbGlzdHMnO1xyXG5pbXBvcnQgJ3RpbnltY2UvcGx1Z2lucy90YWJsZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRpbnltY2UuaW5pdCh7XHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnLnRpbnltY2UnLFxyXG4gICAgICAgICAgICBwbHVnaW5zOiAnYWR2bGlzdCBjb2RlIGVtb3RpY29ucyBsaW5rIGxpc3RzIHRhYmxlJyxcclxuICAgICAgICAgICAgdG9vbGJhcjogJ3VuZG8gcmVkbyB8IGJvbGQgaXRhbGljIHJlbW92ZWZvcm1hdCB8IGJ1bGxpc3QgbnVtbGlzdCB0YWJsZSB8IGxpbmsgZW1vdGljb25zICcsXHJcbiAgICAgICAgICAgIG1lbnViYXI6IGZhbHNlLFxyXG4gICAgICAgICAgICBzdGF0dXNiYXI6IGZhbHNlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIkZ1bGxDYWxlbmRhciIsIlRpbnlNQ0UiLCJDaGFydHMiLCJUZW1wdXNEb21pbnVzIiwiRGF0ZXBpY2tlciIsIkNob2ljZXMiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJkYXRlcGlja2VycyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJkYXRldGltZXBpY2tlcnMiLCJmb3JFYWNoIiwiZWwiLCJidXR0b25DbGFzcyIsImZvcm1hdCIsImF1dG9oaWRlIiwibGFuZ3VhZ2UiLCJmb3JtT3duZXIiLCJxdWVyeVNlbGVjdG9yIiwiZmlsdGVyQm9va2luZ3MiLCJjaG9pY2VzSnNFbGVtZW50cyIsImNvbnNvbGUiLCJsb2ciLCJzZWFyY2hFbmFibGVkIiwiaXRlbVNlbGVjdFRleHQiLCJzaG91bGRTb3J0IiwicmVtb3ZlSXRlbUJ1dHRvbiIsImZvcm1Cb29raW5nIiwiYm9va2luZyIsIkpTT04iLCJwYXJzZSIsImRhdGFzZXQiLCJkb2dJZHNUb1NlbGVjdCIsImRvZ3MiLCJtYXAiLCJkb2ciLCJpZCIsImNob2ljZUpzRWxlbWVudCIsImkiLCJvcHRpb25zIiwibGVuZ3RoIiwib3B0aW9uIiwiaW5jbHVkZXMiLCJwYXJzZUludCIsInZhbHVlIiwic2VsZWN0ZWQiLCJsb2NhbGl6YXRpb24iLCJkaXNwbGF5Iiwidmlld01vZGUiLCJjb21wb25lbnRzIiwiZGVjYWRlcyIsInllYXIiLCJtb250aCIsImRhdGUiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwiYWN0aW9uQnV0dG9uQ2xpY2tzIiwiYWN0aW9uQnV0dG9uIiwiYWN0aW9uQnV0dG9uQ2xpY2siLCJlIiwiY2xpY2siLCJDaGFydCIsInByb2ZpdENoYXJ0IiwiZ2V0RWxlbWVudEJ5SWQiLCJkYXRhRGVjbGFyZWQiLCJkZWNsYXJlZCIsImRhdGFOb0RlY2xhcmVkIiwidW5kZWNsYXJlZCIsInByb2ZpdERhdGEiLCJsYWJlbHMiLCJkYXRhc2V0cyIsImRhdGEiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0eXBlIiwicmVzcG9uc2l2ZSIsInBsdWdpbnMiLCJsZWdlbmQiLCJwb3NpdGlvbiIsInRpdGxlIiwidGV4dCIsIkNhbGVuZGFyIiwiZGF5R3JpZFBsdWdpbiIsInRpbWVHcmlkUGx1Z2luIiwibGlzdFBsdWdpbiIsImludGVyYWN0aW9uUGx1Z2luIiwidXBkYXRlQm9va2luZ0RhdGUiLCJpbmZvIiwic3RhcnQiLCJldmVudCIsInN0YXJ0U3RyIiwiZW5kIiwiZW5kU3RyIiwiZXZlbnRJZCIsInVwZGF0ZUJvb2tpbmdEYXRlc1VybCIsIndpbmRvdyIsImxvY2F0aW9uIiwiYXNzaWduIiwiY2FsZW5kYXJFbCIsImJvb2tpbmdzIiwiY3VycmVudElkIiwiY2FsZW5kYXIiLCJsb2NhbGUiLCJzZWxlY3RhYmxlIiwiZWRpdGFibGUiLCJpbml0aWFsVmlldyIsInRoZW1lU3lzdGVtIiwiZGF5TWF4RXZlbnRzIiwiZXZlbnRzIiwiYnV0dG9uVGV4dCIsInByZXYiLCJuZXh0IiwidG9kYXkiLCJ3ZWVrIiwiZGF5IiwibGlzdCIsImFsbERheVRleHQiLCJub0V2ZW50c1RleHQiLCJ3ZWVrVGV4dExvbmciLCJ3ZWVrVGV4dFNob3J0IiwidGltZVRleHQiLCJ3ZWVrVGV4dCIsIm1vcmVMaW5rVGV4dCIsImhlYWRlclRvb2xiYXIiLCJsZWZ0IiwiY2VudGVyIiwicmlnaHQiLCJzZWxlY3QiLCJlZGl0Qm9va2luZ1VybCIsImV2ZW50UmVzaXplIiwiZXZlbnREcm9wIiwiZGF0ZUNsaWNrIiwiZGF0ZVN0ciIsImV2ZW50Q2xpY2siLCJyZW5kZXIiLCJ0aW55bWNlIiwiaW5pdCIsInNlbGVjdG9yIiwidG9vbGJhciIsIm1lbnViYXIiLCJzdGF0dXNiYXIiXSwic291cmNlUm9vdCI6IiJ9