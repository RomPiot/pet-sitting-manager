import {Calendar} from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';

export default function () {
    document.addEventListener('DOMContentLoaded', function () {
        const calendarEl = document.querySelector('.full-calendar');
        if (calendarEl) {
            const calendar = new Calendar(calendarEl, {
                plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin],
                selectable: true,
                initialView: 'dayGridMonth',
                themeSystem: 'bootstrap',
                editable: true,
                events: {},
                buttonText: {
                    prev: 'Previous',
                    next: 'Next'
                },
                headerToolbar: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,listWeek'
                },
                dateClick: function (e) {
                },
                eventClick: function (info) {
                }
            });
            calendar.render();
        }
    });
}
