<?php

namespace App\Controller;

use App\Form\FilterDashboardType;
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

        $filterDashboardForm = $this->createForm(FilterDashboardType::class);
        $filterDashboardForm->handleRequest($request);

        if ($filterDashboardForm->isSubmitted() && $filterDashboardForm->isValid()) {
            $data = $filterDashboardForm->getData();
            $dateStart = $data['dateStart'] ?? $dateStart;
            $dateEnd = $data['dateEnd'] ?? $dateEnd;
        }

        $bookings = $bookingRepository->findByDateRange($dateStart, $dateEnd);

        $totalProfits = $bookingService->calculateProfits($bookings);

        $dayCount = (int) (new DateTime())->diff($dateStart)->format('%a');

        $profitsDeclared = $bookingService->calculateProfitsDeclared($bookings);
        $profitsUndeclared = $bookingService->calculateProfitsUndeclared($bookings);

        $profitsDeclaredInt = (int) $bookingService->calculateProfitsDeclared($bookings, false);
        $profitsUndeclaredInt = (int) $bookingService->calculateProfitsUndeclared($bookings, false);
        $totalProfitsInt = $profitsUndeclaredInt + $profitsDeclaredInt;

        $averageMonthProfits = $totalProfitsInt / $dayCount * 30;
        $averageMonthProfits = $bookingService->convertIntToEuros($averageMonthProfits);

        $profitsDeclaredPerMonth = $bookingService->calculateProfitsDeclaredPerMonth($bookings);
        $profitsUndeclaredPerMonth = $bookingService->calculateProfitsUndeclaredPerMonth($bookings);

        $profitsDeclaredPerMonth = json_encode($profitsDeclaredPerMonth);
        $profitsUndeclaredPerMonth = json_encode($profitsUndeclaredPerMonth);

        return $this->render('dashboard/index.html.twig', [
            'profitsDeclared' => $profitsDeclared,
            'profitsDeclaredInt' => $profitsDeclaredInt,
            'profitsUndeclared' => $profitsUndeclared,
            'profitsUndeclaredInt' => $profitsUndeclaredInt,
            'totalProfits' => $totalProfits,
            'averageMonthProfits' => $averageMonthProfits,
            'profitsDeclaredPerMonth' => $profitsDeclaredPerMonth,
            'profitsUndeclaredPerMonth' => $profitsUndeclaredPerMonth,
            'filterDashboardForm' => $filterDashboardForm->createView(),
            'dateStart' => $dateStart,
            'dateEnd' => $dateEnd,
        ]);
    }
}
