import {Calendar} from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import {Modal} from 'bootstrap';

export default function () {
    document.addEventListener('DOMContentLoaded', function () {
        const calendarEl = document.querySelector('.full-calendar');
        if (calendarEl) {
            const bookings = JSON.parse(calendarEl.dataset.bookings);

            const bookingModalEl = document.getElementById('modal-booking');
            const bookingModal = new Modal(bookingModalEl);
            const bookingTitleInput = document.getElementById('modal-booking-label');
            console.log(bookingTitleInput)

            // current id selection
            let currentId = null;

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
                    bookingModal.show();
                    console.log(info)
                    bookingTitleInput.innerText = 'New booking';

                    bookingModalEl.addEventListener('shown.bs.modal', function () {
                        bookingTitleInput.focus();
                    });
                },
                eventResize: (info) => {
                    const event = info.event;
                    const start = event.startStr;
                    const end = event.endStr;
                    console.log(event, start, end);
                },
                dateClick: function (e) {
                    bookingModal.show();
                    bookingTitleInput.innerText = 'New booking';

                    bookingModalEl.addEventListener('shown.bs.modal', function () {
                        bookingTitleInput.focus();
                    });
                },
                eventClick: function (info) {
                    currentId = info.event.id;
                    bookingTitleInput.innerText = 'Edit booking';

                    bookingModal.show();
                    bookingModalEl.addEventListener('shown.bs.modal', function () {
                        bookingTitleInput.focus();
                    });
                }
            });
            calendar.render();

            // document.getElementById('addNewEventForm').addEventListener('submit', function (event) {
            //     event.preventDefault();
            //     calendar.addEvent({
            //         id: Math.random() * 10000, // this should be a unique id from your back-end or API
            //         title: bookingTitleInput.value,
            //         start: '2021-05-01',
            //         end: '2021-05-01',
            //         className: 'bg-secondary',
            //         dragabble: true
            //     });
            //     bookingModal.hide();
            // });
            //
            // document.getElementById('editEventForm').addEventListener('submit', function (event) {
            //     event.preventDefault();
            //     const editEvent = calendar.getEventById(currentId);
            //     const startDate = '2021-05-01';
            //     const endDate = '2021-05-01';
            //
            //     editEvent.setProp('title', bookingTitleInput.value);
            //     editEvent.setStart(startDate);
            //     editEvent.setEnd(endDate);
            //     bookingModal.hide();
            // });
        }

    });
}
