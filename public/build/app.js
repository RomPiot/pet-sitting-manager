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

  // select form name owner
  var formOwner = document.querySelector('form[name="owner"]');
  if (formOwner) {
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
          prev: 'Previous',
          next: 'Next'
        },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNuRSxPQUFPLENBQUNvRSxRQUFRLENBQUM7VUFDeEQsSUFBTWlCLGNBQWMsR0FBRyxXQUFXLEdBQUdoQixTQUFTLEdBQUcsUUFBUTtVQUV6REwsTUFBTSxDQUFDQyxRQUFRLENBQUNDLE1BQU0sQ0FBQ21CLGNBQWMsQ0FBQztRQUMxQztNQUNKLENBQUMsQ0FBQztNQUNGZixRQUFRLENBQUNxQixNQUFNLEVBQUU7SUFDckI7RUFDSixDQUFDLENBQUM7QUFDTjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUU4QjtBQUNGOztBQUU1QjtBQUMrQjs7QUFFL0I7QUFDK0I7O0FBRS9CO0FBQ3lDOztBQUV6QztBQUM0QztBQUNPOztBQUVuRDtBQUNpQztBQUNIO0FBQ0s7QUFDVTtBQUNmO0FBQ0M7QUFDQTtBQUUvQiw2QkFBZSxzQ0FBWTtFQUN2Qm5ILFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsWUFBWTtJQUN0RG1ILG1EQUFZLENBQUM7TUFDVEUsUUFBUSxFQUFFLFVBQVU7TUFDcEJqRCxPQUFPLEVBQUUseUNBQXlDO01BQ2xEa0QsT0FBTyxFQUFFLGdGQUFnRjtNQUN6RkMsT0FBTyxFQUFFLEtBQUs7TUFDZEMsU0FBUyxFQUFFO0lBQ2YsQ0FBQyxDQUFDO0VBQ04sQ0FBQyxDQUFDO0FBQ047Ozs7Ozs7Ozs7O0FDbkNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9jaGFydC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9mdWxsX2NhbGVuZGFyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL3RpbnlfbWNlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL3N0eWxlcy9hcHAuc2Nzcyc7XG5pbXBvcnQgRnVsbENhbGVuZGFyIGZyb20gXCIuL3NjcmlwdHMvZnVsbF9jYWxlbmRhclwiO1xuaW1wb3J0IFRpbnlNQ0UgZnJvbSBcIi4vc2NyaXB0cy90aW55X21jZVwiO1xuaW1wb3J0IENoYXJ0cyBmcm9tIFwiLi9zY3JpcHRzL2NoYXJ0XCJcbmltcG9ydCB7VGVtcHVzRG9taW51c30gZnJvbSAnQGVvbmFzZGFuL3RlbXB1cy1kb21pbnVzJztcbmltcG9ydCB7RGF0ZXBpY2tlcn0gZnJvbSAndmFuaWxsYWpzLWRhdGVwaWNrZXInO1xuaW1wb3J0IENob2ljZXMgZnJvbSAnY2hvaWNlcy5qcyc7XG5cbkZ1bGxDYWxlbmRhcigpO1xuVGlueU1DRSgpO1xuQ2hhcnRzKCk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgZGF0ZXBpY2tlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGF0ZXBpY2tlcicpO1xuICAgIGNvbnN0IGRhdGV0aW1lcGlja2VycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYXRldGltZXBpY2tlcicpO1xuICAgIGlmIChkYXRlcGlja2Vycykge1xuICAgICAgICBkYXRlcGlja2Vycy5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlcGlja2VyKGVsLCB7XG4gICAgICAgICAgICAgICAgYnV0dG9uQ2xhc3M6ICdidG4nLFxuICAgICAgICAgICAgICAgIGZvcm1hdDogJ3l5eXktbW0tZGQnLFxuICAgICAgICAgICAgICAgIGF1dG9oaWRlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGxhbmd1YWdlOiAnZnItRlInLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIHNlbGVjdCBmb3JtIG5hbWUgb3duZXJcbiAgICBjb25zdCBmb3JtT3duZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtW25hbWU9XCJvd25lclwiXScpO1xuICAgIGlmIChmb3JtT3duZXIpIHtcbiAgICAgICAgY29uc3QgY2hvaWNlc0pzRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hvaWNlcy1qcycpO1xuICAgICAgICBjb25zb2xlLmxvZyhjaG9pY2VzSnNFbGVtZW50cylcbiAgICAgICAgaWYgKGNob2ljZXNKc0VsZW1lbnRzKSB7XG4gICAgICAgICAgICBjaG9pY2VzSnNFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ2hvaWNlcyhlbCwge1xuICAgICAgICAgICAgICAgICAgICBzZWFyY2hFbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBpdGVtU2VsZWN0VGV4dDogJycsXG4gICAgICAgICAgICAgICAgICAgIHNob3VsZFNvcnQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUl0ZW1CdXR0b246IHRydWUsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGZvcm1Cb29raW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvb2tpbmdGb3JtJyk7XG4gICAgaWYgKGZvcm1Cb29raW5nKSB7XG4gICAgICAgIGNvbnN0IGNob2ljZXNKc0VsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNob2ljZXMtanMnKTtcbiAgICAgICAgY29uc3QgYm9va2luZyA9IEpTT04ucGFyc2UoZm9ybUJvb2tpbmcuZGF0YXNldC5ib29raW5nKTtcblxuICAgICAgICBjb25zdCBkb2dJZHNUb1NlbGVjdCA9IGJvb2tpbmcuZG9ncy5tYXAoZG9nID0+IGRvZy5pZCk7XG5cbiAgICAgICAgaWYgKGNob2ljZXNKc0VsZW1lbnRzKSB7XG4gICAgICAgICAgICBjaG9pY2VzSnNFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChjaG9pY2VKc0VsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNob2ljZUpzRWxlbWVudC5vcHRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGNob2ljZUpzRWxlbWVudC5vcHRpb25zW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZG9nSWRzVG9TZWxlY3QuaW5jbHVkZXMocGFyc2VJbnQob3B0aW9uLnZhbHVlKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENob2ljZXMoY2hvaWNlSnNFbGVtZW50LCB7XG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaEVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1TZWxlY3RUZXh0OiAnJyxcbiAgICAgICAgICAgICAgICAgICAgc2hvdWxkU29ydDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlSXRlbUJ1dHRvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGRhdGV0aW1lcGlja2Vycykge1xuICAgICAgICBkYXRldGltZXBpY2tlcnMuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgIG5ldyBUZW1wdXNEb21pbnVzKGVsLCB7XG4gICAgICAgICAgICAgICAgbG9jYWxpemF0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdDogJ2RkLU1NLXl5eXkgSEg6bW0nLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZGlzcGxheToge1xuICAgICAgICAgICAgICAgICAgICB2aWV3TW9kZTogJ2NhbGVuZGFyJyxcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50czoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVjYWRlczogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHllYXI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBtb250aDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBob3VyczogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbnV0ZXM6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmRzOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGFjdGlvbkJ1dHRvbkNsaWNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY3Rpb24tYnV0dG9uLWNsaWNrJyk7XG4gICAgY29uc3QgYWN0aW9uQnV0dG9uPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aW9uLWJ1dHRvbicpO1xuICAgIGlmIChhY3Rpb25CdXR0b25DbGlja3MpIHtcbiAgICAgICAgYWN0aW9uQnV0dG9uQ2xpY2tzLmZvckVhY2goZnVuY3Rpb24gKGFjdGlvbkJ1dHRvbkNsaWNrKSB7XG4gICAgICAgICAgICBhY3Rpb25CdXR0b25DbGljay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgYWN0aW9uQnV0dG9uLmNsaWNrKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cblxufSk7XG5cbiIsImltcG9ydCBDaGFydCBmcm9tICdjaGFydC5qcy9hdXRvJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBwcm9maXRDaGFydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZml0Q2hhcnRcIik7XHJcblxyXG4gICAgICAgIGlmIChwcm9maXRDaGFydCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9maXRDaGFydClcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGFEZWNsYXJlZCA9IHBhcnNlSW50KHByb2ZpdENoYXJ0LmRhdGFzZXQuZGVjbGFyZWQpO1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhTm9EZWNsYXJlZCA9IHBhcnNlSW50KHByb2ZpdENoYXJ0LmRhdGFzZXQudW5kZWNsYXJlZCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGFEZWNsYXJlZClcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YU5vRGVjbGFyZWQpXHJcblxyXG5cclxuICAgICAgICAgICAgdmFyIHByb2ZpdERhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbHM6IFtcclxuICAgICAgICAgICAgICAgICAgICBcIkRlY2xhcmVkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJObyBkZWNsYXJlZFwiLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGRhdGFzZXRzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBbZGF0YURlY2xhcmVkLCBkYXRhTm9EZWNsYXJlZF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIjMWVkN2JjXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiNmZjkxMDJcIixcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgbmV3IENoYXJ0KHByb2ZpdENoYXJ0LCB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAncGllJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHByb2ZpdERhdGEsXHJcbiAgICAgICAgICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBwbHVnaW5zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICd0b3AnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdEw6ljbGFyZWQgVlMgTm8gZGVjbGFyZWQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSk7XHJcblxyXG59XHJcbiIsImltcG9ydCB7Q2FsZW5kYXJ9IGZyb20gJ0BmdWxsY2FsZW5kYXIvY29yZSc7XG5pbXBvcnQgZGF5R3JpZFBsdWdpbiBmcm9tICdAZnVsbGNhbGVuZGFyL2RheWdyaWQnO1xuaW1wb3J0IHRpbWVHcmlkUGx1Z2luIGZyb20gJ0BmdWxsY2FsZW5kYXIvdGltZWdyaWQnXG5pbXBvcnQgbGlzdFBsdWdpbiBmcm9tICdAZnVsbGNhbGVuZGFyL2xpc3QnO1xuaW1wb3J0IGludGVyYWN0aW9uUGx1Z2luIGZyb20gJ0BmdWxsY2FsZW5kYXIvaW50ZXJhY3Rpb24nO1xuXG5mdW5jdGlvbiB1cGRhdGVCb29raW5nRGF0ZShpbmZvKSB7XG4gICAgY29uc3Qgc3RhcnQgPSBpbmZvLmV2ZW50LnN0YXJ0U3RyO1xuICAgIGxldCBlbmQgPSBpbmZvLmV2ZW50LmVuZFN0cjtcbiAgICBlbmQgPSBlbmQgPyBlbmQgOiBzdGFydDtcbiAgICBjb25zdCBldmVudElkID0gaW5mby5ldmVudC5pZDtcbiAgICBjb25zb2xlLmxvZyhldmVudElkLCBzdGFydCwgZW5kKVxuICAgIGNvbnN0IHVwZGF0ZUJvb2tpbmdEYXRlc1VybCA9IFwiL2Jvb2tpbmcvXCIgKyBldmVudElkICsgXCIvZWRpdC1kYXRlcy9cIiArIHN0YXJ0ICsgXCIvXCIgKyBlbmQgKyBcIi9cIjtcblxuICAgIHdpbmRvdy5sb2NhdGlvbi5hc3NpZ24odXBkYXRlQm9va2luZ0RhdGVzVXJsKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGNhbGVuZGFyRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZnVsbC1jYWxlbmRhcicpO1xuICAgICAgICBpZiAoY2FsZW5kYXJFbCkge1xuICAgICAgICAgICAgY29uc3QgYm9va2luZ3MgPSBKU09OLnBhcnNlKGNhbGVuZGFyRWwuZGF0YXNldC5ib29raW5ncyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhib29raW5ncyk7XG4gICAgICAgICAgICBsZXQgY3VycmVudElkID0gbnVsbDtcblxuICAgICAgICAgICAgY29uc3QgY2FsZW5kYXIgPSBuZXcgQ2FsZW5kYXIoY2FsZW5kYXJFbCwge1xuICAgICAgICAgICAgICAgIHBsdWdpbnM6IFtcbiAgICAgICAgICAgICAgICAgICAgZGF5R3JpZFBsdWdpbixcbiAgICAgICAgICAgICAgICAgICAgdGltZUdyaWRQbHVnaW4sXG4gICAgICAgICAgICAgICAgICAgIGxpc3RQbHVnaW4sXG4gICAgICAgICAgICAgICAgICAgIGludGVyYWN0aW9uUGx1Z2luXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAvLyBkaXNwbGF5RXZlbnRUaW1lOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAvLyBkZWZhdWx0QWxsRGF5OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzZWxlY3RhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGluaXRpYWxWaWV3OiAnZGF5R3JpZE1vbnRoJyxcbiAgICAgICAgICAgICAgICB0aGVtZVN5c3RlbTogJ2Jvb3RzdHJhcCcsXG4gICAgICAgICAgICAgICAgZGF5TWF4RXZlbnRzOiB0cnVlLFxuICAgICAgICAgICAgICAgIGV2ZW50czogYm9va2luZ3MsXG4gICAgICAgICAgICAgICAgYnV0dG9uVGV4dDoge1xuICAgICAgICAgICAgICAgICAgICBwcmV2OiAnUHJldmlvdXMnLFxuICAgICAgICAgICAgICAgICAgICBuZXh0OiAnTmV4dCdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGhlYWRlclRvb2xiYXI6IHtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogJ3ByZXYsbmV4dCB0b2RheScsXG4gICAgICAgICAgICAgICAgICAgIGNlbnRlcjogJ3RpdGxlJyxcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6ICdkYXlHcmlkTW9udGgsdGltZUdyaWRXZWVrLHRpbWVHcmlkRGF5LGxpc3RXZWVrJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2VsZWN0OiAoaW5mbykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGFydCA9IGluZm8uc3RhcnRTdHI7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVuZCA9IGluZm8uZW5kU3RyO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlZGl0Qm9va2luZ1VybCA9IFwiL2Jvb2tpbmcvbmV3L1wiICsgc3RhcnQgKyBcIi9cIiArIGVuZCArIFwiL1wiO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uYXNzaWduKGVkaXRCb29raW5nVXJsKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGV2ZW50UmVzaXplOiAoaW5mbykgPT4ge1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVCb29raW5nRGF0ZShpbmZvKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGV2ZW50RHJvcDogKGluZm8pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlQm9va2luZ0RhdGUoaW5mbyk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkYXRlQ2xpY2s6IGZ1bmN0aW9uIChpbmZvKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBpbmZvLmRhdGVTdHI7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVkaXRCb29raW5nVXJsID0gXCIvYm9va2luZy9uZXcvXCIgKyBkYXRlICsgXCIvXCIgKyBkYXRlICsgXCIvXCI7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5hc3NpZ24oZWRpdEJvb2tpbmdVcmwpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXZlbnRDbGljazogZnVuY3Rpb24gKGluZm8pIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudElkID0gcGFyc2VJbnQoaW5mby5ldmVudC5pZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYm9va2luZ3MgPSBKU09OLnBhcnNlKGNhbGVuZGFyRWwuZGF0YXNldC5ib29raW5ncyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVkaXRCb29raW5nVXJsID0gXCIvYm9va2luZy9cIiArIGN1cnJlbnRJZCArIFwiL2VkaXQvXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmFzc2lnbihlZGl0Qm9va2luZ1VybCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjYWxlbmRhci5yZW5kZXIoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwiaW1wb3J0IHRpbnltY2UgZnJvbSAndGlueW1jZSc7XHJcbmltcG9ydCAndGlueW1jZS9tb2RlbHMvZG9tJztcclxuXHJcbi8qIERlZmF1bHQgaWNvbnMgYXJlIHJlcXVpcmVkIGZvciBUaW55TUNFIDUuMyBvciBhYm92ZSAqL1xyXG5pbXBvcnQgJ3RpbnltY2UvaWNvbnMvZGVmYXVsdCc7XHJcblxyXG4vKiBBIHRoZW1lIGlzIGFsc28gcmVxdWlyZWQgKi9cclxuaW1wb3J0ICd0aW55bWNlL3RoZW1lcy9zaWx2ZXInO1xyXG5cclxuLyogSW1wb3J0IHRoZSBza2luICovXHJcbmltcG9ydCAndGlueW1jZS9za2lucy91aS9veGlkZS9za2luLmNzcyc7XHJcblxyXG4vKiBJbXBvcnQgY29udGVudCBjc3MgKi9cclxuaW1wb3J0ICd0aW55bWNlL3NraW5zL3VpL294aWRlL2NvbnRlbnQuY3NzJztcclxuaW1wb3J0ICd0aW55bWNlL3NraW5zL2NvbnRlbnQvZGVmYXVsdC9jb250ZW50LmNzcyc7XHJcblxyXG4vKiBJbXBvcnQgcGx1Z2lucyAqL1xyXG5pbXBvcnQgJ3RpbnltY2UvcGx1Z2lucy9hZHZsaXN0JztcclxuaW1wb3J0ICd0aW55bWNlL3BsdWdpbnMvY29kZSc7XHJcbmltcG9ydCAndGlueW1jZS9wbHVnaW5zL2Vtb3RpY29ucyc7XHJcbmltcG9ydCAndGlueW1jZS9wbHVnaW5zL2Vtb3RpY29ucy9qcy9lbW9qaXMnO1xyXG5pbXBvcnQgJ3RpbnltY2UvcGx1Z2lucy9saW5rJztcclxuaW1wb3J0ICd0aW55bWNlL3BsdWdpbnMvbGlzdHMnO1xyXG5pbXBvcnQgJ3RpbnltY2UvcGx1Z2lucy90YWJsZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRpbnltY2UuaW5pdCh7XHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnLnRpbnltY2UnLFxyXG4gICAgICAgICAgICBwbHVnaW5zOiAnYWR2bGlzdCBjb2RlIGVtb3RpY29ucyBsaW5rIGxpc3RzIHRhYmxlJyxcclxuICAgICAgICAgICAgdG9vbGJhcjogJ3VuZG8gcmVkbyB8IGJvbGQgaXRhbGljIHJlbW92ZWZvcm1hdCB8IGJ1bGxpc3QgbnVtbGlzdCB0YWJsZSB8IGxpbmsgZW1vdGljb25zICcsXHJcbiAgICAgICAgICAgIG1lbnViYXI6IGZhbHNlLFxyXG4gICAgICAgICAgICBzdGF0dXNiYXI6IGZhbHNlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIkZ1bGxDYWxlbmRhciIsIlRpbnlNQ0UiLCJDaGFydHMiLCJUZW1wdXNEb21pbnVzIiwiRGF0ZXBpY2tlciIsIkNob2ljZXMiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJkYXRlcGlja2VycyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJkYXRldGltZXBpY2tlcnMiLCJmb3JFYWNoIiwiZWwiLCJidXR0b25DbGFzcyIsImZvcm1hdCIsImF1dG9oaWRlIiwibGFuZ3VhZ2UiLCJmb3JtT3duZXIiLCJxdWVyeVNlbGVjdG9yIiwiY2hvaWNlc0pzRWxlbWVudHMiLCJjb25zb2xlIiwibG9nIiwic2VhcmNoRW5hYmxlZCIsIml0ZW1TZWxlY3RUZXh0Iiwic2hvdWxkU29ydCIsInJlbW92ZUl0ZW1CdXR0b24iLCJmb3JtQm9va2luZyIsImJvb2tpbmciLCJKU09OIiwicGFyc2UiLCJkYXRhc2V0IiwiZG9nSWRzVG9TZWxlY3QiLCJkb2dzIiwibWFwIiwiZG9nIiwiaWQiLCJjaG9pY2VKc0VsZW1lbnQiLCJpIiwib3B0aW9ucyIsImxlbmd0aCIsIm9wdGlvbiIsImluY2x1ZGVzIiwicGFyc2VJbnQiLCJ2YWx1ZSIsInNlbGVjdGVkIiwibG9jYWxpemF0aW9uIiwiZGlzcGxheSIsInZpZXdNb2RlIiwiY29tcG9uZW50cyIsImRlY2FkZXMiLCJ5ZWFyIiwibW9udGgiLCJkYXRlIiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsImFjdGlvbkJ1dHRvbkNsaWNrcyIsImFjdGlvbkJ1dHRvbiIsImFjdGlvbkJ1dHRvbkNsaWNrIiwiZSIsImNsaWNrIiwiQ2hhcnQiLCJwcm9maXRDaGFydCIsImdldEVsZW1lbnRCeUlkIiwiZGF0YURlY2xhcmVkIiwiZGVjbGFyZWQiLCJkYXRhTm9EZWNsYXJlZCIsInVuZGVjbGFyZWQiLCJwcm9maXREYXRhIiwibGFiZWxzIiwiZGF0YXNldHMiLCJkYXRhIiwiYmFja2dyb3VuZENvbG9yIiwidHlwZSIsInJlc3BvbnNpdmUiLCJwbHVnaW5zIiwibGVnZW5kIiwicG9zaXRpb24iLCJ0aXRsZSIsInRleHQiLCJDYWxlbmRhciIsImRheUdyaWRQbHVnaW4iLCJ0aW1lR3JpZFBsdWdpbiIsImxpc3RQbHVnaW4iLCJpbnRlcmFjdGlvblBsdWdpbiIsInVwZGF0ZUJvb2tpbmdEYXRlIiwiaW5mbyIsInN0YXJ0IiwiZXZlbnQiLCJzdGFydFN0ciIsImVuZCIsImVuZFN0ciIsImV2ZW50SWQiLCJ1cGRhdGVCb29raW5nRGF0ZXNVcmwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImFzc2lnbiIsImNhbGVuZGFyRWwiLCJib29raW5ncyIsImN1cnJlbnRJZCIsImNhbGVuZGFyIiwic2VsZWN0YWJsZSIsImVkaXRhYmxlIiwiaW5pdGlhbFZpZXciLCJ0aGVtZVN5c3RlbSIsImRheU1heEV2ZW50cyIsImV2ZW50cyIsImJ1dHRvblRleHQiLCJwcmV2IiwibmV4dCIsImhlYWRlclRvb2xiYXIiLCJsZWZ0IiwiY2VudGVyIiwicmlnaHQiLCJzZWxlY3QiLCJlZGl0Qm9va2luZ1VybCIsImV2ZW50UmVzaXplIiwiZXZlbnREcm9wIiwiZGF0ZUNsaWNrIiwiZGF0ZVN0ciIsImV2ZW50Q2xpY2siLCJyZW5kZXIiLCJ0aW55bWNlIiwiaW5pdCIsInNlbGVjdG9yIiwidG9vbGJhciIsIm1lbnViYXIiLCJzdGF0dXNiYXIiXSwic291cmNlUm9vdCI6IiJ9