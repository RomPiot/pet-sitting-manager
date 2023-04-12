
import './styles/app.scss';
import FullCalendar from "./scripts/full_calendar";
import {Datepicker} from 'vanillajs-datepicker';

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
