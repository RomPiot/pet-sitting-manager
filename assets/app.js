import './styles/app.scss';
import FullCalendar from "./scripts/full_calendar";
import TinyMCE from "./scripts/tiny_mce";
import Charts from "./scripts/chart"
import {Datepicker} from 'vanillajs-datepicker';
import Choices from 'choices.js';

FullCalendar();
TinyMCE();
Charts();

document.addEventListener('DOMContentLoaded', function () {
    const datepickers = document.querySelectorAll('.datepicker');
    if (datepickers) {
        datepickers.forEach(function (el) {
            return new Datepicker(el, {
                buttonClass: 'btn',
                format: 'dd-mm-yyyy',
                autohide: true,
                language: 'fr-FR',
            });
        });
    }

    const choicesJsElements = document.querySelectorAll('.choices-js');
    if (choicesJsElements) {
        choicesJsElements.forEach(function (el) {
            return new Choices(el, {
                searchEnabled: true,
                itemSelectText: '',
                shouldSort: true,
                removeItemButton: true,
            });
        });
    }
});
