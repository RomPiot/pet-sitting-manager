import {Calendar} from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';

function updateBookingDate(info) {
    const start = info.event.startStr;
    let end = info.event.endStr;
    end = end ? end : start;
    const eventId = info.event.id;
    console.log(eventId, start, end)
    const updateBookingDatesUrl = "/booking/" + eventId + "/edit-dates/" + start + "/" + end + "/";

    window.location.assign(updateBookingDatesUrl);
}

export default function () {
    document.addEventListener('DOMContentLoaded', function () {
        const calendarEl = document.querySelector('.full-calendar');
        if (calendarEl) {
            const bookings = JSON.parse(calendarEl.dataset.bookings);
            console.log(bookings);
            let currentId = null;

            const calendar = new Calendar(calendarEl, {
                locale: 'fr',
                plugins: [
                    dayGridPlugin,
                    timeGridPlugin,
                    listPlugin,
                    interactionPlugin
                ],
                // displayEventTime: false,
                // defaultAllDay: false,
                firstDay: 1,
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
                    list: 'Liste',
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

                select: (info) => {
                    const start = info.startStr;
                    const end = info.endStr;
                    const editBookingUrl = "/booking/new/" + start + "/" + end + "/";
                    window.location.assign(editBookingUrl);
                },
                eventResize: (info) => {
                    updateBookingDate(info);
                },
                eventDrop: (info) => {
                    updateBookingDate(info);
                },
                dateClick: function (info) {
                    const date = info.dateStr;
                    const editBookingUrl = "/booking/new/" + date + "/" + date + "/";
                    window.location.assign(editBookingUrl);
                },
                eventClick: function (info) {
                    currentId = parseInt(info.event.id);

                    const bookings = JSON.parse(calendarEl.dataset.bookings);
                    const editBookingUrl = "/booking/" + currentId + "/edit/";

                    window.location.assign(editBookingUrl);
                }
            });
            calendar.render();
        }
    });
}
