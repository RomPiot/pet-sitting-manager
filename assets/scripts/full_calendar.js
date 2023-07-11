import {Calendar} from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import {Modal} from 'bootstrap';
import Choices from "choices.js";

export default function () {
    document.addEventListener('DOMContentLoaded', function () {
        const calendarEl = document.querySelector('.full-calendar');
        if (calendarEl) {
            const bookings = JSON.parse(calendarEl.dataset.bookings);

            const bookingModalEl = document.getElementById('modal-booking');
            const bookingModal = new Modal(bookingModalEl);
            const bookingTitleInput = document.getElementById('modal-booking-label');

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
                    bookingTitleInput.innerText = 'New booking';
                    const start = info.startStr;
                    const end = info.endStr;

                    const startInput = document.getElementById('booking_dateStart');
                    const endInput = document.getElementById('booking_dateEnd');

                    startInput.value = start;
                    endInput.value = end;

                    bookingModalEl.addEventListener('shown.bs.modal', function () {
                        bookingTitleInput.focus();
                    });
                },
                eventResize: (info) => {
                    const start = info.startStr;
                    const end = info.endStr;

                    const startInput = document.getElementById('booking_dateStart');
                    const endInput = document.getElementById('booking_dateEnd');

                    startInput.value = start;
                    endInput.value = end;
                },
                dateClick: function (info) {
                    const date = info.dateStr
                    const startInput = document.getElementById('booking_dateStart');
                    const endInput = document.getElementById('booking_dateEnd');

                    startInput.value = date;
                    endInput.value = date;

                    bookingModal.show();
                    bookingTitleInput.innerText = 'New booking';

                    bookingModalEl.addEventListener('shown.bs.modal', function () {
                        bookingTitleInput.focus();
                    });
                },
                eventClick: function (info) {
                    bookingTitleInput.innerText = 'Edit booking';
                    currentId = parseInt(info.event.id);

                    const bookings = JSON.parse(calendarEl.dataset.bookings);

                    const url = '/bookings/edit/' + currentId;
                    fetch(url)
                        .then(response => response.text())
                        .then(data => {
                            const modalToReplace = document.querySelector('#modal-booking')
                            // replace modalToReplace by data
                            modalToReplace.outerHTML = data;
                        }
                    );

                    // const booking = bookings.find(booking => booking.id === currentId);
                    // console.log(booking)
                    //
                    // const startInput = document.getElementById('booking_dateStart');
                    // const endInput = document.getElementById('booking_dateEnd');
                    // const priceInput = document.getElementById('booking_price');
                    // const statusInput = document.getElementById('booking_declared');
                    // const inventoryInput = document.getElementById('booking_inventory');
                    // const commentInput = document.getElementById('booking_comment');
                    // const backgroundColorInput = document.getElementById('booking_backgroundColor');
                    // const textColorInput = document.getElementById('booking_textColor');
                    // const dogsInputSelect = document.getElementById('booking_dogs');
                    // const dogsChoices = document.querySelectorAll('.choices__item--choice');
                    // console.log(dogsChoices);


                    // booking.dogs.forEach(dog => {
                    //     console.log(dog)
                    //     dogsChoices.forEach(choice => {
                    //         if (choice.dataset.value === dog.id.toString()) {
                    //             console.log(choice)
                    //             // select this choice in the select
                    //             choice.classList.add('choices__item--selected');
                    //             // add this choice to the select
                    //             const choicesList = document.querySelector('.choices__list--multiple');
                    //             const newChoice = document.createElement('div');
                    //             newChoice.classList.add('choices__item', 'choices__item--choice', 'choices__item--selectable', 'choices__item--removable', 'is-highlighted', 'is-selected');
                    //             newChoice.setAttribute('data-item', '');
                    //             newChoice.setAttribute('data-id', dog.id);
                    //             newChoice.setAttribute('data-value', dog.id);
                    //             newChoice.setAttribute('aria-selected', 'true');
                    //             newChoice.innerHTML = dog.name;
                    //             choicesList.appendChild(newChoice);

                    // }
                    // })
                    // });

                    // startInput ? startInput.value = booking.start : null;
                    // endInput ? endInput.value = booking.end : null;
                    // // dogsInputSelect ? dogsInputSelect.value = booking.dogs : null;
                    // // dogsInputSelect ? dogsInputSelect.value = booking.dogs.map(dog => dog.id) : null;
                    // priceInput ? priceInput.value = booking.price : null;
                    // statusInput ? statusInput.value = booking.status : null;
                    // inventoryInput ? inventoryInput.value = booking.inventory : null;
                    // commentInput ? commentInput.value = booking.comment : null;
                    // backgroundColorInput ? backgroundColorInput.value = booking.backgroundColor : null;
                    // textColorInput ? textColorInput.value = booking.textColor : null;

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
