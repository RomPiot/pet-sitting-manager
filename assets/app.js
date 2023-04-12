
import './styles/app.scss';
import FullCalendar from "./scripts/full_calendar";
import {Datepicker} from 'vanillajs-datepicker';
import Choices from 'choices.js';
FullCalendar();


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
