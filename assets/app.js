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
    const datetimepickers = document.querySelectorAll('.datetimepicker');
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

    const formBooking = document.querySelector('.bookingForm');
    if (formBooking) {
        const choicesJsElements = document.querySelectorAll('.choices-js');
        const booking = JSON.parse(formBooking.dataset.booking);

        const dogIdsToSelect = booking.dogs.map(dog => dog.id);

        if (choicesJsElements) {
            choicesJsElements.forEach(function (choiceJsElement) {
                for (let i = 0; i < choiceJsElement.options.length; i++) {
                    const option = choiceJsElement.options[i];
                    if (dogIdsToSelect.includes(parseInt(option.value))) {
                        option.selected = true;
                    }
                }

                return new Choices(choiceJsElement, {
                    searchEnabled: true,
                    itemSelectText: '',
                    shouldSort: true,
                    removeItemButton: true,
                });
            });
        }
    }

    if (datetimepickers) {
        datetimepickers.forEach(function (el) {
            new TempusDominus(el, {
                localization: {
                    format: 'dd-MM-yyyy HH:mm',
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

    const actionButtonClicks = document.querySelectorAll('.action-button-click');
    const actionButton= document.querySelector('.action-button');
    if (actionButtonClicks) {
        actionButtonClicks.forEach(function (actionButtonClick) {
            actionButtonClick.addEventListener('click', function (e) {
                actionButton.click();
            });
        });
    }



});

