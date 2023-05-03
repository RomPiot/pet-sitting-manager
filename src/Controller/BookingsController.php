<?php

namespace App\Controller;

use App\Form\BookingType;
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
                'start' => $booking->getDateStart()->format('Y-m-d'),
                'end' => $booking->getDateEnd()->format('Y-m-d'),
                'backgroundColor' => $backgroundColor,
                'borderColor' => $backgroundColor,
                'textColor' => $booking->getTextcolor() ?? $dogTextColor,
                'editable' => true,
            ];
        }

        $bookingForm = $this->createForm(BookingType::class);

        return $this->render('bookings/index.html.twig', [
            'bookings' => $bookings,
            'bookingsSerialized' => $bookingsSerialized,
            'bookingForm' => $bookingForm->createView(),
        ]);
    }
}
