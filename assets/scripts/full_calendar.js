import {Calendar} from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import {Modal} from 'bootstrap';
import Choices from "choices.js";
import TinyMCE from "./tiny_mce";

function updateBookingDate(info) {
    const start = info.event.startStr;
    const end = info.event.endStr;
    const eventId = info.event.id;

    const updateBookingDatesUrl = "/bookings/update-dates/" + eventId + "/" + start + "/" + end;
    fetch(updateBookingDatesUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data)
        });
}

function createDogChoices() {
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
}

export default function () {
    document.addEventListener('DOMContentLoaded', function () {
        const calendarEl = document.querySelector('.full-calendar');
        if (calendarEl) {
            const bookings = JSON.parse(calendarEl.dataset.bookings);

            const bookingModalEl = document.getElementById('modal-booking');
            const bookingModal = new Modal(bookingModalEl);
            const bookingTitleInput = document.getElementById('modal-booking-label');

            let currentId = null;

            const calendar = new Calendar(calendarEl, {
                plugins: [
                    dayGridPlugin,
                    // timeGridPlugin,
                    // listPlugin,
                    interactionPlugin
                ],
                displayEventTime: false,
                defaultAllDay: false,
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
                    right: 'dayGridMonth'
                },
                select: (info) => {
                    createDogChoices();
                    const deleteButton = document.querySelector('.bookingDelete');
                    if (deleteButton) {
                        deleteButton.classList.add('d-none');
                    }

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
                    updateBookingDate(info);
                },
                eventDrop: (info) => {
                    updateBookingDate(info);
                },
                dateClick: function (info) {
                    createDogChoices();
                    const deleteButton = document.querySelector('.bookingDelete');
                    if (deleteButton) {
                        deleteButton.classList.add('d-none');
                    }
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
                    const submitButton = document.getElementById('booking_submit');
                    submitButton.innerText = 'Edit';
                    currentId = parseInt(info.event.id);

                    const bookings = JSON.parse(calendarEl.dataset.bookings);
                    const deleteButton = document.querySelector('.bookingDelete');
                    if (deleteButton) {
                        deleteButton.classList.remove('d-none');
                    }
                    deleteButton.href = deleteButton.href.replace('toBeReplace', currentId);

                    const editBookingUrl = "/bookings/edit/" + currentId;
                    let editFormResponse = null;

                    fetch(editBookingUrl)
                        .then(response => response.text())
                        .then(data => {
                                editFormResponse = data;
                            }
                        );

                    const booking = bookings.find(booking => booking.id === currentId);
                    console.log(booking)

                    const startInput = document.getElementById('booking_dateStart');
                    const endInput = document.getElementById('booking_dateEnd');
                    const priceInput = document.getElementById('booking_price');
                    const statusInput = document.getElementById('booking_declared');
                    const inventoryInput = document.getElementById('booking_inventory');
                    const commentInput = document.getElementById('booking_comment');
                    const backgroundColorInput = document.getElementById('booking_backgroundColor');
                    const textColorInput = document.getElementById('booking_textColor');
                    const bookingIdInput = document.getElementById('booking_bookingId');

                    const choicesJsElements = document.querySelectorAll('.choices-js');

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

                    startInput ? startInput.value = booking.start : null;
                    endInput ? endInput.value = booking.end : null;
                    priceInput ? priceInput.value = booking.price : null;
                    statusInput ? statusInput.value = booking.status : null;
                    inventoryInput ? inventoryInput.value = booking.inventory : null;
                    commentInput ? commentInput.value = booking.comment : null;
                    backgroundColorInput ? backgroundColorInput.value = booking.backgroundColor : null;
                    textColorInput ? textColorInput.value = booking.textColor : null;
                    bookingIdInput ? bookingIdInput.value = currentId : null;

                    bookingModal.show();
                    bookingModalEl.addEventListener('shown.bs.modal', function () {
                        bookingTitleInput.focus();
                    });
                }
            });
            calendar.render();
        }
    });
}
