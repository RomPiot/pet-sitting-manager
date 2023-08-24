<?php

namespace App\Controller;

use App\Entity\Booking;
use App\Form\BookingType;
use App\Repository\BookingRepository;
use App\Repository\DogRepository;
use DateTime;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class BookingsController extends AbstractController
{
    private RequestStack $requestStack;

    public function __construct(RequestStack $requestStack)
    {
        $this->requestStack = $requestStack;
    }

    #[Route('/bookings', name: 'bookings')]
    public function index(BookingRepository $bookingRepository, DogRepository $dogRepository, EntityManagerInterface $entityManager): Response
    {
        $request = $this->requestStack->getCurrentRequest();
        $bookings = $bookingRepository->findAll();
        $bookingsSerialized = [];
        foreach ($bookings as $booking) {
            $bookingName = '';
            $dogBackgroundColor = null;
            $dogTextColor = null;
            foreach ($booking->getDogs() as $dog) {
                $dogBackgroundColor = $dog->getBackgroundColor();
                $dogTextColor = $dog->getTextColor();
                $bookingName .= $dog->getName() . ' & ';
            }
            $backgroundColor = $booking->getBackgroundColor() ?? $dogBackgroundColor;

            $bookingName = substr($bookingName, 0, -3);

            $dogs = [];
            foreach ($booking->getDogs() as $dog) {
                $dogs[] = [
                    'id' => $dog->getId(),
                    'name' => $dog->getName(),
                ];
            }

            $bookingsSerialized[] = [
                'id' => $booking->getId(),
                'title' => $bookingName,
                'start' => $booking->getDateStart()->format('Y-m-d'),
                'end' => $booking->getDateEnd()->format('Y-m-d'),
                'backgroundColor' => $backgroundColor,
                'borderColor' => $backgroundColor,
                'textColor' => $booking->getTextcolor() ?? $dogTextColor,
                'price' => $booking->getPrice(),
                'inventory' => $booking->getInventory(),
                'comment' => $booking->getComment(),
                'dogs' => $dogs,
                'editable' => true,
            ];
        }

        $booking = new Booking();
        $bookingForm = $this->createForm(BookingType::class, $booking);

        $bookingForm->handleRequest($request);

        if ($bookingForm->isSubmitted() && $bookingForm->isValid()) {
            $booking = $bookingForm->getData();
            $bookingData = $request->request->all()['booking'];
            $bookingId = $bookingData['bookingId'];
            $existingBooking = $bookingRepository->findOneBy([
                'id' => $bookingId,
            ]);
            if ($existingBooking) {
                $bookingToEdit = $existingBooking;
                $bookingToEdit->setDateStart($booking->getDateStart());
                $bookingToEdit->setDateEnd($booking->getDateEnd());
                $bookingToEdit->setPrice($booking->getPrice());
                $bookingToEdit->setInventory($booking->getInventory());
                $bookingToEdit->setComment($booking->getComment());
                $bookingToEdit->setBackgroundColor($booking->getBackgroundColor());
                $bookingToEdit->setTextColor($booking->getTextColor());
                $bookingToEdit->setDeclared($booking->isDeclared());
                $bookingToEdit->setDogs($booking->getDogs());
                $booking = $bookingToEdit;

                if ($booking->getDogs()->count() === 0) {
                    $this->addFlash('danger', 'You must select at least one dog');
                    return $this->redirectToRoute('bookings');
                }

                $this->addFlash('success', 'Booking updated successfully');
            } else {
                if ($booking->getDogs()->count() === 0) {
                    $this->addFlash('danger', 'You must select at least one dog');
                    return $this->redirectToRoute('bookings');
                }

                $this->addFlash('success', 'Booking created successfully');
            }

            $entityManager->persist($booking);
            $entityManager->flush();
            return $this->redirectToRoute('bookings');
        }


        return $this->render('bookings/index.html.twig', [
            'bookings' => $bookings,
            'bookingsSerialized' => $bookingsSerialized,
            'bookingForm' => $bookingForm->createView(),
        ]);
    }

    #[
        Route('/bookings/edit/{booking}', name: 'booking_edit')]
    public function editBooking(Booking $booking, BookingRepository $bookingRepository, DogRepository $dogRepository, EntityManagerInterface $entityManager): Response
    {
        $bookingForm = $this->createForm(BookingType::class, $booking);

        return $this->render('bookings/modal.html.twig', [
            'booking' => $booking,
            'bookingForm' => $bookingForm->createView(),
        ]);
    }

    #[Route('/bookings/delete/{booking}', name: 'booking_delete')]
    public function deleteBooking(Booking $booking, BookingRepository $bookingRepository, DogRepository $dogRepository, EntityManagerInterface $entityManager): Response
    {
        $entityManager->remove($booking);
        $entityManager->flush();
        $this->addFlash('success', 'Booking removed successfully');
        return $this->redirectToRoute('bookings');
    }

    /**
     * @throws Exception
     */
    #[Route('/bookings/update-dates/{booking}/{dateStart}/{dateEnd}', name: 'booking_update_dates')]
    public function updateDatesBooking(Booking $booking, BookingRepository $bookingRepository, DogRepository $dogRepository, EntityManagerInterface $entityManager): Response
    {
        $dateStart = new DateTime($this->requestStack->getCurrentRequest()->get('dateStart'));
        $dateEnd = new DateTime($this->requestStack->getCurrentRequest()->get('dateEnd'));
        $booking->setDateStart($dateStart);
        $booking->setDateEnd($dateEnd);
        $entityManager->persist($booking);
        $entityManager->flush();
        $this->addFlash('success', 'Booking dates updated successfully');

        return $this->json([
            'success' => true,
        ]);
    }
}
