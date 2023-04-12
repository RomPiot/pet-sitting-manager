<?php

namespace App\Controller;

use App\Repository\BookingRepository;
use App\Repository\DogRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class BookingsController extends AbstractController
{
    #[Route('/bookings', name: 'bookings')]
    public function index(BookingRepository $bookingRepository, DogRepository $dogRepository, EntityManagerInterface $entityManager): Response
    {
//        $booking = new Booking();
//        $booking->setDateStart(new DateTime('2023-04-03 12:00:00'));
//        $booking->setDateEnd(new DateTime('2023-04-12 13:00:00'));
//        $booking->setPrice(1000);
//        $booking->addDog($dogRepository->find(1));
//        $entityManager->persist($booking);
//        $entityManager->flush();

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
            $bookingsSerialized[] = [
                'id' => $booking->getId(),
                'title' => $bookingName,
                'start' => $booking->getDateStart()->format('Y-m-d H:i:s'),
                'end' => $booking->getDateEnd()->format('Y-m-d H:i:s'),
                'backgroundColor' => $backgroundColor,
                'borderColor' => $backgroundColor,
                'textColor' => $booking->getTextcolor() ?? $dogTextColor,
                'editable' => true,
            ];
        }

        return $this->render('bookings/index.html.twig', [
            'bookings' => $bookings,
            'bookingsSerialized' => $bookingsSerialized,
        ]);
    }
}
