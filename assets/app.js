import './styles/app.scss';
import FullCalendar from "./scripts/full_calendar";
import TinyMCE from "./scripts/tiny_mce";
import Charts from "./scripts/chart"
import {TempusDominus} from '@eonasdan/tempus-dominus';
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
                format: 'yyyy-mm-dd',
                autohide: true,
                language: 'fr-FR',
            });
        });
    }

    // select form name owner
    const formOwner = document.querySelector('form[name="owner"]');
    if (formOwner) {
        const choicesJsElements = document.querySelectorAll('.choices-js');
        console.log(choicesJsElements)
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

