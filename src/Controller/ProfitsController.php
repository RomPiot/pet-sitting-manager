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

        // total profits
        $totalProfits = $bookingService->calculateProfits($bookings, 'total');
        $totalProfitsDeclared = $bookingService->calculateProfitsDeclared($bookings);
        $totalProfitsUndeclared = $bookingService->calculateProfitsUndeclared($bookings);

        $totalProfitsDeclaredInt =$bookingService->calculateProfitsDeclared($bookings, false);
        $totalProfitsUndeclaredInt =$bookingService->calculateProfitsUndeclared($bookings, false);

        // current profits
        $currentProfits = $bookingService->calculateProfits($bookings, 'current');
        $currentProfitsDeclared = $bookingService->calculateProfitsDeclared($bookings);
        $currentProfitsUndeclared = $bookingService->calculateProfitsUndeclared($bookings);

        $currentProfitsDeclaredInt =$bookingService->calculateProfitsDeclared($bookings, false);
        $currentProfitsUndeclaredInt =$bookingService->calculateProfitsUndeclared($bookings, false);

        // coming profits
        $comingProfits = $bookingService->calculateProfits($bookings, 'coming');
        $comingProfitsDeclared = $bookingService->calculateProfitsDeclared($bookings);
        $comingProfitsUndeclared = $bookingService->calculateProfitsUndeclared($bookings);

        $comingProfitsDeclaredInt =$bookingService->calculateProfitsDeclared($bookings, false);
        $comingProfitsUndeclaredInt =$bookingService->calculateProfitsUndeclared($bookings, false);

        return $this->render('profits/index.html.twig', [
            'filterBookingsForm' => $filterBookingsForm->createView(),
            'dateStart' => $dateStart,
            'dateEnd' => $dateEnd,

            'bookings' => $bookings,

            'totalProfits' => $totalProfits,
            'totalProfitsDeclared' => $totalProfitsDeclared,
            'totalProfitsDeclaredInt' => $totalProfitsDeclaredInt,
            'totalProfitsUndeclared' => $totalProfitsUndeclared,
            'totalProfitsUndeclaredInt' => $totalProfitsUndeclaredInt,

            'currentProfits' => $currentProfits,
            'currentProfitsDeclared' => $currentProfitsDeclared,
            'currentProfitsDeclaredInt' => $currentProfitsDeclaredInt,
            'currentProfitsUndeclared' => $currentProfitsUndeclared,
            'currentProfitsUndeclaredInt' => $currentProfitsUndeclaredInt,

            'comingProfits' => $comingProfits,
            'comingProfitsDeclared' => $comingProfitsDeclared,
            'comingProfitsDeclaredInt' => $comingProfitsDeclaredInt,
            'comingProfitsUndeclared' => $comingProfitsUndeclared,
            'comingProfitsUndeclaredInt' => $comingProfitsUndeclaredInt,

        ]);
    }
}
