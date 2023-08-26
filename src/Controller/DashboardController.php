<?php

namespace App\Controller;

use App\Repository\BookingRepository;
use App\Service\BookingService;
use DateTime;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DashboardController extends AbstractController
{
    #[Route('/dashboard', name: 'dashboard')]
    public function index(Request $request, BookingRepository $bookingRepository, BookingService $bookingService): Response
    {
        $dateStart = new DateTime('first day of January');
        $dateEnd = new DateTime('last day of December');
        $bookings = $bookingRepository->findByDateRange($dateStart, $dateEnd);

        $profits = $bookingService->calculateProfits($bookings);
        $profitsDeclared = $bookingService->calculateProfitsDeclared($bookings);
        $profitsUndeclared = $bookingService->calculateProfitsUndeclared($bookings);

        $profitsDeclaredInt = (int) $bookingService->calculateProfitsDeclared($bookings, false);
        $profitsUndeclaredInt = (int) $bookingService->calculateProfitsUndeclared($bookings, false);
        $totalProfitsInt = $profitsUndeclaredInt + $profitsDeclaredInt;

        return $this->render('dashboard/index.html.twig', [
            'profitsDeclared' => $profitsDeclared,
            'profitsDeclaredInt' => $profitsDeclaredInt,
            'profitsUndeclared' => $profitsUndeclared,
            'profitsUndeclaredInt' => $profitsUndeclaredInt,
            'totalProfits' => $totalProfitsInt,
        ]);
    }
}
