<?php

namespace App\Controller;

use App\Form\FilterBookingsType;
use App\Repository\BookingRepository;
use App\Service\BookingService;
use DateTime;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ProfitsController extends AbstractController
{
    #[Route('/profits', name: 'profits')]
    public function index(Request $request, BookingRepository $bookingRepository, BookingService $bookingService): Response
    {
        $dateStart = new DateTime('first day of January');
        $dateEnd = new DateTime('last day of December');
        $bookings = null;

        $filterBookingsForm = $this->createForm(FilterBookingsType::class);
        $filterBookingsForm->handleRequest($request);
        if ($filterBookingsForm->isSubmitted() && $filterBookingsForm->isValid()) {
            $data = $filterBookingsForm->getData();
            $dateStart = $data['dateStart'] ?? $dateStart;
            $dateEnd = $data['dateEnd'] ?? $dateEnd;
            $isDeclared = $data['declared'] ?? false;
            $dogs = $data['dogs'];

            $bookings = $bookingRepository->findByFilterBookinksForm($dateStart, $dateEnd, $isDeclared, $dogs);
        } else {

            $bookings = $bookingRepository->findByDateRange($dateStart, $dateEnd);
        }
        $profits = $bookingService->calculateProfits($bookings);
        $profitsDeclared = $bookingService->calculateProfitsDeclared($bookings);
        $profitsUndeclared = $bookingService->calculateProfitsUndeclared($bookings);

        return $this->render('profits/index.html.twig', [
            'bookings' => $bookings,
            'profits' => $profits,
            'profitsDeclared' => $profitsDeclared,
            'profitsUndeclared' => $profitsUndeclared,
            'filterBookingsForm' => $filterBookingsForm->createView(),
            'dateStart' => $dateStart,
            'dateEnd' => $dateEnd,
        ]);
    }
}
