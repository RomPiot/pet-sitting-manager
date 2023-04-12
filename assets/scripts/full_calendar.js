import {Calendar} from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';

export default function () {
    document.addEventListener('DOMContentLoaded', function () {
        const calendarEl = document.querySelector('.full-calendar');
        if (calendarEl) {
            const bookings = JSON.parse(calendarEl.dataset.bookings);
            console.log(bookings)
            const calendar = new Calendar(calendarEl, {
                plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin],
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
                    right: 'dayGridMonth,timeGridWeek,listWeek'
                },
                select: (info) => {
                    calendar.unselect();
                    // Crée un événement vide
                    calendar.addEvent({
                        title: 'Nouvel événement',
                        start: info.startStr,
                        end: info.endStr,
                        allDay: info.allDay
                    });
                },
                eventResize: (info) => {
                    const event = info.event;
                    const start = event.startStr;
                    const end = event.endStr;
                    console.log(event, start, end);
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
