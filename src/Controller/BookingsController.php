<?php

namespace App\Controller;

use App\Entity\Booking;
use App\Form\BookingType;
use App\Repository\BookingRepository;
use App\Repository\DogRepository;
use Doctrine\ORM\EntityManagerInterface;
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
//        if ($bookingForm->isSubmitted()) {
//            if (!$bookingForm->isValid()) {
//                dd($bookingForm->getErrors(true));
//            }
//        }
        if ($bookingForm->isSubmitted() && $bookingForm->isValid()) {
            // check if booking already exists
            $existingBooking = $bookingRepository->findOneBy([
                'id' => $booking->getId(),
            ]);
            if ($existingBooking) {
                dd('existing booking');
            }
            $entityManager->persist($booking);
            $entityManager->flush();
            $this->addFlash('success', 'Réservation créée avec succès');
            return $this->redirectToRoute('bookings');
        }


        return $this->render('bookings/index.html.twig', [
            'bookings' => $bookings,
            'bookingsSerialized' => $bookingsSerialized,
            'bookingForm' => $bookingForm->createView(),
        ]);
    }

    #[Route('/bookings/edit/{booking}', name: 'booking_edit')]
    public function editBooking(Booking $booking, BookingRepository $bookingRepository, DogRepository $dogRepository, EntityManagerInterface $entityManager): Response
    {
        $bookingForm = $this->createForm(BookingType::class, $booking);

        return $this->render('bookings/modal.html.twig', [
            'booking' => $booking,
            'bookingForm' => $bookingForm->createView(),
        ]);
    }
}
