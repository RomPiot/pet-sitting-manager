import './styles/app.scss';
import FullCalendar from "./scripts/full_calendar";
import TinyMCE from "./scripts/tiny_mce";
import Charts from "./scripts/chart"
import {TempusDominus} from '@eonasdan/tempus-dominus';


FullCalendar();
TinyMCE();
Charts();

document.addEventListener('DOMContentLoaded', function () {
    const datepickers = document.querySelectorAll('.datepicker');

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

