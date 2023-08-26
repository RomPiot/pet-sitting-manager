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

        // count all days from 1 january to today
        $dayCount = (int) (new DateTime())->diff($dateStart)->format('%a');

//        $profitsPerMonth = [];
//        for ($i = 1; $i <= $monthCount; $i++) {
//            $dateStart = new DateTime("first day of January + $i month");
//            $dateEnd = new DateTime("last day of January + $i month");
//            $profitsPerMonth[] = [
//                'month' => $dateStart->format('F'),
//                'profits' => $bookingService->calculateProfits($bookingRepository->findByDateRange($dateStart, $dateEnd)),
//            ];
//        }


        $profitsDeclared = $bookingService->calculateProfitsDeclared($bookings);
        $profitsUndeclared = $bookingService->calculateProfitsUndeclared($bookings);

        $profitsDeclaredInt = (int) $bookingService->calculateProfitsDeclared($bookings, false);
        $profitsUndeclaredInt = (int) $bookingService->calculateProfitsUndeclared($bookings, false);
        $totalProfitsInt = $profitsUndeclaredInt + $profitsDeclaredInt;

        $averageMonthProfits = $totalProfitsInt / $dayCount * 30;
        // convert to euros
        $averageMonthProfits = $bookingService->convertIntToEuros($averageMonthProfits);


        return $this->render('dashboard/index.html.twig', [
            'profitsDeclared' => $profitsDeclared,
            'profitsDeclaredInt' => $profitsDeclaredInt,
            'profitsUndeclared' => $profitsUndeclared,
            'profitsUndeclaredInt' => $profitsUndeclaredInt,
            'totalProfits' => $totalProfitsInt,
            'averageMonthProfits' => $averageMonthProfits,
        ]);
    }
}
